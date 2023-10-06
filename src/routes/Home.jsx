import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom"

export default function Home(){

  const data = useLoaderData();

  return(
    <div>
      <h2>Home</h2>
      <Suspense fallback={<p>Loading date...</p>}>
        <Await resolve={data.date} errorElement={<p>Error loading date...</p>}>
            {(date) => <p>Date from loader: {date}</p>}
        </Await>
      </Suspense>
    </div>
  )
}