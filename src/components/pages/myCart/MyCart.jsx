import { AuthContext } from "../../../provider/AuthProvider";
import CartCard from "../myCart/cartCard/CartCard";
import { useContext, useEffect, useState } from "react";

const MyCart = () => {
    const { user } = useContext(AuthContext);
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch(`https://57-brand-shop-server-dcrbc5ziv-mosaddek.vercel.app/brands/${user?.email}`)
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [user?.email])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 px-8 lg:px-0">
            {
                brands?.map(brand =>
                    <CartCard
                        key={brand._id}
                        brand={brand}
                        brands={brands}
                        setBrands={setBrands}
                    ></CartCard>
                )
            }
        </div>
    );
};

export default MyCart;