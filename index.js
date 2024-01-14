// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).none=e()}(this,(function(){"use strict";var r="function";var e={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function t(r){var t=e[r];return"function"==typeof t?t:e.default}var n={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function i(r){var e=n[r];return"function"==typeof e?e:n.default}var o={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function a(r){var e=o[r];return"function"==typeof e?e:o.default}var u={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function f(r){var e=u[r];return"function"==typeof e?e:u.default}var l="function"==typeof Object.defineProperty?Object.defineProperty:null;var c=Object.defineProperty;function s(r){return"number"==typeof r}function y(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function p(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+y(i):y(i)+r,n&&(r="-"+r)),r}var h=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function m(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!s(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=p(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=p(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===g.call(r.specifier)?g.call(t):h.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function w(r){return"string"==typeof r}var b=Math.abs,v=String.prototype.toLowerCase,d=String.prototype.toUpperCase,E=String.prototype.replace,A=/e\+(\d)$/,T=/e-(\d)$/,_=/^(\d+)$/,x=/^(\d+)e/,j=/\.0$/,k=/\.0*e/,V=/(\..*[^0])0*e/;function B(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!s(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":b(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=E.call(t,V,"$1e"),t=E.call(t,k,"e"),t=E.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=E.call(t,A,"e+0$1"),t=E.call(t,T,"e-0$1"),r.alternate&&(t=E.call(t,_,"$1."),t=E.call(t,x,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===d.call(r.specifier)?d.call(t):v.call(t)}function L(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function R(r,e,t){var n=e-r.length;return n<0?r:r=t?r+L(n):L(n)+r}var S=String.fromCharCode,I=isNaN,C=Array.isArray;function M(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,o,a,u,f,l;if(!C(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(w(n=r[f]))a+=n;else{if(e=void 0!==n.precision,!(n=M(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,I(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,I(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!I(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=I(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=B(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=p(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=R(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function N(r){var e,t,n,i;for(t=[],i=0,n=F.exec(r);n;)(e=r.slice(i,F.lastIndex-n[0].length)).length&&t.push(e),t.push(P(n)),i=F.lastIndex,n=F.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function U(r){return"string"==typeof r}function Y(r){var e,t,n;if(!U(r))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=N(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return O.apply(null,t)}var W,$=Object.prototype,G=$.toString,Z=$.__defineGetter__,X=$.__defineSetter__,J=$.__lookupGetter__,z=$.__lookupSetter__;W=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?c:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===G.call(r))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(J.call(r,e)||z.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Z&&Z.call(r,e,t.get),a&&X&&X.call(r,e,t.set),r};var q=W;function D(r,e,t){q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function K(){return H&&"symbol"==typeof Symbol.toStringTag}var Q=Object.prototype.toString;var rr=Object.prototype.hasOwnProperty;function er(r,e){return null!=r&&rr.call(r,e)}var tr="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof tr?tr.toStringTag:"";var ir=K()?function(r){var e,t,n;if(null==r)return Q.call(r);t=r[nr],e=er(r,nr);try{r[nr]=void 0}catch(e){return Q.call(r)}return n=Q.call(r),e?r[nr]=t:delete r[nr],n}:function(r){return Q.call(r)};var or=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)};function ar(r){return null!==r&&"object"==typeof r}function ur(r){return ar(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function fr(){return/^\s*function\s*([^(]*)/i}D(ar,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!or(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(ar));var lr=/^\s*function\s*([^(]*)/i;D(fr,"REGEXP",lr);var cr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},sr="function"==typeof Float64Array;var yr="function"==typeof Float64Array?Float64Array:null;var pr="function"==typeof Float64Array?Float64Array:void 0;var hr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr([1,3.14,-3.14,NaN]),t=e,r=(sr&&t instanceof Float64Array||"[object Float64Array]"===ir(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")},gr="function"==typeof Float32Array;var mr=Number.POSITIVE_INFINITY,wr="function"==typeof Float32Array?Float32Array:null;var br="function"==typeof Float32Array?Float32Array:void 0;var vr=function(){var r,e,t;if("function"!=typeof wr)return!1;try{e=new wr([1,3.14,-3.14,5e40]),t=e,r=(gr&&t instanceof Float32Array||"[object Float32Array]"===ir(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===mr}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")},dr="function"==typeof Uint32Array;var Er="function"==typeof Uint32Array?Uint32Array:null;var Ar="function"==typeof Uint32Array?Uint32Array:void 0;var Tr=function(){var r,e,t;if("function"!=typeof Er)return!1;try{e=new Er(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(dr&&t instanceof Uint32Array||"[object Uint32Array]"===ir(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")},_r="function"==typeof Int32Array;var xr="function"==typeof Int32Array?Int32Array:null;var jr="function"==typeof Int32Array?Int32Array:void 0;var kr=function(){var r,e,t;if("function"!=typeof xr)return!1;try{e=new xr([1,3.14,-3.14,2147483648]),t=e,r=(_r&&t instanceof Int32Array||"[object Int32Array]"===ir(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?jr:function(){throw new Error("not implemented")},Vr="function"==typeof Uint16Array;var Br="function"==typeof Uint16Array?Uint16Array:null;var Lr="function"==typeof Uint16Array?Uint16Array:void 0;var Rr=function(){var r,e,t;if("function"!=typeof Br)return!1;try{e=new Br(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Vr&&t instanceof Uint16Array||"[object Uint16Array]"===ir(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")},Sr="function"==typeof Int16Array;var Ir="function"==typeof Int16Array?Int16Array:null;var Cr="function"==typeof Int16Array?Int16Array:void 0;var Mr=function(){var r,e,t;if("function"!=typeof Ir)return!1;try{e=new Ir([1,3.14,-3.14,32768]),t=e,r=(Sr&&t instanceof Int16Array||"[object Int16Array]"===ir(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Cr:function(){throw new Error("not implemented")},Or="function"==typeof Uint8Array;var Fr="function"==typeof Uint8Array?Uint8Array:null;var Pr="function"==typeof Uint8Array?Uint8Array:void 0;var Nr=function(){var r,e,t;if("function"!=typeof Fr)return!1;try{e=new Fr(e=[1,3.14,-3.14,256,257]),t=e,r=(Or&&t instanceof Uint8Array||"[object Uint8Array]"===ir(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Pr:function(){throw new Error("not implemented")},Ur="function"==typeof Uint8ClampedArray;var Yr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Wr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var $r=function(){var r,e,t;if("function"!=typeof Yr)return!1;try{e=new Yr([-1,0,1,3.14,4.99,255,256]),t=e,r=(Ur&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===ir(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Wr:function(){throw new Error("not implemented")},Gr="function"==typeof Int8Array;var Zr="function"==typeof Int8Array?Int8Array:null;var Xr="function"==typeof Int8Array?Int8Array:void 0;var Jr=function(){var r,e,t;if("function"!=typeof Zr)return!1;try{e=new Zr([1,3.14,-3.14,128]),t=e,r=(Gr&&t instanceof Int8Array||"[object Int8Array]"===ir(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};function zr(r){return"number"==typeof r}var qr=Number,Dr=qr.prototype.toString;var Hr=K();function Kr(r){return"object"==typeof r&&(r instanceof qr||(Hr?function(r){try{return Dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===ir(r)))}function Qr(r){return zr(r)||Kr(r)}D(Qr,"isPrimitive",zr),D(Qr,"isObject",Kr);var re=qr.NEGATIVE_INFINITY,ee=Math.floor;function te(r){return ee(r)===r}function ne(r){return r<mr&&r>re&&te(r)}function ie(r){return zr(r)&&ne(r)}function oe(r){return Kr(r)&&ne(r.valueOf())}function ae(r){return ie(r)||oe(r)}function ue(r){return ie(r)&&r>=0}function fe(r){return oe(r)&&r.valueOf()>=0}function le(r){return ue(r)||fe(r)}D(ae,"isPrimitive",ie),D(ae,"isObject",oe),D(le,"isPrimitive",ue),D(le,"isObject",fe);function ce(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&te(r.length)&&r.length>=0&&r.length<=4294967295}function se(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&te(r.length)&&r.length>=0&&r.length<=9007199254740991}var ye="function"==typeof ArrayBuffer;function pe(r){return ye&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===ir(r)}function he(r){return"object"==typeof r&&null!==r&&!or(r)}var ge=/./;function me(r){return"boolean"==typeof r}var we=Boolean,be=Boolean.prototype.toString;var ve=K();function de(r){return"object"==typeof r&&(r instanceof we||(ve?function(r){try{return be.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===ir(r)))}function Ee(r){return me(r)||de(r)}function Ae(){return new Function("return this;")()}D(Ee,"isPrimitive",me),D(Ee,"isObject",de);var Te="object"==typeof self?self:null,_e="object"==typeof window?window:null,xe="object"==typeof global?global:null,je="object"==typeof globalThis?globalThis:null;var ke=function(r){if(arguments.length){if(!me(r))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ae()}if(je)return je;if(Te)return Te;if(_e)return _e;if(xe)return xe;throw new Error("unexpected error. Unable to resolve global object.")}(),Ve=ke.document&&ke.document.childNodes,Be=Int8Array;function Le(){return/^\s*function\s*([^(]*)/i}var Re=/^\s*function\s*([^(]*)/i;function Se(r){return null!==r&&"object"==typeof r}function Ie(r){var e,t,n,i;if(("Object"===(t=ir(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Re.exec(n.toString()))return e[1]}return Se(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}D(Le,"REGEXP",Re),D(Se,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!or(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Se));var Ce="function"==typeof ge||"object"==typeof Be||"function"==typeof Ve?function(r){return Ie(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ie(r).toLowerCase():e};function Me(r){return"function"===Ce(r)}function Oe(r,e){if(!(this instanceof Oe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!zr(r))throw new TypeError(Y("invalid argument. Real component must be a number. Value: `%s`.",r));if(!zr(e))throw new TypeError(Y("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}D(Oe,"BYTES_PER_ELEMENT",8),D(Oe.prototype,"BYTES_PER_ELEMENT",8),D(Oe.prototype,"byteLength",16),D(Oe.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),D(Oe.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Fe="function"==typeof Math.fround?Math.fround:null,Pe=new vr(1);var Ne="function"==typeof Fe?Fe:function(r){return Pe[0]=r,Pe[0]};function Ue(r,e){if(!(this instanceof Ue))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!zr(r))throw new TypeError(Y("invalid argument. Real component must be a number. Value: `%s`.",r));if(!zr(e))throw new TypeError(Y("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ne(r)}),q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ne(e)}),this}function Ye(r){return r instanceof Oe||r instanceof Ue||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function We(r){return te(r/2)}function $e(){return"function"==typeof tr&&"symbol"==typeof tr("foo")&&er(tr,"iterator")&&"symbol"==typeof tr.iterator}D(Ue,"BYTES_PER_ELEMENT",4),D(Ue.prototype,"BYTES_PER_ELEMENT",4),D(Ue.prototype,"byteLength",8),D(Ue.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),D(Ue.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Ge=$e()?Symbol.iterator:null;function Ze(r,e,t){q(r,e,{configurable:!1,enumerable:!1,get:t})}function Xe(r){return r.re}function Je(r){return r.im}function ze(r,e){return new vr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function qe(r,e){return new hr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}var De={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function He(r){var e=De[r];return"function"==typeof e?e:De.default}var Ke={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function Qe(r){var e=Ke[r];return"function"==typeof e?e:Ke.default}function rt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ce(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ye(n))return new TypeError(Y("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Xe(n),Je(n))}return e}function et(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ce(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ye(o))return new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Xe(o),Je(o))}return n}function tt(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ye(n=e[i]))return null;r[o]=Xe(n),r[o+1]=Je(n),o+=2}return r}var nt=2*vr.BYTES_PER_ELEMENT,it=$e();function ot(r){return r instanceof lt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function at(r){return r===lt||"Complex128Array"===r.name}function ut(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===nt}function ft(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*nt}function lt(){var r,e,t,n;if(e=arguments.length,!(this instanceof lt))return 0===e?new lt:1===e?new lt(arguments[0]):2===e?new lt(arguments[0],arguments[1]):new lt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new vr(0);else if(1===e)if(ue(arguments[0]))t=new vr(2*arguments[0]);else if(se(arguments[0]))if((n=(t=arguments[0]).length)&&or(t)&&Ye(t[0])){if(null===(t=tt(new vr(2*n),t))){if(!We(n))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new vr(arguments[0])}}else{if(ut(t))t=ze(t,0);else if(ft(t))t=qe(t,0);else if(!We(n))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new vr(t)}else if(pe(arguments[0])){if(!te((t=arguments[0]).byteLength/nt))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",nt,t.byteLength));t=new vr(t)}else{if(!he(arguments[0]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===it)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Me(t[Ge]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Me((t=t[Ge]()).next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=rt(t))instanceof Error)throw t;t=new vr(t)}else{if(!pe(t=arguments[0]))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ue(r=arguments[1]))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!te(r/nt))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",nt,r));if(2===e){if(!te((n=t.byteLength-r)/nt))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",nt,n));t=new vr(t,r)}else{if(!ue(n=arguments[2]))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*nt>t.byteLength-r)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*nt));t=new vr(t,r,2*n)}}return D(this,"_buffer",t),D(this,"_length",t.length/2),this}function ct(r){return r.re}function st(r){return r.im}D(lt,"BYTES_PER_ELEMENT",nt),D(lt,"name","Complex64Array"),D(lt,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Me(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Me(n=arguments[1]))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(ot(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ye(c=n.call(e,r.get(s),s)))o[y]=Xe(c),o[y+1]=Je(c);else{if(!(ce(c)&&c.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(se(r)){if(n){for(f=r.length,u=r.get&&r.set?Qe("default"):He("default"),s=0;s<f;s++)if(!Ye(u(r,s))){l=!0;break}if(l){if(!We(f))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ye(c=n.call(e,u(r,s),s)))o[y]=Xe(c),o[y+1]=Je(c);else{if(!(ce(c)&&c.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(he(r)&&it&&Me(r[Ge])){if(!Me((o=r[Ge]()).next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?et(o,n,e):rt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),D(lt,"of",(function(){var r,e;if(!Me(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ze(lt.prototype,"buffer",(function(){return this._buffer.buffer})),Ze(lt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ze(lt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),D(lt.prototype,"BYTES_PER_ELEMENT",lt.BYTES_PER_ELEMENT),D(lt.prototype,"copyWithin",(function(r,e){if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),D(lt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,D(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Ue(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),D(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ge&&D(t,Ge,(function(){return e.entries()})),t})),D(lt.prototype,"get",(function(r){var e;if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ue(r))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Ue((e=this._buffer)[r*=2],e[r+1])})),Ze(lt.prototype,"length",(function(){return this._length})),D(lt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ue(t=arguments[1]))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ye(r)){if(t>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Xe(r),void(n[t+1]=Je(r))}if(ot(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*nt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new vr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!se(r))throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ye(r[f])){o=!0;break}if(o){if(!We(a))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*nt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new vr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Xe(u),n[t+1]=Je(u),t+=2}}));var yt={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function pt(r){var e=yt[r];return"function"==typeof e?e:yt.default}var ht={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function gt(r){var e=ht[r];return"function"==typeof e?e:ht.default}function mt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ce(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ye(n))return new TypeError(Y("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(ct(n),st(n))}return e}function wt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ce(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ye(o))return new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(ct(o),st(o))}return n}function bt(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ye(n=e[i]))return null;r[o]=ct(n),r[o+1]=st(n),o+=2}return r}var vt=2*hr.BYTES_PER_ELEMENT,dt=$e();function Et(r){return r instanceof xt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function At(r){return r===xt||"Complex64Array"===r.name}function Tt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===vt/2}function _t(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===vt}function xt(){var r,e,t,n;if(e=arguments.length,!(this instanceof xt))return 0===e?new xt:1===e?new xt(arguments[0]):2===e?new xt(arguments[0],arguments[1]):new xt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new hr(0);else if(1===e)if(ue(arguments[0]))t=new hr(2*arguments[0]);else if(se(arguments[0]))if((n=(t=arguments[0]).length)&&or(t)&&Ye(t[0])){if(null===(t=bt(new hr(2*n),t))){if(!We(n))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new hr(arguments[0])}}else{if(Tt(t))t=ze(t,0);else if(_t(t))t=qe(t,0);else if(!We(n))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new hr(t)}else if(pe(arguments[0])){if(!te((t=arguments[0]).byteLength/vt))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",vt,t.byteLength));t=new hr(t)}else{if(!he(arguments[0]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===dt)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Me(t[Ge]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Me((t=t[Ge]()).next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=mt(t))instanceof Error)throw t;t=new hr(t)}else{if(!pe(t=arguments[0]))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ue(r=arguments[1]))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!te(r/vt))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",vt,r));if(2===e){if(!te((n=t.byteLength-r)/vt))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",vt,n));t=new hr(t,r)}else{if(!ue(n=arguments[2]))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*vt>t.byteLength-r)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*vt));t=new hr(t,r,2*n)}}return D(this,"_buffer",t),D(this,"_length",t.length/2),this}D(xt,"BYTES_PER_ELEMENT",vt),D(xt,"name","Complex128Array"),D(xt,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Me(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!At(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Me(n=arguments[1]))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(Et(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ye(c=n.call(e,r.get(s),s)))o[y]=ct(c),o[y+1]=st(c);else{if(!(ce(c)&&c.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(se(r)){if(n){for(f=r.length,u=r.get&&r.set?gt("default"):pt("default"),s=0;s<f;s++)if(!Ye(u(r,s))){l=!0;break}if(l){if(!We(f))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ye(c=n.call(e,u(r,s),s)))o[y]=ct(c),o[y+1]=st(c);else{if(!(ce(c)&&c.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(he(r)&&dt&&Me(r[Ge])){if(!Me((o=r[Ge]()).next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?wt(o,n,e):mt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),D(xt,"of",(function(){var r,e;if(!Me(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!At(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ze(xt.prototype,"buffer",(function(){return this._buffer.buffer})),Ze(xt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ze(xt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),D(xt.prototype,"BYTES_PER_ELEMENT",xt.BYTES_PER_ELEMENT),D(xt.prototype,"copyWithin",(function(r,e){if(!Et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),D(xt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!Et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,D(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Oe(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),D(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ge&&D(t,Ge,(function(){return e.entries()})),t})),D(xt.prototype,"get",(function(r){var e;if(!Et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ue(r))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Oe((e=this._buffer)[r*=2],e[r+1])})),Ze(xt.prototype,"length",(function(){return this._length})),D(xt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!Et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ue(t=arguments[1]))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ye(r)){if(t>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=ct(r),void(n[t+1]=st(r))}if(Et(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*vt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new hr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!se(r))throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ye(r[f])){o=!0;break}if(o){if(!We(a))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*vt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new hr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=ct(u),n[t+1]=st(u),t+=2}}));var jt=[hr,vr,kr,Tr,Mr,Rr,Jr,Nr,$r,lt,xt],kt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Vt=kt.length;function Bt(r){var e;if(or(r))return"generic";if(ur(r))return null;for(e=0;e<Vt;e++)if(r instanceof jt[e])return kt[e];return cr[function(r){var e,t,n;if(("Object"===(t=ir(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=lr.exec(n.toString()))return e[1]}return ur(r)?"Buffer":t}(r)]||null}function Lt(e){var n,o=Bt(e);return typeof(n=e).get===r&&typeof n.set===r?{accessorProtocol:!0,accessors:[a(o),f(o)]}:{accessorProtocol:!1,accessors:[t(o),i(o)]}}function Rt(r){var e;for(e=0;e<r.length;e+=2)if(r[e]||r[e+1])return!1;return!0}return function(r){var e,t=function(r){var e=Lt(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}(r);return t.accessorProtocol?"object"==typeof(e=r)&&null!==e&&"Complex128Array"===e.constructor.name&&16===e.BYTES_PER_ELEMENT?Rt(qe(r,0)):function(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&8===r.BYTES_PER_ELEMENT}(r)?Rt(ze(r,0)):function(r){var e,t,n;for(e=r.data,t=r.accessors[0],n=0;n<e.length;n++)if(t(e,n))return!1;return!0}(t):function(r){var e;for(e=0;e<r.length;e++)if(r[e])return!1;return!0}(r)}}));
//# sourceMappingURL=index.js.map
