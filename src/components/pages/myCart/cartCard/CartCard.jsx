import PropTypes from 'prop-types';
import ReactStarsRating from 'react-stars-rating';
import Swal from 'sweetalert2';

const CartCard = ({ brand, brands, setBrands }) => {
    const { _id, name, brandName, type, price, des, rating, image } = brand || {};

    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://57-brand-shop-server-dcrbc5ziv-mosaddek.vercel.app/brand/${_id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Brand has been deleted.',
                                'success'
                            )
                            const remaining = brands.filter(brand => brand._id !== _id);
                            setBrands(remaining);
                        }
                    })
            }
        })
    }

    return (
        <>
            <div className="card shadow-xl h-full">
                <figure className="px-2 pt-2">
                    <img src={image} alt="Car" className="rounded-xl h-[50vh]" />
                </figure>
                <div className="pt-10 pl-10">
                    <p>
                        <ReactStarsRating
                            value={rating}
                        />
                    </p>
                </div>
                <p className="mx-6 p-1 font-sans text-[18px] font-semibold leading-normal text-[#171715] antialiased opacity-75">
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
                            {price} $
                        </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        {des}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <div className="md:mb-5">
                        <div className="form-control">
                            <button
                                onClick={() => handleDelete(_id)}
                                className="block w-full select-none rounded-lg bg-gray-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Delete
                            </button>
                        </div>
                    </div>

                    {/* </Link> */}
                </div>
            </div>
        </>
    );
};

CartCard.propTypes = {
    brand: PropTypes.node,
    brands: PropTypes.node,
    setBrands: PropTypes.node
}

export default CartCard;