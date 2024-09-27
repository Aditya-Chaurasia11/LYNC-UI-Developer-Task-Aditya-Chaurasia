import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss";
import Logo from "../../assets/Logo.png";

function Navbar() {
  const navRef = useRef();
  const [scrolled, setScrolled] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(true);

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

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log(width);

    if (width <= 491) {
      setShow(false);
    }

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="navbar_container">
      <header className={scrolled ? "scrolled" : ""}>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
        <img src={Logo} alt="Logo" />
        <nav ref={navRef}>
          <a href="/#" onClick={showNavbar}>
            Home
          </a>
          <a href="/#" onClick={showNavbar}>
            Documentation
          </a>
          <a href="/#" onClick={showNavbar}>
            Blog
          </a>
          <a href="/#" onClick={showNavbar}>
            LYNC Portal
          </a>
          <a href="/#" onClick={showNavbar}>
            Request a demo
          </a>
          <a className="nav-close-btn" onClick={showNavbar}>
            {" "}
            Close
          </a>
          {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button> */}
        </nav>

        <button className="whiteBgButton">
          {show ? "Get started" : ""}{" "}
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.7474 12L19.1009 11.6464L19.4545 12L19.1009 12.3536L18.7474 12ZM6.74738 12.5C6.47123 12.5 6.24738 12.2761 6.24738 12C6.24738 11.7239 6.47123 11.5 6.74738 11.5V12.5ZM15.1009 7.64645L19.1009 11.6464L18.3938 12.3536L14.3938 8.35355L15.1009 7.64645ZM19.1009 12.3536L15.1009 16.3536L14.3938 15.6464L18.3938 11.6464L19.1009 12.3536ZM18.7474 12.5H6.74738V11.5H18.7474V12.5Z"
              fill="black"
            />
          </svg>
        </button>
      </header>
    </div>
  );
}

export default Navbar;
