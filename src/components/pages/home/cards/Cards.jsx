import { useLoaderData } from "react-router-dom";
import Card from "../card/card";

const Cards = () => {
    const brands = useLoaderData();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 px-8 lg:px-0">
            {
                brands?.slice(0, 6).map(brand => <Card key={brand._id} brand={brand}></Card>)
            }
        </div>
    );
};

export default Cards;