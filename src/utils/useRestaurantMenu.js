import { useEffect, useState } from "react";
import {menuAPI} from "../utils/constant";

function useRestaurantMenu(resId){
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch(menuAPI + resId);
        const json = await data.json();
        setResInfo(json);
    } 
    return resInfo;
}


export default useRestaurantMenu;