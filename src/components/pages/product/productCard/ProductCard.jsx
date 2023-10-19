// import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ProductCard = ({ brand }) => {
    const { name, brandName, type, price, des, rating, image } = brand || {};
    return (
        <>
            <div className="card shadow-xl h-full">
                <figure className="px-2 pt-2">
                    <img src={image} alt="Car" className="rounded-xl h-[50vh]" />
                </figure>
                {/* <p className='flex'><ReactStarsRating value={rating} /></p> */}
                <p className="px-6 block font-sans text-sm font-normal leading-normal text-[#ffa502] antialiased opacity-75">
                    {/* <Rating */}
                    emptySymbol={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                        </svg>
                    }
                    fullSymbol={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                            />
                        </svg>
                    }
                    initialRating={rating}
                    readonly
                    {/* /> */}
                </p>
                <p className="mx-6 p-1 mt-3 font-sans text-[18px] font-semibold leading-normal text-[#171715] antialiased opacity-75">
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
                            {price}
                        </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        {des}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    {/* <Link to={`/details/${  }`}> */}
                    <div className="md:flex gap-10 justify-between md:mb-5">
                        <div className="form-control md:w-1/2">
                            <button
                                className="block w-full select-none rounded-lg bg-gray-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                See details
                            </button>
                        </div>
                        <div className="form-control md:w-1/2">
                            <button
                                className="block w-full select-none rounded-lg bg-gray-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                See details
                            </button>
                        </div>
                    </div>

                    {/* </Link> */}
                </div>
            </div>
        </>
    );
};

ProductCard.propTypes = {
    brand: PropTypes.node
}

export default ProductCard;