function Oc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(r,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function Mc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ic={exports:{}},Us={},Fc={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ga=Symbol.for("react.element"),Ip=Symbol.for("react.portal"),Fp=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),Up=Symbol.for("react.profiler"),Bp=Symbol.for("react.provider"),Hp=Symbol.for("react.context"),Vp=Symbol.for("react.forward_ref"),Wp=Symbol.for("react.suspense"),$p=Symbol.for("react.memo"),Jp=Symbol.for("react.lazy"),Xo=Symbol.iterator;function Qp(e){return e===null||typeof e!="object"?null:(e=Xo&&e[Xo]||e["@@iterator"],typeof e=="function"?e:null)}var zc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uc=Object.assign,Bc={};function xr(e,t,n){this.props=e,this.context=t,this.refs=Bc,this.updater=n||zc}xr.prototype.isReactComponent={};xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hc(){}Hc.prototype=xr.prototype;function Ml(e,t,n){this.props=e,this.context=t,this.refs=Bc,this.updater=n||zc}var Il=Ml.prototype=new Hc;Il.constructor=Ml;Uc(Il,xr.prototype);Il.isPureReactComponent=!0;var Zo=Array.isArray,Vc=Object.prototype.hasOwnProperty,Fl={current:null},Wc={key:!0,ref:!0,__self:!0,__source:!0};function $c(e,t,n){var r,a={},s=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)Vc.call(t,r)&&!Wc.hasOwnProperty(r)&&(a[r]=t[r]);var u=arguments.length-2;if(u===1)a.children=n;else if(1<u){for(var o=Array(u),c=0;c<u;c++)o[c]=arguments[c+2];a.children=o}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)a[r]===void 0&&(a[r]=u[r]);return{$$typeof:ga,type:e,key:s,ref:i,props:a,_owner:Fl.current}}function qp(e,t){return{$$typeof:ga,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function zl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ga}function Kp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var eu=/\/+/g;function oi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kp(""+e.key):t.toString(36)}function Za(e,t,n,r,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ga:case Ip:i=!0}}if(i)return i=e,a=a(i),e=r===""?"."+oi(i,0):r,Zo(a)?(n="",e!=null&&(n=e.replace(eu,"$&/")+"/"),Za(a,t,n,"",function(c){return c})):a!=null&&(zl(a)&&(a=qp(a,n+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(eu,"$&/")+"/")+e)),t.push(a)),1;if(i=0,r=r===""?".":r+":",Zo(e))for(var u=0;u<e.length;u++){s=e[u];var o=r+oi(s,u);i+=Za(s,t,n,o,a)}else if(o=Qp(e),typeof o=="function")for(e=o.call(e),u=0;!(s=e.next()).done;)s=s.value,o=r+oi(s,u++),i+=Za(s,t,n,o,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Da(e,t,n){if(e==null)return e;var r=[],a=0;return Za(e,r,"","",function(s){return t.call(n,s,a++)}),r}function Gp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},es={transition:null},Yp={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:es,ReactCurrentOwner:Fl};function Jc(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:Da,forEach:function(e,t,n){Da(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Da(e,function(){t++}),t},toArray:function(e){return Da(e,function(t){return t})||[]},only:function(e){if(!zl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=xr;Q.Fragment=Fp;Q.Profiler=Up;Q.PureComponent=Ml;Q.StrictMode=zp;Q.Suspense=Wp;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yp;Q.act=Jc;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Uc({},e.props),a=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=Fl.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(o in t)Vc.call(t,o)&&!Wc.hasOwnProperty(o)&&(r[o]=t[o]===void 0&&u!==void 0?u[o]:t[o])}var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){u=Array(o);for(var c=0;c<o;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:ga,type:e.type,key:a,ref:s,props:r,_owner:i}};Q.createContext=function(e){return e={$$typeof:Hp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bp,_context:e},e.Consumer=e};Q.createElement=$c;Q.createFactory=function(e){var t=$c.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:Vp,render:e}};Q.isValidElement=zl;Q.lazy=function(e){return{$$typeof:Jp,_payload:{_status:-1,_result:e},_init:Gp}};Q.memo=function(e,t){return{$$typeof:$p,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=es.transition;es.transition={};try{e()}finally{es.transition=t}};Q.unstable_act=Jc;Q.useCallback=function(e,t){return Be.current.useCallback(e,t)};Q.useContext=function(e){return Be.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Be.current.useEffect(e,t)};Q.useId=function(){return Be.current.useId()};Q.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Be.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};Q.useRef=function(e){return Be.current.useRef(e)};Q.useState=function(e){return Be.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Be.current.useTransition()};Q.version="18.3.1";Fc.exports=Q;var _=Fc.exports;const Qc=Mc(_),Xp=Oc({__proto__:null,default:Qc},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp=_,em=Symbol.for("react.element"),tm=Symbol.for("react.fragment"),nm=Object.prototype.hasOwnProperty,rm=Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,am={key:!0,ref:!0,__self:!0,__source:!0};function qc(e,t,n){var r,a={},s=null,i=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)nm.call(t,r)&&!am.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:em,type:e,key:s,ref:i,props:a,_owner:rm.current}}Us.Fragment=tm;Us.jsx=qc;Us.jsxs=qc;Ic.exports=Us;var l=Ic.exports,Fi={},Kc={exports:{}},nt={},Gc={exports:{}},Yc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,H){var W=D.length;D.push(H);e:for(;0<W;){var te=W-1>>>1,ne=D[te];if(0<a(ne,H))D[te]=H,D[W]=ne,W=te;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var H=D[0],W=D.pop();if(W!==H){D[0]=W;e:for(var te=0,ne=D.length,pt=ne>>>1;te<pt;){var Ke=2*(te+1)-1,Oe=D[Ke],Me=Ke+1,at=D[Me];if(0>a(Oe,W))Me<ne&&0>a(at,Oe)?(D[te]=at,D[Me]=W,te=Me):(D[te]=Oe,D[Ke]=W,te=Ke);else if(Me<ne&&0>a(at,W))D[te]=at,D[Me]=W,te=Me;else break e}}return H}function a(D,H){var W=D.sortIndex-H.sortIndex;return W!==0?W:D.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,u=i.now();e.unstable_now=function(){return i.now()-u}}var o=[],c=[],h=1,f=null,p=3,v=!1,x=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var H=n(c);H!==null;){if(H.callback===null)r(c);else if(H.startTime<=D)r(c),H.sortIndex=H.expirationTime,t(o,H);else break;H=n(c)}}function R(D){if(w=!1,g(D),!x)if(n(o)!==null)x=!0,Vt(T);else{var H=n(c);H!==null&&Wt(R,H.startTime-D)}}function T(D,H){x=!1,w&&(w=!1,m(j),j=-1),v=!0;var W=p;try{for(g(H),f=n(o);f!==null&&(!(f.expirationTime>H)||D&&!X());){var te=f.callback;if(typeof te=="function"){f.callback=null,p=f.priorityLevel;var ne=te(f.expirationTime<=H);H=e.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(o)&&r(o),g(H)}else r(o);f=n(o)}if(f!==null)var pt=!0;else{var Ke=n(c);Ke!==null&&Wt(R,Ke.startTime-H),pt=!1}return pt}finally{f=null,p=W,v=!1}}var A=!1,k=null,j=-1,B=5,P=-1;function X(){return!(e.unstable_now()-P<B)}function re(){if(k!==null){var D=e.unstable_now();P=D;var H=!0;try{H=k(!0,D)}finally{H?ke():(A=!1,k=null)}}else A=!1}var ke;if(typeof d=="function")ke=function(){d(re)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,ft=je.port2;je.port1.onmessage=re,ke=function(){ft.postMessage(null)}}else ke=function(){E(re,0)};function Vt(D){k=D,A||(A=!0,ke())}function Wt(D,H){j=E(function(){D(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,Vt(T))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(o)},e.unstable_next=function(D){switch(p){case 1:case 2:case 3:var H=3;break;default:H=p}var W=p;p=H;try{return D()}finally{p=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var W=p;p=D;try{return H()}finally{p=W}},e.unstable_scheduleCallback=function(D,H,W){var te=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?te+W:te):W=te,D){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=W+ne,D={id:h++,callback:H,priorityLevel:D,startTime:W,expirationTime:ne,sortIndex:-1},W>te?(D.sortIndex=W,t(c,D),n(o)===null&&D===n(c)&&(w?(m(j),j=-1):w=!0,Wt(R,W-te))):(D.sortIndex=ne,t(o,D),x||v||(x=!0,Vt(T))),D},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(D){var H=p;return function(){var W=p;p=H;try{return D.apply(this,arguments)}finally{p=W}}}})(Yc);Gc.exports=Yc;var sm=Gc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im=_,tt=sm;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xc=new Set,Yr={};function Fn(e,t){cr(e,t),cr(e+"Capture",t)}function cr(e,t){for(Yr[e]=t,e=0;e<t.length;e++)Xc.add(t[e])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zi=Object.prototype.hasOwnProperty,lm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tu={},nu={};function om(e){return zi.call(nu,e)?!0:zi.call(tu,e)?!1:lm.test(e)?nu[e]=!0:(tu[e]=!0,!1)}function um(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cm(e,t,n,r){if(t===null||typeof t>"u"||um(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,a,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new He(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ul=/[\-:]([a-z])/g;function Bl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ul,Bl);Te[t]=new He(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ul,Bl);Te[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ul,Bl);Te[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hl(e,t,n,r){var a=Te.hasOwnProperty(t)?Te[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cm(t,n,a,r)&&(n=null),r||a===null?om(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bt=im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pa=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),Vl=Symbol.for("react.strict_mode"),Ui=Symbol.for("react.profiler"),Zc=Symbol.for("react.provider"),ed=Symbol.for("react.context"),Wl=Symbol.for("react.forward_ref"),Bi=Symbol.for("react.suspense"),Hi=Symbol.for("react.suspense_list"),$l=Symbol.for("react.memo"),Kt=Symbol.for("react.lazy"),td=Symbol.for("react.offscreen"),ru=Symbol.iterator;function jr(e){return e===null||typeof e!="object"?null:(e=ru&&e[ru]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,ui;function Ir(e){if(ui===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ui=t&&t[1]||""}return`
`+ui+e}var ci=!1;function di(e,t){if(!e||ci)return"";ci=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),s=r.stack.split(`
`),i=a.length-1,u=s.length-1;1<=i&&0<=u&&a[i]!==s[u];)u--;for(;1<=i&&0<=u;i--,u--)if(a[i]!==s[u]){if(i!==1||u!==1)do if(i--,u--,0>u||a[i]!==s[u]){var o=`
`+a[i].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=i&&0<=u);break}}}finally{ci=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ir(e):""}function dm(e){switch(e.tag){case 5:return Ir(e.type);case 16:return Ir("Lazy");case 13:return Ir("Suspense");case 19:return Ir("SuspenseList");case 0:case 2:case 15:return e=di(e.type,!1),e;case 11:return e=di(e.type.render,!1),e;case 1:return e=di(e.type,!0),e;default:return""}}function Vi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Jn:return"Portal";case Ui:return"Profiler";case Vl:return"StrictMode";case Bi:return"Suspense";case Hi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ed:return(e.displayName||"Context")+".Consumer";case Zc:return(e._context.displayName||"Context")+".Provider";case Wl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $l:return t=e.displayName||null,t!==null?t:Vi(e.type)||"Memo";case Kt:t=e._payload,e=e._init;try{return Vi(e(t))}catch{}}return null}function fm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vi(t);case 8:return t===Vl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pm(e){var t=nd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function La(e){e._valueTracker||(e._valueTracker=pm(e))}function rd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=nd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wi(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function au(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ad(e,t){t=t.checked,t!=null&&Hl(e,"checked",t,!1)}function $i(e,t){ad(e,t);var n=fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ji(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ji(e,t.type,fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function su(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ji(e,t,n){(t!=="number"||fs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function ar(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Qi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function iu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Fr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fn(n)}}function sd(e,t){var n=fn(t.value),r=fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function id(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?id(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Aa,ld=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Aa=Aa||document.createElement("div"),Aa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Aa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mm=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(e){mm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hr[t]=Hr[e]})});function od(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hr.hasOwnProperty(e)&&Hr[e]?(""+t).trim():t+"px"}function ud(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=od(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var hm=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ki(e,t){if(t){if(hm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Gi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yi=null;function Jl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xi=null,sr=null,ir=null;function ou(e){if(e=xa(e)){if(typeof Xi!="function")throw Error(C(280));var t=e.stateNode;t&&(t=$s(t),Xi(e.stateNode,e.type,t))}}function cd(e){sr?ir?ir.push(e):ir=[e]:sr=e}function dd(){if(sr){var e=sr,t=ir;if(ir=sr=null,ou(e),t)for(e=0;e<t.length;e++)ou(t[e])}}function fd(e,t){return e(t)}function pd(){}var fi=!1;function md(e,t,n){if(fi)return e(t,n);fi=!0;try{return fd(e,t,n)}finally{fi=!1,(sr!==null||ir!==null)&&(pd(),dd())}}function Zr(e,t){var n=e.stateNode;if(n===null)return null;var r=$s(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Zi=!1;if(Mt)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){Zi=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{Zi=!1}function gm(e,t,n,r,a,s,i,u,o){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Vr=!1,ps=null,ms=!1,el=null,vm={onError:function(e){Vr=!0,ps=e}};function ym(e,t,n,r,a,s,i,u,o){Vr=!1,ps=null,gm.apply(vm,arguments)}function xm(e,t,n,r,a,s,i,u,o){if(ym.apply(this,arguments),Vr){if(Vr){var c=ps;Vr=!1,ps=null}else throw Error(C(198));ms||(ms=!0,el=c)}}function zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uu(e){if(zn(e)!==e)throw Error(C(188))}function wm(e){var t=e.alternate;if(!t){if(t=zn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return uu(a),e;if(s===r)return uu(a),t;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=a,r=s;else{for(var i=!1,u=a.child;u;){if(u===n){i=!0,n=a,r=s;break}if(u===r){i=!0,r=a,n=s;break}u=u.sibling}if(!i){for(u=s.child;u;){if(u===n){i=!0,n=s,r=a;break}if(u===r){i=!0,r=s,n=a;break}u=u.sibling}if(!i)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function gd(e){return e=wm(e),e!==null?vd(e):null}function vd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vd(e);if(t!==null)return t;e=e.sibling}return null}var yd=tt.unstable_scheduleCallback,cu=tt.unstable_cancelCallback,km=tt.unstable_shouldYield,Sm=tt.unstable_requestPaint,ve=tt.unstable_now,_m=tt.unstable_getCurrentPriorityLevel,Ql=tt.unstable_ImmediatePriority,xd=tt.unstable_UserBlockingPriority,hs=tt.unstable_NormalPriority,bm=tt.unstable_LowPriority,wd=tt.unstable_IdlePriority,Bs=null,jt=null;function Rm(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Bs,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Em,jm=Math.log,Nm=Math.LN2;function Em(e){return e>>>=0,e===0?32:31-(jm(e)/Nm|0)|0}var Oa=64,Ma=4194304;function zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,s=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~a;u!==0?r=zr(u):(s&=i,s!==0&&(r=zr(s)))}else i=n&~a,i!==0?r=zr(i):s!==0&&(r=zr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),a=1<<n,r|=e[n],t&=~a;return r}function Cm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-xt(s),u=1<<i,o=a[i];o===-1?(!(u&n)||u&r)&&(a[i]=Cm(u,t)):o<=t&&(e.expiredLanes|=u),s&=~u}}function tl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kd(){var e=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),e}function pi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function va(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function Dm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-xt(n),s=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~s}}function ql(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var ee=0;function Sd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _d,Kl,bd,Rd,jd,nl=!1,Ia=[],nn=null,rn=null,an=null,ea=new Map,ta=new Map,Yt=[],Pm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function du(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":ea.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(t.pointerId)}}function Er(e,t,n,r,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[a]},t!==null&&(t=xa(t),t!==null&&Kl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Lm(e,t,n,r,a){switch(t){case"focusin":return nn=Er(nn,e,t,n,r,a),!0;case"dragenter":return rn=Er(rn,e,t,n,r,a),!0;case"mouseover":return an=Er(an,e,t,n,r,a),!0;case"pointerover":var s=a.pointerId;return ea.set(s,Er(ea.get(s)||null,e,t,n,r,a)),!0;case"gotpointercapture":return s=a.pointerId,ta.set(s,Er(ta.get(s)||null,e,t,n,r,a)),!0}return!1}function Nd(e){var t=jn(e.target);if(t!==null){var n=zn(t);if(n!==null){if(t=n.tag,t===13){if(t=hd(n),t!==null){e.blockedOn=t,jd(e.priority,function(){bd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ts(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yi=r,n.target.dispatchEvent(r),Yi=null}else return t=xa(n),t!==null&&Kl(t),e.blockedOn=n,!1;t.shift()}return!0}function fu(e,t,n){ts(e)&&n.delete(t)}function Am(){nl=!1,nn!==null&&ts(nn)&&(nn=null),rn!==null&&ts(rn)&&(rn=null),an!==null&&ts(an)&&(an=null),ea.forEach(fu),ta.forEach(fu)}function Cr(e,t){e.blockedOn===t&&(e.blockedOn=null,nl||(nl=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,Am)))}function na(e){function t(a){return Cr(a,e)}if(0<Ia.length){Cr(Ia[0],e);for(var n=1;n<Ia.length;n++){var r=Ia[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&Cr(nn,e),rn!==null&&Cr(rn,e),an!==null&&Cr(an,e),ea.forEach(t),ta.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)Nd(n),n.blockedOn===null&&Yt.shift()}var lr=Bt.ReactCurrentBatchConfig,vs=!0;function Om(e,t,n,r){var a=ee,s=lr.transition;lr.transition=null;try{ee=1,Gl(e,t,n,r)}finally{ee=a,lr.transition=s}}function Mm(e,t,n,r){var a=ee,s=lr.transition;lr.transition=null;try{ee=4,Gl(e,t,n,r)}finally{ee=a,lr.transition=s}}function Gl(e,t,n,r){if(vs){var a=rl(e,t,n,r);if(a===null)_i(e,t,r,ys,n),du(e,r);else if(Lm(a,e,t,n,r))r.stopPropagation();else if(du(e,r),t&4&&-1<Pm.indexOf(e)){for(;a!==null;){var s=xa(a);if(s!==null&&_d(s),s=rl(e,t,n,r),s===null&&_i(e,t,r,ys,n),s===a)break;a=s}a!==null&&r.stopPropagation()}else _i(e,t,r,null,n)}}var ys=null;function rl(e,t,n,r){if(ys=null,e=Jl(r),e=jn(e),e!==null)if(t=zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ys=e,null}function Ed(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_m()){case Ql:return 1;case xd:return 4;case hs:case bm:return 16;case wd:return 536870912;default:return 16}default:return 16}}var Zt=null,Yl=null,ns=null;function Cd(){if(ns)return ns;var e,t=Yl,n=t.length,r,a="value"in Zt?Zt.value:Zt.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===a[s-r];r++);return ns=a.slice(e,1<r?1-r:void 0)}function rs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fa(){return!0}function pu(){return!1}function rt(e){function t(n,r,a,s,i){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fa:pu,this.isPropagationStopped=pu,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=rt(wr),ya=fe({},wr,{view:0,detail:0}),Im=rt(ya),mi,hi,Tr,Hs=fe({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(mi=e.screenX-Tr.screenX,hi=e.screenY-Tr.screenY):hi=mi=0,Tr=e),mi)},movementY:function(e){return"movementY"in e?e.movementY:hi}}),mu=rt(Hs),Fm=fe({},Hs,{dataTransfer:0}),zm=rt(Fm),Um=fe({},ya,{relatedTarget:0}),gi=rt(Um),Bm=fe({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Hm=rt(Bm),Vm=fe({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wm=rt(Vm),$m=fe({},wr,{data:0}),hu=rt($m),Jm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Km(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qm[e])?!!t[e]:!1}function Zl(){return Km}var Gm=fe({},ya,{key:function(e){if(e.key){var t=Jm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(e){return e.type==="keypress"?rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ym=rt(Gm),Xm=fe({},Hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=rt(Xm),Zm=fe({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),eh=rt(Zm),th=fe({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),nh=rt(th),rh=fe({},Hs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ah=rt(rh),sh=[9,13,27,32],eo=Mt&&"CompositionEvent"in window,Wr=null;Mt&&"documentMode"in document&&(Wr=document.documentMode);var ih=Mt&&"TextEvent"in window&&!Wr,Td=Mt&&(!eo||Wr&&8<Wr&&11>=Wr),vu=" ",yu=!1;function Dd(e,t){switch(e){case"keyup":return sh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function lh(e,t){switch(e){case"compositionend":return Pd(t);case"keypress":return t.which!==32?null:(yu=!0,vu);case"textInput":return e=t.data,e===vu&&yu?null:e;default:return null}}function oh(e,t){if(qn)return e==="compositionend"||!eo&&Dd(e,t)?(e=Cd(),ns=Yl=Zt=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Td&&t.locale!=="ko"?null:t.data;default:return null}}var uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uh[e.type]:t==="textarea"}function Ld(e,t,n,r){cd(r),t=xs(t,"onChange"),0<t.length&&(n=new Xl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $r=null,ra=null;function ch(e){Wd(e,0)}function Vs(e){var t=Yn(e);if(rd(t))return e}function dh(e,t){if(e==="change")return t}var Ad=!1;if(Mt){var vi;if(Mt){var yi="oninput"in document;if(!yi){var wu=document.createElement("div");wu.setAttribute("oninput","return;"),yi=typeof wu.oninput=="function"}vi=yi}else vi=!1;Ad=vi&&(!document.documentMode||9<document.documentMode)}function ku(){$r&&($r.detachEvent("onpropertychange",Od),ra=$r=null)}function Od(e){if(e.propertyName==="value"&&Vs(ra)){var t=[];Ld(t,ra,e,Jl(e)),md(ch,t)}}function fh(e,t,n){e==="focusin"?(ku(),$r=t,ra=n,$r.attachEvent("onpropertychange",Od)):e==="focusout"&&ku()}function ph(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vs(ra)}function mh(e,t){if(e==="click")return Vs(t)}function hh(e,t){if(e==="input"||e==="change")return Vs(t)}function gh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:gh;function aa(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!zi.call(t,a)||!kt(e[a],t[a]))return!1}return!0}function Su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _u(e,t){var n=Su(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Su(n)}}function Md(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Md(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Id(){for(var e=window,t=fs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fs(e.document)}return t}function to(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vh(e){var t=Id(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Md(n.ownerDocument.documentElement,n)){if(r!==null&&to(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,s=Math.min(r.start,a);r=r.end===void 0?s:Math.min(r.end,a),!e.extend&&s>r&&(a=r,r=s,s=a),a=_u(n,s);var i=_u(n,r);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yh=Mt&&"documentMode"in document&&11>=document.documentMode,Kn=null,al=null,Jr=null,sl=!1;function bu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sl||Kn==null||Kn!==fs(r)||(r=Kn,"selectionStart"in r&&to(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&aa(Jr,r)||(Jr=r,r=xs(al,"onSelect"),0<r.length&&(t=new Xl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kn)))}function za(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gn={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionend:za("Transition","TransitionEnd")},xi={},Fd={};Mt&&(Fd=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function Ws(e){if(xi[e])return xi[e];if(!Gn[e])return e;var t=Gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fd)return xi[e]=t[n];return e}var zd=Ws("animationend"),Ud=Ws("animationiteration"),Bd=Ws("animationstart"),Hd=Ws("transitionend"),Vd=new Map,Ru="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,t){Vd.set(e,t),Fn(t,[e])}for(var wi=0;wi<Ru.length;wi++){var ki=Ru[wi],xh=ki.toLowerCase(),wh=ki[0].toUpperCase()+ki.slice(1);mn(xh,"on"+wh)}mn(zd,"onAnimationEnd");mn(Ud,"onAnimationIteration");mn(Bd,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(Hd,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));function ju(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xm(r,t,void 0,e),e.currentTarget=null}function Wd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],o=u.instance,c=u.currentTarget;if(u=u.listener,o!==s&&a.isPropagationStopped())break e;ju(a,u,c),s=o}else for(i=0;i<r.length;i++){if(u=r[i],o=u.instance,c=u.currentTarget,u=u.listener,o!==s&&a.isPropagationStopped())break e;ju(a,u,c),s=o}}}if(ms)throw e=el,ms=!1,el=null,e}function ie(e,t){var n=t[cl];n===void 0&&(n=t[cl]=new Set);var r=e+"__bubble";n.has(r)||($d(t,e,2,!1),n.add(r))}function Si(e,t,n){var r=0;t&&(r|=4),$d(n,e,r,t)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function sa(e){if(!e[Ua]){e[Ua]=!0,Xc.forEach(function(n){n!=="selectionchange"&&(kh.has(n)||Si(n,!1,e),Si(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ua]||(t[Ua]=!0,Si("selectionchange",!1,t))}}function $d(e,t,n,r){switch(Ed(t)){case 1:var a=Om;break;case 4:a=Mm;break;default:a=Gl}n=a.bind(null,t,n,e),a=void 0,!Zi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function _i(e,t,n,r,a){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===a||u.nodeType===8&&u.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var o=i.tag;if((o===3||o===4)&&(o=i.stateNode.containerInfo,o===a||o.nodeType===8&&o.parentNode===a))return;i=i.return}for(;u!==null;){if(i=jn(u),i===null)return;if(o=i.tag,o===5||o===6){r=s=i;continue e}u=u.parentNode}}r=r.return}md(function(){var c=s,h=Jl(n),f=[];e:{var p=Vd.get(e);if(p!==void 0){var v=Xl,x=e;switch(e){case"keypress":if(rs(n)===0)break e;case"keydown":case"keyup":v=Ym;break;case"focusin":x="focus",v=gi;break;case"focusout":x="blur",v=gi;break;case"beforeblur":case"afterblur":v=gi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=zm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=eh;break;case zd:case Ud:case Bd:v=Hm;break;case Hd:v=nh;break;case"scroll":v=Im;break;case"wheel":v=ah;break;case"copy":case"cut":case"paste":v=Wm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=gu}var w=(t&4)!==0,E=!w&&e==="scroll",m=w?p!==null?p+"Capture":null:p;w=[];for(var d=c,g;d!==null;){g=d;var R=g.stateNode;if(g.tag===5&&R!==null&&(g=R,m!==null&&(R=Zr(d,m),R!=null&&w.push(ia(d,R,g)))),E)break;d=d.return}0<w.length&&(p=new v(p,x,null,n,h),f.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Yi&&(x=n.relatedTarget||n.fromElement)&&(jn(x)||x[It]))break e;if((v||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=c,x=x?jn(x):null,x!==null&&(E=zn(x),x!==E||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=c),v!==x)){if(w=mu,R="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=gu,R="onPointerLeave",m="onPointerEnter",d="pointer"),E=v==null?p:Yn(v),g=x==null?p:Yn(x),p=new w(R,d+"leave",v,n,h),p.target=E,p.relatedTarget=g,R=null,jn(h)===c&&(w=new w(m,d+"enter",x,n,h),w.target=g,w.relatedTarget=E,R=w),E=R,v&&x)t:{for(w=v,m=x,d=0,g=w;g;g=Wn(g))d++;for(g=0,R=m;R;R=Wn(R))g++;for(;0<d-g;)w=Wn(w),d--;for(;0<g-d;)m=Wn(m),g--;for(;d--;){if(w===m||m!==null&&w===m.alternate)break t;w=Wn(w),m=Wn(m)}w=null}else w=null;v!==null&&Nu(f,p,v,w,!1),x!==null&&E!==null&&Nu(f,E,x,w,!0)}}e:{if(p=c?Yn(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var T=dh;else if(xu(p))if(Ad)T=hh;else{T=ph;var A=fh}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=mh);if(T&&(T=T(e,c))){Ld(f,T,n,h);break e}A&&A(e,p,c),e==="focusout"&&(A=p._wrapperState)&&A.controlled&&p.type==="number"&&Ji(p,"number",p.value)}switch(A=c?Yn(c):window,e){case"focusin":(xu(A)||A.contentEditable==="true")&&(Kn=A,al=c,Jr=null);break;case"focusout":Jr=al=Kn=null;break;case"mousedown":sl=!0;break;case"contextmenu":case"mouseup":case"dragend":sl=!1,bu(f,n,h);break;case"selectionchange":if(yh)break;case"keydown":case"keyup":bu(f,n,h)}var k;if(eo)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else qn?Dd(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Td&&n.locale!=="ko"&&(qn||j!=="onCompositionStart"?j==="onCompositionEnd"&&qn&&(k=Cd()):(Zt=h,Yl="value"in Zt?Zt.value:Zt.textContent,qn=!0)),A=xs(c,j),0<A.length&&(j=new hu(j,e,null,n,h),f.push({event:j,listeners:A}),k?j.data=k:(k=Pd(n),k!==null&&(j.data=k)))),(k=ih?lh(e,n):oh(e,n))&&(c=xs(c,"onBeforeInput"),0<c.length&&(h=new hu("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=k))}Wd(f,t)})}function ia(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xs(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=Zr(e,n),s!=null&&r.unshift(ia(e,s,a)),s=Zr(e,t),s!=null&&r.push(ia(e,s,a))),e=e.return}return r}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nu(e,t,n,r,a){for(var s=t._reactName,i=[];n!==null&&n!==r;){var u=n,o=u.alternate,c=u.stateNode;if(o!==null&&o===r)break;u.tag===5&&c!==null&&(u=c,a?(o=Zr(n,s),o!=null&&i.unshift(ia(n,o,u))):a||(o=Zr(n,s),o!=null&&i.push(ia(n,o,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Sh=/\r\n?/g,_h=/\u0000|\uFFFD/g;function Eu(e){return(typeof e=="string"?e:""+e).replace(Sh,`
`).replace(_h,"")}function Ba(e,t,n){if(t=Eu(t),Eu(e)!==t&&n)throw Error(C(425))}function ws(){}var il=null,ll=null;function ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ul=typeof setTimeout=="function"?setTimeout:void 0,bh=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,Rh=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu<"u"?function(e){return Cu.resolve(null).then(e).catch(jh)}:ul;function jh(e){setTimeout(function(){throw e})}function bi(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),na(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);na(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kr=Math.random().toString(36).slice(2),Rt="__reactFiber$"+kr,la="__reactProps$"+kr,It="__reactContainer$"+kr,cl="__reactEvents$"+kr,Nh="__reactListeners$"+kr,Eh="__reactHandles$"+kr;function jn(e){var t=e[Rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[It]||n[Rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Tu(e);e!==null;){if(n=e[Rt])return n;e=Tu(e)}return t}e=n,n=e.parentNode}return null}function xa(e){return e=e[Rt]||e[It],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function $s(e){return e[la]||null}var dl=[],Xn=-1;function hn(e){return{current:e}}function le(e){0>Xn||(e.current=dl[Xn],dl[Xn]=null,Xn--)}function se(e,t){Xn++,dl[Xn]=e.current,e.current=t}var pn={},Ae=hn(pn),Je=hn(!1),Pn=pn;function dr(e,t){var n=e.type.contextTypes;if(!n)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in n)a[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Qe(e){return e=e.childContextTypes,e!=null}function ks(){le(Je),le(Ae)}function Du(e,t,n){if(Ae.current!==pn)throw Error(C(168));se(Ae,t),se(Je,n)}function Jd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(C(108,fm(e)||"Unknown",a));return fe({},n,r)}function Ss(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Pn=Ae.current,se(Ae,e),se(Je,Je.current),!0}function Pu(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Jd(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,le(Je),le(Ae),se(Ae,e)):le(Je),se(Je,n)}var Dt=null,Js=!1,Ri=!1;function Qd(e){Dt===null?Dt=[e]:Dt.push(e)}function Ch(e){Js=!0,Qd(e)}function gn(){if(!Ri&&Dt!==null){Ri=!0;var e=0,t=ee;try{var n=Dt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,Js=!1}catch(a){throw Dt!==null&&(Dt=Dt.slice(e+1)),yd(Ql,gn),a}finally{ee=t,Ri=!1}}return null}var Zn=[],er=0,_s=null,bs=0,st=[],it=0,Ln=null,Pt=1,Lt="";function Sn(e,t){Zn[er++]=bs,Zn[er++]=_s,_s=e,bs=t}function qd(e,t,n){st[it++]=Pt,st[it++]=Lt,st[it++]=Ln,Ln=e;var r=Pt;e=Lt;var a=32-xt(r)-1;r&=~(1<<a),n+=1;var s=32-xt(t)+a;if(30<s){var i=a-a%5;s=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Pt=1<<32-xt(t)+a|n<<a|r,Lt=s+e}else Pt=1<<s|n<<a|r,Lt=e}function no(e){e.return!==null&&(Sn(e,1),qd(e,1,0))}function ro(e){for(;e===_s;)_s=Zn[--er],Zn[er]=null,bs=Zn[--er],Zn[er]=null;for(;e===Ln;)Ln=st[--it],st[it]=null,Lt=st[--it],st[it]=null,Pt=st[--it],st[it]=null}var et=null,Ze=null,ue=!1,yt=null;function Kd(e,t){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,Ze=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ln!==null?{id:Pt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,Ze=null,!0):!1;default:return!1}}function fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pl(e){if(ue){var t=Ze;if(t){var n=t;if(!Lu(e,t)){if(fl(e))throw Error(C(418));t=sn(n.nextSibling);var r=et;t&&Lu(e,t)?Kd(r,n):(e.flags=e.flags&-4097|2,ue=!1,et=e)}}else{if(fl(e))throw Error(C(418));e.flags=e.flags&-4097|2,ue=!1,et=e}}}function Au(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function Ha(e){if(e!==et)return!1;if(!ue)return Au(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ol(e.type,e.memoizedProps)),t&&(t=Ze)){if(fl(e))throw Gd(),Error(C(418));for(;t;)Kd(e,t),t=sn(t.nextSibling)}if(Au(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=et?sn(e.stateNode.nextSibling):null;return!0}function Gd(){for(var e=Ze;e;)e=sn(e.nextSibling)}function fr(){Ze=et=null,ue=!1}function ao(e){yt===null?yt=[e]:yt.push(e)}var Th=Bt.ReactCurrentBatchConfig;function Dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var a=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var u=a.refs;i===null?delete u[s]:u[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Va(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ou(e){var t=e._init;return t(e._payload)}function Yd(e){function t(m,d){if(e){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function a(m,d){return m=cn(m,d),m.index=0,m.sibling=null,m}function s(m,d,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=2,d):g):(m.flags|=2,d)):(m.flags|=1048576,d)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function u(m,d,g,R){return d===null||d.tag!==6?(d=Pi(g,m.mode,R),d.return=m,d):(d=a(d,g),d.return=m,d)}function o(m,d,g,R){var T=g.type;return T===Qn?h(m,d,g.props.children,R,g.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Kt&&Ou(T)===d.type)?(R=a(d,g.props),R.ref=Dr(m,d,g),R.return=m,R):(R=cs(g.type,g.key,g.props,null,m.mode,R),R.ref=Dr(m,d,g),R.return=m,R)}function c(m,d,g,R){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Li(g,m.mode,R),d.return=m,d):(d=a(d,g.children||[]),d.return=m,d)}function h(m,d,g,R,T){return d===null||d.tag!==7?(d=Dn(g,m.mode,R,T),d.return=m,d):(d=a(d,g),d.return=m,d)}function f(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Pi(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Pa:return g=cs(d.type,d.key,d.props,null,m.mode,g),g.ref=Dr(m,null,d),g.return=m,g;case Jn:return d=Li(d,m.mode,g),d.return=m,d;case Kt:var R=d._init;return f(m,R(d._payload),g)}if(Fr(d)||jr(d))return d=Dn(d,m.mode,g,null),d.return=m,d;Va(m,d)}return null}function p(m,d,g,R){var T=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:u(m,d,""+g,R);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Pa:return g.key===T?o(m,d,g,R):null;case Jn:return g.key===T?c(m,d,g,R):null;case Kt:return T=g._init,p(m,d,T(g._payload),R)}if(Fr(g)||jr(g))return T!==null?null:h(m,d,g,R,null);Va(m,g)}return null}function v(m,d,g,R,T){if(typeof R=="string"&&R!==""||typeof R=="number")return m=m.get(g)||null,u(d,m,""+R,T);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Pa:return m=m.get(R.key===null?g:R.key)||null,o(d,m,R,T);case Jn:return m=m.get(R.key===null?g:R.key)||null,c(d,m,R,T);case Kt:var A=R._init;return v(m,d,g,A(R._payload),T)}if(Fr(R)||jr(R))return m=m.get(g)||null,h(d,m,R,T,null);Va(d,R)}return null}function x(m,d,g,R){for(var T=null,A=null,k=d,j=d=0,B=null;k!==null&&j<g.length;j++){k.index>j?(B=k,k=null):B=k.sibling;var P=p(m,k,g[j],R);if(P===null){k===null&&(k=B);break}e&&k&&P.alternate===null&&t(m,k),d=s(P,d,j),A===null?T=P:A.sibling=P,A=P,k=B}if(j===g.length)return n(m,k),ue&&Sn(m,j),T;if(k===null){for(;j<g.length;j++)k=f(m,g[j],R),k!==null&&(d=s(k,d,j),A===null?T=k:A.sibling=k,A=k);return ue&&Sn(m,j),T}for(k=r(m,k);j<g.length;j++)B=v(k,m,j,g[j],R),B!==null&&(e&&B.alternate!==null&&k.delete(B.key===null?j:B.key),d=s(B,d,j),A===null?T=B:A.sibling=B,A=B);return e&&k.forEach(function(X){return t(m,X)}),ue&&Sn(m,j),T}function w(m,d,g,R){var T=jr(g);if(typeof T!="function")throw Error(C(150));if(g=T.call(g),g==null)throw Error(C(151));for(var A=T=null,k=d,j=d=0,B=null,P=g.next();k!==null&&!P.done;j++,P=g.next()){k.index>j?(B=k,k=null):B=k.sibling;var X=p(m,k,P.value,R);if(X===null){k===null&&(k=B);break}e&&k&&X.alternate===null&&t(m,k),d=s(X,d,j),A===null?T=X:A.sibling=X,A=X,k=B}if(P.done)return n(m,k),ue&&Sn(m,j),T;if(k===null){for(;!P.done;j++,P=g.next())P=f(m,P.value,R),P!==null&&(d=s(P,d,j),A===null?T=P:A.sibling=P,A=P);return ue&&Sn(m,j),T}for(k=r(m,k);!P.done;j++,P=g.next())P=v(k,m,j,P.value,R),P!==null&&(e&&P.alternate!==null&&k.delete(P.key===null?j:P.key),d=s(P,d,j),A===null?T=P:A.sibling=P,A=P);return e&&k.forEach(function(re){return t(m,re)}),ue&&Sn(m,j),T}function E(m,d,g,R){if(typeof g=="object"&&g!==null&&g.type===Qn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Pa:e:{for(var T=g.key,A=d;A!==null;){if(A.key===T){if(T=g.type,T===Qn){if(A.tag===7){n(m,A.sibling),d=a(A,g.props.children),d.return=m,m=d;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Kt&&Ou(T)===A.type){n(m,A.sibling),d=a(A,g.props),d.ref=Dr(m,A,g),d.return=m,m=d;break e}n(m,A);break}else t(m,A);A=A.sibling}g.type===Qn?(d=Dn(g.props.children,m.mode,R,g.key),d.return=m,m=d):(R=cs(g.type,g.key,g.props,null,m.mode,R),R.ref=Dr(m,d,g),R.return=m,m=R)}return i(m);case Jn:e:{for(A=g.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(m,d.sibling),d=a(d,g.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Li(g,m.mode,R),d.return=m,m=d}return i(m);case Kt:return A=g._init,E(m,d,A(g._payload),R)}if(Fr(g))return x(m,d,g,R);if(jr(g))return w(m,d,g,R);Va(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(m,d.sibling),d=a(d,g),d.return=m,m=d):(n(m,d),d=Pi(g,m.mode,R),d.return=m,m=d),i(m)):n(m,d)}return E}var pr=Yd(!0),Xd=Yd(!1),Rs=hn(null),js=null,tr=null,so=null;function io(){so=tr=js=null}function lo(e){var t=Rs.current;le(Rs),e._currentValue=t}function ml(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function or(e,t){js=e,so=tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(so!==e)if(e={context:e,memoizedValue:t,next:null},tr===null){if(js===null)throw Error(C(308));tr=e,js.dependencies={lanes:0,firstContext:e}}else tr=tr.next=e;return t}var Nn=null;function oo(e){Nn===null?Nn=[e]:Nn.push(e)}function Zd(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,oo(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ft(e,r)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function uo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ef(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ft(e,n)}return a=r.interleaved,a===null?(t.next=t,oo(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ft(e,n)}function as(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ql(e,n)}}function Mu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?a=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ns(e,t,n,r){var a=e.updateQueue;Gt=!1;var s=a.firstBaseUpdate,i=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var o=u,c=o.next;o.next=null,i===null?s=c:i.next=c,i=o;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==i&&(u===null?h.firstBaseUpdate=c:u.next=c,h.lastBaseUpdate=o))}if(s!==null){var f=a.baseState;i=0,h=c=o=null,u=s;do{var p=u.lane,v=u.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:v,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=e,w=u;switch(p=t,v=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){f=x.call(v,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,p=typeof x=="function"?x.call(v,f,p):x,p==null)break e;f=fe({},f,p);break e;case 2:Gt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=a.effects,p===null?a.effects=[u]:p.push(u))}else v={eventTime:v,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(c=h=v,o=f):h=h.next=v,i|=p;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;p=u,u=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);if(h===null&&(o=f),a.baseState=o,a.firstBaseUpdate=c,a.lastBaseUpdate=h,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);On|=i,e.lanes=i,e.memoizedState=f}}function Iu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(C(191,a));a.call(r)}}}var wa={},Nt=hn(wa),oa=hn(wa),ua=hn(wa);function En(e){if(e===wa)throw Error(C(174));return e}function co(e,t){switch(se(ua,t),se(oa,e),se(Nt,wa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qi(t,e)}le(Nt),se(Nt,t)}function mr(){le(Nt),le(oa),le(ua)}function tf(e){En(ua.current);var t=En(Nt.current),n=qi(t,e.type);t!==n&&(se(oa,e),se(Nt,n))}function fo(e){oa.current===e&&(le(Nt),le(oa))}var ce=hn(0);function Es(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ji=[];function po(){for(var e=0;e<ji.length;e++)ji[e]._workInProgressVersionPrimary=null;ji.length=0}var ss=Bt.ReactCurrentDispatcher,Ni=Bt.ReactCurrentBatchConfig,An=0,de=null,Se=null,be=null,Cs=!1,Qr=!1,ca=0,Dh=0;function De(){throw Error(C(321))}function mo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function ho(e,t,n,r,a,s){if(An=s,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ss.current=e===null||e.memoizedState===null?Oh:Mh,e=n(r,a),Qr){s=0;do{if(Qr=!1,ca=0,25<=s)throw Error(C(301));s+=1,be=Se=null,t.updateQueue=null,ss.current=Ih,e=n(r,a)}while(Qr)}if(ss.current=Ts,t=Se!==null&&Se.next!==null,An=0,be=Se=de=null,Cs=!1,t)throw Error(C(300));return e}function go(){var e=ca!==0;return ca=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?de.memoizedState=be=e:be=be.next=e,be}function dt(){if(Se===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=be===null?de.memoizedState:be.next;if(t!==null)be=t,Se=e;else{if(e===null)throw Error(C(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},be===null?de.memoizedState=be=e:be=be.next=e}return be}function da(e,t){return typeof t=="function"?t(e):t}function Ei(e){var t=dt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=Se,a=r.baseQueue,s=n.pending;if(s!==null){if(a!==null){var i=a.next;a.next=s.next,s.next=i}r.baseQueue=a=s,n.pending=null}if(a!==null){s=a.next,r=r.baseState;var u=i=null,o=null,c=s;do{var h=c.lane;if((An&h)===h)o!==null&&(o=o.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};o===null?(u=o=f,i=r):o=o.next=f,de.lanes|=h,On|=h}c=c.next}while(c!==null&&c!==s);o===null?i=r:o.next=u,kt(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=o,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do s=a.lane,de.lanes|=s,On|=s,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ci(e){var t=dt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do s=e(s,i.action),i=i.next;while(i!==a);kt(s,t.memoizedState)||($e=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function nf(){}function rf(e,t){var n=de,r=dt(),a=t(),s=!kt(r.memoizedState,a);if(s&&(r.memoizedState=a,$e=!0),r=r.queue,vo(lf.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,fa(9,sf.bind(null,n,r,a,t),void 0,null),Re===null)throw Error(C(349));An&30||af(n,t,a)}return a}function af(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sf(e,t,n,r){t.value=n,t.getSnapshot=r,of(t)&&uf(e)}function lf(e,t,n){return n(function(){of(t)&&uf(e)})}function of(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function uf(e){var t=Ft(e,1);t!==null&&wt(t,e,1,-1)}function Fu(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:e},t.queue=e,e=e.dispatch=Ah.bind(null,de,e),[t.memoizedState,e]}function fa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cf(){return dt().memoizedState}function is(e,t,n,r){var a=bt();de.flags|=e,a.memoizedState=fa(1|t,n,void 0,r===void 0?null:r)}function Qs(e,t,n,r){var a=dt();r=r===void 0?null:r;var s=void 0;if(Se!==null){var i=Se.memoizedState;if(s=i.destroy,r!==null&&mo(r,i.deps)){a.memoizedState=fa(t,n,s,r);return}}de.flags|=e,a.memoizedState=fa(1|t,n,s,r)}function zu(e,t){return is(8390656,8,e,t)}function vo(e,t){return Qs(2048,8,e,t)}function df(e,t){return Qs(4,2,e,t)}function ff(e,t){return Qs(4,4,e,t)}function pf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mf(e,t,n){return n=n!=null?n.concat([e]):null,Qs(4,4,pf.bind(null,t,e),n)}function yo(){}function hf(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gf(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vf(e,t,n){return An&21?(kt(n,t)||(n=kd(),de.lanes|=n,On|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function Ph(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=Ni.transition;Ni.transition={};try{e(!1),t()}finally{ee=n,Ni.transition=r}}function yf(){return dt().memoizedState}function Lh(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xf(e))wf(t,n);else if(n=Zd(e,t,n,r),n!==null){var a=Ue();wt(n,e,r,a),kf(n,t,r)}}function Ah(e,t,n){var r=un(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xf(e))wf(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,u=s(i,n);if(a.hasEagerState=!0,a.eagerState=u,kt(u,i)){var o=t.interleaved;o===null?(a.next=a,oo(t)):(a.next=o.next,o.next=a),t.interleaved=a;return}}catch{}finally{}n=Zd(e,t,a,r),n!==null&&(a=Ue(),wt(n,e,r,a),kf(n,t,r))}}function xf(e){var t=e.alternate;return e===de||t!==null&&t===de}function wf(e,t){Qr=Cs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ql(e,n)}}var Ts={readContext:ct,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},Oh={readContext:ct,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:zu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,is(4194308,4,pf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return is(4194308,4,e,t)},useInsertionEffect:function(e,t){return is(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Lh.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:Fu,useDebugValue:yo,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=Fu(!1),t=e[0];return e=Ph.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,a=bt();if(ue){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),Re===null)throw Error(C(349));An&30||af(r,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,zu(lf.bind(null,r,s,e),[e]),r.flags|=2048,fa(9,sf.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=bt(),t=Re.identifierPrefix;if(ue){var n=Lt,r=Pt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ca++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Dh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mh={readContext:ct,useCallback:hf,useContext:ct,useEffect:vo,useImperativeHandle:mf,useInsertionEffect:df,useLayoutEffect:ff,useMemo:gf,useReducer:Ei,useRef:cf,useState:function(){return Ei(da)},useDebugValue:yo,useDeferredValue:function(e){var t=dt();return vf(t,Se.memoizedState,e)},useTransition:function(){var e=Ei(da)[0],t=dt().memoizedState;return[e,t]},useMutableSource:nf,useSyncExternalStore:rf,useId:yf,unstable_isNewReconciler:!1},Ih={readContext:ct,useCallback:hf,useContext:ct,useEffect:vo,useImperativeHandle:mf,useInsertionEffect:df,useLayoutEffect:ff,useMemo:gf,useReducer:Ci,useRef:cf,useState:function(){return Ci(da)},useDebugValue:yo,useDeferredValue:function(e){var t=dt();return Se===null?t.memoizedState=e:vf(t,Se.memoizedState,e)},useTransition:function(){var e=Ci(da)[0],t=dt().memoizedState;return[e,t]},useMutableSource:nf,useSyncExternalStore:rf,useId:yf,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function hl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),a=un(e),s=At(r,a);s.payload=t,n!=null&&(s.callback=n),t=ln(e,s,a),t!==null&&(wt(t,e,a,r),as(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),a=un(e),s=At(r,a);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ln(e,s,a),t!==null&&(wt(t,e,a,r),as(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=un(e),a=At(n,r);a.tag=2,t!=null&&(a.callback=t),t=ln(e,a,r),t!==null&&(wt(t,e,r,n),as(t,e,r))}};function Uu(e,t,n,r,a,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,i):t.prototype&&t.prototype.isPureReactComponent?!aa(n,r)||!aa(a,s):!0}function Sf(e,t,n){var r=!1,a=pn,s=t.contextType;return typeof s=="object"&&s!==null?s=ct(s):(a=Qe(t)?Pn:Ae.current,r=t.contextTypes,s=(r=r!=null)?dr(e,a):pn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function Bu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function gl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},uo(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=ct(s):(s=Qe(t)?Pn:Ae.current,a.context=dr(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(hl(e,t,s,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&qs.enqueueReplaceState(a,a.state,null),Ns(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function hr(e,t){try{var n="",r=t;do n+=dm(r),r=r.return;while(r);var a=n}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function Ti(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Fh=typeof WeakMap=="function"?WeakMap:Map;function _f(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ps||(Ps=!0,Nl=r),vl(e,t)},n}function bf(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){vl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vl(e,t),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Hu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Fh;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Xh.bind(null,e,t,n),t.then(e,e))}function Vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wu(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,ln(n,t,1))),n.lanes|=1),e)}var zh=Bt.ReactCurrentOwner,$e=!1;function ze(e,t,n,r){t.child=e===null?Xd(t,null,n,r):pr(t,e.child,n,r)}function $u(e,t,n,r,a){n=n.render;var s=t.ref;return or(t,a),r=ho(e,t,n,r,s,a),n=go(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,zt(e,t,a)):(ue&&n&&no(t),t.flags|=1,ze(e,t,r,a),t.child)}function Ju(e,t,n,r,a){if(e===null){var s=n.type;return typeof s=="function"&&!jo(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Rf(e,t,s,r,a)):(e=cs(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(i,r)&&e.ref===t.ref)return zt(e,t,a)}return t.flags|=1,e=cn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Rf(e,t,n,r,a){if(e!==null){var s=e.memoizedProps;if(aa(s,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=s,(e.lanes&a)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,zt(e,t,a)}return yl(e,t,n,r,a)}function jf(e,t,n){var r=t.pendingProps,a=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(rr,Ge),Ge|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(rr,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(rr,Ge),Ge|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,se(rr,Ge),Ge|=r;return ze(e,t,a,n),t.child}function Nf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function yl(e,t,n,r,a){var s=Qe(n)?Pn:Ae.current;return s=dr(t,s),or(t,a),n=ho(e,t,n,r,s,a),r=go(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,zt(e,t,a)):(ue&&r&&no(t),t.flags|=1,ze(e,t,n,a),t.child)}function Qu(e,t,n,r,a){if(Qe(n)){var s=!0;Ss(t)}else s=!1;if(or(t,a),t.stateNode===null)ls(e,t),Sf(t,n,r),gl(t,n,r,a),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var o=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=ct(c):(c=Qe(n)?Pn:Ae.current,c=dr(t,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||o!==c)&&Bu(t,i,r,c),Gt=!1;var p=t.memoizedState;i.state=p,Ns(t,r,i,a),o=t.memoizedState,u!==r||p!==o||Je.current||Gt?(typeof h=="function"&&(hl(t,n,h,r),o=t.memoizedState),(u=Gt||Uu(t,n,u,r,p,o,c))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=o),i.props=r,i.state=o,i.context=c,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,ef(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:ht(t.type,u),i.props=c,f=t.pendingProps,p=i.context,o=n.contextType,typeof o=="object"&&o!==null?o=ct(o):(o=Qe(n)?Pn:Ae.current,o=dr(t,o));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==f||p!==o)&&Bu(t,i,r,o),Gt=!1,p=t.memoizedState,i.state=p,Ns(t,r,i,a);var x=t.memoizedState;u!==f||p!==x||Je.current||Gt?(typeof v=="function"&&(hl(t,n,v,r),x=t.memoizedState),(c=Gt||Uu(t,n,c,r,p,x,o)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,o)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),i.props=r,i.state=x,i.context=o,r=c):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return xl(e,t,n,r,s,a)}function xl(e,t,n,r,a,s){Nf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return a&&Pu(t,n,!1),zt(e,t,s);r=t.stateNode,zh.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=pr(t,e.child,null,s),t.child=pr(t,null,u,s)):ze(e,t,u,s),t.memoizedState=r.state,a&&Pu(t,n,!0),t.child}function Ef(e){var t=e.stateNode;t.pendingContext?Du(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Du(e,t.context,!1),co(e,t.containerInfo)}function qu(e,t,n,r,a){return fr(),ao(a),t.flags|=256,ze(e,t,n,r),t.child}var wl={dehydrated:null,treeContext:null,retryLane:0};function kl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cf(e,t,n){var r=t.pendingProps,a=ce.current,s=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(a&2)!==0),u?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),se(ce,a&1),e===null)return pl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,s?(r=t.mode,s=t.child,i={mode:"hidden",children:i},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Ys(i,r,0,null),e=Dn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=kl(n),t.memoizedState=wl,e):xo(t,i));if(a=e.memoizedState,a!==null&&(u=a.dehydrated,u!==null))return Uh(e,t,i,r,u,a,n);if(s){s=r.fallback,i=t.mode,a=e.child,u=a.sibling;var o={mode:"hidden",children:r.children};return!(i&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=o,t.deletions=null):(r=cn(a,o),r.subtreeFlags=a.subtreeFlags&14680064),u!==null?s=cn(u,s):(s=Dn(s,i,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,i=e.child.memoizedState,i=i===null?kl(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~n,t.memoizedState=wl,r}return s=e.child,e=s.sibling,r=cn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xo(e,t){return t=Ys({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wa(e,t,n,r){return r!==null&&ao(r),pr(t,e.child,null,n),e=xo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uh(e,t,n,r,a,s,i){if(n)return t.flags&256?(t.flags&=-257,r=Ti(Error(C(422))),Wa(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,a=t.mode,r=Ys({mode:"visible",children:r.children},a,0,null),s=Dn(s,a,i,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&pr(t,e.child,null,i),t.child.memoizedState=kl(i),t.memoizedState=wl,s);if(!(t.mode&1))return Wa(e,t,i,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var u=r.dgst;return r=u,s=Error(C(419)),r=Ti(s,r,void 0),Wa(e,t,i,r)}if(u=(i&e.childLanes)!==0,$e||u){if(r=Re,r!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|i)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,Ft(e,a),wt(r,e,a,-1))}return Ro(),r=Ti(Error(C(421))),Wa(e,t,i,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Zh.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,Ze=sn(a.nextSibling),et=t,ue=!0,yt=null,e!==null&&(st[it++]=Pt,st[it++]=Lt,st[it++]=Ln,Pt=e.id,Lt=e.overflow,Ln=t),t=xo(t,r.children),t.flags|=4096,t)}function Ku(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ml(e.return,t,n)}function Di(e,t,n,r,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=a)}function Tf(e,t,n){var r=t.pendingProps,a=r.revealOrder,s=r.tail;if(ze(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ku(e,n,t);else if(e.tag===19)Ku(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(ce,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Es(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Di(t,!1,a,n,s);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Es(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Di(t,!0,n,null,s);break;case"together":Di(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ls(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bh(e,t,n){switch(t.tag){case 3:Ef(t),fr();break;case 5:tf(t);break;case 1:Qe(t.type)&&Ss(t);break;case 4:co(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;se(Rs,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?Cf(e,t,n):(se(ce,ce.current&1),e=zt(e,t,n),e!==null?e.sibling:null);se(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Tf(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),se(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,jf(e,t,n)}return zt(e,t,n)}var Df,Sl,Pf,Lf;Df=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sl=function(){};Pf=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,En(Nt.current);var s=null;switch(n){case"input":a=Wi(e,a),r=Wi(e,r),s=[];break;case"select":a=fe({},a,{value:void 0}),r=fe({},r,{value:void 0}),s=[];break;case"textarea":a=Qi(e,a),r=Qi(e,r),s=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ws)}Ki(n,r);var i;n=null;for(c in a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var u=a[c];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yr.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var o=r[c];if(u=a!=null?a[c]:void 0,r.hasOwnProperty(c)&&o!==u&&(o!=null||u!=null))if(c==="style")if(u){for(i in u)!u.hasOwnProperty(i)||o&&o.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in o)o.hasOwnProperty(i)&&u[i]!==o[i]&&(n||(n={}),n[i]=o[i])}else n||(s||(s=[]),s.push(c,n)),n=o;else c==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,u=u?u.__html:void 0,o!=null&&u!==o&&(s=s||[]).push(c,o)):c==="children"?typeof o!="string"&&typeof o!="number"||(s=s||[]).push(c,""+o):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yr.hasOwnProperty(c)?(o!=null&&c==="onScroll"&&ie("scroll",e),s||u===o||(s=[])):(s=s||[]).push(c,o))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};Lf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pr(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hh(e,t,n){var r=t.pendingProps;switch(ro(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Qe(t.type)&&ks(),Pe(t),null;case 3:return r=t.stateNode,mr(),le(Je),le(Ae),po(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ha(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(Tl(yt),yt=null))),Sl(e,t),Pe(t),null;case 5:fo(t);var a=En(ua.current);if(n=t.type,e!==null&&t.stateNode!=null)Pf(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Pe(t),null}if(e=En(Nt.current),Ha(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Rt]=t,r[la]=s,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(a=0;a<Ur.length;a++)ie(Ur[a],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":au(r,s),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ie("invalid",r);break;case"textarea":iu(r,s),ie("invalid",r)}Ki(n,s),a=null;for(var i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="children"?typeof u=="string"?r.textContent!==u&&(s.suppressHydrationWarning!==!0&&Ba(r.textContent,u,e),a=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&Ba(r.textContent,u,e),a=["children",""+u]):Yr.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&ie("scroll",r)}switch(n){case"input":La(r),su(r,s,!0);break;case"textarea":La(r),lu(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ws)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=id(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Rt]=t,e[la]=r,Df(e,t,!1,!1),t.stateNode=e;e:{switch(i=Gi(n,r),n){case"dialog":ie("cancel",e),ie("close",e),a=r;break;case"iframe":case"object":case"embed":ie("load",e),a=r;break;case"video":case"audio":for(a=0;a<Ur.length;a++)ie(Ur[a],e);a=r;break;case"source":ie("error",e),a=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),a=r;break;case"details":ie("toggle",e),a=r;break;case"input":au(e,r),a=Wi(e,r),ie("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=fe({},r,{value:void 0}),ie("invalid",e);break;case"textarea":iu(e,r),a=Qi(e,r),ie("invalid",e);break;default:a=r}Ki(n,a),u=a;for(s in u)if(u.hasOwnProperty(s)){var o=u[s];s==="style"?ud(e,o):s==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&ld(e,o)):s==="children"?typeof o=="string"?(n!=="textarea"||o!=="")&&Xr(e,o):typeof o=="number"&&Xr(e,""+o):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yr.hasOwnProperty(s)?o!=null&&s==="onScroll"&&ie("scroll",e):o!=null&&Hl(e,s,o,i))}switch(n){case"input":La(e),su(e,r,!1);break;case"textarea":La(e),lu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ar(e,!!r.multiple,s,!1):r.defaultValue!=null&&ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ws)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)Lf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=En(ua.current),En(Nt.current),Ha(t)){if(r=t.stateNode,n=t.memoizedProps,r[Rt]=t,(s=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:Ba(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ba(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=t,t.stateNode=r}return Pe(t),null;case 13:if(le(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&Ze!==null&&t.mode&1&&!(t.flags&128))Gd(),fr(),t.flags|=98560,s=!1;else if(s=Ha(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(C(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[Rt]=t}else fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),s=!1}else yt!==null&&(Tl(yt),yt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?_e===0&&(_e=3):Ro())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return mr(),Sl(e,t),e===null&&sa(t.stateNode.containerInfo),Pe(t),null;case 10:return lo(t.type._context),Pe(t),null;case 17:return Qe(t.type)&&ks(),Pe(t),null;case 19:if(le(ce),s=t.memoizedState,s===null)return Pe(t),null;if(r=(t.flags&128)!==0,i=s.rendering,i===null)if(r)Pr(s,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Es(e),i!==null){for(t.flags|=128,Pr(s,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(ce,ce.current&1|2),t.child}e=e.sibling}s.tail!==null&&ve()>gr&&(t.flags|=128,r=!0,Pr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Es(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!ue)return Pe(t),null}else 2*ve()-s.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,r=!0,Pr(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(n=s.last,n!==null?n.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ve(),t.sibling=null,n=ce.current,se(ce,r?n&1|2:n&1),t):(Pe(t),null);case 22:case 23:return bo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ge&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Vh(e,t){switch(ro(t),t.tag){case 1:return Qe(t.type)&&ks(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),le(Je),le(Ae),po(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fo(t),null;case 13:if(le(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(ce),null;case 4:return mr(),null;case 10:return lo(t.type._context),null;case 22:case 23:return bo(),null;case 24:return null;default:return null}}var $a=!1,Le=!1,Wh=typeof WeakSet=="function"?WeakSet:Set,O=null;function nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function _l(e,t,n){try{n()}catch(r){ge(e,t,r)}}var Gu=!1;function $h(e,t){if(il=vs,e=Id(),to(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,u=-1,o=-1,c=0,h=0,f=e,p=null;t:for(;;){for(var v;f!==n||a!==0&&f.nodeType!==3||(u=i+a),f!==s||r!==0&&f.nodeType!==3||(o=i+r),f.nodeType===3&&(i+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===e)break t;if(p===n&&++c===a&&(u=i),p===s&&++h===r&&(o=i),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}n=u===-1||o===-1?null:{start:u,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(ll={focusedElem:e,selectionRange:n},vs=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,E=x.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:ht(t.type,w),E);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(R){ge(t,t.return,R)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return x=Gu,Gu=!1,x}function qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&_l(t,n,s)}a=a.next}while(a!==r)}}function Ks(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Af(e){var t=e.alternate;t!==null&&(e.alternate=null,Af(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[la],delete t[cl],delete t[Nh],delete t[Eh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Of(e){return e.tag===5||e.tag===3||e.tag===4}function Yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Of(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ws));else if(r!==4&&(e=e.child,e!==null))for(Rl(e,t,n),e=e.sibling;e!==null;)Rl(e,t,n),e=e.sibling}function jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(jl(e,t,n),e=e.sibling;e!==null;)jl(e,t,n),e=e.sibling}var Ee=null,gt=!1;function Qt(e,t,n){for(n=n.child;n!==null;)Mf(e,t,n),n=n.sibling}function Mf(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Bs,n)}catch{}switch(n.tag){case 5:Le||nr(n,t);case 6:var r=Ee,a=gt;Ee=null,Qt(e,t,n),Ee=r,gt=a,Ee!==null&&(gt?(e=Ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(gt?(e=Ee,n=n.stateNode,e.nodeType===8?bi(e.parentNode,n):e.nodeType===1&&bi(e,n),na(e)):bi(Ee,n.stateNode));break;case 4:r=Ee,a=gt,Ee=n.stateNode.containerInfo,gt=!0,Qt(e,t,n),Ee=r,gt=a;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var s=a,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&_l(n,t,i),a=a.next}while(a!==r)}Qt(e,t,n);break;case 1:if(!Le&&(nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ge(n,t,u)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Qt(e,t,n),Le=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function Xu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Wh),t.forEach(function(r){var a=eg.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var s=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:Ee=u.stateNode,gt=!1;break e;case 3:Ee=u.stateNode.containerInfo,gt=!0;break e;case 4:Ee=u.stateNode.containerInfo,gt=!0;break e}u=u.return}if(Ee===null)throw Error(C(160));Mf(s,i,a),Ee=null,gt=!1;var o=a.alternate;o!==null&&(o.return=null),a.return=null}catch(c){ge(a,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)If(t,e),t=t.sibling}function If(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),_t(e),r&4){try{qr(3,e,e.return),Ks(3,e)}catch(w){ge(e,e.return,w)}try{qr(5,e,e.return)}catch(w){ge(e,e.return,w)}}break;case 1:mt(t,e),_t(e),r&512&&n!==null&&nr(n,n.return);break;case 5:if(mt(t,e),_t(e),r&512&&n!==null&&nr(n,n.return),e.flags&32){var a=e.stateNode;try{Xr(a,"")}catch(w){ge(e,e.return,w)}}if(r&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,i=n!==null?n.memoizedProps:s,u=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&ad(a,s),Gi(u,i);var c=Gi(u,s);for(i=0;i<o.length;i+=2){var h=o[i],f=o[i+1];h==="style"?ud(a,f):h==="dangerouslySetInnerHTML"?ld(a,f):h==="children"?Xr(a,f):Hl(a,h,f,c)}switch(u){case"input":$i(a,s);break;case"textarea":sd(a,s);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ar(a,!!s.multiple,v,!1):p!==!!s.multiple&&(s.defaultValue!=null?ar(a,!!s.multiple,s.defaultValue,!0):ar(a,!!s.multiple,s.multiple?[]:"",!1))}a[la]=s}catch(w){ge(e,e.return,w)}}break;case 6:if(mt(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(C(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(w){ge(e,e.return,w)}}break;case 3:if(mt(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{na(t.containerInfo)}catch(w){ge(e,e.return,w)}break;case 4:mt(t,e),_t(e);break;case 13:mt(t,e),_t(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(So=ve())),r&4&&Xu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(c=Le)||h,mt(t,e),Le=c):mt(t,e),_t(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(O=e,h=e.child;h!==null;){for(f=O=h;O!==null;){switch(p=O,v=p.child,p.tag){case 0:case 11:case 14:case 15:qr(4,p,p.return);break;case 1:nr(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){ge(r,n,w)}}break;case 5:nr(p,p.return);break;case 22:if(p.memoizedState!==null){ec(f);continue}}v!==null?(v.return=p,O=v):ec(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{a=f.stateNode,c?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=f.stateNode,o=f.memoizedProps.style,i=o!=null&&o.hasOwnProperty("display")?o.display:null,u.style.display=od("display",i))}catch(w){ge(e,e.return,w)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){ge(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:mt(t,e),_t(e),r&4&&Xu(e);break;case 21:break;default:mt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Of(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Xr(a,""),r.flags&=-33);var s=Yu(e);jl(e,s,a);break;case 3:case 4:var i=r.stateNode.containerInfo,u=Yu(e);Rl(e,u,i);break;default:throw Error(C(161))}}catch(o){ge(e,e.return,o)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jh(e,t,n){O=e,Ff(e)}function Ff(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var a=O,s=a.child;if(a.tag===22&&r){var i=a.memoizedState!==null||$a;if(!i){var u=a.alternate,o=u!==null&&u.memoizedState!==null||Le;u=$a;var c=Le;if($a=i,(Le=o)&&!c)for(O=a;O!==null;)i=O,o=i.child,i.tag===22&&i.memoizedState!==null?tc(a):o!==null?(o.return=i,O=o):tc(a);for(;s!==null;)O=s,Ff(s),s=s.sibling;O=a,$a=u,Le=c}Zu(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,O=s):Zu(e)}}function Zu(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||Ks(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Iu(t,s,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Iu(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var o=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&n.focus();break;case"img":o.src&&(n.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&na(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Le||t.flags&512&&bl(t)}catch(p){ge(t,t.return,p)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function ec(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function tc(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ks(4,t)}catch(o){ge(t,n,o)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(o){ge(t,a,o)}}var s=t.return;try{bl(t)}catch(o){ge(t,s,o)}break;case 5:var i=t.return;try{bl(t)}catch(o){ge(t,i,o)}}}catch(o){ge(t,t.return,o)}if(t===e){O=null;break}var u=t.sibling;if(u!==null){u.return=t.return,O=u;break}O=t.return}}var Qh=Math.ceil,Ds=Bt.ReactCurrentDispatcher,wo=Bt.ReactCurrentOwner,ot=Bt.ReactCurrentBatchConfig,K=0,Re=null,we=null,Ce=0,Ge=0,rr=hn(0),_e=0,pa=null,On=0,Gs=0,ko=0,Kr=null,We=null,So=0,gr=1/0,Tt=null,Ps=!1,Nl=null,on=null,Ja=!1,en=null,Ls=0,Gr=0,El=null,os=-1,us=0;function Ue(){return K&6?ve():os!==-1?os:os=ve()}function un(e){return e.mode&1?K&2&&Ce!==0?Ce&-Ce:Th.transition!==null?(us===0&&(us=kd()),us):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Ed(e.type)),e):1}function wt(e,t,n,r){if(50<Gr)throw Gr=0,El=null,Error(C(185));va(e,n,r),(!(K&2)||e!==Re)&&(e===Re&&(!(K&2)&&(Gs|=n),_e===4&&Xt(e,Ce)),qe(e,r),n===1&&K===0&&!(t.mode&1)&&(gr=ve()+500,Js&&gn()))}function qe(e,t){var n=e.callbackNode;Tm(e,t);var r=gs(e,e===Re?Ce:0);if(r===0)n!==null&&cu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cu(n),t===1)e.tag===0?Ch(nc.bind(null,e)):Qd(nc.bind(null,e)),Rh(function(){!(K&6)&&gn()}),n=null;else{switch(Sd(r)){case 1:n=Ql;break;case 4:n=xd;break;case 16:n=hs;break;case 536870912:n=wd;break;default:n=hs}n=Jf(n,zf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zf(e,t){if(os=-1,us=0,K&6)throw Error(C(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=gs(e,e===Re?Ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=As(e,r);else{t=r;var a=K;K|=2;var s=Bf();(Re!==e||Ce!==t)&&(Tt=null,gr=ve()+500,Tn(e,t));do try{Gh();break}catch(u){Uf(e,u)}while(!0);io(),Ds.current=s,K=a,we!==null?t=0:(Re=null,Ce=0,t=_e)}if(t!==0){if(t===2&&(a=tl(e),a!==0&&(r=a,t=Cl(e,a))),t===1)throw n=pa,Tn(e,0),Xt(e,r),qe(e,ve()),n;if(t===6)Xt(e,r);else{if(a=e.current.alternate,!(r&30)&&!qh(a)&&(t=As(e,r),t===2&&(s=tl(e),s!==0&&(r=s,t=Cl(e,s))),t===1))throw n=pa,Tn(e,0),Xt(e,r),qe(e,ve()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:_n(e,We,Tt);break;case 3:if(Xt(e,r),(r&130023424)===r&&(t=So+500-ve(),10<t)){if(gs(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ul(_n.bind(null,e,We,Tt),t);break}_n(e,We,Tt);break;case 4:if(Xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var i=31-xt(r);s=1<<i,i=t[i],i>a&&(a=i),r&=~s}if(r=a,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qh(r/1960))-r,10<r){e.timeoutHandle=ul(_n.bind(null,e,We,Tt),r);break}_n(e,We,Tt);break;case 5:_n(e,We,Tt);break;default:throw Error(C(329))}}}return qe(e,ve()),e.callbackNode===n?zf.bind(null,e):null}function Cl(e,t){var n=Kr;return e.current.memoizedState.isDehydrated&&(Tn(e,t).flags|=256),e=As(e,t),e!==2&&(t=We,We=n,t!==null&&Tl(t)),e}function Tl(e){We===null?We=e:We.push.apply(We,e)}function qh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],s=a.getSnapshot;a=a.value;try{if(!kt(s(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~ko,t&=~Gs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function nc(e){if(K&6)throw Error(C(327));ur();var t=gs(e,0);if(!(t&1))return qe(e,ve()),null;var n=As(e,t);if(e.tag!==0&&n===2){var r=tl(e);r!==0&&(t=r,n=Cl(e,r))}if(n===1)throw n=pa,Tn(e,0),Xt(e,t),qe(e,ve()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,We,Tt),qe(e,ve()),null}function _o(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(gr=ve()+500,Js&&gn())}}function Mn(e){en!==null&&en.tag===0&&!(K&6)&&ur();var t=K;K|=1;var n=ot.transition,r=ee;try{if(ot.transition=null,ee=1,e)return e()}finally{ee=r,ot.transition=n,K=t,!(K&6)&&gn()}}function bo(){Ge=rr.current,le(rr)}function Tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bh(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(ro(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ks();break;case 3:mr(),le(Je),le(Ae),po();break;case 5:fo(r);break;case 4:mr();break;case 13:le(ce);break;case 19:le(ce);break;case 10:lo(r.type._context);break;case 22:case 23:bo()}n=n.return}if(Re=e,we=e=cn(e.current,null),Ce=Ge=t,_e=0,pa=null,ko=Gs=On=0,We=Kr=null,Nn!==null){for(t=0;t<Nn.length;t++)if(n=Nn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,s=n.pending;if(s!==null){var i=s.next;s.next=a,r.next=i}n.pending=r}Nn=null}return e}function Uf(e,t){do{var n=we;try{if(io(),ss.current=Ts,Cs){for(var r=de.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Cs=!1}if(An=0,be=Se=de=null,Qr=!1,ca=0,wo.current=null,n===null||n.return===null){_e=1,pa=t,we=null;break}e:{var s=e,i=n.return,u=n,o=t;if(t=Ce,u.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var c=o,h=u,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Vu(i);if(v!==null){v.flags&=-257,Wu(v,i,u,s,t),v.mode&1&&Hu(s,c,t),t=v,o=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(o),t.updateQueue=w}else x.add(o);break e}else{if(!(t&1)){Hu(s,c,t),Ro();break e}o=Error(C(426))}}else if(ue&&u.mode&1){var E=Vu(i);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Wu(E,i,u,s,t),ao(hr(o,u));break e}}s=o=hr(o,u),_e!==4&&(_e=2),Kr===null?Kr=[s]:Kr.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=_f(s,o,t);Mu(s,m);break e;case 1:u=o;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(on===null||!on.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var R=bf(s,u,t);Mu(s,R);break e}}s=s.return}while(s!==null)}Vf(n)}catch(T){t=T,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function Bf(){var e=Ds.current;return Ds.current=Ts,e===null?Ts:e}function Ro(){(_e===0||_e===3||_e===2)&&(_e=4),Re===null||!(On&268435455)&&!(Gs&268435455)||Xt(Re,Ce)}function As(e,t){var n=K;K|=2;var r=Bf();(Re!==e||Ce!==t)&&(Tt=null,Tn(e,t));do try{Kh();break}catch(a){Uf(e,a)}while(!0);if(io(),K=n,Ds.current=r,we!==null)throw Error(C(261));return Re=null,Ce=0,_e}function Kh(){for(;we!==null;)Hf(we)}function Gh(){for(;we!==null&&!km();)Hf(we)}function Hf(e){var t=$f(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?Vf(e):we=t,wo.current=null}function Vf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Vh(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,we=null;return}}else if(n=Hh(n,t,Ge),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);_e===0&&(_e=5)}function _n(e,t,n){var r=ee,a=ot.transition;try{ot.transition=null,ee=1,Yh(e,t,n,r)}finally{ot.transition=a,ee=r}return null}function Yh(e,t,n,r){do ur();while(en!==null);if(K&6)throw Error(C(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Dm(e,s),e===Re&&(we=Re=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ja||(Ja=!0,Jf(hs,function(){return ur(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ot.transition,ot.transition=null;var i=ee;ee=1;var u=K;K|=4,wo.current=null,$h(e,n),If(n,e),vh(ll),vs=!!il,ll=il=null,e.current=n,Jh(n),Sm(),K=u,ee=i,ot.transition=s}else e.current=n;if(Ja&&(Ja=!1,en=e,Ls=a),s=e.pendingLanes,s===0&&(on=null),Rm(n.stateNode),qe(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Ps)throw Ps=!1,e=Nl,Nl=null,e;return Ls&1&&e.tag!==0&&ur(),s=e.pendingLanes,s&1?e===El?Gr++:(Gr=0,El=e):Gr=0,gn(),null}function ur(){if(en!==null){var e=Sd(Ls),t=ot.transition,n=ee;try{if(ot.transition=null,ee=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,Ls=0,K&6)throw Error(C(331));var a=K;for(K|=4,O=e.current;O!==null;){var s=O,i=s.child;if(O.flags&16){var u=s.deletions;if(u!==null){for(var o=0;o<u.length;o++){var c=u[o];for(O=c;O!==null;){var h=O;switch(h.tag){case 0:case 11:case 15:qr(8,h,s)}var f=h.child;if(f!==null)f.return=h,O=f;else for(;O!==null;){h=O;var p=h.sibling,v=h.return;if(Af(h),h===c){O=null;break}if(p!==null){p.return=v,O=p;break}O=v}}}var x=s.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}O=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,O=i;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qr(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,O=m;break e}O=s.return}}var d=e.current;for(O=d;O!==null;){i=O;var g=i.child;if(i.subtreeFlags&2064&&g!==null)g.return=i,O=g;else e:for(i=d;O!==null;){if(u=O,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Ks(9,u)}}catch(T){ge(u,u.return,T)}if(u===i){O=null;break e}var R=u.sibling;if(R!==null){R.return=u.return,O=R;break e}O=u.return}}if(K=a,gn(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Bs,e)}catch{}r=!0}return r}finally{ee=n,ot.transition=t}}return!1}function rc(e,t,n){t=hr(n,t),t=_f(e,t,1),e=ln(e,t,1),t=Ue(),e!==null&&(va(e,1,t),qe(e,t))}function ge(e,t,n){if(e.tag===3)rc(e,e,n);else for(;t!==null;){if(t.tag===3){rc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){e=hr(n,e),e=bf(t,e,1),t=ln(t,e,1),e=Ue(),t!==null&&(va(t,1,e),qe(t,e));break}}t=t.return}}function Xh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Ce&n)===n&&(_e===4||_e===3&&(Ce&130023424)===Ce&&500>ve()-So?Tn(e,0):ko|=n),qe(e,t)}function Wf(e,t){t===0&&(e.mode&1?(t=Ma,Ma<<=1,!(Ma&130023424)&&(Ma=4194304)):t=1);var n=Ue();e=Ft(e,t),e!==null&&(va(e,t,n),qe(e,n))}function Zh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wf(e,n)}function eg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Wf(e,n)}var $f;$f=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,Bh(e,t,n);$e=!!(e.flags&131072)}else $e=!1,ue&&t.flags&1048576&&qd(t,bs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ls(e,t),e=t.pendingProps;var a=dr(t,Ae.current);or(t,n),a=ho(null,t,r,e,a,n);var s=go();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(s=!0,Ss(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,uo(t),a.updater=qs,t.stateNode=a,a._reactInternals=t,gl(t,r,e,n),t=xl(null,t,r,!0,s,n)):(t.tag=0,ue&&s&&no(t),ze(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ls(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=ng(r),e=ht(r,e),a){case 0:t=yl(null,t,r,e,n);break e;case 1:t=Qu(null,t,r,e,n);break e;case 11:t=$u(null,t,r,e,n);break e;case 14:t=Ju(null,t,r,ht(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ht(r,a),yl(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ht(r,a),Qu(e,t,r,a,n);case 3:e:{if(Ef(t),e===null)throw Error(C(387));r=t.pendingProps,s=t.memoizedState,a=s.element,ef(e,t),Ns(t,r,null,n);var i=t.memoizedState;if(r=i.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=hr(Error(C(423)),t),t=qu(e,t,r,n,a);break e}else if(r!==a){a=hr(Error(C(424)),t),t=qu(e,t,r,n,a);break e}else for(Ze=sn(t.stateNode.containerInfo.firstChild),et=t,ue=!0,yt=null,n=Xd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===a){t=zt(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return tf(t),e===null&&pl(t),r=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,i=a.children,ol(r,a)?i=null:s!==null&&ol(r,s)&&(t.flags|=32),Nf(e,t),ze(e,t,i,n),t.child;case 6:return e===null&&pl(t),null;case 13:return Cf(e,t,n);case 4:return co(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pr(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ht(r,a),$u(e,t,r,a,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,s=t.memoizedProps,i=a.value,se(Rs,r._currentValue),r._currentValue=i,s!==null)if(kt(s.value,i)){if(s.children===a.children&&!Je.current){t=zt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var u=s.dependencies;if(u!==null){i=s.child;for(var o=u.firstContext;o!==null;){if(o.context===r){if(s.tag===1){o=At(-1,n&-n),o.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?o.next=o:(o.next=h.next,h.next=o),c.pending=o}}s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ml(s.return,n,t),u.lanes|=n;break}o=o.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(C(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ml(i,n,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}ze(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,or(t,n),a=ct(a),r=r(a),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,a=ht(r,t.pendingProps),a=ht(r.type,a),Ju(e,t,r,a,n);case 15:return Rf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ht(r,a),ls(e,t),t.tag=1,Qe(r)?(e=!0,Ss(t)):e=!1,or(t,n),Sf(t,r,a),gl(t,r,a,n),xl(null,t,r,!0,e,n);case 19:return Tf(e,t,n);case 22:return jf(e,t,n)}throw Error(C(156,t.tag))};function Jf(e,t){return yd(e,t)}function tg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,r){return new tg(e,t,n,r)}function jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ng(e){if(typeof e=="function")return jo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wl)return 11;if(e===$l)return 14}return 2}function cn(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function cs(e,t,n,r,a,s){var i=2;if(r=e,typeof e=="function")jo(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Qn:return Dn(n.children,a,s,t);case Vl:i=8,a|=8;break;case Ui:return e=lt(12,n,t,a|2),e.elementType=Ui,e.lanes=s,e;case Bi:return e=lt(13,n,t,a),e.elementType=Bi,e.lanes=s,e;case Hi:return e=lt(19,n,t,a),e.elementType=Hi,e.lanes=s,e;case td:return Ys(n,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zc:i=10;break e;case ed:i=9;break e;case Wl:i=11;break e;case $l:i=14;break e;case Kt:i=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=lt(i,n,t,a),t.elementType=e,t.type=r,t.lanes=s,t}function Dn(e,t,n,r){return e=lt(7,e,r,t),e.lanes=n,e}function Ys(e,t,n,r){return e=lt(22,e,r,t),e.elementType=td,e.lanes=n,e.stateNode={isHidden:!1},e}function Pi(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function Li(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rg(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pi(0),this.expirationTimes=pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pi(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function No(e,t,n,r,a,s,i,u,o){return e=new rg(e,t,n,u,o),t===1?(t=1,s===!0&&(t|=8)):t=0,s=lt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uo(s),e}function ag(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qf(e){if(!e)return pn;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Qe(n))return Jd(e,n,t)}return t}function qf(e,t,n,r,a,s,i,u,o){return e=No(n,r,!0,e,a,s,i,u,o),e.context=Qf(null),n=e.current,r=Ue(),a=un(n),s=At(r,a),s.callback=t??null,ln(n,s,a),e.current.lanes=a,va(e,a,r),qe(e,r),e}function Xs(e,t,n,r){var a=t.current,s=Ue(),i=un(a);return n=Qf(n),t.context===null?t.context=n:t.pendingContext=n,t=At(s,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ln(a,t,i),e!==null&&(wt(e,a,i,s),as(e,a,i)),i}function Os(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Eo(e,t){ac(e,t),(e=e.alternate)&&ac(e,t)}function sg(){return null}var Kf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Co(e){this._internalRoot=e}Zs.prototype.render=Co.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Xs(e,t,null,null)};Zs.prototype.unmount=Co.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mn(function(){Xs(null,e,null,null)}),t[It]=null}};function Zs(e){this._internalRoot=e}Zs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&Nd(e)}};function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sc(){}function ig(e,t,n,r,a){if(a){if(typeof r=="function"){var s=r;r=function(){var c=Os(i);s.call(c)}}var i=qf(t,r,e,0,null,!1,!1,"",sc);return e._reactRootContainer=i,e[It]=i.current,sa(e.nodeType===8?e.parentNode:e),Mn(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var u=r;r=function(){var c=Os(o);u.call(c)}}var o=No(e,0,!1,null,null,!1,!1,"",sc);return e._reactRootContainer=o,e[It]=o.current,sa(e.nodeType===8?e.parentNode:e),Mn(function(){Xs(t,o,n,r)}),o}function ti(e,t,n,r,a){var s=n._reactRootContainer;if(s){var i=s;if(typeof a=="function"){var u=a;a=function(){var o=Os(i);u.call(o)}}Xs(t,i,e,a)}else i=ig(n,t,e,a,r);return Os(i)}_d=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zr(t.pendingLanes);n!==0&&(ql(t,n|1),qe(t,ve()),!(K&6)&&(gr=ve()+500,gn()))}break;case 13:Mn(function(){var r=Ft(e,1);if(r!==null){var a=Ue();wt(r,e,1,a)}}),Eo(e,1)}};Kl=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=Ue();wt(t,e,134217728,n)}Eo(e,134217728)}};bd=function(e){if(e.tag===13){var t=un(e),n=Ft(e,t);if(n!==null){var r=Ue();wt(n,e,t,r)}Eo(e,t)}};Rd=function(){return ee};jd=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};Xi=function(e,t,n){switch(t){case"input":if($i(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=$s(r);if(!a)throw Error(C(90));rd(r),$i(r,a)}}}break;case"textarea":sd(e,n);break;case"select":t=n.value,t!=null&&ar(e,!!n.multiple,t,!1)}};fd=_o;pd=Mn;var lg={usingClientEntryPoint:!1,Events:[xa,Yn,$s,cd,dd,_o]},Lr={findFiberByHostInstance:jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},og={bundleType:Lr.bundleType,version:Lr.version,rendererPackageName:Lr.rendererPackageName,rendererConfig:Lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gd(e),e===null?null:e.stateNode},findFiberByHostInstance:Lr.findFiberByHostInstance||sg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{Bs=Qa.inject(og),jt=Qa}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lg;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!To(t))throw Error(C(200));return ag(e,t,null,n)};nt.createRoot=function(e,t){if(!To(e))throw Error(C(299));var n=!1,r="",a=Kf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=No(e,1,!1,null,null,n,!1,r,a),e[It]=t.current,sa(e.nodeType===8?e.parentNode:e),new Co(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=gd(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return Mn(e)};nt.hydrate=function(e,t,n){if(!ei(t))throw Error(C(200));return ti(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!To(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,a=!1,s="",i=Kf;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=qf(t,null,e,1,n??null,a,!1,s,i),e[It]=t.current,sa(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Zs(t)};nt.render=function(e,t,n){if(!ei(t))throw Error(C(200));return ti(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!ei(e))throw Error(C(40));return e._reactRootContainer?(Mn(function(){ti(null,null,e,!1,function(){e._reactRootContainer=null,e[It]=null})}),!0):!1};nt.unstable_batchedUpdates=_o;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ei(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return ti(e,t,n,!1,r)};nt.version="18.3.1-next-f1338f8080-20240426";function Gf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gf)}catch(e){console.error(e)}}Gf(),Kc.exports=nt;var Do=Kc.exports;const ug=Mc(Do),cg=Oc({__proto__:null,default:ug},[Do]);var ic=Do;Fi.createRoot=ic.createRoot,Fi.hydrateRoot=ic.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oe.apply(null,arguments)}var xe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xe||(xe={}));const lc="popstate";function dg(e){e===void 0&&(e={});function t(r,a){let{pathname:s,search:i,hash:u}=r.location;return ma("",{pathname:s,search:i,hash:u},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:In(a)}return pg(t,n,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function vr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function fg(){return Math.random().toString(36).substr(2,8)}function oc(e,t){return{usr:e.state,key:e.key,idx:t}}function ma(e,t,n,r){return n===void 0&&(n=null),oe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vn(t):t,{state:n,key:t&&t.key||r||fg()})}function In(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function vn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function pg(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:s=!1}=r,i=a.history,u=xe.Pop,o=null,c=h();c==null&&(c=0,i.replaceState(oe({},i.state,{idx:c}),""));function h(){return(i.state||{idx:null}).idx}function f(){u=xe.Pop;let E=h(),m=E==null?null:E-c;c=E,o&&o({action:u,location:w.location,delta:m})}function p(E,m){u=xe.Push;let d=ma(w.location,E,m);c=h()+1;let g=oc(d,c),R=w.createHref(d);try{i.pushState(g,"",R)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;a.location.assign(R)}s&&o&&o({action:u,location:w.location,delta:1})}function v(E,m){u=xe.Replace;let d=ma(w.location,E,m);c=h();let g=oc(d,c),R=w.createHref(d);i.replaceState(g,"",R),s&&o&&o({action:u,location:w.location,delta:0})}function x(E){let m=a.location.origin!=="null"?a.location.origin:a.location.href,d=typeof E=="string"?E:In(E);return d=d.replace(/ $/,"%20"),J(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let w={get action(){return u},get location(){return e(a,i)},listen(E){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(lc,f),o=E,()=>{a.removeEventListener(lc,f),o=null}},createHref(E){return t(a,E)},createURL:x,encodeLocation(E){let m=x(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:v,go(E){return i.go(E)}};return w}var Z;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Z||(Z={}));const mg=new Set(["lazy","caseSensitive","path","id","index","children"]);function hg(e){return e.index===!0}function Ms(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((a,s)=>{let i=[...n,String(s)],u=typeof a.id=="string"?a.id:i.join("-");if(J(a.index!==!0||!a.children,"Cannot specify children on an index route"),J(!r[u],'Found a route id collision on id "'+u+`".  Route id's must be globally unique within Data Router usages`),hg(a)){let o=oe({},a,t(a),{id:u});return r[u]=o,o}else{let o=oe({},a,t(a),{id:u,children:void 0});return r[u]=o,a.children&&(o.children=Ms(a.children,t,i,r)),o}})}function bn(e,t,n){return n===void 0&&(n="/"),ds(e,t,n,!1)}function ds(e,t,n,r){let a=typeof t=="string"?vn(t):t,s=Ut(a.pathname||"/",n);if(s==null)return null;let i=Yf(e);vg(i);let u=null,o=Eg(s);for(let c=0;u==null&&c<i.length;++c)u=jg(i[c],o,r);return u}function gg(e,t){let{route:n,pathname:r,params:a}=e;return{id:n.id,pathname:r,params:a,data:t[n.id],handle:n.handle}}function Yf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(s,i,u)=>{let o={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:i,route:s};o.relativePath.startsWith("/")&&(J(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let c=Ot([r,o.relativePath]),h=n.concat(o);s.children&&s.children.length>0&&(J(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Yf(s.children,t,h,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:bg(c,s.index),routesMeta:h})};return e.forEach((s,i)=>{var u;if(s.path===""||!((u=s.path)!=null&&u.includes("?")))a(s,i);else for(let o of Xf(s.path))a(s,i,o)}),t}function Xf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return a?[s,""]:[s];let i=Xf(r.join("/")),u=[];return u.push(...i.map(o=>o===""?s:[s,o].join("/"))),a&&u.push(...i),u.map(o=>e.startsWith("/")&&o===""?"/":o)}function vg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Rg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yg=/^:[\w-]+$/,xg=3,wg=2,kg=1,Sg=10,_g=-2,uc=e=>e==="*";function bg(e,t){let n=e.split("/"),r=n.length;return n.some(uc)&&(r+=_g),t&&(r+=wg),n.filter(a=>!uc(a)).reduce((a,s)=>a+(yg.test(s)?xg:s===""?kg:Sg),r)}function Rg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function jg(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,a={},s="/",i=[];for(let u=0;u<r.length;++u){let o=r[u],c=u===r.length-1,h=s==="/"?t:t.slice(s.length)||"/",f=Is({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},h),p=o.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Is({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},h)),!f)return null;Object.assign(a,f.params),i.push({params:a,pathname:Ot([s,f.pathname]),pathnameBase:Tg(Ot([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Ot([s,f.pathnameBase]))}return i}function Is(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ng(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let s=a[0],i=s.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:p,isOptional:v}=h;if(p==="*"){let w=u[f]||"";i=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const x=u[f];return v&&!x?c[p]=void 0:c[p]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:i,pattern:e}}function Ng(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),vr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,u,o)=>(r.push({paramName:u,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Eg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return vr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ut(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Cg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?vn(e):e,s;return n?(n=Ao(n),n.startsWith("/")?s=cc(n.substring(1),"/"):s=cc(n,t)):s=t,{pathname:s,search:Dg(r),hash:Pg(a)}}function cc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Ai(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Po(e,t){let n=Zf(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Lo(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=vn(e):(a=oe({},e),J(!a.pathname||!a.pathname.includes("?"),Ai("?","pathname","search",a)),J(!a.pathname||!a.pathname.includes("#"),Ai("#","pathname","hash",a)),J(!a.search||!a.search.includes("#"),Ai("#","search","hash",a)));let s=e===""||a.pathname==="",i=s?"/":a.pathname,u;if(i==null)u=n;else{let f=t.length-1;if(!r&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),f-=1;a.pathname=p.join("/")}u=f>=0?t[f]:"/"}let o=Cg(a,u),c=i&&i!=="/"&&i.endsWith("/"),h=(s||i===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(c||h)&&(o.pathname+="/"),o}const Ao=e=>e.replace(/\/\/+/g,"/"),Ot=e=>Ao(e.join("/")),Tg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Dg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Pg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Fs{constructor(t,n,r,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ha(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ep=["post","put","patch","delete"],Lg=new Set(ep),Ag=["get",...ep],Og=new Set(Ag),Mg=new Set([301,302,303,307,308]),Ig=new Set([307,308]),Oi={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Fg={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ar={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Oo=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zg=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),tp="remix-router-transitions";function Ug(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;J(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let y=e.detectErrorBoundary;a=S=>({hasErrorBoundary:y(S)})}else a=zg;let s={},i=Ms(e.routes,a,void 0,s),u,o=e.basename||"/",c=e.dataStrategy||Wg,h=e.patchRoutesOnNavigation,f=oe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),p=null,v=new Set,x=null,w=null,E=null,m=e.hydrationData!=null,d=bn(i,e.history.location,o),g=!1,R=null;if(d==null&&!h){let y=Ve(404,{pathname:e.history.location.pathname}),{matches:S,route:b}=kc(i);d=S,R={[b.id]:y}}d&&!e.hydrationData&&Na(d,i,e.history.location.pathname).active&&(d=null);let T;if(d)if(d.some(y=>y.route.lazy))T=!1;else if(!d.some(y=>y.route.loader))T=!0;else if(f.v7_partialHydration){let y=e.hydrationData?e.hydrationData.loaderData:null,S=e.hydrationData?e.hydrationData.errors:null;if(S){let b=d.findIndex(N=>S[N.route.id]!==void 0);T=d.slice(0,b+1).every(N=>!Pl(N.route,y,S))}else T=d.every(b=>!Pl(b.route,y,S))}else T=e.hydrationData!=null;else if(T=!1,d=[],f.v7_partialHydration){let y=Na(null,i,e.history.location.pathname);y.active&&y.matches&&(g=!0,d=y.matches)}let A,k={historyAction:e.history.action,location:e.history.location,matches:d,initialized:T,navigation:Oi,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||R,fetchers:new Map,blockers:new Map},j=xe.Pop,B=!1,P,X=!1,re=new Map,ke=null,je=!1,ft=!1,Vt=[],Wt=new Set,D=new Map,H=0,W=-1,te=new Map,ne=new Set,pt=new Map,Ke=new Map,Oe=new Set,Me=new Map,at=new Map,ba;function wp(){if(p=e.history.listen(y=>{let{action:S,location:b,delta:N}=y;if(ba){ba(),ba=void 0;return}vr(at.size===0||N!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let L=qo({currentLocation:k.location,nextLocation:b,historyAction:S});if(L&&N!=null){let U=new Promise(V=>{ba=V});e.history.go(N*-1),ja(L,{state:"blocked",location:b,proceed(){ja(L,{state:"proceeding",proceed:void 0,reset:void 0,location:b}),U.then(()=>e.history.go(N))},reset(){let V=new Map(k.blockers);V.set(L,Ar),Ie({blockers:V})}});return}return xn(S,b)}),n){av(t,re);let y=()=>sv(t,re);t.addEventListener("pagehide",y),ke=()=>t.removeEventListener("pagehide",y)}return k.initialized||xn(xe.Pop,k.location,{initialHydration:!0}),A}function kp(){p&&p(),ke&&ke(),v.clear(),P&&P.abort(),k.fetchers.forEach((y,S)=>Ra(S)),k.blockers.forEach((y,S)=>Qo(S))}function Sp(y){return v.add(y),()=>v.delete(y)}function Ie(y,S){S===void 0&&(S={}),k=oe({},k,y);let b=[],N=[];f.v7_fetcherPersist&&k.fetchers.forEach((L,U)=>{L.state==="idle"&&(Oe.has(U)?N.push(U):b.push(U))}),Oe.forEach(L=>{!k.fetchers.has(L)&&!D.has(L)&&N.push(L)}),[...v].forEach(L=>L(k,{deletedFetchers:N,viewTransitionOpts:S.viewTransitionOpts,flushSync:S.flushSync===!0})),f.v7_fetcherPersist?(b.forEach(L=>k.fetchers.delete(L)),N.forEach(L=>Ra(L))):N.forEach(L=>Oe.delete(L))}function Un(y,S,b){var N,L;let{flushSync:U}=b===void 0?{}:b,V=k.actionData!=null&&k.navigation.formMethod!=null&&vt(k.navigation.formMethod)&&k.navigation.state==="loading"&&((N=y.state)==null?void 0:N._isRedirect)!==!0,I;S.actionData?Object.keys(S.actionData).length>0?I=S.actionData:I=null:V?I=k.actionData:I=null;let F=S.loaderData?xc(k.loaderData,S.loaderData,S.matches||[],S.errors):k.loaderData,M=k.blockers;M.size>0&&(M=new Map(M),M.forEach((q,Ne)=>M.set(Ne,Ar)));let z=B===!0||k.navigation.formMethod!=null&&vt(k.navigation.formMethod)&&((L=y.state)==null?void 0:L._isRedirect)!==!0;u&&(i=u,u=void 0),je||j===xe.Pop||(j===xe.Push?e.history.push(y,y.state):j===xe.Replace&&e.history.replace(y,y.state));let $;if(j===xe.Pop){let q=re.get(k.location.pathname);q&&q.has(y.pathname)?$={currentLocation:k.location,nextLocation:y}:re.has(y.pathname)&&($={currentLocation:y,nextLocation:k.location})}else if(X){let q=re.get(k.location.pathname);q?q.add(y.pathname):(q=new Set([y.pathname]),re.set(k.location.pathname,q)),$={currentLocation:k.location,nextLocation:y}}Ie(oe({},S,{actionData:I,loaderData:F,historyAction:j,location:y,initialized:!0,navigation:Oi,revalidation:"idle",restoreScrollPosition:Go(y,S.matches||k.matches),preventScrollReset:z,blockers:M}),{viewTransitionOpts:$,flushSync:U===!0}),j=xe.Pop,B=!1,X=!1,je=!1,ft=!1,Vt=[]}async function Uo(y,S){if(typeof y=="number"){e.history.go(y);return}let b=Dl(k.location,k.matches,o,f.v7_prependBasename,y,f.v7_relativeSplatPath,S==null?void 0:S.fromRouteId,S==null?void 0:S.relative),{path:N,submission:L,error:U}=dc(f.v7_normalizeFormMethod,!1,b,S),V=k.location,I=ma(k.location,N,S&&S.state);I=oe({},I,e.history.encodeLocation(I));let F=S&&S.replace!=null?S.replace:void 0,M=xe.Push;F===!0?M=xe.Replace:F===!1||L!=null&&vt(L.formMethod)&&L.formAction===k.location.pathname+k.location.search&&(M=xe.Replace);let z=S&&"preventScrollReset"in S?S.preventScrollReset===!0:void 0,$=(S&&S.flushSync)===!0,q=qo({currentLocation:V,nextLocation:I,historyAction:M});if(q){ja(q,{state:"blocked",location:I,proceed(){ja(q,{state:"proceeding",proceed:void 0,reset:void 0,location:I}),Uo(y,S)},reset(){let Ne=new Map(k.blockers);Ne.set(q,Ar),Ie({blockers:Ne})}});return}return await xn(M,I,{submission:L,pendingError:U,preventScrollReset:z,replace:S&&S.replace,enableViewTransition:S&&S.viewTransition,flushSync:$})}function _p(){if(ai(),Ie({revalidation:"loading"}),k.navigation.state!=="submitting"){if(k.navigation.state==="idle"){xn(k.historyAction,k.location,{startUninterruptedRevalidation:!0});return}xn(j||k.historyAction,k.navigation.location,{overrideNavigation:k.navigation,enableViewTransition:X===!0})}}async function xn(y,S,b){P&&P.abort(),P=null,j=y,je=(b&&b.startUninterruptedRevalidation)===!0,Lp(k.location,k.matches),B=(b&&b.preventScrollReset)===!0,X=(b&&b.enableViewTransition)===!0;let N=u||i,L=b&&b.overrideNavigation,U=b!=null&&b.initialHydration&&k.matches&&k.matches.length>0&&!g?k.matches:bn(N,S,o),V=(b&&b.flushSync)===!0;if(U&&k.initialized&&!ft&&Gg(k.location,S)&&!(b&&b.submission&&vt(b.submission.formMethod))){Un(S,{matches:U},{flushSync:V});return}let I=Na(U,N,S.pathname);if(I.active&&I.matches&&(U=I.matches),!U){let{error:ae,notFoundMatches:Y,route:pe}=si(S.pathname);Un(S,{matches:Y,loaderData:{},errors:{[pe.id]:ae}},{flushSync:V});return}P=new AbortController;let F=$n(e.history,S,P.signal,b&&b.submission),M;if(b&&b.pendingError)M=[Rn(U).route.id,{type:Z.error,error:b.pendingError}];else if(b&&b.submission&&vt(b.submission.formMethod)){let ae=await bp(F,S,b.submission,U,I.active,{replace:b.replace,flushSync:V});if(ae.shortCircuited)return;if(ae.pendingActionResult){let[Y,pe]=ae.pendingActionResult;if(Ye(pe)&&ha(pe.error)&&pe.error.status===404){P=null,Un(S,{matches:ae.matches,loaderData:{},errors:{[Y]:pe.error}});return}}U=ae.matches||U,M=ae.pendingActionResult,L=Mi(S,b.submission),V=!1,I.active=!1,F=$n(e.history,F.url,F.signal)}let{shortCircuited:z,matches:$,loaderData:q,errors:Ne}=await Rp(F,S,U,I.active,L,b&&b.submission,b&&b.fetcherSubmission,b&&b.replace,b&&b.initialHydration===!0,V,M);z||(P=null,Un(S,oe({matches:$||U},wc(M),{loaderData:q,errors:Ne})))}async function bp(y,S,b,N,L,U){U===void 0&&(U={}),ai();let V=nv(S,b);if(Ie({navigation:V},{flushSync:U.flushSync===!0}),L){let M=await Ea(N,S.pathname,y.signal);if(M.type==="aborted")return{shortCircuited:!0};if(M.type==="error"){let z=Rn(M.partialMatches).route.id;return{matches:M.partialMatches,pendingActionResult:[z,{type:Z.error,error:M.error}]}}else if(M.matches)N=M.matches;else{let{notFoundMatches:z,error:$,route:q}=si(S.pathname);return{matches:z,pendingActionResult:[q.id,{type:Z.error,error:$}]}}}let I,F=Br(N,S);if(!F.route.action&&!F.route.lazy)I={type:Z.error,error:Ve(405,{method:y.method,pathname:S.pathname,routeId:F.route.id})};else if(I=(await Sr("action",k,y,[F],N,null))[F.route.id],y.signal.aborted)return{shortCircuited:!0};if(Cn(I)){let M;return U&&U.replace!=null?M=U.replace:M=gc(I.response.headers.get("Location"),new URL(y.url),o,e.history)===k.location.pathname+k.location.search,await wn(y,I,!0,{submission:b,replace:M}),{shortCircuited:!0}}if(tn(I))throw Ve(400,{type:"defer-action"});if(Ye(I)){let M=Rn(N,F.route.id);return(U&&U.replace)!==!0&&(j=xe.Push),{matches:N,pendingActionResult:[M.route.id,I]}}return{matches:N,pendingActionResult:[F.route.id,I]}}async function Rp(y,S,b,N,L,U,V,I,F,M,z){let $=L||Mi(S,U),q=U||V||_c($),Ne=!je&&(!f.v7_partialHydration||!F);if(N){if(Ne){let me=Bo(z);Ie(oe({navigation:$},me!==void 0?{actionData:me}:{}),{flushSync:M})}let G=await Ea(b,S.pathname,y.signal);if(G.type==="aborted")return{shortCircuited:!0};if(G.type==="error"){let me=Rn(G.partialMatches).route.id;return{matches:G.partialMatches,loaderData:{},errors:{[me]:G.error}}}else if(G.matches)b=G.matches;else{let{error:me,notFoundMatches:Hn,route:Rr}=si(S.pathname);return{matches:Hn,loaderData:{},errors:{[Rr.id]:me}}}}let ae=u||i,[Y,pe]=pc(e.history,k,b,q,S,f.v7_partialHydration&&F===!0,f.v7_skipActionErrorRevalidation,ft,Vt,Wt,Oe,pt,ne,ae,o,z);if(ii(G=>!(b&&b.some(me=>me.route.id===G))||Y&&Y.some(me=>me.route.id===G)),W=++H,Y.length===0&&pe.length===0){let G=$o();return Un(S,oe({matches:b,loaderData:{},errors:z&&Ye(z[1])?{[z[0]]:z[1].error}:null},wc(z),G?{fetchers:new Map(k.fetchers)}:{}),{flushSync:M}),{shortCircuited:!0}}if(Ne){let G={};if(!N){G.navigation=$;let me=Bo(z);me!==void 0&&(G.actionData=me)}pe.length>0&&(G.fetchers=jp(pe)),Ie(G,{flushSync:M})}pe.forEach(G=>{Jt(G.key),G.controller&&D.set(G.key,G.controller)});let Bn=()=>pe.forEach(G=>Jt(G.key));P&&P.signal.addEventListener("abort",Bn);let{loaderResults:_r,fetcherResults:Ct}=await Ho(k,b,Y,pe,y);if(y.signal.aborted)return{shortCircuited:!0};P&&P.signal.removeEventListener("abort",Bn),pe.forEach(G=>D.delete(G.key));let St=qa(_r);if(St)return await wn(y,St.result,!0,{replace:I}),{shortCircuited:!0};if(St=qa(Ct),St)return ne.add(St.key),await wn(y,St.result,!0,{replace:I}),{shortCircuited:!0};let{loaderData:li,errors:br}=yc(k,b,_r,z,pe,Ct,Me);Me.forEach((G,me)=>{G.subscribe(Hn=>{(Hn||G.done)&&Me.delete(me)})}),f.v7_partialHydration&&F&&k.errors&&(br=oe({},k.errors,br));let kn=$o(),Ca=Jo(W),Ta=kn||Ca||pe.length>0;return oe({matches:b,loaderData:li,errors:br},Ta?{fetchers:new Map(k.fetchers)}:{})}function Bo(y){if(y&&!Ye(y[1]))return{[y[0]]:y[1].data};if(k.actionData)return Object.keys(k.actionData).length===0?null:k.actionData}function jp(y){return y.forEach(S=>{let b=k.fetchers.get(S.key),N=Or(void 0,b?b.data:void 0);k.fetchers.set(S.key,N)}),new Map(k.fetchers)}function Np(y,S,b,N){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Jt(y);let L=(N&&N.flushSync)===!0,U=u||i,V=Dl(k.location,k.matches,o,f.v7_prependBasename,b,f.v7_relativeSplatPath,S,N==null?void 0:N.relative),I=bn(U,V,o),F=Na(I,U,V);if(F.active&&F.matches&&(I=F.matches),!I){Et(y,S,Ve(404,{pathname:V}),{flushSync:L});return}let{path:M,submission:z,error:$}=dc(f.v7_normalizeFormMethod,!0,V,N);if($){Et(y,S,$,{flushSync:L});return}let q=Br(I,M),Ne=(N&&N.preventScrollReset)===!0;if(z&&vt(z.formMethod)){Ep(y,S,M,q,I,F.active,L,Ne,z);return}pt.set(y,{routeId:S,path:M}),Cp(y,S,M,q,I,F.active,L,Ne,z)}async function Ep(y,S,b,N,L,U,V,I,F){ai(),pt.delete(y);function M(ye){if(!ye.route.action&&!ye.route.lazy){let Vn=Ve(405,{method:F.formMethod,pathname:b,routeId:S});return Et(y,S,Vn,{flushSync:V}),!0}return!1}if(!U&&M(N))return;let z=k.fetchers.get(y);$t(y,rv(F,z),{flushSync:V});let $=new AbortController,q=$n(e.history,b,$.signal,F);if(U){let ye=await Ea(L,new URL(q.url).pathname,q.signal,y);if(ye.type==="aborted")return;if(ye.type==="error"){Et(y,S,ye.error,{flushSync:V});return}else if(ye.matches){if(L=ye.matches,N=Br(L,b),M(N))return}else{Et(y,S,Ve(404,{pathname:b}),{flushSync:V});return}}D.set(y,$);let Ne=H,Y=(await Sr("action",k,q,[N],L,y))[N.route.id];if(q.signal.aborted){D.get(y)===$&&D.delete(y);return}if(f.v7_fetcherPersist&&Oe.has(y)){if(Cn(Y)||Ye(Y)){$t(y,qt(void 0));return}}else{if(Cn(Y))if(D.delete(y),W>Ne){$t(y,qt(void 0));return}else return ne.add(y),$t(y,Or(F)),wn(q,Y,!1,{fetcherSubmission:F,preventScrollReset:I});if(Ye(Y)){Et(y,S,Y.error);return}}if(tn(Y))throw Ve(400,{type:"defer-action"});let pe=k.navigation.location||k.location,Bn=$n(e.history,pe,$.signal),_r=u||i,Ct=k.navigation.state!=="idle"?bn(_r,k.navigation.location,o):k.matches;J(Ct,"Didn't find any matches after fetcher action");let St=++H;te.set(y,St);let li=Or(F,Y.data);k.fetchers.set(y,li);let[br,kn]=pc(e.history,k,Ct,F,pe,!1,f.v7_skipActionErrorRevalidation,ft,Vt,Wt,Oe,pt,ne,_r,o,[N.route.id,Y]);kn.filter(ye=>ye.key!==y).forEach(ye=>{let Vn=ye.key,Yo=k.fetchers.get(Vn),Mp=Or(void 0,Yo?Yo.data:void 0);k.fetchers.set(Vn,Mp),Jt(Vn),ye.controller&&D.set(Vn,ye.controller)}),Ie({fetchers:new Map(k.fetchers)});let Ca=()=>kn.forEach(ye=>Jt(ye.key));$.signal.addEventListener("abort",Ca);let{loaderResults:Ta,fetcherResults:G}=await Ho(k,Ct,br,kn,Bn);if($.signal.aborted)return;$.signal.removeEventListener("abort",Ca),te.delete(y),D.delete(y),kn.forEach(ye=>D.delete(ye.key));let me=qa(Ta);if(me)return wn(Bn,me.result,!1,{preventScrollReset:I});if(me=qa(G),me)return ne.add(me.key),wn(Bn,me.result,!1,{preventScrollReset:I});let{loaderData:Hn,errors:Rr}=yc(k,Ct,Ta,void 0,kn,G,Me);if(k.fetchers.has(y)){let ye=qt(Y.data);k.fetchers.set(y,ye)}Jo(St),k.navigation.state==="loading"&&St>W?(J(j,"Expected pending action"),P&&P.abort(),Un(k.navigation.location,{matches:Ct,loaderData:Hn,errors:Rr,fetchers:new Map(k.fetchers)})):(Ie({errors:Rr,loaderData:xc(k.loaderData,Hn,Ct,Rr),fetchers:new Map(k.fetchers)}),ft=!1)}async function Cp(y,S,b,N,L,U,V,I,F){let M=k.fetchers.get(y);$t(y,Or(F,M?M.data:void 0),{flushSync:V});let z=new AbortController,$=$n(e.history,b,z.signal);if(U){let Y=await Ea(L,new URL($.url).pathname,$.signal,y);if(Y.type==="aborted")return;if(Y.type==="error"){Et(y,S,Y.error,{flushSync:V});return}else if(Y.matches)L=Y.matches,N=Br(L,b);else{Et(y,S,Ve(404,{pathname:b}),{flushSync:V});return}}D.set(y,z);let q=H,ae=(await Sr("loader",k,$,[N],L,y))[N.route.id];if(tn(ae)&&(ae=await Mo(ae,$.signal,!0)||ae),D.get(y)===z&&D.delete(y),!$.signal.aborted){if(Oe.has(y)){$t(y,qt(void 0));return}if(Cn(ae))if(W>q){$t(y,qt(void 0));return}else{ne.add(y),await wn($,ae,!1,{preventScrollReset:I});return}if(Ye(ae)){Et(y,S,ae.error);return}J(!tn(ae),"Unhandled fetcher deferred data"),$t(y,qt(ae.data))}}async function wn(y,S,b,N){let{submission:L,fetcherSubmission:U,preventScrollReset:V,replace:I}=N===void 0?{}:N;S.response.headers.has("X-Remix-Revalidate")&&(ft=!0);let F=S.response.headers.get("Location");J(F,"Expected a Location header on the redirect Response"),F=gc(F,new URL(y.url),o,e.history);let M=ma(k.location,F,{_isRedirect:!0});if(n){let Y=!1;if(S.response.headers.has("X-Remix-Reload-Document"))Y=!0;else if(Oo.test(F)){const pe=e.history.createURL(F);Y=pe.origin!==t.location.origin||Ut(pe.pathname,o)==null}if(Y){I?t.location.replace(F):t.location.assign(F);return}}P=null;let z=I===!0||S.response.headers.has("X-Remix-Replace")?xe.Replace:xe.Push,{formMethod:$,formAction:q,formEncType:Ne}=k.navigation;!L&&!U&&$&&q&&Ne&&(L=_c(k.navigation));let ae=L||U;if(Ig.has(S.response.status)&&ae&&vt(ae.formMethod))await xn(z,M,{submission:oe({},ae,{formAction:F}),preventScrollReset:V||B,enableViewTransition:b?X:void 0});else{let Y=Mi(M,L);await xn(z,M,{overrideNavigation:Y,fetcherSubmission:U,preventScrollReset:V||B,enableViewTransition:b?X:void 0})}}async function Sr(y,S,b,N,L,U){let V,I={};try{V=await $g(c,y,S,b,N,L,U,s,a)}catch(F){return N.forEach(M=>{I[M.route.id]={type:Z.error,error:F}}),I}for(let[F,M]of Object.entries(V))if(Yg(M)){let z=M.result;I[F]={type:Z.redirect,response:qg(z,b,F,L,o,f.v7_relativeSplatPath)}}else I[F]=await Qg(M);return I}async function Ho(y,S,b,N,L){let U=y.matches,V=Sr("loader",y,L,b,S,null),I=Promise.all(N.map(async z=>{if(z.matches&&z.match&&z.controller){let q=(await Sr("loader",y,$n(e.history,z.path,z.controller.signal),[z.match],z.matches,z.key))[z.match.route.id];return{[z.key]:q}}else return Promise.resolve({[z.key]:{type:Z.error,error:Ve(404,{pathname:z.path})}})})),F=await V,M=(await I).reduce((z,$)=>Object.assign(z,$),{});return await Promise.all([ev(S,F,L.signal,U,y.loaderData),tv(S,M,N)]),{loaderResults:F,fetcherResults:M}}function ai(){ft=!0,Vt.push(...ii()),pt.forEach((y,S)=>{D.has(S)&&Wt.add(S),Jt(S)})}function $t(y,S,b){b===void 0&&(b={}),k.fetchers.set(y,S),Ie({fetchers:new Map(k.fetchers)},{flushSync:(b&&b.flushSync)===!0})}function Et(y,S,b,N){N===void 0&&(N={});let L=Rn(k.matches,S);Ra(y),Ie({errors:{[L.route.id]:b},fetchers:new Map(k.fetchers)},{flushSync:(N&&N.flushSync)===!0})}function Vo(y){return Ke.set(y,(Ke.get(y)||0)+1),Oe.has(y)&&Oe.delete(y),k.fetchers.get(y)||Fg}function Ra(y){let S=k.fetchers.get(y);D.has(y)&&!(S&&S.state==="loading"&&te.has(y))&&Jt(y),pt.delete(y),te.delete(y),ne.delete(y),f.v7_fetcherPersist&&Oe.delete(y),Wt.delete(y),k.fetchers.delete(y)}function Tp(y){let S=(Ke.get(y)||0)-1;S<=0?(Ke.delete(y),Oe.add(y),f.v7_fetcherPersist||Ra(y)):Ke.set(y,S),Ie({fetchers:new Map(k.fetchers)})}function Jt(y){let S=D.get(y);S&&(S.abort(),D.delete(y))}function Wo(y){for(let S of y){let b=Vo(S),N=qt(b.data);k.fetchers.set(S,N)}}function $o(){let y=[],S=!1;for(let b of ne){let N=k.fetchers.get(b);J(N,"Expected fetcher: "+b),N.state==="loading"&&(ne.delete(b),y.push(b),S=!0)}return Wo(y),S}function Jo(y){let S=[];for(let[b,N]of te)if(N<y){let L=k.fetchers.get(b);J(L,"Expected fetcher: "+b),L.state==="loading"&&(Jt(b),te.delete(b),S.push(b))}return Wo(S),S.length>0}function Dp(y,S){let b=k.blockers.get(y)||Ar;return at.get(y)!==S&&at.set(y,S),b}function Qo(y){k.blockers.delete(y),at.delete(y)}function ja(y,S){let b=k.blockers.get(y)||Ar;J(b.state==="unblocked"&&S.state==="blocked"||b.state==="blocked"&&S.state==="blocked"||b.state==="blocked"&&S.state==="proceeding"||b.state==="blocked"&&S.state==="unblocked"||b.state==="proceeding"&&S.state==="unblocked","Invalid blocker state transition: "+b.state+" -> "+S.state);let N=new Map(k.blockers);N.set(y,S),Ie({blockers:N})}function qo(y){let{currentLocation:S,nextLocation:b,historyAction:N}=y;if(at.size===0)return;at.size>1&&vr(!1,"A router only supports one blocker at a time");let L=Array.from(at.entries()),[U,V]=L[L.length-1],I=k.blockers.get(U);if(!(I&&I.state==="proceeding")&&V({currentLocation:S,nextLocation:b,historyAction:N}))return U}function si(y){let S=Ve(404,{pathname:y}),b=u||i,{matches:N,route:L}=kc(b);return ii(),{notFoundMatches:N,route:L,error:S}}function ii(y){let S=[];return Me.forEach((b,N)=>{(!y||y(N))&&(b.cancel(),S.push(N),Me.delete(N))}),S}function Pp(y,S,b){if(x=y,E=S,w=b||null,!m&&k.navigation===Oi){m=!0;let N=Go(k.location,k.matches);N!=null&&Ie({restoreScrollPosition:N})}return()=>{x=null,E=null,w=null}}function Ko(y,S){return w&&w(y,S.map(N=>gg(N,k.loaderData)))||y.key}function Lp(y,S){if(x&&E){let b=Ko(y,S);x[b]=E()}}function Go(y,S){if(x){let b=Ko(y,S),N=x[b];if(typeof N=="number")return N}return null}function Na(y,S,b){if(h)if(y){if(Object.keys(y[0].params).length>0)return{active:!0,matches:ds(S,b,o,!0)}}else return{active:!0,matches:ds(S,b,o,!0)||[]};return{active:!1,matches:null}}async function Ea(y,S,b,N){if(!h)return{type:"success",matches:y};let L=y;for(;;){let U=u==null,V=u||i,I=s;try{await h({signal:b,path:S,matches:L,fetcherKey:N,patch:(z,$)=>{b.aborted||hc(z,$,V,I,a)}})}catch(z){return{type:"error",error:z,partialMatches:L}}finally{U&&!b.aborted&&(i=[...i])}if(b.aborted)return{type:"aborted"};let F=bn(V,S,o);if(F)return{type:"success",matches:F};let M=ds(V,S,o,!0);if(!M||L.length===M.length&&L.every((z,$)=>z.route.id===M[$].route.id))return{type:"success",matches:null};L=M}}function Ap(y){s={},u=Ms(y,a,void 0,s)}function Op(y,S){let b=u==null;hc(y,S,u||i,s,a),b&&(i=[...i],Ie({}))}return A={get basename(){return o},get future(){return f},get state(){return k},get routes(){return i},get window(){return t},initialize:wp,subscribe:Sp,enableScrollRestoration:Pp,navigate:Uo,fetch:Np,revalidate:_p,createHref:y=>e.history.createHref(y),encodeLocation:y=>e.history.encodeLocation(y),getFetcher:Vo,deleteFetcher:Tp,dispose:kp,getBlocker:Dp,deleteBlocker:Qo,patchRoutes:Op,_internalFetchControllers:D,_internalActiveDeferreds:Me,_internalSetRoutes:Ap},A}function Bg(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Dl(e,t,n,r,a,s,i,u){let o,c;if(i){o=[];for(let f of t)if(o.push(f),f.route.id===i){c=f;break}}else o=t,c=t[t.length-1];let h=Lo(a||".",Po(o,s),Ut(e.pathname,n)||e.pathname,u==="path");if(a==null&&(h.search=e.search,h.hash=e.hash),(a==null||a===""||a===".")&&c){let f=Io(h.search);if(c.route.index&&!f)h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index";else if(!c.route.index&&f){let p=new URLSearchParams(h.search),v=p.getAll("index");p.delete("index"),v.filter(w=>w).forEach(w=>p.append("index",w));let x=p.toString();h.search=x?"?"+x:""}}return r&&n!=="/"&&(h.pathname=h.pathname==="/"?n:Ot([n,h.pathname])),In(h)}function dc(e,t,n,r){if(!r||!Bg(r))return{path:n};if(r.formMethod&&!Zg(r.formMethod))return{path:n,error:Ve(405,{method:r.formMethod})};let a=()=>({path:n,error:Ve(400,{type:"invalid-body"})}),s=r.formMethod||"get",i=e?s.toUpperCase():s.toLowerCase(),u=ap(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!vt(i))return a();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((v,x)=>{let[w,E]=x;return""+v+w+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:i,formAction:u,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!vt(i))return a();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:i,formAction:u,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return a()}}}J(typeof FormData=="function","FormData is not available in this environment");let o,c;if(r.formData)o=Ll(r.formData),c=r.formData;else if(r.body instanceof FormData)o=Ll(r.body),c=r.body;else if(r.body instanceof URLSearchParams)o=r.body,c=vc(o);else if(r.body==null)o=new URLSearchParams,c=new FormData;else try{o=new URLSearchParams(r.body),c=vc(o)}catch{return a()}let h={formMethod:i,formAction:u,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(vt(h.formMethod))return{path:n,submission:h};let f=vn(n);return t&&f.search&&Io(f.search)&&o.append("index",""),f.search="?"+o,{path:In(f),submission:h}}function fc(e,t,n){n===void 0&&(n=!1);let r=e.findIndex(a=>a.route.id===t);return r>=0?e.slice(0,n?r+1:r):e}function pc(e,t,n,r,a,s,i,u,o,c,h,f,p,v,x,w){let E=w?Ye(w[1])?w[1].error:w[1].data:void 0,m=e.createURL(t.location),d=e.createURL(a),g=n;s&&t.errors?g=fc(n,Object.keys(t.errors)[0],!0):w&&Ye(w[1])&&(g=fc(n,w[0]));let R=w?w[1].statusCode:void 0,T=i&&R&&R>=400,A=g.filter((j,B)=>{let{route:P}=j;if(P.lazy)return!0;if(P.loader==null)return!1;if(s)return Pl(P,t.loaderData,t.errors);if(Hg(t.loaderData,t.matches[B],j)||o.some(ke=>ke===j.route.id))return!0;let X=t.matches[B],re=j;return mc(j,oe({currentUrl:m,currentParams:X.params,nextUrl:d,nextParams:re.params},r,{actionResult:E,actionStatus:R,defaultShouldRevalidate:T?!1:u||m.pathname+m.search===d.pathname+d.search||m.search!==d.search||np(X,re)}))}),k=[];return f.forEach((j,B)=>{if(s||!n.some(je=>je.route.id===j.routeId)||h.has(B))return;let P=bn(v,j.path,x);if(!P){k.push({key:B,routeId:j.routeId,path:j.path,matches:null,match:null,controller:null});return}let X=t.fetchers.get(B),re=Br(P,j.path),ke=!1;p.has(B)?ke=!1:c.has(B)?(c.delete(B),ke=!0):X&&X.state!=="idle"&&X.data===void 0?ke=u:ke=mc(re,oe({currentUrl:m,currentParams:t.matches[t.matches.length-1].params,nextUrl:d,nextParams:n[n.length-1].params},r,{actionResult:E,actionStatus:R,defaultShouldRevalidate:T?!1:u})),ke&&k.push({key:B,routeId:j.routeId,path:j.path,matches:P,match:re,controller:new AbortController})}),[A,k]}function Pl(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let r=t!=null&&t[e.id]!==void 0,a=n!=null&&n[e.id]!==void 0;return!r&&a?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!r&&!a}function Hg(e,t,n){let r=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return r||a}function np(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function mc(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function hc(e,t,n,r,a){var s;let i;if(e){let c=r[e];J(c,"No route found to patch children into: routeId = "+e),c.children||(c.children=[]),i=c.children}else i=n;let u=t.filter(c=>!i.some(h=>rp(c,h))),o=Ms(u,a,[e||"_","patch",String(((s=i)==null?void 0:s.length)||"0")],r);i.push(...o)}function rp(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,r)=>{var a;return(a=t.children)==null?void 0:a.some(s=>rp(n,s))}):!1}async function Vg(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let a=n[e.id];J(a,"No route found in manifest");let s={};for(let i in r){let o=a[i]!==void 0&&i!=="hasErrorBoundary";vr(!o,'Route "'+a.id+'" has a static property "'+i+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+i+'" will be ignored.')),!o&&!mg.has(i)&&(s[i]=r[i])}Object.assign(a,s),Object.assign(a,oe({},t(a),{lazy:void 0}))}async function Wg(e){let{matches:t}=e,n=t.filter(a=>a.shouldLoad);return(await Promise.all(n.map(a=>a.resolve()))).reduce((a,s,i)=>Object.assign(a,{[n[i].route.id]:s}),{})}async function $g(e,t,n,r,a,s,i,u,o,c){let h=s.map(v=>v.route.lazy?Vg(v.route,o,u):void 0),f=s.map((v,x)=>{let w=h[x],E=a.some(d=>d.route.id===v.route.id);return oe({},v,{shouldLoad:E,resolve:async d=>(d&&r.method==="GET"&&(v.route.lazy||v.route.loader)&&(E=!0),E?Jg(t,r,v,w,d,c):Promise.resolve({type:Z.data,result:void 0}))})}),p=await e({matches:f,request:r,params:s[0].params,fetcherKey:i,context:c});try{await Promise.all(h)}catch{}return p}async function Jg(e,t,n,r,a,s){let i,u,o=c=>{let h,f=new Promise((x,w)=>h=w);u=()=>h(),t.signal.addEventListener("abort",u);let p=x=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):c({request:t,params:n.params,context:s},...x!==void 0?[x]:[]),v=(async()=>{try{return{type:"data",result:await(a?a(w=>p(w)):p())}}catch(x){return{type:"error",result:x}}})();return Promise.race([v,f])};try{let c=n.route[e];if(r)if(c){let h,[f]=await Promise.all([o(c).catch(p=>{h=p}),r]);if(h!==void 0)throw h;i=f}else if(await r,c=n.route[e],c)i=await o(c);else if(e==="action"){let h=new URL(t.url),f=h.pathname+h.search;throw Ve(405,{method:t.method,pathname:f,routeId:n.route.id})}else return{type:Z.data,result:void 0};else if(c)i=await o(c);else{let h=new URL(t.url),f=h.pathname+h.search;throw Ve(404,{pathname:f})}J(i.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:Z.error,result:c}}finally{u&&t.signal.removeEventListener("abort",u)}return i}async function Qg(e){let{result:t,type:n}=e;if(sp(t)){let f;try{let p=t.headers.get("Content-Type");p&&/\bapplication\/json\b/.test(p)?t.body==null?f=null:f=await t.json():f=await t.text()}catch(p){return{type:Z.error,error:p}}return n===Z.error?{type:Z.error,error:new Fs(t.status,t.statusText,f),statusCode:t.status,headers:t.headers}:{type:Z.data,data:f,statusCode:t.status,headers:t.headers}}if(n===Z.error){if(Sc(t)){var r,a;if(t.data instanceof Error){var s,i;return{type:Z.error,error:t.data,statusCode:(s=t.init)==null?void 0:s.status,headers:(i=t.init)!=null&&i.headers?new Headers(t.init.headers):void 0}}return{type:Z.error,error:new Fs(((r=t.init)==null?void 0:r.status)||500,void 0,t.data),statusCode:ha(t)?t.status:void 0,headers:(a=t.init)!=null&&a.headers?new Headers(t.init.headers):void 0}}return{type:Z.error,error:t,statusCode:ha(t)?t.status:void 0}}if(Xg(t)){var u,o;return{type:Z.deferred,deferredData:t,statusCode:(u=t.init)==null?void 0:u.status,headers:((o=t.init)==null?void 0:o.headers)&&new Headers(t.init.headers)}}if(Sc(t)){var c,h;return{type:Z.data,data:t.data,statusCode:(c=t.init)==null?void 0:c.status,headers:(h=t.init)!=null&&h.headers?new Headers(t.init.headers):void 0}}return{type:Z.data,data:t}}function qg(e,t,n,r,a,s){let i=e.headers.get("Location");if(J(i,"Redirects returned/thrown from loaders/actions must have a Location header"),!Oo.test(i)){let u=r.slice(0,r.findIndex(o=>o.route.id===n)+1);i=Dl(new URL(t.url),u,a,!0,i,s),e.headers.set("Location",i)}return e}function gc(e,t,n,r){let a=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(Oo.test(e)){let s=e,i=s.startsWith("//")?new URL(t.protocol+s):new URL(s);if(a.includes(i.protocol))throw new Error("Invalid redirect location");let u=Ut(i.pathname,n)!=null;if(i.origin===t.origin&&u)return Ao(i.pathname)+i.search+i.hash}try{let s=r.createURL(e);if(a.includes(s.protocol))throw new Error("Invalid redirect location")}catch{}return e}function $n(e,t,n,r){let a=e.createURL(ap(t)).toString(),s={signal:n};if(r&&vt(r.formMethod)){let{formMethod:i,formEncType:u}=r;s.method=i.toUpperCase(),u==="application/json"?(s.headers=new Headers({"Content-Type":u}),s.body=JSON.stringify(r.json)):u==="text/plain"?s.body=r.text:u==="application/x-www-form-urlencoded"&&r.formData?s.body=Ll(r.formData):s.body=r.formData}return new Request(a,s)}function Ll(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function vc(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Kg(e,t,n,r,a){let s={},i=null,u,o=!1,c={},h=n&&Ye(n[1])?n[1].error:void 0;return e.forEach(f=>{if(!(f.route.id in t))return;let p=f.route.id,v=t[p];if(J(!Cn(v),"Cannot handle redirect results in processLoaderData"),Ye(v)){let x=v.error;h!==void 0&&(x=h,h=void 0),i=i||{};{let w=Rn(e,p);i[w.route.id]==null&&(i[w.route.id]=x)}s[p]=void 0,o||(o=!0,u=ha(v.error)?v.error.status:500),v.headers&&(c[p]=v.headers)}else tn(v)?(r.set(p,v.deferredData),s[p]=v.deferredData.data,v.statusCode!=null&&v.statusCode!==200&&!o&&(u=v.statusCode),v.headers&&(c[p]=v.headers)):(s[p]=v.data,v.statusCode&&v.statusCode!==200&&!o&&(u=v.statusCode),v.headers&&(c[p]=v.headers))}),h!==void 0&&n&&(i={[n[0]]:h},s[n[0]]=void 0),{loaderData:s,errors:i,statusCode:u||200,loaderHeaders:c}}function yc(e,t,n,r,a,s,i){let{loaderData:u,errors:o}=Kg(t,n,r,i);return a.forEach(c=>{let{key:h,match:f,controller:p}=c,v=s[h];if(J(v,"Did not find corresponding fetcher result"),!(p&&p.signal.aborted))if(Ye(v)){let x=Rn(e.matches,f==null?void 0:f.route.id);o&&o[x.route.id]||(o=oe({},o,{[x.route.id]:v.error})),e.fetchers.delete(h)}else if(Cn(v))J(!1,"Unhandled fetcher revalidation redirect");else if(tn(v))J(!1,"Unhandled fetcher deferred data");else{let x=qt(v.data);e.fetchers.set(h,x)}}),{loaderData:u,errors:o}}function xc(e,t,n,r){let a=oe({},t);for(let s of n){let i=s.route.id;if(t.hasOwnProperty(i)?t[i]!==void 0&&(a[i]=t[i]):e[i]!==void 0&&s.route.loader&&(a[i]=e[i]),r&&r.hasOwnProperty(i))break}return a}function wc(e){return e?Ye(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Rn(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function kc(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Ve(e,t){let{pathname:n,routeId:r,method:a,type:s,message:i}=t===void 0?{}:t,u="Unknown Server Error",o="Unknown @remix-run/router error";return e===400?(u="Bad Request",a&&n&&r?o="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?o="defer() is not supported in actions":s==="invalid-body"&&(o="Unable to encode submission body")):e===403?(u="Forbidden",o='Route "'+r+'" does not match URL "'+n+'"'):e===404?(u="Not Found",o='No route matches URL "'+n+'"'):e===405&&(u="Method Not Allowed",a&&n&&r?o="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":a&&(o='Invalid request method "'+a.toUpperCase()+'"')),new Fs(e||500,u,new Error(o),!0)}function qa(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,a]=t[n];if(Cn(a))return{key:r,result:a}}}function ap(e){let t=typeof e=="string"?vn(e):e;return In(oe({},t,{hash:""}))}function Gg(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Yg(e){return sp(e.result)&&Mg.has(e.result.status)}function tn(e){return e.type===Z.deferred}function Ye(e){return e.type===Z.error}function Cn(e){return(e&&e.type)===Z.redirect}function Sc(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function Xg(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function sp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Zg(e){return Og.has(e.toLowerCase())}function vt(e){return Lg.has(e.toLowerCase())}async function ev(e,t,n,r,a){let s=Object.entries(t);for(let i=0;i<s.length;i++){let[u,o]=s[i],c=e.find(p=>(p==null?void 0:p.route.id)===u);if(!c)continue;let h=r.find(p=>p.route.id===c.route.id),f=h!=null&&!np(h,c)&&(a&&a[c.route.id])!==void 0;tn(o)&&f&&await Mo(o,n,!1).then(p=>{p&&(t[u]=p)})}}async function tv(e,t,n){for(let r=0;r<n.length;r++){let{key:a,routeId:s,controller:i}=n[r],u=t[a];e.find(c=>(c==null?void 0:c.route.id)===s)&&tn(u)&&(J(i,"Expected an AbortController for revalidating fetcher deferred result"),await Mo(u,i.signal,!0).then(c=>{c&&(t[a]=c)}))}}async function Mo(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Z.data,data:e.deferredData.unwrappedData}}catch(a){return{type:Z.error,error:a}}return{type:Z.data,data:e.deferredData.data}}}function Io(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Br(e,t){let n=typeof t=="string"?vn(t).search:t.search;if(e[e.length-1].route.index&&Io(n||""))return e[e.length-1];let r=Zf(e);return r[r.length-1]}function _c(e){let{formMethod:t,formAction:n,formEncType:r,text:a,formData:s,json:i}=e;if(!(!t||!n||!r)){if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:a};if(s!=null)return{formMethod:t,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(i!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:i,text:void 0}}}function Mi(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function nv(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Or(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function rv(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function qt(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function av(e,t){try{let n=e.sessionStorage.getItem(tp);if(n){let r=JSON.parse(n);for(let[a,s]of Object.entries(r||{}))s&&Array.isArray(s)&&t.set(a,new Set(s||[]))}}catch{}}function sv(e,t){if(t.size>0){let n={};for(let[r,a]of t)n[r]=[...a];try{e.sessionStorage.setItem(tp,JSON.stringify(n))}catch(r){vr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zs(){return zs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zs.apply(null,arguments)}const ka=_.createContext(null),Fo=_.createContext(null),yn=_.createContext(null),zo=_.createContext(null),Ht=_.createContext({outlet:null,matches:[],isDataRoute:!1}),ip=_.createContext(null);function iv(e,t){let{relative:n}=t===void 0?{}:t;Sa()||J(!1);let{basename:r,navigator:a}=_.useContext(yn),{hash:s,pathname:i,search:u}=ni(e,{relative:n}),o=i;return r!=="/"&&(o=i==="/"?r:Ot([r,i])),a.createHref({pathname:o,search:u,hash:s})}function Sa(){return _.useContext(zo)!=null}function _a(){return Sa()||J(!1),_.useContext(zo).location}function lp(e){_.useContext(yn).static||_.useLayoutEffect(e)}function lv(){let{isDataRoute:e}=_.useContext(Ht);return e?Sv():ov()}function ov(){Sa()||J(!1);let e=_.useContext(ka),{basename:t,future:n,navigator:r}=_.useContext(yn),{matches:a}=_.useContext(Ht),{pathname:s}=_a(),i=JSON.stringify(Po(a,n.v7_relativeSplatPath)),u=_.useRef(!1);return lp(()=>{u.current=!0}),_.useCallback(function(c,h){if(h===void 0&&(h={}),!u.current)return;if(typeof c=="number"){r.go(c);return}let f=Lo(c,JSON.parse(i),s,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ot([t,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[t,r,i,s,e])}const uv=_.createContext(null);function cv(e){let t=_.useContext(Ht).outlet;return t&&_.createElement(uv.Provider,{value:e},t)}function dv(){let{matches:e}=_.useContext(Ht),t=e[e.length-1];return t?t.params:{}}function ni(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=_.useContext(yn),{matches:a}=_.useContext(Ht),{pathname:s}=_a(),i=JSON.stringify(Po(a,r.v7_relativeSplatPath));return _.useMemo(()=>Lo(e,JSON.parse(i),s,n==="path"),[e,i,s,n])}function fv(e,t,n,r){Sa()||J(!1);let{navigator:a}=_.useContext(yn),{matches:s}=_.useContext(Ht),i=s[s.length-1],u=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let c=_a(),h;h=c;let f=h.pathname||"/",p=f;if(o!=="/"){let w=o.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let v=bn(e,{pathname:p});return vv(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},u,w.params),pathname:Ot([o,a.encodeLocation?a.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?o:Ot([o,a.encodeLocation?a.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r)}function pv(){let e=kv(),t=ha(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:a},n):null,null)}const mv=_.createElement(pv,null);class hv extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(Ht.Provider,{value:this.props.routeContext},_.createElement(ip.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gv(e){let{routeContext:t,match:n,children:r}=e,a=_.useContext(ka);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Ht.Provider,{value:t},r)}function vv(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,u=(a=n)==null?void 0:a.errors;if(u!=null){let h=i.findIndex(f=>f.route.id&&(u==null?void 0:u[f.route.id])!==void 0);h>=0||J(!1),i=i.slice(0,Math.min(i.length,h+1))}let o=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<i.length;h++){let f=i[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:p,errors:v}=n,x=f.route.loader&&p[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||x){o=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((h,f,p)=>{let v,x=!1,w=null,E=null;n&&(v=u&&f.route.id?u[f.route.id]:void 0,w=f.route.errorElement||mv,o&&(c<0&&p===0?(_v("route-fallback"),x=!0,E=null):c===p&&(x=!0,E=f.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,p+1)),d=()=>{let g;return v?g=w:x?g=E:f.route.Component?g=_.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=h,_.createElement(gv,{match:f,routeContext:{outlet:h,matches:m,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?_.createElement(hv,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var op=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(op||{}),up=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(up||{});function yv(e){let t=_.useContext(ka);return t||J(!1),t}function xv(e){let t=_.useContext(Fo);return t||J(!1),t}function wv(e){let t=_.useContext(Ht);return t||J(!1),t}function cp(e){let t=wv(),n=t.matches[t.matches.length-1];return n.route.id||J(!1),n.route.id}function kv(){var e;let t=_.useContext(ip),n=xv(),r=cp();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Sv(){let{router:e}=yv(op.UseNavigateStable),t=cp(up.UseNavigateStable),n=_.useRef(!1);return lp(()=>{n.current=!0}),_.useCallback(function(a,s){s===void 0&&(s={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,zs({fromRouteId:t},s)))},[e,t])}const bc={};function _v(e,t,n){bc[e]||(bc[e]=!0)}function bv(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function Rv(e){return cv(e.context)}function jv(e){let{basename:t="/",children:n=null,location:r,navigationType:a=xe.Pop,navigator:s,static:i=!1,future:u}=e;Sa()&&J(!1);let o=t.replace(/^\/*/,"/"),c=_.useMemo(()=>({basename:o,navigator:s,static:i,future:zs({v7_relativeSplatPath:!1},u)}),[o,u,s,i]);typeof r=="string"&&(r=vn(r));let{pathname:h="/",search:f="",hash:p="",state:v=null,key:x="default"}=r,w=_.useMemo(()=>{let E=Ut(h,o);return E==null?null:{location:{pathname:E,search:f,hash:p,state:v,key:x},navigationType:a}},[o,h,f,p,v,x,a]);return w==null?null:_.createElement(yn.Provider,{value:c},_.createElement(zo.Provider,{children:n,value:w}))}new Promise(()=>{});function Nv(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:_.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:_.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:_.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yr(){return yr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yr.apply(null,arguments)}function dp(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Ev(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Cv(e,t){return e.button===0&&(!t||t==="_self")&&!Ev(e)}const Tv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Dv=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Pv="6";try{window.__reactRouterVersion=Pv}catch{}function Lv(e,t){return Ug({basename:t==null?void 0:t.basename,future:yr({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:dg({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Av(),routes:e,mapRouteProperties:Nv,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function Av(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=yr({},t,{errors:Ov(t.errors)})),t}function Ov(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,a]of t)if(a&&a.__type==="RouteErrorResponse")n[r]=new Fs(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let s=window[a.__subType];if(typeof s=="function")try{let i=new s(a.message);i.stack="",n[r]=i}catch{}}if(n[r]==null){let s=new Error(a.message);s.stack="",n[r]=s}}else n[r]=a;return n}const fp=_.createContext({isTransitioning:!1}),Mv=_.createContext(new Map),Iv="startTransition",Rc=Xp[Iv],Fv="flushSync",jc=cg[Fv];function zv(e){Rc?Rc(e):e()}function Mr(e){jc?jc(e):e()}class Uv{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function Bv(e){let{fallbackElement:t,router:n,future:r}=e,[a,s]=_.useState(n.state),[i,u]=_.useState(),[o,c]=_.useState({isTransitioning:!1}),[h,f]=_.useState(),[p,v]=_.useState(),[x,w]=_.useState(),E=_.useRef(new Map),{v7_startTransition:m}=r||{},d=_.useCallback(j=>{m?zv(j):j()},[m]),g=_.useCallback((j,B)=>{let{deletedFetchers:P,flushSync:X,viewTransitionOpts:re}=B;j.fetchers.forEach((je,ft)=>{je.data!==void 0&&E.current.set(ft,je.data)}),P.forEach(je=>E.current.delete(je));let ke=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!re||ke){X?Mr(()=>s(j)):d(()=>s(j));return}if(X){Mr(()=>{p&&(h&&h.resolve(),p.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:re.currentLocation,nextLocation:re.nextLocation})});let je=n.window.document.startViewTransition(()=>{Mr(()=>s(j))});je.finished.finally(()=>{Mr(()=>{f(void 0),v(void 0),u(void 0),c({isTransitioning:!1})})}),Mr(()=>v(je));return}p?(h&&h.resolve(),p.skipTransition(),w({state:j,currentLocation:re.currentLocation,nextLocation:re.nextLocation})):(u(j),c({isTransitioning:!0,flushSync:!1,currentLocation:re.currentLocation,nextLocation:re.nextLocation}))},[n.window,p,h,E,d]);_.useLayoutEffect(()=>n.subscribe(g),[n,g]),_.useEffect(()=>{o.isTransitioning&&!o.flushSync&&f(new Uv)},[o]),_.useEffect(()=>{if(h&&i&&n.window){let j=i,B=h.promise,P=n.window.document.startViewTransition(async()=>{d(()=>s(j)),await B});P.finished.finally(()=>{f(void 0),v(void 0),u(void 0),c({isTransitioning:!1})}),v(P)}},[d,i,h,n.window]),_.useEffect(()=>{h&&i&&a.location.key===i.location.key&&h.resolve()},[h,p,a.location,i]),_.useEffect(()=>{!o.isTransitioning&&x&&(u(x.state),c({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}),w(void 0))},[o.isTransitioning,x]),_.useEffect(()=>{},[]);let R=_.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:j=>n.navigate(j),push:(j,B,P)=>n.navigate(j,{state:B,preventScrollReset:P==null?void 0:P.preventScrollReset}),replace:(j,B,P)=>n.navigate(j,{replace:!0,state:B,preventScrollReset:P==null?void 0:P.preventScrollReset})}),[n]),T=n.basename||"/",A=_.useMemo(()=>({router:n,navigator:R,static:!1,basename:T}),[n,R,T]),k=_.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return _.useEffect(()=>bv(r,n.future),[r,n.future]),_.createElement(_.Fragment,null,_.createElement(ka.Provider,{value:A},_.createElement(Fo.Provider,{value:a},_.createElement(Mv.Provider,{value:E.current},_.createElement(fp.Provider,{value:o},_.createElement(jv,{basename:T,location:a.location,navigationType:a.historyAction,navigator:R,future:k},a.initialized||n.future.v7_partialHydration?_.createElement(Hv,{routes:n.routes,future:n.future,state:a}):t))))),null)}const Hv=_.memo(Vv);function Vv(e){let{routes:t,future:n,state:r}=e;return fv(t,void 0,r,n)}const Wv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$v=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ut=_.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:s,replace:i,state:u,target:o,to:c,preventScrollReset:h,viewTransition:f}=t,p=dp(t,Tv),{basename:v}=_.useContext(yn),x,w=!1;if(typeof c=="string"&&$v.test(c)&&(x=c,Wv))try{let g=new URL(window.location.href),R=c.startsWith("//")?new URL(g.protocol+c):new URL(c),T=Ut(R.pathname,v);R.origin===g.origin&&T!=null?c=T+R.search+R.hash:w=!0}catch{}let E=iv(c,{relative:a}),m=Qv(c,{replace:i,state:u,target:o,preventScrollReset:h,relative:a,viewTransition:f});function d(g){r&&r(g),g.defaultPrevented||m(g)}return _.createElement("a",yr({},p,{href:x||E,onClick:w||s?r:d,ref:n,target:o}))}),Ka=_.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:s="",end:i=!1,style:u,to:o,viewTransition:c,children:h}=t,f=dp(t,Dv),p=ni(o,{relative:f.relative}),v=_a(),x=_.useContext(Fo),{navigator:w,basename:E}=_.useContext(yn),m=x!=null&&qv(p)&&c===!0,d=w.encodeLocation?w.encodeLocation(p).pathname:p.pathname,g=v.pathname,R=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;a||(g=g.toLowerCase(),R=R?R.toLowerCase():null,d=d.toLowerCase()),R&&E&&(R=Ut(R,E)||R);const T=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let A=g===d||!i&&g.startsWith(d)&&g.charAt(T)==="/",k=R!=null&&(R===d||!i&&R.startsWith(d)&&R.charAt(d.length)==="/"),j={isActive:A,isPending:k,isTransitioning:m},B=A?r:void 0,P;typeof s=="function"?P=s(j):P=[s,A?"active":null,k?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let X=typeof u=="function"?u(j):u;return _.createElement(ut,yr({},f,{"aria-current":B,className:P,ref:n,style:X,to:o,viewTransition:c}),typeof h=="function"?h(j):h)});var Al;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Al||(Al={}));var Nc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Nc||(Nc={}));function Jv(e){let t=_.useContext(ka);return t||J(!1),t}function Qv(e,t){let{target:n,replace:r,state:a,preventScrollReset:s,relative:i,viewTransition:u}=t===void 0?{}:t,o=lv(),c=_a(),h=ni(e,{relative:i});return _.useCallback(f=>{if(Cv(f,n)){f.preventDefault();let p=r!==void 0?r:In(c)===In(h);o(e,{replace:p,state:a,preventScrollReset:s,relative:i,viewTransition:u})}},[c,o,h,r,a,n,e,s,i,u])}function qv(e,t){t===void 0&&(t={});let n=_.useContext(fp);n==null&&J(!1);let{basename:r}=Jv(Al.useViewTransitionState),a=ni(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Ut(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=Ut(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Is(a.pathname,i)!=null||Is(a.pathname,s)!=null}const pp=_.createContext(null);function Kv({children:e}){const[t,n]=_.useState(()=>{try{return JSON.parse(localStorage.getItem("tauri-progress")||"{}")}catch{return{}}});_.useEffect(()=>{try{localStorage.setItem("tauri-progress",JSON.stringify(t))}catch{}},[t]);const r=s=>n(i=>({...i,[s]:!i[s]})),a=s=>Object.keys(t).filter(i=>i.startsWith(s)&&t[i]).length;return l.jsx(pp.Provider,{value:{done:t,toggle:r,count:a},children:e})}function ri(){return _.useContext(pp)}const Gv={slug:"calculator-v2",no:1,title:"Calculator (iPhone স্টাইল)",level:"শুরু",stack:["Tauri v2","React + TypeScript","Rust"],widget:"calc-f64",intro:"এই প্রজেক্টে React শুধু UI দেখায়, আর হিসাবটা করে Rust। দুইটার মাঝে invoke() হলো সেতু। এটা বুঝলে যেকোনো Tauri অ্যাপ বানাতে পারবে।",steps:[{title:"Prerequisites ইনস্টল",desc:"Node.js LTS, Rust (rustup), Windows এ VS C++ Build Tools + WebView2। চেক: node -v, rustc --version"},{title:"প্রজেক্ট তৈরি",desc:"npx create-tauri-app দিয়ে react-ts টেমপ্লেট। vanilla-ts নয়, React এর জন্য react-ts লাগবে।"},{title:"ফাইল স্ট্রাকচার বোঝা",desc:"src/ = React (যা দেখা যায়), src-tauri/src/ = Rust (যা দেখা যায় না)।"},{title:"Rust Backend লেখা",desc:"lib.rs এ calculate command বানাও এবং invoke_handler এ register করো।"},{title:"React Frontend লেখা",desc:"Display.tsx, Calculator.tsx, App.tsx — এই ক্রমে।"},{title:"CSS",desc:"App.css এ calculator এর বাটন ও layout স্টাইল।"},{title:"চালাও ও Build",desc:"npm run tauri dev, তারপর npm run tauri build দিয়ে .exe।"},{title:"App এর নাম/সাইজ বদলানো",desc:"tauri.conf.json এ title, width, height।"}],setupCommands:["node -v   # v18+ হলে ঠিক","rustc --version && cargo --version","npx create-tauri-app tauri-calculator -m npm -t react-ts -y","cd tauri-calculator","npm install","npm run tauri dev"],files:[{n:1,path:"src-tauri/src/lib.rs",lang:"rust",side:"Rust",role:"Rust এর সব command এখানে। React এখান থেকেই হিসাব করিয়ে নেয়।",why:"আগে backend লিখি, কারণ React যে নামে invoke করবে সেই নামটা এখানে ঠিক হয়ে যায়।",code:`// lib.rs — এখানে সব Tauri commands থাকবে

// #[tauri::command] মানে এই function টা React থেকে ডাকা যাবে
#[tauri::command]
fn calculate(a: f64, operator: String, b: f64) -> Result<f64, String> {
    // match মানে switch-case এর মতো
    match operator.as_str() {
        "+" => Ok(a + b),
        "-" => Ok(a - b),
        "*" => Ok(a * b),
        "/" => {
            if b == 0.0 {
                // Err পাঠালে React এ catch ব্লকে ধরা পড়বে
                Err(String::from("শূন্য দিয়ে ভাগ করা যায় না!"))
            } else {
                Ok(a / b)
            }
        }
        _ => Err(format!("অজানা অপারেটর: {}", operator)),
    }
}

// App চালু হলে এই function run হয় (main.rs এটাকে ডাকে)
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        // নতুন command বানালে এখানে যোগ করতেই হবে, নইলে "invoke failed"
        .invoke_handler(tauri::generate_handler![calculate])
        .run(tauri::generate_context!())
        .expect("Tauri app চালু করতে সমস্যা হয়েছে");
}

// ---- Rust এর মূল ধারণা ----
// f64 = decimal number (64-bit float)
// String = text
// Result<f64, String> = হয় f64 দেবে (Ok), নাহয় String error দেবে (Err)
// match = switch-case এর মতো, কিন্তু আরও powerful`},{n:2,path:"src/components/Display.tsx",lang:"tsx",side:"React",role:"Calculator এর স্ক্রিন। শুধু দেখায়, নিজে কিছু হিসাব করে না।",why:"ছোট component দিয়ে শুরু করলে props এর ধারণা সহজে বোঝা যায়। আগে mkdir src/components।",code:`// Display.tsx — Calculator এর screen অংশ
// props: বাইরে (Calculator) থেকে যা পাঠানো হবে তার type

interface DisplayProps {
  value: string;      // বড় করে যেটা দেখাবে
  expression: string; // উপরের ছোট লেখা, যেমন "12 + 5 ="
}

export default function Display({ value, expression }: DisplayProps) {
  return (
    <div className="display">
      <div className="expression">{expression}</div>
      <div className="value">{value}</div>
    </div>
  );
}`},{n:3,path:"src/components/Calculator.tsx",lang:"tsx",side:"React ↔ Rust",role:"মূল component। এখানেই invoke() দিয়ে Rust কে ডাকা হয়।",why:"Display ও Rust command দুইটাই তৈরি, এখন এদের জোড়া লাগাও।",code:`// Calculator.tsx — মূল component

import { useState } from "react";
import { invoke } from "@tauri-apps/api/core"; // ← এটা দিয়েই Rust ডাকি
import Display from "./Display";

export default function Calculator() {
  // useState: এই মানগুলো বদলালে screen নিজে আপডেট হবে
  const [display, setDisplay] = useState("0");        // screen এ যা দেখায়
  const [firstNum, setFirstNum] = useState("");        // প্রথম সংখ্যা
  const [operator, setOperator] = useState("");        // + - * /
  const [expression, setExpression] = useState("");    // উপরে যা দেখায়
  const [waitingForSecond, setWaitingForSecond] = useState(false); // অপারেটর চাপার পর

  // সংখ্যার বোতাম চাপলে
  function handleNumber(num: string) {
    if (waitingForSecond) {
      setDisplay(num);              // দ্বিতীয় সংখ্যা নতুন করে শুরু
      setWaitingForSecond(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  }

  // দশমিক বোতাম চাপলে (একটার বেশি . হবে না)
  function handleDecimal() {
    if (!display.includes(".")) setDisplay(display + ".");
  }

  // অপারেটর বোতাম চাপলে (+, -, *, /)
  function handleOperator(op: string) {
    setFirstNum(display);
    setOperator(op);
    setExpression(display + " " + op);
    setWaitingForSecond(true);
  }

  // = বোতাম চাপলে Rust কে ডাকো
  async function handleEquals() {
    if (!firstNum || !operator) return;
    setExpression(firstNum + " " + operator + " " + display + " =");

    try {
      // ★ এখানেই Rust function ডাকা হচ্ছে ★
      // invoke("rust_function_name", { arguments })
      // JS এর অবজেক্টের key (a, operator, b) = Rust এর parameter এর নাম
      const result = await invoke<number>("calculate", {
        a: parseFloat(firstNum),
        operator: operator,
        b: parseFloat(display),
      });

      setDisplay(String(result)); // Rust এর Ok(value) এখানে আসে
      setFirstNum("");
      setOperator("");
      setWaitingForSecond(true);
    } catch (error) {
      setDisplay(String(error)); // Rust এর Err(msg) এখানে আসে
    }
  }

  // C (Clear)
  function handleClear() {
    setDisplay("0");
    setFirstNum("");
    setOperator("");
    setExpression("");
    setWaitingForSecond(false);
  }

  // +/- বোতাম
  function handleToggleSign() {
    setDisplay(String(parseFloat(display) * -1));
  }

  // % বোতাম
  function handlePercent() {
    setDisplay(String(parseFloat(display) / 100));
  }

  // বোতামের layout (iPhone calculator এর মতো)
  const buttons = [
    ["C", "+/-", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "−"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  // কোন বোতাম চাপলে কোন function চলবে
  function handleButton(btn: string) {
    if ("0123456789".includes(btn)) handleNumber(btn);
    else if (btn === ".") handleDecimal();
    else if (btn === "C") handleClear();
    else if (btn === "+/-") handleToggleSign();
    else if (btn === "%") handlePercent();
    else if (btn === "=") handleEquals();
    else if (btn === "÷") handleOperator("/"); // UI চিহ্ন → Rust এর চিহ্ন
    else if (btn === "×") handleOperator("*");
    else if (btn === "−") handleOperator("-");
    else if (btn === "+") handleOperator("+");
  }

  // বোতামের ধরন (রঙের জন্য)
  function getButtonClass(btn: string) {
    if (btn === "C" || btn === "+/-" || btn === "%") return "btn btn-gray";
    if (["÷", "×", "−", "+", "="].includes(btn)) return "btn btn-orange";
    if (btn === "0") return "btn btn-dark btn-wide";
    return "btn btn-dark";
  }

  return (
    <div className="calculator">
      <Display value={display} expression={expression} />
      <div className="buttons">
        {buttons.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((btn) => (
              <button key={btn} className={getButtonClass(btn)} onClick={() => handleButton(btn)}>
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}`},{n:4,path:"src/App.tsx",lang:"tsx",side:"React",role:"Root component। Calculator কে এখানে বসানো হয়।",why:"সব component তৈরি হলে শেষে root এ জোড়া দাও।",code:`// App.tsx — Root component, Calculator কে এখানে রাখি
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Calculator />
    </div>
  );
}

export default App;`},{n:5,path:"src/App.css",lang:"css",side:"React",role:"সব স্টাইল। পুরোটা মুছে নতুন করে লেখো।",why:"লজিক ঠিক চললে শেষে সাজাও। PDF এর CSS এ calculator এর বাটন ক্লাস ছিল না, তাই নিচে যোগ করে দেওয়া হলো।",code:`/* App.css — পুরোটা মুছে এটা লেখো */
:root {
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  color: #f5f5f5;
  background-color: #1e1e1e;
}
body { margin: 0; }
.app { display: flex; justify-content: center; padding-top: 8px; }

/* Calculator */
.calculator { width: 340px; background: #000; border-radius: 16px; padding: 12px; }
.display { text-align: right; padding: 12px 8px; min-height: 96px; }
.expression { color: #9a9a9a; font-size: 14px; min-height: 20px; }
.value { font-size: 44px; font-weight: 300; word-break: break-all; }
.buttons { display: flex; flex-direction: column; gap: 10px; }
.row { display: flex; gap: 10px; }
.btn {
  flex: 1; height: 64px; border-radius: 32px; border: none;
  font-size: 24px; cursor: pointer; transition: filter 0.15s;
}
.btn:active { filter: brightness(1.4); }
.btn-gray { background: #a5a5a5; color: #000; }
.btn-orange { background: #ff9f0a; color: #fff; }
.btn-dark { background: #333; color: #fff; }
.btn-wide { flex: 2.15; text-align: left; padding-left: 28px; }`},{n:6,path:"src-tauri/tauri.conf.json",lang:"json",side:"Config",role:"অ্যাপের নাম, window এর সাইজ, identifier — সব config।",why:"অ্যাপ চলার পর শেষে নাম ও সাইজ ঠিক করো। (এই অংশটুকু বদলাও, বাকি ফাইল যেমন আছে থাকবে)",code:`{
  "app": {
    "windows": [
      {
        "title": "আমার Calculator",
        "width": 360,
        "height": 620,
        "resizable": false
      }
    ]
  },
  "bundle": {
    "identifier": "com.yourname.calculator",
    "productName": "Calculator"
  }
}`}],connection:{explain:["React আর Rust আলাদা ভাষা, আলাদা process। তাই দুইটা সরাসরি কথা বলতে পারে না।",'React invoke("calculate", {...}) পাঠায় → Tauri IPC bridge → Rust এর calculate() চলে।',"Rust এর Ok(value) হয় JS এর await এর result, আর Err(msg) হয় catch(error)।","নামের নিয়ম: command এর নাম হুবহু মিলতে হবে; Rust এ snake_case parameter থাকলে JS এ camelCase key (first_num → firstNum)।","command টা generate_handler![...] এ না থাকলে 'invoke failed' আসবে।"],rustTitle:"Rust (lib.rs)",rust:`#[tauri::command]
fn calculate(a: f64, operator: String, b: f64) -> Result<f64, String> { /* ... */ }

// register:
.invoke_handler(tauri::generate_handler![calculate])`,reactTitle:"React (Calculator.tsx)",react:`import { invoke } from "@tauri-apps/api/core";

try {
  const result = await invoke<number>("calculate", { a: 12, operator: "+", b: 5 });
  // result = 17
} catch (error) {
  // Rust Err("...") এখানে আসে
}`},example:{title:"পূর্ণ উদাহরণ: 12 ÷ 0 চাপলে কী ঘটে",flow:["১) তুমি 1, 2, ÷, 0, = চাপো → state এ firstNum=12, operator=/, display=0",'২) handleEquals() invoke("calculate", {a:12, operator:"/", b:0}) ডাকে','৩) Rust এ match "/" → b == 0.0 → Err("শূন্য দিয়ে ভাগ করা যায় না!")',"৪) JS এর catch ব্লকে error আসে → setDisplay(String(error))","৫) স্ক্রিনে বাংলা error message দেখায়"],runCommands:["npm run tauri dev   # ডেভেলপমেন্ট","npm run tauri build # .exe + installer"],output:"src-tauri/target/release/tauri-calculator.exe এবং .../release/bundle/ এ installer"},troubleshoot:[["cargo not found","Rust ইনস্টল হয়নি, rustup.rs থেকে ইনস্টল করো"],["WebView2 error","Windows এ WebView2 ইনস্টল করো"],["invoke failed","lib.rs এ generate_handler! এ command আছে কিনা দেখো"],["Rust build error","terminal এর error message পড়ো, line number দেখাবে"]],quiz:[{q:"Rust command কোথায় register করতে হয়?",options:["App.tsx","generate_handler![...]","package.json"],answer:1},{q:"Rust এর Err(msg) React এ কোথায় আসে?",options:["then এর ভেতরে","catch ব্লকে","console এ"],answer:1},{q:"src-tauri/src/ ফোল্ডারে কী থাকে?",options:["React UI","Rust backend","CSS"],answer:1}]},Yv={slug:"calculator-cli-to-tauri",no:2,title:"CLI Calculator → Tauri অ্যাপ",level:"শুরু",stack:["Tauri","React (JSX)","Rust (i32)"],widget:"calc-i32",intro:"তোমার Rust CLI কোডের add/sub/mul/div হুবহু রেখে শুধু input() বাদ দাও। stdin এর বদলে React এর input থেকে ডেটা আসবে। এখানে menu-style (1=Add, 2=Sub...) অপারেশন সিলেক্ট করা হয়।",steps:[{title:"Prerequisites",desc:"Rust, Node.js LTS, Tauri CLI, Windows এ C++ Build Tools + WebView2।"},{title:"প্রজেক্ট তৈরি",desc:"npm create tauri-app@latest, React + JavaScript বেছে নাও।"},{title:"Rust Backend",desc:"পুরনো add/sub/mul/div রাখো, শুধু calculate command যোগ করো।"},{title:"React Frontend",desc:"App.jsx এ input, অপারেশন বাটন এবং invoke()।"},{title:"Run ও Build",desc:"npm run tauri dev, npm run tauri build।"}],setupCommands:["cargo install tauri-cli","npm create tauri-app@latest   # name: calculator-app, React, JavaScript, npm","cd calculator-app","npm install","npm run tauri dev"],files:[{n:1,path:"(আগের) CLI main.rs — তুলনার জন্য",lang:"rust",side:"Rust",role:"এটা পুরনো CLI কোড, যা আমরা রূপান্তর করব। শুধু বোঝার জন্য, কোথাও বসাতে হবে না।",why:"আগে দেখো কী বদলাবে। input() বাদ, বাকি logic থাকবে।",code:`// পুরনো CLI ভার্সন (উদাহরণ)
use std::io;

fn read_i32() -> i32 {
    let mut s = String::new();
    io::stdin().read_line(&mut s).unwrap(); // ← এটা Tauri তে লাগবে না
    s.trim().parse().unwrap()
}

fn main() {
    println!("1=Add 2=Sub 3=Mul 4=Div");
    let val = read_i32();
    let a = read_i32();
    let b = read_i32();
    let result = match val {
        1 => a + b,
        2 => a - b,
        3 => a * b,
        4 => a / b,
        _ => 0,
    };
    println!("Result = {}", result); // ← এটা হবে React এ দেখানো
}`},{n:2,path:"src-tauri/src/lib.rs  (PDF এ main.rs)",lang:"rust",side:"Rust",role:"calculate command। React থেকে val, a, b আসে, String result ফেরত যায়।",why:"backend আগে। নতুন Tauri v2 টেমপ্লেটে logic lib.rs এ থাকে; PDF এর পুরনো v1 টেমপ্লেটে main.rs এ ছিল।",code:`// src-tauri/src/lib.rs   (Tauri v1 হলে এই কোড main.rs এ বসবে)

// এই চারটা function হুবহু CLI থেকে নেওয়া
fn add(a: i32, b: i32) -> i32 { a + b }
fn sub(a: i32, b: i32) -> i32 { a - b }
fn mul(a: i32, b: i32) -> i32 { a * b }
fn div(a: i32, b: i32) -> i32 {
    if b == 0 { return 0; } // division by zero check (0 ফেরত দেয়, error নয়)
    a / b
}

// ★ এই function টাই React থেকে call হবে ★
#[tauri::command]
fn calculate(val: i32, a: i32, b: i32) -> String {
    let result = match val {
        1 => add(a, b),
        2 => sub(a, b),
        3 => mul(a, b),
        4 => div(a, b),
        _ => return "Invalid operation".to_string(),
    };
    result.to_string() // সংখ্যাকে text বানিয়ে React কে পাঠাও
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        // command register করো, নইলে React ডাকতে পারবে না
        .invoke_handler(tauri::generate_handler![calculate])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}`},{n:3,path:"src/App.jsx",lang:"jsx",side:"React ↔ Rust",role:"UI + invoke। CLI এর input() এর কাজ এখন React এর input ও state করে।",why:"Rust এর command এর নাম ও parameter ঠিক হয়ে গেছে, এখন React এ ডাকো।",code:`// src/App.jsx
import { useState } from "react";
// Tauri v2: "@tauri-apps/api/core"   (PDF এর v1 এ ছিল "@tauri-apps/api/tauri")
import { invoke } from "@tauri-apps/api/core";

function App() {
  const [a, setA] = useState("");           // প্রথম সংখ্যা (text হিসেবে)
  const [b, setB] = useState("");           // দ্বিতীয় সংখ্যা
  const [operation, setOperation] = useState(1); // 1=Add ... 4=Div
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // বাটনের তালিকা। val = Rust এর match এর সংখ্যা
  const operations = [
    { val: 1, label: "Add (+)" },
    { val: 2, label: "Subtract (−)" },
    { val: 3, label: "Multiply (×)" },
    { val: 4, label: "Divide (÷)" },
  ];

  async function handleCalculate() {
    setError("");
    const numA = parseInt(a);
    const numB = parseInt(b);

    // frontend validation: ভুল input Rust এ যাওয়ার আগেই আটকাও
    if (isNaN(numA) || isNaN(numB)) {
      setError("সঠিক number দিন!");
      return;
    }
    if (operation === 4 && numB === 0) {
      setError("শূন্য দিয়ে ভাগ করা যাবে না!");
      return;
    }

    // ★ Rust এর calculate() function call হচ্ছে এখানে ★
    const res = await invoke("calculate", {
      val: operation, // Rust parameter: val
      a: numA,        // Rust parameter: a
      b: numB,        // Rust parameter: b
    });

    setResult(res); // Rust এর String ফেরত
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Calculator</h1>

      <div style={styles.row}>
        <input style={styles.input} type="number" placeholder="প্রথম সংখ্যা (a)"
          value={a} onChange={(e) => setA(e.target.value)} />
        <input style={styles.input} type="number" placeholder="দ্বিতীয় সংখ্যা (b)"
          value={b} onChange={(e) => setB(e.target.value)} />
      </div>

      <div style={styles.opRow}>
        {operations.map((op) => (
          <button key={op.val}
            style={{
              ...styles.opBtn,
              background: operation === op.val ? "#185FA5" : "transparent",
              color: operation === op.val ? "#fff" : "inherit",
            }}
            onClick={() => setOperation(op.val)}>
            {op.label}
          </button>
        ))}
      </div>

      <button style={styles.calcBtn} onClick={handleCalculate}>Calculate</button>

      {error && <p style={styles.error}>{error}</p>}
      {result !== null && !error && (
        <div style={styles.result}>Result = <strong>{result}</strong></div>
      )}
    </div>
  );
}

// inline style object (আলাদা CSS ফাইল লাগছে না)
const styles = {
  container: { maxWidth: 420, margin: "60px auto", padding: 32, borderRadius: 16,
    border: "1px solid #e0e0e0", fontFamily: "sans-serif" },
  title: { textAlign: "center", marginBottom: 24, fontSize: 24 },
  row: { display: "flex", gap: 12, marginBottom: 16 },
  input: { flex: 1, padding: "10px 14px", borderRadius: 8, border: "1px solid #ccc", fontSize: 16 },
  opRow: { display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" },
  opBtn: { flex: 1, padding: "8px 4px", borderRadius: 8, border: "1px solid #ccc",
    cursor: "pointer", fontSize: 13, minWidth: 80 },
  calcBtn: { width: "100%", padding: 12, background: "#185FA5", color: "#fff",
    border: "none", borderRadius: 8, fontSize: 16, cursor: "pointer" },
  error: { color: "#E24B4A", textAlign: "center", marginTop: 12 },
  result: { textAlign: "center", marginTop: 20, fontSize: 22, padding: 16,
    background: "#EAF3DE", color: "#222", borderRadius: 8 },
};

export default App;`}],connection:{explain:["CLI তে input() ছিল stdin থেকে; এখন React এর state (a, b, operation) সেই কাজ করে।","match val { 1 => add... } হুবহু একই আছে, শুধু #[tauri::command] এর ভেতরে।","println! এর বদলে Rust String ফেরত দেয়, React সেটা setResult দিয়ে দেখায়।","প্রজেক্ট ১ এর সাথে পার্থক্য: এখানে Result<..> নেই, তাই div by zero এ Rust 0 ফেরত দেয়। ভুল ধরাটা frontend এ করা হয়েছে।","ভালো অভ্যাস হলো প্রজেক্ট ১ এর মতো Result<T, String> ব্যবহার করা, যাতে Rust নিজেই error জানায়।"],rustTitle:"Rust",rust:`#[tauri::command]
fn calculate(val: i32, a: i32, b: i32) -> String { /* ... */ }

.invoke_handler(tauri::generate_handler![calculate])`,reactTitle:"React",react:`const res = await invoke("calculate", { val: 1, a: 7, b: 3 });
// res = "10"  (Rust থেকে String)`},example:{title:"পূর্ণ উদাহরণ: 7 × 3",flow:["১) a=7, b=3, Multiply বাটন চাপো → operation=3","২) Calculate চাপলে validation পাস",'৩) invoke("calculate", {val:3, a:7, b:3}) → Rust এ match 3 => mul(7,3)','৪) Rust "21" ফেরত দেয়','৫) setResult("21") → স্ক্রিনে Result = 21'],runCommands:["npm run tauri dev","npm run tauri build   # installer: src-tauri/target/release/bundle/"],output:"Desktop window খুলবে, terminal লাগবে না।"},troubleshoot:[["Rust dependency সমস্যা","cd src-tauri && cargo update"],["node_modules সমস্যা","rm -rf node_modules && npm install"],["import error @tauri-apps/api/tauri","Tauri v2 তে এটা /core হয়েছে"]],quiz:[{q:"CLI এর input() এর বদলে এখানে কী কাজ করে?",options:["React state ও input","println!","cargo"],answer:0},{q:"div(a, 0) এ এই প্রজেক্টের Rust কী ফেরত দেয়?",options:["Err","0","panic"],answer:1}]},Xv={slug:"mini-notes-file-map",no:3,title:"Mini Notes — ফাইল ম্যাপ প্রজেক্ট",level:"শুরু → মধ্যম",stack:["Tauri v2","React","Rust State"],widget:"filemap",intro:"এই ছোট অ্যাপে তুমি নাম দিয়ে greet করবে আর নোট যোগ/দেখবে। কোড ছোট, কিন্তু Tauri প্রজেক্টের প্রায় সব গুরুত্বপূর্ণ ফাইল এখানে আছে। ইন্টারেক্টিভ ফাইল ম্যাপে প্রতিটা ফাইলে ক্লিক করে দেখো সেটা কখন চলে ও কে কাকে ডাকে।",steps:[{title:"প্রজেক্ট তৈরি",desc:"npm create tauri-app@latest → mini-notes, React + JavaScript।"},{title:"ফাইল ম্যাপ দেখো",desc:"কোন ফাইল কী করে তা আগে বুঝে নাও (ইন্টারেক্টিভ ম্যাপ)।"},{title:"Rust: state ও command",desc:"lib.rs এ Notes state, greet, add_note, list_notes।"},{title:"Permission",desc:"capabilities/default.json এ কী অনুমতি আছে তা দেখো।"},{title:"React: App.jsx",desc:"input, বাটন, invoke(), নোটের তালিকা।"},{title:"চালাও",desc:"npm run tauri dev।"}],setupCommands:["npm create tauri-app@latest   # mini-notes, React, JavaScript, npm","cd mini-notes","npm install","npm run tauri dev"],files:[{n:1,path:"src-tauri/src/lib.rs",lang:"rust",side:"Rust",edit:!0,role:"আপনার Rust logic ও command। সবচেয়ে গুরুত্বপূর্ণ Rust ফাইল।",when:"অ্যাপ চালু হলে run() চলে; React invoke করলে সংশ্লিষ্ট command চলে।",calls:["main.rs ডাকে lib.rs এর run()"],why:"প্রথমে backend। এখানে command এর নাম ঠিক করলে React এর কাজ সহজ হয়।",code:`// src-tauri/src/lib.rs
use std::sync::Mutex;
use tauri::State;

// অ্যাপের "memory": নোটগুলোর তালিকা। Mutex = একসাথে একজনই বদলাতে পারবে
struct Notes(Mutex<Vec<String>>);

// command ১: নাম নিয়ে শুভেচ্ছা ফেরত
#[tauri::command]
fn greet(name: String) -> String {
    format!("হ্যালো, {}! Rust থেকে বলছি 🦀", name)
}

// command ২: নোট যোগ। State<Notes> মানে Tauri নিজে state টা দিয়ে দেয়
#[tauri::command]
fn add_note(text: String, notes: State<Notes>) -> Result<usize, String> {
    if text.trim().is_empty() {
        return Err("খালি নোট যোগ করা যায় না".into());
    }
    let mut list = notes.0.lock().map_err(|e| e.to_string())?;
    list.push(text);
    Ok(list.len()) // এখন মোট কয়টা নোট
}

// command ৩: সব নোট ফেরত (Vec<String> → JS এ Array)
#[tauri::command]
fn list_notes(notes: State<Notes>) -> Vec<String> {
    notes.0.lock().unwrap().clone()
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .manage(Notes(Mutex::new(Vec::new()))) // state রেজিস্টার
        .invoke_handler(tauri::generate_handler![greet, add_note, list_notes])
        .run(tauri::generate_context!())
        .expect("Tauri চালু করা যায়নি");
}`},{n:2,path:"src/App.jsx",lang:"jsx",side:"React ↔ Rust",edit:!0,role:"UI। ফর্ম, বাটন এবং invoke() দিয়ে Rust ডাকা।",when:"main.jsx এটাকে render করে। বাটন চাপলে invoke() চলে।",calls:["invoke('greet')","invoke('add_note')","invoke('list_notes')"],why:"Rust এর তিনটা command তৈরি, এখন UI থেকে ডাকো।",code:`// src/App.jsx
import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";

export default function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  // অ্যাপ খোলার সময় একবার নোট লোড করো
  useEffect(() => { loadNotes(); }, []);

  async function loadNotes() {
    const list = await invoke("list_notes"); // Rust → Array
    setNotes(list);
  }

  async function handleGreet() {
    // Rust parameter name: String  ⇒  JS key: name
    setGreeting(await invoke("greet", { name }));
  }

  async function handleAdd() {
    setError("");
    try {
      await invoke("add_note", { text }); // Rust এ Ok হলে এখানে আসে
      setText("");
      loadNotes(); // তালিকা নতুন করে আনো
    } catch (e) {
      setError(String(e)); // Rust এর Err("...")
    }
  }

  return (
    <div style={{ maxWidth: 420, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>Mini Notes</h2>

      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="তোমার নাম" />
      <button onClick={handleGreet}>Greet</button>
      <p>{greeting}</p>

      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="নতুন নোট" />
      <button onClick={handleAdd}>Add</button>
      {error && <p style={{ color: "crimson" }}>{error}</p>}

      <ul>{notes.map((n, i) => <li key={i}>{n}</li>)}</ul>
    </div>
  );
}`},{n:3,path:"src-tauri/capabilities/default.json",lang:"json",side:"Config",edit:!1,role:"Permission তালিকা: window কোন কোন core কাজ করতে পারবে।",when:"Build/run এর সময় Tauri পড়ে। অনুমতি না থাকলে plugin বা API ব্লক হয়।",calls:[],why:"নিজের #[tauri::command] এর জন্য আলাদা permission লাগে না, কিন্তু plugin (fs, dialog ইত্যাদি) যোগ করলে এখানে লিখতে হয়।",code:`{
  "$schema": "../gen/schemas/desktop-schema.json",
  "identifier": "default",
  "description": "main window এর অনুমতি",
  "windows": ["main"],
  "permissions": [
    "core:default",
    "opener:default"
  ]
}`},{n:4,path:"src-tauri/tauri.conf.json",lang:"json",side:"Config",edit:!1,role:"অ্যাপের নাম, window সাইজ, build কমান্ড, bundle।",when:"dev ও build দুই সময়ই পড়া হয়। beforeDevCommand এ Vite চালু হয়।",calls:["npm run dev (Vite) চালু করে"],why:"অ্যাপ কাজ করার পর title/size বদলাতে এখানে আসো।",code:`{
  "productName": "mini-notes",
  "identifier": "com.yourname.mininotes",
  "build": {
    "beforeDevCommand": "npm run dev",       // tauri dev এ আগে React সার্ভার চালু
    "devUrl": "http://localhost:1420",       // window এ এই URL লোড হয়
    "beforeBuildCommand": "npm run build",   // tauri build এ আগে React build
    "frontendDist": "../dist"                // build হওয়া React ফাইল
  },
  "app": {
    "windows": [{ "title": "Mini Notes", "width": 480, "height": 640 }]
  },
  "bundle": { "active": true, "targets": "all", "icon": ["icons/icon.png"] }
}`},{n:5,path:"src-tauri/Cargo.toml",lang:"toml",side:"Rust",edit:!1,role:"Rust এর package.json। dependency (crate) এর তালিকা।",when:"cargo build এর সময়। নতুন crate দরকার হলে এখানে যোগ করবে।",calls:[],why:"পরের প্রজেক্টগুলোতে (argon2, sqlx ইত্যাদি) এখানেই dependency বসাতে হবে।",code:`[package]
name = "mini-notes"
version = "0.1.0"
edition = "2021"

[lib]
name = "mini_notes_lib"
crate-type = ["staticlib", "cdylib", "rlib"]

[build-dependencies]
tauri-build = { version = "2", features = [] }

[dependencies]
tauri = { version = "2", features = [] }
tauri-plugin-opener = "2"
serde = { version = "1", features = ["derive"] }
serde_json = "1"`},{n:6,path:"src-tauri/src/main.rs",lang:"rust",side:"Rust",edit:!1,role:"Rust এর entry point। শুধু lib.rs এর run() ডাকে।",when:"exe চালু হওয়ার সাথে সাথে প্রথমে চলে।",calls:["lib.rs → run()"],why:"সাধারণত হাত দিতে হয় না।",code:`// src-tauri/src/main.rs
// release এ Windows এ আলাদা কালো console window দেখাবে না
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    mini_notes_lib::run(); // Cargo.toml এর [lib] name এখানে
}`},{n:7,path:"src/main.jsx",lang:"jsx",side:"React",edit:!1,role:"React এর entry point। App কে index.html এর #root এ বসায়।",when:"window এ HTML লোড হলে চলে।",calls:["App.jsx কে render করে"],why:"সাধারণত হাত দিতে হয় না।",code:`// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`},{n:8,path:"index.html",lang:"html",side:"React",edit:!1,role:"একমাত্র HTML পেজ। #root div আর main.jsx script থাকে।",when:"Tauri window প্রথমে এই পেজ খোলে।",calls:["src/main.jsx লোড করে"],why:"সাধারণত হাত দিতে হয় না।",code:`<!doctype html>
<html lang="bn">
  <head>
    <meta charset="UTF-8" />
    <title>Mini Notes</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"><\/script>
  </body>
</html>`},{n:9,path:"vite.config.js",lang:"js",side:"Config",edit:!1,role:"Vite (React build tool) এর config। port 1420 Tauri এর জন্য।",when:"npm run dev / build এর সময়।",calls:[],why:"port মিলে না গেলে Tauri window ফাঁকা দেখায়।",code:`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  server: { port: 1420, strictPort: true }, // tauri.conf.json এর devUrl এর সাথে মেলা চাই
});`},{n:10,path:"package.json",lang:"json",side:"Config",edit:!1,role:"Node dependency ও script (dev, build, tauri)।",when:"npm install, npm run ... এর সময়।",calls:[],why:"নতুন JS লাইব্রেরি এখানে আসে।",code:`{
  "name": "mini-notes",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "tauri": "tauri"            // npm run tauri dev ⇒ এই script
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@tauri-apps/api": "^2",    // invoke() এখান থেকে আসে
    "@tauri-apps/plugin-opener": "^2"
  },
  "devDependencies": {
    "@tauri-apps/cli": "^2",
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.0"
  }
}`}],connection:{explain:['invoke("add_note", { text }) → Rust এর add_note(text: String, notes: State<Notes>)।',"State<Notes> JS থেকে পাঠাতে হয় না। Tauri নিজে .manage(...) করা state ইনজেক্ট করে।","Result<usize, String>: Ok(সংখ্যা) → await এর মান; Err(msg) → catch।","Vec<String> রিটার্ন করলে JS এ সরাসরি Array পাও।"],rustTitle:"Rust (lib.rs)",rust:`#[tauri::command]
fn add_note(text: String, notes: State<Notes>) -> Result<usize, String> { /* ... */ }

.manage(Notes(Mutex::new(Vec::new())))
.invoke_handler(tauri::generate_handler![greet, add_note, list_notes])`,reactTitle:"React (App.jsx)",react:`await invoke("add_note", { text });      // State পাঠাতে হয় না
const list = await invoke("list_notes"); // ["নোট ১", "নোট ২"]`},example:{title:"পূর্ণ উদাহরণ: একটা নোট যোগ করা",flow:["১) exe চালু → main.rs → lib.rs এর run() → window খোলে (tauri.conf.json এর সেটিং)","২) window index.html লোড করে → main.jsx → App.jsx",'৩) App খুলতেই useEffect → invoke("list_notes") → খালি তালিকা',`৪) তুমি 'দুধ কিনব' লিখে Add চাপো → invoke("add_note", {text})`,"৫) Rust Notes state এ push করে Ok(1) ফেরত দেয়","৬) React loadNotes() আবার ডাকে → তালিকায় নোট দেখায়"],runCommands:["npm run tauri dev"],output:"নোটগুলো Rust এর memory তে থাকে; অ্যাপ বন্ধ করলে হারায় (ডেটাবেস দেখতে পরের প্রজেক্টে যাও)।"},troubleshoot:[["Window ফাঁকা","vite.config.js এর port ও tauri.conf.json এর devUrl মিলিয়ে দেখো"],["command not found","generate_handler! এ নাম যোগ করেছ কিনা দেখো"],["state error",".manage(...) বাদ পড়লে State<Notes> পাওয়া যাবে না"]],quiz:[{q:"অ্যাপ চালু হলে সবার আগে কোন Rust ফাইল চলে?",options:["lib.rs","main.rs","Cargo.toml"],answer:1},{q:"নতুন Rust crate কোথায় যোগ করবে?",options:["package.json","Cargo.toml","vite.config.js"],answer:1},{q:"State<Notes> কি JS থেকে পাঠাতে হয়?",options:["হ্যাঁ","না, Tauri নিজে দেয়","শুধু release এ"],answer:1}]},Zv={slug:"secure-tasks-mysql",no:4,title:"Secure Task Manager — MySQL",level:"অ্যাডভান্সড",stack:["Tauri v2","React","Rust + sqlx","MySQL","argon2","JWT","TOTP 2FA","moka cache"],widget:"security",intro:"এখানে Rust backend ই তোমার 'server'। পাসওয়ার্ড argon2 দিয়ে hash হয়, লগইনের পর access token (১৫ মিনিট) ও refresh token (৭ দিন) তৈরি হয়, ভুল পাসওয়ার্ড বারবার দিলে rate limit ধরে, 2FA চালু থাকলে TOTP কোড লাগে, আর Task লিস্ট cache হয়। একটা বড় সুবিধা: refresh token কখনো JS এ যায় না, Rust এর memory তে থাকে।",steps:[{title:"MySQL ডেটাবেস ও টেবিল",desc:"schema.sql চালিয়ে users, refresh_tokens, tasks টেবিল বানাও।"},{title:".env ও Cargo.toml",desc:"DATABASE_URL, JWT_SECRET এবং dependency (sqlx, argon2, jsonwebtoken, totp-rs, moka)।"},{title:"state.rs",desc:"DB pool, cache, rate-limit map, refresh token রাখার জায়গা — এক struct এ।"},{title:"security/ মডিউল",desc:"password.rs (argon2), jwt.rs, totp.rs, rate_limit.rs।"},{title:"commands/auth.rs",desc:"register, login, verify_2fa, refresh_session, logout, enable_2fa।"},{title:"commands/tasks.rs",desc:"access token যাচাই + cache সহ list_tasks, add_task।"},{title:"lib.rs এ জোড়া",desc:"setup এ DB connect, state manage, handler register।"},{title:"React: secureInvoke, AuthContext",desc:"401-এর মতো 'token expired' এলে স্বয়ংক্রিয় refresh।"},{title:"React: Login/2FA ও Dashboard",desc:"UI পেজ।"}],setupCommands:["# MySQL চালু থাকতে হবে (XAMPP/MySQL Server)","mysql -u root -p < schema.sql","npm create tauri-app@latest   # secure-tasks, React, JavaScript","cd secure-tasks && npm install","# src-tauri/Cargo.toml এ dependency বসিয়ে:","npm run tauri dev"],files:[{n:1,path:"schema.sql",lang:"sql",side:"Database",role:"MySQL এর তিনটা টেবিল। password_hash এ কখনো আসল পাসওয়ার্ড নয়।",why:"ডেটার কাঠামো আগে ঠিক করলে Rust এর query লেখা সহজ।",code:`-- schema.sql
CREATE DATABASE IF NOT EXISTS tauri_app CHARACTER SET utf8mb4;
USE tauri_app;

CREATE TABLE users (
  id            BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email         VARCHAR(190) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,        -- argon2id hash (salt সহ)
  totp_secret   VARCHAR(64) NULL,             -- 2FA secret (base32)
  totp_enabled  TINYINT(1) NOT NULL DEFAULT 0 -- 2FA চালু কিনা
);

-- refresh token এর আসল মান রাখি না, শুধু SHA-256 hash
CREATE TABLE refresh_tokens (
  id         BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  token_hash CHAR(64) NOT NULL UNIQUE,
  user_id    BIGINT UNSIGNED NOT NULL,
  expires_at DATETIME NOT NULL,
  revoked    TINYINT(1) NOT NULL DEFAULT 0,   -- ব্যবহৃত/বাতিল হলে 1
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE tasks (
  id      BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL,
  title   VARCHAR(255) NOT NULL,
  done    TINYINT(1) NOT NULL DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`},{n:2,path:"src-tauri/.env  +  Cargo.toml (dependencies অংশ)",lang:"toml",side:"Config",role:"secret গুলো .env তে, crate গুলো Cargo.toml এ।",why:".env কখনো git এ তুলবে না (.gitignore এ দাও)। JWT_SECRET কমপক্ষে ৩২ অক্ষর, এলোমেলো।",code:`# ---- src-tauri/.env ----
DATABASE_URL=mysql://root:password@127.0.0.1:3306/tauri_app
JWT_SECRET=এখানে-অন্তত-৩২-অক্ষরের-র‍্যান্ডম-স্ট্রিং-দাও-abc123XYZ

# ---- src-tauri/Cargo.toml  [dependencies] অংশে যোগ করো ----
tauri = { version = "2", features = [] }
serde = { version = "1", features = ["derive"] }
serde_json = "1"
sqlx = { version = "0.8", features = ["runtime-tokio", "mysql"] }  # MySQL ড্রাইভার
argon2 = "0.5"                                                     # পাসওয়ার্ড hash
jsonwebtoken = "9"                                                 # JWT
totp-rs = { version = "5", features = ["gen_secret", "otpauth"] }  # 2FA
moka = { version = "0.12", features = ["future"] }                 # in-memory cache
uuid = { version = "1", features = ["v4"] }
chrono = "0.4"
sha2 = "0.10"
hex = "0.4"
dotenvy = "0.15"                                                   # .env পড়া`},{n:3,path:"src-tauri/src/state.rs",lang:"rust",side:"Rust",role:"পুরো অ্যাপের shared state: DB, cache, rate limit, refresh token।",why:"সব command এই একটা struct থেকে সবকিছু পায়, তাই আগে এটা লিখি।",code:`// src-tauri/src/state.rs
use moka::future::Cache;
use serde::Serialize;
use sqlx::MySqlPool;
use std::{collections::HashMap, sync::Mutex, time::{Duration, Instant}};

// DB এর Task row; Clone লাগে কারণ cache এ কপি রাখি
#[derive(Serialize, sqlx::FromRow, Clone)]
pub struct Task {
    pub id: u64,
    pub title: String,
    pub done: bool,
}

pub struct AppState {
    pub db: MySqlPool,                                  // MySQL connection pool
    pub jwt_secret: String,                             // JWT sign করার গোপন key
    pub cache: Cache<String, Vec<Task>>,                // API cache: key = "tasks:<user_id>"
    pub attempts: Mutex<HashMap<String, Vec<Instant>>>, // rate limit: কে কখন চেষ্টা করল
    pub refresh_token: Mutex<Option<String>>,           // ★ refresh token JS এ যায় না, এখানে থাকে
}

impl AppState {
    pub fn new(db: MySqlPool, jwt_secret: String) -> Self {
        Self {
            db,
            jwt_secret,
            cache: Cache::builder()
                .time_to_live(Duration::from_secs(60)) // ৬০ সেকেন্ড পরে cache নিজে মুছে যায়
                .max_capacity(1000)
                .build(),
            attempts: Mutex::new(HashMap::new()),
            refresh_token: Mutex::new(None),
        }
    }
}`},{n:4,path:"src-tauri/src/security/password.rs",lang:"rust",side:"Rust",role:"argon2id দিয়ে পাসওয়ার্ড hash ও যাচাই।",why:"পাসওয়ার্ড কখনো plain text এ রাখা যাবে না। argon2 ইচ্ছা করে ধীর ও memory-hungry, তাই brute force কঠিন।",code:`// src-tauri/src/security/password.rs
use argon2::{
    password_hash::{rand_core::OsRng, PasswordHash, PasswordHasher, PasswordVerifier, SaltString},
    Argon2,
};

// রেজিস্টারে: plain password → hash string
pub fn hash_password(plain: &str) -> Result<String, String> {
    let salt = SaltString::generate(&mut OsRng); // প্রতিবার আলাদা random salt
    Argon2::default()                            // argon2id, ডিফল্ট cost
        .hash_password(plain.as_bytes(), &salt)
        .map(|h| h.to_string())                  // "$argon2id$v=19$m=...,t=...,p=...$salt$hash"
        .map_err(|e| e.to_string())
}

// লগইনে: ইনপুট পাসওয়ার্ড বনাম DB এর hash
pub fn verify_password(plain: &str, hash: &str) -> bool {
    match PasswordHash::new(hash) {
        Ok(parsed) => Argon2::default().verify_password(plain.as_bytes(), &parsed).is_ok(),
        Err(_) => false,
    }
}`},{n:5,path:"src-tauri/src/security/jwt.rs",lang:"rust",side:"Rust",role:"access/refresh token তৈরি ও যাচাই। মেয়াদ (TTL) এখানে ঠিক হয়।",why:"access token ছোট মেয়াদের (১৫ মিনিট) যাতে চুরি হলেও ক্ষতি সীমিত; refresh token লম্বা (৭ দিন) কিন্তু শুধু নতুন token আনার কাজে লাগে।",code:`// src-tauri/src/security/jwt.rs
use jsonwebtoken::{decode, encode, errors::ErrorKind, DecodingKey, EncodingKey, Header, Validation};
use serde::{Deserialize, Serialize};

pub const ACCESS_TTL_SECS: i64 = 15 * 60;          // access: ১৫ মিনিট
pub const REFRESH_TTL_SECS: i64 = 7 * 24 * 3600;   // refresh: ৭ দিন

#[derive(Serialize, Deserialize)]
pub struct Claims {
    pub sub: String,  // user id
    pub kind: String, // "access" | "refresh" | "2fa_pending"
    pub iat: usize,   // কখন তৈরি
    pub exp: usize,   // কখন মেয়াদ শেষ
    pub jti: String,  // token এর অনন্য id (প্রতিটা আলাদা)
}

pub fn make_token(user_id: &str, kind: &str, ttl: i64, secret: &str) -> Result<String, String> {
    let now = chrono::Utc::now().timestamp();
    let claims = Claims {
        sub: user_id.into(),
        kind: kind.into(),
        iat: now as usize,
        exp: (now + ttl) as usize,
        jti: uuid::Uuid::new_v4().to_string(),
    };
    encode(&Header::default(), &claims, &EncodingKey::from_secret(secret.as_bytes()))
        .map_err(|e| e.to_string())
}

pub fn verify_token(token: &str, kind: &str, secret: &str) -> Result<Claims, String> {
    let mut validation = Validation::default();
    validation.leeway = 0; // মেয়াদ শেষ মানে শেষ, বাড়তি সময় নয়
    let data = decode::<Claims>(token, &DecodingKey::from_secret(secret.as_bytes()), &validation)
        .map_err(|e| match e.kind() {
            // এই exact লেখা React দেখে refresh trigger করে
            ErrorKind::ExpiredSignature => "token expired".to_string(),
            _ => "invalid token".to_string(),
        })?;
    // access token দিয়ে refresh করা বা উল্টোটা ঠেকাও
    if data.claims.kind != kind {
        return Err("wrong token type".into());
    }
    Ok(data.claims)
}`},{n:6,path:"src-tauri/src/security/totp.rs",lang:"rust",side:"Rust",role:"2FA: Google Authenticator এর ৬ সংখ্যার কোড তৈরি ও যাচাই।",why:"পাসওয়ার্ড ফাঁস হলেও ফোনের কোড ছাড়া ঢোকা যাবে না।",code:`// src-tauri/src/security/totp.rs
use totp_rs::{Algorithm, Secret, TOTP};

// নতুন secret (base32 text) — ব্যবহারকারী QR/টেক্সট দিয়ে অ্যাপে বসায়
pub fn new_secret() -> String {
    Secret::generate_secret().to_encoded().to_string()
}

fn build(secret_b32: &str, email: &str) -> Result<TOTP, String> {
    let bytes = Secret::Encoded(secret_b32.to_string())
        .to_bytes()
        .map_err(|e| format!("{:?}", e))?;
    // SHA1, ৬ ডিজিট, ±১ ধাপ সহনশীলতা, ৩০ সেকেন্ড, issuer, account
    TOTP::new(Algorithm::SHA1, 6, 1, 30, bytes, Some("TauriApp".into()), email.into())
        .map_err(|e| e.to_string())
}

pub fn verify(secret_b32: &str, email: &str, code: &str) -> Result<bool, String> {
    build(secret_b32, email)?.check_current(code).map_err(|e| e.to_string())
}

// Authenticator অ্যাপে যোগ করার otpauth:// লিংক (QR বানানো যায়)
pub fn otpauth_url(secret_b32: &str, email: &str) -> Result<String, String> {
    Ok(build(secret_b32, email)?.get_url())
}`},{n:7,path:"src-tauri/src/security/rate_limit.rs + mod.rs",lang:"rust",side:"Rust",role:"Token/login limit: নির্দিষ্ট সময়ে সর্বোচ্চ কয়বার চেষ্টা করা যাবে।",why:"brute force ও 2FA কোড অনুমান ঠেকাতে। sliding window পদ্ধতি।",code:`// ---- src-tauri/src/security/rate_limit.rs ----
use std::{collections::HashMap, sync::Mutex, time::{Duration, Instant}};

// key = ইমেইল বা token-type, max = সর্বোচ্চ চেষ্টা, window = সময়সীমা
pub fn check(
    attempts: &Mutex<HashMap<String, Vec<Instant>>>,
    key: &str,
    max: usize,
    window: Duration,
) -> Result<(), String> {
    let mut map = attempts.lock().unwrap();
    let now = Instant::now();
    let list = map.entry(key.to_string()).or_default();

    // window এর বাইরের পুরনো চেষ্টা বাদ দাও
    list.retain(|t| now.duration_since(*t) < window);

    if list.len() >= max {
        return Err("অনেকবার চেষ্টা করেছ, কিছুক্ষণ পরে আবার চেষ্টা করো".into());
    }
    list.push(now); // এই চেষ্টা গুনে রাখো
    Ok(())
}

// ---- src-tauri/src/security/mod.rs ----
pub mod jwt;
pub mod password;
pub mod rate_limit;
pub mod totp;`},{n:8,path:"src-tauri/src/commands/auth.rs",lang:"rust",side:"Rust",role:"register, login, 2FA, refresh (rotation), logout — পুরো auth প্রবাহ।",why:"security ব্লকগুলো এখানে জোড়া লাগে। refresh করলে পুরনো refresh token বাতিল হয় (rotation); বাতিল token আবার এলে সব session বন্ধ।",code:`// src-tauri/src/commands/auth.rs
use crate::security::{jwt::*, password::*, rate_limit, totp};
use crate::state::AppState;
use serde::Serialize;
use sha2::{Digest, Sha256};
use std::time::Duration;
use tauri::State;

#[derive(Serialize)]
pub struct LoginResponse {
    pub status: String,               // "ok" | "2fa_required"
    pub access_token: Option<String>, // ok হলে
    pub temp_token: Option<String>,   // 2FA লাগলে (৫ মিনিটের)
}

fn sha256_hex(s: &str) -> String {
    hex::encode(Sha256::digest(s.as_bytes()))
}

// access + refresh বানাও; refresh এর hash DB তে, আসল মান Rust memory তে
async fn issue_session(state: &AppState, user_id: u64) -> Result<String, String> {
    let uid = user_id.to_string();
    let access = make_token(&uid, "access", ACCESS_TTL_SECS, &state.jwt_secret)?;
    let refresh = make_token(&uid, "refresh", REFRESH_TTL_SECS, &state.jwt_secret)?;

    sqlx::query(
        "INSERT INTO refresh_tokens (token_hash, user_id, expires_at)
         VALUES (?, ?, DATE_ADD(NOW(), INTERVAL ? SECOND))",
    )
    .bind(sha256_hex(&refresh))
    .bind(user_id)
    .bind(REFRESH_TTL_SECS)
    .execute(&state.db)
    .await
    .map_err(|e| e.to_string())?;

    *state.refresh_token.lock().unwrap() = Some(refresh); // JS কে দিচ্ছি না
    Ok(access) // শুধু access token JS এ যায়
}

#[tauri::command]
pub async fn register(state: State<'_, AppState>, email: String, password: String) -> Result<String, String> {
    if password.len() < 8 {
        return Err("পাসওয়ার্ড কমপক্ষে ৮ অক্ষর".into());
    }
    let hash = hash_password(&password)?; // argon2
    sqlx::query("INSERT INTO users (email, password_hash) VALUES (?, ?)")
        .bind(&email)
        .bind(&hash)
        .execute(&state.db)
        .await
        .map_err(|_| "এই ইমেইল আগেই আছে".to_string())?;
    Ok("registered".into())
}

#[tauri::command]
pub async fn login(state: State<'_, AppState>, email: String, password: String) -> Result<LoginResponse, String> {
    // ১) rate limit: ১ মিনিটে সর্বোচ্চ ৫ বার
    rate_limit::check(&state.attempts, &email, 5, Duration::from_secs(60))?;

    // ২) user খোঁজো
    let row: Option<(u64, String, bool)> =
        sqlx::query_as("SELECT id, password_hash, totp_enabled FROM users WHERE email = ?")
            .bind(&email)
            .fetch_optional(&state.db)
            .await
            .map_err(|e| e.to_string())?;
    // ইমেইল ভুল না পাসওয়ার্ড ভুল — একই বার্তা (তথ্য ফাঁস ঠেকাতে)
    let (id, hash, totp_enabled) = row.ok_or("ইমেইল বা পাসওয়ার্ড ভুল")?;

    // ৩) argon2 যাচাই
    if !verify_password(&password, &hash) {
        return Err("ইমেইল বা পাসওয়ার্ড ভুল".into());
    }

    // ৪) 2FA চালু থাকলে এখনই session নয়, আগে কোড
    if totp_enabled {
        let temp = make_token(&id.to_string(), "2fa_pending", 300, &state.jwt_secret)?;
        return Ok(LoginResponse { status: "2fa_required".into(), access_token: None, temp_token: Some(temp) });
    }

    let access = issue_session(&state, id).await?;
    Ok(LoginResponse { status: "ok".into(), access_token: Some(access), temp_token: None })
}

#[tauri::command]
pub async fn verify_2fa(state: State<'_, AppState>, temp_token: String, code: String) -> Result<String, String> {
    let claims = verify_token(&temp_token, "2fa_pending", &state.jwt_secret)?;
    // কোড অনুমান ঠেকাতে আলাদা limit: ১ মিনিটে ৫ বার
    rate_limit::check(&state.attempts, &format!("2fa:{}", claims.sub), 5, Duration::from_secs(60))?;

    let id: u64 = claims.sub.parse().map_err(|_| "invalid token".to_string())?;
    let (email, secret): (String, Option<String>) =
        sqlx::query_as("SELECT email, totp_secret FROM users WHERE id = ?")
            .bind(id)
            .fetch_one(&state.db)
            .await
            .map_err(|e| e.to_string())?;

    let secret = secret.ok_or("2FA সেট করা নেই")?;
    if !totp::verify(&secret, &email, &code)? {
        return Err("কোড ভুল".into());
    }
    issue_session(&state, id).await
}

// লগইন করা অবস্থায় 2FA চালুর প্রথম ধাপ: secret ও QR লিংক পাও
#[tauri::command]
pub async fn enable_2fa(state: State<'_, AppState>, access_token: String) -> Result<(String, String), String> {
    let claims = verify_token(&access_token, "access", &state.jwt_secret)?;
    let id: u64 = claims.sub.parse().map_err(|_| "invalid token".to_string())?;
    let email: (String,) = sqlx::query_as("SELECT email FROM users WHERE id = ?")
        .bind(id).fetch_one(&state.db).await.map_err(|e| e.to_string())?;

    let secret = totp::new_secret();
    sqlx::query("UPDATE users SET totp_secret = ? WHERE id = ?")
        .bind(&secret).bind(id).execute(&state.db).await.map_err(|e| e.to_string())?;
    Ok((secret.clone(), totp::otpauth_url(&secret, &email.0)?))
}

// দ্বিতীয় ধাপ: অ্যাপের কোড মিললে তবেই 2FA চালু
#[tauri::command]
pub async fn confirm_2fa(state: State<'_, AppState>, access_token: String, code: String) -> Result<bool, String> {
    let claims = verify_token(&access_token, "access", &state.jwt_secret)?;
    let id: u64 = claims.sub.parse().map_err(|_| "invalid token".to_string())?;
    let (email, secret): (String, Option<String>) =
        sqlx::query_as("SELECT email, totp_secret FROM users WHERE id = ?")
            .bind(id).fetch_one(&state.db).await.map_err(|e| e.to_string())?;
    let secret = secret.ok_or("আগে enable_2fa চালাও")?;
    if !totp::verify(&secret, &email, &code)? {
        return Err("কোড ভুল".into());
    }
    sqlx::query("UPDATE users SET totp_enabled = 1 WHERE id = ?")
        .bind(id).execute(&state.db).await.map_err(|e| e.to_string())?;
    Ok(true)
}

// ★ access token এর মেয়াদ শেষ হলে React এটা ডাকে ★
#[tauri::command]
pub async fn refresh_session(state: State<'_, AppState>) -> Result<String, String> {
    // Rust memory থেকে refresh token নাও
    let refresh = state.refresh_token.lock().unwrap().clone().ok_or("লগইন করা নেই")?;
    let claims = verify_token(&refresh, "refresh", &state.jwt_secret)?;
    let id: u64 = claims.sub.parse().map_err(|_| "invalid token".to_string())?;
    let hash = sha256_hex(&refresh);

    // DB তে আছে? বাতিল হয়নি? মেয়াদ আছে?
    let valid: Option<(u64,)> = sqlx::query_as(
        "SELECT id FROM refresh_tokens WHERE token_hash = ? AND revoked = 0 AND expires_at > NOW()",
    )
    .bind(&hash)
    .fetch_optional(&state.db)
    .await
    .map_err(|e| e.to_string())?;

    if valid.is_none() {
        // বাতিল/অজানা token আবার এসেছে = চুরির সন্দেহ, ওই user এর সব session বন্ধ
        sqlx::query("UPDATE refresh_tokens SET revoked = 1 WHERE user_id = ?")
            .bind(id).execute(&state.db).await.map_err(|e| e.to_string())?;
        *state.refresh_token.lock().unwrap() = None;
        return Err("session বাতিল, আবার লগইন করো".into());
    }

    // rotation: পুরনো refresh token বাতিল, নতুন জোড়া তৈরি
    sqlx::query("UPDATE refresh_tokens SET revoked = 1 WHERE token_hash = ?")
        .bind(&hash).execute(&state.db).await.map_err(|e| e.to_string())?;
    issue_session(&state, id).await
}

#[tauri::command]
pub async fn logout(state: State<'_, AppState>) -> Result<(), String> {
    if let Some(rt) = state.refresh_token.lock().unwrap().take() {
        let _ = sqlx::query("UPDATE refresh_tokens SET revoked = 1 WHERE token_hash = ?")
            .bind(sha256_hex(&rt)).execute(&state.db).await;
    }
    state.cache.invalidate_all(); // cache ও পরিষ্কার
    Ok(())
}`},{n:9,path:"src-tauri/src/commands/tasks.rs + mod.rs",lang:"rust",side:"Rust",role:"সুরক্ষিত API: access token যাচাই + cache (HIT/MISS)।",why:"প্রতিবার DB তে না গিয়ে ৬০ সেকেন্ড cache থেকে দেওয়া হয়; নতুন task যোগ করলে cache মুছে দেওয়া হয় (invalidate)।",code:`// ---- src-tauri/src/commands/tasks.rs ----
use crate::security::jwt::verify_token;
use crate::state::{AppState, Task};
use serde::Serialize;
use tauri::State;

#[derive(Serialize)]
pub struct TasksResponse {
    pub from_cache: bool, // UI তে HIT/MISS দেখানোর জন্য
    pub tasks: Vec<Task>,
}

// প্রতিটা সুরক্ষিত command শুরুতে এটা ডাকে: token ঠিক থাকলে user id দেয়
fn auth(state: &AppState, token: &str) -> Result<u64, String> {
    let claims = verify_token(token, "access", &state.jwt_secret)?; // মেয়াদ শেষ হলে "token expired"
    claims.sub.parse::<u64>().map_err(|_| "invalid token".to_string())
}

#[tauri::command]
pub async fn list_tasks(state: State<'_, AppState>, access_token: String) -> Result<TasksResponse, String> {
    let uid = auth(&state, &access_token)?;
    let key = format!("tasks:{}", uid);

    // cache HIT: DB ছুঁতেই হলো না
    if let Some(tasks) = state.cache.get(&key).await {
        return Ok(TasksResponse { from_cache: true, tasks });
    }

    // cache MISS: DB থেকে এনে cache এ রাখো
    let tasks = sqlx::query_as::<_, Task>("SELECT id, title, done FROM tasks WHERE user_id = ? ORDER BY id DESC")
        .bind(uid)
        .fetch_all(&state.db)
        .await
        .map_err(|e| e.to_string())?;
    state.cache.insert(key, tasks.clone()).await;
    Ok(TasksResponse { from_cache: false, tasks })
}

#[tauri::command]
pub async fn add_task(state: State<'_, AppState>, access_token: String, title: String) -> Result<(), String> {
    let uid = auth(&state, &access_token)?;
    if title.trim().is_empty() {
        return Err("title খালি".into());
    }
    sqlx::query("INSERT INTO tasks (user_id, title) VALUES (?, ?)")
        .bind(uid)
        .bind(title.trim())
        .execute(&state.db)
        .await
        .map_err(|e| e.to_string())?;
    state.cache.invalidate(&format!("tasks:{}", uid)).await; // পুরনো cache বাতিল
    Ok(())
}

// ---- src-tauri/src/commands/mod.rs ----
pub mod auth;
pub mod tasks;`},{n:10,path:"src-tauri/src/lib.rs",lang:"rust",side:"Rust",role:"সব জোড়া লাগানো: .env পড়া, DB connect, state manage, command register।",why:"শেষ ধাপ (Rust)। এখানে command না বসালে React ডাকতে পারবে না।",code:`// src-tauri/src/lib.rs
mod commands;
mod security;
mod state;

use commands::{auth, tasks};
use state::AppState;
use tauri::Manager; // app.manage() এর জন্য

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    dotenvy::dotenv().ok(); // .env ফাইল পড়ো
    let db_url = std::env::var("DATABASE_URL").expect("DATABASE_URL নেই");
    let secret = std::env::var("JWT_SECRET").expect("JWT_SECRET নেই");

    tauri::Builder::default()
        .setup(move |app| {
            // অ্যাপ চালুর সময় একবার DB তে connect
            let pool = tauri::async_runtime::block_on(sqlx::MySqlPool::connect(&db_url))?;
            app.manage(AppState::new(pool, secret.clone())); // সব command এ State<AppState> হিসেবে পাবে
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            auth::register,
            auth::login,
            auth::verify_2fa,
            auth::enable_2fa,
            auth::confirm_2fa,
            auth::refresh_session,
            auth::logout,
            tasks::list_tasks,
            tasks::add_task,
        ])
        .run(tauri::generate_context!())
        .expect("Tauri চালু করা যায়নি");
}`},{n:11,path:"src/utils/secureInvoke.js",lang:"js",side:"React ↔ Rust",role:"React এর 'axiosSecure': access token স্বয়ংক্রিয় যোগ + মেয়াদ শেষে refresh + retry।",why:"প্রতিটা সুরক্ষিত কলে এটা ব্যবহার করবে, তাহলে refresh এর কোড একবারই লিখতে হয়।",code:`// src/utils/secureInvoke.js
import { invoke } from "@tauri-apps/api/core";

// access token শুধু memory তে (localStorage এ নয়, XSS এ চুরি কঠিন)
let accessToken = null;
export const setAccessToken = (t) => { accessToken = t; };
export const getAccessToken = () => accessToken;

// Rust parameter: access_token  ⇒  JS key: accessToken (snake → camel)
export async function secureInvoke(command, args = {}) {
  try {
    return await invoke(command, { ...args, accessToken });
  } catch (err) {
    // Rust "token expired" দিলে একবার refresh করে আবার চেষ্টা
    if (String(err).includes("token expired")) {
      accessToken = await invoke("refresh_session"); // refresh token Rust এর memory তে
      return await invoke(command, { ...args, accessToken });
    }
    throw err; // অন্য error যেমন আছে তেমন
  }
}`},{n:12,path:"src/context/AuthContext.jsx",lang:"jsx",side:"React",role:"লগইন অবস্থা + login/2FA/logout function সব পেজে পৌঁছে দেয়।",why:"তোমার MERN গাইডের AuthContext এর মতোই; শুধু Firebase এর বদলে Rust ডাকে।",code:`// src/context/AuthContext.jsx
import { createContext, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { setAccessToken } from "../utils/secureInvoke";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tempToken, setTempToken] = useState(null); // 2FA এর ধাপে

  async function login(email, password) {
    const res = await invoke("login", { email, password });
    if (res.status === "2fa_required") {
      setTempToken(res.temp_token); // Rust এর snake_case field JS এ যেমন আছে
      return "2fa";
    }
    setAccessToken(res.access_token);
    setLoggedIn(true);
    return "ok";
  }

  async function verify2fa(code) {
    const access = await invoke("verify_2fa", { tempToken, code });
    setAccessToken(access);
    setTempToken(null);
    setLoggedIn(true);
  }

  async function logout() {
    await invoke("logout");
    setAccessToken(null);
    setLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ loggedIn, tempToken, login, verify2fa, logout }}>
      {children}
    </AuthContext.Provider>
  );
}`},{n:13,path:"src/pages/Login.jsx",lang:"jsx",side:"React",role:"লগইন ফর্ম। 2FA লাগলে নিজে কোড ইনপুটে বদলে যায়।",why:"UI সবার শেষে; Rust ও context ঠিক হলে এটা সহজ।",code:`// src/pages/Login.jsx
import { useContext, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login, verify2fa, tempToken } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  async function onLogin(e) {
    e.preventDefault();
    setError("");
    try { await login(email, password); }
    catch (err) { setError(String(err)); } // rate limit এর বার্তাও এখানে দেখাবে
  }

  async function onRegister() {
    try { await invoke("register", { email, password }); setError("রেজিস্টার হয়েছে, এবার লগইন করো"); }
    catch (err) { setError(String(err)); }
  }

  async function on2fa(e) {
    e.preventDefault();
    setError("");
    try { await verify2fa(code); }
    catch (err) { setError(String(err)); }
  }

  // tempToken থাকা মানে পাসওয়ার্ড ঠিক, এখন 2FA কোড চাই
  if (tempToken) {
    return (
      <form onSubmit={on2fa} className="max-w-sm mx-auto space-y-3">
        <h2 className="text-xl font-bold">2FA কোড দাও</h2>
        <input className="input input-bordered w-full" maxLength={6}
          value={code} onChange={(e) => setCode(e.target.value)} placeholder="৬ সংখ্যা" />
        <button className="btn btn-primary w-full">যাচাই করো</button>
        {error && <p className="text-error">{error}</p>}
      </form>
    );
  }

  return (
    <form onSubmit={onLogin} className="max-w-sm mx-auto space-y-3">
      <h2 className="text-xl font-bold">লগইন</h2>
      <input className="input input-bordered w-full" type="email" placeholder="ইমেইল"
        value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="input input-bordered w-full" type="password" placeholder="পাসওয়ার্ড"
        value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-primary w-full">Login</button>
      <button type="button" className="btn btn-ghost w-full" onClick={onRegister}>Register</button>
      {error && <p className="text-error">{error}</p>}
    </form>
  );
}`},{n:14,path:"src/pages/Dashboard.jsx",lang:"jsx",side:"React ↔ Rust",role:"সুরক্ষিত পেজ: Task তালিকা ও যোগ করা; cache HIT/MISS ব্যাজ।",why:"secureInvoke দিয়ে সুরক্ষিত command ডাকার উদাহরণ।",code:`// src/pages/Dashboard.jsx
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { secureInvoke } from "../utils/secureInvoke";

export default function Dashboard() {
  const { logout } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [fromCache, setFromCache] = useState(null);
  const [title, setTitle] = useState("");

  async function load() {
    // secureInvoke: token যোগ করে; মেয়াদ শেষ হলে নিজে refresh করে
    const res = await secureInvoke("list_tasks");
    setTasks(res.tasks);
    setFromCache(res.from_cache); // true = cache থেকে এসেছে
  }

  useEffect(() => { load(); }, []);

  async function add() {
    await secureInvoke("add_task", { title }); // Rust এ cache invalidate হয়
    setTitle("");
    load();
  }

  return (
    <div className="max-w-md mx-auto space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">আমার Tasks</h2>
        <button className="btn btn-sm" onClick={logout}>Logout</button>
      </div>
      {fromCache !== null && (
        <span className={"badge " + (fromCache ? "badge-success" : "badge-warning")}>
          {fromCache ? "cache HIT" : "cache MISS (DB থেকে)"}
        </span>
      )}
      <div className="join w-full">
        <input className="input input-bordered join-item flex-1" value={title}
          onChange={(e) => setTitle(e.target.value)} placeholder="নতুন task" />
        <button className="btn btn-primary join-item" onClick={add}>Add</button>
      </div>
      <ul className="space-y-1">{tasks.map((t) => <li key={t.id} className="p-2 bg-base-200 rounded">{t.title}</li>)}</ul>
    </div>
  );
}`}],connection:{explain:['লগইন: React invoke("login") → Rust rate limit → argon2 verify → (2FA?) → access token React এ, refresh token Rust memory তে।','সুরক্ষিত কল: secureInvoke("list_tasks") accessToken জুড়ে পাঠায় → Rust verify_token → cache → DB।','মেয়াদ শেষ: Rust Err("token expired") → secureInvoke ধরে → invoke("refresh_session") → নতুন access token → আবার একই কল।',"Rust এ access_token: String, JS এ { accessToken } — snake_case ↔ camelCase স্বয়ংক্রিয় রূপান্তর।","Rust struct এর field (from_cache) JS এ snake_case ই থাকে (res.from_cache)।","async command এ State<'_, AppState> লাগে (lifetime সহ) এবং Result রিটার্ন করা বাধ্যতামূলক।"],rustTitle:"Rust (tasks.rs)",rust:`#[tauri::command]
pub async fn list_tasks(state: State<'_, AppState>, access_token: String)
    -> Result<TasksResponse, String> {
    let uid = auth(&state, &access_token)?; // "token expired" হলে এখানেই Err
    /* cache → DB */
}`,reactTitle:"React (secureInvoke.js)",react:`try {
  return await invoke("list_tasks", { accessToken });
} catch (err) {
  if (String(err).includes("token expired")) {
    accessToken = await invoke("refresh_session");
    return await invoke("list_tasks", { accessToken });
  }
  throw err;
}`},example:{title:"পূর্ণ উদাহরণ: রেজিস্টার → 2FA → Task → মেয়াদ শেষ → refresh",flow:["১) Register: পাসওয়ার্ড argon2 হয়ে users এ যায় (salt সহ)","২) Login: rate limit (৫/মিনিট) → argon2 verify → access(১৫মি) + refresh(৭দিন)","৩) 2FA চালু থাকলে: temp token(৫মি) → TOTP কোড মিললে তবেই session","৪) Dashboard: list_tasks → প্রথমবার MISS (DB), ৬০ সেকেন্ডের মধ্যে HIT","৫) Add task → cache invalidate → পরের লোড আবার MISS","৬) ১৫ মিনিট পরে access শেষ → 'token expired' → স্বয়ংক্রিয় refresh (rotation)","৭) পুরনো refresh আবার ব্যবহার হলে সব session বাতিল (চুরির সন্দেহ)"],runCommands:["mysql -u root -p < schema.sql","cd secure-tasks","npm run tauri dev"],output:"ডেস্কটপ অ্যাপে লগইন/2FA/Task, সব নিরাপত্তা Rust এ। পরীক্ষার জন্য 'সিকিউরিটি ল্যাব' ট্যাবে প্রতিটা অংশ চালিয়ে দেখো।"},troubleshoot:[["DATABASE_URL নেই (panic)","src-tauri/.env আছে কিনা ও cargo ওই ফোল্ডার থেকে চলছে কিনা দেখো"],["sqlx connect error","MySQL চালু আছে কিনা, পাসওয়ার্ড/ডেটাবেস নাম ঠিক কিনা দেখো"],["2FA কোড সবসময় ভুল","কম্পিউটার ও ফোনের সময় সিঙ্ক করো (TOTP সময়-নির্ভর)"],["invoke এ arg missing","Rust snake_case ↔ JS camelCase নাম মিলিয়ে দেখো"],["স্ট্যাটিক cache পুরনো ডেটা দেখায়","৬০ সেকেন্ড TTL; write এর পর invalidate হচ্ছে কিনা দেখো"]],quiz:[{q:"refresh token এই ডিজাইনে কোথায় থাকে?",options:["localStorage","Rust memory (AppState)","URL এ"],answer:1},{q:"Access token এর মেয়াদ ছোট রাখা হয় কেন?",options:["চুরি হলে ক্ষতি সীমিত রাখতে","দ্রুত লোডের জন্য","DB বাঁচাতে"],answer:0},{q:"পুরনো (বাতিল) refresh token আবার এলে কী করা হয়?",options:["কিছু না","ওই user এর সব session বাতিল","শুধু একটা বার্তা"],answer:1},{q:"argon2 এ salt এর কাজ কী?",options:["একই পাসওয়ার্ডেও আলাদা hash","hash ছোট করা","দ্রুত যাচাই"],answer:0}]},ey={slug:"secure-tasks-mongodb",no:5,title:"Secure Task Manager — MongoDB",level:"অ্যাডভান্সড",stack:["Tauri v2","React","Rust + mongodb crate","MongoDB","argon2","JWT","TOTP 2FA","moka cache"],widget:"security",intro:"প্রজেক্ট ৪ এর মতোই JWT, refresh rotation, rate limit, 2FA, cache, argon2 — তফাত শুধু ডেটাবেস: SQL টেবিলের বদলে MongoDB collection। তাই security/ ফোল্ডার ও React ফাইলগুলো প্রায় কপি-পেস্ট; আমরা শুধু যা বদলায় সেগুলো লিখব। MongoDB এর একটা সুবিধা: refresh_tokens এ TTL index দিলে মেয়াদ শেষ হলে ডেটাবেস নিজেই ডকুমেন্ট মুছে দেয়।",steps:[{title:"MongoDB চালু ও collection পরিকল্পনা",desc:"users, refresh_tokens (TTL index), tasks। কোনো schema.sql লাগে না।"},{title:"প্রজেক্ট ৪ থেকে কপি",desc:"security/ ফোল্ডার (password, jwt, totp, rate_limit) এবং React এর secureInvoke.js, AuthContext, Login, Dashboard হুবহু কপি।"},{title:".env ও Cargo.toml",desc:"sqlx এর বদলে mongodb crate।"},{title:"state.rs (Mongo ভার্সন)",desc:"MySqlPool এর বদলে mongodb::Database।"},{title:"commands/auth.rs (Mongo ভার্সন)",desc:"query এর বদলে doc! দিয়ে find_one / insert_one / update_one।"},{title:"commands/tasks.rs (Mongo ভার্সন)",desc:"ObjectId কে String এ বদলে JS কে পাঠানো।"},{title:"lib.rs",desc:"setup এ MongoDB connect ও TTL index তৈরি।"}],setupCommands:["# MongoDB চালু থাকতে হবে (mongod বা Atlas URI)","cp -r ../secure-tasks/src-tauri/src/security  src-tauri/src/security","cp ../secure-tasks/src/utils/secureInvoke.js src/utils/","# AuthContext/Login/Dashboard ও কপি; তারপর নিচের ফাইলগুলো লেখো","npm run tauri dev"],files:[{n:1,path:"src-tauri/.env  +  Cargo.toml (বদলানো অংশ)",lang:"toml",side:"Config",role:"sqlx বাদ, mongodb ও bson যোগ।",why:"ডেটাবেস ড্রাইভার বদলালেই এই প্রজেক্ট আলাদা হয়ে যায়।",code:`# ---- src-tauri/.env ----
MONGODB_URI=mongodb://127.0.0.1:27017
MONGODB_DB=tauri_app
JWT_SECRET=এখানে-অন্তত-৩২-অক্ষরের-র‍্যান্ডম-স্ট্রিং-abc123XYZ

# ---- Cargo.toml [dependencies] ----
mongodb = "3"          # sqlx এর বদলে (এটাই bson ও re-export করে)
futures-util = "0.3"   # cursor থেকে ডকুমেন্ট সংগ্রহে
# বাকি সব প্রজেক্ট ৪ এর মতো: argon2, jsonwebtoken, totp-rs, moka, uuid, chrono, sha2, hex, dotenvy, serde`},{n:2,path:"src-tauri/src/security/*  (কপি করো)",lang:"rust",side:"Rust",role:"password.rs, jwt.rs, totp.rs, rate_limit.rs, mod.rs — একদম একই।",why:"নিরাপত্তার যুক্তি ডেটাবেসের উপর নির্ভর করে না, তাই বদলানো লাগে না। এটাই ভালো আর্কিটেকচারের লক্ষণ।",code:`// প্রজেক্ট ৪ এর এই ফাইলগুলো হুবহু কপি করো:
//   src-tauri/src/security/password.rs   (argon2 hash/verify)
//   src-tauri/src/security/jwt.rs        (ACCESS 15 মিনিট, REFRESH 7 দিন, "token expired")
//   src-tauri/src/security/totp.rs       (2FA)
//   src-tauri/src/security/rate_limit.rs (sliding window)
//   src-tauri/src/security/mod.rs
//
// React এর এই ফাইলগুলোও একই:
//   src/utils/secureInvoke.js, src/context/AuthContext.jsx,
//   src/pages/Login.jsx, src/pages/Dashboard.jsx
//
// (Dashboard এ task.id এখন String; key={t.id} ঠিকই কাজ করে)`},{n:3,path:"src-tauri/src/state.rs",lang:"rust",side:"Rust",role:"shared state: MongoDB Database, cache, rate limit, refresh token।",why:"প্রজেক্ট ৪ এর সাথে তফাত: MySqlPool → Database, Task এর id এখন String (ObjectId এর hex)।",code:`// src-tauri/src/state.rs
use moka::future::Cache;
use mongodb::Database;
use serde::Serialize;
use std::{collections::HashMap, sync::Mutex, time::{Duration, Instant}};

// JS কে যা পাঠাবো (ObjectId নয়, সরল String)
#[derive(Serialize, Clone)]
pub struct TaskDto {
    pub id: String,
    pub title: String,
    pub done: bool,
}

pub struct AppState {
    pub db: Database,                                   // MongoDB database handle
    pub jwt_secret: String,
    pub cache: Cache<String, Vec<TaskDto>>,             // API cache, TTL ৬০ সেকেন্ড
    pub attempts: Mutex<HashMap<String, Vec<Instant>>>, // rate limit
    pub refresh_token: Mutex<Option<String>>,           // refresh token Rust এই থাকে
}

impl AppState {
    pub fn new(db: Database, jwt_secret: String) -> Self {
        Self {
            db,
            jwt_secret,
            cache: Cache::builder().time_to_live(Duration::from_secs(60)).max_capacity(1000).build(),
            attempts: Mutex::new(HashMap::new()),
            refresh_token: Mutex::new(None),
        }
    }
}`},{n:4,path:"src-tauri/src/commands/auth.rs",lang:"rust",side:"Rust",role:"register, login, verify_2fa, refresh_session, logout — MongoDB ভার্সন।",why:"SQL string এর জায়গায় doc! { ... } ফিল্টার। এখানে মূল তিনটা (register, login, refresh) দেখানো হলো; verify_2fa/enable_2fa/confirm_2fa একই ধরনে find_one + update_one দিয়ে লেখো।",code:`// src-tauri/src/commands/auth.rs  (MongoDB)
use crate::security::{jwt::*, password::*, rate_limit, totp};
use crate::state::AppState;
use mongodb::bson::{doc, oid::ObjectId, DateTime as BsonDateTime, Document};
use mongodb::Collection;
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::time::Duration;
use tauri::State;

// users collection এর ডকুমেন্টের আকার
#[derive(Serialize, Deserialize)]
struct User {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    id: Option<ObjectId>,           // insert এর সময় None, Mongo নিজে বানায়
    email: String,
    password_hash: String,          // argon2
    totp_enabled: bool,
    totp_secret: Option<String>,
}

#[derive(Serialize)]
pub struct LoginResponse {
    pub status: String,
    pub access_token: Option<String>,
    pub temp_token: Option<String>,
}

fn sha256_hex(s: &str) -> String { hex::encode(Sha256::digest(s.as_bytes())) }
fn users(state: &AppState) -> Collection<User> { state.db.collection("users") }
fn tokens(state: &AppState) -> Collection<Document> { state.db.collection("refresh_tokens") }

// session তৈরি: access JS এ, refresh এর hash DB তে, আসল refresh Rust memory তে
async fn issue_session(state: &AppState, user_id: &ObjectId) -> Result<String, String> {
    let uid = user_id.to_hex();
    let access = make_token(&uid, "access", ACCESS_TTL_SECS, &state.jwt_secret)?;
    let refresh = make_token(&uid, "refresh", REFRESH_TTL_SECS, &state.jwt_secret)?;

    let expires = BsonDateTime::from_millis(
        chrono::Utc::now().timestamp_millis() + REFRESH_TTL_SECS * 1000,
    );
    tokens(state)
        .insert_one(doc! {
            "token_hash": sha256_hex(&refresh),
            "user_id": user_id,
            "expires_at": expires,  // TTL index এই ফিল্ড দেখে ডকুমেন্ট মুছে দেয়
            "revoked": false,
        })
        .await
        .map_err(|e| e.to_string())?;

    *state.refresh_token.lock().unwrap() = Some(refresh);
    Ok(access)
}

#[tauri::command]
pub async fn register(state: State<'_, AppState>, email: String, password: String) -> Result<String, String> {
    if password.len() < 8 { return Err("পাসওয়ার্ড কমপক্ষে ৮ অক্ষর".into()); }
    let hash = hash_password(&password)?; // argon2
    users(&state)
        .insert_one(User { id: None, email, password_hash: hash, totp_enabled: false, totp_secret: None })
        .await
        .map_err(|_| "এই ইমেইল আগেই আছে".to_string())?; // unique index এ duplicate ধরা পড়ে
    Ok("registered".into())
}

#[tauri::command]
pub async fn login(state: State<'_, AppState>, email: String, password: String) -> Result<LoginResponse, String> {
    rate_limit::check(&state.attempts, &email, 5, Duration::from_secs(60))?; // ১ মিনিটে ৫ বার

    // SQL এর WHERE email = ? এর বদলে doc! ফিল্টার
    let user = users(&state)
        .find_one(doc! { "email": &email })
        .await
        .map_err(|e| e.to_string())?
        .ok_or("ইমেইল বা পাসওয়ার্ড ভুল")?;

    if !verify_password(&password, &user.password_hash) {
        return Err("ইমেইল বা পাসওয়ার্ড ভুল".into());
    }
    let id = user.id.ok_or("user id নেই")?;

    if user.totp_enabled {
        let temp = make_token(&id.to_hex(), "2fa_pending", 300, &state.jwt_secret)?;
        return Ok(LoginResponse { status: "2fa_required".into(), access_token: None, temp_token: Some(temp) });
    }
    let access = issue_session(&state, &id).await?;
    Ok(LoginResponse { status: "ok".into(), access_token: Some(access), temp_token: None })
}

#[tauri::command]
pub async fn refresh_session(state: State<'_, AppState>) -> Result<String, String> {
    let refresh = state.refresh_token.lock().unwrap().clone().ok_or("লগইন করা নেই")?;
    let claims = verify_token(&refresh, "refresh", &state.jwt_secret)?;
    let uid = ObjectId::parse_str(&claims.sub).map_err(|_| "invalid token".to_string())?;
    let hash = sha256_hex(&refresh);

    // বাতিল হয়নি + মেয়াদ আছে এমন ডকুমেন্ট খোঁজো
    let found = tokens(&state)
        .find_one(doc! { "token_hash": &hash, "revoked": false, "expires_at": { "$gt": BsonDateTime::now() } })
        .await
        .map_err(|e| e.to_string())?;

    if found.is_none() {
        // বাতিল token আবার এসেছে = চুরির সন্দেহ → ওই user এর সব refresh token বাতিল
        let _ = tokens(&state).update_many(doc! { "user_id": &uid }, doc! { "$set": { "revoked": true } }).await;
        *state.refresh_token.lock().unwrap() = None;
        return Err("session বাতিল, আবার লগইন করো".into());
    }

    // rotation: পুরনোটা বাতিল, নতুন জোড়া
    tokens(&state)
        .update_one(doc! { "token_hash": &hash }, doc! { "$set": { "revoked": true } })
        .await
        .map_err(|e| e.to_string())?;
    issue_session(&state, &uid).await
}

#[tauri::command]
pub async fn logout(state: State<'_, AppState>) -> Result<(), String> {
    if let Some(rt) = state.refresh_token.lock().unwrap().take() {
        let _ = tokens(&state)
            .update_one(doc! { "token_hash": sha256_hex(&rt) }, doc! { "$set": { "revoked": true } })
            .await;
    }
    state.cache.invalidate_all();
    Ok(())
}

// verify_2fa / enable_2fa / confirm_2fa:
// প্রজেক্ট ৪ এর যুক্তি হুবহু; শুধু sqlx::query এর জায়গায়
//   users(&state).find_one(doc!{ "_id": oid }) এবং
//   users(&state).update_one(doc!{ "_id": oid }, doc!{ "$set": { "totp_secret": &secret } })`},{n:5,path:"src-tauri/src/commands/tasks.rs + mod.rs",lang:"rust",side:"Rust",role:"access token যাচাই + cache; ObjectId কে String বানিয়ে JS এ পাঠানো।",why:"cache যুক্তি একই; তফাত শুধু cursor থেকে ডকুমেন্ট সংগ্রহ।",code:`// ---- src-tauri/src/commands/tasks.rs ----
use crate::security::jwt::verify_token;
use crate::state::{AppState, TaskDto};
use futures_util::TryStreamExt; // cursor.try_collect() এর জন্য
use mongodb::bson::{doc, oid::ObjectId, Document};
use serde::Serialize;
use tauri::State;

#[derive(Serialize)]
pub struct TasksResponse {
    pub from_cache: bool,
    pub tasks: Vec<TaskDto>,
}

fn auth(state: &AppState, token: &str) -> Result<ObjectId, String> {
    let claims = verify_token(token, "access", &state.jwt_secret)?; // মেয়াদ শেষ হলে "token expired"
    ObjectId::parse_str(&claims.sub).map_err(|_| "invalid token".to_string())
}

#[tauri::command]
pub async fn list_tasks(state: State<'_, AppState>, access_token: String) -> Result<TasksResponse, String> {
    let uid = auth(&state, &access_token)?;
    let key = format!("tasks:{}", uid.to_hex());

    if let Some(tasks) = state.cache.get(&key).await {
        return Ok(TasksResponse { from_cache: true, tasks }); // cache HIT
    }

    // cache MISS: Mongo থেকে আনো (নতুনগুলো আগে)
    let col = state.db.collection::<Document>("tasks");
    let docs: Vec<Document> = col
        .find(doc! { "user_id": &uid })
        .sort(doc! { "_id": -1 })
        .await
        .map_err(|e| e.to_string())?
        .try_collect()
        .await
        .map_err(|e| e.to_string())?;

    let tasks: Vec<TaskDto> = docs
        .iter()
        .map(|d| TaskDto {
            id: d.get_object_id("_id").map(|o| o.to_hex()).unwrap_or_default(),
            title: d.get_str("title").unwrap_or("").to_string(),
            done: d.get_bool("done").unwrap_or(false),
        })
        .collect();

    state.cache.insert(key, tasks.clone()).await;
    Ok(TasksResponse { from_cache: false, tasks })
}

#[tauri::command]
pub async fn add_task(state: State<'_, AppState>, access_token: String, title: String) -> Result<(), String> {
    let uid = auth(&state, &access_token)?;
    if title.trim().is_empty() { return Err("title খালি".into()); }

    state.db.collection::<Document>("tasks")
        .insert_one(doc! { "user_id": &uid, "title": title.trim(), "done": false })
        .await
        .map_err(|e| e.to_string())?;

    state.cache.invalidate(&format!("tasks:{}", uid.to_hex())).await; // cache বাতিল
    Ok(())
}

// ---- src-tauri/src/commands/mod.rs ----
pub mod auth;
pub mod tasks;`},{n:6,path:"src-tauri/src/lib.rs",lang:"rust",side:"Rust",role:"MongoDB connect, index তৈরি, state manage, command register।",why:"unique email index ও TTL index এখানে একবার বানানো হয়।",code:`// src-tauri/src/lib.rs  (MongoDB)
mod commands;
mod security;
mod state;

use commands::{auth, tasks};
use mongodb::{bson::{doc, Document}, options::IndexOptions, Client, IndexModel};
use state::AppState;
use std::time::Duration;
use tauri::Manager;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    dotenvy::dotenv().ok();
    let uri = std::env::var("MONGODB_URI").expect("MONGODB_URI নেই");
    let db_name = std::env::var("MONGODB_DB").unwrap_or_else(|_| "tauri_app".into());
    let secret = std::env::var("JWT_SECRET").expect("JWT_SECRET নেই");

    tauri::Builder::default()
        .setup(move |app| {
            tauri::async_runtime::block_on(async {
                let client = Client::with_uri_str(&uri).await?;
                let db = client.database(&db_name);

                // email অনন্য: duplicate register ঠেকায়
                let unique = IndexModel::builder()
                    .keys(doc! { "email": 1 })
                    .options(IndexOptions::builder().unique(true).build())
                    .build();
                db.collection::<Document>("users").create_index(unique).await?;

                // TTL index: expires_at এ পৌঁছালে Mongo নিজে ডকুমেন্ট মুছে দেয়
                let ttl = IndexModel::builder()
                    .keys(doc! { "expires_at": 1 })
                    .options(IndexOptions::builder().expire_after(Duration::from_secs(0)).build())
                    .build();
                db.collection::<Document>("refresh_tokens").create_index(ttl).await?;

                app.manage(AppState::new(db, secret.clone()));
                Ok::<(), mongodb::error::Error>(())
            })?;
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            auth::register, auth::login, auth::verify_2fa, auth::enable_2fa,
            auth::confirm_2fa, auth::refresh_session, auth::logout,
            tasks::list_tasks, tasks::add_task,
        ])
        .run(tauri::generate_context!())
        .expect("Tauri চালু করা যায়নি");
}`}],connection:{explain:["React দিকটা প্রজেক্ট ৪ এর সাথে প্রায় হুবহু: login → access token; secureInvoke → মেয়াদ শেষে refresh।","পার্থক্য Rust এর ভেতরে: SQL string → doc! { ... }; u64 id → ObjectId।","JS এ ObjectId পাঠাতে হলে .to_hex() দিয়ে String বানাও (TaskDto)।","TTL index: refresh_tokens এ expires_at পার হলে MongoDB নিজেই ডকুমেন্ট মুছে — আলাদা cleanup কোড লাগে না।","ডেটাবেস বদলানো সহজ হলো কারণ security/ ও React অংশ ডেটাবেস-নিরপেক্ষ।"],rustTitle:"Rust (auth.rs)",rust:`let user = users(&state)
    .find_one(doc! { "email": &email })   // SQL: WHERE email = ?
    .await.map_err(|e| e.to_string())?
    .ok_or("ইমেইল বা পাসওয়ার্ড ভুল")?;`,reactTitle:"React (একই)",react:`const res = await invoke("login", { email, password });
// res.status === "ok" | "2fa_required"
const list = await secureInvoke("list_tasks"); // list.tasks[i].id এখন String`},example:{title:"পূর্ণ উদাহরণ: refresh rotation ও TTL",flow:["১) Login → refresh_tokens এ { token_hash, user_id, expires_at(+৭ দিন), revoked:false }","২) access শেষ → refresh_session → আগেরটা revoked:true, নতুন ডকুমেন্ট insert","৩) কেউ পুরনো refresh দিয়ে চেষ্টা করলে find_one কিছু পায় না → ওই user এর সব token revoked","৪) ৭ দিন পার হলে TTL index ডকুমেন্ট নিজে মুছে ফেলে","৫) tasks এ add → cache invalidate → পরের list MISS, তারপর HIT"],runCommands:["mongod   # বা Atlas URI .env এ","npm run tauri dev"],output:"MongoDB তে users, refresh_tokens, tasks collection তৈরি হয়ে যাবে।"},troubleshoot:[["Server selection timeout","mongod চালু আছে কিনা, MONGODB_URI ঠিক কিনা দেখো"],["duplicate key (register)","এই ইমেইল আগে ব্যবহার হয়েছে, unique index এর কাজ"],["ObjectId parse error","claims.sub এ hex string আছে কিনা দেখো (to_hex() দিয়ে বানানো)"],["mongodb 3.x API মেলে না",'Cargo.toml এ mongodb = "3" আছে কিনা দেখো; 2.x এ .await এর আগে ভিন্ন options লাগে']],quiz:[{q:"MongoDB তে মেয়াদ শেষের ডকুমেন্ট নিজে মুছতে কী লাগে?",options:["TTL index","cron job","JOIN"],answer:0},{q:"ObjectId কে JS এ পাঠাতে কী করবে?",options:["সরাসরি পাঠাবে",".to_hex() দিয়ে String","u64 বানাবে"],answer:1},{q:"security/ ফোল্ডার MySQL থেকে Mongo তে কি বদলাতে হয়?",options:["পুরোটা","না, একই থাকে","শুধু jwt.rs"],answer:1}]},ty={slug:"iphone-battery-health",no:6,title:"iPhone Battery Health — USB থেকে ব্যাটারি হেলথ",level:"মধ্যম → উন্নত",stack:["Tauri v2","React (Vite)","Rust (tokio)","idevice 0.1.60","usbmuxd"],widget:"filemap",intro:"USB-তে লাগানো iPhone এর ব্যাটারি হেলথ দেখানোর ডেস্কটপ অ্যাপ, একই কোডবেস থেকে Windows ও Linux এ চলে। libimobiledevice এর বদলে pure-Rust idevice crate, তাই DLL বান্ডেল লাগে না। ফোন লাগালে বা খুললে কার্ড নিজে আপডেট হয়, আর ব্যাটারি প্রতি ৫ সেকেন্ডে রিফ্রেশ হয়।",steps:[{title:"পরিবেশ প্রস্তুতি",desc:"Node.js LTS, Rust (rustup), C++ build tools। Windows এ Apple Mobile Device Service (iTunes বা Apple Devices অ্যাপ), Linux এ usbmuxd প্যাকেজ। ফোনে Trust।"},{title:"প্রজেক্ট তৈরি",desc:"npm create tauri-app@latest, নাম iphone-battery, React + JavaScript। তারপর src/ এ components, hooks, utils ফোল্ডার বানাও।"},{title:"Cargo.toml",desc:"idevice =0.1.60 পিন করে ফিচার: rustls, ring, usbmuxd, diagnostics_relay। cargo check দিয়ে যাচাই।"},{title:"device.rs",desc:"usbmuxd দিয়ে ফোন খোঁজা, lockdown থেকে নাম, মডেল, iOS ভার্সন।"},{title:"battery.rs",desc:"AppleSmartBattery পড়ে হেলথ, সাইকেল, রানটাইম, চার্জ-সময়, অ্যাডাপ্টার পাওয়ারের সূত্র।"},{title:"lib.rs",desc:"কমান্ড রেজিস্টার ও ২ সেকেন্ডের পর্যবেক্ষণ থ্রেড (devices-changed ইভেন্ট)।"},{title:"React ফাইল",desc:"format.js, দুটো hook, BatteryCard, App.jsx, App.css।"},{title:"চালাও ও পরীক্ষা",desc:"npm run tauri dev; ফোন আনলক করে Trust দাও। কার্ড না এলে সমস্যার তালিকা দেখো।"},{title:"Build",desc:"Windows এ npm run tauri build; Windows + Linux দুটোর জন্য GitHub Actions। যা যাচাই হয়নি: rated_cycles() একটা অনুমান, Debian 12+ ধারণা, Linux এ ফোনসহ বাস্তব পরীক্ষা বাকি।"}],setupCommands:["# Linux এ আগে একবার (Windows এ iTunes বা Apple Devices অ্যাপ ইনস্টল থাকলেই হয়)","sudo apt install -y build-essential curl wget file libwebkit2gtk-4.1-dev libssl-dev libxdo-dev libayatana-appindicator3-dev librsvg2-dev usbmuxd","sudo systemctl enable --now usbmuxd","","npm create tauri-app@latest   # name: iphone-battery, React, JavaScript, npm","cd iphone-battery","mkdir -p src/components src/hooks src/utils","npm install","cd src-tauri && cargo check && cd ..   # Cargo.toml বদলের পর","npm run tauri dev"],files:[{n:1,path:"src-tauri/Cargo.toml",lang:"toml",side:"Config",edit:!0,role:"[dependencies] অংশ বদলাও: idevice crate ও তার ফিচার। [package] ও [lib] যেমন আছে তেমন থাকবে।",why:"idevice ঠিকমতো কম্পাইল করতে তিনটা সিদ্ধান্ত লাগে: কোন ফিচার, কোন TLS/crypto backend, কোন ভার্সন। ভুল হলে প্রথম cargo check-ই ব্যর্থ হয়। ring নেওয়া হয়েছে কারণ ডিফল্ট aws-lc Windows-এ cmake ও nasm চায়। প্রতি point release-এ API ভাঙে, তাই =0.1.60 পিন করা।",when:"cargo check / cargo build / npm run tauri dev এর সময় Cargo এটা পড়ে।",calls:["নতুন crate নামায়: idevice, plist, tokio, serde"],code:`[dependencies]
tauri = { version = "2", features = [] }
tauri-plugin-opener = "2"
serde = { version = "1", features = ["derive"] }
serde_json = "1"
plist = "1"
tokio = { version = "1", features = ["rt", "net", "time", "macros"] }
# ভার্সন পিন করা: এই crate-এ প্রতি point release-এ API ভাঙে
idevice = { version = "=0.1.60", default-features = false, features = ["rustls", "ring", "usbmuxd", "diagnostics_relay"] }`},{n:2,path:"src-tauri/src/device.rs",lang:"rust",side:"Rust",edit:!0,role:"নতুন ফাইল। usbmuxd-তে কানেক্ট করে ফোনের তালিকা আনে, provider বানায়, lockdown থেকে নাম, মডেল (ProductType) ও iOS ভার্সন পড়ে।",why:"আগে ডিভাইস শনাক্ত না হলে ব্যাটারি পড়া যায় না। make_provider() একবার বানালে পরে lockdown ও diagnostics দুটোতেই লাগে; idevice-এর API বদলালে শুধু এখানে ঠিক করবে।",when:"lib.rs-এর পর্যবেক্ষণ থ্রেড প্রতি ২ সেকেন্ডে list_udids() চালায়; React শুরুতে list_devices ডাকে; get_battery-ও find_device ও make_provider ব্যবহার করে।",calls:["usbmuxd: UsbmuxdConnection::default()","lockdown: LockdownClient::connect(&provider)",'React থেকে invoke("list_devices")'],code:`use idevice::{
    lockdown::LockdownClient,
    provider::UsbmuxdProvider,
    usbmuxd::{UsbmuxdAddr, UsbmuxdConnection, UsbmuxdDevice},
    IdeviceService,
};
use serde::Serialize;

#[derive(Serialize, Clone, Debug)]
#[serde(rename_all = "camelCase")]
pub struct DeviceInfo {
    pub udid: String,
    pub name: String,
    pub product_type: String,
    pub ios_version: String,
}

fn err<E: std::fmt::Debug>(e: E) -> String {
    format!("{e:?}")
}

/// প্রতিবার নতুন usbmuxd কানেকশন খোলা হয়, সহজ ও নিরাপদ।
pub async fn connect_mux() -> Result<UsbmuxdConnection, String> {
    UsbmuxdConnection::default().await.map_err(err)
}

/// to_provider-এর আর্গুমেন্ট কোনো ভার্সনে বদলালে শুধু এখানে ঠিক করবেন।
pub fn make_provider(dev: &UsbmuxdDevice) -> Result<UsbmuxdProvider, String> {
    let addr = UsbmuxdAddr::from_env_var().map_err(err)?;
    Ok(dev.to_provider(addr, "iphone-battery"))
}

pub async fn find_device(udid: &str) -> Result<UsbmuxdDevice, String> {
    let mut mux = connect_mux().await?;
    let devs = mux.get_devices().await.map_err(err)?;
    devs.into_iter()
        .find(|d| d.udid == udid)
        .ok_or_else(|| format!("ডিভাইস পাওয়া যায়নি: {udid}"))
}

async fn lockdown_string(lockdown: &mut LockdownClient, key: &str) -> String {
    match lockdown.get_value(Some(key), None).await {
        Ok(v) => v.as_string().unwrap_or_default().to_string(),
        Err(_) => String::new(),
    }
}

async fn read_info(dev: &UsbmuxdDevice) -> Result<DeviceInfo, String> {
    let provider = make_provider(dev)?;
    let mut lockdown = LockdownClient::connect(&provider).await.map_err(err)?;
    Ok(DeviceInfo {
        udid: dev.udid.clone(),
        name: lockdown_string(&mut lockdown, "DeviceName").await,
        product_type: lockdown_string(&mut lockdown, "ProductType").await,
        ios_version: lockdown_string(&mut lockdown, "ProductVersion").await,
    })
}

/// শুধু UDID তালিকা, হালকা: পর্যবেক্ষণ থ্রেড প্রতি ২ সেকেন্ডে এটা চালায়।
pub async fn list_udids() -> Result<Vec<String>, String> {
    let mut mux = connect_mux().await?;
    let devs = mux.get_devices().await.map_err(err)?;
    let mut ids: Vec<String> = devs.iter().map(|d| d.udid.clone()).collect();
    ids.sort();
    Ok(ids)
}

/// Trust না দেওয়া ডিভাইস বাদ যায়, পুরো লিস্ট ফেল করে না।
pub async fn list_all() -> Result<Vec<DeviceInfo>, String> {
    let mut mux = connect_mux().await?;
    let devs = mux.get_devices().await.map_err(err)?;
    let mut out = Vec::new();
    for d in &devs {
        if let Ok(info) = read_info(d).await {
            out.push(info);
        }
    }
    Ok(out)
}

#[tauri::command]
pub async fn list_devices() -> Result<Vec<DeviceInfo>, String> {
    list_all().await
}`},{n:3,path:"src-tauri/src/battery.rs",lang:"rust",side:"Rust",edit:!0,role:"নতুন ফাইল। AppleSmartBattery এন্ট্রি পড়ে সূত্র দিয়ে হেলথ, সাইকেল ব্যবহার, রানটাইম, চার্জ হওয়ার সময় ও অ্যাডাপ্টার পাওয়ার হিসাব করে BatteryReport ফেরত দেয়।",why:"এটাই অ্যাপের মূল কাজ। সব মান Option, কারণ কিছু iOS/মডেলে কিছু key থাকে না; None হলে UI-তে — দেখায়, ক্র্যাশ করে না। rated_cycles() মডেল দেখে ৫০০/১০০০ ধরে, এটা অনুমান, Apple-এর পেজ থেকে মিলিয়ে নিও।",when:'React প্রতি ৫ সেকেন্ডে invoke("get_battery") ডাকলে চলে।',calls:["device::find_device ও make_provider","DiagnosticsRelayClient::connect (এখানেই Trust-এর pairing record লাগে)","ioregistry(...) → AppleSmartBattery plist"],code:`use crate::device::{find_device, make_provider};
use idevice::{services::diagnostics_relay::DiagnosticsRelayClient, IdeviceService};
use plist::{Dictionary, Value};
use serde::Serialize;

#[derive(Serialize, Default)]
#[serde(rename_all = "camelCase")]
pub struct BatteryReport {
    pub design_capacity: Option<i64>,
    pub nominal_capacity: Option<i64>,
    pub full_charge_capacity: Option<i64>,
    pub remaining_capacity: Option<i64>,
    pub charge_percent: Option<i64>,
    pub cycle_count: Option<i64>,
    pub rated_cycles: u32,
    pub amperage: Option<i64>,
    pub is_charging: bool,
    pub health_nominal: Option<f64>, // H_N
    pub health_full: Option<f64>,    // H_F
    pub capacity_diff: Option<i64>,  // ΔC
    pub cycle_usage: Option<f64>,    // CU%
    pub runtime_h: Option<f64>,
    pub time_to_full_h: Option<f64>,
    pub adapter_watts: Option<f64>,
}

// ধারণা-ভিত্তিক: iPhone15,4 ও তার পরের মডেলে ১০০০, আগেরগুলোতে ৫০০।
// Apple-এর অফিসিয়াল পেজ থেকে মিলিয়ে নেবেন।
fn rated_cycles(product_type: &str) -> u32 {
    let nums: Vec<u32> = product_type
        .trim_start_matches("iPhone")
        .split(',')
        .filter_map(|s| s.parse().ok())
        .collect();
    match nums.as_slice() {
        [major, minor] if *major >= 16 || (*major == 15 && *minor >= 4) => 1000,
        _ => 500,
    }
}

// plist যত গভীরেই থাকুক, key খুঁজে বের করে
fn find<'a>(v: &'a Value, key: &str) -> Option<&'a Value> {
    match v {
        Value::Dictionary(d) => d.get(key).or_else(|| d.values().find_map(|x| find(x, key))),
        Value::Array(a) => a.iter().find_map(|x| find(x, key)),
        _ => None,
    }
}

fn int(v: &Value, key: &str) -> Option<i64> {
    match find(v, key)? {
        Value::Integer(i) => i.as_signed().or_else(|| i.as_unsigned().map(|u| u as i64)),
        Value::Real(r) => Some(*r as i64),
        _ => None,
    }
}

fn flag(v: &Value, key: &str) -> bool {
    matches!(find(v, key), Some(Value::Boolean(true)))
}

/// \`idevicediagnostics ioregentry AppleSmartBattery\`-এর সমতুল্য।
/// CLI আর্গুমেন্টটা class না name হিসেবে পাঠায় তা নিশ্চিত নই, তাই দুটোই চেষ্টা করা হয়।
async fn read_battery_dict(client: &mut DiagnosticsRelayClient) -> Result<Dictionary, String> {
    if let Ok(Some(d)) = client.ioregistry(None, None, Some("AppleSmartBattery")).await {
        return Ok(d);
    }
    match client.ioregistry(None, Some("AppleSmartBattery"), None).await {
        Ok(Some(d)) => Ok(d),
        Ok(None) => Err("AppleSmartBattery এন্ট্রি খালি এসেছে".into()),
        Err(e) => Err(format!("{e:?}")),
    }
}

#[tauri::command]
pub async fn get_battery(udid: String, product_type: String) -> Result<BatteryReport, String> {
    let dev = find_device(&udid).await?;
    let provider = make_provider(&dev)?;
    let mut client = DiagnosticsRelayClient::connect(&provider)
        .await
        .map_err(|e| format!("{e:?}"))?;

    let root = Value::Dictionary(read_battery_dict(&mut client).await?);

    let design = int(&root, "DesignCapacity");
    let nominal = int(&root, "NominalChargeCapacity");
    let full = int(&root, "FullChargeCapacity");
    // কিছু মডেলে RemainingCapacity শতাংশ আসে; ১০০ বা কমকে mAh ধরা হয় না
    let remaining = int(&root, "RemainingCapacity").filter(|r| *r > 100);
    let cycles = int(&root, "CycleCount");
    let amp = int(&root, "Amperage");
    let is_charging = flag(&root, "IsCharging");
    let rated = rated_cycles(&product_type);

    // H_N = Nominal / Design × 100
    let health_nominal = nominal
        .zip(design)
        .filter(|(_, d)| *d > 0)
        .map(|(n, d)| n as f64 / d as f64 * 100.0);
    // H_F = FullCharge / Design × 100
    let health_full = full
        .zip(design)
        .filter(|(_, d)| *d > 0)
        .map(|(f, d)| f as f64 / d as f64 * 100.0);
    // ΔC = FullCharge − Nominal
    let capacity_diff = full.zip(nominal).map(|(f, n)| f - n);
    // CU% = Cycle / Rated × 100
    let cycle_usage = cycles.map(|c| c as f64 / rated as f64 * 100.0);

    // Runtime = Remaining / |I| (শুধু ডিসচার্জের সময়)
    let runtime_h = match (remaining, amp) {
        (Some(r), Some(i)) if i < 0 => Some(r as f64 / i.abs() as f64),
        _ => None,
    };
    // T_full = (N − R) / I_charge (শুধু চার্জের সময়)
    let time_to_full_h = match (nominal, remaining, amp) {
        (Some(n), Some(r), Some(i)) if is_charging && i > 0 && n > r => {
            Some((n - r) as f64 / i as f64)
        }
        _ => None,
    };
    // P (W) = AdapterVoltage(mV) × Current(mA) / 10^6
    let adapter = find(&root, "AdapterDetails").unwrap_or(&root);
    let adapter_watts = int(adapter, "AdapterVoltage")
        .zip(int(adapter, "Current"))
        .map(|(v, i)| v as f64 * i as f64 / 1_000_000.0);

    Ok(BatteryReport {
        design_capacity: design,
        nominal_capacity: nominal,
        full_charge_capacity: full,
        remaining_capacity: remaining,
        charge_percent: int(&root, "CurrentCapacity"),
        cycle_count: cycles,
        rated_cycles: rated,
        amperage: amp,
        is_charging,
        health_nominal,
        health_full,
        capacity_diff,
        cycle_usage,
        runtime_h,
        time_to_full_h,
        adapter_watts,
    })
}`},{n:4,path:"src-tauri/src/lib.rs",lang:"rust",side:"Rust",edit:!0,role:"স্ক্যাফোল্ডের ফাইল বদলাও। mod যোগ, দুটো কমান্ড রেজিস্টার (generate_handler!), আর ব্যাকগ্রাউন্ড থ্রেডে প্রতি ২ সেকেন্ডে ফোন লাগানো/খোলা দেখে devices-changed ইভেন্ট পাঠানো।",why:'React-এর invoke("...")-এর নাম এখানকার generate_handler! তালিকার সাথে হুবহু মিলতে হয়; সবচেয়ে বেশি ভুল এখানেই হয়। main.rs ছোঁবে না।',when:"অ্যাপ চালু হলে setup() একবার চলে ও থ্রেড শুরু করে; থ্রেড অ্যাপ বন্ধ না হওয়া পর্যন্ত লুপে চলে।",calls:["device::list_udids() হালকা, প্রতি চক্রে","device::list_all() ভারী, শুধু তালিকা বদলালে বা আগের তথ্য অসম্পূর্ণ থাকলে",'handle.emit("devices-changed", &list) → React'],code:`mod battery;
mod device;

use std::time::Duration;
use tauri::Emitter;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            let handle = app.handle().clone();
            tauri::async_runtime::spawn(async move {
                let mut last: Vec<String> = Vec::new();
                // সব ডিভাইসের তথ্য পড়া গেছে কিনা (Trust না দিলে অসম্পূর্ণ থাকে)
                let mut complete = true;
                loop {
                    if let Ok(ids) = device::list_udids().await {
                        if ids != last || !complete {
                            if let Ok(list) = device::list_all().await {
                                complete = list.len() == ids.len();
                                let _ = handle.emit("devices-changed", &list);
                            }
                            last = ids;
                        }
                    }
                    tokio::time::sleep(Duration::from_secs(2)).await;
                }
            });
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            device::list_devices,
            battery::get_battery
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}`},{n:5,path:"src-tauri/capabilities/default.json",lang:"json",side:"Config",edit:!1,role:"স্ক্যাফোল্ডেরটাই রাখো, বদলানো লাগে না। এটা শুধু বোঝার জন্য সাধারণ উদাহরণ; তোমার ফাইল আলাদা হলে তোমারটাই রাখো।",why:"idevice সরাসরি Rust থেকে চলে, তাই shell বা অন্য প্লাগইনের অনুমতি লাগে না।",when:"Build/run এর সময় Tauri পড়ে; অনুমতি না থাকলে JS থেকে plugin বা API ব্লক হয়।",calls:[],code:`{
  "$schema": "../gen/schemas/desktop-schema.json",
  "identifier": "default",
  "windows": ["main"],
  "permissions": ["core:default", "opener:default"]
}`},{n:6,path:"src/utils/format.js",lang:"js",side:"React",edit:!0,role:"নতুন ফাইল। শতাংশ ও সময়ের ফরম্যাট, আর Trust-না-দেওয়া এররকে বাংলা বার্তায় বদলানো।",why:"UI-তে null হলে — দেখানো ও raw Rust এরর ফেলে না রেখে বোঝার মতো বাংলা বার্তা দেখানো এক জায়গায় রাখলে কম্পোনেন্ট পরিষ্কার থাকে।",when:"BatteryCard রেন্ডারের সময় pct(), hm(), friendlyError() ডাকে।",calls:[],code:`export const pct = (v) => (v == null ? "—" : \`\${v.toFixed(2)}%\`);

export const hm = (h) => {
  if (h == null) return "—";
  const m = Math.round(h * 60);
  return \`\${Math.floor(m / 60)} h \${m % 60} min\`;
};

export const friendlyError = (e) =>
  String(e).includes("PairRecordData")
    ? "ফোনে Trust দেওয়া নেই। ফোন আনলক করে 'Trust This Computer' চাপুন।"
    : String(e);`},{n:7,path:"src/hooks/useDevices.js",lang:"js",side:"React ↔ Rust",edit:!0,role:"নতুন ফাইল। শুরুতে একবার list_devices ডাকে, তারপর Rust-এর devices-changed ইভেন্ট শোনে। React-এ পলিং লাগে না।",why:"পর্যবেক্ষণ Rust-এ চলে, তাই ফোন লাগালে/খুললে Rust নিজে জানায়। listen() একটা Promise দেয়; কম্পোনেন্ট সরলে unlisten.then(fn => fn()) না চালালে শ্রোতা জমে।",when:"App কম্পোনেন্ট মাউন্ট হলে একবার।",calls:['invoke("list_devices")','listen("devices-changed")'],code:`import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";

export default function useDevices() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    invoke("list_devices").then(setDevices).catch(() => setDevices([]));
    const unlisten = listen("devices-changed", (e) => setDevices(e.payload));
    return () => { unlisten.then((fn) => fn()); };
  }, []);

  return devices;
}`},{n:8,path:"src/hooks/useBattery.js",lang:"js",side:"React ↔ Rust",edit:!0,role:'নতুন ফাইল। নির্দিষ্ট ডিভাইসের জন্য প্রতি ৫ সেকেন্ডে invoke("get_battery") ডাকে।',why:"alive ফ্ল্যাগ কম্পোনেন্ট সরে গেলে পুরনো রেসপন্স ফেলে দেয়। Rust-এর Err এখানে catch-এ আসে।",when:"BatteryCard মাউন্ট থাকা পর্যন্ত প্রতি ৫ সেকেন্ডে।",calls:['invoke("get_battery", { udid, productType })'],code:`import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";

export default function useBattery(udid, productType, intervalMs = 5000) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!udid) return;
    let alive = true;

    const tick = async () => {
      try {
        const r = await invoke("get_battery", { udid, productType });
        if (alive) { setData(r); setError(null); }
      } catch (e) {
        if (alive) setError(e);
      }
    };

    tick();
    const id = setInterval(tick, intervalMs);
    return () => { alive = false; clearInterval(id); };
  }, [udid, productType, intervalMs]);

  return { data, error };
}`},{n:9,path:"src/components/BatteryCard.jsx",lang:"jsx",side:"React",edit:!0,role:"নতুন ফাইল। ডিভাইস কার্ড, রঙিন হেলথ বার (৮০%+ সবুজ, ৭০–৮০% হলুদ, নিচে লাল) ও ফলাফলের টেবিল।",why:"রঙের সীমা আমার বেছে নেওয়া, Apple-এর মানদণ্ড নয়; নিজের পছন্দে বদলাতে পারো। JSON-এর camelCase নাম (healthNominal, timeToFullH) এখানেই ব্যবহার হয়।",when:"useDevices থেকে প্রতিটা ডিভাইসের জন্য একটা কার্ড রেন্ডার হয়।",calls:["useBattery(device.udid, device.productType)"],code:`import useBattery from "../hooks/useBattery";
import { pct, hm, friendlyError } from "../utils/format";

export default function BatteryCard({ device }) {
  const { data: b, error } = useBattery(device.udid, device.productType);

  if (error && !b) return <div className="card err">{friendlyError(error)}</div>;
  if (!b) return <div className="card">লোড হচ্ছে…</div>;

  const health = b.healthNominal ?? b.healthFull;
  const barClass = health == null ? "" : health >= 80 ? "good" : health >= 70 ? "warn" : "bad";

  const rows = [
    ["Battery Health (Nominal)", pct(b.healthNominal)],
    ["Health Estimate (Full Charge)", pct(b.healthFull)],
    ["Capacity Difference", b.capacityDiff == null ? "—" : \`\${b.capacityDiff} mAh\`],
    ["Design / Nominal", \`\${b.designCapacity ?? "—"} / \${b.nominalCapacity ?? "—"} mAh\`],
    ["Cycle Usage", \`\${b.cycleCount ?? "—"} / \${b.ratedCycles} (\${pct(b.cycleUsage)})\`],
    ["Runtime", hm(b.runtimeH)],
    ["Time to Full", hm(b.timeToFullH)],
    ["Adapter Power", b.adapterWatts == null ? "—" : \`\${b.adapterWatts.toFixed(1)} W\`],
  ];

  return (
    <div className="card">
      <div className="head">
        <div>
          <h3>{device.name}</h3>
          <small>{device.productType} · iOS {device.iosVersion}</small>
        </div>
        <div className="charge">
          {b.chargePercent ?? "—"}% {b.isCharging ? "⚡" : ""}
        </div>
      </div>

      <div className="bar">
        <div className={\`fill \${barClass}\`} style={{ width: \`\${Math.min(health ?? 0, 100)}%\` }} />
      </div>
      <p className="big">{pct(health)} <small>Battery Health</small></p>

      <table>
        <tbody>
          {rows.map(([k, v]) => (
            <tr key={k}>
              <td>{k}</td>
              <td><b>{v}</b></td>
            </tr>
          ))}
        </tbody>
      </table>

      {error && <p className="err">{friendlyError(error)}</p>}
    </div>
  );
}`},{n:10,path:"src/App.jsx",lang:"jsx",side:"React",edit:!0,role:"স্ক্যাফোল্ডের App.jsx পুরো বদলাও। ডিভাইস না থাকলে বাংলা হিন্ট, থাকলে প্রতিটার জন্য BatteryCard।",why:"পেজ কাঠামো এক জায়গায়, বাকি যুক্তি hook ও component-এ।",when:"main.jsx এটাকে render করে।",calls:["useDevices()","BatteryCard"],code:`import useDevices from "./hooks/useDevices";
import BatteryCard from "./components/BatteryCard";
import "./App.css";

export default function App() {
  const devices = useDevices();

  return (
    <main>
      <h1>iPhone Battery Health</h1>
      {devices.length === 0 && (
        <p className="hint">
          কোনো ডিভাইস পাওয়া যায়নি। USB ক্যাবল লাগান, ফোন আনলক করে "Trust" দিন।
          Windows-এ Apple Mobile Device Service, Linux-এ usbmuxd চালু থাকতে হবে।
        </p>
      )}
      {devices.map((d) => (
        <BatteryCard key={d.udid} device={d} />
      ))}
    </main>
  );
}`},{n:11,path:"src/App.css",lang:"css",side:"React",edit:!0,role:"স্ক্যাফোল্ডের App.css পুরো বদলাও। আলো ও অন্ধকার দুই থিমেই চলে (prefers-color-scheme)।",why:"কোনো নতুন npm প্যাকেজ লাগে না; @tauri-apps/api স্ক্যাফোল্ডেই আছে।",when:'App.jsx এ import "./App.css" থাকায় লোড হয়।',calls:[],code:`:root { font-family: system-ui, sans-serif; color: #1b1f24; background: #f6f7f9; }
body { margin: 0; }
main { max-width: 640px; margin: 0 auto; padding: 24px; }
h1 { margin-top: 0; }
.hint { color: #5b6470; }

.card { background: #fff; border: 1px solid #dde1e6; border-radius: 12px; padding: 18px; margin-top: 16px; }
.card h3 { margin: 0; }
.head { display: flex; justify-content: space-between; align-items: center; }
.charge { font-size: 1.4rem; font-weight: 700; }

.bar { height: 10px; background: #e8ebef; border-radius: 6px; overflow: hidden; margin-top: 14px; }
.fill { height: 100%; background: #9aa3ad; transition: width .4s; }
.fill.good { background: #2e9e5b; }
.fill.warn { background: #e0a100; }
.fill.bad  { background: #d64545; }

.big { font-size: 1.8rem; font-weight: 700; margin: 8px 0 12px; }
.big small { font-size: .9rem; font-weight: 400; color: #5b6470; }

table { width: 100%; border-collapse: collapse; }
td { padding: 6px 0; border-top: 1px solid #eef0f3; }
td:last-child { text-align: right; }

.err { color: #b3261e; }

@media (prefers-color-scheme: dark) {
  :root { color: #e6e9ed; background: #14171a; }
  .card { background: #1d2126; border-color: #2d333a; }
  .bar { background: #2d333a; }
  td { border-color: #2a3036; }
}`},{n:12,path:"src-tauri/tauri.conf.json",lang:"json",side:"Config",edit:!0,role:"বিল্ডের আগে productName, identifier ও window-এর মাপ দেখে নাও। নিচেরটা শুধু বদলানোর ফিল্ডগুলোর অংশ, পুরো ফাইল নয়।",why:"ইনস্টলারের নাম ও আইকন এখান থেকে আসে। নিজের আইকন চাইলে: npm run tauri icon path/to/your-icon.png (1024×1024 PNG)।",when:"npm run tauri dev ও build দুই সময়ই পড়া হয়।",calls:["beforeDevCommand এ Vite চালু করে"],code:`{
  "productName": "iPhone Battery Health",
  "version": "0.1.0",
  "identifier": "com.mugdho.iphonebattery",
  "app": {
    "windows": [
      { "title": "iPhone Battery Health", "width": 760, "height": 820 }
    ]
  },
  "bundle": {
    "active": true,
    "targets": "all",
    "icon": [
      "icons/32x32.png",
      "icons/128x128.png",
      "icons/128x128@2x.png",
      "icons/icon.icns",
      "icons/icon.ico"
    ]
  }
}`},{n:13,path:".github/workflows/build.yml",lang:"yaml",side:"Config",edit:!0,role:"নতুন ফাইল। এক workflow-তে Windows (MSI, NSIS) ও Linux (.deb, .AppImage) ইনস্টলার বানায়।",why:"প্রতিটা OS-এর ইনস্টলার সেই OS-এই বানাতে হয়। ubuntu-22.04 নেওয়া হয়েছে কারণ পুরনো Ubuntu-তে বানালে ইনস্টলার বেশি ডিস্ট্রোতে চলে। npm ci চলতে package-lock.json কমিট করা থাকতে হবে।",when:"GitHub → Actions → Build installers → Run workflow, অথবা v* ট্যাগ push করলে।",calls:["Artifacts: run-এর Summary পেজের একদম নিচে"],code:`name: Build installers

on:
  workflow_dispatch:
  push:
    tags: ["v*"]

jobs:
  build:
    strategy:
      fail-fast: false
      matrix:
        os: [windows-latest, ubuntu-22.04]
    runs-on: \${{ matrix.os }}

    steps:
      - uses: actions/checkout@v4

      - name: Linux dependencies
        if: matrix.os == 'ubuntu-22.04'
        run: |
          sudo apt-get update
          sudo apt-get install -y libwebkit2gtk-4.1-dev build-essential curl wget file \\
            libssl-dev libxdo-dev libayatana-appindicator3-dev librsvg2-dev

      - uses: actions/setup-node@v4
        with:
          node-version: lts/*
          cache: npm

      - uses: dtolnay/rust-toolchain@stable

      - uses: Swatinem/rust-cache@v2
        with:
          workspaces: "./src-tauri -> target"

      - run: npm ci

      - run: npm run tauri build

      - uses: actions/upload-artifact@v4
        with:
          name: installer-\${{ matrix.os }}
          path: |
            src-tauri/target/release/bundle/msi/*.msi
            src-tauri/target/release/bundle/nsis/*.exe
            src-tauri/target/release/bundle/deb/*.deb
            src-tauri/target/release/bundle/appimage/*.AppImage`}],connection:{explain:['invoke("get_battery", { udid, productType }) ↔ Rust এর get_battery(udid: String, product_type: String): command এর নাম হুবহু এক, আর productType ↔ product_type Tauri নিজে রূপান্তর করে।',"generate_handler![device::list_devices, battery::get_battery] এ নাম না থাকলে invoke কাজ করে না; কম্পাইল এরর আসে না, শুধু রানটাইমে ব্যর্থ হয়।",'Rust struct এ #[serde(rename_all = "camelCase")] থাকায় JSON এ healthNominal, timeToFullH আসে; তাই JS এ b.healthNominal লিখতে হয়।',"Err(String) JS এ rejected Promise, তাই invoke সবসময় try/catch এ। Trust ছাড়া PairRecordData এরর friendlyError() বাংলা বার্তায় বদলায়।","devices-changed: Rust emit করে, React listen করে। listen() এর ফল (unlisten) দিয়ে কম্পোনেন্ট সরলে শ্রোতা বন্ধ না করলে একই ইভেন্টে একাধিক শ্রোতা জমে।"],rustTitle:"Rust (battery.rs ও lib.rs)",rust:`#[tauri::command]
pub async fn get_battery(udid: String, product_type: String) -> Result<BatteryReport, String> { /* ... */ }

// BatteryReport এ #[serde(rename_all = "camelCase")]
.invoke_handler(tauri::generate_handler![device::list_devices, battery::get_battery])

// Rust → React: নিজে থেকে জানানো
handle.emit("devices-changed", &list)`,reactTitle:"React (hooks)",react:`// React → Rust (productType ↔ product_type নিজে রূপান্তর হয়)
const b = await invoke("get_battery", { udid, productType });
// b.healthNominal, b.timeToFullH  (camelCase)

// Rust → React
const unlisten = listen("devices-changed", (e) => setDevices(e.payload));
return () => { unlisten.then((fn) => fn()); };`},example:{title:"পূর্ণ উদাহরণ: ফোন লাগানো থেকে কার্ড পর্যন্ত",flow:["১) ফোন আনলক করে USB-তে লাগাও, ফোনে Trust চাপো ও পাসকোড দাও","২) lib.rs এর থ্রেড ২ সেকেন্ডের চক্রে list_udids() চালিয়ে নতুন UDID দেখে",'৩) list_all() ফোনের নাম, মডেল (iPhone13,2) ও iOS ভার্সন পড়ে এবং emit("devices-changed") পাঠায়',"৪) useDevices এর listen ইভেন্ট ধরে setDevices করে, App প্রতিটা ডিভাইসের জন্য BatteryCard রেন্ডার করে",'৫) useBattery প্রতি ৫ সেকেন্ডে invoke("get_battery", { udid, productType }) ডাকে',"৬) Rust diagnostics_relay দিয়ে AppleSmartBattery পড়ে সূত্র চালায়: যেমন 2322 ÷ 2798 × 100 ≈ 83.0%, 2369 ÷ 2798 × 100 ≈ 84.67%, (2322 − 1313) ÷ 450 ≈ 2.24 ঘণ্টা (এগুলো উদাহরণ সংখ্যা)","৭) BatteryReport JSON হয়ে ফেরে, কার্ডে রঙিন হেলথ বার ও টেবিল দেখায়; ক্যাবল খুলে আবার লাগালে ২-৪ সেকেন্ডে কার্ড ফিরে আসে"],runCommands:["npm run tauri dev","npm run tauri build   # Windows: src-tauri/target/release/bundle/msi, nsis · Linux: deb, appimage","# দুই OS একসাথে: GitHub repo → Actions → Build installers → Run workflow"],output:"একটা ডেস্কটপ উইন্ডোতে iPhone এর কার্ড। Apple এর Maximum Capacity এর সাথে হুবহু না-ও মিলতে পারে, কয়েক শতাংশ ফারাক স্বাভাবিক ধরো ও নিজের ফোনে মিলিয়ে দেখো।"},troubleshoot:[["unresolved import ...PairingFile (cargo check)",'idevice এর features এ "rustls" যোগ করো'],["No crypto backend was selected!",'features এ "ring" যোগ করো (aws-lc Windows এ cmake/nasm চায়)'],["E0432 LockdowndClient","নামটা LockdownClient (d ছাড়া)"],["E0061 get_value takes 2 arguments","get_value(Some(key), None) লেখো"],["Cannot read properties of undefined (reading 'invoke')","ব্রাউজারে নয়; npm run tauri dev এর নেটিভ উইন্ডোতে চালাও"],["missing PairRecordData in pair record response",'ফোনে "Trust This Computer" চাপো ও পাসকোড দাও'],["Blocking waiting for file lock on build directory","আরেকটা cargo (চলমান tauri dev বা rust-analyzer) শেষ হওয়া পর্যন্ত অপেক্ষা করো"],["Linux এ ডিভাইস দেখা যায় না","sudo systemctl restart usbmuxd, তারপর ক্যাবল খুলে আবার লাগাও"],["Trust প্রম্পট আসে না","iPhone → Settings → General → Transfer or Reset iPhone → Reset → Reset Location & Privacy"],["Actions এ Artifacts পাচ্ছি না","শেষ হওয়া run এর Summary পেজের একদম নিচে দেখো"]],quiz:[{q:"idevice এ default-features = false দিলে rustls এর সাথে আর কী আলাদা করে দিতে হয়?",options:["একটা crypto backend ফিচার (ring)","tokio এর rt-multi-thread","serde এর derive"],answer:0},{q:"Rust এর product_type প্যারামিটার JS থেকে কী নামে পাঠাতে হয়?",options:["product_type","productType","ProductType"],answer:1},{q:"Trust না দিলে ব্যাটারির ডেটা কেন আসে না?",options:["diagnostics_relay সুরক্ষিত সেশন চায়, তাই Trust করা pairing record লাগে","USB ক্যাবলে সমস্যা","Node এর ভার্সন পুরনো"],answer:0},{q:"Windows এ iPhone এর সাথে USB যোগাযোগের জন্য কোনটা চালু থাকতে হয়?",options:["Apple Mobile Device Service","WSL","Docker"],answer:0},{q:"idevice কেন =0.1.60 এ পিন করা হয়েছে?",options:["0.1.x এ প্রতি point release এ API ভাঙে","এটা সবচেয়ে দ্রুত কম্পাইল হয়","Windows এ DLL লাগে"],answer:0},{q:"Battery Health (Nominal) এর সূত্র কোনটা?",options:["NominalChargeCapacity ÷ DesignCapacity × 100","RemainingCapacity ÷ FullChargeCapacity × 100","CycleCount ÷ DesignCapacity × 100"],answer:0}]},dn=[Gv,Yv,Xv,Zv,ey,ty],ny=e=>dn.find(t=>t.slug===e);function ry(){const{count:e}=ri(),t=dn.reduce((s,i)=>s+i.files.length,0),n=e("file:"),r=t?Math.round(n/t*100):0,a=({isActive:s})=>s?"active":"";return l.jsxs("div",{className:"navbar bg-base-200 sticky top-0 z-30 border-b border-base-300",children:[l.jsx("div",{className:"flex-1",children:l.jsx(ut,{to:"/",className:"btn btn-ghost text-lg",children:"🦀 Tauri × React শিখি"})}),l.jsxs("ul",{className:"menu menu-horizontal px-1 gap-1",children:[l.jsx("li",{children:l.jsx(Ka,{to:"/start",className:a,children:"০. শুরু"})}),l.jsx("li",{children:l.jsx(Ka,{to:"/",end:!0,className:a,children:"পাইপলাইন"})}),l.jsx("li",{children:l.jsx(Ka,{to:"/projects",className:a,children:"প্রজেক্ট"})}),l.jsx("li",{children:l.jsx(Ka,{to:"/lab",className:a,children:"সিকিউরিটি ল্যাব"})})]}),l.jsxs("div",{className:"hidden md:flex items-center gap-2 pl-3",title:"ফাইল-ধাপ সম্পন্ন",children:[l.jsx("progress",{className:"progress progress-success w-28",value:r,max:"100"}),l.jsxs("span",{className:"text-xs opacity-70",children:[r,"%"]})]})]})}function ay(){return l.jsx("footer",{className:"footer footer-center p-4 bg-base-200 text-base-content/70 text-sm",children:l.jsx("p",{children:"Tauri + React + Rust ইন্টারেক্টিভ টিউটোরিয়াল — নিজে হাতে করে শেখো 🚀"})})}function sy(){return l.jsxs("div",{className:"min-h-screen flex flex-col",children:[l.jsx(ry,{}),l.jsx("main",{className:"flex-1 max-w-6xl w-full mx-auto px-4 py-6",children:l.jsx(Rv,{})}),l.jsx(ay,{})]})}const iy={React:"badge-info",Tauri:"badge-secondary",Rust:"badge-warning",DB:"badge-success"};function ly(e){const t=[{icon:"🖱️",label:"বাটন ক্লিক",tag:"React",desc:"ব্যবহারকারী 12 ÷ "+(e?"0":"4")+" লিখে = চাপে। React state এ firstNum, operator, display জমা আছে।",code:"handleEquals()"},{icon:"📞",label:"invoke()",tag:"React",desc:"React Rust কে ডাকে। command এর নাম ও আর্গুমেন্ট JSON হয়ে যায়।",code:'invoke("calculate", { a: 12, operator: "/", b: '+(e?"0":"4")+" })"},{icon:"🌉",label:"Tauri IPC Bridge",tag:"Tauri",desc:"Bridge নাম দেখে generate_handler! এর তালিকা থেকে সঠিক Rust function খুঁজে বের করে।",code:"generate_handler![calculate]"},{icon:"🦀",label:"Rust calculate()",tag:"Rust",desc:"match operator.as_str() দিয়ে সঠিক শাখা চলে।",code:'match operator.as_str() { "/" => ... }'}];return e?(t.push({icon:"⚠️",label:"Err(...)",tag:"Rust",err:!0,desc:"b == 0.0 তাই Rust Err পাঠায়।",code:'Err("শূন্য দিয়ে ভাগ করা যায় না!")'}),t.push({icon:"🪤",label:"catch(error)",tag:"React",err:!0,desc:"Rust এর Err React এ catch ব্লকে আসে; স্ক্রিনে বার্তা দেখায়।",code:"setDisplay(String(error))"})):(t.push({icon:"✅",label:"Ok(3.0)",tag:"Rust",desc:"a / b = 3 হিসাব হলো, Ok(3.0) ফেরত।",code:"Ok(a / b)"}),t.push({icon:"🖥️",label:"স্ক্রিন আপডেট",tag:"React",desc:"await এর result এসেছে, setDisplay দিয়ে স্ক্রিনে 3 দেখায়।",code:"setDisplay(String(result))"})),t}function oy(e){const t=[{icon:"⌨️",label:"ইমেইল/পাসওয়ার্ড",tag:"React",desc:"ফর্ম submit হলো। পাসওয়ার্ড plain text এ শুধু এই মুহূর্তে মেমোরিতে থাকে।",code:'invoke("login", { email, password })'},{icon:"🚦",label:"Rate limit",tag:"Rust",desc:"এই ইমেইলে ১ মিনিটে ৫ বারের বেশি চেষ্টা হলে ঢোকার আগেই আটকে দেয়।",code:"rate_limit::check(&state.attempts, &email, 5, 60s)"},{icon:"🗄️",label:"ইউজার খোঁজা",tag:"DB",desc:"MySQL/MongoDB থেকে ইমেইল দিয়ে user ও তার password_hash আনা হয়।",code:"SELECT id, password_hash ... WHERE email = ?"},{icon:"🔐",label:"argon2 যাচাই",tag:"Rust",desc:"ইনপুট পাসওয়ার্ড একই salt ও cost দিয়ে hash করে DB এর hash এর সাথে মেলানো হয়।",code:"Argon2::default().verify_password(...)"}];return e&&(t.push({icon:"🎫",label:"temp token (৫ মি)",tag:"Rust",desc:"পাসওয়ার্ড ঠিক, কিন্তু 2FA চালু। শুধু 2fa_pending ধরনের ছোট token দেওয়া হয়, এটা দিয়ে API চলে না।",code:'make_token(id, "2fa_pending", 300)'}),t.push({icon:"📱",label:"TOTP কোড",tag:"React",desc:"ব্যবহারকারী Authenticator অ্যাপের ৬ সংখ্যার কোড দেয়।",code:'invoke("verify_2fa", { tempToken, code })'}),t.push({icon:"🧮",label:"TOTP যাচাই",tag:"Rust",desc:"secret + বর্তমান ৩০ সেকেন্ডের ধাপ দিয়ে কোড হিসাব করে মেলায়।",code:"totp::verify(&secret, &email, &code)"})),t.push({icon:"🪙",label:"Token জোড়া তৈরি",tag:"Rust",desc:"access (১৫ মি) ও refresh (৭ দিন) তৈরি। refresh এর SHA-256 hash DB তে যায়।",code:"make_token(.., ACCESS_TTL) + make_token(.., REFRESH_TTL)"}),t.push({icon:"🧠",label:"refresh → Rust memory",tag:"Rust",desc:"আসল refresh token JS এ পাঠানো হয় না, AppState এ থাকে। তাই XSS দিয়ে চুরি করা যায় না।",code:"*state.refresh_token.lock() = Some(refresh)"}),t.push({icon:"🏠",label:"access → React memory",tag:"React",desc:"শুধু access token JS এর একটা ভ্যারিয়েবলে (localStorage এ নয়)। লগইন সম্পন্ন।",code:"setAccessToken(res.access_token)"}),t}function uy(e,t){const n=[{icon:"📋",label:"Tasks লোড",tag:"React",desc:"Dashboard খুলতেই secureInvoke দিয়ে list_tasks ডাকা হয়।",code:'secureInvoke("list_tasks")'},{icon:"🏷️",label:"access token জুড়ে",tag:"React",desc:"secureInvoke মেমোরি থেকে access token নিয়ে আর্গুমেন্টে জুড়ে দেয় (Rust এ access_token)।",code:"invoke(cmd, { ...args, accessToken })"},{icon:"🌉",label:"IPC Bridge",tag:"Tauri",desc:"JSON আকারে Rust এ পৌঁছায়।",code:"list_tasks(state, access_token)"},{icon:"🔎",label:"JWT যাচাই",tag:"Rust",desc:"signature ও মেয়াদ (exp) ও kind=access যাচাই হয়।",code:'verify_token(&token, "access", &secret)'}];return e&&(n.push({icon:"⏰",label:"token expired",tag:"Rust",err:!0,desc:'access token এর ১৫ মিনিট শেষ। Rust Err("token expired") ফেরত দেয়।',code:'Err("token expired")'}),n.push({icon:"🪤",label:"secureInvoke ধরে ফেলে",tag:"React",err:!0,desc:"catch এ বার্তাটা দেখে ইউজারকে না জানিয়ে refresh শুরু করে।",code:'if (String(err).includes("token expired")) ...'}),n.push({icon:"♻️",label:"refresh_session",tag:"Rust",desc:"Rust memory র refresh token যাচাই → DB তে বৈধ কিনা → পুরনো বাতিল (rotation) → নতুন জোড়া।",code:"UPDATE refresh_tokens SET revoked = 1 ..."}),n.push({icon:"🔁",label:"আবার চেষ্টা",tag:"React",desc:"নতুন access token দিয়ে একই কল আবার। ইউজার কিছুই টের পায় না।",code:'invoke("list_tasks", { accessToken: newToken })'}),n.push({icon:"🔎",label:"JWT যাচাই ✓",tag:"Rust",desc:"এবার token বৈধ।",code:"claims.sub → user id"})),n.push({icon:"⚡",label:"Cache দেখা",tag:"Rust",desc:t?"key tasks:<uid> cache এ আছে (HIT), DB ছোঁয়া লাগবে না।":"cache এ নেই (MISS), DB তে যেতে হবে।",code:'state.cache.get("tasks:7")'}),t||n.push({icon:"🗄️",label:"DB query",tag:"DB",desc:"ডেটাবেস থেকে tasks আনা হয়, তারপর ৬০ সেকেন্ডের জন্য cache এ রাখা হয়।",code:"SELECT ... FROM tasks WHERE user_id = ?"}),n.push({icon:"📦",label:"Response",tag:"Rust",desc:"TasksResponse { from_cache, tasks } JSON হয়ে React এ ফেরে।",code:"Ok(TasksResponse { from_cache, tasks })"}),n.push({icon:"🖥️",label:"UI আপডেট",tag:"React",desc:"setTasks ও ব্যাজ ("+(t?"cache HIT":"cache MISS")+") দেখায়।",code:"setTasks(res.tasks)"}),n}function cy(){const[e,t]=_.useState("calc"),[n,r]=_.useState(!1),[a,s]=_.useState(!0),[i,u]=_.useState(!1),[o,c]=_.useState(!1),[h,f]=_.useState(0),[p,v]=_.useState(!1),x=_.useMemo(()=>e==="calc"?ly(n):e==="login"?oy(a):uy(i,o),[e,n,a,i,o]);_.useEffect(()=>{f(0)},[e,n,a,i,o]),_.useEffect(()=>{if(!p)return;const m=setInterval(()=>{f(d=>d>=x.length-1?(v(!1),d):d+1)},1500);return()=>clearInterval(m)},[p,x.length]);const w=x[h],E=[["calc","🧮 Calculator"],["login","🔐 Login (argon2 + 2FA + JWT)"],["api","📡 সুরক্ষিত API (refresh + cache)"]];return l.jsx("div",{className:"card bg-base-200 border border-base-300",children:l.jsxs("div",{className:"card-body",children:[l.jsx("div",{role:"tablist",className:"tabs tabs-boxed flex-wrap",children:E.map(([m,d])=>l.jsx("button",{role:"tab",className:"tab "+(e===m?"tab-active":""),onClick:()=>{t(m),v(!1)},children:d},m))}),l.jsxs("div",{className:"flex flex-wrap gap-4 text-sm",children:[e==="calc"&&l.jsxs("label",{className:"label cursor-pointer gap-2",children:[l.jsx("span",{children:"শূন্য দিয়ে ভাগ"}),l.jsx("input",{type:"checkbox",className:"toggle toggle-error toggle-sm",checked:n,onChange:m=>r(m.target.checked)})]}),e==="login"&&l.jsxs("label",{className:"label cursor-pointer gap-2",children:[l.jsx("span",{children:"2FA চালু"}),l.jsx("input",{type:"checkbox",className:"toggle toggle-info toggle-sm",checked:a,onChange:m=>s(m.target.checked)})]}),e==="api"&&l.jsxs(l.Fragment,{children:[l.jsxs("label",{className:"label cursor-pointer gap-2",children:[l.jsx("span",{children:"access token এর মেয়াদ শেষ"}),l.jsx("input",{type:"checkbox",className:"toggle toggle-warning toggle-sm",checked:i,onChange:m=>u(m.target.checked)})]}),l.jsxs("label",{className:"label cursor-pointer gap-2",children:[l.jsx("span",{children:"cache HIT"}),l.jsx("input",{type:"checkbox",className:"toggle toggle-success toggle-sm",checked:o,onChange:m=>c(m.target.checked)})]})]})]}),l.jsx("div",{className:"flex flex-wrap items-center gap-2 py-2",children:x.map((m,d)=>{const g=d===h?"node-active":d<h?m.err?"node-err":"node-done":"";return l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("button",{onClick:()=>{f(d),v(!1)},className:"w-24 h-24 rounded-xl border-2 border-base-300 bg-base-100 flex flex-col items-center justify-center text-center p-1 transition "+g+(d>h?" opacity-50":""),children:[l.jsx("span",{className:"text-2xl",children:m.icon}),l.jsx("span",{className:"text-[11px] leading-tight mt-1",children:m.label})]}),d<x.length-1&&l.jsx("span",{className:d<h?"text-success":"opacity-30",children:"➜"})]},d)})}),l.jsxs("div",{className:"bg-base-100 rounded-lg p-4 border border-base-300",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx("span",{className:"badge "+iy[w.tag],children:w.tag}),l.jsxs("b",{children:["ধাপ ",h+1,"/",x.length,": ",w.label]})]}),l.jsx("p",{className:"text-sm opacity-90",children:w.desc}),l.jsx("code",{className:"block mt-2 text-xs bg-neutral text-neutral-content rounded p-2 overflow-x-auto",children:w.code})]}),l.jsxs("div",{className:"flex gap-2 justify-center",children:[l.jsx("button",{className:"btn btn-sm",onClick:()=>{f(Math.max(0,h-1)),v(!1)},children:"◀ আগে"}),l.jsx("button",{className:"btn btn-sm btn-primary",onClick:()=>{h>=x.length-1&&f(0),v(m=>!m)},children:p?"⏸ থামাও":"▶ চালাও"}),l.jsx("button",{className:"btn btn-sm",onClick:()=>{f(Math.min(x.length-1,h+1)),v(!1)},children:"পরে ▶"})]})]})})}function dy(){return l.jsxs("div",{className:"space-y-8",children:[l.jsxs("section",{className:"text-center space-y-2",children:[l.jsx("h1",{className:"text-3xl md:text-4xl font-bold",children:"Tauri + React + Rust, হাতে-কলমে"}),l.jsx("p",{className:"opacity-80 max-w-2xl mx-auto",children:"প্রথমে দেখো একটা ক্লিক কীভাবে React থেকে Rust হয়ে ডেটাবেসে যায় আর ফিরে আসে। তারপর ৬টা প্রজেক্ট ধাপে ধাপে করো: কোন ফাইলের পর কোন ফাইল, কোথায় কী কাজ, সব কমেন্ট সহ।"})]}),l.jsxs("section",{children:[l.jsx("h2",{className:"text-xl font-bold mb-2",children:"০) শুরুর আগে: প্রজেক্ট তৈরি, ফাইল স্ট্রাকচার, React ↔ Rust সংযোগ"}),l.jsx(ut,{to:"/start",className:"card bg-base-200 border border-base-300 hover:border-primary transition",children:l.jsxs("div",{className:"card-body p-4 gap-2",children:[l.jsx("p",{className:"text-sm opacity-80",children:"নতুন Tauri প্রজেক্ট কীভাবে বানাবে, কোন ফাইল কী করে, আর React ও Rust কোন কোন বিন্দুতে জোড়া লাগে তা অ্যানিমেশনে দেখো।"}),l.jsxs("div",{className:"flex flex-wrap gap-2",children:[l.jsx("span",{className:"badge badge-primary",children:"প্রজেক্ট তৈরি"}),l.jsx("span",{className:"badge badge-primary",children:"ফাইল স্ট্রাকচার"}),l.jsx("span",{className:"badge badge-primary",children:"সংযোগ বিন্দু ①–⑤"})]}),l.jsx("span",{className:"btn btn-primary btn-sm self-start",children:"শুরু করো →"})]})})]}),l.jsxs("section",{children:[l.jsx("h2",{className:"text-xl font-bold mb-2",children:"১) পুরো পাইপলাইন (ক্লিক বা ▶ চাপো)"}),l.jsx(cy,{})]}),l.jsxs("section",{children:[l.jsx("h2",{className:"text-xl font-bold mb-3",children:"২) শেখার ক্রম"}),l.jsx("div",{className:"grid md:grid-cols-2 gap-3",children:dn.map(e=>l.jsx(ut,{to:"/project/"+e.slug,className:"card bg-base-200 border border-base-300 hover:border-primary transition",children:l.jsxs("div",{className:"card-body p-4 gap-1",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"badge badge-primary",children:["প্রজেক্ট ",e.no]}),l.jsx("span",{className:"badge badge-outline",children:e.level})]}),l.jsx("h3",{className:"font-bold",children:e.title}),l.jsxs("p",{className:"text-sm opacity-80",children:[e.intro.slice(0,110),"..."]}),l.jsx("div",{className:"flex flex-wrap gap-1 mt-1",children:e.stack.slice(0,5).map(t=>l.jsx("span",{className:"badge badge-ghost badge-sm",children:t},t))})]})},e.slug))}),l.jsx("div",{className:"text-center mt-4",children:l.jsx(ut,{to:"/lab",className:"btn btn-outline",children:"🔬 সিকিউরিটি ল্যাব (JWT, refresh, 2FA, cache, argon2) →"})})]})]})}function Xe({code:e,lang:t="",title:n}){const[r,a]=_.useState(!1);async function s(){try{await navigator.clipboard.writeText(e),a(!0),setTimeout(()=>a(!1),1500)}catch{}}return l.jsxs("div",{className:"rounded-lg overflow-hidden border border-base-300 my-3",children:[l.jsxs("div",{className:"flex items-center justify-between bg-base-300 px-3 py-1 text-xs",children:[l.jsx("span",{className:"opacity-80",children:n||t}),l.jsx("button",{className:"btn btn-xs btn-ghost",onClick:s,children:r?"✓ কপি হয়েছে":"Copy"})]}),l.jsx("pre",{className:"bg-neutral text-neutral-content p-3 overflow-x-auto text-[13px] leading-relaxed",children:l.jsx("code",{children:e})})]})}const fy={Rust:"badge-warning",React:"badge-info",Config:"badge-ghost","React ↔ Rust":"badge-accent",Generated:"badge-outline"},Ec=[{id:"root",depth:0,name:"my-app/",dir:!0,side:"Config",edit:null,role:"প্রজেক্টের রুট। এখান থেকেই npm run tauri dev চালাও (src-tauri এর ভেতর থেকে নয়)।",when:"সব কমান্ড এই ফোল্ডার থেকে।"},{id:"pkg",depth:1,name:"package.json",side:"Config",edit:"মাঝেমধ্যে",role:'npm dependency ও স্ক্রিপ্ট। "tauri" স্ক্রিপ্ট থাকায় npm run tauri dev কাজ করে।',when:"npm install ও npm run ... এর সময়।",link:"npm run tauri dev → Tauri CLI → Rust অ্যাপ + Vite একসাথে চালু",lang:"json",code:`"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "tauri": "tauri"
}`},{id:"html",depth:1,name:"index.html",side:"React",edit:"সাধারণত না",role:'WebView প্রথমে এই পেজ লোড করে। <div id="root"> এর ভেতরে React বসে।',when:"window খোলার পর প্রথম।",lang:"html",code:`<div id="root"></div>
<script type="module" src="/src/main.jsx"><\/script>`},{id:"vite",depth:1,name:"vite.config.js",side:"Config",edit:"সাধারণত না",role:"Vite সার্ভারের পোর্ট (১৪২০)। tauri.conf.json এর devUrl এর সাথে মিলতে হয়।",when:"npm run dev / build এর সময়।",link:"⑤ পোর্ট ১৪২০ ↔ devUrl",lang:"js",code:"server: { port: 1420, strictPort: true }"},{id:"public",depth:1,name:"public/",dir:!0,side:"React",edit:"প্রয়োজনে",role:"যেসব স্ট্যাটিক ফাইল (আইকন, ছবি) সরাসরি সার্ভ হবে।",when:"build এ dist এ কপি হয়।"},{id:"src",depth:1,name:"src/",dir:!0,side:"React",edit:"হ্যাঁ",role:"React ফ্রন্টএন্ড। তোমার UI কোড এখানে।",when:"—"},{id:"main",depth:2,name:"main.jsx",side:"React",edit:"সাধারণত না",role:"React এর entry। App কে #root এ render করে। Router/Provider বসাতে হলে এখানে।",when:"index.html লোড হলে চলে।",lang:"jsx",code:`ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);`},{id:"app",depth:2,name:"App.jsx",side:"React ↔ Rust",edit:"হ্যাঁ",linkPoint:!0,role:"প্রধান কম্পোনেন্ট। এখানে (বা hooks এ) invoke() দিয়ে Rust কে ডাকা ও listen() দিয়ে ইভেন্ট শোনা হয়।",when:"main.jsx render করলে; বাটন চাপলে invoke() চলে।",link:"① নাম ② আর্গুমেন্ট ③ ফেরত মান (invoke) ও ④ listen: জাভাস্ক্রিপ্ট দিক",lang:"jsx",code:`import { invoke } from "@tauri-apps/api/core";

async function greet() {
  setGreetMsg(await invoke("greet", { name }));
}`},{id:"css",depth:2,name:"App.css",side:"React",edit:"হ্যাঁ",role:"স্টাইল।",when:"App.jsx এ import থাকলে লোড হয়।"},{id:"assets",depth:2,name:"assets/",dir:!0,side:"React",edit:"প্রয়োজনে",role:"import করা ছবি, SVG।",when:"—"},{id:"tauri",depth:1,name:"src-tauri/",dir:!0,side:"Rust",edit:"হ্যাঁ",role:"Rust ব্যাকএন্ড ও Tauri কনফিগ। তোমার Rust কোড ও অনুমতির ফোল্ডার এখানে।",when:"—"},{id:"cargo",depth:2,name:"Cargo.toml",side:"Config",edit:"নতুন crate লাগলে",role:"Rust এর package.json: dependency ও [lib] নাম। main.rs এ <নাম>_lib::run() এই নাম থেকে আসে।",when:"cargo build/check এর সময়।",lang:"toml",code:`[lib]
name = "my_app_lib"
crate-type = ["staticlib", "cdylib", "rlib"]

[dependencies]
tauri = { version = "2", features = [] }
tauri-plugin-opener = "2"
serde = { version = "1", features = ["derive"] }
serde_json = "1"`},{id:"build",depth:2,name:"build.rs",side:"Rust",edit:"কখনো না",role:"Tauri এর build স্ক্রিপ্ট; tauri_build::build() ডাকে।",when:"cargo build এর আগে।"},{id:"conf",depth:2,name:"tauri.conf.json",side:"Config",edit:"হ্যাঁ (নাম, window, identifier)",linkPoint:!0,role:"অ্যাপের নাম, window এর মাপ, আইকন, আর কোন ফ্রন্টএন্ড দেখাবে।",when:"dev ও build দুই সময়ই পড়া হয়।",link:"⑤ devUrl (dev) / frontendDist (build): window ↔ React এর লিংক",lang:"json",code:`"build": {
  "beforeDevCommand": "npm run dev",
  "devUrl": "http://localhost:1420",
  "beforeBuildCommand": "npm run build",
  "frontendDist": "../dist"
}`},{id:"caps",depth:2,name:"capabilities/",dir:!0,side:"Config",edit:"প্লাগইন লাগলে",role:"JS কোন Tauri API ডাকতে পারবে তার অনুমতির ফোল্ডার।",when:"—"},{id:"capjson",depth:3,name:"default.json",side:"Config",edit:"প্লাগইন লাগলে",role:"core ও প্লাগইন API এর অনুমতি। প্লাগইন (যেমন opener) JS থেকে ডাকতে এখানে permission লাগে। ডিফল্টে নিজের #[tauri::command] আলাদা অনুমতি ছাড়াই ডাকা যায়।",when:"build/run এর সময় Tauri পড়ে; অনুমতি না থাকলে প্লাগইন কল ব্লক হয়।",lang:"json",code:`{
  "identifier": "default",
  "windows": ["main"],
  "permissions": ["core:default", "opener:default"]
}`},{id:"icons",depth:2,name:"icons/",dir:!0,side:"Config",edit:"নিজের আইকন চাইলে",role:"ইনস্টলার ও window এর আইকন। বদলাতে: npm run tauri icon my-icon.png (1024×1024 PNG)।",when:"bundle তৈরির সময়।"},{id:"rsrc",depth:2,name:"src/",dir:!0,side:"Rust",edit:"হ্যাঁ",role:"Rust সোর্স কোড।",when:"—"},{id:"mainrs",depth:3,name:"main.rs",side:"Rust",edit:"কখনো না",role:"exe এর entry। শুধু lib.rs এর run() ডাকে (Android/iOS সমর্থনের জন্য আলাদা করা)।",when:"অ্যাপ চালু হওয়ার সাথে সাথে।",lang:"rust",code:`fn main() {
    my_app_lib::run()
}`},{id:"librs",depth:3,name:"lib.rs",side:"React ↔ Rust",edit:"হ্যাঁ",linkPoint:!0,role:"তোমার Rust কোড এখানে: #[tauri::command] function, তাদের generate_handler! এ রেজিস্টার, আর emit() দিয়ে ইভেন্ট পাঠানো।",when:"অ্যাপ চালু হলে run() চলে; React invoke করলে সংশ্লিষ্ট command চলে।",link:"① নাম ② আর্গুমেন্ট ③ ফেরত মান ও ④ emit: Rust দিক",lang:"rust",code:`#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])   // ← নাম এখানে না থাকলে invoke ব্যর্থ
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}`},{id:"gen",depth:1,name:"node_modules/, dist/, src-tauri/target/, src-tauri/gen/",side:"Generated",edit:"কখনো না",role:"নিজে তৈরি হয়: npm install, build আউটপুট, Rust বিল্ড, Tauri এর জেনারেট করা schema। কমিট করবে না (.gitignore এ থাকে)।",when:"install/build এর সময় তৈরি হয়।"}];function py(){const[e,t]=_.useState("app"),[n,r]=_.useState(!1),a=Ec.find(s=>s.id===e);return l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[l.jsxs("label",{className:"label cursor-pointer gap-2",children:[l.jsx("input",{type:"checkbox",className:"toggle toggle-warning toggle-sm",checked:n,onChange:s=>r(s.target.checked)}),l.jsx("span",{className:"label-text",children:"শুধু সংযোগ বিন্দু (⚡) হাইলাইট করো"})]}),l.jsx("span",{className:"text-xs opacity-70",children:"⚡ = যেখানে React আর Rust জোড়া লাগে: App.jsx, lib.rs, tauri.conf.json"})]}),l.jsxs("div",{className:"grid md:grid-cols-5 gap-4",children:[l.jsx("div",{className:"card bg-base-200 border border-base-300 md:col-span-2",children:l.jsx("div",{className:"card-body p-3 gap-0",children:Ec.map(s=>{const i=n&&!s.linkPoint;return l.jsxs("button",{onClick:()=>t(s.id),style:{paddingLeft:8+s.depth*16},className:"text-left rounded py-1 pr-2 text-sm font-mono flex items-center gap-2 border "+(e===s.id?"border-primary bg-base-100":"border-transparent hover:bg-base-100")+(i?" opacity-30":""),children:[l.jsx("span",{children:s.dir?"📁":"📄"}),l.jsx("span",{className:"break-all",children:s.name}),s.linkPoint&&l.jsx("span",{title:"সংযোগ বিন্দু",children:"⚡"})]},s.id)})})}),l.jsxs("div",{className:"md:col-span-3 space-y-3",children:[l.jsx("div",{className:"card bg-base-200 border border-base-300",children:l.jsxs("div",{className:"card-body gap-2",children:[l.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[l.jsx("h3",{className:"font-mono font-bold break-all",children:a.name}),l.jsx("span",{className:"badge badge-sm "+(fy[a.side]||""),children:a.side}),a.edit&&l.jsxs("span",{className:"badge badge-sm badge-outline",children:["হাত দেবে: ",a.edit]}),a.linkPoint&&l.jsx("span",{className:"badge badge-sm badge-warning",children:"⚡ সংযোগ বিন্দু"})]}),l.jsxs("p",{children:[l.jsx("b",{children:"কাজ:"})," ",a.role]}),a.when&&l.jsxs("p",{children:[l.jsx("b",{children:"কখন চলে:"})," ",a.when]}),a.link&&l.jsxs("p",{className:"text-sm",children:[l.jsx("b",{children:"সংযোগ:"})," ",a.link]})]})}),a.code&&l.jsx(Xe,{code:a.code,lang:a.lang,title:a.name})]})]})]})}const he={start:80,req:140,res:200,evt:260},Fe={1:{x:345,y:he.req,label:"কমান্ডের নাম",rule:'invoke("greet") এর স্ট্রিং আর Rust এর fn greet + generate_handler![greet] হুবহু এক হতে হবে। না মিললে কম্পাইল এরর আসে না, রানটাইমে invoke() ব্যর্থ হয়।'},2:{x:415,y:he.req,label:"আর্গুমেন্ট (JSON)",rule:"JS অবজেক্টের key camelCase (productType), Rust প্যারামিটার snake_case (product_type)। Tauri নিজে রূপান্তর করে; মানগুলো JSON হয়ে যায়, তাই টাইপ serde দিয়ে মিলতে হয়।"},3:{x:380,y:he.res,label:"ফেরত মান",rule:'Rust এর Ok(T) হয় await এর মান, Err(E) হয় catch এর error। T ও E serde::Serialize হতে হবে; struct এ rename_all = "camelCase" দিলে JS এ camelCase নামে আসে।'},4:{x:380,y:he.evt,label:"ইভেন্ট emit ↔ listen",rule:'Rust এর emit("নাম", data) ↔ JS এর listen("নাম", cb): নাম হুবহু এক। listen আগে চালু না থাকলে ইভেন্ট হারিয়ে যায়; কম্পোনেন্ট সরলে unlisten করো।'},5:{x:380,y:he.start,label:"WebView লিংক (devUrl)",rule:"tauri.conf.json: dev এ devUrl (Vite এর পোর্ট), build এ frontendDist (../dist)। window ও React এখানেই প্রথম জোড়া লাগে; Vite এর পোর্ট আর devUrl মিলতে হবে।"}},Ga=[{key:"start",label:"০ অ্যাপ চালু",steps:[{pos:[635,he.start],side:"rust",title:"npm run tauri dev",desc:"Tauri CLI আগে beforeDevCommand চালায় (Vite সার্ভার, localhost:1420), তারপর Rust অ্যাপ বানিয়ে চালায় ও একটা নেটিভ window খোলে।",rust:`// src-tauri/tauri.conf.json
"build": {
  "beforeDevCommand": "npm run dev",
  "devUrl": "http://localhost:1420",
  "beforeBuildCommand": "npm run build",
  "frontendDist": "../dist"
}`},{pos:[380,he.start],side:"bridge",cp:5,title:"window এর WebView devUrl থেকে পেজ আনে",desc:"build করা অ্যাপে এই পেজ আসে frontendDist (../dist) থেকে। React আর Rust এখানেই প্রথম জোড়া লাগে।",react:`// vite.config.js
server: { port: 1420, strictPort: true }   // devUrl এর পোর্টের সাথে মিলতে হবে`,rust:`// tauri.conf.json
"devUrl": "http://localhost:1420"`},{pos:[125,he.start],side:"react",title:"React চালু",desc:"WebView index.html লোড করে, তাতে main.jsx → App render হয়। এখন থেকে JS এ invoke() ও listen() চলে।",react:`// src/main.jsx
ReactDOM.createRoot(document.getElementById("root")).render(<App />);`}]},{key:"invoke",label:"১ invoke → Ok",steps:[{pos:[125,he.req],side:"react",title:"React: invoke() ডাকে",desc:"বাটন চাপলে await invoke(...) চলে। প্রথম আর্গুমেন্ট command এর নাম, দ্বিতীয়টা JSON আর্গুমেন্ট।",react:'const msg = await invoke("greet", { name: "Mugdho" });'},{pos:[Fe[1].x,Fe[1].y],side:"bridge",cp:1,title:"সংযোগ ①: নাম মেলে",desc:"Bridge নামটা দেখে generate_handler! এর তালিকায় খোঁজে। তালিকায় না থাকলে এখানেই থেমে যায়।",react:'invoke("greet", ...)',rust:".invoke_handler(tauri::generate_handler![greet])"},{pos:[Fe[2].x,Fe[2].y],side:"bridge",cp:2,title:"সংযোগ ②: আর্গুমেন্ট JSON হয়ে পৌঁছায়",desc:'{ name: "Mugdho" } Rust এর প্যারামিটারে বসে। key এর নাম মিলতে হয় (camelCase ↔ snake_case নিজে রূপান্তর হয়)।',react:'{ name: "Mugdho" }',rust:"fn greet(name: &str) -> String"},{pos:[635,he.req],side:"rust",title:"Rust: function চলে",desc:"#[tauri::command] চিহ্নিত function এখন আসল কাজ করে।",rust:`#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {name}!")
}`},{pos:[635,he.res],side:"rust",title:"Rust: ফলাফল তৈরি",desc:"ফেরত মান serde দিয়ে JSON হয়ে ফেরার পথে ওঠে।",rust:'format!("Hello, {name}!")   // → "Hello, Mugdho!"'},{pos:[Fe[3].x,Fe[3].y],side:"bridge",cp:3,title:"সংযোগ ③: ফেরত মান",desc:"Ok মান JSON হয়ে bridge পার হয়। এই পথেই সব ফলাফল ফেরে।",rust:"Ok → await এর মান",react:"const msg = await invoke(...)"},{pos:[125,he.res],side:"react",title:"React: await শেষ",desc:"Promise resolve হয়েছে, setMsg দিয়ে স্ক্রিনে দেখানো যায়।",react:'setMsg(msg);   // "Hello, Mugdho!"'}]},{key:"err",label:"২ Err → catch",steps:[{pos:[125,he.req],side:"react",title:"React: invoke() try/catch এ",desc:"Rust এর Err যেহেতু rejected Promise হয়, invoke সবসময় try/catch এ রাখো।",react:`try {
  await invoke("greet", { name: "" });
} catch (e) {
  setError(String(e));
}`},{pos:[Fe[1].x,Fe[1].y],side:"bridge",cp:1,title:"সংযোগ ①: নাম মেলে",desc:"নাম ঠিক থাকলে কল Rust এ পৌঁছায়।",react:'invoke("greet", ...)',rust:".invoke_handler(tauri::generate_handler![greet])"},{pos:[635,he.res],side:"rust",err:!0,title:"Rust: Err ফেরত",desc:"নাম খালি, তাই function Err দেয়। Result<T, String> ব্যবহার করলে এই বার্তা সরাসরি JS এ যায়।",rust:`#[tauri::command]
fn greet(name: &str) -> Result<String, String> {
    if name.is_empty() {
        return Err("নাম খালি".into());
    }
    Ok(format!("Hello, {name}!"))
}`},{pos:[Fe[3].x,Fe[3].y],side:"bridge",cp:3,err:!0,title:"সংযোগ ③: Err ফেরার পথে",desc:"Err(E) JS এ গিয়ে rejected Promise হয়।",rust:'Err("নাম খালি")',react:"catch (e) …"},{pos:[125,he.res],side:"react",err:!0,title:"React: catch ধরে",desc:"e এর মান Rust এর Err এর String। UI তে বাংলা বার্তা দেখানো যায়।",react:'setError(String(e));   // "নাম খালি"'}]},{key:"event",label:"৩ Rust → React ইভেন্ট",steps:[{pos:[125,he.evt],side:"react",title:"React: আগে listen চালু",desc:"ইভেন্ট আসার আগেই শ্রোতা বসাতে হয়। listen() একটা Promise দেয়, সেটা দিয়ে পরে unlisten করতে হয়।",react:`useEffect(() => {
  const unlisten = listen("devices-changed", (e) => setDevices(e.payload));
  return () => { unlisten.then((fn) => fn()); };
}, []);`},{pos:[635,he.evt],side:"rust",title:"Rust: কিছু ঘটল, emit",desc:"React কিছু চায়নি; Rust নিজে থেকে জানাচ্ছে (যেমন ব্যাকগ্রাউন্ড থ্রেডে ফোন লাগানো ধরা পড়ল)।",rust:`use tauri::Emitter;

// ব্যাকগ্রাউন্ড থ্রেডে
let _ = handle.emit("devices-changed", &list);`},{pos:[Fe[4].x,Fe[4].y],side:"bridge",cp:4,title:"সংযোগ ④: ইভেন্টের নাম মেলে",desc:"যে window ইভেন্টটা শুনছে, bridge সেখানে payload পৌঁছে দেয়।",rust:'emit("devices-changed", &list)',react:'listen("devices-changed", cb)'},{pos:[125,he.evt],side:"react",title:"React: callback চলে",desc:"e.payload তে Rust এর পাঠানো ডেটা; state বদলে UI আপডেট হয়। পলিং লাগেনি।",react:"(e) => setDevices(e.payload)"}]}],my={react:"stroke-info",rust:"stroke-warning",bridge:"stroke-secondary"};function hy(){const[e,t]=_.useState(1),[n,r]=_.useState(0),[a,s]=_.useState(!1),i=Ga[e],u=i.steps.length-1,o=i.steps[n];_.useEffect(()=>{if(!a)return;if(n>=u){s(!1);return}const x=setTimeout(()=>r(w=>w+1),1900);return()=>clearTimeout(x)},[a,n,u]);function c(x){t(x),r(0),s(!1)}function h(x){for(let w=0;w<Ga.length;w++){const E=Ga[w].steps.findIndex(m=>m.cp===x);if(E>=0){t(w),r(E),s(!1);return}}}function f(){n>=u&&r(0),s(x=>!x)}const p=!!o.err,v=x=>"fill-base-200 "+(o.side===x?my[x]+" stroke-[3]":"stroke-base-300 stroke-[1.5]");return l.jsxs("div",{className:"space-y-4",children:[l.jsx("div",{role:"tablist",className:"tabs tabs-boxed flex-wrap",children:Ga.map((x,w)=>l.jsx("button",{role:"tab",className:"tab "+(e===w?"tab-active":""),onClick:()=>c(w),children:x.label},x.key))}),l.jsx("div",{className:"card bg-base-200 border border-base-300",children:l.jsxs("div",{className:"card-body p-3",children:[l.jsxs("svg",{viewBox:"0 0 760 330",className:"w-full h-auto",role:"img","aria-label":"React, Tauri bridge ও Rust এর সংযোগ",children:[l.jsx("defs",{children:l.jsx("marker",{id:"comm-arrow",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",children:l.jsx("path",{d:"M0,0 L8,4 L0,8 z",className:"fill-base-content/50"})})}),l.jsx("rect",{x:"20",y:"20",width:"200",height:"290",rx:"12",className:v("react")}),l.jsx("rect",{x:"300",y:"20",width:"160",height:"290",rx:"12",strokeDasharray:"6 4",className:v("bridge")}),l.jsx("rect",{x:"540",y:"20",width:"200",height:"290",rx:"12",className:v("rust")}),l.jsx("text",{x:"120",y:"42",textAnchor:"middle",className:"fill-base-content text-[14px] font-bold",children:"React (WebView)"}),l.jsx("text",{x:"380",y:"42",textAnchor:"middle",className:"fill-base-content text-[14px] font-bold",children:"Tauri IPC bridge"}),l.jsx("text",{x:"640",y:"42",textAnchor:"middle",className:"fill-base-content text-[14px] font-bold",children:"Rust (Tauri core)"}),[[he.start,"ক) পেজ লোড",540,220,"index.html → main.jsx","window → devUrl"],[he.req,"খ) অনুরোধ",220,540,'invoke("cmd", args)',"#[tauri::command]"],[he.res,"গ) উত্তর",540,220,"await / catch","Ok(T) / Err(E)"],[he.evt,"ঘ) ইভেন্ট",540,220,'listen("event", cb)','emit("event", data)']].map(([x,w,E,m,d,g])=>l.jsxs("g",{children:[l.jsx("line",{x1:E,y1:x,x2:m,y2:x,className:"stroke-base-content/30",strokeWidth:"2",markerEnd:"url(#comm-arrow)"}),l.jsx("text",{x:"120",y:x-14,textAnchor:"middle",className:"fill-base-content/80 text-[11px] font-mono",children:d}),l.jsx("text",{x:"640",y:x-14,textAnchor:"middle",className:"fill-base-content/80 text-[11px] font-mono",children:g}),l.jsx("text",{x:"380",y:x+30,textAnchor:"middle",className:"fill-base-content/50 text-[10px]",children:w})]},x)),Object.entries(Fe).map(([x,w])=>{const E=o.cp===Number(x);return l.jsxs("g",{onClick:()=>h(Number(x)),className:"cursor-pointer",children:[l.jsx("circle",{cx:w.x,cy:w.y,r:"14",className:(E?"fill-warning stroke-warning animate-pulse":"fill-base-100 stroke-base-content/40")+" stroke-2"}),l.jsx("text",{x:w.x,y:w.y+5,textAnchor:"middle",className:(E?"fill-warning-content":"fill-base-content")+" text-[14px] font-bold",children:x})]},x)}),l.jsxs("g",{style:{transform:`translate(${o.pos[0]}px, ${o.pos[1]}px)`,transition:"transform 0.9s ease-in-out"},children:[l.jsx("circle",{r:"11",className:p?"fill-error":"fill-primary"}),l.jsx("text",{y:"5",textAnchor:"middle",className:"text-[13px]",children:"📦"})]})]}),l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx("button",{className:"btn btn-sm btn-primary",onClick:f,children:a?"⏸ থামাও":"▶ চালাও"}),l.jsx("button",{className:"btn btn-sm btn-ghost",disabled:n===0,onClick:()=>{s(!1),r(n-1)},children:"◀ আগে"}),l.jsx("button",{className:"btn btn-sm btn-ghost",disabled:n===u,onClick:()=>{s(!1),r(n+1)},children:"পরে ▶"}),l.jsx("button",{className:"btn btn-sm btn-ghost",onClick:()=>{s(!1),r(0)},children:"↺"}),l.jsx("div",{className:"flex gap-1 flex-wrap",children:i.steps.map((x,w)=>l.jsx("button",{onClick:()=>{s(!1),r(w)},className:"btn btn-xs "+(w===n?"btn-primary":w<n?"btn-outline btn-primary":"btn-ghost"),children:w+1},w))})]})]})}),l.jsx("div",{className:"alert items-start "+(p?"alert-error":"alert-info"),children:l.jsxs("div",{className:"space-y-1 w-full",children:[l.jsxs("div",{className:"font-bold",children:["ধাপ ",n+1,"/",i.steps.length,": ",o.title]}),l.jsx("div",{className:"text-sm",children:o.desc}),o.cp&&l.jsxs("div",{className:"text-sm mt-1",children:[l.jsxs("b",{children:["নিয়ম (",o.cp,"):"]})," ",Fe[o.cp].rule]})]})}),(o.react||o.rust)&&l.jsxs("div",{className:"grid md:grid-cols-2 gap-3",children:[o.react?l.jsx(Xe,{code:o.react,lang:"js",title:"React / JS দিক"}):l.jsx("div",{}),o.rust?l.jsx(Xe,{code:o.rust,lang:"rust",title:"Rust / Tauri দিক"}):l.jsx("div",{})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-bold mb-2",children:"সংযোগ বিন্দুগুলো (ক্লিক করলে সেই ধাপে যাবে)"}),l.jsx("div",{className:"grid sm:grid-cols-2 gap-2",children:Object.entries(Fe).map(([x,w])=>l.jsxs("button",{onClick:()=>h(Number(x)),className:"text-left rounded border p-2 text-sm "+(o.cp===Number(x)?"border-warning bg-base-200":"border-base-300 bg-base-200 hover:border-primary"),children:[l.jsx("span",{className:"badge badge-warning mr-2",children:x}),l.jsx("b",{children:w.label}),l.jsx("div",{className:"text-xs opacity-80 mt-1",children:w.rule})]},x))})]})]})}const gy=[["create","১. প্রজেক্ট তৈরি"],["structure","২. ফাইল স্ট্রাকচার"],["comm","৩. React ↔ Rust অ্যানিমেশন"]],vy=[["Project name","যেকোনো নাম, যেমন my-app"],["Identifier","com.তোমার-নাম.my-app (পছন্দমতো দিলেও চলে)"],["Frontend language","TypeScript / JavaScript"],["Package manager","npm"],["UI template","React"],["UI flavor","JavaScript"]],Cc=["Node.js, Rust ও OS এর বিল্ড টুল ইনস্টল করেছি","npm create tauri-app@latest চালিয়ে প্রজেক্ট বানিয়েছি","npm install করেছি","npm run tauri dev দিয়ে ডেমো উইন্ডো খুলেছি","ফাইল স্ট্রাকচার ও সংযোগ বিন্দু (App.jsx, lib.rs, tauri.conf.json) বুঝেছি"];function yy(){const[e,t]=_.useState("create"),{done:n,toggle:r,count:a}=ri(),s=a("start:");return l.jsxs("div",{className:"space-y-4",children:[l.jsxs("section",{className:"space-y-1",children:[l.jsx("span",{className:"badge badge-secondary",children:"শুরু করার আগে"}),l.jsx("h1",{className:"text-2xl md:text-3xl font-bold",children:"০) Tauri + React: প্রজেক্ট বানানো, ফাইল স্ট্রাকচার ও সংযোগ"}),l.jsx("p",{className:"opacity-80",children:"প্রজেক্ট ১ এ যাওয়ার আগে এই তিনটা বিষয় একবার দেখে নাও: নতুন প্রজেক্ট কীভাবে তৈরি হয়, কোন ফাইল কী করে, আর React ও Rust ঠিক কোন কোন বিন্দুতে জোড়া লাগে।"}),l.jsx("progress",{className:"progress progress-success w-full",value:s,max:Cc.length})]}),l.jsx("div",{role:"tablist",className:"tabs tabs-boxed flex-wrap",children:gy.map(([i,u])=>l.jsx("button",{role:"tab",className:"tab "+(e===i?"tab-active":""),onClick:()=>t(i),children:u},i))}),e==="create"&&l.jsxs("div",{className:"space-y-4",children:[l.jsxs("section",{className:"space-y-2",children:[l.jsx("h2",{className:"text-lg font-bold",children:"ক) আগে যা ইনস্টল থাকতে হবে"}),l.jsxs("table",{className:"table table-sm bg-base-200",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"টুল"}),l.jsx("th",{children:"Windows"}),l.jsx("th",{children:"Linux (Debian/Ubuntu)"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"Node.js (LTS) ও npm"}),l.jsx("td",{children:"nodejs.org থেকে"}),l.jsx("td",{children:"nodejs ও npm প্যাকেজ, বা nvm"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Rust"}),l.jsx("td",{children:"rustup.rs থেকে rustup"}),l.jsx("td",{children:"rustup.rs থেকে rustup"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"C/C++ বিল্ড টুল"}),l.jsx("td",{children:"Visual Studio C++ Build Tools"}),l.jsx("td",{children:"build-essential"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"WebView"}),l.jsx("td",{children:"WebView2 (Windows 10/11 এ সাধারণত আছে)"}),l.jsx("td",{children:"libwebkit2gtk-4.1-dev"})]})]})]}),l.jsx("p",{className:"text-sm opacity-80",children:"Linux এ একসাথে সব:"}),l.jsx(Xe,{lang:"bash",title:"Linux terminal",code:`sudo apt update
sudo apt install -y build-essential curl wget file libwebkit2gtk-4.1-dev \\
  libssl-dev libxdo-dev libayatana-appindicator3-dev librsvg2-dev`}),l.jsx("p",{className:"text-xs opacity-70",children:"iPhone Battery প্রজেক্টে (প্রজেক্ট ৬) ফোনের সাথে যোগাযোগের জন্য অতিরিক্ত usbmuxd লাগে; সেটা ওই প্রজেক্টেই আছে।"})]}),l.jsxs("section",{className:"space-y-2",children:[l.jsx("h2",{className:"text-lg font-bold",children:"খ) প্রজেক্ট তৈরি"}),l.jsx(Xe,{lang:"bash",title:"terminal",code:"npm create tauri-app@latest"}),l.jsx("p",{className:"text-sm",children:"কমান্ড কয়েকটা প্রশ্ন করবে:"}),l.jsxs("table",{className:"table table-sm bg-base-200",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"প্রশ্ন"}),l.jsx("th",{children:"উত্তর"})]})}),l.jsx("tbody",{children:vy.map(([i,u])=>l.jsxs("tr",{children:[l.jsx("td",{className:"font-mono text-xs",children:i}),l.jsx("td",{className:"text-sm",children:u})]},i))})]})]}),l.jsxs("section",{className:"space-y-2",children:[l.jsx("h2",{className:"text-lg font-bold",children:"গ) প্রথম রান"}),l.jsx(Xe,{lang:"bash",title:"terminal",code:`cd my-app
npm install
npm run tauri dev`}),l.jsx("p",{className:"text-sm",children:"প্রথমবার Rust এর dependencies কম্পাইল হতে কয়েক মিনিট লাগে। একটা ডেমো উইন্ডো খুললে বুঝবে সেটআপ ঠিক আছে।"}),l.jsx("div",{className:"alert alert-warning text-sm py-2",children:l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{children:[l.jsx("b",{children:"npm run dev নয়, npm run tauri dev চালাতে হয়।"})," শুধু dev চালালে Vite সার্ভার ওঠে কিন্তু Tauri উইন্ডো ওঠে না।"]}),l.jsxs("div",{children:[l.jsx("b",{children:"অ্যাপ চলে নেটিভ উইন্ডোতে, ব্রাউজারে নয়।"})," ব্রাউজারে localhost:1420 খুললে window.__TAURI_INTERNALS__ থাকে না, তাই invoke করলে ",l.jsx("code",{children:"Cannot read properties of undefined (reading 'invoke')"})," এরর আসে।"]})]})})]}),l.jsxs("section",{className:"space-y-2",children:[l.jsx("h2",{className:"text-lg font-bold",children:"ঘ) ইনস্টলার বানানো (build)"}),l.jsx(Xe,{lang:"bash",title:"terminal",code:"npm run tauri build"}),l.jsxs("p",{className:"text-sm",children:["ইনস্টলার পাবে ",l.jsx("code",{children:"src-tauri/target/release/bundle/"})," এ (Windows: msi, nsis; Linux: deb, appimage)। প্রতিটা OS এর ইনস্টলার সেই OS এই বানাতে হয়।"]})]}),l.jsxs("section",{className:"space-y-2",children:[l.jsx("h2",{className:"text-lg font-bold",children:"চেকলিস্ট"}),l.jsx("ul",{className:"space-y-1",children:Cc.map((i,u)=>{const o="start:"+u;return l.jsxs("li",{className:"flex items-center gap-2 text-sm",children:[l.jsx("input",{type:"checkbox",className:"checkbox checkbox-success checkbox-sm",checked:!!n[o],onChange:()=>r(o)}),l.jsx("span",{children:i})]},o)})})]})]}),e==="structure"&&l.jsxs("div",{className:"space-y-3",children:[l.jsx("p",{className:"text-sm opacity-80",children:"নতুন প্রজেক্টে কোন ফোল্ডারে কী থাকে। ফাইলে ক্লিক করে দেখো সেটা কী করে, কখন চলে ও হাত দিতে হবে কিনা।"}),l.jsx(py,{})]}),e==="comm"&&l.jsxs("div",{className:"space-y-3",children:[l.jsx("p",{className:"text-sm opacity-80",children:"React ও Rust সরাসরি কথা বলে না; মাঝে Tauri এর IPC bridge থাকে। ▶ চাপো বা ধাপে ধাপে যাও, আর ①–⑤ বিন্দুগুলো দেখো: এগুলোই সেই জায়গা যেখানে দুই দিকের নাম বা ডেটা মিলতে হয়।"}),l.jsx(hy,{})]}),l.jsxs("div",{className:"flex justify-between pt-4",children:[l.jsx(ut,{className:"btn btn-ghost",to:"/",children:"← পাইপলাইন"}),l.jsx(ut,{className:"btn btn-primary",to:"/project/"+dn[0].slug,children:"প্রজেক্ট ১ শুরু করো →"})]})]})}function xy(){const{count:e}=ri();return l.jsxs("div",{className:"space-y-4",children:[l.jsx("h1",{className:"text-2xl font-bold",children:"প্রজেক্টসমূহ (এই ক্রমে করো)"}),l.jsx("ol",{className:"space-y-3",children:dn.map(t=>{const n=e("file:"+t.slug);return l.jsx("li",{className:"card bg-base-200 border border-base-300",children:l.jsxs("div",{className:"card-body p-4 gap-2",children:[l.jsxs("div",{className:"flex items-center justify-between gap-2 flex-wrap",children:[l.jsxs("h2",{className:"font-bold text-lg",children:["প্রজেক্ট ",t.no,": ",t.title]}),l.jsx("span",{className:"badge badge-outline",children:t.level})]}),l.jsx("p",{className:"text-sm opacity-80",children:t.intro}),l.jsx("progress",{className:"progress progress-success",value:n,max:t.files.length}),l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsxs("span",{className:"text-xs opacity-70",children:[n,"/",t.files.length," ফাইল সম্পন্ন"]}),l.jsx(ut,{className:"btn btn-primary btn-sm",to:"/project/"+t.slug,children:"শুরু করো"})]})]})},t.slug)})})]})}function wy({items:e}){const[t,n]=_.useState({}),r=e.filter((s,i)=>t[i]===s.answer).length,a=Object.keys(t).length;return l.jsxs("div",{className:"space-y-4",children:[e.map((s,i)=>l.jsx("div",{className:"card bg-base-200 border border-base-300",children:l.jsxs("div",{className:"card-body p-4 gap-2",children:[l.jsxs("p",{className:"font-semibold",children:[i+1,". ",s.q]}),l.jsx("div",{className:"flex flex-col gap-2",children:s.options.map((u,o)=>{const c=t[i]===o,h=t[i]!==void 0,f=h?o===s.answer?"btn-success":c?"btn-error":"btn-ghost":"btn-outline";return l.jsx("button",{disabled:h,className:"btn btn-sm justify-start "+f,onClick:()=>n(p=>({...p,[i]:o})),children:u},o)})})]})},i)),a===e.length&&l.jsxs("div",{className:"alert alert-info",children:["স্কোর: ",r,"/",e.length]})]})}const ky={Rust:"badge-warning",React:"badge-info","React ↔ Rust":"badge-accent",Config:"badge-ghost",Database:"badge-success"};function Sy({files:e}){const[t,n]=_.useState(0),r=e[t];return l.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[l.jsx("div",{className:"card bg-base-200 border border-base-300 md:col-span-1",children:l.jsxs("div",{className:"card-body p-3 gap-1",children:[l.jsx("h3",{className:"font-bold text-sm mb-1",children:"📁 ফাইল ম্যাপ (ক্লিক করো)"}),e.map((a,s)=>l.jsxs("button",{onClick:()=>n(s),className:"text-left rounded p-2 text-xs border "+(s===t?"border-primary bg-base-100":"border-transparent hover:bg-base-100"),children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"badge badge-sm badge-outline",children:a.n}),l.jsx("span",{className:"font-mono break-all",children:a.path})]}),l.jsxs("div",{className:"mt-1 flex gap-1 items-center",children:[l.jsx("span",{className:"badge badge-xs "+(ky[a.side]||""),children:a.side}),a.edit===!1&&l.jsx("span",{className:"badge badge-xs badge-outline",children:"সাধারণত হাত দেবে না"}),a.edit===!0&&l.jsx("span",{className:"badge badge-xs badge-primary",children:"তুমি লিখবে"})]})]},a.path))]})}),l.jsxs("div",{className:"md:col-span-2 space-y-3",children:[l.jsx("div",{className:"card bg-base-200 border border-base-300",children:l.jsxs("div",{className:"card-body gap-2",children:[l.jsx("h3",{className:"font-mono font-bold break-all",children:r.path}),l.jsxs("p",{children:[l.jsx("b",{children:"কাজ:"})," ",r.role]}),r.when&&l.jsxs("p",{children:[l.jsx("b",{children:"কখন চলে:"})," ",r.when]}),r.calls&&r.calls.length>0&&l.jsxs("div",{children:[l.jsx("b",{children:"কাকে ডাকে / কী চালু করে:"}),l.jsx("ul",{className:"list-disc ml-5 text-sm",children:r.calls.map(a=>l.jsx("li",{children:a},a))})]}),l.jsxs("p",{className:"text-sm opacity-80",children:["💡 ",r.why]})]})}),l.jsx(Xe,{code:r.code,lang:r.lang,title:r.path})]})]})}function _y(e,t,n){switch(t){case"+":return{ok:e+n,line:'"+" => Ok(a + b)'};case"-":return{ok:e-n,line:'"-" => Ok(a - b)'};case"*":return{ok:e*n,line:'"*" => Ok(a * b)'};case"/":return n===0?{err:"শূন্য দিয়ে ভাগ করা যায় না!",line:'if b == 0.0 { Err(String::from("শূন্য দিয়ে ভাগ করা যায় না!")) }'}:{ok:e/n,line:'"/" => Ok(a / b)'};default:return{err:"অজানা অপারেটর: "+t,line:'_ => Err(format!("অজানা অপারেটর: {}", operator))'}}}function by(e,t,n){const r=a=>Math.trunc(a);switch(t=r(t),n=r(n),e){case 1:return{ok:String(t+n),line:"1 => add(a, b)"};case 2:return{ok:String(t-n),line:"2 => sub(a, b)"};case 3:return{ok:String(t*n),line:"3 => mul(a, b)"};case 4:return n===0?{ok:"0",line:"4 => div(a, b)   // div() এর ভেতর if b == 0 { return 0; }"}:{ok:String(r(t/n)),line:"4 => div(a, b)"};default:return{ok:"Invalid operation",line:'_ => return "Invalid operation".to_string()'}}}function Ii({mode:e="f64"}){const[t,n]=_.useState("12"),[r,a]=_.useState("0"),[s,i]=_.useState(e==="f64"?"/":"4"),[u,o]=_.useState(null);function c(){const f=parseFloat(t),p=parseFloat(r);if(Number.isNaN(f)||Number.isNaN(p)){o({js:"React এ validation: সঠিক number দিন!",kind:"warn"});return}if(e==="f64"){const v=_y(f,s,p);o(v.err?{kind:"err",js:"catch (error) → "+JSON.stringify(v.err),line:v.line,call:'invoke("calculate", { a: '+f+', operator: "'+s+'", b: '+p+" })"}:{kind:"ok",js:"result = "+v.ok,line:v.line,call:'invoke("calculate", { a: '+f+', operator: "'+s+'", b: '+p+" })"})}else{const v=by(Number(s),f,p);o({kind:"ok",js:"res = "+JSON.stringify(v.ok),line:v.line,call:'invoke("calculate", { val: '+s+", a: "+Math.trunc(f)+", b: "+Math.trunc(p)+" })"})}}const h=e==="f64"?[["+","+"],["-","−"],["*","×"],["/","÷"]]:[["1","Add"],["2","Sub"],["3","Mul"],["4","Div"]];return l.jsx("div",{className:"card bg-base-200 border border-base-300",children:l.jsxs("div",{className:"card-body gap-3",children:[l.jsxs("h3",{className:"font-bold",children:["🧪 invoke() সিমুলেটর (",e==="f64"?"প্রজেক্ট ১: Result<f64,String>":"প্রজেক্ট ২: i32 → String",")"]}),l.jsx("p",{className:"text-xs opacity-70",children:"ব্রাউজারে আসল Rust চলে না; এটা Rust এর যুক্তির JS প্রতিলিপি, শুধু আচরণ বোঝানোর জন্য। ১২ ÷ ০ চালিয়ে দুই প্রজেক্টের পার্থক্য দেখো।"}),l.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[l.jsx("input",{className:"input input-bordered input-sm w-24",value:t,onChange:f=>n(f.target.value)}),l.jsx("select",{className:"select select-bordered select-sm",value:s,onChange:f=>i(f.target.value),children:h.map(([f,p])=>l.jsx("option",{value:f,children:p},f))}),l.jsx("input",{className:"input input-bordered input-sm w-24",value:r,onChange:f=>a(f.target.value)}),l.jsx("button",{className:"btn btn-primary btn-sm",onClick:c,children:"invoke() চালাও"})]}),u&&l.jsxs("div",{className:"text-sm space-y-2",children:[u.call&&l.jsxs("code",{className:"block bg-neutral text-neutral-content rounded p-2 text-xs overflow-x-auto",children:["React → ",u.call]}),u.line&&l.jsxs("code",{className:"block bg-neutral text-warning rounded p-2 text-xs overflow-x-auto",children:["Rust → ",u.line]}),l.jsx("div",{className:"alert py-2 "+(u.kind==="ok"?"alert-success":u.kind==="err"?"alert-error":"alert-warning"),children:l.jsx("span",{className:"font-mono text-xs",children:u.js})})]})]})})}const Ry=7*24*3600,Tc=()=>Math.random().toString(36).slice(2,10),Dc=e=>btoa(JSON.stringify(e)).replace(/=+$/,"").replace(/\+/g,"-").replace(/\//g,"_");function Ya(e){return e>=86400?Math.round(e/86400)+" দিন":e>=3600?Math.round(e/3600)+" ঘণ্টা":e>=60?Math.round(e/60)+" মিনিট":e+" সেকেন্ড"}function mp(){var m;const[e,t]=_.useState(900),[,n]=_.useReducer(d=>d+1,0),a=_.useRef({now:0,session:null,store:{},lastOld:null,log:[]}).current,s=(d,g)=>{a.log.unshift({kind:d,text:g,t:a.now}),a.log=a.log.slice(0,14)};function i(d){const g={sub:d,kind:"access",iat:a.now,exp:a.now+e,jti:Tc()},R={sub:d,kind:"refresh",iat:a.now,exp:a.now+Ry,jti:Tc()};return a.store[R.jti]={revoked:!1,exp:R.exp},{access:g,refresh:R}}function u(){a.session=i("user-7"),s("ok","Login: access ("+Ya(e)+") + refresh (৭ দিন) তৈরি"),n()}function o(d,g){const R=a.store[d.jti];return!R||R.revoked||R.exp<=a.now?(Object.values(a.store).forEach(T=>{T.revoked=!0}),a.session=null,s("bad",(g?"চোর: ":"")+"বাতিল/মেয়াদোত্তীর্ণ refresh token ব্যবহার! 🚨 Rust ওই user এর সব session বাতিল করল"),!1):(R.revoked=!0,a.lastOld=d,a.session=i(d.sub),s("ok","Refresh rotation: পুরনো refresh বাতিল, নতুন access + refresh জারি"),!0)}function c(){if(!a.session){s("warn","আগে Login করো"),n();return}a.session.access.exp<=a.now?(s("warn",'API কল → Rust: Err("token expired")'),o(a.session.refresh,!1)?s("ok","secureInvoke স্বয়ংক্রিয় retry → 200 OK (ইউজার কিছু টের পায়নি)"):s("bad","refresh ব্যর্থ → আবার Login লাগবে")):s("ok","API কল → access token বৈধ → 200 OK"),n()}function h(d,g){a.now+=d,s("info","⏩ সময় এগোলো: +"+g),n()}function f(){if(!a.lastOld){s("warn","আগে একবার refresh হতে দাও (Call API দিয়ে মেয়াদ শেষ করে)"),n();return}o(a.lastOld,!0),n()}const p=(m=a.session)==null?void 0:m.access,v=Dc({alg:"HS256",typ:"JWT"}),x=p?Dc(p):"",w=p?p.exp-a.now:null,E={ok:"text-success",bad:"text-error",warn:"text-warning",info:"opacity-70"};return l.jsx("div",{className:"card bg-base-200 border border-base-300",children:l.jsxs("div",{className:"card-body gap-3",children:[l.jsx("h3",{className:"font-bold",children:"🪙 JWT: access + refresh + token limit ল্যাব"}),l.jsxs("p",{className:"text-xs opacity-70",children:["ভার্চুয়াল ঘড়ি: T+",Ya(a.now)||"০"," (",a.now," সেকেন্ড)"]}),l.jsxs("label",{className:"text-sm flex flex-wrap items-center gap-2",children:["access token মেয়াদ (token limit):",l.jsxs("select",{className:"select select-bordered select-xs",value:e,onChange:d=>{t(Number(d.target.value))},children:[l.jsx("option",{value:60,children:"১ মিনিট"}),l.jsx("option",{value:900,children:"১৫ মিনিট (প্রস্তাবিত)"}),l.jsx("option",{value:3600,children:"১ ঘণ্টা"})]}),l.jsx("span",{className:"opacity-60",children:"নতুন Login থেকে প্রযোজ্য"})]}),l.jsxs("div",{className:"flex flex-wrap gap-2",children:[l.jsx("button",{className:"btn btn-primary btn-sm",onClick:u,children:"1) Login"}),l.jsx("button",{className:"btn btn-sm",onClick:c,children:"2) API কল করো"}),l.jsx("button",{className:"btn btn-sm btn-outline",onClick:()=>h(300,"৫ মিনিট"),children:"⏩ +৫ মিনিট"}),l.jsx("button",{className:"btn btn-sm btn-outline",onClick:()=>h(3600,"১ ঘণ্টা"),children:"⏩ +১ ঘণ্টা"}),l.jsx("button",{className:"btn btn-sm btn-outline",onClick:()=>h(8*86400,"৮ দিন"),children:"⏩ +৮ দিন"}),l.jsx("button",{className:"btn btn-sm btn-error btn-outline",onClick:f,children:"🕵️ চোর পুরনো refresh আবার দিল"})]}),l.jsxs("div",{className:"bg-base-100 rounded p-3 border border-base-300 text-xs space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("b",{children:"বর্তমান access token (React এর memory তে)"}),p?l.jsx("span",{className:"badge "+(w>0?"badge-success":"badge-error"),children:w>0?"বাকি "+Ya(w):"মেয়াদ শেষ"}):l.jsx("span",{className:"badge",children:"নেই"})]}),p?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"font-mono break-all",children:[l.jsx("span",{className:"text-info",children:v}),".",l.jsx("span",{className:"text-warning",children:x}),".",l.jsx("span",{className:"text-success",children:"HMAC-SHA256(secret)"})]}),l.jsx("pre",{className:"bg-neutral text-neutral-content rounded p-2 overflow-x-auto",children:JSON.stringify(p,null,2)}),l.jsx("progress",{className:"progress progress-warning w-full",value:Math.max(0,w),max:e})]}):l.jsx("p",{className:"opacity-60",children:"Login করলে token দেখা যাবে।"}),l.jsx("p",{className:"opacity-70",children:"refresh token এখানে দেখা যায় না, কারণ সেটা Rust memory তে থাকে, JS এ নয়। DB তে শুধু তার SHA-256 hash।"})]}),l.jsxs("div",{className:"bg-base-100 rounded p-3 border border-base-300 text-xs",children:[l.jsx("b",{children:"DB: refresh_tokens"}),l.jsxs("table",{className:"table table-xs",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"jti (hash এর জায়গায়)"}),l.jsx("th",{children:"মেয়াদ"}),l.jsx("th",{children:"revoked"})]})}),l.jsxs("tbody",{children:[Object.entries(a.store).slice(-5).map(([d,g])=>l.jsxs("tr",{children:[l.jsx("td",{className:"font-mono",children:d}),l.jsx("td",{children:g.exp<=a.now?"শেষ":Ya(g.exp-a.now)+" বাকি"}),l.jsx("td",{children:g.revoked?"✔ হ্যাঁ":"না"})]},d)),Object.keys(a.store).length===0&&l.jsx("tr",{children:l.jsx("td",{colSpan:3,className:"opacity-60",children:"খালি"})})]})]})]}),l.jsxs("div",{className:"bg-base-100 rounded p-3 border border-base-300 text-xs space-y-1 min-h-[80px]",children:[l.jsx("b",{children:"লগ"}),a.log.map((d,g)=>l.jsxs("div",{className:E[d.kind],children:["[T+",d.t,"s] ",d.text]},g)),a.log.length===0&&l.jsx("div",{className:"opacity-60",children:"1) Login → 2) +১৫ মিনিটের বেশি এগাও → API কল করো → স্বয়ংক্রিয় refresh দেখো → 🕵️ বাটন চাপো"})]})]})})}function hp(){const[e,t]=_.useState(5),[n,r]=_.useState(30),a=_.useRef([]),[s,i]=_.useState(null),[,u]=_.useState(0);_.useEffect(()=>{const v=setInterval(()=>u(x=>x+1),300);return()=>clearInterval(v)},[]);const o=Date.now();a.current=a.current.filter(v=>o-v<n*1e3);const c=a.current.length,h=a.current[0],f=h?Math.max(0,Math.ceil((n*1e3-(o-h))/1e3)):0;function p(){const v=Date.now();if(a.current=a.current.filter(x=>v-x<n*1e3),a.current.length>=e){i({bad:!0,text:"🚫 Err: অনেকবার চেষ্টা করেছ, কিছুক্ষণ পরে আবার চেষ্টা করো (বাকি "+f+" সে.)"});return}a.current.push(v),i({bad:!1,text:"ভুল পাসওয়ার্ড (চেষ্টা গোনা হলো: "+a.current.length+"/"+e+")"})}return l.jsx("div",{className:"card bg-base-200 border border-base-300",children:l.jsxs("div",{className:"card-body gap-3",children:[l.jsx("h3",{className:"font-bold",children:"🚦 Rate limit ল্যাব (brute force ঠেকানো)"}),l.jsxs("div",{className:"flex flex-wrap gap-4 text-sm",children:[l.jsxs("label",{children:["সর্বোচ্চ চেষ্টা: ",l.jsx("b",{children:e}),l.jsx("input",{type:"range",min:"2",max:"10",value:e,onChange:v=>t(Number(v.target.value)),className:"range range-xs w-40 ml-2"})]}),l.jsxs("label",{children:["সময়সীমা: ",l.jsxs("b",{children:[n," সে."]}),l.jsx("input",{type:"range",min:"10",max:"60",step:"5",value:n,onChange:v=>r(Number(v.target.value)),className:"range range-xs w-40 ml-2"})]})]}),l.jsx("div",{className:"flex gap-1 flex-wrap",children:Array.from({length:e}).map((v,x)=>l.jsx("div",{className:"w-8 h-8 rounded border flex items-center justify-center text-xs "+(x<c?"bg-error text-error-content border-error":"bg-base-100 border-base-300"),children:x<c?"✗":""},x))}),l.jsxs("p",{className:"text-xs opacity-70",children:["লাল ঘর = window এর ভেতরের চেষ্টা। ",n," সেকেন্ড পার হলে ঘর নিজে খালি হবে (sliding window)।"]}),l.jsx("button",{className:"btn btn-sm btn-error w-fit",onClick:p,children:"ভুল পাসওয়ার্ড দিয়ে Login চেষ্টা"}),s&&l.jsx("div",{className:"alert py-2 text-sm "+(s.bad?"alert-error":"alert-warning"),children:s.text}),l.jsx("p",{className:"text-xs opacity-70",children:'একই যুক্তি 2FA কোডেও (key = "2fa:user"): ৬ সংখ্যায় মাত্র ১০ লক্ষ সম্ভাবনা, limit না থাকলে অনুমান করে ভাঙা যায়।'})]})})}const Ol="JBSWY3DPEHPK3PXP";function jy(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";let n="";for(const a of e.replace(/=+$/,"").toUpperCase())n+=t.indexOf(a).toString(2).padStart(5,"0");const r=[];for(let a=0;a+8<=n.length;a+=8)r.push(parseInt(n.slice(a,a+8),2));return new Uint8Array(r)}async function Pc(e){const t=await crypto.subtle.importKey("raw",jy(Ol),{name:"HMAC",hash:"SHA-1"},!1,["sign"]),n=new ArrayBuffer(8);new DataView(n).setUint32(4,e);const r=new Uint8Array(await crypto.subtle.sign("HMAC",t,n)),a=r[19]&15,s=(r[a]&127)<<24|r[a+1]<<16|r[a+2]<<8|r[a+3];return String(s%1e6).padStart(6,"0")}function gp(){const[e,t]=_.useState("······"),[n,r]=_.useState(30),[a,s]=_.useState(""),[i,u]=_.useState(null),[o,c]=_.useState(null);_.useEffect(()=>{let f=!0;async function p(){const x=Math.floor(Date.now()/1e3);try{const w=await Pc(Math.floor(x/30));f&&(t(w),r(30-x%30))}catch{f&&c("এই ব্রাউজারে WebCrypto পাওয়া যায়নি (https বা localhost লাগে)")}}p();const v=setInterval(p,1e3);return()=>{f=!1,clearInterval(v)}},[]);async function h(){const f=Math.floor(Date.now()/1e3/30),p=[f-1,f,f+1];for(const v of p)if(await Pc(v)===a.trim()){u({ok:!0,text:"✅ কোড সঠিক → Rust issue_session() চালাবে"});return}u({ok:!1,text:'❌ কোড ভুল → Err("কোড ভুল") (rate limit এও গোনা হয়)'})}return l.jsx("div",{className:"card bg-base-200 border border-base-300",children:l.jsxs("div",{className:"card-body gap-3",children:[l.jsx("h3",{className:"font-bold",children:"📱 2FA (TOTP) ল্যাব"}),o&&l.jsx("div",{className:"alert alert-warning text-sm",children:o}),l.jsxs("div",{className:"flex flex-wrap items-center gap-6",children:[l.jsxs("div",{children:[l.jsx("div",{className:"text-xs opacity-70",children:"এখনকার কোড (Authenticator অ্যাপে যেটা দেখাত)"}),l.jsx("div",{className:"text-4xl font-mono tracking-widest",children:e})]}),l.jsxs("div",{className:"radial-progress text-primary",style:{"--value":n/30*100,"--size":"4rem"},children:[n,"s"]})]}),l.jsxs("div",{className:"text-xs opacity-70 break-all",children:["ডেমো secret (base32): ",l.jsx("code",{children:Ol}),l.jsx("br",{}),"otpauth://totp/TauriApp:demo@example.com?secret=",Ol,"&issuer=TauriApp"]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("input",{className:"input input-bordered input-sm w-32 font-mono",maxLength:6,placeholder:"৬ সংখ্যা",value:a,onChange:f=>s(f.target.value)}),l.jsx("button",{className:"btn btn-primary btn-sm",onClick:h,children:"verify_2fa()"})]}),i&&l.jsx("div",{className:"alert py-2 text-sm "+(i.ok?"alert-success":"alert-error"),children:i.text}),l.jsxs("ul",{className:"text-xs list-disc ml-5 opacity-80 space-y-1",children:[l.jsx("li",{children:"কোড = HMAC-SHA1(secret, floor(সময়/৩০)) এর ৬ অঙ্ক। secret ফোন ও সার্ভার (Rust/DB) দুই জায়গাতেই আছে, নেটওয়ার্কে কোড পাঠাতে হয় না।"}),l.jsx("li",{children:"প্রতি ৩০ সেকেন্ডে কোড বদলায়; সময়ের সামান্য গরমিল সামলাতে আগের/পরের ধাপও গ্রহণযোগ্য (skew=1)।"}),l.jsx("li",{children:'লগইনে পাসওয়ার্ড ঠিক হলে প্রথমে শুধু ৫ মিনিটের "2fa_pending" temp token মেলে, access token মেলে কোড ঠিক হওয়ার পর।'})]})]})})}const Xa={tasks:["ডিজাইন রিভিউ","Rust command লেখা","টেস্ট চালানো"]};function vp(){const[e,t]=_.useState(20),n=_.useRef(null),[r,a]=_.useState(null),[s,i]=_.useState(null),[u,o]=_.useState([]),[c,h]=_.useState(!1),[,f]=_.useState(0);_.useEffect(()=>{const m=setInterval(()=>f(d=>d+1),500);return()=>clearInterval(m)},[]);const p=m=>o(d=>[m,...d].slice(0,8)),v=n.current?(Date.now()-n.current.at)/1e3:null,x=n.current&&v<e;n.current&&!x&&(n.current=null);async function w(){h(!0);const m=performance.now();n.current?(a([...n.current.data]),i("HIT"),p("GET list_tasks → cache HIT ("+Math.round(performance.now()-m)+" ms), DB ছোঁয়া হয়নি")):(await new Promise(d=>setTimeout(d,700)),n.current={data:[...Xa.tasks],at:Date.now()},a([...Xa.tasks]),i("MISS"),p("GET list_tasks → cache MISS, DB থেকে এল ("+Math.round(performance.now()-m)+" ms), cache এ রাখা হলো")),h(!1)}function E(){Xa.tasks.unshift("নতুন task #"+(Xa.tasks.length+1)),n.current=null,p('add_task → DB তে insert, cache.invalidate("tasks:7") → পুরনো cache বাতিল')}return l.jsx("div",{className:"card bg-base-200 border border-base-300",children:l.jsxs("div",{className:"card-body gap-3",children:[l.jsx("h3",{className:"font-bold",children:"⚡ API Cache ল্যাব"}),l.jsxs("label",{className:"text-sm",children:["TTL: ",l.jsxs("b",{children:[e," সেকেন্ড"]}),l.jsx("input",{type:"range",min:"5",max:"60",step:"5",value:e,onChange:m=>t(Number(m.target.value)),className:"range range-xs w-48 ml-2"})]}),l.jsxs("div",{className:"flex gap-2 flex-wrap items-center",children:[l.jsx("button",{className:"btn btn-primary btn-sm",onClick:w,disabled:c,children:c?l.jsx("span",{className:"loading loading-spinner loading-xs"}):"list_tasks() ডাকো"}),l.jsx("button",{className:"btn btn-sm",onClick:E,children:"add_task() (invalidate)"}),l.jsxs("span",{className:"badge "+(x?"badge-success":"badge-ghost"),children:["cache: ",x?"আছে, বয়স "+v.toFixed(0)+"s / "+e+"s":"খালি"]}),s&&l.jsxs("span",{className:"badge "+(s==="HIT"?"badge-success":"badge-warning"),children:["শেষ ফল: ",s]})]}),x&&l.jsx("progress",{className:"progress progress-success w-full",value:e-v,max:e}),r&&l.jsx("ul",{className:"text-sm space-y-1",children:r.map((m,d)=>l.jsx("li",{className:"p-2 bg-base-100 rounded",children:m},d))}),l.jsxs("div",{className:"bg-base-100 rounded p-2 text-xs space-y-1 min-h-[60px]",children:[u.map((m,d)=>l.jsx("div",{children:m},d)),u.length===0&&l.jsx("div",{className:"opacity-60",children:"বারবার list_tasks() চাপো: প্রথমবার ধীর (MISS), পরেরবার দ্রুত (HIT)। add_task চাপলে আবার MISS।"})]}),l.jsx("p",{className:"text-xs opacity-70",children:"নিয়ম: key এ user id রাখো (tasks:7) যাতে একজনের ডেটা আরেকজন না পায়। write হলে invalidate করো, নইলে পুরনো ডেটা দেখাবে।"})]})})}async function Lc(e,t){const n=new TextEncoder().encode(t+":"+e),r=new Uint8Array(await crypto.subtle.digest("SHA-256",n));return btoa(String.fromCharCode(...r)).replace(/=+$/,"")}const Ny=()=>Array.from(crypto.getRandomValues(new Uint8Array(8))).map(e=>e.toString(16).padStart(2,"0")).join("");function yp(){const[e,t]=_.useState("MyPassw0rd!"),[n,r]=_.useState(19456),[a,s]=_.useState(2),[i,u]=_.useState(1),[o,c]=_.useState([]),[h,f]=_.useState(""),[p,v]=_.useState(null);async function x(){const m=Ny(),d=await Lc(e,m),g=btoa(m).replace(/=+$/,""),R="$argon2id$v=19$m="+n+",t="+a+",p="+i+"$"+g+"$"+d;c(T=>[{salt:m,full:R},...T].slice(0,3))}async function w(){if(!o[0])return;const m=await Lc(h,o[0].salt);v(o[0].full.endsWith("$"+m))}const E=Math.floor(1024*1024/n);return l.jsx("div",{className:"card bg-base-200 border border-base-300",children:l.jsxs("div",{className:"card-body gap-3",children:[l.jsx("h3",{className:"font-bold",children:"🔒 argon2 ল্যাব"}),l.jsx("div",{className:"alert alert-info text-xs py-2",children:"এটা সিমুলেশন। আসল argon2id ইচ্ছে করে ধীর ও মেমোরি-নির্ভর। এখানে hash এর মান নকল, কিন্তু salt-এর প্রভাব আর cost-এর হিসাব সঠিক ধারণা দেয়।"}),l.jsxs("label",{className:"text-sm",children:["পাসওয়ার্ড:",l.jsx("input",{className:"input input-bordered input-sm ml-2 font-mono",value:e,onChange:m=>t(m.target.value)})]}),l.jsxs("div",{className:"flex flex-wrap gap-4 text-sm",children:[l.jsxs("label",{children:["m (মেমোরি): ",l.jsxs("b",{children:[Math.round(n/1024)," MiB"]}),l.jsx("input",{type:"range",min:"4096",max:"131072",step:"4096",value:n,onChange:m=>r(Number(m.target.value)),className:"range range-xs w-36 ml-2"})]}),l.jsxs("label",{children:["t (পুনরাবৃত্তি): ",l.jsx("b",{children:a}),l.jsx("input",{type:"range",min:"1",max:"6",value:a,onChange:m=>s(Number(m.target.value)),className:"range range-xs w-24 ml-2"})]}),l.jsxs("label",{children:["p (সমান্তরাল): ",l.jsx("b",{children:i}),l.jsx("input",{type:"range",min:"1",max:"4",value:i,onChange:m=>u(Number(m.target.value)),className:"range range-xs w-24 ml-2"})]})]}),l.jsxs("div",{className:"bg-base-100 rounded p-2 text-xs border border-base-300",children:["প্রতিটা চেষ্টায় আক্রমণকারীর ",l.jsxs("b",{children:[Math.round(n/1024)," MiB"]})," মেমোরি লাগে। ১ GiB মেমোরির GPU তে একসাথে সর্বোচ্চ ~",l.jsx("b",{children:E})," টা চেষ্টা চালানো যায় (সাধারণ দ্রুত hash এ হাজার হাজার)। m বাড়ালে এই সংখ্যা কমে, আক্রমণ ধীর হয়। তোমার ডিভাইসেও login ধীর হয়, তাই ~০.২–০.৫ সেকেন্ডে থামাও।"]}),l.jsx("button",{className:"btn btn-primary btn-sm w-fit",onClick:x,children:"hash_password() চালাও (একাধিকবার চাপো)"}),o.map((m,d)=>l.jsxs("div",{className:"text-xs font-mono break-all bg-neutral text-neutral-content rounded p-2",children:[l.jsxs("span",{className:"text-warning",children:["salt: ",m.salt]}),l.jsx("br",{}),m.full]},d)),o.length>1&&l.jsx("p",{className:"text-xs text-success",children:"লক্ষ করো: একই পাসওয়ার্ড, কিন্তু প্রতিবার আলাদা salt তাই hash সম্পূর্ণ আলাদা। দুইজন একই পাসওয়ার্ড দিলেও DB তে মিলবে না, rainbow table কাজ করবে না।"}),o[0]&&l.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[l.jsx("input",{className:"input input-bordered input-sm font-mono",placeholder:"verify_password() এর জন্য পাসওয়ার্ড",value:h,onChange:m=>f(m.target.value)}),l.jsx("button",{className:"btn btn-sm",onClick:w,children:"সর্বশেষ hash এর সাথে মেলাও"}),p!==null&&l.jsx("span",{className:"badge "+(p?"badge-success":"badge-error"),children:p?"মিলেছে ✓":"মেলেনি ✗"})]}),l.jsx("p",{className:"text-xs opacity-70",children:"hash string এর ভেতরেই algorithm, m/t/p ও salt থাকে, তাই আলাদা salt কলাম লাগে না।"})]})})}function xp(){return l.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center gap-3",children:[l.jsx("h1",{className:"text-5xl font-bold",children:"404"}),l.jsx("p",{children:"এই পেজটা পাওয়া যায়নি।"}),l.jsx(ut,{to:"/",className:"btn btn-primary",children:"হোমে যাও"})]})}const Ey=[["steps","১. ধাপ"],["files","২. ফাইল ও কোড"],["connect","৩. React↔Rust"],["example","৪. পূর্ণ উদাহরণ"],["lab","৫. ল্যাব"],["quiz","৬. কুইজ"]];function Cy(){const{slug:e}=dv(),t=ny(e),[n,r]=_.useState("steps"),[a,s]=_.useState(0),{done:i,toggle:u,count:o}=ri();if(!t)return l.jsx(xp,{});const c=dn.indexOf(t),h=dn[c+1],f=o("file:"+t.slug);return l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex gap-2 items-center flex-wrap",children:[l.jsxs("span",{className:"badge badge-primary",children:["প্রজেক্ট ",t.no]}),l.jsx("span",{className:"badge badge-outline",children:t.level}),t.stack.map(p=>l.jsx("span",{className:"badge badge-ghost",children:p},p))]}),l.jsx("h1",{className:"text-2xl font-bold mt-2",children:t.title}),l.jsx("p",{className:"opacity-80 mt-1",children:t.intro}),l.jsx("progress",{className:"progress progress-success w-full mt-2",value:f,max:t.files.length})]}),l.jsx("div",{role:"tablist",className:"tabs tabs-boxed flex-wrap",children:Ey.map(([p,v])=>l.jsx("button",{role:"tab",className:"tab "+(n===p?"tab-active":""),onClick:()=>r(p),children:v},p))}),n==="steps"&&l.jsxs("div",{className:"space-y-3",children:[l.jsx("ol",{className:"steps steps-vertical w-full",children:t.steps.map((p,v)=>l.jsx("li",{className:"step step-primary text-left",children:l.jsxs("div",{className:"text-left ml-2",children:[l.jsx("div",{className:"font-semibold",children:p.title}),l.jsx("div",{className:"text-sm opacity-80",children:p.desc})]})},v))}),l.jsx("h3",{className:"font-bold",children:"শুরুর কমান্ড"}),l.jsx(Xe,{code:t.setupCommands.join(`
`),lang:"bash",title:"terminal"})]}),n==="files"&&l.jsxs("div",{className:"space-y-3",children:[l.jsx("div",{className:"alert alert-info text-sm py-2",children:"ফাইলগুলো যে ক্রমে লিখবে সেই ক্রমে সাজানো। লেখা শেষ হলে ✔ দাও, উপরে প্রগ্রেস বাড়বে।"}),t.files.map((p,v)=>{const x="file:"+t.slug+":"+p.n,w=a===v;return l.jsx("div",{className:"card border "+(i[x]?"border-success bg-base-200":"border-base-300 bg-base-200"),children:l.jsxs("div",{className:"card-body p-3 gap-2",children:[l.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[l.jsx("input",{type:"checkbox",className:"checkbox checkbox-success checkbox-sm",checked:!!i[x],onChange:()=>u(x)}),l.jsxs("span",{className:"badge badge-primary",children:["ধাপ ",p.n]}),l.jsx("button",{className:"font-mono text-sm font-bold text-left flex-1 break-all",onClick:()=>s(w?-1:v),children:p.path}),l.jsx("span",{className:"badge badge-outline badge-sm",children:p.side}),l.jsx("button",{className:"btn btn-ghost btn-xs",onClick:()=>s(w?-1:v),children:w?"বন্ধ":"খোলো"})]}),l.jsxs("p",{className:"text-sm",children:[l.jsx("b",{children:"কাজ:"})," ",p.role]}),w&&l.jsxs(l.Fragment,{children:[l.jsxs("p",{className:"text-sm opacity-80",children:["💡 ",l.jsx("b",{children:"কেন এখন?"})," ",p.why]}),l.jsx(Xe,{code:p.code,lang:p.lang,title:p.path})]})]})},p.n)})]}),n==="connect"&&l.jsxs("div",{className:"space-y-3",children:[l.jsx("h2",{className:"text-lg font-bold",children:"React আর Rust যেখানে জোড়া লাগে"}),l.jsx("ul",{className:"list-disc ml-5 space-y-1 text-sm",children:t.connection.explain.map((p,v)=>l.jsx("li",{children:p},v))}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-3",children:[l.jsx(Xe,{code:t.connection.react,lang:"js",title:t.connection.reactTitle}),l.jsx(Xe,{code:t.connection.rust,lang:"rust",title:t.connection.rustTitle})]}),l.jsxs("div",{className:"bg-base-200 rounded p-3 text-sm border border-base-300",children:[l.jsx("b",{children:"নামের নিয়ম মনে রাখো:"})," command এর নাম হুবহু এক; Rust এ snake_case (access_token) ↔ JS এ camelCase (accessToken); Rust এর Ok ↔ await এর মান; Rust এর Err ↔ catch।"]})]}),n==="example"&&l.jsxs("div",{className:"space-y-3",children:[l.jsx("h2",{className:"text-lg font-bold",children:t.example.title}),l.jsx("ol",{className:"space-y-2",children:t.example.flow.map((p,v)=>l.jsx("li",{className:"p-2 bg-base-200 rounded border border-base-300 text-sm",children:p},v))}),l.jsx("h3",{className:"font-bold",children:"চালাও"}),l.jsx(Xe,{code:t.example.runCommands.join(`
`),lang:"bash",title:"terminal"}),l.jsxs("p",{className:"text-sm",children:["📦 ",t.example.output]}),l.jsx("h3",{className:"font-bold",children:"সমস্যা হলে"}),l.jsxs("table",{className:"table table-sm bg-base-200",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"সমস্যা"}),l.jsx("th",{children:"সমাধান"})]})}),l.jsx("tbody",{children:t.troubleshoot.map(([p,v])=>l.jsxs("tr",{children:[l.jsx("td",{className:"font-mono text-xs",children:p}),l.jsx("td",{className:"text-sm",children:v})]},p))})]})]}),n==="lab"&&l.jsxs("div",{className:"space-y-4",children:[t.widget==="calc-f64"&&l.jsx(Ii,{mode:"f64"}),t.widget==="calc-i32"&&l.jsxs(l.Fragment,{children:[l.jsx(Ii,{mode:"i32"}),l.jsx(Ii,{mode:"f64"})]}),t.widget==="filemap"&&l.jsx(Sy,{files:t.files}),t.widget==="security"&&l.jsxs(l.Fragment,{children:[l.jsx(mp,{}),l.jsx(hp,{}),l.jsx(gp,{}),l.jsx(vp,{}),l.jsx(yp,{})]})]}),n==="quiz"&&l.jsx(wy,{items:t.quiz}),l.jsxs("div",{className:"flex justify-between pt-4",children:[c>0?l.jsx(ut,{className:"btn btn-ghost",to:"/project/"+dn[c-1].slug,children:"← আগের প্রজেক্ট"}):l.jsx("span",{}),h?l.jsx(ut,{className:"btn btn-primary",to:"/project/"+h.slug,onClick:()=>r("steps"),children:"পরের প্রজেক্ট →"}):l.jsx(ut,{className:"btn btn-primary",to:"/lab",children:"সিকিউরিটি ল্যাব →"})]})]})}const Ac=[["jwt","🪙 JWT + Refresh + Token limit",mp],["rate","🚦 Rate limit",hp],["totp","📱 2FA (TOTP)",gp],["cache","⚡ API Cache",vp],["argon","🔒 argon2",yp]];function Ty(){const[e,t]=_.useState("jwt"),n=Ac.find(r=>r[0]===e)[2];return l.jsxs("div",{className:"space-y-4",children:[l.jsx("h1",{className:"text-2xl font-bold",children:"🔬 সিকিউরিটি ল্যাব"}),l.jsx("p",{className:"text-sm opacity-80",children:"প্রজেক্ট ৪ ও ৫ এ যা যা বানিয়েছ, এখানে প্রতিটা অংশ আলাদা করে চালিয়ে বোঝো।"}),l.jsx("div",{role:"tablist",className:"tabs tabs-boxed flex-wrap",children:Ac.map(([r,a])=>l.jsx("button",{role:"tab",className:"tab "+(e===r?"tab-active":""),onClick:()=>t(r),children:a},r))}),l.jsx(n,{})]})}const Dy=Lv([{path:"/",element:l.jsx(sy,{}),errorElement:l.jsx(xp,{}),children:[{index:!0,element:l.jsx(dy,{})},{path:"start",element:l.jsx(yy,{})},{path:"projects",element:l.jsx(xy,{})},{path:"project/:slug",element:l.jsx(Cy,{})},{path:"lab",element:l.jsx(Ty,{})}]}],{basename:"/"});Fi.createRoot(document.getElementById("root")).render(l.jsx(Qc.StrictMode,{children:l.jsx(Kv,{children:l.jsx(Bv,{router:Dy})})}));
