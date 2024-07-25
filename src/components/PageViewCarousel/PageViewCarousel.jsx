import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';
import './PageViewCarousel.css';

export function PageViewCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    const handleThumbnailClick = (index) => {
        swiperRef.current.swiper.slideTo(index);
    };

    return (
        <div className='product-view-container'>
            <Swiper
                ref={swiperRef}
                className='product-view-swiper-container'
                modules={[Navigation, Pagination, Keyboard, Autoplay]}
                keyboard={{ clickable: true }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500
                }}
                slidesPerView={1}
                onSlideChange={handleSlideChange}
                initialSlide={activeIndex}
            >
                {[0, 1, 2, 3].map((index) => (
                    <SwiperSlide key={index} className='swiper-slide'>
                        <figure key={activeIndex}>
                            <img src="/public/IMG/White-Sneaker.png" />
                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='thumb-images-container'>
                {[0, 1, 2, 3].map((index) => (
                    <figure 
                        key={index} 
                        className={activeIndex === index ? 'active' : ''}
                        onClick={() => handleThumbnailClick(index)}
                    >
                        <img src="/public/IMG/White-Sneaker.png" />
                    </figure>
                ))}
            </div>
        </div>
    );
}
