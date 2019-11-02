import React from "react"



class ContactForm extends React.Component {
  state = {
    name: "",
		email: "",
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
	
  // handleSubmit = event => {
  //   event.preventDefault()
	// 	// alert(`Welcome ${this.state.fullName}!`)
	// 	event.target.reset();
	// }
	
  render() {
    return (
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="w-full">
				<input type="hidden" name="form-name" value="contact" />
				<div className="hidden">
          <label>
            "Don't fill this out"
            <input name="bot-field" />
          </label>
				</div>
				<div class="mb-4">
					<label>
						Name
					</label>
						<input
							type="text"
							name="name"
							placeholder="Full Name"
							className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							value={this.state.name}
							onChange={this.handleInputChange}
						/>
				</div>
				<div class="mb-4">
					<label>
						Email Address
					</label>
          <input
            type="email"
						name="email"
						placeholder="youremail@gmail.com"
						className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={this.state.email}
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
						placeholder="Your message"
						className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={this.state.message}
            onChange={this.handleInputChange}
          />
        </div>
        <button className="btn-lg bg-blue-500 rounded-sm text-white shadow" type="submit">Submit</button>
      </form>
    )
  }
}

export default ContactForm;