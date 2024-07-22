import './HomePageCarousel.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle'

export function HomePageCarousel() {
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
                <SwiperSlide className="swiper-slide-container">

                    <div>
                        <span>Melhores ofertas personalizadas</span>
                        <h1>Queima de stoque Nike🔥</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis vitae odit omnis natus itaque optio consequuntur enim autem dolor nam obcaecati, reprehenderit ex placeat quos aspernatur quas? Hic, enim ducimus!
                        </p>

                        <button>Ver ofertas</button>
                    </div>
                    <figure>
                        <img src="/IMG/White-Sneakers.png" alt="" />
                    </figure>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-container'>

                    <div>
                        <span>Melhores ofertas personalizadas</span>
                        <h1>Queima de stoque Nike🔥</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis vitae odit omnis natus itaque optio consequuntur enim autem dolor nam obcaecati, reprehenderit ex placeat quos aspernatur quas? Hic, enim ducimus!
                        </p>

                        <button>Ver ofertas</button>
                    </div>
                    <figure>
                        <img src="/IMG/White-Sneakers.png" alt="" />
                    </figure>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide-container'>

                    <div>
                        <span>Melhores ofertas personalizadas</span>
                        <h1>Queima de stoque Nike🔥</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis vitae odit omnis natus itaque optio consequuntur enim autem dolor nam obcaecati, reprehenderit ex placeat quos aspernatur quas? Hic, enim ducimus!
                        </p>

                        <button>Ver ofertas</button>
                    </div>
                    <figure>
                        <img src="/IMG/White-Sneakers.png" alt="" />
                    </figure>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}