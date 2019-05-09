import React from 'react';
import SingleCity from "./SingleCity.jsx"

const ListOFCities=(props)=>{
  const cityList=props.cities;

  return(
    <ol className="list-group">
      {cityList.map(city=>
        <SingleCity key={city} name={city} deleteCity={props.deleteCity} storageUpdate={props.storageUpdate} timeStamp={props.timeStamp}/>
      )}
      
    </ol>
  )
}
export default ListOFCities;