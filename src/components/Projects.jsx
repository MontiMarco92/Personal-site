import data from "../assets/data.json";

const Projects = () => {
	return (
		<div
			name="projects"
			className="bg-[#F7F5F2] w-full flex items-center min-h-screen text-[#0a192f]"
		>
			<div className="max-w-[1000px] mx-auto px-4 py-10 flex flex-col gap-9 justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-pink-600">
						Projects
					</p>
				</div>

				<div className="flex flex-col">
					<p className="py-3 font-medium sm:text-lg">
						// Check out some of my personal projects
					</p>

					{/* Container */}
					<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
						{/* Grid item */}
						{data.projects.personal.map((project) => (
							<div
								className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto bg-cover bg-center bg-no-repeat h-[250px] ${project.className}`}
							>
								{/* Hover effects */}
								<div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
									<span className="text-2xl font-bold text-white tracking-wider">
										{project.title}
									</span>
									<div className="text-center">
										{project.demoLink && (
											<a href={project.demoLink} target="_blank">
												<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
													Demo
												</button>
											</a>
										)}
										{project.codeLink && (
											<a href={project.codeLink} target="_blank">
												<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
													Code
												</button>
											</a>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="flex flex-col">
					<p className="py-3 font-medium sm:text-lg">
						// These are some of companies' websites I have contributed to
					</p>
					{/* Container */}
					<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
						{/* Grid item */}
						{data.projects.clients.map((project) => (
							<div
								className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto bg-cover bg-center bg-no-repeat h-[250px] ${project.className}`}
							>
								{/* Hover effects */}
								<div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
									<span className="text-2xl font-bold text-white tracking-wider">
										{project.title}
									</span>
									<div className="text-center">
										<a href={project.link} target="_blank">
											<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
												Check their website
											</button>
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
