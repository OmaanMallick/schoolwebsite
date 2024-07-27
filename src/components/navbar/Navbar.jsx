import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		
		<header>
			<a href="/Home">
            <img src={logo} alt="logo" className="h-[3rem] w-[3.5rem]" />
			</a>
			<nav ref={navRef}>
				<a href="/Home">Home</a>
				<a href="/AboutUs">AboutUs</a>
				<a href="/Academics">Academics</a>
				<a href="/Admissions">Admissions</a>
                <a href="/Faculty">Faculty</a>
                <a href="/Students">Students</a>
                <a href="/Gallery">Gallery</a>
                <a href="/ContactUs">Contact Us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
             <div className="navbar-icons">
          <a href="/#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="/#" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="/#">
            <FaEnvelope className="icon" />
          </a>
        </div>
		</header>

		
		
        
	);
}

export default Navbar;