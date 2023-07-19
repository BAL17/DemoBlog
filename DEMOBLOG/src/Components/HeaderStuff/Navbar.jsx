import HomeButton from "./HomeButton";
import ContactButton from "./ContactButton";
import CreateBlogBtn from "./CreateBlogBtn";
import React, {useState} from "react";
import "./navbar.css";

const Navbar = ({ handleBackToHome, handleNewBlogClick }) => {
  const handleCreateBtn = () => {
    handleNewBlogClick();
  };

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
          <HomeButton handleBackToHome={handleBackToHome} />
          <ContactButton />
          <CreateBlogBtn handleCreateBtn={handleCreateBtn} />
        </ul>
        <div className="bottomborder"></div>
      </div>
    </>
  );
};

export default Navbar;
