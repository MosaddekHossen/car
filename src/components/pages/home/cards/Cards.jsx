import { useLoaderData } from "react-router-dom";
import Card from "../card/card";
import { useState } from "react";

const Cards = () => {
    const brands = useLoaderData();
    const [car, setCar] = useState(false);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 px-8 lg:px-0">
                {
                    car ? brands?.map(brand => <Card key={brand._id} brand={brand}></Card>) : brands?.slice(0, 6).map(brand => <Card key={brand._id} brand={brand}></Card>)
                }
            </div>
            {brands.length > 6 && <div className="text-center mb-10">
                <button onClick={() => setCar(!car)} className="btn btn-primary">{car ? 'See Less' : 'See More'}</button>
            </div>}
        </>
    );
};

export default Cards;