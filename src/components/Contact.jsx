import React from "react";

const Contact = () => {
	return (
		<div
			name="contact"
			className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4"
		>
			<form action="" className="flex flex-col max-w-[600px] w-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
						Contact
					</p>
					<p className="text-gray-300 py-4">
						Submit the form below and let's have a chat!
					</p>
				</div>
				<input
					className="my-2 p-2 bg-[#F7F7F7]"
					type="text"
					placeholder="Name"
					name="name"
				/>
				<input
					className="my-4 p-2 bg-[#F7F7F7]"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<textarea
					className="bg-[#F7F7F7] p-2 my-2"
					rows="10"
					placeholder="Say Hi!"
				></textarea>
				<button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto flex items-center my-3 duration-300">
					Get in touch
				</button>
				{/* Still missing form handling */}
			</form>
		</div>
	);
};

export default Contact;
