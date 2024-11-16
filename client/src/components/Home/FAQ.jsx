"use client";

import { useState } from "react";
import { FaQq } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";  // إضافة أيقونة أفضل للسهم

const faqData = [
    {
        question: "Can I make a purchase without signing up?",
        answer: "No, to proceed to the cart and complete a purchase, you must register on the website."
    },
    {
        question: "What can I access as a guest user?",
        answer: "As a guest, you can browse colleges, academic years, and the library. However, you cannot view detailed book information."
    },
    {
        question: "What details are available about books before purchase?",
        answer: "For each book, we provide promo videos, sample pages, and an overview of its content to give you a visual and informational preview. These features are accessible to registered users to help you make an informed decision before buying."
    },
    {
        question: " How are the categories organized on the website?",
        answer: "Our platform features a wide range of colleges, each with its specific academic years. Within each year, you’ll find diverse specializations. For example, you and a classmate may share the same college and year but study different specializations, potentially sharing the same materials or books."
    },
    {
        question: "Will I receive a digital copy along with my physical book?",
        answer: "Yes! With every physical book purchase, we gift you a complimentary PDF version for your convenience and long-term use."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-[#F8EDE3]">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-serif font-semibold text-[#8D493A] flex items-center justify-center gap-3 mb-8">
                    FAQ <FaQq className="text-4xl" />
                </h1>

                <div className="max-w-4xl mx-auto space-y-6">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[#DFD3C3] rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl text-[#8D493A]"
                        >
                            <button
                                className={`w-full px-8 py-6 text-left flex justify-between items-center transition-colors duration-300 ${
                                    openIndex === index 
                                    ? 'bg-[#D0B8A8] text-white' 
                                    : 'hover:bg-[#D0B8A8] hover:text-white'
                                }`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-semibold text-lg">
                                    {faq.question}
                                </span>
                                <FaChevronDown 
                                    className={`transform transition-transform duration-300 text-xl ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            <div
                                className={`transition-all duration-300 ${
                                    openIndex === index 
                                    ? 'max-h-96 opacity-100' 
                                    : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-8 py-6 bg-white">
                                    <p className="text-[#8D493A] text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};