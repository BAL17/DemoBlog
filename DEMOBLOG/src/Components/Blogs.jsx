import BlogsItem from "./BlogsItem";


const Blogs = ({
  isBlogs,
  isCurrentBlog,
  setCurrentBlog,
  onBlogClick
}) => {
  return isBlogs.map((blog) => (
    <BlogsItem
      isBlogs={blog}
      key={blog.id}
      isCurrentBlog={isCurrentBlog}
      setCurrentBlog={setCurrentBlog}
      onBlogClick={onBlogClick}
    />
  ));
};

export default Blogs;
