(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48d21cef"],{"2a8c":function(t,e,n){"use strict";var r=n("fdad"),i=n.n(r);i.a},"2c3c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tree-container",attrs:{id:t.id}},[n("svg",{staticClass:"d3-tree"},[n("g",{staticClass:"container"})])])},i=[],a=(n("7f7f"),n("ac6a"),n("6b54"),n("5698")),l={name:"中国",children:[{name:"浙江",children:[]},{name:"新疆",children:[{name:"乌鲁木齐"},{name:"克拉玛依"},{name:"吐鲁番"},{name:"哈密"}]},{name:"新疆",children:[{name:"乌鲁木齐"},{name:"克拉玛依"},{name:"吐鲁番"},{name:"哈密"}]}]},c={name:"Scale",data:function(){return{id:"",zoom:null,index:0,duration:400,root:null,dataset:null,nodes:[],links:[],dTreeData:null,transform:null,margin:{top:20,right:90,bottom:30,left:90}}},methods:{uuid:function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()},collapsed:function(t){t.children&&(t._children=t.children,t._children.forEach(this.collapsed),t.children=null)},cp_collapsed:function(t,e){if(t.children)if(e._children&&!e.children){t._children=t.children;for(var n=0;n<t._children.length;n++)this.cp_collapsed(t._children[n],e._children[n]);t.children=null}else if(!e._children&&e.children){for(n=0;n<t.children.length;n++)this.cp_collapsed(t.children[n],e.children[n]);t._children=null}},getRoot:function(t){var e=null;this.root&&(e=this.root);var n=a["hierarchy"](t,function(t){return t.children});return console.log("根节点的数据为: ",n),n.x0=0,n.y0=0,e&&(console.log("旧的树不为空， 进行对照收缩"),this.cp_collapsed(n,e)),n},clickNode:function(t){var e=this;if(!t._children&&!t.children){this.getdata(t);this.root=this.getRoot(this.dataset)}t.children?(this.$set(t,"_children",t.children),t.children=null):t._children&&(this.$set(t,"children",t._children),t._children=null),this.$nextTick(function(){e.update(t)})},getdata:function(t){console.log("点击节点为: ",t);var e=[{name:"c1"},{name:"克拉玛依"},{name:"吐鲁番"},{name:"哈密"}],n=this.getParents(t);console.log("当前节点的父节点有: ",n);for(var r=this.dataset,i=1;i<n.length;i++){var a=n[i];console.log("当前的节点为",r.children.length);for(var l=null,c=0;c<r.children.length;c++)if(r.children[c].name===a){l=r.children[c];break}r=l}console.log("定位的节点为: ",r),r.children=e,console.log("更新后的数据为: ",r)},getParents:function(t){var e=[],n=t.parent;while(null!==n)e.push(n.data.name),n=n.parent;return e=e.reverse(),e.push(t.data.name),e},calcLeft:function(t){var e=375,n=t.y;return t.isRight||(n=t.y-e,n=e-n),{x:t.x,y:n}},diagonal:function(t,e){var n=e,r=t,i=(r.y-n.y)/3;return"M"+n.y+","+n.x+"H"+(n.y+i)+"V"+r.x+"H"+r.y},getNodesAndLinks:function(){this.dTreeData=this.treemap(this.root),this.nodes=this.dTreeData.descendants(),this.links=this.dTreeData.descendants().slice(1)},update:function(t){var e=this;this.getNodesAndLinks(),this.nodes.forEach(function(t){t.y=200*t.depth});var n=a["select"](this.$el).select("svg.d3-tree"),r=n.select("g.container"),i=r.selectAll("g.node").data(this.nodes,function(t){return t.id||(t.id=++e.index)}),l=i.enter().append("g").attr("class","node").on("click",this.clickNode).attr("transform",function(e){return"translate("+t.y0+","+t.x0+")"});l.append("circle").attr("r",10).style("fill",function(t){return t.children||t._children?"lightsteelblue":"#fff"}),l.append("text").attr("x",function(t){return t.children||t._children,-10}).attr("dy","25").attr("text-anchor",function(t){return t.children||t._children,"start"}).text(function(t){return t.data.name}).style("fill-opacity",1e-6),l.append("text").attr("x",function(t){return-110}).attr("dy","-5").attr("text-anchor",function(t){return"start"}).text(function(t){return"label: "+t.data.name}).style("fill-opacity",function(t){return console.log("label 接收的内容为: ",t),t.parent?1:1e-6});var c=l.merge(i).transition().duration(this.duration).attr("transform",function(t){return"translate("+t.y+","+t.x+")"});c.select("circle").attr("r",10).attr("fill","white").attr("stroke","blue").attr("stroke-width",1).style("fill",function(t){return t.children||t._children?"lightsteelblue":"#fff"}),c.select("text").style("fill-opacity",1);var o=i.exit().transition().duration(this.duration).attr("transform",function(e){return"translate("+t.y+","+t.x+")"}).remove();o.select("circle").attr("r",1e-6),o.select("text").style("fill-opacity",1e-6);var s=r.selectAll("path.link").data(this.links,function(t){return t.id}),d=s.enter().insert("path","g").attr("class","link").attr("d",function(n){var r={x:t.x0,y:t.y0};return e.diagonal(r,r)}).attr("fill","none").attr("stroke-width",1).attr("stroke","#ccc"),h=d.merge(s);h.transition().duration(this.duration).attr("d",function(t){return e.diagonal(t,t.parent)}),s.exit().transition().duration(this.duration).attr("d",function(n){var r={x:t.x,y:t.y};return e.diagonal(r,r)}).remove(),this.nodes.forEach(function(t){t.x0=t.x,t.y0=t.y})},zoomed:function(){a["select"](this.$el).select("g.container").attr("transform",a["event"].transform)}},created:function(){this.id=this.uuid()},mounted:function(){this.width=document.getElementById(this.id).clientWidth,this.height=document.getElementById(this.id).clientHeight,this.dy=this.width/4,this.dx=30;var t=a["select"](this.$el).select("svg.d3-tree").attr("viewBox",[-100,-300,1e3,1e3]).attr("width",1e3).attr("height",1e3);t.select("g.container");this.zoom=a["zoom"]().scaleExtent([.5,8]).on("zoom",this.zoomed),t.call(this.zoom),this.dataset=l,this.root=this.getRoot(this.dataset),this.root.children.forEach(this.collapsed),this.update(this.root)},computed:{treemap:function(){return a["tree"]().nodeSize([50,60])}}},o=c,s=(n("2a8c"),n("2877")),d=Object(s["a"])(o,r,i,!1,null,"622a9b81",null);e["default"]=d.exports},fdad:function(t,e,n){}}]);