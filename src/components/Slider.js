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
    index: 0,
  }

  componentDidMount() {
    const programs = this.props.programs
    const programOrders = Array.from(Array(programs.length).keys())

    this.setState({
      programs,
      programOrders,
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
    })
  }

  render() {
    const { programs, programOrders } = this.state

    return (
      <React.Fragment>
        <div className="flex flex-row justify-center items-center">
          <button
            onClick={() => this.changeSet(1)}
            style={{ fontSize: "56px" }}
            className="hidden sm:block"
          >
            &lsaquo;
          </button>

          <div className="container mx-auto">
            <div
              id="scroller"
              className="flex flex-row overflow-hidden py-10 transition"
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
