/*!
 * enquire.min.js
 */
/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
!function(e,t,n){var i=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=n(i):"function"==typeof define&&define.amd?define(function(){return t[e]=n(i)}):t[e]=n(i)}("enquire",this,function(e){"use strict";function t(e,t){var n,i=0,o=e.length;for(i;o>i&&(n=t(e[i],i),n!==!1);i++);}function n(e){return"[object Array]"===Object.prototype.toString.apply(e)}function i(e){return"function"==typeof e}function o(e){this.options=e,!e.deferSetup&&this.setup()}function r(t,n){this.query=t,this.isUnconditional=n,this.handlers=[],this.mql=e(t);var i=this;this.listener=function(e){i.mql=e,i.assess()},this.mql.addListener(this.listener)}function s(){if(!e)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!e("only all").matches}return o.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},r.prototype={addHandler:function(e){var t=new o(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var n=this.handlers;t(n,function(t,i){return t.equals(e)?(t.destroy(),!n.splice(i,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(e){e.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";t(this.handlers,function(t){t[e]()})}},s.prototype={register:function(e,o,s){var a=this.queries,l=s&&this.browserIsIncapable;return a[e]||(a[e]=new r(e,l)),i(o)&&(o={match:o}),n(o)||(o=[o]),t(o,function(t){i(t)&&(t={match:t}),a[e].addHandler(t)}),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}},new s}),/*! 
 * jquery.min.js
 */
/*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=!!e&&"length"in e&&e.length,n=re.type(e);return"function"!==n&&!re.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function i(e,t,n){if(re.isFunction(t))return re.grep(e,function(e,i){return!!t.call(e,i,e)!==n});if(t.nodeType)return re.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(ve.test(t))return re.filter(t,e,n);t=re.filter(t,e)}return re.grep(e,function(e){return K.call(t,e)>-1!==n})}function o(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function r(e){var t={};return re.each(e.match(xe)||[],function(e,n){t[n]=!0}),t}function s(){G.removeEventListener("DOMContentLoaded",s),e.removeEventListener("load",s),re.ready()}function a(){this.expando=re.expando+a.uid++}function l(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(Ae,"-$&").toLowerCase(),n=e.getAttribute(i),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:$e.test(n)?re.parseJSON(n):n)}catch(e){}Ee.set(e,t,n)}else n=void 0;return n}function u(e,t,n,i){var o,r=1,s=20,a=i?function(){return i.cur()}:function(){return re.css(e,t,"")},l=a(),u=n&&n[3]||(re.cssNumber[t]?"":"px"),c=(re.cssNumber[t]||"px"!==u&&+l)&&De.exec(re.css(e,t));if(c&&c[3]!==u){u=u||c[3],n=n||[],c=+l||1;do r=r||".5",c/=r,re.style(e,t,c+u);while(r!==(r=a()/l)&&1!==r&&--s)}return n&&(c=+c||+l||0,o=n[1]?c+(n[1]+1)*n[2]:+n[2],i&&(i.unit=u,i.start=c,i.end=o)),o}function c(e,t){var n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&re.nodeName(e,t)?re.merge([e],n):n}function d(e,t){for(var n=0,i=e.length;i>n;n++)Ce.set(e[n],"globalEval",!t||Ce.get(t[n],"globalEval"))}function p(e,t,n,i,o){for(var r,s,a,l,u,p,f=t.createDocumentFragment(),h=[],v=0,g=e.length;g>v;v++)if(r=e[v],r||0===r)if("object"===re.type(r))re.merge(h,r.nodeType?[r]:r);else if(_e.test(r)){for(s=s||f.appendChild(t.createElement("div")),a=(Pe.exec(r)||["",""])[1].toLowerCase(),l=qe[a]||qe._default,s.innerHTML=l[1]+re.htmlPrefilter(r)+l[2],p=l[0];p--;)s=s.lastChild;re.merge(h,s.childNodes),s=f.firstChild,s.textContent=""}else h.push(t.createTextNode(r));for(f.textContent="",v=0;r=h[v++];)if(i&&re.inArray(r,i)>-1)o&&o.push(r);else if(u=re.contains(r.ownerDocument,r),s=c(f.appendChild(r),"script"),u&&d(s),n)for(p=0;r=s[p++];)Le.test(r.type||"")&&n.push(r);return f}function f(){return!0}function h(){return!1}function v(){try{return G.activeElement}catch(e){}}function g(e,t,n,i,o,r){var s,a;if("object"==typeof t){"string"!=typeof n&&(i=i||n,n=void 0);for(a in t)g(e,a,n,i,t[a],r);return e}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),o===!1)o=h;else if(!o)return e;return 1===r&&(s=o,o=function(e){return re().off(e),s.apply(this,arguments)},o.guid=s.guid||(s.guid=re.guid++)),e.each(function(){re.event.add(this,t,o,i,n)})}function m(e,t){return re.nodeName(e,"table")&&re.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function y(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function w(e){var t=Be.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function b(e,t){var n,i,o,r,s,a,l,u;if(1===t.nodeType){if(Ce.hasData(e)&&(r=Ce.access(e),s=Ce.set(t,r),u=r.events)){delete s.handle,s.events={};for(o in u)for(n=0,i=u[o].length;i>n;n++)re.event.add(t,o,u[o][n])}Ee.hasData(e)&&(a=Ee.access(e),l=re.extend({},a),Ee.set(t,l))}}function x(e,t){var n=t.nodeName.toLowerCase();"input"===n&&He.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function k(e,t,n,i){t=J.apply([],t);var o,r,s,a,l,u,d=0,f=e.length,h=f-1,v=t[0],g=re.isFunction(v);if(g||f>1&&"string"==typeof v&&!ie.checkClone&&We.test(v))return e.each(function(o){var r=e.eq(o);g&&(t[0]=v.call(this,o,r.html())),k(r,t,n,i)});if(f&&(o=p(t,e[0].ownerDocument,!1,e,i),r=o.firstChild,1===o.childNodes.length&&(o=r),r||i)){for(s=re.map(c(o,"script"),y),a=s.length;f>d;d++)l=o,d!==h&&(l=re.clone(l,!0,!0),a&&re.merge(s,c(l,"script"))),n.call(e[d],l,d);if(a)for(u=s[s.length-1].ownerDocument,re.map(s,w),d=0;a>d;d++)l=s[d],Le.test(l.type||"")&&!Ce.access(l,"globalEval")&&re.contains(u,l)&&(l.src?re._evalUrl&&re._evalUrl(l.src):re.globalEval(l.textContent.replace(Ue,"")))}return e}function T(e,t,n){for(var i,o=t?re.filter(t,e):e,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||re.cleanData(c(i)),i.parentNode&&(n&&re.contains(i.ownerDocument,i)&&d(c(i,"script")),i.parentNode.removeChild(i));return e}function S(e,t){var n=re(t.createElement(e)).appendTo(t.body),i=re.css(n[0],"display");return n.detach(),i}function C(e){var t=G,n=Ye[e];return n||(n=S(e,t),"none"!==n&&n||(Xe=(Xe||re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Xe[0].contentDocument,t.write(),t.close(),n=S(e,t),Xe.detach()),Ye[e]=n),n}function E(e,t,n){var i,o,r,s,a=e.style;return n=n||Qe(e),s=n?n.getPropertyValue(t)||n[t]:void 0,""!==s&&void 0!==s||re.contains(e.ownerDocument,e)||(s=re.style(e,t)),n&&!ie.pixelMarginRight()&&Ge.test(s)&&Ve.test(t)&&(i=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r),void 0!==s?s+"":s}function $(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function A(e){if(e in it)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=nt.length;n--;)if(e=nt[n]+t,e in it)return e}function j(e,t,n){var i=De.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function D(e,t,n,i,o){for(var r=n===(i?"border":"content")?4:"width"===t?1:0,s=0;4>r;r+=2)"margin"===n&&(s+=re.css(e,n+Ne[r],!0,o)),i?("content"===n&&(s-=re.css(e,"padding"+Ne[r],!0,o)),"margin"!==n&&(s-=re.css(e,"border"+Ne[r]+"Width",!0,o))):(s+=re.css(e,"padding"+Ne[r],!0,o),"padding"!==n&&(s+=re.css(e,"border"+Ne[r]+"Width",!0,o)));return s}function N(t,n,i){var o=!0,r="width"===n?t.offsetWidth:t.offsetHeight,s=Qe(t),a="border-box"===re.css(t,"boxSizing",!1,s);if(G.msFullscreenElement&&e.top!==e&&t.getClientRects().length&&(r=Math.round(100*t.getBoundingClientRect()[n])),0>=r||null==r){if(r=E(t,n,s),(0>r||null==r)&&(r=t.style[n]),Ge.test(r))return r;o=a&&(ie.boxSizingReliable()||r===t.style[n]),r=parseFloat(r)||0}return r+D(t,n,i||(a?"border":"content"),o,s)+"px"}function O(e,t){for(var n,i,o,r=[],s=0,a=e.length;a>s;s++)i=e[s],i.style&&(r[s]=Ce.get(i,"olddisplay"),n=i.style.display,t?(r[s]||"none"!==n||(i.style.display=""),""===i.style.display&&Oe(i)&&(r[s]=Ce.access(i,"olddisplay",C(i.nodeName)))):(o=Oe(i),"none"===n&&o||Ce.set(i,"olddisplay",o?n:re.css(i,"display"))));for(s=0;a>s;s++)i=e[s],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?r[s]||"":"none"));return e}function H(e,t,n,i,o){return new H.prototype.init(e,t,n,i,o)}function P(){return e.setTimeout(function(){ot=void 0}),ot=re.now()}function L(e,t){var n,i=0,o={height:e};for(t=t?1:0;4>i;i+=2-t)n=Ne[i],o["margin"+n]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function q(e,t,n){for(var i,o=(I.tweeners[t]||[]).concat(I.tweeners["*"]),r=0,s=o.length;s>r;r++)if(i=o[r].call(n,t,e))return i}function _(e,t,n){var i,o,r,s,a,l,u,c,d=this,p={},f=e.style,h=e.nodeType&&Oe(e),v=Ce.get(e,"fxshow");n.queue||(a=re._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,d.always(function(){d.always(function(){a.unqueued--,re.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],u=re.css(e,"display"),c="none"===u?Ce.get(e,"olddisplay")||C(e.nodeName):u,"inline"===c&&"none"===re.css(e,"float")&&(f.display="inline-block")),n.overflow&&(f.overflow="hidden",d.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}));for(i in t)if(o=t[i],st.exec(o)){if(delete t[i],r=r||"toggle"===o,o===(h?"hide":"show")){if("show"!==o||!v||void 0===v[i])continue;h=!0}p[i]=v&&v[i]||re.style(e,i)}else u=void 0;if(re.isEmptyObject(p))"inline"===("none"===u?C(e.nodeName):u)&&(f.display=u);else{v?"hidden"in v&&(h=v.hidden):v=Ce.access(e,"fxshow",{}),r&&(v.hidden=!h),h?re(e).show():d.done(function(){re(e).hide()}),d.done(function(){var t;Ce.remove(e,"fxshow");for(t in p)re.style(e,t,p[t])});for(i in p)s=q(h?v[i]:0,i,d),i in v||(v[i]=s.start,h&&(s.end=s.start,s.start="width"===i||"height"===i?1:0))}}function z(e,t){var n,i,o,r,s;for(n in e)if(i=re.camelCase(n),o=t[i],r=e[n],re.isArray(r)&&(o=r[1],r=e[n]=r[0]),n!==i&&(e[i]=r,delete e[n]),s=re.cssHooks[i],s&&"expand"in s){r=s.expand(r),delete e[i];for(n in r)n in e||(e[n]=r[n],t[n]=o)}else t[i]=o}function I(e,t,n){var i,o,r=0,s=I.prefilters.length,a=re.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1;for(var t=ot||P(),n=Math.max(0,u.startTime+u.duration-t),i=n/u.duration||0,r=1-i,s=0,l=u.tweens.length;l>s;s++)u.tweens[s].run(r);return a.notifyWith(e,[u,r,n]),1>r&&l?n:(a.resolveWith(e,[u]),!1)},u=a.promise({elem:e,props:re.extend({},t),opts:re.extend(!0,{specialEasing:{},easing:re.easing._default},n),originalProperties:t,originalOptions:n,startTime:ot||P(),duration:n.duration,tweens:[],createTween:function(t,n){var i=re.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(i),i},stop:function(t){var n=0,i=t?u.tweens.length:0;if(o)return this;for(o=!0;i>n;n++)u.tweens[n].run(1);return t?(a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u,t])):a.rejectWith(e,[u,t]),this}}),c=u.props;for(z(c,u.opts.specialEasing);s>r;r++)if(i=I.prefilters[r].call(u,e,c,u.opts))return re.isFunction(i.stop)&&(re._queueHooks(u.elem,u.opts.queue).stop=re.proxy(i.stop,i)),i;return re.map(c,q,u),re.isFunction(u.opts.start)&&u.opts.start.call(e,u),re.fx.timer(re.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function F(e){return e.getAttribute&&e.getAttribute("class")||""}function M(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,o=0,r=t.toLowerCase().match(xe)||[];if(re.isFunction(n))for(;i=r[o++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function R(e,t,n,i){function o(a){var l;return r[a]=!0,re.each(e[a]||[],function(e,a){var u=a(t,n,i);return"string"!=typeof u||s||r[u]?s?!(l=u):void 0:(t.dataTypes.unshift(u),o(u),!1)}),l}var r={},s=e===Et;return o(t.dataTypes[0])||!r["*"]&&o("*")}function W(e,t){var n,i,o=re.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:i||(i={}))[n]=t[n]);return i&&re.extend(!0,e,i),e}function B(e,t,n){for(var i,o,r,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}if(l[0]in n)r=l[0];else{for(o in n){if(!l[0]||e.converters[o+" "+l[0]]){r=o;break}s||(s=o)}r=r||s}return r?(r!==l[0]&&l.unshift(r),n[r]):void 0}function U(e,t,n,i){var o,r,s,a,l,u={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)u[s.toLowerCase()]=e.converters[s];for(r=c.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=c.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(s=u[l+" "+r]||u["* "+r],!s)for(o in u)if(a=o.split(" "),a[1]===r&&(s=u[l+" "+a[0]]||u["* "+a[0]])){s===!0?s=u[o]:u[o]!==!0&&(r=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}function X(e,t,n,i){var o;if(re.isArray(t))re.each(t,function(t,o){n||Dt.test(e)?i(e,o):X(e+"["+("object"==typeof o&&null!=o?t:"")+"]",o,n,i)});else if(n||"object"!==re.type(t))i(e,t);else for(o in t)X(e+"["+o+"]",t[o],n,i)}function Y(e){return re.isWindow(e)?e:9===e.nodeType&&e.defaultView}var V=[],G=e.document,Q=V.slice,J=V.concat,Z=V.push,K=V.indexOf,ee={},te=ee.toString,ne=ee.hasOwnProperty,ie={},oe="2.2.3",re=function(e,t){return new re.fn.init(e,t)},se=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ae=/^-ms-/,le=/-([\da-z])/gi,ue=function(e,t){return t.toUpperCase()};re.fn=re.prototype={jquery:oe,constructor:re,selector:"",length:0,toArray:function(){return Q.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:Q.call(this)},pushStack:function(e){var t=re.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e){return re.each(this,e)},map:function(e){return this.pushStack(re.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(Q.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:Z,sort:V.sort,splice:V.splice},re.extend=re.fn.extend=function(){var e,t,n,i,o,r,s=arguments[0]||{},a=1,l=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||re.isFunction(s)||(s={}),a===l&&(s=this,a--);l>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],i=e[t],s!==i&&(u&&i&&(re.isPlainObject(i)||(o=re.isArray(i)))?(o?(o=!1,r=n&&re.isArray(n)?n:[]):r=n&&re.isPlainObject(n)?n:{},s[t]=re.extend(u,r,i)):void 0!==i&&(s[t]=i));return s},re.extend({expando:"jQuery"+(oe+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===re.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=e&&e.toString();return!re.isArray(e)&&t-parseFloat(t)+1>=0},isPlainObject:function(e){var t;if("object"!==re.type(e)||e.nodeType||re.isWindow(e))return!1;if(e.constructor&&!ne.call(e,"constructor")&&!ne.call(e.constructor.prototype||{},"isPrototypeOf"))return!1;for(t in e);return void 0===t||ne.call(e,t)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ee[te.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=re.trim(e),e&&(1===e.indexOf("use strict")?(t=G.createElement("script"),t.text=e,G.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(ae,"ms-").replace(le,ue)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var i,o=0;if(n(e))for(i=e.length;i>o&&t.call(e[o],o,e[o])!==!1;o++);else for(o in e)if(t.call(e[o],o,e[o])===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(se,"")},makeArray:function(e,t){var i=t||[];return null!=e&&(n(Object(e))?re.merge(i,"string"==typeof e?[e]:e):Z.call(i,e)),i},inArray:function(e,t,n){return null==t?-1:K.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,o=e.length;n>i;i++)e[o++]=t[i];return e.length=o,e},grep:function(e,t,n){for(var i,o=[],r=0,s=e.length,a=!n;s>r;r++)i=!t(e[r],r),i!==a&&o.push(e[r]);return o},map:function(e,t,i){var o,r,s=0,a=[];if(n(e))for(o=e.length;o>s;s++)r=t(e[s],s,i),null!=r&&a.push(r);else for(s in e)r=t(e[s],s,i),null!=r&&a.push(r);return J.apply([],a)},guid:1,proxy:function(e,t){var n,i,o;return"string"==typeof t&&(n=e[t],t=e,e=n),re.isFunction(e)?(i=Q.call(arguments,2),o=function(){return e.apply(t||this,i.concat(Q.call(arguments)))},o.guid=e.guid=e.guid||re.guid++,o):void 0},now:Date.now,support:ie}),"function"==typeof Symbol&&(re.fn[Symbol.iterator]=V[Symbol.iterator]),re.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ee["[object "+t+"]"]=t.toLowerCase()});var ce=function(e){function t(e,t,n,i){var o,r,s,a,l,u,d,f,h=t&&t.ownerDocument,v=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==v&&9!==v&&11!==v)return n;if(!i&&((t?t.ownerDocument||t:F)!==O&&N(t),t=t||O,P)){if(11!==v&&(u=me.exec(e)))if(o=u[1]){if(9===v){if(!(s=t.getElementById(o)))return n;if(s.id===o)return n.push(s),n}else if(h&&(s=h.getElementById(o))&&z(t,s)&&s.id===o)return n.push(s),n}else{if(u[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((o=u[3])&&x.getElementsByClassName&&t.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(o)),n}if(x.qsa&&!U[e+" "]&&(!L||!L.test(e))){if(1!==v)h=t,f=e;else if("object"!==t.nodeName.toLowerCase()){for((a=t.getAttribute("id"))?a=a.replace(we,"\\$&"):t.setAttribute("id",a=I),d=C(e),r=d.length,l=pe.test(a)?"#"+a:"[id='"+a+"']";r--;)d[r]=l+" "+p(d[r]);f=d.join(","),h=ye.test(e)&&c(t.parentNode)||t}if(f)try{return Z.apply(n,h.querySelectorAll(f)),n}catch(e){}finally{a===I&&t.removeAttribute("id")}}}return $(e.replace(ae,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>k.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[I]=!0,e}function o(e){var t=O.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function r(e,t){for(var n=e.split("|"),i=n.length;i--;)k.attrHandle[n[i]]=t}function s(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||Y)-(~e.sourceIndex||Y);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function u(e){return i(function(t){return t=+t,i(function(n,i){for(var o,r=e([],n.length,t),s=r.length;s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]))})})}function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function d(){}function p(e){for(var t=0,n=e.length,i="";n>t;t++)i+=e[t].value;return i}function f(e,t,n){var i=t.dir,o=n&&"parentNode"===i,r=R++;return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var a,l,u,c=[M,r];if(s){for(;t=t[i];)if((1===t.nodeType||o)&&e(t,n,s))return!0}else for(;t=t[i];)if(1===t.nodeType||o){if(u=t[I]||(t[I]={}),l=u[t.uniqueID]||(u[t.uniqueID]={}),(a=l[i])&&a[0]===M&&a[1]===r)return c[2]=a[2];if(l[i]=c,c[2]=e(t,n,s))return!0}}}function h(e){return e.length>1?function(t,n,i){for(var o=e.length;o--;)if(!e[o](t,n,i))return!1;return!0}:e[0]}function v(e,n,i){for(var o=0,r=n.length;r>o;o++)t(e,n[o],i);return i}function g(e,t,n,i,o){for(var r,s=[],a=0,l=e.length,u=null!=t;l>a;a++)(r=e[a])&&(n&&!n(r,i,o)||(s.push(r),u&&t.push(a)));return s}function m(e,t,n,o,r,s){return o&&!o[I]&&(o=m(o)),r&&!r[I]&&(r=m(r,s)),i(function(i,s,a,l){var u,c,d,p=[],f=[],h=s.length,m=i||v(t||"*",a.nodeType?[a]:a,[]),y=!e||!i&&t?m:g(m,p,e,a,l),w=n?r||(i?e:h||o)?[]:s:y;if(n&&n(y,w,a,l),o)for(u=g(w,f),o(u,[],a,l),c=u.length;c--;)(d=u[c])&&(w[f[c]]=!(y[f[c]]=d));if(i){if(r||e){if(r){for(u=[],c=w.length;c--;)(d=w[c])&&u.push(y[c]=d);r(null,w=[],u,l)}for(c=w.length;c--;)(d=w[c])&&(u=r?ee(i,d):p[c])>-1&&(i[u]=!(s[u]=d))}}else w=g(w===s?w.splice(h,w.length):w),r?r(null,s,w,l):Z.apply(s,w)})}function y(e){for(var t,n,i,o=e.length,r=k.relative[e[0].type],s=r||k.relative[" "],a=r?1:0,l=f(function(e){return e===t},s,!0),u=f(function(e){return ee(t,e)>-1},s,!0),c=[function(e,n,i){var o=!r&&(i||n!==A)||((t=n).nodeType?l(e,n,i):u(e,n,i));return t=null,o}];o>a;a++)if(n=k.relative[e[a].type])c=[f(h(c),n)];else{if(n=k.filter[e[a].type].apply(null,e[a].matches),n[I]){for(i=++a;o>i&&!k.relative[e[i].type];i++);return m(a>1&&h(c),a>1&&p(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ae,"$1"),n,i>a&&y(e.slice(a,i)),o>i&&y(e=e.slice(i)),o>i&&p(e))}c.push(n)}return h(c)}function w(e,n){var o=n.length>0,r=e.length>0,s=function(i,s,a,l,u){var c,d,p,f=0,h="0",v=i&&[],m=[],y=A,w=i||r&&k.find.TAG("*",u),b=M+=null==y?1:Math.random()||.1,x=w.length;for(u&&(A=s===O||s||u);h!==x&&null!=(c=w[h]);h++){if(r&&c){for(d=0,s||c.ownerDocument===O||(N(c),a=!P);p=e[d++];)if(p(c,s||O,a)){l.push(c);break}u&&(M=b)}o&&((c=!p&&c)&&f--,i&&v.push(c))}if(f+=h,o&&h!==f){for(d=0;p=n[d++];)p(v,m,s,a);if(i){if(f>0)for(;h--;)v[h]||m[h]||(m[h]=Q.call(l));m=g(m)}Z.apply(l,m),u&&!i&&m.length>0&&f+n.length>1&&t.uniqueSort(l)}return u&&(M=b,A=y),v};return o?i(s):s}var b,x,k,T,S,C,E,$,A,j,D,N,O,H,P,L,q,_,z,I="sizzle"+1*new Date,F=e.document,M=0,R=0,W=n(),B=n(),U=n(),X=function(e,t){return e===t&&(D=!0),0},Y=1<<31,V={}.hasOwnProperty,G=[],Q=G.pop,J=G.push,Z=G.push,K=G.slice,ee=function(e,t){for(var n=0,i=e.length;i>n;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",oe="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+ne+"*\\]",re=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ae=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),le=new RegExp("^"+ne+"*,"+ne+"*"),ue=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),de=new RegExp(re),pe=new RegExp("^"+ie+"$"),fe={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie+"|[*])"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,ve=/^h\d$/i,ge=/^[^{]+\{\s*\[native \w/,me=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,we=/'|\\/g,be=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),xe=function(e,t,n){var i="0x"+t-65536;return i!==i||n?t:0>i?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},ke=function(){N()};try{Z.apply(G=K.call(F.childNodes),F.childNodes),G[F.childNodes.length].nodeType}catch(e){Z={apply:G.length?function(e,t){J.apply(e,K.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}x=t.support={},S=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},N=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:F;return i!==O&&9===i.nodeType&&i.documentElement?(O=i,H=O.documentElement,P=!S(O),(n=O.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",ke,!1):n.attachEvent&&n.attachEvent("onunload",ke)),x.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),x.getElementsByTagName=o(function(e){return e.appendChild(O.createComment("")),!e.getElementsByTagName("*").length}),x.getElementsByClassName=ge.test(O.getElementsByClassName),x.getById=o(function(e){return H.appendChild(e).id=I,!O.getElementsByName||!O.getElementsByName(I).length}),x.getById?(k.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&P){var n=t.getElementById(e);return n?[n]:[]}},k.filter.ID=function(e){var t=e.replace(be,xe);return function(e){return e.getAttribute("id")===t}}):(delete k.find.ID,k.filter.ID=function(e){var t=e.replace(be,xe);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),k.find.TAG=x.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):x.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],o=0,r=t.getElementsByTagName(e);if("*"===e){for(;n=r[o++];)1===n.nodeType&&i.push(n);return i}return r},k.find.CLASS=x.getElementsByClassName&&function(e,t){return"undefined"!=typeof t.getElementsByClassName&&P?t.getElementsByClassName(e):void 0},q=[],L=[],(x.qsa=ge.test(O.querySelectorAll))&&(o(function(e){H.appendChild(e).innerHTML="<a id='"+I+"'></a><select id='"+I+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&L.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||L.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+I+"-]").length||L.push("~="),e.querySelectorAll(":checked").length||L.push(":checked"),e.querySelectorAll("a#"+I+"+*").length||L.push(".#.+[+~]")}),o(function(e){var t=O.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&L.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||L.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),L.push(",.*:")})),(x.matchesSelector=ge.test(_=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&o(function(e){x.disconnectedMatch=_.call(e,"div"),_.call(e,"[s!='']:x"),q.push("!=",re)}),L=L.length&&new RegExp(L.join("|")),q=q.length&&new RegExp(q.join("|")),t=ge.test(H.compareDocumentPosition),z=t||ge.test(H.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},X=t?function(e,t){if(e===t)return D=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!x.sortDetached&&t.compareDocumentPosition(e)===n?e===O||e.ownerDocument===F&&z(F,e)?-1:t===O||t.ownerDocument===F&&z(F,t)?1:j?ee(j,e)-ee(j,t):0:4&n?-1:1)}:function(e,t){if(e===t)return D=!0,0;var n,i=0,o=e.parentNode,r=t.parentNode,a=[e],l=[t];if(!o||!r)return e===O?-1:t===O?1:o?-1:r?1:j?ee(j,e)-ee(j,t):0;if(o===r)return s(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;a[i]===l[i];)i++;return i?s(a[i],l[i]):a[i]===F?-1:l[i]===F?1:0},O):O},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==O&&N(e),n=n.replace(ce,"='$1']"),x.matchesSelector&&P&&!U[n+" "]&&(!q||!q.test(n))&&(!L||!L.test(n)))try{var i=_.call(e,n);if(i||x.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return t(n,O,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==O&&N(e),z(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==O&&N(e);var n=k.attrHandle[t.toLowerCase()],i=n&&V.call(k.attrHandle,t.toLowerCase())?n(e,t,!P):void 0;return void 0!==i?i:x.attributes||!P?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,o=0;if(D=!x.detectDuplicates,j=!x.sortStable&&e.slice(0),e.sort(X),D){for(;t=e[o++];)t===e[o]&&(i=n.push(o));for(;i--;)e.splice(n[i],1)}return j=null,e},T=t.getText=function(e){var t,n="",i=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=T(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[i++];)n+=T(t);return n},k=t.selectors={cacheLength:50,createPseudo:i,match:fe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(be,xe),e[3]=(e[3]||e[4]||e[5]||"").replace(be,xe),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return fe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&de.test(n)&&(t=C(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(be,xe).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=W[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&W(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,i){return function(o){var r=t.attr(o,e);return null==r?"!="===n:!n||(r+="","="===n?r===i:"!="===n?r!==i:"^="===n?i&&0===r.indexOf(i):"*="===n?i&&r.indexOf(i)>-1:"$="===n?i&&r.slice(-i.length)===i:"~="===n?(" "+r.replace(se," ")+" ").indexOf(i)>-1:"|="===n&&(r===i||r.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,n,i,o){var r="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===o?function(e){return!!e.parentNode}:function(t,n,l){var u,c,d,p,f,h,v=r!==s?"nextSibling":"previousSibling",g=t.parentNode,m=a&&t.nodeName.toLowerCase(),y=!l&&!a,w=!1;if(g){if(r){for(;v;){for(p=t;p=p[v];)if(a?p.nodeName.toLowerCase()===m:1===p.nodeType)return!1;h=v="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?g.firstChild:g.lastChild],s&&y){for(p=g,d=p[I]||(p[I]={}),c=d[p.uniqueID]||(d[p.uniqueID]={}),u=c[e]||[],f=u[0]===M&&u[1],w=f&&u[2],p=f&&g.childNodes[f];p=++f&&p&&p[v]||(w=f=0)||h.pop();)if(1===p.nodeType&&++w&&p===t){c[e]=[M,f,w];break}}else if(y&&(p=t,d=p[I]||(p[I]={}),c=d[p.uniqueID]||(d[p.uniqueID]={}),u=c[e]||[],f=u[0]===M&&u[1],w=f),w===!1)for(;(p=++f&&p&&p[v]||(w=f=0)||h.pop())&&((a?p.nodeName.toLowerCase()!==m:1!==p.nodeType)||!++w||(y&&(d=p[I]||(p[I]={}),c=d[p.uniqueID]||(d[p.uniqueID]={}),c[e]=[M,w]),p!==t)););return w-=o,w===i||w%i===0&&w/i>=0}}},PSEUDO:function(e,n){var o,r=k.pseudos[e]||k.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return r[I]?r(n):r.length>1?(o=[e,e,"",n],k.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,t){for(var i,o=r(e,n),s=o.length;s--;)i=ee(e,o[s]),e[i]=!(t[i]=o[s])}):function(e){return r(e,0,o)}):r}},pseudos:{not:i(function(e){var t=[],n=[],o=E(e.replace(ae,"$1"));return o[I]?i(function(e,t,n,i){for(var r,s=o(e,null,i,[]),a=e.length;a--;)(r=s[a])&&(e[a]=!(t[a]=r))}):function(e,i,r){return t[0]=e,o(t,null,r,n),t[0]=null,!n.pop()}}),has:i(function(e){return function(n){return t(e,n).length>0}}),contains:i(function(e){return e=e.replace(be,xe),function(t){return(t.textContent||t.innerText||T(t)).indexOf(e)>-1}}),lang:i(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(be,xe).toLowerCase(),function(t){var n;do if(n=P?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===O.activeElement&&(!O.hasFocus||O.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!k.pseudos.empty(e)},header:function(e){return ve.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,n){
return[0>n?n+t:n]}),even:u(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:u(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:u(function(e,t,n){for(var i=0>n?n+t:n;--i>=0;)e.push(i);return e}),gt:u(function(e,t,n){for(var i=0>n?n+t:n;++i<t;)e.push(i);return e})}},k.pseudos.nth=k.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})k.pseudos[b]=a(b);for(b in{submit:!0,reset:!0})k.pseudos[b]=l(b);return d.prototype=k.filters=k.pseudos,k.setFilters=new d,C=t.tokenize=function(e,n){var i,o,r,s,a,l,u,c=B[e+" "];if(c)return n?0:c.slice(0);for(a=e,l=[],u=k.preFilter;a;){i&&!(o=le.exec(a))||(o&&(a=a.slice(o[0].length)||a),l.push(r=[])),i=!1,(o=ue.exec(a))&&(i=o.shift(),r.push({value:i,type:o[0].replace(ae," ")}),a=a.slice(i.length));for(s in k.filter)!(o=fe[s].exec(a))||u[s]&&!(o=u[s](o))||(i=o.shift(),r.push({value:i,type:s,matches:o}),a=a.slice(i.length));if(!i)break}return n?a.length:a?t.error(e):B(e,l).slice(0)},E=t.compile=function(e,t){var n,i=[],o=[],r=U[e+" "];if(!r){for(t||(t=C(e)),n=t.length;n--;)r=y(t[n]),r[I]?i.push(r):o.push(r);r=U(e,w(o,i)),r.selector=e}return r},$=t.select=function(e,t,n,i){var o,r,s,a,l,u="function"==typeof e&&e,d=!i&&C(e=u.selector||e);if(n=n||[],1===d.length){if(r=d[0]=d[0].slice(0),r.length>2&&"ID"===(s=r[0]).type&&x.getById&&9===t.nodeType&&P&&k.relative[r[1].type]){if(t=(k.find.ID(s.matches[0].replace(be,xe),t)||[])[0],!t)return n;u&&(t=t.parentNode),e=e.slice(r.shift().value.length)}for(o=fe.needsContext.test(e)?0:r.length;o--&&(s=r[o],!k.relative[a=s.type]);)if((l=k.find[a])&&(i=l(s.matches[0].replace(be,xe),ye.test(r[0].type)&&c(t.parentNode)||t))){if(r.splice(o,1),e=i.length&&p(r),!e)return Z.apply(n,i),n;break}}return(u||E(e,d))(i,t,!P,n,!t||ye.test(e)&&c(t.parentNode)||t),n},x.sortStable=I.split("").sort(X).join("")===I,x.detectDuplicates=!!D,N(),x.sortDetached=o(function(e){return 1&e.compareDocumentPosition(O.createElement("div"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||r("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),x.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||r("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||r(te,function(e,t,n){var i;return n?void 0:e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),t}(e);re.find=ce,re.expr=ce.selectors,re.expr[":"]=re.expr.pseudos,re.uniqueSort=re.unique=ce.uniqueSort,re.text=ce.getText,re.isXMLDoc=ce.isXML,re.contains=ce.contains;var de=function(e,t,n){for(var i=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&re(e).is(n))break;i.push(e)}return i},pe=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},fe=re.expr.match.needsContext,he=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,ve=/^.[^:#\[\.,]*$/;re.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?re.find.matchesSelector(i,e)?[i]:[]:re.find.matches(e,re.grep(t,function(e){return 1===e.nodeType}))},re.fn.extend({find:function(e){var t,n=this.length,i=[],o=this;if("string"!=typeof e)return this.pushStack(re(e).filter(function(){for(t=0;n>t;t++)if(re.contains(o[t],this))return!0}));for(t=0;n>t;t++)re.find(e,o[t],i);return i=this.pushStack(n>1?re.unique(i):i),i.selector=this.selector?this.selector+" "+e:e,i},filter:function(e){return this.pushStack(i(this,e||[],!1))},not:function(e){return this.pushStack(i(this,e||[],!0))},is:function(e){return!!i(this,"string"==typeof e&&fe.test(e)?re(e):e||[],!1).length}});var ge,me=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ye=re.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||ge,"string"==typeof e){if(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:me.exec(e),!i||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof re?t[0]:t,re.merge(this,re.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:G,!0)),he.test(i[1])&&re.isPlainObject(t))for(i in t)re.isFunction(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return o=G.getElementById(i[2]),o&&o.parentNode&&(this.length=1,this[0]=o),this.context=G,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):re.isFunction(e)?void 0!==n.ready?n.ready(e):e(re):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),re.makeArray(e,this))};ye.prototype=re.fn,ge=re(G);var we=/^(?:parents|prev(?:Until|All))/,be={children:!0,contents:!0,next:!0,prev:!0};re.fn.extend({has:function(e){var t=re(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(re.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,i=0,o=this.length,r=[],s=fe.test(e)||"string"!=typeof e?re(e,t||this.context):0;o>i;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&re.find.matchesSelector(n,e))){r.push(n);break}return this.pushStack(r.length>1?re.uniqueSort(r):r)},index:function(e){return e?"string"==typeof e?K.call(re(e),this[0]):K.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(re.uniqueSort(re.merge(this.get(),re(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),re.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return de(e,"parentNode")},parentsUntil:function(e,t,n){return de(e,"parentNode",n)},next:function(e){return o(e,"nextSibling")},prev:function(e){return o(e,"previousSibling")},nextAll:function(e){return de(e,"nextSibling")},prevAll:function(e){return de(e,"previousSibling")},nextUntil:function(e,t,n){return de(e,"nextSibling",n)},prevUntil:function(e,t,n){return de(e,"previousSibling",n)},siblings:function(e){return pe((e.parentNode||{}).firstChild,e)},children:function(e){return pe(e.firstChild)},contents:function(e){return e.contentDocument||re.merge([],e.childNodes)}},function(e,t){re.fn[e]=function(n,i){var o=re.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=re.filter(i,o)),this.length>1&&(be[e]||re.uniqueSort(o),we.test(e)&&o.reverse()),this.pushStack(o)}});var xe=/\S+/g;re.Callbacks=function(e){e="string"==typeof e?r(e):re.extend({},e);var t,n,i,o,s=[],a=[],l=-1,u=function(){for(o=e.once,i=t=!0;a.length;l=-1)for(n=a.shift();++l<s.length;)s[l].apply(n[0],n[1])===!1&&e.stopOnFalse&&(l=s.length,n=!1);e.memory||(n=!1),t=!1,o&&(s=n?[]:"")},c={add:function(){return s&&(n&&!t&&(l=s.length-1,a.push(n)),function t(n){re.each(n,function(n,i){re.isFunction(i)?e.unique&&c.has(i)||s.push(i):i&&i.length&&"string"!==re.type(i)&&t(i)})}(arguments),n&&!t&&u()),this},remove:function(){return re.each(arguments,function(e,t){for(var n;(n=re.inArray(t,s,n))>-1;)s.splice(n,1),l>=n&&l--}),this},has:function(e){return e?re.inArray(e,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return o=a=[],s=n="",this},disabled:function(){return!s},lock:function(){return o=a=[],n||(s=n=""),this},locked:function(){return!!o},fireWith:function(e,n){return o||(n=n||[],n=[e,n.slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!i}};return c},re.extend({Deferred:function(e){var t=[["resolve","done",re.Callbacks("once memory"),"resolved"],["reject","fail",re.Callbacks("once memory"),"rejected"],["notify","progress",re.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var e=arguments;return re.Deferred(function(n){re.each(t,function(t,r){var s=re.isFunction(e[t])&&e[t];o[r[1]](function(){var e=s&&s.apply(this,arguments);e&&re.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this===i?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?re.extend(e,i):i}},o={};return i.pipe=i.then,re.each(t,function(e,r){var s=r[2],a=r[3];i[r[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),o[r[0]]=function(){return o[r[0]+"With"](this===o?i:this,arguments),this},o[r[0]+"With"]=s.fireWith}),i.promise(o),e&&e.call(o,o),o},when:function(e){var t,n,i,o=0,r=Q.call(arguments),s=r.length,a=1!==s||e&&re.isFunction(e.promise)?s:0,l=1===a?e:re.Deferred(),u=function(e,n,i){return function(o){n[e]=this,i[e]=arguments.length>1?Q.call(arguments):o,i===t?l.notifyWith(n,i):--a||l.resolveWith(n,i)}};if(s>1)for(t=new Array(s),n=new Array(s),i=new Array(s);s>o;o++)r[o]&&re.isFunction(r[o].promise)?r[o].promise().progress(u(o,n,t)).done(u(o,i,r)).fail(l.reject):--a;return a||l.resolveWith(i,r),l.promise()}});var ke;re.fn.ready=function(e){return re.ready.promise().done(e),this},re.extend({isReady:!1,readyWait:1,holdReady:function(e){e?re.readyWait++:re.ready(!0)},ready:function(e){(e===!0?--re.readyWait:re.isReady)||(re.isReady=!0,e!==!0&&--re.readyWait>0||(ke.resolveWith(G,[re]),re.fn.triggerHandler&&(re(G).triggerHandler("ready"),re(G).off("ready"))))}}),re.ready.promise=function(t){return ke||(ke=re.Deferred(),"complete"===G.readyState||"loading"!==G.readyState&&!G.documentElement.doScroll?e.setTimeout(re.ready):(G.addEventListener("DOMContentLoaded",s),e.addEventListener("load",s))),ke.promise(t)},re.ready.promise();var Te=function(e,t,n,i,o,r,s){var a=0,l=e.length,u=null==n;if("object"===re.type(n)){o=!0;for(a in n)Te(e,t,a,n[a],!0,r,s)}else if(void 0!==i&&(o=!0,re.isFunction(i)||(s=!0),u&&(s?(t.call(e,i),t=null):(u=t,t=function(e,t,n){return u.call(re(e),n)})),t))for(;l>a;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return o?e:u?t.call(e):l?t(e[0],n):r},Se=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};a.uid=1,a.prototype={register:function(e,t){var n=t||{};return e.nodeType?e[this.expando]=n:Object.defineProperty(e,this.expando,{value:n,writable:!0,configurable:!0}),e[this.expando]},cache:function(e){if(!Se(e))return{};var t=e[this.expando];return t||(t={},Se(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,o=this.cache(e);if("string"==typeof t)o[t]=n;else for(i in t)o[i]=t[i];return o},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][t]},access:function(e,t,n){var i;return void 0===t||t&&"string"==typeof t&&void 0===n?(i=this.get(e,t),void 0!==i?i:this.get(e,re.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i,o,r=e[this.expando];if(void 0!==r){if(void 0===t)this.register(e);else{re.isArray(t)?i=t.concat(t.map(re.camelCase)):(o=re.camelCase(t),t in r?i=[t,o]:(i=o,i=i in r?[i]:i.match(xe)||[])),n=i.length;for(;n--;)delete r[i[n]]}(void 0===t||re.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!re.isEmptyObject(t)}};var Ce=new a,Ee=new a,$e=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ae=/[A-Z]/g;re.extend({hasData:function(e){return Ee.hasData(e)||Ce.hasData(e)},data:function(e,t,n){return Ee.access(e,t,n)},removeData:function(e,t){Ee.remove(e,t)},_data:function(e,t,n){return Ce.access(e,t,n)},_removeData:function(e,t){Ce.remove(e,t)}}),re.fn.extend({data:function(e,t){var n,i,o,r=this[0],s=r&&r.attributes;if(void 0===e){if(this.length&&(o=Ee.get(r),1===r.nodeType&&!Ce.get(r,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(i=s[n].name,0===i.indexOf("data-")&&(i=re.camelCase(i.slice(5)),l(r,i,o[i])));Ce.set(r,"hasDataAttrs",!0)}return o}return"object"==typeof e?this.each(function(){Ee.set(this,e)}):Te(this,function(t){var n,i;if(r&&void 0===t){if(n=Ee.get(r,e)||Ee.get(r,e.replace(Ae,"-$&").toLowerCase()),void 0!==n)return n;if(i=re.camelCase(e),n=Ee.get(r,i),void 0!==n)return n;if(n=l(r,i,void 0),void 0!==n)return n}else i=re.camelCase(e),this.each(function(){var n=Ee.get(this,i);Ee.set(this,i,t),e.indexOf("-")>-1&&void 0!==n&&Ee.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Ee.remove(this,e)})}}),re.extend({queue:function(e,t,n){var i;return e?(t=(t||"fx")+"queue",i=Ce.get(e,t),n&&(!i||re.isArray(n)?i=Ce.access(e,t,re.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=re.queue(e,t),i=n.length,o=n.shift(),r=re._queueHooks(e,t),s=function(){re.dequeue(e,t)};"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===t&&n.unshift("inprogress"),delete r.stop,o.call(e,s,r)),!i&&r&&r.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Ce.get(e,n)||Ce.access(e,n,{empty:re.Callbacks("once memory").add(function(){Ce.remove(e,[t+"queue",n])})})}}),re.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?re.queue(this[0],e):void 0===t?this:this.each(function(){var n=re.queue(this,e,t);re._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&re.dequeue(this,e)})},dequeue:function(e){return this.each(function(){re.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,o=re.Deferred(),r=this,s=this.length,a=function(){--i||o.resolveWith(r,[r])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=Ce.get(r[s],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(t)}});var je=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,De=new RegExp("^(?:([+-])=|)("+je+")([a-z%]*)$","i"),Ne=["Top","Right","Bottom","Left"],Oe=function(e,t){return e=t||e,"none"===re.css(e,"display")||!re.contains(e.ownerDocument,e)},He=/^(?:checkbox|radio)$/i,Pe=/<([\w:-]+)/,Le=/^$|\/(?:java|ecma)script/i,qe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};qe.optgroup=qe.option,qe.tbody=qe.tfoot=qe.colgroup=qe.caption=qe.thead,qe.th=qe.td;var _e=/<|&#?\w+;/;!function(){var e=G.createDocumentFragment(),t=e.appendChild(G.createElement("div")),n=G.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),ie.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",ie.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var ze=/^key/,Ie=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Fe=/^([^.]*)(?:\.(.+)|)/;re.event={global:{},add:function(e,t,n,i,o){var r,s,a,l,u,c,d,p,f,h,v,g=Ce.get(e);if(g)for(n.handler&&(r=n,n=r.handler,o=r.selector),n.guid||(n.guid=re.guid++),(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(t){return"undefined"!=typeof re&&re.event.triggered!==t.type?re.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(xe)||[""],u=t.length;u--;)a=Fe.exec(t[u])||[],f=v=a[1],h=(a[2]||"").split(".").sort(),f&&(d=re.event.special[f]||{},f=(o?d.delegateType:d.bindType)||f,d=re.event.special[f]||{},c=re.extend({type:f,origType:v,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&re.expr.match.needsContext.test(o),namespace:h.join(".")},r),(p=l[f])||(p=l[f]=[],p.delegateCount=0,d.setup&&d.setup.call(e,i,h,s)!==!1||e.addEventListener&&e.addEventListener(f,s)),d.add&&(d.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),o?p.splice(p.delegateCount++,0,c):p.push(c),re.event.global[f]=!0)},remove:function(e,t,n,i,o){var r,s,a,l,u,c,d,p,f,h,v,g=Ce.hasData(e)&&Ce.get(e);if(g&&(l=g.events)){for(t=(t||"").match(xe)||[""],u=t.length;u--;)if(a=Fe.exec(t[u])||[],f=v=a[1],h=(a[2]||"").split(".").sort(),f){for(d=re.event.special[f]||{},f=(i?d.delegateType:d.bindType)||f,p=l[f]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=p.length;r--;)c=p[r],!o&&v!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(p.splice(r,1),c.selector&&p.delegateCount--,d.remove&&d.remove.call(e,c));s&&!p.length&&(d.teardown&&d.teardown.call(e,h,g.handle)!==!1||re.removeEvent(e,f,g.handle),delete l[f])}else for(f in l)re.event.remove(e,f+t[u],n,i,!0);re.isEmptyObject(l)&&Ce.remove(e,"handle events")}},dispatch:function(e){e=re.event.fix(e);var t,n,i,o,r,s=[],a=Q.call(arguments),l=(Ce.get(this,"events")||{})[e.type]||[],u=re.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,e)!==!1){for(s=re.event.handlers.call(this,e,l),t=0;(o=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(r.namespace)||(e.handleObj=r,e.data=r.data,i=((re.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,a),void 0!==i&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,o,r,s=[],a=t.delegateCount,l=e.target;if(a&&l.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(i=[],n=0;a>n;n++)r=t[n],o=r.selector+" ",void 0===i[o]&&(i[o]=r.needsContext?re(o,this).index(l)>-1:re.find(o,this,null,[l]).length),i[o]&&i.push(r);i.length&&s.push({elem:l,handlers:i})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,o,r=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||G,i=n.documentElement,o=n.body,e.pageX=t.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),e.which||void 0===r||(e.which=1&r?1:2&r?3:4&r?2:0),e}},fix:function(e){if(e[re.expando])return e;var t,n,i,o=e.type,r=e,s=this.fixHooks[o];for(s||(this.fixHooks[o]=s=Ie.test(o)?this.mouseHooks:ze.test(o)?this.keyHooks:{}),i=s.props?this.props.concat(s.props):this.props,e=new re.Event(r),t=i.length;t--;)n=i[t],e[n]=r[n];return e.target||(e.target=G),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==v()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===v()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&re.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return re.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},re.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},re.Event=function(e,t){return this instanceof re.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?f:h):this.type=e,t&&re.extend(this,t),this.timeStamp=e&&e.timeStamp||re.now(),void(this[re.expando]=!0)):new re.Event(e,t)},re.Event.prototype={constructor:re.Event,isDefaultPrevented:h,isPropagationStopped:h,isImmediatePropagationStopped:h,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=f,e&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=f,e&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=f,e&&e.stopImmediatePropagation(),this.stopPropagation()}},re.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){re.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,o=e.relatedTarget,r=e.handleObj;return o&&(o===i||re.contains(i,o))||(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}}),re.fn.extend({on:function(e,t,n,i){return g(this,e,t,n,i)},one:function(e,t,n,i){return g(this,e,t,n,i,1)},off:function(e,t,n){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,re(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,t,e[o]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=h),this.each(function(){re.event.remove(this,e,n,t)})}});var Me=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Re=/<script|<style|<link/i,We=/checked\s*(?:[^=]|=\s*.checked.)/i,Be=/^true\/(.*)/,Ue=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;re.extend({htmlPrefilter:function(e){return e.replace(Me,"<$1></$2>")},clone:function(e,t,n){var i,o,r,s,a=e.cloneNode(!0),l=re.contains(e.ownerDocument,e);if(!(ie.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||re.isXMLDoc(e)))for(s=c(a),r=c(e),i=0,o=r.length;o>i;i++)x(r[i],s[i]);if(t)if(n)for(r=r||c(e),s=s||c(a),i=0,o=r.length;o>i;i++)b(r[i],s[i]);else b(e,a);return s=c(a,"script"),s.length>0&&d(s,!l&&c(e,"script")),a},cleanData:function(e){for(var t,n,i,o=re.event.special,r=0;void 0!==(n=e[r]);r++)if(Se(n)){if(t=n[Ce.expando]){if(t.events)for(i in t.events)o[i]?re.event.remove(n,i):re.removeEvent(n,i,t.handle);n[Ce.expando]=void 0}n[Ee.expando]&&(n[Ee.expando]=void 0)}}}),re.fn.extend({domManip:k,detach:function(e){return T(this,e,!0)},remove:function(e){return T(this,e)},text:function(e){return Te(this,function(e){return void 0===e?re.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return k(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=m(this,e);t.appendChild(e)}})},prepend:function(){return k(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=m(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return k(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return k(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(re.cleanData(c(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return re.clone(this,e,t)})},html:function(e){return Te(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Re.test(e)&&!qe[(Pe.exec(e)||["",""])[1].toLowerCase()]){e=re.htmlPrefilter(e);try{for(;i>n;n++)t=this[n]||{},1===t.nodeType&&(re.cleanData(c(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return k(this,arguments,function(t){var n=this.parentNode;re.inArray(this,e)<0&&(re.cleanData(c(this)),n&&n.replaceChild(t,this))},e)}}),re.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){re.fn[e]=function(e){for(var n,i=[],o=re(e),r=o.length-1,s=0;r>=s;s++)n=s===r?this:this.clone(!0),re(o[s])[t](n),Z.apply(i,n.get());return this.pushStack(i)}});var Xe,Ye={HTML:"block",BODY:"block"},Ve=/^margin/,Ge=new RegExp("^("+je+")(?!px)[a-z%]+$","i"),Qe=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Je=function(e,t,n,i){var o,r,s={};for(r in t)s[r]=e.style[r],e.style[r]=t[r];o=n.apply(e,i||[]);for(r in t)e.style[r]=s[r];return o},Ze=G.documentElement;!function(){function t(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a.innerHTML="",Ze.appendChild(s);var t=e.getComputedStyle(a);n="1%"!==t.top,r="2px"===t.marginLeft,i="4px"===t.width,a.style.marginRight="50%",o="4px"===t.marginRight,Ze.removeChild(s)}var n,i,o,r,s=G.createElement("div"),a=G.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",ie.clearCloneStyle="content-box"===a.style.backgroundClip,s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",s.appendChild(a),re.extend(ie,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==i&&t(),i},pixelMarginRight:function(){return null==i&&t(),o},reliableMarginLeft:function(){return null==i&&t(),r},reliableMarginRight:function(){var t,n=a.appendChild(G.createElement("div"));return n.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",a.style.width="1px",Ze.appendChild(s),t=!parseFloat(e.getComputedStyle(n).marginRight),Ze.removeChild(s),a.removeChild(n),t}}))}();var Ke=/^(none|table(?!-c[ea]).+)/,et={position:"absolute",visibility:"hidden",display:"block"},tt={letterSpacing:"0",fontWeight:"400"},nt=["Webkit","O","Moz","ms"],it=G.createElement("div").style;re.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=E(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,r,s,a=re.camelCase(t),l=e.style;return t=re.cssProps[a]||(re.cssProps[a]=A(a)||a),s=re.cssHooks[t]||re.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(o=s.get(e,!1,i))?o:l[t]:(r=typeof n,"string"===r&&(o=De.exec(n))&&o[1]&&(n=u(e,t,o),r="number"),void(null!=n&&n===n&&("number"===r&&(n+=o&&o[3]||(re.cssNumber[a]?"":"px")),ie.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l[t]=n))))}},css:function(e,t,n,i){var o,r,s,a=re.camelCase(t);return t=re.cssProps[a]||(re.cssProps[a]=A(a)||a),s=re.cssHooks[t]||re.cssHooks[a],s&&"get"in s&&(o=s.get(e,!0,n)),void 0===o&&(o=E(e,t,i)),"normal"===o&&t in tt&&(o=tt[t]),""===n||n?(r=parseFloat(o),n===!0||isFinite(r)?r||0:o):o}}),re.each(["height","width"],function(e,t){re.cssHooks[t]={get:function(e,n,i){return n?Ke.test(re.css(e,"display"))&&0===e.offsetWidth?Je(e,et,function(){return N(e,t,i)}):N(e,t,i):void 0},set:function(e,n,i){var o,r=i&&Qe(e),s=i&&D(e,t,i,"border-box"===re.css(e,"boxSizing",!1,r),r);return s&&(o=De.exec(n))&&"px"!==(o[3]||"px")&&(e.style[t]=n,n=re.css(e,t)),j(e,n,s)}}}),re.cssHooks.marginLeft=$(ie.reliableMarginLeft,function(e,t){return t?(parseFloat(E(e,"marginLeft"))||e.getBoundingClientRect().left-Je(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px":void 0}),re.cssHooks.marginRight=$(ie.reliableMarginRight,function(e,t){return t?Je(e,{display:"inline-block"},E,[e,"marginRight"]):void 0}),re.each({margin:"",padding:"",border:"Width"},function(e,t){re.cssHooks[e+t]={expand:function(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];4>i;i++)o[e+Ne[i]+t]=r[i]||r[i-2]||r[0];return o}},Ve.test(e)||(re.cssHooks[e+t].set=j)}),re.fn.extend({css:function(e,t){return Te(this,function(e,t,n){var i,o,r={},s=0;if(re.isArray(t)){for(i=Qe(e),o=t.length;o>s;s++)r[t[s]]=re.css(e,t[s],!1,i);return r}return void 0!==n?re.style(e,t,n):re.css(e,t)},e,t,arguments.length>1)},show:function(){return O(this,!0)},hide:function(){return O(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Oe(this)?re(this).show():re(this).hide()})}}),re.Tween=H,H.prototype={constructor:H,init:function(e,t,n,i,o,r){this.elem=e,this.prop=n,this.easing=o||re.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=r||(re.cssNumber[n]?"":"px")},cur:function(){var e=H.propHooks[this.prop];return e&&e.get?e.get(this):H.propHooks._default.get(this)},run:function(e){var t,n=H.propHooks[this.prop];return this.options.duration?this.pos=t=re.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):H.propHooks._default.set(this),this}},H.prototype.init.prototype=H.prototype,H.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=re.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){re.fx.step[e.prop]?re.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[re.cssProps[e.prop]]&&!re.cssHooks[e.prop]?e.elem[e.prop]=e.now:re.style(e.elem,e.prop,e.now+e.unit)}}},H.propHooks.scrollTop=H.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},re.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},re.fx=H.prototype.init,re.fx.step={};var ot,rt,st=/^(?:toggle|show|hide)$/,at=/queueHooks$/;re.Animation=re.extend(I,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return u(n.elem,e,De.exec(t),n),n}]},tweener:function(e,t){re.isFunction(e)?(t=e,e=["*"]):e=e.match(xe);for(var n,i=0,o=e.length;o>i;i++)n=e[i],I.tweeners[n]=I.tweeners[n]||[],I.tweeners[n].unshift(t)},prefilters:[_],prefilter:function(e,t){t?I.prefilters.unshift(e):I.prefilters.push(e)}}),re.speed=function(e,t,n){var i=e&&"object"==typeof e?re.extend({},e):{complete:n||!n&&t||re.isFunction(e)&&e,duration:e,easing:n&&t||t&&!re.isFunction(t)&&t};return i.duration=re.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in re.fx.speeds?re.fx.speeds[i.duration]:re.fx.speeds._default,null!=i.queue&&i.queue!==!0||(i.queue="fx"),i.old=i.complete,i.complete=function(){re.isFunction(i.old)&&i.old.call(this),i.queue&&re.dequeue(this,i.queue)},i},re.fn.extend({fadeTo:function(e,t,n,i){return this.filter(Oe).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var o=re.isEmptyObject(e),r=re.speed(t,n,i),s=function(){var t=I(this,re.extend({},e),r);(o||Ce.get(this,"finish"))&&t.stop(!0)};return s.finish=s,o||r.queue===!1?this.each(s):this.queue(r.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",r=re.timers,s=Ce.get(this);if(o)s[o]&&s[o].stop&&i(s[o]);else for(o in s)s[o]&&s[o].stop&&at.test(o)&&i(s[o]);for(o=r.length;o--;)r[o].elem!==this||null!=e&&r[o].queue!==e||(r[o].anim.stop(n),t=!1,r.splice(o,1));!t&&n||re.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=Ce.get(this),i=n[e+"queue"],o=n[e+"queueHooks"],r=re.timers,s=i?i.length:0;for(n.finish=!0,re.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=r.length;t--;)r[t].elem===this&&r[t].queue===e&&(r[t].anim.stop(!0),r.splice(t,1));for(t=0;s>t;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish})}}),re.each(["toggle","show","hide"],function(e,t){var n=re.fn[t];re.fn[t]=function(e,i,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(L(t,!0),e,i,o)}}),re.each({slideDown:L("show"),slideUp:L("hide"),slideToggle:L("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){re.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),re.timers=[],re.fx.tick=function(){var e,t=0,n=re.timers;for(ot=re.now();t<n.length;t++)e=n[t],
e()||n[t]!==e||n.splice(t--,1);n.length||re.fx.stop(),ot=void 0},re.fx.timer=function(e){re.timers.push(e),e()?re.fx.start():re.timers.pop()},re.fx.interval=13,re.fx.start=function(){rt||(rt=e.setInterval(re.fx.tick,re.fx.interval))},re.fx.stop=function(){e.clearInterval(rt),rt=null},re.fx.speeds={slow:600,fast:200,_default:400},re.fn.delay=function(t,n){return t=re.fx?re.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,i){var o=e.setTimeout(n,t);i.stop=function(){e.clearTimeout(o)}})},function(){var e=G.createElement("input"),t=G.createElement("select"),n=t.appendChild(G.createElement("option"));e.type="checkbox",ie.checkOn=""!==e.value,ie.optSelected=n.selected,t.disabled=!0,ie.optDisabled=!n.disabled,e=G.createElement("input"),e.value="t",e.type="radio",ie.radioValue="t"===e.value}();var lt,ut=re.expr.attrHandle;re.fn.extend({attr:function(e,t){return Te(this,re.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){re.removeAttr(this,e)})}}),re.extend({attr:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return"undefined"==typeof e.getAttribute?re.prop(e,t,n):(1===r&&re.isXMLDoc(e)||(t=t.toLowerCase(),o=re.attrHooks[t]||(re.expr.match.bool.test(t)?lt:void 0)),void 0!==n?null===n?void re.removeAttr(e,t):o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:(e.setAttribute(t,n+""),n):o&&"get"in o&&null!==(i=o.get(e,t))?i:(i=re.find.attr(e,t),null==i?void 0:i))},attrHooks:{type:{set:function(e,t){if(!ie.radioValue&&"radio"===t&&re.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i,o=0,r=t&&t.match(xe);if(r&&1===e.nodeType)for(;n=r[o++];)i=re.propFix[n]||n,re.expr.match.bool.test(n)&&(e[i]=!1),e.removeAttribute(n)}}),lt={set:function(e,t,n){return t===!1?re.removeAttr(e,n):e.setAttribute(n,n),n}},re.each(re.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ut[t]||re.find.attr;ut[t]=function(e,t,i){var o,r;return i||(r=ut[t],ut[t]=o,o=null!=n(e,t,i)?t.toLowerCase():null,ut[t]=r),o}});var ct=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;re.fn.extend({prop:function(e,t){return Te(this,re.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[re.propFix[e]||e]})}}),re.extend({prop:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&re.isXMLDoc(e)||(t=re.propFix[t]||t,o=re.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:e[t]=n:o&&"get"in o&&null!==(i=o.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=re.find.attr(e,"tabindex");return t?parseInt(t,10):ct.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),ie.optSelected||(re.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),re.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){re.propFix[this.toLowerCase()]=this});var pt=/[\t\r\n\f]/g;re.fn.extend({addClass:function(e){var t,n,i,o,r,s,a,l=0;if(re.isFunction(e))return this.each(function(t){re(this).addClass(e.call(this,t,F(this)))});if("string"==typeof e&&e)for(t=e.match(xe)||[];n=this[l++];)if(o=F(n),i=1===n.nodeType&&(" "+o+" ").replace(pt," ")){for(s=0;r=t[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");a=re.trim(i),o!==a&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,i,o,r,s,a,l=0;if(re.isFunction(e))return this.each(function(t){re(this).removeClass(e.call(this,t,F(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(xe)||[];n=this[l++];)if(o=F(n),i=1===n.nodeType&&(" "+o+" ").replace(pt," ")){for(s=0;r=t[s++];)for(;i.indexOf(" "+r+" ")>-1;)i=i.replace(" "+r+" "," ");a=re.trim(i),o!==a&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):re.isFunction(e)?this.each(function(n){re(this).toggleClass(e.call(this,n,F(this),t),t)}):this.each(function(){var t,i,o,r;if("string"===n)for(i=0,o=re(this),r=e.match(xe)||[];t=r[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||(t=F(this),t&&Ce.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||e===!1?"":Ce.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+F(n)+" ").replace(pt," ").indexOf(t)>-1)return!0;return!1}});var ft=/\r/g,ht=/[\x20\t\r\n\f]+/g;re.fn.extend({val:function(e){var t,n,i,o=this[0];return arguments.length?(i=re.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,re(this).val()):e,null==o?o="":"number"==typeof o?o+="":re.isArray(o)&&(o=re.map(o,function(e){return null==e?"":e+""})),t=re.valHooks[this.type]||re.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))})):o?(t=re.valHooks[o.type]||re.valHooks[o.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(o,"value"))?n:(n=o.value,"string"==typeof n?n.replace(ft,""):null==n?"":n)):void 0}}),re.extend({valHooks:{option:{get:function(e){var t=re.find.attr(e,"value");return null!=t?t:re.trim(re.text(e)).replace(ht," ")}},select:{get:function(e){for(var t,n,i=e.options,o=e.selectedIndex,r="select-one"===e.type||0>o,s=r?null:[],a=r?o+1:i.length,l=0>o?a:r?o:0;a>l;l++)if(n=i[l],(n.selected||l===o)&&(ie.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!re.nodeName(n.parentNode,"optgroup"))){if(t=re(n).val(),r)return t;s.push(t)}return s},set:function(e,t){for(var n,i,o=e.options,r=re.makeArray(t),s=o.length;s--;)i=o[s],(i.selected=re.inArray(re.valHooks.option.get(i),r)>-1)&&(n=!0);return n||(e.selectedIndex=-1),r}}}}),re.each(["radio","checkbox"],function(){re.valHooks[this]={set:function(e,t){return re.isArray(t)?e.checked=re.inArray(re(e).val(),t)>-1:void 0}},ie.checkOn||(re.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var vt=/^(?:focusinfocus|focusoutblur)$/;re.extend(re.event,{trigger:function(t,n,i,o){var r,s,a,l,u,c,d,p=[i||G],f=ne.call(t,"type")?t.type:t,h=ne.call(t,"namespace")?t.namespace.split("."):[];if(s=a=i=i||G,3!==i.nodeType&&8!==i.nodeType&&!vt.test(f+re.event.triggered)&&(f.indexOf(".")>-1&&(h=f.split("."),f=h.shift(),h.sort()),u=f.indexOf(":")<0&&"on"+f,t=t[re.expando]?t:new re.Event(f,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:re.makeArray(n,[t]),d=re.event.special[f]||{},o||!d.trigger||d.trigger.apply(i,n)!==!1)){if(!o&&!d.noBubble&&!re.isWindow(i)){for(l=d.delegateType||f,vt.test(l+f)||(s=s.parentNode);s;s=s.parentNode)p.push(s),a=s;a===(i.ownerDocument||G)&&p.push(a.defaultView||a.parentWindow||e)}for(r=0;(s=p[r++])&&!t.isPropagationStopped();)t.type=r>1?l:d.bindType||f,c=(Ce.get(s,"events")||{})[t.type]&&Ce.get(s,"handle"),c&&c.apply(s,n),c=u&&s[u],c&&c.apply&&Se(s)&&(t.result=c.apply(s,n),t.result===!1&&t.preventDefault());return t.type=f,o||t.isDefaultPrevented()||d._default&&d._default.apply(p.pop(),n)!==!1||!Se(i)||u&&re.isFunction(i[f])&&!re.isWindow(i)&&(a=i[u],a&&(i[u]=null),re.event.triggered=f,i[f](),re.event.triggered=void 0,a&&(i[u]=a)),t.result}},simulate:function(e,t,n){var i=re.extend(new re.Event,n,{type:e,isSimulated:!0});re.event.trigger(i,null,t),i.isDefaultPrevented()&&n.preventDefault()}}),re.fn.extend({trigger:function(e,t){return this.each(function(){re.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?re.event.trigger(e,t,n,!0):void 0}}),re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){re.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),re.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),ie.focusin="onfocusin"in e,ie.focusin||re.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){re.event.simulate(t,e.target,re.event.fix(e))};re.event.special[t]={setup:function(){var i=this.ownerDocument||this,o=Ce.access(i,t);o||i.addEventListener(e,n,!0),Ce.access(i,t,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=Ce.access(i,t)-1;o?Ce.access(i,t,o):(i.removeEventListener(e,n,!0),Ce.remove(i,t))}}});var gt=e.location,mt=re.now(),yt=/\?/;re.parseJSON=function(e){return JSON.parse(e+"")},re.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||re.error("Invalid XML: "+t),n};var wt=/#.*$/,bt=/([?&])_=[^&]*/,xt=/^(.*?):[ \t]*([^\r\n]*)$/gm,kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Tt=/^(?:GET|HEAD)$/,St=/^\/\//,Ct={},Et={},$t="*/".concat("*"),At=G.createElement("a");At.href=gt.href,re.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:gt.href,type:"GET",isLocal:kt.test(gt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":re.parseJSON,"text xml":re.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?W(W(e,re.ajaxSettings),t):W(re.ajaxSettings,e)},ajaxPrefilter:M(Ct),ajaxTransport:M(Et),ajax:function(t,n){function i(t,n,i,a){var u,d,y,w,x,T=n;2!==b&&(b=2,l&&e.clearTimeout(l),o=void 0,s=a||"",k.readyState=t>0?4:0,u=t>=200&&300>t||304===t,i&&(w=B(p,k,i)),w=U(p,w,k,u),u?(p.ifModified&&(x=k.getResponseHeader("Last-Modified"),x&&(re.lastModified[r]=x),x=k.getResponseHeader("etag"),x&&(re.etag[r]=x)),204===t||"HEAD"===p.type?T="nocontent":304===t?T="notmodified":(T=w.state,d=w.data,y=w.error,u=!y)):(y=T,!t&&T||(T="error",0>t&&(t=0))),k.status=t,k.statusText=(n||T)+"",u?v.resolveWith(f,[d,T,k]):v.rejectWith(f,[k,T,y]),k.statusCode(m),m=void 0,c&&h.trigger(u?"ajaxSuccess":"ajaxError",[k,p,u?d:y]),g.fireWith(f,[k,T]),c&&(h.trigger("ajaxComplete",[k,p]),--re.active||re.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var o,r,s,a,l,u,c,d,p=re.ajaxSetup({},n),f=p.context||p,h=p.context&&(f.nodeType||f.jquery)?re(f):re.event,v=re.Deferred(),g=re.Callbacks("once memory"),m=p.statusCode||{},y={},w={},b=0,x="canceled",k={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!a)for(a={};t=xt.exec(s);)a[t[1].toLowerCase()]=t[2];t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=w[n]=w[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else k.always(e[k.status]);return this},abort:function(e){var t=e||x;return o&&o.abort(t),i(0,t),this}};if(v.promise(k).complete=g.add,k.success=k.done,k.error=k.fail,p.url=((t||p.url||gt.href)+"").replace(wt,"").replace(St,gt.protocol+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=re.trim(p.dataType||"*").toLowerCase().match(xe)||[""],null==p.crossDomain){u=G.createElement("a");try{u.href=p.url,u.href=u.href,p.crossDomain=At.protocol+"//"+At.host!=u.protocol+"//"+u.host}catch(e){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=re.param(p.data,p.traditional)),R(Ct,p,n,k),2===b)return k;c=re.event&&p.global,c&&0===re.active++&&re.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Tt.test(p.type),r=p.url,p.hasContent||(p.data&&(r=p.url+=(yt.test(r)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=bt.test(r)?r.replace(bt,"$1_="+mt++):r+(yt.test(r)?"&":"?")+"_="+mt++)),p.ifModified&&(re.lastModified[r]&&k.setRequestHeader("If-Modified-Since",re.lastModified[r]),re.etag[r]&&k.setRequestHeader("If-None-Match",re.etag[r])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&k.setRequestHeader("Content-Type",p.contentType),k.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+$t+"; q=0.01":""):p.accepts["*"]);for(d in p.headers)k.setRequestHeader(d,p.headers[d]);if(p.beforeSend&&(p.beforeSend.call(f,k,p)===!1||2===b))return k.abort();x="abort";for(d in{success:1,error:1,complete:1})k[d](p[d]);if(o=R(Et,p,n,k)){if(k.readyState=1,c&&h.trigger("ajaxSend",[k,p]),2===b)return k;p.async&&p.timeout>0&&(l=e.setTimeout(function(){k.abort("timeout")},p.timeout));try{b=1,o.send(y,i)}catch(e){if(!(2>b))throw e;i(-1,e)}}else i(-1,"No Transport");return k},getJSON:function(e,t,n){return re.get(e,t,n,"json")},getScript:function(e,t){return re.get(e,void 0,t,"script")}}),re.each(["get","post"],function(e,t){re[t]=function(e,n,i,o){return re.isFunction(n)&&(o=o||i,i=n,n=void 0),re.ajax(re.extend({url:e,type:t,dataType:o,data:n,success:i},re.isPlainObject(e)&&e))}}),re._evalUrl=function(e){return re.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},re.fn.extend({wrapAll:function(e){var t;return re.isFunction(e)?this.each(function(t){re(this).wrapAll(e.call(this,t))}):(this[0]&&(t=re(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return re.isFunction(e)?this.each(function(t){re(this).wrapInner(e.call(this,t))}):this.each(function(){var t=re(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=re.isFunction(e);return this.each(function(n){re(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){re.nodeName(this,"body")||re(this).replaceWith(this.childNodes)}).end()}}),re.expr.filters.hidden=function(e){return!re.expr.filters.visible(e)},re.expr.filters.visible=function(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0};var jt=/%20/g,Dt=/\[\]$/,Nt=/\r?\n/g,Ot=/^(?:submit|button|image|reset|file)$/i,Ht=/^(?:input|select|textarea|keygen)/i;re.param=function(e,t){var n,i=[],o=function(e,t){t=re.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=re.ajaxSettings&&re.ajaxSettings.traditional),re.isArray(e)||e.jquery&&!re.isPlainObject(e))re.each(e,function(){o(this.name,this.value)});else for(n in e)X(n,e[n],t,o);return i.join("&").replace(jt,"+")},re.fn.extend({serialize:function(){return re.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=re.prop(this,"elements");return e?re.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!re(this).is(":disabled")&&Ht.test(this.nodeName)&&!Ot.test(e)&&(this.checked||!He.test(e))}).map(function(e,t){var n=re(this).val();return null==n?null:re.isArray(n)?re.map(n,function(e){return{name:t.name,value:e.replace(Nt,"\r\n")}}):{name:t.name,value:n.replace(Nt,"\r\n")}}).get()}}),re.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Pt={0:200,1223:204},Lt=re.ajaxSettings.xhr();ie.cors=!!Lt&&"withCredentials"in Lt,ie.ajax=Lt=!!Lt,re.ajaxTransport(function(t){var n,i;return ie.cors||Lt&&!t.crossDomain?{send:function(o,r){var s,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s];t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest");for(s in o)a.setRequestHeader(s,o[s]);n=function(e){return function(){n&&(n=i=a.onload=a.onerror=a.onabort=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?r(0,"error"):r(a.status,a.statusText):r(Pt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),i=a.onerror=n("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout(function(){n&&i()})},n=n("abort");try{a.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}:void 0}),re.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return re.globalEval(e),e}}}),re.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),re.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=re("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),G.head.appendChild(t[0])},abort:function(){n&&n()}}}});var qt=[],_t=/(=)\?(?=&|$)|\?\?/;re.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=qt.pop()||re.expando+"_"+mt++;return this[e]=!0,e}}),re.ajaxPrefilter("json jsonp",function(t,n,i){var o,r,s,a=t.jsonp!==!1&&(_t.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&_t.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(o=t.jsonpCallback=re.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(_t,"$1"+o):t.jsonp!==!1&&(t.url+=(yt.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return s||re.error(o+" was not called"),s[0]},t.dataTypes[0]="json",r=e[o],e[o]=function(){s=arguments},i.always(function(){void 0===r?re(e).removeProp(o):e[o]=r,t[o]&&(t.jsonpCallback=n.jsonpCallback,qt.push(o)),s&&re.isFunction(r)&&r(s[0]),s=r=void 0}),"script"):void 0}),re.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||G;var i=he.exec(e),o=!n&&[];return i?[t.createElement(i[1])]:(i=p([e],t,o),o&&o.length&&re(o).remove(),re.merge([],i.childNodes))};var zt=re.fn.load;re.fn.load=function(e,t,n){if("string"!=typeof e&&zt)return zt.apply(this,arguments);var i,o,r,s=this,a=e.indexOf(" ");return a>-1&&(i=re.trim(e.slice(a)),e=e.slice(0,a)),re.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),s.length>0&&re.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done(function(e){r=arguments,s.html(i?re("<div>").append(re.parseHTML(e)).find(i):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,r||[e.responseText,t,e])})}),this},re.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){re.fn[t]=function(e){return this.on(t,e)}}),re.expr.filters.animated=function(e){return re.grep(re.timers,function(t){return e===t.elem}).length},re.offset={setOffset:function(e,t,n){var i,o,r,s,a,l,u,c=re.css(e,"position"),d=re(e),p={};"static"===c&&(e.style.position="relative"),a=d.offset(),r=re.css(e,"top"),l=re.css(e,"left"),u=("absolute"===c||"fixed"===c)&&(r+l).indexOf("auto")>-1,u?(i=d.position(),s=i.top,o=i.left):(s=parseFloat(r)||0,o=parseFloat(l)||0),re.isFunction(t)&&(t=t.call(e,n,re.extend({},a))),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+o),"using"in t?t.using.call(e,p):d.css(p)}},re.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){re.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},r=i&&i.ownerDocument;return r?(t=r.documentElement,re.contains(t,i)?(o=i.getBoundingClientRect(),n=Y(r),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o):void 0},position:function(){if(this[0]){var e,t,n=this[0],i={top:0,left:0};return"fixed"===re.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),re.nodeName(e[0],"html")||(i=e.offset()),i.top+=re.css(e[0],"borderTopWidth",!0),i.left+=re.css(e[0],"borderLeftWidth",!0)),{top:t.top-i.top-re.css(n,"marginTop",!0),left:t.left-i.left-re.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===re.css(e,"position");)e=e.offsetParent;return e||Ze})}}),re.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;re.fn[e]=function(i){return Te(this,function(e,i,o){var r=Y(e);return void 0===o?r?r[t]:e[i]:void(r?r.scrollTo(n?r.pageXOffset:o,n?o:r.pageYOffset):e[i]=o)},e,i,arguments.length)}}),re.each(["top","left"],function(e,t){re.cssHooks[t]=$(ie.pixelPosition,function(e,n){return n?(n=E(e,t),Ge.test(n)?re(e).position()[t]+"px":n):void 0})}),re.each({Height:"height",Width:"width"},function(e,t){re.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){re.fn[i]=function(i,o){var r=arguments.length&&(n||"boolean"!=typeof i),s=n||(i===!0||o===!0?"margin":"border");return Te(this,function(t,n,i){var o;return re.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?re.css(t,n,s):re.style(t,n,i,s)},t,r?i:void 0,r,null)}})}),re.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},size:function(){return this.length}}),re.fn.andSelf=re.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return re});var It=e.jQuery,Ft=e.$;return re.noConflict=function(t){return e.$===re&&(e.$=Ft),t&&e.jQuery===re&&(e.jQuery=It),re},t||(e.jQuery=e.$=re),re}),/*!
 * jquery.zoom.min.js
 */
/*!
  Zoom 1.7.15
  license: MIT
  http://www.jacklmoore.com/zoom
*/
function(e){var t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};e.zoom=function(t,n,i,o){var r,s,a,l,u,c,d,p=e(t),f=p.css("position"),h=e(n);return p.css("position",/(absolute|fixed)/.test(f)?f:"relative"),p.css("overflow","hidden"),i.style.width=i.style.height="",e(i).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:i.width*o,height:i.height*o,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(t),{init:function(){s=p.outerWidth(),r=p.outerHeight(),n===p[0]?(l=s,a=r):(l=h.outerWidth(),a=h.outerHeight()),u=(i.width-s)/l,c=(i.height-r)/a,d=h.offset()},move:function(e){var t=e.pageX-d.left,n=e.pageY-d.top;n=Math.max(Math.min(n,a),0),t=Math.max(Math.min(t,l),0),i.style.left=t*-u+"px",i.style.top=n*-c+"px"}}},e.fn.zoom=function(n){return this.each(function(){var i,o=e.extend({},t,n||{}),r=o.target||this,s=this,a=e(s),l=e(r),u=document.createElement("img"),c=e(u),d="mousemove.zoom",p=!1,f=!1;(o.url||(i=a.find("img"),i[0]&&(o.url=i.data("src")||i.attr("src")),o.url))&&(!function(){var e=l.css("position"),t=l.css("overflow");a.one("zoom.destroy",function(){a.off(".zoom"),l.css("position",e),l.css("overflow",t),c.remove()})}(),u.onload=function(){function t(t){i.init(),i.move(t),c.stop().fadeTo(e.support.opacity?o.duration:0,1,!!e.isFunction(o.onZoomIn)&&o.onZoomIn.call(u))}function n(){c.stop().fadeTo(o.duration,0,!!e.isFunction(o.onZoomOut)&&o.onZoomOut.call(u))}var i=e.zoom(r,s,u,o.magnify);"grab"===o.on?a.on("mousedown.zoom",function(o){1===o.which&&(e(document).one("mouseup.zoom",function(){n(),e(document).off(d,i.move)}),t(o),e(document).on(d,i.move),o.preventDefault())}):"click"===o.on?a.on("click.zoom",function(o){return p?void 0:(p=!0,t(o),e(document).on(d,i.move),e(document).one("click.zoom",function(){n(),p=!1,e(document).off(d,i.move)}),!1)}):"toggle"===o.on?a.on("click.zoom",function(e){p?n():t(e),p=!p}):"mouseover"===o.on&&(i.init(),a.on("mouseenter.zoom",t).on("mouseleave.zoom",n).on(d,i.move)),o.touch&&a.on("touchstart.zoom",function(e){e.preventDefault(),f?(f=!1,n()):(f=!0,t(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(e){e.preventDefault(),i.move(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0])}).on("touchend.zoom",function(e){e.preventDefault(),f&&(f=!1,n())}),e.isFunction(o.callback)&&o.callback.call(u)},u.src=o.url)})},e.fn.zoom.defaults=t}(window.jQuery),function(){function e(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}function t(e,t,n){for(var i=-1,o=e.length;++i<o;){var r=e[i],s=t(r);if(null!=s&&(a===le?s===s:n(s,a)))var a=s,l=r}return l}function n(e,t,n){var i;return n(e,function(e,n,o){return t(e,n,o)?(i=e,!1):void 0}),i}function i(e,t,n,i,o){return o(e,function(e,o,r){n=i?(i=!1,e):t(n,e,o,r)}),n}function o(e,t){return T(t,function(t){return e[t]})}function r(e){return e&&e.Object===Object?e:null}function s(e){return fe[e]}function a(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function l(e,t){return e="number"==typeof e||pe.test(e)?+e:-1,e>-1&&0==e%1&&(null==t?9007199254740991:t)>e}function u(e){if(Z(e)&&!Re(e)){if(e instanceof c)return e;if(Ce.call(e,"__wrapped__")){var t=new c(e.__wrapped__,e.__chain__);return t.__actions__=A(e.__actions__),t}}return new c(e)}function c(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t}function d(e,t,n,i){var o;return(o=e===le)||(o=Te[n],o=(e===o||e!==e&&o!==o)&&!Ce.call(i,n)),o?t:e}function p(e){return J(e)?Ne(e):{}}function f(e,t,n){if("function"!=typeof e)throw new TypeError("Expected a function");return setTimeout(function(){e.apply(le,n)},t)}function h(e,t){var n=!0;return Pe(e,function(e,i,o){return n=!!t(e,i,o)}),n}function v(e,t){var n=[];return Pe(e,function(e,i,o){t(e,i,o)&&n.push(e)}),n}function g(t,n,i,o){o||(o=[]);for(var r=-1,s=t.length;++r<s;){var a=t[r];n>0&&Z(a)&&V(a)&&(i||Re(a)||Y(a))?n>1?g(a,n-1,i,o):e(o,a):i||(o[o.length]=a)}return o}function m(e,t){return e&&Le(e,t,ie)}function y(e,t){return v(t,function(t){return G(e[t])})}function w(e,t,n,i,o){return e===t||(null==e||null==t||!J(e)&&!Z(t)?e!==e&&t!==t:b(e,t,w,n,i,o))}function b(e,t,n,i,o,r){var s=Re(e),l=Re(t),u="[object Array]",c="[object Array]";s||(u=$e.call(e),"[object Arguments]"==u&&(u="[object Object]")),l||(c=$e.call(t),"[object Arguments]"==c&&(c="[object Object]"));var d="[object Object]"==u&&!a(e),l="[object Object]"==c&&!a(t);return!(c=u==c)||s||d?2&o||(u=d&&Ce.call(e,"__wrapped__"),l=l&&Ce.call(t,"__wrapped__"),!u&&!l)?!!c&&(r||(r=[]),(u=M(r,function(t){return t[0]===e}))&&u[1]?u[1]==t:(r.push([e,t]),t=(s?P:_)(e,t,n,i,o,r),r.pop(),t)):n(u?e.value():e,l?t.value():t,i,o,r):L(e,t,u)}function x(e){var t=typeof e;return"function"==t?e:null==e?se:("object"==t?C:$)(e)}function k(e){e=null==e?e:Object(e);var t,n=[];for(t in e)n.push(t);return n}function T(e,t){var n=-1,i=V(e)?Array(e.length):[];return Pe(e,function(e,o,r){i[++n]=t(e,o,r)}),i}function C(e){var t=ie(e);return function(n){var i=t.length;if(null==n)return!i;for(n=Object(n);i--;){var o=t[i];if(!(o in n&&w(e[o],n[o],le,3)))return!1}return!0}}function S(e,t){return e=Object(e),W(t,function(t,n){return n in e&&(t[n]=e[n]),t},{})}function $(e){return function(t){return null==t?le:t[e]}}function E(e,t,n){var i=-1,o=e.length;for(0>t&&(t=-t>o?0:o+t),n=n>o?o:n,0>n&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n}function A(e){return E(e,0,e.length)}function j(e,t){var n;return Pe(e,function(e,i,o){return n=t(e,i,o),!n}),!!n}function N(t,n){return W(n,function(t,n){return n.func.apply(n.thisArg,e([t],n.args))},t)}function D(e,t,n,i){n||(n={});for(var o=-1,r=t.length;++o<r;){var s=t[o],a=i?i(n[s],e[s],s,n,e):e[s],l=n,u=l[s];Ce.call(l,s)&&(u===a||u!==u&&a!==a)&&(a!==le||s in l)||(l[s]=a)}return n}function O(e){return U(function(t,n){var i=-1,o=n.length,r=o>1?n[o-1]:le,r="function"==typeof r?(o--,r):le;for(t=Object(t);++i<o;){var s=n[i];s&&e(t,s,i,r)}return t})}function H(e){return function(){var t=arguments,n=p(e.prototype),t=e.apply(n,t);return J(t)?t:n}}function q(e,t,n){function i(){for(var r=-1,s=arguments.length,a=-1,l=n.length,u=Array(l+s),c=this&&this!==xe&&this instanceof i?o:e;++a<l;)u[a]=n[a];for(;s--;)u[a++]=arguments[++r];return c.apply(t,u)}if("function"!=typeof e)throw new TypeError("Expected a function");var o=H(e);return i}function P(e,t,n,i,o,r){var s=-1,a=1&o,l=e.length,u=t.length;if(l!=u&&!(2&o&&u>l))return!1;for(u=!0;++s<l;){var c=e[s],d=t[s];if(void 0!==le){u=!1;break}if(a){if(!j(t,function(e){return c===e||n(c,e,i,o,r)})){u=!1;break}}else if(c!==d&&!n(c,d,i,o,r)){u=!1;break}}return u}function L(e,t,n){switch(n){case"[object Boolean]":case"[object Date]":return+e==+t;case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object Number]":return e!=+e?t!=+t:e==+t;case"[object RegExp]":case"[object String]":return e==t+""}return!1}function _(e,t,n,i,o,r){var s=2&o,a=ie(e),l=a.length,u=ie(t).length;if(l!=u&&!s)return!1;for(var c=l;c--;){var d=a[c];if(!(s?d in t:Ce.call(t,d)))return!1}for(u=!0;++c<l;){var d=a[c],p=e[d],f=t[d];if(void 0!==le||p!==f&&!n(p,f,i,o,r)){u=!1;break}s||(s="constructor"==d)}return u&&!s&&(n=e.constructor,i=t.constructor,n!=i&&"constructor"in e&&"constructor"in t&&!("function"==typeof n&&n instanceof n&&"function"==typeof i&&i instanceof i)&&(u=!1)),u}function z(e){var t=e?e.length:le;if(Q(t)&&(Re(e)||ee(e)||Y(e))){e=String;for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);t=i}else t=null;return t}function I(e){var t=e&&e.constructor,t=G(t)&&t.prototype||Te;return e===t}function F(e){return e?e[0]:le}function M(e,t){return n(e,x(t),Pe)}function R(e,t){return Pe(e,"function"==typeof t?t:se)}function W(e,t,n){return i(e,x(t),n,3>arguments.length,Pe)}function B(e,t){var n;if("function"!=typeof t)throw new TypeError("Expected a function");return e=We(e),function(){return 0<--e&&(n=t.apply(this,arguments)),1>=e&&(t=le),n}}function U(e){var t;if("function"!=typeof e)throw new TypeError("Expected a function");return t=qe(t===le?e.length-1:We(t),0),function(){for(var n=arguments,i=-1,o=qe(n.length-t,0),r=Array(o);++i<o;)r[i]=n[t+i];for(o=Array(t+1),i=-1;++i<t;)o[i]=n[i];return o[t]=r,e.apply(this,o)}}function X(e,t){return e>t}function Y(e){return Z(e)&&V(e)&&Ce.call(e,"callee")&&(!De.call(e,"callee")||"[object Arguments]"==$e.call(e))}function V(e){return null!=e&&!("function"==typeof e&&G(e))&&Q(_e(e))}function G(e){return e=J(e)?$e.call(e):"","[object Function]"==e||"[object GeneratorFunction]"==e}function Q(e){return"number"==typeof e&&e>-1&&0==e%1&&9007199254740991>=e}function J(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Z(e){return!!e&&"object"==typeof e}function K(e){return"number"==typeof e||Z(e)&&"[object Number]"==$e.call(e)}function ee(e){return"string"==typeof e||!Re(e)&&Z(e)&&"[object String]"==$e.call(e)}function te(e,t){return t>e}function ne(e){return"string"==typeof e?e:null==e?"":e+""}function ie(e){var t=I(e);if(!t&&!V(e))return He(Object(e));var n,i=z(e),o=!!i,i=i||[],r=i.length;for(n in e)!Ce.call(e,n)||o&&("length"==n||l(n,r))||t&&"constructor"==n||i.push(n);return i}function oe(e){for(var t=-1,n=I(e),i=k(e),o=i.length,r=z(e),s=!!r,r=r||[],a=r.length;++t<o;){var u=i[t];s&&("length"==u||l(u,a))||"constructor"==u&&(n||!Ce.call(e,u))||r.push(u)}return r}function re(e){return e?o(e,ie(e)):[]}function se(e){return e}function ae(t,n,i){var o=ie(n),r=y(n,o);null!=i||J(n)&&(r.length||!o.length)||(i=n,n=t,t=this,r=y(n,ie(n)));var s=!(J(i)&&"chain"in i)||i.chain,a=G(t);return Pe(r,function(i){var o=n[i];t[i]=o,a&&(t.prototype[i]=function(){var n=this.__chain__;if(s||n){var i=t(this.__wrapped__);return(i.__actions__=A(this.__actions__)).push({func:o,args:arguments,thisArg:t}),i.__chain__=n,i}return o.apply(t,e([this.value()],arguments))})}),t}var le,ue=1/0,ce=/[&<>"'`]/g,de=RegExp(ce.source),pe=/^(?:0|[1-9]\d*)$/,fe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},he={function:!0,object:!0},ve=he[typeof exports]&&exports&&!exports.nodeType?exports:le,ge=he[typeof module]&&module&&!module.nodeType?module:le,me=ge&&ge.exports===ve?ve:le,ye=r(he[typeof self]&&self),we=r(he[typeof window]&&window),be=r(he[typeof this]&&this),xe=r(ve&&ge&&"object"==typeof global&&global)||we!==(be&&be.window)&&we||ye||be||Function("return this")(),ke=Array.prototype,Te=Object.prototype,Ce=Te.hasOwnProperty,Se=0,$e=Te.toString,Ee=xe._,Ae=xe.Reflect,je=Ae?Ae.f:le,Ne=Object.create,De=Te.propertyIsEnumerable,Oe=xe.isFinite,He=Object.keys,qe=Math.max,Pe=function(e,t){return function(n,i){if(null==n)return n;if(!V(n))return e(n,i);for(var o=n.length,r=t?o:-1,s=Object(n);(t?r--:++r<o)&&!1!==i(s[r],r,s););return n}}(m),Le=function(e){return function(t,n,i){var o=-1,r=Object(t);i=i(t);for(var s=i.length;s--;){var a=i[e?s:++o];if(!1===n(r[a],a,r))break}return t}}();je&&!De.call({valueOf:1},"valueOf")&&(k=function(e){e=je(e);for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n});var _e=$("length"),ze=U(function(t,n){return Re(t)||(t=null==t?[]:[Object(t)]),g(n,1),e(A(t),re)}),Ie=U(function(e,t,n){return q(e,t,n)}),Fe=U(function(e,t){return f(e,1,t)}),Me=U(function(e,t,n){return f(e,Be(t)||0,n)}),Re=Array.isArray,We=Number,Be=Number,Ue=O(function(e,t){D(t,ie(t),e)}),Xe=O(function(e,t){D(t,oe(t),e)}),Ye=O(function(e,t,n,i){D(t,oe(t),e,i)}),Ve=U(function(e){return e.push(le,d),Ye.apply(le,e)}),Ge=U(function(e,t){return null==e?{}:S(e,g(t,1))}),Qe=x;c.prototype=p(u.prototype),c.prototype.constructor=c,u.assignIn=Xe,u.before=B,u.bind=Ie,u.chain=function(e){return e=u(e),e.__chain__=!0,e},u.compact=function(e){return v(e,Boolean)},u.concat=ze,u.create=function(e,t){var n=p(e);return t?Ue(n,t):n},u.defaults=Ve,u.defer=Fe,u.delay=Me,u.filter=function(e,t){return v(e,x(t))},u.flatten=function(e){return e&&e.length?g(e,1):[]},u.flattenDeep=function(e){return e&&e.length?g(e,ue):[]},u.iteratee=Qe,u.keys=ie,u.map=function(e,t){return T(e,x(t))},u.matches=function(e){return C(Ue({},e))},u.mixin=ae,u.negate=function(e){if("function"!=typeof e)throw new TypeError("Expected a function");return function(){return!e.apply(this,arguments)}},u.once=function(e){return B(2,e)},u.pick=Ge,u.slice=function(e,t,n){var i=e?e.length:0;return n=n===le?i:+n,i?E(e,null==t?0:+t,n):[]},u.sortBy=function(e,t){var n=0;return t=x(t),T(T(e,function(e,i,o){return{c:e,b:n++,a:t(e,i,o)}}).sort(function(e,t){var n;e:{n=e.a;var i=t.a;if(n!==i){var o=null===n,r=n===le,s=n===n,a=null===i,l=i===le,u=i===i;if(n>i&&!a||!s||o&&!l&&u||r&&u){n=1;break e}if(i>n&&!o||!u||a&&!r&&s||l&&s){n=-1;break e}}n=0}return n||e.b-t.b}),$("c"))},u.tap=function(e,t){return t(e),e},u.thru=function(e,t){return t(e)},u.toArray=function(e){return V(e)?e.length?A(e):[]:re(e)},u.values=re,u.extend=Xe,ae(u,u),u.clone=function(e){return J(e)?Re(e)?A(e):D(e,ie(e)):e},u.escape=function(e){return(e=ne(e))&&de.test(e)?e.replace(ce,s):e},u.every=function(e,t,n){return t=n?le:t,h(e,x(t))},u.find=M,u.forEach=R,u.has=function(e,t){return null!=e&&Ce.call(e,t)},u.head=F,u.identity=se,u.indexOf=function(e,t,n){var i=e?e.length:0;n="number"==typeof n?0>n?qe(i+n,0):n:0,n=(n||0)-1;for(var o=t===t;++n<i;){var r=e[n];if(o?r===t:r!==r)return n}return-1},u.isArguments=Y,u.isArray=Re,u.isBoolean=function(e){return!0===e||!1===e||Z(e)&&"[object Boolean]"==$e.call(e)},u.isDate=function(e){return Z(e)&&"[object Date]"==$e.call(e)},u.isEmpty=function(e){if(V(e)&&(Re(e)||ee(e)||G(e.splice)||Y(e)))return!e.length;for(var t in e)if(Ce.call(e,t))return!1;return!0},u.isEqual=function(e,t){return w(e,t)},u.isFinite=function(e){return"number"==typeof e&&Oe(e)},u.isFunction=G,u.isNaN=function(e){return K(e)&&e!=+e},u.isNull=function(e){return null===e},u.isNumber=K,u.isObject=J,u.isRegExp=function(e){return J(e)&&"[object RegExp]"==$e.call(e)},u.isString=ee,u.isUndefined=function(e){return e===le},u.last=function(e){var t=e?e.length:0;return t?e[t-1]:le},u.max=function(e){return e&&e.length?t(e,se,X):le},u.min=function(e){return e&&e.length?t(e,se,te):le},u.noConflict=function(){return xe._===this&&(xe._=Ee),this},u.noop=function(){},u.reduce=W,u.result=function(e,t,n){return t=null==e?le:e[t],t===le&&(t=n),G(t)?t.call(e):t},u.size=function(e){return null==e?0:(e=V(e)?e:ie(e),e.length)},u.some=function(e,t,n){return t=n?le:t,j(e,x(t))},u.uniqueId=function(e){var t=++Se;return ne(e)+t},u.each=R,u.first=F,ae(u,function(){var e={};return m(u,function(t,n){Ce.call(u.prototype,n)||(e[n]=t)}),e}(),{chain:!1}),u.VERSION="4.5.1",Pe("pop join replace reverse split push shift sort splice unshift".split(" "),function(e){var t=(/^(?:replace|split)$/.test(e)?String.prototype:ke)[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(e);u.prototype[e]=function(){var e=arguments;return i&&!this.__chain__?t.apply(this.value(),e):this[n](function(n){return t.apply(n,e)})}}),u.prototype.toJSON=u.prototype.valueOf=u.prototype.value=function(){return N(this.__wrapped__,this.__actions__)},(we||ye||{})._=u,"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return u}):ve&&ge?(me&&((ge.exports=u)._=u),ve._=u):xe._=u}.call(this),/*!
 * mobile-sniff.min.js
 */
!function(){window.mobileCheck=function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}}(),/*!
 * modernizr.min.js
 */
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms-flexbox-svg-setclasses !*/
!function(e,t,n){function i(e,t){return typeof e===t}function o(){var e,t,n,o,r,s,a;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],t=w[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=i(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)s=e[r],a=s.split("."),1===a.length?x[a[0]]=o:(!x[a[0]]||x[a[0]]instanceof Boolean||(x[a[0]]=new Boolean(x[a[0]])),x[a[0]][a[1]]=o),y.push((o?"":"no-")+a.join("-"))}}function r(e){var t=k.className,n=x._config.classPrefix||"";if(T&&(t=t.baseVal),x._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}x._config.enableClasses&&(t+=" "+n+e.join(" "+n),T?k.className.baseVal=t:k.className=t)}function s(e,t){return!!~(""+e).indexOf(t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var o;for(var r in e)if(e[r]in t)return n===!1?e[r]:(o=t[e[r]],i(o,"function")?u(o,n||t):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(){var e=t.body;return e||(e=a(T?"svg":"body"),e.fake=!0),e}function f(e,n,i,o){var r,s,l,u,c="modernizr",d=a("div"),f=p();if(parseInt(i,10))for(;i--;)l=a("div"),l.id=o?o[i]:c+(i+1),d.appendChild(l);return r=a("style"),r.type="text/css",r.id="s"+c,(f.fake?f:d).appendChild(r),f.appendChild(d),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(t.createTextNode(e)),d.id=c,f.fake&&(f.style.background="",f.style.overflow="hidden",u=k.style.overflow,k.style.overflow="hidden",k.appendChild(f)),s=n(d,e),f.fake?(f.parentNode.removeChild(f),k.style.overflow=u,k.offsetHeight):d.parentNode.removeChild(d),!!s}function h(t,i){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(t[o]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];o--;)r.push("("+d(t[o])+":"+i+")");return r=r.join(" or "),f("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function v(e,t,o,r){function u(){d&&(delete A.style,delete A.modElem)}if(r=!i(r,"undefined")&&r,!i(o,"undefined")){var c=h(e,o);if(!i(c,"undefined"))return c}for(var d,p,f,v,g,m=["modernizr","tspan","samp"];!A.style&&m.length;)d=!0,A.modElem=a(m.shift()),A.style=A.modElem.style;for(f=e.length,p=0;f>p;p++)if(v=e[p],g=A.style[v],s(v,"-")&&(v=l(v)),A.style[v]!==n){if(r||i(o,"undefined"))return u(),"pfx"!=t||v;try{A.style[v]=o}catch(e){}if(A.style[v]!=g)return u(),"pfx"!=t||v}return u(),!1}function g(e,t,n,o,r){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+S.join(s+" ")+s).split(" ");return i(t,"string")||i(t,"undefined")?v(a,t,o,r):(a=(e+" "+$.join(s+" ")+s).split(" "),c(a,t,n))}function m(e,t,i){return g(e,n,n,t,i)}var y=[],w=[],b={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},x=function(){};x.prototype=b,x=new x,x.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var k=t.documentElement,T="svg"===k.nodeName.toLowerCase(),C="Moz O ms Webkit",S=b._config.usePrefixes?C.split(" "):[];b._cssomPrefixes=S;var $=b._config.usePrefixes?C.toLowerCase().split(" "):[];b._domPrefixes=$;var E={elem:a("modernizr")};x._q.push(function(){delete E.elem});var A={style:E.elem.style};x._q.unshift(function(){delete A.style}),b.testAllProps=g,b.testAllProps=m,x.addTest("flexbox",m("flexBasis","1px",!0)),x.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&m("transform","scale(1)",!0)}),o(),r(y),delete b.addTest,delete b.addAsyncTest;for(var j=0;j<x._q.length;j++)x._q[j]();e.Modernizr=x}(window,document),/*!
 * prepare-transition.min.js
 */
/* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
!function(e){e.fn.prepareTransition=function(){return this.each(function(){var t=e(this);t.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd",function(){t.removeClass("is-transitioning")});var n=["transition-duration","-moz-transition-duration","-webkit-transition-duration","-o-transition-duration"],i=0;e.each(n,function(e,n){i||(i=parseFloat(t.css(n)))}),0!=i&&(t.addClass("is-transitioning"),t[0].offsetWidth)})}}(jQuery),/*!
* jquery.ba-throttle-debounce.min.js
*/
/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
function(e,t){var n,i=e.jQuery||e.Cowboy||(e.Cowboy={});i.throttle=n=function(e,n,o,r){function s(){function i(){l=+new Date,o.apply(u,d)}function s(){a=t}var u=this,c=+new Date-l,d=arguments;r&&!a&&i(),a&&clearTimeout(a),r===t&&c>e?i():n!==!0&&(a=setTimeout(r?s:i,r===t?e-c:e))}var a,l=0;return"boolean"!=typeof n&&(r=o,o=n,n=t),i.guid&&(s.guid=o.guid=o.guid||i.guid++),s},i.debounce=function(e,i,o){return o===t?n(e,i,!1):n(e,o,i!==!1)}}(this);
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
/*
* jquery-match-height 0.7.0 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,i=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),n=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-i(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-a))<=o?r[r.length-1]=s.add(e):r.push(e),n=a}),r},n=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var i=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.0",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=i,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block");var a={
display:i};a[s.property]="",e.css(a),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=i(e.css("border-top-width"))+i(e.css("border-bottom-width")),o+=i(e.css("padding-top"))+i(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),i=o.attr("data-mh")||o.attr("data-match-height");i in e?e[i]=e[i].add(o):e[i]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(i,a){if(a&&"resize"===a.type){var n=t(window).width();if(n===e)return;e=n;
}i?-1===o&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
/*! tooltipster v4.1.7 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){function b(a){this.$container,this.constraints=null,this.__$tooltip,this.__init(a)}function c(b,c){var d=!0;return a.each(b,function(a,e){return void 0===c[a]||b[a]!==c[a]?(d=!1,!1):void 0}),d}function d(b){var c=b.attr("id"),d=c?h.window.document.getElementById(c):null;return d?d===b[0]:a.contains(h.window.document.body,b[0])}function e(){if(!g)return!1;var a=g.document.body||g.document.documentElement,b=a.style,c="transition",d=["Moz","Webkit","Khtml","O","ms"];if("string"==typeof b[c])return!0;c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}var f={animation:"fade",animationDuration:350,content:null,contentAsHTML:!1,contentCloning:!1,debug:!0,delay:300,delayTouch:[300,500],functionInit:null,functionBefore:null,functionReady:null,functionAfter:null,functionFormat:null,IEmin:6,interactive:!1,multiple:!1,parent:"body",plugins:["sideTip"],repositionOnScroll:!1,restoration:"none",selfDestruction:!0,theme:[],timer:0,trackerInterval:500,trackOrigin:!1,trackTooltip:!1,trigger:"hover",triggerClose:{click:!1,mouseleave:!1,originClick:!1,scroll:!1,tap:!1,touchleave:!1},triggerOpen:{click:!1,mouseenter:!1,tap:!1,touchstart:!1},updateAnimation:"rotate",zIndex:9999999},g="undefined"!=typeof window?window:null,h={hasTouchCapability:!(!g||!("ontouchstart"in g||g.DocumentTouch&&g.document instanceof g.DocumentTouch||g.navigator.maxTouchPoints)),hasTransitions:e(),IE:!1,semVer:"4.1.7",window:g},i=function(){this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__instancesLatestArr=[],this.__plugins={},this._env=h};i.prototype={__bridge:function(b,c,d){if(!c[d]){var e=function(){};e.prototype=b;var g=new e;g.__init&&g.__init(c),a.each(b,function(a,b){0!=a.indexOf("__")&&(c[a]?f.debug&&console.log("The "+a+" method of the "+d+" plugin conflicts with another plugin or native methods"):(c[a]=function(){return g[a].apply(g,Array.prototype.slice.apply(arguments))},c[a].bridged=g))}),c[d]=g}return this},__setWindow:function(a){return h.window=a,this},_getRuler:function(a){return new b(a)},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_plugin:function(b){var c=this;if("string"==typeof b){var d=b,e=null;return d.indexOf(".")>0?e=c.__plugins[d]:a.each(c.__plugins,function(a,b){return b.name.substring(b.name.length-d.length-1)=="."+d?(e=b,!1):void 0}),e}if(b.name.indexOf(".")<0)throw new Error("Plugins must be namespaced");return c.__plugins[b.name]=b,b.core&&c.__bridge(b.core,c,b.name),this},_trigger:function(){var a=Array.prototype.slice.apply(arguments);return"string"==typeof a[0]&&(a[0]={type:a[0]}),this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,a),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,a),this},instances:function(b){var c=[],d=b||".tooltipstered";return a(d).each(function(){var b=a(this),d=b.data("tooltipster-ns");d&&a.each(d,function(a,d){c.push(b.data(d))})}),c},instancesLatest:function(){return this.__instancesLatestArr},off:function(){return this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},origins:function(b){var c=b?b+" ":"";return a(c+".tooltipstered").toArray()},setDefaults:function(b){return a.extend(f,b),this},triggerHandler:function(){return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.tooltipster=new i,a.Tooltipster=function(b,c){this.__callbacks={close:[],open:[]},this.__closingTime,this.__Content,this.__contentBcr,this.__destroyed=!1,this.__destroying=!1,this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__enabled=!0,this.__garbageCollector,this.__Geometry,this.__lastPosition,this.__namespace="tooltipster-"+Math.round(1e6*Math.random()),this.__options,this.__$originParents,this.__pointerIsOverOrigin=!1,this.__previousThemes=[],this.__state="closed",this.__timeouts={close:[],open:null},this.__touchEvents=[],this.__tracker=null,this._$origin,this._$tooltip,this.__init(b,c)},a.Tooltipster.prototype={__init:function(b,c){var d=this;if(d._$origin=a(b),d.__options=a.extend(!0,{},f,c),d.__optionsFormat(),!h.IE||h.IE>=d.__options.IEmin){var e=null;if(void 0===d._$origin.data("tooltipster-initialTitle")&&(e=d._$origin.attr("title"),void 0===e&&(e=null),d._$origin.data("tooltipster-initialTitle",e)),null!==d.__options.content)d.__contentSet(d.__options.content);else{var g,i=d._$origin.attr("data-tooltip-content");i&&(g=a(i)),g&&g[0]?d.__contentSet(g.first()):d.__contentSet(e)}d._$origin.removeAttr("title").addClass("tooltipstered"),d.__prepareOrigin(),d.__prepareGC(),a.each(d.__options.plugins,function(a,b){d._plug(b)}),h.hasTouchCapability&&a("body").on("touchmove."+d.__namespace+"-triggerOpen",function(a){d._touchRecordEvent(a)}),d._on("created",function(){d.__prepareTooltip()})._on("repositioned",function(a){d.__lastPosition=a.position})}else d.__options.disabled=!0},__contentInsert:function(){var a=this,b=a._$tooltip.find(".tooltipster-content"),c=a.__Content,d=function(a){c=a};return a._trigger({type:"format",content:a.__Content,format:d}),a.__options.functionFormat&&(c=a.__options.functionFormat.call(a,a,{origin:a._$origin[0]},a.__Content)),"string"!=typeof c||a.__options.contentAsHTML?b.empty().append(c):b.text(c),a},__contentSet:function(b){return b instanceof a&&this.__options.contentCloning&&(b=b.clone(!0)),this.__Content=b,this._trigger({type:"updated",content:b}),this},__destroyError:function(){throw new Error("This tooltip has been destroyed and cannot execute your method call.")},__geometry:function(){var b=this,c=b._$origin,d=b._$origin.is("area");if(d){var e=b._$origin.parent().attr("name");c=a('img[usemap="#'+e+'"]')}var f=c[0].getBoundingClientRect(),g=a(h.window.document),i=a(h.window),j=c,k={available:{document:null,window:null},document:{size:{height:g.height(),width:g.width()}},window:{scroll:{left:h.window.scrollX||h.window.document.documentElement.scrollLeft,top:h.window.scrollY||h.window.document.documentElement.scrollTop},size:{height:i.height(),width:i.width()}},origin:{fixedLineage:!1,offset:{},size:{height:f.bottom-f.top,width:f.right-f.left},usemapImage:d?c[0]:null,windowOffset:{bottom:f.bottom,left:f.left,right:f.right,top:f.top}}};if(d){var l=b._$origin.attr("shape"),m=b._$origin.attr("coords");if(m&&(m=m.split(","),a.map(m,function(a,b){m[b]=parseInt(a)})),"default"!=l)switch(l){case"circle":var n=m[0],o=m[1],p=m[2],q=o-p,r=n-p;k.origin.size.height=2*p,k.origin.size.width=k.origin.size.height,k.origin.windowOffset.left+=r,k.origin.windowOffset.top+=q;break;case"rect":var s=m[0],t=m[1],u=m[2],v=m[3];k.origin.size.height=v-t,k.origin.size.width=u-s,k.origin.windowOffset.left+=s,k.origin.windowOffset.top+=t;break;case"poly":for(var w=0,x=0,y=0,z=0,A="even",B=0;B<m.length;B++){var C=m[B];"even"==A?(C>y&&(y=C,0===B&&(w=y)),w>C&&(w=C),A="odd"):(C>z&&(z=C,1==B&&(x=z)),x>C&&(x=C),A="even")}k.origin.size.height=z-x,k.origin.size.width=y-w,k.origin.windowOffset.left+=w,k.origin.windowOffset.top+=x}}var D=function(a){k.origin.size.height=a.height,k.origin.windowOffset.left=a.left,k.origin.windowOffset.top=a.top,k.origin.size.width=a.width};for(b._trigger({type:"geometry",edit:D,geometry:{height:k.origin.size.height,left:k.origin.windowOffset.left,top:k.origin.windowOffset.top,width:k.origin.size.width}}),k.origin.windowOffset.right=k.origin.windowOffset.left+k.origin.size.width,k.origin.windowOffset.bottom=k.origin.windowOffset.top+k.origin.size.height,k.origin.offset.left=k.origin.windowOffset.left+k.window.scroll.left,k.origin.offset.top=k.origin.windowOffset.top+k.window.scroll.top,k.origin.offset.bottom=k.origin.offset.top+k.origin.size.height,k.origin.offset.right=k.origin.offset.left+k.origin.size.width,k.available.document={bottom:{height:k.document.size.height-k.origin.offset.bottom,width:k.document.size.width},left:{height:k.document.size.height,width:k.origin.offset.left},right:{height:k.document.size.height,width:k.document.size.width-k.origin.offset.right},top:{height:k.origin.offset.top,width:k.document.size.width}},k.available.window={bottom:{height:Math.max(k.window.size.height-Math.max(k.origin.windowOffset.bottom,0),0),width:k.window.size.width},left:{height:k.window.size.height,width:Math.max(k.origin.windowOffset.left,0)},right:{height:k.window.size.height,width:Math.max(k.window.size.width-Math.max(k.origin.windowOffset.right,0),0)},top:{height:Math.max(k.origin.windowOffset.top,0),width:k.window.size.width}};"html"!=j[0].tagName.toLowerCase();){if("fixed"==j.css("position")){k.origin.fixedLineage=!0;break}j=j.parent()}return k},__optionsFormat:function(){return"number"==typeof this.__options.animationDuration&&(this.__options.animationDuration=[this.__options.animationDuration,this.__options.animationDuration]),"number"==typeof this.__options.delay&&(this.__options.delay=[this.__options.delay,this.__options.delay]),"number"==typeof this.__options.delayTouch&&(this.__options.delayTouch=[this.__options.delayTouch,this.__options.delayTouch]),"string"==typeof this.__options.theme&&(this.__options.theme=[this.__options.theme]),"string"==typeof this.__options.parent&&(this.__options.parent=a(this.__options.parent)),"hover"==this.__options.trigger?(this.__options.triggerOpen={mouseenter:!0,touchstart:!0},this.__options.triggerClose={mouseleave:!0,originClick:!0,touchleave:!0}):"click"==this.__options.trigger&&(this.__options.triggerOpen={click:!0,tap:!0},this.__options.triggerClose={click:!0,tap:!0}),this._trigger("options"),this},__prepareGC:function(){var b=this;return b.__options.selfDestruction?b.__garbageCollector=setInterval(function(){var c=(new Date).getTime();b.__touchEvents=a.grep(b.__touchEvents,function(a,b){return c-a.time>6e4}),d(b._$origin)||b.destroy()},2e4):clearInterval(b.__garbageCollector),b},__prepareOrigin:function(){var a=this;if(a._$origin.off("."+a.__namespace+"-triggerOpen"),h.hasTouchCapability&&a._$origin.on("touchstart."+a.__namespace+"-triggerOpen touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen",function(b){a._touchRecordEvent(b)}),a.__options.triggerOpen.click||a.__options.triggerOpen.tap&&h.hasTouchCapability){var b="";a.__options.triggerOpen.click&&(b+="click."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.tap&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&a._open(b)})}if(a.__options.triggerOpen.mouseenter||a.__options.triggerOpen.touchstart&&h.hasTouchCapability){var b="";a.__options.triggerOpen.mouseenter&&(b+="mouseenter."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.touchstart&&h.hasTouchCapability&&(b+="touchstart."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){!a._touchIsTouchEvent(b)&&a._touchIsEmulatedEvent(b)||(a.__pointerIsOverOrigin=!0,a._openShortly(b))})}if(a.__options.triggerClose.mouseleave||a.__options.triggerClose.touchleave&&h.hasTouchCapability){var b="";a.__options.triggerClose.mouseleave&&(b+="mouseleave."+a.__namespace+"-triggerOpen "),a.__options.triggerClose.touchleave&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&(a.__pointerIsOverOrigin=!1)})}return a},__prepareTooltip:function(){var b=this,c=b.__options.interactive?"auto":"";return b._$tooltip.attr("id",b.__namespace).css({"pointer-events":c,zIndex:b.__options.zIndex}),a.each(b.__previousThemes,function(a,c){b._$tooltip.removeClass(c)}),a.each(b.__options.theme,function(a,c){b._$tooltip.addClass(c)}),b.__previousThemes=a.merge([],b.__options.theme),b},__scrollHandler:function(b){var c=this;if(c.__options.triggerClose.scroll)c._close(b);else if(d(c._$origin)&&d(c._$tooltip)){if(b.target===h.window.document)c.__Geometry.origin.fixedLineage||c.__options.repositionOnScroll&&c.reposition(b);else{var e=c.__geometry(),f=!1;if("fixed"!=c._$origin.css("position")&&c.__$originParents.each(function(b,c){var d=a(c),g=d.css("overflow-x"),h=d.css("overflow-y");if("visible"!=g||"visible"!=h){var i=c.getBoundingClientRect();if("visible"!=g&&(e.origin.windowOffset.left<i.left||e.origin.windowOffset.right>i.right))return f=!0,!1;if("visible"!=h&&(e.origin.windowOffset.top<i.top||e.origin.windowOffset.bottom>i.bottom))return f=!0,!1}return"fixed"==d.css("position")?!1:void 0}),f)c._$tooltip.css("visibility","hidden");else if(c._$tooltip.css("visibility","visible"),c.__options.repositionOnScroll)c.reposition(b);else{var g=e.origin.offset.left-c.__Geometry.origin.offset.left,i=e.origin.offset.top-c.__Geometry.origin.offset.top;c._$tooltip.css({left:c.__lastPosition.coord.left+g,top:c.__lastPosition.coord.top+i})}}c._trigger({type:"scroll",event:b})}return c},__stateSet:function(a){return this.__state=a,this._trigger({type:"state",state:a}),this},__timeoutsClear:function(){return clearTimeout(this.__timeouts.open),this.__timeouts.open=null,a.each(this.__timeouts.close,function(a,b){clearTimeout(b)}),this.__timeouts.close=[],this},__trackerStart:function(){var a=this,b=a._$tooltip.find(".tooltipster-content");return a.__options.trackTooltip&&(a.__contentBcr=b[0].getBoundingClientRect()),a.__tracker=setInterval(function(){if(d(a._$origin)&&d(a._$tooltip)){if(a.__options.trackOrigin){var e=a.__geometry(),f=!1;c(e.origin.size,a.__Geometry.origin.size)&&(a.__Geometry.origin.fixedLineage?c(e.origin.windowOffset,a.__Geometry.origin.windowOffset)&&(f=!0):c(e.origin.offset,a.__Geometry.origin.offset)&&(f=!0)),f||(a.__options.triggerClose.mouseleave?a._close():a.reposition())}if(a.__options.trackTooltip){var g=b[0].getBoundingClientRect();g.height===a.__contentBcr.height&&g.width===a.__contentBcr.width||(a.reposition(),a.__contentBcr=g)}}else a._close()},a.__options.trackerInterval),a},_close:function(b,c){var d=this,e=!0;if(d._trigger({type:"close",event:b,stop:function(){e=!1}}),e||d.__destroying){c&&d.__callbacks.close.push(c),d.__callbacks.open=[],d.__timeoutsClear();var f=function(){a.each(d.__callbacks.close,function(a,c){c.call(d,d,{event:b,origin:d._$origin[0]})}),d.__callbacks.close=[]};if("closed"!=d.__state){var g=!0,i=new Date,j=i.getTime(),k=j+d.__options.animationDuration[1];if("disappearing"==d.__state&&k>d.__closingTime&&(g=!1),g){d.__closingTime=k,"disappearing"!=d.__state&&d.__stateSet("disappearing");var l=function(){clearInterval(d.__tracker),d._trigger({type:"closing",event:b}),d._$tooltip.off("."+d.__namespace+"-triggerClose").removeClass("tooltipster-dying"),a(h.window).off("."+d.__namespace+"-triggerClose"),d.__$originParents.each(function(b,c){a(c).off("scroll."+d.__namespace+"-triggerClose")}),d.__$originParents=null,a("body").off("."+d.__namespace+"-triggerClose"),d._$origin.off("."+d.__namespace+"-triggerClose"),d._off("dismissable"),d.__stateSet("closed"),d._trigger({type:"after",event:b}),d.__options.functionAfter&&d.__options.functionAfter.call(d,d,{event:b,origin:d._$origin[0]}),f()};h.hasTransitions?(d._$tooltip.css({"-moz-animation-duration":d.__options.animationDuration[1]+"ms","-ms-animation-duration":d.__options.animationDuration[1]+"ms","-o-animation-duration":d.__options.animationDuration[1]+"ms","-webkit-animation-duration":d.__options.animationDuration[1]+"ms","animation-duration":d.__options.animationDuration[1]+"ms","transition-duration":d.__options.animationDuration[1]+"ms"}),d._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"),d.__options.animationDuration[1]>0&&d._$tooltip.delay(d.__options.animationDuration[1]),d._$tooltip.queue(l)):d._$tooltip.stop().fadeOut(d.__options.animationDuration[1],l)}}else f()}return d},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_open:function(b,c){var e=this;if(!e.__destroying&&d(e._$origin)&&e.__enabled){var f=!0;if("closed"==e.__state&&(e._trigger({type:"before",event:b,stop:function(){f=!1}}),f&&e.__options.functionBefore&&(f=e.__options.functionBefore.call(e,e,{event:b,origin:e._$origin[0]}))),f!==!1&&null!==e.__Content){c&&e.__callbacks.open.push(c),e.__callbacks.close=[],e.__timeoutsClear();var g,i=function(){"stable"!=e.__state&&e.__stateSet("stable"),a.each(e.__callbacks.open,function(a,b){b.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}),e.__callbacks.open=[]};if("closed"!==e.__state)g=0,"disappearing"===e.__state?(e.__stateSet("appearing"),h.hasTransitions?(e._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i)):e._$tooltip.stop().fadeIn(i)):"stable"==e.__state&&i();else{if(e.__stateSet("appearing"),g=e.__options.animationDuration[0],e.__contentInsert(),e.reposition(b,!0),h.hasTransitions?(e._$tooltip.addClass("tooltipster-"+e.__options.animation).addClass("tooltipster-initial").css({"-moz-animation-duration":e.__options.animationDuration[0]+"ms","-ms-animation-duration":e.__options.animationDuration[0]+"ms","-o-animation-duration":e.__options.animationDuration[0]+"ms","-webkit-animation-duration":e.__options.animationDuration[0]+"ms","animation-duration":e.__options.animationDuration[0]+"ms","transition-duration":e.__options.animationDuration[0]+"ms"}),setTimeout(function(){"closed"!=e.__state&&(e._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i))},0)):e._$tooltip.css("display","none").fadeIn(e.__options.animationDuration[0],i),e.__trackerStart(),a(h.window).on("resize."+e.__namespace+"-triggerClose",function(b){var c=a(document.activeElement);(c.is("input")||c.is("textarea"))&&a.contains(e._$tooltip[0],c[0])||e.reposition(b)}).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)}),e.__$originParents=e._$origin.parents(),e.__$originParents.each(function(b,c){a(c).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)})}),e.__options.triggerClose.mouseleave||e.__options.triggerClose.touchleave&&h.hasTouchCapability){e._on("dismissable",function(a){a.dismissable?a.delay?(m=setTimeout(function(){e._close(a.event)},a.delay),e.__timeouts.close.push(m)):e._close(a):clearTimeout(m)});var j=e._$origin,k="",l="",m=null;e.__options.interactive&&(j=j.add(e._$tooltip)),e.__options.triggerClose.mouseleave&&(k+="mouseenter."+e.__namespace+"-triggerClose ",l+="mouseleave."+e.__namespace+"-triggerClose "),e.__options.triggerClose.touchleave&&h.hasTouchCapability&&(k+="touchstart."+e.__namespace+"-triggerClose",l+="touchend."+e.__namespace+"-triggerClose touchcancel."+e.__namespace+"-triggerClose"),j.on(l,function(a){if(e._touchIsTouchEvent(a)||!e._touchIsEmulatedEvent(a)){var b="mouseleave"==a.type?e.__options.delay:e.__options.delayTouch;e._trigger({delay:b[1],dismissable:!0,event:a,type:"dismissable"})}}).on(k,function(a){!e._touchIsTouchEvent(a)&&e._touchIsEmulatedEvent(a)||e._trigger({dismissable:!1,event:a,type:"dismissable"})})}e.__options.triggerClose.originClick&&e._$origin.on("click."+e.__namespace+"-triggerClose",function(a){e._touchIsTouchEvent(a)||e._touchIsEmulatedEvent(a)||e._close(a)}),(e.__options.triggerClose.click||e.__options.triggerClose.tap&&h.hasTouchCapability)&&setTimeout(function(){if("closed"!=e.__state){var b="";e.__options.triggerClose.click&&(b+="click."+e.__namespace+"-triggerClose "),e.__options.triggerClose.tap&&h.hasTouchCapability&&(b+="touchend."+e.__namespace+"-triggerClose"),a("body").on(b,function(b){e._touchIsMeaningfulEvent(b)&&(e._touchRecordEvent(b),e.__options.interactive&&a.contains(e._$tooltip[0],b.target)||e._close(b))}),e.__options.triggerClose.tap&&h.hasTouchCapability&&a("body").on("touchstart."+e.__namespace+"-triggerClose",function(a){e._touchRecordEvent(a)})}},0),e._trigger("ready"),e.__options.functionReady&&e.__options.functionReady.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}if(e.__options.timer>0){var m=setTimeout(function(){e._close()},e.__options.timer+g);e.__timeouts.close.push(m)}}}return e},_openShortly:function(a){var b=this,c=!0;if("stable"!=b.__state&&"appearing"!=b.__state&&!b.__timeouts.open&&(b._trigger({type:"start",event:a,stop:function(){c=!1}}),c)){var d=0==a.type.indexOf("touch")?b.__options.delayTouch:b.__options.delay;d[0]?b.__timeouts.open=setTimeout(function(){b.__timeouts.open=null,b.__pointerIsOverOrigin&&b._touchIsMeaningfulEvent(a)?(b._trigger("startend"),b._open(a)):b._trigger("startcancel")},d[0]):(b._trigger("startend"),b._open(a))}return b},_optionsExtract:function(b,c){var d=this,e=a.extend(!0,{},c),f=d.__options[b];return f||(f={},a.each(c,function(a,b){var c=d.__options[a];void 0!==c&&(f[a]=c)})),a.each(e,function(b,c){void 0!==f[b]&&("object"!=typeof c||c instanceof Array||null==c||"object"!=typeof f[b]||f[b]instanceof Array||null==f[b]?e[b]=f[b]:a.extend(e[b],f[b]))}),e},_plug:function(b){var c=a.tooltipster._plugin(b);if(!c)throw new Error('The "'+b+'" plugin is not defined');return c.instance&&a.tooltipster.__bridge(c.instance,this,c.name),this},_touchIsEmulatedEvent:function(a){for(var b=!1,c=(new Date).getTime(),d=this.__touchEvents.length-1;d>=0;d--){var e=this.__touchEvents[d];if(!(c-e.time<500))break;e.target===a.target&&(b=!0)}return b},_touchIsMeaningfulEvent:function(a){return this._touchIsTouchEvent(a)&&!this._touchSwiped(a.target)||!this._touchIsTouchEvent(a)&&!this._touchIsEmulatedEvent(a)},_touchIsTouchEvent:function(a){return 0==a.type.indexOf("touch")},_touchRecordEvent:function(a){return this._touchIsTouchEvent(a)&&(a.time=(new Date).getTime(),this.__touchEvents.push(a)),this},_touchSwiped:function(a){for(var b=!1,c=this.__touchEvents.length-1;c>=0;c--){var d=this.__touchEvents[c];if("touchmove"==d.type){b=!0;break}if("touchstart"==d.type&&a===d.target)break}return b},_trigger:function(){var b=Array.prototype.slice.apply(arguments);return"string"==typeof b[0]&&(b[0]={type:b[0]}),b[0].instance=this,b[0].origin=this._$origin?this._$origin[0]:null,b[0].tooltip=this._$tooltip?this._$tooltip[0]:null,this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,b),a.tooltipster._trigger.apply(a.tooltipster,b),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,b),this},_unplug:function(b){var c=this;if(c[b]){var d=a.tooltipster._plugin(b);d.instance&&a.each(d.instance,function(a,d){c[a]&&c[a].bridged===c[b]&&delete c[a]}),c[b].__destroy&&c[b].__destroy(),delete c[b]}return c},close:function(a){return this.__destroyed?this.__destroyError():this._close(null,a),this},content:function(a){var b=this;if(void 0===a)return b.__Content;if(b.__destroyed)b.__destroyError();else if(b.__contentSet(a),null!==b.__Content){if("closed"!==b.__state&&(b.__contentInsert(),b.reposition(),b.__options.updateAnimation))if(h.hasTransitions){var c=b.__options.updateAnimation;b._$tooltip.addClass("tooltipster-update-"+c),setTimeout(function(){"closed"!=b.__state&&b._$tooltip.removeClass("tooltipster-update-"+c)},1e3)}else b._$tooltip.fadeTo(200,.5,function(){"closed"!=b.__state&&b._$tooltip.fadeTo(200,1)})}else b._close();return b},destroy:function(){var b=this;return b.__destroyed?b.__destroyError():b.__destroying||(b.__destroying=!0,b._close(null,function(){b._trigger("destroy"),b.__destroying=!1,b.__destroyed=!0,b._$origin.removeData(b.__namespace).off("."+b.__namespace+"-triggerOpen"),a("body").off("."+b.__namespace+"-triggerOpen");var c=b._$origin.data("tooltipster-ns");if(c)if(1===c.length){var d=null;"previous"==b.__options.restoration?d=b._$origin.data("tooltipster-initialTitle"):"current"==b.__options.restoration&&(d="string"==typeof b.__Content?b.__Content:a("<div></div>").append(b.__Content).html()),d&&b._$origin.attr("title",d),b._$origin.removeClass("tooltipstered"),b._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else c=a.grep(c,function(a,c){return a!==b.__namespace}),b._$origin.data("tooltipster-ns",c);b._trigger("destroyed"),b._off(),b.off(),b.__Content=null,b.__$emitterPrivate=null,b.__$emitterPublic=null,b.__options.parent=null,b._$origin=null,b._$tooltip=null,a.tooltipster.__instancesLatestArr=a.grep(a.tooltipster.__instancesLatestArr,function(a,c){return b!==a}),clearInterval(b.__garbageCollector)})),b},disable:function(){return this.__destroyed?(this.__destroyError(),this):(this._close(),this.__enabled=!1,this)},elementOrigin:function(){return this.__destroyed?void this.__destroyError():this._$origin[0]},elementTooltip:function(){return this._$tooltip?this._$tooltip[0]:null},enable:function(){return this.__enabled=!0,this},hide:function(a){return this.close(a)},instance:function(){return this},off:function(){return this.__destroyed||this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},open:function(a){return this.__destroyed||this.__destroying?this.__destroyError():this._open(null,a),this},option:function(b,c){return void 0===c?this.__options[b]:(this.__destroyed?this.__destroyError():(this.__options[b]=c,this.__optionsFormat(),a.inArray(b,["trigger","triggerClose","triggerOpen"])>=0&&this.__prepareOrigin(),"selfDestruction"===b&&this.__prepareGC()),this)},reposition:function(a,b){var c=this;return c.__destroyed?c.__destroyError():"closed"!=c.__state&&d(c._$origin)&&(b||d(c._$tooltip))&&(b||c._$tooltip.detach(),c.__Geometry=c.__geometry(),c._trigger({type:"reposition",event:a,helper:{geo:c.__Geometry}})),c},show:function(a){return this.open(a)},status:function(){return{destroyed:this.__destroyed,destroying:this.__destroying,enabled:this.__enabled,open:"closed"!==this.__state,state:this.__state}},triggerHandler:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.fn.tooltipster=function(){var b=Array.prototype.slice.apply(arguments),c="You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";if(0===this.length)return this;if("string"==typeof b[0]){var d="#*$~&";return this.each(function(){var e=a(this).data("tooltipster-ns"),f=e?a(this).data(e[0]):null;if(!f)throw new Error("You called Tooltipster's \""+b[0]+'" method on an uninitialized element');if("function"!=typeof f[b[0]])throw new Error('Unknown method "'+b[0]+'"');this.length>1&&"content"==b[0]&&(b[1]instanceof a||"object"==typeof b[1]&&null!=b[1]&&b[1].tagName)&&!f.__options.contentCloning&&f.__options.debug&&console.log(c);var g=f[b[0]](b[1],b[2]);return g!==f||"instance"===b[0]?(d=g,!1):void 0}),"#*$~&"!==d?d:this}a.tooltipster.__instancesLatestArr=[];var e=b[0]&&void 0!==b[0].multiple,g=e&&b[0].multiple||!e&&f.multiple,h=b[0]&&void 0!==b[0].content,i=h&&b[0].content||!h&&f.content,j=b[0]&&void 0!==b[0].contentCloning,k=j&&b[0].contentCloning||!j&&f.contentCloning,l=b[0]&&void 0!==b[0].debug,m=l&&b[0].debug||!l&&f.debug;return this.length>1&&(i instanceof a||"object"==typeof i&&null!=i&&i.tagName)&&!k&&m&&console.log(c),this.each(function(){var c=!1,d=a(this),e=d.data("tooltipster-ns"),f=null;e?g?c=!0:m&&(console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."),console.log(this)):c=!0,c&&(f=new a.Tooltipster(this,b[0]),e||(e=[]),e.push(f.__namespace),d.data("tooltipster-ns",e),d.data(f.__namespace,f),f.__options.functionInit&&f.__options.functionInit.call(f,f,{origin:this}),f._trigger("init")),a.tooltipster.__instancesLatestArr.push(f)}),this},b.prototype={__init:function(b){this.__$tooltip=b,this.__$tooltip.css({left:0,overflow:"hidden",position:"absolute",top:0}).find(".tooltipster-content").css("overflow","auto"),this.$container=a('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo("body")},__forceRedraw:function(){var a=this.__$tooltip.parent();this.__$tooltip.detach(),this.__$tooltip.appendTo(a)},constrain:function(a,b){return this.constraints={width:a,height:b},this.__$tooltip.css({display:"block",height:"",overflow:"auto",width:a}),this},destroy:function(){this.__$tooltip.detach().find(".tooltipster-content").css({display:"",overflow:""}),this.$container.remove()},free:function(){return this.constraints=null,this.__$tooltip.css({display:"",height:"",overflow:"visible",width:""}),this},measure:function(){this.__forceRedraw();var a=this.__$tooltip[0].getBoundingClientRect(),b={size:{height:a.height||a.bottom,width:a.width||a.right}};if(this.constraints){var c=this.__$tooltip.find(".tooltipster-content"),d=this.__$tooltip.outerHeight(),e=c[0].getBoundingClientRect(),f={height:d<=this.constraints.height,width:a.width<=this.constraints.width&&e.width>=c[0].scrollWidth-1};b.fits=f.height&&f.width}return h.IE&&h.IE<=11&&b.size.width!==h.window.document.documentElement.clientWidth&&(b.size.width=Math.ceil(b.size.width)+1),b}};var j=navigator.userAgent.toLowerCase();-1!=j.indexOf("msie")?h.IE=parseInt(j.split("msie")[1]):-1!==j.toLowerCase().indexOf("trident")&&-1!==j.indexOf(" rv:11")?h.IE=11:-1!=j.toLowerCase().indexOf("edge/")&&(h.IE=parseInt(j.toLowerCase().split("edge/")[1]));var k="tooltipster.sideTip";return a.tooltipster._plugin({name:k,instance:{__defaults:function(){return{arrow:!0,distance:6,functionPosition:null,maxWidth:null,minIntersection:16,minWidth:0,position:null,side:"top",viewportAware:!0}},__init:function(a){var b=this;b.__instance=a,b.__namespace="tooltipster-sideTip-"+Math.round(1e6*Math.random()),b.__previousState="closed",b.__options,b.__optionsFormat(),b.__instance._on("state."+b.__namespace,function(a){"closed"==a.state?b.__close():"appearing"==a.state&&"closed"==b.__previousState&&b.__create(),b.__previousState=a.state}),b.__instance._on("options."+b.__namespace,function(){b.__optionsFormat()}),b.__instance._on("reposition."+b.__namespace,function(a){b.__reposition(a.event,a.helper)})},__close:function(){this.__instance.content()instanceof a&&this.__instance.content().detach(),this.__instance._$tooltip.remove(),this.__instance._$tooltip=null},__create:function(){var b=a('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');this.__options.arrow||b.find(".tooltipster-box").css("margin",0).end().find(".tooltipster-arrow").hide(),this.__options.minWidth&&b.css("min-width",this.__options.minWidth+"px"),this.__options.maxWidth&&b.css("max-width",this.__options.maxWidth+"px"),this.__instance._$tooltip=b,this.__instance._trigger("created")},__destroy:function(){this.__instance._off("."+self.__namespace)},__optionsFormat:function(){
var b=this;if(b.__options=b.__instance._optionsExtract(k,b.__defaults()),b.__options.position&&(b.__options.side=b.__options.position),"object"!=typeof b.__options.distance&&(b.__options.distance=[b.__options.distance]),b.__options.distance.length<4&&(void 0===b.__options.distance[1]&&(b.__options.distance[1]=b.__options.distance[0]),void 0===b.__options.distance[2]&&(b.__options.distance[2]=b.__options.distance[0]),void 0===b.__options.distance[3]&&(b.__options.distance[3]=b.__options.distance[1]),b.__options.distance={top:b.__options.distance[0],right:b.__options.distance[1],bottom:b.__options.distance[2],left:b.__options.distance[3]}),"string"==typeof b.__options.side){var c={top:"bottom",right:"left",bottom:"top",left:"right"};b.__options.side=[b.__options.side,c[b.__options.side]],"left"==b.__options.side[0]||"right"==b.__options.side[0]?b.__options.side.push("top","bottom"):b.__options.side.push("right","left")}6===a.tooltipster._env.IE&&b.__options.arrow!==!0&&(b.__options.arrow=!1)},__reposition:function(b,c){var d,e=this,f=e.__targetFind(c),g=[];e.__instance._$tooltip.detach();var h=e.__instance._$tooltip.clone(),i=a.tooltipster._getRuler(h),j=!1,k=e.__instance.option("animation");switch(k&&h.removeClass("tooltipster-"+k),a.each(["window","document"],function(d,k){var l=null;if(e.__instance._trigger({container:k,helper:c,satisfied:j,takeTest:function(a){l=a},results:g,type:"positionTest"}),1==l||0!=l&&0==j&&("window"!=k||e.__options.viewportAware))for(var d=0;d<e.__options.side.length;d++){var m={horizontal:0,vertical:0},n=e.__options.side[d];"top"==n||"bottom"==n?m.vertical=e.__options.distance[n]:m.horizontal=e.__options.distance[n],e.__sideChange(h,n),a.each(["natural","constrained"],function(a,d){if(l=null,e.__instance._trigger({container:k,event:b,helper:c,mode:d,results:g,satisfied:j,side:n,takeTest:function(a){l=a},type:"positionTest"}),1==l||0!=l&&0==j){var h={container:k,distance:m,fits:null,mode:d,outerSize:null,side:n,size:null,target:f[n],whole:null},o="natural"==d?i.free():i.constrain(c.geo.available[k][n].width-m.horizontal,c.geo.available[k][n].height-m.vertical),p=o.measure();if(h.size=p.size,h.outerSize={height:p.size.height+m.vertical,width:p.size.width+m.horizontal},"natural"==d?c.geo.available[k][n].width>=h.outerSize.width&&c.geo.available[k][n].height>=h.outerSize.height?h.fits=!0:h.fits=!1:h.fits=p.fits,"window"==k&&(h.fits?"top"==n||"bottom"==n?h.whole=c.geo.origin.windowOffset.right>=e.__options.minIntersection&&c.geo.window.size.width-c.geo.origin.windowOffset.left>=e.__options.minIntersection:h.whole=c.geo.origin.windowOffset.bottom>=e.__options.minIntersection&&c.geo.window.size.height-c.geo.origin.windowOffset.top>=e.__options.minIntersection:h.whole=!1),g.push(h),h.whole)j=!0;else if("natural"==h.mode&&(h.fits||h.size.width<=c.geo.available[k][n].width))return!1}})}}),e.__instance._trigger({edit:function(a){g=a},event:b,helper:c,results:g,type:"positionTested"}),g.sort(function(a,b){if(a.whole&&!b.whole)return-1;if(!a.whole&&b.whole)return 1;if(a.whole&&b.whole){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}if(a.fits&&!b.fits)return-1;if(!a.fits&&b.fits)return 1;if(a.fits&&b.fits){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}return"document"==a.container&&"bottom"==a.side&&"natural"==a.mode?-1:1}),d=g[0],d.coord={},d.side){case"left":case"right":d.coord.top=Math.floor(d.target-d.size.height/2);break;case"bottom":case"top":d.coord.left=Math.floor(d.target-d.size.width/2)}switch(d.side){case"left":d.coord.left=c.geo.origin.windowOffset.left-d.outerSize.width;break;case"right":d.coord.left=c.geo.origin.windowOffset.right+d.distance.horizontal;break;case"top":d.coord.top=c.geo.origin.windowOffset.top-d.outerSize.height;break;case"bottom":d.coord.top=c.geo.origin.windowOffset.bottom+d.distance.vertical}"window"==d.container?"top"==d.side||"bottom"==d.side?d.coord.left<0?c.geo.origin.windowOffset.right-this.__options.minIntersection>=0?d.coord.left=0:d.coord.left=c.geo.origin.windowOffset.right-this.__options.minIntersection-1:d.coord.left>c.geo.window.size.width-d.size.width&&(c.geo.origin.windowOffset.left+this.__options.minIntersection<=c.geo.window.size.width?d.coord.left=c.geo.window.size.width-d.size.width:d.coord.left=c.geo.origin.windowOffset.left+this.__options.minIntersection+1-d.size.width):d.coord.top<0?c.geo.origin.windowOffset.bottom-this.__options.minIntersection>=0?d.coord.top=0:d.coord.top=c.geo.origin.windowOffset.bottom-this.__options.minIntersection-1:d.coord.top>c.geo.window.size.height-d.size.height&&(c.geo.origin.windowOffset.top+this.__options.minIntersection<=c.geo.window.size.height?d.coord.top=c.geo.window.size.height-d.size.height:d.coord.top=c.geo.origin.windowOffset.top+this.__options.minIntersection+1-d.size.height):(d.coord.left>c.geo.window.size.width-d.size.width&&(d.coord.left=c.geo.window.size.width-d.size.width),d.coord.left<0&&(d.coord.left=0)),e.__sideChange(h,d.side),c.tooltipClone=h[0],c.tooltipParent=e.__instance.option("parent").parent[0],c.mode=d.mode,c.whole=d.whole,c.origin=e.__instance._$origin[0],c.tooltip=e.__instance._$tooltip[0],delete d.container,delete d.fits,delete d.mode,delete d.outerSize,delete d.whole,d.distance=d.distance.horizontal||d.distance.vertical;var l=a.extend(!0,{},d);if(e.__instance._trigger({edit:function(a){d=a},event:b,helper:c,position:l,type:"position"}),e.__options.functionPosition){var m=e.__options.functionPosition.call(e,e.__instance,c,l);m&&(d=m)}i.destroy();var n,o;"top"==d.side||"bottom"==d.side?(n={prop:"left",val:d.target-d.coord.left},o=d.size.width-this.__options.minIntersection):(n={prop:"top",val:d.target-d.coord.top},o=d.size.height-this.__options.minIntersection),n.val<this.__options.minIntersection?n.val=this.__options.minIntersection:n.val>o&&(n.val=o);var p;p=c.geo.origin.fixedLineage?c.geo.origin.windowOffset:{left:c.geo.origin.windowOffset.left+c.geo.window.scroll.left,top:c.geo.origin.windowOffset.top+c.geo.window.scroll.top},d.coord={left:p.left+(d.coord.left-c.geo.origin.windowOffset.left),top:p.top+(d.coord.top-c.geo.origin.windowOffset.top)},e.__sideChange(e.__instance._$tooltip,d.side),c.geo.origin.fixedLineage?e.__instance._$tooltip.css("position","fixed"):e.__instance._$tooltip.css("position",""),e.__instance._$tooltip.css({left:d.coord.left,top:d.coord.top,height:d.size.height,width:d.size.width}).find(".tooltipster-arrow").css({left:"",top:""}).css(n.prop,n.val),e.__instance._$tooltip.appendTo(e.__instance.option("parent")),e.__instance._trigger({type:"repositioned",event:b,position:d})},__sideChange:function(a,b){a.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-"+b)},__targetFind:function(a){var b={},c=this.__instance._$origin[0].getClientRects();if(c.length>1){var d=this.__instance._$origin.css("opacity");1==d&&(this.__instance._$origin.css("opacity",.99),c=this.__instance._$origin[0].getClientRects(),this.__instance._$origin.css("opacity",1))}if(c.length<2)b.top=Math.floor(a.geo.origin.windowOffset.left+a.geo.origin.size.width/2),b.bottom=b.top,b.left=Math.floor(a.geo.origin.windowOffset.top+a.geo.origin.size.height/2),b.right=b.left;else{var e=c[0];b.top=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil(c.length/2)-1]:c[0],b.right=Math.floor(e.top+(e.bottom-e.top)/2),e=c[c.length-1],b.bottom=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil((c.length+1)/2)-1]:c[c.length-1],b.left=Math.floor(e.top+(e.bottom-e.top)/2)}return b}}}),a});
/*
NAME: Jet Responsive Megamenu
AUTHOR PAGE: http://codecanyon.net/user/marcoarib
ITEM PAGE: http://codecanyon.net/item/jet-responsive-megamenu/5719593
*/

jQuery.fn.jetmenu = function(options){
	var settings = {
		 indicator	 		:true     			// indicator that indicates a submenu
		,speed	 			:300     			// submenu speed
		,delay				:0					// submenu show delay
		,hideClickOut		:true     			// hide submenus when click outside menu
		,align				:"left"				// menu alignment (left/right)
		,submenuTrigger		:"hover"			// defines if submenu appears after hover/click
	}
	$.extend( settings, options );

	var menu = $(".jetmenu");
	$(menu).prepend("<li class='showhide'><span class='title'>MENU</span><span class='icon'><em></em><em></em><em></em><em></em></span></li>");

	if(settings.indicator == true){
      $(menu).find("a").each(function(){
        if($(this).siblings(".dropdown, .megamenu").length > 0){
          $(this).append("<span class='indicator'>+</span>");
        }
      });
	}

	start();

	$(window).resize(function() {
		if(settings.align == "right"){
			fixSubmenuRight();
		}
		else{
			fixSubmenuLeft();
		}
	});

	function start(){
		bindHover();
		if(settings.align == "right"){
			rightAlignMenu();
		}
		else{
			fixSubmenuLeft();
		}
	}

	function bindHover(){
		if (navigator.userAgent.match(/Mobi/i) || window.navigator.msMaxTouchPoints > 0 || settings.submenuTrigger == "click"){
			$(menu).find("a").on("click touchstart", function(e){
				e.stopPropagation();
				e.preventDefault();
				$(this).parent("li").siblings("li").find(".dropdown, .megamenu").stop(true, true).fadeOut(settings.speed);
				if($(this).siblings(".dropdown, .megamenu").css("display") == "none"){
					$(this).siblings(".dropdown, .megamenu").stop(true, true).delay(settings.delay).fadeIn(settings.speed);
					return false;
				}
				else{
					$(this).siblings(".dropdown, .megamenu").stop(true, true).fadeOut(settings.speed);
					$(this).siblings(".dropdown").find(".dropdown").stop(true, true).fadeOut(settings.speed);
				}
				window.location.href = $(this).attr("href");
			});

			$(menu).find("li").bind("mouseleave", function(){
				$(this).children(".dropdown, .megamenu").stop(true, true).fadeOut(settings.speed);
			});

			if(settings.hideClickOut == true){
				$(document).bind("click.menu touchstart.menu", function(ev){
					if($(ev.target).closest(menu).length == 0){
						$(menu).find(".dropdown, .megamenu").fadeOut(settings.speed);
					}
				});
			}
		}
		else{
			var delay = {
			    over: function () {
                  $(this).children(".dropdown, .megamenu").stop(true, true).delay(settings.delay).fadeIn(settings.speed);
			    },
			    sensitivity:7,
			    interval: 0,
			    timeout: 150,
			    out: function () {
                  $(this).children(".dropdown, .megamenu").stop(true, true).fadeOut(settings.speed);
			    }
			};
			$(menu).find("li").hoverIntent(delay);
		}
	}

	function rightAlignMenu(){
		$(menu).children("li").addClass("jsright");
		var items = $(menu).children("li");
		$(menu).children("li:not(.showhide)").detach();
		for(var i = items.length; i >= 1; i--){
			$(menu).append(items[i]);
		}
		fixSubmenuRight();
	}

	function fixSubmenuRight(){
		$(menu).children("li").removeClass("last");
		var items = $(menu).children("li");
		for(var i = 1; i <= items.length; i++){
			if($(items[i]).children(".dropdown, .megamenu").length > 0){
				var lastItemsWidth = 0;
				for(var y = 1; y <= i; y++){
					lastItemsWidth = lastItemsWidth + $(items[y]).outerWidth();
				}
				if($(items[i]).children(".dropdown, .megamenu").outerWidth() > lastItemsWidth){
					$(items[i]).addClass("last");
				}
			}
		}
	}

	function fixSubmenuLeft(){
		$(menu).children("li").removeClass("fix-sub");
		var items = $(menu).children("li");
		var menuWidth = $(menu).outerWidth();
		var itemsWidth = 0;
		for(var i = 1; i <= items.length; i++){
			if($(items[i]).children(".dropdown, .megamenu").length > 0){
				if($(items[i]).position().left + $(items[i]).children(".dropdown, .megamenu").outerWidth() > menuWidth){
					$(items[i]).addClass("fix-sub");
				}
			}
		}
	}
}
/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
					attributes.path ? '; path=' + attributes.path : '',
					attributes.domain ? '; domain=' + attributes.domain : '',
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/*!
 * parallax-scroll
 */
$(function() {
    ParallaxScroll.init();
});

var ParallaxScroll = {
    /* PUBLIC VARIABLES */
    showLogs: false,
    round: 1000,

    /* PUBLIC FUNCTIONS */
    init: function() {
        this._log("init");
        if (this._inited) {
            this._log("Already Inited");
            this._inited = true;
            return;
        }
        this._requestAnimationFrame = (function(){
          return  window.requestAnimationFrame       ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame    ||
                  window.oRequestAnimationFrame      ||
                  window.msRequestAnimationFrame     ||
                  function(/* function */ callback, /* DOMElement */ element){
                      window.setTimeout(callback, 1000 / 60);
                  };
        })();
        this._onScroll(true);
    },

    /* PRIVATE VARIABLES */
    _inited: false,
    _properties: ['x', 'y', 'z', 'rotateX', 'rotateY', 'rotateZ', 'scaleX', 'scaleY', 'scaleZ', 'scale'],
    _requestAnimationFrame:null,

    /* PRIVATE FUNCTIONS */
    _log: function(message) {
        if (this.showLogs) console.log("Parallax Scroll / " + message);
    },
    _onScroll: function(noSmooth) {
        var scroll = $(document).scrollTop();
        var windowHeight = $(window).height();
        this._log("onScroll " + scroll);
        $("[data-parallax]").each($.proxy(function(index, el) {
            var $el = $(el);
            var properties = [];
            var applyProperties = false;
            var style = $el.data("style");
            if (style == undefined) {
                style = $el.attr("style") || "";
                $el.data("style", style);
            }
            var datas = [$el.data("parallax")];
            var iData;
            for(iData = 2; ; iData++) {
                if($el.data("parallax"+iData)) {
                    datas.push($el.data("parallax-"+iData));
                }
                else {
                    break;
                }
            }
            var datasLength = datas.length;
            for(iData = 0; iData < datasLength; iData ++) {
                var data = datas[iData];
                var scrollFrom = data["from-scroll"];
                if (scrollFrom == undefined) scrollFrom = Math.max(0, $(el).offset().top - windowHeight);
                scrollFrom = scrollFrom | 0;
                var scrollDistance = data["distance"];
                var scrollTo = data["to-scroll"];
                if (scrollDistance == undefined && scrollTo == undefined) scrollDistance = windowHeight;
                scrollDistance = Math.max(scrollDistance | 0, 1);
                var easing = data["easing"];
                var easingReturn = data["easing-return"];
                if (easing == undefined || !$.easing|| !$.easing[easing]) easing = null;
                if (easingReturn == undefined || !$.easing|| !$.easing[easingReturn]) easingReturn = easing;
                if (easing) {
                    var totalTime = data["duration"];
                    if (totalTime == undefined) totalTime = scrollDistance;
                    totalTime = Math.max(totalTime | 0, 1);
                    var totalTimeReturn = data["duration-return"];
                    if (totalTimeReturn == undefined) totalTimeReturn = totalTime;
                    scrollDistance = 1;
                    var currentTime = $el.data("current-time");
                    if(currentTime == undefined) currentTime = 0;
                }
                if (scrollTo == undefined) scrollTo = scrollFrom + scrollDistance;
                scrollTo = scrollTo | 0;
                var smoothness = data["smoothness"];
                if (smoothness == undefined) smoothness = 30;
                smoothness = smoothness | 0;
                if (noSmooth || smoothness == 0) smoothness = 1;
                smoothness = smoothness | 0;
                var scrollCurrent = scroll;
                scrollCurrent = Math.max(scrollCurrent, scrollFrom);
                scrollCurrent = Math.min(scrollCurrent, scrollTo);
                if(easing) {
                    if($el.data("sens") == undefined) $el.data("sens", "back");
                    if(scrollCurrent>scrollFrom) {
                        if($el.data("sens") == "back") {
                            currentTime = 1;
                            $el.data("sens", "go");
                        }
                        else {
                            currentTime++;
                        }
                    }
                    if(scrollCurrent<scrollTo) {
                        if($el.data("sens") == "go") {
                            currentTime = 1;
                            $el.data("sens", "back");
                        }
                        else {
                            currentTime++;
                        }
                    }
                    if(noSmooth) currentTime = totalTime;
                    $el.data("current-time", currentTime);
                }
                this._properties.map($.proxy(function(prop) {
                    var defaultProp = 0;
                    var to = data[prop];
                    if (to == undefined) return;
                    if(prop=="scale" || prop=="scaleX" || prop=="scaleY" || prop=="scaleZ" ) {
                        defaultProp = 1;
                    }
                    else {
                        to = to | 0;
                    }
                    var prev = $el.data("_" + prop);
                    if (prev == undefined) prev = defaultProp;
                    var next = ((to-defaultProp) * ((scrollCurrent - scrollFrom) / (scrollTo - scrollFrom))) + defaultProp;
                    var val = prev + (next - prev) / smoothness;
                    if(easing && currentTime>0 && currentTime<=totalTime) {
                        var from = defaultProp;
                        if($el.data("sens") == "back") {
                            from = to;
                            to = -to;
                            easing = easingReturn;
                            totalTime = totalTimeReturn;
                        }
                        val = $.easing[easing](null, currentTime, from, to, totalTime);
                    }
                    val = Math.ceil(val * this.round) / this.round;
                    if(val==prev&&next==to) val = to;
                    if(!properties[prop]) properties[prop] = 0;
                    properties[prop] += val;
                    if (prev != properties[prop]) {
                        $el.data("_" + prop, properties[prop]);
                        applyProperties = true;
                    }
                }, this));
            }
            if (applyProperties) {
                if (properties["z"] != undefined) {
                    var perspective = data["perspective"];
                    if (perspective == undefined) perspective = 800;
                    var $parent = $el.parent();
                    if(!$parent.data("style")) $parent.data("style", $parent.attr("style") || "");
                    $parent.attr("style", "perspective:" + perspective + "px; -webkit-perspective:" + perspective + "px; "+ $parent.data("style"));
                }
                if(properties["scaleX"] == undefined) properties["scaleX"] = 1;
                if(properties["scaleY"] == undefined) properties["scaleY"] = 1;
                if(properties["scaleZ"] == undefined) properties["scaleZ"] = 1;
                if (properties["scale"] != undefined) {
                    properties["scaleX"] *= properties["scale"];
                    properties["scaleY"] *= properties["scale"];
                    properties["scaleZ"] *= properties["scale"];
                }
                var translate3d = "translate3d(" + (properties["x"] ? properties["x"] : 0) + "px, " + (properties["y"] ? properties["y"] : 0) + "px, " + (properties["z"] ? properties["z"] : 0) + "px)";
                var rotate3d = "rotateX(" + (properties["rotateX"] ? properties["rotateX"] : 0) + "deg) rotateY(" + (properties["rotateY"] ? properties["rotateY"] : 0) + "deg) rotateZ(" + (properties["rotateZ"] ? properties["rotateZ"] : 0) + "deg)";
                var scale3d = "scaleX(" + properties["scaleX"] + ") scaleY(" + properties["scaleY"] + ") scaleZ(" + properties["scaleZ"] + ")";
                var cssTransform = translate3d + " " + rotate3d + " " + scale3d + ";";
                this._log(cssTransform);
                $el.attr("style", "transform:" + cssTransform + " -webkit-transform:" + cssTransform + " " + style);
            }
        }, this));
        if(window.requestAnimationFrame) {
            window.requestAnimationFrame($.proxy(this._onScroll, this, false));
        }
        else {
            this._requestAnimationFrame($.proxy(this._onScroll, this, false));
        }
    }
};

/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */

/* hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 */

;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (jQuery && !jQuery.fn.hoverIntent) {
        factory(jQuery);
    }
})(function($) {
    'use strict';

    // default configuration values
    var _cfg = {
        interval: 100,
        sensitivity: 6,
        timeout: 0
    };

    // counter used to generate an ID for each instance
    var INSTANCE_COUNT = 0;

    // current X and Y position of mouse, updated during mousemove tracking (shared across instances)
    var cX, cY;

    // saves the current pointer position coordinates based on the given mousemove event
    var track = function(ev) {
        cX = ev.pageX;
        cY = ev.pageY;
    };

    // compares current and previous mouse positions
    var compare = function(ev,$el,s,cfg) {
        // compare mouse positions to see if pointer has slowed enough to trigger `over` function
        if ( Math.sqrt( (s.pX-cX)*(s.pX-cX) + (s.pY-cY)*(s.pY-cY) ) < cfg.sensitivity ) {
            $el.off(s.event,track);
            delete s.timeoutId;
            // set hoverIntent state as active for this element (permits `out` handler to trigger)
            s.isActive = true;
            // overwrite old mouseenter event coordinates with most recent pointer position
            ev.pageX = cX; ev.pageY = cY;
            // clear coordinate data from state object
            delete s.pX; delete s.pY;
            return cfg.over.apply($el[0],[ev]);
        } else {
            // set previous coordinates for next comparison
            s.pX = cX; s.pY = cY;
            // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
            s.timeoutId = setTimeout( function(){compare(ev, $el, s, cfg);} , cfg.interval );
        }
    };

    // triggers given `out` function at configured `timeout` after a mouseleave and clears state
    var delay = function(ev,$el,s,out) {
        delete $el.data('hoverIntent')[s.id];
        return out.apply($el[0],[ev]);
    };

    $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {
        // instance ID, used as a key to store and retrieve state information on an element
        var instanceId = INSTANCE_COUNT++;

        // extend the default configuration and parse parameters
        var cfg = $.extend({}, _cfg);
        if ( $.isPlainObject(handlerIn) ) {
            cfg = $.extend(cfg, handlerIn);
            if ( !$.isFunction(cfg.out) ) {
                cfg.out = cfg.over;
            }
        } else if ( $.isFunction(handlerOut) ) {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
        } else {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
        }

        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // cloned event to pass to handlers (copy required for event object to be passed in IE)
            var ev = $.extend({},e);

            // the current target of the mouse event, wrapped in a jQuery object
            var $el = $(this);

            // read hoverIntent data from element (or initialize if not present)
            var hoverIntentData = $el.data('hoverIntent');
            if (!hoverIntentData) { $el.data('hoverIntent', (hoverIntentData = {})); }

            // read per-instance state from element (or initialize if not present)
            var state = hoverIntentData[instanceId];
            if (!state) { hoverIntentData[instanceId] = state = { id: instanceId }; }

            // state properties:
            // id = instance ID, used to clean up data
            // timeoutId = timeout ID, reused for tracking mouse position and delaying "out" handler
            // isActive = plugin state, true after `over` is called just until `out` is called
            // pX, pY = previously-measured pointer coordinates, updated at each polling interval
            // event = string representing the namespaced event used for mouse tracking

            // clear any existing timeout
            if (state.timeoutId) { state.timeoutId = clearTimeout(state.timeoutId); }

            // namespaced event used to register and unregister mousemove tracking
            var mousemove = state.event = 'mousemove.hoverIntent.hoverIntent'+instanceId;

            // handle the event, based on its type
            if (e.type === 'mouseenter') {
                // do nothing if already active
                if (state.isActive) { return; }
                // set "previous" X and Y position based on initial entry point
                state.pX = ev.pageX; state.pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $el.off(mousemove,track).on(mousemove,track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                state.timeoutId = setTimeout( function(){compare(ev,$el,state,cfg);} , cfg.interval );
            } else { // "mouseleave"
                // do nothing if not already active
                if (!state.isActive) { return; }
                // unbind expensive mousemove event
                $el.off(mousemove,track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                state.timeoutId = setTimeout( function(){delay(ev,$el,state,cfg.out);} , cfg.timeout );
            }
        };

        // listen for mouseenter and mouseleave
        return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
    };
});

/*!
 * jQuery Pretty Dropdowns Plugin v4.17.0 by T. H. Doan (https://thdoan.github.io/pretty-dropdowns/)
 *
 * jQuery Pretty Dropdowns by T. H. Doan is licensed under the MIT License.
 * Read a copy of the license in the LICENSE file or at https://choosealicense.com/licenses/mit/
 */

(function($) {
  $.fn.prettyDropdown = function(oOptions) {

    // Default options
    oOptions = $.extend({
      classic: false,
      customClass: 'arrow',
      width: null,
      height: 50,
      hoverIntent: 200,
      multiDelimiter: '; ',
      multiVerbosity: 99,
      selectedMarker: '&#10003;',
      afterLoad: function(){}
    }, oOptions);

    oOptions.selectedMarker = '<span aria-hidden="true" class="checked"> ' + oOptions.selectedMarker + '</span>';
    // Validate options
    if (isNaN(oOptions.width) && !/^\d+%$/.test(oOptions.width)) oOptions.width = null;
    if (isNaN(oOptions.height)) oOptions.height = 50;
    else if (oOptions.height<8) oOptions.height = 8;
    if (isNaN(oOptions.hoverIntent)) oOptions.hoverIntent = 200;
    if (isNaN(oOptions.multiVerbosity)) oOptions.multiVerbosity = 99;

    // Translatable strings
    var MULTI_NONE = 'None selected',
      MULTI_PREFIX = 'Selected: ',
      MULTI_POSTFIX = ' selected';

    // Globals
    var $current,
      aKeys = [
        '0','1','2','3','4','5','6','7','8','9',,,,,,,,
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
      ],
      nCount,
      nHoverIndex,
      nLastIndex,
      nTimer,
      nTimestamp,

      // Initiate pretty drop-downs
      init = function(elSel) {
        var $select = $(elSel),
          nSize = elSel.size,
          sId = elSel.name || elSel.id || '',
          sLabelId;
        // Exit if widget has already been initiated
        if ($select.data('loaded')) return;
        // Remove 'size' attribute to it doesn't affect vertical alignment
        $select.data('size', nSize).removeAttr('size');
        // Set <select> height to reserve space for <div> container
        $select.css('visibility', 'hidden').outerHeight(oOptions.height);
        nTimestamp = performance.now()*100000000000000;
        // Test whether to add 'aria-labelledby'
        if (elSel.id) {
          // Look for <label>
          var $label = $('label[for=' + elSel.id + ']');
          if ($label.length) {
            // Add 'id' to <label> if necessary
            if ($label.attr('id') && !/^menu\d{13,}$/.test($label.attr('id'))) sLabelId = $label.attr('id');
            else $label.attr('id', (sLabelId = 'menu' + nTimestamp));
          }
        }
        nCount = 0;
        var $items = $('optgroup, option', $select),
          $selected = $items.filter(':selected'),
          bMultiple = elSel.multiple,
          // Height - 2px for borders
          sHtml = '<ul' + (elSel.disabled ? '' : ' tabindex="0"') + ' role="listbox"'
            + (elSel.title ? ' title="' + elSel.title + '" aria-label="' + elSel.title + '"' : '')
            + (sLabelId ? ' aria-labelledby="' + sLabelId + '"' : '')
            + ' aria-activedescendant="item' + nTimestamp + '-1" aria-expanded="false"'
            + ' style="max-height:' + (oOptions.height-2) + 'px;margin:'
            // NOTE: $select.css('margin') returns an empty string in Firefox, so we have to get
            // each margin individually. See https://github.com/jquery/jquery/issues/3383
            + $select.css('margin-top') + ' '
            + $select.css('margin-right') + ' '
            + $select.css('margin-bottom') + ' '
            + $select.css('margin-left') + ';">';
        if (bMultiple) {
          sHtml += renderItem(null, 'selected');
          $items.each(function() {
            if (this.selected) {
              sHtml += renderItem(this, '', true)
            } else {
              sHtml += renderItem(this);
            }
          });
        } else {
          if (oOptions.classic) {
            $items.each(function() {
              sHtml += renderItem(this);
            });
          } else {
            sHtml += renderItem($selected[0], 'selected');
            $items.filter(':not(:selected)').each(function() {
              sHtml += renderItem(this);
            });
          }
        }
        sHtml += '</ul>';
        $select.wrap('<div ' + (sId ? 'id="prettydropdown-' + sId + '" ' : '')
          + 'class="prettydropdown '
          + (oOptions.classic ? 'classic ' : '')
          + (elSel.disabled ? 'disabled ' : '')
          + (bMultiple ? 'multiple ' : '')
          + oOptions.customClass + ' loading"'
          // NOTE: For some reason, the container height is larger by 1px if the <select> has the
          // 'multiple' attribute or 'size' attribute with a value larger than 1. To fix this, we
          // have to inline the height.
          + ((bMultiple || nSize>1) ? ' style="height:' + oOptions.height + 'px;"' : '')
          +'></div>').before(sHtml).data('loaded', true);
        var $dropdown = $select.parent().children('ul'),
          nWidth = $dropdown.outerWidth(true),
          nOuterWidth;
        $items = $dropdown.children();
        // Update default selected values for multi-select menu
        if (bMultiple) updateSelected($dropdown);
        else if (oOptions.classic) $('[data-value="' + $selected.val() + '"]', $dropdown).addClass('selected').append(oOptions.selectedMarker);
        // Calculate width if initially hidden
        if ($dropdown.width()<=0) {
          var $clone = $dropdown.parent().clone().css({
              position: 'absolute',
              top: '-100%'
            });
          $('body').append($clone);
          nWidth = $clone.children('ul').outerWidth(true);
          $('li', $clone).width(nWidth);
          nOuterWidth = $clone.children('ul').outerWidth(true);
          $clone.remove();
        }
        // Set dropdown width and event handler
        // NOTE: Setting width using width(), then css() because width() only can return a float,
        // which can result in a missing right border when there is a scrollbar.
        $items.width(nWidth).css('width', $items.css('width'));
        if (oOptions.width) {
          $dropdown.parent().css('min-width', $items.css('width'));
          $dropdown.css('width', '100%');
          $items.css('width', '100%');
        }
        $items.click(function() {
          var $li = $(this),
            $selected = $dropdown.children('.selected');
          // Ignore disabled menu
          if ($dropdown.parent().hasClass('disabled')) return;
          // Only update if not disabled, not a label, and a different value selected
          if ($dropdown.hasClass('active') && !$li.hasClass('disabled') && !$li.hasClass('label') && $li.data('value')!==$selected.data('value')) {
            // Select highlighted item
            if (bMultiple) {
              if ($li.children('span.checked').length) $li.children('span.checked').remove();
              else $li.append(oOptions.selectedMarker);
              // Sync <select> element
              $dropdown.children(':not(.selected)').each(function(nIndex) {
                $('optgroup, option', $select).eq(nIndex).prop('selected', $(this).children('span.checked').length>0);
              });
              // Update selected values for multi-select menu
              updateSelected($dropdown);
            } else {
              $selected.removeClass('selected').children('span.checked').remove();
              $li.addClass('selected').append(oOptions.selectedMarker);
              if (!oOptions.classic) $dropdown.prepend($li);
              $dropdown.removeClass('reverse').attr('aria-activedescendant', $li.attr('id'));
              if ($selected.data('group') && !oOptions.classic) $dropdown.children('.label').filter(function() {
                return $(this).text()===$selected.data('group');
              }).after($selected);
              // Sync <select> element
              $('optgroup, option', $select).filter(function() {
                // <option>: this.value = this.text, $li.data('value') = $li.contents()
                // <option value="">: this.value = "", $li.data('value') = undefined
                return (this.value+'|'+this.text)===($li.data('value')||'')+'|'+$li.contents().filter(function() {
                    // Filter out selected marker
                    return this.nodeType===3;
                  }).text();
              }).prop('selected', true);
            }
            $select.trigger('change');
          }
          if ($li.hasClass('selected') || !bMultiple) {
            $dropdown.toggleClass('active');
            $dropdown.attr('aria-expanded', $dropdown.hasClass('active'));
          }
          // Try to keep drop-down menu within viewport
          if ($dropdown.hasClass('active')) {
            // Close any other open menus
            if ($('.prettydropdown > ul.active').length>1) resetDropdown($('.prettydropdown > ul.active').not($dropdown)[0]);
            var nWinHeight = window.innerHeight,
              nMaxHeight,
              nOffsetTop = $dropdown.offset().top,
              nScrollTop = $(document).scrollTop(),
              nDropdownHeight = $dropdown.outerHeight();
            if (nSize) {
              nMaxHeight = nSize*(oOptions.height-2);
              if (nMaxHeight<nDropdownHeight-2) nDropdownHeight = nMaxHeight+2;
            }
            var nDropdownBottom = nOffsetTop-nScrollTop+nDropdownHeight;
            if (nDropdownBottom>nWinHeight) {
              // Expand to direction that has the most space
              if (nOffsetTop-nScrollTop>nWinHeight-(nOffsetTop-nScrollTop+oOptions.height)) {
                $dropdown.addClass('reverse');
                if (!oOptions.classic) $dropdown.append($selected);
                if (nOffsetTop-nScrollTop+oOptions.height<nDropdownHeight) {
                  $dropdown.outerHeight(nOffsetTop-nScrollTop+oOptions.height);
                  // Ensure the selected item is in view
                  $dropdown.scrollTop(nDropdownHeight);
                }
              } else {
                $dropdown.height($dropdown.height()-(nDropdownBottom-nWinHeight));
              }
            }
            if (nMaxHeight && nMaxHeight<$dropdown.height()) $dropdown.css('height', nMaxHeight + 'px');
            // Ensure the selected item is in view
            if (oOptions.classic) $dropdown.scrollTop($selected.index()*(oOptions.height-2));
          } else {
            $dropdown.data('clicked', true);
            resetDropdown($dropdown[0]);
          }
        });
        $dropdown.on({
          focusin: function() {
            // Unregister any existing handlers first to prevent duplicate firings
            $(window).off('keydown', handleKeypress).on('keydown', handleKeypress);
          },
          focusout: function() {
            $(window).off('keydown', handleKeypress);
          },
          mouseenter: function() {
            $dropdown.data('hover', true);
          },
          mouseleave: resetDropdown,
          mousemove:  hoverDropdownItem
        });
        if (oOptions.hoverIntent<0) {
          $(document).click(function(e) {
            if ($dropdown.data('hover') && !$dropdown[0].contains(e.target)) resetDropdown($dropdown[0]);
          });
        }
        // Put focus on menu when user clicks on label
        if (sLabelId) $('#' + sLabelId).off('click', handleFocus).click(handleFocus);
        // Done with everything!
        $dropdown.parent().width(oOptions.width||nOuterWidth||$dropdown.outerWidth(true)).removeClass('loading');
        oOptions.afterLoad();
      },

      // Manage widget focusing
      handleFocus = function(e) {
        $('ul[aria-labelledby=' + e.target.id + ']').focus();
      },

      // Manage keyboard navigation
      handleKeypress = function(e) {
        var $dropdown = $('.prettydropdown > ul.active, .prettydropdown > ul:focus');
        if (!$dropdown.length) return;
        if (e.which===9) { // Tab
          resetDropdown($dropdown[0]);
          return;
        } else {
          // Intercept non-Tab keys only
          e.preventDefault();
          e.stopPropagation();
        }
        var $items = $dropdown.children(),
          bOpen = $dropdown.hasClass('active'),
          nItemsHeight = $dropdown.height()/(oOptions.height-2),
          nItemsPerPage = nItemsHeight%1<0.5 ? Math.floor(nItemsHeight) : Math.ceil(nItemsHeight),
          sKey;
        nHoverIndex = Math.max(0, $dropdown.children('.hover').index());
        nLastIndex = $items.length-1;
        $current = $items.eq(nHoverIndex);
        $dropdown.data('lastKeypress', +new Date());
        switch (e.which) {
          case 13: // Enter
            if (!bOpen) {
              $current = $items.filter('.selected');
              toggleHover($current, 1);
            }
            $current.click();
            break;
          case 27: // Esc
            if (bOpen) resetDropdown($dropdown[0]);
            break;
          case 32: // Space
            if (bOpen) {
              sKey = ' ';
            } else {
              $current = $items.filter('.selected');
              toggleHover($current, 1);
              $current.click();
            }
            break;
          case 33: // Page Up
            if (bOpen) {
              toggleHover($current, 0);
              toggleHover($items.eq(Math.max(nHoverIndex-nItemsPerPage-1, 0)), 1);
            }
            break;
          case 34: // Page Down
            if (bOpen) {
              toggleHover($current, 0);
              toggleHover($items.eq(Math.min(nHoverIndex+nItemsPerPage-1, nLastIndex)), 1);
            }
            break;
          case 35: // End
            if (bOpen) {
              toggleHover($current, 0);
              toggleHover($items.eq(nLastIndex), 1);
            }
            break;
          case 36: // Home
            if (bOpen) {
              toggleHover($current, 0);
              toggleHover($items.eq(0), 1);
            }
            break;
          case 38: // Up
            if (bOpen) {
              toggleHover($current, 0);
              // If not already key-navigated or first item is selected, cycle to the last item; or
              // else select the previous item
              toggleHover(nHoverIndex ? $items.eq(nHoverIndex-1) : $items.eq(nLastIndex), 1);
            }
            break;
          case 40: // Down
            if (bOpen) {
              toggleHover($current, 0);
              // If last item is selected, cycle to the first item; or else select the next item
              toggleHover(nHoverIndex===nLastIndex ? $items.eq(0) : $items.eq(nHoverIndex+1), 1);
            }
            break;
          default:
            if (bOpen) sKey = aKeys[e.which-48];
        }
        if (sKey) { // Alphanumeric key pressed
          clearTimeout(nTimer);
          $dropdown.data('keysPressed', $dropdown.data('keysPressed')===undefined ? sKey : $dropdown.data('keysPressed') + sKey);
          nTimer = setTimeout(function() {
            $dropdown.removeData('keysPressed');
            // NOTE: Windows keyboard repeat delay is 250-1000 ms. See
            // https://technet.microsoft.com/en-us/library/cc978658.aspx
          }, 300);
          // Build index of matches
          var aMatches = [],
            nCurrentIndex = $current.index();
          $items.each(function(nIndex) {
            if ($(this).text().toLowerCase().indexOf($dropdown.data('keysPressed'))===0) aMatches.push(nIndex);
          });
          if (aMatches.length) {
            // Cycle through items matching key(s) pressed
            for (var i=0; i<aMatches.length; ++i) {
              if (aMatches[i]>nCurrentIndex) {
                toggleHover($items, 0);
                toggleHover($items.eq(aMatches[i]), 1);
                break;
              }
              if (i===aMatches.length-1) {
                toggleHover($items, 0);
                toggleHover($items.eq(aMatches[0]), 1);
              }
            }
          }
        }
      },

      // Highlight menu item
      hoverDropdownItem = function(e) {
        var $dropdown = $(e.currentTarget);
        if (e.target.nodeName!=='LI' || !$dropdown.hasClass('active') || new Date()-$dropdown.data('lastKeypress')<200) return;
        toggleHover($dropdown.children(), 0, 1);
        toggleHover($(e.target), 1, 1);
      },

      // Construct menu item
      // elOpt is null for first item in multi-select menus
      renderItem = function(elOpt, sClass, bSelected) {
        var sGroup = '',
          sText = '',
          sTitle;
        sClass = sClass || '';
        if (elOpt) {
          switch (elOpt.nodeName) {
            case 'OPTION':
              if (elOpt.parentNode.nodeName==='OPTGROUP') sGroup = elOpt.parentNode.getAttribute('label');
              sText = (elOpt.getAttribute('data-prefix') || '') + elOpt.text + (elOpt.getAttribute('data-suffix') || '');
              break;
            case 'OPTGROUP':
              sClass += ' label';
              sText = (elOpt.getAttribute('data-prefix') || '') + elOpt.getAttribute('label') + (elOpt.getAttribute('data-suffix') || '');
              break;
          }
          if (elOpt.disabled || (sGroup && elOpt.parentNode.disabled)) sClass += ' disabled';
          sTitle = elOpt.title;
          if (sGroup && !sTitle) sTitle = elOpt.parentNode.title;
        }
        ++nCount;
        return '<li id="item' + nTimestamp + '-' + nCount + '"'
          + (sGroup ? ' data-group="' + sGroup + '"' : '')
          + (elOpt && (elOpt.value||oOptions.classic) ? ' data-value="' + elOpt.value + '"' : '')
          + (elOpt && elOpt.nodeName==='OPTION' ? ' role="option"' : '')
          + (sTitle ? ' title="' + sTitle + '" aria-label="' + sTitle + '"' : '')
          + (sClass ? ' class="' + $.trim(sClass) + '"' : '')
          + ((oOptions.height!==50) ? ' style="height:' + (oOptions.height-2)
          + 'px;line-height:' + (oOptions.height-4) + 'px;"' : '') + '>' + sText
          + ((bSelected || sClass==='selected') ? oOptions.selectedMarker : '') + '</li>';
      },

      // Reset menu state
      // @param o Event or Element object
      resetDropdown = function(o) {
        if (oOptions.hoverIntent<0 && o.type==='mouseleave') return;
        var $dropdown = $(o.currentTarget||o);
        $dropdown.data('hover', false);
        clearTimeout(nTimer);
        nTimer = setTimeout(function() {
          if ($dropdown.data('hover')) return;
          if ($dropdown.hasClass('reverse') && !oOptions.classic) $dropdown.prepend($dropdown.children(':last-child'));
          $dropdown.removeClass('active reverse').removeData('clicked').attr('aria-expanded', 'false').css('height', '');
          $dropdown.children().removeClass('hover nohover');
          // Update focus for NVDA screen readers
          $dropdown.attr('aria-activedescendant', $dropdown.children('.selected').attr('id'));
        }, (o.type==='mouseleave' && !$dropdown.data('clicked')) ? oOptions.hoverIntent : 0);
      },

      // Set menu item hover state
      // bNoScroll set on hoverDropdownItem()
      toggleHover = function($li, bOn, bNoScroll) {
        if (bOn) {
          var $dropdown = $li.parent();
          $li.removeClass('nohover').addClass('hover');
          // Update focus for NVDA screen readers
          $dropdown.attr('aria-activedescendant', $li.attr('id'));
          if ($li.length===1 && $current && !bNoScroll) {
            // Ensure items are always in view
            var nDropdownHeight = $dropdown.outerHeight(),
              nItemOffset = $li.offset().top-$dropdown.offset().top-1; // -1px for top border
            if ($li.index()===0) {
              $dropdown.scrollTop(0);
            } else if ($li.index()===nLastIndex) {
              $dropdown.scrollTop($dropdown.children().length*oOptions.height);
            } else {
              if (nItemOffset+oOptions.height>nDropdownHeight) $dropdown.scrollTop($dropdown.scrollTop()+oOptions.height+nItemOffset-nDropdownHeight);
              else if (nItemOffset<0) $dropdown.scrollTop($dropdown.scrollTop()+nItemOffset);
            }
          }
        } else {
          $li.removeClass('hover').addClass('nohover');
        }
      },

      // Update selected values for multi-select menu
      updateSelected = function($dropdown) {
        var $select = $dropdown.parent().children('select'),
          aSelected = $('option', $select).map(function() {
            if (this.selected) return this.text;
          }).get(),
          sSelected;
        if (oOptions.multiVerbosity>=aSelected.length) sSelected = aSelected.join(oOptions.multiDelimiter) || MULTI_NONE;
        else sSelected = aSelected.length + '/' + $('option', $select).length + MULTI_POSTFIX;
        if (sSelected) {
          var sTitle = ($select.attr('title') ? $select.attr('title') : '') + (aSelected.length ? '\n' + MULTI_PREFIX + aSelected.join(oOptions.multiDelimiter) : '');
          $dropdown.children('.selected').text(sSelected);
          $dropdown.attr({
            'title': sTitle,
            'aria-label': sTitle
          });
        } else {
          $dropdown.children('.selected').empty();
          $dropdown.attr({
            'title': $select.attr('title'),
            'aria-label': $select.attr('title')
          });
        }
      };

    /**
     * Public Functions
     */

    // Resync the menu with <select> to reflect state changes
    this.refresh = function(oOptions) {
      return this.each(function() {
        var $select = $(this);
        $select.prevAll('ul').remove();
        $select.unwrap().data('loaded', false);
        this.size = $select.data('size');
        init(this);
      });
    };

    return this.each(function() {
      init(this);
    });

  };
}(jQuery));


/**********************
***********************
SPRITESPIN 4.0.11
***********************
**********************/

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.SpriteSpin = {})));
}(this, (function (exports) { 'use strict';

/**
 * @internal
 */
var Api = /** @class */ (function () {
    function Api(data) {
        this.data = data;
    }
    return Api;
}());
/**
 * Adds methods to the SpriteSpin api
 *
 * @public
 */
function extendApi(methods) {
    var api = Api.prototype;
    for (var key in methods) {
        if (methods.hasOwnProperty(key)) {
            if (api[key]) {
                throw new Error('API method is already defined: ' + key);
            }
            else {
                api[key] = methods[key];
            }
        }
    }
    return api;
}

var $$1 = window.jQuery || window.$;

function getCursorPosition(event) {
    var touches = event.touches;
    var source = event;
    // jQuery Event normalization does not preserve the 'event.touches'
    // try to grab touches from the original event
    if (event.touches === undefined && event.originalEvent !== undefined) {
        touches = event.originalEvent.touches;
    }
    // get current touch or mouse position
    if (touches !== undefined && touches.length > 0) {
        source = touches[0];
    }
    return {
        x: source.clientX || 0,
        y: source.clientY || 0
    };
}

var canvas;
var context;
function detectionContext() {
    if (context) {
        return context;
    }
    if (!canvas) {
        canvas = document.createElement('canvas');
    }
    if (!canvas || !canvas.getContext) {
        return null;
    }
    context = canvas.getContext('2d');
    return context;
}
/**
 * Idea taken from https://github.com/stomita/ios-imagefile-megapixel
 * Detects whether the image has been sub sampled by the browser and does not have its original dimensions.
 * This method unfortunately does not work for images that have transparent background.
 */
function detectSubsampling(img, width, height) {
    if (!detectionContext()) {
        return false;
    }
    // sub sampling happens on images above 1 megapixel
    if (width * height <= 1024 * 1024) {
        return false;
    }
    // set canvas to 1x1 pixel size and fill it with magenta color
    canvas.width = canvas.height = 1;
    context.fillStyle = '#FF00FF';
    context.fillRect(0, 0, 1, 1);
    // render the image with a negative offset to the left so that it would
    // fill the canvas pixel with the top right pixel of the image.
    context.drawImage(img, -width + 1, 0);
    // check color value to confirm image is covering edge pixel or not.
    // if color still magenta, the image is assumed to be sub sampled.
    try {
        var dat = context.getImageData(0, 0, 1, 1).data;
        return (dat[0] === 255) && (dat[1] === 0) && (dat[2] === 255);
    }
    catch (err) {
        // avoids cross origin exception for chrome when code runs without a server
        return false;
    }
}

/**
 *
 */
function getOuterSize(data) {
    var width = Math.floor(data.width || data.frameWidth || data.target.innerWidth());
    var height = Math.floor(data.height || data.frameHeight || data.target.innerHeight());
    return {
        aspect: width / height,
        height: height,
        width: width
    };
}
function getComputedSize(data) {
    var size = getOuterSize(data);
    if (typeof window.getComputedStyle !== 'function') {
        return size;
    }
    var style = window.getComputedStyle(data.target[0]);
    if (!style.width) {
        return size;
    }
    size.width = Math.floor(Number(style.width.replace('px', '')));
    size.height = Math.floor(size.width / size.aspect);
    return size;
}
/**
 *
 */
function getInnerSize(data) {
    var width = Math.floor(data.frameWidth || data.width || data.target.innerWidth());
    var height = Math.floor(data.frameHeight || data.height || data.target.innerHeight());
    return {
        aspect: width / height,
        height: height,
        width: width
    };
}
/**
 *
 */
function getInnerLayout(mode, inner, outer) {
    // get mode
    var isFit = mode === 'fit';
    var isFill = mode === 'fill';
    var isMatch = mode === 'stretch';
    // resulting layout
    var layout = {
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        overflow: 'hidden'
    };
    // no calculation here
    if (!mode || isMatch) {
        return layout;
    }
    // get size and aspect
    var aspectIsGreater = inner.aspect >= outer.aspect;
    // mode == original
    var width = inner.width;
    var height = inner.height;
    // keep aspect ratio but fit/fill into container
    if (isFit && aspectIsGreater || isFill && !aspectIsGreater) {
        width = outer.width;
        height = outer.width / inner.aspect;
    }
    if (isFill && aspectIsGreater || isFit && !aspectIsGreater) {
        height = outer.height;
        width = outer.height * inner.aspect;
    }
    // floor the numbers
    width = Math.floor(width);
    height = Math.floor(height);
    // position in center
    layout.width = width;
    layout.height = height;
    layout.top = Math.floor((outer.height - height) / 2);
    layout.left = Math.floor((outer.width - width) / 2);
    layout.right = layout.left;
    layout.bottom = layout.top;
    return layout;
}

var img;
/**
 * gets the original width and height of an image element
 */
function naturalSize(image) {
    // for browsers that support naturalWidth and naturalHeight properties
    if (image.naturalWidth) {
        return {
            height: image.naturalHeight,
            width: image.naturalWidth
        };
    }
    // browsers that do not support naturalWidth and naturalHeight properties have to fall back to the width and
    // height properties. However, the image might have a css style applied so width and height would return the
    // css size. To avoid thet create a new Image object that is free of css rules and grab width and height
    // properties
    //
    // assume that the src has already been downloaded, so no onload callback is needed.
    img = img || new Image();
    img.src = image.src;
    return {
        height: img.height,
        width: img.width
    };
}

/**
 * Measures the image frames that are used in the given data object
 */
function measure(images, options) {
    if (images.length === 1) {
        return [measureSheet(images[0], options)];
    }
    else if (options.framesX && options.framesY) {
        return measureMutipleSheets(images, options);
    }
    else {
        return measureFrames(images, options);
    }
}
function measureSheet(image, options) {
    var result = { id: 0, sprites: [] };
    measureImage(image, options, result);
    var frames = options.frames;
    var framesX = Number(options.framesX) || frames;
    var framesY = Math.ceil(frames / framesX);
    var frameWidth = Math.floor(result.width / framesX);
    var frameHeight = Math.floor(result.height / framesY);
    var divisor = result.isSubsampled ? 2 : 1;
    for (var i = 0; i < frames; i++) {
        var x = (i % framesX) * frameWidth;
        var y = Math.floor(i / framesX) * frameHeight;
        result.sprites.push({
            id: i,
            x: x, y: y,
            width: frameWidth,
            height: frameHeight,
            sampledX: x / divisor,
            sampledY: y / divisor,
            sampledWidth: frameWidth / divisor,
            sampledHeight: frameHeight / divisor
        });
    }
    return result;
}
function measureFrames(images, options) {
    var result = [];
    for (var id = 0; id < images.length; id++) {
        // TODO: optimize
        // dont measure images with same size twice
        var sheet = measureSheet(images[id], { frames: 1, framesX: 1, detectSubsampling: options.detectSubsampling });
        sheet.id = id;
        result.push(sheet);
    }
    return result;
}
function measureMutipleSheets(images, options) {
    var result = [];
    for (var id = 0; id < images.length; id++) {
        // TODO: optimize
        // dont measure images with same size twice
        var sheet = measureSheet(images[id], {
            frames: undefined,
            framesX: options.framesX,
            framesY: options.framesY,
            detectSubsampling: options.detectSubsampling
        });
        sheet.id = id;
        result.push(sheet);
    }
    return result;
}
function measureImage(image, options, result) {
    var size = naturalSize(image);
    result.isSubsampled = options.detectSubsampling && detectSubsampling(image, size.width, size.height);
    result.width = size.width;
    result.height = size.height;
    result.sampledWidth = size.width / (result.isSubsampled ? 2 : 1);
    result.sampledHeight = size.height / (result.isSubsampled ? 2 : 1);
    return result;
}
function findSpecs(metrics, frames, frame, lane) {
    var spriteId = lane * frames + frame;
    var sheetId = 0;
    var sprite = null;
    var sheet = null;
    while (true) {
        sheet = metrics[sheetId];
        if (!sheet) {
            break;
        }
        if (spriteId >= sheet.sprites.length) {
            spriteId -= sheet.sprites.length;
            sheetId++;
            continue;
        }
        sprite = sheet.sprites[spriteId];
        break;
    }
    return { sprite: sprite, sheet: sheet };
}

function indexOf(element, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
}
function noop() {
    //
}
function preload(opts) {
    var src;
    var input = opts.source;
    src = typeof input === 'string' ? [input] : input;
    // const src: string[] =  ? [opts.source] : opts.source
    var images = [];
    var targetCount = (opts.preloadCount || src.length);
    var onInitiated = opts.initiated || noop;
    var onProgress = opts.progress || noop;
    var onComplete = opts.complete || noop;
    var count = 0;
    var completed = false;
    var firstLoaded = false;
    var tick = function () {
        count += 1;
        onProgress({
            index: indexOf(this, images),
            loaded: count,
            total: src.length,
            percent: Math.round((count / src.length) * 100)
        });
        firstLoaded = firstLoaded || (this === images[0]);
        if (firstLoaded && !completed && (count >= targetCount)) {
            completed = true;
            onComplete(images);
        }
    };
    for (var _i = 0, src_1 = src; _i < src_1.length; _i++) {
        var url = src_1[_i];
        var img = new Image();
        // push result
        images.push(img);
        // bind logic, dont care about abort/errors
        img.onload = img.onabort = img.onerror = tick;
        // begin load
        img.src = url;
    }
    onInitiated(images);
}

function padNumber(num, length, pad) {
    var result = String(num);
    while (result.length < length) {
        result = String(pad) + result;
    }
    return result;
}
/**
 * Generates an array of source strings
 *
 * @remarks
 * Takes a template string and generates an array of strings by interpolating {lane} and {frame} placeholders.
 *
 * ```
 * sourceArray('http://example.com/image_{frame}.jpg, { frame: [1, 3], digits: 2 })
 * // gives:
 * // [ 'http://example.com/image_01.jpg', 'http://example.com/image_02.jpg', 'http://example.com/image_03.jpg' ]
 *
 * sourceArray('http://example.com/image_FRAME.jpg, { frame: [1, 3], digits: 2, framePlacer: 'FRAME' })
 * // gives:
 * // [ 'http://example.com/image_01.jpg', 'http://example.com/image_02.jpg', 'http://example.com/image_03.jpg' ]
 * ```
 *
 * @param template - The template string
 * @param opts - Interpolation options
 *
 * @public
 */
function sourceArray(template, opts) {
    var digits = opts.digits || 2;
    var lPlacer = opts.lanePlacer || '{lane}';
    var fPlacer = opts.framePlacer || '{frame}';
    var fStart = 0;
    var fEnd = 0;
    if (opts.frame) {
        fStart = opts.frame[0];
        fEnd = opts.frame[1];
    }
    var lStart = 0;
    var lEnd = 0;
    if (opts.lane) {
        lStart = opts.lane[0];
        lEnd = opts.lane[1];
    }
    var result = [];
    for (var lane = lStart; lane <= lEnd; lane += 1) {
        for (var frame = fStart; frame <= fEnd; frame += 1) {
            result.push(template
                .replace(lPlacer, padNumber(lane, digits, '0'))
                .replace(fPlacer, padNumber(frame, digits, '0')));
        }
    }
    return result;
}

/**
 * The namespace that is used to bind functions to DOM events and store the data object
 */
var namespace = 'spritespin';
/**
 * Event names that are recognized by SpriteSpin. A module can implement any of these and they will be bound
 * to the target element on which the plugin is called.
 */
var eventNames = [
    'mousedown',
    'mousemove',
    'mouseup',
    'mouseenter',
    'mouseover',
    'mouseleave',
    'mousewheel',
    'wheel',
    'click',
    'dblclick',
    'touchstart',
    'touchmove',
    'touchend',
    'touchcancel',
    'selectstart',
    'gesturestart',
    'gesturechange',
    'gestureend'
];
/**
 *
 */
var callbackNames = [
    'onInit',
    'onProgress',
    'onLoad',
    'onFrameChanged',
    'onFrame',
    'onDraw',
    'onComplete',
    'onDestroy'
];
/**
 * Names of events for that the default behavior should be prevented.
 */
var eventsToPrevent = [
    'dragstart'
];
/**
 * Default set of SpriteSpin options. This also represents the majority of data attributes that are used during the
 * lifetime of a SpriteSpin instance. The data is stored inside the target DOM element on which the plugin is called.
 */
var defaults = {
    source: undefined,
    width: undefined,
    height: undefined,
    frames: undefined,
    framesX: undefined,
    lanes: 1,
    sizeMode: undefined,
    renderer: 'canvas',
    lane: 0,
    frame: 0,
    frameTime: 40,
    animate: true,
    retainAnimate: false,
    reverse: false,
    loop: true,
    stopFrame: 0,
    wrap: true,
    wrapLane: false,
    sense: 1,
    senseLane: undefined,
    orientation: 'horizontal',
    detectSubsampling: true,
    preloadCount: undefined,
    touchScrollTimer: [200, 1500],
    responsive: undefined,
    plugins: undefined
};

function noop$1() {
    // noop
}
function wrapConsole(type) {
    return console && console[type] ? function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.log.apply(console, args);
    } : noop$1;
}
var log = wrapConsole('log');
var warn = wrapConsole('warn');
var error = wrapConsole('error');
function toArray(value) {
    return Array.isArray(value) ? value : [value];
}
/**
 * clamps the given value by the given min and max values
 */
function clamp(value, min, max) {
    return (value > max ? max : (value < min ? min : value));
}
/**
 *
 */
function wrap(value, min, max, size) {
    while (value > max) {
        value -= size;
    }
    while (value < min) {
        value += size;
    }
    return value;
}
/**
 * prevents default action on the given event
 */
function prevent(e) {
    e.preventDefault();
    return false;
}
/**
 * Binds on the given target and event the given function.
 * The SpriteSpin namespace is attached to the event name
 */
function bind(target, event, func) {
    if (func) {
        target.bind(event + '.' + namespace, function (e) {
            func.apply(target, [e, target.spritespin('data')]);
        });
    }
}
/**
 * Unbinds all SpriteSpin events from given target element
 */
function unbind(target) {
    target.unbind('.' + namespace);
}
/**
 * Checks if given object is a function
 */
function isFunction(fn) {
    return typeof fn === 'function';
}
function pixelRatio(context) {
    var devicePixelRatio = window.devicePixelRatio || 1;
    var backingStoreRatio = context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;
    return devicePixelRatio / backingStoreRatio;
}



var _Utils = Object.freeze({
	$: $$1,
	getCursorPosition: getCursorPosition,
	detectSubsampling: detectSubsampling,
	getOuterSize: getOuterSize,
	getComputedSize: getComputedSize,
	getInnerSize: getInnerSize,
	getInnerLayout: getInnerLayout,
	measure: measure,
	findSpecs: findSpecs,
	naturalSize: naturalSize,
	preload: preload,
	sourceArray: sourceArray,
	noop: noop$1,
	log: log,
	warn: warn,
	error: error,
	toArray: toArray,
	clamp: clamp,
	wrap: wrap,
	prevent: prevent,
	bind: bind,
	unbind: unbind,
	isFunction: isFunction,
	pixelRatio: pixelRatio
});

/**
 * Applies css attributes to layout the SpriteSpin containers.
 *
 * @internal
 */
function applyLayout(data) {
    // disable selection
    data.target
        .attr('unselectable', 'on')
        .css({
        width: '',
        height: '',
        '-ms-user-select': 'none',
        '-moz-user-select': 'none',
        '-khtml-user-select': 'none',
        '-webkit-user-select': 'none',
        'user-select': 'none'
    });
    var size = data.responsive ? getComputedSize(data) : getOuterSize(data);
    var layout = getInnerLayout(data.sizeMode, getInnerSize(data), size);
    // apply layout on target
    data.target.css({
        width: size.width,
        height: size.height,
        position: 'relative',
        overflow: 'hidden'
    });
    // apply layout on stage
    data.stage
        .css(layout)
        .hide();
    if (!data.canvas) {
        return;
    }
    // apply layout on canvas
    data.canvas.css(layout).hide();
    // apply pixel ratio on canvas
    data.canvasRatio = data.canvasRatio || pixelRatio(data.context);
    if (typeof layout.width === 'number' && typeof layout.height === 'number') {
        data.canvas[0].width = (layout.width * data.canvasRatio) || size.width;
        data.canvas[0].height = (layout.height * data.canvasRatio) || size.height;
    }
    else {
        data.canvas[0].width = (size.width * data.canvasRatio);
        data.canvas[0].height = (size.height * data.canvasRatio);
    }
    // width and height must be set before calling scale
    data.context.scale(data.canvasRatio, data.canvasRatio);
}

/**
 * Gets a state object by name.
 * @internal
 * @param data - The SpriteSpin instance data
 * @param name - The name of the state object
 */
function getState(data, name) {
    data.state = data.state || {};
    data.state[name] = data.state[name] || {};
    return data.state[name];
}
/**
 * Gets a plugin state object by name.
 *
 * @remarks
 * Plugins should use this method to get or create a state object where they can
 * store any instance variables.
 *
 * @public
 * @param data - The SpriteSpin instance data
 * @param name - The name of the plugin
 */
function getPluginState(data, name) {
    var state = getState(data, 'plugin');
    state[name] = state[name] || {};
    return state[name];
}
/**
 * Checks whether a flag is set. See {@link flag}.
 *
 * @public
 * @param data - The SpriteSpin instance data
 * @param key - The name of the flag
 */
function is(data, key) {
    return !!getState(data, 'flags')[key];
}
/**
 * Sets a flag value. See {@link is}.
 *
 * @public
 * @param data - The SpriteSpin instance data
 * @param key - The name of the flag
 * @param value - The value to set
 */
function flag(data, key, value) {
    getState(data, 'flags')[key] = !!value;
}

/**
 * Gets the playback state
 *
 * @public
 * @param data - The SpriteSpin instance data
 */
function getPlaybackState(data) {
    return getState(data, 'playback');
}
function updateLane(data, lane) {
    data.lane = data.wrapLane
        ? wrap(lane, 0, data.lanes - 1, data.lanes)
        : clamp(lane, 0, data.lanes - 1);
}
function updateAnimationFrame(data) {
    data.frame += (data.reverse ? -1 : 1);
    // wrap the frame value to fit in range [0, data.frames)
    data.frame = wrap(data.frame, 0, data.frames - 1, data.frames);
    // stop animation if loop is disabled and the stopFrame is reached
    if (!data.loop && (data.frame === data.stopFrame)) {
        stopAnimation(data);
    }
}
function updateInputFrame(data, frame) {
    data.frame = Number(frame);
    data.frame = data.wrap
        ? wrap(data.frame, 0, data.frames - 1, data.frames)
        : clamp(data.frame, 0, data.frames - 1);
}
function updateAnimation(data) {
    var state = getPlaybackState(data);
    if (state.handler) {
        updateBefore(data);
        updateAnimationFrame(data);
        updateAfter(data);
    }
}
function updateBefore(data) {
    var state = getPlaybackState(data);
    state.lastFrame = data.frame;
    state.lastLane = data.lane;
}
function updateAfter(data) {
    var state = getPlaybackState(data);
    if (state.lastFrame !== data.frame || state.lastLane !== data.lane) {
        data.target.trigger('onFrameChanged.' + namespace, data);
    }
    data.target.trigger('onFrame.' + namespace, data);
    data.target.trigger('onDraw.' + namespace, data);
}
/**
 * Updates the frame or lane number of the SpriteSpin data.
 *
 * @public
 * @param data - The SpriteSpin instance data
 * @param frame - The frame number to set
 * @param lane - The lane number to set
 */
function updateFrame(data, frame, lane) {
    updateBefore(data);
    if (frame != null) {
        updateInputFrame(data, frame);
    }
    if (lane != null) {
        updateLane(data, lane);
    }
    updateAfter(data);
}
/**
 * Stops the running animation.
 *
 * @public
 * @param data - The SpriteSpin instance data
 */
function stopAnimation(data) {
    data.animate = false;
    var state = getPlaybackState(data);
    if (state.handler != null) {
        window.clearInterval(state.handler);
        state.handler = null;
    }
}
/**
 * Starts animation playback if needed.
 *
 * @remarks
 * Starts animation playback if `animate` property is `true` and the animation is not yet running.
 *
 * @public
 * @param data - The SpriteSpin instance data
 */
function applyAnimation(data) {
    var state = getPlaybackState(data);
    if (state.handler && (!data.animate || state.frameTime !== data.frameTime)) {
        stopAnimation(data);
    }
    if (data.animate && !state.handler) {
        state.frameTime = data.frameTime;
        state.handler = window.setInterval(function () { return updateAnimation(data); }, state.frameTime);
    }
}
/**
 * Starts the animation playback
 *
 * @remarks
 * Starts the animation playback and also sets the `animate` property to `true`
 *
 * @public
 * @param data - The SpriteSpin instance data
 */
function startAnimation(data) {
    data.animate = true;
    applyAnimation(data);
}

var plugins = {};
/**
 * Registers a plugin.
 *
 * @remarks
 * Use this to add custom Rendering or Updating modules that can be addressed with the 'module' option.
 *
 * @public
 * @param name - The name of the plugin
 * @param plugin - The plugin implementation
 */
function registerPlugin(name, plugin) {
    if (plugins[name]) {
        error("Plugin name \"" + name + "\" is already taken");
        return;
    }
    plugin = plugin || {};
    plugins[name] = plugin;
    return plugin;
}
/**
 * Registers a plugin.
 *
 * @public
 * @deprecated Use {@link registerPlugin} instead
 * @param name - The name of the plugin
 * @param plugin - The plugin implementation
 */
function registerModule(name, plugin) {
    warn('"registerModule" is deprecated, use "registerPlugin" instead');
    registerPlugin(name, plugin);
}
/**
 * Gets an active plugin by name
 *
 * @internal
 * @param name - The name of the plugin
 */
function getPlugin(name) {
    return plugins[name];
}
/**
 * Replaces module names on given SpriteSpin data and replaces them with actual implementations.
 * @internal
 */
function applyPlugins(data) {
    fixPlugins(data);
    for (var i = 0; i < data.plugins.length; i += 1) {
        var name_1 = data.plugins[i];
        if (typeof name_1 !== 'string') {
            continue;
        }
        var plugin = getPlugin(name_1);
        if (!plugin) {
            error('No plugin found with name ' + name_1);
            continue;
        }
        data.plugins[i] = plugin;
    }
}
function fixPlugins(data) {
    // tslint:disable no-string-literal
    if (data['mods']) {
        warn('"mods" option is deprecated, use "plugins" instead');
        data.plugins = data['mods'];
        delete data['mods'];
    }
    if (data['behavior']) {
        warn('"behavior" option is deprecated, use "plugins" instead');
        data.plugins.push(data['behavior']);
        delete data['behavior'];
    }
    if (data['module']) {
        warn('"module" option is deprecated, use "plugins" instead');
        data.plugins.push(data['module']);
        delete data['module'];
    }
}

var $$2 = $$1;
var counter = 0;
/**
 * Collection of all SpriteSpin instances
 */
var instances = {};
function pushInstance(data) {
    counter += 1;
    data.id = String(counter);
    instances[data.id] = data;
}
function popInstance(data) {
    delete instances[data.id];
}
function eachInstance(cb) {
    for (var id in instances) {
        if (instances.hasOwnProperty(id)) {
            cb(instances[id]);
        }
    }
}
var lazyinit = function () {
    // replace function with a noop
    // this logic must run only once
    lazyinit = function () { };
    function onEvent(eventName, e) {
        eachInstance(function (data) {
            for (var _i = 0, _a = data.plugins; _i < _a.length; _i++) {
                var module_1 = _a[_i];
                if (typeof module_1[eventName] === 'function') {
                    module_1[eventName].apply(data.target, [e, data]);
                }
            }
        });
    }
    function onResize() {
        eachInstance(function (data) {
            if (data.responsive) {
                boot(data);
            }
        });
    }
    var _loop_1 = function (eventName) {
        $$2(window.document).bind(eventName + '.' + namespace, function (e) {
            onEvent('document' + eventName, e);
        });
    };
    for (var _i = 0, eventNames_1 = eventNames; _i < eventNames_1.length; _i++) {
        var eventName = eventNames_1[_i];
        _loop_1(eventName);
    }
    var resizeTimeout = null;
    $$2(window).on('resize', function () {
        window.clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(onResize, 100);
    });
};
/**
 * (re)binds all spritespin events on the target element
 *
 * @internal
 */
function applyEvents(data) {
    var target = data.target;
    // Clear all SpriteSpin events on the target element
    unbind(target);
    // disable all default browser behavior on the following events
    // mainly prevents image drag operation
    for (var _i = 0, eventsToPrevent_1 = eventsToPrevent; _i < eventsToPrevent_1.length; _i++) {
        var eName = eventsToPrevent_1[_i];
        bind(target, eName, prevent);
    }
    // Bind module functions to SpriteSpin events
    for (var _a = 0, _b = data.plugins; _a < _b.length; _a++) {
        var plugin = _b[_a];
        for (var _c = 0, eventNames_2 = eventNames; _c < eventNames_2.length; _c++) {
            var eName = eventNames_2[_c];
            bind(target, eName, plugin[eName]);
        }
        for (var _d = 0, callbackNames_1 = callbackNames; _d < callbackNames_1.length; _d++) {
            var eName = callbackNames_1[_d];
            bind(target, eName, plugin[eName]);
        }
    }
    // bind auto start function to load event.
    bind(target, 'onLoad', function (e, d) {
        applyAnimation(d);
    });
    // bind all user events that have been passed on initialization
    for (var _e = 0, callbackNames_2 = callbackNames; _e < callbackNames_2.length; _e++) {
        var eName = callbackNames_2[_e];
        bind(target, eName, data[eName]);
    }
}
function applyMetrics(data) {
    if (!data.images) {
        data.metrics = [];
    }
    data.metrics = measure(data.images, data);
    var spec = findSpecs(data.metrics, data.frames, 0, 0);
    if (spec.sprite) {
        // TODO: try to remove frameWidth/frameHeight
        data.frameWidth = spec.sprite.width;
        data.frameHeight = spec.sprite.height;
    }
}
/**
 * Runs the boot process.
 *
 * @remarks
 * (re)initializes plugins, (re)initializes the layout, (re)binds events and loads source images.
 *
 * @internal
 */
function boot(data) {
    applyPlugins(data);
    applyEvents(data);
    applyLayout(data);
    data.source = toArray(data.source);
    data.loading = true;
    data.target
        .addClass('loading')
        .trigger('onInit.' + namespace, data);
    preload({
        source: data.source,
        preloadCount: data.preloadCount,
        progress: function (progress) {
            data.progress = progress;
            data.target.trigger('onProgress.' + namespace, data);
        },
        complete: function (images) {
            data.images = images;
            data.loading = false;
            data.frames = data.frames || images.length;
            applyMetrics(data);
            applyLayout(data);
            data.stage.show();
            data.target
                .removeClass('loading')
                .trigger('onLoad.' + namespace, data)
                .trigger('onFrame.' + namespace, data)
                .trigger('onDraw.' + namespace, data)
                .trigger('onComplete.' + namespace, data);
        }
    });
}
/**
 * Creates a new SpriteSpin instance
 *
 * @public
 */
function create(options) {
    var _this = this;
    var target = options.target;
    // SpriteSpin is not initialized
    // Create default settings object and extend with given options
    var data = $$2.extend(true, {}, defaults, options);
    // ensure source is set
    data.source = data.source || [];
    // ensure plugins are set
    data.plugins = data.plugins || [
        '360',
        'drag'
    ];
    // if image tags are contained inside this DOM element
    // use these images as the source files
    target.find('img').each(function () {
        if (!Array.isArray(data.source)) {
            data.source = [];
        }
        data.source.push($$2(_this).attr('src'));
    });
    // build inner html
    // <div>
    //   <div class='spritespin-stage'></div>
    //   <canvas class='spritespin-canvas'></canvas>
    // </div>
    target
        .empty()
        .addClass('spritespin-instance')
        .append("<div class='spritespin-stage'></div>");
    // add the canvas element if canvas rendering is enabled and supported
    if (data.renderer === 'canvas') {
        var canvas = document.createElement('canvas');
        if (!!(canvas.getContext && canvas.getContext('2d'))) {
            data.canvas = $$2(canvas).addClass('spritespin-canvas');
            data.context = canvas.getContext('2d');
            target.append(data.canvas);
            target.addClass('with-canvas');
        }
        else {
            // fallback to image rendering mode
            data.renderer = 'image';
        }
    }
    // setup references to DOM elements
    data.target = target;
    data.stage = target.find('.spritespin-stage');
    // store the data
    target.data(namespace, data);
    pushInstance(data);
    return data;
}
/**
 * Creates a new SpriteSpin instance, or updates an existing one
 *
 * @public
 */
function createOrUpdate(options) {
    lazyinit();
    var data = options.target.data(namespace);
    if (!data) {
        data = create(options);
    }
    else {
        $$2.extend(data, options);
    }
    boot(data);
    return data;
}
/**
 * Destroys the SpriteSpin instance
 *
 * @remarks
 * - stops running animation
 * - unbinds all events
 * - deletes the data on the target element
 *
 * @public
 */
function destroy(data) {
    popInstance(data);
    stopAnimation(data);
    data.target
        .trigger('onDestroy', data)
        .html(null)
        .attr('style', null)
        .attr('unselectable', null)
        .removeClass(['spritespin-instance', 'with-canvas']);
    unbind(data.target);
    data.target.removeData(namespace);
}

/**
 * Gets the current input state
 *
 * @public
 * @param data - The SpriteSpin instance data
 */
function getInputState(data) {
    return getState(data, 'input');
}
/**
 * Updates the input state using a mous or touch event.
 *
 * @public
 * @param e - The input event
 * @param data - The SpriteSpin instance data
 */
function updateInput(e, data) {
    var cursor = getCursorPosition(e);
    var state = getInputState(data);
    // cache positions from previous frame
    state.oldX = state.currentX;
    state.oldY = state.currentY;
    state.currentX = cursor.x;
    state.currentY = cursor.y;
    // Fix old position.
    if (state.oldX === undefined || state.oldY === undefined) {
        state.oldX = state.currentX;
        state.oldY = state.currentY;
    }
    // Cache the initial click/touch position and store the frame number at which the click happened.
    // Useful for different behavior implementations. This must be restored when the click/touch is released.
    if (state.startX === undefined || state.startY === undefined) {
        state.startX = state.currentX;
        state.startY = state.currentY;
        state.clickframe = data.frame;
        state.clicklane = data.lane;
    }
    // Calculate the vector from start position to current pointer position.
    state.dX = state.currentX - state.startX;
    state.dY = state.currentY - state.startY;
    // Calculate the vector from last frame position to current pointer position.
    state.ddX = state.currentX - state.oldX;
    state.ddY = state.currentY - state.oldY;
    // Normalize vectors to range [-1:+1]
    state.ndX = state.dX / data.target.innerWidth();
    state.ndY = state.dY / data.target.innerHeight();
    state.nddX = state.ddX / data.target.innerWidth();
    state.nddY = state.ddY / data.target.innerHeight();
}
/**
 * Resets the input state.
 *
 * @public
 */
function resetInput(data) {
    var input = getInputState(data);
    input.startX = input.startY = undefined;
    input.currentX = input.currentY = undefined;
    input.oldX = input.oldY = undefined;
    input.dX = input.dY = 0;
    input.ddX = input.ddY = 0;
    input.ndX = input.ndY = 0;
    input.nddX = input.nddY = 0;
}

function extension(option, value) {
    var $target = $$1(this);
    if (option === 'data') {
        return $target.data(namespace);
    }
    if (option === 'api') {
        var data = $target.data(namespace);
        data.api = data.api || new Api(data);
        return data.api;
    }
    if (option === 'destroy') {
        return $target.each(function () {
            var data = $target.data(namespace);
            if (data) {
                destroy(data);
            }
        });
    }
    if (arguments.length === 2 && typeof option === 'string') {
        option = (_a = {}, _a[option] = value, _a);
    }
    if (typeof option === 'object') {
        return createOrUpdate($$1.extend(true, { target: $target }, option)).target;
    }
    throw new Error('Invalid call to spritespin');
    var _a;
}
$$1.fn[namespace] = extension;

// tslint:disable:object-literal-shorthand
// tslint:disable:only-arrow-functions
extendApi({
    // Gets a value indicating whether the animation is currently running.
    isPlaying: function () {
        return getPlaybackState(this.data).handler != null;
    },
    // Gets a value indicating whether the animation looping is enabled.
    isLooping: function () {
        return this.data.loop;
    },
    // Starts/Stops the animation playback
    toggleAnimation: function () {
        if (this.isPlaying()) {
            this.stopAnimation();
        }
        else {
            this.startAnimation();
        }
    },
    // Stops animation playback
    stopAnimation: function () {
        this.data.animate = false;
        stopAnimation(this.data);
    },
    // Starts animation playback
    startAnimation: function () {
        this.data.animate = true;
        applyAnimation(this.data);
    },
    // Sets a value indicating whether the animation should be looped or not.
    // This might start the animation (if the 'animate' data attribute is set to true)
    loop: function (value) {
        this.data.loop = value;
        applyAnimation(this.data);
        return this;
    },
    // Gets the current frame number
    currentFrame: function () {
        return this.data.frame;
    },
    // Updates SpriteSpin to the specified frame.
    updateFrame: function (frame) {
        updateFrame(this.data, frame);
        return this;
    },
    // Skips the given number of frames
    skipFrames: function (step) {
        var data = this.data;
        updateFrame(data, data.frame + (data.reverse ? -step : +step));
        return this;
    },
    // Updates SpriteSpin so that the next frame is shown
    nextFrame: function () {
        return this.skipFrames(1);
    },
    // Updates SpriteSpin so that the previous frame is shown
    prevFrame: function () {
        return this.skipFrames(-1);
    },
    // Starts the animations that will play until the given frame number is reached
    // options:
    //   force [boolean] starts the animation, even if current frame is the target frame
    //   nearest [boolean] animates to the direction with minimum distance to the target frame
    playTo: function (frame, options) {
        var data = this.data;
        options = options || {};
        if (!options.force && data.frame === frame) {
            return;
        }
        if (options.nearest) {
            // distance to the target frame
            var a = frame - data.frame;
            // distance to last frame and the to target frame
            var b = frame > data.frame ? a - data.frames : a + data.frames;
            // minimum distance
            var c = Math.abs(a) < Math.abs(b) ? a : b;
            data.reverse = c < 0;
        }
        data.animate = true;
        data.loop = false;
        data.stopFrame = frame;
        applyAnimation(data);
        return this;
    }
});

function pick(target, names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        if (target[name_1] || name_1 in target) {
            return name_1;
        }
    }
    return names[0];
}
var browser = {
    requestFullscreen: pick(document.documentElement, [
        'requestFullscreen',
        'webkitRequestFullScreen',
        'mozRequestFullScreen',
        'msRequestFullscreen'
    ]),
    exitFullscreen: pick(document, [
        'exitFullscreen',
        'webkitExitFullscreen',
        'webkitCancelFullScreen',
        'mozCancelFullScreen',
        'msExitFullscreen'
    ]),
    fullscreenElement: pick(document, [
        'fullscreenElement',
        'webkitFullscreenElement',
        'webkitCurrentFullScreenElement',
        'mozFullScreenElement',
        'msFullscreenElement'
    ]),
    fullscreenEnabled: pick(document, [
        'fullscreenEnabled',
        'webkitFullscreenEnabled',
        'mozFullScreenEnabled',
        'msFullscreenEnabled'
    ]),
    fullscreenchange: pick(document, [
        'onfullscreenchange',
        'onwebkitfullscreenchange',
        'onmozfullscreenchange',
        'onMSFullscreenChange'
    ]).replace(/^on/, ''),
    fullscreenerror: pick(document, [
        'onfullscreenerror',
        'onwebkitfullscreenerror',
        'onmozfullscreenerror',
        'onMSFullscreenError'
    ]).replace(/^on/, '')
};
var changeEvent = browser.fullscreenchange + '.' + namespace + '-fullscreen';
function unbindChangeEvent() {
    $$1(document).unbind(changeEvent);
}
function bindChangeEvent(callback) {
    unbindChangeEvent();
    $$1(document).bind(changeEvent, callback);
}
var orientationEvent = 'orientationchange.' + namespace + '-fullscreen';
function unbindOrientationEvent() {
    $$1(window).unbind(orientationEvent);
}
function bindOrientationEvent(callback) {
    unbindOrientationEvent();
    $$1(window).bind(orientationEvent, callback);
}
function requestFullscreenNative(e) {
    e = e || document.documentElement;
    e[browser.requestFullscreen]();
}
function exitFullscreen() {
    return document[browser.exitFullscreen]();
}
function fullscreenEnabled() {
    return document[browser.fullscreenEnabled];
}
function fullscreenElement() {
    return document[browser.fullscreenElement];
}
function isFullscreen() {
    return !!fullscreenElement();
}
function toggleFullscreen(data, opts) {
    if (isFullscreen()) {
        this.apiRequestFullscreen(opts);
    }
    else {
        this.exitFullscreen();
    }
}
function requestFullscreen(data, opts) {
    opts = opts || {};
    var oWidth = data.width;
    var oHeight = data.height;
    var oSource = data.source;
    var oSize = data.sizeMode;
    var oResponsive = data.responsive;
    var enter = function () {
        data.width = window.screen.width;
        data.height = window.screen.height;
        data.source = (opts.source || oSource);
        data.sizeMode = opts.sizeMode || 'fit';
        data.responsive = false;
        boot(data);
    };
    var exit = function () {
        data.width = oWidth;
        data.height = oHeight;
        data.source = oSource;
        data.sizeMode = oSize;
        data.responsive = oResponsive;
        boot(data);
    };
    bindChangeEvent(function () {
        if (isFullscreen()) {
            enter();
            bindOrientationEvent(enter);
        }
        else {
            unbindChangeEvent();
            unbindOrientationEvent();
            exit();
        }
    });
    requestFullscreenNative(data.target[0]);
}
extendApi({
    fullscreenEnabled: fullscreenEnabled,
    fullscreenElement: fullscreenElement,
    exitFullscreen: exitFullscreen,
    toggleFullscreen: function (opts) {
        toggleFullscreen(this.data, opts);
    },
    requestFullscreen: function (opts) {
        requestFullscreen(this.data, opts);
    }
});

(function () {
    var NAME = 'click';
    function click(e, data) {
        if (data.loading || !data.stage.is(':visible')) {
            return;
        }
        updateInput(e, data);
        var input = getInputState(data);
        var half, pos;
        var target = data.target, offset = target.offset();
        if (data.orientation === 'horizontal') {
            half = target.innerWidth() / 2;
            pos = input.currentX - offset.left;
        }
        else {
            half = target.innerHeight() / 2;
            pos = input.currentY - offset.top;
        }
        updateFrame(data, data.frame + (pos > half ? 1 : -1));
    }
    registerPlugin(NAME, {
        name: NAME,
        mouseup: click,
        touchend: click
    });
})();

(function () {
    var NAME = 'drag';
    function getState$$1(data) {
        return getPluginState(data, NAME);
    }
    function getAxis(data) {
        if (typeof data.orientation === 'number') {
            return data.orientation * Math.PI / 180;
        }
        if (data.orientation === 'horizontal') {
            return 0;
        }
        return Math.PI / 2;
    }
    function onInit(e, data) {
        var state = getState$$1(data);
        var d = [200, 1500];
        var t = data.touchScrollTimer || d;
        state.minTime = t[0] || d[0];
        state.maxTime = t[1] || d[1];
    }
    function dragStart(e, data) {
        var state = getState$$1(data);
        if (data.loading || is(data, 'dragging') || data['zoomPinFrame'] && !data.stage.is(':visible')) {
            return;
        }
        // Touch scroll can only be disabled by cancelling the 'touchstart' event.
        // If we would try to cancel the 'touchmove' event during a scroll
        // chrome browser raises an error
        //
        // When a user interacts with sprite spin, we dont know whether the intention
        // is to scroll the page or to roll the spin.
        //
        // On first interaction with SpriteSpin the scroll is not disabled
        // On double tap within 200ms the scroll is not disabled
        // Scroll is only disabled if there was an interaction with SpriteSpin in the past 1500ms
        var now = new Date().getTime();
        if (state.endAt && (now - state.endAt > state.maxTime)) {
            // reset timer if the user has no interaction with spritespin within 1500ms
            state.startAt = null;
            state.endAt = null;
        }
        if (state.startAt && (now - state.startAt > state.minTime)) {
            // disable scroll only if there was already an interaction with spritespin
            // however, allow scrolling on double tab within 200ms
            e.preventDefault();
        }
        state.startAt = now;
        state.wasPlaying = !!getPlaybackState(data).handler;
        state.frame = data.frame || 0;
        state.lane = data.lane || 0;
        flag(data, 'dragging', true);
        updateInput(e, data);
    }
    function dragEnd(e, data) {
        if (is(data, 'dragging')) {
            getState$$1(data).endAt = new Date().getTime();
            flag(data, 'dragging', false);
            resetInput(data);
            if (data.retainAnimate && getState$$1(data).wasPlaying) {
                startAnimation(data);
            }
        }
    }
    function drag(e, data) {
        var state = getState$$1(data);
        var input = getInputState(data);
        if (!is(data, 'dragging')) {
            return;
        }
        updateInput(e, data);
        var rad = getAxis(data);
        var sn = Math.sin(rad);
        var cs = Math.cos(rad);
        var x = ((input.nddX * cs - input.nddY * sn) * data.sense) || 0;
        var y = ((input.nddX * sn + input.nddY * cs) * (data.senseLane || data.sense)) || 0;
        // accumulate
        state.frame += data.frames * x;
        state.lane += data.lanes * y;
        // update spritespin
        var oldFrame = data.frame;
        var oldLane = data.lane;
        updateFrame(data, Math.floor(state.frame), Math.floor(state.lane));
        stopAnimation(data);
    }
    function mousemove(e, data) {
        dragStart(e, data);
        drag(e, data);
    }
    registerPlugin('drag', {
        name: 'drag',
        onInit: onInit,
        mousedown: dragStart,
        mousemove: drag,
        mouseup: dragEnd,
        documentmousemove: drag,
        documentmouseup: dragEnd,
        touchstart: dragStart,
        touchmove: drag,
        touchend: dragEnd,
        touchcancel: dragEnd
    });
    registerPlugin('move', {
        name: 'move',
        onInit: onInit,
        mousemove: mousemove,
        mouseleave: dragEnd,
        touchstart: dragStart,
        touchmove: drag,
        touchend: dragEnd,
        touchcancel: dragEnd
    });
})();

(function () {
    var NAME = 'hold';
    function getState$$1(data) {
        return getPluginState(data, NAME);
    }
    function rememberOptions(data) {
        var state = getState$$1(data);
        state.frameTime = data.frameTime;
        state.animate = data.animate;
        state.reverse = data.reverse;
    }
    function restoreOptions(data) {
        var state = getState$$1(data);
        data.frameTime = state.frameTime;
        data.animate = state.animate;
        data.reverse = state.reverse;
    }
    function start(e, data) {
        if (is(data, 'loading') || is(data, 'dragging') || !data.stage.is(':visible')) {
            return;
        }
        rememberOptions(data);
        updateInput(e, data);
        flag(data, 'dragging', true);
        data.animate = true;
        applyAnimation(data);
    }
    function stop(e, data) {
        flag(data, 'dragging', false);
        resetInput(data);
        stopAnimation(data);
        restoreOptions(data);
        applyAnimation(data);
    }
    function update(e, data) {
        if (!is(data, 'dragging')) {
            return;
        }
        updateInput(e, data);
        var input = getInputState(data);
        var half, delta;
        var target = data.target, offset = target.offset();
        if (data.orientation === 'horizontal') {
            half = target.innerWidth() / 2;
            delta = (input.currentX - offset.left - half) / half;
        }
        else {
            half = (data.height / 2);
            delta = (input.currentY - offset.top - half) / half;
        }
        data.reverse = delta < 0;
        delta = delta < 0 ? -delta : delta;
        data.frameTime = 80 * (1 - delta) + 20;
        if (((data.orientation === 'horizontal') && (input.dX < input.dY)) ||
            ((data.orientation === 'vertical') && (input.dX < input.dY))) {
            e.preventDefault();
        }
    }
    function onFrame(e, data) {
        data.animate = true;
        applyAnimation(data);
    }
    registerPlugin(NAME, {
        name: NAME,
        mousedown: start,
        mousemove: update,
        mouseup: stop,
        mouseleave: stop,
        touchstart: start,
        touchmove: update,
        touchend: stop,
        touchcancel: stop,
        onFrame: onFrame
    });
})();

(function () {
    var NAME = 'swipe';
    function getState$$1(data) {
        return getPluginState(data, NAME);
    }
    function getOption(data, name, fallback) {
        return data[name] || fallback;
    }
    function init(e, data) {
        var state = getState$$1(data);
        state.fling = getOption(data, 'swipeFling', 10);
        state.snap = getOption(data, 'swipeSnap', 0.50);
    }
    function start(e, data) {
        if (!data.loading && !is(data, 'dragging')) {
            updateInput(e, data);
            flag(data, 'dragging', true);
        }
    }
    function update(e, data) {
        if (!is(data, 'dragging')) {
            return;
        }
        updateInput(e, data);
        var frame = data.frame;
        var lane = data.lane;
        updateFrame(data, frame, lane);
    }
    function end(e, data) {
        if (!is(data, 'dragging')) {
            return;
        }
        flag(data, 'dragging', false);
        var state = getState$$1(data);
        var input = getInputState(data);
        var frame = data.frame;
        var lane = data.lane;
        var snap = state.snap;
        var fling = state.fling;
        var dS, dF;
        if (data.orientation === 'horizontal') {
            dS = input.ndX;
            dF = input.ddX;
        }
        else {
            dS = input.ndY;
            dF = input.ddY;
        }
        if (dS >= snap || dF >= fling) {
            frame = data.frame - 1;
        }
        else if (dS <= -snap || dF <= -fling) {
            frame = data.frame + 1;
        }
        resetInput(data);
        updateFrame(data, frame, lane);
        stopAnimation(data);
    }
    registerPlugin(NAME, {
        name: NAME,
        onLoad: init,
        mousedown: start,
        mousemove: update,
        mouseup: end,
        mouseleave: end,
        touchstart: start,
        touchmove: update,
        touchend: end,
        touchcancel: end
    });
})();

(function () {
    var NAME = 'wheel';
    function wheel(e, data) {
        if (!data.loading && data.stage.is(':visible')) {
            e.preventDefault();
            var we = e.originalEvent;
            var signX = we.deltaX === 0 ? 0 : we.deltaX > 0 ? 1 : -1;
            var signY = we.deltaY === 0 ? 0 : we.deltaY > 0 ? 1 : -1;
            updateFrame(data, data.frame + signY, data.lane + signX);
        }
    }
    registerPlugin(NAME, {
        name: NAME,
        wheel: wheel
    });
})();

(function () {
    var template = "\n<div class='spritespin-progress'>\n  <div class='spritespin-progress-label'></div>\n  <div class='spritespin-progress-bar'></div>\n</div>\n";
    function getState$$1(data) {
        return getPluginState(data, NAME);
    }
    var NAME = 'progress';
    function onInit(e, data) {
        var state = getState$$1(data);
        if (!state.stage) {
            state.stage = $$1(template);
            state.stage.appendTo(data.target);
        }
        state.stage.find('.spritespin-progress-label')
            .text("0%")
            .css({ 'text-align': 'center' });
        state.stage.find('.spritespin-progress-bar').css({
            width: "0%"
        });
        state.stage.hide().fadeIn();
    }
    function onProgress(e, data) {
        var state = getState$$1(data);
        state.stage.find('.spritespin-progress-label')
            .text(data.progress.percent + "%")
            .css({ 'text-align': 'center' });
        state.stage.find('.spritespin-progress-bar').css({
            width: data.progress.percent + "%"
        });
    }
    function onLoad(e, data) {
        $$1(getState$$1(data).stage).fadeOut();
    }
    function onDestroy(e, data) {
        $$1(getState$$1(data).stage).remove();
    }
    registerPlugin(NAME, {
        name: NAME,
        onInit: onInit,
        onProgress: onProgress,
        onLoad: onLoad,
        onDestroy: onDestroy
    });
})();

(function () {
    var NAME = '360';
    function onLoad(e, data) {
        data.stage.find('.spritespin-frames').detach();
        if (data.renderer === 'image') {
            $(data.images).addClass('spritespin-frames').appendTo(data.stage);
        }
    }
    function onDraw(e, data) {
        var specs = findSpecs(data.metrics, data.frames, data.frame, data.lane);
        var sheet = specs.sheet;
        var sprite = specs.sprite;
        if (!sheet || !sprite) {
            return;
        }
        var src = data.source[sheet.id];
        var image = data.images[sheet.id];
        if (data.renderer === 'canvas') {
            data.canvas.show();
            var w = data.canvas[0].width / data.canvasRatio;
            var h = data.canvas[0].height / data.canvasRatio;
            data.context.clearRect(0, 0, w, h);
            data.context.drawImage(image, sprite.sampledX, sprite.sampledY, sprite.sampledWidth, sprite.sampledHeight, 0, 0, w, h);
            return;
        }
        var scaleX = data.stage.innerWidth() / sprite.sampledWidth;
        var scaleY = data.stage.innerHeight() / sprite.sampledHeight;
        var top = Math.floor(-sprite.sampledY * scaleY);
        var left = Math.floor(-sprite.sampledX * scaleX);
        var width = Math.floor(sheet.sampledWidth * scaleX);
        var height = Math.floor(sheet.sampledHeight * scaleY);
        if (data.renderer === 'background') {
            data.stage.css({
                'background-image': "url('" + src + "')",
                'background-position': left + "px " + top + "px",
                'background-repeat': 'no-repeat',
                // set custom background size to enable responsive rendering
                '-webkit-background-size': width + "px " + height + "px",
                '-moz-background-size': width + "px " + height + "px",
                '-o-background-size': width + "px " + height + "px",
                'background-size': width + "px " + height + "px" /* Chrome, Firefox 4+, IE 9+, Opera, Safari 5+ */
            });
            return;
        }
        $(data.images).hide();
        $(image).show().css({
            position: 'absolute',
            top: top,
            left: left,
            'max-width': 'initial',
            width: width,
            height: height
        });
    }
    registerPlugin(NAME, {
        name: NAME,
        onLoad: onLoad,
        onDraw: onDraw
    });
})();

(function () {
    var NAME = 'blur';
    function getState$$1(data) {
        return getPluginState(data, NAME);
    }
    function getOption(data, name, fallback) {
        return data[name] || fallback;
    }
    function init(e, data) {
        var state = getState$$1(data);
        state.canvas = state.canvas || $$1("<canvas class='blur-layer'></canvas>");
        state.context = state.context || state.canvas[0].getContext('2d');
        state.steps = state.steps || [];
        state.fadeTime = Math.max(getOption(data, 'blurFadeTime', 200), 1);
        state.frameTime = Math.max(getOption(data, 'blurFrameTime', data.frameTime), 16);
        state.trackTime = null;
        state.cssBlur = !!getOption(data, 'blurCss', false);
        var inner = getInnerSize(data);
        var outer = data.responsive ? getComputedSize(data) : getOuterSize(data);
        var css = getInnerLayout(data.sizeMode, inner, outer);
        state.canvas[0].width = data.width * data.canvasRatio;
        state.canvas[0].height = data.height * data.canvasRatio;
        state.canvas.css(css).show();
        state.context.scale(data.canvasRatio, data.canvasRatio);
        data.target.append(state.canvas);
    }
    function onFrame(e, data) {
        var state = getState$$1(data);
        trackFrame(data);
        if (state.timeout == null) {
            loop(data);
        }
    }
    function trackFrame(data) {
        var state = getState$$1(data);
        var ani = getPlaybackState(data);
        // distance between frames
        var d = Math.abs(data.frame - ani.lastFrame);
        // shortest distance
        d = d >= data.frames / 2 ? data.frames - d : d;
        state.steps.unshift({
            frame: data.frame,
            lane: data.lane,
            live: 1,
            step: state.frameTime / state.fadeTime,
            d: d,
            alpha: 0
        });
    }
    var toRemove = [];
    function removeOldFrames(frames) {
        toRemove.length = 0;
        for (var i = 0; i < frames.length; i += 1) {
            if (frames[i].alpha <= 0) {
                toRemove.push(i);
            }
        }
        for (var _i = 0, toRemove_1 = toRemove; _i < toRemove_1.length; _i++) {
            var item = toRemove_1[_i];
            frames.splice(item, 1);
        }
    }
    function loop(data) {
        var state = getState$$1(data);
        state.timeout = window.setTimeout(function () { tick(data); }, state.frameTime);
    }
    function killLoop(data) {
        var state = getState$$1(data);
        window.clearTimeout(state.timeout);
        state.timeout = null;
    }
    function applyCssBlur(canvas, d) {
        var amount = Math.min(Math.max((d / 2) - 4, 0), 2.5);
        var blur = "blur(" + amount + "px)";
        canvas.css({
            '-webkit-filter': blur,
            filter: blur
        });
    }
    function clearFrame(data, state) {
        state.canvas.show();
        var w = state.canvas[0].width / data.canvasRatio;
        var h = state.canvas[0].height / data.canvasRatio;
        // state.context.clearRect(0, 0, w, h)
    }
    function drawFrame(data, state, step) {
        if (step.alpha <= 0) {
            return;
        }
        var specs = findSpecs(data.metrics, data.frames, step.frame, step.lane);
        var sheet = specs.sheet;
        var sprite = specs.sprite;
        if (!sheet || !sprite) {
            return;
        }
        var src = data.source[sheet.id];
        var image = data.images[sheet.id];
        if (image.complete === false) {
            return;
        }
        state.canvas.show();
        var w = state.canvas[0].width / data.canvasRatio;
        var h = state.canvas[0].height / data.canvasRatio;
        state.context.globalAlpha = step.alpha;
        state.context.drawImage(image, sprite.sampledX, sprite.sampledY, sprite.sampledWidth, sprite.sampledHeight, 0, 0, w, h);
    }
    function tick(data) {
        var state = getState$$1(data);
        killLoop(data);
        if (!state.context) {
            return;
        }
        var d = 0;
        clearFrame(data, state);
        state.context.clearRect(0, 0, data.width, data.height);
        for (var _i = 0, _a = state.steps; _i < _a.length; _i++) {
            var step = _a[_i];
            step.live = Math.max(step.live - step.step, 0);
            step.alpha = Math.max(step.live - 0.25, 0);
            drawFrame(data, state, step);
            d += step.alpha + step.d;
        }
        if (state.cssBlur) {
            applyCssBlur(state.canvas, d);
        }
        removeOldFrames(state.steps);
        if (state.steps.length) {
            loop(data);
        }
    }
    registerPlugin(NAME, {
        name: NAME,
        onLoad: init,
        onFrameChanged: onFrame
    });
})();

(function () {
    var max = Math.max;
    var min = Math.min;
    var NAME = 'ease';
    function getState$$1(data) {
        return getPluginState(data, NAME);
    }
    function getOption(data, name, fallback) {
        return data[name] || fallback;
    }
    function init(e, data) {
        var state = getState$$1(data);
        state.maxSamples = max(getOption(data, 'easeMaxSamples', 5), 0);
        state.damping = max(min(getOption(data, 'easeDamping', 0.9), 0.999), 0);
        state.abortTime = max(getOption(data, 'easeAbortTime', 250), 16);
        state.updateTime = max(getOption(data, 'easeUpdateTime', data.frameTime), 16);
        state.samples = [];
        state.steps = [];
    }
    function update(e, data) {
        if (is(data, 'dragging')) {
            killLoop(data);
            sampleInput(data);
        }
    }
    function end(e, data) {
        var state = getState$$1(data);
        var samples = state.samples;
        var last;
        var lanes = 0;
        var frames = 0;
        var time = 0;
        for (var _i = 0, samples_1 = samples; _i < samples_1.length; _i++) {
            var sample = samples_1[_i];
            if (!last) {
                last = sample;
                continue;
            }
            var dt = sample.time - last.time;
            if (dt > state.abortTime) {
                lanes = frames = time = 0;
                return killLoop(data);
            }
            frames += sample.frame - last.frame;
            lanes += sample.lane - last.lane;
            time += dt;
            last = sample;
        }
        samples.length = 0;
        if (!time) {
            return;
        }
        state.lane = data.lane;
        state.lanes = 0;
        state.laneStep = lanes / time * state.updateTime;
        state.frame = data.frame;
        state.frames = 0;
        state.frameStep = frames / time * state.updateTime;
        loop(data);
    }
    function sampleInput(data) {
        var state = getState$$1(data);
        // add a new sample
        state.samples.push({
            time: new Date().getTime(),
            frame: data.frame,
            lane: data.lane
        });
        // drop old samples
        while (state.samples.length > state.maxSamples) {
            state.samples.shift();
        }
    }
    function killLoop(data) {
        var state = getState$$1(data);
        if (state.handler != null) {
            window.clearTimeout(state.handler);
            state.handler = null;
        }
    }
    function loop(data) {
        var state = getState$$1(data);
        state.handler = window.setTimeout(function () { tick(data); }, state.updateTime);
    }
    function tick(data) {
        var state = getState$$1(data);
        state.lanes += state.laneStep;
        state.frames += state.frameStep;
        state.laneStep *= state.damping;
        state.frameStep *= state.damping;
        var frame = Math.floor(state.frame + state.frames);
        var lane = Math.floor(state.lane + state.lanes);
        updateFrame(data, frame, lane);
        if (is(data, 'dragging')) {
            killLoop(data);
        }
        else if (Math.abs(state.frameStep) > 0.005 || Math.abs(state.laneStep) > 0.005) {
            loop(data);
        }
        else {
            killLoop(data);
        }
    }
    registerPlugin(NAME, {
        name: NAME,
        onLoad: init,
        mousemove: update,
        mouseup: end,
        mouseleave: end,
        touchmove: update,
        touchend: end,
        touchcancel: end
    });
})();

(function () {
    var NAME = 'gallery';
    function getState$$1(data) {
        return getPluginState(data, NAME);
    }
    function getOption(data, name, fallback) {
        return data[name] || fallback;
    }
    function load(e, data) {
        var state = getState$$1(data);
        state.images = [];
        state.offsets = [];
        state.frame = data.frame;
        state.speed = getOption(data, 'gallerySpeed', 500);
        state.opacity = getOption(data, 'galleryOpacity', 0.25);
        state.stage = getOption(data, 'galleryStage', $$1('<div></div>'));
        state.stage.empty().addClass('gallery-stage').prependTo(data.stage);
        var size = 0;
        for (var _i = 0, _a = data.images; _i < _a.length; _i++) {
            var image = _a[_i];
            var naturalSize$$1 = naturalSize(image);
            var scale = data.height / naturalSize$$1.height;
            var img = $$1(image);
            state.stage.append(img);
            state.images.push(img);
            state.offsets.push(-size + (data.width - image.width * scale) / 2);
            size += data.width;
            img.css({
                'max-width': 'initial',
                opacity: state.opacity,
                width: data.width,
                height: data.height
            });
        }
        var innerSize = getInnerSize(data);
        var outerSize = data.responsive ? getComputedSize(data) : getOuterSize(data);
        var layout = getInnerLayout(data.sizeMode, innerSize, outerSize);
        state.stage.css(layout).css({ width: size, left: state.offsets[state.frame] });
        state.images[state.frame].animate({ opacity: 1 }, { duration: state.speed });
    }
    function draw(e, data) {
        var state = getState$$1(data);
        var input = getInputState(data);
        var isDragging = is(data, 'dragging');
        if (state.frame !== data.frame && !isDragging) {
            state.stage.stop(true, false).animate({ left: state.offsets[data.frame] }, { duration: state.speed });
            state.images[state.frame].animate({ opacity: state.opacity }, { duration: state.speed });
            state.frame = data.frame;
            state.images[state.frame].animate({ opacity: 1 }, { duration: state.speed });
            state.stage.animate({ left: state.offsets[state.frame] });
        }
        else if (isDragging || state.dX !== input.dX) {
            state.dX = input.dX;
            state.ddX = input.ddX;
            state.stage.stop(true, true).css({ left: state.offsets[state.frame] + state.dX });
        }
    }
    registerPlugin(NAME, {
        name: NAME,
        onLoad: load,
        onDraw: draw
    });
})();

(function () {
    var NAME = 'panorama';
    function getState$$1(data) {
        return getPluginState(data, NAME);
    }
    function onLoad(e, data) {
        var state = getState$$1(data);
        var sprite = data.metrics[0];
        if (!sprite) {
            return;
        }
        if (data.orientation === 'horizontal') {
            state.scale = data.target.innerHeight() / sprite.sampledHeight;
            data.frames = sprite.sampledWidth;
        }
        else {
            state.scale = data.target.innerWidth() / sprite.sampledWidth;
            data.frames = sprite.sampledHeight;
        }
        var width = Math.floor(sprite.sampledWidth * state.scale);
        var height = Math.floor(sprite.sampledHeight * state.scale);
        data.stage.css({
            'background-image': "url(" + data.source[sprite.id] + ")",
            'background-repeat': 'repeat-both',
            // set custom background size to enable responsive rendering
            '-webkit-background-size': width + "px " + height + "px",
            '-moz-background-size': width + "px " + height + "px",
            '-o-background-size': width + "px " + height + "px",
            'background-size': width + "px " + height + "px" /* Chrome, Firefox 4+, IE 9+, Opera, Safari 5+ */
        });
    }
    function onDraw(e, data) {
        var state = getState$$1(data);
        var px = data.orientation === 'horizontal' ? 1 : 0;
        var py = px ? 0 : 1;
        var offset = data.frame % data.frames;
        var left = Math.round(px * offset * state.scale);
        var top = Math.round(py * offset * state.scale);
        data.stage.css({ 'background-position': left + "px " + top + "px" });
    }
    registerPlugin(NAME, {
        name: NAME,
        onLoad: onLoad,
        onDraw: onDraw
    });
})();

(function () {
    var NAME = 'zoom';
    function getState$$1(data) {
        return getPluginState(data, NAME);
    }
    function getOption(data, name, fallback) {
        return name in data ? data[name] : fallback;
    }
    function onInit(e, data) {
        var state = getState$$1(data);
        state.source = getOption(data, 'zoomSource', data.source);
        state.useWheel = getOption(data, 'zoomUseWheel', false);
        state.useClick = getOption(data, 'zoomUseClick', true);
        state.pinFrame = getOption(data, 'zoomPinFrame', true);
        state.doubleClickTime = getOption(data, 'zoomDoubleClickTime', 500);
        state.stage = state.stage || $$1("<div class='zoom-stage'></div>");
        state.stage.css({
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute'
        })
            .appendTo(data.target)
            .hide();
    }
    function onDestroy(e, data) {
        var state = getState$$1(data);
        if (state.stage) {
            state.stage.remove();
            delete state.stage;
        }
    }
    function updateInput$$1(e, data) {
        var state = getState$$1(data);
        if (!state.stage.is(':visible')) {
            return;
        }
        e.preventDefault();
        if (state.pinFrame) {
            // hack into drag/move module and disable dragging
            // prevents frame change during zoom mode
            flag(data, 'dragging', false);
        }
        // grab touch/cursor position
        var cursor = getCursorPosition(e);
        // normalize cursor position into [0:1] range
        var x = cursor.x / data.width;
        var y = cursor.y / data.height;
        if (state.oldX == null) {
            state.oldX = x;
            state.oldY = y;
        }
        if (state.currentX == null) {
            state.currentX = x;
            state.currentY = y;
        }
        // calculate move delta since last frame and remember current position
        var dx = x - state.oldX;
        var dy = y - state.oldY;
        state.oldX = x;
        state.oldY = y;
        // invert drag direction for touch events to enable 'natural' scrolling
        if (e.type.match(/touch/)) {
            dx = -dx;
            dy = -dy;
        }
        // accumulate display coordinates
        state.currentX = clamp(state.currentX + dx, 0, 1);
        state.currentY = clamp(state.currentY + dy, 0, 1);
        updateFrame(data, data.frame, data.lane);
    }
    function onClick(e, data) {
        var state = getState$$1(data);
        if (!state.useClick) {
            return;
        }
        e.preventDefault();
        // simulate double click
        var clickTime = new Date().getTime();
        if (!state.clickTime) {
            // on first click
            state.clickTime = clickTime;
            return;
        }
        // on second click
        var timeDelta = clickTime - state.clickTime;
        if (timeDelta > state.doubleClickTime) {
            // took too long, back to first click
            state.clickTime = clickTime;
            return;
        }
        // on valid double click
        state.clickTime = undefined;
        if (toggleZoom(data)) {
            updateInput$$1(e, data);
        }
    }
    function onMove(e, data) {
        var state = getState$$1(data);
        if (state.stage.is(':visible')) {
            updateInput$$1(e, data);
        }
    }
    function onDraw(e, data) {
        var state = getState$$1(data);
        // calculate the frame index
        var index = data.lane * data.frames + data.frame;
        // get the zoom image. Use original frames as fallback. This won't work for spritesheets
        var source = state.source[index];
        var spec = findSpecs(data.metrics, data.frames, data.frame, data.lane);
        // get display position
        var x = state.currentX;
        var y = state.currentY;
        // fallback to centered position
        if (x == null) {
            x = state.currentX = 0.5;
            y = state.currentY = 0.5;
        }
        if (source) {
            // scale up from [0:1] to [0:100] range
            x = Math.floor(x * 100);
            y = Math.floor(y * 100);
            // update background image and position
            state.stage.css({
                'background-repeat': 'no-repeat',
                'background-image': "url('" + source + "')",
                'background-position': x + "% " + y + "%"
            });
        }
        else if (spec.sheet && spec.sprite) {
            var sprite = spec.sprite;
            var sheet = spec.sheet;
            var src = data.source[sheet.id];
            var left = -Math.floor(sprite.sampledX + x * (sprite.sampledWidth - data.width));
            var top_1 = -Math.floor(sprite.sampledY + y * (sprite.sampledHeight - data.height));
            var width = sheet.sampledWidth;
            var height = sheet.sampledHeight;
            state.stage.css({
                'background-image': "url('" + src + "')",
                'background-position': left + "px " + top_1 + "px",
                'background-repeat': 'no-repeat',
                // set custom background size to enable responsive rendering
                '-webkit-background-size': width + "px " + height + "px",
                '-moz-background-size': width + "px " + height + "px",
                '-o-background-size': width + "px " + height + "px",
                'background-size': width + "px " + height + "px" /* Chrome, Firefox 4+, IE 9+, Opera, Safari 5+ */
            });
        }
    }
    function toggleZoom(data) {
        var state = getState$$1(data);
        if (!state.stage) {
            throw new Error('zoom module is not initialized or is not available.');
        }
        if (state.stage.is(':visible')) {
            showZoom(data);
        }
        else {
            hideZoom(data);
            return true;
        }
        return false;
    }
    function showZoom(data) {
        var state = getState$$1(data);
        state.stage.fadeOut();
        data.stage.fadeIn();
    }
    function hideZoom(data) {
        var state = getState$$1(data);
        state.stage.fadeIn();
        data.stage.fadeOut();
    }
    function wheel(e, data) {
        var state = getState$$1(data);
        if (!data.loading && state.useWheel) {
            var we = e.originalEvent;
            var signY = we.deltaY === 0 ? 0 : we.deltaY > 0 ? 1 : -1;
            if (typeof state.useWheel === 'number') {
                signY *= state.useWheel;
            }
            if (state.stage.is(':visible') && signY > 0) {
                e.preventDefault();
                showZoom(data);
            }
            if (!state.stage.is(':visible') && signY < 0) {
                e.preventDefault();
                hideZoom(data);
            }
        }
    }
    registerPlugin(NAME, {
        name: NAME,
        mousedown: onClick,
        touchstart: onClick,
        mousemove: onMove,
        touchmove: onMove,
        wheel: wheel,
        onInit: onInit,
        onDestroy: onDestroy,
        onDraw: onDraw
    });
    extendApi({
        toggleZoom: function () { toggleZoom(this.data); } // tslint:disable-line
    });
})();

var Utils = _Utils;

exports.Utils = Utils;
exports.sourceArray = sourceArray;
exports.Api = Api;
exports.extendApi = extendApi;
exports.instances = instances;
exports.applyEvents = applyEvents;
exports.boot = boot;
exports.create = create;
exports.createOrUpdate = createOrUpdate;
exports.destroy = destroy;
exports.namespace = namespace;
exports.eventNames = eventNames;
exports.callbackNames = callbackNames;
exports.eventsToPrevent = eventsToPrevent;
exports.defaults = defaults;
exports.getInputState = getInputState;
exports.updateInput = updateInput;
exports.resetInput = resetInput;
exports.applyLayout = applyLayout;
exports.getPlaybackState = getPlaybackState;
exports.updateFrame = updateFrame;
exports.stopAnimation = stopAnimation;
exports.applyAnimation = applyAnimation;
exports.startAnimation = startAnimation;
exports.registerPlugin = registerPlugin;
exports.registerModule = registerModule;
exports.getPlugin = getPlugin;
exports.applyPlugins = applyPlugins;
exports.getState = getState;
exports.getPluginState = getPluginState;
exports.is = is;
exports.flag = flag;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=spritespin.js.map

/*
 jquery.instagramFeed

 @version 1.2.6

 @author Javier Sanahuja Liebana <bannss1@gmail.com>
 @contributor csanahuja <csanahuja@gmail.com>

 https://github.com/jsanahuja/jquery.instagramFeed

*/
(function(g){function r(g){return g.replace(/[&<>"'`=\/]/g,function(a){return f[a]})}var m={host:"https://www.instagram.com/",username:"",tag:"",container:"",display_profile:!0,display_biography:!0,display_gallery:!0,display_igtv:!1,get_data:!1,callback:null,styling:!0,items:8,items_per_row:4,margin:.5,image_size:640},n={150:0,240:1,320:2,480:3,640:4},f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};g.instagramFeed=function(f){var a=g.fn.extend({},
m,f);if(""==a.username&&""==a.tag)return console.error("Instagram Feed: Error, no username or tag found."),!1;"undefined"!==typeof a.get_raw_json&&(console.warn("Instagram Feed: get_raw_json is deprecated. See use get_data instead"),a.get_data=a.get_raw_json);if(!a.get_data&&""==a.container)return console.error("Instagram Feed: Error, no container found."),!1;if(a.get_data&&null==a.callback)return console.error("Instagram Feed: Error, no callback defined to get the raw json"),!1;var l=""==a.username;
g.get(l?a.host+"explore/tags/"+a.tag+"/":a.host+a.username+"/",function(b){try{b=b.split("window._sharedData = ")[1].split("\x3c/script>")[0]}catch(u){console.error("Instagram Feed: It looks like the profile you are trying to fetch is age restricted. See https://github.com/jsanahuja/InstagramFeed/issues/26");return}b=JSON.parse(b.substr(0,b.length-1));b=b.entry_data.ProfilePage||b.entry_data.TagPage;if("undefined"===typeof b)console.error("Instagram Feed: It looks like YOUR network has been temporary banned because of too many requests. See https://github.com/jsanahuja/jquery.instagramFeed/issues/25");
else if(b=b[0].graphql.user||b[0].graphql.hashtag,a.get_data)a.callback(b);else{var c="",h="",k="",e="",f="";a.styling&&(c=" style='text-align:center;'",h=" style='border-radius:10em;width:15%;max-width:125px;min-width:50px;'",k=" style='font-size:1.2em;'",e=" style='font-size:1em;'",f=" style='margin:"+a.margin+"% "+a.margin+"%;width:"+(100-2*a.margin*a.items_per_row)/a.items_per_row+"%;float:left;'");var d="";a.display_profile&&(d=d+("<div class='instagram_profile'"+c+">")+("<img class='instagram_profile_image' src='"+
b.profile_pic_url+"' alt='"+(l?b.name+" tag pic":b.username+" profile pic")+"'"+h+" />"),d=l?d+("<p class='instagram_tag'"+k+"><a href='https://www.instagram.com/explore/tags/"+a.tag+"' rel='noopener' target='_blank'>#"+a.tag+"</a></p>"):d+("<p class='instagram_username'"+k+">@"+b.full_name+" (<a href='https://www.instagram.com/"+a.username+"' rel='noopener' target='_blank'>@"+a.username+"</a>)</p>"),!l&&a.display_biography&&(d+="<p class='instagram_biography'"+e+">"+b.biography+"</p>"),d+="</div>");
k="undefined"!==typeof n[a.image_size]?n[a.image_size]:n[640];if(a.display_gallery)if("undefined"!==typeof b.is_private&&!0===b.is_private)d+="<p class='instagram_private'><strong>This profile is private</strong></p>";else{e=(b.edge_owner_to_timeline_media||b.edge_hashtag_to_media).edges;h=e.length>a.items?a.items:e.length;d+="<div class='instagram_gallery'>";for(c=0;c<h;c++){var m="https://www.instagram.com/p/"+e[c].node.shortcode;switch(e[c].node.__typename){case "GraphSidecar":var p="sidecar";
var q=e[c].node.thumbnail_resources[k].src;break;case "GraphVideo":p="video";q=e[c].node.thumbnail_src;break;default:p="image",q=e[c].node.thumbnail_resources[k].src}var t="undefined"!==typeof e[c].node.edge_media_to_caption.edges[0]&&"undefined"!==typeof e[c].node.edge_media_to_caption.edges[0].node&&"undefined"!==typeof e[c].node.edge_media_to_caption.edges[0].node.text&&null!==e[c].node.edge_media_to_caption.edges[0].node.text?e[c].node.edge_media_to_caption.edges[0].node.text:"undefined"!==typeof e[c].node.accessibility_caption&&
null!==e[c].node.accessibility_caption?e[c].node.accessibility_caption:(l?b.name:b.username)+" image "+c;d+="<a href='"+m+"' class='instagram-"+p+"' rel='noopener' target='_blank'>";d+="<img src='"+q+"' alt='"+r(t)+"'"+f+" />";d+="</a>"}d+="</div>"}if(a.display_igtv&&"undefined"!==typeof b.edge_felix_video_timeline&&(b=b.edge_felix_video_timeline.edges,h=b.length>a.items?a.items:b.length,0<b.length)){d+="<div class='instagram_igtv'>";for(c=0;c<h;c++)d+="<a href='https://www.instagram.com/p/"+b[c].node.shortcode+
"' rel='noopener' target='_blank'>",d+="<img src='"+b[c].node.thumbnail_src+"' alt='"+a.username+" instagram image "+c+"'"+f+" />",d+="</a>";d+="</div>"}g(a.container).html(d)}}).fail(function(a){console.error("Instagram Feed: Unable to fetch the given user/tag. Instagram responded with the status code: ",a.status)});return!0}})(jQuery);


/*! lazysizes - v4.1.8 */
!function (a, b) { var c = function (d) { b(a.lazySizes, d), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c, d) { "use strict"; function e(a) { var b = getComputedStyle(a, null) || {}, c = b.fontFamily || "", d = c.match(j) || "", e = d && c.match(k) || ""; return e && (e = e[1]), { fit: d && d[1] || "", position: n[e] || e || "center" } } function f(a, b) { var d, e, f = c.cfg, g = a.cloneNode(!1), h = g.style, i = function () { var b = a.currentSrc || a.src; b && e !== b && (e = b, h.backgroundImage = "url(" + (m.test(b) ? JSON.stringify(b) : b) + ")", d || (d = !0, c.rC(g, f.loadingClass), c.aC(g, f.loadedClass))) }, j = function () { c.rAF(i) }; a._lazysizesParentFit = b.fit, a.addEventListener("lazyloaded", j, !0), a.addEventListener("load", j, !0), g.addEventListener("load", function () { var a = g.currentSrc || g.src; a && a != l && (g.src = l, g.srcset = "") }), c.rAF(function () { var d = a, e = a.parentNode; "PICTURE" == e.nodeName.toUpperCase() && (d = e, e = e.parentNode), c.rC(g, f.loadedClass), c.rC(g, f.lazyClass), c.aC(g, f.loadingClass), c.aC(g, f.objectFitClass || "lazysizes-display-clone"), g.getAttribute(f.srcsetAttr) && g.setAttribute(f.srcsetAttr, ""), g.getAttribute(f.srcAttr) && g.setAttribute(f.srcAttr, ""), g.src = l, g.srcset = "", h.backgroundRepeat = "no-repeat", h.backgroundPosition = b.position, h.backgroundSize = b.fit, d.style.display = "none", a.setAttribute("data-parent-fit", b.fit), a.setAttribute("data-parent-container", "prev"), e.insertBefore(g, d), a._lazysizesParentFit && delete a._lazysizesParentFit, a.complete && i() }) } var g = b.createElement("a").style, h = "objectFit" in g, i = h && "objectPosition" in g, j = /object-fit["']*\s*:\s*["']*(contain|cover)/, k = /object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/, l = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", m = /\(|\)|'/, n = { center: "center", "50% 50%": "center" }; if (!h || !i) { var o = function (a) { if (a.detail.instance == c) { var b = a.target, d = e(b); !d.fit || h && "center" == d.position || f(b, d) } }; a.addEventListener("lazyunveilread", o, !0), d && d.detail && o(d) } });
/*! lazysizes - v4.1.8 */
!function (a, b) { var c = function () { b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c) { "use strict"; function d(b, c) { var d, e, f, g, h = a.getComputedStyle(b); e = b.parentNode, g = { isPicture: !(!e || !m.test(e.nodeName || "")) }, f = function (a, c) { var d = b.getAttribute("data-" + a); if (!d) { var e = h.getPropertyValue("--ls-" + a); e && (d = e.trim()) } if (d) { if ("true" == d) d = !0; else if ("false" == d) d = !1; else if (l.test(d)) d = parseFloat(d); else if ("function" == typeof j[a]) d = j[a](b, d); else if (q.test(d)) try { d = JSON.parse(d) } catch (a) { } g[a] = d } else a in j && "function" != typeof j[a] ? g[a] = j[a] : c && "function" == typeof j[a] && (g[a] = j[a](b, d)) }; for (d in j) f(d); return c.replace(p, function (a, b) { b in g || f(b, !0) }), g } function e(a, b) { var c = [], d = function (a, c) { return k[typeof b[c]] ? b[c] : a }; return c.srcset = [], b.absUrl && (s.setAttribute("href", a), a = s.href), a = ((b.prefix || "") + a + (b.postfix || "")).replace(p, d), b.widths.forEach(function (d) { var e = b.widthmap[d] || d, f = b.aspectratio || b.ratio, g = !b.aspectratio && j.traditionalRatio, h = { u: a.replace(n, e).replace(o, f ? g ? Math.round(d * f) : Math.round(d / f) : ""), w: d }; c.push(h), c.srcset.push(h.c = h.u + " " + d + "w") }), c } function f(a, c, d) { var f = 0, g = 0, h = d; if (a) { if ("container" === c.ratio) { for (f = h.scrollWidth, g = h.scrollHeight; !(f && g || h === b);)h = h.parentNode, f = h.scrollWidth, g = h.scrollHeight; f && g && (c.ratio = g / f) } a = e(a, c), a.isPicture = c.isPicture, u && "IMG" == d.nodeName.toUpperCase() ? d.removeAttribute(i.srcsetAttr) : d.setAttribute(i.srcsetAttr, a.srcset.join(", ")), Object.defineProperty(d, "_lazyrias", { value: a, writable: !0 }) } } function g(a, b) { var e = d(a, b); return j.modifyOptions.call(a, { target: a, details: e, detail: e }), c.fire(a, "lazyriasmodifyoptions", e), e } function h(a) { return a.getAttribute(a.getAttribute("data-srcattr") || j.srcAttr) || a.getAttribute(i.srcsetAttr) || a.getAttribute(i.srcAttr) || a.getAttribute("data-pfsrcset") || "" } var i, j, k = { string: 1, number: 1 }, l = /^\-*\+*\d+\.*\d*$/, m = /^picture$/i, n = /\s*\{\s*width\s*\}\s*/i, o = /\s*\{\s*height\s*\}\s*/i, p = /\s*\{\s*([a-z0-9]+)\s*\}\s*/gi, q = /^\[.*\]|\{.*\}$/, r = /^(?:auto|\d+(px)?)$/, s = b.createElement("a"), t = b.createElement("img"), u = "srcset" in t && !("sizes" in t), v = !!a.HTMLPictureElement && !u; !function () { var b, d = function () { }, e = { prefix: "", postfix: "", srcAttr: "data-src", absUrl: !1, modifyOptions: d, widthmap: {}, ratio: !1, traditionalRatio: !1, aspectratio: !1 }; i = c && c.cfg || a.lazySizesConfig, i || (i = {}, a.lazySizesConfig = i), i.supportsType || (i.supportsType = function (a) { return !a }), i.rias || (i.rias = {}), "widths" in (j = i.rias) || (j.widths = [], function (a) { for (var b, c = 0; !b || b < 3e3;)c += 5, c > 30 && (c += 1), b = 36 * c, a.push(b) }(j.widths)); for (b in e) b in j || (j[b] = e[b]) }(), addEventListener("lazybeforesizes", function (a) { if (a.detail.instance == c) { var b, d, e, k, l, m, o, p, q, s, t, u, x; if (b = a.target, a.detail.dataAttr && !a.defaultPrevented && !j.disabled && (q = b.getAttribute(i.sizesAttr) || b.getAttribute("sizes")) && r.test(q)) { if (d = h(b), e = g(b, d), t = n.test(e.prefix) || n.test(e.postfix), e.isPicture && (k = b.parentNode)) for (l = k.getElementsByTagName("source"), m = 0, o = l.length; m < o; m++)(t || n.test(p = h(l[m]))) && (f(p, e, l[m]), u = !0); t || n.test(d) ? (f(d, e, b), u = !0) : u && (x = [], x.srcset = [], x.isPicture = !0, Object.defineProperty(b, "_lazyrias", { value: x, writable: !0 })), u && (v ? b.removeAttribute(i.srcAttr) : "auto" != q && (s = { width: parseInt(q, 10) }, w({ target: b, detail: s }))) } } }, !0); var w = function () { var d = function (a, b) { return a.w - b.w }, e = function (a) { var b, c, d = a.length, e = a[d - 1], f = 0; for (f; f < d; f++)if (e = a[f], e.d = e.w / a.w, e.d >= a.d) { !e.cached && (b = a[f - 1]) && b.d > a.d - .13 * Math.pow(a.d, 2.2) && (c = Math.pow(b.d - .6, 1.6), b.cached && (b.d += .15 * c), b.d + (e.d - a.d) * c > a.d && (e = b)); break } return e }, f = function (a, b) { var d; return !a._lazyrias && c.pWS && (d = c.pWS(a.getAttribute(i.srcsetAttr || ""))).length && (Object.defineProperty(a, "_lazyrias", { value: d, writable: !0 }), b && a.parentNode && (d.isPicture = "PICTURE" == a.parentNode.nodeName.toUpperCase())), a._lazyrias }, g = function (b) { var d = a.devicePixelRatio || 1, e = c.getX && c.getX(b); return Math.min(e || d, 2.4, d) }, h = function (b, c) { var h, i, j, k, l, m; if (l = b._lazyrias, l.isPicture && a.matchMedia) for (i = 0, h = b.parentNode.getElementsByTagName("source"), j = h.length; i < j; i++)if (f(h[i]) && !h[i].getAttribute("type") && (!(k = h[i].getAttribute("media")) || (matchMedia(k) || {}).matches)) { l = h[i]._lazyrias; break } return (!l.w || l.w < c) && (l.w = c, l.d = g(b), m = e(l.sort(d))), m }, j = function (d) { if (d.detail.instance == c) { var e, g = d.target; if (!u && (a.respimage || a.picturefill || lazySizesConfig.pf)) return void b.removeEventListener("lazybeforesizes", j); ("_lazyrias" in g || d.detail.dataAttr && f(g, !0)) && (e = h(g, d.detail.width)) && e.u && g._lazyrias.cur != e.u && (g._lazyrias.cur = e.u, e.cached = !0, c.rAF(function () { g.setAttribute(i.srcAttr, e.u), g.setAttribute("src", e.u) })) } }; return v ? j = function () { } : addEventListener("lazybeforesizes", j), j }() });
/*! lazysizes - v4.1.8 */
!function (a, b) { var c = b(a, a.document); a.lazySizes = c, "object" == typeof module && module.exports && (module.exports = c) }(window, function (a, b) { "use strict"; if (b.getElementsByClassName) { var c, d, e = b.documentElement, f = a.Date, g = a.HTMLPictureElement, h = "addEventListener", i = "getAttribute", j = a[h], k = a.setTimeout, l = a.requestAnimationFrame || k, m = a.requestIdleCallback, n = /^picture$/i, o = ["load", "error", "lazyincluded", "_lazyloaded"], p = {}, q = Array.prototype.forEach, r = function (a, b) { return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b] }, s = function (a, b) { r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b) }, t = function (a, b) { var c; (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " ")) }, u = function (a, b, c) { var d = c ? h : "removeEventListener"; c && u(a, b), o.forEach(function (c) { a[d](c, b) }) }, v = function (a, d, e, f, g) { var h = b.createEvent("Event"); return e || (e = {}), e.instance = c, h.initEvent(d, !f, !g), h.detail = e, a.dispatchEvent(h), h }, w = function (b, c) { var e; !g && (e = a.picturefill || d.pf) ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src), e({ reevaluate: !0, elements: [b] })) : c && c.src && (b.src = c.src) }, x = function (a, b) { return (getComputedStyle(a, null) || {})[b] }, y = function (a, b, c) { for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;)c = b.offsetWidth, b = b.parentNode; return c }, z = function () { var a, c, d = [], e = [], f = d, g = function () { var b = f; for (f = d.length ? e : d, a = !0, c = !1; b.length;)b.shift()(); a = !1 }, h = function (d, e) { a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g))) }; return h._lsFlush = g, h }(), A = function (a, b) { return b ? function () { z(a) } : function () { var b = this, c = arguments; z(function () { a.apply(b, c) }) } }, B = function (a) { var b, c = 0, e = d.throttleDelay, g = d.ricTimeout, h = function () { b = !1, c = f.now(), a() }, i = m && g > 49 ? function () { m(h, { timeout: g }), g !== d.ricTimeout && (g = d.ricTimeout) } : A(function () { k(h) }, !0); return function (a) { var d; (a = !0 === a) && (g = 33), b || (b = !0, d = e - (f.now() - c), d < 0 && (d = 0), a || d < 9 ? i() : k(i, d)) } }, C = function (a) { var b, c, d = 99, e = function () { b = null, a() }, g = function () { var a = f.now() - c; a < d ? k(g, d - a) : (m || e)(e) }; return function () { c = f.now(), b || (b = k(g, d)) } }; !function () { var b, c = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: !0, ricTimeout: 0, throttleDelay: 125 }; d = a.lazySizesConfig || a.lazysizesConfig || {}; for (b in c) b in d || (d[b] = c[b]); a.lazySizesConfig = d, k(function () { d.init && F() }) }(); var D = function () { var g, l, m, o, p, y, D, F, G, H, I, J, K = /^img$/i, L = /^iframe$/i, M = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent), N = 0, O = 0, P = 0, Q = -1, R = function (a) { P-- , (!a || P < 0 || !a.target) && (P = 0) }, S = function (a) { return null == J && (J = "hidden" == x(b.body, "visibility")), J || "hidden" != x(a.parentNode, "visibility") && "hidden" != x(a, "visibility") }, T = function (a, c) { var d, f = a, g = S(a); for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != e;)(g = (x(f, "opacity") || 1) > 0) && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I > d.top - 1 && F < d.bottom + 1); return g }, U = function () { var a, f, h, j, k, m, n, p, q, r, s, t, u = c.elements; if ((o = d.loadMode) && P < 8 && (a = u.length)) { for (f = 0, Q++; f < a; f++)if (u[f] && !u[f]._lazyRace) if (!M || c.prematureUnveil && c.prematureUnveil(u[f])) aa(u[f]); else if ((p = u[f][i]("data-expand")) && (m = 1 * p) || (m = O), r || (r = !d.expand || d.expand < 1 ? e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370 : d.expand, c._defEx = r, s = r * d.expFactor, t = d.hFac, J = null, O < s && P < 1 && Q > 2 && o > 2 && !b.hidden ? (O = s, Q = 0) : O = o > 1 && Q > 1 && P < 6 ? r : N), q !== m && (y = innerWidth + m * t, D = innerHeight + m, n = -1 * m, q = m), h = u[f].getBoundingClientRect(), (I = h.bottom) >= n && (F = h.top) <= D && (H = h.right) >= n * t && (G = h.left) <= y && (I || H || G || F) && (d.loadHidden || S(u[f])) && (l && P < 3 && !p && (o < 3 || Q < 4) || T(u[f], m))) { if (aa(u[f]), k = !0, P > 9) break } else !k && l && !j && P < 4 && Q < 4 && o > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !p && (I || H || G || F || "auto" != u[f][i](d.sizesAttr))) && (j = g[0] || u[f]); j && !k && aa(j) } }, V = B(U), W = function (a) { var b = a.target; if (b._lazyCache) return void delete b._lazyCache; R(a), s(b, d.loadedClass), t(b, d.loadingClass), u(b, Y), v(b, "lazyloaded") }, X = A(W), Y = function (a) { X({ target: a.target }) }, Z = function (a, b) { try { a.contentWindow.location.replace(b) } catch (c) { a.src = b } }, $ = function (a) { var b, c = a[i](d.srcsetAttr); (b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c) }, _ = A(function (a, b, c, e, f) { var g, h, j, l, o, p; (o = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)), h = a[i](d.srcsetAttr), g = a[i](d.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), o = { target: a }, s(a, d.loadingClass), p && (clearTimeout(m), m = k(R, 2500), u(a, Y, !0)), l && q.call(j.getElementsByTagName("source"), $), h ? a.setAttribute("srcset", h) : g && !l && (L.test(a.nodeName) ? Z(a, g) : a.src = g), f && (h || l) && w(a, { src: g })), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z(function () { var b = a.complete && a.naturalWidth > 1; p && !b || (b && s(a, "ls-is-cached"), W(o), a._lazyCache = !0, k(function () { "_lazyCache" in a && delete a._lazyCache }, 9)), "lazy" == a.loading && P-- }, !0) }), aa = function (a) { if (!a._lazyRace) { var b, c = K.test(a.nodeName), e = c && (a[i](d.sizesAttr) || a[i]("sizes")), f = "auto" == e; (!f && l || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass) || !r(a, d.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, P++ , _(a, b, f, e, c)) } }, ba = C(function () { d.loadMode = 3, V() }), ca = function () { 3 == d.loadMode && (d.loadMode = 2), ba() }, da = function () { if (!l) { if (f.now() - p < 999) return void k(da, 999); l = !0, d.loadMode = 3, V(), j("scroll", ca, !0) } }; return { _: function () { p = f.now(), c.elements = b.getElementsByClassName(d.lazyClass), g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), j("scroll", V, !0), j("resize", V, !0), a.MutationObserver ? new MutationObserver(V).observe(e, { childList: !0, subtree: !0, attributes: !0 }) : (e[h]("DOMNodeInserted", V, !0), e[h]("DOMAttrModified", V, !0), setInterval(V, 999)), j("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (a) { b[h](a, V, !0) }), /d$|^c/.test(b.readyState) ? da() : (j("load", da), b[h]("DOMContentLoaded", V), k(da, 2e4)), c.elements.length ? (U(), z._lsFlush()) : V() }, checkElems: V, unveil: aa, _aLSL: ca } }(), E = function () { var a, c = A(function (a, b, c, d) { var e, f, g; if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || "")) for (e = b.getElementsByTagName("source"), f = 0, g = e.length; f < g; f++)e[f].setAttribute("sizes", d); c.detail.dataAttr || w(a, c.detail) }), e = function (a, b, d) { var e, f = a.parentNode; f && (d = y(a, f, d), e = v(a, "lazybeforesizes", { width: d, dataAttr: !!b }), e.defaultPrevented || (d = e.detail.width) && d !== a._lazysizesWidth && c(a, f, e, d)) }, f = function () { var b, c = a.length; if (c) for (b = 0; b < c; b++)e(a[b]) }, g = C(f); return { _: function () { a = b.getElementsByClassName(d.autosizesClass), j("resize", g) }, checkElems: g, updateElem: e } }(), F = function () { F.i || (F.i = !0, E._(), D._()) }; return c = { cfg: d, autoSizer: E, loader: D, init: F, uP: w, aC: s, rC: t, hC: r, fire: v, gW: y, rAF: z } } });
/*! lazysizes - v4.1.8 */
!function (a, b) { var c = function () { b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c) { "use strict"; if (a.addEventListener) { var d = /\s+(\d+)(w|h)\s+(\d+)(w|h)/, e = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/, f = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/, g = /^picture$/i, h = function (a) { return getComputedStyle(a, null) || {} }, i = { getParent: function (b, c) { var d = b, e = b.parentNode; return c && "prev" != c || !e || !g.test(e.nodeName || "") || (e = e.parentNode), "self" != c && (d = "prev" == c ? b.previousElementSibling : c && (e.closest || a.jQuery) ? (e.closest ? e.closest(c) : jQuery(e).closest(c)[0]) || e : e), d }, getFit: function (a) { var b, c, d = h(a), g = d.content || d.fontFamily, j = { fit: a._lazysizesParentFit || a.getAttribute("data-parent-fit") }; return !j.fit && g && (b = g.match(e)) && (j.fit = b[1]), j.fit ? (c = a._lazysizesParentContainer || a.getAttribute("data-parent-container"), !c && g && (b = g.match(f)) && (c = b[1]), j.parent = i.getParent(a, c)) : j.fit = d.objectFit, j }, getImageRatio: function (b) { var c, e, f, h, i, j, k, l = b.parentNode, m = l && g.test(l.nodeName || "") ? l.querySelectorAll("source, img") : [b]; for (c = 0; c < m.length; c++)if (b = m[c], e = b.getAttribute(lazySizesConfig.srcsetAttr) || b.getAttribute("srcset") || b.getAttribute("data-pfsrcset") || b.getAttribute("data-risrcset") || "", f = b._lsMedia || b.getAttribute("media"), f = lazySizesConfig.customMedia[b.getAttribute("data-media") || f] || f, e && (!f || (a.matchMedia && matchMedia(f) || {}).matches)) { h = parseFloat(b.getAttribute("data-aspectratio")), h || (i = e.match(d), i ? "w" == i[2] ? (j = i[1], k = i[3]) : (j = i[3], k = i[1]) : (j = b.getAttribute("width"), k = b.getAttribute("height")), h = j / k); break } return h }, calculateSize: function (a, b) { var c, d, e, f, g = this.getFit(a), h = g.fit, i = g.parent; return "width" == h || ("contain" == h || "cover" == h) && (e = this.getImageRatio(a)) ? (i ? b = i.clientWidth : i = a, f = b, "width" == h ? f = b : (d = i.clientHeight) > 40 && (c = b / d) && ("cover" == h && c < e || "contain" == h && c > e) && (f = b * (e / c)), f) : b } }; c.parentFit = i, b.addEventListener("lazybeforesizes", function (a) { if (!a.defaultPrevented && a.detail.instance == c) { var b = a.target; a.detail.width = i.calculateSize(b, a.detail.width) } }) } });
/*! lazysizes - v4.1.8 */
!function (a, b) { var c = function () { b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c) { "use strict"; var d, e = c && c.cfg, f = b.createElement("img"), g = "sizes" in f && "srcset" in f, h = /\s+\d+h/g, i = function () { var a = /\s+(\d+)(w|h)\s+(\d+)(w|h)/, d = Array.prototype.forEach; return function () { var e = b.createElement("img"), f = function (b) { var c, d, e = b.getAttribute(lazySizesConfig.srcsetAttr); e && (d = e.match(a)) && (c = "w" == d[2] ? d[1] / d[3] : d[3] / d[1], c && b.setAttribute("data-aspectratio", c), b.setAttribute(lazySizesConfig.srcsetAttr, e.replace(h, ""))) }, g = function (a) { if (a.detail.instance == c) { var b = a.target.parentNode; b && "PICTURE" == b.nodeName && d.call(b.getElementsByTagName("source"), f), f(a.target) } }, i = function () { e.currentSrc && b.removeEventListener("lazybeforeunveil", g) }; b.addEventListener("lazybeforeunveil", g), e.onload = i, e.onerror = i, e.srcset = "data:,a 1w 1h", e.complete && i() } }(); if (e.supportsType || (e.supportsType = function (a) { return !a }), a.HTMLPictureElement && g) return void (!c.hasHDescriptorFix && b.msElementsFromPoint && (c.hasHDescriptorFix = !0, i())); a.picturefill || e.pf || (e.pf = function (b) { var c, e; if (!a.picturefill) for (c = 0, e = b.elements.length; c < e; c++)d(b.elements[c]) }, d = function () { var f = function (a, b) { return a.w - b.w }, i = /^\s*\d+\.*\d*px\s*$/, j = function (a) { var b, c, d = a.length, e = a[d - 1], f = 0; for (f; f < d; f++)if (e = a[f], e.d = e.w / a.w, e.d >= a.d) { !e.cached && (b = a[f - 1]) && b.d > a.d - .13 * Math.pow(a.d, 2.2) && (c = Math.pow(b.d - .6, 1.6), b.cached && (b.d += .15 * c), b.d + (e.d - a.d) * c > a.d && (e = b)); break } return e }, k = function () { var a, b = /(([^,\s].[^\s]+)\s+(\d+)w)/g, c = /\s/, d = function (b, c, d, e) { a.push({ c: c, u: d, w: 1 * e }) }; return function (e) { return a = [], e = e.trim(), e.replace(h, "").replace(b, d), a.length || !e || c.test(e) || a.push({ c: e, u: e, w: 99 }), a } }(), l = function () { l.init || (l.init = !0, addEventListener("resize", function () { var a, c = b.getElementsByClassName("lazymatchmedia"), e = function () { var a, b; for (a = 0, b = c.length; a < b; a++)d(c[a]) }; return function () { clearTimeout(a), a = setTimeout(e, 66) } }())) }, m = function (b, d) { var f, g = b.getAttribute("srcset") || b.getAttribute(e.srcsetAttr); !g && d && (g = b._lazypolyfill ? b._lazypolyfill._set : b.getAttribute(e.srcAttr) || b.getAttribute("src")), b._lazypolyfill && b._lazypolyfill._set == g || (f = k(g || ""), d && b.parentNode && (f.isPicture = "PICTURE" == b.parentNode.nodeName.toUpperCase(), f.isPicture && a.matchMedia && (c.aC(b, "lazymatchmedia"), l())), f._set = g, Object.defineProperty(b, "_lazypolyfill", { value: f, writable: !0 })) }, n = function (b) { var d = a.devicePixelRatio || 1, e = c.getX && c.getX(b); return Math.min(e || d, 2.5, d) }, o = function (b) { return a.matchMedia ? (o = function (a) { return !a || (matchMedia(a) || {}).matches })(b) : !b }, p = function (a) { var b, d, g, h, k, l, p; if (h = a, m(h, !0), k = h._lazypolyfill, k.isPicture) for (d = 0, b = a.parentNode.getElementsByTagName("source"), g = b.length; d < g; d++)if (e.supportsType(b[d].getAttribute("type"), a) && o(b[d].getAttribute("media"))) { h = b[d], m(h), k = h._lazypolyfill; break } return k.length > 1 ? (p = h.getAttribute("sizes") || "", p = i.test(p) && parseInt(p, 10) || c.gW(a, a.parentNode), k.d = n(a), !k.src || !k.w || k.w < p ? (k.w = p, l = j(k.sort(f)), k.src = l) : l = k.src) : l = k[0], l }, q = function (a) { if (!g || !a.parentNode || "PICTURE" == a.parentNode.nodeName.toUpperCase()) { var b = p(a); b && b.u && a._lazypolyfill.cur != b.u && (a._lazypolyfill.cur = b.u, b.cached = !0, a.setAttribute(e.srcAttr, b.u), a.setAttribute("src", b.u)) } }; return q.parse = k, q }(), e.loadedClass && e.loadingClass && function () { var a = [];['img[sizes$="px"][srcset].', "picture > img:not([srcset])."].forEach(function (b) { a.push(b + e.loadedClass), a.push(b + e.loadingClass) }), e.pf({ elements: b.querySelectorAll(a.join(", ")) }) }()) });
/*! lazysizes - v4.1.8 */
!function (a, b) { var c = function () { b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c) { "use strict"; if (a.addEventListener) { var d = /\s+/g, e = /\s*\|\s+|\s+\|\s*/g, f = /^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/, g = /^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/, h = /\(|\)|'/, i = { contain: 1, cover: 1 }, j = function (a) { var b = c.gW(a, a.parentNode); return (!a._lazysizesWidth || b > a._lazysizesWidth) && (a._lazysizesWidth = b), a._lazysizesWidth }, k = function (a) { var b; return b = (getComputedStyle(a) || { getPropertyValue: function () { } }).getPropertyValue("background-size"), !i[b] && i[a.style.backgroundSize] && (b = a.style.backgroundSize), b }, l = function (a, b) { if (b) { var c = b.match(g); c && c[1] ? a.setAttribute("type", c[1]) : a.setAttribute("media", lazySizesConfig.customMedia[b] || b) } }, m = function (a, c, g) { var h = b.createElement("picture"), i = c.getAttribute(lazySizesConfig.sizesAttr), j = c.getAttribute("data-ratio"), k = c.getAttribute("data-optimumx"); c._lazybgset && c._lazybgset.parentNode == c && c.removeChild(c._lazybgset), Object.defineProperty(g, "_lazybgset", { value: c, writable: !0 }), Object.defineProperty(c, "_lazybgset", { value: h, writable: !0 }), a = a.replace(d, " ").split(e), h.style.display = "none", g.className = lazySizesConfig.lazyClass, 1 != a.length || i || (i = "auto"), a.forEach(function (a) { var c, d = b.createElement("source"); i && "auto" != i && d.setAttribute("sizes", i), (c = a.match(f)) ? (d.setAttribute(lazySizesConfig.srcsetAttr, c[1]), l(d, c[2]), l(d, c[3])) : d.setAttribute(lazySizesConfig.srcsetAttr, a), h.appendChild(d) }), i && (g.setAttribute(lazySizesConfig.sizesAttr, i), c.removeAttribute(lazySizesConfig.sizesAttr), c.removeAttribute("sizes")), k && g.setAttribute("data-optimumx", k), j && g.setAttribute("data-ratio", j), h.appendChild(g), c.appendChild(h) }, n = function (a) { if (a.target._lazybgset) { var b = a.target, d = b._lazybgset, e = b.currentSrc || b.src; if (e) { var f = c.fire(d, "bgsetproxy", { src: e, useSrc: h.test(e) ? JSON.stringify(e) : e }); f.defaultPrevented || (d.style.backgroundImage = "url(" + f.detail.useSrc + ")") } b._lazybgsetLoading && (c.fire(d, "_lazyloaded", {}, !1, !0), delete b._lazybgsetLoading) } }; addEventListener("lazybeforeunveil", function (a) { var d, e, f; !a.defaultPrevented && (d = a.target.getAttribute("data-bgset")) && (f = a.target, e = b.createElement("img"), e.alt = "", e._lazybgsetLoading = !0, a.detail.firesLoad = !0, m(d, f, e), setTimeout(function () { c.loader.unveil(e), c.rAF(function () { c.fire(e, "_lazyloaded", {}, !0, !0), e.complete && n({ target: e }) }) })) }), b.addEventListener("load", n, !0), a.addEventListener("lazybeforesizes", function (a) { if (a.detail.instance == c && a.target._lazybgset && a.detail.dataAttr) { var b = a.target._lazybgset, d = k(b); i[d] && (a.target._lazysizesParentFit = d, c.rAF(function () { a.target.setAttribute("data-parent-fit", d), a.target._lazysizesParentFit && delete a.target._lazysizesParentFit })) } }, !0), b.documentElement.addEventListener("lazybeforesizes", function (a) { !a.defaultPrevented && a.target._lazybgset && a.detail.instance == c && (a.detail.width = j(a.target._lazybgset)) }) } });


/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.1
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=10)}([,,function(e,t){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},function(n,e,t){(function(e){var t;t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},n.exports=t}).call(this,t(4))},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}e.exports=o},,,,,,function(e,t,n){e.exports=n(11)},function(e,t,n){"use strict";n.r(t);var o=n(2),i=n.n(o),a=n(3),r=n(12);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=a.window.jarallax;if(a.window.jarallax=r.default,a.window.jarallax.noConflict=function(){return a.window.jarallax=s,this},void 0!==a.jQuery){var c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Array.prototype.unshift.call(t,this);var o=r.default.apply(a.window,t);return"object"!==l(o)?o:this};c.constructor=r.default.constructor;var u=a.jQuery.fn.jarallax;a.jQuery.fn.jarallax=c,a.jQuery.fn.jarallax.noConflict=function(){return a.jQuery.fn.jarallax=u,this}}i()(function(){Object(r.default)(document.querySelectorAll("[data-jarallax]"))})},function(e,t,n){"use strict";n.r(t);var o=n(2),i=n.n(o),b=n(3);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,i=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(o=(r=l.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l,h,d=b.window.navigator,p=-1<d.userAgent.indexOf("MSIE ")||-1<d.userAgent.indexOf("Trident/")||-1<d.userAgent.indexOf("Edge/"),s=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(d.userAgent),m=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),n=0;n<e.length;n+=1)if(t&&void 0!==t.style[e[n]])return e[n];return!1}();function f(){h=s?(!l&&document.body&&((l=document.createElement("div")).style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(l)),(l?l.clientHeight:0)||b.window.innerHeight||document.documentElement.clientHeight):b.window.innerHeight||document.documentElement.clientHeight}f(),b.window.addEventListener("resize",f),b.window.addEventListener("orientationchange",f),b.window.addEventListener("load",f),i()(function(){f()});var g=[];function y(){g.length&&(g.forEach(function(e,t){var n=e.instance,o=e.oldData,i=n.$item.getBoundingClientRect(),a={width:i.width,height:i.height,top:i.top,bottom:i.bottom,wndW:b.window.innerWidth,wndH:h},r=!o||o.wndW!==a.wndW||o.wndH!==a.wndH||o.width!==a.width||o.height!==a.height,l=r||!o||o.top!==a.top||o.bottom!==a.bottom;g[t].oldData=a,r&&n.onResize(),l&&n.onScroll()}),b.window.requestAnimationFrame(y))}function v(e,t){("object"===("undefined"==typeof HTMLElement?"undefined":u(HTMLElement))?e instanceof HTMLElement:e&&"object"===u(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);for(var n,o=e.length,i=0,a=arguments.length,r=new Array(2<a?a-2:0),l=2;l<a;l++)r[l-2]=arguments[l];for(;i<o;i+=1)if("object"===u(t)||void 0===t?e[i].jarallax||(e[i].jarallax=new w(e[i],t)):e[i].jarallax&&(n=e[i].jarallax[t].apply(e[i].jarallax,r)),void 0!==n)return n;return e}var x=0,w=function(){function s(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var n=this;n.instanceID=x,x+=1,n.$item=e,n.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var o=n.$item.dataset||{},i={};if(Object.keys(o).forEach(function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==n.defaults[t]&&(i[t]=o[e])}),n.options=n.extend({},n.defaults,i,t),n.pureOptions=n.extend({},n.options),Object.keys(n.options).forEach(function(e){"true"===n.options[e]?n.options[e]=!0:"false"===n.options[e]&&(n.options[e]=!1)}),n.options.speed=Math.min(2,Math.max(-1,parseFloat(n.options.speed))),"string"==typeof n.options.disableParallax&&(n.options.disableParallax=new RegExp(n.options.disableParallax)),n.options.disableParallax instanceof RegExp){var a=n.options.disableParallax;n.options.disableParallax=function(){return a.test(d.userAgent)}}if("function"!=typeof n.options.disableParallax&&(n.options.disableParallax=function(){return!1}),"string"==typeof n.options.disableVideo&&(n.options.disableVideo=new RegExp(n.options.disableVideo)),n.options.disableVideo instanceof RegExp){var r=n.options.disableVideo;n.options.disableVideo=function(){return r.test(d.userAgent)}}"function"!=typeof n.options.disableVideo&&(n.options.disableVideo=function(){return!1});var l=n.options.elementInViewport;l&&"object"===u(l)&&void 0!==l.length&&(l=c(l,1)[0]);l instanceof Element||(l=null),n.options.elementInViewport=l,n.image={src:n.options.imgSrc||null,$container:null,useImgTag:!1,position:/iPad|iPhone|iPod|Android/.test(d.userAgent)?"absolute":"fixed"},n.initImg()&&n.canInitParallax()&&n.init()}var e,t,n;return e=s,(t=[{key:"css",value:function(t,n){return"string"==typeof n?b.window.getComputedStyle(t).getPropertyValue(n):(n.transform&&m&&(n[m]=n.transform),Object.keys(n).forEach(function(e){t.style[e]=n[e]}),t)}},{key:"extend",value:function(n){for(var e=arguments.length,o=new Array(1<e?e-1:0),t=1;t<e;t++)o[t-1]=arguments[t];return n=n||{},Object.keys(o).forEach(function(t){o[t]&&Object.keys(o[t]).forEach(function(e){n[e]=o[t][e]})}),n}},{key:"getWindowData",value:function(){return{width:b.window.innerWidth||document.documentElement.clientWidth,height:h,y:document.documentElement.scrollTop}}},{key:"initImg",value:function(){var e=this,t=e.options.imgElement;return t&&"string"==typeof t&&(t=e.$item.querySelector(t)),t instanceof Element||(e.options.imgSrc?(t=new Image).src=e.options.imgSrc:t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!!e.image.$item||(null===e.image.src&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",e.image.bgImage=e.css(e.$item,"background-image")),!(!e.image.bgImage||"none"===e.image.bgImage))}},{key:"canInitParallax",value:function(){return m&&!this.options.disableParallax()}},{key:"init",value:function(){var e=this,t={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none"},n={};if(!e.options.keepImg){var o=e.$item.getAttribute("style");if(o&&e.$item.setAttribute("data-jarallax-original-styles",o),e.image.useImgTag){var i=e.image.$item.getAttribute("style");i&&e.image.$item.setAttribute("data-jarallax-original-styles",i)}}if("static"===e.css(e.$item,"position")&&e.css(e.$item,{position:"relative"}),"auto"===e.css(e.$item,"z-index")&&e.css(e.$item,{zIndex:0}),e.image.$container=document.createElement("div"),e.css(e.image.$container,t),e.css(e.image.$container,{"z-index":e.options.zIndex}),p&&e.css(e.image.$container,{opacity:.9999}),e.image.$container.setAttribute("id","jarallax-container-".concat(e.instanceID)),e.$item.appendChild(e.image.$container),e.image.useImgTag?n=e.extend({"object-fit":e.options.imgSize,"object-position":e.options.imgPosition,"font-family":"object-fit: ".concat(e.options.imgSize,"; object-position: ").concat(e.options.imgPosition,";"),"max-width":"none"},t,n):(e.image.$item=document.createElement("div"),e.image.src&&(n=e.extend({"background-position":e.options.imgPosition,"background-size":e.options.imgSize,"background-repeat":e.options.imgRepeat,"background-image":e.image.bgImage||'url("'.concat(e.image.src,'")')},t,n))),"opacity"!==e.options.type&&"scale"!==e.options.type&&"scale-opacity"!==e.options.type&&1!==e.options.speed||(e.image.position="absolute"),"fixed"===e.image.position){var a=function(e){for(var t=[];null!==e.parentElement;)1===(e=e.parentElement).nodeType&&t.push(e);return t}(e.$item).filter(function(e){var t=b.window.getComputedStyle(e),n=t["-webkit-transform"]||t["-moz-transform"]||t.transform;return n&&"none"!==n||/(auto|scroll)/.test(t.overflow+t["overflow-y"]+t["overflow-x"])});e.image.position=a.length?"absolute":"fixed"}n.position=e.image.position,e.css(e.image.$item,n),e.image.$container.appendChild(e.image.$item),e.onResize(),e.onScroll(!0),e.options.onInit&&e.options.onInit.call(e),"none"!==e.css(e.$item,"background-image")&&e.css(e.$item,{"background-image":"none"}),e.addToParallaxList()}},{key:"addToParallaxList",value:function(){g.push({instance:this}),1===g.length&&b.window.requestAnimationFrame(y)}},{key:"removeFromParallaxList",value:function(){var n=this;g.forEach(function(e,t){e.instance.instanceID===n.instanceID&&g.splice(t,1)})}},{key:"destroy",value:function(){var e=this;e.removeFromParallaxList();var t=e.$item.getAttribute("data-jarallax-original-styles");if(e.$item.removeAttribute("data-jarallax-original-styles"),t?e.$item.setAttribute("style",t):e.$item.removeAttribute("style"),e.image.useImgTag){var n=e.image.$item.getAttribute("data-jarallax-original-styles");e.image.$item.removeAttribute("data-jarallax-original-styles"),n?e.image.$item.setAttribute("style",t):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)}e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}},{key:"clipContainer",value:function(){if("fixed"===this.image.position){var e=this,t=e.image.$container.getBoundingClientRect(),n=t.width,o=t.height;if(!e.$clipStyles)e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","jarallax-clip-".concat(e.instanceID)),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles);var i="#jarallax-container-".concat(e.instanceID," {\n           clip: rect(0 ").concat(n,"px ").concat(o,"px 0);\n           clip: rect(0, ").concat(n,"px, ").concat(o,"px, 0);\n        }");e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=i:e.$clipStyles.innerHTML=i}}},{key:"coverImage",value:function(){var e=this,t=e.image.$container.getBoundingClientRect(),n=t.height,o=e.options.speed,i="scroll"===e.options.type||"scroll-opacity"===e.options.type,a=0,r=n,l=0;return i&&(o<0?(a=o*Math.max(n,h),h<n&&(a-=o*(n-h))):a=o*(n+h),1<o?r=Math.abs(a-h):o<0?r=a/o+Math.abs(a):r+=(h-n)*(1-o),a/=2),e.parallaxScrollDistance=a,l=i?(h-r)/2:(n-r)/2,e.css(e.image.$item,{height:"".concat(r,"px"),marginTop:"".concat(l,"px"),left:"fixed"===e.image.position?"".concat(t.left,"px"):"0",width:"".concat(t.width,"px")}),e.options.onCoverImage&&e.options.onCoverImage.call(e),{image:{height:r,marginTop:l},container:t}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(e){var t=this,n=t.$item.getBoundingClientRect(),o=n.top,i=n.height,a={},r=n;if(t.options.elementInViewport&&(r=t.options.elementInViewport.getBoundingClientRect()),t.isElementInViewport=0<=r.bottom&&0<=r.right&&r.top<=h&&r.left<=b.window.innerWidth,e||t.isElementInViewport){var l=Math.max(0,o),s=Math.max(0,i+o),c=Math.max(0,-o),u=Math.max(0,o+i-h),d=Math.max(0,i-(o+i-h)),p=Math.max(0,-o+h-i),m=1-(h-o)/(h+i)*2,f=1;if(i<h?f=1-(c||u)/i:s<=h?f=s/h:d<=h&&(f=d/h),"opacity"!==t.options.type&&"scale-opacity"!==t.options.type&&"scroll-opacity"!==t.options.type||(a.transform="translate3d(0,0,0)",a.opacity=f),"scale"===t.options.type||"scale-opacity"===t.options.type){var g=1;t.options.speed<0?g-=t.options.speed*f:g+=t.options.speed*(1-f),a.transform="scale(".concat(g,") translate3d(0,0,0)")}if("scroll"===t.options.type||"scroll-opacity"===t.options.type){var y=t.parallaxScrollDistance*m;"absolute"===t.image.position&&(y-=o),a.transform="translate3d(0,".concat(y,"px,0)")}t.css(t.image.$item,a),t.options.onScroll&&t.options.onScroll.call(t,{section:n,beforeTop:l,beforeTopEnd:s,afterTop:c,beforeBottom:u,beforeBottomEnd:d,afterBottom:p,visiblePercent:f,fromViewportCenter:m})}}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}])&&r(e.prototype,t),n&&r(e,n),s}();v.constructor=w,t.default=v}]);
//# sourceMappingURL=jarallax.min.js.map


/*! Tiny Circleslider - v2.0.8 - 2015-08-08
 * http://www.baijs.com/tinycircleslider
 *
 * Copyright (c) 2015 Maarten Baijs <wieringen@gmail.com>;
 * Licensed under the MIT license */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function b(b,e){function f(){return k(),w.append(x.first().clone()).css("width",B.width*(x.length+1)),g(),r(0),v.move(v.options.start,v.options.interval),v}function g(){G&&(b[0].ontouchstart=u,b[0].ontouchmove=q,b[0].ontouchend=s),y.bind("mousedown",u);var c=function(b){return b.preventDefault(),b.stopImmediatePropagation(),v.stop(),v.move(a(this).attr("data-slide-index")),!1};G&&b.delegate(".dot","touchstart",c),b.delegate(".dot","mousedown",c)}function h(a){E=setTimeout(function(){v.move(v.slideCurrent+1,!0)},a?50:v.options.intervalTime)}function i(a){return a*(Math.PI/180)}function j(a){return 180*a/Math.PI}function k(){var c=document.createDocumentFragment();z.remove(),x.each(function(b,d){var e=null,f=parseInt(a(d).attr("data-degrees"),10)||360*b/v.slidesTotal,g={top:-Math.cos(i(f))*v.options.radius+A.height/2-D.height/2,left:Math.sin(i(f))*v.options.radius+A.width/2-D.width/2};z.length>0&&(e=z.clone(),e.addClass(a(d).attr("data-classname")).css(g),c.appendChild(e[0])),v.dots.push({angle:f,slide:d,dot:e})}),v.dots.sort(function(a,b){return a.angle-b.angle}),a.each(v.dots,function(b,c){a(c.dot).length>0&&a(c.dot).addClass("dot-"+(b+1)).attr("data-slide-index",b).html("<span>"+(b+1)+"</span>")}),b.append(c),z=b.find(".dot")}function l(a,b){var c,d,e;return a>b?(c=a-b,d=-(b+360-a)):(c=a+360-b,d=-(b-a)),e=c<Math.abs(d)?c:d,[e,d,c]}function m(b){var c=9999,d=9999,e=9999,f=0,g=0,h=0;return a.each(v.dots,function(a,i){var j=l(i.angle,b);Math.abs(j[0])<Math.abs(e)&&(e=j[0],h=a),Math.abs(j[1])<Math.abs(c)&&(c=j[1],f=a),Math.abs(j[2])<Math.abs(d)&&(d=j[2],g=a)}),[[h,f,g],[e,c,d]]}function n(a){return 0>a?360+a%-360:a%360}function o(a,b,c){var d=a,e=!1;Math.abs(a)>Math.abs(b)?(d=-b,e=!0):I?requestAnimationFrame(function(){o(d,b+a)}):F=setTimeout(function(){o(d,b+a,.9*c)},c),v.angleCurrent=n(v.angleCurrent-d),r(v.angleCurrent,e)}function p(a){return{x:H?a.targetTouches[0].pageX:a.pageX||a.clientX,y:H?a.targetTouches[0].pageY:a.pageY||a.clientY}}function q(a){var c=b.offset(),d={left:p(a).x-c.left-A.width/2,top:p(a).y-c.top-A.height/2};return v.angleCurrent=n(j(Math.atan2(d.left,-d.top))),I||r(v.angleCurrent),!1}function r(a,c){closestSlidesAndAngles=m(a),closestSlides=closestSlidesAndAngles[0],closestAngles=closestSlidesAndAngles[1],w.css("left",-(closestSlides[1]*B.width+Math.abs(closestAngles[1])*B.width/(Math.abs(closestAngles[1])+Math.abs(closestAngles[2])))),y.css({top:-Math.cos(i(a))*v.options.radius+(A.height/2-C.height/2),left:Math.sin(i(a))*v.options.radius+(A.width/2-C.width/2)}),c&&b.trigger("move",[x[v.slideCurrent],v.slideCurrent])}function s(b){return a(b.target).hasClass("dot")?!1:(v.dragging=!1,b.preventDefault(),a(document).unbind("mousemove mouseup"),y.unbind("mouseup"),v.options.dotsHide&&z.stop(!0,!0).fadeOut("slow"),v.options.dotsSnap&&v.move(m(v.angleCurrent)[0][0]),void 0)}function t(){v.dragging&&(r(v.angleCurrent),requestAnimationFrame(function(){t()}))}function u(b){return b.preventDefault(),H="touchstart"==b.type,v.dragging=!0,a(b.target).hasClass("dot")?!1:(v.stop(),a(document).mousemove(q),a(document).mouseup(s),y.mouseup(s),v.options.dotsHide&&z.stop(!0,!0).fadeIn("slow"),I&&t(),void 0)}this.options=a.extend({},d,e),this._defaults=d,this._name=c;var v=this,w=(b.find(".viewport"),b.find(".overview")),x=w.children(),y=b.find(".thumb"),z=b.find(".dot"),A=(x.find("a"),{width:b.outerWidth(!0),height:b.outerHeight(!0)}),B={width:x.first().outerWidth(!0),height:x.first().outerHeight(!0)},C={width:y.outerWidth(!0),height:y.outerHeight(!0)},D={width:z.outerWidth(),height:z.outerHeight()},E=null,F=null,G="ontouchstart"in window,H=!1,I="requestAnimationFrame"in window;return this.dots=[],this.slideCurrent=0,this.angleCurrent=0,this.slidesTotal=x.length,this.intervalActive=!1,this.start=function(a){return v.options.interval&&(v.intervalActive=!0,h(a)),v},this.stop=function(){return v.intervalActive=!1,clearTimeout(E),v},this.move=function(a){var b=Math.max(0,isNaN(a)?v.slideCurrent:a);b>=v.slidesTotal&&(b=0);var c=v.dots[b]&&v.dots[b].angle,d=l(c,v.angleCurrent)[0],e=d>0?-2:2;return v.slideCurrent=b,o(e,d,50),v.start(),v},f()}var c="tinycircleslider",d={interval:!1,intervalTime:3500,dotsSnap:!1,dotsHide:!0,radius:140,start:0};a.fn[c]=function(d){return this.each(function(){a.data(this,"plugin_"+c)||a.data(this,"plugin_"+c,new b(a(this),d))})}});

/*==========================
jquery.soap.js - https://github.com/doedje/jquery.soap
version: 1.7.3

jQuery plugin for communicating with a web service using SOAP.

One function to send a SOAPEnvelope that takes a complex object as a data

License GNU/GPLv3
-----------------

Copyright (C) 2009-2016 - Remy Blom, the Netherlands

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

When GPL is not an option for you, contact me for information about the commercial license.

Information
-----------

For information about how to use jQuery.soap, authors, changelog, the latest version, etc...
Visit: https://github.com/doedje/jquery.soap

Documentation about THIS version is found here:
https://github.com/doedje/jquery.soap/blob/1.7.3/README.md

======================*/

(function(factory) {
	if(typeof module === 'object' && typeof module.exports === 'object') {
	  module.exports = factory(require('jquery'));
	} else if (jQuery) {
	  factory(jQuery);
	} else {
		console.error('no jQuery found!')
	}
})(function($) {
	var enableLogging;
	var globalConfig = { // this setup once, defaults go here
		appendMethodToURL: true,
		async: true,
		enableLogging: false,
		noPrefix: false,
		soap12: false,
		withCredentials: false,
		timeout: 5000
	};
	function soap(options) {
		var config = {};
		// a configuration call will not have 'data' specified ('params' is used for backwards compatibility)
		if (options && !options.params && !options.data) {
			$.extend(globalConfig, options); // update global config
			enableLogging = options.enableLogging;
			log('jQuery.soap - globalConfig updated:', globalConfig);
			return globalConfig;
		}
		$.extend(config, globalConfig, options);
		// function log will only work below this line!
		enableLogging = config.enableLogging;

		log('jquery.soap - config:', config);

		// fallbacks for changed properties
		SOAPTool.fallbackDeprecated(config);

		var soapObject = SOAPTool.processData({
			data: config.data,
			name: (!!config.elementName) ? config.elementName : config.method,
			context: config.context,
			prefix: (!!config.namespaceQualifier && !config.noPrefix) ? config.namespaceQualifier+':' : ''
		});

		if (!!config.namespaceQualifier && !!config.namespaceURL) {
			soapObject.addNamespace(config.namespaceQualifier, config.namespaceURL);
		}
		else if (!!config.namespaceURL) {
			soapObject.attr('xmlns', config.namespaceURL);
		}

		if (!!soapObject && !!config.url) { // we have a request and somewhere to send it
			// Create a SOAPEnvelope with the soapObject
			var soapEnvelope = new SOAPEnvelope(soapObject);
			// Additional attributes and namespaces for the Envelope
			if (config.envAttributes) {
				for (var i in config.envAttributes) {
					soapEnvelope.addAttribute(i, config.envAttributes[i]);
				}
			}
			// SOAPHeader
			if (!!config.SOAPHeader) {
				var soapHeader = SOAPTool.processData({
					data: config.SOAPHeader,
					name: 'temp',
					prefix: ''
				});
				if (!!soapHeader) {
					if (soapHeader.hasChildren()) {
						for (var j in soapHeader.children) {
							soapEnvelope.addHeader(soapHeader.children[j]);
						}
					} else {
						soapEnvelope.addHeader(soapHeader);
					}
				}
			}
			// WSS
			if (!!config.wss) {
				var wssObj = SOAPTool.createWSS(config.wss);
				// add to WSS Security header to soapEnvelope
				if (!!wssObj) {
					soapEnvelope.addHeader(wssObj);
				}
			}
			// append Method?
			if(!!config.appendMethodToURL && !!config.method){
				config.url += config.method;
			}
			return soapEnvelope.send({
				url: config.url,
				context: config.context,
				timeout:config.timeout,
				async: config.async,
				headers: (config.HTTPHeaders) ? config.HTTPHeaders : {},
				action: (!!config.SOAPAction) ? config.SOAPAction : config.method,
				soap12: config.soap12,
				beforeSend: config.beforeSend,
				statusCode: config.statusCode,
			}).done(function(data, textStatus, jqXHR) {
				var response = new SOAPResponse(textStatus, jqXHR);
				log('jquery.soap - receive:', response.toString());
				if ($.isFunction(config.success)) {
					config.success.call(this, response);
				}
			}).fail(function(jqXHR, textStatus, errorThrown) {
				log('jquery.soap - error:', errorThrown);
				if ($.isFunction(config.error)) {
					config.error.call(this, new SOAPResponse(textStatus, jqXHR));
				}
			});
		} else {
			var errDeferred = new $.Deferred(),
			    errmsg;

			if (!soapObject) {
				errmsg = 'jquery.soap - no soapObject';
			}
			if (!config.url) {
				errmsg = 'jquery.soap - no url';
			}
			if (!!errmsg) {
				warn(errmsg);
				errDeferred.reject(errmsg);
			}
			return errDeferred.promise();
		}
	};

	//Soap request - this is what being sent
	function SOAPEnvelope (soapObject) {
		this.typeOf = "SOAPEnvelope";
		this.prefix = 'soap';
		this.soapConfig = null;
		this.attributes = {};
		this.headers = [];
		this.bodies = [];

		// let's get the soap namespace prefix
		var parts = soapObject.name.split(':'),
		    len;
		if (parts[1] === 'Envelope' || parts[1] === 'Body') {
			this.prefix = parts[0];
			if (soapObject.attr('xmlns:' + this.prefix) === SOAPTool.SOAP11.namespaceURL) {
				this.soapConfig = this.SOAP11;
			}
			if (soapObject.attr('xmlns:' + this.prefix) === SOAPTool.SOAP12.namespaceURL) {
				this.soapConfig = this.SOAP12;
			}
			// Envelope
			var env = soapObject.find(this.prefix + ':Envelope');
			if (env && env.attributes) {
				for (var i in env.attributes) {
					this.addAttribute(i, env.attributes[i]);
				}
			}
			// headers
			var header = soapObject.find(this.prefix + ':Header');
			if (header && header.children) {
				len = header.children.length;
				for (var j = 0; j < len; j++) {
					this.addHeader(header.children[j]);
				}
			}
			// body
			var body = soapObject.find(this.prefix + ':Body');
			if (body && body.children) {
				len = body.children.length;
				for (var k = 0; k < len; k++) {
					this.addBody(body.children[k]);
				}
			} else {
				len = soapObject.children.length;
				for (var l = 0; l < len; l++) {
					this.addBody(soapObject.children[l]);
				}
			}
		} else {
			// a soapObject with nothing, mere data
			this.addBody(soapObject);
		}
	}

	SOAPEnvelope.prototype = {
		addAttribute: function(name, value) {
			this.attributes[name] = value;
		},
		addNamespace: function(name, uri) {
			this.addAttribute('xmlns:' + name, uri);
		},
		addHeader: function(soapObject) {
			this.headers.push(soapObject);
		},
		addBody: function(soapObject) {
			this.bodies.push(soapObject);
		},
		toString: function() {
			var soapEnv = new SOAPObject(this.prefix + ':Envelope'),
			    len;
			//Add attributes
			for (var name in this.attributes) {
				soapEnv.attr(name, this.attributes[name]);
			}
			//Add Headers
			len = this.headers.length;
			if (len > 0) {
				var soapHeader = soapEnv.newChild(this.prefix + ':Header');
				for (var i = 0; i < len; i++) {
					soapHeader.appendChild(this.headers[i]);
				}
			}
			//Add Bodies
			len = this.bodies.length;
			if (len > 0) {
				var soapBody = soapEnv.newChild(this.prefix + ':Body');
				for (var j = 0; j < len; j++) {
					soapBody.appendChild(this.bodies[j]);
				}
			}
			// Check for main NS over here...
			if (!soapEnv.attr('xmlns:' + this.prefix)) {
				soapEnv.addNamespace(this.prefix, this.soapConfig.namespaceURL);
			}
			if (!soapEnv.attr('xmlns:xsi')) {
				soapEnv.addNamespace('xsi', 'http://www.w3.org/2001/XMLSchema-instance');
			}
			if (!soapEnv.attr('xmlns:xsd')) {
				soapEnv.addNamespace('xsd', 'http://www.w3.org/2001/XMLSchema');
			}
			return '<?xml version="1.0" encoding="UTF-8"?>' + soapEnv.toString();
		},
		send: function(options) {
			var self = this;
			if (!this.soapConfig) {
				this.soapConfig = (options.soap12) ? SOAPTool.SOAP12 : SOAPTool.SOAP11;
			}
			var contentType = this.soapConfig.type;
			if (contentType === SOAPTool.SOAP11.type && !!options.action) {
				options.headers.SOAPAction = options.action;
			}
			log('jquery.soap - beforeSend:', this.toString());
			return $.ajax({
				type: "POST",
				context: options.context,
				statusCode: options.statusCode,
				url: options.url,
				async: options.async,
				headers: options.headers,
				timeout: options.timeout,
			//	crossDomain: true,
				dataType: "xml",
				processData: false,
				data: this.toString(),
				contentType: contentType + "; charset=UTF-8" + (options.soap12 ? "; action=" + options.action : ""),
				xhrFields: {
					// Add xhrFields, and set xhrFields.withCredentials = true by default, otherwise,
					// it can't send a cross-domain request successfully in Chrome without this settings.
					// You can use it to set withCredentials to true for cross-domain requests if needed.
					// More about it is in jQuery official website. (http://api.jquery.com/jquery.ajax/).
					// I hope it's useful and tested in Chrome & IE 11+ & IE Edge, Thanks.
					withCredentials: options.withCredentials
				},
				// second attempt to get some progres info (but still a no go)
				// I still keep this in tho, we might see it working one day when browsers mature...
				/*
				//WRT issue #80 (https://github.com/doedje/jquery.soap/issues/80) commenting out the xhr function below for IE8 and IE9 compatability. Issue exists when used alongside any script that modifies the XMLHttpRequest object like, for example, the xdomain or xhook libraries. This could be explicitly enabled by users on a per-case basis if it is mentioned somewhere in the readme.md file.
				xhr: function() {
					var xhr = new window.XMLHttpRequest();
					xhr.upload.addEventListener("progress", function(evt) {
						if (evt.lengthComputable) {
							var progress = evt.loaded / evt.total;
							log("jquery.soap - progress up: ", (progress * 100) + '% total: ' + evt.total);
						}
					}, false);
					xhr.addEventListener("progress", function(evt) {
						if (evt.lengthComputable) {
							var progress = evt.loaded / evt.total;
							log("jquery.soap - progress down: ", (progress * 100) + '% total: ' + evt.total);
						}
					}, false);

					return xhr;
				},
				*/
				beforeSend: function() {
					if ($.isFunction(options.beforeSend)) {
						return options.beforeSend.call(options.context, self);
					}
				}
			});
		}
	};

	// SOAPObject - an abstraction layer to build SOAP Objects.
	var SOAPObject = function(name) {
		this.typeOf = 'SOAPObject';
		this.name = name;
		this.ns = {};
		this.attributes = {};
		this._parent = null;
		this.children = [];
		this.value = undefined;
	}

	SOAPObject.prototype = {
		attr: function(name, value) {
			if (!!name && !!value || !!name && value === "") {
				this.attributes[name] = value;
				return this;
			} else if (!!name) {
				return this.attributes[name];
			} else {
				return this.attributes;
			}
		},
		val: function(value) {
			if (value === undefined) {
				if (this.attr('xsi:nil') === 'true') {
					return null;
				} else {
					return this.value;
				}
			} else if (value === null) {
				this.attr("xsi:nil","true");
				return this;
			} else {
				this.value = value;
				return this;
			}
		},
		addNamespace: function(name, url) {
			this.ns[name] = url;
			return this;
		},
		appendChild: function(obj) {
			obj._parent = this;
			this.children.push(obj);
			return obj;
		},
		newChild: function(name) {
			var obj = new SOAPObject(name);
			this.appendChild(obj);
			return obj;
		},
		addParameter: function(name, value) {
			var obj = new SOAPObject(name);
			obj.val(value);
			this.appendChild(obj);
			return this;
		},
		hasChildren: function() {
			return (this.children.length > 0) ? true : false;
		},
		find: function(name) {
			if (this.name === name) {
				return this;
			} else {
				for (var i = 0, len = this.children.length; i < len; i++) {
					var result = this.children[i].find(name);
					if (result) {
						return result;
					}
				}
			}
		},
		end: function() {
			return this.parent();
		},
		parent: function() {
			return this._parent;
		},
		toString: function() {
			var out = [], encodedValue;
			out.push('<'+this.name);
			//Namespaces
			for (var name in this.ns) {
				out.push(' xmlns:' + name + '="' + this.ns[name] + '"');
			}
			//Node Attributes
			for (var attr in this.attributes) {
				if (typeof(this.attributes[attr]) === 'string') {
					out.push(' ' + attr + '="' + SOAPTool.encodeXmlValue(this.attributes[attr]) + '"');
				}
			}
			out.push('>');
			//Node children
			if(this.hasChildren()) {
				for(var cPos in this.children) {
					var cObj = this.children[cPos];
					if ((typeof(cObj) === 'object') && (cObj.typeOf === 'SOAPObject')) {
						out.push(cObj.toString());
					}
				}
			}
			//Node Value
			if (this.value !== undefined) {
				if (typeof(this.value) === 'string') {
					switch(this.value.indexOf('<![CDATA[')){
						case -1 :
							// no CDATA blocks => encode everything
							encodedValue = SOAPTool.encodeXmlValue(this.value);
							break;
						case  0 :
							if(this.value.indexOf(']]>') === this.value.length - 3){
								// entire value wrapped in one single CDATA block => no encoding required
								encodedValue = this.value;
								break;
							}
						default :
							// encode with more advanced CDATA check
							encodedValue = SOAPTool.encodeXmlValueWithCDataCheck(this.value);
					}
				} else if (typeof(this.value) === 'number') {
					encodedValue = this.value.toString();
				}
				out.push(encodedValue);
			}
			//Close Tag
			out.push('</' + this.name + '>');
			return out.join('');
		}
	};

	//Soap response - this will be passed to the callback from SOAPEnvelope.send
	var SOAPResponse = function(status, xhr) {
		this.typeOf = "SOAPResponse";
		this.status = status;
		this.headers = xhr.getAllResponseHeaders().split('\n');
		this.httpCode = xhr.status;
		this.httpText = xhr.statusText;
		this.content = (xhr.responseXML === undefined || xhr.responseXML === null) ? xhr.responseText : xhr.responseXML;
		this.toString = function(){
			if (typeof this.content === 'string') {
				return this.content;
			}
			if ($.isXMLDoc(this.content)) {
				return SOAPTool.dom2string(this.content);
			}
			throw new Error("Unexpected Content: " + $.type(this.content));
		};
		this.toXML = function(){
			if ($.isXMLDoc(this.content)) {
				return this.content;
			}
			return $.parseXML(this.content);
		};
		this.toJSON = function(){
			if ($.xml2json) {
				return $.xml2json(this.content);
			}
			warn("jQuery.soap - Missing JQuery Plugin 'xml2json', info at: https://github.com/doedje/jquery.soap#dependencies");
		};
	};

	//Singleton SOAP Tool
	var SOAPTool = {
		SOAP11: {
			type: 'text/xml',
			namespaceURL: 'http://schemas.xmlsoap.org/soap/envelope/'
		},
		SOAP12: {
			type: 'application/soap+xml',
			namespaceURL: 'http://www.w3.org/2003/05/soap-envelope'
		},
		processData: function(options) {
			var soapObject;
			if ($.type(options.data) === "string") {
				// if data is XML string, parse to XML DOM
				// ensure that string is not empty and contains more than whitespace
				if (/\S/.test(options.data)) {
					if (options.data.indexOf("<") > -1) {
						options.data = $.parseXML(options.data);
					} else {
						// this is for bare parameters #125
						soapObject = SOAPTool.json2soap(options.name, options.data, options.prefix);
					}
				}
			}
			if ($.isXMLDoc(options.data)) {
				// if data is XML DOM, parse to SOAPObject
				soapObject = SOAPTool.dom2soap(options.data.firstChild);
			} else if ($.isArray(options.data)) {
				// if data is an Array, asume SOAP::Lite
				soapObject = SOAPTool.array2soap(options);
			} else if ($.isPlainObject(options.data)) {
				// if data is JSON, parse to SOAPObject
				soapObject = SOAPTool.json2soap(options.name, options.data, options.prefix);
			} else if ($.isFunction(options.data)) {
				// if data is function, the function should return a SOAPObject
				soapObject = options.data.call(options.context, SOAPObject);
			}
			return soapObject;
		},
		encodeXmlValue: function(value) {
			var encodedValue,
					xmlCharMap = {
						'<': '&lt;',
						'>': '&gt;',
						'&': '&amp;',
						'"': '&quot;',
						"'": '&apos;'
					},
					encodedValue;

			encodedValue = value.replace(/[<>&"']/g, function (ch) {
				return xmlCharMap[ch];
			});
			return encodedValue;
		},
		encodeXmlValueWithCDataCheck: function(value){
			// This function will only encode the parts within value that are not inside a CDATA section, allowing multiple usages of CDATA-blocks
			//  ie. "encoding here <!CDATA[[ no encoding here ]]> encoding here <!CDATA[[ no encoding here ]]>"
			var cdata		= false,
				valueArray	= value.split(''),
				encoded		= [],
				char;

			for(var i = 0, j = valueArray.length; i < j; i++){
				switch(valueArray[i]){
					case '<' :
						if(cdata){
							encoded.push('<');
						} else if(value.substr(i, 9) === '<![CDATA[') { // if no CDATA section started, check if current char is part of CDATA start
							encoded.push('<![CDATA[');
							i += 8; // skip CDATA start chars
							cdata = true;
						} else {
							encoded.push('&lt;');
						}
						break;

					case ']' :
						if(cdata && value.substr(i, 3) === ']]>'){ // if CDATA section started, check if current char is part of CDATA end
							encoded.push(']]>');
							i += 2; // skip CDATA end chars
							cdata = false;
						} else {
							encoded.push(']');
						}
						break;

					case '>' : encoded.push(cdata ? '>' : '&gt;');		break;
					case '&' : encoded.push(cdata ? '&' : '&amp;');		break;
					case '"' : encoded.push(cdata ? '"' : '&quot;');	break;
					case "'" : encoded.push(cdata ? "'" : '&apos;');	break;
					default	 : encoded.push(valueArray[i]);
				}
			}
			return encoded.join('');
		},
		json2soap: function (name, params, prefix, parentNode) {
			var soapObject;
			var childObject;
			if (params === null) {
				soapObject = new SOAPObject(prefix+name);
				soapObject.attr('xsi:nil', 'true');
			} else if (typeof params == 'object') {
				// added by DT - check if object is in fact an Array and treat accordingly
				if(params.constructor.toString().indexOf("Array") > -1) { // type is array
					for(var i = 0, len = params.length; i < len; i++) {
						childObject = this.json2soap(name, params[i], prefix, parentNode);
						parentNode.appendChild(childObject);
					}
				} else if (params.constructor.toString().indexOf("String") > -1) { // type is string
					// handle String objects as string primitive value
					soapObject = new SOAPObject(prefix+name);
					soapObject.val(params);
				} else if (params.constructor.toString().indexOf("Date") > -1) { // type is Date
					// handle Date objects as ISO8601 formated value
					soapObject = new SOAPObject(prefix+name);
					soapObject.val(params.toISOString());
				} else {
					soapObject = new SOAPObject(prefix+name);
					for(var y in params) {
						childObject = this.json2soap(y, params[y], prefix, soapObject);
						if (childObject) {
							soapObject.appendChild(childObject);
						}
					}
				}
			} else if (typeof params == 'boolean') {
				soapObject = new SOAPObject(prefix+name);
				soapObject.val(params ? 'true' : 'false');
			} else {
				soapObject = new SOAPObject(prefix+name);
				soapObject.val(params);
			}
			return soapObject;
		},
		dom2soap: function (xmldom) {
			var whitespace = /^\s+$/,
			    soapObject = new SOAPObject(xmldom.nodeName),
			    len;

			len = xmldom.attributes.length;
			for (var i = 0; i < len; i++) {
				var attribute = xmldom.attributes[i];
				soapObject.attr(attribute.name, attribute.value);
			}
			len = xmldom.childNodes.length;
			for (var j = 0; j < len; j++) {
				var child = xmldom.childNodes[j];
				if (child.nodeType === 1) {
					var childObject = SOAPTool.dom2soap(child);
					soapObject.appendChild(childObject);
				}
				if (child.nodeType === 3 && !whitespace.test(child.nodeValue)) {
					soapObject.val(child.nodeValue);
				}
				if (child.nodeType === 4){
				  soapObject.val('<![CDATA[' + child.nodeValue + ']]>');
				}
			}
			return soapObject;
		},
		array2soap: function(options) {
			soapObject = new SOAPObject(options.name);
			for (var index = 0, len = options.data.length; index < len; index++) {
				if ($.isArray(options.data[index])) {
					var new_item = soapObject.newChild('soapenc:Array');
					new_item.attr('soapenc:arrayType', 'xsd:string[' + (options.data[index].length) + ']');
					for (var item = 0, len2 = options.data[index].length; item < len2; item++) {
						new_item.newChild('item').attr('type', 'xsd:string').val(options.data[index][item]).end();
					}
				} else {
					soapObject.newChild('c-gensym' + index).attr('type', 'xsd:string').val(options.data[index]).end();
				}
			}
			return soapObject;
		},
		dom2string: function(dom) {
			if (typeof XMLSerializer!=="undefined") {
				return new window.XMLSerializer().serializeToString(dom);
			} else {
				return dom.xml;
			}
		},
		createWSS: function(wssValues) {
			if  (!!wssValues.username && !!wssValues.password) {
				var wssConst = {
					security: "wsse:Security",
					securityNS: "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd",
					usernameToken: "wsse:UsernameToken",
					usernameTokenNS: "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd",
					username: "wsse:Username",
					usernameType: "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd",
					password: "wsse:Password",
					passwordType: "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText",
					nonce: "wsse:Nonce",
					nonceType: "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd",
					wsuCreated: "wsu:Created",
					wsuCreatedType: "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"
				};
				var WSSObj = new SOAPObject(wssConst.security)
					.addNamespace('wsse', wssConst.securityNS)
					.addNamespace('wsu', wssConst.usernameTokenNS)
					.newChild(wssConst.usernameToken)
						.newChild(wssConst.username)
							.attr('Type', wssConst.usernameType)
							.val(wssValues.username)
						.end()
						.newChild(wssConst.password)
							.attr('Type', wssConst.passwordType)
							.val(wssValues.password)
						.end()
					.end();
				var userTokenObj = WSSObj.find(wssConst.usernameToken);
				if (!!wssValues.nonce) {
					userTokenObj
						.newChild(wssConst.nonce)
							.attr('Type', wssConst.nonceType)
							.val(wssValues.nonce);
				}
				if (!!wssValues.created) {
					userTokenObj
						.newChild(wssConst.wsuCreated)
							.attr('Type', wssConst.wsuCreatedType)
							.val(wssValues.created);
				}
				return WSSObj;
			}
		},
		fallbackDeprecated: function(config) {
			// fallbacks for changed properties: (the old names will deprecate at version 2.0.0!)
			var deprecated = {
				// usage -> oldParam: 'newParam'
				namespaceUrl: 'namespaceURL',
				request: 'beforeSend',
				params: 'data'
			};
			for (var oldParam in deprecated) {
				var newParam = deprecated[oldParam];
				if (!config[newParam] && !!config[oldParam]) {
					warn('jquery.soap: ' + oldParam + ' is deprecated, use ' + newParam + ' instead!');
					config[newParam] = config[oldParam];
					delete config[oldParam];
				}
			}
		}
	};
	function log() {
		if (enableLogging && typeof(console)==='object') {
			if ($.isFunction(console.log)) {
				if (arguments.length == 1) {
					console.log(arguments[0]);
				} else {
					console.log(arguments);
				}
			}
		}
	}
	function warn() {
		if (typeof(console)==='object') {
			if ($.isFunction(console.warn)) {
				if (arguments.length == 1) {
					console.warn(arguments[0]);
				} else {
					console.warn(arguments);
				}
			}
		}
	}
	return $.soap = soap;
});

/* ===================================================================================== @preserve =
 ___  _   _    _
/   || | | |  | |
\__  | | | |  | |  __
/    |/  |/_) |/  /  \_/\/
\___/|__/| \_/|__/\__/  /\_/
              |\
              |/
Ajaxinate
version v2.0.11
https://github.com/Elkfox/Ajaxinate
Copyright (c) 2017 Elkfox Co Pty Ltd
https://elkfox.com
MIT License
================================================================================================= */
"use strict";var Ajaxinate=function(t){var e=t||{};this.settings=Object.assign({pagination:"#AjaxinatePagination",method:"scroll",container:"#AjaxinateLoop",offset:0,loadingText:"Loading",callback:null},e),this.addScrollListeners=this.addScrollListeners.bind(this),this.addClickListener=this.addClickListener.bind(this),this.checkIfPaginationInView=this.checkIfPaginationInView.bind(this),this.stopMultipleClicks=this.stopMultipleClicks.bind(this),this.destroy=this.destroy.bind(this),this.containerElement=document.querySelector(this.settings.container),this.paginationElement=document.querySelector(this.settings.pagination),this.initialize()};Ajaxinate.prototype.initialize=function(){this.containerElement&&{click:this.addClickListener,scroll:this.addScrollListeners}[this.settings.method]()},Ajaxinate.prototype.addScrollListeners=function(){this.paginationElement&&(document.addEventListener("scroll",this.checkIfPaginationInView),window.addEventListener("resize",this.checkIfPaginationInView),window.addEventListener("orientationchange",this.checkIfPaginationInView))},Ajaxinate.prototype.addClickListener=function(){this.paginationElement&&(this.nextPageLinkElement=this.paginationElement.querySelector("a"),this.clickActive=!0,null!==this.nextPageLinkElement&&this.nextPageLinkElement.addEventListener("click",this.stopMultipleClicks))},Ajaxinate.prototype.stopMultipleClicks=function(t){t.preventDefault(),this.clickActive&&(this.nextPageLinkElement.innerHTML=this.settings.loadingText,this.nextPageUrl=this.nextPageLinkElement.href,this.clickActive=!1,this.loadMore())},Ajaxinate.prototype.checkIfPaginationInView=function(){var t=this.paginationElement.getBoundingClientRect().top-this.settings.offset,e=this.paginationElement.getBoundingClientRect().bottom+this.settings.offset;t<=window.innerHeight&&e>=0&&(this.nextPageLinkElement=this.paginationElement.querySelector("a"),this.removeScrollListener(),this.nextPageLinkElement&&(this.nextPageLinkElement.innerHTML=this.settings.loadingText,this.nextPageUrl=this.nextPageLinkElement.href,this.loadMore()))},Ajaxinate.prototype.loadMore=function(){this.request=new XMLHttpRequest,this.request.onreadystatechange=function(){if(4===this.request.readyState&&200===this.request.status){var t=this.request.responseXML.querySelectorAll(this.settings.container)[0],e=this.request.responseXML.querySelectorAll(this.settings.pagination)[0];this.containerElement.insertAdjacentHTML("beforeend",t.innerHTML),this.paginationElement.innerHTML=e.innerHTML,this.settings.callback&&"function"==typeof this.settings.callback&&this.settings.callback(this.request.responseXML),this.initialize()}}.bind(this),this.request.open("GET",this.nextPageUrl),this.request.responseType="document",this.request.send()},Ajaxinate.prototype.removeClickListener=function(){this.nextPageLinkElement.addEventListener("click",this.stopMultipleClicks)},Ajaxinate.prototype.removeScrollListener=function(){document.removeEventListener("scroll",this.checkIfPaginationInView),window.removeEventListener("resize",this.checkIfPaginationInView),window.removeEventListener("orientationchange",this.checkIfPaginationInView)},Ajaxinate.prototype.destroy=function(){return{click:this.removeClickListener,scroll:this.removeScrollListener}[this.settings.method](),this};

/*! ScrollMagic v2.0.7 | (c) 2019 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";var _=function(){};_.version="2.0.7",window.addEventListener("mousewheel",function(){});var P="data-scrollmagic-pin-spacer";_.Controller=function(e){var n,r,i="REVERSE",t="PAUSED",o=z.defaults,s=this,a=R.extend({},o,e),l=[],c=!1,f=0,u=t,d=!0,h=0,p=!0,g=function(){0<a.refreshInterval&&(r=window.setTimeout(E,a.refreshInterval))},v=function(){return a.vertical?R.get.scrollTop(a.container):R.get.scrollLeft(a.container)},m=function(){return a.vertical?R.get.height(a.container):R.get.width(a.container)},w=this._setScrollPos=function(e){a.vertical?d?window.scrollTo(R.get.scrollLeft(),e):a.container.scrollTop=e:d?window.scrollTo(e,R.get.scrollTop()):a.container.scrollLeft=e},y=function(){if(p&&c){var e=R.type.Array(c)?c:l.slice(0);c=!1;var t=f,n=(f=s.scrollPos())-t;0!==n&&(u=0<n?"FORWARD":i),u===i&&e.reverse(),e.forEach(function(e,t){e.update(!0)})}},S=function(){n=R.rAF(y)},b=function(e){"resize"==e.type&&(h=m(),u=t),!0!==c&&(c=!0,S())},E=function(){if(!d&&h!=m()){var t;try{t=new Event("resize",{bubbles:!1,cancelable:!1})}catch(e){(t=document.createEvent("Event")).initEvent("resize",!1,!1)}a.container.dispatchEvent(t)}l.forEach(function(e,t){e.refresh()}),g()};this._options=a;var x=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(e){if(R.type.Array(e))e.forEach(function(e,t){s.addScene(e)});else if(e instanceof _.Scene)if(e.controller()!==s)e.addTo(s);else if(l.indexOf(e)<0)for(var t in l.push(e),l=x(l),e.on("shift.controller_sort",function(){l=x(l)}),a.globalSceneOptions)e[t]&&e[t].call(e,a.globalSceneOptions[t]);return s},this.removeScene=function(e){if(R.type.Array(e))e.forEach(function(e,t){s.removeScene(e)});else{var t=l.indexOf(e);-1<t&&(e.off("shift.controller_sort"),l.splice(t,1),e.remove())}return s},this.updateScene=function(e,n){return R.type.Array(e)?e.forEach(function(e,t){s.updateScene(e,n)}):n?e.update(!0):!0!==c&&e instanceof _.Scene&&(-1==(c=c||[]).indexOf(e)&&c.push(e),c=x(c),S()),s},this.update=function(e){return b({type:"resize"}),e&&y(),s},this.scrollTo=function(e,t){if(R.type.Number(e))w.call(a.container,e,t);else if(e instanceof _.Scene)e.controller()===s&&s.scrollTo(e.scrollOffset(),t);else if(R.type.Function(e))w=e;else{var n=R.get.elements(e)[0];if(n){for(;n.parentNode.hasAttribute(P);)n=n.parentNode;var r=a.vertical?"top":"left",i=R.get.offset(a.container),o=R.get.offset(n);d||(i[r]-=s.scrollPos()),s.scrollTo(o[r]-i[r],t)}}return s},this.scrollPos=function(e){return arguments.length?(R.type.Function(e)&&(v=e),s):v.call(s)},this.info=function(e){var t={size:h,vertical:a.vertical,scrollPos:f,scrollDirection:u,container:a.container,isDocument:d};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(e){return s},this.enabled=function(e){return arguments.length?(p!=e&&(p=!!e,s.updateScene(l,!0)),s):p},this.destroy=function(e){window.clearTimeout(r);for(var t=l.length;t--;)l[t].destroy(e);return a.container.removeEventListener("resize",b),a.container.removeEventListener("scroll",b),R.cAF(n),null},function(){for(var e in a)o.hasOwnProperty(e)||delete a[e];if(a.container=R.get.elements(a.container)[0],!a.container)throw"ScrollMagic.Controller init failed.";(d=a.container===window||a.container===document.body||!document.body.contains(a.container))&&(a.container=window),h=m(),a.container.addEventListener("resize",b),a.container.addEventListener("scroll",b);var t=parseInt(a.refreshInterval,10);a.refreshInterval=R.type.Number(t)?t:o.refreshInterval,g()}(),s};var z={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};_.Controller.addOption=function(e,t){z.defaults[e]=t},_.Controller.extend=function(e){var t=this;_.Controller=function(){return t.apply(this,arguments),this.$super=R.extend({},this),e.apply(this,arguments)||this},R.extend(_.Controller,t),_.Controller.prototype=t.prototype,_.Controller.prototype.constructor=_.Controller},_.Scene=function(e){var n,l,c="BEFORE",f="DURING",u="AFTER",r=D.defaults,d=this,h=R.extend({},r,e),p=c,g=0,a={start:0,end:0},v=0,i=!0,s={};this.on=function(e,i){return R.type.Function(i)&&(e=e.trim().split(" ")).forEach(function(e){var t=e.split("."),n=t[0],r=t[1];"*"!=n&&(s[n]||(s[n]=[]),s[n].push({namespace:r||"",callback:i}))}),d},this.off=function(e,o){return e&&(e=e.trim().split(" ")).forEach(function(e,t){var n=e.split("."),r=n[0],i=n[1]||"";("*"===r?Object.keys(s):[r]).forEach(function(e){for(var t=s[e]||[],n=t.length;n--;){var r=t[n];!r||i!==r.namespace&&"*"!==i||o&&o!=r.callback||t.splice(n,1)}t.length||delete s[e]})}),d},this.trigger=function(e,n){if(e){var t=e.trim().split("."),r=t[0],i=t[1],o=s[r];o&&o.forEach(function(e,t){i&&i!==e.namespace||e.callback.call(d,new _.Event(r,e.namespace,d,n))})}return d},d.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?y():"reverse"===e.what&&d.update())}).on("shift.internal",function(e){t(),d.update()}),this.addTo=function(e){return e instanceof _.Controller&&l!=e&&(l&&l.removeScene(d),l=e,E(),o(!0),y(!0),t(),l.info("container").addEventListener("resize",S),e.addScene(d),d.trigger("add",{controller:l}),d.update()),d},this.enabled=function(e){return arguments.length?(i!=e&&(i=!!e,d.update(!0)),d):i},this.remove=function(){if(l){l.info("container").removeEventListener("resize",S);var e=l;l=void 0,e.removeScene(d),d.trigger("remove")}return d},this.destroy=function(e){return d.trigger("destroy",{reset:e}),d.remove(),d.off("*.*"),null},this.update=function(e){if(l)if(e)if(l.enabled()&&i){var t,n=l.info("scrollPos");t=0<h.duration?(n-a.start)/(a.end-a.start):n>=a.start?1:0,d.trigger("update",{startPos:a.start,endPos:a.end,scrollPos:n}),d.progress(t)}else m&&p===f&&C(!0);else l.updateScene(d,!1);return d},this.refresh=function(){return o(),y(),d},this.progress=function(e){if(arguments.length){var t=!1,n=p,r=l?l.info("scrollDirection"):"PAUSED",i=h.reverse||g<=e;if(0===h.duration?(t=g!=e,p=0===(g=e<1&&i?0:1)?c:f):e<0&&p!==c&&i?(p=c,t=!(g=0)):0<=e&&e<1&&i?(g=e,p=f,t=!0):1<=e&&p!==u?(g=1,p=u,t=!0):p!==f||i||C(),t){var o={progress:g,state:p,scrollDirection:r},s=p!=n,a=function(e){d.trigger(e,o)};s&&n!==f&&(a("enter"),a(n===c?"start":"end")),a("progress"),s&&p!==f&&(a(p===c?"start":"end"),a("leave"))}return d}return g};var m,w,t=function(){a={start:v+h.offset},l&&h.triggerElement&&(a.start-=l.info("size")*h.triggerHook),a.end=a.start+h.duration},o=function(e){if(n){var t="duration";x(t,n.call(d))&&!e&&(d.trigger("change",{what:t,newval:h[t]}),d.trigger("shift",{reason:t}))}},y=function(e){var t=0,n=h.triggerElement;if(l&&(n||0<v)){if(n)if(n.parentNode){for(var r=l.info(),i=R.get.offset(r.container),o=r.vertical?"top":"left";n.parentNode.hasAttribute(P);)n=n.parentNode;var s=R.get.offset(n);r.isDocument||(i[o]-=l.scrollPos()),t=s[o]-i[o]}else d.triggerElement(void 0);var a=t!=v;v=t,a&&!e&&d.trigger("shift",{reason:"triggerElementPosition"})}},S=function(e){0<h.triggerHook&&d.trigger("shift",{reason:"containerResize"})},b=R.extend(D.validate,{duration:function(t){if(R.type.String(t)&&t.match(/^(\.|\d)*\d+%$/)){var e=parseFloat(t)/100;t=function(){return l?l.info("size")*e:0}}if(R.type.Function(t)){n=t;try{t=parseFloat(n.call(d))}catch(e){t=-1}}if(t=parseFloat(t),!R.type.Number(t)||t<0)throw n&&(n=void 0),0;return t}}),E=function(e){(e=arguments.length?[e]:Object.keys(b)).forEach(function(t,e){var n;if(b[t])try{n=b[t](h[t])}catch(e){n=r[t]}finally{h[t]=n}})},x=function(e,t){var n=!1,r=h[e];return h[e]!=t&&(h[e]=t,E(e),n=r!=h[e]),n},z=function(t){d[t]||(d[t]=function(e){return arguments.length?("duration"===t&&(n=void 0),x(t,e)&&(d.trigger("change",{what:t,newval:h[t]}),-1<D.shifts.indexOf(t)&&d.trigger("shift",{reason:t})),d):h[t]})};this.controller=function(){return l},this.state=function(){return p},this.scrollOffset=function(){return a.start},this.triggerPosition=function(){var e=h.offset;return l&&(h.triggerElement?e+=v:e+=l.info("size")*d.triggerHook()),e},d.on("shift.internal",function(e){var t="duration"===e.reason;(p===u&&t||p===f&&0===h.duration)&&C(),t&&F()}).on("progress.internal",function(e){C()}).on("add.internal",function(e){F()}).on("destroy.internal",function(e){d.removePin(e.reset)});var C=function(e){if(m&&l){var t=l.info(),n=w.spacer.firstChild;if(e||p!==f){var r={position:w.inFlow?"relative":"absolute",top:0,left:0},i=R.css(n,"position")!=r.position;w.pushFollowers?0<h.duration&&(p===u&&0===parseFloat(R.css(w.spacer,"padding-top"))?i=!0:p===c&&0===parseFloat(R.css(w.spacer,"padding-bottom"))&&(i=!0)):r[t.vertical?"top":"left"]=h.duration*g,R.css(n,r),i&&F()}else{"fixed"!=R.css(n,"position")&&(R.css(n,{position:"fixed"}),F());var o=R.get.offset(w.spacer,!0),s=h.reverse||0===h.duration?t.scrollPos-a.start:Math.round(g*h.duration*10)/10;o[t.vertical?"top":"left"]+=s,R.css(w.spacer.firstChild,{top:o.top,left:o.left})}}},F=function(){if(m&&l&&w.inFlow){var e=p===f,t=l.info("vertical"),n=w.spacer.firstChild,r=R.isMarginCollapseType(R.css(w.spacer,"display")),i={};w.relSize.width||w.relSize.autoFullWidth?e?R.css(m,{width:R.get.width(w.spacer)}):R.css(m,{width:"100%"}):(i["min-width"]=R.get.width(t?m:n,!0,!0),i.width=e?i["min-width"]:"auto"),w.relSize.height?e?R.css(m,{height:R.get.height(w.spacer)-(w.pushFollowers?h.duration:0)}):R.css(m,{height:"100%"}):(i["min-height"]=R.get.height(t?n:m,!0,!r),i.height=e?i["min-height"]:"auto"),w.pushFollowers&&(i["padding"+(t?"Top":"Left")]=h.duration*g,i["padding"+(t?"Bottom":"Right")]=h.duration*(1-g)),R.css(w.spacer,i)}},L=function(){l&&m&&p===f&&!l.info("isDocument")&&C()},T=function(){l&&m&&p===f&&((w.relSize.width||w.relSize.autoFullWidth)&&R.get.width(window)!=R.get.width(w.spacer.parentNode)||w.relSize.height&&R.get.height(window)!=R.get.height(w.spacer.parentNode))&&F()},A=function(e){l&&m&&p===f&&!l.info("isDocument")&&(e.preventDefault(),l._setScrollPos(l.info("scrollPos")-((e.wheelDelta||e[l.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,t){if(t=R.extend({},{pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},t),!(e=R.get.elements(e)[0]))return d;if("fixed"===R.css(e,"position"))return d;if(m){if(m===e)return d;d.removePin()}var n=(m=e).parentNode.style.display,r=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];m.parentNode.style.display="none";var i="absolute"!=R.css(m,"position"),o=R.css(m,r.concat(["display"])),s=R.css(m,["width","height"]);m.parentNode.style.display=n,!i&&t.pushFollowers&&(t.pushFollowers=!1);var a=m.parentNode.insertBefore(document.createElement("div"),m),l=R.extend(o,{position:i?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(i||R.extend(l,R.css(m,["width","height"])),R.css(a,l),a.setAttribute(P,""),R.addClass(a,t.spacerClass),w={spacer:a,relSize:{width:"%"===s.width.slice(-1),height:"%"===s.height.slice(-1),autoFullWidth:"auto"===s.width&&i&&R.isMarginCollapseType(o.display)},pushFollowers:t.pushFollowers,inFlow:i},!m.___origStyle){m.___origStyle={};var c=m.style;r.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]).forEach(function(e){m.___origStyle[e]=c[e]||""})}return w.relSize.width&&R.css(a,{width:s.width}),w.relSize.height&&R.css(a,{height:s.height}),a.appendChild(m),R.css(m,{position:i?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(w.relSize.width||w.relSize.autoFullWidth)&&R.css(m,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",L),window.addEventListener("resize",L),window.addEventListener("resize",T),m.addEventListener("mousewheel",A),m.addEventListener("DOMMouseScroll",A),C(),d},this.removePin=function(e){if(m){if(p===f&&C(!0),e||!l){var t=w.spacer.firstChild;if(t.hasAttribute(P)){var n=w.spacer.style,r={};["margin","marginLeft","marginRight","marginTop","marginBottom"].forEach(function(e){r[e]=n[e]||""}),R.css(t,r)}w.spacer.parentNode.insertBefore(t,w.spacer),w.spacer.parentNode.removeChild(w.spacer),m.parentNode.hasAttribute(P)||(R.css(m,m.___origStyle),delete m.___origStyle)}window.removeEventListener("scroll",L),window.removeEventListener("resize",L),window.removeEventListener("resize",T),m.removeEventListener("mousewheel",A),m.removeEventListener("DOMMouseScroll",A),m=void 0}return d};var N,O=[];return d.on("destroy.internal",function(e){d.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=R.get.elements(e);return 0!==n.length&&R.type.String(t)&&(0<O.length&&d.removeClassToggle(),N=t,O=n,d.on("enter.internal_class leave.internal_class",function(e){var n="enter"===e.type?R.addClass:R.removeClass;O.forEach(function(e,t){n(e,N)})})),d},this.removeClassToggle=function(e){return e&&O.forEach(function(e,t){R.removeClass(e,N)}),d.off("start.internal_class end.internal_class"),N=void 0,O=[],d},function(){for(var e in h)r.hasOwnProperty(e)||delete h[e];for(var t in r)z(t);E()}(),d};var D={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!R.type.Number(e))throw 0;return e},triggerElement:function(e){if(e=e||void 0){var t=R.get.elements(e)[0];if(!t||!t.parentNode)throw 0;e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(R.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw 0;e=t[e]}return e},reverse:function(e){return!!e}},shifts:["duration","offset","triggerHook"]};_.Scene.addOption=function(e,t,n,r){e in D.defaults||(D.defaults[e]=t,D.validate[e]=n,r&&D.shifts.push(e))},_.Scene.extend=function(e){var t=this;_.Scene=function(){return t.apply(this,arguments),this.$super=R.extend({},this),e.apply(this,arguments)||this},R.extend(_.Scene,t),_.Scene.prototype=t.prototype,_.Scene.prototype.constructor=_.Scene},_.Event=function(e,t,n,r){for(var i in r=r||{})this[i]=r[i];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var R=_._util=function(s){var n,e={},a=function(e){return parseFloat(e)||0},l=function(e){return e.currentStyle?e.currentStyle:s.getComputedStyle(e)},r=function(e,t,n,r){if((t=t===document?s:t)===s)r=!1;else if(!u.DomElement(t))return 0;e=e.charAt(0).toUpperCase()+e.substr(1).toLowerCase();var i=(n?t["offset"+e]||t["outer"+e]:t["client"+e]||t["inner"+e])||0;if(n&&r){var o=l(t);i+="Height"===e?a(o.marginTop)+a(o.marginBottom):a(o.marginLeft)+a(o.marginRight)}return i},c=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};e.extend=function(e){for(e=e||{},n=1;n<arguments.length;n++)if(arguments[n])for(var t in arguments[n])arguments[n].hasOwnProperty(t)&&(e[t]=arguments[n][t]);return e},e.isMarginCollapseType=function(e){return-1<["block","flex","list-item","table","-webkit-box"].indexOf(e)};var i=0,t=["ms","moz","webkit","o"],o=s.requestAnimationFrame,f=s.cancelAnimationFrame;for(n=0;!o&&n<4;++n)o=s[t[n]+"RequestAnimationFrame"],f=s[t[n]+"CancelAnimationFrame"]||s[t[n]+"CancelRequestAnimationFrame"];o||(o=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-i)),r=s.setTimeout(function(){e(t+n)},n);return i=t+n,r}),f||(f=function(e){s.clearTimeout(e)}),e.rAF=o.bind(s),e.cAF=f.bind(s);var u=e.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};u.String=function(e){return"string"===u(e)},u.Function=function(e){return"function"===u(e)},u.Array=function(e){return Array.isArray(e)},u.Number=function(e){return!u.Array(e)&&0<=e-parseFloat(e)+1},u.DomElement=function(e){return"object"==typeof HTMLElement||"function"==typeof HTMLElement?e instanceof HTMLElement||e instanceof SVGElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var d=e.get={};return d.elements=function(e){var t=[];if(u.String(e))try{e=document.querySelectorAll(e)}catch(e){return t}if("nodelist"===u(e)||u.Array(e)||e instanceof NodeList)for(var n=0,r=t.length=e.length;n<r;n++){var i=e[n];t[n]=u.DomElement(i)?i:d.elements(i)}else(u.DomElement(e)||e===document||e===s)&&(t=[e]);return t},d.scrollTop=function(e){return e&&"number"==typeof e.scrollTop?e.scrollTop:s.pageYOffset||0},d.scrollLeft=function(e){return e&&"number"==typeof e.scrollLeft?e.scrollLeft:s.pageXOffset||0},d.width=function(e,t,n){return r("width",e,t,n)},d.height=function(e,t,n){return r("height",e,t,n)},d.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=d.scrollTop(),n.left+=d.scrollLeft())}return n},e.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},e.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},e.css=function(e,t){if(u.String(t))return l(e)[c(t)];if(u.Array(t)){var n={},r=l(e);return t.forEach(function(e,t){n[e]=r[c(e)]}),n}for(var i in t){var o=t[i];o==parseFloat(o)&&(o+="px"),e.style[c(i)]=o}},e}(window||{});return _});

/*!
  * Bootstrap v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],t):t(e.bootstrap={},e.jQuery)}(this,function(e,t){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function l(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(e){var t,n,i;t=r,i=o[n=e],n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i})}return r}for(var r,n,o,a,c,u,f,h,d,p,m,g,_,v,y,E,b,w,C,T,S,D,A,I,O,N,k,x,P,L,j,H,M,F,W,R,U,B,q,K,Q,Y,V,z,G,J,Z,X,$,ee,te,ne,ie,re,oe,se,ae,le,ce,ue,fe,he,de,pe,me,ge,_e,ve,ye,Ee,be,we=function(i){var t="transitionend";function e(e){var t=this,n=!1;return i(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(t)},e),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(e){for(;e+=~~(1e6*Math.random()),document.getElementById(e););return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");t&&"#"!==t||(t=e.getAttribute("href")||"");try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var t=i(e).css("transition-duration");return parseFloat(t)?(t=t.split(",")[0],1e3*parseFloat(t)):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){i(e).trigger(t)},supportsTransitionEnd:function(){return Boolean(t)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],o=t[i],s=o&&l.isElement(o)?"element":(a=o,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(s))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+r+'".')}var a}};return i.fn.emulateTransitionEnd=e,i.event.special[l.TRANSITION_END]={bindType:t,delegateType:t,handle:function(e){if(i(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}},l}(t=t&&t.hasOwnProperty("default")?t.default:t),Ce=(n="alert",a="."+(o="bs.alert"),c=(r=t).fn[n],u={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",h="fade",d="show",p=function(){function i(e){this._element=e}var e=i.prototype;return e.close=function(e){var t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},e.dispose=function(){r.removeData(this._element,o),this._element=null},e._getRootElement=function(e){var t=we.getSelectorFromElement(e),n=!1;return t&&(n=document.querySelector(t)),n||(n=r(e).closest("."+f)[0]),n},e._triggerCloseEvent=function(e){var t=r.Event(u.CLOSE);return r(e).trigger(t),t},e._removeElement=function(t){var n=this;if(r(t).removeClass(d),r(t).hasClass(h)){var e=we.getTransitionDurationFromElement(t);r(t).one(we.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(e)}else this._destroyElement(t)},e._destroyElement=function(e){r(e).detach().trigger(u.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var e=r(this),t=e.data(o);t||(t=new i(this),e.data(o,t)),"close"===n&&t[n](this)})},i._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),i}(),r(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),r.fn[n]=p._jQueryInterface,r.fn[n].Constructor=p,r.fn[n].noConflict=function(){return r.fn[n]=c,p._jQueryInterface},p),Te=(g="button",v="."+(_="bs.button"),y=".data-api",E=(m=t).fn[g],b="active",w="btn",T='[data-toggle^="button"]',S='[data-toggle="buttons"]',D="input",A=".active",I=".btn",O={CLICK_DATA_API:"click"+v+y,FOCUS_BLUR_DATA_API:(C="focus")+v+y+" blur"+v+y},N=function(){function n(e){this._element=e}var e=n.prototype;return e.toggle=function(){var e=!0,t=!0,n=m(this._element).closest(S)[0];if(n){var i=this._element.querySelector(D);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(b))e=!1;else{var r=n.querySelector(A);r&&m(r).removeClass(b)}if(e){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(b),m(i).trigger("change")}i.focus(),t=!1}}t&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(b)),e&&m(this._element).toggleClass(b)},e.dispose=function(){m.removeData(this._element,_),this._element=null},n._jQueryInterface=function(t){return this.each(function(){var e=m(this).data(_);e||(e=new n(this),m(this).data(_,e)),"toggle"===t&&e[t]()})},s(n,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),n}(),m(document).on(O.CLICK_DATA_API,T,function(e){e.preventDefault();var t=e.target;m(t).hasClass(w)||(t=m(t).closest(I)),N._jQueryInterface.call(m(t),"toggle")}).on(O.FOCUS_BLUR_DATA_API,T,function(e){var t=m(e.target).closest(I)[0];m(t).toggleClass(C,/^focus(in)?$/.test(e.type))}),m.fn[g]=N._jQueryInterface,m.fn[g].Constructor=N,m.fn[g].noConflict=function(){return m.fn[g]=E,N._jQueryInterface},N),Se=(x="carousel",L="."+(P="bs.carousel"),j=".data-api",H=(k=t).fn[x],M={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},F={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},W="next",R="prev",U="left",B="right",q={SLIDE:"slide"+L,SLID:"slid"+L,KEYDOWN:"keydown"+L,MOUSEENTER:"mouseenter"+L,MOUSELEAVE:"mouseleave"+L,TOUCHEND:"touchend"+L,LOAD_DATA_API:"load"+L+j,CLICK_DATA_API:"click"+L+j},K="carousel",Q="active",Y="slide",V="carousel-item-right",z="carousel-item-left",G="carousel-item-next",J="carousel-item-prev",Z=".active",X=".active.carousel-item",$=".carousel-item",ee=".carousel-item-next, .carousel-item-prev",te=".carousel-indicators",ne="[data-slide], [data-slide-to]",ie='[data-ride="carousel"]',re=function(){function o(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(t),this._element=k(e)[0],this._indicatorsElement=this._element.querySelector(te),this._addEventListeners()}var e=o.prototype;return e.next=function(){this._isSliding||this._slide(W)},e.nextWhenVisible=function(){!document.hidden&&k(this._element).is(":visible")&&"hidden"!==k(this._element).css("visibility")&&this.next()},e.prev=function(){this._isSliding||this._slide(R)},e.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(ee)&&(we.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(e){var t=this;this._activeElement=this._element.querySelector(X);var n=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)k(this._element).one(q.SLID,function(){return t.to(e)});else{if(n===e)return this.pause(),void this.cycle();var i=n<e?W:R;this._slide(i,this._items[e])}},e.dispose=function(){k(this._element).off(L),k.removeData(this._element,P),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(e){return e=l({},M,e),we.typeCheckConfig(x,e,F),e},e._addEventListeners=function(){var t=this;this._config.keyboard&&k(this._element).on(q.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(k(this._element).on(q.MOUSEENTER,function(e){return t.pause(e)}).on(q.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&k(this._element).on(q.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},e._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},e._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll($)):[],this._items.indexOf(e)},e._getItemByDirection=function(e,t){var n=e===W,i=e===R,r=this._getItemIndex(t),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return t;var s=(r+(e===R?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},e._triggerSlideEvent=function(e,t){var n=this._getItemIndex(e),i=this._getItemIndex(this._element.querySelector(X)),r=k.Event(q.SLIDE,{relatedTarget:e,direction:t,from:i,to:n});return k(this._element).trigger(r),r},e._setActiveIndicatorElement=function(e){if(this._indicatorsElement){var t=[].slice.call(this._indicatorsElement.querySelectorAll(Z));k(t).removeClass(Q);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&k(n).addClass(Q)}},e._slide=function(e,t){var n,i,r,o=this,s=this._element.querySelector(X),a=this._getItemIndex(s),l=t||s&&this._getItemByDirection(e,s),c=this._getItemIndex(l),u=Boolean(this._interval);if(e===W?(n=z,i=G,r=U):(n=V,i=J,r=B),l&&k(l).hasClass(Q))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&s&&l){this._isSliding=!0,u&&this.pause(),this._setActiveIndicatorElement(l);var f=k.Event(q.SLID,{relatedTarget:l,direction:r,from:a,to:c});if(k(this._element).hasClass(Y)){k(l).addClass(i),we.reflow(l),k(s).addClass(n),k(l).addClass(n);var h=we.getTransitionDurationFromElement(s);k(s).one(we.TRANSITION_END,function(){k(l).removeClass(n+" "+i).addClass(Q),k(s).removeClass(Q+" "+i+" "+n),o._isSliding=!1,setTimeout(function(){return k(o._element).trigger(f)},0)}).emulateTransitionEnd(h)}else k(s).removeClass(Q),k(l).addClass(Q),this._isSliding=!1,k(this._element).trigger(f);u&&this.cycle()}},o._jQueryInterface=function(i){return this.each(function(){var e=k(this).data(P),t=l({},M,k(this).data());"object"==typeof i&&(t=l({},t,i));var n="string"==typeof i?i:t.slide;if(e||(e=new o(this,t),k(this).data(P,e)),"number"==typeof i)e.to(i);else if("string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}else t.interval&&(e.pause(),e.cycle())})},o._dataApiClickHandler=function(e){var t=we.getSelectorFromElement(this);if(t){var n=k(t)[0];if(n&&k(n).hasClass(K)){var i=l({},k(n).data(),k(this).data()),r=this.getAttribute("data-slide-to");r&&(i.interval=!1),o._jQueryInterface.call(k(n),i),r&&k(n).data(P).to(r),e.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return M}}]),o}(),k(document).on(q.CLICK_DATA_API,ne,re._dataApiClickHandler),k(window).on(q.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(ie)),t=0,n=e.length;t<n;t++){var i=k(e[t]);re._jQueryInterface.call(i,i.data())}}),k.fn[x]=re._jQueryInterface,k.fn[x].Constructor=re,k.fn[x].noConflict=function(){return k.fn[x]=H,re._jQueryInterface},re),De=(se="collapse",le="."+(ae="bs.collapse"),ce=(oe=t).fn[se],ue={toggle:!0,parent:""},fe={toggle:"boolean",parent:"(string|element)"},he={SHOW:"show"+le,SHOWN:"shown"+le,HIDE:"hide"+le,HIDDEN:"hidden"+le,CLICK_DATA_API:"click"+le+".data-api"},de="show",pe="collapse",me="collapsing",ge="collapsed",_e="width",ve="height",ye=".show, .collapsing",Ee='[data-toggle="collapse"]',be=function(){function a(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=oe.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(Ee)),i=0,r=n.length;i<r;i++){var o=n[i],s=we.getSelectorFromElement(o),a=[].slice.call(document.querySelectorAll(s)).filter(function(e){return e===t});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=a.prototype;return e.toggle=function(){oe(this._element).hasClass(de)?this.hide():this.show()},e.show=function(){var e,t,n=this;if(!this._isTransitioning&&!oe(this._element).hasClass(de)&&(this._parent&&0===(e=[].slice.call(this._parent.querySelectorAll(ye)).filter(function(e){return e.getAttribute("data-parent")===n._config.parent})).length&&(e=null),!(e&&(t=oe(e).not(this._selector).data(ae))&&t._isTransitioning))){var i=oe.Event(he.SHOW);if(oe(this._element).trigger(i),!i.isDefaultPrevented()){e&&(a._jQueryInterface.call(oe(e).not(this._selector),"hide"),t||oe(e).data(ae,null));var r=this._getDimension();oe(this._element).removeClass(pe).addClass(me),this._element.style[r]=0,this._triggerArray.length&&oe(this._triggerArray).removeClass(ge).attr("aria-expanded",!0),this.setTransitioning(!0);var o="scroll"+(r[0].toUpperCase()+r.slice(1)),s=we.getTransitionDurationFromElement(this._element);oe(this._element).one(we.TRANSITION_END,function(){oe(n._element).removeClass(me).addClass(pe).addClass(de),n._element.style[r]="",n.setTransitioning(!1),oe(n._element).trigger(he.SHOWN)}).emulateTransitionEnd(s),this._element.style[r]=this._element[o]+"px"}}},e.hide=function(){var e=this;if(!this._isTransitioning&&oe(this._element).hasClass(de)){var t=oe.Event(he.HIDE);if(oe(this._element).trigger(t),!t.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",we.reflow(this._element),oe(this._element).addClass(me).removeClass(pe).removeClass(de);var i=this._triggerArray.length;if(0<i)for(var r=0;r<i;r++){var o=this._triggerArray[r],s=we.getSelectorFromElement(o);if(null!==s)oe([].slice.call(document.querySelectorAll(s))).hasClass(de)||oe(o).addClass(ge).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=we.getTransitionDurationFromElement(this._element);oe(this._element).one(we.TRANSITION_END,function(){e.setTransitioning(!1),oe(e._element).removeClass(me).addClass(pe).trigger(he.HIDDEN)}).emulateTransitionEnd(a)}}},e.setTransitioning=function(e){this._isTransitioning=e},e.dispose=function(){oe.removeData(this._element,ae),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(e){return(e=l({},ue,e)).toggle=Boolean(e.toggle),we.typeCheckConfig(se,e,fe),e},e._getDimension=function(){return oe(this._element).hasClass(_e)?_e:ve},e._getParent=function(){var n=this,e=null;we.isElement(this._config.parent)?(e=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent);var t='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(e.querySelectorAll(t));return oe(i).each(function(e,t){n._addAriaAndCollapsedClass(a._getTargetFromElement(t),[t])}),e},e._addAriaAndCollapsedClass=function(e,t){if(e){var n=oe(e).hasClass(de);t.length&&oe(t).toggleClass(ge,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(e){var t=we.getSelectorFromElement(e);return t?document.querySelector(t):null},a._jQueryInterface=function(i){return this.each(function(){var e=oe(this),t=e.data(ae),n=l({},ue,e.data(),"object"==typeof i&&i?i:{});if(!t&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),t||(t=new a(this,n),e.data(ae,t)),"string"==typeof i){if("undefined"==typeof t[i])throw new TypeError('No method named "'+i+'"');t[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return ue}}]),a}(),oe(document).on(he.CLICK_DATA_API,Ee,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var n=oe(this),t=we.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(t));oe(i).each(function(){var e=oe(this),t=e.data(ae)?"toggle":n.data();be._jQueryInterface.call(e,t)})}),oe.fn[se]=be._jQueryInterface,oe.fn[se].Constructor=be,oe.fn[se].noConflict=function(){return oe.fn[se]=ce,be._jQueryInterface},be),Ae="undefined"!=typeof window&&"undefined"!=typeof document,Ie=["Edge","Trident","Firefox"],Oe=0,Ne=0;Ne<Ie.length;Ne+=1)if(Ae&&0<=navigator.userAgent.indexOf(Ie[Ne])){Oe=1;break}var ke=Ae&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},Oe))}};function xe(e){return e&&"[object Function]"==={}.toString.call(e)}function Pe(e,t){if(1!==e.nodeType)return[];var n=getComputedStyle(e,null);return t?n[t]:n}function Le(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function je(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=Pe(e),n=t.overflow,i=t.overflowX,r=t.overflowY;return/(auto|scroll|overlay)/.test(n+r+i)?e:je(Le(e))}var He=Ae&&!(!window.MSInputMethodContext||!document.documentMode),Me=Ae&&/MSIE 10/.test(navigator.userAgent);function Fe(e){return 11===e?He:10===e?Me:He||Me}function We(e){if(!e)return document.documentElement;for(var t=Fe(10)?document.body:null,n=e.offsetParent;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TD","TABLE"].indexOf(n.nodeName)&&"static"===Pe(n,"position")?We(n):n:e?e.ownerDocument.documentElement:document.documentElement}function Re(e){return null!==e.parentNode?Re(e.parentNode):e}function Ue(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?e:t,r=n?t:e,o=document.createRange();o.setStart(i,0),o.setEnd(r,0);var s,a,l=o.commonAncestorContainer;if(e!==l&&t!==l||i.contains(r))return"BODY"===(a=(s=l).nodeName)||"HTML"!==a&&We(s.firstElementChild)!==s?We(l):l;var c=Re(e);return c.host?Ue(c.host,t):Ue(e,Re(t).host)}function Be(e){var t="top"===(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var i=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||i)[t]}return e[t]}function qe(e,t){var n="x"===t?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+i+"Width"],10)}function Ke(e,t,n,i){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],Fe(10)?n["offset"+e]+i["margin"+("Height"===e?"Top":"Left")]+i["margin"+("Height"===e?"Bottom":"Right")]:0)}function Qe(){var e=document.body,t=document.documentElement,n=Fe(10)&&getComputedStyle(t);return{height:Ke("Height",e,t,n),width:Ke("Width",e,t,n)}}var Ye=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),Ve=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function Ge(e){return ze({},e,{right:e.left+e.width,bottom:e.top+e.height})}function Je(e){var t={};try{if(Fe(10)){t=e.getBoundingClientRect();var n=Be(e,"top"),i=Be(e,"left");t.top+=n,t.left+=i,t.bottom+=n,t.right+=i}else t=e.getBoundingClientRect()}catch(e){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},o="HTML"===e.nodeName?Qe():{},s=o.width||e.clientWidth||r.right-r.left,a=o.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,c=e.offsetHeight-a;if(l||c){var u=Pe(e);l-=qe(u,"x"),c-=qe(u,"y"),r.width-=l,r.height-=c}return Ge(r)}function Ze(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=Fe(10),r="HTML"===t.nodeName,o=Je(e),s=Je(t),a=je(e),l=Pe(t),c=parseFloat(l.borderTopWidth,10),u=parseFloat(l.borderLeftWidth,10);n&&"HTML"===t.nodeName&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var f=Ge({top:o.top-s.top-c,left:o.left-s.left-u,width:o.width,height:o.height});if(f.marginTop=0,f.marginLeft=0,!i&&r){var h=parseFloat(l.marginTop,10),d=parseFloat(l.marginLeft,10);f.top-=c-h,f.bottom-=c-h,f.left-=u-d,f.right-=u-d,f.marginTop=h,f.marginLeft=d}return(i&&!n?t.contains(a):t===a&&"BODY"!==a.nodeName)&&(f=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=Be(t,"top"),r=Be(t,"left"),o=n?-1:1;return e.top+=i*o,e.bottom+=i*o,e.left+=r*o,e.right+=r*o,e}(f,t)),f}function Xe(e){if(!e||!e.parentElement||Fe())return document.documentElement;for(var t=e.parentElement;t&&"none"===Pe(t,"transform");)t=t.parentElement;return t||document.documentElement}function $e(e,t,n,i){var r=4<arguments.length&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},s=r?Xe(e):Ue(e,t);if("viewport"===i)o=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,i=Ze(e,n),r=Math.max(n.clientWidth,window.innerWidth||0),o=Math.max(n.clientHeight,window.innerHeight||0),s=t?0:Be(n),a=t?0:Be(n,"left");return Ge({top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:r,height:o})}(s,r);else{var a=void 0;"scrollParent"===i?"BODY"===(a=je(Le(t))).nodeName&&(a=e.ownerDocument.documentElement):a="window"===i?e.ownerDocument.documentElement:i;var l=Ze(a,s,r);if("HTML"!==a.nodeName||function e(t){var n=t.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===Pe(t,"position")||e(Le(t)))}(s))o=l;else{var c=Qe(),u=c.height,f=c.width;o.top+=l.top-l.marginTop,o.bottom=u+l.top,o.left+=l.left-l.marginLeft,o.right=f+l.left}}return o.left+=n,o.top+=n,o.right-=n,o.bottom-=n,o}function et(e,t,i,n,r){var o=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var s=$e(i,n,o,r),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},l=Object.keys(a).map(function(e){return ze({key:e},a[e],{area:(t=a[e],t.width*t.height)});var t}).sort(function(e,t){return t.area-e.area}),c=l.filter(function(e){var t=e.width,n=e.height;return t>=i.clientWidth&&n>=i.clientHeight}),u=0<c.length?c[0].key:l[0].key,f=e.split("-")[1];return u+(f?"-"+f:"")}function tt(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return Ze(n,i?Xe(t):Ue(t,n),i)}function nt(e){var t=getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+i,height:e.offsetHeight+n}}function it(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function rt(e,t,n){n=n.split("-")[0];var i=nt(e),r={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),s=o?"top":"left",a=o?"left":"top",l=o?"height":"width",c=o?"width":"height";return r[s]=t[s]+t[l]/2-i[l]/2,r[a]=n===a?t[a]-i[c]:t[it(a)],r}function ot(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function st(e,n,t){return(void 0===t?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var i=ot(e,function(e){return e[t]===n});return e.indexOf(i)}(e,"name",t))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var t=e.function||e.fn;e.enabled&&xe(t)&&(n.offsets.popper=Ge(n.offsets.popper),n.offsets.reference=Ge(n.offsets.reference),n=t(n,e))}),n}function at(e,n){return e.some(function(e){var t=e.name;return e.enabled&&t===n})}function lt(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var r=t[i],o=r?""+r+n:e;if("undefined"!=typeof document.body.style[o])return o}return null}function ct(e){var t=e.ownerDocument;return t?t.defaultView:window}function ut(e,t,n,i){n.updateBound=i,ct(e).addEventListener("resize",n.updateBound,{passive:!0});var r=je(e);return function e(t,n,i,r){var o="BODY"===t.nodeName,s=o?t.ownerDocument.defaultView:t;s.addEventListener(n,i,{passive:!0}),o||e(je(s.parentNode),n,i,r),r.push(s)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function ft(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,ct(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function ht(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function dt(n,i){Object.keys(i).forEach(function(e){var t="";-1!==["width","height","top","right","bottom","left"].indexOf(e)&&ht(i[e])&&(t="px"),n.style[e]=i[e]+t})}function pt(e,t,n){var i=ot(e,function(e){return e.name===t}),r=!!i&&e.some(function(e){return e.name===n&&e.enabled&&e.order<i.order});if(!r){var o="`"+t+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}var mt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],gt=mt.slice(3);function _t(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=gt.indexOf(e),i=gt.slice(n+1).concat(gt.slice(0,n));return t?i.reverse():i}var vt="flip",yt="clockwise",Et="counterclockwise";function bt(e,r,o,t){var s=[0,0],a=-1!==["right","left"].indexOf(t),n=e.split(/(\+|\-)/).map(function(e){return e.trim()}),i=n.indexOf(ot(n,function(e){return-1!==e.search(/,|\s/)}));n[i]&&-1===n[i].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==i?[n.slice(0,i).concat([n[i].split(l)[0]]),[n[i].split(l)[1]].concat(n.slice(i+1))]:[n];return(c=c.map(function(e,t){var n=(1===t?!a:a)?"height":"width",i=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,i=!0,e):i?(e[e.length-1]+=t,i=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,i){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+r[1],s=r[2];if(!o)return e;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return Ge(a)[t]/100*o}if("vh"===s||"vw"===s)return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o;return o}(e,n,r,o)})})).forEach(function(n,i){n.forEach(function(e,t){ht(e)&&(s[i]+=e*("-"===n[t-1]?-1:1))})}),s}var wt={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],i=t.split("-")[1];if(i){var r=e.offsets,o=r.reference,s=r.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",u={start:Ve({},l,o[l]),end:Ve({},l,o[l]+o[c]-s[c])};e.offsets.popper=ze({},s,u[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,i=e.placement,r=e.offsets,o=r.popper,s=r.reference,a=i.split("-")[0],l=void 0;return l=ht(+n)?[+n,0]:bt(n,o,s,a),"left"===a?(o.top+=l[0],o.left-=l[1]):"right"===a?(o.top+=l[0],o.left+=l[1]):"top"===a?(o.left+=l[0],o.top-=l[1]):"bottom"===a&&(o.left+=l[0],o.top+=l[1]),e.popper=o,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,i){var t=i.boundariesElement||We(e.instance.popper);e.instance.reference===t&&(t=We(t));var n=lt("transform"),r=e.instance.popper.style,o=r.top,s=r.left,a=r[n];r.top="",r.left="",r[n]="";var l=$e(e.instance.popper,e.instance.reference,i.padding,t,e.positionFixed);r.top=o,r.left=s,r[n]=a,i.boundaries=l;var c=i.priority,u=e.offsets.popper,f={primary:function(e){var t=u[e];return u[e]<l[e]&&!i.escapeWithReference&&(t=Math.max(u[e],l[e])),Ve({},e,t)},secondary:function(e){var t="right"===e?"left":"top",n=u[t];return u[e]>l[e]&&!i.escapeWithReference&&(n=Math.min(u[t],l[e]-("right"===e?u.width:u.height))),Ve({},t,n)}};return c.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";u=ze({},u,f[t](e))}),e.offsets.popper=u,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,i=t.reference,r=e.placement.split("-")[0],o=Math.floor,s=-1!==["top","bottom"].indexOf(r),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<o(i[l])&&(e.offsets.popper[l]=o(i[l])-n[c]),n[l]>o(i[a])&&(e.offsets.popper[l]=o(i[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!pt(e.instance.modifiers,"arrow","keepTogether"))return e;var i=t.element;if("string"==typeof i){if(!(i=e.instance.popper.querySelector(i)))return e}else if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],o=e.offsets,s=o.popper,a=o.reference,l=-1!==["left","right"].indexOf(r),c=l?"height":"width",u=l?"Top":"Left",f=u.toLowerCase(),h=l?"left":"top",d=l?"bottom":"right",p=nt(i)[c];a[d]-p<s[f]&&(e.offsets.popper[f]-=s[f]-(a[d]-p)),a[f]+p>s[d]&&(e.offsets.popper[f]+=a[f]+p-s[d]),e.offsets.popper=Ge(e.offsets.popper);var m=a[f]+a[c]/2-p/2,g=Pe(e.instance.popper),_=parseFloat(g["margin"+u],10),v=parseFloat(g["border"+u+"Width"],10),y=m-e.offsets.popper[f]-_-v;return y=Math.max(Math.min(s[c]-p,y),0),e.arrowElement=i,e.offsets.arrow=(Ve(n={},f,Math.round(y)),Ve(n,h,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(p,m){if(at(p.instance.modifiers,"inner"))return p;if(p.flipped&&p.placement===p.originalPlacement)return p;var g=$e(p.instance.popper,p.instance.reference,m.padding,m.boundariesElement,p.positionFixed),_=p.placement.split("-")[0],v=it(_),y=p.placement.split("-")[1]||"",E=[];switch(m.behavior){case vt:E=[_,v];break;case yt:E=_t(_);break;case Et:E=_t(_,!0);break;default:E=m.behavior}return E.forEach(function(e,t){if(_!==e||E.length===t+1)return p;_=p.placement.split("-")[0],v=it(_);var n,i=p.offsets.popper,r=p.offsets.reference,o=Math.floor,s="left"===_&&o(i.right)>o(r.left)||"right"===_&&o(i.left)<o(r.right)||"top"===_&&o(i.bottom)>o(r.top)||"bottom"===_&&o(i.top)<o(r.bottom),a=o(i.left)<o(g.left),l=o(i.right)>o(g.right),c=o(i.top)<o(g.top),u=o(i.bottom)>o(g.bottom),f="left"===_&&a||"right"===_&&l||"top"===_&&c||"bottom"===_&&u,h=-1!==["top","bottom"].indexOf(_),d=!!m.flipVariations&&(h&&"start"===y&&a||h&&"end"===y&&l||!h&&"start"===y&&c||!h&&"end"===y&&u);(s||f||d)&&(p.flipped=!0,(s||f)&&(_=E[t+1]),d&&(y="end"===(n=y)?"start":"start"===n?"end":n),p.placement=_+(y?"-"+y:""),p.offsets.popper=ze({},p.offsets.popper,rt(p.instance.popper,p.offsets.reference,p.placement)),p=st(p.instance.modifiers,p,"flip"))}),p},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],i=e.offsets,r=i.popper,o=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return r[s?"left":"top"]=o[n]-(a?r[s?"width":"height"]:0),e.placement=it(t),e.offsets.popper=Ge(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!pt(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=ot(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,i=t.y,r=e.offsets.popper,o=ot(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==o?o:t.gpuAcceleration,a=Je(We(e.instance.popper)),l={position:r.position},c={left:Math.floor(r.left),top:Math.round(r.top),bottom:Math.round(r.bottom),right:Math.floor(r.right)},u="bottom"===n?"top":"bottom",f="right"===i?"left":"right",h=lt("transform"),d=void 0,p=void 0;if(p="bottom"===u?-a.height+c.bottom:c.top,d="right"===f?-a.width+c.right:c.left,s&&h)l[h]="translate3d("+d+"px, "+p+"px, 0)",l[u]=0,l[f]=0,l.willChange="transform";else{var m="bottom"===u?-1:1,g="right"===f?-1:1;l[u]=p*m,l[f]=d*g,l.willChange=u+", "+f}var _={"x-placement":e.placement};return e.attributes=ze({},_,e.attributes),e.styles=ze({},l,e.styles),e.arrowStyles=ze({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return dt(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach(function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)}),e.arrowElement&&Object.keys(e.arrowStyles).length&&dt(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,i,r){var o=tt(r,t,e,n.positionFixed),s=et(n.placement,o,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",s),dt(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},Ct=function(){function o(e,t){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=ke(this.update.bind(this)),this.options=ze({},o.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=t&&t.jquery?t[0]:t,this.options.modifiers={},Object.keys(ze({},o.Defaults.modifiers,i.modifiers)).forEach(function(e){n.options.modifiers[e]=ze({},o.Defaults.modifiers[e]||{},i.modifiers?i.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return ze({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&xe(e.onLoad)&&e.onLoad(n.reference,n.popper,n.options,e,n.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return Ye(o,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=tt(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=et(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=rt(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=st(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,at(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[lt("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=ut(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return ft.call(this)}}]),o}();Ct.Utils=("undefined"!=typeof window?window:global).PopperUtils,Ct.placements=mt,Ct.Defaults=wt;var Tt,St,Dt,At,It,Ot,Nt,kt,xt,Pt,Lt,jt,Ht,Mt,Ft,Wt,Rt,Ut,Bt,qt,Kt,Qt,Yt,Vt,zt,Gt,Jt,Zt,Xt,$t,en,tn,nn,rn,on,sn,an,ln,cn,un,fn,hn,dn,pn,mn,gn,_n,vn,yn,En,bn,wn,Cn,Tn,Sn,Dn,An,In,On,Nn,kn,xn,Pn,Ln,jn,Hn,Mn,Fn,Wn,Rn,Un,Bn,qn,Kn,Qn,Yn,Vn,zn,Gn,Jn,Zn,Xn,$n,ei,ti,ni,ii,ri,oi,si,ai,li,ci,ui,fi,hi,di,pi,mi,gi,_i,vi,yi,Ei,bi,wi,Ci,Ti,Si,Di,Ai,Ii,Oi,Ni,ki,xi,Pi,Li,ji,Hi,Mi,Fi,Wi,Ri,Ui,Bi=(St="dropdown",At="."+(Dt="bs.dropdown"),It=".data-api",Ot=(Tt=t).fn[St],Nt=new RegExp("38|40|27"),kt={HIDE:"hide"+At,HIDDEN:"hidden"+At,SHOW:"show"+At,SHOWN:"shown"+At,CLICK:"click"+At,CLICK_DATA_API:"click"+At+It,KEYDOWN_DATA_API:"keydown"+At+It,KEYUP_DATA_API:"keyup"+At+It},xt="disabled",Pt="show",Lt="dropup",jt="dropright",Ht="dropleft",Mt="dropdown-menu-right",Ft="position-static",Wt='[data-toggle="dropdown"]',Rt=".dropdown form",Ut=".dropdown-menu",Bt=".navbar-nav",qt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Kt="top-start",Qt="top-end",Yt="bottom-start",Vt="bottom-end",zt="right-start",Gt="left-start",Jt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Zt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Xt=function(){function c(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e=c.prototype;return e.toggle=function(){if(!this._element.disabled&&!Tt(this._element).hasClass(xt)){var e=c._getParentFromElement(this._element),t=Tt(this._menu).hasClass(Pt);if(c._clearMenus(),!t){var n={relatedTarget:this._element},i=Tt.Event(kt.SHOW,n);if(Tt(e).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof Ct)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=e:we.isElement(this._config.reference)&&(r=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&Tt(e).addClass(Ft),this._popper=new Ct(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===Tt(e).closest(Bt).length&&Tt(document.body).children().on("mouseover",null,Tt.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),Tt(this._menu).toggleClass(Pt),Tt(e).toggleClass(Pt).trigger(Tt.Event(kt.SHOWN,n))}}}},e.dispose=function(){Tt.removeData(this._element,Dt),Tt(this._element).off(At),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this;Tt(this._element).on(kt.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},e._getConfig=function(e){return e=l({},this.constructor.Default,Tt(this._element).data(),e),we.typeCheckConfig(St,e,this.constructor.DefaultType),e},e._getMenuElement=function(){if(!this._menu){var e=c._getParentFromElement(this._element);e&&(this._menu=e.querySelector(Ut))}return this._menu},e._getPlacement=function(){var e=Tt(this._element.parentNode),t=Yt;return e.hasClass(Lt)?(t=Kt,Tt(this._menu).hasClass(Mt)&&(t=Qt)):e.hasClass(jt)?t=zt:e.hasClass(Ht)?t=Gt:Tt(this._menu).hasClass(Mt)&&(t=Vt),t},e._detectNavbar=function(){return 0<Tt(this._element).closest(".navbar").length},e._getPopperConfig=function(){var t=this,e={};"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=l({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},c._jQueryInterface=function(t){return this.each(function(){var e=Tt(this).data(Dt);if(e||(e=new c(this,"object"==typeof t?t:null),Tt(this).data(Dt,e)),"string"==typeof t){if("undefined"==typeof e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},c._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var t=[].slice.call(document.querySelectorAll(Wt)),n=0,i=t.length;n<i;n++){var r=c._getParentFromElement(t[n]),o=Tt(t[n]).data(Dt),s={relatedTarget:t[n]};if(e&&"click"===e.type&&(s.clickEvent=e),o){var a=o._menu;if(Tt(r).hasClass(Pt)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&Tt.contains(r,e.target))){var l=Tt.Event(kt.HIDE,s);Tt(r).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&Tt(document.body).children().off("mouseover",null,Tt.noop),t[n].setAttribute("aria-expanded","false"),Tt(a).removeClass(Pt),Tt(r).removeClass(Pt).trigger(Tt.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(e){var t,n=we.getSelectorFromElement(e);return n&&(t=document.querySelector(n)),t||e.parentNode},c._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||Tt(e.target).closest(Ut).length)):Nt.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!Tt(this).hasClass(xt))){var t=c._getParentFromElement(this),n=Tt(t).hasClass(Pt);if((n||27===e.which&&32===e.which)&&(!n||27!==e.which&&32!==e.which)){var i=[].slice.call(t.querySelectorAll(qt));if(0!==i.length){var r=i.indexOf(e.target);38===e.which&&0<r&&r--,40===e.which&&r<i.length-1&&r++,r<0&&(r=0),i[r].focus()}}else{if(27===e.which){var o=t.querySelector(Wt);Tt(o).trigger("focus")}Tt(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Jt}},{key:"DefaultType",get:function(){return Zt}}]),c}(),Tt(document).on(kt.KEYDOWN_DATA_API,Wt,Xt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,Ut,Xt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Xt._clearMenus).on(kt.CLICK_DATA_API,Wt,function(e){e.preventDefault(),e.stopPropagation(),Xt._jQueryInterface.call(Tt(this),"toggle")}).on(kt.CLICK_DATA_API,Rt,function(e){e.stopPropagation()}),Tt.fn[St]=Xt._jQueryInterface,Tt.fn[St].Constructor=Xt,Tt.fn[St].noConflict=function(){return Tt.fn[St]=Ot,Xt._jQueryInterface},Xt),qi=(en="modal",nn="."+(tn="bs.modal"),rn=($t=t).fn[en],on={backdrop:!0,keyboard:!0,focus:!0,show:!0},sn={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},an={HIDE:"hide"+nn,HIDDEN:"hidden"+nn,SHOW:"show"+nn,SHOWN:"shown"+nn,FOCUSIN:"focusin"+nn,RESIZE:"resize"+nn,CLICK_DISMISS:"click.dismiss"+nn,KEYDOWN_DISMISS:"keydown.dismiss"+nn,MOUSEUP_DISMISS:"mouseup.dismiss"+nn,MOUSEDOWN_DISMISS:"mousedown.dismiss"+nn,CLICK_DATA_API:"click"+nn+".data-api"},ln="modal-scrollbar-measure",cn="modal-backdrop",un="modal-open",fn="fade",hn="show",dn=".modal-dialog",pn='[data-toggle="modal"]',mn='[data-dismiss="modal"]',gn=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_n=".sticky-top",vn=function(){function r(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(dn),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var e=r.prototype;return e.toggle=function(e){return this._isShown?this.hide():this.show(e)},e.show=function(e){var t=this;if(!this._isTransitioning&&!this._isShown){$t(this._element).hasClass(fn)&&(this._isTransitioning=!0);var n=$t.Event(an.SHOW,{relatedTarget:e});$t(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),$t(document.body).addClass(un),this._setEscapeEvent(),this._setResizeEvent(),$t(this._element).on(an.CLICK_DISMISS,mn,function(e){return t.hide(e)}),$t(this._dialog).on(an.MOUSEDOWN_DISMISS,function(){$t(t._element).one(an.MOUSEUP_DISMISS,function(e){$t(e.target).is(t._element)&&(t._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return t._showElement(e)}))}},e.hide=function(e){var t=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var n=$t.Event(an.HIDE);if($t(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=$t(this._element).hasClass(fn);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),$t(document).off(an.FOCUSIN),$t(this._element).removeClass(hn),$t(this._element).off(an.CLICK_DISMISS),$t(this._dialog).off(an.MOUSEDOWN_DISMISS),i){var r=we.getTransitionDurationFromElement(this._element);$t(this._element).one(we.TRANSITION_END,function(e){return t._hideModal(e)}).emulateTransitionEnd(r)}else this._hideModal()}}},e.dispose=function(){$t.removeData(this._element,tn),$t(window,document,this._element,this._backdrop).off(nn),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(e){return e=l({},on,e),we.typeCheckConfig(en,e,sn),e},e._showElement=function(e){var t=this,n=$t(this._element).hasClass(fn);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&we.reflow(this._element),$t(this._element).addClass(hn),this._config.focus&&this._enforceFocus();var i=$t.Event(an.SHOWN,{relatedTarget:e}),r=function(){t._config.focus&&t._element.focus(),t._isTransitioning=!1,$t(t._element).trigger(i)};if(n){var o=we.getTransitionDurationFromElement(this._element);$t(this._dialog).one(we.TRANSITION_END,r).emulateTransitionEnd(o)}else r()},e._enforceFocus=function(){var t=this;$t(document).off(an.FOCUSIN).on(an.FOCUSIN,function(e){document!==e.target&&t._element!==e.target&&0===$t(t._element).has(e.target).length&&t._element.focus()})},e._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?$t(this._element).on(an.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||$t(this._element).off(an.KEYDOWN_DISMISS)},e._setResizeEvent=function(){var t=this;this._isShown?$t(window).on(an.RESIZE,function(e){return t.handleUpdate(e)}):$t(window).off(an.RESIZE)},e._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){$t(document.body).removeClass(un),e._resetAdjustments(),e._resetScrollbar(),$t(e._element).trigger(an.HIDDEN)})},e._removeBackdrop=function(){this._backdrop&&($t(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(e){var t=this,n=$t(this._element).hasClass(fn)?fn:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=cn,n&&this._backdrop.classList.add(n),$t(this._backdrop).appendTo(document.body),$t(this._element).on(an.CLICK_DISMISS,function(e){t._ignoreBackdropClick?t._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===t._config.backdrop?t._element.focus():t.hide())}),n&&we.reflow(this._backdrop),$t(this._backdrop).addClass(hn),!e)return;if(!n)return void e();var i=we.getTransitionDurationFromElement(this._backdrop);$t(this._backdrop).one(we.TRANSITION_END,e).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){$t(this._backdrop).removeClass(hn);var r=function(){t._removeBackdrop(),e&&e()};if($t(this._element).hasClass(fn)){var o=we.getTransitionDurationFromElement(this._backdrop);$t(this._backdrop).one(we.TRANSITION_END,r).emulateTransitionEnd(o)}else r()}else e&&e()},e._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){var e=[].slice.call(document.querySelectorAll(gn)),t=[].slice.call(document.querySelectorAll(_n));$t(e).each(function(e,t){var n=t.style.paddingRight,i=$t(t).css("padding-right");$t(t).data("padding-right",n).css("padding-right",parseFloat(i)+r._scrollbarWidth+"px")}),$t(t).each(function(e,t){var n=t.style.marginRight,i=$t(t).css("margin-right");$t(t).data("margin-right",n).css("margin-right",parseFloat(i)-r._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=$t(document.body).css("padding-right");$t(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},e._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(gn));$t(e).each(function(e,t){var n=$t(t).data("padding-right");$t(t).removeData("padding-right"),t.style.paddingRight=n||""});var t=[].slice.call(document.querySelectorAll(""+_n));$t(t).each(function(e,t){var n=$t(t).data("margin-right");"undefined"!=typeof n&&$t(t).css("margin-right",n).removeData("margin-right")});var n=$t(document.body).data("padding-right");$t(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},e._getScrollbarWidth=function(){var e=document.createElement("div");e.className=ln,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},r._jQueryInterface=function(n,i){return this.each(function(){var e=$t(this).data(tn),t=l({},on,$t(this).data(),"object"==typeof n&&n?n:{});if(e||(e=new r(this,t),$t(this).data(tn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](i)}else t.show&&e.show(i)})},s(r,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return on}}]),r}(),$t(document).on(an.CLICK_DATA_API,pn,function(e){var t,n=this,i=we.getSelectorFromElement(this);i&&(t=document.querySelector(i));var r=$t(t).data(tn)?"toggle":l({},$t(t).data(),$t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var o=$t(t).one(an.SHOW,function(e){e.isDefaultPrevented()||o.one(an.HIDDEN,function(){$t(n).is(":visible")&&n.focus()})});vn._jQueryInterface.call($t(t),r,this)}),$t.fn[en]=vn._jQueryInterface,$t.fn[en].Constructor=vn,$t.fn[en].noConflict=function(){return $t.fn[en]=rn,vn._jQueryInterface},vn),Ki=(En="tooltip",wn="."+(bn="bs.tooltip"),Cn=(yn=t).fn[En],Tn="bs-tooltip",Sn=new RegExp("(^|\\s)"+Tn+"\\S+","g"),In={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(An={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(Dn={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},Nn="out",kn={HIDE:"hide"+wn,HIDDEN:"hidden"+wn,SHOW:(On="show")+wn,SHOWN:"shown"+wn,INSERTED:"inserted"+wn,CLICK:"click"+wn,FOCUSIN:"focusin"+wn,FOCUSOUT:"focusout"+wn,MOUSEENTER:"mouseenter"+wn,MOUSELEAVE:"mouseleave"+wn},xn="fade",Pn="show",Ln=".tooltip-inner",jn=".arrow",Hn="hover",Mn="focus",Fn="click",Wn="manual",Rn=function(){function i(e,t){if("undefined"==typeof Ct)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}var e=i.prototype;return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.toggleEnabled=function(){this._isEnabled=!this._isEnabled},e.toggle=function(e){if(this._isEnabled)if(e){var t=this.constructor.DATA_KEY,n=yn(e.currentTarget).data(t);n||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),yn(e.currentTarget).data(t,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(yn(this.getTipElement()).hasClass(Pn))return void this._leave(null,this);this._enter(null,this)}},e.dispose=function(){clearTimeout(this._timeout),yn.removeData(this.element,this.constructor.DATA_KEY),yn(this.element).off(this.constructor.EVENT_KEY),yn(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&yn(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function(){var t=this;if("none"===yn(this.element).css("display"))throw new Error("Please use show on visible elements");var e=yn.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){yn(this.element).trigger(e);var n=yn.contains(this.element.ownerDocument.documentElement,this.element);if(e.isDefaultPrevented()||!n)return;var i=this.getTipElement(),r=we.getUID(this.constructor.NAME);i.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&yn(i).addClass(xn);var o="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,s=this._getAttachment(o);this.addAttachmentClass(s);var a=!1===this.config.container?document.body:yn(document).find(this.config.container);yn(i).data(this.constructor.DATA_KEY,this),yn.contains(this.element.ownerDocument.documentElement,this.tip)||yn(i).appendTo(a),yn(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new Ct(this.element,i,{placement:s,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:jn},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){t._handlePopperPlacementChange(e)}}),yn(i).addClass(Pn),"ontouchstart"in document.documentElement&&yn(document.body).children().on("mouseover",null,yn.noop);var l=function(){t.config.animation&&t._fixTransition();var e=t._hoverState;t._hoverState=null,yn(t.element).trigger(t.constructor.Event.SHOWN),e===Nn&&t._leave(null,t)};if(yn(this.tip).hasClass(xn)){var c=we.getTransitionDurationFromElement(this.tip);yn(this.tip).one(we.TRANSITION_END,l).emulateTransitionEnd(c)}else l()}},e.hide=function(e){var t=this,n=this.getTipElement(),i=yn.Event(this.constructor.Event.HIDE),r=function(){t._hoverState!==On&&n.parentNode&&n.parentNode.removeChild(n),t._cleanTipClass(),t.element.removeAttribute("aria-describedby"),yn(t.element).trigger(t.constructor.Event.HIDDEN),null!==t._popper&&t._popper.destroy(),e&&e()};if(yn(this.element).trigger(i),!i.isDefaultPrevented()){if(yn(n).removeClass(Pn),"ontouchstart"in document.documentElement&&yn(document.body).children().off("mouseover",null,yn.noop),this._activeTrigger[Fn]=!1,this._activeTrigger[Mn]=!1,this._activeTrigger[Hn]=!1,yn(this.tip).hasClass(xn)){var o=we.getTransitionDurationFromElement(n);yn(n).one(we.TRANSITION_END,r).emulateTransitionEnd(o)}else r();this._hoverState=""}},e.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},e.isWithContent=function(){return Boolean(this.getTitle())},e.addAttachmentClass=function(e){yn(this.getTipElement()).addClass(Tn+"-"+e)},e.getTipElement=function(){return this.tip=this.tip||yn(this.config.template)[0],this.tip},e.setContent=function(){var e=this.getTipElement();this.setElementContent(yn(e.querySelectorAll(Ln)),this.getTitle()),yn(e).removeClass(xn+" "+Pn)},e.setElementContent=function(e,t){var n=this.config.html;"object"==typeof t&&(t.nodeType||t.jquery)?n?yn(t).parent().is(e)||e.empty().append(t):e.text(yn(t).text()):e[n?"html":"text"](t)},e.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},e._getAttachment=function(e){return An[e.toUpperCase()]},e._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(e){if("click"===e)yn(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(e){return i.toggle(e)});else if(e!==Wn){var t=e===Hn?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=e===Hn?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;yn(i.element).on(t,i.config.selector,function(e){return i._enter(e)}).on(n,i.config.selector,function(e){return i._leave(e)})}yn(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function(e,t){var n=this.constructor.DATA_KEY;(t=t||yn(e.currentTarget).data(n))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),yn(e.currentTarget).data(n,t)),e&&(t._activeTrigger["focusin"===e.type?Mn:Hn]=!0),yn(t.getTipElement()).hasClass(Pn)||t._hoverState===On?t._hoverState=On:(clearTimeout(t._timeout),t._hoverState=On,t.config.delay&&t.config.delay.show?t._timeout=setTimeout(function(){t._hoverState===On&&t.show()},t.config.delay.show):t.show())},e._leave=function(e,t){var n=this.constructor.DATA_KEY;(t=t||yn(e.currentTarget).data(n))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),yn(e.currentTarget).data(n,t)),e&&(t._activeTrigger["focusout"===e.type?Mn:Hn]=!1),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=Nn,t.config.delay&&t.config.delay.hide?t._timeout=setTimeout(function(){t._hoverState===Nn&&t.hide()},t.config.delay.hide):t.hide())},e._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},e._getConfig=function(e){return"number"==typeof(e=l({},this.constructor.Default,yn(this.element).data(),"object"==typeof e&&e?e:{})).delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),we.typeCheckConfig(En,e,this.constructor.DefaultType),e},e._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},e._cleanTipClass=function(){var e=yn(this.getTipElement()),t=e.attr("class").match(Sn);null!==t&&t.length&&e.removeClass(t.join(""))},e._handlePopperPlacementChange=function(e){var t=e.instance;this.tip=t.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},e._fixTransition=function(){var e=this.getTipElement(),t=this.config.animation;null===e.getAttribute("x-placement")&&(yn(e).removeClass(xn),this.config.animation=!1,this.hide(),this.show(),this.config.animation=t)},i._jQueryInterface=function(n){return this.each(function(){var e=yn(this).data(bn),t="object"==typeof n&&n;if((e||!/dispose|hide/.test(n))&&(e||(e=new i(this,t),yn(this).data(bn,e)),"string"==typeof n)){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return In}},{key:"NAME",get:function(){return En}},{key:"DATA_KEY",get:function(){return bn}},{key:"Event",get:function(){return kn}},{key:"EVENT_KEY",get:function(){return wn}},{key:"DefaultType",get:function(){return Dn}}]),i}(),yn.fn[En]=Rn._jQueryInterface,yn.fn[En].Constructor=Rn,yn.fn[En].noConflict=function(){return yn.fn[En]=Cn,Rn._jQueryInterface},Rn),Qi=(Bn="popover",Kn="."+(qn="bs.popover"),Qn=(Un=t).fn[Bn],Yn="bs-popover",Vn=new RegExp("(^|\\s)"+Yn+"\\S+","g"),zn=l({},Ki.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Gn=l({},Ki.DefaultType,{content:"(string|element|function)"}),Jn="fade",Xn=".popover-header",$n=".popover-body",ei={HIDE:"hide"+Kn,HIDDEN:"hidden"+Kn,SHOW:(Zn="show")+Kn,SHOWN:"shown"+Kn,INSERTED:"inserted"+Kn,CLICK:"click"+Kn,FOCUSIN:"focusin"+Kn,FOCUSOUT:"focusout"+Kn,MOUSEENTER:"mouseenter"+Kn,MOUSELEAVE:"mouseleave"+Kn},ti=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),(t.prototype.constructor=t).__proto__=n;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(e){Un(this.getTipElement()).addClass(Yn+"-"+e)},r.getTipElement=function(){return this.tip=this.tip||Un(this.config.template)[0],this.tip},r.setContent=function(){var e=Un(this.getTipElement());this.setElementContent(e.find(Xn),this.getTitle());var t=this._getContent();"function"==typeof t&&(t=t.call(this.element)),this.setElementContent(e.find($n),t),e.removeClass(Jn+" "+Zn)},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var e=Un(this.getTipElement()),t=e.attr("class").match(Vn);null!==t&&0<t.length&&e.removeClass(t.join(""))},i._jQueryInterface=function(n){return this.each(function(){var e=Un(this).data(qn),t="object"==typeof n?n:null;if((e||!/destroy|hide/.test(n))&&(e||(e=new i(this,t),Un(this).data(qn,e)),"string"==typeof n)){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return zn}},{key:"NAME",get:function(){return Bn}},{key:"DATA_KEY",get:function(){return qn}},{key:"Event",get:function(){return ei}},{key:"EVENT_KEY",get:function(){return Kn}},{key:"DefaultType",get:function(){return Gn}}]),i}(Ki),Un.fn[Bn]=ti._jQueryInterface,Un.fn[Bn].Constructor=ti,Un.fn[Bn].noConflict=function(){return Un.fn[Bn]=Qn,ti._jQueryInterface},ti),Yi=(ii="scrollspy",oi="."+(ri="bs.scrollspy"),si=(ni=t).fn[ii],ai={offset:10,method:"auto",target:""},li={offset:"number",method:"string",target:"(string|element)"},ci={ACTIVATE:"activate"+oi,SCROLL:"scroll"+oi,LOAD_DATA_API:"load"+oi+".data-api"},ui="dropdown-item",fi="active",hi='[data-spy="scroll"]',di=".active",pi=".nav, .list-group",mi=".nav-link",gi=".nav-item",_i=".list-group-item",vi=".dropdown",yi=".dropdown-item",Ei=".dropdown-toggle",bi="offset",wi="position",Ci=function(){function n(e,t){var n=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(t),this._selector=this._config.target+" "+mi+","+this._config.target+" "+_i+","+this._config.target+" "+yi,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,ni(this._scrollElement).on(ci.SCROLL,function(e){return n._process(e)}),this.refresh(),this._process()}var e=n.prototype;return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?bi:wi,r="auto"===this._config.method?e:this._config.method,o=r===wi?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(e){var t,n=we.getSelectorFromElement(e);if(n&&(t=document.querySelector(n)),t){var i=t.getBoundingClientRect();if(i.width||i.height)return[ni(t)[r]().top+o,n]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},e.dispose=function(){ni.removeData(this._element,ri),ni(this._scrollElement).off(oi),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(e){if("string"!=typeof(e=l({},ai,"object"==typeof e&&e?e:{})).target){var t=ni(e.target).attr("id");t||(t=we.getUID(ii),ni(e.target).attr("id",t)),e.target="#"+t}return we.typeCheckConfig(ii,e,li),e},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),n<=e){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&e<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&e>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||e<this._offsets[r+1])&&this._activate(this._targets[r])}}},e._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",");e=e.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'});var n=ni([].slice.call(document.querySelectorAll(e.join(","))));n.hasClass(ui)?(n.closest(vi).find(Ei).addClass(fi),n.addClass(fi)):(n.addClass(fi),n.parents(pi).prev(mi+", "+_i).addClass(fi),n.parents(pi).prev(gi).children(mi).addClass(fi)),ni(this._scrollElement).trigger(ci.ACTIVATE,{relatedTarget:t})},e._clear=function(){var e=[].slice.call(document.querySelectorAll(this._selector));ni(e).filter(di).removeClass(fi)},n._jQueryInterface=function(t){return this.each(function(){var e=ni(this).data(ri);if(e||(e=new n(this,"object"==typeof t&&t),ni(this).data(ri,e)),"string"==typeof t){if("undefined"==typeof e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return ai}}]),n}(),ni(window).on(ci.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(hi)),t=e.length;t--;){var n=ni(e[t]);Ci._jQueryInterface.call(n,n.data())}}),ni.fn[ii]=Ci._jQueryInterface,ni.fn[ii].Constructor=Ci,ni.fn[ii].noConflict=function(){return ni.fn[ii]=si,Ci._jQueryInterface},Ci),Vi=(Di="."+(Si="bs.tab"),Ai=(Ti=t).fn.tab,Ii={HIDE:"hide"+Di,HIDDEN:"hidden"+Di,SHOW:"show"+Di,SHOWN:"shown"+Di,CLICK_DATA_API:"click"+Di+".data-api"},Oi="dropdown-menu",Ni="active",ki="disabled",xi="fade",Pi="show",Li=".dropdown",ji=".nav, .list-group",Hi=".active",Mi="> li > .active",Fi='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Wi=".dropdown-toggle",Ri="> .dropdown-menu .active",Ui=function(){function i(e){this._element=e}var e=i.prototype;return e.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&Ti(this._element).hasClass(Ni)||Ti(this._element).hasClass(ki))){var e,i,t=Ti(this._element).closest(ji)[0],r=we.getSelectorFromElement(this._element);if(t){var o="UL"===t.nodeName?Mi:Hi;i=(i=Ti.makeArray(Ti(t).find(o)))[i.length-1]}var s=Ti.Event(Ii.HIDE,{relatedTarget:this._element}),a=Ti.Event(Ii.SHOW,{relatedTarget:i});if(i&&Ti(i).trigger(s),Ti(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(e=document.querySelector(r)),this._activate(this._element,t);var l=function(){var e=Ti.Event(Ii.HIDDEN,{relatedTarget:n._element}),t=Ti.Event(Ii.SHOWN,{relatedTarget:i});Ti(i).trigger(e),Ti(n._element).trigger(t)};e?this._activate(e,e.parentNode,l):l()}}},e.dispose=function(){Ti.removeData(this._element,Si),this._element=null},e._activate=function(e,t,n){var i=this,r=("UL"===t.nodeName?Ti(t).find(Mi):Ti(t).children(Hi))[0],o=n&&r&&Ti(r).hasClass(xi),s=function(){return i._transitionComplete(e,r,n)};if(r&&o){var a=we.getTransitionDurationFromElement(r);Ti(r).one(we.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},e._transitionComplete=function(e,t,n){if(t){Ti(t).removeClass(Pi+" "+Ni);var i=Ti(t.parentNode).find(Ri)[0];i&&Ti(i).removeClass(Ni),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}if(Ti(e).addClass(Ni),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),we.reflow(e),Ti(e).addClass(Pi),e.parentNode&&Ti(e.parentNode).hasClass(Oi)){var r=Ti(e).closest(Li)[0];if(r){var o=[].slice.call(r.querySelectorAll(Wi));Ti(o).addClass(Ni)}e.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var e=Ti(this),t=e.data(Si);if(t||(t=new i(this),e.data(Si,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),i}(),Ti(document).on(Ii.CLICK_DATA_API,Fi,function(e){e.preventDefault(),Ui._jQueryInterface.call(Ti(this),"show")}),Ti.fn.tab=Ui._jQueryInterface,Ti.fn.tab.Constructor=Ui,Ti.fn.tab.noConflict=function(){return Ti.fn.tab=Ai,Ui._jQueryInterface},Ui);!function(e){if("undefined"==typeof e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(t),e.Util=we,e.Alert=Ce,e.Button=Te,e.Carousel=Se,e.Collapse=De,e.Dropdown=Bi,e.Modal=qi,e.Popover=Qi,e.Scrollspy=Yi,e.Tab=Vi,e.Tooltip=Ki,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.bundle.min.js.map


!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.scrollama=t()}(this,function(){"use strict";function e(e){return"scrollama__debug-offset--"+e}function t(t){!function(t){var n=t.id,o=t.offsetVal,r=t.stepClass,i=document.createElement("div");i.id=e(n),i.className="scrollama__debug-offset",i.style.position="fixed",i.style.left="0",i.style.width="100%",i.style.height="0",i.style.borderTop="2px dashed black",i.style.zIndex="9999";var s=document.createElement("p");s.innerHTML='".'+r+'" trigger: <span>'+o+"</span>",s.style.fontSize="12px",s.style.fontFamily="monospace",s.style.color="black",s.style.margin="0",s.style.padding="6px",i.appendChild(s),document.body.appendChild(i)}({id:t.id,offsetVal:t.offsetVal,stepClass:t.stepEl[0].className})}function n(e){var t=e.id,n=e.index,o=e.state,r="scrollama__debug-step--"+t+"-"+n,i=document.getElementById(r+"_above"),s=document.getElementById(r+"_below"),a="enter"===o?"block":"none";i&&(i.style.display=a),s&&(s.style.display=a)}return function(){var o=["stepAbove","stepBelow","stepProgress","viewportAbove","viewportBelow"],r={},i={},s=null,a=[],f=[],l=[],c=[],u=0,p=0,d=0,v=0,g=0,m=0,x=!1,b=!1,w=!1,h=!1,y=!1,E=!1,M="down",I="percent",A=[];function C(e){console.error("scrollama error: "+e)}function O(){r={stepEnter:function(){},stepExit:function(){},stepProgress:function(){}},i={}}function S(e){return e.getBoundingClientRect().top+window.pageYOffset-(document.body.clientTop||0)}function B(e){return+e.getAttribute("data-scrollama-index")}function H(){window.pageYOffset>g?M="down":window.pageYOffset<g&&(M="up"),g=window.pageYOffset}function k(e){i[e]&&i[e].forEach(function(e){return e.disconnect()})}function _(){var t,n;d=window.innerHeight,t=document.body,n=document.documentElement,v=Math.max(t.scrollHeight,t.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight),p=u*("pixels"===I?1:d),x&&(f=a.map(function(e){return e.getBoundingClientRect().height}),l=a.map(S),b&&D()),w&&function(t){var n=t.id,o=t.offsetMargin,r=t.offsetVal,i="pixels"===t.format?"px":"",s=e(n),a=document.getElementById(s);a.style.top=o+"px",a.querySelector("span").innerText=""+r+i}({id:s,offsetMargin:p,offsetVal:u,format:I})}function N(e){if(e&&!b){if(!x)return C("scrollama error: enable() called before scroller was ready"),void(b=!1);D()}!e&&b&&o.forEach(k),b=e}function P(e,t){var n=B(e);void 0!==t&&(c[n].progress=t);var o={element:e,index:n,progress:c[n].progress};"enter"===c[n].state&&r.stepProgress(o)}function R(e,t){if("above"===t)for(var n=0;n<e;n+=1){var o=c[n];"enter"!==o.state&&"down"!==o.direction?(T(a[n],"down",!1),q(a[n],"down")):"enter"===o.state&&q(a[n],"down")}else if("below"===t)for(var r=c.length-1;r>e;r-=1){var i=c[r];"enter"===i.state&&q(a[r],"up"),"down"===i.direction&&(T(a[r],"up",!1),q(a[r],"up"))}}function T(e,t,o){void 0===o&&(o=!0);var i=B(e),a={element:e,index:i,direction:t};c[i].direction=t,c[i].state="enter",y&&o&&"down"===t&&R(i,"above"),y&&o&&"up"===t&&R(i,"below"),r.stepEnter&&!A[i]&&(r.stepEnter(a,c),w&&n({id:s,index:i,state:"enter"}),E&&(A[i]=!0)),h&&P(e)}function q(e,t){var o=B(e),i={element:e,index:o,direction:t};h&&("down"===t&&c[o].progress<1?P(e,1):"up"===t&&c[o].progress>0&&P(e,0)),c[o].direction=t,c[o].state="exit",r.stepExit(i,c),w&&n({id:s,index:o,state:"exit"})}function V(e){var t=e[0];H();var n=t.isIntersecting,o=t.boundingClientRect,r=t.target,i=o.top,s=o.bottom,a=i-p,f=s-p,l=B(r),u=c[l];n&&a<=0&&f>=0&&"down"===M&&"enter"!==u.state&&T(r,M),!n&&a>0&&"up"===M&&"enter"===u.state&&q(r,M)}function Y(e){var t=e[0];H();var n=t.isIntersecting,o=t.boundingClientRect,r=t.target,i=o.top,s=o.bottom,a=i-p,f=s-p,l=B(r),u=c[l];n&&a<=0&&f>=0&&"up"===M&&"enter"!==u.state&&T(r,M),!n&&f<0&&"down"===M&&"enter"===u.state&&q(r,M)}function F(e){var t=e[0];H();var n=t.isIntersecting,o=t.target,r=B(o),i=c[r];n&&"down"===M&&"down"!==i.direction&&"enter"!==i.state&&(T(o,"down"),q(o,"down"))}function j(e){var t=e[0];H();var n=t.isIntersecting,o=t.target,r=B(o),i=c[r];n&&"up"===M&&"down"===i.direction&&"enter"!==i.state&&(T(o,"up"),q(o,"up"))}function z(e){var t=e[0];H();var n=t.isIntersecting,o=t.intersectionRatio,r=t.boundingClientRect,i=t.target,s=r.bottom;n&&s-p>=0&&P(i,+o)}function L(){i.stepProgress=a.map(function(e,t){var n=f[t]-p+"px 0px "+(-d+p)+"px 0px",o=function(e){for(var t=Math.ceil(e/m),n=[],o=1/t,r=0;r<t;r+=1)n.push(r*o);return n}(f[t]),r=new IntersectionObserver(z,{rootMargin:n,threshold:o});return r.observe(e),r})}function D(){o.forEach(k),i.viewportAbove=a.map(function(e,t){var n=v-l[t],o=p-d-f[t],r=new IntersectionObserver(F,{rootMargin:n+"px 0px "+o+"px 0px"});return r.observe(e),r}),i.viewportBelow=a.map(function(e,t){var n=-p-f[t],o=p-d+f[t]+v,r=new IntersectionObserver(j,{rootMargin:n+"px 0px "+o+"px 0px"});return r.observe(e),r}),i.stepAbove=a.map(function(e,t){var n=-p+f[t],o=new IntersectionObserver(V,{rootMargin:n+"px 0px "+(p-d)+"px 0px"});return o.observe(e),o}),i.stepBelow=a.map(function(e,t){var n=-p,o=p-d+f[t],r=new IntersectionObserver(Y,{rootMargin:n+"px 0px "+o+"px 0px"});return r.observe(e),r}),h&&L()}function G(e){return!(!e||1!==e.nodeType)&&(function(e){var t=window.getComputedStyle(e);return("scroll"===t.overflowY||"auto"===t.overflowY)&&e.scrollHeight>e.clientHeight}(e)?e:G(e.parentNode))}var J={};return J.setup=function(e){var n=e.step,o=e.offset;void 0===o&&(o=.5);var r=e.progress;void 0===r&&(r=!1);var i=e.threshold;void 0===i&&(i=4);var f=e.debug;void 0===f&&(f=!1);var l=e.order;void 0===l&&(l=!0);var p,d,v,g,b,M=e.once;if(void 0===M&&(M=!1),O(),d=(p="abcdefghijklmnopqrstuv").length,v=Date.now(),s=""+[0,0,0].map(function(e){return p[Math.floor(Math.random()*d)]}).join("")+v,g=n,void 0===b&&(b=document),!(a="string"==typeof g?Array.from(b.querySelectorAll(g)):g instanceof Element?[g]:g instanceof NodeList?Array.from(g):g instanceof Array?g:[]).length)return C("no step elements"),J;var I=a.reduce(function(e,t){return e||G(t.parentNode)},!1);return I&&console.error("scrollama error: step elements cannot be children of a scrollable element. Remove any css on the parent element with overflow: scroll; or overflow: auto; on elements with fixed height.",I),w=f,h=r,y=l,E=M,J.offsetTrigger(o),m=Math.max(1,+i),x=!0,w&&t({id:s,stepEl:a,offsetVal:u}),a.forEach(function(e,t){return e.setAttribute("data-scrollama-index",t)}),c=a.map(function(){return{direction:null,state:null,progress:0}}),_(),J.enable(),J},J.resize=function(){return _(),J},J.enable=function(){return N(!0),J},J.disable=function(){return N(!1),J},J.destroy=function(){N(!1),O()},J.offsetTrigger=function(e){if(null===e)return u;if("number"==typeof e)I="percent",e>1&&C("offset value is greater than 1. Fallback to 1."),e<0&&C("offset value is lower than 0. Fallback to 0."),u=Math.min(Math.max(0,e),1);else if("string"==typeof e&&e.indexOf("px")>0){var t=+e.replace("px","");isNaN(t)?(C("offset value must be in 'px' format. Fallback to 0.5."),u=.5):(I="pixels",u=t)}else C("offset value does not include 'px'. Fallback to 0.5."),u=.5;return J},J.onStepEnter=function(e){return"function"==typeof e?r.stepEnter=e:C("onStepEnter requires a function"),J},J.onStepExit=function(e){return"function"==typeof e?r.stepExit=e:C("onStepExit requires a function"),J},J.onStepProgress=function(e){return"function"==typeof e?r.stepProgress=e:C("onStepProgress requires a function"),J},J}});


/**!

 @license
 handlebars v4.7.6

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?exports.Handlebars=b():a.Handlebars=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(){var a=r();return a.compile=function(b,c){return k.compile(b,c,a)},a.precompile=function(b,c){return k.precompile(b,c,a)},a.AST=i["default"],a.Compiler=k.Compiler,a.JavaScriptCompiler=m["default"],a.Parser=j.parser,a.parse=j.parse,a.parseWithoutProcessing=j.parseWithoutProcessing,a}var e=c(1)["default"];b.__esModule=!0;var f=c(2),g=e(f),h=c(45),i=e(h),j=c(46),k=c(51),l=c(52),m=e(l),n=c(49),o=e(n),p=c(44),q=e(p),r=g["default"].create,s=d();s.create=d,q["default"](s),s.Visitor=o["default"],s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){return a&&a.__esModule?a:{"default":a}},b.__esModule=!0},function(a,b,c){"use strict";function d(){var a=new h.HandlebarsEnvironment;return n.extend(a,h),a.SafeString=j["default"],a.Exception=l["default"],a.Utils=n,a.escapeExpression=n.escapeExpression,a.VM=p,a.template=function(b){return p.template(b,a)},a}var e=c(3)["default"],f=c(1)["default"];b.__esModule=!0;var g=c(4),h=e(g),i=c(37),j=f(i),k=c(6),l=f(k),m=c(5),n=e(m),o=c(38),p=e(o),q=c(44),r=f(q),s=d();s.create=d,r["default"](s),s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b},b.__esModule=!0},function(a,b,c){"use strict";function d(a,b,c){this.helpers=a||{},this.partials=b||{},this.decorators=c||{},i.registerDefaultHelpers(this),j.registerDefaultDecorators(this)}var e=c(1)["default"];b.__esModule=!0,b.HandlebarsEnvironment=d;var f=c(5),g=c(6),h=e(g),i=c(10),j=c(30),k=c(32),l=e(k),m=c(33),n="4.7.6";b.VERSION=n;var o=8;b.COMPILER_REVISION=o;var p=7;b.LAST_COMPATIBLE_COMPILER_REVISION=p;var q={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};b.REVISION_CHANGES=q;var r="[object Object]";d.prototype={constructor:d,logger:l["default"],log:l["default"].log,registerHelper:function(a,b){if(f.toString.call(a)===r){if(b)throw new h["default"]("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(f.toString.call(a)===r)f.extend(this.partials,a);else{if("undefined"==typeof b)throw new h["default"]('Attempting to register a partial called "'+a+'" as undefined');this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]},registerDecorator:function(a,b){if(f.toString.call(a)===r){if(b)throw new h["default"]("Arg not supported with multiple decorators");f.extend(this.decorators,a)}else this.decorators[a]=b},unregisterDecorator:function(a){delete this.decorators[a]},resetLoggedPropertyAccesses:function(){m.resetLoggedProperties()}};var s=l["default"].log;b.log=s,b.createFrame=f.createFrame,b.logger=l["default"]},function(a,b){"use strict";function c(a){return k[a]}function d(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function e(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1}function f(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return m.test(a)?a.replace(l,c):a}function g(a){return!a&&0!==a||!(!p(a)||0!==a.length)}function h(a){var b=d({},a);return b._parent=a,b}function i(a,b){return a.path=b,a}function j(a,b){return(a?a+".":"")+b}b.__esModule=!0,b.extend=d,b.indexOf=e,b.escapeExpression=f,b.isEmpty=g,b.createFrame=h,b.blockParams=i,b.appendContextPath=j;var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,m=/[&<>"'`=]/,n=Object.prototype.toString;b.toString=n;var o=function(a){return"function"==typeof a};o(/x/)&&(b.isFunction=o=function(a){return"function"==typeof a&&"[object Function]"===n.call(a)}),b.isFunction=o;var p=Array.isArray||function(a){return!(!a||"object"!=typeof a)&&"[object Array]"===n.call(a)};b.isArray=p},function(a,b,c){"use strict";function d(a,b){var c=b&&b.loc,g=void 0,h=void 0,i=void 0,j=void 0;c&&(g=c.start.line,h=c.end.line,i=c.start.column,j=c.end.column,a+=" - "+g+":"+i);for(var k=Error.prototype.constructor.call(this,a),l=0;l<f.length;l++)this[f[l]]=k[f[l]];Error.captureStackTrace&&Error.captureStackTrace(this,d);try{c&&(this.lineNumber=g,this.endLineNumber=h,e?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:j,enumerable:!0})):(this.column=i,this.endColumn=j))}catch(m){}}var e=c(7)["default"];b.__esModule=!0;var f=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];d.prototype=new Error,b["default"]=d,a.exports=b["default"]},function(a,b,c){a.exports={"default":c(8),__esModule:!0}},function(a,b,c){var d=c(9);a.exports=function(a,b,c){return d.setDesc(a,b,c)}},function(a,b){var c=Object;a.exports={create:c.create,getProto:c.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:c.getOwnPropertyDescriptor,setDesc:c.defineProperty,setDescs:c.defineProperties,getKeys:c.keys,getNames:c.getOwnPropertyNames,getSymbols:c.getOwnPropertySymbols,each:[].forEach}},function(a,b,c){"use strict";function d(a){h["default"](a),j["default"](a),l["default"](a),n["default"](a),p["default"](a),r["default"](a),t["default"](a)}function e(a,b,c){a.helpers[b]&&(a.hooks[b]=a.helpers[b],c||delete a.helpers[b])}var f=c(1)["default"];b.__esModule=!0,b.registerDefaultHelpers=d,b.moveHelperToHooks=e;var g=c(11),h=f(g),i=c(12),j=f(i),k=c(25),l=f(k),m=c(26),n=f(m),o=c(27),p=f(o),q=c(28),r=f(q),s=c(29),t=f(s)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5);b["default"]=function(a){a.registerHelper("blockHelperMissing",function(b,c){var e=c.inverse,f=c.fn;if(b===!0)return f(this);if(b===!1||null==b)return e(this);if(d.isArray(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):e(this);if(c.data&&c.ids){var g=d.createFrame(c.data);g.contextPath=d.appendContextPath(c.data.contextPath,c.name),c={data:g}}return f(b,c)})},a.exports=b["default"]},function(a,b,c){(function(d){"use strict";var e=c(13)["default"],f=c(1)["default"];b.__esModule=!0;var g=c(5),h=c(6),i=f(h);b["default"]=function(a){a.registerHelper("each",function(a,b){function c(b,c,d){l&&(l.key=b,l.index=c,l.first=0===c,l.last=!!d,m&&(l.contextPath=m+b)),k+=f(a[b],{data:l,blockParams:g.blockParams([a[b],b],[m+b,null])})}if(!b)throw new i["default"]("Must pass iterator to #each");var f=b.fn,h=b.inverse,j=0,k="",l=void 0,m=void 0;if(b.data&&b.ids&&(m=g.appendContextPath(b.data.contextPath,b.ids[0])+"."),g.isFunction(a)&&(a=a.call(this)),b.data&&(l=g.createFrame(b.data)),a&&"object"==typeof a)if(g.isArray(a))for(var n=a.length;j<n;j++)j in a&&c(j,j,j===a.length-1);else if(d.Symbol&&a[d.Symbol.iterator]){for(var o=[],p=a[d.Symbol.iterator](),q=p.next();!q.done;q=p.next())o.push(q.value);a=o;for(var n=a.length;j<n;j++)c(j,j,j===a.length-1)}else!function(){var b=void 0;e(a).forEach(function(a){void 0!==b&&c(b,j-1),b=a,j++}),void 0!==b&&c(b,j-1,!0)}();return 0===j&&(k=h(this)),k})},a.exports=b["default"]}).call(b,function(){return this}())},function(a,b,c){a.exports={"default":c(14),__esModule:!0}},function(a,b,c){c(15),a.exports=c(21).Object.keys},function(a,b,c){var d=c(16);c(18)("keys",function(a){return function(b){return a(d(b))}})},function(a,b,c){var d=c(17);a.exports=function(a){return Object(d(a))}},function(a,b){a.exports=function(a){if(void 0==a)throw TypeError("Can't call method on  "+a);return a}},function(a,b,c){var d=c(19),e=c(21),f=c(24);a.exports=function(a,b){var c=(e.Object||{})[a]||Object[a],g={};g[a]=b(c),d(d.S+d.F*f(function(){c(1)}),"Object",g)}},function(a,b,c){var d=c(20),e=c(21),f=c(22),g="prototype",h=function(a,b,c){var i,j,k,l=a&h.F,m=a&h.G,n=a&h.S,o=a&h.P,p=a&h.B,q=a&h.W,r=m?e:e[b]||(e[b]={}),s=m?d:n?d[b]:(d[b]||{})[g];m&&(c=b);for(i in c)j=!l&&s&&i in s,j&&i in r||(k=j?s[i]:c[i],r[i]=m&&"function"!=typeof s[i]?c[i]:p&&j?f(k,d):q&&s[i]==k?function(a){var b=function(b){return this instanceof a?new a(b):a(b)};return b[g]=a[g],b}(k):o&&"function"==typeof k?f(Function.call,k):k,o&&((r[g]||(r[g]={}))[i]=k))};h.F=1,h.G=2,h.S=4,h.P=8,h.B=16,h.W=32,a.exports=h},function(a,b){var c=a.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=c)},function(a,b){var c=a.exports={version:"1.2.6"};"number"==typeof __e&&(__e=c)},function(a,b,c){var d=c(23);a.exports=function(a,b,c){if(d(a),void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}}},function(a,b){a.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}},function(a,b){a.exports=function(a){try{return!!a()}catch(b){return!0}}},function(a,b,c){"use strict";var d=c(1)["default"];b.__esModule=!0;var e=c(6),f=d(e);b["default"]=function(a){a.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(1)["default"];b.__esModule=!0;var e=c(5),f=c(6),g=d(f);b["default"]=function(a){a.registerHelper("if",function(a,b){if(2!=arguments.length)throw new g["default"]("#if requires exactly one argument");return e.isFunction(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||e.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){if(2!=arguments.length)throw new g["default"]("#unless requires exactly one argument");return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("log",function(){for(var b=[void 0],c=arguments[arguments.length-1],d=0;d<arguments.length-1;d++)b.push(arguments[d]);var e=1;null!=c.hash.level?e=c.hash.level:c.data&&null!=c.data.level&&(e=c.data.level),b[0]=e,a.log.apply(a,b)})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("lookup",function(a,b,c){return a?c.lookupProperty(a,b):a})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(1)["default"];b.__esModule=!0;var e=c(5),f=c(6),g=d(f);b["default"]=function(a){a.registerHelper("with",function(a,b){if(2!=arguments.length)throw new g["default"]("#with requires exactly one argument");e.isFunction(a)&&(a=a.call(this));var c=b.fn;if(e.isEmpty(a))return b.inverse(this);var d=b.data;return b.data&&b.ids&&(d=e.createFrame(b.data),d.contextPath=e.appendContextPath(b.data.contextPath,b.ids[0])),c(a,{data:d,blockParams:e.blockParams([a],[d&&d.contextPath])})})},a.exports=b["default"]},function(a,b,c){"use strict";function d(a){g["default"](a)}var e=c(1)["default"];b.__esModule=!0,b.registerDefaultDecorators=d;var f=c(31),g=e(f)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5);b["default"]=function(a){a.registerDecorator("inline",function(a,b,c,e){var f=a;return b.partials||(b.partials={},f=function(e,f){var g=c.partials;c.partials=d.extend({},g,b.partials);var h=a(e,f);return c.partials=g,h}),b.partials[e.args[0]]=e.fn,f})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5),e={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(a){if("string"==typeof a){var b=d.indexOf(e.methodMap,a.toLowerCase());a=b>=0?b:parseInt(a,10)}return a},log:function(a){if(a=e.lookupLevel(a),"undefined"!=typeof console&&e.lookupLevel(e.level)<=a){var b=e.methodMap[a];console[b]||(b="log");for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];console[b].apply(console,d)}}};b["default"]=e,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){var b=i(null);b.constructor=!1,b.__defineGetter__=!1,b.__defineSetter__=!1,b.__lookupGetter__=!1;var c=i(null);return c.__proto__=!1,{properties:{whitelist:l.createNewLookupObject(c,a.allowedProtoProperties),defaultValue:a.allowProtoPropertiesByDefault},methods:{whitelist:l.createNewLookupObject(b,a.allowedProtoMethods),defaultValue:a.allowProtoMethodsByDefault}}}function e(a,b,c){return"function"==typeof a?f(b.methods,c):f(b.properties,c)}function f(a,b){return void 0!==a.whitelist[b]?a.whitelist[b]===!0:void 0!==a.defaultValue?a.defaultValue:(g(b),!1)}function g(a){o[a]!==!0&&(o[a]=!0,n.log("error",'Handlebars: Access has been denied to resolve the property "'+a+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}function h(){j(o).forEach(function(a){delete o[a]})}var i=c(34)["default"],j=c(13)["default"],k=c(3)["default"];b.__esModule=!0,b.createProtoAccessControl=d,b.resultIsAllowed=e,b.resetLoggedProperties=h;var l=c(36),m=c(32),n=k(m),o=i(null)},function(a,b,c){a.exports={"default":c(35),__esModule:!0}},function(a,b,c){var d=c(9);a.exports=function(a,b){return d.create(a,b)}},function(a,b,c){"use strict";function d(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return f.extend.apply(void 0,[e(null)].concat(b))}var e=c(34)["default"];b.__esModule=!0,b.createNewLookupObject=d;var f=c(5)},function(a,b){"use strict";function c(a){this.string=a}b.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=v.COMPILER_REVISION;if(!(b>=v.LAST_COMPATIBLE_COMPILER_REVISION&&b<=v.COMPILER_REVISION)){if(b<v.LAST_COMPATIBLE_COMPILER_REVISION){var d=v.REVISION_CHANGES[c],e=v.REVISION_CHANGES[b];throw new u["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new u["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){function c(c,d,e){e.hash&&(d=s.extend({},d,e.hash),e.ids&&(e.ids[0]=!0)),c=b.VM.resolvePartial.call(this,c,d,e);var f=s.extend({},e,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),g=b.VM.invokePartial.call(this,c,d,f);if(null==g&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),g=e.partials[e.name](d,f)),null!=g){if(e.indent){for(var h=g.split("\n"),i=0,j=h.length;i<j&&(h[i]||i+1!==j);i++)h[i]=e.indent+h[i];g=h.join("\n")}return g}throw new u["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){function c(b){return""+a.main(g,b,g.helpers,g.partials,f,i,h)}var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],f=e.data;d._setup(e),!e.partial&&a.useData&&(f=j(b,f));var h=void 0,i=a.useBlockParams?[]:void 0;return a.useDepths&&(h=e.depths?b!=e.depths[0]?[b].concat(e.depths):e.depths:[b]),(c=k(a.main,c,g,e.depths||[],f,i))(b,e)}if(!b)throw new u["default"]("No environment passed to template");if(!a||!a.main)throw new u["default"]("Unknown template object: "+typeof a);a.main.decorator=a.main_d,b.VM.checkRevision(a.compiler);var e=a.compiler&&7===a.compiler[0],g={strict:function(a,b,c){if(!(a&&b in a))throw new u["default"]('"'+b+'" not defined in '+a,{loc:c});return a[b]},lookupProperty:function(a,b){var c=a[b];return null==c?c:Object.prototype.hasOwnProperty.call(a,b)?c:y.resultIsAllowed(c,g.protoAccessControl,b)?c:void 0},lookup:function(a,b){for(var c=a.length,d=0;d<c;d++){var e=a[d]&&g.lookupProperty(a[d],b);if(null!=e)return a[d][b]}},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:s.escapeExpression,invokePartial:c,fn:function(b){var c=a[b];return c.decorator=a[b+"_d"],c},programs:[],program:function(a,b,c,d,e){var g=this.programs[a],h=this.fn(a);return b||e||d||c?g=f(this,a,h,b,c,d,e):g||(g=this.programs[a]=f(this,a,h)),g},data:function(a,b){for(;a&&b--;)a=a._parent;return a},mergeIfNeeded:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=s.extend({},b,a)),c},nullContext:n({}),noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){if(c.partial)g.protoAccessControl=c.protoAccessControl,g.helpers=c.helpers,g.partials=c.partials,g.decorators=c.decorators,g.hooks=c.hooks;else{var d=s.extend({},b.helpers,c.helpers);l(d,g),g.helpers=d,a.usePartial&&(g.partials=g.mergeIfNeeded(c.partials,b.partials)),(a.usePartial||a.useDecorators)&&(g.decorators=s.extend({},b.decorators,c.decorators)),g.hooks={},g.protoAccessControl=y.createProtoAccessControl(c);var f=c.allowCallsToHelperMissing||e;w.moveHelperToHooks(g,"helperMissing",f),w.moveHelperToHooks(g,"blockHelperMissing",f)}},d._child=function(b,c,d,e){if(a.useBlockParams&&!d)throw new u["default"]("must pass block params");if(a.useDepths&&!e)throw new u["default"]("must pass parent depths");return f(g,b,a[b],c,0,d,e)},d}function f(a,b,c,d,e,f,g){function h(b){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],h=g;return!g||b==g[0]||b===a.nullContext&&null===g[0]||(h=[b].concat(g)),c(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),h)}return h=k(c,h,a,g,d,f),h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function g(a,b,c){return a?a.call||c.name||(c.name=a,a=c.partials[a]):a="@partial-block"===c.name?c.data["partial-block"]:c.partials[c.name],a}function h(a,b,c){var d=c.data&&c.data["partial-block"];c.partial=!0,c.ids&&(c.data.contextPath=c.ids[0]||c.data.contextPath);var e=void 0;if(c.fn&&c.fn!==i&&!function(){c.data=v.createFrame(c.data);var a=c.fn;e=c.data["partial-block"]=function(b){var c=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return c.data=v.createFrame(c.data),c.data["partial-block"]=d,a(b,c)},a.partials&&(c.partials=s.extend({},c.partials,a.partials))}(),void 0===a&&e&&(a=e),void 0===a)throw new u["default"]("The partial "+c.name+" could not be found");if(a instanceof Function)return a(b,c)}function i(){return""}function j(a,b){return b&&"root"in b||(b=b?v.createFrame(b):{},b.root=a),b}function k(a,b,c,d,e,f){if(a.decorator){var g={};b=a.decorator(b,g,c,d&&d[0],e,f,d),s.extend(b,g)}return b}function l(a,b){o(a).forEach(function(c){var d=a[c];a[c]=m(d,b)})}function m(a,b){var c=b.lookupProperty;return x.wrapHelper(a,function(a){return s.extend({lookupProperty:c},a)})}var n=c(39)["default"],o=c(13)["default"],p=c(3)["default"],q=c(1)["default"];b.__esModule=!0,b.checkRevision=d,b.template=e,b.wrapProgram=f,b.resolvePartial=g,b.invokePartial=h,b.noop=i;var r=c(5),s=p(r),t=c(6),u=q(t),v=c(4),w=c(10),x=c(43),y=c(33)},function(a,b,c){a.exports={"default":c(40),__esModule:!0}},function(a,b,c){c(41),a.exports=c(21).Object.seal},function(a,b,c){var d=c(42);c(18)("seal",function(a){return function(b){return a&&d(b)?a(b):b}})},function(a,b){a.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},function(a,b){"use strict";function c(a,b){if("function"!=typeof a)return a;var c=function(){var c=arguments[arguments.length-1];return arguments[arguments.length-1]=b(c),a.apply(this,arguments)};return c}b.__esModule=!0,b.wrapHelper=c},function(a,b){(function(c){"use strict";b.__esModule=!0,b["default"]=function(a){var b="undefined"!=typeof c?c:window,d=b.Handlebars;a.noConflict=function(){return b.Handlebars===a&&(b.Handlebars=d),a}},a.exports=b["default"]}).call(b,function(){return this}())},function(a,b){"use strict";b.__esModule=!0;var c={helpers:{helperExpression:function(a){return"SubExpression"===a.type||("MustacheStatement"===a.type||"BlockStatement"===a.type)&&!!(a.params&&a.params.length||a.hash)},scopedId:function(a){return/^\.|this\b/.test(a.original)},simpleId:function(a){return 1===a.parts.length&&!c.helpers.scopedId(a)&&!a.depth}}};b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b){if("Program"===a.type)return a;i["default"].yy=o,o.locInfo=function(a){return new o.SourceLocation(b&&b.srcName,a)};var c=i["default"].parse(a);return c}function e(a,b){var c=d(a,b),e=new k["default"](b);return e.accept(c)}var f=c(1)["default"],g=c(3)["default"];b.__esModule=!0,b.parseWithoutProcessing=d,b.parse=e;var h=c(47),i=f(h),j=c(48),k=f(j),l=c(50),m=g(l),n=c(5);b.parser=i["default"];var o={};n.extend(o,m)},function(a,b){"use strict";b.__esModule=!0;var c=function(){function a(){this.yy={}}var b={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(a,b,c,d,e,f,g){var h=f.length-1;switch(e){case 1:return f[h-1];case 2:this.$=d.prepareProgram(f[h]);break;case 3:this.$=f[h];break;case 4:this.$=f[h];break;case 5:this.$=f[h];break;case 6:this.$=f[h];break;case 7:this.$=f[h];break;case 8:this.$=f[h];break;case 9:this.$={type:"CommentStatement",value:d.stripComment(f[h]),strip:d.stripFlags(f[h],f[h]),loc:d.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:f[h],value:f[h],loc:d.locInfo(this._$)};break;case 11:this.$=d.prepareRawBlock(f[h-2],f[h-1],f[h],this._$);break;case 12:this.$={path:f[h-3],params:f[h-2],hash:f[h-1]};break;case 13:this.$=d.prepareBlock(f[h-3],f[h-2],f[h-1],f[h],!1,this._$);break;case 14:this.$=d.prepareBlock(f[h-3],f[h-2],f[h-1],f[h],!0,this._$);break;case 15:this.$={open:f[h-5],path:f[h-4],params:f[h-3],hash:f[h-2],blockParams:f[h-1],strip:d.stripFlags(f[h-5],f[h])};break;case 16:this.$={path:f[h-4],params:f[h-3],hash:f[h-2],blockParams:f[h-1],strip:d.stripFlags(f[h-5],f[h])};break;case 17:this.$={path:f[h-4],params:f[h-3],hash:f[h-2],blockParams:f[h-1],strip:d.stripFlags(f[h-5],f[h])};break;case 18:this.$={strip:d.stripFlags(f[h-1],f[h-1]),program:f[h]};break;case 19:var i=d.prepareBlock(f[h-2],f[h-1],f[h],f[h],!1,this._$),j=d.prepareProgram([i],f[h-1].loc);j.chained=!0,this.$={strip:f[h-2].strip,program:j,chain:!0};break;case 20:this.$=f[h];break;case 21:this.$={path:f[h-1],strip:d.stripFlags(f[h-2],f[h])};break;case 22:this.$=d.prepareMustache(f[h-3],f[h-2],f[h-1],f[h-4],d.stripFlags(f[h-4],f[h]),this._$);break;case 23:this.$=d.prepareMustache(f[h-3],f[h-2],f[h-1],f[h-4],d.stripFlags(f[h-4],f[h]),this._$);break;case 24:this.$={type:"PartialStatement",name:f[h-3],params:f[h-2],hash:f[h-1],indent:"",strip:d.stripFlags(f[h-4],f[h]),loc:d.locInfo(this._$)};break;case 25:this.$=d.preparePartialBlock(f[h-2],f[h-1],f[h],this._$);break;case 26:this.$={path:f[h-3],params:f[h-2],hash:f[h-1],strip:d.stripFlags(f[h-4],f[h])};break;case 27:this.$=f[h];break;case 28:this.$=f[h];break;case 29:this.$={type:"SubExpression",path:f[h-3],params:f[h-2],hash:f[h-1],loc:d.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:f[h],loc:d.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:d.id(f[h-2]),value:f[h],loc:d.locInfo(this._$)};break;case 32:this.$=d.id(f[h-1]);break;case 33:this.$=f[h];break;case 34:this.$=f[h];break;case 35:this.$={type:"StringLiteral",value:f[h],original:f[h],loc:d.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(f[h]),original:Number(f[h]),loc:d.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:"true"===f[h],original:"true"===f[h],loc:d.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:d.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:d.locInfo(this._$)};break;case 40:this.$=f[h];break;case 41:this.$=f[h];break;case 42:this.$=d.preparePath(!0,f[h],this._$);break;case 43:this.$=d.preparePath(!1,f[h],this._$);break;case 44:f[h-2].push({part:d.id(f[h]),original:f[h],separator:f[h-1]}),this.$=f[h-2];break;case 45:this.$=[{part:d.id(f[h]),original:f[h]}];break;case 46:this.$=[];break;case 47:f[h-1].push(f[h]);break;case 48:this.$=[];break;case 49:f[h-1].push(f[h]);break;case 50:this.$=[];break;case 51:f[h-1].push(f[h]);break;case 58:this.$=[];break;case 59:f[h-1].push(f[h]);break;case 64:this.$=[];break;case 65:f[h-1].push(f[h]);break;case 70:this.$=[];break;case 71:f[h-1].push(f[h]);break;case 78:this.$=[];break;case 79:f[h-1].push(f[h]);break;case 82:this.$=[];break;case 83:f[h-1].push(f[h]);break;case 86:this.$=[];break;case 87:f[h-1].push(f[h]);break;case 90:this.$=[];break;case 91:f[h-1].push(f[h]);break;case 94:this.$=[];break;case 95:f[h-1].push(f[h]);break;case 98:this.$=[f[h]];break;case 99:f[h-1].push(f[h]);break;case 100:this.$=[f[h]];break;case 101:f[h-1].push(f[h])}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],
72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(a,b){throw new Error(a)},parse:function(a){function b(){var a;return a=c.lexer.lex()||1,"number"!=typeof a&&(a=c.symbols_[a]||a),a}var c=this,d=[0],e=[null],f=[],g=this.table,h="",i=0,j=0,k=0;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var l=this.lexer.yylloc;f.push(l);var m=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var n,o,p,q,r,s,t,u,v,w={};;){if(p=d[d.length-1],this.defaultActions[p]?q=this.defaultActions[p]:(null!==n&&"undefined"!=typeof n||(n=b()),q=g[p]&&g[p][n]),"undefined"==typeof q||!q.length||!q[0]){var x="";if(!k){v=[];for(s in g[p])this.terminals_[s]&&s>2&&v.push("'"+this.terminals_[s]+"'");x=this.lexer.showPosition?"Parse error on line "+(i+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[n]||n)+"'":"Parse error on line "+(i+1)+": Unexpected "+(1==n?"end of input":"'"+(this.terminals_[n]||n)+"'"),this.parseError(x,{text:this.lexer.match,token:this.terminals_[n]||n,line:this.lexer.yylineno,loc:l,expected:v})}}if(q[0]instanceof Array&&q.length>1)throw new Error("Parse Error: multiple actions possible at state: "+p+", token: "+n);switch(q[0]){case 1:d.push(n),e.push(this.lexer.yytext),f.push(this.lexer.yylloc),d.push(q[1]),n=null,o?(n=o,o=null):(j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,l=this.lexer.yylloc,k>0&&k--);break;case 2:if(t=this.productions_[q[1]][1],w.$=e[e.length-t],w._$={first_line:f[f.length-(t||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(t||1)].first_column,last_column:f[f.length-1].last_column},m&&(w._$.range=[f[f.length-(t||1)].range[0],f[f.length-1].range[1]]),r=this.performAction.call(w,h,j,i,this.yy,q[1],e,f),"undefined"!=typeof r)return r;t&&(d=d.slice(0,-1*t*2),e=e.slice(0,-1*t),f=f.slice(0,-1*t)),d.push(this.productions_[q[1]][0]),e.push(w.$),f.push(w._$),u=g[d[d.length-2]][d[d.length-1]],d.push(u);break;case 3:return!0}}return!0}},c=function(){var a={EOF:1,parseError:function(a,b){if(!this.yy.parser)throw new Error(a);this.yy.parser.parseError(a,b)},setInput:function(a){return this._input=a,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var b=a.match(/(?:\r\n?|\n).*/g);return b?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-b-1),this.offset-=b;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===d.length?this.yylloc.first_column:0)+d[d.length-c.length].length-c[0].length:this.yylloc.first_column-b},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-b]),this},more:function(){return this._more=!0,this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=new Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c,d,e;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),g=0;g<f.length&&(c=this._input.match(this.rules[f[g]]),!c||b&&!(c[0].length>b[0].length)||(b=c,d=g,this.options.flex));g++);return b?(e=b[0].match(/(?:\r\n?|\n).*/g),e&&(this.yylineno+=e.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:e?e[e.length-1].length-e[e.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+b[0].length},this.yytext+=b[0],this.match+=b[0],this.matches=b,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(b[0].length),this.matched+=b[0],a=this.performAction.call(this,this.yy,this,f[d],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a?a:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return"undefined"!=typeof a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)}};return a.options={},a.performAction=function(a,b,c,d){function e(a,c){return b.yytext=b.yytext.substring(a,b.yyleng-c+a)}switch(c){case 0:if("\\\\"===b.yytext.slice(-2)?(e(0,1),this.begin("mu")):"\\"===b.yytext.slice(-1)?(e(0,1),this.begin("emu")):this.begin("mu"),b.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(e(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(b.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return b.yytext=e(1,2).replace(/\\"/g,'"'),80;case 32:return b.yytext=e(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return b.yytext=b.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},a.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],a.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},a}();return b.lexer=c,a.prototype=b,b.Parser=a,new a}();b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(){var a=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.options=a}function e(a,b,c){void 0===b&&(b=a.length);var d=a[b-1],e=a[b-2];return d?"ContentStatement"===d.type?(e||!c?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(d.original):void 0:c}function f(a,b,c){void 0===b&&(b=-1);var d=a[b+1],e=a[b+2];return d?"ContentStatement"===d.type?(e||!c?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(d.original):void 0:c}function g(a,b,c){var d=a[null==b?0:b+1];if(d&&"ContentStatement"===d.type&&(c||!d.rightStripped)){var e=d.value;d.value=d.value.replace(c?/^\s+/:/^[ \t]*\r?\n?/,""),d.rightStripped=d.value!==e}}function h(a,b,c){var d=a[null==b?a.length-1:b-1];if(d&&"ContentStatement"===d.type&&(c||!d.leftStripped)){var e=d.value;return d.value=d.value.replace(c?/\s+$/:/[ \t]+$/,""),d.leftStripped=d.value!==e,d.leftStripped}}var i=c(1)["default"];b.__esModule=!0;var j=c(49),k=i(j);d.prototype=new k["default"],d.prototype.Program=function(a){var b=!this.options.ignoreStandalone,c=!this.isRootSeen;this.isRootSeen=!0;for(var d=a.body,i=0,j=d.length;i<j;i++){var k=d[i],l=this.accept(k);if(l){var m=e(d,i,c),n=f(d,i,c),o=l.openStandalone&&m,p=l.closeStandalone&&n,q=l.inlineStandalone&&m&&n;l.close&&g(d,i,!0),l.open&&h(d,i,!0),b&&q&&(g(d,i),h(d,i)&&"PartialStatement"===k.type&&(k.indent=/([ \t]+$)/.exec(d[i-1].original)[1])),b&&o&&(g((k.program||k.inverse).body),h(d,i)),b&&p&&(g(d,i),h((k.inverse||k.program).body))}}return a},d.prototype.BlockStatement=d.prototype.DecoratorBlock=d.prototype.PartialBlockStatement=function(a){this.accept(a.program),this.accept(a.inverse);var b=a.program||a.inverse,c=a.program&&a.inverse,d=c,i=c;if(c&&c.chained)for(d=c.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var j={open:a.openStrip.open,close:a.closeStrip.close,openStandalone:f(b.body),closeStandalone:e((d||b).body)};if(a.openStrip.close&&g(b.body,null,!0),c){var k=a.inverseStrip;k.open&&h(b.body,null,!0),k.close&&g(d.body,null,!0),a.closeStrip.open&&h(i.body,null,!0),!this.options.ignoreStandalone&&e(b.body)&&f(d.body)&&(h(b.body),g(d.body))}else a.closeStrip.open&&h(b.body,null,!0);return j},d.prototype.Decorator=d.prototype.MustacheStatement=function(a){return a.strip},d.prototype.PartialStatement=d.prototype.CommentStatement=function(a){var b=a.strip||{};return{inlineStandalone:!0,open:b.open,close:b.close}},b["default"]=d,a.exports=b["default"]},function(a,b,c){"use strict";function d(){this.parents=[]}function e(a){this.acceptRequired(a,"path"),this.acceptArray(a.params),this.acceptKey(a,"hash")}function f(a){e.call(this,a),this.acceptKey(a,"program"),this.acceptKey(a,"inverse")}function g(a){this.acceptRequired(a,"name"),this.acceptArray(a.params),this.acceptKey(a,"hash")}var h=c(1)["default"];b.__esModule=!0;var i=c(6),j=h(i);d.prototype={constructor:d,mutating:!1,acceptKey:function(a,b){var c=this.accept(a[b]);if(this.mutating){if(c&&!d.prototype[c.type])throw new j["default"]('Unexpected node type "'+c.type+'" found when accepting '+b+" on "+a.type);a[b]=c}},acceptRequired:function(a,b){if(this.acceptKey(a,b),!a[b])throw new j["default"](a.type+" requires "+b)},acceptArray:function(a){for(var b=0,c=a.length;b<c;b++)this.acceptKey(a,b),a[b]||(a.splice(b,1),b--,c--)},accept:function(a){if(a){if(!this[a.type])throw new j["default"]("Unknown type: "+a.type,a);this.current&&this.parents.unshift(this.current),this.current=a;var b=this[a.type](a);return this.current=this.parents.shift(),!this.mutating||b?b:b!==!1?a:void 0}},Program:function(a){this.acceptArray(a.body)},MustacheStatement:e,Decorator:e,BlockStatement:f,DecoratorBlock:f,PartialStatement:g,PartialBlockStatement:function(a){g.call(this,a),this.acceptKey(a,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:e,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(a){this.acceptArray(a.pairs)},HashPair:function(a){this.acceptRequired(a,"value")}},b["default"]=d,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b){if(b=b.path?b.path.original:b,a.path.original!==b){var c={loc:a.path.loc};throw new q["default"](a.path.original+" doesn't match "+b,c)}}function e(a,b){this.source=a,this.start={line:b.first_line,column:b.first_column},this.end={line:b.last_line,column:b.last_column}}function f(a){return/^\[.*\]$/.test(a)?a.substring(1,a.length-1):a}function g(a,b){return{open:"~"===a.charAt(2),close:"~"===b.charAt(b.length-3)}}function h(a){return a.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function i(a,b,c){c=this.locInfo(c);for(var d=a?"@":"",e=[],f=0,g=0,h=b.length;g<h;g++){var i=b[g].part,j=b[g].original!==i;if(d+=(b[g].separator||"")+i,j||".."!==i&&"."!==i&&"this"!==i)e.push(i);else{if(e.length>0)throw new q["default"]("Invalid path: "+d,{loc:c});".."===i&&f++}}return{type:"PathExpression",data:a,depth:f,parts:e,original:d,loc:c}}function j(a,b,c,d,e,f){var g=d.charAt(3)||d.charAt(2),h="{"!==g&&"&"!==g,i=/\*/.test(d);return{type:i?"Decorator":"MustacheStatement",path:a,params:b,hash:c,escaped:h,strip:e,loc:this.locInfo(f)}}function k(a,b,c,e){d(a,c),e=this.locInfo(e);var f={type:"Program",body:b,strip:{},loc:e};return{type:"BlockStatement",path:a.path,params:a.params,hash:a.hash,program:f,openStrip:{},inverseStrip:{},closeStrip:{},loc:e}}function l(a,b,c,e,f,g){e&&e.path&&d(a,e);var h=/\*/.test(a.open);b.blockParams=a.blockParams;var i=void 0,j=void 0;if(c){if(h)throw new q["default"]("Unexpected inverse block on decorator",c);c.chain&&(c.program.body[0].closeStrip=e.strip),j=c.strip,i=c.program}return f&&(f=i,i=b,b=f),{type:h?"DecoratorBlock":"BlockStatement",path:a.path,params:a.params,hash:a.hash,program:b,inverse:i,openStrip:a.strip,inverseStrip:j,closeStrip:e&&e.strip,loc:this.locInfo(g)}}function m(a,b){if(!b&&a.length){var c=a[0].loc,d=a[a.length-1].loc;c&&d&&(b={source:c.source,start:{line:c.start.line,column:c.start.column},end:{line:d.end.line,column:d.end.column}})}return{type:"Program",body:a,strip:{},loc:b}}function n(a,b,c,e){return d(a,c),{type:"PartialBlockStatement",name:a.path,params:a.params,hash:a.hash,program:b,openStrip:a.strip,closeStrip:c&&c.strip,loc:this.locInfo(e)}}var o=c(1)["default"];b.__esModule=!0,b.SourceLocation=e,b.id=f,b.stripFlags=g,b.stripComment=h,b.preparePath=i,b.prepareMustache=j,b.prepareRawBlock=k,b.prepareBlock=l,b.prepareProgram=m,b.preparePartialBlock=n;var p=c(6),q=o(p)},function(a,b,c){"use strict";function d(){}function e(a,b,c){if(null==a||"string"!=typeof a&&"Program"!==a.type)throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+a);b=b||{},"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var d=c.parse(a,b),e=(new c.Compiler).compile(d,b);return(new c.JavaScriptCompiler).compile(e,b)}function f(a,b,c){function d(){var d=c.parse(a,b),e=(new c.Compiler).compile(d,b),f=(new c.JavaScriptCompiler).compile(e,b,void 0,!0);return c.template(f)}function e(a,b){return f||(f=d()),f.call(this,a,b)}if(void 0===b&&(b={}),null==a||"string"!=typeof a&&"Program"!==a.type)throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+a);b=m.extend({},b),"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var f=void 0;return e._setup=function(a){return f||(f=d()),f._setup(a)},e._child=function(a,b,c,e){return f||(f=d()),f._child(a,b,c,e)},e}function g(a,b){if(a===b)return!0;if(m.isArray(a)&&m.isArray(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!g(a[c],b[c]))return!1;return!0}}function h(a){if(!a.path.parts){var b=a.path;a.path={type:"PathExpression",data:!1,depth:0,parts:[b.original+""],original:b.original+"",loc:b.loc}}}var i=c(34)["default"],j=c(1)["default"];b.__esModule=!0,b.Compiler=d,b.precompile=e,b.compile=f;var k=c(6),l=j(k),m=c(5),n=c(45),o=j(n),p=[].slice;d.prototype={compiler:d,equals:function(a){var b=this.opcodes.length;if(a.opcodes.length!==b)return!1;for(var c=0;c<b;c++){var d=this.opcodes[c],e=a.opcodes[c];if(d.opcode!==e.opcode||!g(d.args,e.args))return!1}b=this.children.length;for(var c=0;c<b;c++)if(!this.children[c].equals(a.children[c]))return!1;return!0},guid:0,compile:function(a,b){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=b,this.stringParams=b.stringParams,this.trackIds=b.trackIds,b.blockParams=b.blockParams||[],b.knownHelpers=m.extend(i(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0,lookup:!0},b.knownHelpers),this.accept(a)},compileProgram:function(a){var b=new this.compiler,c=b.compile(a,this.options),d=this.guid++;return this.usePartial=this.usePartial||c.usePartial,this.children[d]=c,this.useDepths=this.useDepths||c.useDepths,d},accept:function(a){if(!this[a.type])throw new l["default"]("Unknown type: "+a.type,a);this.sourceNode.unshift(a);var b=this[a.type](a);return this.sourceNode.shift(),b},Program:function(a){this.options.blockParams.unshift(a.blockParams);for(var b=a.body,c=b.length,d=0;d<c;d++)this.accept(b[d]);return this.options.blockParams.shift(),this.isSimple=1===c,this.blockParams=a.blockParams?a.blockParams.length:0,this},BlockStatement:function(a){h(a);var b=a.program,c=a.inverse;b=b&&this.compileProgram(b),c=c&&this.compileProgram(c);var d=this.classifySexpr(a);"helper"===d?this.helperSexpr(a,b,c):"simple"===d?(this.simpleSexpr(a),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.opcode("emptyHash"),this.opcode("blockValue",a.path.original)):(this.ambiguousSexpr(a,b,c),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(a){var b=a.program&&this.compileProgram(a.program),c=this.setupFullMustacheParams(a,b,void 0),d=a.path;this.useDecorators=!0,this.opcode("registerDecorator",c.length,d.original)},PartialStatement:function(a){this.usePartial=!0;var b=a.program;b&&(b=this.compileProgram(a.program));var c=a.params;if(c.length>1)throw new l["default"]("Unsupported number of partial arguments: "+c.length,a);c.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):c.push({type:"PathExpression",parts:[],depth:0}));var d=a.name.original,e="SubExpression"===a.name.type;e&&this.accept(a.name),this.setupFullMustacheParams(a,b,void 0,!0);var f=a.indent||"";this.options.preventIndent&&f&&(this.opcode("appendContent",f),f=""),this.opcode("invokePartial",e,d,f),this.opcode("append")},PartialBlockStatement:function(a){this.PartialStatement(a)},MustacheStatement:function(a){this.SubExpression(a),a.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(a){this.DecoratorBlock(a)},ContentStatement:function(a){a.value&&this.opcode("appendContent",a.value)},CommentStatement:function(){},SubExpression:function(a){h(a);var b=this.classifySexpr(a);"simple"===b?this.simpleSexpr(a):"helper"===b?this.helperSexpr(a):this.ambiguousSexpr(a)},ambiguousSexpr:function(a,b,c){var d=a.path,e=d.parts[0],f=null!=b||null!=c;this.opcode("getContext",d.depth),this.opcode("pushProgram",b),this.opcode("pushProgram",c),d.strict=!0,this.accept(d),this.opcode("invokeAmbiguous",e,f)},simpleSexpr:function(a){var b=a.path;b.strict=!0,this.accept(b),this.opcode("resolvePossibleLambda")},helperSexpr:function(a,b,c){var d=this.setupFullMustacheParams(a,b,c),e=a.path,f=e.parts[0];if(this.options.knownHelpers[f])this.opcode("invokeKnownHelper",d.length,f);else{if(this.options.knownHelpersOnly)throw new l["default"]("You specified knownHelpersOnly, but used the unknown helper "+f,a);e.strict=!0,e.falsy=!0,this.accept(e),this.opcode("invokeHelper",d.length,e.original,o["default"].helpers.simpleId(e))}},PathExpression:function(a){this.addDepth(a.depth),this.opcode("getContext",a.depth);var b=a.parts[0],c=o["default"].helpers.scopedId(a),d=!a.depth&&!c&&this.blockParamIndex(b);d?this.opcode("lookupBlockParam",d,a.parts):b?a.data?(this.options.data=!0,this.opcode("lookupData",a.depth,a.parts,a.strict)):this.opcode("lookupOnContext",a.parts,a.falsy,a.strict,c):this.opcode("pushContext")},StringLiteral:function(a){this.opcode("pushString",a.value)},NumberLiteral:function(a){this.opcode("pushLiteral",a.value)},BooleanLiteral:function(a){this.opcode("pushLiteral",a.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(a){var b=a.pairs,c=0,d=b.length;for(this.opcode("pushHash");c<d;c++)this.pushParam(b[c].value);for(;c--;)this.opcode("assignToHash",b[c].key);this.opcode("popHash")},opcode:function(a){this.opcodes.push({opcode:a,args:p.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(a){a&&(this.useDepths=!0)},classifySexpr:function(a){var b=o["default"].helpers.simpleId(a.path),c=b&&!!this.blockParamIndex(a.path.parts[0]),d=!c&&o["default"].helpers.helperExpression(a),e=!c&&(d||b);if(e&&!d){var f=a.path.parts[0],g=this.options;g.knownHelpers[f]?d=!0:g.knownHelpersOnly&&(e=!1)}return d?"helper":e?"ambiguous":"simple"},pushParams:function(a){for(var b=0,c=a.length;b<c;b++)this.pushParam(a[b])},pushParam:function(a){var b=null!=a.value?a.value:a.original||"";if(this.stringParams)b.replace&&(b=b.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),a.depth&&this.addDepth(a.depth),this.opcode("getContext",a.depth||0),this.opcode("pushStringParam",b,a.type),"SubExpression"===a.type&&this.accept(a);else{if(this.trackIds){var c=void 0;if(!a.parts||o["default"].helpers.scopedId(a)||a.depth||(c=this.blockParamIndex(a.parts[0])),c){var d=a.parts.slice(1).join(".");this.opcode("pushId","BlockParam",c,d)}else b=a.original||b,b.replace&&(b=b.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",a.type,b)}this.accept(a)}},setupFullMustacheParams:function(a,b,c,d){var e=a.params;return this.pushParams(e),this.opcode("pushProgram",b),this.opcode("pushProgram",c),a.hash?this.accept(a.hash):this.opcode("emptyHash",d),e},blockParamIndex:function(a){for(var b=0,c=this.options.blockParams.length;b<c;b++){var d=this.options.blockParams[b],e=d&&m.indexOf(d,a);if(d&&e>=0)return[b,e]}}}},function(a,b,c){"use strict";function d(a){this.value=a}function e(){}function f(a,b,c,d){var e=b.popStack(),f=0,g=c.length;for(a&&g--;f<g;f++)e=b.nameLookup(e,c[f],d);return a?[b.aliasable("container.strict"),"(",e,", ",b.quotedString(c[f]),", ",JSON.stringify(b.source.currentLocation)," )"]:e}var g=c(13)["default"],h=c(1)["default"];b.__esModule=!0;var i=c(4),j=c(6),k=h(j),l=c(5),m=c(53),n=h(m);e.prototype={nameLookup:function(a,b){return this.internalNameLookup(a,b)},depthedLookup:function(a){return[this.aliasable("container.lookup"),'(depths, "',a,'")']},compilerInfo:function(){var a=i.COMPILER_REVISION,b=i.REVISION_CHANGES[a];return[a,b]},appendToBuffer:function(a,b,c){return l.isArray(a)||(a=[a]),a=this.source.wrap(a,b),this.environment.isSimple?["return ",a,";"]:c?["buffer += ",a,";"]:(a.appendToBuffer=!0,a)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(a,b){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",a,",",JSON.stringify(b),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(a,b,c,d){this.environment=a,this.options=b,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!d,this.name=this.environment.name,this.isChild=!!c,this.context=c||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(a,b),this.useDepths=this.useDepths||a.useDepths||a.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||a.useBlockParams;var e=a.opcodes,f=void 0,g=void 0,h=void 0,i=void 0;for(h=0,i=e.length;h<i;h++)f=e[h],this.source.currentLocation=f.loc,g=g||f.loc,this[f.opcode].apply(this,f.args);if(this.source.currentLocation=g,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new k["default"]("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),";\n"]),
this.decorators.push("return fn;"),d?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()));var j=this.createFunctionContext(d);if(this.isChild)return j;var l={compiler:this.compilerInfo(),main:j};this.decorators&&(l.main_d=this.decorators,l.useDecorators=!0);var m=this.context,n=m.programs,o=m.decorators;for(h=0,i=n.length;h<i;h++)n[h]&&(l[h]=n[h],o[h]&&(l[h+"_d"]=o[h],l.useDecorators=!0));return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.useBlockParams&&(l.useBlockParams=!0),this.options.compat&&(l.compat=!0),d?l.compilerOptions=this.options:(l.compiler=JSON.stringify(l.compiler),this.source.currentLocation={start:{line:1,column:0}},l=this.objectLiteral(l),b.srcName?(l=l.toStringWithSourceMap({file:b.destName}),l.map=l.map&&l.map.toString()):l=l.toString()),l},preamble:function(){this.lastContext=0,this.source=new n["default"](this.options.srcName),this.decorators=new n["default"](this.options.srcName)},createFunctionContext:function(a){var b=this,c="",d=this.stackVars.concat(this.registers.list);d.length>0&&(c+=", "+d.join(", "));var e=0;g(this.aliases).forEach(function(a){var d=b.aliases[a];d.children&&d.referenceCount>1&&(c+=", alias"+ ++e+"="+a,d.children[0]="alias"+e)}),this.lookupPropertyFunctionIsUsed&&(c+=", "+this.lookupPropertyFunctionVarDeclaration());var f=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&f.push("blockParams"),this.useDepths&&f.push("depths");var h=this.mergeSource(c);return a?(f.push(h),Function.apply(this,f)):this.source.wrap(["function(",f.join(","),") {\n  ",h,"}"])},mergeSource:function(a){var b=this.environment.isSimple,c=!this.forceBuffer,d=void 0,e=void 0,f=void 0,g=void 0;return this.source.each(function(a){a.appendToBuffer?(f?a.prepend("  + "):f=a,g=a):(f&&(e?f.prepend("buffer += "):d=!0,g.add(";"),f=g=void 0),e=!0,b||(c=!1))}),c?f?(f.prepend("return "),g.add(";")):e||this.source.push('return "";'):(a+=", buffer = "+(d?"":this.initializeBuffer()),f?(f.prepend("return buffer + "),g.add(";")):this.source.push("return buffer;")),a&&this.source.prepend("var "+a.substring(2)+(d?"":";\n")),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return"\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim()},blockValue:function(a){var b=this.aliasable("container.hooks.blockHelperMissing"),c=[this.contextName(0)];this.setupHelperArgs(a,0,c);var d=this.popStack();c.splice(1,0,d),this.push(this.source.functionCall(b,"call",c))},ambiguousBlockValue:function(){var a=this.aliasable("container.hooks.blockHelperMissing"),b=[this.contextName(0)];this.setupHelperArgs("",0,b,!0),this.flushInline();var c=this.topStack();b.splice(1,0,c),this.pushSource(["if (!",this.lastHelper,") { ",c," = ",this.source.functionCall(a,"call",b),"}"])},appendContent:function(a){this.pendingContent?a=this.pendingContent+a:this.pendingLocation=this.source.currentLocation,this.pendingContent=a},append:function(){if(this.isInline())this.replaceStack(function(a){return[" != null ? ",a,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var a=this.popStack();this.pushSource(["if (",a," != null) { ",this.appendToBuffer(a,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(a){this.lastContext=a},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(a,b,c,d){var e=0;d||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(a[e++])),this.resolvePath("context",a,e,b,c)},lookupBlockParam:function(a,b){this.useBlockParams=!0,this.push(["blockParams[",a[0],"][",a[1],"]"]),this.resolvePath("context",b,1)},lookupData:function(a,b,c){a?this.pushStackLiteral("container.data(data, "+a+")"):this.pushStackLiteral("data"),this.resolvePath("data",b,0,!0,c)},resolvePath:function(a,b,c,d,e){var g=this;if(this.options.strict||this.options.assumeObjects)return void this.push(f(this.options.strict&&e,this,b,a));for(var h=b.length;c<h;c++)this.replaceStack(function(e){var f=g.nameLookup(e,b[c],a);return d?[" && ",f]:[" != null ? ",f," : ",e]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(a,b){this.pushContext(),this.pushString(b),"SubExpression"!==b&&("string"==typeof a?this.pushString(a):this.pushStackLiteral(a))},emptyHash:function(a){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(a?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var a=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(a.ids)),this.stringParams&&(this.push(this.objectLiteral(a.contexts)),this.push(this.objectLiteral(a.types))),this.push(this.objectLiteral(a.values))},pushString:function(a){this.pushStackLiteral(this.quotedString(a))},pushLiteral:function(a){this.pushStackLiteral(a)},pushProgram:function(a){null!=a?this.pushStackLiteral(this.programExpression(a)):this.pushStackLiteral(null)},registerDecorator:function(a,b){var c=this.nameLookup("decorators",b,"decorator"),d=this.setupHelperArgs(b,a);this.decorators.push(["fn = ",this.decorators.functionCall(c,"",["fn","props","container",d])," || fn;"])},invokeHelper:function(a,b,c){var d=this.popStack(),e=this.setupHelper(a,b),f=[];c&&f.push(e.name),f.push(d),this.options.strict||f.push(this.aliasable("container.hooks.helperMissing"));var g=["(",this.itemsSeparatedBy(f,"||"),")"],h=this.source.functionCall(g,"call",e.callParams);this.push(h)},itemsSeparatedBy:function(a,b){var c=[];c.push(a[0]);for(var d=1;d<a.length;d++)c.push(b,a[d]);return c},invokeKnownHelper:function(a,b){var c=this.setupHelper(a,b);this.push(this.source.functionCall(c.name,"call",c.callParams))},invokeAmbiguous:function(a,b){this.useRegister("helper");var c=this.popStack();this.emptyHash();var d=this.setupHelper(0,a,b),e=this.lastHelper=this.nameLookup("helpers",a,"helper"),f=["(","(helper = ",e," || ",c,")"];this.options.strict||(f[0]="(helper = ",f.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",f,d.paramsInit?["),(",d.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",d.callParams)," : helper))"])},invokePartial:function(a,b,c){var d=[],e=this.setupParams(b,1,d);a&&(b=this.popStack(),delete e.name),c&&(e.indent=JSON.stringify(c)),e.helpers="helpers",e.partials="partials",e.decorators="container.decorators",a?d.unshift(b):d.unshift(this.nameLookup("partials",b,"partial")),this.options.compat&&(e.depths="depths"),e=this.objectLiteral(e),d.push(e),this.push(this.source.functionCall("container.invokePartial","",d))},assignToHash:function(a){var b=this.popStack(),c=void 0,d=void 0,e=void 0;this.trackIds&&(e=this.popStack()),this.stringParams&&(d=this.popStack(),c=this.popStack());var f=this.hash;c&&(f.contexts[a]=c),d&&(f.types[a]=d),e&&(f.ids[a]=e),f.values[a]=b},pushId:function(a,b,c){"BlockParam"===a?this.pushStackLiteral("blockParams["+b[0]+"].path["+b[1]+"]"+(c?" + "+JSON.stringify("."+c):"")):"PathExpression"===a?this.pushString(b):"SubExpression"===a?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:e,compileChildren:function(a,b){for(var c=a.children,d=void 0,e=void 0,f=0,g=c.length;f<g;f++){d=c[f],e=new this.compiler;var h=this.matchExistingProgram(d);if(null==h){this.context.programs.push("");var i=this.context.programs.length;d.index=i,d.name="program"+i,this.context.programs[i]=e.compile(d,b,this.context,!this.precompile),this.context.decorators[i]=e.decorators,this.context.environments[i]=d,this.useDepths=this.useDepths||e.useDepths,this.useBlockParams=this.useBlockParams||e.useBlockParams,d.useDepths=this.useDepths,d.useBlockParams=this.useBlockParams}else d.index=h.index,d.name="program"+h.index,this.useDepths=this.useDepths||h.useDepths,this.useBlockParams=this.useBlockParams||h.useBlockParams}},matchExistingProgram:function(a){for(var b=0,c=this.context.environments.length;b<c;b++){var d=this.context.environments[b];if(d&&d.equals(a))return d}},programExpression:function(a){var b=this.environment.children[a],c=[b.index,"data",b.blockParams];return(this.useBlockParams||this.useDepths)&&c.push("blockParams"),this.useDepths&&c.push("depths"),"container.program("+c.join(", ")+")"},useRegister:function(a){this.registers[a]||(this.registers[a]=!0,this.registers.list.push(a))},push:function(a){return a instanceof d||(a=this.source.wrap(a)),this.inlineStack.push(a),a},pushStackLiteral:function(a){this.push(new d(a))},pushSource:function(a){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),a&&this.source.push(a)},replaceStack:function(a){var b=["("],c=void 0,e=void 0,f=void 0;if(!this.isInline())throw new k["default"]("replaceStack on non-inline");var g=this.popStack(!0);if(g instanceof d)c=[g.value],b=["(",c],f=!0;else{e=!0;var h=this.incrStack();b=["((",this.push(h)," = ",g,")"],c=this.topStack()}var i=a.call(this,c);f||this.popStack(),e&&this.stackSlot--,this.push(b.concat(i,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var a=this.inlineStack;this.inlineStack=[];for(var b=0,c=a.length;b<c;b++){var e=a[b];if(e instanceof d)this.compileStack.push(e);else{var f=this.incrStack();this.pushSource([f," = ",e,";"]),this.compileStack.push(f)}}},isInline:function(){return this.inlineStack.length},popStack:function(a){var b=this.isInline(),c=(b?this.inlineStack:this.compileStack).pop();if(!a&&c instanceof d)return c.value;if(!b){if(!this.stackSlot)throw new k["default"]("Invalid stack pop");this.stackSlot--}return c},topStack:function(){var a=this.isInline()?this.inlineStack:this.compileStack,b=a[a.length-1];return b instanceof d?b.value:b},contextName:function(a){return this.useDepths&&a?"depths["+a+"]":"depth"+a},quotedString:function(a){return this.source.quotedString(a)},objectLiteral:function(a){return this.source.objectLiteral(a)},aliasable:function(a){var b=this.aliases[a];return b?(b.referenceCount++,b):(b=this.aliases[a]=this.source.wrap(a),b.aliasable=!0,b.referenceCount=1,b)},setupHelper:function(a,b,c){var d=[],e=this.setupHelperArgs(b,a,d,c),f=this.nameLookup("helpers",b,"helper"),g=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:d,paramsInit:e,name:f,callParams:[g].concat(d)}},setupParams:function(a,b,c){var d={},e=[],f=[],g=[],h=!c,i=void 0;h&&(c=[]),d.name=this.quotedString(a),d.hash=this.popStack(),this.trackIds&&(d.hashIds=this.popStack()),this.stringParams&&(d.hashTypes=this.popStack(),d.hashContexts=this.popStack());var j=this.popStack(),k=this.popStack();(k||j)&&(d.fn=k||"container.noop",d.inverse=j||"container.noop");for(var l=b;l--;)i=this.popStack(),c[l]=i,this.trackIds&&(g[l]=this.popStack()),this.stringParams&&(f[l]=this.popStack(),e[l]=this.popStack());return h&&(d.args=this.source.generateArray(c)),this.trackIds&&(d.ids=this.source.generateArray(g)),this.stringParams&&(d.types=this.source.generateArray(f),d.contexts=this.source.generateArray(e)),this.options.data&&(d.data="data"),this.useBlockParams&&(d.blockParams="blockParams"),d},setupHelperArgs:function(a,b,c,d){var e=this.setupParams(a,b,c);return e.loc=JSON.stringify(this.source.currentLocation),e=this.objectLiteral(e),d?(this.useRegister("options"),c.push("options"),["options=",e]):c?(c.push(e),""):e}},function(){for(var a="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),b=e.RESERVED_WORDS={},c=0,d=a.length;c<d;c++)b[a[c]]=!0}(),e.isValidJavaScriptVariableName=function(a){return!e.RESERVED_WORDS[a]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a)},b["default"]=e,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b,c){if(g.isArray(a)){for(var d=[],e=0,f=a.length;e<f;e++)d.push(b.wrap(a[e],c));return d}return"boolean"==typeof a||"number"==typeof a?a+"":a}function e(a){this.srcFile=a,this.source=[]}var f=c(13)["default"];b.__esModule=!0;var g=c(5),h=void 0;try{}catch(i){}h||(h=function(a,b,c,d){this.src="",d&&this.add(d)},h.prototype={add:function(a){g.isArray(a)&&(a=a.join("")),this.src+=a},prepend:function(a){g.isArray(a)&&(a=a.join("")),this.src=a+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),e.prototype={isEmpty:function(){return!this.source.length},prepend:function(a,b){this.source.unshift(this.wrap(a,b))},push:function(a,b){this.source.push(this.wrap(a,b))},merge:function(){var a=this.empty();return this.each(function(b){a.add(["  ",b,"\n"])}),a},each:function(a){for(var b=0,c=this.source.length;b<c;b++)a(this.source[b])},empty:function(){var a=this.currentLocation||{start:{}};return new h(a.start.line,a.start.column,this.srcFile)},wrap:function(a){var b=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];return a instanceof h?a:(a=d(a,this,b),new h(b.start.line,b.start.column,this.srcFile,a))},functionCall:function(a,b,c){return c=this.generateList(c),this.wrap([a,b?"."+b+"(":"(",c,")"])},quotedString:function(a){return'"'+(a+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(a){var b=this,c=[];f(a).forEach(function(e){var f=d(a[e],b);"undefined"!==f&&c.push([b.quotedString(e),":",f])});var e=this.generateList(c);return e.prepend("{"),e.add("}"),e},generateList:function(a){for(var b=this.empty(),c=0,e=a.length;c<e;c++)c&&b.add(","),b.add(d(a[c],this));return b},generateArray:function(a){var b=this.generateList(a);return b.prepend("["),b.add("]"),b}},b["default"]=e,a.exports=b["default"]}])});