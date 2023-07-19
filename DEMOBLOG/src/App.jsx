import React, { useState, useEffect } from "react";
import Navbar from "./Components/HeaderStuff/Navbar";
import Blogs from "./Components/BlogComponents/Blogs";
import SingleBlog from "./Components/BlogComponents/SingleBlog";
import DisplayBlog from "./Components/BlogComponents/DisplayBlog";
import CreateBlogForm from "./Components/BlogComponents/CreateBlogForm";

function App() {
  //states for all blogs
  const [isBlogs, setBlogs] = useState([]);
  //current blog they click
  const [isCurrentBlog, setCurrentBlog] = useState(null);
  //return to the home screen
  const [isHomeScreen, setHomeScreen] = useState(true);
  //we want to display the input form only
  const [isNewBlog, setNewBlog] = useState(false);

  // // state for pictures we get from our extra API
  // const [isPictures, setPictures] = useState(Array(25).fill(null));
  //   const[isCurrentPictures, setCurrentPictures] = useState(null);
  // useEffect(() => {
  //   const getPictures = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  //     const data = await res.json();
  //     setPictures(data);
  //   };
  //   getPictures();

  // }, Array(25).fill());

  //useEffect FOR DB BLOGS
  useEffect(() => {
    const getBlogs = async () => {
      const res = await fetch("https://demoblog-4tye.onrender.com/blogs");
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
  //displaying form
  const handleNewBlogClick = () => {
    setHomeScreen(false);
    setNewBlog(true);
  };

  const handleNewBlogHomeClick = () => {
    setHomeScreen(true);
    setNewBlog(null);
  };

  return (
    <>
      <Navbar
        handleBackToHome={handleBackToHome}
        handleNewBlogClick={handleNewBlogClick}
      />
      {isNewBlog ? (
        <div className="container">
          <CreateBlogForm
            setBlogs={setBlogs}
            handleNewBlogClick={handleNewBlogClick}
            onHandleNewBlogHomeClick={handleNewBlogHomeClick}
          />
        </div>
      ) : (
        <>
          <div className="displaydiv">
            <div className="randomBlogCard">
              <DisplayBlog
                isBlogs={isBlogs}
                onBlogClick={handleBlogClick}
                isCurrentBlog={isCurrentBlog}
                setCurrentBlog={setCurrentBlog}
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
                  onBackToHome={handleBackToHome}
                  setBlogs={setBlogs}
                />
              </div>
            ) : (
              <div className="blogContainer">
                <SingleBlog
                  isBlogs={isBlogs}
                  isCurrentBlog={isCurrentBlog}
                  onBackToHome={handleBackToHome}
                />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
export default App;
