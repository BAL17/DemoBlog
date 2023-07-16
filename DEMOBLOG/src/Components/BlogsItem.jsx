const BlogsItems = ({ isBlogs, isCurrentBlog, setCurrentBlog }) => {
  console.log(isBlogs);

  const handleClick = () => {
    setCurrentBlog(isBlogs);
  }
  if (isCurrentBlog) {
    console.log(isCurrentBlog);
    return <div className="currentBlog"> test </div>;
}

  return (
    <div className="blogCard" onClick={handleClick} id={isBlogs.id}>
      <h1>{isBlogs.blogs_title}</h1>
      <p>{isBlogs.blogs_body}</p>
      <h3>{isBlogs.author}</h3>
      <span className="readMeBtn">Read More...</span>
    </div>
  );
};

export default BlogsItems;
