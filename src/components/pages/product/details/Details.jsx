// import { element } from "prop-types";
import { Rating } from "@smastrom/react-rating";
import { Link, useLoaderData } from "react-router-dom"; // , useParams

const Details = () => {
    const detailsData = useLoaderData();

    const { name, brandName, type, price, des, rating, image } = detailsData || {};

    return (
        <div>
            <div className="card shadow-xl w-10/12 mx-auto h-full my-10">
                <figure className="px-2 pt-2">
                    <img src={image} alt="Car" className="rounded-xl object-cover h-[30vh] md:h-[60vh]" />
                </figure>
                <div className="pt-2 pl-5 pb-2">
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        readOnly
                    />
                </div>
                <p className="mx-6 p-1 font-sans text-[18px] text-[#171715]">
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
                            Price: {price}$
                        </p>
                    </div>
                    <p className="block font-sans font-normal text-black leading-relaxed text-blue-gray-900">
                        {des}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <div className="md:mb-5">
                        <div className="form-control mb-2 lg:mb-0">
                            <Link to={'/myCart'}>
                                <input type="submit" className="btn btn-block bg-gray-600 text-white hover:text-blue-600 font-bold" value="See All Car" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;