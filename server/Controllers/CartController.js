// const Cart = require('../Models/CartModel');

// exports.getCart = async (req, res) => {
//   try {
//     let cart = await Cart.findOne({ user: req.user.id }).populate('items.book');
//     if (!cart) {
//       cart = await Cart.create({ user: req.user.id });
//     }
//     res.json(cart);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.addToCart = async (req, res) => {
//   try {
//     const { bookId, quantity } = req.body;
//     let cart = await Cart.findOne({ user: req.user.id });
    
//     if (!cart) {
//       cart = await Cart.create({ user: req.user.id });
//     }
//     const itemIndex = cart.items.findIndex(item => item.book.toString() === bookId);
//     if (itemIndex > -1) {
//       cart.items[itemIndex].quantity += quantity;
//     } else {
//       cart.items.push({ book: bookId, quantity });
//     }
//     await cart.save();
//     res.json(cart);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.removeFromCart = async (req, res) => {
//   try {
//     const { bookId } = req.body;
//     let cart = await Cart.findOne({ user: req.user.id });
//     if (cart) {
//       cart.items = cart.items.filter(item => item.book.toString() !== bookId);
//       await cart.save();
//     }
//     res.json(cart);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

////////////////////////////
const Cart = require('../Models/CartModel');

exports.getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user.id }).populate('items.book');
    if (!cart) {
      cart = await Cart.create({ user: req.user.id });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { bookId, quantity } = req.body;
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = await Cart.create({ user: req.user.id });
    }
    const itemIndex = cart.items.findIndex(item => item.book.toString() === bookId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ book: bookId, quantity });
    }
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { bookId } = req.body;
    let cart = await Cart.findOne({ user: req.user.id });
    if (cart) {
      cart.items = cart.items.filter(item => item.book.toString() !== bookId);
      await cart.save();
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};