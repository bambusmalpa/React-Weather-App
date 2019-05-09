import React from "react"

function CustomTooltip({ payload, active }) {
  
  if (active) {
    
    const url=`http://openweathermap.org/img/w/${payload[0].payload.icon}.png`
    return (
      <div className="container">

        <p className="label">{`Temperatura: ${payload[0].payload.temp}°C`}</p>
        <p className="label">{`Data: ${payload[0].payload.time}`}</p>
        <img src={url} alt=""/>
        <p className="label">{payload[0].payload.conditions}</p>
        
      </div>
      
    );
  }
 
  return null;
}

    export default CustomTooltip