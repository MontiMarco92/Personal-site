import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
	return (
		<div
			name="home"
			className="bg-[#0a192f] w-full flex items-center min-h-screen"
		>
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-pink-600 text-2xl">Hey, my name is</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
					Marco Monti
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
					I'm a Full Stack Developer
				</h2>
				<p className="text-[#8892b0] py-4 max-w-[700px] sm:text-xl font-medium">
					Making my way into this exciting field!
				</p>
				<div>
					<button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover-hover:hover:bg-pink-600 hover-hover:hover:border-pink-600 duration-200">
						<Link className="flex" to="projects" smooth={true} duration={500}>
							View Projects
							<span className="hover-hover:group-hover:rotate-90 duration-200">
								<HiArrowNarrowRight size={20} className="ml-3" />
							</span>
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
