// import { BiImageAdd } from "react-icons/bi";
import { useState } from "react";



const CreateBlogForm = ({ handleNewBlogClick, onHandleNewBlogHomeClick }) => {
  const [text, setText] = useState({
    author: "",
    blog_title: "",
    blog_body: "",
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
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:8001/blogs", {
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
      console.log(data);
      // Clear the input field
      // setText({
      //   author: "",
      //   blog_title: "",
      //   blog_body: "",
      // });

       handleBackClick()
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
            name="blog_title"
            onChange={handleChange}
            value={text.blog_title}
          />
          <h2>Blog Body</h2>
          <input
            className="forminput"
            type="text"
            placeholder="Blog Body"
            name="blog_body"
            onChange={handleChange}
            value={text.blog_body}
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

          <button type="sumbit" id="formBtn" />
        </form>
        <button className="returnFormBtn" onClick={handleBackClick}>
          Back
        </button>
      </div>
    </>
  );
};

export default CreateBlogForm;
