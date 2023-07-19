// import { BiImageAdd } from "react-icons/bi";
import { useState } from "react";

const CreateBlogForm = ({ handleNewBlogClick, onHandleNewBlogHomeClick, setBlogs }) => {
  const [text, setText] = useState({
    author: "",
    blogs_title: "",
    blogs_body: "",
  });

  const handleBackClick = () => {
    onHandleNewBlogHomeClick();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  //!!!POST REQUEST
  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://demoblog-4tye.onrender.com/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(text),
      });

      if (!response.ok) {
        throw new Error("Failed to add blog.");
      }

      const data = await response.json();

      // const res = await fetch("https://demoblog-4tye.onrender.com/blogs");
      // const getData = await res.json();
      // setBlogs(...getData);
      
      handleBackClick();
    } catch (error) {
      console.error(error);
      // alert("Failed to add task. Please try again.");
    }
  };

  return (
    <>
      <div className="formContainer">
        <form action="/blogs" method="post" onSubmit={handleSumbit}>
          <h2>Blog Title</h2>
          <input
            className="forminput"
            type="text"
            placeholder="Blog Title"
            name="blogs_title"
            onChange={handleChange}
            value={text.blogs_title}
          />
          <h2>Blog Body</h2>
          <input
            className="forminput"
            type="text"
            placeholder="Blog Body"
            name="blogs_body"
            onChange={handleChange}
            value={text.blogs_body}
          />
          <h2>Author</h2>
          <input
            className="forminput"
            type="text"
            placeholder="Author"
            name="author"
            onChange={handleChange}
            value={text.author}
          />

          <button type="sumbit" id="formBtn">Sumbit Post</button>
        </form>
        <button className="returnFormBtn" onClick={handleBackClick}>
          Back
        </button>
      </div>
    </>
  );
};

export default CreateBlogForm;
