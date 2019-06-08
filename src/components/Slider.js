import React from "react"
import { graphql } from "gatsby"
import Program from './Program'


// class component
class Slider extends React.Component {

    componentDidMount() {
        const { programs } = programs
        this.state = {
            // I'm not sure how to get the programs data from the Index page into the Component and up into state
            properties: programs,
            property: programs.index[0]
        }
        graphql`
        query SliderQuery {
        programs: allPrismicProgram {
            edges {
            node {
                uid
                data {
                title {
                    text
                }
                hero_image{
                    url
                }
                lead {
                    text
                }
                }
            }
            }
        }
        }
        `
    }
  
    nextProperty = () => {
      const newIndex = this.state.property.index+1;
      this.setState({
        property: properties[newIndex]
      })
    }
  
    prevProperty = () => {
      const newIndex = this.state.property.index-1;
      this.setState({
        property: properties[newIndex]
      })
    }
  
    render() {
      const {property}  = this.state;
      const {properties} = properties;
      return (
        <div className="App">
  
          <button 
            onClick={() => this.nextProperty()} 
            disabled={property.index === properties.length-1}
          >Next</button>
          <button 
            onClick={() => this.prevProperty()} 
            disabled={property.index === 0}
          >Prev</button>
  
        {/* Slider  */}
            <div className="flex flex-col lg:flex-row justify-center items-stretch mt-10">
                <Program program={ property } />
            </div>
        </div>
      );
    }
  }
  
  export default Slider;