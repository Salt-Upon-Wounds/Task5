"use strict";var b=Object.create;var e=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var _=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var j=(o,r)=>{for(var t in r)e(o,t,{get:r[t],enumerable:!0})},f=(o,r,t,p)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of x(r))!g.call(o,i)&&i!==t&&e(o,i,{get:()=>r[i],enumerable:!(p=k(r,i))||p.enumerable});return o};var m=(o,r,t)=>(t=o!=null?b(_(o)):{},f(r||!o||!o.__esModule?e(t,"default",{value:o,enumerable:!0}):t,o)),q=o=>f(e({},"__esModule",{value:!0}),o);var z={};j(z,{default:()=>w});module.exports=q(z);var n=m(require("./color")),a=m(require("./commerce")),c=m(require("./company")),l=m(require("./date")),d=m(require("./hacker")),u=m(require("./internet")),h=m(require("./location")),s=m(require("./lorem")),y=m(require("./metadata")),D=m(require("./person")),L=m(require("./phone_number"));const v={color:n.default,commerce:a.default,company:c.default,date:l.default,hacker:d.default,internet:u.default,location:h.default,lorem:s.default,metadata:y.default,person:D.default,phone_number:L.default};var w=v;
