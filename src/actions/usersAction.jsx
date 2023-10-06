import { redirect } from "react-router-dom";

const users = [
  {
   id: 1, 
   email: "admin@naver.com",
   password: "admin"
  },
  {
   id: 2, 
   email: "closeup1202@naver.com",
   password: "123"
  },
  {
   id: 3, 
   email: "vtwgeonhong@naver.com",
   password: "123"
  },
]

const usersAction = async ({request}) => {
  switch (request.method){
    case "POST": {

      await new Promise(resovle => setTimeout(resovle, 2000));

      const formData = await request.formData();
      const email = formData.get("email");
      const password = formData.get("password");

      const loginUser = users.find((user) => 
        user.email === email && user.password === password
      )

      if(!loginUser){
        return redirect("/signin")
      }
      
      sessionStorage.setItem("loginUser", loginUser.email);
      return redirect("/console");
    }
    default: {
      throw new Response("", {status : 405});
    }
  }
}

export { usersAction }