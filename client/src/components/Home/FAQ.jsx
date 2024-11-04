"use client";

import { useState } from "react";
import { FaQq } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";  // إضافة أيقونة أفضل للسهم

const faqData = [
    {
        question: "How can manure management improve soil health?",
        answer: "Proper manure management enriches soil with nutrients, enhances microbial activity, and improves soil structure, which can lead to increased crop yields and reduced need for chemical fertilizers."
    },
    {
        question: "What practices can help in effective manure management?",
        answer: "Practices such as composting, using cover crops, and rotational grazing can optimize manure application, minimize nutrient runoff, and improve water quality."
    },
    {
        question: "Is manure a sustainable fertilizer option?",
        answer: "Yes, manure is a renewable resource that recycles nutrients back into the soil, promoting sustainability and reducing reliance on synthetic fertilizers."
    },
    {
        question: "How does improper manure management affect the environment?",
        answer: "Improper management can lead to nutrient runoff, which contaminates water bodies and contributes to eutrophication, harming aquatic ecosystems."
    },
    {
        question: "What are the regulations regarding manure application?",
        answer: "Regulations vary by region but often include guidelines on application rates, timing, and methods to ensure environmental protection and public health."
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
                <h1 className="text-5xl font-bold text-center mb-16 text-[#8D493A] flex items-center justify-center gap-4">
                    FAQ <FaQq className="text-4xl" />
                </h1>

                <div className="max-w-4xl mx-auto space-y-6">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[#DFD3C3] rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
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