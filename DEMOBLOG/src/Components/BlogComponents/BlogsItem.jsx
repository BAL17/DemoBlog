import {RiDeleteBin6Line} from 'react-icons/ri' 

const BlogsItems = ({ isBlogs, onBlogClick, onBackToHome, setBlogs }) => {
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
        `https://demoblog-4tye.onrender.com/blogs/${isBlogs.id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete blog.");
      } else {
        const getBlogs = async () => {
          const res = await fetch("https://demoblog-4tye.onrender.com/blogs");
          const data = await res.json();
          setBlogs(data);
        };
        getBlogs();
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
          <RiDeleteBin6Line />
        </button>
      </div>
    </>
  );
};

export default BlogsItems;
