import { useState, useCallback } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsFileEarmarkPerson, BsArrowUpCircle } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";
import data from "../assets/data.json";
import CV from "../assets/CV.pdf";
import Logo from "../assets/images/Logol.png";
import Typed from "react-typed";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => {
		setNav(!nav);
	};

	const Icon = useCallback(({ iconId }) => {
		const obj = {
			linkedin: FaLinkedin,
			github: FaGithub,
			contact: FiMail,
			cv: BsFileEarmarkPerson,
		};
		return obj[iconId]({ size: 30 });
	}, []);

	return (
		<div className="fixed z-50 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white text-lg">
			<div>
				<Link
					to="home"
					smooth={true}
					duration={500}
					className="flex items-center hover-hover:hover:cursor-pointer"
				>
					<img src={Logo} alt="Logo" className="w-[60px]" />
					<Typed
						className="ml-5 font-logo"
						strings={["Marco.Monti_"]}
						typeSpeed={60}
						backSpeed={80}
						loop
					/>
				</Link>
			</div>

			<ul className="hidden md:flex leading-10">
				{data.navbar.desktop.map((link) => (
					<li
						key={link.id}
						className={
							link.className ??
							"border-b-2 border-transparent hover:border-b-2 hover:border-pink-600 duration-100"
						}
					>
						<Link to={link.id} smooth={true} duration={500}>
							{link.title}
						</Link>
					</li>
				))}
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
					{data.navbar.mobile.map((link) => (
						<li
							className={link.className ?? "py-6 border-b border-pink-600"}
							key={link.id}
						>
							<Link
								onClick={handleClick}
								to={link.id}
								smooth={true}
								duration={500}
							>
								{link.title}
							</Link>
						</li>
					))}
				</ul>

				{/* Social icons in hamburger menu */}
				<ul className="flex absolute bottom-5 ">
					{data.navbar.socialIcons.map((icon) => (
						<li
							className={`w-[60px] h-[60px] flex justify-center ${icon.bgColor}`}
							key={icon.id}
						>
							{!icon.isSectionLink ? (
								<a
									className=" h-full flex flex-col justify-center  text-gray-300"
									href={icon.id === "cv" ? CV : icon.href}
									target="_blank"
									rel="noreferrer"
									download={icon.id === "cv" ? "MarcoMonti's_CV" : undefined}
								>
									<Icon iconId={icon.id} />
								</a>
							) : (
								<Link
									className=" h-full flex flex-col justify-center text-gray-300"
									to={icon.id}
									onClick={handleClick}
									smooth={true}
									duration={500}
								>
									<Icon iconId={icon.id} />
								</Link>
							)}
						</li>
					))}
				</ul>
			</div>

			{/* Social icons */}
			{/* lateral popup */}
			<div className="hidden xl:flex fixed flex-col top-[35%] left-0">
				<ul>
					{data.navbar.socialIcons.map((icon) => (
						<li
							key={icon.id}
							className={`w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300 ${icon.bgColor}`}
						>
							{!icon.isSectionLink ? (
								<a
									className="flex justify-between items-center w-full text-gray-300"
									href={icon.id === "cv" ? CV : icon.href}
									target="_blank"
									rel="noreferrer"
									download={icon.id === "cv" ? "MarcoMonti's_CV" : undefined}
								>
									{icon.title} <Icon iconId={icon.id} />
								</a>
							) : (
								<Link
									className="flex justify-between items-center w-full text-gray-300"
									to={icon.id}
									smooth={true}
									duration={500}
								>
									{icon.title} <Icon iconId={icon.id} />
								</Link>
							)}
						</li>
					))}
				</ul>
			</div>

			{/* social icons - bottom bar */}

			<div className="hidden md:flex fixed bottom-0 left-[50%] -translate-x-[50%] xl:hidden">
				<ul className="flex flex-row mb-[-105px]">
					{data.navbar.socialIcons.map((icon) => (
						<li
							key={icon.id}
							className={`w-[60px] h-[160px] inline-block py-3 hover-hover:hover:-translate-y-20  duration-300 ${icon.bgColor}`}
						>
							{!icon.isSectionLink ? (
								<a
									className="h-full flex flex-col  text-gray-300"
									href={icon.id === "cv" ? CV : icon.href}
									target="_blank"
									rel="noreferrer"
									download={icon.id === "cv" ? "MarcoMonti's_CV" : undefined}
								>
									<Icon iconId={icon.id} />
									<span className=" rotate-90 pl-3 ">{icon.title}</span>
								</a>
							) : (
								<Link
									className="h-full flex flex-col  text-gray-300"
									to={icon.id}
									smooth={true}
									duration={500}
								>
									<Icon iconId={icon.id} />
									<span className=" rotate-90 pl-3 ">{icon.title}</span>
								</Link>
							)}
						</li>
					))}
				</ul>
			</div>

			{/* Scroll up arrow */}
			<div className={nav ? "hidden" : "flex fixed bottom-[5%] right-[3%]"}>
				<button>
					<BsArrowUpCircle
						className="text-gray-300 sm:text-4xl text-3xl hover-hover:hover:text-pink-600 hover-hover:hover:animate-bounce duration-200"
						onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
					/>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
