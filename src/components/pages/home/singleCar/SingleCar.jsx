import { Link } from "react-router-dom";

const SingleCar = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-20 text-center">
                <h2 className="lg:text-5xl text-3xl font-bold">NEW CAR</h2>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://demo.wpautolistings.com/wp-content/uploads/2018/07/all-cars.png" />
                        <div>
                            <h1 className="text-5xl font-bold">New Car Models Prices</h1>
                            <p className="py-6">Find the perfect car for your needs at Cars.com. Shop new and used cars, sell your car, compare prices, and explore financing options to find your dream car ...</p>
                            <Link to={"/myCart"}><button className="btn btn-ghost bg-violet-400 dark:text-black">SEE ALL CARS</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleCar;