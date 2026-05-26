import React from 'react'
import Button from "../components/ui/Button.tsx"

const NotFound = () => {
  return (
    // This is a simple 404 Not Found page. You can customize it as needed.
    <div className="h-screen flex flex-col justify-center items-center ">
      <h1 className="text-orange-600 text-7xl font-semibold mb-4">404 </h1>
      <h3 className=" text-lg">Not Found !!! </h3>
      <p className="text-base text-zinc-600">The page you are looking for does not exist.</p>
      <Button className="bg-violet-500 text-white px-6 py-1 rounded-full mt-2 hover:bg-violet-400 hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-150">Go Back</Button>
    </div>
  )
}

export default NotFound