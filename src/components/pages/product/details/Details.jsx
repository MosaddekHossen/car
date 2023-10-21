// import { element } from "prop-types";
import { Link, useLoaderData } from "react-router-dom"; // , useParams
import ReactStarsRating from 'react-stars-rating';

const Details = () => {
    const detailsData = useLoaderData();

    const { name, brandName, type, price, des, rating, image } = detailsData || {};

    return (
        <div>
            <div className="card shadow-xl h-full my-10">
                <figure className="px-2 pt-2">
                    <img src={image} alt="Car" className="rounded-xl h-[80vh] w-full" />
                </figure>
                <div className="pt-10 pl-10">
                    <p>
                        <ReactStarsRating
                            value={rating}
                        />
                    </p>
                </div>
                <p className="mx-6 p-1 font-sans text-[18px] font-semibold leading-normal text-[#171715] antialiased opacity-75">
                    Name: {name}
                </p>
                <p className="mx-6 p-1 mt-3 font-sans text-[18px] font-semibold leading-normal text-[#171715] antialiased opacity-75">
                    Brand Name: {brandName}
                </p>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            Type: {type}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            Price: {price} $
                        </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        {des}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    {/* <Link to={`/details/${  }`}> */}
                    <div className="md:mb-5">
                        <div className="form-control mb-2 lg:mb-0">
                            <Link to={'/myCart'}>
                                <input type="submit" className="btn btn-block bg-gray-600 text-white hover:text-blue-600 font-bold" value="Add to Cart" />
                            </Link>
                        </div>
                    </div>

                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Details;