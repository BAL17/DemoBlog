const BlogsItems = ({isBlogs}) => {
    console.log(isBlogs)
    
    const handleClick = (e) => {
    console.log(e.currentTarget.id);
  };
    
  return (
    <div className="blogCard" onClick={handleClick} id={isBlogs.id}>
      <h1>{isBlogs.author}</h1>
      <p>{isBlogs.blogs_title}</p>
      <p>{isBlogs.blogs_body}</p>
    </div>
  );
};

export default BlogsItems