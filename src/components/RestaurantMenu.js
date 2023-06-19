import { useState, useEffect } from "react";
import Shimmer from './Shimmer';
import {useParams} from "react-router-dom";
import {menuAPI} from "../utils/constant";

function RestaurantMenu(){
const [resInfo, setResInfo] = useState(null);

const {resId} = useParams();

useEffect(()=>{
    fetchMenu();
},[])

const fetchMenu = async ()=>{
    try{
    const dataApi = await fetch(menuAPI + resId);
    const json = await dataApi.json();
    console.log(json);

    setResInfo(json);
    } catch(error){
        console.error("Error fetching menu:", error);
    }
}



return resInfo === null ? (
        <Shimmer />) :(
        <div className="menu">
            <h1>{resInfo?.successResponse?.categoryType}</h1>
            <h5>{resInfo?.successResponse?.guestMsgWhenAlcoholNtAllowedInToGo}</h5>

            <h3>Dish Name: {resInfo?.successResponse?.product?.displayName} </h3>
            <h4>Price: $ {resInfo?.successResponse?.price[0]?.listPrice}</h4>
        </div>
        
    )
}

export default RestaurantMenu;