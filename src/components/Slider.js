import React from "react"
import PropTypes from "prop-types"
import Program from "./Program"
// import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable"

// class component
class Slider extends React.Component {
  static propTypes = {
    programs: PropTypes.array,
  }

  state = {
    programs: [],
    programOrders: [],
    order: 0,
    index: 1,
  }

  componentDidMount() {
    const programs = this.props.programs
    const programOrders = Array.from(Array(programs.length).keys())
    const index = 0

    this.setState({
      programs,
      programOrders,
      index
    })
  }

  changeSet = i => {
    const newProgramOrders = this.state.programOrders.map(p => {
      p =
        p + i === this.state.programs.length
          ? 0
          : p + i === -1
          ? this.state.programs.length - 1
          : p + i
      return p
    })
    this.setState({
      programOrders: newProgramOrders,
      index: this.state.index + i
    })
  }

  render() {
    const { programs, programOrders, index } = this.state

    return (
      <React.Fragment>
        <div className="flex flex-row justify-center items-center">
          <button
            onClick={() => this.changeSet(1)}
            style={{ fontSize: "56px", zIndex: "5" }}
            className="hidden sm:block"
          >
            &lsaquo;
          </button>

          <div className="container mx-auto">
            <div
              id="scroller"
              className="slider flex flex-row overflow-hidden py-10"
            >
              {programs.map((i, indexcount) => (
                <Program
                  program={i}
                  cardIndex={indexcount}
                  key={i.node.uid}
                  order={programOrders[indexcount]}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => this.changeSet(-1)}
            style={{ fontSize: "56px", zIndex: "5" }}
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
