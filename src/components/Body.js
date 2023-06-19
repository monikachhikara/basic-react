import RestroCards from "./RestroCards";
import { useState, useEffect } from "react";
import dataSet from "../utils/mockData";

function Body(){
const [data, setData]=useState(dataSet);
const [searchValue, setSearchValue] = useState([]);

useEffect(()=>{
    fetchData();
}, [])

const fetchData =  async ()=>{
    const dataApi = await fetch("https://www.olivegarden.com/web-api/menuitem/prod7840076?locale=en_US&menuItemId=prod7840076&restaurantId=700438");
    const json = dataApi.json();
    console.log(json);
}

     return (
        <div className="body">
            <div className="searchBar">
            <input value={searchValue} 
            onChange={(e)=>{setSearchValue(e.target.value)
            console.log(e.target.value)}} />
            <button className="btn"
            onClick={()=>{
                const filteredList = data.filter(
                    (term)=>term.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            setData(filteredList);
            console.log('clicked')} } >Search</button>
                <button 
                className="btn" 
                type="submit" 
                onClick={()=>{
                  const renderedList = data.filter(
                    (res)=>res.avgRating >4)
                    setData(renderedList);
                }}>
                Top Rated Restro
                </button>
            </div>

            <div className="cardsShow">
                {data.map((restro)=>{
                    return (
                    <RestroCards 
                    key={restro.id}
                    id={restro.id}
                    name={restro.name}
                    cuisine={restro.cuisine}
                    avgRating={restro.avgRating}
                    image={restro.image}
                />
                )
               })}  
            </div>
        </div>
    )
}


export default Body;