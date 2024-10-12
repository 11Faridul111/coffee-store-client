
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/coffeeCard'
function App() {
  const coffees = useLoaderData()

  return (
    <>
      <h1>Coffee house:{coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-6'>
        {
          coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
