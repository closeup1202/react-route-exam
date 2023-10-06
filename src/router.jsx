import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./routes/Home"
import homeLoader from "./loader/homeLoader"
import ErrorPage from "./error/errorPage"
import ThrowError from "./error/throwError"
import { usersAction } from "./actions/usersAction"
import consoleLoader from "./loader/consoleLoader"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children:[
      { index: true, element: <Home/>, loader: homeLoader },
      { 
        path: "about",
        loader: () => { return "/about" },
        lazy: () => import("./components/menuGateway"),
        children: [
          { index: true, element: <>About</>}, 
          { path: "guide", element: <>Guide</> }, 
          { path: "example", element: <>Example</> }, 
        ]
      },
      { 
        path: "support", 
        loader: () => { return "/support" },
        lazy: () => import("./components/menuGateway"),
        children: [
          { index: true, element: <>Notice</>},
          { path: "faq", element: <>Faq</> },
          { path: "qna", element: <>QnA</> },
          { path: "download", element: <>Download</> },
          { path: "program", element: <>Program</> },
        ]
      },
      { 
        path: "apis", 
        loader: () => { return "/apis" },
        lazy: () => import("./components/menuGateway"),
        children: [
          { index: true, element: <>행정표준코드</>},
          { path: "ldap", element: <>LDAP</> },
          { path: "mobileauth", element: <>공무원 모바일 인증</> },
        ]
      },
      { path: "throw-error", element:<ThrowError />},
    ],
  },
  { path: "subscribe", element: <>Service subscribe</>},
  { 
    path: "signin",
    action: usersAction,
    lazy : () => import("./routes/sign/Signin"),
  },
  { path: "signup", lazy : () => import("./routes/sign/Signup")},
  { path: "sitemap", element: <>Sitemap</>},

  {
    path: "console",
    loader: consoleLoader,
    lazy : () => import("./components/consoleLayout"),
    children: [
      { index: true, element: <>Dashboard</> },
      { path: "api", element: <>API Manage</> },
      { path: "monitoring", element: <>Monitoring</> },
      { path: "statistics", element: <>Statistics</> },
    ]
  },
  { path: "*", element: <>NotFound</>},

])

export { router }