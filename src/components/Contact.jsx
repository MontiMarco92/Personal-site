import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();
	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		msg: "",
	});
	const [error, setError] = useState();

	const validate = (input) => {
		let errors = {};

		if (!input.name) {
			errors.name = "Name is required";
		} else if (!/^(?![\s.]+$)[a-zA-Z\s]*$/g.test(input.name)) {
			errors.name = "Name is invalid - Only letters are valid";
		}
		if (!input.email) {
			errors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(input.email)) {
			errors.email = "Email is invalid";
		}
		if (!input.msg) {
			errors.msg = "Message is required";
		}
		return errors;
	};

	const onChangeHandler = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});

		setError(
			validate({
				...inputs,
				[e.target.name]: e.target.value,
			})
		);
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_9bt9sgf",
				"template_9wl809n",
				form.current,
				"TAOT7DKjRzOjIKCk8"
			)
			.then((result) => {
				console.log(result.text);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div
			name="contact"
			className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4"
		>
			<form
				ref={form}
				onSubmit={sendEmail}
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
						Contact
					</p>
					<p className="text-gray-300 py-4 font-medium sm:text-lg">
						Submit the form below and let's have a chat!
					</p>
				</div>
				<input
					className="my-2 p-2 bg-[#F7F7F7]"
					type="text"
					placeholder="Name"
					name="name"
					value={inputs.name}
					onChange={onChangeHandler}
					required
				/>
				{error && <span className="text-pink-600">{error.name}</span>}
				<input
					className="my-4 p-2 bg-[#F7F7F7]"
					type="email"
					placeholder="Email"
					name="email"
					value={inputs.email}
					onChange={onChangeHandler}
					required
				/>
				{error && <span className="text-pink-600">{error.email}</span>}
				<textarea
					className="bg-[#F7F7F7] p-2 my-2"
					rows="10"
					placeholder="Say Hi!"
					name="message"
					value={inputs.msg}
					onChange={onChangeHandler}
					required
				></textarea>
				{error && <span className="text-pink-600">{error.msg}</span>}
				<input
					type="submit"
					value="Get in touch"
					disabled={error ? true : false}
					className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto flex items-center my-3 duration-300"
				/>
			</form>
		</div>
	);
};

export default Contact;
