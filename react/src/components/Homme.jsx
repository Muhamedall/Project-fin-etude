import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Keyboard, Mousewheel } from "swiper";
import { useSelector } from "react-redux";
import axios from "../api/api";
import "swiper/css"; // Import main swiper CSS
import "swiper/css/navigation"; // Import navigation CSS
import "swiper/css/pagination"; // Import pagination CSS
import "swiper/css/keyboard"; // Import keyboard CSS
import "swiper/css/mousewheel"; // Import mousewheel CSS

SwiperCore.use([Navigation, Pagination, Keyboard, Mousewheel]);

function Homme() {
  const showLogine = useSelector((state) => state.navbar.showLogine);
  const showInscription = useSelector((state) => state.navbar.showInscription);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('api/dataListings');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
// Define normalizeImageUrl function outside the Homme component

// Define normalizeImageUrl function outside the Homme component

function normalizeImageUrl(imagesString) {
  try {
    const imagesArray = JSON.parse(imagesString.replace(/\\/g, ''));
    return imagesArray.map(image => {
      // Replace 'YOUR_BASE_URL' with the base URL of your images
      return `images/${image}`;
    });
  } catch (error) {
    console.error('Error parsing image URLs:', error);
    return [];
  }
}

  return (
    <div className={`${showLogine || showInscription ? "opacity-50 pointer-events-none " : ""} static lg:h-screen lg:grid lg:grid-cols-4 gap-2`}>
      {data.map((item) => (
        <Swiper
          key={item.id}
          className="mt-[7%] lg:mt-[3%] w-[80%] h-[90%] lg:ml-[2%] lg:h-[35%] lg:w-[80%] rounded-lg"
          modules={[Navigation, Pagination]}
          navigation
          pagination
          keyboard
          scrollbar 
          mousewheel
          cssMode
        >
        <SwiperSlide key={item.id}>
  <div>
    {item.images && item.images.length > 0 ? (
      <img src={normalizeImageUrl(item.images)[0]} alt="Room" className="w-full h-auto" />
    ) : (
      <div>No Image Available</div>
    )}
    <h3>{item.title}</h3>
    <p>{item.location}</p>
    <p>{item.price}</p>
  </div>
</SwiperSlide>
        </Swiper>
      ))}
    </div>
  );
}

export default Homme;
