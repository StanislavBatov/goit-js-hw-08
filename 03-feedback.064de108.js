!function(){function e(e){return e&&e.__esModule?e.default:e}var t,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof r&&r&&r.Object===Object&&r,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,r){var n,i,a,f,u,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var r=n,o=i;return n=i=void 0,c=t,f=e.apply(o,r)}function O(e){return c=e,u=setTimeout(j,t),s?p(e):f}function h(e){var r=e-l;return void 0===l||r>=t||r<0||d&&e-c>=a}function j(){var e=b();if(h(e))return N(e);u=setTimeout(j,function(e){var r=t-(e-l);return d?g(r,a-(e-c)):r}(e))}function N(e){return u=void 0,v&&n?p(e):(n=i=void 0,f)}function w(){var e=b(),r=h(e);if(n=arguments,i=this,l=e,r){if(void 0===u)return O(l);if(d)return u=setTimeout(j,t),p(l)}return void 0===u&&(u=setTimeout(j,t)),f}return t=S(t)||0,y(r)&&(s=!!r.leading,a=(d="maxWait"in r)?m(S(r.maxWait)||0,t):a,v="trailing"in r?!!r.trailing:v),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,n=l=i=u=void 0},w.flush=function(){return void 0===u?f:N(b())},w}function y(t){var r=void 0===t?"undefined":e(n)(t);return!!t&&("object"==r||"function"==r)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=y(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),p(e,t,{leading:n,maxWait:t,trailing:i})};var O={save:function(e,t){try{var r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}},h=document.querySelector(".feedback-form");if(localStorage.getItem("feedback-form-state")){var j=O.load("feedback-form-state");for(var N in j)j[N]&&(h[N].value=j[N])}h.addEventListener("input",e(t)((function(e){var t=JSON.parse(localStorage.getItem("feedback-form-state"))||{};t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),h.addEventListener("submit",(function(e){if(e.preventDefault(),null===JSON.parse(localStorage.getItem("feedback-form-state")))return alert("All fields must be filled!!!");console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),h.reset()}))}();
//# sourceMappingURL=03-feedback.064de108.js.map