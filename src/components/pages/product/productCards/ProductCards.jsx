import { useLoaderData } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";

const ProductCards = () => {

    const brands = useLoaderData();

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 px-8 lg:px-0">
                {
                    brands?.slice(0, 4).map(brand => <ProductCard key={brand._id} brand={brand}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ProductCards;