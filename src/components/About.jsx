import React from "react";

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#F7F5F2] text-[#0a192f]">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-pink-600">
							About
						</p>
					</div>
					<div></div>
				</div>

				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p className="">
							Welcome! Please, stay around and get to know a bit about me.
						</p>
					</div>
					<div>
						<p className="font-medium sm:text-lg">
							I'm a serious and responsible developer with great enthusiasm to
							work and keep on learning. Always looking for the right
							opportunity to grow and thrive in the amazing world of tech. I'm
							passionate about building great apps that help making people's
							lives a bit easier. Get in touch and let's work together!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
