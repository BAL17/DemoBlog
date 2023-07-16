import BlogsItem from "./BlogsItem";

const Blogs = ({ isBlogs, isCurrentBlog, setCurrentBlog }) => {
  return isBlogs.map((blog) => (
    <BlogsItem
      isBlogs={blog}
      isCurrentBlog={isCurrentBlog}
      setCurrentBlog={setCurrentBlog}
      key={blog.id}
    />
  ));
};

export default Blogs;
