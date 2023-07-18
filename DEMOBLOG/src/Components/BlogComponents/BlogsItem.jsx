 

const BlogsItems = ({
  isBlogs,
  onBlogClick,
  onBackToHome,
}) => {
  const handleClick = () => {
    onBlogClick(isBlogs);
  };
  const handleDisplaySwitch = () => {
    onBackToHome();
  };

  const truncateText = (str, maxLength) => {
    return str.split(" ").splice(0, maxLength).join(" ");
  };
  //!!delete Request
  const handleDelete = async () => {
    console.log(isBlogs.id);
    try {
      const response = await fetch(
        `http://localhost:8001/blogs/${isBlogs.id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete blog.");
      } else {
        handleDisplaySwitch();
      }
    } catch (error) {
      console.error(error);
      // alert("Failed to add task. Please try again.");
    }
  };

  return (
    <>
      <div className="blogCard" onClick={handleClick} id={isBlogs.id}>
        <h1>{isBlogs.blogs_title}</h1>
        <p>{truncateText(isBlogs.blogs_body, 50)}</p>
        <h3>{isBlogs.author}</h3>
        <button className="deleteBlogBtn" onClick={handleDelete}>
          TEST
        </button>
      </div>
    </>
  );
};

export default BlogsItems;
