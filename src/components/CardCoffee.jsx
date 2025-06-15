import { Eye, Pencil, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CardCoffee = ({ coffee }) => {

    const { _id, name, quantity, taste, photo } = coffee;

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
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="flex items-center bg-[#fdfcf9] rounded-lg border-2 p-4 space-x-4">
            <img
                src={photo}
                alt="Americano Coffee"
                className="w-24 h-32 object-contain"
            />
            <div className="flex-1">
                <p>
                    <span className="font-semibold">Name:</span>{" "}
                    <span className="text-gray-600">{name}</span>
                </p>
                <p>
                    <span className="font-semibold">Quantity:</span>{" "}
                    <span className="text-gray-600">{quantity}</span>
                </p>
                <p>
                    <span className="font-semibold">Taste:</span>{" "}
                    <span className="text-gray-600">{taste}</span>
                </p>
            </div>
            <div className="flex flex-col space-y-2">
                <button className="bg-[#d7a266] hover:bg-[#c98c42] text-white p-2 rounded">
                    <Eye size={16} />
                </button>
                <Link to={`updateCoffee/${_id}`}>
                    <button className="bg-[#3b3b3b] hover:bg-black text-white p-2 rounded">
                        <Pencil size={16} />
                    </button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="bg-red-500 hover:bg-red-700 text-white p-2 rounded">
                    <Trash size={16} />
                </button>
            </div>
        </div>
    );
};

export default CardCoffee;