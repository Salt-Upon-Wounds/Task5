"use strict";var s=Object.create;var f=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var c=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty;var l=(m,o)=>{for(var t in o)f(m,t,{get:o[t],enumerable:!0})},a=(m,o,t,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let e of x(o))!d.call(m,e)&&e!==t&&f(m,e,{get:()=>o[e],enumerable:!(r=u(o,e))||r.enumerable});return m};var i=(m,o,t)=>(t=m!=null?s(c(m)):{},a(o||!m||!m.__esModule?f(t,"default",{value:m,enumerable:!0}):t,m)),_=m=>a(f({},"__esModule",{value:!0}),m);var h={};l(h,{default:()=>g});module.exports=_(h);var n=i(require("./name")),p=i(require("./suffix"));const b={name:n.default,suffix:p.default};var g=b;
