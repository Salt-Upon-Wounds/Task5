"use strict";var j=Object.create;var e=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var z=(r,o)=>{for(var i in o)e(r,i,{get:o[i],enumerable:!0})},p=(r,o,i,f)=>{if(o&&typeof o=="object"||typeof o=="function")for(let m of q(o))!w.call(r,m)&&m!==i&&e(r,m,{get:()=>o[m],enumerable:!(f=k(o,m))||f.enumerable});return r};var t=(r,o,i)=>(i=r!=null?j(v(r)):{},p(o||!r||!r.__esModule?e(i,"default",{value:r,enumerable:!0}):i,r)),A=r=>p(e({},"__esModule",{value:!0}),r);var E={};z(E,{default:()=>C});module.exports=A(E);var n=t(require("./building_number")),s=t(require("./city_name")),a=t(require("./city_pattern")),c=t(require("./city_prefix")),_=t(require("./city_suffix")),d=t(require("./country")),u=t(require("./default_country")),y=t(require("./postcode")),x=t(require("./secondary_address")),l=t(require("./state")),b=t(require("./street_address")),D=t(require("./street_name")),L=t(require("./street_pattern")),g=t(require("./street_prefix")),h=t(require("./street_suffix"));const B={building_number:n.default,city_name:s.default,city_pattern:a.default,city_prefix:c.default,city_suffix:_.default,country:d.default,default_country:u.default,postcode:y.default,secondary_address:x.default,state:l.default,street_address:b.default,street_name:D.default,street_pattern:L.default,street_prefix:g.default,street_suffix:h.default};var C=B;
