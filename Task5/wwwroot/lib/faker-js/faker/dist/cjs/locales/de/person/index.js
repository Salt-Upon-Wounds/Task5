"use strict";var d=Object.create;var t=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var k=(r,m)=>{for(var e in m)t(r,e,{get:m[e],enumerable:!0})},p=(r,m,e,f)=>{if(m&&typeof m=="object"||typeof m=="function")for(let i of g(m))!j.call(r,i)&&i!==e&&t(r,i,{get:()=>m[i],enumerable:!(f=u(m,i))||f.enumerable});return r};var o=(r,m,e)=>(e=r!=null?d(h(r)):{},p(m||!r||!r.__esModule?t(e,"default",{value:r,enumerable:!0}):e,r)),q=r=>p(t({},"__esModule",{value:!0}),r);var z={};k(z,{default:()=>w});module.exports=q(z);var n=o(require("./female_first_name")),a=o(require("./female_prefix")),_=o(require("./first_name")),s=o(require("./last_name")),l=o(require("./last_name_pattern")),x=o(require("./male_first_name")),y=o(require("./male_prefix")),D=o(require("./name")),P=o(require("./nobility_title_prefix")),b=o(require("./prefix")),c=o(require("./sex"));const v={female_first_name:n.default,female_prefix:a.default,first_name:_.default,last_name:s.default,last_name_pattern:l.default,male_first_name:x.default,male_prefix:y.default,name:D.default,nobility_title_prefix:P.default,prefix:b.default,sex:c.default};var w=v;
