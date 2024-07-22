import './HomePageCarousel.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';

export function HomePageCarousel() {
    const images = [
        { "src": "/public/IMG/home-images/home-slide-1.jpeg" },
        { "src": "/public/IMG/home-images/home-slide-2.jpeg" },
        { "src": "/public/IMG/home-images/home-slide-3.jpeg" },
        { "src": "/public/IMG/home-images/home-slide-4.jpeg" },
        { "src": "/public/IMG/home-images/home-slide-5.jpeg" },
        { "src": "/public/IMG/home-images/home-slide-6.jpeg" },
        { "src": "/public/IMG/home-images/home-slide-7.jpeg" },
        { "src": "/public/IMG/home-images/home-slide-8.jpeg" },
    ];

    return (
        <div className='gallery-container'>
            <img className='orgament-svg' src="/public/svgs/Ornament.svg" />
            <Swiper
                className='swiper-container'
                modules={[Pagination, Keyboard, Autoplay]}
                keyboard={{ clickable: true }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500
                }}
                slidesPerView={1}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className='swiper-slide-container'>
                        <div>
                            <span>Melhores ofertas personalizadas</span>
                            <h1>Queima de estoque Nike🔥</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis vitae odit omnis natus itaque optio consequuntur enim autem dolor nam obcaecati, reprehenderit ex placeat quos aspernatur quas? Hic, enim ducimus!
                            </p>
                            <button>Ver ofertas</button>
                        </div>
                        <figure>
                            <img src={image.src} alt="" />
                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
