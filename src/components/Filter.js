import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'


class Filter extends React.Component {

	state = {
		visible: "all"
	}

	filter = (e) => {
		e.preventDefault();
		this.setState({
      visible: e.currentTarget.value
		})
		
	}

	render() {
		const programs = this.props.dataset
		function chosenPrograms(value) {
			if (value === "all") {
				return programs => programs
			}
			else {
				return programs =>  programs.gender === value
			}
		}
		const filteredPrograms = programs.filter(chosenPrograms(this.state.visible));

		return (
			<React.Fragment>
				<div className="flex flex-row justify-center">
					<button className={"rounded border border-black px-4 py-1 mx-3 " + (this.state.visible === "all" ? "filter-active" : "")} onClick={this.filter} value="all">All</button>
					<button className={"rounded border border-black px-4 py-1 mx-3 " + (this.state.visible === "women" ? "filter-active" : "")} onClick={this.filter} value="women">Women</button>
					<button className={"rounded border border-black px-4 py-1 mx-3 " + (this.state.visible === "men" ? "filter-active" : "")} onClick={this.filter} value="men">Men</button>
				</div>
				<div className="flex flex-row flex-wrap px-5 lg:px-auto -mx-3 h-full items-stretch justify-center">
					{filteredPrograms.map((program,i) => {
						return (
							<div key={i} className="w-full md:w-1/2 lg:w-1/4 mx-3 rounded bg-gray-900 mt-10 flex flex-col items-stretch">
								<Img
										alt={program.title}
										className="block h-64 w-full bg-cover bg-center rounded-t text-center overflow-hidden"
										fluid={program.heroImage.asset.fluid}
									
								/>
								<div className="flex flex-col justify-between flex-grow">
									<div className="p-5">
										<h4 className="statement text-2xl" style={{ color: program.colorTwo.hex }}>{program.title}</h4>
										<p className="text-white text-sm mt-2">{program.subtitle}</p>
									</div>
									<div className="p-5">
										<Link to={"/programs/" + program.gender + "/" + program.slug.current} className="uppercase font-bold text-xs text-white border border-white rounded py-2 px-4">See {program.title}</Link>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</React.Fragment>
		);
	}
}

export default Filter;
