import BlogsItem from "./BlogsItem";

const Blogs = ({isBlogs}) => {

  
    return isBlogs.map((blog) => <BlogsItem isBlogs={blog} key={blog.id} />);
}

export default Blogs