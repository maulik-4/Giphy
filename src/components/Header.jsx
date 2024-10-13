import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { HiDotsVertical} from "react-icons/hi";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { Gifstate } from '../context/gif_context';



const Header = () => {
    const [categories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);
    const {gf,filter, setfilter,favourites} = Gifstate();

    const fetch_data_catgories= async () =>{
      const {data} = await gf.categories();
      setCategories(data);
    }
    useEffect (()=>{
      fetch_data_catgories();

    },[]);  


  return <nav>
    <div className="relative flex  gap-4 justify-center items-center mb-2  " >
    <Link to="/" className='flex items-center'>
    <img src="./logo.svg" alt="" className='w-8 ' />
    <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
    </Link>
    <div className='font-bold flex gap-2 items-center'>

    {categories?.slice(0,5)?.map((categories)=>{
      return <Link key={categories.name} to={`/${categories.name_encoded}`}  className="px-4 py-1 transition ease-in-out hover:gradient border-b-4 hidden lg:block">{categories.name}
    </Link>

    })}
    
    <button onClick={() => {setShowCategories(!showCategories)}}>
        <HiDotsVertical 
        size={35}
        className={`py-.5 transition ease-in-out hover:gradient ${
            showCategories ? "gradient" :""
        } border-b-4 hidden lg:block`} />
    </button>
  {
    favourites.length > 0 &&   <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
    <Link to="/Favourite">Favorite GIFs</Link>
  </div>
  }
            <button onClick={() => setShowCategories(!showCategories)}>
            <HiMiniBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={30}
            />
       
          </button>
         
    </div>
    {
            showCategories && <div className='gradient justi absolute right-0 top-20 px-10 pt-6 pb-9 w-full z-20'>
              <h1 className='text-3xl font-extrabold'>Categories</h1>
              <hr className="bg-gray-100 opacity-50 my-5" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {
                  categories?.map((categories)=>{
                    return <Link className='font-bold'>
                {categories.name}</Link>
                  })
                }

              </div>
            </div>
        
          }
          </div>
  </nav>
}

export default Header