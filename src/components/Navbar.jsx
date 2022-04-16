import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsFileEarmarkPerson, BsArrowUpCircle } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => {
		setNav(!nav);
	};
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ffffff] text-[#0a192f] text-lg">
			<div>logo</div>

			<ul className="hidden md:flex leading-10">
				<li className="border-b-2 border-transparent hover:border-b-2 hover:border-pink-600 duration-100">
					<Link to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="border-b-2 border-transparent hover:border-b-2 hover:border-pink-600 duration-100">
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="border-b-2 border-transparent hover:border-b-2 hover:border-pink-600 duration-100">
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="border-b-2 border-transparent hover:border-b-2 hover:border-pink-600 duration-100">
					<Link to="projects" smooth={true} duration={500}>
						Projects
					</Link>
				</li>
				<li className="bg-pink-600 hover:text-white duration-150">
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger Menu */}
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>
			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
				}
			>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="projects"
						smooth={true}
						duration={500}
					>
						Projects
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Social icons */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700 ">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="/"
						>
							LinkedIn <FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="/"
						>
							GitHub <FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F24A72]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="/"
						>
							Email <FiMail size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4D4C7D]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="/"
						>
							Resume <BsFileEarmarkPerson size={30} />
						</a>
					</li>
				</ul>
			</div>

			<div className={nav ? "hidden" : "flex fixed bottom-[5%] right-[3%]"}>
				<button>
					{" "}
					<BsArrowUpCircle
						className="text-gray-300 sm:text-4xl text-2xl hover:text-pink-600 duration-200"
						onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
					/>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
