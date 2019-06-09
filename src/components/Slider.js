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

        <div className="col">
          <div className={`cards-slider active-slide-1`}>
            <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${1*(100/3)}%)`
                }}>
              {this.props.programs.map((i, indexcount) => (
                <Program program={i} index={ indexcount } key={i.node.data.uid} />
              ))}
          </div>
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
