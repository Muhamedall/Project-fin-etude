import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Keyboard, Mousewheel } from "swiper";
import { Link } from "react-router-dom";
import { useSelector  } from "react-redux";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
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

    const baseUrl = 'http://localhost:8000/storage/';

    return (
        <div className={`${showLogine || showInscription ? "opacity-50 pointer-events-none " : ""} static lg:h-screen lg:grid lg:grid-cols-4 gap-2 lg:mt-[2%] lg:ml-[3%]`}>
            {listings.map(listing => (
                <>
                 <Link to={`/DetailesListing/${listing.title}`}>
             
                <div key={listing.id} className="">
                    <Swiper
                        className="mt-[7%]  w-[80%] h-[90%]  lg:h-[35%] lg:w-[80%] rounded-lg"
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
                    <div className="ml-[10%]">
                    <h2 className="font-bold ">{listing.title}</h2>
                    <p className=" text-gray-400">Maroc ,{listing.location}</p>
                    <p>Owner: {listing.user.name}</p>
                    <p className="font-bold ">{listing.price.slice(0, -3)} MAD</p>
                    </div>
                </div>
                </Link>
                </>
            ))}
        </div>
    );
};

export default ImageGallery;
