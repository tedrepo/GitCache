(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-749de77f"],{9191:function(t,e,i){"use strict";var s=i("fea2"),r=i.n(s);r.a},d9c8:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ef-svg-canvas"},[i("span",[t._v(" 基于 svg 的画布占位 ")]),i("div",{staticClass:"div1"},[i("svg",{attrs:{id:"svg1",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"400px"}})]),i("span",[t._v(" 控制 svg 的缩放 ")]),i("div",{staticClass:"ef-svg-zoom"},[i("svg",{staticStyle:{"background-color":"#FAFAFA"},attrs:{id:"svgzoom"}},[i("div",[t._v(" Svg 放缩占位符 ")]),i("g",{attrs:{id:"svgPanel"}},[i("g",{attrs:{id:"grid"}}),i("defs",[i("path",{attrs:{id:"path1",d:"M300,200 a1,1 0 0,0 100,0"}})]),i("span",[t._v(" Svg 放缩占位符 ")]),i("text",{staticStyle:{fill:"green"},attrs:{x:"10",y:"100"}},[i("textPath",{attrs:{"xlink:href":"#path1"}},[t._v("啦啦啦啦啦啦啦啦啦啦")])])])]),i("button",{on:{click:function(e){return t.zoom(1.1)}}},[t._v("放大")]),i("button",{on:{click:function(e){return t.zoom(.9)}}},[t._v("缩小")])]),i("div",{staticClass:"ef-svg-draw"},[i("span",[t._v(" svg 基础绘制占位 ")]),i("svg",{staticStyle:{height:"500px",width:"600px"},attrs:{id:"svgdraw"}},[i("rect",{staticStyle:{fill:"grey",stroke:"black","stroke-width":"2"},attrs:{x:"10",y:"20",width:"100",height:"50"}}),i("rect",{staticStyle:{fill:"grey",stroke:"black","stroke-width":"2"},attrs:{x:"150",y:"20",width:"100",height:"50",rx:"10",ry:"10"}}),i("rect",{staticStyle:{fill:"blue",stroke:"green","stroke-width":"5",opacity:"0.9"},attrs:{x:"10",y:"100",rx:"30",ry:"10",width:"50",height:"100"}}),i("ellipse",{staticStyle:{fill:"red",stroke:"purple","stroke-width":"3","fill-opacity":"0.2","stroke-opacity":"0.8"},attrs:{cx:"40",cy:"100",rx:"30",ry:"10"}}),i("circle",{attrs:{cx:"250",cy:"150",r:"40",stroke:"black","stroke-width":"2",fill:"red"}}),i("circle",{attrs:{cx:"150",cy:"150",r:"40",stroke:"black","stroke-width":"2",fill:"red"}}),i("circle",{attrs:{cx:"150",cy:"150",r:"30",stroke:"black","stroke-width":"2",fill:"white"}}),i("ellipse",{attrs:{cx:"100",cy:"250",rx:"80",ry:"40",stroke:"black","stroke-width":"2",fill:"red"}}),i("ellipse",{attrs:{cx:"300",cy:"250",rx:"80",ry:"40",stroke:"black","stroke-width":"2",fill:"red"}}),i("ellipse",{attrs:{cx:"300",cy:"250",rx:"70",ry:"30",stroke:"black","stroke-width":"2",fill:"white"}}),i("line",{staticStyle:{stroke:"rgb(255,0,0)","stroke-width":"2"},attrs:{x1:"30",y1:"10",x2:"100",y2:"100"}}),i("polyline",{staticStyle:{fill:"white",stroke:"red","stroke-width":"4"},attrs:{points:"0,40 40,40 40,80 80,80 80,120 120,120 120,160"}}),i("polyline",{staticStyle:{fill:"yellow",stroke:"red","stroke-width":"4"},attrs:{points:"0,40 40,40 40,80 80,80 80,120 120,120 120,160 160,160"}}),i("polygon",{staticStyle:{fill:"yellow",stroke:"red","stroke-width":"4"},attrs:{points:"0,40 40,40 40,80 80,80 80,120 120,120 120,160 160,160"}}),i("polygon",{staticStyle:{fill:"lime",stroke:"purple","stroke-width":"5","fill-rule":"nonzero"},attrs:{points:"100,10 40,180 190,60 10,60 160,180"}}),i("polygon",{staticStyle:{fill:"lime",stroke:"purple","stroke-width":"5","fill-rule":"evenodd"},attrs:{points:"100,10 40,180 190,60 10,60 160,180"}}),i("path",{attrs:{id:"lineAB",d:"M 100 350 l 150 -300",stroke:"red","stroke-width":"3",fill:"none"}}),i("path",{attrs:{id:"lineBC",d:"M 250 50 l 150 300",stroke:"red","stroke-width":"3",fill:"none"}}),i("path",{attrs:{d:"M 175 200 l 150 0",stroke:"green","stroke-width":"3",fill:"none"}}),i("path",{attrs:{d:"M 100 350 q 150 -300 300 0",stroke:"blue","stroke-width":"5",fill:"none"}}),i("g",{attrs:{stroke:"black","stroke-width":"3",fill:"black"}},[i("circle",{attrs:{id:"pointA",cx:"100",cy:"350",r:"3"}}),i("circle",{attrs:{id:"pointB",cx:"250",cy:"50",r:"3"}}),i("circle",{attrs:{id:"pointC",cx:"400",cy:"350",r:"3"}})]),i("g",{attrs:{"font-size":"30",font:"sans-serif",fill:"black",stroke:"none","text-anchor":"middle"}},[i("text",{attrs:{x:"100",y:"350",dx:"-30"}},[t._v("A")]),i("text",{attrs:{x:"250",y:"50",dy:"-10"}},[t._v("B")]),i("text",{attrs:{x:"400",y:"350",dx:"30"}},[t._v("C")])])])]),i("div",{staticClass:"ef-svg-inter"},[i("span",[t._v(" svg 交互占位")]),i("svg",{staticStyle:{height:"500px",width:"600px",border:"1px solid grey"},attrs:{id:"svg-inter"}},[i("rect",{attrs:{x:"0.137",y:"-4.646",fill:"#ADFF5F",stroke:"#000000","stroke-width":"0.7078","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"500",width:"594.566",height:"247.729"},on:{click:t.drawSvgCircle}}),i("text",{attrs:{transform:"matrix(1 0 0 1 61.1379 266.7664)","font-family":"'SimSun'","font-size":"21"},on:{click:t.selectedStart}},[t._v("选择起始点")]),i("text",{attrs:{transform:"matrix(1 0 0 1 212.1379 267.7664)","font-family":"'SimSun'","font-size":"21"},on:{click:t.selectedEnd}},[t._v("选择终止点")]),i("text",{attrs:{transform:"matrix(1 0 0 1 353.1375 266.7664)","font-family":"'SimSun'","font-size":"21"},on:{click:t.drawLine}},[t._v("画线")]),i("text",{attrs:{transform:"matrix(1 0 0 1 429.1375 265.7664)","font-family":"'SimSun'","font-size":"21"},on:{click:t.cancel}},[t._v("清空")]),i("g",{attrs:{id:"g5"}})])])])},r=[],n={name:"svg-canvas",data:function(){return{svg_zoom:document.getElementById("svgzoom"),svgPanel:document.getElementById("svgPanel"),gridSvg:document.getElementById("grid"),width:800,height:400,gridLength:20,scale:1,start:!1,end:!1,sx:void 0,sy:void 0,endx:void 0,endy:void 0}},mounted:function(){this.svgLoad(),console.log("放缩svg元素: ",document.getElementById("svgzoom")),this.svg_zoom=document.getElementById("svgzoom"),this.svgPanel=document.getElementById("svgPanel"),this.gridSvg=document.getElementById("grid"),console.log("当前持有的 svg: ",this.svg_zoom),this.svg_zoom.setAttribute("width",this.width),this.svg_zoom.setAttribute("height",this.height),console.log("网格元素: ",document.getElementById("grid")),console.log("当前的 width:",this.width," height: ",this.height," gridLength: ",this.gridLength),this.drawGrid(this.gridSvg,this.width,this.height,this.gridLength)},methods:{svgLoad:function(){var t="http://www.w3.org/2000/svg",e=document.getElementById("svg1"),i=null,s="",r=null;function n(e,i){var s=document.createElementNS(t,e);for(var r in i)s.setAttribute(r,i[r]);return s}var o=document.querySelectorAll(".div1")[0];console.log(".div1 对应的obj为: ",o),o.appendChild(n("svg",{xmlns:t})),e.onmousedown=function(t){i||(i=n("polyline",{fill:"none",stroke:"red","stroke-width":"2"}),e.appendChild(i));var l=t.clientX-o.offsetLeft,d=t.clientY-o.offsetTop;""==s?s=l+","+d:s+=","+l+","+d;var a=n("text",{fill:"red"});e.appendChild(a),i.setAttribute("points",s),a.setAttribute("x",l),a.setAttribute("y",d-30),a.innerHTML=l+","+d;var c=n("circle",{cx:l,cy:d,r:"5",fill:"white",stroke:"red","stroke-width":3});e.appendChild(c),2===t.button?(e.onmousemove=null,e.oncontextmenu=function(){return e.onmousemove=null,!1}):e.onmousemove=function(t){t=t||window.event;if(r){l=t.clientX-o.offsetLeft,d=t.clientY-o.offsetTop;r.setAttribute("x",l,"y",d),r.innerHTML=l+","+d}else{r=n("text",{fill:"red",x:t.clientX-o.offsetLeft,y:t.clientY-o.offsetTop});var l=t.clientX-o.offsetLeft,d=t.clientY-o.offsetTop;r.innerHTML=l+","+d,e.appendChild(r)}if(i){l=t.clientX-o.offsetLeft,d=env.clientY-o.offsetTop;i.setAttribute("points",s+","+l+","+d)}}}},drawGrid:function(t,e,i,s){for(var r=this.gridSvg.childNodes,n=r.length-1;n>=0;n--)t.removeChild(r.item(n));for(var o=0;o<Math.ceil(e/s);o++){var l={x1:o*s,y1:0,x2:o*s,y2:i,stroke:"#add"},d=this.resetSvg("line",l);t.appendChild(d)}for(var a=0;a<Math.ceil(i/s);a++){var c={x1:0,y1:a*s,x2:e,y2:a*s,stroke:"#add"},h=this.resetSvg("line",c);t.appendChild(h)}},resetSvg:function(t,e){var i=document.createElementNS("http://www.w3.org/2000/svg",t);for(var s in e)i.setAttribute(s,e[s]);return i},zoom:function(t){this.scale*=t,svgPanel.setAttribute("transform","scale("+this.scale+")"),this.drawGrid(this.gridSvg,this.width*(1/this.scale),this.height*(1/this.scale),this.gridLength)},scrollZoom:function(t){t=t||window.event,t.wheelDelta>0||t.detail>0?this.zoom(1.1):this.zoom(.9)},svg_circle:function(t,e,i,s,r){var n=document.createElementNS("http://www.w3.org/2000/svg","circle");return n.setAttribute("cx",t),n.setAttribute("cy",e),n.setAttribute("r",i),n.setAttribute("style","stroke:"+s+"; stroke-width: "+r+";"),n},svg_line:function(t,e,i,s,r,n){var o=document.createElementNS("http://www.w3.org/2000/svg","line");return o.setAttribute("x1",t),o.setAttribute("y1",e),o.setAttribute("x2",i),o.setAttribute("y2",s),o.setAttribute("style","stroke:"+r+"; fill:"+r+"; stroke-width:"+n+";"),o},selectedStart:function(){this.start=!0},selectedEnd:function(){this.end=!0},drawSvgCircle:function(t){if(console.log("当前接收到的事件为: ",t),this.start){this.sx=t.clientX,this.sy=t.clientY;var e=this.svg_circle(this.sx,this.sy,"2","red","2"),i=document.getElementById("g5");i.appendChild(e),this.start=!1}if(this.end){this.endx=t.clientX,this.endy=t.clientY;var s=this.svg_circle(this.endx,this.endy,"2","red","2");i=document.getElementById("g5");i.appendChild(s),this.end=!1}},drawLine:function(){var t=this.svg_line(this.sx,this.sy,this.endx,this.endy,"red","2"),e=document.getElementById("g5");e.appendChild(t)},cancel:function(){for(var t=document.getElementById("g5"),e=0;e<t.childNodes.length;e++)t.removeChild(t.childNodes.item(e))}}},o=n,l=(i("9191"),i("2877")),d=Object(l["a"])(o,s,r,!1,null,null,null);e["default"]=d.exports},fea2:function(t,e,i){}}]);