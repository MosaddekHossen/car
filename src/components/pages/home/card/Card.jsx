import { Link } from "react-router-dom";

const card = ({ brand }) => {
    const { name, image } = brand || {};
    return (
        <Link to={'/product'}>
            <div className="card shadow-xl h-[50vh]">
                <figure className="px-2 pt-2">
                    <img src={image} alt="Car" className="rounded-xl object-cover h-[40vh]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default card;