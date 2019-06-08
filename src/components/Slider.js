import React from "react"
import Program from './Program'


// class component
class Slider extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        // I'm not sure how to get the programs data from the Index page into the Component and up into state
        properties: programs,
        property: programs.index[0]
      }
    }
  
    nextProperty = () => {
      const newIndex = this.state.property.index+1;
      this.setState({
        property: data.properties[newIndex]
      })
    }
  
    prevProperty = () => {
      const newIndex = this.state.property.index-1;
      this.setState({
        property: data.properties[newIndex]
      })
    }
  
    render() {
      const {property}  = this.state;
      const {programs} = programs;
      const {program} = program;
      return (
        <div className="App">
  
          <button 
            onClick={() => this.nextProperty()} 
            disabled={property.index === data.properties.length-1}
          >Next</button>
          <button 
            onClick={() => this.prevProperty()} 
            disabled={property.index === 0}
          >Prev</button>
  
        {/* Slider  */}
            <div className="flex flex-col lg:flex-row justify-center items-stretch mt-10">
                <Program program={ program } />
            </div>
        </div>
      );
    }
  }
  
  export default Slider;