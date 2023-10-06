import { Form } from "react-router-dom";
import { useCallback, useState } from "react";

export function Component(){

  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = useCallback((e) => {
    const { target: {name, value} } = e;
    if (name === "email"){
      setEmail(value);
    } else if (name === "password"){
      setPassword(value);
    }
  });

  const onSubmit = useCallback(() => {
    try {
      if(isLoading || email === null || password === null) return
      setLoading(true)
    } catch (error) {
      console.log(error)
    } 
  })

  return(
    <div>
      <h2>Signin</h2>
      <Form method="post" onSubmit={onSubmit}>
        <input onChange={onChange} name="email" value={email} placeholder="email" type="email" required/>
        <input onChange={onChange} name="password" value={password} placeholder="password" type="password" required/>
        <button type="submit">{isLoading ? "Loading...." : "Login"}</button>
      </Form>
    </div>
  )
}