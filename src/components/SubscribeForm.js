import React from "react"



const SubscribeForm = () => {

	return (
		<form action="https://www.getdrip.com/forms/195103512/submissions" method="post" data-drip-embedded-form="195103512" className="flex flex-col lg:flex-row justify-between items-center border rounded p-2 shadow bg-white text-center">
	  	<h3 data-drip-attribute="headline" className="hidden"></h3>
  		<div data-drip-attribute="description" className="hidden"></div>
			<input
				className="w-full appearance-none border-none rounded w-auto py-1 px-2 text-gray-700 leading-tight text-base focus:outline-none"
				type="email"
				name="name=fields[email]"
				placeholder="youremail@email.com"
			/>
			<button type="submit" className="btn shadow-md mt-10 lg:mt-auto w-full lg:w-auto text-white rounded-sm bg-blue-500">
				Subscribe
			</button>
		</form>
	)
}

export default SubscribeForm;