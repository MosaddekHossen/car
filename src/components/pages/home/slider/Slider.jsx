import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Slider = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className="max-w-7xl mx-auto lg:pt-10 pt-0 text-center" data-aos="fade-up">
            <h2 className="lg:text-5xl text-3xl font-bold pb-10">BRAND NEW</h2>
            <div className="carousel w-full h-[100vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://demo.wpautolistings.com/wp-content/uploads/2018/05/blog-400x250.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://demo.wpautolistings.com/wp-content/uploads/2018/07/slider-min.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://demo.wpautolistings.com/wp-content/uploads/2018/07/all-cars.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://demo.wpautolistings.com/wp-content/uploads/2018/07/gabriel-gurrola-125352-unsplash-min.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;