// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
var r=void 0!==String.prototype.repeat;var t=String.prototype.repeat;var e=r?function(r,e){return t.call(r,e)}:function(r,t){var e,n;if(0===r.length||0===t)return"";for(e="",n=t;1==(1&n)&&(e+=r),0!=(n>>>=1);)r+=r;return e};export{e as default};
//# sourceMappingURL=index.mjs.map