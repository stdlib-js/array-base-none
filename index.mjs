// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex128array@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex64array@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.1.0-esm/index.mjs";function n(r){var e;for(e=0;e<r.length;e++)if(r[e])return!1;return!0}function a(a){var d=s(a);return d.accessorProtocol?r(a)?n(t(a,0)):e(a)?n(i(a,0)):function(r){var e,s,t;for(e=r.data,s=r.accessors[0],t=0;t<e.length;t++)if(s(e,t))return!1;return!0}(d):n(a)}export{a as default};
//# sourceMappingURL=index.mjs.map
