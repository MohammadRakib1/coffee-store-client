import React from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

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

        fetch(`http://localhost:5000/coffee/${_id}`, {
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
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-[#F4F3F0] p-24'>
                <h2 className="text-5xl text-center -mt-20 mb-6 font-extrabold">Update Coffee : {name}</h2>
                <form onSubmit={handleUpdateCoffee}>
                    {/* coffee name and quantity */}
                    <div className='md:flex mb-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-bold'>Coffee Name</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name="name" defaultValue={name} placeholder='Coffee Name' className='input input-bordered w-full' />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2 ml-4'>
                            <label className='label'>
                                <span className='label-text font-bold'>Available Quantity</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name="quantity" defaultValue={quantity} placeholder='Available Quantity' className='input input-bordered w-full' />
                            </label>
                        </div>
                    </div>
                    {/* Supplier and Taste */}
                    <div className='md:flex mb-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-bold'>Supplier</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name="supplier" defaultValue={supplier} placeholder='Supplier' className='input input-bordered w-full' />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2 ml-4'>
                            <label className='label'>
                                <span className='label-text font-bold'>Taste</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name="taste" defaultValue={taste} placeholder='Taste' className='input input-bordered w-full' />
                            </label>
                        </div>
                    </div>
                    {/* category and details */}
                    <div className='md:flex mb-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-bold'>Category</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name="category" defaultValue={category} placeholder='Category' className='input input-bordered w-full' />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2 ml-4'>
                            <label className='label'>
                                <span className='label-text font-bold'>Details</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name="details" defaultValue={details} placeholder='Details' className='input input-bordered w-full' />
                            </label>
                        </div>
                    </div>
                    {/* photo url */}
                    <div className='mb-8'>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text font-bold'>Photo URL</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name="photo" defaultValue={photo} placeholder='Photo URL' className='input input-bordered w-full' />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Coffee" className='btn btn-block font-bold bg-[#D2B48C]' />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;