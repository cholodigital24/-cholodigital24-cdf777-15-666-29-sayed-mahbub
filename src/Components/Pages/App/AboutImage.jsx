// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import slider images
import aboutImage1 from "../../../assets/slider_image.jpg";
import aboutImage2 from "../../../assets/slider_image1.jpg";
import aboutImage3 from "../../../assets/slider_image2.jpg";
import aboutImage4 from "../../../assets/slider_image3.jpg";
import aboutImage5 from "../../../assets/slider_image4.jpg";
import aboutImage6 from "../../../assets/slider_image5.jpg";

const slides = [
  { id: 1, image: aboutImage1, alt: "Slider 1" },
  { id: 2, image: aboutImage2, alt: "Slider 2" },
  { id: 3, image: aboutImage3, alt: "Slider 3" },
  { id: 4, image: aboutImage4, alt: "Slider 4" },
  { id: 5, image: aboutImage5, alt: "Slider 5" },
  { id: 6, image: aboutImage6, alt: "Slider 6" },
];

export default function App() {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="swiper-slide">
            <div className="h-full w-full flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
