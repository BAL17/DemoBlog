import { IoCreateOutline } from "react-icons/io5";
import CreateBlog from "../BlogComponents/CreateBlogForm";

const CreateBlogBtn = () => {
  const onBtnClick = () => {
    <CreateBlog />;
  };

  return (
    <div className="createButton" onClick={onBtnClick}>
      <IoCreateOutline className="Icon" />
      NewBlog!
    </div>
  );
};

export default CreateBlogBtn;
