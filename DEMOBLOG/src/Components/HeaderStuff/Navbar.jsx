import HomeButton from "./HomeButton";
import ContactButton from "./ContactButton";
import CreateBlogBtn from "./CreateBlogBtn";

import "./navbar.css";

const Navbar = ({ handleBackToHome }) => {
  return (
    <>
      <div className="navbar">
        <h1 className="navbarh1">
          Demo
          <span className="blogName">B</span>
          <span className="blogName">l</span>
          <span className="blogName">o</span>
          <span className="blogName">g</span>
        </h1>
        <ul className="navbutton">
          <HomeButton
            handleBackToHome={handleBackToHome}
          />
          <ContactButton />
          <CreateBlogBtn />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
