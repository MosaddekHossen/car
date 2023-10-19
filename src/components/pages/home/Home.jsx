import Cards from "./cards/Cards";
import Extra from "./extra/Extra";
import SingleCar from "./singleCar/SingleCar";

const Home = () => {

    const containerStyle = {
        backgroundImage: 'url("https://demo.wpautolistings.com/wp-content/uploads/2018/07/gabriel-gurrola-125352-unsplash-min.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <>
            <div style={containerStyle}>
                <div className="flex items-center justify-center h-[91vh] px-8 lg:px-0">
                    <h1 className="lg:text-5xl text-3xl text-white font-bold">Find Your Favorite Car In A Minute!</h1>
                </div>
            </div>
            <SingleCar></SingleCar>
            <Cards></Cards>
            <Extra></Extra>
        </>
    );
};

export default Home;