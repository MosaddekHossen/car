import { Link } from "react-router-dom";

const SingleCar = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-20 text-center">
                <h2 className="lg:text-5xl text-3xl font-bold">NEW CAR</h2>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img className="lg:w-1/2 w-full object-cover" src="https://img.freepik.com/free-photo/3d-car-with-simple-background_23-2150796882.jpg?t=st=1701796601~exp=1701800201~hmac=c13fcf23a996fd7a55efea9d08facb1eff0e4d1ca46bbb8cc5ff6a5c959bfd27&w=1060" />
                        <div className="lg:w-1/2 w-full">
                            <h1 className="lg:text-4xl text-2xl font-bold">New Car Models Prices</h1>
                            <p className="py-6">Find the perfect car for your needs at Cars.com. Shop new and used cars, sell your car, compare prices, and explore financing options to find your dream car ...</p>
                            <Link to={"/myCart"}><button className="btn btn-ghost bg-violet-400">SEE ALL CARS</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleCar;