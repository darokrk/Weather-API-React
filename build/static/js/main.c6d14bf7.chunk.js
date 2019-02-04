(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),s=a.n(c),i=(a(14),a(3)),o=a(4),l=a(6),u=a(5),m=a(7),h=(a(17),a(19),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"input__header"},"Search Weather in Your City"),r.a.createElement("form",{onSubmit:e.submit},r.a.createElement("input",{onChange:e.search,value:e.value,className:"input__text",type:"text",placeholder:"Insert city name"}),r.a.createElement("button",{className:"input__btn"},"Search")))}),p=(a(21),function(e){var t=e.data,a=t.img,n=t.name,c=t.country,s=t.weather,i=t.temp,o=t.sunrise,l=t.sunset,u=t.pressure,m=t.humidity,h=t.wind,p=t.coords,f=t.error,d=null;if(!f&&n){var _=Math.floor(i),w=new Date(1e3*o).toLocaleTimeString(),v=new Date(1e3*l).toLocaleTimeString();d=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"icon__wrapper"},r.a.createElement("img",{className:"icon__img",src:"https://openweathermap.org/img/w/".concat(a,".png"),alt:""})),r.a.createElement("div",{className:"content__wrapper"},r.a.createElement("p",{className:"city__info"},n,", ",c,r.a.createElement("span",{className:"city__info--italic"}," ",s)),r.a.createElement("p",{className:"weather__info"},r.a.createElement("span",{className:"weather__info--bg"},_," \xb0C")),r.a.createElement("p",{className:"weather__info"},"sunrise ",w),r.a.createElement("p",{className:"weather__info"},"sunset ",v),r.a.createElement("p",{className:"weather__info"},"pressure ",u," hpa"),r.a.createElement("p",{className:"weather__info"},"humidity ",m," %"),r.a.createElement("p",{className:"weather__info"},"wind ",h," m/s"),r.a.createElement("p",{className:"weather__info"},"coords",r.a.createElement("a",{href:"https://openweathermap.org/weathermap?zoom=12&lat=".concat(p.lat,"&lon=").concat(p.lon),className:"coord__info",target:"__blank","aria-label":"Map link to city"}," ".concat(p.lat," , ").concat(p.lon)))))}return r.a.createElement("div",null,f?r.a.createElement("p",{className:"weather__info--error"},"We cannot find ".concat(n)):d)}),f="f898e87d753c1e5de2cf49473bed40c5",d=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",img:"",name:"",country:"",weather:"",temp:"",sunrise:"",sunset:"",pressure:"",humidity:"",wind:"",coords:"",error:!1},a.handleInputChange=function(e){e.preventDefault(),a.setState({value:e.target.value})},a.handleCitySubmit=function(e){e.preventDefault();var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(a.state.value,"&units=metric&APPID=").concat(f);if(!(a.state.value.length>0))return alert("Please insert city name first");fetch(t).then(function(e){if(e.ok)return e;throw Error(e.status)}).then(function(e){return e.json()}).then(function(e){var t=e.sys,n=e.weather,r=e.main,c=e.wind,s=e.coord;a.setState(function(e){return{img:n[0].icon,name:e.value,country:t.country,weather:n[0].description,temp:r.temp,sunrise:t.sunrise,sunset:t.sunset,pressure:r.pressure,humidity:r.humidity,wind:c.speed,coords:s,error:!1}})}).catch(function(e){console.log("".concat(e," something goes wrong :(")),a.setState(function(e){return{error:!0,name:e.value}})})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.value===this.state.value&&this.setState({value:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"container"},r.a.createElement(h,{submit:this.handleCitySubmit,search:this.handleInputChange,value:this.state.value}),r.a.createElement(p,{data:this.state})))}}]),t}(n.Component);s.a.render(r.a.createElement(d,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(23)}},[[8,2,1]]]);
//# sourceMappingURL=main.c6d14bf7.chunk.js.map