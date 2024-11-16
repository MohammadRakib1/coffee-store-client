import React, { useState } from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';
import CardCoffee from './CardCoffee';

const Home = () => {

    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);

    return (
        <div>
            <Navbar></Navbar>
            <div className='m-20'>
                <h2 className='text-center my-10 font-bold text-5xl text-[#331A15]'>Our Popular Products : {coffees.length}</h2>
                <div className='grid md:grid-cols-2 gap-4'>
                    {
                        coffees.map(coffee => <CardCoffee key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CardCoffee>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Home;