import { BiImageAdd } from "react-icons/bi";

const CreateBlogForm = () => {


  const handleClick = () => {
  
}

  return (
    <>
      <div className="formContainer">
        <form>
          <input type="text" placeholder="Blog Title" />
          <input type="text" placeholder="Blog Body" />
          <input type="text" placeholder="Author" />
          <input type="img" placeholder="Upload Img">
            <BiImageAdd />
          </input>
        </form>
      </div>
    </>
  );
  
  
};

export default CreateBlogForm;
