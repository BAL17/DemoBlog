// DisplayBlog.jsx
import React, { useState, useEffect } from "react";

const DisplayBlog = ({ isBlogs, onBlogClick }) => {
    const handleClick = () => {
        onBlogClick(isBlogs);
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
            <p>{isRandomBlog.blogs_body}</p>
            <h3>{isRandomBlog.author}</h3>
        </div>
    );
}
export default DisplayBlog;
