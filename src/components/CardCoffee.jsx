import React from 'react';
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CardCoffee = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })
            }
        });
    }

    return (
        <div className="card card-side items-center bg-[#F5F4F1] shadow-xl">
            <div>
                <figure>
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
            </div>
            <div className="flex items-center justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name : {name}</h2>
                    <p>Quantity : {quantity}</p>
                    <p>Supplier : {supplier}</p>
                    <p>Taste : {taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn bg-[#D2B48C]"><FaEye className='text-white' /></button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn bg-[#3C393B]"><MdEdit className='text-white' /></button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-[#EA4744]"><MdDelete className='text-white' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardCoffee;