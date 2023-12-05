import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Slider = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="max-w-7xl mx-auto lg:py-10 py-5 text-center" data-aos="fade-up">
            <h2 className="lg:text-5xl text-3xl font-bold pb-10">BRAND NEW</h2>
            <div className="carousel w-full h-[100vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/modern-car-futuristic-road_23-2151021107.jpg?t=st=1701797946~exp=1701801546~hmac=c3fea2c111d9dd7fd0d9a522a24503631a1eecd5982f97875d180b5f5a7dede8&w=996" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/cyberpunk-urban-scenery-with-car_23-2150712270.jpg?t=st=1701799693~exp=1701803293~hmac=32ff1148753e107bba683d058795e79b5e5ef6b9e3144994f9dee2bd45e514cd&w=1060" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/view-3d-car_23-2150998631.jpg?t=st=1701799724~exp=1701803324~hmac=b3ee70f453cf3925c141fc39082373492c3decf25ae7cdf54ba4fb53890173ee&w=996" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;