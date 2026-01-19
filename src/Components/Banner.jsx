import React from 'react';
import logo_1 from '../assets/slides/slider-1.png'
import logo_2 from '../assets/slides/slider-3.png'
const Banner = () => {
    return (
        <><div className="carousel w-full bg-gradient-to-l from-[#6366F140] to-white">
            <div id="slide1" className="carousel-item relative w-full h-50 md:h-auto">
                <img
                    src={logo_1}
                    className="object-contain" />
                    <div class="container absolute left-16 right-5 top-1/2 -translate-y-1/2 transform text-black1">
                        <div className="text-xl md:text-5xl pb-2 font-bold  space-y-2">
                            <h1>Premium Tech.</h1>
                            <h1 className="">Unbeatable Prices.</h1>
                            <h1 class="">Limited Stock.</h1>

                        </div>
                        <p className="max-w-1/2 md:flex hidden pb-2 text-black2 font-medium">Discover premium tech
                            accessories designed to enhance your digital lifestyle. From gaming gear to productivity
                            essentials, find everything you need with fast shipping and unbeatable prices.</p>
                        <a href="#products"><button
                                className="btn btn-primary md:btn-md text-white md:text-lg btn-sm shadow-none ">Shop
                                Now</button></a>

                    </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={logo_2}
                    className="object-contain" />
                    <div className="container absolute left-16 right-5 top-1/2 -translate-y-1/2 transform text-black1">
                        <div className="text-2xl md:text-5xl pb-2 font-bold  space-y-2">
                            <h1>Elevate</h1>
                            <h1 className="">Your Everyday</h1>
                            <h1 className="">With <span className="text-primary">Premium Tech</span></h1>

                        </div>
                        <p className="max-w-180 md:flex hidden pb-2 text-black2 font-medium">Transform your digital
                            experience with accessories that blend performance, style, and innovation</p>
                        <a href="#products"><button
                                className="btn btn-primary md:btn-md text-white md:text-lg btn-sm shadow-none ">Shop
                                Now</button></a>
                    </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div></>
    );
};

export default Banner;