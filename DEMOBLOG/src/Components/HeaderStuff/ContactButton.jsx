import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrContactInfo } from "react-icons/gr";
import { useState, useRef } from "react";

const ContactButton = () => {
  const [contactClicked, setContactClicked] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = (e) => {
    if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
      return;
    }
    setContactClicked(false);
  };

  const handleContactClick = () => {
    setContactClicked(!contactClicked);
  };

  return (
    <div className="contactButton" onClick={handleClick}>
      <GrContactInfo onClick={handleContactClick} /> Contact
      {contactClicked && (
        <div className="dropdownMenu" ref={dropdownRef}>
          <a
            className="box"
            href="https://www.https://www.linkedin.com/in/brandonstegall817/"
          >
            <FaLinkedinIn className="icon" />
            <h4>LinkedIn</h4>
          </a>
          <a className="box" href="https://github.com/BAL17">
            <FaGithub className="icon" />
            <h4>GitHub</h4>
          </a>
        </div>
      )}
    </div>
  );
};

export default ContactButton;
