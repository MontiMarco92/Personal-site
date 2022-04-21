import React from "react";
import HTML from "../assets/html5.svg";
import CSS from "../assets/css3.svg";
import Node from "../assets/node-js.png";
import ReactImg from "../assets/react.svg";
import Redux from "../assets/redux.svg";
import Javascript from "../assets/javascript.svg";
import Postgres from "../assets/postgresql.svg";
import Sequelize from "../assets/sequelize.svg";

const Skills = () => {
	return (
		<div
			name="skills"
			className="w-full h-screen bg-[#0a192f] text-gray-300 flex"
		>
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-pink-600">
						Skills
					</p>
					<p className="py-4 font-medium sm:text-lg">
						// These are some of the technologies I'm familiar with
					</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className="shadow-md shadow-white hover:scale-110 duration-500">
						<img className="w-16 mx-auto" src={HTML} alt="HTML icon" />
						<p className="py-4">HTML</p>
					</div>
					<div className="shadow-md shadow-white hover:scale-110 duration-500">
						<img className="w-16 mx-auto" src={CSS} alt="CSS icon" />
						<p className="py-4">CSS</p>
					</div>
					<div className="shadow-md shadow-white hover:scale-110 duration-500">
						<img
							className="w-16 mx-auto"
							src={Javascript}
							alt="JavaScript icon"
						/>
						<p className="py-4">JavaScript</p>
					</div>
					<div className="shadow-md shadow-white hover:scale-110 duration-500">
						<img className="w-16 mx-auto" src={ReactImg} alt="React icon" />
						<p className="py-4">React</p>
					</div>
					<div className="shadow-md shadow-white hover:scale-110 duration-500">
						<img className="w-16 mx-auto" src={Redux} alt="Redux icon" />
						<p className="py-4">Redux</p>
					</div>
					<div className="shadow-md shadow-white hover:scale-110 duration-500">
						<img className="w-16 mx-auto" src={Node} alt="Node icon" />
						<p className="py-4">NodeJs</p>
					</div>
					<div className="shadow-md shadow-white hover:scale-110 duration-500">
						<img className="w-16 mx-auto" src={Postgres} alt="Postgres icon" />
						<p className="py-4">PostgreSQL</p>
					</div>
					<div className="shadow-md shadow-white hover:scale-110 duration-500">
						<img
							className="w-16 mx-auto"
							src={Sequelize}
							alt="Sequelize icon"
						/>
						<p className="py-4">Sequelize</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
