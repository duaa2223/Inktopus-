// // controllers/contactController.js
// const ContactMessage = require('../Models/ContactUsModel');

// const contactController = {
//     submitContact: async (req, res) => {
//         try {
//             const { name, email, subject, message } = req.body;
            
//             const newMessage = new ContactMessage({
//                 name,
//                 email,
//                 subject,
//                 message,
//                 date: new Date()
//             });

//             await newMessage.save();
//             res.status(201).json({ 
//                 success: true, 
//                 message: 'تم إرسال رسالتك بنجاح' 
//             });
//         } catch (error) {
//             res.status(500).json({ 
//                 success: false, 
//                 message: 'حدث خطأ أثناء إرسال الرسالة' 
//             });
//         }
//     },

//     getMessages: async (req, res) => {
//         try {
//             const messages = await ContactMessage.find().sort({ date: -1 });
//             res.status(200).json(messages);
//         } catch (error) {
//             res.status(500).json({ 
//                 success: false, 
//                 message: 'حدث خطأ أثناء جلب الرسائل' 
//             });
//         }
//     }

    
// };

// module.exports = contactController;

const ContactMessage = require('../Models/ContactUsModel');

const contactController = {
    submitContact: async (req, res) => {
        try {
            const { name, email, subject, message } = req.body;
            
            const newMessage = new ContactMessage({
                name,
                email,
                subject,
                message,
                date: new Date()
            });

            await newMessage.save();
            res.status(201).json({ 
                success: true, 
                message: 'تم إرسال رسالتك بنجاح' 
            });
        } catch (error) {
            res.status(500).json({ 
                success: false, 
                message: 'حدث خطأ أثناء إرسال الرسالة' 
            });
        }
    },

    getMessages: async (req, res) => {
        try {
            const messages = await ContactMessage.find().sort({ date: -1 });
            res.status(200).json(messages);
        } catch (error) {
            res.status(500).json({ 
                success: false, 
                message: 'حدث خطأ أثناء جلب الرسائل' 
            });
        }
    },

    deleteMessage: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedMessage = await ContactMessage.findByIdAndDelete(id);
            
            if (!deletedMessage) {
                return res.status(404).json({ message: "الرسالة غير موجودة" });
            }
            
            res.status(200).json({ message: "تم حذف الرسالة بنجاح", id });
        } catch (error) {
            res.status(500).json({ message: "حدث خطأ أثناء حذف الرسالة", error: error.message });
        }
    }
};

module.exports = contactController;
