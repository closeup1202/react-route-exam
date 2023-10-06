import { useRouteError } from "react-router-dom"

export default function ErrorPage(){

  const error = useRouteError();

  return(
    <div>
      <h2>에러 페이지입니다.</h2>
      <p>{error.message}</p>
    </div>
  )
}