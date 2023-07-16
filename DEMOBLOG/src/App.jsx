import React, { useState, useEffect }  from "react"
import Navbar from "./Components/Navbar";
import Blogs from "./Components/Blogs";

function App() {
  //state for blogs we fetch from db
  const [isBlogs, setBlogs] = useState([]);
  const [isCurrentBlog, setCurrentBlog] = useState({})


  //state for pictures we get from our extra API
  // const [isPictures, setPictures] = useState(Array(25).fill(null));
  
  // useEffect(() => {
  //   const getPictures = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  //     const data = await res.json();
  //     setPictures(data);
  //   };
  //   getPictures();
  // }, Array(25).fill(data.url));
  // console.log[isPictures];

  //useEffect FOR DB BLOGS
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
      <Navbar />
      <div className="displaydiv">
        {/* <Blogs /> */}
      </div>
      
      <div className="container">    
          <div className="blogContainer">
          <Blogs
            isBlogs={isBlogs}
            isCurrentBlog={isCurrentBlog}
            setCurrentBlog={setCurrentBlog}
          />
          </div>
      </div>
    </>
  )
}
export default App
