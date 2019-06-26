import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import Program from "./Program"
import 'pure-react-carousel/dist/react-carousel.es.css';
 
class Carousel extends React.Component {

  state = {
    programs: [],
    vSlides: 1
  }


  componentDidMount() {
    const programs = this.props.programs
    let vSlides = this.state.vSlides

    if (window.screen.width < 768) {
      vSlides = 1
    } else if (window.screen.width >= 768 && window.screen.width < 1024 ) {
      vSlides = 2
    } else {
      vSlides = 3
    }

    this.setState({
      programs: programs,
      vSlides: vSlides
    })
  }

  render() {

    const {programs, vSlides} = this.state
    return (
      <CarouselProvider
        className="flex-row justify-center"
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={programs.length}
        visibleSlides={vSlides}
        step={1}
      >

          <Slider className="max-width: 100%">
            {programs.map((i, indexcount) => (
              <Slide index={indexcount}>
                <Program
                  program={i}
                  cardIndex={indexcount}
                  key={i.node.uid}
                  className="flex flex-col justify-center align-center"
                />
              </Slide>
            
            ))}
          </Slider>

          <DotGroup className="text-center" showAsSelectedForCurrentSlideOnly={true}></DotGroup>
      </CarouselProvider>
    )
  }
}

export default Carousel

