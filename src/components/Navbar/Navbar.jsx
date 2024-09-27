import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";

function Navbar() {
  const navRef = useRef();
  const [scrolled, setScrolled] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  // Scroll event listener to change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar_container">
      <header className={scrolled ? "scrolled" : ""}>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
        <img src={Logo} alt="Logo" />
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">Documentation</a>
          <a href="/#">Blog</a>
          <a href="/#">LYNC Portal</a>
          <a href="/#">Request a demo</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>

        <button className="">adsd</button>
      </header>
    </div>
  );
}

export default Navbar;
