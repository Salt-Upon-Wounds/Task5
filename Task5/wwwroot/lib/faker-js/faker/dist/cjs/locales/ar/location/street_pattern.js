"use strict";var a=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var i=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var f=(t,e)=>{for(var o in e)a(t,o,{get:e[o],enumerable:!0})},l=(t,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of i(e))!p.call(t,r)&&r!==o&&a(t,r,{get:()=>e[r],enumerable:!(n=s(e,r))||n.enumerable});return t};var _=t=>l(a({},"__esModule",{value:!0}),t);var c={};f(c,{default:()=>x});module.exports=_(c);var x=["{{location.street_prefix}} {{person.first_name}}","{{location.street_prefix}} {{person.last_name}}"];