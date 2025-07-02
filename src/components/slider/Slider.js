import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Slider.css"
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import ImageWithSkeleton from "../imageWithSkeleton/ImageWithSkeleton";
import { createCssClass } from "../../utils/utils";


const Slider = ({
    slides = [
      "https://picsum.photos/seed/slide1/800/600",
      "https://picsum.photos/seed/slide2/800/600",
      "https://picsum.photos/seed/slide3/800/600",
    ],
    roundedCorners = true
  }) => {
  

  return (
    <div className={createCssClass("slider-container", roundedCorners ? "borderRadius20" : "")}>
      <Swiper 
        spaceBetween={0} 
        slidesPerView={1} 
        loop={true} 
        draggable={false} 
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        >
        {slides.map((url, idx) => (
          <SwiperSlide key={idx}>
            <div className="slide-wrapper">
              <ImageWithSkeleton src={url} alt={`Slide ${idx + 1}`} className="slide-image"/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;