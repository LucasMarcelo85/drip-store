import './PageViewCarousel.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle'

export function PageViewCarousel() {
    return (
        <div className='product-view-container'>
            <Swiper
                className='product-view-swiper-container'
                modules={[Navigation, Pagination, Keyboard, Autoplay]}
                keyboard={{ clickable: true }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500
                }}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <figure>
                        <img src="/IMG/product-images/produc-image-1.jpeg" />
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img src="/IMG/product-images/produc-image-1.jpeg" />
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img src="/IMG/product-images/produc-image-1.jpeg" />
                    </figure>
                </SwiperSlide>
            </Swiper>

            <div className='thumb-images-container'>
                <figure>
                    <img src="/IMG/product-images/produc-image-1.jpeg" />
                </figure>
                <figure>
                    <img src="/IMG/product-images/produc-image-1.jpeg" />
                </figure>
                <figure>
                    <img src="/IMG/product-images/produc-image-1.jpeg" />
                </figure>
                <figure>
                    <img src="/IMG/product-images/produc-image-1.jpeg" />
                </figure>
            </div>
        </div>

    )
}