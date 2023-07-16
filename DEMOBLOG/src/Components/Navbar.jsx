import HomeButton from "./HomeButton";
import ContactButton from "./ContactButton";

const Navbar = () => {
    return (
      <>
        <div className="navbar"> 
            <input className="searchbar" type="text" placeholder="Search..."></input>
          <h1 className="navbarh1">
            Demo
            <span className="blogName">B</span>
            <span className="blogName">l</span>
            <span className="blogName">o</span>
            <span className="blogName">g</span>
          </h1>
          <ul className="">
            <HomeButton />
            <ContactButton />
            {/* <PostNewBlog />  */}
          </ul>
        </div>
      </>
    );
};


export default Navbar;