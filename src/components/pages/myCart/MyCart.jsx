import { useLoaderData } from "react-router-dom";
import CartCard from "../myCart/cartCard/CartCard";
import { useState } from "react";

const MyCart = () => {
    const brandsAll = useLoaderData();
    const [brands, setBrands] = useState(brandsAll)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 px-8 lg:px-0">
            {
                brands?.map(brand => <CartCard
                    key={brand._id}
                    brand={brand}
                    brands={brands}
                    setBrands={setBrands}
                ></CartCard>)
            }
        </div>
    );
};

export default MyCart;