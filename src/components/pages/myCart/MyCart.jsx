import { useLoaderData } from "react-router-dom";
import CartCard from "../myCart/cartCard/CartCard";

const MyCart = () => {
    const brands = useLoaderData();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 px-8 lg:px-0">
            {
                brands?.map(brand => <CartCard key={brand._id} brand={brand}></CartCard>)
            }
        </div>
    );
};

export default MyCart;