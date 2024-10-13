import { createContext, useContext, useState } from "react";
import {GiphyFetch} from "@giphy/js-fetch-api";

const Gif_context =createContext();
const Gif_provider = (({children}) => {
    const [gif,setGifs] = useState([]);
    const [filter,setFilter] = useState("Gifs");
    const [favourites,setfavourites] =useState([]);
    const gf= new  GiphyFetch(import.meta.env.VITE_GIPHY_KEY );


     
    return <Gif_context.Provider value={{ gf,gif,setFilter,setGifs,favourites,filter }}>{children}
    
    
    </Gif_context.Provider>

});
export const Gifstate = () =>{
    return useContext(Gif_context);
}
export default Gif_provider;
