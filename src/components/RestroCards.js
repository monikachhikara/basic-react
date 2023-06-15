function RestroCards(props){
    const {id,image,name,cuisine,avgRating} =props;

 return (
    <div className="card">
        <h2>{id}</h2>
        <img src={image} alt="foodImage" />
        <h2>{name}</h2> 
        <h3>{cuisine}</h3>
        <h4>{avgRating}</h4>
    </div>
    );
  }


  export default RestroCards;