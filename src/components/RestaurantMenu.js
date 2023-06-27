import { useState, useEffect } from "react";
import Shimmer from './Shimmer';
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu(){
const {resId} = useParams();

const resInfo = useRestaurantMenu(resId);

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