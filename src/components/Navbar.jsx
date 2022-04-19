import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsFileEarmarkPerson, BsArrowUpCircle } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";
import CV from "../assets/CV.pdf";
import Logo from "../assets/Logol.png";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => {
		setNav(!nav);
	};
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white text-lg">
			<div>
				<img src={Logo} alt="Logo Image" className="w-[60px]" />
			</div>

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
				<li className="bg-pink-600 hover:text-pink-600 hover:bg-white duration-150">
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
						: "absolute top-0 left-0 w-full h-screen text-3xl bg-[#0a192f] flex flex-col justify-center items-center"
				}
			>
				<li className="py-6 border-b border-pink-600">
					<Link onClick={handleClick} to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="py-6 border-b border-pink-600">
					<Link onClick={handleClick} to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="py-6 border-b border-pink-600">
					<Link onClick={handleClick} to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="py-6 border-b border-pink-600">
					<Link
						onClick={handleClick}
						to="projects"
						smooth={true}
						duration={500}
					>
						Projects
					</Link>
				</li>
				<li className="py-6">
					<Link onClick={handleClick} to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Social icons */}
			{/* lateral popup */}
			<div className="hidden xl:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700 ">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://www.linkedin.com/in/marco-montip/"
							target="_blank"
						>
							LinkedIn <FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://github.com/MontiMarco92"
							target="_blank"
						>
							GitHub <FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F24A72]">
						<Link
							className="flex justify-between items-center w-full text-gray-300"
							to="contact"
							smooth={true}
							duration={500}
						>
							Email <FiMail size={30} />
						</Link>
					</li>
					<li className="w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4D4C7D]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href={CV}
							download="MarcoMonti's_CV"
						>
							Resume <BsFileEarmarkPerson size={30} />
						</a>
					</li>
				</ul>
			</div>

			{/* social icons - bottom bar */}

			<div className="hidden md:flex fixed bottom-[30%] left-[50%] xl:hidden">
				<ul className="flex flex-row">
					<li className="w-[60px] h-[130px] flex mb-[-100px] hover:mb-[-10px] duration-300 bg-blue-700 ">
						<a
							className="flex flex-col justify-centerbetween w-full text-gray-300"
							href="https://www.linkedin.com/in/marco-montip/"
							target="_blank"
						>
							<FaLinkedin size={30} />
							<span className="rotate-90">LinkedIn</span>
						</a>
					</li>
					<li className="w-[60px] h-[160px] flex mt-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://github.com/MontiMarco92"
							target="_blank"
						>
							GitHub <FaGithub size={30} />
						</a>
					</li>
					<li className="w-[60px] h-[160px] flex mt-[-100px] hover:ml-[-10px] duration-300 bg-[#F24A72]">
						<Link
							className="flex justify-between items-center w-full text-gray-300"
							to="contact"
							smooth={true}
							duration={500}
						>
							Email <FiMail size={30} />
						</Link>
					</li>
					<li className="w-[60px] h-[160px] flex mt-[-100px] hover:ml-[-10px] duration-300 bg-[#4D4C7D]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href={CV}
							download="MarcoMonti's_CV"
						>
							Resume <BsFileEarmarkPerson size={30} />
						</a>
					</li>
				</ul>
			</div>
			{/* Scroll up arrow */}
			<div className={nav ? "hidden" : "flex fixed bottom-[5%] right-[3%]"}>
				<button>
					{" "}
					<BsArrowUpCircle
						className="text-gray-300 sm:text-4xl text-2xl hover:text-pink-600 hover:animate-bounce duration-200"
						onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
					/>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
