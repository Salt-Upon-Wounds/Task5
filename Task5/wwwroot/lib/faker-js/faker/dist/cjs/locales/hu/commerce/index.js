"use strict";var u=Object.create;var e=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var C=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var _=(o,r)=>{for(var m in r)e(o,m,{get:r[m],enumerable:!0})},c=(o,r,m,p)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of s(r))!D.call(o,t)&&t!==m&&e(o,t,{get:()=>r[t],enumerable:!(p=l(r,t))||p.enumerable});return o};var i=(o,r,m)=>(m=o!=null?u(C(o)):{},c(r||!o||!o.__esModule?e(m,"default",{value:o,enumerable:!0}):m,o)),x=o=>c(e({},"__esModule",{value:!0}),o);var g={};_(g,{default:()=>b});module.exports=x(g);var f=i(require("./color")),n=i(require("./department")),d=i(require("./product_description")),a=i(require("./product_name"));const y={color:f.default,department:n.default,product_description:d.default,product_name:a.default};var b=y;