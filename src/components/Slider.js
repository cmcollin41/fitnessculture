import React from "react"
import Program from './Program'


// class component
const Slider = ({ program }) => {

    constructor(props) {
      super(props);
      this.state = {
        properties: data.properties,
        property: data.properties[0]
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
      const {property} = this.state;
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
  
          <div className="page">
              <section>
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1>Image slideshow React tutorial.</h1>
              </section>
  
              <Program property={property} />
  
          </div>
        </div>
      );
    }
  }
  
  export default Slider;