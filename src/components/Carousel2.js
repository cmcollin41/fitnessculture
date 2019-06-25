import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import Testimonial from "./Testimonial"
import 'pure-react-carousel/dist/react-carousel.es.css';
 
class Carousel2 extends React.Component {

  state = {
    testimonials: [],
    vSlides: 1
  }


  componentDidMount() {
    const testimonials = this.props.testimonials
    let vSlides = this.state.vSlides

    if (window.screen.width < 768) {
      vSlides = 1
    } else if (window.screen.width >= 768 && window.screen.width < 1024 ) {
      vSlides = 2
    } else {
      vSlides = 3
    }

    this.setState({
      testimonials: testimonials,
      vSlides: vSlides
    })
  }

  render() {

    const {testimonials, vSlides} = this.state
    return (
      <CarouselProvider
        className="flex-row justify-center"
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={testimonials.length}
        visibleSlides={vSlides}
        step={1}
      >

          <Slider className="max-width: 100%">
            {testimonials.map((i, indexcount) => (
              <Slide index={indexcount}>
                <Testimonial
                  testimonial={i}
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

export default Carousel2
