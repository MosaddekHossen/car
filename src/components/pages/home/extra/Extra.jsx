
const Extra = () => {
    const containerStyle = {
        backgroundImage: 'url("https://demo.wpautolistings.com/wp-content/uploads/2019/04/2019-mazda-3-sedan-gray-front-quarter-left-400x250.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    return (
        <div>
            <div style={containerStyle} className="h-[80vh] flex justify-center items-center mb-10 px-8 md:px-0">
                <div className="md:w-1/2 text-white py-10">
                    <p className="font-bold text-sm uppercase">Services</p>
                    <p className="text-3xl font-bold">You Want To Have Your Favorite Car?</p>
                    <p className="md:text-2xl text-lg mb-10 leading-none">We have a big list of modern & classic cars in both used and new categories.</p>
                    <a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a>
                </div>
            </div>
        </div>
    );
};

export default Extra;