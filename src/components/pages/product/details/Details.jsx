// import { element } from "prop-types";
import { Link, useLoaderData } from "react-router-dom"; // , useParams
import ReactStarsRating from 'react-stars-rating';

const Details = () => {
    const detailsData = useLoaderData();
    // const { id } = useParams();
    // const numPara = parseInt(id)

    const brand = detailsData.find(element => element)
    const { name, brandName, type, price, des, rating } = brand || {}; // , image 
    // console.log('one', numPara, 'three', brand, element)

    // const { id } = useParams();
    // const data = useLoaderData();

    // const card = data.find(element => element.id == id)
    // const { description, name, price, } = card;

    return (
        <div>
            <div className="card shadow-xl h-full my-10">
                <figure className="px-2 pt-2">
                    <img src='https://demo.wpautolistings.com/wp-content/uploads/2018/07/benjamin-child-32498-unsplash-min-400x250.jpg' alt="Car" className="rounded-xl h-[80vh] w-full" />
                </figure>
                <div className="pt-10 pl-10">
                    <p>
                        <ReactStarsRating
                            value={rating}
                        />
                    </p>
                </div>
                <p className="mx-6 p-1 font-sans text-[18px] font-semibold leading-normal text-[#171715] antialiased opacity-75">
                    {brandName}
                </p>
                <p className="mx-6 p-1 mt-3 font-sans text-[18px] font-semibold leading-normal text-[#171715] antialiased opacity-75">
                    {name}
                </p>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {type}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {price} $
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