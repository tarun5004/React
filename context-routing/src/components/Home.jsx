import ProductCard from './ProductCart'
import { useContext } from 'react'
import { ThemeMode } from '../context/ThemeContext.jsx'

const Home = () => {
  let {themes, setThemes , } = useContext(ThemeMode);
  return (
    <div className='h-full m-3'>
        <ProductCard />
    </div>
  )
}

export default Home
