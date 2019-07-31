import React from "react"



class ContactForm extends React.Component {
  state = {
    fullName: "",
		emailAddress: "",
		message: "",
	}
	
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
	}
	
  handleSubmit = event => {
    event.preventDefault()
		// alert(`Welcome ${this.state.fullName}!`)
		event.target.reset();
	}
	
  render() {
    return (
      <form name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true" className="w-full" onSubmit={this.handleSubmit}>
				<input type="hidden" name="bot-field"/>
				<div class="mb-4">
					<label>
						Name
					</label>
						<input
							type="text"
							name="fullName"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							value={this.state.fullName}
							onChange={this.handleInputChange}
						/>
				</div>
				<div class="mb-4">
					<label>
						Email Address
					</label>
          <input
            type="email"
						name="emailAddress"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={this.state.emailAddress}
            onChange={this.handleInputChange}
          />
        </div>
				<div class="mb-4">
					<label>
						Message
					</label>
          <textarea
            rows="5"
						name="message"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={this.state.message}
            onChange={this.handleInputChange}
          />
        </div>
        <button className="btn-lg bg-blue-500 rounded-full text-white shadow" type="submit">Submit</button>
      </form>
    )
  }
}

export default ContactForm;