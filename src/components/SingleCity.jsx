//to działa
import React from "react";
import cloud from "../icon/cloud.png"
import Chart from "./ForecastPage"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons'


library.add(faChartLine,faTimes, faTimesCircle)

class SingleCity extends React.Component{
constructor(props){
 
  super(props)
  
  this.state={
    name:"",
    temperature:"",
    description:"",
    icon:"",
    code:"",
    forecastOn:false,
    forecast:false,
    forecastData:"",
    foreCastButtonContent:"POKAŻ PROGNOZĘ"
  }}

fetchDataCurrentTemp=()=>{
 
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.name}&units=metric&lang=pl&APPID=3400000105dc079b5c25c9439613c410`)
  .then(resp => resp.json())
    .then(resp => {
        if(resp.cod===200){
         
        this.setState({
          code:resp.cod,
          temperature:`${Math.round(resp.main.temp)}°C`,
          description:resp.weather[0].description,
          icon:`http://openweathermap.org/img/w/${resp.weather[0].icon}.png`
        })
        //forecast data fetched only if city is on a list.
        this.fetchDataForecast()
      }
        else{
          
          this.setState({
            code:resp.cod,
            temperature:"Brak danych",
            description:"Brak danych",
            icon:cloud
          })
        }
        
        ;})
        
        this.props.storageUpdate()
}

fetchDataForecast=()=>{
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.props.name}&units=metric&lang=pl&APPID=3400000105dc079b5c25c9439613c410`)
  .then(resp => resp.json())
  .then(resp => {
    const dateChanger=(input)=>{
      let data=input.split(":").join(" ").split("-").join(" ").split(" ")
      return `${data[2]}-${data[1]} ${data[3]}:${data[4]}`
    }

   const weather=resp.list.map((el)=>{return el={
    
    time: dateChanger(el.dt_txt),
    temp:Math.round(el.main.temp),
    conditions:el.weather[0].description,
    icon:el.weather[0].icon,
   }})
   
    
     this.setState({
      forecastData:weather,
      forecast:true
     })
      
      
  })
}
  

componentDidMount(){
        this.fetchDataCurrentTemp()
        //Update of current weather is optional - no dependencies.
        window.setInterval(this.fetchDataCurrentTemp,this.props.timeStamp)
        
      }


openForecast=()=>{
  if(this.state.code===200&&this.state.forecastOn===false){
    this.setState({
      forecastOn:true,
      foreCastButtonContent:"PROGNOZA"
    })
  }
  if(this.state.forecastOn===true){
    this.setState({
      forecastOn:false,
      foreCastButtonContent:"PROGNOZA"
    })
  }
        
}



render(){
  
  const name=this.props.name;
  const{temperature,icon,description,code,forecastData}=this.state;
  const spinner=<div className="spinner-border text-danger" role="status"></div>;
  const elementClass="cityListItem--element";
  const cityName=name.charAt(0).toUpperCase()+name.slice(1)
  return(
    
  
    <li className="list-group-item list-group-item-action" >
     <div>
      
        <div className="cityListItem">
          <div className={elementClass} onClick={this.showForecast}>{cityName}</div>

          <div className={elementClass}>{code?temperature:spinner}</div>

          <div className={elementClass}>
            <img className="cityListItem--element--image"src={icon} title={description} alt={description}/></div>

          <div className={elementClass}>
          <button className={this.state.code===200?"btn btn-success icon":"btn btn-outline-secondary icon"} 
                    name={name} 
                    onClick={code===200?this.openForecast:null}>
                    {window.innerWidth>=900?this.state.foreCastButtonContent:<FontAwesomeIcon icon="chart-line" />}
                    
          </button></div>    
            
          <div className={elementClass}>
            <button className={"btn btn-danger icon"} name={name} onClick={this.props.deleteCity}>{window.innerWidth>=900?"USUŃ":<FontAwesomeIcon icon="times" />}
            </button></div>

          
          </div>
        </div>
        {this.state.forecastOn?<Chart className="cityListItem--element__big" name={name} data={forecastData} dataFetched={this.state.forecast}/>:null}
    </li>
  )}
  componentWillUnmount(){
    this.props.storageUpdate()
  }
}

export default SingleCity
