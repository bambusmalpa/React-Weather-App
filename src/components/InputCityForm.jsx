import React from 'react'; 

const InputCityForm=(props)=>{
  return(
    <form className={"input-group input-group-lg"} onSubmit={props.handleSubmit}>
      <input className={"form-control"} placeholder="Wpisz miasto"
      type="text" value={props.val} onChange={props.handleChange}/>
      <div className="input-group-append">
      <button className="btn btn-primary" type="submit">SZUKAJ</button></div>
    </form>
  )
}

export default InputCityForm