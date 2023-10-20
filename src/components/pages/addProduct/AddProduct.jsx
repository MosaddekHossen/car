import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAdd = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const des = form.des.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const AddProduct = { name, brandName, type, price, des, rating, image }
        // console.log(AddProduct);

        // Send data to the server
        fetch('https://57-brand-shop-server-myhdox2ey-mosaddek.vercel.app/brand', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Add product successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className="my-14 max-w-5xl lg:px-24 px-10 py-14 rounded-md bg-[#F4F3F0] mx-auto text-center">
            <h2 className="text-4xl font-extrabold pb-10">Add Product</h2>
            <form onSubmit={handleAdd}>
                {/* Form row */}
                <div className="md:flex gap-10 justify-between md:mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label>
                            <input type="text" required name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label>
                            <input type="text" required name="brandName" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Form row */}
                <div className="md:flex gap-10 justify-between md:mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label>
                            <input required type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label>
                            <input type="number" required name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Form row */}
                <div className="md:flex gap-10 justify-between md:mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label>
                            <input type="text" required name="des" placeholder="Short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label>
                            <input type="text" required name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Form row */}
                <div className="form-control md:w-full md:mb-10 pb-5">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <label>
                        <input type="text" required name="image" placeholder="Image" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" className="btn btn-block bg-gray-600 text-white hover:text-blue-600 font-bold" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;