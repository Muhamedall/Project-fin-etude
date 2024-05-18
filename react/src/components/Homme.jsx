import  { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Keyboard, Mousewheel } from "swiper";
import { useSelector } from "react-redux";

import "swiper/css"; // Import main swiper CSS
import "swiper/css/navigation"; // Import navigation CSS
import "swiper/css/pagination"; // Import pagination CSS
import "swiper/css/keyboard"; // Import keyboard CSS
import "swiper/css/mousewheel"; // Import mousewheel CSS
import axios from "axios";

SwiperCore.use([Navigation, Pagination, Keyboard, Mousewheel]);

const ImageGallery = () => {
  const [listings, setListings] = useState([]);
  const showLogine = useSelector((state) => state.navbar.showLogine);
  const showInscription = useSelector((state) => state.navbar.showInscription);

  useEffect(() => {
    axios.get('http://localhost:8000/api/dataListings')
      .then(response => {
        const data = response.data.map(listing => ({
          ...listing,
          images: JSON.parse(listing.images.replace(/\\/g, ''))
        }));
        setListings(data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const baseUrl = 'http://localhost:8000/storage/'; // Ensure this path is correct

  return (
    <div className={`${showLogine || showInscription ? "opacity-50 pointer-events-none " : ""} static lg:h-screen lg:grid lg:grid-cols-4 gap-2`}>
      {listings.map(listing => (
        <div key={listing.id}>
          
          <Swiper
            className="mt-[7%] lg:mt-[3%] w-[80%] h-[90%] lg:ml-[2%] lg:h-[35%] lg:w-[80%] rounded-lg"
            modules={[Navigation, Pagination, Keyboard, Mousewheel]}
            navigation
            pagination
            keyboard
            mousewheel
            cssMode
          >
            {listing.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={`${baseUrl}${image}`}
                  alt={`Listing ${listing.id} Image ${index + 1}`}
                />
              </SwiperSlide>
              
            ))}
          </Swiper>
          <h2>{listing.title}</h2>
          <p>{listing.location}</p>
          <p>{listing.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
