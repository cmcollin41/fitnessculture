import React from "react"

class Toggle extends React.Component {
	state = {
		on: false,
	}

	toggle = () => {
		this.setState({
				on: !this.state.on
		})
	}

	render() {
		return (
			<div>
				<div  onClick={this.toggle} className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border text-black border-black hover:text-white hover:border-white">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 50 50"><g id="surface1"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z "></path></g></svg>
            </button>
        </div>
			
				{this.state.on && this.props.children}
			</div>
		)
	}
}

export default Toggle