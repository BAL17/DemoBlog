import BlogsItem from "./BlogsItem";
import PicturesItem from "./PicturesItems";

const Blogs = ({
  isBlogs,
  isCurrentBlog,
  setCurrentBlog,
  onBlogClick,
  onBackToHome,
}) => {
  return (
    <>
      {isBlogs.map((blog) => (
        <BlogsItem
          isBlogs={blog}
          key={blog.id}
          isCurrentBlog={isCurrentBlog}
          setCurrentBlog={setCurrentBlog}
          onBlogClick={onBlogClick}
          onBackToHome={onBackToHome}
        />
      ))}
      ;
    </>
  );
};

export default Blogs;
