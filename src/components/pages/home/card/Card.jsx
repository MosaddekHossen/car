
const card = ({ brand }) => {
    const { name, image } = brand || {};
    return (
        <div>
            <div className="card shadow-xl h-[50vh]">
                <figure className="px-2 pt-2">
                    <img src={image} alt="Car" className="rounded-xl h-[40vh]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default card;