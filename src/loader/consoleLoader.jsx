import { redirect } from "react-router-dom";

export default function consoleLoader(){
  const user = sessionStorage.getItem("loginUser")

  if(user === null){
    return redirect("/signin")
  }

  return {
    user
  }
}