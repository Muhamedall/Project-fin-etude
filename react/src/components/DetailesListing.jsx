import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailRoom = () => {
    const { title } = useParams();
    const [roomDetail, setRoomDetail] = useState(null);
    const [showPayment, setShowPayment] = useState(false);
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardHolderName: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/dataListings/${title}`)
            .then(response => {
                console.log("API response data:", response.data);
                setRoomDetail(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the room detail!', error);
            });
    }, [title]);

    if (!roomDetail) {
        return <div>Loading...</div>;
    }

    const baseUrl = 'http://localhost:8000/storage/';
    console.log("roomDetail object:", roomDetail);

    let images = [];
    try {
        images = JSON.parse(roomDetail.images);
    } catch (error) {
        console.error('Error parsing images JSON:', error);
    }
    console.log("Parsed images array:", images);

    const handleReserveClick = () => {
        setShowPayment(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };

    const handleConfirmReservation = () => {
        // Add logic to handle reservation confirmation, e.g., API call to process payment
        console.log('Reservation confirmed with card details:', cardDetails);
        setShowPayment(false);
    };

    return (
        <div className='mt-10 ml-[4%]'>
            <h1 className='font-bold text-4xl'>{roomDetail.title}</h1>
            <p className="text-lg font-semibold">Images</p>

            <div className="flex flex-row w-[70%]">
                {images.length > 0 && (
                    <div className="flex-shrink-0 mr-4 mt-[2%]">
                        <img
                            src={`${baseUrl}${images[0]}`}
                            alt={`Listing ${roomDetail.id} Image 1`}
                            className="w-full h-auto rounded-lg shadow-2xl"
                            onError={() => console.error(`Failed to load image: ${baseUrl}${images[0]}`)}
                        />
                    </div>
                )}
                <div className="grid grid-rows-2 grid-flow-col gap-2">
                    {images.slice(1).map((image, index) => (
                        <div key={index} className="flex-shrink-0">
                            <img
                                src={`${baseUrl}${image}`}
                                alt={`Listing ${roomDetail.id} Image ${index + 2}`}
                                className="w-[90%] h-[75%] rounded-lg shadow-2xl"
                                onError={() => console.error(`Failed to load image: ${baseUrl}${image}`)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <p>{roomDetail.price} MAD</p>

            <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                    <p className="text-lg font-semibold">Availability</p>
                    <div className="flex justify-between items-center">
                        <label className="block text-sm font-medium text-gray-700">Start Date:</label>
                        <input
                            type="date"
                            value={roomDetail.date_debut}
                            className="disabled:bg-gray-100 px-2 py-1 border border-gray-300 rounded-lg"
                            disabled
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label className="block text-sm font-medium text-gray-700">End Date:</label>
                        <input
                            type="date"
                            value={roomDetail.date_fin}
                            className="disabled:bg-gray-100 px-2 py-1 border border-gray-300 rounded-lg"
                            disabled
                        />
                    </div>
                </div>
                <div>
                    <p className="text-lg font-semibold">Owner Details</p>
                    <p className="text-sm text-gray-700">{roomDetail.user.name}</p>
                    <p className="text-sm text-gray-700">{roomDetail.user.city}</p>
                </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                    <p className="text-lg font-semibold">Room Details</p>
                    <p className="text-sm text-gray-700">Number of Rooms: {roomDetail.rooms}</p>
                    <p className="text-sm text-gray-700">Capacity: {roomDetail.people} people</p>
                </div>
                <div>
                    <div className="p-4 border rounded-lg shadow-lg">
                        <p className="text-lg font-semibold mb-2">Reserve This Room</p>
                        <button
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                            onClick={handleReserveClick}
                        >
                            Reserve
                        </button>
                    </div>
                </div>
            </div>

            {showPayment && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out slide-down">
                        <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
                        <p className="mb-4">Please enter your payment details to confirm your reservation.</p>
                        
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                value={cardDetails.cardNumber}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                            <input
                                type="text"
                                name="expiryDate"
                                value={cardDetails.expiryDate}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">CVV</label>
                            <input
                                type="text"
                                name="cvv"
                                value={cardDetails.cvv}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Card Holder Name</label>
                            <input
                                type="text"
                                name="cardHolderName"
                                value={cardDetails.cardHolderName}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                                onClick={handleConfirmReservation}
                            >
                                Confirm Reservation
                            </button>
                            <button
                                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                                onClick={() => setShowPayment(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailRoom;
