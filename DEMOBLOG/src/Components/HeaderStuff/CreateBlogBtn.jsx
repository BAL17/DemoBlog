import { IoCreateOutline } from "react-icons/io5";


const CreateBlogBtn = ({handleCreateBtn}) => {
  const onBtnClick = () => {
    handleCreateBtn()
  };
 
  return (
    <div className="createButton" onClick={onBtnClick}>
      <IoCreateOutline className="Icon" />
      NewBlog!
    </div>
  );
};

export default CreateBlogBtn;
