function o1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function a1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _v={exports:{}},wu={},wv={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qo=Symbol.for("react.element"),l1=Symbol.for("react.portal"),u1=Symbol.for("react.fragment"),c1=Symbol.for("react.strict_mode"),d1=Symbol.for("react.profiler"),h1=Symbol.for("react.provider"),f1=Symbol.for("react.context"),p1=Symbol.for("react.forward_ref"),m1=Symbol.for("react.suspense"),g1=Symbol.for("react.memo"),y1=Symbol.for("react.lazy"),Om=Symbol.iterator;function v1(t){return t===null||typeof t!="object"?null:(t=Om&&t[Om]||t["@@iterator"],typeof t=="function"?t:null)}var Ev={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xv=Object.assign,Tv={};function is(t,e,n){this.props=t,this.context=e,this.refs=Tv,this.updater=n||Ev}is.prototype.isReactComponent={};is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Iv(){}Iv.prototype=is.prototype;function Fh(t,e,n){this.props=t,this.context=e,this.refs=Tv,this.updater=n||Ev}var Uh=Fh.prototype=new Iv;Uh.constructor=Fh;xv(Uh,is.prototype);Uh.isPureReactComponent=!0;var Mm=Array.isArray,kv=Object.prototype.hasOwnProperty,zh={current:null},Sv={key:!0,ref:!0,__self:!0,__source:!0};function bv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)kv.call(e,r)&&!Sv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:qo,type:t,key:s,ref:o,props:i,_owner:zh.current}}function _1(t,e){return{$$typeof:qo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bh(t){return typeof t=="object"&&t!==null&&t.$$typeof===qo}function w1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vm=/\/+/g;function Cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?w1(""+t.key):e.toString(36)}function el(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case qo:case l1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Cc(o,0):r,Mm(i)?(n="",t!=null&&(n=t.replace(Vm,"$&/")+"/"),el(i,e,n,"",function(c){return c})):i!=null&&(Bh(i)&&(i=_1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Mm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Cc(s,l);o+=el(s,e,n,u,i)}else if(u=v1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Cc(s,l++),o+=el(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ra(t,e,n){if(t==null)return t;var r=[],i=0;return el(t,r,"","",function(s){return e.call(n,s,i++)}),r}function E1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},tl={transition:null},x1={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:tl,ReactCurrentOwner:zh};function Av(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Ra,forEach:function(t,e,n){Ra(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ra(t,function(){e++}),e},toArray:function(t){return Ra(t,function(e){return e})||[]},only:function(t){if(!Bh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=is;Z.Fragment=u1;Z.Profiler=d1;Z.PureComponent=Fh;Z.StrictMode=c1;Z.Suspense=m1;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x1;Z.act=Av;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=xv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)kv.call(e,u)&&!Sv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:qo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:f1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:h1,_context:t},t.Consumer=t};Z.createElement=bv;Z.createFactory=function(t){var e=bv.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:p1,render:t}};Z.isValidElement=Bh;Z.lazy=function(t){return{$$typeof:y1,_payload:{_status:-1,_result:t},_init:E1}};Z.memo=function(t,e){return{$$typeof:g1,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=tl.transition;tl.transition={};try{t()}finally{tl.transition=e}};Z.unstable_act=Av;Z.useCallback=function(t,e){return dt.current.useCallback(t,e)};Z.useContext=function(t){return dt.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};Z.useEffect=function(t,e){return dt.current.useEffect(t,e)};Z.useId=function(){return dt.current.useId()};Z.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return dt.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};Z.useRef=function(t){return dt.current.useRef(t)};Z.useState=function(t){return dt.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return dt.current.useTransition()};Z.version="18.3.1";wv.exports=Z;var O=wv.exports;const Pv=a1(O),T1=o1({__proto__:null,default:Pv},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I1=O,k1=Symbol.for("react.element"),S1=Symbol.for("react.fragment"),b1=Object.prototype.hasOwnProperty,A1=I1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P1={key:!0,ref:!0,__self:!0,__source:!0};function Cv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)b1.call(e,r)&&!P1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:k1,type:t,key:s,ref:o,props:i,_owner:A1.current}}wu.Fragment=S1;wu.jsx=Cv;wu.jsxs=Cv;_v.exports=wu;var f=_v.exports,md={},Rv={exports:{}},St={},Nv={exports:{}},Dv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,K){var J=B.length;B.push(K);e:for(;0<J;){var _e=J-1>>>1,de=B[_e];if(0<i(de,K))B[_e]=K,B[J]=de,J=_e;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],J=B.pop();if(J!==K){B[0]=J;e:for(var _e=0,de=B.length,be=de>>>1;_e<be;){var un=2*(_e+1)-1,cn=B[un],dn=un+1,hn=B[dn];if(0>i(cn,J))dn<de&&0>i(hn,cn)?(B[_e]=hn,B[dn]=J,_e=dn):(B[_e]=cn,B[un]=J,_e=un);else if(dn<de&&0>i(hn,J))B[_e]=hn,B[dn]=J,_e=dn;else break e}}return K}function i(B,K){var J=B.sortIndex-K.sortIndex;return J!==0?J:B.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],h=1,m=null,g=3,T=!1,I=!1,P=!1,C=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(B){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=B)r(c),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(c)}}function D(B){if(P=!1,b(B),!I)if(n(u)!==null)I=!0,br(F);else{var K=n(c);K!==null&&Lt(D,K.startTime-B)}}function F(B,K){I=!1,P&&(P=!1,x(y),y=-1),T=!0;var J=g;try{for(b(K),m=n(u);m!==null&&(!(m.expirationTime>K)||B&&!A());){var _e=m.callback;if(typeof _e=="function"){m.callback=null,g=m.priorityLevel;var de=_e(m.expirationTime<=K);K=t.unstable_now(),typeof de=="function"?m.callback=de:m===n(u)&&r(u),b(K)}else r(u);m=n(u)}if(m!==null)var be=!0;else{var un=n(c);un!==null&&Lt(D,un.startTime-K),be=!1}return be}finally{m=null,g=J,T=!1}}var V=!1,_=null,y=-1,E=5,k=-1;function A(){return!(t.unstable_now()-k<E)}function R(){if(_!==null){var B=t.unstable_now();k=B;var K=!0;try{K=_(!0,B)}finally{K?S():(V=!1,_=null)}}else V=!1}var S;if(typeof w=="function")S=function(){w(R)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,Vt=ce.port2;ce.port1.onmessage=R,S=function(){Vt.postMessage(null)}}else S=function(){C(R,0)};function br(B){_=B,V||(V=!0,S())}function Lt(B,K){y=C(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){I||T||(I=!0,br(F))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var J=g;g=K;try{return B()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=g;g=B;try{return K()}finally{g=J}},t.unstable_scheduleCallback=function(B,K,J){var _e=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?_e+J:_e):J=_e,B){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=J+de,B={id:h++,callback:K,priorityLevel:B,startTime:J,expirationTime:de,sortIndex:-1},J>_e?(B.sortIndex=J,e(c,B),n(u)===null&&B===n(c)&&(P?(x(y),y=-1):P=!0,Lt(D,J-_e))):(B.sortIndex=de,e(u,B),I||T||(I=!0,br(F))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var K=g;return function(){var J=g;g=K;try{return B.apply(this,arguments)}finally{g=J}}}})(Dv);Nv.exports=Dv;var C1=Nv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R1=O,It=C1;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ov=new Set,po={};function ti(t,e){zi(t,e),zi(t+"Capture",e)}function zi(t,e){for(po[t]=e,t=0;t<e.length;t++)Ov.add(e[t])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gd=Object.prototype.hasOwnProperty,N1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lm={},jm={};function D1(t){return gd.call(jm,t)?!0:gd.call(Lm,t)?!1:N1.test(t)?jm[t]=!0:(Lm[t]=!0,!1)}function O1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M1(t,e,n,r){if(e===null||typeof e>"u"||O1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var $h=/[\-:]([a-z])/g;function Wh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($h,Wh);Ke[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($h,Wh);Ke[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($h,Wh);Ke[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function qh(t,e,n,r){var i=Ke.hasOwnProperty(e)?Ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(M1(e,n,i,r)&&(n=null),r||i===null?D1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mn=R1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Na=Symbol.for("react.element"),gi=Symbol.for("react.portal"),yi=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),yd=Symbol.for("react.profiler"),Mv=Symbol.for("react.provider"),Vv=Symbol.for("react.context"),Kh=Symbol.for("react.forward_ref"),vd=Symbol.for("react.suspense"),_d=Symbol.for("react.suspense_list"),Gh=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),Lv=Symbol.for("react.offscreen"),Fm=Symbol.iterator;function Ps(t){return t===null||typeof t!="object"?null:(t=Fm&&t[Fm]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,Rc;function Bs(t){if(Rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rc=e&&e[1]||""}return`
`+Rc+t}var Nc=!1;function Dc(t,e){if(!t||Nc)return"";Nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bs(t):""}function V1(t){switch(t.tag){case 5:return Bs(t.type);case 16:return Bs("Lazy");case 13:return Bs("Suspense");case 19:return Bs("SuspenseList");case 0:case 2:case 15:return t=Dc(t.type,!1),t;case 11:return t=Dc(t.type.render,!1),t;case 1:return t=Dc(t.type,!0),t;default:return""}}function wd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yi:return"Fragment";case gi:return"Portal";case yd:return"Profiler";case Hh:return"StrictMode";case vd:return"Suspense";case _d:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vv:return(t.displayName||"Context")+".Consumer";case Mv:return(t._context.displayName||"Context")+".Provider";case Kh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gh:return e=t.displayName||null,e!==null?e:wd(t.type)||"Memo";case qn:e=t._payload,t=t._init;try{return wd(t(e))}catch{}}return null}function L1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wd(e);case 8:return e===Hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function j1(t){var e=jv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Da(t){t._valueTracker||(t._valueTracker=j1(t))}function Fv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=jv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ed(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Um(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Uv(t,e){e=e.checked,e!=null&&qh(t,"checked",e,!1)}function xd(t,e){Uv(t,e);var n=gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Td(t,e.type,n):e.hasOwnProperty("defaultValue")&&Td(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Td(t,e,n){(e!=="number"||xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $s=Array.isArray;function Pi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Id(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if($s(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function zv(t,e){var n=gr(e.value),r=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $m(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Bv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Bv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Oa,$v=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Oa=Oa||document.createElement("div"),Oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Oa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F1=["Webkit","ms","Moz","O"];Object.keys(Js).forEach(function(t){F1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Js[e]=Js[t]})});function Wv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Js.hasOwnProperty(t)&&Js[t]?(""+e).trim():e+"px"}function qv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var U1=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sd(t,e){if(e){if(U1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function bd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ad=null;function Qh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pd=null,Ci=null,Ri=null;function Wm(t){if(t=Go(t)){if(typeof Pd!="function")throw Error(U(280));var e=t.stateNode;e&&(e=ku(e),Pd(t.stateNode,t.type,e))}}function Hv(t){Ci?Ri?Ri.push(t):Ri=[t]:Ci=t}function Kv(){if(Ci){var t=Ci,e=Ri;if(Ri=Ci=null,Wm(t),e)for(t=0;t<e.length;t++)Wm(e[t])}}function Gv(t,e){return t(e)}function Qv(){}var Oc=!1;function Yv(t,e,n){if(Oc)return t(e,n);Oc=!0;try{return Gv(t,e,n)}finally{Oc=!1,(Ci!==null||Ri!==null)&&(Qv(),Kv())}}function go(t,e){var n=t.stateNode;if(n===null)return null;var r=ku(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Cd=!1;if(Sn)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){Cd=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{Cd=!1}function z1(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Zs=!1,Tl=null,Il=!1,Rd=null,B1={onError:function(t){Zs=!0,Tl=t}};function $1(t,e,n,r,i,s,o,l,u){Zs=!1,Tl=null,z1.apply(B1,arguments)}function W1(t,e,n,r,i,s,o,l,u){if($1.apply(this,arguments),Zs){if(Zs){var c=Tl;Zs=!1,Tl=null}else throw Error(U(198));Il||(Il=!0,Rd=c)}}function ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Xv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qm(t){if(ni(t)!==t)throw Error(U(188))}function q1(t){var e=t.alternate;if(!e){if(e=ni(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qm(i),t;if(s===r)return qm(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Jv(t){return t=q1(t),t!==null?Zv(t):null}function Zv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zv(t);if(e!==null)return e;t=t.sibling}return null}var e0=It.unstable_scheduleCallback,Hm=It.unstable_cancelCallback,H1=It.unstable_shouldYield,K1=It.unstable_requestPaint,Pe=It.unstable_now,G1=It.unstable_getCurrentPriorityLevel,Yh=It.unstable_ImmediatePriority,t0=It.unstable_UserBlockingPriority,kl=It.unstable_NormalPriority,Q1=It.unstable_LowPriority,n0=It.unstable_IdlePriority,Eu=null,Zt=null;function Y1(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Eu,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Z1,X1=Math.log,J1=Math.LN2;function Z1(t){return t>>>=0,t===0?32:31-(X1(t)/J1|0)|0}var Ma=64,Va=4194304;function Ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ws(l):(s&=o,s!==0&&(r=Ws(s)))}else o=n&~i,o!==0?r=Ws(o):s!==0&&(r=Ws(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$t(e),i=1<<n,r|=t[n],e&=~i;return r}function eT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$t(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=eT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Nd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function r0(){var t=Ma;return Ma<<=1,!(Ma&4194240)&&(Ma=64),t}function Mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ho(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$t(e),t[e]=n}function nT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function i0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var s0,Jh,o0,a0,l0,Dd=!1,La=[],rr=null,ir=null,sr=null,yo=new Map,vo=new Map,Kn=[],rT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Km(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(e.pointerId)}}function Rs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Go(e),e!==null&&Jh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function iT(t,e,n,r,i){switch(e){case"focusin":return rr=Rs(rr,t,e,n,r,i),!0;case"dragenter":return ir=Rs(ir,t,e,n,r,i),!0;case"mouseover":return sr=Rs(sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return yo.set(s,Rs(yo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,vo.set(s,Rs(vo.get(s)||null,t,e,n,r,i)),!0}return!1}function u0(t){var e=Vr(t.target);if(e!==null){var n=ni(e);if(n!==null){if(e=n.tag,e===13){if(e=Xv(n),e!==null){t.blockedOn=e,l0(t.priority,function(){o0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ad=r,n.target.dispatchEvent(r),Ad=null}else return e=Go(n),e!==null&&Jh(e),t.blockedOn=n,!1;e.shift()}return!0}function Gm(t,e,n){nl(t)&&n.delete(e)}function sT(){Dd=!1,rr!==null&&nl(rr)&&(rr=null),ir!==null&&nl(ir)&&(ir=null),sr!==null&&nl(sr)&&(sr=null),yo.forEach(Gm),vo.forEach(Gm)}function Ns(t,e){t.blockedOn===e&&(t.blockedOn=null,Dd||(Dd=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,sT)))}function _o(t){function e(i){return Ns(i,t)}if(0<La.length){Ns(La[0],t);for(var n=1;n<La.length;n++){var r=La[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rr!==null&&Ns(rr,t),ir!==null&&Ns(ir,t),sr!==null&&Ns(sr,t),yo.forEach(e),vo.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)u0(n),n.blockedOn===null&&Kn.shift()}var Ni=Mn.ReactCurrentBatchConfig,bl=!0;function oT(t,e,n,r){var i=le,s=Ni.transition;Ni.transition=null;try{le=1,Zh(t,e,n,r)}finally{le=i,Ni.transition=s}}function aT(t,e,n,r){var i=le,s=Ni.transition;Ni.transition=null;try{le=4,Zh(t,e,n,r)}finally{le=i,Ni.transition=s}}function Zh(t,e,n,r){if(bl){var i=Od(t,e,n,r);if(i===null)qc(t,e,r,Al,n),Km(t,r);else if(iT(i,t,e,n,r))r.stopPropagation();else if(Km(t,r),e&4&&-1<rT.indexOf(t)){for(;i!==null;){var s=Go(i);if(s!==null&&s0(s),s=Od(t,e,n,r),s===null&&qc(t,e,r,Al,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else qc(t,e,r,null,n)}}var Al=null;function Od(t,e,n,r){if(Al=null,t=Qh(r),t=Vr(t),t!==null)if(e=ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Xv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Al=t,null}function c0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G1()){case Yh:return 1;case t0:return 4;case kl:case Q1:return 16;case n0:return 536870912;default:return 16}default:return 16}}var Zn=null,ef=null,rl=null;function d0(){if(rl)return rl;var t,e=ef,n=e.length,r,i="value"in Zn?Zn.value:Zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return rl=i.slice(t,1<r?1-r:void 0)}function il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ja(){return!0}function Qm(){return!1}function bt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ja:Qm,this.isPropagationStopped=Qm,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),e}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=bt(ss),Ko=Te({},ss,{view:0,detail:0}),lT=bt(Ko),Vc,Lc,Ds,xu=Te({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ds&&(Ds&&t.type==="mousemove"?(Vc=t.screenX-Ds.screenX,Lc=t.screenY-Ds.screenY):Lc=Vc=0,Ds=t),Vc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),Ym=bt(xu),uT=Te({},xu,{dataTransfer:0}),cT=bt(uT),dT=Te({},Ko,{relatedTarget:0}),jc=bt(dT),hT=Te({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),fT=bt(hT),pT=Te({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mT=bt(pT),gT=Te({},ss,{data:0}),Xm=bt(gT),yT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_T={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_T[t])?!!e[t]:!1}function nf(){return wT}var ET=Te({},Ko,{key:function(t){if(t.key){var e=yT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xT=bt(ET),TT=Te({},xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=bt(TT),IT=Te({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),kT=bt(IT),ST=Te({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),bT=bt(ST),AT=Te({},xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),PT=bt(AT),CT=[9,13,27,32],rf=Sn&&"CompositionEvent"in window,eo=null;Sn&&"documentMode"in document&&(eo=document.documentMode);var RT=Sn&&"TextEvent"in window&&!eo,h0=Sn&&(!rf||eo&&8<eo&&11>=eo),Zm=" ",eg=!1;function f0(t,e){switch(t){case"keyup":return CT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vi=!1;function NT(t,e){switch(t){case"compositionend":return p0(e);case"keypress":return e.which!==32?null:(eg=!0,Zm);case"textInput":return t=e.data,t===Zm&&eg?null:t;default:return null}}function DT(t,e){if(vi)return t==="compositionend"||!rf&&f0(t,e)?(t=d0(),rl=ef=Zn=null,vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return h0&&e.locale!=="ko"?null:e.data;default:return null}}var OT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!OT[t.type]:e==="textarea"}function m0(t,e,n,r){Hv(r),e=Pl(e,"onChange"),0<e.length&&(n=new tf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var to=null,wo=null;function MT(t){S0(t,0)}function Tu(t){var e=Ei(t);if(Fv(e))return t}function VT(t,e){if(t==="change")return e}var g0=!1;if(Sn){var Fc;if(Sn){var Uc="oninput"in document;if(!Uc){var ng=document.createElement("div");ng.setAttribute("oninput","return;"),Uc=typeof ng.oninput=="function"}Fc=Uc}else Fc=!1;g0=Fc&&(!document.documentMode||9<document.documentMode)}function rg(){to&&(to.detachEvent("onpropertychange",y0),wo=to=null)}function y0(t){if(t.propertyName==="value"&&Tu(wo)){var e=[];m0(e,wo,t,Qh(t)),Yv(MT,e)}}function LT(t,e,n){t==="focusin"?(rg(),to=e,wo=n,to.attachEvent("onpropertychange",y0)):t==="focusout"&&rg()}function jT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tu(wo)}function FT(t,e){if(t==="click")return Tu(e)}function UT(t,e){if(t==="input"||t==="change")return Tu(e)}function zT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:zT;function Eo(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!gd.call(e,i)||!qt(t[i],e[i]))return!1}return!0}function ig(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sg(t,e){var n=ig(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ig(n)}}function v0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?v0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _0(){for(var t=window,e=xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xl(t.document)}return e}function sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function BT(t){var e=_0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&v0(n.ownerDocument.documentElement,n)){if(r!==null&&sf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=sg(n,s);var o=sg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $T=Sn&&"documentMode"in document&&11>=document.documentMode,_i=null,Md=null,no=null,Vd=!1;function og(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vd||_i==null||_i!==xl(r)||(r=_i,"selectionStart"in r&&sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),no&&Eo(no,r)||(no=r,r=Pl(Md,"onSelect"),0<r.length&&(e=new tf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_i)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wi={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},zc={},w0={};Sn&&(w0=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function Iu(t){if(zc[t])return zc[t];if(!wi[t])return t;var e=wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in w0)return zc[t]=e[n];return t}var E0=Iu("animationend"),x0=Iu("animationiteration"),T0=Iu("animationstart"),I0=Iu("transitionend"),k0=new Map,ag="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){k0.set(t,e),ti(e,[t])}for(var Bc=0;Bc<ag.length;Bc++){var $c=ag[Bc],WT=$c.toLowerCase(),qT=$c[0].toUpperCase()+$c.slice(1);Er(WT,"on"+qT)}Er(E0,"onAnimationEnd");Er(x0,"onAnimationIteration");Er(T0,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(I0,"onTransitionEnd");zi("onMouseEnter",["mouseout","mouseover"]);zi("onMouseLeave",["mouseout","mouseover"]);zi("onPointerEnter",["pointerout","pointerover"]);zi("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HT=new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));function lg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,W1(r,e,void 0,t),t.currentTarget=null}function S0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;lg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;lg(i,l,c),s=u}}}if(Il)throw t=Rd,Il=!1,Rd=null,t}function me(t,e){var n=e[zd];n===void 0&&(n=e[zd]=new Set);var r=t+"__bubble";n.has(r)||(b0(e,t,2,!1),n.add(r))}function Wc(t,e,n){var r=0;e&&(r|=4),b0(n,t,r,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function xo(t){if(!t[Ua]){t[Ua]=!0,Ov.forEach(function(n){n!=="selectionchange"&&(HT.has(n)||Wc(n,!1,t),Wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,Wc("selectionchange",!1,e))}}function b0(t,e,n,r){switch(c0(e)){case 1:var i=oT;break;case 4:i=aT;break;default:i=Zh}n=i.bind(null,e,n,t),i=void 0,!Cd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function qc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Vr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Yv(function(){var c=s,h=Qh(n),m=[];e:{var g=k0.get(t);if(g!==void 0){var T=tf,I=t;switch(t){case"keypress":if(il(n)===0)break e;case"keydown":case"keyup":T=xT;break;case"focusin":I="focus",T=jc;break;case"focusout":I="blur",T=jc;break;case"beforeblur":case"afterblur":T=jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=cT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=kT;break;case E0:case x0:case T0:T=fT;break;case I0:T=bT;break;case"scroll":T=lT;break;case"wheel":T=PT;break;case"copy":case"cut":case"paste":T=mT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Jm}var P=(e&4)!==0,C=!P&&t==="scroll",x=P?g!==null?g+"Capture":null:g;P=[];for(var w=c,b;w!==null;){b=w;var D=b.stateNode;if(b.tag===5&&D!==null&&(b=D,x!==null&&(D=go(w,x),D!=null&&P.push(To(w,D,b)))),C)break;w=w.return}0<P.length&&(g=new T(g,I,null,n,h),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",g&&n!==Ad&&(I=n.relatedTarget||n.fromElement)&&(Vr(I)||I[bn]))break e;if((T||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,T?(I=n.relatedTarget||n.toElement,T=c,I=I?Vr(I):null,I!==null&&(C=ni(I),I!==C||I.tag!==5&&I.tag!==6)&&(I=null)):(T=null,I=c),T!==I)){if(P=Ym,D="onMouseLeave",x="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(P=Jm,D="onPointerLeave",x="onPointerEnter",w="pointer"),C=T==null?g:Ei(T),b=I==null?g:Ei(I),g=new P(D,w+"leave",T,n,h),g.target=C,g.relatedTarget=b,D=null,Vr(h)===c&&(P=new P(x,w+"enter",I,n,h),P.target=b,P.relatedTarget=C,D=P),C=D,T&&I)t:{for(P=T,x=I,w=0,b=P;b;b=di(b))w++;for(b=0,D=x;D;D=di(D))b++;for(;0<w-b;)P=di(P),w--;for(;0<b-w;)x=di(x),b--;for(;w--;){if(P===x||x!==null&&P===x.alternate)break t;P=di(P),x=di(x)}P=null}else P=null;T!==null&&ug(m,g,T,P,!1),I!==null&&C!==null&&ug(m,C,I,P,!0)}}e:{if(g=c?Ei(c):window,T=g.nodeName&&g.nodeName.toLowerCase(),T==="select"||T==="input"&&g.type==="file")var F=VT;else if(tg(g))if(g0)F=UT;else{F=jT;var V=LT}else(T=g.nodeName)&&T.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=FT);if(F&&(F=F(t,c))){m0(m,F,n,h);break e}V&&V(t,g,c),t==="focusout"&&(V=g._wrapperState)&&V.controlled&&g.type==="number"&&Td(g,"number",g.value)}switch(V=c?Ei(c):window,t){case"focusin":(tg(V)||V.contentEditable==="true")&&(_i=V,Md=c,no=null);break;case"focusout":no=Md=_i=null;break;case"mousedown":Vd=!0;break;case"contextmenu":case"mouseup":case"dragend":Vd=!1,og(m,n,h);break;case"selectionchange":if($T)break;case"keydown":case"keyup":og(m,n,h)}var _;if(rf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else vi?f0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(h0&&n.locale!=="ko"&&(vi||y!=="onCompositionStart"?y==="onCompositionEnd"&&vi&&(_=d0()):(Zn=h,ef="value"in Zn?Zn.value:Zn.textContent,vi=!0)),V=Pl(c,y),0<V.length&&(y=new Xm(y,t,null,n,h),m.push({event:y,listeners:V}),_?y.data=_:(_=p0(n),_!==null&&(y.data=_)))),(_=RT?NT(t,n):DT(t,n))&&(c=Pl(c,"onBeforeInput"),0<c.length&&(h=new Xm("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=_))}S0(m,e)})}function To(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=go(t,n),s!=null&&r.unshift(To(t,s,i)),s=go(t,e),s!=null&&r.push(To(t,s,i))),t=t.return}return r}function di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ug(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=go(n,s),u!=null&&o.unshift(To(n,u,l))):i||(u=go(n,s),u!=null&&o.push(To(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var KT=/\r\n?/g,GT=/\u0000|\uFFFD/g;function cg(t){return(typeof t=="string"?t:""+t).replace(KT,`
`).replace(GT,"")}function za(t,e,n){if(e=cg(e),cg(t)!==e&&n)throw Error(U(425))}function Cl(){}var Ld=null,jd=null;function Fd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ud=typeof setTimeout=="function"?setTimeout:void 0,QT=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,YT=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(t){return dg.resolve(null).then(t).catch(XT)}:Ud;function XT(t){setTimeout(function(){throw t})}function Hc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_o(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_o(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),Xt="__reactFiber$"+os,Io="__reactProps$"+os,bn="__reactContainer$"+os,zd="__reactEvents$"+os,JT="__reactListeners$"+os,ZT="__reactHandles$"+os;function Vr(t){var e=t[Xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bn]||n[Xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hg(t);t!==null;){if(n=t[Xt])return n;t=hg(t)}return e}t=n,n=t.parentNode}return null}function Go(t){return t=t[Xt]||t[bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ei(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function ku(t){return t[Io]||null}var Bd=[],xi=-1;function xr(t){return{current:t}}function ye(t){0>xi||(t.current=Bd[xi],Bd[xi]=null,xi--)}function fe(t,e){xi++,Bd[xi]=t.current,t.current=e}var yr={},it=xr(yr),gt=xr(!1),Wr=yr;function Bi(t,e){var n=t.type.contextTypes;if(!n)return yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yt(t){return t=t.childContextTypes,t!=null}function Rl(){ye(gt),ye(it)}function fg(t,e,n){if(it.current!==yr)throw Error(U(168));fe(it,e),fe(gt,n)}function A0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,L1(t)||"Unknown",i));return Te({},n,r)}function Nl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Wr=it.current,fe(it,t),fe(gt,gt.current),!0}function pg(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=A0(t,e,Wr),r.__reactInternalMemoizedMergedChildContext=t,ye(gt),ye(it),fe(it,t)):ye(gt),fe(gt,n)}var yn=null,Su=!1,Kc=!1;function P0(t){yn===null?yn=[t]:yn.push(t)}function eI(t){Su=!0,P0(t)}function Tr(){if(!Kc&&yn!==null){Kc=!0;var t=0,e=le;try{var n=yn;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yn=null,Su=!1}catch(i){throw yn!==null&&(yn=yn.slice(t+1)),e0(Yh,Tr),i}finally{le=e,Kc=!1}}return null}var Ti=[],Ii=0,Dl=null,Ol=0,At=[],Pt=0,qr=null,vn=1,_n="";function Nr(t,e){Ti[Ii++]=Ol,Ti[Ii++]=Dl,Dl=t,Ol=e}function C0(t,e,n){At[Pt++]=vn,At[Pt++]=_n,At[Pt++]=qr,qr=t;var r=vn;t=_n;var i=32-$t(r)-1;r&=~(1<<i),n+=1;var s=32-$t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vn=1<<32-$t(e)+i|n<<i|r,_n=s+t}else vn=1<<s|n<<i|r,_n=t}function of(t){t.return!==null&&(Nr(t,1),C0(t,1,0))}function af(t){for(;t===Dl;)Dl=Ti[--Ii],Ti[Ii]=null,Ol=Ti[--Ii],Ti[Ii]=null;for(;t===qr;)qr=At[--Pt],At[Pt]=null,_n=At[--Pt],At[Pt]=null,vn=At[--Pt],At[Pt]=null}var Tt=null,Et=null,ve=!1,Bt=null;function R0(t,e){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,Et=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:vn,overflow:_n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,Et=null,!0):!1;default:return!1}}function $d(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wd(t){if(ve){var e=Et;if(e){var n=e;if(!mg(t,e)){if($d(t))throw Error(U(418));e=or(n.nextSibling);var r=Tt;e&&mg(t,e)?R0(r,n):(t.flags=t.flags&-4097|2,ve=!1,Tt=t)}}else{if($d(t))throw Error(U(418));t.flags=t.flags&-4097|2,ve=!1,Tt=t}}}function gg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function Ba(t){if(t!==Tt)return!1;if(!ve)return gg(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fd(t.type,t.memoizedProps)),e&&(e=Et)){if($d(t))throw N0(),Error(U(418));for(;e;)R0(t,e),e=or(e.nextSibling)}if(gg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=Tt?or(t.stateNode.nextSibling):null;return!0}function N0(){for(var t=Et;t;)t=or(t.nextSibling)}function $i(){Et=Tt=null,ve=!1}function lf(t){Bt===null?Bt=[t]:Bt.push(t)}var tI=Mn.ReactCurrentBatchConfig;function Os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function $a(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yg(t){var e=t._init;return e(t._payload)}function D0(t){function e(x,w){if(t){var b=x.deletions;b===null?(x.deletions=[w],x.flags|=16):b.push(w)}}function n(x,w){if(!t)return null;for(;w!==null;)e(x,w),w=w.sibling;return null}function r(x,w){for(x=new Map;w!==null;)w.key!==null?x.set(w.key,w):x.set(w.index,w),w=w.sibling;return x}function i(x,w){return x=cr(x,w),x.index=0,x.sibling=null,x}function s(x,w,b){return x.index=b,t?(b=x.alternate,b!==null?(b=b.index,b<w?(x.flags|=2,w):b):(x.flags|=2,w)):(x.flags|=1048576,w)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,w,b,D){return w===null||w.tag!==6?(w=ed(b,x.mode,D),w.return=x,w):(w=i(w,b),w.return=x,w)}function u(x,w,b,D){var F=b.type;return F===yi?h(x,w,b.props.children,D,b.key):w!==null&&(w.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===qn&&yg(F)===w.type)?(D=i(w,b.props),D.ref=Os(x,w,b),D.return=x,D):(D=dl(b.type,b.key,b.props,null,x.mode,D),D.ref=Os(x,w,b),D.return=x,D)}function c(x,w,b,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==b.containerInfo||w.stateNode.implementation!==b.implementation?(w=td(b,x.mode,D),w.return=x,w):(w=i(w,b.children||[]),w.return=x,w)}function h(x,w,b,D,F){return w===null||w.tag!==7?(w=zr(b,x.mode,D,F),w.return=x,w):(w=i(w,b),w.return=x,w)}function m(x,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return w=ed(""+w,x.mode,b),w.return=x,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Na:return b=dl(w.type,w.key,w.props,null,x.mode,b),b.ref=Os(x,null,w),b.return=x,b;case gi:return w=td(w,x.mode,b),w.return=x,w;case qn:var D=w._init;return m(x,D(w._payload),b)}if($s(w)||Ps(w))return w=zr(w,x.mode,b,null),w.return=x,w;$a(x,w)}return null}function g(x,w,b,D){var F=w!==null?w.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return F!==null?null:l(x,w,""+b,D);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Na:return b.key===F?u(x,w,b,D):null;case gi:return b.key===F?c(x,w,b,D):null;case qn:return F=b._init,g(x,w,F(b._payload),D)}if($s(b)||Ps(b))return F!==null?null:h(x,w,b,D,null);$a(x,b)}return null}function T(x,w,b,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return x=x.get(b)||null,l(w,x,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Na:return x=x.get(D.key===null?b:D.key)||null,u(w,x,D,F);case gi:return x=x.get(D.key===null?b:D.key)||null,c(w,x,D,F);case qn:var V=D._init;return T(x,w,b,V(D._payload),F)}if($s(D)||Ps(D))return x=x.get(b)||null,h(w,x,D,F,null);$a(w,D)}return null}function I(x,w,b,D){for(var F=null,V=null,_=w,y=w=0,E=null;_!==null&&y<b.length;y++){_.index>y?(E=_,_=null):E=_.sibling;var k=g(x,_,b[y],D);if(k===null){_===null&&(_=E);break}t&&_&&k.alternate===null&&e(x,_),w=s(k,w,y),V===null?F=k:V.sibling=k,V=k,_=E}if(y===b.length)return n(x,_),ve&&Nr(x,y),F;if(_===null){for(;y<b.length;y++)_=m(x,b[y],D),_!==null&&(w=s(_,w,y),V===null?F=_:V.sibling=_,V=_);return ve&&Nr(x,y),F}for(_=r(x,_);y<b.length;y++)E=T(_,x,y,b[y],D),E!==null&&(t&&E.alternate!==null&&_.delete(E.key===null?y:E.key),w=s(E,w,y),V===null?F=E:V.sibling=E,V=E);return t&&_.forEach(function(A){return e(x,A)}),ve&&Nr(x,y),F}function P(x,w,b,D){var F=Ps(b);if(typeof F!="function")throw Error(U(150));if(b=F.call(b),b==null)throw Error(U(151));for(var V=F=null,_=w,y=w=0,E=null,k=b.next();_!==null&&!k.done;y++,k=b.next()){_.index>y?(E=_,_=null):E=_.sibling;var A=g(x,_,k.value,D);if(A===null){_===null&&(_=E);break}t&&_&&A.alternate===null&&e(x,_),w=s(A,w,y),V===null?F=A:V.sibling=A,V=A,_=E}if(k.done)return n(x,_),ve&&Nr(x,y),F;if(_===null){for(;!k.done;y++,k=b.next())k=m(x,k.value,D),k!==null&&(w=s(k,w,y),V===null?F=k:V.sibling=k,V=k);return ve&&Nr(x,y),F}for(_=r(x,_);!k.done;y++,k=b.next())k=T(_,x,y,k.value,D),k!==null&&(t&&k.alternate!==null&&_.delete(k.key===null?y:k.key),w=s(k,w,y),V===null?F=k:V.sibling=k,V=k);return t&&_.forEach(function(R){return e(x,R)}),ve&&Nr(x,y),F}function C(x,w,b,D){if(typeof b=="object"&&b!==null&&b.type===yi&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Na:e:{for(var F=b.key,V=w;V!==null;){if(V.key===F){if(F=b.type,F===yi){if(V.tag===7){n(x,V.sibling),w=i(V,b.props.children),w.return=x,x=w;break e}}else if(V.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===qn&&yg(F)===V.type){n(x,V.sibling),w=i(V,b.props),w.ref=Os(x,V,b),w.return=x,x=w;break e}n(x,V);break}else e(x,V);V=V.sibling}b.type===yi?(w=zr(b.props.children,x.mode,D,b.key),w.return=x,x=w):(D=dl(b.type,b.key,b.props,null,x.mode,D),D.ref=Os(x,w,b),D.return=x,x=D)}return o(x);case gi:e:{for(V=b.key;w!==null;){if(w.key===V)if(w.tag===4&&w.stateNode.containerInfo===b.containerInfo&&w.stateNode.implementation===b.implementation){n(x,w.sibling),w=i(w,b.children||[]),w.return=x,x=w;break e}else{n(x,w);break}else e(x,w);w=w.sibling}w=td(b,x.mode,D),w.return=x,x=w}return o(x);case qn:return V=b._init,C(x,w,V(b._payload),D)}if($s(b))return I(x,w,b,D);if(Ps(b))return P(x,w,b,D);$a(x,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,w!==null&&w.tag===6?(n(x,w.sibling),w=i(w,b),w.return=x,x=w):(n(x,w),w=ed(b,x.mode,D),w.return=x,x=w),o(x)):n(x,w)}return C}var Wi=D0(!0),O0=D0(!1),Ml=xr(null),Vl=null,ki=null,uf=null;function cf(){uf=ki=Vl=null}function df(t){var e=Ml.current;ye(Ml),t._currentValue=e}function qd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Di(t,e){Vl=t,uf=ki=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function Ot(t){var e=t._currentValue;if(uf!==t)if(t={context:t,memoizedValue:e,next:null},ki===null){if(Vl===null)throw Error(U(308));ki=t,Vl.dependencies={lanes:0,firstContext:t}}else ki=ki.next=t;return e}var Lr=null;function hf(t){Lr===null?Lr=[t]:Lr.push(t)}function M0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,hf(e)):(n.next=i.next,i.next=n),e.interleaved=n,An(t,r)}function An(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hn=!1;function ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function V0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,An(t,n)}return i=r.interleaved,i===null?(e.next=e,hf(r)):(e.next=i.next,i.next=e),r.interleaved=e,An(t,n)}function sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xh(t,n)}}function vg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ll(t,e,n,r){var i=t.updateQueue;Hn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,h=c=u=null,l=s;do{var g=l.lane,T=l.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var I=t,P=l;switch(g=e,T=n,P.tag){case 1:if(I=P.payload,typeof I=="function"){m=I.call(T,m,g);break e}m=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=P.payload,g=typeof I=="function"?I.call(T,m,g):I,g==null)break e;m=Te({},m,g);break e;case 2:Hn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else T={eventTime:T,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=T,u=m):h=h.next=T,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Kr|=o,t.lanes=o,t.memoizedState=m}}function _g(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Qo={},en=xr(Qo),ko=xr(Qo),So=xr(Qo);function jr(t){if(t===Qo)throw Error(U(174));return t}function pf(t,e){switch(fe(So,e),fe(ko,t),fe(en,Qo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kd(e,t)}ye(en),fe(en,e)}function qi(){ye(en),ye(ko),ye(So)}function L0(t){jr(So.current);var e=jr(en.current),n=kd(e,t.type);e!==n&&(fe(ko,t),fe(en,n))}function mf(t){ko.current===t&&(ye(en),ye(ko))}var we=xr(0);function jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gc=[];function gf(){for(var t=0;t<Gc.length;t++)Gc[t]._workInProgressVersionPrimary=null;Gc.length=0}var ol=Mn.ReactCurrentDispatcher,Qc=Mn.ReactCurrentBatchConfig,Hr=0,Ee=null,De=null,Fe=null,Fl=!1,ro=!1,bo=0,nI=0;function Je(){throw Error(U(321))}function yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qt(t[n],e[n]))return!1;return!0}function vf(t,e,n,r,i,s){if(Hr=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ol.current=t===null||t.memoizedState===null?oI:aI,t=n(r,i),ro){s=0;do{if(ro=!1,bo=0,25<=s)throw Error(U(301));s+=1,Fe=De=null,e.updateQueue=null,ol.current=lI,t=n(r,i)}while(ro)}if(ol.current=Ul,e=De!==null&&De.next!==null,Hr=0,Fe=De=Ee=null,Fl=!1,e)throw Error(U(300));return t}function _f(){var t=bo!==0;return bo=0,t}function Yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Mt(){if(De===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Fe===null?Ee.memoizedState:Fe.next;if(e!==null)Fe=e,De=t;else{if(t===null)throw Error(U(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function Ao(t,e){return typeof e=="function"?e(t):e}function Yc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var h=c.lane;if((Hr&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ee.lanes|=h,Kr|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,qt(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,Kr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);qt(s,e.memoizedState)||(mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function j0(){}function F0(t,e){var n=Ee,r=Mt(),i=e(),s=!qt(r.memoizedState,i);if(s&&(r.memoizedState=i,mt=!0),r=r.queue,wf(B0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Po(9,z0.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(U(349));Hr&30||U0(n,e,i)}return i}function U0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function z0(t,e,n,r){e.value=n,e.getSnapshot=r,$0(e)&&W0(t)}function B0(t,e,n){return n(function(){$0(e)&&W0(t)})}function $0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qt(t,n)}catch{return!0}}function W0(t){var e=An(t,1);e!==null&&Wt(e,t,1,-1)}function wg(t){var e=Yt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},e.queue=t,t=t.dispatch=sI.bind(null,Ee,t),[e.memoizedState,t]}function Po(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function q0(){return Mt().memoizedState}function al(t,e,n,r){var i=Yt();Ee.flags|=t,i.memoizedState=Po(1|e,n,void 0,r===void 0?null:r)}function bu(t,e,n,r){var i=Mt();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&yf(r,o.deps)){i.memoizedState=Po(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=Po(1|e,n,s,r)}function Eg(t,e){return al(8390656,8,t,e)}function wf(t,e){return bu(2048,8,t,e)}function H0(t,e){return bu(4,2,t,e)}function K0(t,e){return bu(4,4,t,e)}function G0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Q0(t,e,n){return n=n!=null?n.concat([t]):null,bu(4,4,G0.bind(null,e,t),n)}function Ef(){}function Y0(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function X0(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function J0(t,e,n){return Hr&21?(qt(n,e)||(n=r0(),Ee.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function rI(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=Qc.transition;Qc.transition={};try{t(!1),e()}finally{le=n,Qc.transition=r}}function Z0(){return Mt().memoizedState}function iI(t,e,n){var r=ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},e_(t))t_(e,n);else if(n=M0(t,e,n,r),n!==null){var i=ut();Wt(n,t,r,i),n_(n,e,r)}}function sI(t,e,n){var r=ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(e_(t))t_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,qt(l,o)){var u=e.interleaved;u===null?(i.next=i,hf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=M0(t,e,i,r),n!==null&&(i=ut(),Wt(n,t,r,i),n_(n,e,r))}}function e_(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function t_(t,e){ro=Fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function n_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xh(t,n)}}var Ul={readContext:Ot,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},oI={readContext:Ot,useCallback:function(t,e){return Yt().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:Eg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,al(4194308,4,G0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return al(4194308,4,t,e)},useInsertionEffect:function(t,e){return al(4,2,t,e)},useMemo:function(t,e){var n=Yt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Yt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=iI.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=Yt();return t={current:t},e.memoizedState=t},useState:wg,useDebugValue:Ef,useDeferredValue:function(t){return Yt().memoizedState=t},useTransition:function(){var t=wg(!1),e=t[0];return t=rI.bind(null,t[1]),Yt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=Yt();if(ve){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Ue===null)throw Error(U(349));Hr&30||U0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Eg(B0.bind(null,r,s,t),[t]),r.flags|=2048,Po(9,z0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Yt(),e=Ue.identifierPrefix;if(ve){var n=_n,r=vn;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aI={readContext:Ot,useCallback:Y0,useContext:Ot,useEffect:wf,useImperativeHandle:Q0,useInsertionEffect:H0,useLayoutEffect:K0,useMemo:X0,useReducer:Yc,useRef:q0,useState:function(){return Yc(Ao)},useDebugValue:Ef,useDeferredValue:function(t){var e=Mt();return J0(e,De.memoizedState,t)},useTransition:function(){var t=Yc(Ao)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:j0,useSyncExternalStore:F0,useId:Z0,unstable_isNewReconciler:!1},lI={readContext:Ot,useCallback:Y0,useContext:Ot,useEffect:wf,useImperativeHandle:Q0,useInsertionEffect:H0,useLayoutEffect:K0,useMemo:X0,useReducer:Xc,useRef:q0,useState:function(){return Xc(Ao)},useDebugValue:Ef,useDeferredValue:function(t){var e=Mt();return De===null?e.memoizedState=t:J0(e,De.memoizedState,t)},useTransition:function(){var t=Xc(Ao)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:j0,useSyncExternalStore:F0,useId:Z0,unstable_isNewReconciler:!1};function Ut(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Au={isMounted:function(t){return(t=t._reactInternals)?ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=ur(t),s=Tn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Wt(e,t,i,r),sl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=ur(t),s=Tn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Wt(e,t,i,r),sl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=ur(t),i=Tn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&(Wt(e,t,r,n),sl(e,t,r))}};function xg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Eo(n,r)||!Eo(i,s):!0}function r_(t,e,n){var r=!1,i=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ot(s):(i=yt(e)?Wr:it.current,r=e.contextTypes,s=(r=r!=null)?Bi(t,i):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Au,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Au.enqueueReplaceState(e,e.state,null)}function Kd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ff(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ot(s):(s=yt(e)?Wr:it.current,i.context=Bi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Au.enqueueReplaceState(i,i.state,null),Ll(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Hi(t,e){try{var n="",r=e;do n+=V1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Jc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uI=typeof WeakMap=="function"?WeakMap:Map;function i_(t,e,n){n=Tn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bl||(Bl=!0,ih=r),Gd(t,e)},n}function s_(t,e,n){n=Tn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gd(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ig(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new uI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=TI.bind(null,t,e,n),e.then(t,t))}function kg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tn(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var cI=Mn.ReactCurrentOwner,mt=!1;function lt(t,e,n,r){e.child=t===null?O0(e,null,n,r):Wi(e,t.child,n,r)}function bg(t,e,n,r,i){n=n.render;var s=e.ref;return Di(e,i),r=vf(t,e,n,r,s,i),n=_f(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(ve&&n&&of(e),e.flags|=1,lt(t,e,r,i),e.child)}function Ag(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,o_(t,e,s,r,i)):(t=dl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Eo,n(o,r)&&t.ref===e.ref)return Pn(t,e,i)}return e.flags|=1,t=cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function o_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Eo(s,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,Pn(t,e,i)}return Qd(t,e,n,r,i)}function a_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(bi,wt),wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(bi,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(bi,wt),wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(bi,wt),wt|=r;return lt(t,e,i,n),e.child}function l_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qd(t,e,n,r,i){var s=yt(n)?Wr:it.current;return s=Bi(e,s),Di(e,i),n=vf(t,e,n,r,s,i),r=_f(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(ve&&r&&of(e),e.flags|=1,lt(t,e,n,i),e.child)}function Pg(t,e,n,r,i){if(yt(n)){var s=!0;Nl(e)}else s=!1;if(Di(e,i),e.stateNode===null)ll(t,e),r_(e,n,r),Kd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ot(c):(c=yt(n)?Wr:it.current,c=Bi(e,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Tg(e,o,r,c),Hn=!1;var g=e.memoizedState;o.state=g,Ll(e,r,o,i),u=e.memoizedState,l!==r||g!==u||gt.current||Hn?(typeof h=="function"&&(Hd(e,n,h,r),u=e.memoizedState),(l=Hn||xg(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,V0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Ut(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ot(u):(u=yt(n)?Wr:it.current,u=Bi(e,u));var T=n.getDerivedStateFromProps;(h=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Tg(e,o,r,u),Hn=!1,g=e.memoizedState,o.state=g,Ll(e,r,o,i);var I=e.memoizedState;l!==m||g!==I||gt.current||Hn?(typeof T=="function"&&(Hd(e,n,T,r),I=e.memoizedState),(c=Hn||xg(e,n,c,r,g,I,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Yd(t,e,n,r,s,i)}function Yd(t,e,n,r,i,s){l_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&pg(e,n,!1),Pn(t,e,s);r=e.stateNode,cI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Wi(e,t.child,null,s),e.child=Wi(e,null,l,s)):lt(t,e,l,s),e.memoizedState=r.state,i&&pg(e,n,!0),e.child}function u_(t){var e=t.stateNode;e.pendingContext?fg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fg(t,e.context,!1),pf(t,e.containerInfo)}function Cg(t,e,n,r,i){return $i(),lf(i),e.flags|=256,lt(t,e,n,r),e.child}var Xd={dehydrated:null,treeContext:null,retryLane:0};function Jd(t){return{baseLanes:t,cachePool:null,transitions:null}}function c_(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(we,i&1),t===null)return Wd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ru(o,r,0,null),t=zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jd(n),e.memoizedState=Xd,t):xf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return dI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=cr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=cr(l,s):(s=zr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Jd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xd,r}return s=t.child,t=s.sibling,r=cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xf(t,e){return e=Ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wa(t,e,n,r){return r!==null&&lf(r),Wi(e,t.child,null,n),t=xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Jc(Error(U(422))),Wa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ru({mode:"visible",children:r.children},i,0,null),s=zr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Wi(e,t.child,null,o),e.child.memoizedState=Jd(o),e.memoizedState=Xd,s);if(!(e.mode&1))return Wa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Jc(s,r,void 0),Wa(t,e,o,r)}if(l=(o&t.childLanes)!==0,mt||l){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,An(t,i),Wt(r,t,i,-1))}return Af(),r=Jc(Error(U(421))),Wa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=II.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=or(i.nextSibling),Tt=e,ve=!0,Bt=null,t!==null&&(At[Pt++]=vn,At[Pt++]=_n,At[Pt++]=qr,vn=t.id,_n=t.overflow,qr=e),e=xf(e,r.children),e.flags|=4096,e)}function Rg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qd(t.return,e,n)}function Zc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function d_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(lt(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rg(t,n,e);else if(t.tag===19)Rg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&jl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Zc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&jl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Zc(e,!0,n,null,s);break;case"together":Zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function hI(t,e,n){switch(e.tag){case 3:u_(e),$i();break;case 5:L0(e);break;case 1:yt(e.type)&&Nl(e);break;case 4:pf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(Ml,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?c_(t,e,n):(fe(we,we.current&1),t=Pn(t,e,n),t!==null?t.sibling:null);fe(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return d_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,a_(t,e,n)}return Pn(t,e,n)}var h_,Zd,f_,p_;h_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zd=function(){};f_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,jr(en.current);var s=null;switch(n){case"input":i=Ed(t,i),r=Ed(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=Id(t,i),r=Id(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cl)}Sd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(po.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(po.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};p_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ms(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fI(t,e,n){var r=e.pendingProps;switch(af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(e),null;case 1:return yt(e.type)&&Rl(),Ze(e),null;case 3:return r=e.stateNode,qi(),ye(gt),ye(it),gf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bt!==null&&(ah(Bt),Bt=null))),Zd(t,e),Ze(e),null;case 5:mf(e);var i=jr(So.current);if(n=e.type,t!==null&&e.stateNode!=null)f_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Ze(e),null}if(t=jr(en.current),Ba(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Xt]=e,r[Io]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<qs.length;i++)me(qs[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Um(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":Bm(r,s),me("invalid",r)}Sd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&za(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&za(r.textContent,l,t),i=["children",""+l]):po.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":Da(r),zm(r,s,!0);break;case"textarea":Da(r),$m(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xt]=e,t[Io]=r,h_(t,e,!1,!1),e.stateNode=t;e:{switch(o=bd(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<qs.length;i++)me(qs[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":Um(t,r),i=Ed(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),me("invalid",t);break;case"textarea":Bm(t,r),i=Id(t,r),me("invalid",t);break;default:i=r}Sd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?qv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&$v(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&mo(t,u):typeof u=="number"&&mo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(po.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&qh(t,s,u,o))}switch(n){case"input":Da(t),zm(t,r,!1);break;case"textarea":Da(t),$m(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Pi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Pi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ze(e),null;case 6:if(t&&e.stateNode!=null)p_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=jr(So.current),jr(en.current),Ba(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xt]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:za(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=e,e.stateNode=r}return Ze(e),null;case 13:if(ye(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&Et!==null&&e.mode&1&&!(e.flags&128))N0(),$i(),e.flags|=98560,s=!1;else if(s=Ba(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Xt]=e}else $i(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ze(e),s=!1}else Bt!==null&&(ah(Bt),Bt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Oe===0&&(Oe=3):Af())),e.updateQueue!==null&&(e.flags|=4),Ze(e),null);case 4:return qi(),Zd(t,e),t===null&&xo(e.stateNode.containerInfo),Ze(e),null;case 10:return df(e.type._context),Ze(e),null;case 17:return yt(e.type)&&Rl(),Ze(e),null;case 19:if(ye(we),s=e.memoizedState,s===null)return Ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ms(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=jl(t),o!==null){for(e.flags|=128,Ms(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>Ki&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304)}else{if(!r)if(t=jl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ms(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return Ze(e),null}else 2*Pe()-s.renderingStartTime>Ki&&n!==1073741824&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=we.current,fe(we,r?n&1|2:n&1),e):(Ze(e),null);case 22:case 23:return bf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wt&1073741824&&(Ze(e),e.subtreeFlags&6&&(e.flags|=8192)):Ze(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function pI(t,e){switch(af(e),e.tag){case 1:return yt(e.type)&&Rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qi(),ye(gt),ye(it),gf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mf(e),null;case 13:if(ye(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));$i()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(we),null;case 4:return qi(),null;case 10:return df(e.type._context),null;case 22:case 23:return bf(),null;case 24:return null;default:return null}}var qa=!1,nt=!1,mI=typeof WeakSet=="function"?WeakSet:Set,$=null;function Si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function eh(t,e,n){try{n()}catch(r){Se(t,e,r)}}var Ng=!1;function gI(t,e){if(Ld=bl,t=_0(),sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,h=0,m=t,g=null;t:for(;;){for(var T;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(T=m.firstChild)!==null;)g=m,m=T;for(;;){if(m===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++h===r&&(u=o),(T=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(jd={focusedElem:t,selectionRange:n},bl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var P=I.memoizedProps,C=I.memoizedState,x=e.stateNode,w=x.getSnapshotBeforeUpdate(e.elementType===e.type?P:Ut(e.type,P),C);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(D){Se(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return I=Ng,Ng=!1,I}function io(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&eh(e,n,s)}i=i.next}while(i!==r)}}function Pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function th(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function m_(t){var e=t.alternate;e!==null&&(t.alternate=null,m_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xt],delete e[Io],delete e[zd],delete e[JT],delete e[ZT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function g_(t){return t.tag===5||t.tag===3||t.tag===4}function Dg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||g_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cl));else if(r!==4&&(t=t.child,t!==null))for(nh(t,e,n),t=t.sibling;t!==null;)nh(t,e,n),t=t.sibling}function rh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rh(t,e,n),t=t.sibling;t!==null;)rh(t,e,n),t=t.sibling}var Be=null,zt=!1;function Bn(t,e,n){for(n=n.child;n!==null;)y_(t,e,n),n=n.sibling}function y_(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Eu,n)}catch{}switch(n.tag){case 5:nt||Si(n,e);case 6:var r=Be,i=zt;Be=null,Bn(t,e,n),Be=r,zt=i,Be!==null&&(zt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(zt?(t=Be,n=n.stateNode,t.nodeType===8?Hc(t.parentNode,n):t.nodeType===1&&Hc(t,n),_o(t)):Hc(Be,n.stateNode));break;case 4:r=Be,i=zt,Be=n.stateNode.containerInfo,zt=!0,Bn(t,e,n),Be=r,zt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&eh(n,e,o),i=i.next}while(i!==r)}Bn(t,e,n);break;case 1:if(!nt&&(Si(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}Bn(t,e,n);break;case 21:Bn(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,Bn(t,e,n),nt=r):Bn(t,e,n);break;default:Bn(t,e,n)}}function Og(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mI),e.forEach(function(r){var i=kI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,zt=!1;break e;case 3:Be=l.stateNode.containerInfo,zt=!0;break e;case 4:Be=l.stateNode.containerInfo,zt=!0;break e}l=l.return}if(Be===null)throw Error(U(160));y_(s,o,i),Be=null,zt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Se(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)v_(e,t),e=e.sibling}function v_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(e,t),Qt(t),r&4){try{io(3,t,t.return),Pu(3,t)}catch(P){Se(t,t.return,P)}try{io(5,t,t.return)}catch(P){Se(t,t.return,P)}}break;case 1:Ft(e,t),Qt(t),r&512&&n!==null&&Si(n,n.return);break;case 5:if(Ft(e,t),Qt(t),r&512&&n!==null&&Si(n,n.return),t.flags&32){var i=t.stateNode;try{mo(i,"")}catch(P){Se(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Uv(i,s),bd(l,o);var c=bd(l,s);for(o=0;o<u.length;o+=2){var h=u[o],m=u[o+1];h==="style"?qv(i,m):h==="dangerouslySetInnerHTML"?$v(i,m):h==="children"?mo(i,m):qh(i,h,m,c)}switch(l){case"input":xd(i,s);break;case"textarea":zv(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?Pi(i,!!s.multiple,T,!1):g!==!!s.multiple&&(s.defaultValue!=null?Pi(i,!!s.multiple,s.defaultValue,!0):Pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Io]=s}catch(P){Se(t,t.return,P)}}break;case 6:if(Ft(e,t),Qt(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Se(t,t.return,P)}}break;case 3:if(Ft(e,t),Qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_o(e.containerInfo)}catch(P){Se(t,t.return,P)}break;case 4:Ft(e,t),Qt(t);break;case 13:Ft(e,t),Qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(kf=Pe())),r&4&&Og(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(c=nt)||h,Ft(e,t),nt=c):Ft(e,t),Qt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for($=t,h=t.child;h!==null;){for(m=$=h;$!==null;){switch(g=$,T=g.child,g.tag){case 0:case 11:case 14:case 15:io(4,g,g.return);break;case 1:Si(g,g.return);var I=g.stateNode;if(typeof I.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(P){Se(r,n,P)}}break;case 5:Si(g,g.return);break;case 22:if(g.memoizedState!==null){Vg(m);continue}}T!==null?(T.return=g,$=T):Vg(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Wv("display",o))}catch(P){Se(t,t.return,P)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){Se(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ft(e,t),Qt(t),r&4&&Og(t);break;case 21:break;default:Ft(e,t),Qt(t)}}function Qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(g_(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mo(i,""),r.flags&=-33);var s=Dg(t);rh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Dg(t);nh(t,l,o);break;default:throw Error(U(161))}}catch(u){Se(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yI(t,e,n){$=t,__(t)}function __(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||qa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||nt;l=qa;var c=nt;if(qa=o,(nt=u)&&!c)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Lg(i):u!==null?(u.return=o,$=u):Lg(i);for(;s!==null;)$=s,__(s),s=s.sibling;$=i,qa=l,nt=c}Mg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Mg(t)}}function Mg(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||Pu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_g(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_g(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&_o(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}nt||e.flags&512&&th(e)}catch(g){Se(e,e.return,g)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Vg(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Lg(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pu(4,e)}catch(u){Se(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Se(e,i,u)}}var s=e.return;try{th(e)}catch(u){Se(e,s,u)}break;case 5:var o=e.return;try{th(e)}catch(u){Se(e,o,u)}}}catch(u){Se(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var vI=Math.ceil,zl=Mn.ReactCurrentDispatcher,Tf=Mn.ReactCurrentOwner,Nt=Mn.ReactCurrentBatchConfig,re=0,Ue=null,Re=null,qe=0,wt=0,bi=xr(0),Oe=0,Co=null,Kr=0,Cu=0,If=0,so=null,ft=null,kf=0,Ki=1/0,gn=null,Bl=!1,ih=null,lr=null,Ha=!1,er=null,$l=0,oo=0,sh=null,ul=-1,cl=0;function ut(){return re&6?Pe():ul!==-1?ul:ul=Pe()}function ur(t){return t.mode&1?re&2&&qe!==0?qe&-qe:tI.transition!==null?(cl===0&&(cl=r0()),cl):(t=le,t!==0||(t=window.event,t=t===void 0?16:c0(t.type)),t):1}function Wt(t,e,n,r){if(50<oo)throw oo=0,sh=null,Error(U(185));Ho(t,n,r),(!(re&2)||t!==Ue)&&(t===Ue&&(!(re&2)&&(Cu|=n),Oe===4&&Gn(t,qe)),vt(t,r),n===1&&re===0&&!(e.mode&1)&&(Ki=Pe()+500,Su&&Tr()))}function vt(t,e){var n=t.callbackNode;tT(t,e);var r=Sl(t,t===Ue?qe:0);if(r===0)n!==null&&Hm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hm(n),e===1)t.tag===0?eI(jg.bind(null,t)):P0(jg.bind(null,t)),YT(function(){!(re&6)&&Tr()}),n=null;else{switch(i0(r)){case 1:n=Yh;break;case 4:n=t0;break;case 16:n=kl;break;case 536870912:n=n0;break;default:n=kl}n=b_(n,w_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function w_(t,e){if(ul=-1,cl=0,re&6)throw Error(U(327));var n=t.callbackNode;if(Oi()&&t.callbackNode!==n)return null;var r=Sl(t,t===Ue?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wl(t,r);else{e=r;var i=re;re|=2;var s=x_();(Ue!==t||qe!==e)&&(gn=null,Ki=Pe()+500,Ur(t,e));do try{EI();break}catch(l){E_(t,l)}while(!0);cf(),zl.current=s,re=i,Re!==null?e=0:(Ue=null,qe=0,e=Oe)}if(e!==0){if(e===2&&(i=Nd(t),i!==0&&(r=i,e=oh(t,i))),e===1)throw n=Co,Ur(t,0),Gn(t,r),vt(t,Pe()),n;if(e===6)Gn(t,r);else{if(i=t.current.alternate,!(r&30)&&!_I(i)&&(e=Wl(t,r),e===2&&(s=Nd(t),s!==0&&(r=s,e=oh(t,s))),e===1))throw n=Co,Ur(t,0),Gn(t,r),vt(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Dr(t,ft,gn);break;case 3:if(Gn(t,r),(r&130023424)===r&&(e=kf+500-Pe(),10<e)){if(Sl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ud(Dr.bind(null,t,ft,gn),e);break}Dr(t,ft,gn);break;case 4:if(Gn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vI(r/1960))-r,10<r){t.timeoutHandle=Ud(Dr.bind(null,t,ft,gn),r);break}Dr(t,ft,gn);break;case 5:Dr(t,ft,gn);break;default:throw Error(U(329))}}}return vt(t,Pe()),t.callbackNode===n?w_.bind(null,t):null}function oh(t,e){var n=so;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=Wl(t,e),t!==2&&(e=ft,ft=n,e!==null&&ah(e)),t}function ah(t){ft===null?ft=t:ft.push.apply(ft,t)}function _I(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gn(t,e){for(e&=~If,e&=~Cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$t(e),r=1<<n;t[n]=-1,e&=~r}}function jg(t){if(re&6)throw Error(U(327));Oi();var e=Sl(t,0);if(!(e&1))return vt(t,Pe()),null;var n=Wl(t,e);if(t.tag!==0&&n===2){var r=Nd(t);r!==0&&(e=r,n=oh(t,r))}if(n===1)throw n=Co,Ur(t,0),Gn(t,e),vt(t,Pe()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,ft,gn),vt(t,Pe()),null}function Sf(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Ki=Pe()+500,Su&&Tr())}}function Gr(t){er!==null&&er.tag===0&&!(re&6)&&Oi();var e=re;re|=1;var n=Nt.transition,r=le;try{if(Nt.transition=null,le=1,t)return t()}finally{le=r,Nt.transition=n,re=e,!(re&6)&&Tr()}}function bf(){wt=bi.current,ye(bi)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,QT(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(af(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rl();break;case 3:qi(),ye(gt),ye(it),gf();break;case 5:mf(r);break;case 4:qi();break;case 13:ye(we);break;case 19:ye(we);break;case 10:df(r.type._context);break;case 22:case 23:bf()}n=n.return}if(Ue=t,Re=t=cr(t.current,null),qe=wt=e,Oe=0,Co=null,If=Cu=Kr=0,ft=so=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Lr=null}return t}function E_(t,e){do{var n=Re;try{if(cf(),ol.current=Ul,Fl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fl=!1}if(Hr=0,Fe=De=Ee=null,ro=!1,bo=0,Tf.current=null,n===null||n.return===null){Oe=1,Co=e,Re=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var T=kg(o);if(T!==null){T.flags&=-257,Sg(T,o,l,s,e),T.mode&1&&Ig(s,c,e),e=T,u=c;var I=e.updateQueue;if(I===null){var P=new Set;P.add(u),e.updateQueue=P}else I.add(u);break e}else{if(!(e&1)){Ig(s,c,e),Af();break e}u=Error(U(426))}}else if(ve&&l.mode&1){var C=kg(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Sg(C,o,l,s,e),lf(Hi(u,l));break e}}s=u=Hi(u,l),Oe!==4&&(Oe=2),so===null?so=[s]:so.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=i_(s,u,e);vg(s,x);break e;case 1:l=u;var w=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(lr===null||!lr.has(b)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=s_(s,l,e);vg(s,D);break e}}s=s.return}while(s!==null)}I_(n)}catch(F){e=F,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function x_(){var t=zl.current;return zl.current=Ul,t===null?Ul:t}function Af(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Ue===null||!(Kr&268435455)&&!(Cu&268435455)||Gn(Ue,qe)}function Wl(t,e){var n=re;re|=2;var r=x_();(Ue!==t||qe!==e)&&(gn=null,Ur(t,e));do try{wI();break}catch(i){E_(t,i)}while(!0);if(cf(),re=n,zl.current=r,Re!==null)throw Error(U(261));return Ue=null,qe=0,Oe}function wI(){for(;Re!==null;)T_(Re)}function EI(){for(;Re!==null&&!H1();)T_(Re)}function T_(t){var e=S_(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?I_(t):Re=e,Tf.current=null}function I_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pI(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Re=null;return}}else if(n=fI(n,e,wt),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);Oe===0&&(Oe=5)}function Dr(t,e,n){var r=le,i=Nt.transition;try{Nt.transition=null,le=1,xI(t,e,n,r)}finally{Nt.transition=i,le=r}return null}function xI(t,e,n,r){do Oi();while(er!==null);if(re&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nT(t,s),t===Ue&&(Re=Ue=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,b_(kl,function(){return Oi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nt.transition,Nt.transition=null;var o=le;le=1;var l=re;re|=4,Tf.current=null,gI(t,n),v_(n,t),BT(jd),bl=!!Ld,jd=Ld=null,t.current=n,yI(n),K1(),re=l,le=o,Nt.transition=s}else t.current=n;if(Ha&&(Ha=!1,er=t,$l=i),s=t.pendingLanes,s===0&&(lr=null),Y1(n.stateNode),vt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bl)throw Bl=!1,t=ih,ih=null,t;return $l&1&&t.tag!==0&&Oi(),s=t.pendingLanes,s&1?t===sh?oo++:(oo=0,sh=t):oo=0,Tr(),null}function Oi(){if(er!==null){var t=i0($l),e=Nt.transition,n=le;try{if(Nt.transition=null,le=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,$l=0,re&6)throw Error(U(331));var i=re;for(re|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for($=c;$!==null;){var h=$;switch(h.tag){case 0:case 11:case 15:io(8,h,s)}var m=h.child;if(m!==null)m.return=h,$=m;else for(;$!==null;){h=$;var g=h.sibling,T=h.return;if(m_(h),h===c){$=null;break}if(g!==null){g.return=T,$=g;break}$=T}}}var I=s.alternate;if(I!==null){var P=I.child;if(P!==null){I.child=null;do{var C=P.sibling;P.sibling=null,P=C}while(P!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:io(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,$=x;break e}$=s.return}}var w=t.current;for($=w;$!==null;){o=$;var b=o.child;if(o.subtreeFlags&2064&&b!==null)b.return=o,$=b;else e:for(o=w;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Pu(9,l)}}catch(F){Se(l,l.return,F)}if(l===o){$=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,$=D;break e}$=l.return}}if(re=i,Tr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Eu,t)}catch{}r=!0}return r}finally{le=n,Nt.transition=e}}return!1}function Fg(t,e,n){e=Hi(n,e),e=i_(t,e,1),t=ar(t,e,1),e=ut(),t!==null&&(Ho(t,1,e),vt(t,e))}function Se(t,e,n){if(t.tag===3)Fg(t,t,n);else for(;e!==null;){if(e.tag===3){Fg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=Hi(n,t),t=s_(e,t,1),e=ar(e,t,1),t=ut(),e!==null&&(Ho(e,1,t),vt(e,t));break}}e=e.return}}function TI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(qe&n)===n&&(Oe===4||Oe===3&&(qe&130023424)===qe&&500>Pe()-kf?Ur(t,0):If|=n),vt(t,e)}function k_(t,e){e===0&&(t.mode&1?(e=Va,Va<<=1,!(Va&130023424)&&(Va=4194304)):e=1);var n=ut();t=An(t,e),t!==null&&(Ho(t,e,n),vt(t,n))}function II(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),k_(t,n)}function kI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),k_(t,n)}var S_;S_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gt.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,hI(t,e,n);mt=!!(t.flags&131072)}else mt=!1,ve&&e.flags&1048576&&C0(e,Ol,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ll(t,e),t=e.pendingProps;var i=Bi(e,it.current);Di(e,n),i=vf(null,e,r,t,i,n);var s=_f();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(s=!0,Nl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ff(e),i.updater=Au,e.stateNode=i,i._reactInternals=e,Kd(e,r,t,n),e=Yd(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&of(e),lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ll(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=bI(r),t=Ut(r,t),i){case 0:e=Qd(null,e,r,t,n);break e;case 1:e=Pg(null,e,r,t,n);break e;case 11:e=bg(null,e,r,t,n);break e;case 14:e=Ag(null,e,r,Ut(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Qd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Pg(t,e,r,i,n);case 3:e:{if(u_(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,V0(t,e),Ll(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Hi(Error(U(423)),e),e=Cg(t,e,r,n,i);break e}else if(r!==i){i=Hi(Error(U(424)),e),e=Cg(t,e,r,n,i);break e}else for(Et=or(e.stateNode.containerInfo.firstChild),Tt=e,ve=!0,Bt=null,n=O0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($i(),r===i){e=Pn(t,e,n);break e}lt(t,e,r,n)}e=e.child}return e;case 5:return L0(e),t===null&&Wd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Fd(r,i)?o=null:s!==null&&Fd(r,s)&&(e.flags|=32),l_(t,e),lt(t,e,o,n),e.child;case 6:return t===null&&Wd(e),null;case 13:return c_(t,e,n);case 4:return pf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Wi(e,null,r,n):lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),bg(t,e,r,i,n);case 7:return lt(t,e,e.pendingProps,n),e.child;case 8:return lt(t,e,e.pendingProps.children,n),e.child;case 12:return lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(Ml,r._currentValue),r._currentValue=o,s!==null)if(qt(s.value,o)){if(s.children===i.children&&!gt.current){e=Pn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Tn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),qd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),qd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Di(e,n),i=Ot(i),r=r(i),e.flags|=1,lt(t,e,r,n),e.child;case 14:return r=e.type,i=Ut(r,e.pendingProps),i=Ut(r.type,i),Ag(t,e,r,i,n);case 15:return o_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),ll(t,e),e.tag=1,yt(r)?(t=!0,Nl(e)):t=!1,Di(e,n),r_(e,r,i),Kd(e,r,i,n),Yd(null,e,r,!0,t,n);case 19:return d_(t,e,n);case 22:return a_(t,e,n)}throw Error(U(156,e.tag))};function b_(t,e){return e0(t,e)}function SI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(t,e,n,r){return new SI(t,e,n,r)}function Pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bI(t){if(typeof t=="function")return Pf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kh)return 11;if(t===Gh)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case yi:return zr(n.children,i,s,e);case Hh:o=8,i|=8;break;case yd:return t=Rt(12,n,e,i|2),t.elementType=yd,t.lanes=s,t;case vd:return t=Rt(13,n,e,i),t.elementType=vd,t.lanes=s,t;case _d:return t=Rt(19,n,e,i),t.elementType=_d,t.lanes=s,t;case Lv:return Ru(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mv:o=10;break e;case Vv:o=9;break e;case Kh:o=11;break e;case Gh:o=14;break e;case qn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Rt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zr(t,e,n,r){return t=Rt(7,t,r,e),t.lanes=n,t}function Ru(t,e,n,r){return t=Rt(22,t,r,e),t.elementType=Lv,t.lanes=n,t.stateNode={isHidden:!1},t}function ed(t,e,n){return t=Rt(6,t,null,e),t.lanes=n,t}function td(t,e,n){return e=Rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cf(t,e,n,r,i,s,o,l,u){return t=new AI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ff(s),t}function PI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function A_(t){if(!t)return yr;t=t._reactInternals;e:{if(ni(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(yt(n))return A0(t,n,e)}return e}function P_(t,e,n,r,i,s,o,l,u){return t=Cf(n,r,!0,t,i,s,o,l,u),t.context=A_(null),n=t.current,r=ut(),i=ur(n),s=Tn(r,i),s.callback=e??null,ar(n,s,i),t.current.lanes=i,Ho(t,i,r),vt(t,r),t}function Nu(t,e,n,r){var i=e.current,s=ut(),o=ur(i);return n=A_(n),e.context===null?e.context=n:e.pendingContext=n,e=Tn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&(Wt(t,i,o,s),sl(t,i,o)),o}function ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ug(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rf(t,e){Ug(t,e),(t=t.alternate)&&Ug(t,e)}function CI(){return null}var C_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nf(t){this._internalRoot=t}Du.prototype.render=Nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Nu(t,e,null,null)};Du.prototype.unmount=Nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){Nu(null,t,null,null)}),e[bn]=null}};function Du(t){this._internalRoot=t}Du.prototype.unstable_scheduleHydration=function(t){if(t){var e=a0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&u0(t)}};function Df(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zg(){}function RI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ql(o);s.call(c)}}var o=P_(e,r,t,0,null,!1,!1,"",zg);return t._reactRootContainer=o,t[bn]=o.current,xo(t.nodeType===8?t.parentNode:t),Gr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=ql(u);l.call(c)}}var u=Cf(t,0,!1,null,null,!1,!1,"",zg);return t._reactRootContainer=u,t[bn]=u.current,xo(t.nodeType===8?t.parentNode:t),Gr(function(){Nu(e,u,n,r)}),u}function Mu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ql(o);l.call(u)}}Nu(e,o,t,i)}else o=RI(n,e,t,i,r);return ql(o)}s0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ws(e.pendingLanes);n!==0&&(Xh(e,n|1),vt(e,Pe()),!(re&6)&&(Ki=Pe()+500,Tr()))}break;case 13:Gr(function(){var r=An(t,1);if(r!==null){var i=ut();Wt(r,t,1,i)}}),Rf(t,1)}};Jh=function(t){if(t.tag===13){var e=An(t,134217728);if(e!==null){var n=ut();Wt(e,t,134217728,n)}Rf(t,134217728)}};o0=function(t){if(t.tag===13){var e=ur(t),n=An(t,e);if(n!==null){var r=ut();Wt(n,t,e,r)}Rf(t,e)}};a0=function(){return le};l0=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};Pd=function(t,e,n){switch(e){case"input":if(xd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ku(r);if(!i)throw Error(U(90));Fv(r),xd(r,i)}}}break;case"textarea":zv(t,n);break;case"select":e=n.value,e!=null&&Pi(t,!!n.multiple,e,!1)}};Gv=Sf;Qv=Gr;var NI={usingClientEntryPoint:!1,Events:[Go,Ei,ku,Hv,Kv,Sf]},Vs={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},DI={bundleType:Vs.bundleType,version:Vs.version,rendererPackageName:Vs.rendererPackageName,rendererConfig:Vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jv(t),t===null?null:t.stateNode},findFiberByHostInstance:Vs.findFiberByHostInstance||CI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{Eu=Ka.inject(DI),Zt=Ka}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NI;St.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Df(e))throw Error(U(200));return PI(t,e,null,n)};St.createRoot=function(t,e){if(!Df(t))throw Error(U(299));var n=!1,r="",i=C_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Cf(t,1,!1,null,null,n,!1,r,i),t[bn]=e.current,xo(t.nodeType===8?t.parentNode:t),new Nf(e)};St.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Jv(e),t=t===null?null:t.stateNode,t};St.flushSync=function(t){return Gr(t)};St.hydrate=function(t,e,n){if(!Ou(e))throw Error(U(200));return Mu(null,t,e,!0,n)};St.hydrateRoot=function(t,e,n){if(!Df(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=C_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=P_(e,null,t,1,n??null,i,!1,s,o),t[bn]=e.current,xo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Du(e)};St.render=function(t,e,n){if(!Ou(e))throw Error(U(200));return Mu(null,t,e,!1,n)};St.unmountComponentAtNode=function(t){if(!Ou(t))throw Error(U(40));return t._reactRootContainer?(Gr(function(){Mu(null,null,t,!1,function(){t._reactRootContainer=null,t[bn]=null})}),!0):!1};St.unstable_batchedUpdates=Sf;St.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ou(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Mu(t,e,n,!1,r)};St.version="18.3.1-next-f1338f8080-20240426";function R_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R_)}catch(t){console.error(t)}}R_(),Rv.exports=St;var OI=Rv.exports,Bg=OI;md.createRoot=Bg.createRoot,md.hydrateRoot=Bg.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ro.apply(this,arguments)}var tr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tr||(tr={}));const $g="popstate";function MI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return lh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Hl(i)}return LI(e,n,null,t)}function xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Of(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function VI(){return Math.random().toString(36).substr(2,8)}function Wg(t,e){return{usr:t.state,key:t.key,idx:e}}function lh(t,e,n,r){return n===void 0&&(n=null),Ro({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?as(e):e,{state:n,key:e&&e.key||r||VI()})}function Hl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function as(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function LI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=tr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(Ro({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function m(){l=tr.Pop;let C=h(),x=C==null?null:C-c;c=C,u&&u({action:l,location:P.location,delta:x})}function g(C,x){l=tr.Push;let w=lh(P.location,C,x);c=h()+1;let b=Wg(w,c),D=P.createHref(w);try{o.pushState(b,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(D)}s&&u&&u({action:l,location:P.location,delta:1})}function T(C,x){l=tr.Replace;let w=lh(P.location,C,x);c=h();let b=Wg(w,c),D=P.createHref(w);o.replaceState(b,"",D),s&&u&&u({action:l,location:P.location,delta:0})}function I(C){let x=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof C=="string"?C:Hl(C);return w=w.replace(/ $/,"%20"),xe(x,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,x)}let P={get action(){return l},get location(){return t(i,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener($g,m),u=C,()=>{i.removeEventListener($g,m),u=null}},createHref(C){return e(i,C)},createURL:I,encodeLocation(C){let x=I(C);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:T,go(C){return o.go(C)}};return P}var qg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(qg||(qg={}));function jI(t,e,n){return n===void 0&&(n="/"),FI(t,e,n)}function FI(t,e,n,r){let i=typeof e=="string"?as(e):e,s=Gi(i.pathname||"/",n);if(s==null)return null;let o=N_(t);UI(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=XI(s);l=QI(o[u],c)}return l}function N_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(xe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=dr([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(xe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),N_(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:KI(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of D_(s.path))i(s,o,u)}),e}function D_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=D_(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function UI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:GI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zI=/^:[\w-]+$/,BI=3,$I=2,WI=1,qI=10,HI=-2,Hg=t=>t==="*";function KI(t,e){let n=t.split("/"),r=n.length;return n.some(Hg)&&(r+=HI),e&&(r+=$I),n.filter(i=>!Hg(i)).reduce((i,s)=>i+(zI.test(s)?BI:s===""?WI:qI),r)}function GI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function QI(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",m=uh({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),g=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:dr([s,m.pathname]),pathnameBase:nk(dr([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=dr([s,m.pathnameBase]))}return o}function uh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=YI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:g,isOptional:T}=h;if(g==="*"){let P=l[m]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const I=l[m];return T&&!I?c[g]=void 0:c[g]=(I||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function YI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Of(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function XI(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Of(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Gi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const JI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ZI=t=>JI.test(t);function ek(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?as(t):t,s;if(n)if(ZI(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Of(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Kg(n.substring(1),"/"):s=Kg(n,e)}else s=e;return{pathname:s,search:rk(r),hash:ik(i)}}function Kg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function nd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Mf(t,e){let n=tk(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Vf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=as(t):(i=Ro({},t),xe(!i.pathname||!i.pathname.includes("?"),nd("?","pathname","search",i)),xe(!i.pathname||!i.pathname.includes("#"),nd("#","pathname","hash",i)),xe(!i.search||!i.search.includes("#"),nd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?e[m]:"/"}let u=ek(i,l),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const dr=t=>t.join("/").replace(/\/\/+/g,"/"),nk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),rk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ik=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function sk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const O_=["post","put","patch","delete"];new Set(O_);const ok=["get",...O_];new Set(ok);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function No(){return No=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},No.apply(this,arguments)}const Vu=O.createContext(null),M_=O.createContext(null),Vn=O.createContext(null),Lu=O.createContext(null),Ir=O.createContext({outlet:null,matches:[],isDataRoute:!1}),V_=O.createContext(null);function ak(t,e){let{relative:n}=e===void 0?{}:e;ls()||xe(!1);let{basename:r,navigator:i}=O.useContext(Vn),{hash:s,pathname:o,search:l}=ju(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:dr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function ls(){return O.useContext(Lu)!=null}function us(){return ls()||xe(!1),O.useContext(Lu).location}function L_(t){O.useContext(Vn).static||O.useLayoutEffect(t)}function Yo(){let{isDataRoute:t}=O.useContext(Ir);return t?wk():lk()}function lk(){ls()||xe(!1);let t=O.useContext(Vu),{basename:e,future:n,navigator:r}=O.useContext(Vn),{matches:i}=O.useContext(Ir),{pathname:s}=us(),o=JSON.stringify(Mf(i,n.v7_relativeSplatPath)),l=O.useRef(!1);return L_(()=>{l.current=!0}),O.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=Vf(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:dr([e,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[e,r,o,s,t])}function ju(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(Vn),{matches:i}=O.useContext(Ir),{pathname:s}=us(),o=JSON.stringify(Mf(i,r.v7_relativeSplatPath));return O.useMemo(()=>Vf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function uk(t,e){return ck(t,e)}function ck(t,e,n,r){ls()||xe(!1);let{navigator:i}=O.useContext(Vn),{matches:s}=O.useContext(Ir),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=us(),h;if(e){var m;let C=typeof e=="string"?as(e):e;u==="/"||(m=C.pathname)!=null&&m.startsWith(u)||xe(!1),h=C}else h=c;let g=h.pathname||"/",T=g;if(u!=="/"){let C=u.replace(/^\//,"").split("/");T="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let I=jI(t,{pathname:T}),P=mk(I&&I.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:dr([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:dr([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&P?O.createElement(Lu.Provider,{value:{location:No({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:tr.Pop}},P):P}function dk(){let t=_k(),e=sk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,null)}const hk=O.createElement(dk,null);class fk extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(Ir.Provider,{value:this.props.routeContext},O.createElement(V_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pk(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(Vu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(Ir.Provider,{value:e},r)}function mk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);h>=0||xe(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let m=o[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:g,errors:T}=n,I=m.route.loader&&g[m.route.id]===void 0&&(!T||T[m.route.id]===void 0);if(m.route.lazy||I){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,m,g)=>{let T,I=!1,P=null,C=null;n&&(T=l&&m.route.id?l[m.route.id]:void 0,P=m.route.errorElement||hk,u&&(c<0&&g===0?(Ek("route-fallback"),I=!0,C=null):c===g&&(I=!0,C=m.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,g+1)),w=()=>{let b;return T?b=P:I?b=C:m.route.Component?b=O.createElement(m.route.Component,null):m.route.element?b=m.route.element:b=h,O.createElement(pk,{match:m,routeContext:{outlet:h,matches:x,isDataRoute:n!=null},children:b})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?O.createElement(fk,{location:n.location,revalidation:n.revalidation,component:P,error:T,children:w(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):w()},null)}var j_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(j_||{}),F_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(F_||{});function gk(t){let e=O.useContext(Vu);return e||xe(!1),e}function yk(t){let e=O.useContext(M_);return e||xe(!1),e}function vk(t){let e=O.useContext(Ir);return e||xe(!1),e}function U_(t){let e=vk(),n=e.matches[e.matches.length-1];return n.route.id||xe(!1),n.route.id}function _k(){var t;let e=O.useContext(V_),n=yk(),r=U_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function wk(){let{router:t}=gk(j_.UseNavigateStable),e=U_(F_.UseNavigateStable),n=O.useRef(!1);return L_(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,No({fromRouteId:e},s)))},[t,e])}const Gg={};function Ek(t,e,n){Gg[t]||(Gg[t]=!0)}function xk(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function hl(t){let{to:e,replace:n,state:r,relative:i}=t;ls()||xe(!1);let{future:s,static:o}=O.useContext(Vn),{matches:l}=O.useContext(Ir),{pathname:u}=us(),c=Yo(),h=Vf(e,Mf(l,s.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(h);return O.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:i}),[c,m,i,n,r]),null}function mn(t){xe(!1)}function Tk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tr.Pop,navigator:s,static:o=!1,future:l}=t;ls()&&xe(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:s,static:o,future:No({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=as(r));let{pathname:h="/",search:m="",hash:g="",state:T=null,key:I="default"}=r,P=O.useMemo(()=>{let C=Gi(h,u);return C==null?null:{location:{pathname:C,search:m,hash:g,state:T,key:I},navigationType:i}},[u,h,m,g,T,I,i]);return P==null?null:O.createElement(Vn.Provider,{value:c},O.createElement(Lu.Provider,{children:n,value:P}))}function Ik(t){let{children:e,location:n}=t;return uk(ch(e),n)}new Promise(()=>{});function ch(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,ch(r.props.children,s));return}r.type!==mn&&xe(!1),!r.props.index||!r.props.children||xe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ch(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kl(){return Kl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kl.apply(this,arguments)}function z_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Sk(t,e){return t.button===0&&(!e||e==="_self")&&!kk(t)}const bk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ak=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Pk="6";try{window.__reactRouterVersion=Pk}catch{}const Ck=O.createContext({isTransitioning:!1}),Rk="startTransition",Qg=T1[Rk];function Nk(t){let{basename:e,children:n,future:r,window:i}=t,s=O.useRef();s.current==null&&(s.current=MI({window:i,v5Compat:!0}));let o=s.current,[l,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=O.useCallback(m=>{c&&Qg?Qg(()=>u(m)):u(m)},[u,c]);return O.useLayoutEffect(()=>o.listen(h),[o,h]),O.useEffect(()=>xk(r),[r]),O.createElement(Tk,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const Dk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ok=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lf=O.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:h,viewTransition:m}=e,g=z_(e,bk),{basename:T}=O.useContext(Vn),I,P=!1;if(typeof c=="string"&&Ok.test(c)&&(I=c,Dk))try{let b=new URL(window.location.href),D=c.startsWith("//")?new URL(b.protocol+c):new URL(c),F=Gi(D.pathname,T);D.origin===b.origin&&F!=null?c=F+D.search+D.hash:P=!0}catch{}let C=ak(c,{relative:i}),x=Lk(c,{replace:o,state:l,target:u,preventScrollReset:h,relative:i,viewTransition:m});function w(b){r&&r(b),b.defaultPrevented||x(b)}return O.createElement("a",Kl({},g,{href:I||C,onClick:P||s?r:w,ref:n,target:u}))}),Mk=O.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:c,children:h}=e,m=z_(e,Ak),g=ju(u,{relative:m.relative}),T=us(),I=O.useContext(M_),{navigator:P,basename:C}=O.useContext(Vn),x=I!=null&&jk(g)&&c===!0,w=P.encodeLocation?P.encodeLocation(g).pathname:g.pathname,b=T.pathname,D=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;i||(b=b.toLowerCase(),D=D?D.toLowerCase():null,w=w.toLowerCase()),D&&C&&(D=Gi(D,C)||D);const F=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let V=b===w||!o&&b.startsWith(w)&&b.charAt(F)==="/",_=D!=null&&(D===w||!o&&D.startsWith(w)&&D.charAt(w.length)==="/"),y={isActive:V,isPending:_,isTransitioning:x},E=V?r:void 0,k;typeof s=="function"?k=s(y):k=[s,V?"active":null,_?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let A=typeof l=="function"?l(y):l;return O.createElement(Lf,Kl({},m,{"aria-current":E,className:k,ref:n,style:A,to:u,viewTransition:c}),typeof h=="function"?h(y):h)});var dh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(dh||(dh={}));var Yg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Yg||(Yg={}));function Vk(t){let e=O.useContext(Vu);return e||xe(!1),e}function Lk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Yo(),c=us(),h=ju(t,{relative:o});return O.useCallback(m=>{if(Sk(m,n)){m.preventDefault();let g=r!==void 0?r:Hl(c)===Hl(h);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,h,r,i,n,t,s,o,l])}function jk(t,e){e===void 0&&(e={});let n=O.useContext(Ck);n==null&&xe(!1);let{basename:r}=Vk(dh.useViewTransitionState),i=ju(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Gi(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Gi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return uh(i.pathname,o)!=null||uh(i.pathname,s)!=null}var Xg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(g=64)),r.push(n[h],n[m],n[g],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(B_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new Uk;const g=s<<2|l>>4;if(r.push(g),c!==64){const T=l<<4&240|c>>2;if(r.push(T),m!==64){const I=c<<6&192|m;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Uk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zk=function(t){const e=B_(t);return $_.encodeByteArray(e,!0)},Gl=function(t){return zk(t).replace(/\./g,"")},W_=function(t){try{return $_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=()=>Bk().__FIREBASE_DEFAULTS__,Wk=()=>{if(typeof process>"u"||typeof Xg>"u")return;const t=Xg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&W_(t[1]);return e&&JSON.parse(e)},Fu=()=>{try{return $k()||Wk()||qk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},q_=t=>{var e,n;return(n=(e=Fu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Hk=t=>{const e=q_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},H_=()=>{var t;return(t=Fu())===null||t===void 0?void 0:t.config},K_=t=>{var e;return(e=Fu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Gl(JSON.stringify(n)),Gl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function Yk(){var t;const e=(t=Fu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eS(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tS(){return!Yk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nS(){try{return typeof indexedDB=="object"}catch{return!1}}function rS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iS,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xo.prototype.create)}}class Xo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?sS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ln(i,l,r)}}function sS(t,e){return t.replace(oS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const oS=/\{\$([^}]+)}/g;function aS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ql(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jg(s)&&Jg(o)){if(!Ql(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lS(t,e){const n=new uS(t,e);return n.subscribe.bind(n)}class uS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=rd),i.error===void 0&&(i.error=rd),i.complete===void 0&&(i.complete=rd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t){return t&&t._delegate?t._delegate:t}class Qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Kk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fS(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hS(t){return t===Or?void 0:t}function fS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const mS={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},gS=te.INFO,yS={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},vS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=yS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jf{constructor(e){this.name=e,this._logLevel=gS,this._logHandler=vS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const _S=(t,e)=>e.some(n=>t instanceof n);let Zg,ey;function wS(){return Zg||(Zg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ES(){return ey||(ey=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const G_=new WeakMap,hh=new WeakMap,Q_=new WeakMap,id=new WeakMap,Ff=new WeakMap;function xS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&G_.set(n,t)}).catch(()=>{}),Ff.set(e,t),e}function TS(t){if(hh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hh.set(t,e)}let fh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Q_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IS(t){fh=t(fh)}function kS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sd(this),e,...n);return Q_.set(r,e.sort?e.sort():[e]),hr(r)}:ES().includes(t)?function(...e){return t.apply(sd(this),e),hr(G_.get(this))}:function(...e){return hr(t.apply(sd(this),e))}}function SS(t){return typeof t=="function"?kS(t):(t instanceof IDBTransaction&&TS(t),_S(t,wS())?new Proxy(t,fh):t)}function hr(t){if(t instanceof IDBRequest)return xS(t);if(id.has(t))return id.get(t);const e=SS(t);return e!==t&&(id.set(t,e),Ff.set(e,t)),e}const sd=t=>Ff.get(t);function bS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(hr(o.result),u.oldVersion,u.newVersion,hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const AS=["get","getKey","getAll","getAllKeys","count"],PS=["put","add","delete","clear"],od=new Map;function ty(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(od.get(e))return od.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=PS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||AS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return od.set(e,s),s}IS(t=>({...t,get:(e,n,r)=>ty(e,n)||t.get(e,n,r),has:(e,n)=>!!ty(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ph="@firebase/app",ny="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new jf("@firebase/app"),NS="@firebase/app-compat",DS="@firebase/analytics-compat",OS="@firebase/analytics",MS="@firebase/app-check-compat",VS="@firebase/app-check",LS="@firebase/auth",jS="@firebase/auth-compat",FS="@firebase/database",US="@firebase/data-connect",zS="@firebase/database-compat",BS="@firebase/functions",$S="@firebase/functions-compat",WS="@firebase/installations",qS="@firebase/installations-compat",HS="@firebase/messaging",KS="@firebase/messaging-compat",GS="@firebase/performance",QS="@firebase/performance-compat",YS="@firebase/remote-config",XS="@firebase/remote-config-compat",JS="@firebase/storage",ZS="@firebase/storage-compat",eb="@firebase/firestore",tb="@firebase/vertexai-preview",nb="@firebase/firestore-compat",rb="firebase",ib="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="[DEFAULT]",sb={[ph]:"fire-core",[NS]:"fire-core-compat",[OS]:"fire-analytics",[DS]:"fire-analytics-compat",[VS]:"fire-app-check",[MS]:"fire-app-check-compat",[LS]:"fire-auth",[jS]:"fire-auth-compat",[FS]:"fire-rtdb",[US]:"fire-data-connect",[zS]:"fire-rtdb-compat",[BS]:"fire-fn",[$S]:"fire-fn-compat",[WS]:"fire-iid",[qS]:"fire-iid-compat",[HS]:"fire-fcm",[KS]:"fire-fcm-compat",[GS]:"fire-perf",[QS]:"fire-perf-compat",[YS]:"fire-rc",[XS]:"fire-rc-compat",[JS]:"fire-gcs",[ZS]:"fire-gcs-compat",[eb]:"fire-fst",[nb]:"fire-fst-compat",[tb]:"fire-vertex","fire-js":"fire-js",[rb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=new Map,ob=new Map,gh=new Map;function ry(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qi(t){const e=t.name;if(gh.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;gh.set(e,t);for(const n of Yl.values())ry(n,t);for(const n of ob.values())ry(n,t);return!0}function Uf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new Xo("app","Firebase",ab);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=ib;function Y_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fr.create("bad-app-name",{appName:String(i)});if(n||(n=H_()),!n)throw fr.create("no-options");const s=Yl.get(i);if(s){if(Ql(n,s.options)&&Ql(r,s.config))return s;throw fr.create("duplicate-app",{appName:i})}const o=new pS(i);for(const u of gh.values())o.addComponent(u);const l=new lb(n,r,o);return Yl.set(i,l),l}function X_(t=mh){const e=Yl.get(t);if(!e&&t===mh&&H_())return Y_();if(!e)throw fr.create("no-app",{appName:t});return e}function pr(t,e,n){var r;let i=(r=sb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(l.join(" "));return}Qi(new Qr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub="firebase-heartbeat-database",cb=1,Do="firebase-heartbeat-store";let ad=null;function J_(){return ad||(ad=bS(ub,cb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Do)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),ad}async function db(t){try{const n=(await J_()).transaction(Do),r=await n.objectStore(Do).get(Z_(t));return await n.done,r}catch(e){if(e instanceof Ln)Cn.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function iy(t,e){try{const r=(await J_()).transaction(Do,"readwrite");await r.objectStore(Do).put(e,Z_(t)),await r.done}catch(n){if(n instanceof Ln)Cn.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function Z_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=1024,fb=30*24*60*60*1e3;class pb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=fb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sy(),{heartbeatsToSend:r,unsentEntries:i}=mb(this._heartbeatsCache.heartbeats),s=Gl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Cn.warn(n),""}}}function sy(){return new Date().toISOString().substring(0,10)}function mb(t,e=hb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),oy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),oy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nS()?rS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await db(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function oy(t){return Gl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(t){Qi(new Qr("platform-logger",e=>new CS(e),"PRIVATE")),Qi(new Qr("heartbeat",e=>new pb(e),"PRIVATE")),pr(ph,ny,t),pr(ph,ny,"esm2017"),pr("fire-js","")}yb("");function zf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ew(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vb=ew,tw=new Xo("auth","Firebase",ew());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=new jf("@firebase/auth");function _b(t,...e){Xl.logLevel<=te.WARN&&Xl.warn(`Auth (${cs}): ${t}`,...e)}function fl(t,...e){Xl.logLevel<=te.ERROR&&Xl.error(`Auth (${cs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,...e){throw Bf(t,...e)}function tn(t,...e){return Bf(t,...e)}function nw(t,e,n){const r=Object.assign(Object.assign({},vb()),{[e]:n});return new Xo("auth","Firebase",r).create(e,{appName:t.name})}function In(t){return nw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tw.create(t,...e)}function G(t,e,...n){if(!t)throw Bf(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fl(e),new Error(e)}function Rn(t,e){t||wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wb(){return ay()==="http:"||ay()==="https:"}function ay(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wb()||Jk()||"connection"in navigator)?navigator.onLine:!0}function xb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=Qk()||Zk()}get(){return Eb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=new Zo(3e4,6e4);function kr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jn(t,e,n,r,i={}){return iw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Jo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return Xk()||(c.referrerPolicy="no-referrer"),rw.fetch()(sw(t,t.config.apiHost,n,l),c)})}async function iw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Tb),e);try{const i=new Sb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ga(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ga(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ga(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw nw(t,h,c);Ht(t,h)}}catch(i){if(i instanceof Ln)throw i;Ht(t,"network-request-failed",{message:String(i)})}}async function ea(t,e,n,r,i={}){const s=await jn(t,e,n,r,i);return"mfaPendingCredential"in s&&Ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function sw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$f(t.config,i):`${t.config.apiScheme}://${i}`}function kb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Sb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),Ib.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tn(t,e,r);return i.customData._tokenResponse=n,i}function ly(t){return t!==void 0&&t.enterprise!==void 0}class bb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ab(t,e){return jn(t,"GET","/v2/recaptchaConfig",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pb(t,e){return jn(t,"POST","/v1/accounts:delete",e)}async function ow(t,e){return jn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Cb(t,e=!1){const n=Le(t),r=await n.getIdToken(e),i=Wf(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ao(ld(i.auth_time)),issuedAtTime:ao(ld(i.iat)),expirationTime:ao(ld(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ld(t){return Number(t)*1e3}function Wf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fl("JWT malformed, contained fewer than 3 sections"),null;try{const i=W_(n);return i?JSON.parse(i):(fl("Failed to decode base64 JWT payload"),null)}catch(i){return fl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uy(t){const e=Wf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&Rb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Rb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ao(this.lastLoginAt),this.creationTime=ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Yi(t,ow(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?aw(s.providerUserInfo):[],l=Ob(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=u?c:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new vh(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,m)}async function Db(t){const e=Le(t);await Jl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ob(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function aw(t){return t.map(e=>{var{providerId:n}=e,r=zf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mb(t,e){const n=await iw(t,{},async()=>{const r=Jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=sw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",rw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Vb(t,e){return jn(t,"POST","/v2/accounts:revokeToken",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=uy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Mb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Mi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mi,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=zf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Yi(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Cb(this,e)}reload(){return Db(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Jl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await Yi(this,Pb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,h;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,x=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:b,emailVerified:D,isAnonymous:F,providerData:V,stsTokenManager:_}=n;G(b&&_,e,"internal-error");const y=Mi.fromJSON(this.name,_);G(typeof b=="string",e,"internal-error"),$n(m,e.name),$n(g,e.name),G(typeof D=="boolean",e,"internal-error"),G(typeof F=="boolean",e,"internal-error"),$n(T,e.name),$n(I,e.name),$n(P,e.name),$n(C,e.name),$n(x,e.name),$n(w,e.name);const E=new En({uid:b,auth:e,email:g,emailVerified:D,displayName:m,isAnonymous:F,photoURL:I,phoneNumber:T,tenantId:P,stsTokenManager:y,createdAt:x,lastLoginAt:w});return V&&Array.isArray(V)&&(E.providerData=V.map(k=>Object.assign({},k))),C&&(E._redirectEventId=C),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Mi;i.updateFromServerResponse(n);const s=new En({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Jl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?aw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Mi;l.updateFromIdToken(r);const u=new En({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=new Map;function xn(t){Rn(t instanceof Function,"Expected a class definition");let e=cy.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lw.type="NONE";const dy=lw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t,e,n){return`firebase:${t}:${e}:${n}`}class Vi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pl(this.userKey,i.apiKey,s),this.fullPersistenceKey=pl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?En._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vi(xn(dy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||xn(dy);const o=pl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const h=await c._get(o);if(h){const m=En._fromJSON(e,h);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Vi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Vi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pw(e))return"Blackberry";if(mw(e))return"Webos";if(cw(e))return"Safari";if((e.includes("chrome/")||dw(e))&&!e.includes("edge/"))return"Chrome";if(fw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uw(t=st()){return/firefox\//i.test(t)}function cw(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dw(t=st()){return/crios\//i.test(t)}function hw(t=st()){return/iemobile/i.test(t)}function fw(t=st()){return/android/i.test(t)}function pw(t=st()){return/blackberry/i.test(t)}function mw(t=st()){return/webos/i.test(t)}function qf(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Lb(t=st()){var e;return qf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jb(){return eS()&&document.documentMode===10}function gw(t=st()){return qf(t)||fw(t)||mw(t)||pw(t)||/windows phone/i.test(t)||hw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t,e=[]){let n;switch(t){case"Browser":n=hy(st());break;case"Worker":n=`${hy(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ub(t,e={}){return jn(t,"GET","/v2/passwordPolicy",kr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=6;class Bb{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fy(this),this.idTokenSubscription=new fy(this),this.beforeStateQueue=new Fb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Vi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ow(this,{idToken:e}),r=await En._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(In(this));const n=e?Le(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ub(this),n=new Bb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Vb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Vi.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_b(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ri(t){return Le(t)}class fy{constructor(e){this.auth=e,this.observer=null,this.addObserver=lS(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wb(t){Uu=t}function vw(t){return Uu.loadJS(t)}function qb(){return Uu.recaptchaEnterpriseScript}function Hb(){return Uu.gapiScript}function Kb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Gb="recaptcha-enterprise",Qb="NO_RECAPTCHA";class Yb{constructor(e){this.type=Gb,this.auth=ri(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Ab(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new bb(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;ly(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Qb)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&ly(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=qb();u.length!==0&&(u+=l),vw(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function py(t,e,n,r=!1){const i=new Yb(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function _h(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await py(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await py(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(t,e){const n=Uf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ql(s,e??{}))return i;Ht(i,"already-initialized")}return n.initialize({options:e})}function Jb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Zb(t,e,n){const r=ri(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=_w(e),{host:o,port:l}=eA(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),tA()}function _w(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eA(t){const e=_w(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:my(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:my(o)}}}function my(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}async function nA(t,e){return jn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(t,e){return ea(t,"POST","/v1/accounts:signInWithPassword",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(t,e){return ea(t,"POST","/v1/accounts:signInWithEmailLink",kr(t,e))}async function sA(t,e){return ea(t,"POST","/v1/accounts:signInWithEmailLink",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends Hf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Oo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Oo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _h(e,n,"signInWithPassword",rA);case"emailLink":return iA(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _h(e,r,"signUpPassword",nA);case"emailLink":return sA(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(t,e){return ea(t,"POST","/v1/accounts:signInWithIdp",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA="http://localhost";class Yr extends Hf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=zf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Li(e,n)}buildRequest(){const e={requestUri:oA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lA(t){const e=Hs(Ks(t)).link,n=e?Hs(Ks(e)).deep_link_id:null,r=Hs(Ks(t)).deep_link_id;return(r?Hs(Ks(r)).link:null)||r||n||e||t}class Kf{constructor(e){var n,r,i,s,o,l;const u=Hs(Ks(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,m=aA((i=u.mode)!==null&&i!==void 0?i:null);G(c&&h&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=lA(e);try{return new Kf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.providerId=ds.PROVIDER_ID}static credential(e,n){return Oo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Kf.parseLink(n);return G(r,"argument-error"),Oo._fromEmailAndCode(e,r.code,r.tenantId)}}ds.PROVIDER_ID="password";ds.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ds.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends ww{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends ta{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends ta{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends ta{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(t,e){return ea(t,"POST","/v1/accounts:signUp",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await En._fromIdTokenResponse(e,r,i),o=gy(r);return new Xr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gy(r);return new Xr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl extends Ln{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Zl(e,n,r,i)}}function Ew(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Zl._fromErrorAndOperation(t,s,e,r):s})}async function cA(t,e,n=!1){const r=await Yi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(In(r));const i="reauthenticate";try{const s=await Yi(t,Ew(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Wf(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),Xr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(t,e,n=!1){if(Jt(t.app))return Promise.reject(In(t));const r="signIn",i=await Ew(t,r,e),s=await Xr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function hA(t,e){return xw(ri(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(t){const e=ri(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Iw(t,e,n){if(Jt(t.app))return Promise.reject(In(t));const r=ri(t),o=await _h(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uA).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Tw(t),u}),l=await Xr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function fA(t,e,n){return Jt(t.app)?Promise.reject(In(t)):hA(Le(t),ds.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Tw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pA(t,e){return jn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kw(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Le(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Yi(r,pA(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function mA(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function gA(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function yA(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}function vA(t){return Le(t).signOut()}const eu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(eu,"1"),this.storage.removeItem(eu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=1e3,wA=10;class bw extends Sw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_A)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bw.type="LOCAL";const EA=bw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw extends Sw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Aw.type="SESSION";const Pw=Aw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await xA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Gf("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function IA(t){nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function kA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bA(){return Cw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="firebaseLocalStorageDb",AA=1,tu="firebaseLocalStorage",Nw="fbase_key";class na{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bu(t,e){return t.transaction([tu],e?"readwrite":"readonly").objectStore(tu)}function PA(){const t=indexedDB.deleteDatabase(Rw);return new na(t).toPromise()}function wh(){const t=indexedDB.open(Rw,AA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(tu,{keyPath:Nw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(tu)?e(r):(r.close(),await PA(),e(await wh()))})})}async function yy(t,e,n){const r=Bu(t,!0).put({[Nw]:e,value:n});return new na(r).toPromise()}async function CA(t,e){const n=Bu(t,!1).get(e),r=await new na(n).toPromise();return r===void 0?null:r.value}function vy(t,e){const n=Bu(t,!0).delete(e);return new na(n).toPromise()}const RA=800,NA=3;class Dw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zu._getInstance(bA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kA(),!this.activeServiceWorker)return;this.sender=new TA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wh();return await yy(e,eu,"1"),await vy(e,eu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>CA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Bu(i,!1).getAll();return new na(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dw.type="LOCAL";const DA=Dw;new Zo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t,e){return e?xn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf extends Hf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function MA(t){return xw(t.auth,new Qf(t),t.bypassAuthState)}function VA(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),dA(n,new Qf(t),t.bypassAuthState)}async function LA(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),cA(n,new Qf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MA;case"linkViaPopup":case"linkViaRedirect":return LA;case"reauthViaPopup":case"reauthViaRedirect":return VA;default:Ht(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=new Zo(2e3,1e4);class Ai extends Ow{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ai.currentPopupAction&&Ai.currentPopupAction.cancel(),Ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=Gf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jA.get())};e()}}Ai.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA="pendingRedirect",ml=new Map;class UA extends Ow{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ml.get(this.auth._key());if(!e){try{const r=await zA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ml.set(this.auth._key(),e)}return this.bypassAuthState||ml.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zA(t,e){const n=WA(e),r=$A(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function BA(t,e){ml.set(t._key(),e)}function $A(t){return xn(t._redirectPersistence)}function WA(t){return pl(FA,t.config.apiKey,t.name)}async function qA(t,e,n=!1){if(Jt(t.app))return Promise.reject(In(t));const r=ri(t),i=OA(r,e),o=await new UA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=10*60*1e3;class KA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Mw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HA&&this.cachedEventUids.clear(),this.cachedEventUids.has(_y(e))}saveEventToCache(e){this.cachedEventUids.add(_y(e)),this.lastProcessedEventTime=Date.now()}}function _y(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Mw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(t,e={}){return jn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XA=/^https?/;async function JA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QA(t);for(const n of e)try{if(ZA(n))return}catch{}Ht(t,"unauthorized-domain")}function ZA(t){const e=yh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XA.test(n))return!1;if(YA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=new Zo(3e4,6e4);function wy(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tP(t){return new Promise((e,n)=>{var r,i,s;function o(){wy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wy(),n(tn(t,"network-request-failed"))},timeout:eP.get()})}if(!((i=(r=nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=nn().gapi)===null||s===void 0)&&s.load)o();else{const l=Kb("iframefcb");return nn()[l]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},vw(`${Hb()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw gl=null,e})}let gl=null;function nP(t){return gl=gl||tP(t),gl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=new Zo(5e3,15e3),iP="__/auth/iframe",sP="emulator/auth/iframe",oP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lP(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$f(e,sP):`https://${t.config.authDomain}/${iP}`,r={apiKey:e.apiKey,appName:t.name,v:cs},i=aP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Jo(r).slice(1)}`}async function uP(t){const e=await nP(t),n=nn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:lP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),l=nn().setTimeout(()=>{s(o)},rP.get());function u(){nn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dP=500,hP=600,fP="_blank",pP="http://localhost";class Ey{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mP(t,e,n,r=dP,i=hP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},cP),{width:r.toString(),height:i.toString(),top:s,left:o}),c=st().toLowerCase();n&&(l=dw(c)?fP:n),uw(c)&&(e=e||pP,u.scrollbars="yes");const h=Object.entries(u).reduce((g,[T,I])=>`${g}${T}=${I},`,"");if(Lb(c)&&l!=="_self")return gP(e||"",l),new Ey(null);const m=window.open(e||"",l,h);G(m,t,"popup-blocked");try{m.focus()}catch{}return new Ey(m)}function gP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP="__/auth/handler",vP="emulator/auth/handler",_P=encodeURIComponent("fac");async function xy(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cs,eventId:i};if(e instanceof ww){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",aS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries({}))o[h]=m}if(e instanceof ta){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const u=await t._getAppCheckToken(),c=u?`#${_P}=${encodeURIComponent(u)}`:"";return`${wP(t)}?${Jo(l).slice(1)}${c}`}function wP({config:t}){return t.emulator?$f(t,vP):`https://${t.authDomain}/${yP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="webStorageSupport";class EP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pw,this._completeRedirectFn=qA,this._overrideRedirectResult=BA}async _openPopup(e,n,r,i){var s;Rn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await xy(e,n,r,yh(),i);return mP(e,o,Gf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await xy(e,n,r,yh(),i);return IA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uP(e),r=new KA(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ud,{type:ud},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ud];o!==void 0&&n(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gw()||cw()||qf()}}const xP=EP;var Ty="@firebase/auth",Iy="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kP(t){Qi(new Qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yw(t)},c=new $b(r,i,s,u);return Jb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qi(new Qr("auth-internal",e=>{const n=ri(e.getProvider("auth").getImmediate());return(r=>new TP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pr(Ty,Iy,IP(t)),pr(Ty,Iy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=5*60,bP=K_("authIdTokenMaxAge")||SP;let ky=null;const AP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bP)return;const i=n==null?void 0:n.token;ky!==i&&(ky=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function PP(t=X_()){const e=Uf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xb(t,{popupRedirectResolver:xP,persistence:[DA,EA,Pw]}),r=K_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=AP(s.toString());gA(n,o,()=>o(n.currentUser)),mA(n,l=>o(l))}}const i=q_("auth");return i&&Zb(n,`http://${i}`),n}function CP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Wb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=tn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",CP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kP("Browser");var Sy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Br,Vw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function E(){}E.prototype=y.prototype,_.D=y.prototype,_.prototype=new E,_.prototype.constructor=_,_.C=function(k,A,R){for(var S=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)S[ce-2]=arguments[ce];return y.prototype[A].apply(k,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,y,E){E||(E=0);var k=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)k[A]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(A=0;16>A;++A)k[A]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=_.g[0],E=_.g[1],A=_.g[2];var R=_.g[3],S=y+(R^E&(A^R))+k[0]+3614090360&4294967295;y=E+(S<<7&4294967295|S>>>25),S=R+(A^y&(E^A))+k[1]+3905402710&4294967295,R=y+(S<<12&4294967295|S>>>20),S=A+(E^R&(y^E))+k[2]+606105819&4294967295,A=R+(S<<17&4294967295|S>>>15),S=E+(y^A&(R^y))+k[3]+3250441966&4294967295,E=A+(S<<22&4294967295|S>>>10),S=y+(R^E&(A^R))+k[4]+4118548399&4294967295,y=E+(S<<7&4294967295|S>>>25),S=R+(A^y&(E^A))+k[5]+1200080426&4294967295,R=y+(S<<12&4294967295|S>>>20),S=A+(E^R&(y^E))+k[6]+2821735955&4294967295,A=R+(S<<17&4294967295|S>>>15),S=E+(y^A&(R^y))+k[7]+4249261313&4294967295,E=A+(S<<22&4294967295|S>>>10),S=y+(R^E&(A^R))+k[8]+1770035416&4294967295,y=E+(S<<7&4294967295|S>>>25),S=R+(A^y&(E^A))+k[9]+2336552879&4294967295,R=y+(S<<12&4294967295|S>>>20),S=A+(E^R&(y^E))+k[10]+4294925233&4294967295,A=R+(S<<17&4294967295|S>>>15),S=E+(y^A&(R^y))+k[11]+2304563134&4294967295,E=A+(S<<22&4294967295|S>>>10),S=y+(R^E&(A^R))+k[12]+1804603682&4294967295,y=E+(S<<7&4294967295|S>>>25),S=R+(A^y&(E^A))+k[13]+4254626195&4294967295,R=y+(S<<12&4294967295|S>>>20),S=A+(E^R&(y^E))+k[14]+2792965006&4294967295,A=R+(S<<17&4294967295|S>>>15),S=E+(y^A&(R^y))+k[15]+1236535329&4294967295,E=A+(S<<22&4294967295|S>>>10),S=y+(A^R&(E^A))+k[1]+4129170786&4294967295,y=E+(S<<5&4294967295|S>>>27),S=R+(E^A&(y^E))+k[6]+3225465664&4294967295,R=y+(S<<9&4294967295|S>>>23),S=A+(y^E&(R^y))+k[11]+643717713&4294967295,A=R+(S<<14&4294967295|S>>>18),S=E+(R^y&(A^R))+k[0]+3921069994&4294967295,E=A+(S<<20&4294967295|S>>>12),S=y+(A^R&(E^A))+k[5]+3593408605&4294967295,y=E+(S<<5&4294967295|S>>>27),S=R+(E^A&(y^E))+k[10]+38016083&4294967295,R=y+(S<<9&4294967295|S>>>23),S=A+(y^E&(R^y))+k[15]+3634488961&4294967295,A=R+(S<<14&4294967295|S>>>18),S=E+(R^y&(A^R))+k[4]+3889429448&4294967295,E=A+(S<<20&4294967295|S>>>12),S=y+(A^R&(E^A))+k[9]+568446438&4294967295,y=E+(S<<5&4294967295|S>>>27),S=R+(E^A&(y^E))+k[14]+3275163606&4294967295,R=y+(S<<9&4294967295|S>>>23),S=A+(y^E&(R^y))+k[3]+4107603335&4294967295,A=R+(S<<14&4294967295|S>>>18),S=E+(R^y&(A^R))+k[8]+1163531501&4294967295,E=A+(S<<20&4294967295|S>>>12),S=y+(A^R&(E^A))+k[13]+2850285829&4294967295,y=E+(S<<5&4294967295|S>>>27),S=R+(E^A&(y^E))+k[2]+4243563512&4294967295,R=y+(S<<9&4294967295|S>>>23),S=A+(y^E&(R^y))+k[7]+1735328473&4294967295,A=R+(S<<14&4294967295|S>>>18),S=E+(R^y&(A^R))+k[12]+2368359562&4294967295,E=A+(S<<20&4294967295|S>>>12),S=y+(E^A^R)+k[5]+4294588738&4294967295,y=E+(S<<4&4294967295|S>>>28),S=R+(y^E^A)+k[8]+2272392833&4294967295,R=y+(S<<11&4294967295|S>>>21),S=A+(R^y^E)+k[11]+1839030562&4294967295,A=R+(S<<16&4294967295|S>>>16),S=E+(A^R^y)+k[14]+4259657740&4294967295,E=A+(S<<23&4294967295|S>>>9),S=y+(E^A^R)+k[1]+2763975236&4294967295,y=E+(S<<4&4294967295|S>>>28),S=R+(y^E^A)+k[4]+1272893353&4294967295,R=y+(S<<11&4294967295|S>>>21),S=A+(R^y^E)+k[7]+4139469664&4294967295,A=R+(S<<16&4294967295|S>>>16),S=E+(A^R^y)+k[10]+3200236656&4294967295,E=A+(S<<23&4294967295|S>>>9),S=y+(E^A^R)+k[13]+681279174&4294967295,y=E+(S<<4&4294967295|S>>>28),S=R+(y^E^A)+k[0]+3936430074&4294967295,R=y+(S<<11&4294967295|S>>>21),S=A+(R^y^E)+k[3]+3572445317&4294967295,A=R+(S<<16&4294967295|S>>>16),S=E+(A^R^y)+k[6]+76029189&4294967295,E=A+(S<<23&4294967295|S>>>9),S=y+(E^A^R)+k[9]+3654602809&4294967295,y=E+(S<<4&4294967295|S>>>28),S=R+(y^E^A)+k[12]+3873151461&4294967295,R=y+(S<<11&4294967295|S>>>21),S=A+(R^y^E)+k[15]+530742520&4294967295,A=R+(S<<16&4294967295|S>>>16),S=E+(A^R^y)+k[2]+3299628645&4294967295,E=A+(S<<23&4294967295|S>>>9),S=y+(A^(E|~R))+k[0]+4096336452&4294967295,y=E+(S<<6&4294967295|S>>>26),S=R+(E^(y|~A))+k[7]+1126891415&4294967295,R=y+(S<<10&4294967295|S>>>22),S=A+(y^(R|~E))+k[14]+2878612391&4294967295,A=R+(S<<15&4294967295|S>>>17),S=E+(R^(A|~y))+k[5]+4237533241&4294967295,E=A+(S<<21&4294967295|S>>>11),S=y+(A^(E|~R))+k[12]+1700485571&4294967295,y=E+(S<<6&4294967295|S>>>26),S=R+(E^(y|~A))+k[3]+2399980690&4294967295,R=y+(S<<10&4294967295|S>>>22),S=A+(y^(R|~E))+k[10]+4293915773&4294967295,A=R+(S<<15&4294967295|S>>>17),S=E+(R^(A|~y))+k[1]+2240044497&4294967295,E=A+(S<<21&4294967295|S>>>11),S=y+(A^(E|~R))+k[8]+1873313359&4294967295,y=E+(S<<6&4294967295|S>>>26),S=R+(E^(y|~A))+k[15]+4264355552&4294967295,R=y+(S<<10&4294967295|S>>>22),S=A+(y^(R|~E))+k[6]+2734768916&4294967295,A=R+(S<<15&4294967295|S>>>17),S=E+(R^(A|~y))+k[13]+1309151649&4294967295,E=A+(S<<21&4294967295|S>>>11),S=y+(A^(E|~R))+k[4]+4149444226&4294967295,y=E+(S<<6&4294967295|S>>>26),S=R+(E^(y|~A))+k[11]+3174756917&4294967295,R=y+(S<<10&4294967295|S>>>22),S=A+(y^(R|~E))+k[2]+718787259&4294967295,A=R+(S<<15&4294967295|S>>>17),S=E+(R^(A|~y))+k[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(A+(S<<21&4294967295|S>>>11))&4294967295,_.g[2]=_.g[2]+A&4294967295,_.g[3]=_.g[3]+R&4294967295}r.prototype.u=function(_,y){y===void 0&&(y=_.length);for(var E=y-this.blockSize,k=this.B,A=this.h,R=0;R<y;){if(A==0)for(;R<=E;)i(this,_,R),R+=this.blockSize;if(typeof _=="string"){for(;R<y;)if(k[A++]=_.charCodeAt(R++),A==this.blockSize){i(this,k),A=0;break}}else for(;R<y;)if(k[A++]=_[R++],A==this.blockSize){i(this,k),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;var E=8*this.o;for(y=_.length-8;y<_.length;++y)_[y]=E&255,E/=256;for(this.u(_),_=Array(16),y=E=0;4>y;++y)for(var k=0;32>k;k+=8)_[E++]=this.g[y]>>>k&255;return _};function s(_,y){var E=l;return Object.prototype.hasOwnProperty.call(E,_)?E[_]:E[_]=y(_)}function o(_,y){this.h=y;for(var E=[],k=!0,A=_.length-1;0<=A;A--){var R=_[A]|0;k&&R==y||(E[A]=R,k=!1)}this.g=E}var l={};function u(_){return-128<=_&&128>_?s(_,function(y){return new o([y|0],0>y?-1:0)}):new o([_|0],0>_?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return m;if(0>_)return C(c(-_));for(var y=[],E=1,k=0;_>=E;k++)y[k]=_/E|0,E*=4294967296;return new o(y,0)}function h(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return C(h(_.substring(1),y));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(y,8)),k=m,A=0;A<_.length;A+=8){var R=Math.min(8,_.length-A),S=parseInt(_.substring(A,A+R),y);8>R?(R=c(Math.pow(y,R)),k=k.j(R).add(c(S))):(k=k.j(E),k=k.add(c(S)))}return k}var m=u(0),g=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-C(this).m();for(var _=0,y=1,E=0;E<this.g.length;E++){var k=this.i(E);_+=(0<=k?k:4294967296+k)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I(this))return"0";if(P(this))return"-"+C(this).toString(_);for(var y=c(Math.pow(_,6)),E=this,k="";;){var A=D(E,y).g;E=x(E,A.j(y));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(_);if(E=A,I(E))return R+k;for(;6>R.length;)R="0"+R;k=R+k}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function I(_){if(_.h!=0)return!1;for(var y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function P(_){return _.h==-1}t.l=function(_){return _=x(this,_),P(_)?-1:I(_)?0:1};function C(_){for(var y=_.g.length,E=[],k=0;k<y;k++)E[k]=~_.g[k];return new o(E,~_.h).add(g)}t.abs=function(){return P(this)?C(this):this},t.add=function(_){for(var y=Math.max(this.g.length,_.g.length),E=[],k=0,A=0;A<=y;A++){var R=k+(this.i(A)&65535)+(_.i(A)&65535),S=(R>>>16)+(this.i(A)>>>16)+(_.i(A)>>>16);k=S>>>16,R&=65535,S&=65535,E[A]=S<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function x(_,y){return _.add(C(y))}t.j=function(_){if(I(this)||I(_))return m;if(P(this))return P(_)?C(this).j(C(_)):C(C(this).j(_));if(P(_))return C(this.j(C(_)));if(0>this.l(T)&&0>_.l(T))return c(this.m()*_.m());for(var y=this.g.length+_.g.length,E=[],k=0;k<2*y;k++)E[k]=0;for(k=0;k<this.g.length;k++)for(var A=0;A<_.g.length;A++){var R=this.i(k)>>>16,S=this.i(k)&65535,ce=_.i(A)>>>16,Vt=_.i(A)&65535;E[2*k+2*A]+=S*Vt,w(E,2*k+2*A),E[2*k+2*A+1]+=R*Vt,w(E,2*k+2*A+1),E[2*k+2*A+1]+=S*ce,w(E,2*k+2*A+1),E[2*k+2*A+2]+=R*ce,w(E,2*k+2*A+2)}for(k=0;k<y;k++)E[k]=E[2*k+1]<<16|E[2*k];for(k=y;k<2*y;k++)E[k]=0;return new o(E,0)};function w(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function b(_,y){this.g=_,this.h=y}function D(_,y){if(I(y))throw Error("division by zero");if(I(_))return new b(m,m);if(P(_))return y=D(C(_),y),new b(C(y.g),C(y.h));if(P(y))return y=D(_,C(y)),new b(C(y.g),y.h);if(30<_.g.length){if(P(_)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var E=g,k=y;0>=k.l(_);)E=F(E),k=F(k);var A=V(E,1),R=V(k,1);for(k=V(k,2),E=V(E,2);!I(k);){var S=R.add(k);0>=S.l(_)&&(A=A.add(E),R=S),k=V(k,1),E=V(E,1)}return y=x(_,A.j(y)),new b(A,y)}for(A=m;0<=_.l(y);){for(E=Math.max(1,Math.floor(_.m()/y.m())),k=Math.ceil(Math.log(E)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),R=c(E),S=R.j(y);P(S)||0<S.l(_);)E-=k,R=c(E),S=R.j(y);I(R)&&(R=g),A=A.add(R),_=x(_,S)}return new b(A,_)}t.A=function(_){return D(this,_).h},t.and=function(_){for(var y=Math.max(this.g.length,_.g.length),E=[],k=0;k<y;k++)E[k]=this.i(k)&_.i(k);return new o(E,this.h&_.h)},t.or=function(_){for(var y=Math.max(this.g.length,_.g.length),E=[],k=0;k<y;k++)E[k]=this.i(k)|_.i(k);return new o(E,this.h|_.h)},t.xor=function(_){for(var y=Math.max(this.g.length,_.g.length),E=[],k=0;k<y;k++)E[k]=this.i(k)^_.i(k);return new o(E,this.h^_.h)};function F(_){for(var y=_.g.length+1,E=[],k=0;k<y;k++)E[k]=_.i(k)<<1|_.i(k-1)>>>31;return new o(E,_.h)}function V(_,y){var E=y>>5;y%=32;for(var k=_.g.length-E,A=[],R=0;R<k;R++)A[R]=0<y?_.i(R+E)>>>y|_.i(R+E+1)<<32-y:_.i(R+E);return new o(A,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Vw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Br=o}).apply(typeof Sy<"u"?Sy:typeof self<"u"?self:typeof window<"u"?window:{});var Qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lw,Gs,jw,yl,Eh,Fw,Uw,zw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,p){return a==Array.prototype||a==Object.prototype||(a[d]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qa=="object"&&Qa];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var N=a[v];if(!(N in p))break e;p=p[N]}a=a[a.length-1],v=p[a],d=d(v),d!=v&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}function s(a,d){a instanceof String&&(a+="");var p=0,v=!1,N={next:function(){if(!v&&p<a.length){var M=p++;return{value:d(M,a[M]),done:!1}}return v=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,p){return a.call.apply(a.bind,arguments)}function m(a,d,p){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,v),a.apply(d,N)}}return function(){return a.apply(d,arguments)}}function g(a,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:m,g.apply(null,arguments)}function T(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function I(a,d){function p(){}p.prototype=d.prototype,a.aa=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(v,N,M){for(var z=Array(arguments.length-2),he=2;he<arguments.length;he++)z[he-2]=arguments[he];return d.prototype[N].apply(v,z)}}function P(a){const d=a.length;if(0<d){const p=Array(d);for(let v=0;v<d;v++)p[v]=a[v];return p}return[]}function C(a,d){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const N=a.length||0,M=v.length||0;a.length=N+M;for(let z=0;z<M;z++)a[N+z]=v[z]}else a.push(v)}}class x{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function w(a){return/^[\s\xa0]*$/.test(a)}function b(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var F=b().indexOf("Gecko")!=-1&&!(b().toLowerCase().indexOf("webkit")!=-1&&b().indexOf("Edge")==-1)&&!(b().indexOf("Trident")!=-1||b().indexOf("MSIE")!=-1)&&b().indexOf("Edge")==-1;function V(a,d,p){for(const v in a)d.call(p,a[v],v,a)}function _(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function y(a){const d={};for(const p in a)d[p]=a[p];return d}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(a,d){let p,v;for(let N=1;N<arguments.length;N++){v=arguments[N];for(p in v)a[p]=v[p];for(let M=0;M<E.length;M++)p=E[M],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function A(a){var d=1;a=a.split(":");const p=[];for(;0<d&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function R(a){l.setTimeout(()=>{throw a},0)}function S(){var a=K;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class ce{constructor(){this.h=this.g=null}add(d,p){const v=Vt.get();v.set(d,p),this.h?this.h.next=v:this.g=v,this.h=v}}var Vt=new x(()=>new br,a=>a.reset());class br{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Lt,B=!1,K=new ce,J=()=>{const a=l.Promise.resolve(void 0);Lt=()=>{a.then(_e)}};var _e=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(p){R(p)}var d=Vt;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}B=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var un=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,d),l.removeEventListener("test",p,d)}catch{}return a}();function cn(a,d){if(be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(F){e:{try{D(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:dn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&cn.aa.h.call(this)}}I(cn,be);var dn={2:"touch",3:"pen",4:"mouse"};cn.prototype.h=function(){cn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var hn="closure_listenable_"+(1e6*Math.random()|0),Px=0;function Cx(a,d,p,v,N){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!v,this.ha=N,this.key=++Px,this.da=this.fa=!1}function fa(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function pa(a){this.src=a,this.g={},this.h=0}pa.prototype.add=function(a,d,p,v,N){var M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);var z=lc(a,d,v,N);return-1<z?(d=a[z],p||(d.fa=!1)):(d=new Cx(d,this.src,M,!!v,N),d.fa=p,a.push(d)),d};function ac(a,d){var p=d.type;if(p in a.g){var v=a.g[p],N=Array.prototype.indexOf.call(v,d,void 0),M;(M=0<=N)&&Array.prototype.splice.call(v,N,1),M&&(fa(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function lc(a,d,p,v){for(var N=0;N<a.length;++N){var M=a[N];if(!M.da&&M.listener==d&&M.capture==!!p&&M.ha==v)return N}return-1}var uc="closure_lm_"+(1e6*Math.random()|0),cc={};function Mp(a,d,p,v,N){if(Array.isArray(d)){for(var M=0;M<d.length;M++)Mp(a,d[M],p,v,N);return null}return p=jp(p),a&&a[hn]?a.K(d,p,c(v)?!!v.capture:!1,N):Rx(a,d,p,!1,v,N)}function Rx(a,d,p,v,N,M){if(!d)throw Error("Invalid event type");var z=c(N)?!!N.capture:!!N,he=hc(a);if(he||(a[uc]=he=new pa(a)),p=he.add(d,p,v,z,M),p.proxy)return p;if(v=Nx(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)un||(N=z),N===void 0&&(N=!1),a.addEventListener(d.toString(),v,N);else if(a.attachEvent)a.attachEvent(Lp(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Nx(){function a(p){return d.call(a.src,a.listener,p)}const d=Dx;return a}function Vp(a,d,p,v,N){if(Array.isArray(d))for(var M=0;M<d.length;M++)Vp(a,d[M],p,v,N);else v=c(v)?!!v.capture:!!v,p=jp(p),a&&a[hn]?(a=a.i,d=String(d).toString(),d in a.g&&(M=a.g[d],p=lc(M,p,v,N),-1<p&&(fa(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete a.g[d],a.h--)))):a&&(a=hc(a))&&(d=a.g[d.toString()],a=-1,d&&(a=lc(d,p,v,N)),(p=-1<a?d[a]:null)&&dc(p))}function dc(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[hn])ac(d.i,a);else{var p=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(p,v,a.capture):d.detachEvent?d.detachEvent(Lp(p),v):d.addListener&&d.removeListener&&d.removeListener(v),(p=hc(d))?(ac(p,a),p.h==0&&(p.src=null,d[uc]=null)):fa(a)}}}function Lp(a){return a in cc?cc[a]:cc[a]="on"+a}function Dx(a,d){if(a.da)a=!0;else{d=new cn(d,this);var p=a.listener,v=a.ha||a.src;a.fa&&dc(a),a=p.call(v,d)}return a}function hc(a){return a=a[uc],a instanceof pa?a:null}var fc="__closure_events_fn_"+(1e9*Math.random()>>>0);function jp(a){return typeof a=="function"?a:(a[fc]||(a[fc]=function(d){return a.handleEvent(d)}),a[fc])}function Qe(){de.call(this),this.i=new pa(this),this.M=this,this.F=null}I(Qe,de),Qe.prototype[hn]=!0,Qe.prototype.removeEventListener=function(a,d,p,v){Vp(this,a,d,p,v)};function ot(a,d){var p,v=a.F;if(v)for(p=[];v;v=v.F)p.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new be(d,a);else if(d instanceof be)d.target=d.target||a;else{var N=d;d=new be(v,a),k(d,N)}if(N=!0,p)for(var M=p.length-1;0<=M;M--){var z=d.g=p[M];N=ma(z,v,!0,d)&&N}if(z=d.g=a,N=ma(z,v,!0,d)&&N,N=ma(z,v,!1,d)&&N,p)for(M=0;M<p.length;M++)z=d.g=p[M],N=ma(z,v,!1,d)&&N}Qe.prototype.N=function(){if(Qe.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var p=a.g[d],v=0;v<p.length;v++)fa(p[v]);delete a.g[d],a.h--}}this.F=null},Qe.prototype.K=function(a,d,p,v){return this.i.add(String(a),d,!1,p,v)},Qe.prototype.L=function(a,d,p,v){return this.i.add(String(a),d,!0,p,v)};function ma(a,d,p,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,M=0;M<d.length;++M){var z=d[M];if(z&&!z.da&&z.capture==p){var he=z.listener,ze=z.ha||z.src;z.fa&&ac(a.i,z),N=he.call(ze,v)!==!1&&N}}return N&&!v.defaultPrevented}function Fp(a,d,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function Up(a){a.g=Fp(()=>{a.g=null,a.i&&(a.i=!1,Up(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Ox extends de{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Up(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(a){de.call(this),this.h=a,this.g={}}I(gs,de);var zp=[];function Bp(a){V(a.g,function(d,p){this.g.hasOwnProperty(p)&&dc(d)},a),a.g={}}gs.prototype.N=function(){gs.aa.N.call(this),Bp(this)},gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pc=l.JSON.stringify,Mx=l.JSON.parse,Vx=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function mc(){}mc.prototype.h=null;function $p(a){return a.h||(a.h=a.i())}function Wp(){}var ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gc(){be.call(this,"d")}I(gc,be);function yc(){be.call(this,"c")}I(yc,be);var Ar={},qp=null;function ga(){return qp=qp||new Qe}Ar.La="serverreachability";function Hp(a){be.call(this,Ar.La,a)}I(Hp,be);function vs(a){const d=ga();ot(d,new Hp(d))}Ar.STAT_EVENT="statevent";function Kp(a,d){be.call(this,Ar.STAT_EVENT,a),this.stat=d}I(Kp,be);function at(a){const d=ga();ot(d,new Kp(d,a))}Ar.Ma="timingevent";function Gp(a,d){be.call(this,Ar.Ma,a),this.size=d}I(Gp,be);function _s(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function ws(){this.g=!0}ws.prototype.xa=function(){this.g=!1};function Lx(a,d,p,v,N,M){a.info(function(){if(a.g)if(M)for(var z="",he=M.split("&"),ze=0;ze<he.length;ze++){var ie=he[ze].split("=");if(1<ie.length){var Ye=ie[0];ie=ie[1];var Xe=Ye.split("_");z=2<=Xe.length&&Xe[1]=="type"?z+(Ye+"="+ie+"&"):z+(Ye+"=redacted&")}}else z=null;else z=M;return"XMLHTTP REQ ("+v+") [attempt "+N+"]: "+d+`
`+p+`
`+z})}function jx(a,d,p,v,N,M,z){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+N+"]: "+d+`
`+p+`
`+M+" "+z})}function ai(a,d,p,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Ux(a,p)+(v?" "+v:"")})}function Fx(a,d){a.info(function(){return"TIMEOUT: "+d})}ws.prototype.info=function(){};function Ux(a,d){if(!a.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var v=p[a];if(!(2>v.length)){var N=v[1];if(Array.isArray(N)&&!(1>N.length)){var M=N[0];if(M!="noop"&&M!="stop"&&M!="close")for(var z=1;z<N.length;z++)N[z]=""}}}}return pc(p)}catch{return d}}var ya={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Qp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vc;function va(){}I(va,mc),va.prototype.g=function(){return new XMLHttpRequest},va.prototype.i=function(){return{}},vc=new va;function Fn(a,d,p,v){this.j=a,this.i=d,this.l=p,this.R=v||1,this.U=new gs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Yp}function Yp(){this.i=null,this.g="",this.h=!1}var Xp={},_c={};function wc(a,d,p){a.L=1,a.v=xa(fn(d)),a.m=p,a.P=!0,Jp(a,null)}function Jp(a,d){a.F=Date.now(),_a(a),a.A=fn(a.v);var p=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),hm(p.i,"t",v),a.C=0,p=a.j.J,a.h=new Yp,a.g=Cm(a.j,p?d:null,!a.m),0<a.O&&(a.M=new Ox(g(a.Y,a,a.g),a.O)),d=a.U,p=a.g,v=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(zp[0]=N.toString()),N=zp);for(var M=0;M<N.length;M++){var z=Mp(p,N[M],v||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),vs(),Lx(a.i,a.u,a.A,a.l,a.R,a.m)}Fn.prototype.ca=function(a){a=a.target;const d=this.M;d&&pn(a)==3?d.j():this.Y(a)},Fn.prototype.Y=function(a){try{if(a==this.g)e:{const Xe=pn(this.g);var d=this.g.Ba();const ci=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||_m(this.g)))){this.J||Xe!=4||d==7||(d==8||0>=ci?vs(3):vs(2)),Ec(this);var p=this.g.Z();this.X=p;t:if(Zp(this)){var v=_m(this.g);a="";var N=v.length,M=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pr(this),Es(this);var z="";break t}this.h.i=new l.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!(M&&d==N-1)});v.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,jx(this.i,this.u,this.A,this.l,this.R,Xe,p),this.o){if(this.T&&!this.K){t:{if(this.g){var he,ze=this.g;if((he=ze.g?ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(he)){var ie=he;break t}}ie=null}if(p=ie)ai(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xc(this,p);else{this.o=!1,this.s=3,at(12),Pr(this),Es(this);break e}}if(this.P){p=!0;let jt;for(;!this.J&&this.C<z.length;)if(jt=zx(this,z),jt==_c){Xe==4&&(this.s=4,at(14),p=!1),ai(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==Xp){this.s=4,at(15),ai(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else ai(this.i,this.l,jt,null),xc(this,jt);if(Zp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||z.length!=0||this.h.h||(this.s=1,at(16),p=!1),this.o=this.o&&p,!p)ai(this.i,this.l,z,"[Invalid Chunked Response]"),Pr(this),Es(this);else if(0<z.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Ac(Ye),Ye.M=!0,at(11))}}else ai(this.i,this.l,z,null),xc(this,z);Xe==4&&Pr(this),this.o&&!this.J&&(Xe==4?Sm(this.j,this):(this.o=!1,_a(this)))}else i1(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Pr(this),Es(this)}}}catch{}finally{}};function Zp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function zx(a,d){var p=a.C,v=d.indexOf(`
`,p);return v==-1?_c:(p=Number(d.substring(p,v)),isNaN(p)?Xp:(v+=1,v+p>d.length?_c:(d=d.slice(v,v+p),a.C=v+p,d)))}Fn.prototype.cancel=function(){this.J=!0,Pr(this)};function _a(a){a.S=Date.now()+a.I,em(a,a.I)}function em(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=_s(g(a.ba,a),d)}function Ec(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Fn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Fx(this.i,this.A),this.L!=2&&(vs(),at(17)),Pr(this),this.s=2,Es(this)):em(this,this.S-a)};function Es(a){a.j.G==0||a.J||Sm(a.j,a)}function Pr(a){Ec(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Bp(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function xc(a,d){try{var p=a.j;if(p.G!=0&&(p.g==a||Tc(p.h,a))){if(!a.K&&Tc(p.h,a)&&p.G==3){try{var v=p.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var N=v;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Aa(p),Sa(p);else break e;bc(p),at(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=_s(g(p.Za,p),6e3));if(1>=rm(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Rr(p,11)}else if((a.K||p.g==a)&&Aa(p),!w(d))for(N=p.Da.g.parse(d),d=0;d<N.length;d++){let ie=N[d];if(p.T=ie[0],ie=ie[1],p.G==2)if(ie[0]=="c"){p.K=ie[1],p.ia=ie[2];const Ye=ie[3];Ye!=null&&(p.la=Ye,p.j.info("VER="+p.la));const Xe=ie[4];Xe!=null&&(p.Aa=Xe,p.j.info("SVER="+p.Aa));const ci=ie[5];ci!=null&&typeof ci=="number"&&0<ci&&(v=1.5*ci,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const jt=a.g;if(jt){const Ca=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ca){var M=v.h;M.g||Ca.indexOf("spdy")==-1&&Ca.indexOf("quic")==-1&&Ca.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Ic(M,M.h),M.h=null))}if(v.D){const Pc=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Pc&&(v.ya=Pc,pe(v.I,v.D,Pc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var z=a;if(v.qa=Pm(v,v.J?v.ia:null,v.W),z.K){im(v.h,z);var he=z,ze=v.L;ze&&(he.I=ze),he.B&&(Ec(he),_a(he)),v.g=z}else Im(v);0<p.i.length&&ba(p)}else ie[0]!="stop"&&ie[0]!="close"||Rr(p,7);else p.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Rr(p,7):Sc(p):ie[0]!="noop"&&p.l&&p.l.ta(ie),p.v=0)}}vs(4)}catch{}}var Bx=class{constructor(a,d){this.g=a,this.map=d}};function tm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function rm(a){return a.h?1:a.g?a.g.size:0}function Tc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Ic(a,d){a.g?a.g.add(d):a.h=d}function im(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}tm.prototype.cancel=function(){if(this.i=sm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function sm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.D);return d}return P(a.i)}function $x(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],p=a.length,v=0;v<p;v++)d.push(a[v]);return d}d=[],p=0;for(v in a)d[p++]=a[v];return d}function Wx(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var p=0;p<a;p++)d.push(p);return d}d=[],p=0;for(const v in a)d[p++]=v;return d}}}function om(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var p=Wx(a),v=$x(a),N=v.length,M=0;M<N;M++)d.call(void 0,v[M],p&&p[M],a)}var am=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qx(a,d){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var v=a[p].indexOf("="),N=null;if(0<=v){var M=a[p].substring(0,v);N=a[p].substring(v+1)}else M=a[p];d(M,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Cr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Cr){this.h=a.h,wa(this,a.j),this.o=a.o,this.g=a.g,Ea(this,a.s),this.l=a.l;var d=a.i,p=new Is;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),lm(this,p),this.m=a.m}else a&&(d=String(a).match(am))?(this.h=!1,wa(this,d[1]||"",!0),this.o=xs(d[2]||""),this.g=xs(d[3]||"",!0),Ea(this,d[4]),this.l=xs(d[5]||"",!0),lm(this,d[6]||"",!0),this.m=xs(d[7]||"")):(this.h=!1,this.i=new Is(null,this.h))}Cr.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Ts(d,um,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Ts(d,um,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Ts(p,p.charAt(0)=="/"?Gx:Kx,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Ts(p,Yx)),a.join("")};function fn(a){return new Cr(a)}function wa(a,d,p){a.j=p?xs(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ea(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function lm(a,d,p){d instanceof Is?(a.i=d,Xx(a.i,a.h)):(p||(d=Ts(d,Qx)),a.i=new Is(d,a.h))}function pe(a,d,p){a.i.set(d,p)}function xa(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function xs(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ts(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,Hx),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Hx(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var um=/[#\/\?@]/g,Kx=/[#\?:]/g,Gx=/[#\?]/g,Qx=/[#\?@]/g,Yx=/#/g;function Is(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Un(a){a.g||(a.g=new Map,a.h=0,a.i&&qx(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Is.prototype,t.add=function(a,d){Un(this),this.i=null,a=li(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function cm(a,d){Un(a),d=li(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function dm(a,d){return Un(a),d=li(a,d),a.g.has(d)}t.forEach=function(a,d){Un(this),this.g.forEach(function(p,v){p.forEach(function(N){a.call(d,N,v,this)},this)},this)},t.na=function(){Un(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let v=0;v<d.length;v++){const N=a[v];for(let M=0;M<N.length;M++)p.push(d[v])}return p},t.V=function(a){Un(this);let d=[];if(typeof a=="string")dm(this,a)&&(d=d.concat(this.g.get(li(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)d=d.concat(a[p])}return d},t.set=function(a,d){return Un(this),this.i=null,a=li(this,a),dm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function hm(a,d,p){cm(a,d),0<p.length&&(a.i=null,a.g.set(li(a,d),P(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var v=d[p];const M=encodeURIComponent(String(v)),z=this.V(v);for(v=0;v<z.length;v++){var N=M;z[v]!==""&&(N+="="+encodeURIComponent(String(z[v]))),a.push(N)}}return this.i=a.join("&")};function li(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Xx(a,d){d&&!a.j&&(Un(a),a.i=null,a.g.forEach(function(p,v){var N=v.toLowerCase();v!=N&&(cm(this,v),hm(this,N,p))},a)),a.j=d}function Jx(a,d){const p=new ws;if(l.Image){const v=new Image;v.onload=T(zn,p,"TestLoadImage: loaded",!0,d,v),v.onerror=T(zn,p,"TestLoadImage: error",!1,d,v),v.onabort=T(zn,p,"TestLoadImage: abort",!1,d,v),v.ontimeout=T(zn,p,"TestLoadImage: timeout",!1,d,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function Zx(a,d){const p=new ws,v=new AbortController,N=setTimeout(()=>{v.abort(),zn(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(M=>{clearTimeout(N),M.ok?zn(p,"TestPingServer: ok",!0,d):zn(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),zn(p,"TestPingServer: error",!1,d)})}function zn(a,d,p,v,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),v(p)}catch{}}function e1(){this.g=new Vx}function t1(a,d,p){const v=p||"";try{om(a,function(N,M){let z=N;c(N)&&(z=pc(N)),d.push(v+M+"="+encodeURIComponent(z))})}catch(N){throw d.push(v+"type="+encodeURIComponent("_badmap")),N}}function Ta(a){this.l=a.Ub||null,this.j=a.eb||!1}I(Ta,mc),Ta.prototype.g=function(){return new Ia(this.l,this.j)},Ta.prototype.i=function(a){return function(){return a}}({});function Ia(a,d){Qe.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Ia,Qe),t=Ia.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Ss(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ks(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ss(this)),this.g&&(this.readyState=3,Ss(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function fm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?ks(this):Ss(this),this.readyState==3&&fm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ks(this))},t.Qa=function(a){this.g&&(this.response=a,ks(this))},t.ga=function(){this.g&&ks(this)};function ks(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ss(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function Ss(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ia.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function pm(a){let d="";return V(a,function(p,v){d+=v,d+=":",d+=p,d+=`\r
`}),d}function kc(a,d,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=pm(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):pe(a,d,p))}function ke(a){Qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(ke,Qe);var n1=/^https?$/i,r1=["POST","PUT"];t=ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vc.g(),this.v=this.o?$p(this.o):$p(vc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(M){mm(this,M);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var N in v)p.set(N,v[N]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const M of v.keys())p.set(M,v.get(M));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(r1,d,void 0))||v||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,z]of p)this.g.setRequestHeader(M,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vm(this),this.u=!0,this.g.send(a),this.u=!1}catch(M){mm(this,M)}};function mm(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,gm(a),ka(a)}function gm(a){a.A||(a.A=!0,ot(a,"complete"),ot(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ot(this,"complete"),ot(this,"abort"),ka(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ka(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ym(this):this.bb())},t.bb=function(){ym(this)};function ym(a){if(a.h&&typeof o<"u"&&(!a.v[1]||pn(a)!=4||a.Z()!=2)){if(a.u&&pn(a)==4)Fp(a.Ea,0,a);else if(ot(a,"readystatechange"),pn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var v;if(v=z===0){var N=String(a.D).match(am)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),v=!n1.test(N?N.toLowerCase():"")}p=v}if(p)ot(a,"complete"),ot(a,"success");else{a.m=6;try{var M=2<pn(a)?a.g.statusText:""}catch{M=""}a.l=M+" ["+a.Z()+"]",gm(a)}}finally{ka(a)}}}}function ka(a,d){if(a.g){vm(a);const p=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||ot(a,"ready");try{p.onreadystatechange=v}catch{}}}function vm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function pn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Mx(d)}};function _m(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function i1(a){const d={};a=(a.g&&2<=pn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(w(a[v]))continue;var p=A(a[v]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=d[N]||[];d[N]=M,M.push(p)}_(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bs(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function wm(a){this.Aa=0,this.i=[],this.j=new ws,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bs("baseRetryDelayMs",5e3,a),this.cb=bs("retryDelaySeedMs",1e4,a),this.Wa=bs("forwardChannelMaxRetries",2,a),this.wa=bs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new tm(a&&a.concurrentRequestLimit),this.Da=new e1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=wm.prototype,t.la=8,t.G=1,t.connect=function(a,d,p,v){at(0),this.W=a,this.H=d||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=Pm(this,null,this.W),ba(this)};function Sc(a){if(Em(a),a.G==3){var d=a.U++,p=fn(a.I);if(pe(p,"SID",a.K),pe(p,"RID",d),pe(p,"TYPE","terminate"),As(a,p),d=new Fn(a,a.j,d),d.L=2,d.v=xa(fn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=d.v,p=!0),p||(d.g=Cm(d.j,null),d.g.ea(d.v)),d.F=Date.now(),_a(d)}Am(a)}function Sa(a){a.g&&(Ac(a),a.g.cancel(),a.g=null)}function Em(a){Sa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Aa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ba(a){if(!nm(a.h)&&!a.s){a.s=!0;var d=a.Ga;Lt||J(),B||(Lt(),B=!0),K.add(d,a),a.B=0}}function s1(a,d){return rm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=_s(g(a.Ga,a,d),bm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Fn(this,this.j,a);let M=this.o;if(this.S&&(M?(M=y(M),k(M,this.S)):M=this.S),this.m!==null||this.O||(N.H=M,M=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Tm(this,N,d),p=fn(this.I),pe(p,"RID",a),pe(p,"CVER",22),this.D&&pe(p,"X-HTTP-Session-Id",this.D),As(this,p),M&&(this.O?d="headers="+encodeURIComponent(String(pm(M)))+"&"+d:this.m&&kc(p,this.m,M)),Ic(this.h,N),this.Ua&&pe(p,"TYPE","init"),this.P?(pe(p,"$req",d),pe(p,"SID","null"),N.T=!0,wc(N,p,null)):wc(N,p,d),this.G=2}}else this.G==3&&(a?xm(this,a):this.i.length==0||nm(this.h)||xm(this))};function xm(a,d){var p;d?p=d.l:p=a.U++;const v=fn(a.I);pe(v,"SID",a.K),pe(v,"RID",p),pe(v,"AID",a.T),As(a,v),a.m&&a.o&&kc(v,a.m,a.o),p=new Fn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Tm(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ic(a.h,p),wc(p,v,d)}function As(a,d){a.H&&V(a.H,function(p,v){pe(d,v,p)}),a.l&&om({},function(p,v){pe(d,v,p)})}function Tm(a,d,p){p=Math.min(a.i.length,p);var v=a.l?g(a.l.Na,a.l,a):null;e:{var N=a.i;let M=-1;for(;;){const z=["count="+p];M==-1?0<p?(M=N[0].g,z.push("ofs="+M)):M=0:z.push("ofs="+M);let he=!0;for(let ze=0;ze<p;ze++){let ie=N[ze].g;const Ye=N[ze].map;if(ie-=M,0>ie)M=Math.max(0,N[ze].g-100),he=!1;else try{t1(Ye,z,"req"+ie+"_")}catch{v&&v(Ye)}}if(he){v=z.join("&");break e}}}return a=a.i.splice(0,p),d.D=a,v}function Im(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Lt||J(),B||(Lt(),B=!0),K.add(d,a),a.v=0}}function bc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=_s(g(a.Fa,a),bm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,km(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=_s(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Sa(this),km(this))};function Ac(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function km(a){a.g=new Fn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=fn(a.qa);pe(d,"RID","rpc"),pe(d,"SID",a.K),pe(d,"AID",a.T),pe(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(d,"TO",a.ja),pe(d,"TYPE","xmlhttp"),As(a,d),a.m&&a.o&&kc(d,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=xa(fn(d)),p.m=null,p.P=!0,Jp(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Sa(this),bc(this),at(19))};function Aa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Sm(a,d){var p=null;if(a.g==d){Aa(a),Ac(a),a.g=null;var v=2}else if(Tc(a.h,d))p=d.D,im(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var N=a.B;v=ga(),ot(v,new Gp(v,p)),ba(a)}else Im(a);else if(N=d.s,N==3||N==0&&0<d.X||!(v==1&&s1(a,d)||v==2&&bc(a)))switch(p&&0<p.length&&(d=a.h,d.i=d.i.concat(p)),N){case 1:Rr(a,5);break;case 4:Rr(a,10);break;case 3:Rr(a,6);break;default:Rr(a,2)}}}function bm(a,d){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*d}function Rr(a,d){if(a.j.info("Error code "+d),d==2){var p=g(a.fb,a),v=a.Xa;const N=!v;v=new Cr(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||wa(v,"https"),xa(v),N?Jx(v.toString(),p):Zx(v.toString(),p)}else at(2);a.G=0,a.l&&a.l.sa(d),Am(a),Em(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function Am(a){if(a.G=0,a.ka=[],a.l){const d=sm(a.h);(d.length!=0||a.i.length!=0)&&(C(a.ka,d),C(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Pm(a,d,p){var v=p instanceof Cr?fn(p):new Cr(p);if(v.g!="")d&&(v.g=d+"."+v.g),Ea(v,v.s);else{var N=l.location;v=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var M=new Cr(null);v&&wa(M,v),d&&(M.g=d),N&&Ea(M,N),p&&(M.l=p),v=M}return p=a.D,d=a.ya,p&&d&&pe(v,p,d),pe(v,"VER",a.la),As(a,v),v}function Cm(a,d,p){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new ke(new Ta({eb:p})):new ke(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rm(){}t=Rm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Pa(){}Pa.prototype.g=function(a,d){return new _t(a,d)};function _t(a,d){Qe.call(this),this.g=new wm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!w(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new ui(this)}I(_t,Qe),_t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){Sc(this.g)},_t.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=pc(a),a=p);d.i.push(new Bx(d.Ya++,a)),d.G==3&&ba(d)},_t.prototype.N=function(){this.g.l=null,delete this.j,Sc(this.g),delete this.g,_t.aa.N.call(this)};function Nm(a){gc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}I(Nm,gc);function Dm(){yc.call(this),this.status=1}I(Dm,yc);function ui(a){this.g=a}I(ui,Rm),ui.prototype.ua=function(){ot(this.g,"a")},ui.prototype.ta=function(a){ot(this.g,new Nm(a))},ui.prototype.sa=function(a){ot(this.g,new Dm)},ui.prototype.ra=function(){ot(this.g,"b")},Pa.prototype.createWebChannel=Pa.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,zw=function(){return new Pa},Uw=function(){return ga()},Fw=Ar,Eh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ya.NO_ERROR=0,ya.TIMEOUT=8,ya.HTTP_ERROR=6,yl=ya,Qp.COMPLETE="complete",jw=Qp,Wp.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",Qe.prototype.listen=Qe.prototype.K,Gs=Wp,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,Lw=ke}).apply(typeof Qa<"u"?Qa:typeof self<"u"?self:typeof window<"u"?window:{});const by="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new jf("@firebase/firestore");function Ls(){return Jr.logLevel}function q(t,...e){if(Jr.logLevel<=te.DEBUG){const n=e.map(Yf);Jr.debug(`Firestore (${hs}): ${t}`,...n)}}function Nn(t,...e){if(Jr.logLevel<=te.ERROR){const n=e.map(Yf);Jr.error(`Firestore (${hs}): ${t}`,...n)}}function Xi(t,...e){if(Jr.logLevel<=te.WARN){const n=e.map(Yf);Jr.warn(`Firestore (${hs}): ${t}`,...n)}}function Yf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: `+t;throw Nn(e),new Error(e)}function ue(t,e){t||Q()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class NP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DP{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new kn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new Bw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new tt(e)}}class OP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class MP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new OP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class VP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ue(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.R=n.token,new VP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=jP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Ji(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Me(0,0))}static max(){return new Y(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Mo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends Mo{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const FP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Mo{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return FP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ge.fromString(e))}static fromName(e){return new H(ge.fromString(e).popFirst(5))}static empty(){return new H(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ge(e.slice()))}}function UP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new vr(i,H.empty(),e)}function zP(t){return new vr(t.readTime,t.key,-1)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(Y.min(),H.empty(),-1)}static max(){return new vr(Y.max(),H.empty(),-1)}}function BP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==$P)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++l,l===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function qP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ia(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Xf.oe=-1;function $u(t){return t==null}function nu(t){return t===0&&1/t==-1/0}function HP(t){return typeof t=="number"&&Number.isInteger(t)&&!nu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ii(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ww(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ya(this.root,e,this.comparator,!0)}}class Ya{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??$e.EMPTY,this.right=s??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Py(this.data.getIterator())}getIteratorFrom(e){return new Py(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Py{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new xt([])}unionWith(e){let n=new He(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ji(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new qw("Invalid base64 string: "+s):s}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const KP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(ue(!!t),typeof t=="string"){let e=0;const n=KP.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zr(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Zf(t){const e=t.mapValue.fields.__previous_value__;return Jf(e)?Zf(e):e}function Vo(t){const e=_r(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Lo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa={mapValue:{}};function ei(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jf(t)?4:YP(t)?9007199254740991:QP(t)?10:11:Q()}function on(t,e){if(t===e)return!0;const n=ei(t);if(n!==ei(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vo(t).isEqual(Vo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=_r(i.timestampValue),l=_r(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Zr(i.bytesValue).isEqual(Zr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?nu(o)===nu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ji(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ay(o)!==Ay(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!on(o[u],l[u])))return!1;return!0}(t,e);default:return Q()}}function jo(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function Zi(t,e){if(t===e)return 0;const n=ei(t),r=ei(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Cy(t.timestampValue,e.timestampValue);case 4:return Cy(Vo(t),Vo(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Zr(s),u=Zr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const h=se(l[c],u[c]);if(h!==0)return h}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(Ae(s.latitude),Ae(o.latitude));return l!==0?l:se(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ry(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,h;const m=s.fields||{},g=o.fields||{},T=(l=m.value)===null||l===void 0?void 0:l.arrayValue,I=(u=g.value)===null||u===void 0?void 0:u.arrayValue,P=se(((c=T==null?void 0:T.values)===null||c===void 0?void 0:c.length)||0,((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0);return P!==0?P:Ry(T,I)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Xa.mapValue&&o===Xa.mapValue)return 0;if(s===Xa.mapValue)return 1;if(o===Xa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let m=0;m<u.length&&m<h.length;++m){const g=se(u[m],h[m]);if(g!==0)return g;const T=Zi(l[u[m]],c[h[m]]);if(T!==0)return T}return se(u.length,h.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Cy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=_r(t),r=_r(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function Ry(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Zi(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function es(t){return xh(t)}function xh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=xh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${xh(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function Ny(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Th(t){return!!t&&"integerValue"in t}function ep(t){return!!t&&"arrayValue"in t}function Dy(t){return!!t&&"nullValue"in t}function Oy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vl(t){return!!t&&"mapValue"in t}function QP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function lo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ii(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=lo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=lo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=lo(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=lo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());vl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];vl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ii(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pt(lo(this.value))}}function Hw(t){const e=[];return ii(t.fields,(n,r)=>{const i=new We([n]);if(vl(r)){const s=Hw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new rt(e,0,Y.min(),Y.min(),Y.min(),pt.empty(),0)}static newFoundDocument(e,n,r,i){return new rt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new rt(e,2,n,Y.min(),Y.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,Y.min(),Y.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n){this.position=e,this.inclusive=n}}function My(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Zi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n="asc"){this.field=e,this.dir=n}}function XP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{}class Ne extends Kw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ZP(e,n,r):n==="array-contains"?new nC(e,r):n==="in"?new rC(e,r):n==="not-in"?new iC(e,r):n==="array-contains-any"?new sC(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new eC(e,r):new tC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zi(n,this.value)):n!==null&&ei(this.value)===ei(n)&&this.matchesComparison(Zi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends Kw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kt(e,n)}matches(e){return Gw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Gw(t){return t.op==="and"}function Qw(t){return JP(t)&&Gw(t)}function JP(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function Ih(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+es(t.value);if(Qw(t))return t.filters.map(e=>Ih(e)).join(",");{const e=t.filters.map(n=>Ih(n)).join(",");return`${t.op}(${e})`}}function Yw(t,e){return t instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&on(r.value,i.value)}(t,e):t instanceof Kt?function(r,i){return i instanceof Kt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Yw(o,i.filters[l]),!0):!1}(t,e):void Q()}function Xw(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${es(n.value)}`}(t):t instanceof Kt?function(n){return n.op.toString()+" {"+n.getFilters().map(Xw).join(" ,")+"}"}(t):"Filter"}class ZP extends Ne{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class eC extends Ne{constructor(e,n){super(e,"in",n),this.keys=Jw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tC extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=Jw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Jw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class nC extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ep(n)&&jo(n.arrayValue,this.value)}}class rC extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&jo(this.value.arrayValue,n)}}class iC extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!jo(this.value.arrayValue,n)}}class sC extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ep(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>jo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Ly(t,e=null,n=[],r=[],i=null,s=null,o=null){return new oC(t,e,n,r,i,s,o)}function tp(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ih(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),$u(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>es(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>es(r)).join(",")),e.ue=n}return e.ue}function np(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!XP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Yw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vy(t.startAt,e.startAt)&&Vy(t.endAt,e.endAt)}function kh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function aC(t,e,n,r,i,s,o,l){return new sa(t,e,n,r,i,s,o,l)}function rp(t){return new sa(t)}function jy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Zw(t){return t.collectionGroup!==null}function uo(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new He(We.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new iu(s,r))}),n.has(We.keyField().canonicalString())||e.ce.push(new iu(We.keyField(),r))}return e.ce}function rn(t){const e=X(t);return e.le||(e.le=lC(e,uo(t))),e.le}function lC(t,e){if(t.limitType==="F")return Ly(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new iu(i.field,s)});const n=t.endAt?new ru(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ru(t.startAt.position,t.startAt.inclusive):null;return Ly(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Sh(t,e){const n=t.filters.concat([e]);return new sa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function bh(t,e,n){return new sa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wu(t,e){return np(rn(t),rn(e))&&t.limitType===e.limitType}function eE(t){return`${tp(rn(t))}|lt:${t.limitType}`}function fi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Xw(i)).join(", ")}]`),$u(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>es(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>es(i)).join(",")),`Target(${r})`}(rn(t))}; limitType=${t.limitType})`}function qu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of uo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=My(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,uo(r),i)||r.endAt&&!function(o,l,u){const c=My(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,uo(r),i))}(t,e)}function uC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function tE(t){return(e,n)=>{let r=!1;for(const i of uo(t)){const s=cC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cC(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Zi(u,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ii(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Ww(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=new Ie(H.comparator);function Dn(){return dC}const nE=new Ie(H.comparator);function Qs(...t){let e=nE;for(const n of t)e=e.insert(n.key,n);return e}function rE(t){let e=nE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fr(){return co()}function iE(){return co()}function co(){return new fs(t=>t.toString(),(t,e)=>t.isEqual(e))}const hC=new Ie(H.comparator),fC=new He(H.comparator);function ee(...t){let e=fC;for(const n of t)e=e.add(n);return e}const pC=new He(se);function mC(){return pC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nu(e)?"-0":e}}function sE(t){return{integerValue:""+t}}function gC(t,e){return HP(e)?sE(e):ip(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(){this._=void 0}}function yC(t,e,n){return t instanceof su?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Jf(s)&&(s=Zf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Fo?aE(t,e):t instanceof Uo?lE(t,e):function(i,s){const o=oE(i,s),l=Fy(o)+Fy(i.Pe);return Th(o)&&Th(i.Pe)?sE(l):ip(i.serializer,l)}(t,e)}function vC(t,e,n){return t instanceof Fo?aE(t,e):t instanceof Uo?lE(t,e):n}function oE(t,e){return t instanceof ou?function(r){return Th(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class su extends Hu{}class Fo extends Hu{constructor(e){super(),this.elements=e}}function aE(t,e){const n=uE(e);for(const r of t.elements)n.some(i=>on(i,r))||n.push(r);return{arrayValue:{values:n}}}class Uo extends Hu{constructor(e){super(),this.elements=e}}function lE(t,e){let n=uE(e);for(const r of t.elements)n=n.filter(i=>!on(i,r));return{arrayValue:{values:n}}}class ou extends Hu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Fy(t){return Ae(t.integerValue||t.doubleValue)}function uE(t){return ep(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _C(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Fo&&i instanceof Fo||r instanceof Uo&&i instanceof Uo?Ji(r.elements,i.elements,on):r instanceof ou&&i instanceof ou?on(r.Pe,i.Pe):r instanceof su&&i instanceof su}(t.transform,e.transform)}class wC{constructor(e,n){this.version=e,this.transformResults=n}}class Dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _l(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ku{}function cE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sp(t.key,Dt.none()):new oa(t.key,t.data,Dt.none());{const n=t.data,r=pt.empty();let i=new He(We.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Sr(t.key,r,new xt(i.toArray()),Dt.none())}}function EC(t,e,n){t instanceof oa?function(i,s,o){const l=i.value.clone(),u=zy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(i,s,o){if(!_l(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=zy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(dE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ho(t,e,n,r){return t instanceof oa?function(s,o,l,u){if(!_l(s.precondition,o))return l;const c=s.value.clone(),h=By(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(s,o,l,u){if(!_l(s.precondition,o))return l;const c=By(s.fieldTransforms,u,o),h=o.data;return h.setAll(dE(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return _l(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function xC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=oE(r.transform,i||null);s!=null&&(n===null&&(n=pt.empty()),n.set(r.field,s))}return n||null}function Uy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ji(r,i,(s,o)=>_C(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oa extends Ku{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Sr extends Ku{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function dE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zy(t,e,n){const r=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,vC(o,l,n[i]))}return r}function By(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,yC(s,o,e))}return r}class sp extends Ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TC extends Ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&EC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ho(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ho(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=iE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=cE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Ji(this.mutations,e.mutations,(n,r)=>Uy(n,r))&&Ji(this.baseMutations,e.baseMutations,(n,r)=>Uy(n,r))}}class op{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length);let i=function(){return hC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new op(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,ne;function bC(t){switch(t){default:return Q();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function hE(t){if(t===void 0)return Nn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ce.OK:return L.OK;case Ce.CANCELLED:return L.CANCELLED;case Ce.UNKNOWN:return L.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return L.INTERNAL;case Ce.UNAVAILABLE:return L.UNAVAILABLE;case Ce.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ce.NOT_FOUND:return L.NOT_FOUND;case Ce.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ce.ABORTED:return L.ABORTED;case Ce.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ce.DATA_LOSS:return L.DATA_LOSS;default:return Q()}}(ne=Ce||(Ce={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=new Br([4294967295,4294967295],0);function $y(t){const e=AC().encode(t),n=new Vw;return n.update(e),new Uint8Array(n.digest())}function Wy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Br([n,r],0),new Br([i,s],0)]}class ap{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ys(`Invalid padding: ${n}`);if(r<0)throw new Ys(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ys(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ys(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Br.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Br.fromNumber(r)));return i.compare(PC)===1&&(i=new Br([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=$y(e),[r,i]=Wy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ap(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=$y(e),[r,i]=Wy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ys extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,aa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Gu(Y.min(),i,new Ie(se),Dn(),ee())}}class aa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new aa(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class fE{constructor(e,n){this.targetId=e,this.me=n}}class pE{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class qy{constructor(){this.fe=0,this.ge=Ky(),this.pe=Ge.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new aa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ky()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class CC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Dn(),this.qe=Hy(),this.Qe=new Ie(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(kh(s))if(r===0){const o=new H(s.path);this.Ue(n,o,rt.newNoDocument(o,Y.min()))}else ue(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Zr(r).toUint8Array()}catch(u){if(u instanceof qw)return Xi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ap(o,i,s)}catch(u){return Xi(u instanceof Ys?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&kh(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,rt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Gu(e,n,this.Qe,this.ke,r);return this.ke=Dn(),this.qe=Hy(),this.Qe=new Ie(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new qy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new He(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new qy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Hy(){return new Ie(H.comparator)}function Ky(){return new Ie(H.comparator)}const RC={asc:"ASCENDING",desc:"DESCENDING"},NC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DC={and:"AND",or:"OR"};class OC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ah(t,e){return t.useProto3Json||$u(e)?e:{value:e}}function au(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MC(t,e){return au(t,e.toTimestamp())}function sn(t){return ue(!!t),Y.fromTimestamp(function(n){const r=_r(n);return new Me(r.seconds,r.nanos)}(t))}function lp(t,e){return Ph(t,e).canonicalString()}function Ph(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function gE(t){const e=ge.fromString(t);return ue(EE(e)),e}function Ch(t,e){return lp(t.databaseId,e.path)}function cd(t,e){const n=gE(e);if(n.get(1)!==t.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(vE(n))}function yE(t,e){return lp(t.databaseId,e)}function VC(t){const e=gE(t);return e.length===4?ge.emptyPath():vE(e)}function Rh(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function vE(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gy(t,e,n){return{name:Ch(t,e),fields:n.value.mapValue.fields}}function LC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(ue(h===void 0||typeof h=="string"),Ge.fromBase64String(h||"")):(ue(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Ge.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const h=c.code===void 0?L.UNKNOWN:hE(c.code);return new W(h,c.message||"")}(o);n=new pE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=cd(t,r.document.name),s=sn(r.document.updateTime),o=r.document.createTime?sn(r.document.createTime):Y.min(),l=new pt({mapValue:{fields:r.document.fields}}),u=rt.newFoundDocument(i,s,o,l),c=r.targetIds||[],h=r.removedTargetIds||[];n=new wl(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=cd(t,r.document),s=r.readTime?sn(r.readTime):Y.min(),o=rt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new wl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=cd(t,r.document),s=r.removedTargetIds||[];n=new wl([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new SC(i,s),l=r.targetId;n=new fE(l,o)}}return n}function jC(t,e){let n;if(e instanceof oa)n={update:Gy(t,e.key,e.value)};else if(e instanceof sp)n={delete:Ch(t,e.key)};else if(e instanceof Sr)n={update:Gy(t,e.key,e.data),updateMask:KC(e.fieldMask)};else{if(!(e instanceof TC))return Q();n={verify:Ch(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof su)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ou)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:MC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function FC(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?sn(i.updateTime):sn(s);return o.isEqual(Y.min())&&(o=sn(s)),new wC(o,i.transformResults||[])}(n,e))):[]}function UC(t,e){return{documents:[yE(t,e.path)]}}function zC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=yE(t,i);const s=function(c){if(c.length!==0)return wE(Kt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(g){return{field:pi(g.field),direction:WC(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ah(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function BC(t){let e=VC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(m){const g=_E(m);return g instanceof Kt&&Qw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(I){return new iu(mi(I.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,$u(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,T=m.values||[];return new ru(T,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,T=m.values||[];return new ru(T,g)}(n.endAt)),aC(e,i,o,s,l,"F",u,c)}function $C(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function _E(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=mi(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=mi(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=mi(n.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mi(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(mi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kt.create(n.compositeFilter.filters.map(r=>_E(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function WC(t){return RC[t]}function qC(t){return NC[t]}function HC(t){return DC[t]}function pi(t){return{fieldPath:t.canonicalString()}}function mi(t){return We.fromServerFormat(t.fieldPath)}function wE(t){return t instanceof Ne?function(n){if(n.op==="=="){if(Oy(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NAN"}};if(Dy(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Oy(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NOT_NAN"}};if(Dy(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pi(n.field),op:qC(n.op),value:n.value}}}(t):t instanceof Kt?function(n){const r=n.getFilters().map(i=>wE(i));return r.length===1?r[0]:{compositeFilter:{op:HC(n.op),filters:r}}}(t):Q()}function KC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function EE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.ct=e}}function QC(t){const e=BC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(){this.un=new XC}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(vr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class XC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new He(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new He(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ts(0)}static kn(){return new ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(){this.changes=new fs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ho(r.mutation,i,xt.empty(),Me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Fr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Qs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Dn();const o=co(),l=function(){return co()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Sr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),ho(h.mutation,c,h.mutation.getFieldMask(),Me.now())):o.set(c.key,xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var m;return l.set(c,new ZC(h,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=co();let i=new Ie((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||xt.empty();h=l.applyToLocalView(c,h),r.set(u,h);const m=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,h=u.value,m=iE();h.forEach(g=>{if(!s.has(g)){const T=cE(n.get(g),r.get(g));T!==null&&m.set(g,T),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Zw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(Fr());let l=-1,u=s;return o.next(c=>j.forEach(c,(h,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ee())).next(h=>({batchId:l,changes:rE(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Qs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Qs();return this.indexManager.getCollectionParents(e,s).next(l=>j.forEach(l,u=>{const c=function(m,g){return new sa(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,rt.newInvalidDocument(h)))});let l=Qs();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&ho(h.mutation,c,xt.empty(),Me.now()),qu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:sn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:QC(i.bundledQuery),readTime:sn(i.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(){this.overlays=new Ie(H.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fr();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=Fr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Fr(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const l=Fr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>l.set(c,h)),!(l.size()>=i)););return j.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new kC(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(){this.Tr=new He(je.Er),this.dr=new He(je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new je(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new je(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new ge([])),r=new je(n,e),i=new je(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new ge([])),r=new je(n,e),i=new je(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new je(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new He(je.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new IC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new je(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),i=new je(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(se);return n.forEach(i=>{const s=new je(i,0),o=new je(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new je(new H(s),0);let l=new He(se);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),j.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,i=>{const s=new je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new je(n,0),i=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.Mr=e,this.docs=function(){return new Ie(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():rt.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Dn();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||BP(zP(h),r)<=0||(i.has(h.key)||qu(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oR(this)}getSize(e){return j.resolve(this.size)}}class oR extends JC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.persistence=e,this.Nr=new fs(n=>tp(n),np),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new up,this.targetCount=0,this.kr=ts.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ts(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Xf(0),this.Kr=!1,this.Kr=!0,this.$r=new rR,this.referenceDelegate=e(this),this.Ur=new aR(this),this.indexManager=new YC,this.remoteDocumentCache=function(i){return new sR(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new GC(n),this.Gr=new tR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new iR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new uR(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class uR extends WP{constructor(e){super(),this.currentSequenceNumber=e}}class cp{constructor(e){this.persistence=e,this.Jr=new up,this.Yr=null}static Zr(e){return new cp(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new dp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return tS()?8:qP(st())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new cR;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ls()<=te.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",fi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(Ls()<=te.DEBUG&&q("QueryEngine","Query:",fi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ls()<=te.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",fi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(n))):j.resolve())}Yi(e,n){if(jy(n))return j.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bh(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,bh(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return jy(n)||i.isEqual(Y.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?j.resolve(null):(Ls()<=te.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fi(n)),this.rs(e,o,n,UP(i,-1)).next(l=>l))})}ts(e,n){let r=new He(tE(e));return n.forEach((i,s)=>{qu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ls()<=te.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",fi(n)),this.Ji.getDocumentsMatchingQuery(e,n,vr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ie(se),this._s=new fs(s=>tp(s),np),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function fR(t,e,n,r){return new hR(t,e,n,r)}async function xE(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){l.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function pR(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,h){const m=c.batch,g=m.keys();let T=j.resolve();return g.forEach(I=>{T=T.next(()=>h.getEntry(u,I)).next(P=>{const C=c.docVersions.get(I);ue(C!==null),P.version.compareTo(C)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),h.addEntry(P)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function TE(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function mR(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((h,m)=>{const g=i.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,m)));let T=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?T=T.withResumeToken(Ge.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):h.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(h.resumeToken,r)),i=i.insert(m,T),function(P,C,x){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,T,h)&&l.push(n.Ur.updateTargetData(s,T))});let u=Dn(),c=ee();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),l.push(gR(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(Y.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(h)}return j.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function gR(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Dn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function yR(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vR(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Nh(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ia(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Qy(t,e,n){const r=X(t);let i=Y.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const m=X(u),g=m._s.get(h);return g!==void 0?j.resolve(m.os.get(g)):m.Ur.getTargetData(c,h)}(r,o,rn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ee())).next(l=>(_R(r,uC(e),l),{documents:l,Ts:s})))}function _R(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Yy{constructor(){this.activeTargetIds=mC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wR{constructor(){this.so=new Yy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Yy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ja=null;function dd(){return Ja===null?Ja=function(){return 268435456+Math.round(2147483648*Math.random())}():Ja++,"0x"+Ja.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="WebChannelConnection";class IR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=dd(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(q("RestConnection",`Received RPC '${n}' ${l}: `,h),h),h=>{throw Xi("RestConnection",`RPC '${n}' ${l} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=xR[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=dd();return new Promise((o,l)=>{const u=new Lw;u.setWithCredentials(!0),u.listenOnce(jw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case yl.NO_ERROR:const h=u.getResponseJson();q(et,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case yl.TIMEOUT:q(et,`RPC '${e}' ${s} timed out`),l(new W(L.DEADLINE_EXCEEDED,"Request time out"));break;case yl.HTTP_ERROR:const m=u.getStatus();if(q(et,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const T=g==null?void 0:g.error;if(T&&T.status&&T.message){const I=function(C){const x=C.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(x)>=0?x:L.UNKNOWN}(T.status);l(new W(I,T.message))}else l(new W(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(L.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{q(et,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(et,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=dd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=zw(),l=Uw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");q(et,`Creating RPC '${e}' stream ${i}: ${h}`,u);const m=o.createWebChannel(h,u);let g=!1,T=!1;const I=new TR({Io:C=>{T?q(et,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(g||(q(et,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),q(et,`RPC '${e}' stream ${i} sending:`,C),m.send(C))},To:()=>m.close()}),P=(C,x,w)=>{C.listen(x,b=>{try{w(b)}catch(D){setTimeout(()=>{throw D},0)}})};return P(m,Gs.EventType.OPEN,()=>{T||(q(et,`RPC '${e}' stream ${i} transport opened.`),I.yo())}),P(m,Gs.EventType.CLOSE,()=>{T||(T=!0,q(et,`RPC '${e}' stream ${i} transport closed`),I.So())}),P(m,Gs.EventType.ERROR,C=>{T||(T=!0,Xi(et,`RPC '${e}' stream ${i} transport errored:`,C),I.So(new W(L.UNAVAILABLE,"The operation could not be completed")))}),P(m,Gs.EventType.MESSAGE,C=>{var x;if(!T){const w=C.data[0];ue(!!w);const b=w,D=b.error||((x=b[0])===null||x===void 0?void 0:x.error);if(D){q(et,`RPC '${e}' stream ${i} received error:`,D);const F=D.status;let V=function(E){const k=Ce[E];if(k!==void 0)return hE(k)}(F),_=D.message;V===void 0&&(V=L.INTERNAL,_="Unknown error status: "+F+" with message "+D.message),T=!0,I.So(new W(V,_)),m.close()}else q(et,`RPC '${e}' stream ${i} received:`,w),I.bo(w)}}),P(l,Fw.STAT_EVENT,C=>{C.stat===Eh.PROXY?q(et,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Eh.NOPROXY&&q(et,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function hd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t){return new OC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new IE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kR extends kE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=LC(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?sn(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Rh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=kh(u)?{documents:UC(s,u)}:{query:zC(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=mE(s,o.resumeToken);const c=Ah(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=au(s,o.snapshotVersion.toTimestamp());const c=Ah(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=$C(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Rh(this.serializer),n.removeTarget=e,this.a_(n)}}class SR extends kE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=FC(e.writeResults,e.commitTime),r=sn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Rh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>jC(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ph(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ph(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class AR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Nn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{si(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=X(u);c.L_.add(4),await la(c),c.q_.set("Unknown"),c.L_.delete(4),await Yu(c)}(this))})}),this.q_=new AR(r,i)}}async function Yu(t){if(si(t))for(const e of t.B_)await e(!0)}async function la(t){for(const e of t.B_)await e(!1)}function SE(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),mp(n)?pp(n):ps(n).r_()&&fp(n,e))}function hp(t,e){const n=X(t),r=ps(n);n.N_.delete(e),r.r_()&&bE(n,e),n.N_.size===0&&(r.r_()?r.o_():si(n)&&n.q_.set("Unknown"))}function fp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ps(t).A_(e)}function bE(t,e){t.Q_.xe(e),ps(t).R_(e)}function pp(t){t.Q_=new CC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ps(t).start(),t.q_.v_()}function mp(t){return si(t)&&!ps(t).n_()&&t.N_.size>0}function si(t){return X(t).L_.size===0}function AE(t){t.Q_=void 0}async function CR(t){t.q_.set("Online")}async function RR(t){t.N_.forEach((e,n)=>{fp(t,e)})}async function NR(t,e){AE(t),mp(t)?(t.q_.M_(e),pp(t)):t.q_.set("Unknown")}async function DR(t,e,n){if(t.q_.set("Online"),e instanceof pE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lu(t,r)}else if(e instanceof wl?t.Q_.Ke(e):e instanceof fE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await TE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(Ge.EMPTY_BYTE_STRING,h.snapshotVersion)),bE(s,u);const m=new nr(h.target,u,c,h.sequenceNumber);fp(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await lu(t,r)}}async function lu(t,e,n){if(!ia(e))throw e;t.L_.add(1),await la(t),t.q_.set("Offline"),n||(n=()=>TE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Yu(t)})}function PE(t,e){return e().catch(n=>lu(t,n,e))}async function Xu(t){const e=X(t),n=wr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;OR(e);)try{const i=await yR(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,MR(e,i)}catch(i){await lu(e,i)}CE(e)&&RE(e)}function OR(t){return si(t)&&t.O_.length<10}function MR(t,e){t.O_.push(e);const n=wr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function CE(t){return si(t)&&!wr(t).n_()&&t.O_.length>0}function RE(t){wr(t).start()}async function VR(t){wr(t).p_()}async function LR(t){const e=wr(t);for(const n of t.O_)e.m_(n.mutations)}async function jR(t,e,n){const r=t.O_.shift(),i=op.from(r,e,n);await PE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xu(t)}async function FR(t,e){e&&wr(t).V_&&await async function(r,i){if(function(o){return bC(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();wr(r).s_(),await PE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Xu(r)}}(t,e),CE(t)&&RE(t)}async function Jy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=si(n);n.L_.add(3),await la(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Yu(n)}async function UR(t,e){const n=X(t);e?(n.L_.delete(2),await Yu(n)):e||(n.L_.add(2),await la(n),n.q_.set("Unknown"))}function ps(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new kR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:CR.bind(null,t),Ro:RR.bind(null,t),mo:NR.bind(null,t),d_:DR.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),mp(t)?pp(t):t.q_.set("Unknown")):(await t.K_.stop(),AE(t))})),t.K_}function wr(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new SR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:VR.bind(null,t),mo:FR.bind(null,t),f_:LR.bind(null,t),g_:jR.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Xu(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new gp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yp(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),ia(t))return new W(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Qs(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new ji(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ji)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.W_=new Ie(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ns{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ns(e,n,ji.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class BR{constructor(){this.queries=ev(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=ev(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(L.ABORTED,"Firestore shutting down"))}}function ev(){return new fs(t=>eE(t),Wu)}async function NE(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new zR,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=yp(o,`Initialization of query '${fi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&vp(n)}async function DE(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function $R(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&vp(n)}function WR(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function vp(t){t.Y_.forEach(e=>{e.next()})}var Dh,tv;(tv=Dh||(Dh={})).ea="default",tv.Cache="cache";class OE{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Dh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e){this.key=e}}class VE{constructor(e){this.key=e}}class qR{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=tE(e),this.Ra=new ji(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Zy,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,m)=>{const g=i.get(h),T=qu(this.query,m)?m:null,I=!!g&&this.mutatedKeys.has(g.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let C=!1;g&&T?g.data.isEqual(T.data)?I!==P&&(r.track({type:3,doc:T}),C=!0):this.ga(g,T)||(r.track({type:2,doc:T}),C=!0,(u&&this.Aa(T,u)>0||c&&this.Aa(T,c)<0)&&(l=!0)):!g&&T?(r.track({type:0,doc:T}),C=!0):g&&!T&&(r.track({type:1,doc:g}),C=!0,(u||c)&&(l=!0)),C&&(T?(o=o.add(T),s=P?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,m)=>function(T,I){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return P(T)-P(I)}(h.type,m.type)||this.Aa(h.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new ns(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Zy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new VE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new ME(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ns.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class HR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class KR{constructor(e){this.key=e,this.va=!1}}class GR{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new fs(l=>eE(l),Wu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ie(H.comparator),this.Na=new Map,this.La=new up,this.Ba={},this.ka=new Map,this.qa=ts.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function QR(t,e,n=!0){const r=BE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await LE(r,e,n,!0),i}async function YR(t,e){const n=BE(t);await LE(n,e,!0,!1)}async function LE(t,e,n,r){const i=await vR(t.localStore,rn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await XR(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&SE(t.remoteStore,i),l}async function XR(t,e,n,r,i){t.Ka=(m,g,T)=>async function(P,C,x,w){let b=C.view.ma(x);b.ns&&(b=await Qy(P.localStore,C.query,!1).then(({documents:_})=>C.view.ma(_,b)));const D=w&&w.targetChanges.get(C.targetId),F=w&&w.targetMismatches.get(C.targetId)!=null,V=C.view.applyChanges(b,P.isPrimaryClient,D,F);return rv(P,C.targetId,V.wa),V.snapshot}(t,m,g,T);const s=await Qy(t.localStore,e,!0),o=new qR(e,s.Ts),l=o.ma(s.documents),u=aa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);rv(t,n,c.wa);const h=new HR(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function JR(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Wu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Nh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&hp(r.remoteStore,i.targetId),Oh(r,i.targetId)}).catch(ra)):(Oh(r,i.targetId),await Nh(r.localStore,i.targetId,!0))}async function ZR(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),hp(n.remoteStore,r.targetId))}async function e2(t,e,n){const r=a2(t);try{const i=await function(o,l){const u=X(o),c=Me.now(),h=l.reduce((T,I)=>T.add(I.key),ee());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let I=Dn(),P=ee();return u.cs.getEntries(T,h).next(C=>{I=C,I.forEach((x,w)=>{w.isValidDocument()||(P=P.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,I)).next(C=>{m=C;const x=[];for(const w of l){const b=xC(w,m.get(w.key).overlayedDocument);b!=null&&x.push(new Sr(w.key,b,Hw(b.value.mapValue),Dt.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,x,l)}).next(C=>{g=C;const x=C.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(T,C.batchId,x)})}).then(()=>({batchId:g.batchId,changes:rE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ie(se)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await ua(r,i.changes),await Xu(r.remoteStore)}catch(i){const s=yp(i,"Failed to persist write");n.reject(s)}}async function jE(t,e){const n=X(t);try{const r=await mR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ue(o.va):i.removedDocuments.size>0&&(ue(o.va),o.va=!1))}),await ua(n,r,e)}catch(r){await ra(r)}}function nv(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((h,m)=>{for(const g of m.j_)g.Z_(l)&&(c=!0)}),c&&vp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function t2(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ie(H.comparator);o=o.insert(s,rt.newNoDocument(s,Y.min()));const l=ee().add(s),u=new Gu(Y.min(),new Map,new Ie(se),o,l);await jE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),_p(r)}else await Nh(r.localStore,e,!1).then(()=>Oh(r,e,n)).catch(ra)}async function n2(t,e){const n=X(t),r=e.batch.batchId;try{const i=await pR(n.localStore,e);UE(n,r,null),FE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ua(n,i)}catch(i){await ra(i)}}async function r2(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(ue(m!==null),h=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);UE(r,e,n),FE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ua(r,i)}catch(i){await ra(i)}}function FE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function UE(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Oh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||zE(t,r)})}function zE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(hp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),_p(t))}function rv(t,e,n){for(const r of n)r instanceof ME?(t.La.addReference(r.key,e),i2(t,r)):r instanceof VE?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||zE(t,r.key)):Q()}function i2(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),_p(t))}function _p(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(ge.fromString(e)),r=t.qa.next();t.Na.set(r,new KR(n)),t.Oa=t.Oa.insert(n,r),SE(t.remoteStore,new nr(rn(rp(n.path)),r,"TargetPurposeLimboResolution",Xf.oe))}}async function ua(t,e,n){const r=X(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=dp.Wi(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=X(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>j.forEach(c,g=>j.forEach(g.$i,T=>h.persistence.referenceDelegate.addReference(m,g.targetId,T)).next(()=>j.forEach(g.Ui,T=>h.persistence.referenceDelegate.removeReference(m,g.targetId,T)))))}catch(m){if(!ia(m))throw m;q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const T=h.os.get(g),I=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(I);h.os=h.os.insert(g,P)}}}(r.localStore,s))}async function s2(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await xE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ua(n,r.hs)}}function o2(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function BE(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=o2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=t2.bind(null,e),e.Ca.d_=$R.bind(null,e.eventManager),e.Ca.$a=WR.bind(null,e.eventManager),e}function a2(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=n2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=r2.bind(null,e),e}class uu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return fR(this.persistence,new dR,e.initialUser,this.serializer)}Ga(e){return new lR(cp.Zr,this.serializer)}Wa(e){return new wR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uu.provider={build:()=>new uu};class Mh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>nv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=s2.bind(null,this.syncEngine),await UR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new BR}()}createDatastore(e){const n=Qu(e.databaseInfo.databaseId),r=function(s){return new IR(s)}(e.databaseInfo);return function(s,o,l,u){return new bR(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new PR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>nv(this.syncEngine,n,0),function(){return Xy.D()?new Xy:new ER}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,h){const m=new GR(i,s,o,l,u,c);return h&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await la(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Mh.provider={build:()=>new Mh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=$w.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=yp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fd(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await xE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function iv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await u2(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Jy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Jy(e.remoteStore,i)),t._onlineComponents=e}async function u2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await fd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Xi("Error using user provided cache. Falling back to memory cache: "+n),await fd(t,new uu)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await fd(t,new uu);return t._offlineComponents}async function WE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await iv(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await iv(t,new Mh))),t._onlineComponents}function c2(t){return WE(t).then(e=>e.syncEngine)}async function qE(t){const e=await WE(t),n=e.eventManager;return n.onListen=QR.bind(null,e.syncEngine),n.onUnlisten=JR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=YR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ZR.bind(null,e.syncEngine),n}function d2(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const h=new $E({next:g=>{h.Za(),o.enqueueAndForget(()=>DE(s,m));const T=g.docs.has(l);!T&&g.fromCache?c.reject(new W(L.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&g.fromCache&&u&&u.source==="server"?c.reject(new W(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new OE(rp(l.path),h,{includeMetadataChanges:!0,_a:!0});return NE(s,m)}(await qE(t),t.asyncQueue,e,n,r)),r.promise}function h2(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const h=new $E({next:g=>{h.Za(),o.enqueueAndForget(()=>DE(s,m)),g.fromCache&&u.source==="server"?c.reject(new W(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new OE(l,h,{includeMetadataChanges:!0,_a:!0});return NE(s,m)}(await qE(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(t,e,n){if(!n)throw new W(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function f2(t,e,n,r){if(e===!0&&r===!0)throw new W(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ov(t){if(!H.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function av(t){if(H.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ju(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ju(t);throw new W(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}f2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=HE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new RP;switch(r.type){case"firstParty":return new MP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=sv.get(n);r&&(q("ComponentProvider","Removing Datastore"),sv.delete(n),r.terminate())}(this),Promise.resolve()}}function p2(t,e,n,r={}){var i;const s=(t=Gt(t,Zu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Xi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=tt.MOCK_USER;else{l=Gk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new tt(c)}t._authCredentials=new NP(new Bw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ms(this.firestore,e,this._query)}}class ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class mr extends ms{constructor(e,n,r){super(e,n,rp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new H(e))}withConverter(e){return new mr(this.firestore,e,this._path)}}function ca(t,e,...n){if(t=Le(t),KE("collection","path",e),t instanceof Zu){const r=ge.fromString(e,...n);return av(r),new mr(t,null,r)}{if(!(t instanceof ct||t instanceof mr))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return av(r),new mr(t.firestore,null,r)}}function On(t,e,...n){if(t=Le(t),arguments.length===1&&(e=$w.newId()),KE("doc","path",e),t instanceof Zu){const r=ge.fromString(e,...n);return ov(r),new ct(t,null,new H(r))}{if(!(t instanceof ct||t instanceof mr))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return ov(r),new ct(t.firestore,t instanceof mr?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new IE(this,"async_queue_retry"),this.Vu=()=>{const r=hd();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=hd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=hd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new kn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ia(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Nn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=gp.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class oi extends Zu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new uv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new uv(e),this._firestoreClient=void 0,await e}}}function m2(t,e){const n=typeof t=="object"?t:X_(),r=typeof t=="string"?t:"(default)",i=Uf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Hk("firestore");s&&p2(i,...s)}return i}function wp(t){if(t._terminated)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||g2(t),t._firestoreClient}function g2(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,h){return new GP(l,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,HE(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new l2(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rs(Ge.fromBase64String(e))}catch(n){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rs(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=/^__.*__$/;class v2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new oa(e,this.data,n,this.fieldTransforms)}}class GE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function QE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Ip{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ip(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return cu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(QE(this.Cu)&&y2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class _2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qu(e)}Qu(e,n,r,i=!1){return new Ip({Cu:e,methodName:n,qu:r,path:We.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tc(t){const e=t._freezeSettings(),n=Qu(t._databaseId);return new _2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function YE(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);kp("Data must be an object, but it was:",o,r);const l=XE(r,o);let u,c;if(s.merge)u=new xt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const m of s.mergeFields){const g=Vh(e,m,n);if(!o.contains(g))throw new W(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);ZE(h,g)||h.push(g)}u=new xt(h),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new v2(new pt(l),u,c)}class nc extends Ep{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nc}}function w2(t,e,n,r){const i=t.Qu(1,e,n);kp("Data must be an object, but it was:",i,r);const s=[],o=pt.empty();ii(r,(u,c)=>{const h=Sp(e,u,n);c=Le(c);const m=i.Nu(h);if(c instanceof nc)s.push(h);else{const g=da(c,m);g!=null&&(s.push(h),o.set(h,g))}});const l=new xt(s);return new GE(o,l,i.fieldTransforms)}function E2(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Vh(e,r,n)],u=[i];if(s.length%2!=0)throw new W(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Vh(e,s[g])),u.push(s[g+1]);const c=[],h=pt.empty();for(let g=l.length-1;g>=0;--g)if(!ZE(c,l[g])){const T=l[g];let I=u[g];I=Le(I);const P=o.Nu(T);if(I instanceof nc)c.push(T);else{const C=da(I,P);C!=null&&(c.push(T),h.set(T,C))}}const m=new xt(c);return new GE(h,m,o.fieldTransforms)}function x2(t,e,n,r=!1){return da(n,t.Qu(r?4:3,e))}function da(t,e){if(JE(t=Le(t)))return kp("Unsupported field value:",e,t),XE(t,e);if(t instanceof Ep)return function(r,i){if(!QE(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=da(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Me.fromDate(r);return{timestampValue:au(i.serializer,s)}}if(r instanceof Me){const s=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:au(i.serializer,s)}}if(r instanceof xp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rs)return{bytesValue:mE(i.serializer,r._byteString)};if(r instanceof ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:lp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Tp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return ip(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Ju(r)}`)}(t,e)}function XE(t,e){const n={};return Ww(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ii(t,(r,i)=>{const s=da(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function JE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof xp||t instanceof rs||t instanceof ct||t instanceof Ep||t instanceof Tp)}function kp(t,e,n){if(!JE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ju(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Vh(t,e,n){if((e=Le(e))instanceof ec)return e._internalPath;if(typeof e=="string")return Sp(t,e);throw cu("Field path arguments must be of type string or ",t,!1,void 0,n)}const T2=new RegExp("[~\\*/\\[\\]]");function Sp(t,e,n){if(e.search(T2)>=0)throw cu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ec(...e.split("."))._internalPath}catch{throw cu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(L.INVALID_ARGUMENT,l+t+u)}function ZE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new I2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class I2 extends ex{data(){return super.data()}}function bp(t,e){return typeof e=="string"?Sp(t,e):e instanceof ec?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ap{}class S2 extends Ap{}function Pp(t,e,...n){let r=[];e instanceof Ap&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Cp).length,l=s.filter(u=>u instanceof rc).length;if(o>1||o>0&&l>0)throw new W(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class rc extends S2{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new rc(e,n,r)}_apply(e){const n=this._parse(e);return tx(e._query,n),new ms(e.firestore,e.converter,Sh(e._query,n))}_parse(e){const n=tc(e.firestore);return function(s,o,l,u,c,h,m){let g;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new W(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){dv(m,h);const T=[];for(const I of m)T.push(cv(u,s,I));g={arrayValue:{values:T}}}else g=cv(u,s,m)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||dv(m,h),g=x2(l,o,m,h==="in"||h==="not-in");return Ne.create(c,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function zo(t,e,n){const r=e,i=bp("where",t);return rc._create(i,r,n)}class Cp extends Ap{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)tx(o,u),o=Sh(o,u)}(e._query,n),new ms(e.firestore,e.converter,Sh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function cv(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new W(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zw(e)&&n.indexOf("/")!==-1)throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!H.isDocumentKey(r))throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ny(t,new H(r))}if(n instanceof ct)return Ny(t,n._key);throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ju(n)}.`)}function dv(t,e){if(!Array.isArray(t)||t.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tx(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class b2{convertValue(e,n="none"){switch(ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ii(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ae(o.doubleValue));return new Tp(s)}convertGeoPoint(e){return new xp(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vo(e));default:return null}}convertTimestamp(e){const n=_r(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);ue(EE(r));const i=new Lo(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Nn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rx extends ex{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new El(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class El extends rx{data(e={}){return super.data(e)}}class A2{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Xs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new El(this._firestore,this._userDataWriter,r.key,r,new Xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new El(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Xs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new El(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Xs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:P2(l.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function P2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(t){t=Gt(t,ct);const e=Gt(t.firestore,oi);return d2(wp(e),t._key).then(n=>N2(e,t,n))}class ix extends b2{constructor(e){super(),this.firestore=e}convertBytes(e){return new rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function ic(t){t=Gt(t,ms);const e=Gt(t.firestore,oi),n=wp(e),r=new ix(e);return k2(t._query),h2(n,t._query).then(i=>new A2(e,r,t,i))}function Rp(t,e,n){t=Gt(t,ct);const r=Gt(t.firestore,oi),i=nx(t.converter,e,n);return sc(r,[YE(tc(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Dt.none())])}function sx(t,e,n,...r){t=Gt(t,ct);const i=Gt(t.firestore,oi),s=tc(i);let o;return o=typeof(e=Le(e))=="string"||e instanceof ec?E2(s,"updateDoc",t._key,e,n,r):w2(s,"updateDoc",t._key,e),sc(i,[o.toMutation(t._key,Dt.exists(!0))])}function C2(t){return sc(Gt(t.firestore,oi),[new sp(t._key,Dt.none())])}function R2(t,e){const n=Gt(t.firestore,oi),r=On(t),i=nx(t.converter,e);return sc(n,[YE(tc(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Dt.exists(!1))]).then(()=>r)}function sc(t,e){return function(r,i){const s=new kn;return r.asyncQueue.enqueueAndForget(async()=>e2(await c2(r),i,s)),s.promise}(wp(t),e)}function N2(t,e,n){const r=n.docs.get(e._key),i=new ix(t);return new rx(t,i,e._key,r,new Xs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){hs=i})(cs),Qi(new Qr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new oi(new DP(r.getProvider("auth-internal")),new LP(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),pr(by,"4.7.3",e),pr(by,"4.7.3","esm2017")})();var D2="firebase",O2="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pr(D2,O2,"app");const M2={apiKey:"AIzaSyAcqBnNcZ29W1OF0uEQABzibEZYeq3Sc5M",authDomain:"medassist-fd155.firebaseapp.com",projectId:"medassist-fd155",storageBucket:"medassist-fd155.firebasestorage.app",messagingSenderId:"385109263502",appId:"1:385109263502:web:e2e8209b21973b62c375df",measurementId:"G-LT1G4PRE0D"},ox=Y_(M2),kt=m2(ox),ha=PP(ox),ax=O.createContext(null);function V2({children:t}){const[e,n]=O.useState(null),[r,i]=O.useState(null),[s,o]=O.useState(!0);O.useEffect(()=>{const u=yA(ha,async c=>{if(n(c),c)try{const h=On(kt,"users",c.uid),m=await Lh(h);m.exists()&&i(m.data())}catch(h){console.error("Error fetching user profile:",h)}else i(null);o(!1)});return()=>u()},[]);const l=async()=>{if(!e)return;const u=On(kt,"users",e.uid),c=await Lh(u);c.exists()&&i(c.data())};return f.jsx(ax.Provider,{value:{user:e,userProfile:r,loading:s,refreshProfile:l},children:t})}function ln(){return O.useContext(ax)}async function L2({name:t,email:e,password:n}){const r=await Iw(ha,e,n);return await kw(r.user,{displayName:t}),await Rp(On(kt,"users",r.user.uid),{uid:r.user.uid,name:t,email:e,role:"patient",createdAt:new Date().toISOString(),familyMembers:[]}),r.user}async function j2({name:t,email:e,password:n,patientEmail:r}){const i=await Iw(ha,e,n);return await kw(i.user,{displayName:t}),await Rp(On(kt,"users",i.user.uid),{uid:i.user.uid,name:t,email:e,role:"family",linkedPatientEmail:r||null,createdAt:new Date().toISOString()}),i.user}async function F2(t,e){return fA(ha,t,e)}async function U2(){return vA(ha)}/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var z2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),oe=(t,e)=>{const n=O.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...c},h)=>O.createElement("svg",{ref:h,...z2,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${B2(t)}`,l].join(" "),...c},[...e.map(([m,g])=>O.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=oe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=oe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=oe("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=oe("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=oe("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=oe("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=oe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=oe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=oe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=oe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=oe("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=oe("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=oe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=oe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=oe("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=oe("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=oe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=oe("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=oe("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=oe("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=oe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=oe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=oe("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=oe("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=oe("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=oe("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=oe("Syringe",[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=oe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=oe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=oe("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=oe("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=oe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function rN(){const[t,e]=O.useState(""),[n,r]=O.useState(""),[i,s]=O.useState(!1),[o,l]=O.useState(!1),[u,c]=O.useState(""),h=async m=>{m.preventDefault(),c(""),l(!0);try{await F2(t,n)}catch{c("Invalid email or password. Please try again.")}finally{l(!1)}};return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        .auth-page {
          min-height: 100vh;
          background: linear-gradient(160deg, var(--pink-100) 0%, var(--blue-50) 50%, var(--green-50) 100%);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 24px;
        }
        .auth-card {
          width: 100%; max-width: 400px;
          background: white;
          border-radius: var(--radius-xl);
          padding: 36px 28px;
          box-shadow: var(--shadow-lg);
          animation: scaleIn 0.35s ease;
        }
        .auth-logo {
          text-align: center;
          margin-bottom: 28px;
        }
        .logo-icon {
          width: 72px; height: 72px;
          background: linear-gradient(135deg, var(--pink-200), var(--blue-200));
          border-radius: 22px;
          display: flex; align-items: center; justify-content: center;
          font-size: 36px;
          margin: 0 auto 12px;
          box-shadow: 0 4px 16px rgba(249,168,212,0.4);
        }
        .logo-name {
          font-family: var(--font-display);
          font-size: 28px; font-weight: 800;
          background: linear-gradient(135deg, var(--pink-400), var(--blue-400));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .logo-tagline {
          font-size: 14px; color: var(--gray-400);
          font-weight: 500; margin-top: 4px;
        }
        .auth-title {
          font-size: 22px; font-weight: 800;
          color: var(--gray-800); margin-bottom: 20px;
        }
        .field { margin-bottom: 16px; }
        .field label {
          display: block;
          font-size: 13px; font-weight: 700;
          color: var(--gray-500);
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .input-wrap { position: relative; }
        .auth-input {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-sm);
          font-size: 16px; font-weight: 500;
          color: var(--gray-800);
          outline: none;
          transition: border-color 0.2s;
          background: var(--gray-50);
        }
        .auth-input:focus {
          border-color: var(--pink-300);
          background: white;
        }
        .eye-btn {
          position: absolute; right: 14px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          color: var(--gray-400); cursor: pointer;
        }
        .error-msg {
          background: var(--red-100);
          color: var(--red-500);
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 14px; font-weight: 600;
          margin-bottom: 16px;
        }
        .auth-btn {
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: var(--radius);
          background: linear-gradient(135deg, var(--pink-300), var(--pink-500));
          color: white;
          font-size: 17px; font-weight: 800;
          font-family: var(--font-body);
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(236,72,153,0.35);
          transition: all 0.2s;
          margin-top: 4px;
        }
        .auth-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(236,72,153,0.45); }
        .auth-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .auth-footer {
          text-align: center;
          margin-top: 20px;
          font-size: 14px; color: var(--gray-500); font-weight: 500;
        }
        .auth-link { color: var(--pink-500); font-weight: 700; text-decoration: none; }
        .auth-link:hover { text-decoration: underline; }
      `}),f.jsx("div",{className:"auth-page",children:f.jsxs("div",{className:"auth-card",children:[f.jsxs("div",{className:"auth-logo",children:[f.jsx("div",{className:"logo-icon",children:"💊"}),f.jsx("div",{className:"logo-name",children:"MedAssist"}),f.jsx("div",{className:"logo-tagline",children:"Your health companion"})]}),f.jsx("div",{className:"auth-title",children:"Welcome back 👋"}),u&&f.jsx("div",{className:"error-msg",children:u}),f.jsxs("form",{onSubmit:h,children:[f.jsxs("div",{className:"field",children:[f.jsx("label",{children:"Email"}),f.jsx("input",{className:"auth-input",type:"email",placeholder:"you@example.com",value:t,onChange:m=>e(m.target.value),required:!0})]}),f.jsxs("div",{className:"field",children:[f.jsx("label",{children:"Password"}),f.jsxs("div",{className:"input-wrap",children:[f.jsx("input",{className:"auth-input",type:i?"text":"password",placeholder:"••••••••",value:n,onChange:m=>r(m.target.value),required:!0,style:{paddingRight:44}}),f.jsx("button",{type:"button",className:"eye-btn",onClick:()=>s(m=>!m),children:i?f.jsx(cx,{size:18}):f.jsx(dx,{size:18})})]})]}),f.jsx("button",{className:"auth-btn",type:"submit",disabled:o,children:o?"Signing in…":"Sign In"})]}),f.jsxs("div",{className:"auth-footer",children:["Don't have an account?"," ",f.jsx(Lf,{to:"/signup",className:"auth-link",children:"Sign up"})]})]})})]})}function iN(){const[t,e]=O.useState("patient"),[n,r]=O.useState(""),[i,s]=O.useState(""),[o,l]=O.useState(""),[u,c]=O.useState(""),[h,m]=O.useState(!1),[g,T]=O.useState(!1),[I,P]=O.useState(""),C=async x=>{if(x.preventDefault(),P(""),o.length<6)return P("Password must be at least 6 characters.");T(!0);try{t==="patient"?await L2({name:n,email:i,password:o}):await j2({name:n,email:i,password:o,patientEmail:u})}catch(w){P(w.message.includes("email-already-in-use")?"This email is already registered.":"Signup failed. Please try again.")}finally{T(!1)}};return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        .auth-page {
          min-height: 100vh;
          background: linear-gradient(160deg, var(--pink-100) 0%, var(--blue-50) 50%, var(--green-50) 100%);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 24px;
        }
        .auth-card {
          width: 100%; max-width: 400px;
          background: white;
          border-radius: var(--radius-xl);
          padding: 36px 28px;
          box-shadow: var(--shadow-lg);
          animation: scaleIn 0.35s ease;
        }
        .auth-logo {
          text-align: center; margin-bottom: 24px;
        }
        .logo-icon {
          width: 64px; height: 64px;
          background: linear-gradient(135deg, var(--pink-200), var(--blue-200));
          border-radius: 20px;
          display: flex; align-items: center; justify-content: center;
          font-size: 32px;
          margin: 0 auto 10px;
          box-shadow: 0 4px 16px rgba(249,168,212,0.4);
        }
        .logo-name {
          font-family: var(--font-display);
          font-size: 24px; font-weight: 800;
          background: linear-gradient(135deg, var(--pink-400), var(--blue-400));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .role-tabs {
          display: flex; gap: 8px;
          background: var(--gray-100);
          border-radius: var(--radius-sm);
          padding: 4px;
          margin-bottom: 24px;
        }
        .role-tab {
          flex: 1;
          display: flex; align-items: center; justify-content: center; gap: 6px;
          padding: 10px;
          border: none; border-radius: 8px;
          font-size: 14px; font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          background: transparent;
          color: var(--gray-500);
        }
        .role-tab.active {
          background: white;
          color: var(--pink-500);
          box-shadow: var(--shadow-sm);
        }
        .auth-title {
          font-size: 20px; font-weight: 800;
          color: var(--gray-800); margin-bottom: 16px;
        }
        .field { margin-bottom: 14px; }
        .field label {
          display: block;
          font-size: 13px; font-weight: 700;
          color: var(--gray-500); margin-bottom: 6px;
          text-transform: uppercase; letter-spacing: 0.05em;
        }
        .input-wrap { position: relative; }
        .auth-input {
          width: 100%;
          padding: 13px 16px;
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-sm);
          font-size: 16px; font-weight: 500;
          color: var(--gray-800);
          outline: none;
          transition: border-color 0.2s;
          background: var(--gray-50);
        }
        .auth-input:focus { border-color: var(--pink-300); background: white; }
        .eye-btn {
          position: absolute; right: 14px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          color: var(--gray-400); cursor: pointer;
        }
        .error-msg {
          background: var(--red-100); color: var(--red-500);
          padding: 10px 14px; border-radius: var(--radius-sm);
          font-size: 14px; font-weight: 600; margin-bottom: 16px;
        }
        .auth-btn {
          width: 100%; padding: 16px; border: none;
          border-radius: var(--radius);
          background: linear-gradient(135deg, var(--pink-300), var(--pink-500));
          color: white;
          font-size: 17px; font-weight: 800; font-family: var(--font-body);
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(236,72,153,0.35);
          transition: all 0.2s; margin-top: 4px;
        }
        .auth-btn:hover { transform: translateY(-1px); }
        .auth-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .auth-footer {
          text-align: center; margin-top: 20px;
          font-size: 14px; color: var(--gray-500); font-weight: 500;
        }
        .auth-link { color: var(--pink-500); font-weight: 700; text-decoration: none; }
        .hint-text {
          font-size: 12px; color: var(--gray-400);
          margin-top: 4px; font-weight: 500;
        }
      `}),f.jsx("div",{className:"auth-page",children:f.jsxs("div",{className:"auth-card",children:[f.jsxs("div",{className:"auth-logo",children:[f.jsx("div",{className:"logo-icon",children:"💊"}),f.jsx("div",{className:"logo-name",children:"MedAssist"})]}),f.jsxs("div",{className:"role-tabs",children:[f.jsxs("button",{className:`role-tab ${t==="patient"?"active":""}`,onClick:()=>e("patient"),children:[f.jsx(hu,{size:15})," Patient"]}),f.jsxs("button",{className:`role-tab ${t==="family"?"active":""}`,onClick:()=>e("family"),children:[f.jsx(du,{size:15})," Family"]})]}),f.jsx("div",{className:"auth-title",children:t==="patient"?"Create your account 🌟":"Join as caregiver 🤝"}),I&&f.jsx("div",{className:"error-msg",children:I}),f.jsxs("form",{onSubmit:C,children:[f.jsxs("div",{className:"field",children:[f.jsx("label",{children:"Full Name"}),f.jsx("input",{className:"auth-input",type:"text",placeholder:"Your name",value:n,onChange:x=>r(x.target.value),required:!0})]}),f.jsxs("div",{className:"field",children:[f.jsx("label",{children:"Email"}),f.jsx("input",{className:"auth-input",type:"email",placeholder:"you@example.com",value:i,onChange:x=>s(x.target.value),required:!0})]}),f.jsxs("div",{className:"field",children:[f.jsx("label",{children:"Password"}),f.jsxs("div",{className:"input-wrap",children:[f.jsx("input",{className:"auth-input",type:h?"text":"password",placeholder:"Min. 6 characters",value:o,onChange:x=>l(x.target.value),required:!0,style:{paddingRight:44}}),f.jsx("button",{type:"button",className:"eye-btn",onClick:()=>m(x=>!x),children:h?f.jsx(cx,{size:18}):f.jsx(dx,{size:18})})]})]}),t==="family"&&f.jsxs("div",{className:"field",children:[f.jsx("label",{children:"Patient's Email (optional)"}),f.jsx("input",{className:"auth-input",type:"email",placeholder:"patient@example.com",value:u,onChange:x=>c(x.target.value)}),f.jsx("div",{className:"hint-text",children:"Enter the email of the patient you're caring for"})]}),f.jsx("button",{className:"auth-btn",type:"submit",disabled:g,children:g?"Creating account…":"Create Account"})]}),f.jsxs("div",{className:"auth-footer",children:["Already have an account?"," ",f.jsx(Lf,{to:"/login",className:"auth-link",children:"Sign in"})]})]})})]})}function Ve(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function an(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function yx(t,e){const n=Ve(t);return isNaN(e)?an(t,NaN):(e&&n.setDate(n.getDate()+e),n)}function vx(t,e){const n=Ve(t);if(isNaN(e))return an(t,NaN);if(!e)return n;const r=n.getDate(),i=an(t,n.getTime());i.setMonth(n.getMonth()+e+1,0);const s=i.getDate();return r>=s?i:(n.setFullYear(i.getFullYear(),i.getMonth(),r),n)}const _x=6048e5,sN=864e5;let oN={};function oc(){return oN}function Wo(t,e){var l,u,c,h;const n=oc(),r=(e==null?void 0:e.weekStartsOn)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((h=(c=n.locale)==null?void 0:c.options)==null?void 0:h.weekStartsOn)??0,i=Ve(t),s=i.getDay(),o=(s<r?7:0)+s-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function fu(t){return Wo(t,{weekStartsOn:1})}function wx(t){const e=Ve(t),n=e.getFullYear(),r=an(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=fu(r),s=an(t,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const o=fu(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function pu(t){const e=Ve(t);return e.setHours(0,0,0,0),e}function hv(t){const e=Ve(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function aN(t,e){const n=pu(t),r=pu(e),i=+n-hv(n),s=+r-hv(r);return Math.round((i-s)/sN)}function lN(t){const e=wx(t),n=an(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),fu(n)}function mu(t,e){const n=pu(t),r=pu(e);return+n==+r}function uN(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function cN(t){if(!uN(t)&&typeof t!="number")return!1;const e=Ve(t);return!isNaN(Number(e))}function dN(t){const e=Ve(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function hN(t,e){const n=Ve(t.start),r=Ve(t.end);let i=+n>+r;const s=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0);let l=1;const u=[];for(;+o<=s;)u.push(Ve(o)),o.setDate(o.getDate()+l),o.setHours(0,0,0,0);return i?u.reverse():u}function fN(t){const e=Ve(t);return e.setDate(1),e.setHours(0,0,0,0),e}function pN(t){const e=Ve(t),n=an(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const mN={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},gN=(t,e,n)=>{let r;const i=mN[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function pd(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const yN={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},vN={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},_N={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},wN={date:pd({formats:yN,defaultWidth:"full"}),time:pd({formats:vN,defaultWidth:"full"}),dateTime:pd({formats:_N,defaultWidth:"full"})},EN={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},xN=(t,e,n,r)=>EN[t];function js(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,l=n!=null&&n.width?String(n.width):o;i=t.formattingValues[l]||t.formattingValues[o]}else{const o=t.defaultWidth,l=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[l]||t.values[o]}const s=t.argumentCallback?t.argumentCallback(e):e;return i[s]}}const TN={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},IN={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},kN={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},SN={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},bN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},AN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},PN=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},CN={ordinalNumber:PN,era:js({values:TN,defaultWidth:"wide"}),quarter:js({values:IN,defaultWidth:"wide",argumentCallback:t=>t-1}),month:js({values:kN,defaultWidth:"wide"}),day:js({values:SN,defaultWidth:"wide"}),dayPeriod:js({values:bN,defaultWidth:"wide",formattingValues:AN,defaultFormattingWidth:"wide"})};function Fs(t){return(e,n={})=>{const r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;const o=s[0],l=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(l)?NN(l,m=>m.test(o)):RN(l,m=>m.test(o));let c;c=t.valueCallback?t.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c;const h=e.slice(o.length);return{value:c,rest:h}}}function RN(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function NN(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function DN(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const i=r[0],s=e.match(t.parsePattern);if(!s)return null;let o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;const l=e.slice(i.length);return{value:o,rest:l}}}const ON=/^(\d+)(th|st|nd|rd)?/i,MN=/\d+/i,VN={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},LN={any:[/^b/i,/^(a|c)/i]},jN={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},FN={any:[/1/i,/2/i,/3/i,/4/i]},UN={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},zN={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},BN={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},$N={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},WN={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},qN={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},HN={ordinalNumber:DN({matchPattern:ON,parsePattern:MN,valueCallback:t=>parseInt(t,10)}),era:Fs({matchPatterns:VN,defaultMatchWidth:"wide",parsePatterns:LN,defaultParseWidth:"any"}),quarter:Fs({matchPatterns:jN,defaultMatchWidth:"wide",parsePatterns:FN,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Fs({matchPatterns:UN,defaultMatchWidth:"wide",parsePatterns:zN,defaultParseWidth:"any"}),day:Fs({matchPatterns:BN,defaultMatchWidth:"wide",parsePatterns:$N,defaultParseWidth:"any"}),dayPeriod:Fs({matchPatterns:WN,defaultMatchWidth:"any",parsePatterns:qN,defaultParseWidth:"any"})},KN={code:"en-US",formatDistance:gN,formatLong:wN,formatRelative:xN,localize:CN,match:HN,options:{weekStartsOn:0,firstWeekContainsDate:1}};function GN(t){const e=Ve(t);return aN(e,pN(e))+1}function QN(t){const e=Ve(t),n=+fu(e)-+lN(e);return Math.round(n/_x)+1}function Ex(t,e){var h,m,g,T;const n=Ve(t),r=n.getFullYear(),i=oc(),s=(e==null?void 0:e.firstWeekContainsDate)??((m=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??i.firstWeekContainsDate??((T=(g=i.locale)==null?void 0:g.options)==null?void 0:T.firstWeekContainsDate)??1,o=an(t,0);o.setFullYear(r+1,0,s),o.setHours(0,0,0,0);const l=Wo(o,e),u=an(t,0);u.setFullYear(r,0,s),u.setHours(0,0,0,0);const c=Wo(u,e);return n.getTime()>=l.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function YN(t,e){var l,u,c,h;const n=oc(),r=(e==null?void 0:e.firstWeekContainsDate)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(c=n.locale)==null?void 0:c.options)==null?void 0:h.firstWeekContainsDate)??1,i=Ex(t,e),s=an(t,0);return s.setFullYear(i,0,r),s.setHours(0,0,0,0),Wo(s,e)}function XN(t,e){const n=Ve(t),r=+Wo(n,e)-+YN(n,e);return Math.round(r/_x)+1}function ae(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const Wn={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return ae(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):ae(n+1,2)},d(t,e){return ae(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return ae(t.getHours()%12||12,e.length)},H(t,e){return ae(t.getHours(),e.length)},m(t,e){return ae(t.getMinutes(),e.length)},s(t,e){return ae(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return ae(i,e.length)}},hi={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},fv={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return Wn.y(t,e)},Y:function(t,e,n,r){const i=Ex(t,r),s=i>0?i:1-i;if(e==="YY"){const o=s%100;return ae(o,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):ae(s,e.length)},R:function(t,e){const n=wx(t);return ae(n,e.length)},u:function(t,e){const n=t.getFullYear();return ae(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return ae(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return ae(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return Wn.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return ae(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const i=XN(t,r);return e==="wo"?n.ordinalNumber(i,{unit:"week"}):ae(i,e.length)},I:function(t,e,n){const r=QN(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):ae(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Wn.d(t,e)},D:function(t,e,n){const r=GN(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):ae(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const i=t.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return ae(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const i=t.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return ae(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),i=r===0?7:r;switch(e){case"i":return String(i);case"ii":return ae(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let i;switch(r===12?i=hi.noon:r===0?i=hi.midnight:i=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let i;switch(r>=17?i=hi.evening:r>=12?i=hi.afternoon:r>=4?i=hi.morning:i=hi.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Wn.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Wn.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):ae(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):ae(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Wn.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Wn.s(t,e)},S:function(t,e){return Wn.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return mv(r);case"XXXX":case"XX":return Mr(r);case"XXXXX":case"XXX":default:return Mr(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return mv(r);case"xxxx":case"xx":return Mr(r);case"xxxxx":case"xxx":default:return Mr(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+pv(r,":");case"OOOO":default:return"GMT"+Mr(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+pv(r,":");case"zzzz":default:return"GMT"+Mr(r,":")}},t:function(t,e,n){const r=Math.trunc(t.getTime()/1e3);return ae(r,e.length)},T:function(t,e,n){const r=t.getTime();return ae(r,e.length)}};function pv(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=Math.trunc(r/60),s=r%60;return s===0?n+String(i):n+String(i)+e+ae(s,2)}function mv(t,e){return t%60===0?(t>0?"-":"+")+ae(Math.abs(t)/60,2):Mr(t,e)}function Mr(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=ae(Math.trunc(r/60),2),s=ae(r%60,2);return n+i+e+s}const gv=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},xx=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},JN=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return gv(t,e);let s;switch(r){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",gv(r,e)).replace("{{time}}",xx(i,e))},ZN={p:xx,P:JN},eD=/^D+$/,tD=/^Y+$/,nD=["D","DD","YY","YYYY"];function rD(t){return eD.test(t)}function iD(t){return tD.test(t)}function sD(t,e,n){const r=oD(t,e,n);if(console.warn(r),nD.includes(t))throw new RangeError(r)}function oD(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const aD=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,lD=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,uD=/^'([^]*?)'?$/,cD=/''/g,dD=/[a-zA-Z]/;function Ct(t,e,n){var h,m,g,T;const r=oc(),i=r.locale??KN,s=r.firstWeekContainsDate??((m=(h=r.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,o=r.weekStartsOn??((T=(g=r.locale)==null?void 0:g.options)==null?void 0:T.weekStartsOn)??0,l=Ve(t);if(!cN(l))throw new RangeError("Invalid time value");let u=e.match(lD).map(I=>{const P=I[0];if(P==="p"||P==="P"){const C=ZN[P];return C(I,i.formatLong)}return I}).join("").match(aD).map(I=>{if(I==="''")return{isToken:!1,value:"'"};const P=I[0];if(P==="'")return{isToken:!1,value:hD(I)};if(fv[P])return{isToken:!0,value:I};if(P.match(dD))throw new RangeError("Format string contains an unescaped latin alphabet character `"+P+"`");return{isToken:!1,value:I}});i.localize.preprocessor&&(u=i.localize.preprocessor(l,u));const c={firstWeekContainsDate:s,weekStartsOn:o,locale:i};return u.map(I=>{if(!I.isToken)return I.value;const P=I.value;(iD(P)||rD(P))&&sD(P,e,String(t));const C=fv[P[0]];return C(l,P,i.localize,c)}).join("")}function hD(t){const e=t.match(uD);return e?e[1].replace(cD,"'"):t}function fD(t){return Ve(t).getDay()}function pD(t,e){return yx(t,-3)}function mD(t,e){return vx(t,-1)}async function gD(t,e){const n=ca(kt,"users",t,"medicines");return(await R2(n,{...e,remainingTablets:e.totalTablets,createdAt:new Date().toISOString()})).id}async function $r(t){const e=ca(kt,"users",t,"medicines");return(await ic(e)).docs.map(r=>({id:r.id,...r.data()}))}async function yD(t,e,n){const r=On(kt,"users",t,"medicines",e);await sx(r,n)}async function vD(t,e){const n=On(kt,"users",t,"medicines",e);await C2(n)}async function _D(t,e,n,r,i){const s=`${e}_${n}_${r}`,o=On(kt,"users",t,"intakeLogs",s);if(await Rp(o,{medId:e,date:n,timeSlot:r,status:i,updatedAt:new Date().toISOString()},{merge:!0}),i==="taken"){const l=On(kt,"users",t,"medicines",e),u=await Lh(l);if(u.exists()){const c=(u.data().remainingTablets||0)-1;await sx(l,{remainingTablets:Math.max(0,c)})}}}async function Op(t,e){const n=ca(kt,"users",t,"intakeLogs"),r=Pp(n,zo("date","==",e));return(await ic(r)).docs.map(s=>({id:s.id,...s.data()}))}async function wD(t,e,n){const r=`${e}-${String(n).padStart(2,"0")}-01`,i=n===12?1:n+1,o=`${n===12?e+1:e}-${String(i).padStart(2,"0")}-01`,l=ca(kt,"users",t,"intakeLogs"),u=Pp(l,zo("date",">=",r),zo("date","<",o));return(await ic(u)).docs.map(h=>({id:h.id,...h.data()}))}const Tx="medassist_notif_times",Ui={morning:"08:00",afternoon:"13:00",evening:"18:00",night:"21:00"};async function Ix(){return"Notification"in window?Notification.permission==="granted"?"granted":await Notification.requestPermission():"unsupported"}function gu(){return"Notification"in window?Notification.permission:"unsupported"}function yu(){try{const t=localStorage.getItem(Tx);if(t)return{...Ui,...JSON.parse(t)}}catch{}return{...Ui}}function ED(t){localStorage.setItem(Tx,JSON.stringify(t))}function kx(t,e,n){if(Notification.permission==="granted")try{const r=new Notification(t,{body:e,tag:n||"medassist",icon:"/pill-icon.svg",badge:"/pill-icon.svg",vibrate:[200,100,200],requireInteraction:!1});r.onclick=()=>{window.focus(),r.close()}}catch(r){console.warn("Notification error:",r)}}function xD(t,e,n,r){const[i,s]=t.split(":").map(Number),o=new Date,l=new Date;l.setHours(i,s,0,0),l<=o&&l.setDate(l.getDate()+1);const u=l-o;return{id:setTimeout(()=>{kx(e,n,r)},u),firesAt:l.toISOString()}}let vu=[];function TD(){vu.forEach(({id:t})=>clearTimeout(t)),vu=[]}function _u(t){if(TD(),Notification.permission!=="granted")return;const e=yu();return t.forEach(n=>{(n.times||[]).forEach(r=>{const i=e[r]||Ui[r],s=`💊 Time for ${n.name}`,o=`${n.dosage} — ${r} dose`,l=`med-${n.id}-${r}`,{id:u,firesAt:c}=xD(i,s,o,l);vu.push({id:u,medId:n.id,slot:r,firesAt:c})})}),vu.length}function ID(){kx("💊 MedAssist Test","Notifications are working! You'll get reminders at your scheduled times.","test")}const kD=["Su","Mo","Tu","We","Th","Fr","Sa"];function SD({selectedDate:t,onDateChange:e}){const n=new Date,r=Array.from({length:7},(i,s)=>yx(pD(n),s));return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        .date-strip {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding: 4px 2px 8px;
          scrollbar-width: none;
        }
        .date-strip::-webkit-scrollbar { display: none; }
        .date-chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 10px 12px;
          border-radius: 16px;
          cursor: pointer;
          border: none;
          background: white;
          min-width: 52px;
          transition: all 0.2s ease;
          box-shadow: var(--shadow-sm);
        }
        .date-chip:hover { transform: translateY(-2px); box-shadow: var(--shadow); }
        .date-chip.active {
          background: linear-gradient(135deg, var(--pink-300), var(--pink-400));
          color: white;
          box-shadow: 0 4px 12px rgba(236,72,153,0.3);
          transform: translateY(-2px);
        }
        .date-chip.today-chip .date-num { color: var(--pink-500); font-weight: 900; }
        .date-chip.active.today-chip .date-num { color: white; }
        .date-day {
          font-size: 11px;
          font-weight: 600;
          color: var(--gray-400);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .date-chip.active .date-day { color: rgba(255,255,255,0.8); }
        .date-num {
          font-size: 18px;
          font-weight: 800;
          color: var(--gray-700);
          font-family: var(--font-display);
        }
        .date-chip.active .date-num { color: white; }
        .today-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--pink-400);
        }
        .date-chip.active .today-dot { background: white; }
      `}),f.jsx("div",{className:"date-strip",children:r.map(i=>{const s=mu(i,t),o=mu(i,n);return f.jsxs("button",{className:`date-chip ${s?"active":""} ${o?"today-chip":""}`,onClick:()=>e(i),children:[f.jsx("span",{className:"date-day",children:kD[i.getDay()]}),f.jsx("span",{className:"date-num",children:Ct(i,"d")}),o&&f.jsx("span",{className:"today-dot"})]},i.toISOString())})})]})}const bD={tablet:Dp,injection:fx,syrup:ux,inhaler:px},AD={taken:{color:"#16a34a",bg:"#dcfce7",icon:fo,label:"Taken"},missed:{color:"#ef4444",bg:"#fee2e2",icon:mx,label:"Missed"},skipped:{color:"#f97316",bg:"#ffedd5",icon:hx,label:"Skipped"},pending:{color:"#9ca3af",bg:"#f3f4f6",icon:Bo,label:"Pending"}},yv={morning:{bg:"#fef9c3",accent:"#eab308",emoji:"🌅"},afternoon:{bg:"#dbeafe",accent:"#3b82f6",emoji:"☀️"},evening:{bg:"#fce7f3",accent:"#ec4899",emoji:"🌆"},night:{bg:"#ede9fe",accent:"#8b5cf6",emoji:"🌙"}};function Sx({medicine:t,timeSlot:e,status:n,onMark:r}){const i=bD[t.type]||Dp,s=AD[n||"pending"],o=s.icon,l=yv[e]||yv.morning;return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        .med-card {
          background: white;
          border-radius: var(--radius);
          padding: 16px;
          box-shadow: var(--shadow-sm);
          display: flex;
          align-items: center;
          gap: 14px;
          animation: fadeIn 0.3s ease forwards;
          border: 1.5px solid transparent;
          transition: all 0.2s ease;
        }
        .med-card:hover { box-shadow: var(--shadow); transform: translateY(-1px); }
        .med-icon-wrap {
          width: 48px; height: 48px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .med-info { flex: 1; min-width: 0; }
        .med-name {
          font-size: 16px; font-weight: 700;
          color: var(--gray-800);
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .med-dosage {
          font-size: 13px; color: var(--gray-500);
          font-weight: 500; margin-top: 2px;
        }
        .med-purpose {
          font-size: 12px; color: var(--gray-400);
          margin-top: 2px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .med-actions { display: flex; flex-direction: column; gap: 6px; align-items: flex-end; }
        .status-badge {
          display: flex; align-items: center; gap: 4px;
          padding: 4px 10px; border-radius: 20px;
          font-size: 12px; font-weight: 700;
          white-space: nowrap;
        }
        .action-btn {
          border: none; background: none;
          padding: 4px 10px; border-radius: 20px;
          font-size: 12px; font-weight: 600;
          cursor: pointer; transition: all 0.15s ease;
        }
        .action-btn:hover { opacity: 0.8; transform: scale(0.97); }
        .mark-btns { display: flex; gap: 6px; }
        .btn-taken { background: var(--green-100); color: var(--green-600); }
        .btn-missed { background: var(--red-100); color: var(--red-500); }
        .btn-skip { background: var(--orange-100); color: var(--orange-500); }
      `}),f.jsxs("div",{className:"med-card",style:{borderColor:n?s.bg:"transparent"},children:[f.jsx("div",{className:"med-icon-wrap",style:{background:l.bg},children:f.jsx(i,{size:22,color:l.accent,strokeWidth:2})}),f.jsxs("div",{className:"med-info",children:[f.jsx("div",{className:"med-name",children:t.name}),f.jsxs("div",{className:"med-dosage",children:[t.dosage," · ",l.emoji," ",e]}),t.purpose&&f.jsx("div",{className:"med-purpose",children:t.purpose})]}),f.jsx("div",{className:"med-actions",children:n&&n!=="pending"?f.jsxs("span",{className:"status-badge",style:{background:s.bg,color:s.color},children:[f.jsx(o,{size:12}),s.label]}):f.jsxs("div",{className:"mark-btns",children:[f.jsx("button",{className:"action-btn btn-taken",onClick:()=>r("taken"),children:"✓"}),f.jsx("button",{className:"action-btn btn-skip",onClick:()=>r("skipped"),children:"⤭"}),f.jsx("button",{className:"action-btn btn-missed",onClick:()=>r("missed"),children:"✕"})]})})]})]})}const PD=["morning","afternoon","evening","night"],CD=[{value:"tablet",label:"Tablet",icon:Dp},{value:"syrup",label:"Syrup",icon:ux},{value:"injection",label:"Injection",icon:fx},{value:"inhaler",label:"Inhaler",icon:px}],RD={morning:{emoji:"🌅",color:"#eab308",bg:"#fef9c3"},afternoon:{emoji:"☀️",color:"#3b82f6",bg:"#dbeafe"},evening:{emoji:"🌆",color:"#ec4899",bg:"#fce7f3"},night:{emoji:"🌙",color:"#8b5cf6",bg:"#ede9fe"}};function bx({onClose:t,onAdded:e}){const{user:n}=ln(),[r,i]=O.useState(!1),s=yu(),[o,l]=O.useState({name:"",type:"tablet",dosage:"1 tablet",purpose:"",times:["morning"],notifTimes:{morning:s.morning||"08:00",afternoon:s.afternoon||"13:00",evening:s.evening||"18:00",night:s.night||"21:00"},totalTablets:30,numberOfDays:30}),u=h=>{l(m=>({...m,times:m.times.includes(h)?m.times.filter(g=>g!==h):[...m.times,h]}))},c=async()=>{if(!o.name.trim())return alert("Please enter medicine name");if(o.times.length===0)return alert("Please select at least one time");i(!0);try{await gD(n.uid,o),e(),t()}catch(h){alert("Error adding medicine: "+h.message)}finally{i(!1)}};return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        .modal-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(4px);
          z-index: 200;
          display: flex; align-items: flex-end;
          animation: fadeIn 0.2s ease;
        }
        .modal-sheet {
          width: 100%;
          max-height: 92vh;
          background: white;
          border-radius: 28px 28px 0 0;
          padding: 0 0 40px;
          overflow-y: auto;
          animation: slideUp 0.35s ease;
          scrollbar-width: none;
        }
        .modal-sheet::-webkit-scrollbar { display: none; }
        .modal-handle {
          width: 36px; height: 4px;
          background: var(--gray-200);
          border-radius: 2px;
          margin: 12px auto 0;
        }
        .modal-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 20px 12px;
          position: sticky; top: 0; background: white; z-index: 2;
          border-bottom: 1px solid var(--gray-100);
        }
        .modal-title {
          font-size: 20px; font-weight: 800;
          color: var(--gray-800); font-family: var(--font-display);
        }
        .modal-close {
          width: 36px; height: 36px; border-radius: 50%; border: none;
          background: var(--gray-100);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.15s;
        }
        .modal-close:hover { background: var(--gray-200); }
        .modal-body { padding: 12px 20px; }
        .field-label {
          font-size: 12px; font-weight: 800; color: var(--gray-400);
          text-transform: uppercase; letter-spacing: 0.07em;
          margin-bottom: 8px; display: block;
        }
        .field-group { margin-bottom: 20px; }
        .text-input {
          width: 100%; padding: 14px 16px;
          border-radius: var(--radius-sm);
          border: 2px solid var(--gray-200);
          font-size: 16px; font-weight: 600; color: var(--gray-800);
          outline: none; transition: border-color 0.2s; background: var(--gray-50);
        }
        .text-input:focus { border-color: var(--pink-300); background: white; }
        .type-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
        .type-btn {
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          padding: 12px 8px; border-radius: var(--radius-sm);
          border: 2px solid var(--gray-200); background: white;
          cursor: pointer; font-size: 12px; font-weight: 700;
          color: var(--gray-500); transition: all 0.15s ease;
        }
        .type-btn.selected { border-color: var(--pink-300); background: var(--pink-50); color: var(--pink-500); }

        /* Slot rows with time pickers */
        .slot-row {
          display: flex; align-items: center; gap: 10px;
          padding: 11px 12px;
          border-radius: 14px;
          border: 2px solid var(--gray-200);
          background: white;
          margin-bottom: 8px;
          transition: all 0.15s ease;
          cursor: pointer;
        }
        .slot-row.selected-slot { border-color: var(--blue-300); background: var(--blue-50); }
        .slot-checkbox {
          width: 22px; height: 22px; border-radius: 6px;
          border: 2px solid var(--gray-300); background: white;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: all 0.15s; font-size: 12px; font-weight: 900; color: white;
        }
        .slot-row.selected-slot .slot-checkbox { background: var(--blue-400); border-color: var(--blue-400); }
        .slot-emoji { font-size: 18px; flex-shrink: 0; }
        .slot-name { font-size: 15px; font-weight: 700; color: var(--gray-600); flex: 1; text-transform: capitalize; }
        .slot-row.selected-slot .slot-name { color: var(--blue-600); }
        .time-picker-wrap { display: flex; align-items: center; gap: 5px; }
        .mini-time-input {
          padding: 6px 8px;
          border: 1.5px solid var(--gray-200); border-radius: 8px;
          font-size: 13px; font-weight: 800; color: var(--gray-800);
          font-family: var(--font-display); outline: none; background: white;
          width: 96px;
        }
        .slot-row.selected-slot .mini-time-input { border-color: var(--blue-300); }
        .mini-time-input:focus { border-color: var(--pink-300); }

        .notif-hint {
          display: flex; align-items: center; gap: 6px;
          background: var(--blue-50); border-radius: 10px;
          padding: 8px 12px; margin-bottom: 10px;
          font-size: 12px; font-weight: 600; color: var(--blue-500);
        }
        .number-input { display: flex; align-items: center; gap: 12px; }
        .num-btn {
          width: 36px; height: 36px; border-radius: 50%; border: none;
          background: var(--gray-100); display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.15s;
        }
        .num-btn:hover { background: var(--pink-100); }
        .num-value { font-size: 20px; font-weight: 800; color: var(--gray-800); min-width: 40px; text-align: center; }
        .submit-btn {
          width: 100%; padding: 16px; border-radius: var(--radius); border: none;
          background: linear-gradient(135deg, var(--pink-300), var(--pink-400));
          color: white; font-size: 17px; font-weight: 800;
          font-family: var(--font-body); cursor: pointer;
          box-shadow: 0 4px 16px rgba(236,72,153,0.3);
          transition: all 0.2s ease; margin-top: 8px;
        }
        .submit-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(236,72,153,0.4); }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
      `}),f.jsx("div",{className:"modal-overlay",onClick:h=>h.target===h.currentTarget&&t(),children:f.jsxs("div",{className:"modal-sheet",children:[f.jsx("div",{className:"modal-handle"}),f.jsxs("div",{className:"modal-header",children:[f.jsx("span",{className:"modal-title",children:"Add Medicine 💊"}),f.jsx("button",{className:"modal-close",onClick:t,children:f.jsx(gx,{size:18})})]}),f.jsxs("div",{className:"modal-body",children:[f.jsxs("div",{className:"field-group",children:[f.jsx("label",{className:"field-label",children:"Medicine Name"}),f.jsx("input",{className:"text-input",placeholder:"e.g. Metformin 500mg",value:o.name,onChange:h=>l(m=>({...m,name:h.target.value}))})]}),f.jsxs("div",{className:"field-group",children:[f.jsx("label",{className:"field-label",children:"Type"}),f.jsx("div",{className:"type-grid",children:CD.map(({value:h,label:m,icon:g})=>f.jsxs("button",{className:`type-btn ${o.type===h?"selected":""}`,onClick:()=>l(T=>({...T,type:h})),children:[f.jsx(g,{size:20}),m]},h))})]}),f.jsxs("div",{className:"field-group",children:[f.jsx("label",{className:"field-label",children:"Dosage"}),f.jsx("input",{className:"text-input",placeholder:"e.g. 1 tablet, 5ml",value:o.dosage,onChange:h=>l(m=>({...m,dosage:h.target.value}))})]}),f.jsxs("div",{className:"field-group",children:[f.jsx("label",{className:"field-label",children:"Purpose / Condition"}),f.jsx("input",{className:"text-input",placeholder:"e.g. Blood pressure",value:o.purpose,onChange:h=>l(m=>({...m,purpose:h.target.value}))})]}),f.jsxs("div",{className:"field-group",children:[f.jsx("label",{className:"field-label",children:"Time of Day & Reminder Clock Time"}),f.jsxs("div",{className:"notif-hint",children:[f.jsx(Bo,{size:13}),"Select slots and set the exact time for each reminder notification"]}),PD.map(h=>{const m=RD[h],g=o.times.includes(h);return f.jsxs("div",{className:`slot-row ${g?"selected-slot":""}`,onClick:()=>u(h),children:[f.jsx("div",{className:"slot-checkbox",children:g&&"✓"}),f.jsx("span",{className:"slot-emoji",children:m.emoji}),f.jsx("span",{className:"slot-name",children:h}),f.jsxs("div",{className:"time-picker-wrap",onClick:T=>T.stopPropagation(),children:[f.jsx(Bo,{size:11,color:g?"var(--blue-400)":"var(--gray-300)"}),f.jsx("input",{type:"time",className:"mini-time-input",value:o.notifTimes[h],onChange:T=>l(I=>({...I,notifTimes:{...I.notifTimes,[h]:T.target.value}}))})]})]},h)})]}),f.jsxs("div",{className:"field-group",children:[f.jsx("label",{className:"field-label",children:"Total Tablets / Doses"}),f.jsxs("div",{className:"number-input",children:[f.jsx("button",{className:"num-btn",onClick:()=>l(h=>({...h,totalTablets:Math.max(1,h.totalTablets-5)})),children:f.jsx(jh,{size:16})}),f.jsx("span",{className:"num-value",children:o.totalTablets}),f.jsx("button",{className:"num-btn",onClick:()=>l(h=>({...h,totalTablets:h.totalTablets+5})),children:f.jsx($o,{size:16})})]})]}),f.jsxs("div",{className:"field-group",children:[f.jsx("label",{className:"field-label",children:"Number of Days"}),f.jsxs("div",{className:"number-input",children:[f.jsx("button",{className:"num-btn",onClick:()=>l(h=>({...h,numberOfDays:Math.max(1,h.numberOfDays-1)})),children:f.jsx(jh,{size:16})}),f.jsx("span",{className:"num-value",children:o.numberOfDays}),f.jsx("button",{className:"num-btn",onClick:()=>l(h=>({...h,numberOfDays:h.numberOfDays+1})),children:f.jsx($o,{size:16})})]})]}),f.jsx("button",{className:"submit-btn",onClick:c,disabled:r,children:r?"Adding…":"+ Add Medicine"})]})]})})]})}const vv=["morning","afternoon","evening","night"],ND={morning:"🌅 Morning",afternoon:"☀️ Afternoon",evening:"🌆 Evening",night:"🌙 Night"},Za=["Good morning","Good afternoon","Good evening","Good night"];function DD(){const t=new Date().getHours();return t<12?Za[0]:t<17?Za[1]:t<21?Za[2]:Za[3]}function OD(){const{user:t,userProfile:e}=ln(),n=Yo(),[r,i]=O.useState(new Date),[s,o]=O.useState([]),[l,u]=O.useState({}),[c,h]=O.useState(!0),[m,g]=O.useState(!1),[T,I]=O.useState(gu()),P=Ct(r,"yyyy-MM-dd"),C=O.useCallback(async()=>{h(!0);try{const[V,_]=await Promise.all([$r(t.uid),Op(t.uid,P)]);o(V);const y={};_.forEach(E=>{y[`${E.medId}_${E.timeSlot}`]=E.status}),u(y),gu()==="granted"&&_u(V)}catch(V){console.error(V)}finally{h(!1)}},[t.uid,P]);O.useEffect(()=>{C()},[C]);const x=async(V,_,y)=>{await _D(t.uid,V.id,P,_,y),u(E=>({...E,[`${V.id}_${_}`]:y}))},w=async()=>{if(T==="default"){const V=await Ix();I(V),V==="granted"&&_u(s)}n("/notifications")},b={};vv.forEach(V=>{b[V]=[]}),s.forEach(V=>{(V.times||[]).forEach(_=>{b[_]&&b[_].push(V)})});const D=s.reduce((V,_)=>{var y;return V+(((y=_.times)==null?void 0:y.length)||0)},0),F=Object.values(l).filter(V=>V==="taken").length;return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        .home-page { padding: 0 0 calc(var(--nav-height) + 16px); }
        .home-header {
          background: linear-gradient(135deg, var(--pink-200) 0%, var(--blue-100) 100%);
          padding: 56px 20px 28px;
          position: relative;
          overflow: hidden;
        }
        .header-bg-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
        }
        .greeting { font-size: 14px; color: var(--pink-600, #db2777); font-weight: 600; }
        .user-name {
          font-family: var(--font-display);
          font-size: 26px; font-weight: 800;
          color: var(--gray-800); margin-top: 2px;
        }
        .date-label {
          font-size: 14px; color: var(--gray-500);
          font-weight: 500; margin-top: 2px;
        }
        .header-row {
          display: flex; align-items: flex-start; justify-content: space-between;
        }
        .notif-btn {
          width: 40px; height: 40px;
          border-radius: 50%; border: none;
          background: white;
          display: flex; align-items: center; justify-content: center;
          box-shadow: var(--shadow-sm);
          cursor: pointer;
          position: relative;
          margin-top: 4px;
        }
        .notif-dot {
          position: absolute; top: 8px; right: 8px;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--pink-400);
          border: 2px solid white;
        }
        .progress-row {
          display: flex; align-items: center; gap: 12px;
          margin-top: 16px;
        }
        .progress-bar-wrap {
          flex: 1; height: 8px;
          background: rgba(255,255,255,0.5);
          border-radius: 4px; overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background: var(--green-400);
          border-radius: 4px;
          transition: width 0.5s ease;
        }
        .progress-label {
          font-size: 13px; font-weight: 700; color: var(--gray-700);
          white-space: nowrap;
        }
        .date-section { padding: 16px 20px 8px; }
        .date-month {
          font-size: 12px; font-weight: 700;
          color: var(--gray-400);
          text-transform: uppercase; letter-spacing: 0.08em;
          margin-bottom: 10px;
        }
        .schedule-section { padding: 0 16px; }
        .time-section { margin-bottom: 20px; }
        .time-header {
          font-size: 15px; font-weight: 800;
          color: var(--gray-600);
          margin-bottom: 10px; padding-left: 4px;
        }
        .med-list { display: flex; flex-direction: column; gap: 10px; }
        .empty-state {
          text-align: center;
          padding: 48px 24px;
          color: var(--gray-400);
        }
        .empty-icon { font-size: 52px; margin-bottom: 12px; }
        .empty-title { font-size: 18px; font-weight: 700; color: var(--gray-600); }
        .empty-sub { font-size: 14px; margin-top: 6px; font-weight: 500; }
        .fab {
          position: fixed;
          right: 20px;
          bottom: calc(var(--nav-height) + 16px);
          width: 56px; height: 56px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, var(--pink-300), var(--pink-500));
          color: white;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 16px rgba(236,72,153,0.45);
          cursor: pointer;
          z-index: 50;
          transition: all 0.2s ease;
        }
        .fab:hover { transform: scale(1.08); box-shadow: 0 6px 20px rgba(236,72,153,0.55); }
        .fab:active { transform: scale(0.96); }
        .notif-banner {
          background: var(--blue-50);
          border: 1.5px solid var(--blue-200);
          border-radius: var(--radius-sm);
          margin: 12px 20px 0;
          padding: 12px 14px;
          display: flex; align-items: center; gap: 12px;
        }
        .notif-banner-text { flex: 1; font-size: 13px; color: var(--gray-600); font-weight: 500; }
        .notif-enable-btn {
          border: none;
          background: var(--blue-400);
          color: white;
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 12px; font-weight: 700;
          cursor: pointer;
        }
        .section-divider {
          height: 1px; background: var(--gray-100);
          margin: 4px 0 16px;
        }
        .skeleton {
          background: linear-gradient(90deg, var(--gray-100) 25%, var(--gray-50) 50%, var(--gray-100) 75%);
          background-size: 200% 100%;
          animation: shimmer 1.2s infinite;
          border-radius: var(--radius-sm);
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}),f.jsxs("div",{className:"home-page",children:[f.jsxs("div",{className:"home-header",children:[f.jsx("div",{className:"header-bg-circle",style:{width:200,height:200,top:-80,right:-60}}),f.jsx("div",{className:"header-bg-circle",style:{width:120,height:120,bottom:-40,left:20}}),f.jsxs("div",{className:"header-row",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"greeting",children:[DD()," 👋"]}),f.jsx("div",{className:"user-name",children:(e==null?void 0:e.name)||(t==null?void 0:t.displayName)||"Friend"}),f.jsx("div",{className:"date-label",children:Ct(new Date,"EEEE, d MMMM yyyy")})]}),f.jsxs("button",{className:"notif-btn",onClick:w,children:[f.jsx(Fi,{size:18,color:T==="granted"?"var(--pink-500)":"var(--gray-600)"}),T!=="granted"&&f.jsx("span",{className:"notif-dot"})]})]}),D>0&&f.jsxs("div",{className:"progress-row",children:[f.jsx("div",{className:"progress-bar-wrap",children:f.jsx("div",{className:"progress-bar-fill",style:{width:`${Math.round(F/D*100)}%`}})}),f.jsxs("span",{className:"progress-label",children:[F,"/",D," taken"]})]})]}),T!=="granted"&&f.jsxs("div",{className:"notif-banner",onClick:w,style:{cursor:"pointer"},children:[f.jsx(Fi,{size:18,color:"var(--blue-400)"}),f.jsx("span",{className:"notif-banner-text",children:"Tap to enable medicine reminder notifications"}),f.jsx("span",{className:"notif-enable-btn",children:"Set Times →"})]}),f.jsxs("div",{className:"date-section",children:[f.jsx("div",{className:"date-month",children:Ct(r,"MMMM yyyy")}),f.jsx(SD,{selectedDate:r,onDateChange:i})]}),f.jsx("div",{className:"schedule-section",children:c?f.jsx(f.Fragment,{children:[1,2,3].map(V=>f.jsx("div",{className:"skeleton",style:{height:76,marginBottom:10}},V))}):s.length===0?f.jsxs("div",{className:"empty-state",children:[f.jsx("div",{className:"empty-icon",children:"💊"}),f.jsx("div",{className:"empty-title",children:"No medicines yet"}),f.jsx("div",{className:"empty-sub",children:"Tap the + button to add your first medicine"})]}):vv.map(V=>{const _=b[V];return _.length===0?null:f.jsxs("div",{className:"time-section",children:[f.jsx("div",{className:"time-header",children:ND[V]}),f.jsx("div",{className:"med-list",children:_.map(y=>f.jsx(Sx,{medicine:y,timeSlot:V,status:l[`${y.id}_${V}`],onMark:E=>x(y,V,E)},y.id))}),f.jsx("div",{className:"section-divider",style:{marginTop:16}})]},V)})})]}),f.jsx("button",{className:"fab",onClick:()=>g(!0),children:f.jsx($o,{size:26})}),m&&f.jsx(bx,{onClose:()=>g(!1),onAdded:C})]})}const MD=["Su","Mo","Tu","We","Th","Fr","Sa"];function VD(){const{user:t}=ln(),[e,n]=O.useState(new Date),[r,i]=O.useState(new Date),[s,o]=O.useState([]),[l,u]=O.useState({}),[c,h]=O.useState([]),[m,g]=O.useState(!0),T=O.useCallback(async()=>{g(!0);try{const[_,y]=await Promise.all([$r(t.uid),wD(t.uid,e.getFullYear(),e.getMonth()+1)]);h(_),o(y)}catch(_){console.error(_)}finally{g(!1)}},[t.uid,e]);O.useEffect(()=>{T()},[T]);const I=O.useCallback(async _=>{const y=Ct(_,"yyyy-MM-dd"),E=await Op(t.uid,y),k={};E.forEach(A=>{k[`${A.medId}_${A.timeSlot}`]=A.status}),u(k)},[t.uid]);O.useEffect(()=>{I(r)},[r,I]);const P={};s.forEach(_=>{P[_.date]||(P[_.date]={taken:0,missed:0,skipped:0}),_.status==="taken"?P[_.date].taken++:_.status==="missed"?P[_.date].missed++:_.status==="skipped"&&P[_.date].skipped++});const C=fN(e),x=dN(e),w=hN({start:C,end:x}),b=fD(C),D=_=>{const y=Ct(_,"yyyy-MM-dd"),E=P[y];return E?E.taken>0&&E.missed===0?"all-taken":E.missed>0&&E.taken===0?"all-missed":E.taken>0&&E.missed>0?"partial":null:null},F=Ct(r,"yyyy-MM-dd"),V=["morning","afternoon","evening","night"];return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        .cal-page { min-height: 100vh; padding-bottom: calc(var(--nav-height) + 16px); }
        .cal-header {
          background: linear-gradient(135deg, var(--blue-100), var(--purple-100));
          padding: 56px 20px 24px;
        }
        .cal-title {
          font-family: var(--font-display);
          font-size: 26px; font-weight: 800;
          color: var(--gray-800);
        }
        .cal-subtitle { font-size: 14px; color: var(--gray-500); font-weight: 500; margin-top: 2px; }
        .month-nav {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 20px 8px;
        }
        .month-label {
          font-family: var(--font-display);
          font-size: 20px; font-weight: 800;
          color: var(--gray-800);
        }
        .nav-btn {
          width: 36px; height: 36px;
          border-radius: 50%; border: none;
          background: white;
          display: flex; align-items: center; justify-content: center;
          box-shadow: var(--shadow-sm);
          cursor: pointer;
          transition: all 0.15s;
        }
        .nav-btn:hover { box-shadow: var(--shadow); transform: scale(1.05); }
        .cal-grid {
          display: grid; grid-template-columns: repeat(7, 1fr);
          gap: 4px;
          padding: 0 16px;
        }
        .cal-weekday {
          text-align: center;
          font-size: 11px; font-weight: 700;
          color: var(--gray-400);
          text-transform: uppercase;
          padding: 8px 0;
        }
        .cal-day {
          display: flex; flex-direction: column;
          align-items: center;
          padding: 6px 2px;
          border-radius: 12px;
          cursor: pointer;
          border: none;
          background: none;
          transition: all 0.15s;
          position: relative;
        }
        .cal-day:hover { background: var(--gray-100); }
        .cal-day.selected { background: var(--pink-400); }
        .cal-day.today .day-num { color: var(--pink-500); font-weight: 900; }
        .cal-day.selected .day-num { color: white; }
        .cal-day.other-month { opacity: 0.25; }
        .day-num {
          font-size: 15px; font-weight: 700;
          color: var(--gray-700);
          line-height: 1;
        }
        .day-dots {
          display: flex; gap: 2px; margin-top: 4px;
          min-height: 6px;
        }
        .day-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
        }
        .dot-green { background: var(--green-400); }
        .dot-red { background: var(--red-400); }
        .dot-orange { background: var(--orange-400); }
        .legend {
          display: flex; gap: 16px;
          padding: 12px 20px;
          background: white;
          margin: 12px 16px 0;
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
        }
        .legend-item {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 600; color: var(--gray-500);
        }
        .legend-dot { width: 8px; height: 8px; border-radius: 50%; }
        .day-detail {
          margin: 16px 16px 0;
        }
        .day-detail-header {
          font-size: 16px; font-weight: 800;
          color: var(--gray-700); margin-bottom: 12px;
        }
        .no-data {
          text-align: center; padding: 32px;
          color: var(--gray-400); font-size: 14px; font-weight: 500;
        }
        .time-slot-group { margin-bottom: 16px; }
        .time-slot-title {
          font-size: 13px; font-weight: 700;
          color: var(--gray-500); margin-bottom: 8px;
          text-transform: capitalize;
        }
        .summary-cards {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 10px; padding: 12px 16px 0;
        }
        .summary-card {
          background: white; border-radius: var(--radius-sm);
          padding: 14px 10px; text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .summary-num {
          font-size: 24px; font-weight: 900;
          font-family: var(--font-display);
        }
        .summary-lbl { font-size: 11px; font-weight: 600; color: var(--gray-400); margin-top: 2px; }
      `}),f.jsxs("div",{className:"cal-page",children:[f.jsxs("div",{className:"cal-header",children:[f.jsx("div",{className:"cal-title",children:"📅 Calendar"}),f.jsx("div",{className:"cal-subtitle",children:"Your medicine history"})]}),f.jsxs("div",{className:"month-nav",children:[f.jsx("button",{className:"nav-btn",onClick:()=>n(_=>mD(_)),children:f.jsx(H2,{size:18})}),f.jsx("span",{className:"month-label",children:Ct(e,"MMMM yyyy")}),f.jsx("button",{className:"nav-btn",onClick:()=>n(_=>vx(_,1)),children:f.jsx(lx,{size:18})})]}),f.jsx("div",{className:"cal-grid",style:{padding:"0 16px 4px"},children:MD.map(_=>f.jsx("div",{className:"cal-weekday",children:_},_))}),f.jsxs("div",{className:"cal-grid",children:[Array.from({length:b},(_,y)=>f.jsx("div",{},`pad-${y}`)),w.map(_=>{const y=D(_),E=mu(_,r),k=mu(_,new Date);return f.jsxs("button",{className:`cal-day ${E?"selected":""} ${k?"today":""}`,onClick:()=>i(_),children:[f.jsx("span",{className:"day-num",children:Ct(_,"d")}),f.jsxs("div",{className:"day-dots",children:[y==="all-taken"&&f.jsx("span",{className:"day-dot dot-green"}),y==="all-missed"&&f.jsx("span",{className:"day-dot dot-red"}),y==="partial"&&f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"day-dot dot-green"}),f.jsx("span",{className:"day-dot dot-red"})]})]})]},_.toISOString())})]}),f.jsxs("div",{className:"legend",children:[f.jsxs("div",{className:"legend-item",children:[f.jsx("span",{className:"legend-dot",style:{background:"var(--green-400)"}})," All taken"]}),f.jsxs("div",{className:"legend-item",children:[f.jsx("span",{className:"legend-dot",style:{background:"var(--red-400)"}})," Missed"]}),f.jsxs("div",{className:"legend-item",children:[f.jsx("span",{className:"legend-dot",style:{background:"var(--orange-400)"}})," Partial"]})]}),(()=>{const _=P[F];return _?f.jsxs("div",{className:"summary-cards",children:[f.jsxs("div",{className:"summary-card",children:[f.jsx("div",{className:"summary-num",style:{color:"var(--green-500)"},children:_.taken}),f.jsx("div",{className:"summary-lbl",children:"Taken"})]}),f.jsxs("div",{className:"summary-card",children:[f.jsx("div",{className:"summary-num",style:{color:"var(--red-500)"},children:_.missed}),f.jsx("div",{className:"summary-lbl",children:"Missed"})]}),f.jsxs("div",{className:"summary-card",children:[f.jsx("div",{className:"summary-num",style:{color:"var(--orange-400)"},children:_.skipped}),f.jsx("div",{className:"summary-lbl",children:"Skipped"})]})]}):null})(),f.jsxs("div",{className:"day-detail",children:[f.jsx("div",{className:"day-detail-header",children:Ct(r,"EEEE, d MMMM")}),c.length===0?f.jsx("div",{className:"no-data",children:"No medicines added yet"}):V.map(_=>{const y=c.filter(E=>{var k;return(k=E.times)==null?void 0:k.includes(_)});return y.length===0?null:f.jsxs("div",{className:"time-slot-group",children:[f.jsxs("div",{className:"time-slot-title",children:[_==="morning"?"🌅":_==="afternoon"?"☀️":_==="evening"?"🌆":"🌙"," ",_]}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:y.map(E=>f.jsx(Sx,{medicine:E,timeSlot:_,status:l[`${E.id}_${_}`],onMark:()=>{}},E.id))})]},_)})]})]})]})}function LD({med:t,onUpdate:e,onDelete:n}){var m;const r=t.remainingTablets??t.totalTablets??0,i=t.totalTablets??30,s=((m=t.times)==null?void 0:m.length)||1,o=s>0?Math.floor(r/s):r,l=o<=3,u=o<=1,c=i>0?Math.min(100,Math.round(r/i*100)):0,h=u?"var(--red-400)":l?"var(--orange-400)":"var(--green-400)";return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        .stock-card {
          background: white;
          border-radius: var(--radius);
          padding: 18px 16px;
          box-shadow: var(--shadow-sm);
          border: 2px solid transparent;
          transition: all 0.2s;
          animation: fadeIn 0.3s ease;
        }
        .stock-card.low { border-color: var(--orange-200); background: #fffbf5; }
        .stock-card.critical { border-color: var(--red-200); background: #fff5f5; }
        .stock-top { display: flex; align-items: flex-start; justify-content: space-between; }
        .stock-name {
          font-size: 17px; font-weight: 800;
          color: var(--gray-800);
        }
        .stock-type {
          font-size: 12px; color: var(--gray-400);
          font-weight: 600; text-transform: capitalize;
          margin-top: 2px;
        }
        .stock-purpose {
          font-size: 12px; color: var(--gray-400);
          font-weight: 500;
        }
        .low-badge {
          display: flex; align-items: center; gap: 4px;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px; font-weight: 700;
          background: var(--orange-100); color: var(--orange-500);
          white-space: nowrap;
        }
        .critical-badge {
          background: var(--red-100); color: var(--red-500);
        }
        .stock-bar-wrap {
          height: 8px;
          background: var(--gray-100);
          border-radius: 4px;
          overflow: hidden;
          margin: 14px 0 10px;
        }
        .stock-bar-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.5s ease;
        }
        .stock-stats {
          display: flex; justify-content: space-between; align-items: center;
        }
        .stat-item { text-align: center; }
        .stat-num {
          font-size: 20px; font-weight: 900;
          font-family: var(--font-display);
          color: var(--gray-800);
        }
        .stat-lbl {
          font-size: 11px; font-weight: 600;
          color: var(--gray-400);
        }
        .stock-actions {
          display: flex; gap: 8px; margin-top: 14px;
          align-items: center;
        }
        .qty-btn {
          width: 34px; height: 34px;
          border-radius: 50%; border: 2px solid var(--gray-200);
          background: white;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.15s;
        }
        .qty-btn:hover { background: var(--pink-50); border-color: var(--pink-300); }
        .qty-input {
          flex: 1;
          padding: 8px 12px;
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-sm);
          font-size: 15px; font-weight: 700;
          text-align: center;
          color: var(--gray-800);
          outline: none;
        }
        .qty-input:focus { border-color: var(--pink-300); }
        .del-btn {
          width: 34px; height: 34px;
          border-radius: 50%; border: none;
          background: var(--red-100);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.15s;
          color: var(--red-400);
          margin-left: auto;
        }
        .del-btn:hover { background: var(--red-400); color: white; }
        .days-left-label {
          font-size: 12px; font-weight: 700;
          color: var(--gray-500);
        }
      `}),f.jsxs("div",{className:`stock-card ${u?"critical":l?"low":""}`,children:[f.jsxs("div",{className:"stock-top",children:[f.jsxs("div",{children:[f.jsx("div",{className:"stock-name",children:t.name}),f.jsxs("div",{className:"stock-type",children:[t.type," · ",t.dosage]}),t.purpose&&f.jsx("div",{className:"stock-purpose",children:t.purpose})]}),l&&f.jsxs("span",{className:`low-badge ${u?"critical-badge":""}`,children:[f.jsx(Np,{size:12}),u?"Critical!":"Low Stock"]})]}),f.jsx("div",{className:"stock-bar-wrap",children:f.jsx("div",{className:"stock-bar-fill",style:{width:`${c}%`,background:h}})}),f.jsxs("div",{className:"stock-stats",children:[f.jsxs("div",{className:"stat-item",children:[f.jsx("div",{className:"stat-num",style:{color:h},children:r}),f.jsx("div",{className:"stat-lbl",children:"Remaining"})]}),f.jsxs("div",{className:"stat-item",children:[f.jsx("div",{className:"stat-num",children:i}),f.jsx("div",{className:"stat-lbl",children:"Total"})]}),f.jsxs("div",{className:"stat-item",children:[f.jsx("div",{className:"stat-num",style:{color:h},children:o}),f.jsx("div",{className:"stat-lbl",children:"Days Left"})]}),f.jsxs("div",{className:"stat-item",children:[f.jsxs("div",{className:"stat-num",children:[s,"x"]}),f.jsx("div",{className:"stat-lbl",children:"Per Day"})]})]}),f.jsxs("div",{className:"stock-actions",children:[f.jsx("button",{className:"qty-btn",onClick:()=>e(t.id,Math.max(0,r-10)),children:f.jsx(jh,{size:14})}),f.jsx("input",{className:"qty-input",type:"number",value:r,min:"0",onChange:g=>e(t.id,Math.max(0,parseInt(g.target.value)||0))}),f.jsx("button",{className:"qty-btn",onClick:()=>e(t.id,r+10),children:f.jsx($o,{size:14})}),f.jsx("button",{className:"del-btn",onClick:()=>n(t.id),title:"Delete medicine",children:f.jsx(nN,{size:14})})]})]})]})}function jD(){const{user:t}=ln(),[e,n]=O.useState([]),[r,i]=O.useState(!0),[s,o]=O.useState(!1),[l,u]=O.useState("all"),c=O.useCallback(async()=>{i(!0);try{const I=await $r(t.uid);n(I)}catch(I){console.error(I)}finally{i(!1)}},[t.uid]);O.useEffect(()=>{c()},[c]);const h=async(I,P)=>{n(C=>C.map(x=>x.id===I?{...x,remainingTablets:P}:x)),await yD(t.uid,I,{remainingTablets:P})},m=async I=>{confirm("Delete this medicine?")&&(await vD(t.uid,I),n(P=>P.filter(C=>C.id!==I)))},g=e.filter(I=>{var w;const P=I.remainingTablets??I.totalTablets??0,C=((w=I.times)==null?void 0:w.length)||1,x=Math.floor(P/C);return l==="low"?x<=3:l==="ok"?x>3:!0}),T=e.filter(I=>{var x;const P=I.remainingTablets??I.totalTablets??0;return Math.floor(P/(((x=I.times)==null?void 0:x.length)||1))<=3}).length;return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        .stock-page { min-height: 100vh; padding-bottom: calc(var(--nav-height) + 16px); }
        .stock-header {
          background: linear-gradient(135deg, var(--green-100), var(--blue-100));
          padding: 56px 20px 24px;
        }
        .stock-title {
          font-family: var(--font-display);
          font-size: 26px; font-weight: 800; color: var(--gray-800);
        }
        .stock-subtitle { font-size: 14px; color: var(--gray-500); font-weight: 500; margin-top: 2px; }
        .alert-banner {
          background: var(--orange-100);
          border: 2px solid var(--orange-200);
          border-radius: var(--radius);
          padding: 14px 16px;
          display: flex; align-items: center; gap: 12px;
          margin: 16px 16px 0;
        }
        .alert-text {
          font-size: 14px; font-weight: 700; color: var(--orange-500);
        }
        .filter-row {
          display: flex; gap: 8px;
          padding: 16px 16px 8px;
          overflow-x: auto;
        }
        .filter-btn {
          padding: 8px 16px;
          border-radius: 20px; border: 2px solid var(--gray-200);
          background: white;
          font-size: 13px; font-weight: 700; color: var(--gray-500);
          cursor: pointer; white-space: nowrap;
          transition: all 0.15s;
        }
        .filter-btn.active {
          border-color: var(--pink-300);
          background: var(--pink-50);
          color: var(--pink-500);
        }
        .stock-list {
          display: flex; flex-direction: column; gap: 12px;
          padding: 8px 16px;
        }
        .empty-state {
          text-align: center; padding: 48px 24px;
          color: var(--gray-400);
        }
        .empty-icon { font-size: 52px; margin-bottom: 12px; }
        .empty-title { font-size: 18px; font-weight: 700; color: var(--gray-600); }
        .fab {
          position: fixed;
          right: 20px;
          bottom: calc(var(--nav-height) + 16px);
          width: 56px; height: 56px;
          border-radius: 50%; border: none;
          background: linear-gradient(135deg, var(--green-400), var(--green-500));
          color: white;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 16px rgba(34,197,94,0.45);
          cursor: pointer; z-index: 50;
          transition: all 0.2s;
        }
        .fab:hover { transform: scale(1.08); }
      `}),f.jsxs("div",{className:"stock-page",children:[f.jsxs("div",{className:"stock-header",children:[f.jsx("div",{className:"stock-title",children:"📦 Medicine Stock"}),f.jsx("div",{className:"stock-subtitle",children:"Track and manage your inventory"})]}),T>0&&f.jsxs("div",{className:"alert-banner",children:[f.jsx(Np,{size:20,color:"var(--orange-500)"}),f.jsxs("span",{className:"alert-text",children:[T," medicine",T>1?"s":""," running low — restock soon!"]})]}),f.jsx("div",{className:"filter-row",children:[["all","All"],["low",`⚠️ Low Stock (${T})`],["ok","✅ Well Stocked"]].map(([I,P])=>f.jsx("button",{className:`filter-btn ${l===I?"active":""}`,onClick:()=>u(I),children:P},I))}),f.jsx("div",{className:"stock-list",children:r?[1,2,3].map(I=>f.jsx("div",{style:{height:180,borderRadius:"var(--radius)",background:"linear-gradient(90deg, var(--gray-100) 25%, var(--gray-50) 50%, var(--gray-100) 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.2s infinite"}},I)):g.length===0?f.jsxs("div",{className:"empty-state",children:[f.jsx("div",{className:"empty-icon",children:l==="low"?"✅":"💊"}),f.jsx("div",{className:"empty-title",children:l==="low"?"All stocks are good!":"No medicines found"})]}):g.map(I=>f.jsx(LD,{med:I,onUpdate:h,onDelete:m},I.id))})]}),f.jsx("button",{className:"fab",onClick:()=>o(!0),children:f.jsx($o,{size:26})}),s&&f.jsx(bx,{onClose:()=>o(!1),onAdded:c}),f.jsx("style",{children:"@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }"})]})}function Us({icon:t,label:e,sublabel:n,color:r="var(--gray-400)",onClick:i,badge:s}){return f.jsxs("button",{onClick:i,style:{width:"100%",display:"flex",alignItems:"center",gap:14,padding:"14px 0",background:"none",border:"none",borderBottom:"1px solid var(--gray-100)",cursor:i?"pointer":"default",textAlign:"left"},children:[f.jsx("div",{style:{width:40,height:40,borderRadius:12,background:r+"20",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:f.jsx(t,{size:18,color:r})}),f.jsxs("div",{style:{flex:1},children:[f.jsx("div",{style:{fontSize:15,fontWeight:700,color:"var(--gray-800)"},children:e}),n&&f.jsx("div",{style:{fontSize:12,color:"var(--gray-400)",fontWeight:500,marginTop:1},children:n})]}),s&&f.jsx("span",{style:{background:"var(--pink-100)",color:"var(--pink-500)",borderRadius:12,padding:"2px 8px",fontSize:11,fontWeight:700},children:s}),i&&f.jsx(lx,{size:16,color:"var(--gray-300)"})]})}function FD(){const{user:t,userProfile:e}=ln(),n=Yo(),[r,i]=O.useState(!1),s=gu(),o=async()=>{if(confirm("Are you sure you want to sign out?")){i(!0);try{await U2()}catch(m){console.error(m),i(!1)}}},l=(e==null?void 0:e.name)||(t==null?void 0:t.displayName)||"User",u=(t==null?void 0:t.email)||"",c=(e==null?void 0:e.role)||"patient",h=l.split(" ").map(m=>m[0]).join("").toUpperCase().slice(0,2);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        .profile-page { min-height: 100vh; padding-bottom: calc(var(--nav-height) + 16px); }
        .profile-header {
          background: linear-gradient(135deg, var(--purple-100), var(--pink-100));
          padding: 56px 20px 32px;
          text-align: center;
        }
        .avatar {
          width: 88px; height: 88px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--pink-300), var(--blue-300));
          display: flex; align-items: center; justify-content: center;
          font-size: 32px; font-weight: 900;
          color: white;
          margin: 0 auto 14px;
          box-shadow: 0 4px 20px rgba(249,168,212,0.5);
          font-family: var(--font-display);
        }
        .profile-name {
          font-family: var(--font-display);
          font-size: 24px; font-weight: 800;
          color: var(--gray-800);
        }
        .profile-email {
          font-size: 14px; color: var(--gray-500);
          font-weight: 500; margin-top: 4px;
        }
        .role-pill {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 10px;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px; font-weight: 700;
          background: white;
          color: var(--pink-500);
          box-shadow: var(--shadow-sm);
        }
        .section-card {
          background: white;
          border-radius: var(--radius);
          padding: 4px 16px;
          margin: 16px 16px 0;
          box-shadow: var(--shadow-sm);
        }
        .section-title {
          font-size: 12px; font-weight: 800;
          color: var(--gray-400);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 14px 0 2px;
        }
        .logout-btn {
          width: calc(100% - 32px);
          margin: 16px;
          padding: 16px;
          border: none;
          border-radius: var(--radius);
          background: var(--red-100);
          color: var(--red-500);
          font-size: 16px; font-weight: 800;
          font-family: var(--font-body);
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: all 0.2s;
        }
        .logout-btn:hover { background: var(--red-400); color: white; }
        .logout-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .stats-row {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin: 16px 16px 0;
        }
        .stat-card {
          background: white; border-radius: var(--radius-sm);
          padding: 16px 10px; text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .stat-emoji { font-size: 22px; }
        .stat-num {
          font-size: 22px; font-weight: 900;
          font-family: var(--font-display);
          color: var(--gray-800);
          margin-top: 4px;
        }
        .stat-lbl { font-size: 11px; font-weight: 600; color: var(--gray-400); margin-top: 2px; }
        .app-version {
          text-align: center;
          color: var(--gray-300);
          font-size: 12px; font-weight: 500;
          padding: 16px;
        }
      `}),f.jsxs("div",{className:"profile-page",children:[f.jsxs("div",{className:"profile-header",children:[f.jsx("div",{className:"avatar",children:h}),f.jsx("div",{className:"profile-name",children:l}),f.jsx("div",{className:"profile-email",children:u}),f.jsxs("div",{className:"role-pill",children:[c==="family"?f.jsx(du,{size:13}):f.jsx(hu,{size:13}),c==="family"?"Family Caregiver":"Patient"]})]}),c==="family"&&(e==null?void 0:e.linkedPatientEmail)&&f.jsxs("div",{className:"section-card",children:[f.jsx("div",{className:"section-title",children:"Linked Patient"}),f.jsx(Us,{icon:du,label:e.linkedPatientEmail,sublabel:"Monitoring this patient",color:"var(--pink-400)"})]}),f.jsxs("div",{className:"section-card",children:[f.jsx("div",{className:"section-title",children:"Account"}),f.jsx(Us,{icon:hu,label:"Full Name",sublabel:l,color:"var(--blue-400)"}),f.jsx(Us,{icon:eN,label:"Email",sublabel:u,color:"var(--purple-500)"})]}),f.jsxs("div",{className:"section-card",children:[f.jsx("div",{className:"section-title",children:"Preferences"}),f.jsx(Us,{icon:Fi,label:"Notifications & Reminders",sublabel:s==="granted"?"Reminders active — tap to change times":s==="denied"?"Blocked in browser settings":"Tap to set up medicine reminders",color:"var(--orange-400)",onClick:()=>n("/notifications"),badge:s==="granted"?"ON":s==="denied"?"OFF":"SET UP"})]}),f.jsxs("div",{className:"section-card",children:[f.jsx("div",{className:"section-title",children:"About"}),f.jsx(Us,{icon:Q2,label:"MedAssist",sublabel:"Version 1.0.0 — Medicine Reminder App",color:"var(--green-500)"})]}),f.jsxs("button",{className:"logout-btn",onClick:o,disabled:r,children:[f.jsx(Y2,{size:18}),r?"Signing out…":"Sign Out"]}),f.jsx("div",{className:"app-version",children:"Made with ❤️ for better health"})]})]})}const UD=[{to:"/",icon:G2,label:"Home"},{to:"/calendar",icon:q2,label:"Calendar"},{to:"/stock",icon:X2,label:"Stock"},{to:"/profile",icon:hu,label:"Profile"}];function zD(){const{userProfile:t}=ln();return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        .bottom-nav {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          height: var(--nav-height);
          background: white;
          border-radius: 24px 24px 0 0;
          box-shadow: 0 -4px 24px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 0 8px;
          z-index: 100;
        }
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 8px 16px;
          border-radius: 16px;
          text-decoration: none;
          color: var(--gray-400);
          font-size: 11px;
          font-weight: 600;
          font-family: var(--font-body);
          transition: all 0.2s ease;
          min-width: 64px;
        }
        .nav-item.active {
          color: var(--pink-500);
          background: var(--pink-50);
        }
        .nav-item:hover { color: var(--pink-400); }
        .nav-icon {
          width: 24px; height: 24px;
          transition: transform 0.2s ease;
        }
        .nav-item.active .nav-icon { transform: scale(1.1); }
      `}),f.jsx("nav",{className:"bottom-nav",children:UD.map(({to:e,icon:n,label:r})=>f.jsxs(Mk,{to:e,end:e==="/",className:({isActive:i})=>`nav-item ${i?"active":""}`,children:[f.jsx(n,{className:"nav-icon",strokeWidth:2}),r]},e))})]})}function BD(){var k;const{user:t,userProfile:e}=ln(),[n,r]=O.useState((e==null?void 0:e.linkedPatientEmail)||""),[i,s]=O.useState(""),[o,l]=O.useState(null),[u,c]=O.useState([]),[h,m]=O.useState({}),[g,T]=O.useState(!1),[I,P]=O.useState(""),[C]=O.useState(new Date),x=Ct(C,"yyyy-MM-dd"),w=O.useCallback(async A=>{if(A){T(!0),P("");try{const R=ca(kt,"users"),S=Pp(R,zo("email","==",A),zo("role","==","patient")),ce=await ic(S);if(ce.empty){P("No patient found with that email."),l(null),T(!1);return}const Vt={id:ce.docs[0].id,...ce.docs[0].data()};l(Vt);const[br,Lt]=await Promise.all([$r(Vt.id),Op(Vt.id,x)]);c(br);const B={};Lt.forEach(K=>{B[`${K.medId}_${K.timeSlot}`]=K.status}),m(B)}catch(R){P("Error loading patient data: "+R.message)}finally{T(!1)}}},[x]);O.useEffect(()=>{e!=null&&e.linkedPatientEmail&&w(e.linkedPatientEmail)},[e,w]);const b=["morning","afternoon","evening","night"],D={morning:"🌅",afternoon:"☀️",evening:"🌆",night:"🌙"},F=u.reduce((A,R)=>{var S;return A+(((S=R.times)==null?void 0:S.length)||0)},0),V=Object.values(h).filter(A=>A==="taken").length,_=Object.values(h).filter(A=>A==="missed").length,y=F-Object.keys(h).length,E=A=>A==="taken"?f.jsx(fo,{size:16,color:"var(--green-500)"}):A==="missed"?f.jsx(mx,{size:16,color:"var(--red-500)"}):A==="skipped"?f.jsx(hx,{size:16,color:"var(--orange-400)"}):f.jsx(Bo,{size:16,color:"var(--gray-300)"});return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        .family-page { min-height: 100vh; padding-bottom: calc(var(--nav-height) + 16px); }
        .family-header {
          background: linear-gradient(135deg, var(--pink-100), var(--purple-100));
          padding: 56px 20px 28px;
        }
        .family-title {
          font-family: var(--font-display);
          font-size: 26px; font-weight: 800; color: var(--gray-800);
        }
        .family-subtitle { font-size: 14px; color: var(--gray-500); font-weight: 500; margin-top: 2px; }
        .search-section { padding: 16px 16px 0; }
        .search-wrap {
          display: flex; gap: 8px;
        }
        .search-input {
          flex: 1;
          padding: 13px 16px;
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-sm);
          font-size: 15px; font-weight: 500;
          color: var(--gray-800);
          outline: none;
          background: white;
        }
        .search-input:focus { border-color: var(--pink-300); }
        .search-btn {
          padding: 0 18px;
          border: none;
          border-radius: var(--radius-sm);
          background: var(--pink-400);
          color: white;
          font-size: 13px; font-weight: 800;
          cursor: pointer;
          transition: all 0.15s;
        }
        .search-btn:hover { background: var(--pink-500); }
        .patient-card {
          background: white; border-radius: var(--radius);
          padding: 16px; margin: 16px 16px 0;
          box-shadow: var(--shadow-sm);
          display: flex; align-items: center; gap: 14px;
        }
        .patient-avatar {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--pink-200), var(--blue-200));
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; font-weight: 900; color: white;
          font-family: var(--font-display);
          flex-shrink: 0;
        }
        .patient-name { font-size: 17px; font-weight: 800; color: var(--gray-800); }
        .patient-email { font-size: 12px; color: var(--gray-400); font-weight: 500; margin-top: 2px; }
        .stats-row {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 10px; padding: 16px 16px 0;
        }
        .stat-card {
          background: white; border-radius: var(--radius-sm);
          padding: 14px 10px; text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .stat-num { font-size: 26px; font-weight: 900; font-family: var(--font-display); }
        .stat-lbl { font-size: 11px; font-weight: 600; color: var(--gray-400); margin-top: 2px; }
        .schedule-section { padding: 16px; }
        .day-label {
          font-size: 15px; font-weight: 800;
          color: var(--gray-700); margin-bottom: 12px;
        }
        .time-group { margin-bottom: 16px; }
        .time-label {
          font-size: 13px; font-weight: 700;
          color: var(--gray-500); margin-bottom: 8px;
          text-transform: capitalize;
        }
        .med-row {
          background: white; border-radius: var(--radius-sm);
          padding: 12px 14px;
          display: flex; align-items: center; gap: 12px;
          box-shadow: var(--shadow-sm);
          margin-bottom: 6px;
        }
        .med-name { font-size: 15px; font-weight: 700; color: var(--gray-800); flex: 1; }
        .med-dosage { font-size: 12px; color: var(--gray-400); font-weight: 500; }
        .error-msg {
          background: var(--red-100); color: var(--red-500);
          padding: 12px 16px; margin: 12px 16px;
          border-radius: var(--radius-sm);
          font-size: 14px; font-weight: 600;
        }
        .empty-state {
          text-align: center; padding: 48px 24px;
          color: var(--gray-400);
        }
        .empty-icon { font-size: 52px; margin-bottom: 12px; }
        .empty-title { font-size: 18px; font-weight: 700; color: var(--gray-600); }
        .empty-sub { font-size: 14px; margin-top: 6px; font-weight: 500; }
      `}),f.jsxs("div",{className:"family-page",children:[f.jsxs("div",{className:"family-header",children:[f.jsx("div",{className:"family-title",children:"👨‍👩‍👧 Family Dashboard"}),f.jsx("div",{className:"family-subtitle",children:"Monitor your loved one's health"})]}),f.jsx("div",{className:"search-section",children:f.jsxs("div",{className:"search-wrap",children:[f.jsx("input",{className:"search-input",placeholder:"Enter patient's email…",value:i||n,onChange:A=>s(A.target.value)}),f.jsx("button",{className:"search-btn",onClick:()=>w(i||n),children:f.jsx(J2,{size:16})})]})}),I&&f.jsx("div",{className:"error-msg",children:I}),g&&f.jsxs("div",{className:"empty-state",children:[f.jsx("div",{className:"empty-icon",children:"⏳"}),f.jsx("div",{className:"empty-title",children:"Loading patient data…"})]}),o&&!g&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"patient-card",children:[f.jsx("div",{className:"patient-avatar",children:(k=o.name)==null?void 0:k.split(" ").map(A=>A[0]).join("").slice(0,2).toUpperCase()}),f.jsxs("div",{children:[f.jsx("div",{className:"patient-name",children:o.name}),f.jsx("div",{className:"patient-email",children:o.email})]}),f.jsx(du,{size:18,color:"var(--pink-400)",style:{marginLeft:"auto"}})]}),f.jsxs("div",{className:"stats-row",children:[f.jsxs("div",{className:"stat-card",children:[f.jsx("div",{className:"stat-num",style:{color:"var(--green-500)"},children:V}),f.jsx("div",{className:"stat-lbl",children:"✅ Taken"})]}),f.jsxs("div",{className:"stat-card",children:[f.jsx("div",{className:"stat-num",style:{color:"var(--red-500)"},children:_}),f.jsx("div",{className:"stat-lbl",children:"❌ Missed"})]}),f.jsxs("div",{className:"stat-card",children:[f.jsx("div",{className:"stat-num",style:{color:"var(--gray-400)"},children:y}),f.jsx("div",{className:"stat-lbl",children:"⏳ Pending"})]})]}),f.jsxs("div",{className:"schedule-section",children:[f.jsxs("div",{className:"day-label",children:["Today — ",Ct(C,"EEEE, d MMM")]}),u.length===0?f.jsx("div",{className:"empty-state",style:{padding:"24px 0"},children:f.jsx("div",{className:"empty-title",children:"No medicines added yet"})}):b.map(A=>{const R=u.filter(S=>{var ce;return(ce=S.times)==null?void 0:ce.includes(A)});return R.length===0?null:f.jsxs("div",{className:"time-group",children:[f.jsxs("div",{className:"time-label",children:[D[A]," ",A]}),R.map(S=>{const ce=h[`${S.id}_${A}`];return f.jsxs("div",{className:"med-row",children:[E(ce),f.jsxs("div",{style:{flex:1},children:[f.jsx("div",{className:"med-name",children:S.name}),f.jsx("div",{className:"med-dosage",children:S.dosage})]}),f.jsx("span",{style:{fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:10,background:ce==="taken"?"var(--green-100)":ce==="missed"?"var(--red-100)":ce==="skipped"?"var(--orange-100)":"var(--gray-100)",color:ce==="taken"?"var(--green-600)":ce==="missed"?"var(--red-500)":ce==="skipped"?"var(--orange-500)":"var(--gray-400)"},children:ce||"pending"})]},S.id)})]},A)})]})]}),!o&&!g&&!I&&f.jsxs("div",{className:"empty-state",children:[f.jsx("div",{className:"empty-icon",children:"🔍"}),f.jsx("div",{className:"empty-title",children:"Search for a patient"}),f.jsx("div",{className:"empty-sub",children:"Enter the patient's email address to view their medicine schedule"})]})]})]})}const $D=[{key:"morning",label:"Morning",emoji:"🌅",color:"#eab308",bg:"#fef9c3"},{key:"afternoon",label:"Afternoon",emoji:"☀️",color:"#3b82f6",bg:"#dbeafe"},{key:"evening",label:"Evening",emoji:"🌆",color:"#ec4899",bg:"#fce7f3"},{key:"night",label:"Night",emoji:"🌙",color:"#8b5cf6",bg:"#ede9fe"}];function WD(){const{user:t}=ln(),e=Yo(),[n,r]=O.useState(gu()),[i,s]=O.useState(yu()),[o,l]=O.useState(!1),[u,c]=O.useState(!1),[h,m]=O.useState(0);O.useEffect(()=>{yu(),$r(t.uid).then(C=>{const x=C.reduce((w,b)=>{var D;return w+(((D=b.times)==null?void 0:D.length)||0)},0);m(x)})},[t.uid]);const g=async()=>{const C=await Ix();if(r(C),C==="granted"){const x=await $r(t.uid);_u(x)}},T=async()=>{ED(i);const C=await $r(t.uid),x=_u(C);m(x),l(!0),setTimeout(()=>l(!1),2500)},I=()=>{ID(),c(!0),setTimeout(()=>c(!1),2500)},P=()=>{s({...Ui})};return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        .notif-page {
          min-height: 100vh;
          padding-bottom: 40px;
          background: var(--pink-50);
        }
        .notif-header {
          background: linear-gradient(135deg, var(--pink-100), var(--purple-100));
          padding: 56px 20px 24px;
          display: flex;
          align-items: flex-end;
          gap: 12px;
        }
        .back-btn {
          width: 38px; height: 38px;
          border-radius: 50%; border: none;
          background: white;
          display: flex; align-items: center; justify-content: center;
          box-shadow: var(--shadow-sm);
          cursor: pointer;
          flex-shrink: 0;
          margin-bottom: 2px;
        }
        .notif-title {
          font-family: var(--font-display);
          font-size: 26px; font-weight: 800;
          color: var(--gray-800);
        }
        .notif-subtitle {
          font-size: 13px; color: var(--gray-500);
          font-weight: 500; margin-top: 2px;
        }

        /* Permission card */
        .perm-card {
          margin: 16px;
          background: white;
          border-radius: var(--radius);
          padding: 20px;
          box-shadow: var(--shadow-sm);
          display: flex; align-items: center; gap: 16px;
        }
        .perm-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .perm-label {
          font-size: 16px; font-weight: 800;
          color: var(--gray-800);
        }
        .perm-sublabel {
          font-size: 13px; font-weight: 500;
          color: var(--gray-400); margin-top: 3px;
        }
        .perm-status {
          margin-left: auto;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px; font-weight: 800;
          border: none; cursor: pointer;
          white-space: nowrap;
        }
        .perm-granted  { background: var(--green-100); color: var(--green-600); }
        .perm-denied   { background: var(--red-100);   color: var(--red-500);   }
        .perm-default  { background: var(--blue-400);  color: white;            }

        /* Section label */
        .section-label {
          font-size: 12px; font-weight: 800;
          color: var(--gray-400);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 16px 20px 8px;
        }

        /* Time slot cards */
        .slot-card {
          background: white;
          border-radius: var(--radius);
          margin: 0 16px 10px;
          padding: 16px;
          box-shadow: var(--shadow-sm);
          display: flex; align-items: center; gap: 14px;
          transition: box-shadow 0.2s;
        }
        .slot-card:hover { box-shadow: var(--shadow); }
        .slot-icon {
          width: 46px; height: 46px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }
        .slot-info { flex: 1; }
        .slot-name {
          font-size: 16px; font-weight: 800;
          color: var(--gray-800);
        }
        .slot-hint {
          font-size: 12px; color: var(--gray-400);
          font-weight: 500; margin-top: 2px;
        }
        .time-picker {
          padding: 10px 14px;
          border: 2px solid var(--gray-200);
          border-radius: 12px;
          font-size: 18px; font-weight: 800;
          color: var(--gray-800);
          font-family: var(--font-display);
          outline: none;
          background: var(--gray-50);
          transition: border-color 0.2s, background 0.2s;
          cursor: pointer;
        }
        .time-picker:focus {
          border-color: var(--pink-300);
          background: white;
        }

        /* Action row */
        .action-row {
          display: flex; gap: 10px;
          padding: 8px 16px;
          margin-top: 8px;
        }
        .save-btn {
          flex: 1;
          padding: 16px;
          border: none;
          border-radius: var(--radius);
          background: linear-gradient(135deg, var(--pink-300), var(--pink-500));
          color: white;
          font-size: 16px; font-weight: 800;
          font-family: var(--font-body);
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(236,72,153,0.3);
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: all 0.2s;
        }
        .save-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(236,72,153,0.4); }
        .save-btn.saved-state {
          background: linear-gradient(135deg, var(--green-400), var(--green-500));
          box-shadow: 0 4px 16px rgba(34,197,94,0.3);
        }
        .reset-btn {
          padding: 16px 18px;
          border: 2px solid var(--gray-200);
          border-radius: var(--radius);
          background: white;
          color: var(--gray-500);
          font-size: 14px; font-weight: 700;
          font-family: var(--font-body);
          cursor: pointer;
          transition: all 0.2s;
        }
        .reset-btn:hover { border-color: var(--gray-300); background: var(--gray-50); }

        /* Test button */
        .test-row { padding: 0 16px; }
        .test-btn {
          width: 100%;
          padding: 14px;
          border: 2px solid var(--blue-200);
          border-radius: var(--radius);
          background: var(--blue-50);
          color: var(--blue-500);
          font-size: 15px; font-weight: 800;
          font-family: var(--font-body);
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: all 0.2s;
        }
        .test-btn:hover { background: var(--blue-100); }
        .test-btn.sent-state {
          background: var(--green-100); border-color: var(--green-300);
          color: var(--green-600);
        }

        /* Info cards */
        .info-card {
          margin: 12px 16px;
          background: var(--blue-50);
          border: 1.5px solid var(--blue-200);
          border-radius: var(--radius);
          padding: 14px 16px;
          display: flex; gap: 12px; align-items: flex-start;
        }
        .info-text {
          font-size: 13px; font-weight: 600;
          color: var(--gray-600); line-height: 1.5;
        }
        .sched-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: var(--green-100); color: var(--green-700);
          border-radius: 20px; padding: 4px 12px;
          font-size: 12px; font-weight: 800;
          margin-top: 6px;
        }
        .denied-card {
          margin: 0 16px;
          background: var(--orange-100);
          border: 1.5px solid var(--orange-200);
          border-radius: var(--radius);
          padding: 14px 16px;
          display: flex; gap: 12px; align-items: flex-start;
        }
        .denied-text { font-size: 13px; font-weight: 600; color: var(--orange-700); line-height: 1.5; }
      `}),f.jsxs("div",{className:"notif-page",children:[f.jsxs("div",{className:"notif-header",children:[f.jsx("button",{className:"back-btn",onClick:()=>e(-1),children:f.jsx($2,{size:18,color:"var(--gray-600)"})}),f.jsxs("div",{children:[f.jsx("div",{className:"notif-title",children:"🔔 Notifications"}),f.jsx("div",{className:"notif-subtitle",children:"Set exact reminder times for each slot"})]})]}),f.jsxs("div",{className:"perm-card",children:[f.jsx("div",{className:"perm-icon-wrap",style:{background:n==="granted"?"var(--green-100)":n==="denied"?"var(--red-100)":"var(--blue-100)"},children:n==="granted"?f.jsx(Fi,{size:22,color:"var(--green-500)"}):n==="denied"?f.jsx(W2,{size:22,color:"var(--red-400)"}):f.jsx(Fi,{size:22,color:"var(--blue-400)"})}),f.jsxs("div",{children:[f.jsx("div",{className:"perm-label",children:n==="granted"?"Notifications On":n==="denied"?"Blocked":"Not Enabled"}),f.jsx("div",{className:"perm-sublabel",children:n==="granted"?`${h} reminders scheduled`:n==="denied"?"Enable in browser settings":"Tap to allow reminders"})]}),n!=="denied"&&f.jsx("button",{className:`perm-status ${n==="granted"?"perm-granted":"perm-default"}`,onClick:n!=="granted"?g:void 0,style:{cursor:n==="granted"?"default":"pointer"},children:n==="granted"?"✓ Active":"Enable"})]}),n==="denied"&&f.jsxs("div",{className:"denied-card",children:[f.jsx(Np,{size:18,color:"var(--orange-500)",style:{flexShrink:0,marginTop:1}}),f.jsx("div",{className:"denied-text",children:"Notifications are blocked by your browser. To enable them, go to your browser settings → Site Settings → Notifications → Allow for this site."})]}),n==="granted"&&f.jsxs("div",{className:"info-card",children:[f.jsx(Bo,{size:16,color:"var(--blue-400)",style:{flexShrink:0,marginTop:1}}),f.jsxs("div",{className:"info-text",children:["Reminders fire at the exact times you set below — once per slot per day. Times are saved on this device and reminders re-schedule automatically when you open the app.",h>0&&f.jsx("div",{children:f.jsxs("span",{className:"sched-badge",children:[f.jsx(fo,{size:12}),h," doses scheduled today"]})})]})]}),f.jsx("div",{className:"section-label",children:"Reminder Times"}),$D.map(C=>f.jsxs("div",{className:"slot-card",children:[f.jsx("div",{className:"slot-icon",style:{background:C.bg},children:C.emoji}),f.jsxs("div",{className:"slot-info",children:[f.jsx("div",{className:"slot-name",children:C.label}),f.jsxs("div",{className:"slot-hint",children:["Reminder fires at"," ",f.jsx("strong",{style:{color:C.color},children:qD(i[C.key]||Ui[C.key])})]})]}),f.jsx("input",{type:"time",className:"time-picker",value:i[C.key]||Ui[C.key],onChange:x=>s(w=>({...w,[C.key]:x.target.value}))})]},C.key)),f.jsxs("div",{className:"action-row",children:[f.jsx("button",{className:`save-btn ${o?"saved-state":""}`,onClick:T,children:o?f.jsxs(f.Fragment,{children:[f.jsx(fo,{size:18})," Saved!"]}):f.jsxs(f.Fragment,{children:[f.jsx(Fi,{size:18})," Save & Schedule"]})}),f.jsx("button",{className:"reset-btn",onClick:P,children:"Reset"})]}),n==="granted"&&f.jsx("div",{className:"test-row",style:{marginTop:8},children:f.jsx("button",{className:`test-btn ${u?"sent-state":""}`,onClick:I,children:u?f.jsxs(f.Fragment,{children:[f.jsx(fo,{size:16})," Notification Sent!"]}):f.jsxs(f.Fragment,{children:[f.jsx(Z2,{size:16})," Send Test Notification"]})})})]})]})}function qD(t){if(!t)return"";const[e,n]=t.split(":").map(Number),r=e>=12?"PM":"AM";return`${e%12||12}:${String(n).padStart(2,"0")} ${r}`}function Ax(){return f.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"var(--pink-50)",gap:16},children:[f.jsx("div",{style:{width:56,height:56,borderRadius:"50%",background:"linear-gradient(135deg, var(--pink-300), var(--blue-300))",display:"flex",alignItems:"center",justifyContent:"center",animation:"spin 1.2s linear infinite",boxShadow:"0 4px 16px rgba(249,168,212,0.4)"},children:f.jsx("span",{style:{fontSize:24},children:"💊"})}),f.jsx("p",{style:{fontFamily:"var(--font-display)",fontWeight:700,color:"var(--pink-400)",fontSize:18},children:"MedAssist"}),f.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]})}function HD(){const[t,e]=O.useState(null),[n,r]=O.useState(!1),[i,s]=O.useState(!1),[o,l]=O.useState(!1),[u,c]=O.useState(!1);O.useEffect(()=>{if(sessionStorage.getItem("pwa-dismissed"))return;const g=/iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase()),T=window.navigator.standalone;s(g),g&&!T&&setTimeout(()=>r(!0),3e3);const I=P=>{P.preventDefault(),e(P),setTimeout(()=>r(!0),2e3)};return window.addEventListener("beforeinstallprompt",I),window.addEventListener("appinstalled",()=>r(!1)),()=>window.removeEventListener("beforeinstallprompt",I)},[]);const h=async()=>{if(!t)return;t.prompt();const{outcome:g}=await t.userChoice;g==="accepted"&&r(!1),e(null)},m=()=>{r(!1),c(!0),sessionStorage.setItem("pwa-dismissed","1")};return!n||u?null:f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        .pwa-banner {
          position: fixed;
          bottom: calc(var(--nav-height) + 12px);
          left: 12px; right: 12px;
          background: white;
          border-radius: var(--radius-lg);
          padding: 16px;
          box-shadow: var(--shadow-lg);
          display: flex; align-items: center; gap: 14px;
          z-index: 150;
          animation: slideUp 0.4s ease;
          border: 1.5px solid var(--pink-100);
        }
        .pwa-icon-wrap {
          width: 48px; height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, var(--pink-200), var(--blue-200));
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          font-size: 24px;
        }
        .pwa-text { flex: 1; }
        .pwa-title { font-size: 15px; font-weight: 800; color: var(--gray-800); }
        .pwa-sub { font-size: 12px; color: var(--gray-400); font-weight: 500; margin-top: 2px; }
        .pwa-actions { display: flex; gap: 8px; align-items: center; }
        .pwa-install-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 9px 14px;
          border: none; border-radius: 12px;
          background: linear-gradient(135deg, var(--pink-300), var(--pink-500));
          color: white;
          font-size: 13px; font-weight: 800;
          font-family: var(--font-body);
          cursor: pointer;
          box-shadow: 0 3px 10px rgba(236,72,153,0.35);
          white-space: nowrap;
          transition: all 0.2s;
        }
        .pwa-install-btn:hover { transform: scale(1.03); }
        .pwa-dismiss-btn {
          width: 30px; height: 30px;
          border-radius: 50%; border: none;
          background: var(--gray-100);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; flex-shrink: 0;
        }
        /* iOS guide modal */
        .ios-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(4px);
          z-index: 300;
          display: flex; align-items: flex-end;
        }
        .ios-sheet {
          width: 100%; background: white;
          border-radius: 28px 28px 0 0;
          padding: 24px 24px 48px;
          animation: slideUp 0.35s ease;
        }
        .ios-title {
          font-family: var(--font-display);
          font-size: 22px; font-weight: 800;
          color: var(--gray-800); margin-bottom: 6px;
        }
        .ios-sub { font-size: 14px; color: var(--gray-500); font-weight: 500; margin-bottom: 20px; }
        .ios-step {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid var(--gray-100);
        }
        .ios-step:last-child { border-bottom: none; }
        .step-num {
          width: 32px; height: 32px; border-radius: 50%;
          background: linear-gradient(135deg, var(--pink-300), var(--pink-400));
          color: white; font-size: 15px; font-weight: 900;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .step-text { font-size: 15px; font-weight: 600; color: var(--gray-700); line-height: 1.4; }
        .step-hint { font-size: 13px; color: var(--gray-400); margin-top: 3px; }
        .ios-close-btn {
          width: 100%; padding: 16px;
          border: none; border-radius: var(--radius);
          background: var(--gray-100);
          color: var(--gray-600);
          font-size: 16px; font-weight: 800;
          font-family: var(--font-body); cursor: pointer;
          margin-top: 20px;
        }
      `}),f.jsxs("div",{className:"pwa-banner",children:[f.jsx("div",{className:"pwa-icon-wrap",children:"💊"}),f.jsxs("div",{className:"pwa-text",children:[f.jsx("div",{className:"pwa-title",children:"Install MedAssist"}),f.jsx("div",{className:"pwa-sub",children:"Add to home screen for quick access"})]}),f.jsxs("div",{className:"pwa-actions",children:[i?f.jsxs("button",{className:"pwa-install-btn",onClick:()=>l(!0),children:[f.jsx(tN,{size:14})," How to"]}):f.jsxs("button",{className:"pwa-install-btn",onClick:h,children:[f.jsx(K2,{size:14})," Install"]}),f.jsx("button",{className:"pwa-dismiss-btn",onClick:m,children:f.jsx(gx,{size:14,color:"var(--gray-400)"})})]})]}),o&&f.jsx("div",{className:"ios-overlay",onClick:()=>l(!1),children:f.jsxs("div",{className:"ios-sheet",onClick:g=>g.stopPropagation(),children:[f.jsx("div",{className:"ios-title",children:"📱 Install on iPhone"}),f.jsx("div",{className:"ios-sub",children:"Follow these steps to add MedAssist to your home screen:"}),[{n:1,text:"Tap the Share button",hint:"The box with an arrow pointing up at the bottom of Safari"},{n:2,text:'Scroll down and tap "Add to Home Screen"',hint:"You may need to scroll the share sheet to find this option"},{n:3,text:'Tap "Add" in the top right corner',hint:"MedAssist will appear on your home screen like a native app"}].map(({n:g,text:T,hint:I})=>f.jsxs("div",{className:"ios-step",children:[f.jsx("div",{className:"step-num",children:g}),f.jsxs("div",{children:[f.jsx("div",{className:"step-text",children:T}),f.jsx("div",{className:"step-hint",children:I})]})]},g)),f.jsx("button",{className:"ios-close-btn",onClick:()=>{l(!1),m()},children:"Got it!"})]})})]})}function zs({children:t}){const{user:e,loading:n}=ln();return n?f.jsx(Ax,{}):e?t:f.jsx(hl,{to:"/login",replace:!0})}function KD(){const{user:t,userProfile:e,loading:n}=ln();return n?f.jsx(Ax,{}):f.jsxs(f.Fragment,{children:[f.jsxs(Ik,{children:[f.jsx(mn,{path:"/login",element:t?f.jsx(hl,{to:"/",replace:!0}):f.jsx(rN,{})}),f.jsx(mn,{path:"/signup",element:t?f.jsx(hl,{to:"/",replace:!0}):f.jsx(iN,{})}),f.jsx(mn,{path:"/",element:f.jsx(zs,{children:(e==null?void 0:e.role)==="family"?f.jsx(BD,{}):f.jsx(OD,{})})}),f.jsx(mn,{path:"/calendar",element:f.jsx(zs,{children:f.jsx(VD,{})})}),f.jsx(mn,{path:"/stock",element:f.jsx(zs,{children:f.jsx(jD,{})})}),f.jsx(mn,{path:"/profile",element:f.jsx(zs,{children:f.jsx(FD,{})})}),f.jsx(mn,{path:"/notifications",element:f.jsx(zs,{children:f.jsx(WD,{})})}),f.jsx(mn,{path:"*",element:f.jsx(hl,{to:"/",replace:!0})})]}),t&&f.jsx(zD,{}),f.jsx(HD,{})]})}function GD(){return f.jsx(Nk,{children:f.jsx(V2,{children:f.jsx(KD,{})})})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js",{scope:"/"}).then(t=>{console.log("[SW] Registered, scope:",t.scope),setInterval(()=>t.update(),6e4)}).catch(t=>console.warn("[SW] Registration failed:",t))});md.createRoot(document.getElementById("root")).render(f.jsx(Pv.StrictMode,{children:f.jsx(GD,{})}));
