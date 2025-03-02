import HTML from "../assets/images/html5.svg";
import Node from "../assets/images/node-js.png";
import ReactImg from "../assets/images/react.svg";
import Redux from "../assets/images/redux.svg";
import Javascript from "../assets/images/javascript.svg";
import Postgres from "../assets/images/postgresql.svg";
import Sequelize from "../assets/images/sequelize.svg";
import Sass from "../assets/images/sass.svg";
import NextJs from "../assets/images/nextjs.svg";
import Git from "../assets/images/git.svg";
import Drupal from "../assets/images/drupal.svg";
import Mongo from "../assets/images/mongodb.svg";
import { useCallback } from "react";
import data from "../assets/data.json";

const Skills = () => {
	const SkillIconImg = useCallback(({ iconName }) => {
		const imgObj = {
			html: HTML,
			sass: Sass,
			node: Node,
			react: ReactImg,
			redux: Redux,
			javascript: Javascript,
			postgres: Postgres,
			sequelize: Sequelize,
			nextjs: NextJs,
			git: Git,
			mongo: Mongo,
			drupal: Drupal,
		};
		return (
			<img src={imgObj[iconName]} alt={iconName} className="w-16 mx-auto" />
		);
	}, []);

	return (
		<div
			name="skills"
			className="w-full flex items-center min-h-screen bg-[#0a192f] text-gray-300"
		>
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-pink-600">
						{"Skills"}
					</p>
					<p className="py-4 font-medium sm:text-lg">
						{"// These are some of the technologies I'm familiar with"}
					</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					{data.skills.map((skill) => (
						<div
							key={skill.id}
							className="shadow-md shadow-white hover:scale-110 duration-500"
						>
							<SkillIconImg iconName={skill.href} />
							<p className="py-4">{skill.title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
