import React from "react"
import PropTypes from "prop-types"
import Program from "./Program"

// class component
class Slider extends React.Component {
  state = {
    index: 0,
  }

  static propTypes = {
    programs: PropTypes.object,
  }

  changeProperty = i => {
    const index = this.state.index + i
    this.setState({
      index,
    })
  }

  render() {
    const index = this.state.index
    return (
      <React.Fragment>
        <button
          onClick={() => this.changeProperty(-1)}
          disabled={index === 0}
          style={{ fontSize: "32px" }}
        >
          &larr;
        </button>

        <div className="cards-slider">
          <div className="cards-slider-wrapper">
            {this.props.programs.map(i => (
              <Program program={i} />
            ))}
          </div>
        </div>

        <button
          onClick={() => this.changeProperty(1)}
          disabled={index === this.props.programs.length - 1}
          style={{ fontSize: "32px" }}
        >
          &rarr;
        </button>
      </React.Fragment>
    )
  }
}

export default Slider
