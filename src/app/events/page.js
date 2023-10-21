'use client'
import underDev from "@/app/underDev.json"
import Lottie from "lottie-react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const page = () => {
  return (
    <>
      <Navbar/>
      <h1 className="p-4 text-2xl font-semibold">Events</h1>
      <div className="flex justify-center p-4">
      <Lottie animationData={underDev} loop={true} />
      </div>
      <Footer/>
    </>
  )
}

export default page