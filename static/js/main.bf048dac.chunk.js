(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(t,e,a){t.exports=a.p+"static/media/cloud.49f477a1.png"},168:function(t,e,a){t.exports=a(358)},357:function(t,e,a){},358:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),o=a(51),i=a.n(o),r=a(26),s=a(27),l=a(31),m=a(28),p=a(32),u=function(t){return c.a.createElement("form",{className:"input-group input-group-lg",onSubmit:t.handleSubmit},c.a.createElement("input",{className:"form-control",placeholder:"Wpisz miasto",type:"text",value:t.val,onChange:t.handleChange}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"SZUKAJ")))},d=a(132),h=a.n(d),f=a(16);var g=function(t){var e=t.payload;if(t.active){var a="https://openweathermap.org/img/w/".concat(e[0].payload.icon,".png");return c.a.createElement("div",{className:"container"},c.a.createElement("p",{className:"label"},"Temperatura: ".concat(e[0].payload.temp,"\xb0C")),c.a.createElement("p",{className:"label"},"Data: ".concat(e[0].payload.time)),c.a.createElement("img",{src:a,alt:""}),c.a.createElement("p",{className:"label"},e[0].payload.conditions))}return null},b=function(t){function e(){var t,a;Object(r.a)(this,e);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={dataFetched:a.props.dataFetched,weather:""},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return c.a.createElement(f.e,{width:"100%",height:200},c.a.createElement(f.d,{data:this.props.data,margin:{top:10,right:10,left:0,bottom:5}},c.a.createElement(f.a,{strokeDasharray:"3 3"}),c.a.createElement(f.g,{dataKey:"time"}),c.a.createElement(f.h,null),this.state.dataFetched?c.a.createElement(f.f,{content:c.a.createElement(g,null)}):null,c.a.createElement(f.b,null),c.a.createElement(f.c,{type:"monotone",dataKey:"temp",name:"Prognozowana temperatura",stroke:"#8884d8",activeDot:{r:10}})))}}]),e}(n.PureComponent),E=a(39),v=a(83),y=a(56);E.b.add(y.a,y.b,y.c);var C=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(m.a)(e).call(this,t))).fetchDataCurrentTemp=function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a.props.name,"&units=metric&lang=pl&APPID=3400000105dc079b5c25c9439613c410")).then(function(t){return t.json()}).then(function(t){200===t.cod?(a.setState({code:t.cod,temperature:"".concat(Math.round(t.main.temp),"\xb0C"),description:t.weather[0].description,icon:"https://openweathermap.org/img/w/".concat(t.weather[0].icon,".png")}),a.fetchDataForecast()):a.setState({code:t.cod,temperature:"Brak danych",description:"Brak danych",icon:h.a})}),a.props.storageUpdate()},a.fetchDataForecast=function(){fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(a.props.name,"&units=metric&lang=pl&APPID=3400000105dc079b5c25c9439613c410")).then(function(t){return t.json()}).then(function(t){var e=function(t){var e=t.split(":").join(" ").split("-").join(" ").split(" ");return"".concat(e[2],"-").concat(e[1]," ").concat(e[3],":").concat(e[4])},n=t.list.map(function(t){return{time:e(t.dt_txt),temp:Math.round(t.main.temp),conditions:t.weather[0].description,icon:t.weather[0].icon}});a.setState({forecastData:n,forecast:!0})})},a.openForecast=function(){200===a.state.code&&!1===a.state.forecastOn&&a.setState({forecastOn:!0,foreCastButtonContent:"UKRYJ PROGNOZ\u0118"}),!0===a.state.forecastOn&&a.setState({forecastOn:!1,foreCastButtonContent:"POKA\u017b PROGNOZ\u0118"})},a.state={name:"",temperature:"",description:"",icon:"",code:"",forecastOn:!1,forecast:!1,forecastData:"",foreCastButtonContent:"POKA\u017b PROGNOZ\u0118"},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.fetchDataCurrentTemp(),window.setInterval(this.fetchDataCurrentTemp,this.props.timeStamp)}},{key:"render",value:function(){var t=this.props.name,e=this.state,a=e.temperature,n=e.icon,o=e.description,i=e.code,r=e.forecastData,s=c.a.createElement("div",{className:"spinner-border text-danger",role:"status"}),l="cityListItem--element",m=t.charAt(0).toUpperCase()+t.slice(1);return c.a.createElement("li",{className:"list-group-item list-group-item-action"},c.a.createElement("div",null,c.a.createElement("div",{className:"cityListItem"},c.a.createElement("div",{className:l,onClick:this.showForecast},m),c.a.createElement("div",{className:l},i?a:s),c.a.createElement("div",{className:l},c.a.createElement("img",{className:"cityListItem--element--image",src:n,title:o,alt:o})),c.a.createElement("div",{className:l},c.a.createElement("button",{className:200===this.state.code?"btn btn-success icon":"btn btn-outline-secondary icon",name:t,onClick:200===i?this.openForecast:null},window.innerWidth>=900?this.state.foreCastButtonContent:c.a.createElement(v.a,{icon:"chart-line"}))),c.a.createElement("div",{className:l},c.a.createElement("button",{className:"btn btn-danger icon",name:t,onClick:this.props.deleteCity},window.innerWidth>=900?"USU\u0143 MIASTO":c.a.createElement(v.a,{icon:"times"}))))),this.state.forecastOn?c.a.createElement(b,{className:"cityListItem--element__big",name:t,data:r,dataFetched:this.state.forecast}):null)}},{key:"componentWillUnmount",value:function(){this.props.storageUpdate()}}]),e}(c.a.Component),O=function(t){var e=t.cities;return c.a.createElement("ol",{className:"list-group"},e.map(function(e){return c.a.createElement(C,{key:e,name:e,deleteCity:t.deleteCity,storageUpdate:t.storageUpdate,timeStamp:t.timeStamp})}))},S=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(m.a)(e).call(this,t))).storageUpdate=function(){localStorage.clear(),localStorage.setItem("initial",JSON.stringify(a.state.cities))},a.handleChangeInputCity=function(t){a.setState({lookingFor:t.target.value})},a.handleSubmit=function(t){t.preventDefault(),""!==a.state.lookingFor?a.state.cities.includes(a.state.lookingFor)?alert("To miasto ju\u017c jest na li\u015bcie"):a.setState({cities:a.state.cities.concat(a.state.lookingFor),lookingFor:""}):alert("podaj nazwe miasta")},a.handleDeleteCity=function(t){a.setState({cities:a.state.cities.filter(function(e){return e!==t.target.name})}),a.storageUpdate()},a.componentDidMount=function(){a.props.localStorageCities&&a.setState({cities:a.props.localStorageCities})},a.state={fetchTimeStamp:6e5,cities:[],lookingFor:""},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return this.storageUpdate(),c.a.createElement("div",{className:"appContainer"},c.a.createElement("h1",{className:"mainTitle"},"PROGNOZA POGODY"),c.a.createElement(u,{val:this.state.lookingFor,handleChange:this.handleChangeInputCity,handleSubmit:this.handleSubmit}),c.a.createElement(O,{openForecast:this.openForecast,cities:this.state.cities,deleteCity:this.handleDeleteCity,storageUpdate:this.storageUpdate,timeStamp:this.state.fetchTimeStamp}))}}]),e}(n.Component),w=(a(356),a(357),JSON.parse(localStorage.getItem("initial")));i.a.render(c.a.createElement(S,{localStorageCities:w}),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.bf048dac.chunk.js.map