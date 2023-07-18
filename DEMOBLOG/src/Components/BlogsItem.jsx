// import React from "react";

const BlogsItems = ({
  isBlogs,
  onBlogClick
}) => {
  const handleClick = () => {
    onBlogClick(isBlogs);
  };

  return (
    <div className="blogCard" onClick={handleClick} id={isBlogs.id}>
      <h1>{isBlogs.blogs_title}</h1>
      <p>{isBlogs.blogs_body}</p>
      <h3>{isBlogs.author}</h3>
    </div>
  );
};

export default BlogsItems;
