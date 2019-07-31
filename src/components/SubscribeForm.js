import React from "react"



class SubscribeForm extends React.Component {
  state = {
		email: "",
	}
	
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
	}
	
  // handleSubmit = event => {
  //   event.preventDefault()
	// 	// alert(`Welcome ${this.state.fullName}!`)
	// 	event.target.reset();
	// }
	
  render() {
    return (
			<form name="subscribe" method="POST" netlify-honeypot="bot-field" data-netlify="true" className="flex flex-col lg:flex-row justify-between items-center border rounded p-2 shadow bg-white text-center">
				<input type="hidden" name="bot-field"/>
				<input
					className="appearance-none border-none rounded w-auto py-1 px-2 text-gray-700 leading-tight text-base focus:outline-none"
					type="email"
					name="emailAddress"
					placeholder="youremail@email.com"
					value={this.state.email}
					onChange={this.handleInputChange}
				></input>
				<button type="submit" className="btn shadow-md mt-10 lg:mt-auto w-full lg:w-auto text-white rounded-sm bg-blue-500">
					Subscribe
				</button>
			</form>
    )
  }
}

export default SubscribeForm;