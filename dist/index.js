"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=o(function(y,n){
var s=require('@stdlib/array-base-assert-is-complex128array/dist'),c=require('@stdlib/array-base-assert-is-complex64array/dist'),f=require('@stdlib/array-base-arraylike2object/dist'),v=require('@stdlib/strided-base-reinterpret-complex128/dist'),l=require('@stdlib/strided-base-reinterpret-complex64/dist');function a(e){var r;for(r=0;r<e.length;r++)if(e[r])return!1;return!0}function p(e){var r,i,t;for(r=e.data,i=e.accessors[0],t=0;t<r.length;t++)if(i(r,t))return!1;return!0}function q(e){var r=f(e);return r.accessorProtocol?s(e)?a(v(e,0)):c(e)?a(l(e,0)):p(r):a(e)}n.exports=q
});var g=u();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
