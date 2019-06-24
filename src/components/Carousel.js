import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Program from "./Program"
import 'pure-react-carousel/dist/react-carousel.es.css';
 
export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
            {programs.map((i, indexcount) => (
              <Slide index={0}>
                <Program
                  program={i}
                  cardIndex={indexcount}
                  key={i.node.uid}
                  order={programOrders[indexcount]}
                />
              </Slide>
            ))}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}

