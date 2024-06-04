import { useSelector, useDispatch } from 'react-redux';
import { removeWishlest } from './Redux/wishlestSlice';

const Wishlest = () => {
    const dispatch = useDispatch();
    const favories = useSelector((state) => state.wishlests.favories);

    const handleRemove = (item) => {
        dispatch(removeWishlest(item));
    };

    return (
        <div>
            <h1>Your Wishlist:</h1>
            {favories.length === 0 ? (
                <p>No items in your wishlist.</p>
            ) : (
                favories.map((item) => (
                    <div key={item.id} className="wishlist-item">
                        <img src={item.image} alt={`Listing ${item.id}`} className="wishlist-image" />
                        <h2>{item.title}</h2>
                        <p>{item.location}</p>
                        <p>{item.price} MAD</p>
                        <button onClick={() => handleRemove(item)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Wishlest;
