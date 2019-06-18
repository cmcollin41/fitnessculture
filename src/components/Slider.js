import React from "react"
import PropTypes from "prop-types"
import Program from "./Program"
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";

// class component
class Slider extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      programs: this.props.programs,
      order: 0,
      index: 0
    }
  }

  componentDidMount() {
    console.log(this.props.programs);
  }

  static propTypes = {
    programs: PropTypes.object,
  }


  nextSet() {
    const count = this.props.programs.length
    const currentState = this.state

    if (currentState >= count) {
      this.setState({order: (this.state.order = -count)})
    } else if (currentState <= 0) {
      this.setState({order: (this.state.order = 0)})
    } else {
      this.setState({order: (this.state.order + 1 )})
    }
  }

  previousSet() {
    const count = this.props.programs.length
    const currentState = this.state

    if (currentState >= count) {
      this.setState({order: (this.state.order = -count)})
    } else if (currentState <= 0) {
      this.setState({order: (this.state.order = 0)})
    } else {
      this.setState({order: (this.state.order - 1 )})
    }

  }

  render() {
    const { programs, order } = this.state;
    let increment = order;


    return (
      <React.Fragment>
        
      <div className="flex flex-row justify-center items-center">
        <button
          onClick={() => this.previousSet()}
          style={{ fontSize: "56px" }}

          className="hidden sm:block"
        >
          &lsaquo;
        </button>

       

          <div className="container mx-auto">
            <div id="scroller" className="flex flex-row overflow-hidden py-10 transition">
              {programs.map((i, indexcount) => (
                <Program program={i} index={ indexcount } key={i.node.data.uid} order={indexcount + increment} />
              ))}
            </div>
          </div>
        
    
        <button
          onClick={() => this.nextSet()}
          style={{ fontSize: "56px" }}
          className="hidden sm:block"
        >
          &rsaquo;
        </button>
       </div>
      </React.Fragment>
    )
  }
}

export default Slider
