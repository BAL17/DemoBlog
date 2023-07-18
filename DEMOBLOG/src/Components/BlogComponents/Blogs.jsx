import BlogsItem from "./BlogsItem";
import PicturesItem from "./PicturesItems";

const Blogs = ({ isBlogs, isCurrentBlog, setCurrentBlog, onBlogClick, isPictures, setCurrentPictures}) => {
  return (
    <>
  
      {/* {isPictures.map((picture) => (
        <PicturesItem
          isPictures={picture}
          key={picture.id}
          isCurrentBlog={isCurrentBlog}
          setCurrentBlog={setCurrentBlog}
          onBlogClick={onBlogClick}
          setCurrentPictures={setCurrentPictures}
  
        />
      ))}; */}
      
      {isBlogs.map((blog) => (
        <BlogsItem
          isBlogs={blog}
          key={blog.id}
          isCurrentBlog={isCurrentBlog}
          setCurrentBlog={setCurrentBlog}
          onBlogClick={onBlogClick}
        />
      )
      )};
  </>
  )
};

export default Blogs;
