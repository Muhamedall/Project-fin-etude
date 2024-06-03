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
                        className="  mt-[7%]   w-[80%] h-[90%]  lg:h-[35%] lg:w-[80%] rounded-lg"
                        modules={[Navigation, Pagination, Keyboard, Mousewheel]}
                        navigation
                        pagination
                        keyboard
                        mousewheel
                        cssMode
                    >
                        {listing.images.map((image, index) => (
                            <SwiperSlide key={index} className=" static">
                                <svg xmlns="http://www.w3.org/2000/svg" className=" absolute h-[30px] w-[30px] ml-[82%] mt-[5px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"  viewBox="0 -960 960 960"  fill="#FFFFFF"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
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
