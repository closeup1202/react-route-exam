import SideLayout from "./sideLayout";
import { Outlet, useLoaderData } from "react-router-dom";

export function Component(){

  const data = useLoaderData();
  
  return(
    <div>
      <SideLayout baseUrl={data}/>
      <Outlet/>
    </div>
  )
}