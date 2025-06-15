import { useLoaderData } from 'react-router-dom'
import './App.css'
import CardCoffee from './components/CardCoffee';

function App() {

  const coffees = useLoaderData();

  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className='text-purple-600 my-10 font-bold text-4xl'>Coffee Store: {coffees.length}</h1>
      <div className='grid grid-cols-2 gap-6'>
        {
          coffees.map(coffee => <CardCoffee key={coffee._id} coffee={coffee}></CardCoffee>)
        }
      </div>
    </div>
  )
}

export default App
