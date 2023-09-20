import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
	const form = useRef();
	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		msg: "",
	});
	const [error, setError] = useState({ disableInput: true });

	const validate = (input) => {
		let errors = { disableInput: true };

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
		if (Object.keys(errors).length == 1) {
			errors.disableInput = false;
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
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_PUBLIC_KEY
			)
			.then((result) => {
				console.log(result.text);
				toast.success("The email was sent. I'll be in touch!");
			})
			.catch((error) => {
				console.log(error);
				toast.error("Something went't wrong. Try again!");
			});

		setInputs({
			name: "",
			email: "",
			msg: "",
		});
		setError({ disableInput: true });
	};

	return (
		<div
			name="contact"
			className="bg-[#0a192f] w-full min-h-screen flex justify-center items-center p-4"
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
						// Submit the form below and let's have a chat!
					</p>
				</div>
				<input
					className={
						error.name
							? "my-2 p-2 bg-[#F7F7F7] focus:outline-none focus:ring focus:ring-pink-600"
							: "my-2 p-2 bg-[#F7F7F7] focus:outline-none focus:ring focus:ring-sky-500 "
					}
					type="text"
					placeholder="Name"
					name="name"
					value={inputs.name}
					onChange={onChangeHandler}
					required
				/>
				{error && (
					<span className="text-pink-600 font-medium">{error.name}</span>
				)}
				<input
					className={
						error.email
							? "my-2 p-2 bg-[#F7F7F7] focus:outline-none focus:ring focus:ring-pink-600"
							: "my-2 p-2 bg-[#F7F7F7] focus:outline-none focus:ring focus:ring-sky-500 "
					}
					type="email"
					placeholder="Email"
					name="email"
					value={inputs.email}
					onChange={onChangeHandler}
					required
				/>
				{error && (
					<span className="text-pink-600 font-medium">{error.email}</span>
				)}
				<textarea
					className={
						error.msg
							? "my-4 p-2 bg-[#F7F7F7] focus:outline-none focus:ring focus:ring-pink-600"
							: "my-4 p-2 bg-[#F7F7F7] focus:outline-none focus:ring focus:ring-sky-500 "
					}
					rows="10"
					placeholder="Say Hi!"
					name="msg"
					value={inputs.msg}
					onChange={onChangeHandler}
					required
				></textarea>
				{error && (
					<span className="text-pink-600 font-medium">{error.msg}</span>
				)}
				<input
					type="submit"
					value="Get in touch"
					disabled={error.disableInput}
					className="text-white border-2 cursor-pointer hover:bg-pink-600 hover:border-pink-600 disabled:bg-gray-400 disabled:text-white disabled:border-gray-400 disabled:cursor-not-allowed px-4 py-3 mx-auto flex items-center my-3 duration-300"
				/>
			</form>

			<Toaster
				position="bottom-center"
				reverseOrder={false}
				toastOptions={{
					style: {
						border: "2px solid rgb(219 39 119)",
						padding: "0.5rem 1rem",
						background: "#F7F7F7",
						color: "#0a192f",
					},
				}}
			/>
		</div>
	);
};

export default Contact;
