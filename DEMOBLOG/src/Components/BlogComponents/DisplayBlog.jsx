import React, { useState, useEffect } from "react";
import CreateBlog from "./CreateBlogForm";

const DisplayBlog = ({ isBlogs, setCurrentBlog, onBlogClick }) => {
  const handleClick = () => {
    onBlogClick(isBlogs);
  };
  //   const onBtnClick = () => {
  //     <CreateBlog />;
  //   };

  //   //* IF WE WANT TO DISPLAY USERS BLOG
  //   return (
  //     <div className="displayBlog" onClick={handleClick} id={isBlogs.id}>
  //       <button className="createButton" onClick={onBtnClick}>
  //         Create Your Own Here!
  //       </button>
  //       <h1>PlaceHolder For Your Blog Title</h1>
  //       <p>PlaceHolder For Your Blog Desc</p>
  //       <h3>PlaceHolder For Your Name</h3>
  //     </div>
  //   );
  // };

  //** IF WE WANT TO DISPLAY JUST A RANDOM BLOG */
  //function to set maxlength
  const truncateText = (str, maxLength) => {
    return str.split(" ").splice(0, maxLength).join(" ");
  };

  const [isRandomBlog, setRandomBlog] = useState(null);

  useEffect(() => {
    // Get a random blog within the isBlogs array
    const randomBlog = Math.floor(Math.random() * isBlogs.length);
    setRandomBlog(isBlogs[randomBlog]);
  }, [isBlogs]);

  if (!isRandomBlog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="displayBlog" onClick={handleClick} id={isBlogs.id}>
      <h1>{isRandomBlog.blogs_title}</h1>
      <p>{truncateText(isRandomBlog.blogs_body, 50)}</p>
      <h3>{isRandomBlog.author}</h3>
    </div>
  );
};

export default DisplayBlog;
