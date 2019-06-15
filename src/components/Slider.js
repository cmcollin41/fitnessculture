import React from "react"
import PropTypes from "prop-types"
import Program from "./Program"

// class component
class Slider extends React.Component {

  static propTypes = {
    programs: PropTypes.object,
  }

  setState(indexcount) {
    let state = indexcount
    return state
  }

  setOrder(indexcount) {
    // const count = this.props.programs.length

    let order = indexcount

    // let left = --order


    // if (left < 0) {
    //   left = count - 1
    // } else if (left >= count){
    //   left = 0
    // }
    return order
  }

  render() {
    return (
      <React.Fragment>
       
        {/* <button
          onClick={() => this.setOrder(indexcount)}
          style={{ fontSize: "32px" }}
        >
          &larr;
        </button> */}

       
        <div>
          <div id="scroller" className="flex flex-row overflow-hidden py-10">
            {this.props.programs.map((i, indexcount) => (
              <Program program={i} index={ indexcount } key={i.node.data.uid} order={ this.setState(indexcount) } />
            ))}
          </div>
        </div>
        
    

        {/* <button
          onClick={() => this.changeProperty(1)}
          disabled={index === this.props.programs.length - 1}
          style={{ fontSize: "32px" }}
        >
          &rarr;
        </button> */}
       
      </React.Fragment>
    )
  }
}

export default Slider
