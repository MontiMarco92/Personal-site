import React from "react";
import DoggopediaImg from "../assets/landingPageDogs.png";
import ATRImg from "../assets/homeClientATR.png";
import WPortalImg from "../assets/WavePortal.png";

const Projects = () => {
	return (
		<div
			name="projects"
			className="bg-[#F7F5F2] w-full md:h-screen text-[#0a192f]"
		>
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-pink-600">
						Projects
					</p>
					<p className="py-4 font-medium sm:text-lg">
						// Check out some of my recent work
					</p>
				</div>

				{/* Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* Grid item */}
					<div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto bg-Netflix bg-cover bg-center bg-no-repeat h-[250px] hover:bg-NetflixGradient">
						{/* Hover effects */}
						<div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
							<span className="text-2xl font-bold text-white tracking-wider">
								Netflix Clone
							</span>
							<div className="text-center">
								<a href="https://netflix-clone-mm.vercel.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/MontiMarco92/Netflix-Clone"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					<div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto bg-ATR bg-cover bg-center bg-no-repeat h-[250px] hover:bg-ATRgradient">
						{/* Hover effects */}
						<div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
							<span className="text-2xl font-bold text-white tracking-wider">
								ATR Computacion
							</span>
							<div className="text-center">
								{/* <a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a> */}
								<a
									href="https://github.com/MontiMarco92/client-pf-e-commerce"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					<div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto bg-Dog bg-cover bg-center bg-no-repeat h-[250px] hover:bg-DogGradient">
						{/* Hover effects */}
						<div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
							<span className="text-2xl font-bold text-white tracking-wider">
								Doggopedia
							</span>
							<div className="text-center">
								<a href="https://pi-doggopedia-fe.vercel.app/" target="_blank">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/MontiMarco92/PI-Doggopedia"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					<div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto bg-WP bg-cover bg-center bg-no-repeat h-[250px] hover:bg-WPgradient">
						{/* Hover effects */}
						<div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
							<span className="text-2xl font-bold text-white tracking-wider">
								WavePortal
							</span>
							<div className="text-center">
								<a
									href="https://waveportal-web3-chi.vercel.app/"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/MontiMarco92/wavePortalContract-web3"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
