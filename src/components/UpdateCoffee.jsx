import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updateCoffee);

        fetch(`https://coffee-store-server-ten-lyart.vercel.app/coffee/${coffee._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }

    return (
        <div className="max-w-4xl mx-auto p-8 bg-[#f6f4f1] rounded-md shadow-md mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-2">
                Update Existing Coffee Details
            </h2>
            <p className="text-center text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here'.
            </p>
            <form onSubmit={handleUpdateCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" placeholder="Enter coffee name" name='name' defaultValue={name} className="w-full p-2 border rounded-md" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                    <input type="text" placeholder="Enter coffee chef" name='quantity' defaultValue={quantity} className="w-full p-2 border rounded-md" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Supplier</label>
                    <input type="text" placeholder="Enter coffee supplier" name='supplier' defaultValue={supplier} className="w-full p-2 border rounded-md" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Taste</label>
                    <input type="text" placeholder="Enter coffee taste" name='taste' defaultValue={taste} className="w-full p-2 border rounded-md" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <input type="text" placeholder="Enter coffee category" name='category' defaultValue={category} className="w-full p-2 border rounded-md" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Details</label>
                    <input type="text" placeholder="Enter coffee details" name='details' defaultValue={details} className="w-full p-2 border rounded-md" />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Photo</label>
                    <input type="text" placeholder="Enter photo URL" name='photo' defaultValue={photo} className="w-full p-2 border rounded-md" />
                </div>
                <div className="md:col-span-2 flex justify-center">
                    <button
                        type="submit"
                        className="bg-[#cba27c] hover:bg-[#a87e59] w-full text-white font-semibold px-6 py-2 rounded-md shadow-md transition"
                    >
                        Update Coffee Details
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;