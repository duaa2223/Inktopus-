import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart, removeFromCart, addToCart } from '../features/cart/cartThunck';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleRemoveFromCart = (bookId) => {
    dispatch(removeFromCart(bookId));
  };

  const handleUpdateQuantity = (bookId, newQuantity) => {
    dispatch(addToCart({ bookId, quantity: newQuantity }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {items.map((item) => (
        <div key={item._id} className="flex justify-between items-center mb-4 p-4 border rounded">
          <div>
            <h3 className="font-semibold">{item.book.title}</h3>
            <p>Price: ${item.book.price}</p>
            <div className="flex items-center mt-2">
              <button 
                onClick={() => handleUpdateQuantity(item.book._id, item.quantity - 1)}
                className="bg-gray-200 px-2 py-1 rounded"
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button 
                onClick={() => handleUpdateQuantity(item.book._id, item.quantity + 1)}
                className="bg-gray-200 px-2 py-1 rounded"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <p className="font-bold">Total: ${item.book.price * item.quantity}</p>
            <button 
              onClick={() => handleRemoveFromCart(item.book._id)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <h2 className="text-xl font-bold mt-4">
        Total: ${items.reduce((total, item) => total + item.book.price * item.quantity, 0)}
      </h2>
      <Link to="/checkout" className="block mt-4 bg-blue-500 text-white px-4 py-2 rounded text-center">
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default CartPage;