"use strict";var l=Object.create;var t=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var E=(o,r)=>{for(var e in r)t(o,e,{get:r[e],enumerable:!0})},a=(o,r,e,p)=>{if(r&&typeof r=="object"||typeof r=="function")for(let m of b(r))!x.call(o,m)&&m!==e&&t(o,m,{get:()=>r[m],enumerable:!(p=s(r,m))||p.enumerable});return o};var f=(o,r,e)=>(e=o!=null?l(w(o)):{},a(r||!o||!o.__esModule?t(e,"default",{value:o,enumerable:!0}):e,o)),F=o=>a(t({},"__esModule",{value:!0}),o);var _={};E(_,{faker:()=>I});module.exports=F(_);var i=require("../faker"),n=f(require("../locales/base")),c=f(require("../locales/en")),k=f(require("../locales/en_IE"));const I=new i.Faker({locale:[k.default,c.default,n.default]});0&&(module.exports={faker});
