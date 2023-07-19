import React from 'react';
import { useMenuContext } from '@/common/context/menu';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/core/styles.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Banner() {
  const { menu } = useMenuContext();

  return (
    <section className='container mobileFull'>
      {menu.frontImage &&
        <AutoplaySlider
          cssModule={AwesomeSliderStyles}
          transitionDelay={300}
          bullets
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
        >
          {menu.frontImage.map((image, index) => (
            <div key={index} data-src={image} data-alt='Banner promocional' />
          ))}
        </AutoplaySlider>}
    </section>
  )
}
