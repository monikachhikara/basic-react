import RestroCards from "./RestroCards";
import { useState } from "react";
import dataSet from "../utils/mockData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function Body(){
const [data, setData]=useState(dataSet);
const [searchValue, setSearchValue] = useState([]);

const onlineStatus = useOnlineStatus();
if(onlineStatus === false)
    return (
        <h1>Looks like you'r offline!! Please check your connection</h1>
    );
    
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
                    <Link key={restro.id} to={"/restaurants/700438"} >
                    <RestroCards 
                    id={restro.id}
                    name={restro.name}
                    cuisine={restro.cuisine}
                    avgRating={restro.avgRating}
                    image={restro.image}
                /> 
                </Link>
                )
               })}  
            </div>
        </div>
    )
}


export default Body;