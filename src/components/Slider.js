import React from "react"
import PropTypes from "prop-types"
// import { graphql } from "gatsby"
import Program from "./Program"

// class component
class Slider extends React.Component {
  state = {
    index: 0,
  }

  static propTypes = {
    programs: PropTypes.object,
  }

  componentDidMount() {
    // componentDidMount({ data }) {
    console.log("mounted")
    // const { programs } = programs
    // this.setState({
    //   // I'm not sure how to get the programs data from the Index page into the Component and up into state
    //   properties: programs,
    //   property: programs.index[0],
    // })
  }

  changeProperty = i => {
    const index = this.state.index + i
    this.setState({
      index,
    })
  }

  // nextProperty = () => {
  //   const newIndex = this.state.property.index + 1
  //   this.setState({
  //     property: properties[newIndex],
  //   })
  // }

  // prevProperty = () => {
  //   const newIndex = this.state.property.index - 1
  //   this.setState({
  //     property: properties[newIndex],
  //   })
  // }

  render() {
    const index = this.state.index
    return (
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => this.changeProperty(-1)}
          disabled={index === 0}
          style={{ fontSize: "32px" }}
        >
          &larr;
        </button>

        {/* Slider  */}
        <div
          className="flex flex-col lg:flex-row justify-center items-stretch mt-10"
          style={{ width: "80%" }}
        >
          <Program program={this.props.programs[this.state.index]} />
          {this.props.programs.map(i => (
            <Program program={i} />
          ))}
        </div>

        <button
          onClick={() => this.changeProperty(1)}
          disabled={index === this.props.programs.length - 1}
          style={{ fontSize: "32px" }}
        >
          &rarr;
        </button>
      </div>
    )
  }
}

// export const query = graphql`
//   query SliderQuery {
//     programs: allPrismicProgram {
//       edges {
//         node {
//           uid
//           data {
//             title {
//               text
//             }
//             hero_image {
//               url
//             }
//             lead {
//               text
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default Slider
