"use strict";var a=Object.create;var n=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var I=(t,e)=>{for(var o in e)n(t,o,{get:e[o],enumerable:!0})},m=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of d(e))!D.call(t,i)&&i!==o&&n(t,i,{get:()=>e[i],enumerable:!(r=c(e,i))||r.enumerable});return t};var f=(t,e,o)=>(o=t!=null?a(u(t)):{},m(e||!t||!t.__esModule?n(o,"default",{value:t,enumerable:!0}):o,t)),_=t=>m(n({},"__esModule",{value:!0}),t);var l={};I(l,{default:()=>j});module.exports=_(l);var p=f(require("./emoji")),s=f(require("./http_status_code"));const h={emoji:p.default,http_status_code:s.default};var j=h;