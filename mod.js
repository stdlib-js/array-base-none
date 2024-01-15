// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function e(e){var t=r[e];return"function"==typeof t?t:r.default}var t={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function n(r){var e=t[r];return"function"==typeof e?e:t.default}var i={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function o(r){var e=i[r];return"function"==typeof e?e:i.default}var a={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function u(r){var e=a[r];return"function"==typeof e?e:a.default}var f="function"==typeof Object.defineProperty?Object.defineProperty:null;var l=Object.defineProperty;function c(r){return"number"==typeof r}function s(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function y(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+s(i):s(i)+r,n&&(r="-"+r)),r}var p=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function g(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!c(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=y(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=y(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===h.call(r.specifier)?h.call(t):p.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function m(r){return"string"==typeof r}var w=Math.abs,b=String.prototype.toLowerCase,v=String.prototype.toUpperCase,d=String.prototype.replace,E=/e\+(\d)$/,A=/e-(\d)$/,_=/^(\d+)$/,T=/^(\d+)e/,x=/\.0$/,j=/\.0*e/,k=/(\..*[^0])0*e/;function V(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!c(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":w(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=d.call(t,k,"$1e"),t=d.call(t,j,"e"),t=d.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=d.call(t,E,"e+0$1"),t=d.call(t,A,"e-0$1"),r.alternate&&(t=d.call(t,_,"$1."),t=d.call(t,T,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===v.call(r.specifier)?v.call(t):b.call(t)}function B(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function L(r,e,t){var n=e-r.length;return n<0?r:r=t?r+B(n):B(n)+r}var R=String.fromCharCode,S=isNaN,I=Array.isArray;function C(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function M(r){var e,t,n,i,o,a,u,f,l;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(m(n=r[f]))a+=n;else{if(e=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,S(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=g(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):R(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=V(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=y(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=L(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,i;for(t=[],i=0,n=O.exec(r);n;)(e=r.slice(i,O.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),i=O.lastIndex,n=O.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function N(r){return"string"==typeof r}function U(r){var e,t,n;if(!N(r))throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=P(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return M.apply(null,t)}var Y,W=Object.prototype,$=W.toString,G=W.__defineGetter__,Z=W.__defineSetter__,X=W.__lookupGetter__,J=W.__lookupSetter__;Y=function(){try{return f({},"x",{}),!0}catch(r){return!1}}()?l:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(X.call(r,e)||J.call(r,e)?(n=r.__proto__,r.__proto__=W,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,e,t.get),a&&Z&&Z.call(r,e,t.set),r};var z=Y;function q(r,e,t){z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return D&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;function rr(r,e){return null!=r&&Q.call(r,e)}var er="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof er?er.toStringTag:"";var nr=H()?function(r){var e,t,n;if(null==r)return K.call(r);t=r[tr],e=rr(r,tr);try{r[tr]=void 0}catch(e){return K.call(r)}return n=K.call(r),e?r[tr]=t:delete r[tr],n}:function(r){return K.call(r)};var ir=Array.isArray?Array.isArray:function(r){return"[object Array]"===nr(r)};function or(r){return null!==r&&"object"==typeof r}function ar(r){return or(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function ur(){return/^\s*function\s*([^(]*)/i}q(or,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!ir(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(or));var fr=/^\s*function\s*([^(]*)/i;q(ur,"REGEXP",fr);var lr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},cr="function"==typeof Float64Array;var sr="function"==typeof Float64Array?Float64Array:null;var yr="function"==typeof Float64Array?Float64Array:void 0;var pr=function(){var r,e,t;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),t=e,r=(cr&&t instanceof Float64Array||"[object Float64Array]"===nr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")},hr="function"==typeof Float32Array;var gr=Number.POSITIVE_INFINITY,mr="function"==typeof Float32Array?Float32Array:null;var wr="function"==typeof Float32Array?Float32Array:void 0;var br=function(){var r,e,t;if("function"!=typeof mr)return!1;try{e=new mr([1,3.14,-3.14,5e40]),t=e,r=(hr&&t instanceof Float32Array||"[object Float32Array]"===nr(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===gr}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")},vr="function"==typeof Uint32Array;var dr="function"==typeof Uint32Array?Uint32Array:null;var Er="function"==typeof Uint32Array?Uint32Array:void 0;var Ar=function(){var r,e,t;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(vr&&t instanceof Uint32Array||"[object Uint32Array]"===nr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Er:function(){throw new Error("not implemented")},_r="function"==typeof Int32Array;var Tr="function"==typeof Int32Array?Int32Array:null;var xr="function"==typeof Int32Array?Int32Array:void 0;var jr=function(){var r,e,t;if("function"!=typeof Tr)return!1;try{e=new Tr([1,3.14,-3.14,2147483648]),t=e,r=(_r&&t instanceof Int32Array||"[object Int32Array]"===nr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?xr:function(){throw new Error("not implemented")},kr="function"==typeof Uint16Array;var Vr="function"==typeof Uint16Array?Uint16Array:null;var Br="function"==typeof Uint16Array?Uint16Array:void 0;var Lr=function(){var r,e,t;if("function"!=typeof Vr)return!1;try{e=new Vr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(kr&&t instanceof Uint16Array||"[object Uint16Array]"===nr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Br:function(){throw new Error("not implemented")},Rr="function"==typeof Int16Array;var Sr="function"==typeof Int16Array?Int16Array:null;var Ir="function"==typeof Int16Array?Int16Array:void 0;var Cr=function(){var r,e,t;if("function"!=typeof Sr)return!1;try{e=new Sr([1,3.14,-3.14,32768]),t=e,r=(Rr&&t instanceof Int16Array||"[object Int16Array]"===nr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Ir:function(){throw new Error("not implemented")},Mr="function"==typeof Uint8Array;var Or="function"==typeof Uint8Array?Uint8Array:null;var Fr="function"==typeof Uint8Array?Uint8Array:void 0;var Pr=function(){var r,e,t;if("function"!=typeof Or)return!1;try{e=new Or(e=[1,3.14,-3.14,256,257]),t=e,r=(Mr&&t instanceof Uint8Array||"[object Uint8Array]"===nr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Fr:function(){throw new Error("not implemented")},Nr="function"==typeof Uint8ClampedArray;var Ur="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Yr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Wr=function(){var r,e,t;if("function"!=typeof Ur)return!1;try{e=new Ur([-1,0,1,3.14,4.99,255,256]),t=e,r=(Nr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===nr(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Yr:function(){throw new Error("not implemented")},$r="function"==typeof Int8Array;var Gr="function"==typeof Int8Array?Int8Array:null;var Zr="function"==typeof Int8Array?Int8Array:void 0;var Xr=function(){var r,e,t;if("function"!=typeof Gr)return!1;try{e=new Gr([1,3.14,-3.14,128]),t=e,r=($r&&t instanceof Int8Array||"[object Int8Array]"===nr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Zr:function(){throw new Error("not implemented")};function Jr(r){return"number"==typeof r}var zr=Number,qr=zr.prototype.toString;var Dr=H();function Hr(r){return"object"==typeof r&&(r instanceof zr||(Dr?function(r){try{return qr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===nr(r)))}function Kr(r){return Jr(r)||Hr(r)}q(Kr,"isPrimitive",Jr),q(Kr,"isObject",Hr);var Qr=zr.NEGATIVE_INFINITY,re=Math.floor;function ee(r){return re(r)===r}function te(r){return r<gr&&r>Qr&&ee(r)}function ne(r){return Jr(r)&&te(r)}function ie(r){return Hr(r)&&te(r.valueOf())}function oe(r){return ne(r)||ie(r)}function ae(r){return ne(r)&&r>=0}function ue(r){return ie(r)&&r.valueOf()>=0}function fe(r){return ae(r)||ue(r)}q(oe,"isPrimitive",ne),q(oe,"isObject",ie),q(fe,"isPrimitive",ae),q(fe,"isObject",ue);function le(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ee(r.length)&&r.length>=0&&r.length<=4294967295}function ce(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ee(r.length)&&r.length>=0&&r.length<=9007199254740991}var se="function"==typeof ArrayBuffer;function ye(r){return se&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===nr(r)}function pe(r){return"object"==typeof r&&null!==r&&!ir(r)}var he=/./;function ge(r){return"boolean"==typeof r}var me=Boolean,we=Boolean.prototype.toString;var be=H();function ve(r){return"object"==typeof r&&(r instanceof me||(be?function(r){try{return we.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===nr(r)))}function de(r){return ge(r)||ve(r)}function Ee(){return new Function("return this;")()}q(de,"isPrimitive",ge),q(de,"isObject",ve);var Ae="object"==typeof self?self:null,_e="object"==typeof window?window:null,Te="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},xe="object"==typeof Te?Te:null,je="object"==typeof globalThis?globalThis:null;var ke=function(r){if(arguments.length){if(!ge(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ee()}if(je)return je;if(Ae)return Ae;if(_e)return _e;if(xe)return xe;throw new Error("unexpected error. Unable to resolve global object.")}(),Ve=ke.document&&ke.document.childNodes,Be=Int8Array;function Le(){return/^\s*function\s*([^(]*)/i}var Re=/^\s*function\s*([^(]*)/i;function Se(r){return null!==r&&"object"==typeof r}function Ie(r){var e,t,n,i;if(("Object"===(t=nr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Re.exec(n.toString()))return e[1]}return Se(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}q(Le,"REGEXP",Re),q(Se,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!ir(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Se));var Ce="function"==typeof he||"object"==typeof Be||"function"==typeof Ve?function(r){return Ie(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ie(r).toLowerCase():e};function Me(r){return"function"===Ce(r)}function Oe(r,e){if(!(this instanceof Oe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Jr(r))throw new TypeError(U("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Jr(e))throw new TypeError(U("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}q(Oe,"BYTES_PER_ELEMENT",8),q(Oe.prototype,"BYTES_PER_ELEMENT",8),q(Oe.prototype,"byteLength",16),q(Oe.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),q(Oe.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Fe="function"==typeof Math.fround?Math.fround:null,Pe=new br(1);var Ne="function"==typeof Fe?Fe:function(r){return Pe[0]=r,Pe[0]};function Ue(r,e){if(!(this instanceof Ue))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Jr(r))throw new TypeError(U("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Jr(e))throw new TypeError(U("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ne(r)}),z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ne(e)}),this}function Ye(r){return r instanceof Oe||r instanceof Ue||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function We(r){return ee(r/2)}function $e(){return"function"==typeof er&&"symbol"==typeof er("foo")&&rr(er,"iterator")&&"symbol"==typeof er.iterator}q(Ue,"BYTES_PER_ELEMENT",4),q(Ue.prototype,"BYTES_PER_ELEMENT",4),q(Ue.prototype,"byteLength",8),q(Ue.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),q(Ue.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Ge=$e()?Symbol.iterator:null;function Ze(r,e,t){z(r,e,{configurable:!1,enumerable:!1,get:t})}function Xe(r){return r.re}function Je(r){return r.im}function ze(r,e){return new br(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function qe(r,e){return new pr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}var De={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function He(r){var e=De[r];return"function"==typeof e?e:De.default}var Ke={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function Qe(r){var e=Ke[r];return"function"==typeof e?e:Ke.default}function rt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(le(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ye(n))return new TypeError(U("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Xe(n),Je(n))}return e}function et(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,le(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ye(o))return new TypeError(U("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Xe(o),Je(o))}return n}function tt(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ye(n=e[i]))return null;r[o]=Xe(n),r[o+1]=Je(n),o+=2}return r}var nt=2*br.BYTES_PER_ELEMENT,it=$e();function ot(r){return r instanceof lt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function at(r){return r===lt||"Complex128Array"===r.name}function ut(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===nt}function ft(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*nt}function lt(){var r,e,t,n;if(e=arguments.length,!(this instanceof lt))return 0===e?new lt:1===e?new lt(arguments[0]):2===e?new lt(arguments[0],arguments[1]):new lt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new br(0);else if(1===e)if(ae(arguments[0]))t=new br(2*arguments[0]);else if(ce(arguments[0]))if((n=(t=arguments[0]).length)&&ir(t)&&Ye(t[0])){if(null===(t=tt(new br(2*n),t))){if(!We(n))throw new RangeError(U("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new br(arguments[0])}}else{if(ut(t))t=ze(t,0);else if(ft(t))t=qe(t,0);else if(!We(n))throw new RangeError(U("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new br(t)}else if(ye(arguments[0])){if(!ee((t=arguments[0]).byteLength/nt))throw new RangeError(U("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",nt,t.byteLength));t=new br(t)}else{if(!pe(arguments[0]))throw new TypeError(U("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===it)throw new TypeError(U("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Me(t[Ge]))throw new TypeError(U("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Me((t=t[Ge]()).next))throw new TypeError(U("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=rt(t))instanceof Error)throw t;t=new br(t)}else{if(!ye(t=arguments[0]))throw new TypeError(U("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ae(r=arguments[1]))throw new TypeError(U("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!ee(r/nt))throw new RangeError(U("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",nt,r));if(2===e){if(!ee((n=t.byteLength-r)/nt))throw new RangeError(U("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",nt,n));t=new br(t,r)}else{if(!ae(n=arguments[2]))throw new TypeError(U("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*nt>t.byteLength-r)throw new RangeError(U("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*nt));t=new br(t,r,2*n)}}return q(this,"_buffer",t),q(this,"_length",t.length/2),this}function ct(r){return r.re}function st(r){return r.im}q(lt,"BYTES_PER_ELEMENT",nt),q(lt,"name","Complex64Array"),q(lt,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Me(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Me(n=arguments[1]))throw new TypeError(U("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(ot(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ye(c=n.call(e,r.get(s),s)))o[y]=Xe(c),o[y+1]=Je(c);else{if(!(le(c)&&c.length>=2))throw new TypeError(U("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(ce(r)){if(n){for(f=r.length,u=r.get&&r.set?Qe("default"):He("default"),s=0;s<f;s++)if(!Ye(u(r,s))){l=!0;break}if(l){if(!We(f))throw new RangeError(U("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ye(c=n.call(e,u(r,s),s)))o[y]=Xe(c),o[y+1]=Je(c);else{if(!(le(c)&&c.length>=2))throw new TypeError(U("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(pe(r)&&it&&Me(r[Ge])){if(!Me((o=r[Ge]()).next))throw new TypeError(U("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?et(o,n,e):rt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(U("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),q(lt,"of",(function(){var r,e;if(!Me(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ze(lt.prototype,"buffer",(function(){return this._buffer.buffer})),Ze(lt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ze(lt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),q(lt.prototype,"BYTES_PER_ELEMENT",lt.BYTES_PER_ELEMENT),q(lt.prototype,"copyWithin",(function(r,e){if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),q(lt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,q(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Ue(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),q(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ge&&q(t,Ge,(function(){return e.entries()})),t})),q(lt.prototype,"get",(function(r){var e;if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ae(r))throw new TypeError(U("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Ue((e=this._buffer)[r*=2],e[r+1])})),Ze(lt.prototype,"length",(function(){return this._length})),q(lt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ae(t=arguments[1]))throw new TypeError(U("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ye(r)){if(t>=this._length)throw new RangeError(U("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Xe(r),void(n[t+1]=Je(r))}if(ot(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*nt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new br(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!ce(r))throw new TypeError(U("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ye(r[f])){o=!0;break}if(o){if(!We(a))throw new RangeError(U("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*nt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new br(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Xe(u),n[t+1]=Je(u),t+=2}}));var yt={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function pt(r){var e=yt[r];return"function"==typeof e?e:yt.default}var ht={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function gt(r){var e=ht[r];return"function"==typeof e?e:ht.default}function mt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(le(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ye(n))return new TypeError(U("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(ct(n),st(n))}return e}function wt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,le(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ye(o))return new TypeError(U("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(ct(o),st(o))}return n}function bt(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ye(n=e[i]))return null;r[o]=ct(n),r[o+1]=st(n),o+=2}return r}var vt=2*pr.BYTES_PER_ELEMENT,dt=$e();function Et(r){return r instanceof xt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function At(r){return r===xt||"Complex64Array"===r.name}function _t(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===vt/2}function Tt(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===vt}function xt(){var r,e,t,n;if(e=arguments.length,!(this instanceof xt))return 0===e?new xt:1===e?new xt(arguments[0]):2===e?new xt(arguments[0],arguments[1]):new xt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new pr(0);else if(1===e)if(ae(arguments[0]))t=new pr(2*arguments[0]);else if(ce(arguments[0]))if((n=(t=arguments[0]).length)&&ir(t)&&Ye(t[0])){if(null===(t=bt(new pr(2*n),t))){if(!We(n))throw new RangeError(U("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new pr(arguments[0])}}else{if(_t(t))t=ze(t,0);else if(Tt(t))t=qe(t,0);else if(!We(n))throw new RangeError(U("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new pr(t)}else if(ye(arguments[0])){if(!ee((t=arguments[0]).byteLength/vt))throw new RangeError(U("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",vt,t.byteLength));t=new pr(t)}else{if(!pe(arguments[0]))throw new TypeError(U("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===dt)throw new TypeError(U("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Me(t[Ge]))throw new TypeError(U("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Me((t=t[Ge]()).next))throw new TypeError(U("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=mt(t))instanceof Error)throw t;t=new pr(t)}else{if(!ye(t=arguments[0]))throw new TypeError(U("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ae(r=arguments[1]))throw new TypeError(U("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!ee(r/vt))throw new RangeError(U("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",vt,r));if(2===e){if(!ee((n=t.byteLength-r)/vt))throw new RangeError(U("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",vt,n));t=new pr(t,r)}else{if(!ae(n=arguments[2]))throw new TypeError(U("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*vt>t.byteLength-r)throw new RangeError(U("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*vt));t=new pr(t,r,2*n)}}return q(this,"_buffer",t),q(this,"_length",t.length/2),this}q(xt,"BYTES_PER_ELEMENT",vt),q(xt,"name","Complex128Array"),q(xt,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Me(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!At(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Me(n=arguments[1]))throw new TypeError(U("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(Et(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ye(c=n.call(e,r.get(s),s)))o[y]=ct(c),o[y+1]=st(c);else{if(!(le(c)&&c.length>=2))throw new TypeError(U("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(ce(r)){if(n){for(f=r.length,u=r.get&&r.set?gt("default"):pt("default"),s=0;s<f;s++)if(!Ye(u(r,s))){l=!0;break}if(l){if(!We(f))throw new RangeError(U("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ye(c=n.call(e,u(r,s),s)))o[y]=ct(c),o[y+1]=st(c);else{if(!(le(c)&&c.length>=2))throw new TypeError(U("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(pe(r)&&dt&&Me(r[Ge])){if(!Me((o=r[Ge]()).next))throw new TypeError(U("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?wt(o,n,e):mt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(U("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),q(xt,"of",(function(){var r,e;if(!Me(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!At(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ze(xt.prototype,"buffer",(function(){return this._buffer.buffer})),Ze(xt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ze(xt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),q(xt.prototype,"BYTES_PER_ELEMENT",xt.BYTES_PER_ELEMENT),q(xt.prototype,"copyWithin",(function(r,e){if(!Et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),q(xt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!Et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,q(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Oe(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),q(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ge&&q(t,Ge,(function(){return e.entries()})),t})),q(xt.prototype,"get",(function(r){var e;if(!Et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ae(r))throw new TypeError(U("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Oe((e=this._buffer)[r*=2],e[r+1])})),Ze(xt.prototype,"length",(function(){return this._length})),q(xt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!Et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ae(t=arguments[1]))throw new TypeError(U("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ye(r)){if(t>=this._length)throw new RangeError(U("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=ct(r),void(n[t+1]=st(r))}if(Et(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*vt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new pr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!ce(r))throw new TypeError(U("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ye(r[f])){o=!0;break}if(o){if(!We(a))throw new RangeError(U("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*vt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new pr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=ct(u),n[t+1]=st(u),t+=2}}));var jt=[pr,br,jr,Ar,Cr,Lr,Xr,Pr,Wr,lt,xt],kt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Vt=kt.length;function Bt(r){var e;if(ir(r))return"generic";if(ar(r))return null;for(e=0;e<Vt;e++)if(r instanceof jt[e])return kt[e];return lr[function(r){var e,t,n;if(("Object"===(t=nr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=fr.exec(n.toString()))return e[1]}return ar(r)?"Buffer":t}(r)]||null}function Lt(r){var t=function(r){var t,i=Bt(r);return"function"==typeof(t=r).get&&"function"==typeof t.set?{accessorProtocol:!0,accessors:[o(i),u(i)]}:{accessorProtocol:!1,accessors:[e(i),n(i)]}}(r);return{data:r,accessorProtocol:t.accessorProtocol,accessors:t.accessors}}function Rt(r){var e;for(e=0;e<r.length;e++)if(r[e])return!1;return!0}function St(r){var e,t=Lt(r);return t.accessorProtocol?"object"==typeof(e=r)&&null!==e&&"Complex128Array"===e.constructor.name&&16===e.BYTES_PER_ELEMENT?Rt(qe(r,0)):function(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&8===r.BYTES_PER_ELEMENT}(r)?Rt(ze(r,0)):function(r){var e,t,n;for(e=r.data,t=r.accessors[0],n=0;n<e.length;n++)if(t(e,n))return!1;return!0}(t):Rt(r)}export{St as default};
//# sourceMappingURL=mod.js.map
