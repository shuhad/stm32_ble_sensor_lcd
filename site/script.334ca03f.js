parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"okjw":[function(require,module,exports) {
let t,e,a,n,r,c,s=[];async function i(){t=await navigator.serial.requestPort(),await t.open({baudRate:9600});const s=new TextEncoderStream;n=s.readable.pipeTo(t.writable),c=s.writable;let i=new TextDecoderStream;a=t.readable.pipeTo(i.writable),r=i.readable.pipeThrough(new TransformStream(new p)),e=r.getReader()}async function o(){return e&&(await e.cancel(),await a.catch(()=>{}),e=null,a=null),c&&(await c.getWriter().close(),await n,c=null,n=null),await t.close(),t=null,"Dongle Disconnected!"}function u(t){const e=c.getWriter();e.write(t),""!==t&&e.write("\r"),e.releaseLock()}exports.at_connect=async function(){return await i(),"device connected"},exports.at_disconnect=async function(){return await o(),"device disconnected"},exports.ati=(()=>t?(u("ATI"),l("ati")):"Device not connected."),exports.ate=function(t){return u("ATE"+t),l("ate")},exports.at_central=function(){return u("AT+CENTRAL"),l("at_central")},exports.at_peripheral=function(){return u("AT+PERIPHERAL"),l("at_peripheral")},exports.atr=function(){return u("ATR"),l("atr")},exports.at_advstart=function(){return u("AT+ADVSTART"),l("at_advstart")},exports.at_advstop=function(){return u("AT+ADVSTOP"),l("at_advstop")},exports.at_advdata=(t=>(u(t?"AT+ADVDATA="+t:"AT+ADVDATA"),l("at_advdata"))),exports.at_advdatai=function(t){return u("AT+ADVDATAI="+t),l("at_advdatai")},exports.at_advresp=function(t){return u(t?"AT+ADVRESP="+t:"AT+ADVRESP"),l("at_advresp")},exports.at_cancelconnect=function(){return u("AT+CANCELCONNECT"),l("at_cancelconnect")},exports.at_client=function(){return u("AT+CLIENT"),l("at_client")},exports.at_dual=function(){return u("AT+DUAL"),l("at_dual")},exports.at_enterpasskey=function(t=123456){return u("AT+ENTERPASSKEY="+t),l("at_enterpasskey")},exports.at_numcompa=function(t){return u(t?"AT+NUMCOMPA="+t:"AT+NUMCOMPA"),l("at_numcompa")},exports.at_gapiocap=function(t=1){return u("AT+GAPIOCAP="+t),l("at_gapiocap")},exports.at_gappair=function(t){return u(t?"AT+GAPPAIR="+t:"AT+GAPPAIR"),l("at_gappair")},exports.at_gapunpair=function(t){return u(t?"AT+GAPUNPAIR="+t:"AT+GAPUNPAIR"),l("at_gapunpair")},exports.at_gapscan=function(t=1,e=!0){return u("AT+GAPSCAN="+t),l("at_gapscan",e)},exports.at_seclvl=function(t){return u(t?"AT+SECLVL="+t:"AT+SECLVL"),l("at_seclvl")},exports.at_setpasskey=function(t){return u(t?"AT+SETPASSKEY="+t:"AT+SETPASSKEY"),l("at_setpasskey")},exports.at_findscandata=function(t=1,e=5){return u("AT+FINDSCANDATA="+t),l("at_findscandata",e)},exports.at_gapconnect=function(t){return u("AT+GAPCONNECT="+t),l("at_gapconnect")},exports.at_gapdisconnect=function(){return u("AT+GAPDISCONNECT"),l("at_gapdisconnect")},exports.at_getconn=async function(){return u("AT+GETCONN"),l("at_getconn")},exports.at_getservices=function(){return u("AT+GETSERVICES"),l("at_getservices")},exports.at_scantarget=function(t,e=1){return u("AT+SCANTARGET="+t),l("at_scantarget",e+2)},exports.at_server=function(){return u("AT+SERVER"),l("at_server")},exports.at_setnoti=function(t){return u("AT+SETNOTI="+t),l("at_setnoti")},exports.at_spssend=function(t){return u(t?"AT+SPSSEND="+t:"AT+SPSSEND"),l("at_spssend")},exports.at_targetconn=function(t){return u(t?"AT+TARGETCONN="+t:"AT+TARGETCONN"),l("at_targetconn")},exports.at_gapstatus=function(){return u("AT+GAPSTATUS"),l("at_gapstatus")},exports.at_gattcwrite=function(t,e){return u("AT+GATTCWRITE="+t+" "+e),l("at_gattcwrite")},exports.at_gattcwriteb=function(){return u("AT+GATTCWRITEB="+handle_param+" "+msg),l("at_gattcwriteb")},exports.at_gattcread=function(){return u("AT+GATTCREAD="+handle_param),l("at_gattcread")},exports.help=function(){return u("--H"),l("help")},exports.stop=function(){return u(""),"Process Stopped"};class p{constructor(){this.container=""}transform(t,e){this.container+=t;const a=this.container.split("\r\n");this.container=a.pop(),a.forEach(t=>e.enqueue(t))}flush(t){t.enqueue(this.container)}}async function l(t,a){for(s=[];;){const{done:n,value:r}=await e.read();switch(r&&s.push(r),t){case"ati":if(s.includes("Not Advertising")||s.includes("Advertising"))return s;break;case"ate":if(s.includes("ECHO OFF")||s.includes("ECHO ON"))return s;break;case"at_central":return"Central Mode";case"at_peripheral":return"Peripheral Mode";case"at_advstart":return"Advertising";case"at_advstop":return"Advertising Stopped";case"at_advdata":case"at_advdatai":case"at_advresp":if(2==s.length)return s;break;case"at_cancelconnect":if(s.includes("ERROR")||s.includes("OK"))return s;break;case"at_client":return"Client";case"at_dual":return"Dual Mode";case"at_enterpasskey":if(2==s.length)return s;break;case"atr":return"Trigger platform reset";case"at_findscandata":if(s.length==a){const t=c.getWriter();return t.write(""),t.releaseLock(),s}break;case"at_gapiocap":if(3==s.length)return s;break;case"at_gappair":if(s.includes("PAIRING SUCCESS")||s.includes("BONDING SUCCESS"))return s;break;case"at_gapunpair":if(s.includes("UNPARIED.")||3==s.length)return s;break;case"at_gapscan":if(!0===a&&s.some(function(t){t.indexOf("RSSI")>=0&&""!=r&&console.log(r)}),s.includes("SCAN COMPLETE"))return s;break;case"at_getconn":if(s.includes("No Connections found.")||2==s.length)return s;case"at_scantarget":if(s.length==a){const t=c.getWriter();return t.write(""),t.releaseLock(),s.slice(2)}break;case"at_setpasskey":if(2==s.length)return s;break;case"at_gattcwrite":if(4==s.length)return s;break;case"at_gapstatus":if(s.includes("Not Advertising")||s.includes("Advertising"))return s;break;case"at_gattcwrite":case"at_gattcwriteb":case"at_gattcread":if(4==s.length)return s;break;case"at_gapconnect":if(s.includes("CONNECTED.")||s.includes("DISCONNECTED.")||s.includes("ERROR")||s.includes("PAIRING SUCCESS"))return s;break;case"at_getservices":if(s.includes("Value received: "))return s;break;case"at_gapdisconnect":return"Disconnected.";case"at_numcompa":if(s.includes("ERROR")||s.includes("OK"))return s;break;case"at_seclvl":if(2==s.length)return s;break;case"at_server":return"Server";case"at_setnoti":if(20==s.length)return s;break;case"at_spssend":if(2==s.length||s.includes("[Sent]"))return s;case"at_targetconn":if(2==s.length)return s;case"help":if(s.includes("[A] = Usable in All Roles"))return s;break;default:return"Nothing!"}}}
},{}],"KA2S":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(F){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof g?r:g,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return T()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(F){return{type:"throw",arg:F}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function g(){}function d(){}function m(){}var w={};u(w,i,function(){return this});var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:r,done:!0}}return d.prototype=m,u(b,"constructor",m),u(m,"constructor",d),d.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),u(_.prototype,a,function(){return this}),t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),u(b,i,function(){return this}),u(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}
},{}],"mpVp":[function(require,module,exports) {
"use strict";var e=t(require("bleuio"));function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(n=function(e){return e?o:t})(e)}function t(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=n(t);if(o&&o.has(e))return o.get(e);var r={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=c?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,o&&o.set(e,r),r}function o(e,n,t,o,r,c,a){try{var i=e[c](a),u=i.value}catch(l){return void t(l)}i.done?n(u):Promise.resolve(u).then(o,r)}function r(e){return function(){var n=this,t=arguments;return new Promise(function(r,c){var a=e.apply(n,t);function i(e){o(a,r,c,i,u,"next",e)}function u(e){o(a,r,c,i,u,"throw",e)}i(void 0)})}}require("regenerator-runtime/runtime");var c="[0]40:48:FD:E5:2F:17";document.getElementById("connect").addEventListener("click",function(){e.at_connect(),document.getElementById("clearScreen").disabled=!1,document.getElementById("connect").disabled=!0,document.getElementById("sendDataForm").hidden=!1}),document.getElementById("sendDataForm").addEventListener("submit",function(e){e.preventDefault();var n=document.getElementById("sensorID").value;a(n),setInterval(function(){a(n)},1e4)});var a=function(n){e.ati().then(function(n){JSON.stringify(n).includes("Peripheral")&&(console.log("peripheral"),e.at_dual().then(function(e){console.log("central now")}))}).then(function(){e.at_getconn().then(function(n){JSON.stringify(n).includes(c)?console.log("already connected"):e.at_gapconnect(c).then(function(){console.log("connected successfully")})}).then(r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.at_findscandata(n,6).then(function(e){console.log("scandata",e);var t=e[e.length-1].split(" ").pop(),o=t.indexOf(n),r=t.substring(o+14,o+18),c=parseInt("0x"+r.match(/../g).reverse().join(""))/10,a=t.substring(o+38,o+42);return{CO2:parseInt("0x"+a),Temp:c}}));case 1:case"end":return t.stop()}},t)}))).then(function(t){console.log(t.CO2),console.log(t.Temp);var o="L=1 SENSOR ID "+n+"    TEMPERATURE "+t.Temp+" °c    CO2 "+t.CO2+" ppm";console.log("Message Send 1 "),e.at_spssend(o).then(function(){console.log("Message Send "+o)})})})};document.getElementById("clearScreen").addEventListener("click",function(){e.ati().then(function(n){JSON.stringify(n).includes("Peripheral")&&(console.log("peripheral"),e.at_central().then(function(e){console.log("central now")}))}).then(function(){e.at_getconn().then(function(n){JSON.stringify(n).includes(c)?console.log("already connected"):e.at_gapconnect(c).then(function(){console.log("connected successfully")})}).then(function(){e.at_spssend("L=0").then(function(){console.log("Screen Cleared")})})})});
},{"bleuio":"okjw","regenerator-runtime/runtime":"KA2S"}]},{},["mpVp"], null)
//# sourceMappingURL=/script.334ca03f.js.map