(this["webpackJsonpsimple-weather"]=this["webpackJsonpsimple-weather"]||[]).push([[0],{55:function(e,a,t){e.exports=t(86)},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(9),o=t.n(i),c=t(7),l=t(101),s=t(102),p=t(103),d=t(22),m=t.n(d),u=t(11),h=Object(l.a)((function(e){return{todayDate:{padding:"1em",paddingBottom:"0px",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"left"},todayDateInfo:{padding:"0.5em",fontSize:"32px",color:"white"},todayDateToday:{padding:"8px",paddingLeft:"0",fontSize:"28px",color:"white"},todayDateDate:{fontSize:"16px",color:"#9999ac"},todayTemp:{fontSize:"96px",display:"flex",justifyContent:"center",fontWeight:200,color:"white"},todayTempDeg:{height:"calc(100% - 16px)",fontSize:"32px",position:"relative",top:"16px"},todayCity:{display:"flex",justifyContent:"center",alignItems:"center",padding:"0.5em"},todayCityIcon:{paddingLeft:"8px",color:"#9999ac",cursor:"pointer",fontSize:"18px"},todayExtra:{padding:"1em",display:"flex",justifyContent:"center"},extraFeels:{paddingRight:"0.8em"},extraSunset:{paddingLeft:"0.8em"}}}));function g(e){var a,t=h({}),n=Object(u.c)((function(e){return e.weather.tempScale})),i=m()(new Date).format("ddd, MMM do");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.todayDate},r.a.createElement(s.a,null),r.a.createElement("div",{className:t.todayDateInfo},r.a.createElement("div",{className:t.todayDateToday},"Today"),r.a.createElement("div",{className:t.todayDateDate},i))),r.a.createElement("div",{className:t.todayTemp},(a=e.data.temp,a-=273.15,"farenheit"===n&&(a=1.8*a+32),Math.floor(10*a)/10),r.a.createElement("div",{className:t.todayTempDeg},"celsius"===n?"\xb0C":"\xb0F")),r.a.createElement("div",{className:t.todayCity},e.data.city," ",r.a.createElement(p.a,{className:t.todayCityIcon})),r.a.createElement("div",{className:t.todayExtra},r.a.createElement("div",{className:t.extraFeels},"Humidity ",e.data.humidity," %")," \u2022"," ",r.a.createElement("div",{className:t.extraSunset},e.data.sunTime," Sunset")))}var f=Object(l.a)((function(e){return{graphContainer:{display:"flex",height:"calc(100% - 19px)",fontSize:"12px"},graphTitles:{display:"flex",flexBasis:"10%",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"},graphTitleItem:{flexBasis:"100%"},graphItems:{flexBasis:"15%",display:"flex",alignItems:"flex-end",justifyContent:"center",position:"relative"},graphLineContainer:{width:"4px",height:"100%",position:"absolute",boxSizing:"border-box",paddingTop:"3em",paddingBottom:"2em"},graphDottedLine:{width:"4px",height:"100%",position:"absolute",boxSizing:"border-box",paddingTop:"3em",paddingBottom:"2em",backgroundImage:"linear-gradient(#9999ac 33%, rgba(255,255,255,0) 0%)",backgroundPosition:"center",backgroundSize:"2px 16px",backgroundRepeat:"repeat-y",backgroundClip:"content-box"},graphValueContainer:{width:"12px",height:"100%",position:"absolute",boxSizing:"border-box",paddingTop:"3em",paddingBottom:"2em",display:"flex",justifyContent:"center",alignItems:"flex-end"},graphValueLine:{background:"#302e62",height:"50%",borderRadius:"12px",width:"16px","&:hover":{backgroundColor:"#f8c500"}}}}));function b(e){var a=f({}),t=["showers","rain","drizzle"],n="Precipitation";"uv"===e.type&&(n="UV Index",t=["low","moderate","high"]);var i=function(a){if("rain"===e.type)return(a*=100)>100&&(a=100),a};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,n),r.a.createElement("div",{className:a.graphContainer},r.a.createElement("div",{className:a.graphTitles},r.a.createElement("div",{className:a.graphTitleItem},t[0]),r.a.createElement("div",{className:a.graphTitleItem},t[1]),r.a.createElement("div",{className:a.graphTitleItem},t[2])),e.data.map((function(e){return r.a.createElement("div",{className:a.graphItems,key:e.title},r.a.createElement("div",{className:a.graphDottedLine}),r.a.createElement("div",{className:a.graphValueContainer},r.a.createElement("div",{className:a.graphValueLine,style:{height:"".concat(i(e.value),"%")}})),e.title)}))))}var y=Object(l.a)((function(e){return{todayContainer:{display:"flex",height:"100%",color:"white",flexWrap:"wrap"},todayInfo:{width:"100%",justifyContent:"center",alignItems:"center",textAlign:"center",color:"#9999ac",alignSelf:"flex-end"},graph:{width:"100%",height:"30%",alignSelf:"flex-end"}}}));function x(e){console.log(e.todayData);var a=y({});return r.a.createElement("div",{className:a.todayContainer},r.a.createElement("div",{className:a.todayInfo},r.a.createElement(g,{data:e.todayData.data})),r.a.createElement("div",{className:a.graph},r.a.createElement(b,{type:e.graphData.type,data:e.graphData.data})))}var v,E=t(28),w=t(24),O=t.n(w),j=t(104),N=t(109),C=t(110),D=t(111),S=t(106),k=t(107),I=t(105),T=t(31),A=t.n(T),P=t(47);!function(e){e[e.UPDATE_DAILY=0]="UPDATE_DAILY",e[e.UPDATE_WEEKLY=1]="UPDATE_WEEKLY",e[e.UPDATE_TEMP_SCALE=2]="UPDATE_TEMP_SCALE"}(v||(v={}));var L=function(e){return function(){var a=Object(P.a)(A.a.mark((function a(t){var n,r,i,o;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=encodeURIComponent(e),n="http://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&appid=").concat("e03e2793aa948f9b8e1238d63fbe9d4d"),a.next=4,O.a.get(n);case 4:return r=a.sent,t({type:v.UPDATE_WEEKLY,payload:r.data.list}),i="http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("e03e2793aa948f9b8e1238d63fbe9d4d"),a.next=9,O.a.get(i);case 9:o=a.sent,t({type:v.UPDATE_DAILY,payload:o.data});case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},B=Object(l.a)((function(e){return{weatherTitle:{fontWeight:400},searchBarContainer:{display:"inline-block",background:"white",borderRadius:"8px"},searchBar:{width:"250px"},popperBar:{top:"2px",width:"298px"},popperPaper:{padding:"1em"},selected:{backgroundColor:"rgba(0, 0, 0, 0.08)"}}}));function z(){var e=B({}),a=Object(u.b)(),t=Object(n.useState)(""),i=Object(c.a)(t,2),o=i[0],l=i[1],s=Object(n.useState)(),p=Object(c.a)(s,2),d=p[0],m=p[1],h=Object(n.useState)(null),g=Object(c.a)(h,2),f=g[0],b=g[1],y=Object(n.useState)(!1),x=Object(c.a)(y,2),v=x[0],E=x[1],w=Object(n.createRef)(),O=Object(n.useState)(null),T=Object(c.a)(O,2),A=T[0],P=T[1];Object(n.useEffect)((function(){if(w.current){var e={input:o,types:["(cities)"]};(new google.maps.places.AutocompleteService).getPlacePredictions(e,z)}}),[w]);var z=function(e,a){if(a===google.maps.places.PlacesServiceStatus.OK){var t=[];e.forEach((function(e){t.push(e.description)})),m(t)}},_=function(e){E(!1),l(e),function(e){a(L(e))}(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.searchBarContainer,ref:function(e){return function(e){e&&null===A&&P(e)}(e)},onKeyDown:function(e){return function(e){if("ArrowDown"===e.key||"ArrowUp"===e.key){var a=f;null===a&&(a=-1),"ArrowDown"===e.key?a++:"ArrowUp"===e.key&&a--,a<0?a=0:d&&a>d.length-1&&(a=d.length-1),b(a)}else"Enter"===e.key&&d&&null!==f&&_(d[f])}(e)}},r.a.createElement(j.a,{"aria-label":"search"},r.a.createElement(I.a,null)),r.a.createElement(N.a,{className:e.searchBar,placeholder:"Search new city...",inputProps:{"aria-label":"search google maps"},value:o,onChange:function(e){return a=e.target.value,l(a),E(!0),void(""===a&&(E(!1),b(null)));var a},inputRef:w})),r.a.createElement(C.a,{open:v,anchorEl:A,placement:"bottom-start",className:e.popperBar},r.a.createElement(D.a,{className:e.popperPaper},r.a.createElement(S.a,null,d&&d.map((function(a,t){return r.a.createElement(k.a,{button:!0,onClick:function(){return _(a)},className:t===f?e.selected:""},a)}))))))}var _=Object(l.a)((function(e){return{weatherTitle:{fontWeight:400},searchBarContainer:{display:"inline-block",background:"white",borderRadius:"8px"},searchBar:{width:"250px"},citiesContainer:{display:"flex"},cityItem:{padding:"1em",boxSizing:"border-box"},cityName:{textAlign:"center"},cityImage:{height:"180px",width:"144px",borderRadius:"8px"},popperBar:{top:"2px",width:"298px"},popperPaper:{padding:"1em"},selected:{backgroundColor:"rgba(0, 0, 0, 0.08)"}}})),R="https://api.opencagedata.com/geocode/v1/json?key=".concat("c2ab0fa51f0844fcade0197c0c059111","&q="),U="https://api.unsplash.com/search/photos?page=1&per_page=1&client_id=".concat("2d5300fdc7dc99bbacd2a1fca10e4d536a552e7b4f470ee485a987a7748b858b","&query=");function M(){var e=_({}),a=Object(u.b)(),t=Object(n.useState)(["New York"]),i=Object(c.a)(t,2),o=i[0],l=i[1],s=Object(n.useState)(o[0]),p=Object(c.a)(s,2),d=p[0],m=(p[1],Object(n.useState)()),h=Object(c.a)(m,2),g=h[0],f=h[1];return Object(n.useEffect)((function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){var a=e.coords.latitude+"+"+e.coords.longitude;O.a.get(R+a).then((function(e){console.log(e),l([].concat(Object(E.a)(o),[e.data.results[0].components.town]))}))}))}),[]),Object(n.useEffect)((function(){o&&o.forEach((function(e){console.log(e),O.a.get(U+e).then((function(a){f([{name:e,img:a.data.results[0].urls.thumb}])}))}))}),[o]),Object(n.useEffect)((function(){a(L(d))}),[d]),r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement("h2",null,r.a.createElement("span",{className:e.weatherTitle},"Weather")," Forecast"),r.a.createElement("div",{className:e.citiesContainer},g&&g.map((function(a){return r.a.createElement("div",{className:e.cityItem,key:a.name},r.a.createElement("img",{className:e.cityImage,src:a.img,alt:a.name}),r.a.createElement("div",{className:e.cityName},a.name))}))))}var W=t(108),V=(t(84),Object(l.a)((function(e){return{graphContainer:{display:"flex",height:"95%",fontSize:"12px",flexDirection:"column"},graphItems:{flexBasis:"15%",display:"flex",alignItems:"flex-end",position:"relative"},graphDayItem:{paddingRight:"16px",minWidth:"80px",color:"#202d5d"},graphOtherItem:{paddingLeft:"16px",minWidth:"90px",display:"flex",justifyContent:"flex-start",alignItems:"center",color:"#a4afb4",fontSize:"16px"},graphOtherIcon:{width:"100%",textAlign:"center"},graphBars:{position:"relative",width:"100%",height:"100%",display:"flex",alignItems:"flex-end"},graphLineContainer:{width:"4px",height:"100%",position:"absolute",boxSizing:"border-box",paddingTop:"3em",paddingBottom:"2em"},graphDottedLine:{width:"100%",height:"8px",position:"absolute",boxSizing:"border-box",borderTop:"3px dotted #d4e3f5"},graphValueContainer:{width:"100%",height:"5px",position:"absolute",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"flex-end"},graphValueLineHigh:{width:"50%",height:"8px",background:"#e94b0c",position:"absolute",left:"50%",borderRadius:"0px 8px 8px 0px",top:"-5px"},graphValueLineLow:{width:"50%",height:"8px",background:"#d4e3f5",position:"absolute",right:"50%",borderRadius:"8px 0px 0px 8px",top:"-5px"}}})));function Y(e){var a=V({}),t=Object(u.c)((function(e){return e.weather.tempScale})),n=function(e){var a="fa ";switch(e.substring(0,e.length-1)){case"01":a+="fa-sun";break;case"02":a+="fa-cloud-sun";break;case"03":case"04":a+="fa-cloud";break;case"09":a+="fa-cloud-rain";break;case"10":a+="fa-cloud-sun-rain";break;case"11":a+="fa-bolt";break;case"13":a+="fa-snowflake";break;case"50":a+="fa-smog"}return a},i=function(e){return e-=273.15,"farenheit"===t&&(e=1.8*e+32),Math.floor(10*e)/10+("celsius"===t?"\xb0C":"\xb0F")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Precipitation"),r.a.createElement("div",{className:a.graphContainer},e.data.map((function(t){var o=function(a,t){var n=5*(t-e.weeklyAvg);n>50?n=50:n<0&&(n=0);var r=e.weeklyAvg-a;return r>50?r=50:r<0&&(r=0),{low:r,high:n}}(t.lowTemp,t.highTemp);return r.a.createElement("div",{className:a.graphItems,key:t.day},r.a.createElement("div",{className:a.graphDayItem},t.day),r.a.createElement("div",{className:a.graphOtherItem},r.a.createElement(W.a,{className:"fa fa-tint"}),t.precip," mm"),r.a.createElement("div",{className:a.graphOtherItem},r.a.createElement(W.a,{className:"".concat(n(t.weatherId)+" "+a.graphOtherIcon)})),r.a.createElement("div",{className:a.graphOtherItem},i(t.lowTemp)),r.a.createElement("div",{className:a.graphBars},r.a.createElement("div",{className:a.graphDottedLine}),r.a.createElement("div",{className:a.graphValueContainer},r.a.createElement("div",{style:{height:"100%",width:"100%"}},r.a.createElement("div",{className:a.graphValueLineLow,style:{width:"".concat(o.low,"%")}}),r.a.createElement("div",{className:a.graphValueLineHigh,style:{width:"".concat(o.high,"%")}})))),r.a.createElement("div",{className:a.graphOtherItem},i(t.highTemp)))}))))}t(85);var F=Object(l.a)((function(e){return{mainContainer:{display:"flex",justifyContent:"space-between",height:"100%",padding:"1em",boxSizing:"border-box"},leftContainer:{order:1,flexBasis:"60%",height:"100%",padding:"32px",boxSizing:"border-box",backgroundColor:"#f2fbff",borderRadius:"20px 0px 0px 20px"},citySelectContainer:{height:"50%"},forecastContainer:{height:"50%"},rightContainer:{order:2,flexBasis:"40%",height:"100%",padding:"32px",boxSizing:"border-box",backgroundColor:"#100e3b",borderRadius:"0px 20px 20px 0px"}}}));var K=t(49),q=t(18);function H(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function J(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?H(t,!0).forEach((function(a){Object(q.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var G={todayData:void 0,forecastData:[],tempScale:"celsius"},Q=t(15),X=Object(Q.combineReducers)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case v.UPDATE_WEEKLY:return J({},e,{forecastData:a.payload});case v.UPDATE_DAILY:return console.log(a),J({},e,{todayData:a.payload});case v.UPDATE_TEMP_SCALE:return J({},e);default:return e}}}),Z=t(50),$=Object(Q.createStore)(X,Object(Z.composeWithDevTools)(Object(Q.applyMiddleware)(K.a)));o.a.render(r.a.createElement(u.a,{store:$},r.a.createElement((function(){var e=F({}),a=Object(u.c)((function(e){return e.weather.forecastData})),t=Object(u.c)((function(e){return e.weather.todayData})),i=Object(n.useState)({weeklyAvg:0,type:"forecast",data:[]}),o=Object(c.a)(i,2),l=o[0],s=o[1],p=Object(n.useState)({data:{temp:26,city:"New York, New York",humidity:28,sunTime:"Sunset : 20:18"}}),d=Object(c.a)(p,2),h=d[0],g=d[1],f=Object(n.useState)({type:"rain",data:[]}),b=Object(c.a)(f,2),y=b[0],v=b[1];return Object(n.useEffect)((function(){if(a.length>0){for(var e={weeklyAvg:0,type:"forecast",data:[]},t={type:"rain",data:[]},n=0;n<5;n++){var r={},i=8*n;r.lowTemp=a[i].main.temp_min,r.highTemp=a[i].main.temp_max,r.dayTemp=a[i].main.temp,r.weatherId=a[i].weather[0].icon,r.day=m.a.unix(a[i].dt).format("ddd, MMM Do"),a[i].rain?r.precip=a[i].rain:a[i].snow&&(r.precip=a[i].snow),r.precip&&r.precip["3h"]&&(r.precip=Math.round(100*r.precip["3h"])/100),isNaN(r.precip)&&(r.precip=0),e.data.push(r),e.weeklyAvg+=r.dayTemp}for(var o=0;o<6;o++){var c={};c.title=m.a.unix(a[o].dt).format("h A"),a[o].rain?c.value=a[o].rain:a[o].snow&&(c.value=a[o].snow),c.value&&c.value["3h"]&&(c.value=Math.round(100*c.value["3h"])/100),isNaN(c.value)&&(c.value=0),t.data.push(c)}console.log(t),e.weeklyAvg/=5,s(e),v(t)}}),[a]),Object(n.useEffect)((function(){if(void 0!==t){var e={data:{}};e.data.city=t.name,e.data.temp=t.main.temp,e.data.sunTime=m.a.unix(t.sys.sunset).format("h:mm A"),e.data.humidity=t.main.humidity,g(e)}}),[t]),r.a.createElement("div",{className:e.mainContainer},r.a.createElement("div",{className:e.leftContainer},r.a.createElement("div",{className:e.citySelectContainer},r.a.createElement(M,null)),r.a.createElement("div",{className:e.forecastContainer},r.a.createElement(Y,{type:l.type,data:l.data,weeklyAvg:l.weeklyAvg}))),r.a.createElement("div",{className:e.rightContainer},r.a.createElement(x,{todayData:h,graphData:y})))}),null)),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.ddcb4019.chunk.js.map