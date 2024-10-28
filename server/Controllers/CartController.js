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
    // let cart = await Cart.findOne({ user: req.user.id }).populate('items.book');
    let cart = await Cart.findOne({ user: req.user.id }).populate('items.content'); // تغيير 'items.book' إلى 'items.content'

    if (!cart) {
      cart = await Cart.create({ user: req.user.id });
    }
    res.json(cart);
  } catch (error) {
    console.error(error); // طباعة الخطأ في الـ console لمزيد من التفاصيل
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.addToCart = async (req, res) => {
  try {
    const { contentId, quantity } = req.body; // تغيير bookId إلى contentId
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = await Cart.create({ user: req.user.id });
    }
    const itemIndex = cart.items.findIndex(item => item.content.toString() === contentId); // تغيير book إلى content
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ content: contentId, quantity }); // تغيير book إلى content
    }
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { contentId } = req.body;
    let cart = await Cart.findOne({ user: req.user.id });

    if (cart) {
      // فلترة العناصر لحذف العنصر المطلوب
      cart.items = cart.items.filter(item => item.content.toString() !== contentId);
      await cart.save(); // حفظ التغييرات بعد الفلترة
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};



exports.updateQuantity = async (req, res) => {
  try {
    const { contentId, quantity } = req.body;
    let cart = await Cart.findOne({ user: req.user.id });
    if (cart) {
      const itemIndex = cart.items.findIndex(item => item.content.toString() === contentId);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity = quantity;
        await cart.save();
      }
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.clearCart = async (req, res) => {
  try {
      let cart = await Cart.findOne({ user: req.user.id });
      
      if (cart) {
          cart.items = [];
          await cart.save();
      }

      res.json(cart);
  } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
  }
};