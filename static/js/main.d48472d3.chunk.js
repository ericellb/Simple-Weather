(this["webpackJsonpsimple-weather"]=this["webpackJsonpsimple-weather"]||[]).push([[0],{43:function(e,a,t){e.exports=t(74)},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(8),o=t.n(r),l=t(89),c=t(90),d=t(91),s=t(33),p=t.n(s),m=Object(l.a)((function(e){return{todayDate:{padding:"1em",paddingBottom:"0px",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"left"},todayDateInfo:{padding:"0.5em",fontSize:"32px",color:"white"},todayDateToday:{padding:"8px",paddingLeft:"0",fontSize:"28px",color:"white"},todayDateDate:{fontSize:"16px",color:"#9999ac"},todayTemp:{fontSize:"96px",display:"flex",justifyContent:"center",fontWeight:200,color:"white"},todayTempDeg:{height:"calc(100% - 16px)",fontSize:"32px",position:"relative",top:"16px"},todayCity:{display:"flex",justifyContent:"center",alignItems:"center",padding:"0.5em"},todayCityIcon:{paddingLeft:"8px",color:"#9999ac",cursor:"pointer",fontSize:"18px"},todayExtra:{padding:"1em",display:"flex",justifyContent:"center"},extraFeels:{paddingRight:"0.8em"},extraSunset:{paddingLeft:"0.8em"}}}));function h(e){var a=m({}),t=p()(new Date).format("ddd, MMM do");return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:a.todayDate},i.a.createElement(c.a,null),i.a.createElement("div",{className:a.todayDateInfo},i.a.createElement("div",{className:a.todayDateToday},"Today"),i.a.createElement("div",{className:a.todayDateDate},t))),i.a.createElement("div",{className:a.todayTemp},e.data.temp,i.a.createElement("div",{className:a.todayTempDeg},"\xb0C")),i.a.createElement("div",{className:a.todayCity},e.data.city," ",i.a.createElement(d.a,{className:a.todayCityIcon})),i.a.createElement("div",{className:a.todayExtra},i.a.createElement("div",{className:a.extraFeels},"Feels Like ",e.data.feelsLike)," \u2022"," ",i.a.createElement("div",{className:a.extraSunset},e.data.sunTime)))}var g=Object(l.a)((function(e){return{graphContainer:{display:"flex",height:"calc(100% - 19px)",fontSize:"12px"},graphTitles:{display:"flex",flexBasis:"10%",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"},graphTitleItem:{flexBasis:"100%"},graphItems:{flexBasis:"15%",display:"flex",alignItems:"flex-end",justifyContent:"center",position:"relative"},graphLineContainer:{width:"4px",height:"100%",position:"absolute",boxSizing:"border-box",paddingTop:"3em",paddingBottom:"2em"},graphDottedLine:{width:"4px",height:"100%",position:"absolute",boxSizing:"border-box",paddingTop:"3em",paddingBottom:"2em",backgroundImage:"linear-gradient(#9999ac 33%, rgba(255,255,255,0) 0%)",backgroundPosition:"center",backgroundSize:"2px 16px",backgroundRepeat:"repeat-y",backgroundClip:"content-box"},graphValueContainer:{width:"12px",height:"100%",position:"absolute",boxSizing:"border-box",paddingTop:"3em",paddingBottom:"2em",display:"flex",justifyContent:"center",alignItems:"flex-end"},graphValueLine:{background:"#302e62",height:"50%",borderRadius:"12px",width:"16px","&:hover":{backgroundColor:"#f8c500"}}}}));function u(e){var a=g({}),t=["showers","rain","drizzle"],n="Precipitation";return"uv"===e.type&&(n="UV Index",t=["low","moderate","high"]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,n),i.a.createElement("div",{className:a.graphContainer},i.a.createElement("div",{className:a.graphTitles},i.a.createElement("div",{className:a.graphTitleItem},t[0]),i.a.createElement("div",{className:a.graphTitleItem},t[1]),i.a.createElement("div",{className:a.graphTitleItem},t[2])),e.data.map((function(e){return i.a.createElement("div",{className:a.graphItems,key:e.title},i.a.createElement("div",{className:a.graphDottedLine}),i.a.createElement("div",{className:a.graphValueContainer},i.a.createElement("div",{className:a.graphValueLine,style:{height:"".concat(e.value,"%")}})),e.title)}))))}var f=Object(l.a)((function(e){return{todayContainer:{display:"flex",height:"100%",color:"white",flexWrap:"wrap"},todayInfo:{width:"100%",justifyContent:"center",alignItems:"center",textAlign:"center",color:"#9999ac",alignSelf:"flex-end"},graph:{width:"100%",height:"30%",alignSelf:"flex-end"}}}));function x(e){var a=f({});new Date;return i.a.createElement("div",{className:a.todayContainer},i.a.createElement("div",{className:a.todayInfo},i.a.createElement(h,{data:e.todayData.data})),i.a.createElement("div",{className:a.graph},i.a.createElement(u,{type:e.graphData.type,data:e.graphData.data})))}var y=t(21),b=t(13),v=t(92),E=t(97),w=t(98),N=t(99),C=t(94),T=t(95),I=t(93),S=t(22),j=t.n(S),k=Object(l.a)((function(e){return{weatherTitle:{fontWeight:400},searchBarContainer:{display:"inline-block",background:"white",borderRadius:"8px"},searchBar:{width:"250px"},citiesContainer:{display:"flex"},cityItem:{padding:"1em",boxSizing:"border-box"},cityName:{textAlign:"center"},cityImage:{height:"180px",width:"144px",borderRadius:"8px"},popperBar:{top:"2px",width:"298px"},popperPaper:{padding:"1em"},selected:{backgroundColor:"rgba(0, 0, 0, 0.08)"}}})),O="https://api.opencagedata.com/geocode/v1/json?key=".concat("c2ab0fa51f0844fcade0197c0c059111","&q="),D="https://api.unsplash.com/search/photos?page=1&per_page=1&client_id=".concat("2d5300fdc7dc99bbacd2a1fca10e4d536a552e7b4f470ee485a987a7748b858b","&query=");"https://maps.googleapis.com/maps/api/place/autocomplete/json?types=(cities)&key=".concat("AIzaSyA4mxHvWDDKTOKj0_jYCwygGY2Qzc209Xg","&input=");function z(){var e=k({}),a=Object(n.useState)(["Montreal"]),t=Object(b.a)(a,2),r=t[0],o=t[1],l=Object(n.useState)(),c=Object(b.a)(l,2),d=c[0],s=c[1],p=Object(n.useState)(""),m=Object(b.a)(p,2),h=m[0],g=m[1],u=Object(n.useState)(),f=Object(b.a)(u,2),x=f[0],S=f[1],z=Object(n.useState)(null),L=Object(b.a)(z,2),B=L[0],P=L[1],R=Object(n.useState)(!1),M=Object(b.a)(R,2),A=M[0],V=M[1],F=Object(n.createRef)(),W=Object(n.useState)(null),K=Object(b.a)(W,2),H=K[0],U=K[1];Object(n.useEffect)((function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){var a=e.coords.latitude+"+"+e.coords.longitude;j.a.get(O+a).then((function(e){o([].concat(Object(y.a)(r),[e.data.results[0].components.city]))}))}))}),[]),Object(n.useEffect)((function(){r.forEach((function(e){j.a.get(D+e).then((function(a){s([{name:e,img:a.data.results[0].urls.thumb}])}))}))}),[r]),Object(n.useEffect)((function(){if(F.current){var e={input:h,types:["(cities)"]};(new google.maps.places.AutocompleteService).getPlacePredictions(e,_)}}),[F]);var _=function(e,a){if(a==google.maps.places.PlacesServiceStatus.OK){var t=[];e.forEach((function(e){t.push(e.description)})),S(t)}},q=function(e){V(!1),g(e)};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:e.searchBarContainer,ref:function(e){return function(e){e&&null===H&&U(e)}(e)},onKeyDown:function(e){return function(e){if("ArrowDown"===e.key||"ArrowUp"===e.key){var a=B;null===a&&(a=-1),"ArrowDown"===e.key?a++:"ArrowUp"===e.key&&a--,a<0?a=0:x&&a>x.length-1&&(a=x.length-1),P(a)}else"Enter"===e.key&&x&&null!==B&&(console.log(x[0]),q(x[B]))}(e)}},i.a.createElement(v.a,{"aria-label":"search"},i.a.createElement(I.a,null)),i.a.createElement(E.a,{className:e.searchBar,placeholder:"Search new city...",inputProps:{"aria-label":"search google maps"},value:h,onChange:function(e){return a=e.target.value,g(a),V(!0),void(""===a&&(V(!1),P(null)));var a},inputRef:F})),i.a.createElement("h2",null,i.a.createElement("span",{className:e.weatherTitle},"Weather")," Forecast"),i.a.createElement("div",{className:e.citiesContainer},d&&d.map((function(a){return i.a.createElement("div",{className:e.cityItem,key:a.name},i.a.createElement("img",{className:e.cityImage,src:a.img}),i.a.createElement("div",{className:e.cityName},a.name))}))),i.a.createElement(w.a,{open:A,anchorEl:H,placement:"bottom-start",className:e.popperBar},i.a.createElement(N.a,{className:e.popperPaper},i.a.createElement(C.a,null,x&&x.map((function(a,t){return i.a.createElement(T.a,{button:!0,onClick:function(){return q(a)},className:t===B?e.selected:""},a)}))))))}var L=t(96),B=(t(72),Object(l.a)((function(e){return{graphContainer:{display:"flex",height:"95%",fontSize:"12px",flexDirection:"column"},graphItems:{flexBasis:"15%",display:"flex",alignItems:"flex-end",position:"relative"},graphDayItem:{paddingRight:"16px",minWidth:"80px",color:"#202d5d"},graphOtherItem:{paddingRight:"6px",paddingLeft:"6px",minWidth:"60px",display:"flex",justifyContent:"center",alignItems:"center",color:"#a4afb4",fontSize:"15px"},graphOtherIcon:{width:"100%",textAlign:"center"},graphBars:{position:"relative",width:"100%",height:"100%",display:"flex",alignItems:"flex-end"},graphLineContainer:{width:"4px",height:"100%",position:"absolute",boxSizing:"border-box",paddingTop:"3em",paddingBottom:"2em"},graphDottedLine:{width:"100%",height:"8px",position:"absolute",boxSizing:"border-box",borderTop:"3px dotted #d4e3f5"},graphValueContainer:{width:"100%",height:"5px",position:"absolute",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"flex-end"},graphValueLineHigh:{width:"50%",height:"8px",background:"#e94b0c",position:"absolute",left:"50%",borderRadius:"0px 8px 8px 0px",top:"-5px"},graphValueLineLow:{width:"50%",height:"8px",background:"#d4e3f5",position:"absolute",right:"50%",borderRadius:"8px 0px 0px 8px",top:"-5px"}}})));function P(e){var a=B({}),t=function(e){var a="fa ";switch(e.substring(0,e.length-1)){case"01":a+="fa-sun";break;case"02":a+="fa-cloud-sun";break;case"03":case"04":a+="fa-cloud";break;case"09":a+="fa-cloud-rain";break;case"10":a+="fa-cloud-sun-rain";break;case"11":a+="fa-bolt";break;case"13":a+="fa-snowflake";break;case"50":a+="fa-smog"}return a};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,"Precipitation"),i.a.createElement("div",{className:a.graphContainer},e.data.map((function(e){var n=function(e,a){var t=(a+e)/2,n=5*(a-t);n>50&&(n=50);var i=t-e;return i>50&&(i=50),{low:i,high:n}}(e.lowTemp,e.highTemp);return console.log(n),i.a.createElement("div",{className:a.graphItems,key:e.day},i.a.createElement("div",{className:a.graphDayItem},e.day),i.a.createElement("div",{className:a.graphOtherItem},i.a.createElement(L.a,{className:"fa fa-tint"})," ",e.precip,"%"),i.a.createElement("div",{className:a.graphOtherItem},i.a.createElement(L.a,{className:"".concat(t(e.weatherId)+" "+a.graphOtherIcon)})),i.a.createElement("div",{className:a.graphOtherItem},e.lowTemp,"\xb0C"),i.a.createElement("div",{className:a.graphBars},i.a.createElement("div",{className:a.graphDottedLine}),i.a.createElement("div",{className:a.graphValueContainer},i.a.createElement("div",{style:{height:"100%",width:"100%"}},i.a.createElement("div",{className:a.graphValueLineLow,style:{width:"".concat(n.low,"%")}}),i.a.createElement("div",{className:a.graphValueLineHigh,style:{width:"".concat(n.high,"%")}})))),i.a.createElement("div",{className:a.graphOtherItem},e.highTemp,"\xb0C"))}))))}t(73);var R=Object(l.a)((function(e){return{mainContainer:{display:"flex",justifyContent:"space-between",height:"100%",padding:"1em",boxSizing:"border-box"},leftContainer:{order:1,flexBasis:"60%",height:"100%",padding:"32px",boxSizing:"border-box",backgroundColor:"#f2fbff",borderRadius:"20px 0px 0px 20px"},citySelectContainer:{height:"50%"},forecastContainer:{height:"50%"},rightContainer:{order:2,flexBasis:"40%",height:"100%",padding:"32px",boxSizing:"border-box",backgroundColor:"#100e3b",borderRadius:"0px 20px 20px 0px"}}}));o.a.render(i.a.createElement((function(){var e=R({}),a={type:"forecast",data:[{day:"Monday",weatherId:"01d",precip:"50",highTemp:27,lowTemp:19,dayTemp:25},{day:"Tuesday",weatherId:"02d",precip:"50",highTemp:28,lowTemp:14,dayTemp:16},{day:"Wednesday",weatherId:"04d",precip:"50",highTemp:31,lowTemp:14,dayTemp:16},{day:"Thursday",weatherId:"03d",precip:"50",highTemp:14,lowTemp:14,dayTemp:16},{day:"Friday",weatherId:"02d",precip:"50",highTemp:18,lowTemp:14,dayTemp:16},{day:"Saturday",weatherId:"01d",precip:"50",highTemp:24,lowTemp:14,dayTemp:16},{day:"Sunday",weatherId:"04d",precip:"50",highTemp:24,lowTemp:14,dayTemp:16}]};return i.a.createElement("div",{className:e.mainContainer},i.a.createElement("div",{className:e.leftContainer},i.a.createElement("div",{className:e.citySelectContainer},i.a.createElement(z,null)),i.a.createElement("div",{className:e.forecastContainer},i.a.createElement(P,{type:a.type,data:a.data}))),i.a.createElement("div",{className:e.rightContainer},i.a.createElement(x,{todayData:{data:{temp:26,city:"Montreal, Quebec",feelsLike:28,sunTime:"Sunset : 20:18"}},graphData:{type:"rain",data:[{title:"12PM",value:50},{title:"2PM",value:60},{title:"4PM",value:70},{title:"6PM",value:80},{title:"8PM",value:90},{title:"10PM",value:100}]}})))}),null),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d48472d3.chunk.js.map