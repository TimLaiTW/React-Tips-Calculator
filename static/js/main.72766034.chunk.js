(this.webpackJsonptips=this.webpackJsonptips||[]).push([[0],{20:function(t,e,a){},21:function(t,e,a){},26:function(t,e,a){},27:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),o=a(11),r=a.n(o),c=(a(20),a(6)),u=a(7),i=a(8),l=a(10),b=a(9),p={AL:.04,AK:0,AZ:5.6,AR:6.5,CA:7.25,CO:2.9,CT:6.35,DE:0,FL:6,GA:4,HI:4,ID:6,IL:6.25,IN:7,IA:6,KS:6.5,KY:6,LA:4.45,ME:5.5,MD:6,MA:6.25,MI:6,MN:6.875,MS:7,MO:4.225,MT:0,NE:5.5,NV:6.85,NH:0,NJ:6.625,NM:5.125,NY:4,NC:4.75,ND:5,OH:5.75,OK:4.5,OR:0,PA:6,RI:7,SC:6,SD:4.5,TN:7,TX:6.25,UT:6.1,VT:6,VA:5.3,WA:6.5,WV:6,WI:5,WY:4},h=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(){var t;return Object(u.a)(this,a),(t=e.call(this)).geoSuccess=function(e){fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e.coords.latitude+","+e.coords.longitude+"&result_type=postal_code&key=AIzaSyAOy93oynkrYlYclA9Oc-YOB35l9PweDtk").then((function(t){return t.json()})).then((function(e){"OK"===e.status?(t.setState({usstate:e.results[0].address_components[3].short_name}),t.salesTaxbyState(t.state.usstate)):t.setState({status:"not available"})}))},t.geoError=function(e){t.setState({status:"not available"})},t.salesTaxbyState=function(e){var a=p[e];a?t.setState({taxs:a}):t.setState({status:"not available"})},t.state={status:null,usstate:null,taxs:null},t}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({status:null}),navigator.geolocation&&navigator.geolocation.getCurrentPosition(this.geoSuccess,this.geoError,{enableHighAccuracy:!0,timeOut:2e4,maxiumAge:60})}},{key:"componentDidUpdate",value:function(){this.props.getTaxs&&(this.state.taxs?this.props.getTaxs(this.state.taxs):this.props.getTaxErr(this.state.status))}},{key:"render",value:function(){return null}}]),a}(n.Component),j=(a(21),a(1)),d=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).state={active:t.locked&&t.active||!1,value:t.value||"",error:t.error||"",label:t.label||"Label",defaultValue:t.defaultValue||""},n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){this.props.onChange&&this.props.onChange(this.state.value||this.state.defaultValue)}},{key:"render",value:function(){var t=this,e=this.state,a=e.active,n=e.value,s=e.error,o=e.label,r=this.props.locked,c="field ".concat((r?a:a||n)&&"active"," ").concat(r&&!a&&"locked");return Object(j.jsxs)("div",{className:c,children:[Object(j.jsx)("input",{className:"form-control",type:"number",value:n,placeholder:o,onChange:function(e){return t.setState({value:e.target.value,error:""})},onFocus:function(){return!r&&t.setState({active:!0})},onBlur:function(){return!r&&t.setState({active:!1})}}),Object(j.jsx)("label",{className:s&&"error",children:s||o})]})}}]),a}(s.a.Component),f=a(15),O=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).state={tips:15},n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){this.props.onChange&&this.props.onChange(this.state.tips)}},{key:"render",value:function(){var t=this;return Object(j.jsx)(f.a,{style:{borderStyle:"none",marginBottom:"8px"},size:"lg",children:[15,18,20,22].map((function(e){return Object(j.jsxs)("button",{type:"button",className:"btn btn-warning",style:{color:"white"},onClick:function(){t.setState({tips:e})},children:[e,"%"]},e)}))})}}]),a}(n.Component),g=a(13);function x(t){return Object(j.jsxs)(g.a,{style:{width:"280px",marginTop:"8px",backgroundColor:"rgba(255, 255, 255, 0.6)",boxShadow:"0px 4px 16px 0px rgba(0, 0, 0, 0.05)"},children:[Object(j.jsxs)(g.a.Header,{style:{backgroundColor:"rgba(255, 255, 255, 0.6)"},closeButton:!1,children:[Object(j.jsx)("strong",{className:"mr-auto",children:t.name}),Object(j.jsxs)("small",{children:[t.itemdefault,t.unit]})]}),Object(j.jsxs)(g.a.Body,{style:{color:"#3B87CE",fontSize:"large",fontWeight:"bold"},children:["$",t.amount]})]})}function m(t,e,a,n,s){return{name:t,amount:e,defaultunit:a,itemdefault:n,show:s}}function v(t){var e=Math.round(t.total/(1+t.tax/100)*100)/100,a=Math.round(100*(t.total-e))/100,n=Math.round(e*t.tips)/100,s=Math.round(100*(n+Number(t.total)))/100,o=Math.round(s/t.person*100)/100,r=[m("Tax",a,t.taxErr?null:"%",t.taxErr?t.taxErr:t.tax,!t.taxErr),m("Tips",n,"%",t.tips,!0),m("Total",s,null,null,!0),m("Total per person",o," Person",t.person,1!==t.person)].filter((function(t){return t.show}));return Object(j.jsx)("div",{children:r.map((function(t){return Object(j.jsx)(x,{name:t.name,amount:t.amount,unit:t.defaultunit,itemdefault:t.itemdefault},t.name)}))})}var S=a.p+"static/media/logo.8ace538f.png";a(25),a(26);var y=function(){var t=Object(n.useState)(!1),e=Object(c.a)(t,2),a=e[0],s=e[1],o=Object(n.useState)(!1),r=Object(c.a)(o,2),u=r[0],i=r[1],l=Object(n.useState)(0),b=Object(c.a)(l,2),p=b[0],f=b[1],g=Object(n.useState)(null),x=Object(c.a)(g,2),m=x[0],y=x[1],C=Object(n.useState)(0),T=Object(c.a)(C,2),k=T[0],A=T[1],N=Object(n.useState)(15),M=Object(c.a)(N,2),E=M[0],D=M[1],I=Object(n.useState)(1),w=Object(c.a)(I,2),B=w[0],V=w[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("img",{className:"logo",src:S,alt:""}),"Tips tip"]}),Object(j.jsx)(h,{getTaxs:function(t){f(t)},getTaxErr:function(t){y(t)}}),Object(j.jsx)(d,{label:"Total Amount",locked:!1,active:!1,onChange:function(t){A(t),t&&s(!0)}}),Object(j.jsx)(d,{label:"Size of Group",defaultValue:1,locked:!1,active:!1,onChange:function(t){V(t),t>1&&i(!0)}}),Object(j.jsx)(O,{onChange:function(t){D(t)}}),a?Object(j.jsx)(v,{total:k,tax:p,taxErr:m,tips:E,person:B,showPartition:u}):null]})})},C=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,o=e.getLCP,r=e.getTTFB;a(t),n(t),s(t),o(t),r(t)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),C()}},[[27,1,2]]]);
//# sourceMappingURL=main.72766034.chunk.js.map