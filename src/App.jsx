import React, { Component } from 'react';
import InputCityForm from "./components/InputCityForm.jsx"
import ListOfCities from "./components/ListOfCities.jsx"




class App extends Component {
  constructor(props){
    super(props)
    this.state={
    fetchTimeStamp:600000,
    cities:[],
    lookingFor:""
  }}
  //Save list of cities in local store. Done by every "add" or "remove" citry from list.
  storageUpdate=()=>{
    localStorage.clear();
    localStorage.setItem("initial",JSON.stringify(this.state.cities))
  } 
  //Input sended to controled form.
  handleChangeInputCity=(e)=>{
    this.setState({
      lookingFor:e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();

    //filtration of repetition and empty input
    if(this.state.lookingFor===""){
      alert("podaj nazwe miasta")
      return
    }
    if(this.state.cities.includes(this.state.lookingFor)){
      alert("To miasto już jest na liście")
      return
    }
    else{
    this.setState({
      cities: this.state.cities.concat(this.state.lookingFor),
      lookingFor:""
    })
    
  }
  }
  
  handleDeleteCity=(e)=>{
   
    this.setState({
      cities:this.state.cities.filter(el=>
        el!==e.target.name
      )
    })
    this.storageUpdate()
  }
  componentDidMount=()=>{
    if(this.props.localStorageCities){this.setState({
      cities:this.props.localStorageCities
    })}
  }
  

  render() {
    this.storageUpdate()
    return (
      <div className="appContainer">
          <h1 className="mainTitle">PROGNOZA POGODY</h1>
          <InputCityForm
            val={this.state.lookingFor}
            handleChange={this.handleChangeInputCity}
            handleSubmit={this.handleSubmit}
           
          />
          
          <ListOfCities
            openForecast={this.openForecast}
            cities={this.state.cities}
            deleteCity={this.handleDeleteCity}
            storageUpdate={this.storageUpdate}
            timeStamp={this.state.fetchTimeStamp}
          />
          
        </div>
    );
  }
}

export default App;
