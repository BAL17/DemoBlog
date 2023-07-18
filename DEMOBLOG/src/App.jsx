import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Blogs from "./Components/Blogs";
import SingleBlog from "./Components/SingleBlog";
import DisplayBlog from "./Components/DisplayBlog";

function App() {
  //states 
  const [isBlogs, setBlogs] = useState([]);
  const [isCurrentBlog, setCurrentBlog] = useState(null);
  const [isHomeScreen, setHomeScreen] = useState(true);

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
      const res = await fetch("http://localhost:8001/blogs");
      const data = await res.json();
      setBlogs(data);
    };
    getBlogs();
  }, []);

  //to display home page -> home button and back button
  const handleBackToHome = () => {
    setHomeScreen(true);
    setCurrentBlog(null);
  };
  // displaying blog
  const handleBlogClick = (blog) => {
    setHomeScreen(false);
    setCurrentBlog(blog);
  };


  // return (
  //   <>
  //     <Navbar />
  //     <div className="displaydiv">
  //       <div className="randomBlogCard">
  //         <DisplayBlog isBlogs={isBlogs} />
  //       </div>
  //     </div>

  //     {isCurrentBlog ? (
  //       <div className="container">
  //         <div className="blogContainer">
  //           <SingleBlog isCurrentBlog={isCurrentBlog} />
  //         </div>
  //       </div>
  //     ) : (
  //       <div className="container">
  //         <div className="blogContainer">
  //           <Blogs
  //             isBlogs={isBlogs}
  //             isCurrentBlog={isCurrentBlog}
  //             setCurrentBlog={setCurrentBlog}
  //           />
  //         </div>
  //       </div>
  //     )}
  //   </>
  // );
  return (
    <>
      <Navbar />
      <div className="displaydiv">
        <div className="randomBlogCard">
          <DisplayBlog
            isBlogs={isBlogs}
            onBlogClick={handleBlogClick}
            isCurrentBlog={isCurrentBlog}
            onBackToHome={handleBackToHome}
          />
        </div>
      </div>
      <div className="container">
        {isHomeScreen ? (
          <div className="blogContainer">
            <Blogs
              isBlogs={isBlogs}
              isCurrentBlog={isCurrentBlog}
              setCurrentBlog={setCurrentBlog}
              onBlogClick={handleBlogClick}
            />
          </div>
        ) : (
          <div className="blogContainer">
            <SingleBlog
              isCurrentBlog={isCurrentBlog}
              onBackToHome={handleBackToHome}
            />
          </div>
        )}
      </div>
    </>
  );
}
export default App;
