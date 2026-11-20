"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var u=o(function(b,n){
var s=require('@stdlib/array-base-assert-is-complex128array/dist'),c=require('@stdlib/array-base-assert-is-complex64array/dist'),f=require('@stdlib/array-base-assert-is-booleanarray/dist'),v=require('@stdlib/array-base-arraylike2object/dist'),l=require('@stdlib/strided-base-reinterpret-complex128/dist'),q=require('@stdlib/strided-base-reinterpret-complex64/dist'),p=require('@stdlib/strided-base-reinterpret-boolean/dist');function i(e){var r;for(r=0;r<e.length;r++)if(e[r])return!1;return!0}function y(e){var r,t,a;for(r=e.data,t=e.accessors[0],a=0;a<r.length;a++)if(t(r,a))return!1;return!0}function g(e){var r=v(e);return r.accessorProtocol?s(e)?i(l(e,0)):c(e)?i(q(e,0)):f(e)?i(p(e,0)):y(r):i(e)}n.exports=g
});var m=u();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
