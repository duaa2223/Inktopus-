const nodemailer = require('nodemailer');
require('dotenv').config(); // تحميل المتغيرات البيئية

const sendOTPEmail = async (email, otp) => {
    // إعداد نقل البريد
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // استخدام المتغير البيئي
            pass: process.env.EMAIL_PASS  // استخدام المتغير البيئي
        }
    });

    // إعداد تفاصيل البريد الإلكتروني
    const mailOptions = {
        from: process.env.EMAIL_USER, // استخدام المتغير البيئي
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`
    };

    try {
        // إرسال البريد الإلكتروني
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendOTPEmail;
