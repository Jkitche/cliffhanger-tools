(window["webpackJsonpcliffhanger-tools"]=window["webpackJsonpcliffhanger-tools"]||[]).push([[0],{122:function(e,t,a){e.exports=a(296)},127:function(e,t,a){},128:function(e,t,a){},296:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),i=(a(127),a(36)),l=a(330),u=a(333),s=(a(128),a(332)),m=a(331),d=a(329),p=a(326),f=a(5),g=a(12),h=a(114),v=Object(p.a)((function(e){return{margin:{margin:e.spacing(1)},root:{flexGrow:1}}})),b=function(e){var t=v(e),a=o.a.useState("#000"),n=Object(i.a)(a,2),r=n[0],c=n[1],u=o.a.useState(50),p=Object(i.a)(u,2),b=p[0],E=p[1],w=o.a.useState(null),y=Object(i.a)(w,2),k=y[0],j=y[1],C=Boolean(k),O=Object(f.a)({bar:{backgroundColor:"".concat(r),borderRadius:20},root:{backgroundColor:Object(g.d)("".concat(r),.5),borderRadius:20,height:10}})(d.a),x=C?"simple-popover-".concat(e.id):void 0;return o.a.createElement("div",{style:{cursor:"pointer",margin:"30px"}},o.a.createElement(O,{"aria-describedby":x,className:t.margin,variant:"determinate",color:"secondary",value:b,style:{width:"500px"},onClick:function(e){j(e.currentTarget)}}),o.a.createElement(s.a,{id:x,open:C,anchorEl:k,onClose:function(){j(null)},anchorOrigin:{horizontal:"center",vertical:"bottom"},transformOrigin:{horizontal:"center",vertical:"top"}},o.a.createElement(l.a,{container:!0,justify:"center"},o.a.createElement(l.a,{item:!0},o.a.createElement(m.a,{onChange:function(e){e.target&&e.target.value?E(parseInt(e.target.value,10)):E(0)},value:b,variant:"outlined",type:"number",inputProps:{max:"100",min:"0",step:".1",style:{padding:5}}}))),o.a.createElement(h.SketchPicker,{onChangeComplete:function(e){c(e.hex)},color:r})))},E=function(){for(var e=o.a.useState(3),t=Object(i.a)(e,2),a=t[0],n=t[1],r=[],c=0;c<a;c++)r.push(o.a.createElement(b,{id:"".concat(c)}));return o.a.createElement("div",{className:"App"},r,o.a.createElement(l.a,{container:!0,justify:"space-evenly",style:{width:558}},o.a.createElement(l.a,{item:!0},o.a.createElement(u.a,{color:"primary",variant:"contained",onClick:function(){n(a-1)}},"-")),o.a.createElement(l.a,{item:!0},o.a.createElement(u.a,{color:"primary",variant:"contained",onClick:function(){n(a+1)}},"+"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[122,1,2]]]);
//# sourceMappingURL=main.c2825cd4.chunk.js.map