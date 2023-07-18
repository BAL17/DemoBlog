import React from "react";
import DisplayBlog from "./DisplayBlog";

const SingleBlog = ({ isCurrentBlog, onBackToHome, isBlogs }) => {
  
  const handleBackClick = () => {
    onBackToHome();
  };

// //!!delete Request
//   const handleDelete = async ({isBlogs}) => {
//     console.log(isBlogs);
//     try {
//       const response = await fetch(`http://localhost:8001/blogs/${isBlogs.id}`, {
//         method: "DELETE",
//       });

//       if (!response.ok) {
//         throw new Error("Failed to delete blog.");
//       } else {
//         handleDisplaySwitch();
//       }
//     } catch (error) {
//       console.error(error);
//       // alert("Failed to add task. Please try again.");
//     }
//   };


  return (
    <div className="singleBlog">
      <h1>{isCurrentBlog.blogs_title}</h1>
      <p>{isCurrentBlog.blogs_body}</p>
      <h3>{isCurrentBlog.author}</h3>
      <button className="returnBtn" onClick={handleBackClick}>
        Back
      </button>
      {/* <button className="deleteBlogBtn" onClick={handleDelete}>
          TEST
        </button> */}
    </div>
  );
};

export default SingleBlog;
