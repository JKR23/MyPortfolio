'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import PropTypes from 'prop-types';

export default function ImageSlider({ images, className = '' }) {
   return (
      <Swiper
         modules={[Autoplay]}
         autoplay={{ delay: 4000, disableOnInteraction: false }}
         loop={true}
         className={className}
      >
         {images.map((img, index) => (
            <SwiperSlide key={index}>
               <div className="w-full h-[200px] sm:h-[300px] md:h-[350px] relative rounded-lg overflow-hidden shadow-lg">
                  <img
                     src={img.src}
                     alt={`Slide ${index + 1}`}
                     className="absolute top-0 left-0 w-full h-full object-cover"
                  />
               </div>
            </SwiperSlide>
         ))}
      </Swiper>
   );
}

ImageSlider.propTypes = {
   images: PropTypes.arrayOf(
      PropTypes.shape({
         src: PropTypes.string.isRequired,
      })
   ).isRequired,
   className: PropTypes.string,
};
