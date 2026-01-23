import React from 'react';
import faqImg from '../assets/resize-images/faq.png'
const Faq = () => {
    return (
        <div className="py-12 max-w-[90%] mx-auto">
            <div className="text-center max-w-200 mx-auto space-y-2 container">
                <h2 className="text-4xl font-bold text-secondary">
                    Frequently Asked Question
                </h2>
                <p className="text-black2">
                    Find quick answers to common questions about using SmartShop.
                </p>
            </div>

            <div className="container flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="md:w-1/2 p-5">
                    <img className="md:max-w-112.5" src={faqImg} alt="FAQ" />
                </div>

                <div className="pr-4 md:w-1/2 space-y-2">
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="faq" defaultChecked />
                        <div className="collapse-title font-semibold">
                            Q1: How do I use coupon code SMART10?
                        </div>
                        <div className="collapse-content text-sm">
                            Add items → Open cart → Enter SMART10 → Apply.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="faq" />
                        <div className="collapse-title font-semibold">
                            Q2: How do I add money to my wallet?
                        </div>
                        <div className="collapse-content text-sm">
                            Click Add → Balance updates instantly.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="faq" />
                        <div className="collapse-title font-semibold">
                            Q3: What is the delivery charge?
                        </div>
                        <div className="collapse-content text-sm">
                            ৳70 per order.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="faq" />
                        <div className="collapse-title font-semibold">
                            Q4: How do I checkout?
                        </div>
                        <div className="collapse-content text-sm">
                            Ensure balance → Checkout → Done.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Faq;