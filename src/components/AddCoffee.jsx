import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);

        fetch('https://coffee-store-server-ten-lyart.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added this coffee',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4 drop-shadow-md">
                    Add Coffee
                </h1>
                <form onSubmit={handleAddCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" placeholder="name" name='name' className="w-full border border-gray-300 p-2 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                        <input type="text" placeholder="quantity" name='quantity' className="w-full border border-gray-300 p-2 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Supplier</label>
                        <input type="text" placeholder="supplier" name='supplier' className="w-full border border-gray-300 p-2 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Taste</label>
                        <input type="text" placeholder="taste" name='taste' className="w-full border border-gray-300 p-2 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <input type="text" placeholder="category" name='category' className="w-full border border-gray-300 p-2 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Details</label>
                        <input type="text" placeholder="details" name='details' className="w-full border border-gray-300 p-2 rounded-md" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Photo</label>
                        <input type="text" placeholder="photo url" name='photo' className="w-full border border-gray-300 p-2 rounded-md" />
                    </div>
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-yellow-700 hover:bg-yellow-800 text-white py-2 px-4 rounded-md transition duration-300"
                        >
                            Add Coffee
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;