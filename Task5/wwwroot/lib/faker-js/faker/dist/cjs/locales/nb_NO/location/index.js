"use strict";var h=Object.create;var e=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var q=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var w=(t,r)=>{for(var m in r)e(t,m,{get:r[m],enumerable:!0})},p=(t,r,m,f)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of k(r))!v.call(t,i)&&i!==m&&e(t,i,{get:()=>r[i],enumerable:!(f=j(r,i))||f.enumerable});return t};var o=(t,r,m)=>(m=t!=null?h(q(t)):{},p(r||!t||!t.__esModule?e(m,"default",{value:t,enumerable:!0}):m,t)),z=t=>p(e({},"__esModule",{value:!0}),t);var C={};w(C,{default:()=>B});module.exports=z(C);var n=o(require("./building_number")),s=o(require("./city_name")),a=o(require("./city_pattern")),_=o(require("./city_suffix")),c=o(require("./common_street_suffix")),d=o(require("./default_country")),u=o(require("./postcode")),y=o(require("./secondary_address")),x=o(require("./state")),l=o(require("./street_address")),b=o(require("./street_name")),D=o(require("./street_pattern")),L=o(require("./street_prefix")),g=o(require("./street_suffix"));const A={building_number:n.default,city_name:s.default,city_pattern:a.default,city_suffix:_.default,common_street_suffix:c.default,default_country:d.default,postcode:u.default,secondary_address:y.default,state:x.default,street_address:l.default,street_name:b.default,street_pattern:D.default,street_prefix:L.default,street_suffix:g.default};var B=A;