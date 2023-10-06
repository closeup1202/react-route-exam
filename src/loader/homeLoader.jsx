import { defer } from "react-router-dom";

export default function homeLoader(){
  const date = new Promise(resolve => 
    setTimeout(() => resolve(new Date().toISOString()), 2000)
  );

  return defer({
    date
  })
}