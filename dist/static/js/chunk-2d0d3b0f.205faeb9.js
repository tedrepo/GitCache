(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3b0f"],{"5e9b":function(e,l,n){"use strict";n.r(l);var i=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("div",{staticStyle:{width:"100vw",height:"200vh"},on:{contextmenu:e.onContextmenu}},[e._v(e._s(e.message))])},a=[],t={data:function(){return{message:"右键打开菜单"}},methods:{onContextmenu:function(e){var l=this;this.$contextmenu({items:[{label:"返回(B)",onClick:function(){l.message="返回(B)",console.log("返回(B)")}},{label:"前进(F)",disabled:!0},{label:"重新加载(R)",divided:!0},{label:"另存为(A)..."},{label:"打印(P)...",icon:"el-icon-printer"},{label:"投射(C)...",divided:!0},{label:"使用网页翻译(T)",divided:!0,minWidth:0,children:[{label:"翻译成简体中文"},{label:"翻译成繁体中文"}]},{label:"截取网页(R)",minWidth:0,children:[{label:"返回(B)",onClick:function(){l.message="返回(B)",console.log("返回(B)")}},{label:"前进(F)",disabled:!0},{label:"重新加载(R)",divided:!0,icon:"el-icon-refresh"},{label:"另存为(A)..."},{label:"打印(P)...",icon:"el-icon-printer"},{label:"投射(C)...",divided:!0},{label:"使用网页翻译(T)",divided:!0,minWidth:0,children:[{label:"翻译成简体中文"},{label:"翻译成繁体中文"}]},{label:"截取网页(R)",minWidth:0,children:[{label:"截取可视化区域",onClick:function(){l.message="截取可视化区域",console.log("截取可视化区域")}},{label:"截取全屏"}]},{label:"查看网页源代码(V)",icon:"el-icon-view"},{label:"检查(N)"}]},{label:"查看网页源代码(V)",icon:"el-icon-view"},{label:"检查(N)"}],event:e,constomClass:"class-a",zIndex:3,minWidth:230}),e.preventDefault()}}},o=t,d=n("2877"),c=Object(d["a"])(o,i,a,!1,null,null,null);l["default"]=c.exports}}]);