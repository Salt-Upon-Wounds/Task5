"use strict";var i=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var c=(t,e)=>{for(var r in e)i(t,r,{get:e[r],enumerable:!0})},l=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of h(e))!p.call(t,s)&&s!==r&&i(t,s,{get:()=>e[s],enumerable:!(o=a(e,s))||o.enumerable});return t};var u=t=>l(i({},"__esModule",{value:!0}),t);var y={};c(y,{PhoneModule:()=>n});module.exports=u(y);class n{constructor(e){this.faker=e;for(const r of Object.getOwnPropertyNames(n.prototype))r==="constructor"||typeof this[r]!="function"||(this[r]=this[r].bind(this))}number(e){return e=e!=null?e:this.faker.helpers.arrayElement(this.faker.definitions.phone_number.formats),this.faker.helpers.replaceSymbolWithNumber(e)}imei(){return this.faker.helpers.replaceCreditCardSymbols("##-######-######-L","#")}}0&&(module.exports={PhoneModule});