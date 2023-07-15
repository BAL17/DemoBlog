import React, { useState, useEffect }  from "react"
import Navbar from "./Components/Navbar";
import Blogs from "./Components/Blogs";




function App() {
  //state for blogs we fetch from db
  const [isBlogs, setBlogs] = useState([]);
  //state for pictures we get from our extra API
  const [isPictures, setPictures] = useState([]);
  
  useEffect(() => {
    const getBlogs = async () => {
      const res = await fetch("http://localhost:8001/blogs")
      const data = await res.json()
      setBlogs(data)
    }
    getBlogs()
  },[])
  
  return (
    <>
      <div className="container" >
        <h1> TESTING </h1>
        <Navbar />
        <Blogs isBlogs={isBlogs} />
      </div>
    </>
  )
}
export default App
