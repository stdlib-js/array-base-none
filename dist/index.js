"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=o(function(b,n){
var s=require('@stdlib/array-base-assert-is-complex128array/dist'),c=require('@stdlib/array-base-assert-is-complex64array/dist'),f=require('@stdlib/array-base-assert-is-booleanarray/dist'),v=require('@stdlib/array-base-arraylike2object/dist'),l=require('@stdlib/strided-base-reinterpret-complex128/dist'),q=require('@stdlib/strided-base-reinterpret-complex64/dist'),p=require('@stdlib/strided-base-reinterpret-boolean/dist');function a(r){var e;for(e=0;e<r.length;e++)if(r[e])return!1;return!0}function y(r){var e,i,t;for(e=r.data,i=r.accessors[0],t=0;t<e.length;t++)if(i(e,t))return!1;return!0}function g(r){var e=v(r);return e.accessorProtocol?s(r)?a(l(r,0)):c(r)?a(q(r,0)):f(r)?a(p(r,0)):y(e):a(r)}n.exports=g
});var m=u();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
