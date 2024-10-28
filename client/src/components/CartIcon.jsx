import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchCart } from '../features/cart/cartThunck';

const CartIcon = () => {
  const dispatch = useDispatch();
  const { items = [] } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const itemCount = items.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <Link to="/cart" className="relative group">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-2"
      >
        <ShoppingBag className="h-6 w-6 text-[#8D493A] group-hover:text-[#D0B8A8] transition-colors duration-200" />
        
        <AnimatePresence>
          {itemCount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold"
            >
              {itemCount}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

export default CartIcon;