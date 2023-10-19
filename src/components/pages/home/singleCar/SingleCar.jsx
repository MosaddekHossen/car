
const SingleCar = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-20 text-center">
                <h2 className="lg:text-5xl text-3xl font-bold">NEW CAR</h2>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://demo.wpautolistings.com/wp-content/uploads/2018/07/all-cars.png" />
                        <div>
                            <h1 className="text-5xl font-bold">Browse Cars By Make</h1>
                            <p className="py-6">cars available in different categories. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-ghost bg-violet-400">SEE ALL CARS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleCar;