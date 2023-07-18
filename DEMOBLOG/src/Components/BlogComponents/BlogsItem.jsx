 
const BlogsItems = ({
  isBlogs,
  onBlogClick
}) => {
  const handleClick = () => {
    onBlogClick(isBlogs);
  };

    const truncateText = (str, maxLength) => {
      return str.split(" ").splice(0,maxLength).join(" ");
  }; 
  return (
    <>
      <div className="blogCard" onClick={handleClick} id={isBlogs.id}>
        <h1>{isBlogs.blogs_title}</h1>
        <p>{truncateText(isBlogs.blogs_desc, 50)}</p>
        <h3>{isBlogs.author}</h3>
      </div>
    </>
  );
};

export default BlogsItems;
