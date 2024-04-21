import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Keyboard, Mousewheel } from "swiper";
import { useSelector } from "react-redux";
import "swiper/css"; // Import main swiper CSS
import "swiper/css/navigation"; // Import navigation CSS
import "swiper/css/pagination"; // Import pagination CSS
import "swiper/css/keyboard"; // Import keyboard CSS
import "swiper/css/mousewheel"; // Import mousewheel CSS

SwiperCore.use([Navigation, Pagination, Keyboard, Mousewheel]);

function Homme() {
  const showLogine = useSelector((state) => state.navbar.showLogine);
  const showInscription = useSelector((state) => state.navbar.showInscription);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://api.unsplash.com/search/photos?query=house&client_id=ot-zYI6jLQx58F_TKAm7twWtsoGrjzsBC2rOmHsr-w0')
      .then(response => response.json())
      .then(data => {
        const houseImages = data.results.map(result => ({
          imageUrl: result.urls.regular,
          title: result.alt_description
        }));
        setImages(houseImages);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Splitting images into two separate arrays
  const firstSetOfImages = images.slice(0, 4); // Images 1-2-3-4
  const secondSetOfImages = images.slice(4, 8); // Images 5-6-7-8
  const threOfImages =     images.slice(8, 12);

  return (
    <div className={`${showLogine || showInscription ? "opacity-50 pointer-events-none " : ""} static   lg:h-screen lg:grid lg:grid-cols-4 gap-2`}>
      <Swiper
        className="mt-[7%] lg:mt-[3%] w-[80%] h-[90%] lg:ml-[2%] lg:h-[35%] lg:w-[80%] rounded-lg"
        modules={[Navigation, Pagination]}
        navigation
        pagination
        keyboard
        scrollbar 
        mousewheel
        cssMode
      >
        <div>
          {firstSetOfImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.imageUrl} className="w-[100%] h-[100%] lg:w-[100%] lg:h-[100%]" alt={image.title} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      
      <Swiper
        className="mt-[7%] lg:mt-[3%] w-[80%] h-[90%] lg:ml-[2%] lg:h-[35%] lg:w-[80%]  rounded-lg"
        modules={[Navigation, Pagination]}
        navigation
        pagination
        keyboard
        scrollbar 
        mousewheel
        cssMode
      >
        <div>
          {secondSetOfImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.imageUrl} className="w-[100%] h-[100%] lg:w-[100%] lg:h-[100%]" alt={image.title} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <Swiper
        className="mt-[7%] lg:mt-[3%] w-[80%] h-[90%] lg:ml-[2%] lg:h-[35%] lg:w-[80%]  rounded-lg"
        modules={[Navigation, Pagination]}
        navigation
        pagination
        keyboard
        scrollbar 
        mousewheel
        cssMode
      >
        <div>
          {threOfImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.imageUrl} className="w-[100%] h-[100%] lg:w-[100%] lg:h-[100%]" alt={image.title} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <Swiper
        className="mt-[7%] lg:mt-[3%] w-[80%] h-[90%] lg:ml-[2%] lg:h-[35%] lg:w-[80%]  rounded-lg"
        modules={[Navigation, Pagination]}
        navigation
        pagination
        keyboard
        scrollbar 
        mousewheel
        cssMode
      >
        <div>
          {firstSetOfImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.imageUrl} className="w-[100%] h-[100%] lg:w-[100%] lg:h-[100%]" alt={image.title} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default Homme;
