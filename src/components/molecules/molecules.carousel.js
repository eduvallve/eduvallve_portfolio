import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = ({ children, className = '', autoplay = true, autoplayDelay = 4000, navigation = true, loop = true, ...props }) => {
    const slides = React.Children.toArray(children).filter(Boolean);

    const renderSlides = () => {
        if (slides.length > 0) {
            return slides.map((child, i) => (
                <SwiperSlide key={`slide-${i}`}>{child}</SwiperSlide>
            ));
        }

        // Default slides when no children provided
        return [1, 2, 3].map((n) => (
            <SwiperSlide key={`default-${n}`}>
                <div className="slide">
                    <h3>{`Slide ${n}`}</h3>
                    <p>{`Content for slide ${n}.`}</p>
                </div>
            </SwiperSlide>
        ));
    };

    return (
        <div className={`carousel ${className}`.trim()} {...props}>
            <Swiper
                modules={[Autoplay, Pagination, Navigation, Keyboard]}
                spaceBetween={30}
                slidesPerView={1}
                loop={loop}
                autoplay={autoplay ? { delay: autoplayDelay, disableOnInteraction: false } : false}
                pagination={{ clickable: true }}
                navigation={navigation}
                keyboard={{ enabled: true, onlyInViewport: true }}
                className="my-swiper"
                onSwiper={(swiper) => { if (swiper && swiper.el) swiper.el.tabIndex = 0; }}
            >
                {renderSlides()}
            </Swiper>
        </div>
    );
};

export default Carousel;