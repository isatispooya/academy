/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Box, Grid } from '@mui/material';

export default function MaterialSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    width: '650px',
  };

  return (
    <Grid sx={{ width: '100%', opacity: 1}}>
      <Box>
        <Slider {...settings}>
          <a href="https://sabzlearn.ir/" target="_blank" rel="noopener noreferrer">
            <Box textAlign="center">
              <img
                src="/assets/images/covers/19362672.jpg"
                alt="Slide 1"
                style={{ width: '100%', height: '600px' }}
                

              />
            </Box>
          </a>
          <a href="https://sabzlearn.ir/" target="_blank" rel="noopener noreferrer">
            <Box textAlign="center">
              <img
                src="/assets/images/covers/SL-112119-25250-36.jpg"
                alt="Slide 2"
                style={{ width: '100%', height: '600px' }}
              />
            </Box>
          </a>
          <a href="https://sabzlearn.ir/" target="_blank" rel="noopener noreferrer">
            <Box textAlign="center">
              <img
                src="/assets/images/covers/3223.jpg"
                alt="Slide 3"
                style={{ width: '100%', height: '600px' }}
              />
            </Box>
          </a>
          <a href="https://sabzlearn.ir/" target="_blank" rel="noopener noreferrer">
            <Box textAlign="center">
              <img
                src="/assets/images/covers/6256458.jpg"
                alt="Slide 4"
                style={{ width: '100%', height: '600px' }}
              />
            </Box>
          </a>
        </Slider>
      </Box>
    </Grid>
  );
}
