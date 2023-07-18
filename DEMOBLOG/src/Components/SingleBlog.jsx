import React from "react";

const SingleBlog = ({ isCurrentBlog, onBackToHome }) => {
  
    const handleBackClick = () => {
        onBackToHome();
  }
  
    return (
    <div className="singleBlog">
      <h1>{isCurrentBlog.blogs_title}</h1>
      <p>{isCurrentBlog.blogs_body}</p>
      <h3>{isCurrentBlog.author}</h3>
      <button className="returnBtn" onClick={handleBackClick}>
        Back
      </button>
    </div>
  );
};

export default SingleBlog;
