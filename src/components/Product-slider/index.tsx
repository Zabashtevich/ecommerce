import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import { Slider, Slide, Container, View } from "./styles/product-slider";

SwiperCore.use([Pagination, Navigation]);

export default function ProductSlider() {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        speed={50000}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        onSlideChange={(element) => console.log(element)}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <View
            src={
              "http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <View
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rqa0qTlqnRMFEyixJldit04TIlgOuhRe3lXoVUr1OoPQ8JA6szMdnblP9QY_7az3WXc&usqp=CAU"
            }
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
