//chart based on recharts 

import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import CustomTooltip from "./CustomTooltip"


class Chart extends PureComponent {
  state={
    dataFetched:this.props.dataFetched,
    weather:"",
  }

  render() {
   
    return (
      <ResponsiveContainer width="100%" height={200}>
      <LineChart
        
        data={this.props.data}
        margin={{
          top: 10, right: 10, left: 0, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis/>
        {this.state.dataFetched?<Tooltip content={<CustomTooltip />}/>:null}
        
        <Legend />
       <Line type="monotone" dataKey="temp" name="Prognozowana temperatura" stroke="#8884d8" activeDot={{ r: 10 }} />
        
        
    
      </LineChart>
      </ResponsiveContainer>
    );
  }
  
}
export default Chart



 