import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsFileEarmarkPerson, BsArrowUpCircle } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";
import CV from "../assets/CV.pdf";
import Logo from "../assets/Logol.png";
import Typed from "react-typed";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => {
		setNav(!nav);
	};
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white text-lg">
			<div className="flex items-center">
				<img src={Logo} alt="Logo Image" className="w-[60px]" />
				<Typed
					className="ml-5 font-logo"
					strings={["Marco.Monti_"]}
					typeSpeed={60}
					backSpeed={80}
					loop
				/>
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
				<li className="bg-pink-600 hover-hover:hover:text-pink-600 hover-hover:hover:bg-white duration-150">
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger Menu */}
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>
			<div
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen text-3xl bg-[#0a192f] flex flex-col justify-center items-center"
				}
			>
				<ul>
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
						<Link
							onClick={handleClick}
							to="skills"
							smooth={true}
							duration={500}
						>
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
						<Link
							onClick={handleClick}
							to="contact"
							smooth={true}
							duration={500}
						>
							Contact
						</Link>
					</li>
				</ul>
				{/* Social icons in hamburger menu */}
				<ul className="flex absolute bottom-5 ">
					<li className="w-[60px] h-[60px] flex justify-center bg-blue-700 ">
						<a
							className=" h-full flex flex-col justify-center  text-gray-300"
							href="https://www.linkedin.com/in/marco-montip/"
							target="_blank"
						>
							<FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[60px] h-[60px] flex justify-center bg-[#333333]">
						<a
							className=" h-full flex flex-col justify-center text-gray-300"
							href="https://github.com/MontiMarco92"
							target="_blank"
						>
							<FaGithub size={30} />
						</a>
					</li>
					<li className="w-[60px] h-[60px] flex justify-center bg-[#F24A72]">
						<Link
							className=" h-full flex flex-col justify-center text-gray-300"
							to="contact"
							smooth={true}
							duration={500}
						>
							<FiMail size={30} />
						</Link>
					</li>
					<li className="w-[60px] h-[60px] flex justify-center bg-[#4D4C7D]">
						<a
							className=" h-full flex flex-col justify-center text-gray-300"
							href={CV}
							download="MarcoMonti's_CV"
						>
							<BsFileEarmarkPerson size={30} />
						</a>
					</li>
				</ul>
			</div>

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

			<div className="hidden md:flex fixed bottom-0 left-[50%] -translate-x-[50%] xl:hidden">
				<ul className="flex flex-row mb-[-105px]">
					<li className="w-[60px] h-[160px] inline-block py-3 hover-hover:hover:-translate-y-20  duration-300 bg-blue-700 ">
						<a
							className=" h-full flex flex-col  text-gray-300"
							href="https://www.linkedin.com/in/marco-montip/"
							target="_blank"
						>
							<FaLinkedin size={30} />
							<span className=" rotate-90 pl-3 ">LinkedIn</span>
						</a>
					</li>
					<li className="w-[60px] h-[160px] inline-block py-3 hover-hover:hover:-translate-y-20 duration-300 bg-[#333333]">
						<a
							className=" h-full flex flex-col text-gray-300"
							href="https://github.com/MontiMarco92"
							target="_blank"
						>
							<FaGithub size={30} />
							<span className=" rotate-90 pl-4 ">GitHub</span>
						</a>
					</li>
					<li className="w-[60px] h-[160px] inline-block py-3 hover-hover:hover:-translate-y-20 duration-300 bg-[#F24A72]">
						<Link
							className=" h-full flex flex-col text-gray-300"
							to="contact"
							smooth={true}
							duration={500}
						>
							<FiMail size={30} />
							<span className=" rotate-90 pl-3 ">Email</span>
						</Link>
					</li>
					<li className="w-[60px] h-[160px] inline-block py-3 hover-hover:hover:-translate-y-20 duration-300 bg-[#4D4C7D]">
						<a
							className=" h-full flex flex-col text-gray-300"
							href={CV}
							download="MarcoMonti's_CV"
						>
							<BsFileEarmarkPerson size={30} />
							<span className=" rotate-90 pl-3 ">Resume</span>
						</a>
					</li>
				</ul>
			</div>

			{/* Scroll up arrow */}
			<div className={nav ? "hidden" : "flex fixed bottom-[5%] right-[3%]"}>
				<button>
					{" "}
					<BsArrowUpCircle
						className="text-gray-300 sm:text-4xl text-2xl hover-hover:hover:text-pink-600 hover-hover:hover:animate-bounce duration-200"
						onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
					/>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
