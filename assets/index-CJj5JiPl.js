(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gs="172",ni={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cl=0,ca=1,hl=2,po=1,ul=2,tn=3,gn=0,be=1,Ge=2,mn=0,ii=1,es=2,ha=3,ua=4,dl=5,Cn=100,fl=101,pl=102,ml=103,_l=104,gl=200,vl=201,xl=202,Ml=203,ns=204,is=205,Sl=206,yl=207,El=208,bl=209,Tl=210,wl=211,Al=212,Rl=213,Cl=214,rs=0,ss=1,as=2,ai=3,os=4,ls=5,cs=6,hs=7,Vs=0,Pl=1,Dl=2,_n=0,Ll=1,Il=2,Ul=3,Nl=4,Fl=5,Ol=6,Bl=7,mo=300,oi=301,li=302,us=303,ds=304,_r=306,fs=1e3,Dn=1001,ps=1002,ze=1003,kl=1004,Oi=1005,Ve=1006,yr=1007,Ln=1008,an=1009,_o=1010,go=1011,wi=1012,Ws=1013,In=1014,en=1015,Pi=1016,Xs=1017,Ys=1018,ci=1020,vo=35902,xo=1021,Mo=1022,ke=1023,So=1024,yo=1025,ri=1026,hi=1027,Eo=1028,qs=1029,bo=1030,js=1031,Zs=1033,or=33776,lr=33777,cr=33778,hr=33779,ms=35840,_s=35841,gs=35842,vs=35843,xs=36196,Ms=37492,Ss=37496,ys=37808,Es=37809,bs=37810,Ts=37811,ws=37812,As=37813,Rs=37814,Cs=37815,Ps=37816,Ds=37817,Ls=37818,Is=37819,Us=37820,Ns=37821,ur=36492,Fs=36494,Os=36495,To=36283,Bs=36284,ks=36285,zs=36286,zl=3200,Hl=3201,wo=0,Gl=1,pn="",Le="srgb",ui="srgb-linear",fr="linear",te="srgb",Bn=7680,da=519,Vl=512,Wl=513,Xl=514,Ao=515,Yl=516,ql=517,jl=518,Zl=519,fa=35044,pa="300 es",nn=2e3,pr=2001;class Fn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ma=1234567;const bi=Math.PI/180,Ai=180/Math.PI;function fi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(me[i&255]+me[i>>8&255]+me[i>>16&255]+me[i>>24&255]+"-"+me[t&255]+me[t>>8&255]+"-"+me[t>>16&15|64]+me[t>>24&255]+"-"+me[e&63|128]+me[e>>8&255]+"-"+me[e>>16&255]+me[e>>24&255]+me[n&255]+me[n>>8&255]+me[n>>16&255]+me[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function Ks(i,t){return(i%t+t)%t}function Kl(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function $l(i,t,e){return i!==t?(e-i)/(t-i):0}function Ti(i,t,e){return(1-e)*i+e*t}function Jl(i,t,e,n){return Ti(i,t,1-Math.exp(-e*n))}function Ql(i,t=1){return t-Math.abs(Ks(i,t*2)-t)}function tc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ec(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function nc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ic(i,t){return i+Math.random()*(t-i)}function rc(i){return i*(.5-Math.random())}function sc(i){i!==void 0&&(ma=i);let t=ma+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ac(i){return i*bi}function oc(i){return i*Ai}function lc(i){return(i&i-1)===0&&i!==0}function cc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function uc(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),h=s((t+n)/2),d=o((t+n)/2),p=s((t-n)/2),_=o((t-n)/2),u=s((n-t)/2),v=o((n-t)/2);switch(r){case"XYX":i.set(a*d,l*p,l*_,a*h);break;case"YZY":i.set(l*_,a*d,l*p,a*h);break;case"ZXZ":i.set(l*p,l*_,a*d,a*h);break;case"XZX":i.set(a*d,l*v,l*u,a*h);break;case"YXY":i.set(l*u,a*d,l*v,a*h);break;case"ZYZ":i.set(l*v,l*u,a*d,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const dc={DEG2RAD:bi,RAD2DEG:Ai,generateUUID:fi,clamp:Wt,euclideanModulo:Ks,mapLinear:Kl,inverseLerp:$l,lerp:Ti,damp:Jl,pingpong:Ql,smoothstep:tc,smootherstep:ec,randInt:nc,randFloat:ic,randFloatSpread:rc,seededRandom:sc,degToRad:ac,radToDeg:oc,isPowerOfTwo:lc,ceilPowerOfTwo:cc,floorPowerOfTwo:hc,setQuaternionFromProperEuler:uc,normalize:xe,denormalize:Jn};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,r,s,o,a,l,h){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,h)}set(t,e,n,r,s,o,a,l,h){const d=this.elements;return d[0]=t,d[1]=r,d[2]=a,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],d=n[4],p=n[7],_=n[2],u=n[5],v=n[8],g=r[0],f=r[3],c=r[6],S=r[1],y=r[4],E=r[7],C=r[2],U=r[5],L=r[8];return s[0]=o*g+a*S+l*C,s[3]=o*f+a*y+l*U,s[6]=o*c+a*E+l*L,s[1]=h*g+d*S+p*C,s[4]=h*f+d*y+p*U,s[7]=h*c+d*E+p*L,s[2]=_*g+u*S+v*C,s[5]=_*f+u*y+v*U,s[8]=_*c+u*E+v*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],d=t[8];return e*o*d-e*a*h-n*s*d+n*a*l+r*s*h-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],d=t[8],p=d*o-a*h,_=a*l-d*s,u=h*s-o*l,v=e*p+n*_+r*u;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=p*g,t[1]=(r*h-d*n)*g,t[2]=(a*n-r*o)*g,t[3]=_*g,t[4]=(d*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=u*g,t[7]=(n*l-h*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-r*h,r*l,-r*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Er.makeScale(t,e)),this}rotate(t){return this.premultiply(Er.makeRotation(-t)),this}translate(t,e){return this.premultiply(Er.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Er=new Ht;function Ro(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ri(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fc(){const i=Ri("canvas");return i.style.display="block",i}const _a={};function Qn(i){i in _a||(_a[i]=!0,console.warn(i))}function pc(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function mc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _c(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ga=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),va=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gc(){const i={enabled:!0,workingColorSpace:ui,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===te&&(r.r=rn(r.r),r.g=rn(r.g),r.b=rn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===te&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pn?fr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ui]:{primaries:t,whitePoint:n,transfer:fr,toXYZ:ga,fromXYZ:va,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:te,toXYZ:ga,fromXYZ:va,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),i}const Zt=gc();function rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function si(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let kn;class vc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{kn===void 0&&(kn=Ri("canvas")),kn.width=t.width,kn.height=t.height;const n=kn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=kn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ri("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=rn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(rn(e[n]/255)*255):e[n]=rn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xc=0;class Co{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(br(r[o].image)):s.push(br(r[o]))}else s=br(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mc=0;class Se extends Fn{constructor(t=Se.DEFAULT_IMAGE,e=Se.DEFAULT_MAPPING,n=Dn,r=Dn,s=Ve,o=Ln,a=ke,l=an,h=Se.DEFAULT_ANISOTROPY,d=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=fi(),this.name="",this.source=new Co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fs:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case ps:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fs:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case ps:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Se.DEFAULT_IMAGE=null;Se.DEFAULT_MAPPING=mo;Se.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,r=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,h=l[0],d=l[4],p=l[8],_=l[1],u=l[5],v=l[9],g=l[2],f=l[6],c=l[10];if(Math.abs(d-_)<.01&&Math.abs(p-g)<.01&&Math.abs(v-f)<.01){if(Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(v+f)<.1&&Math.abs(h+u+c-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(h+1)/2,E=(u+1)/2,C=(c+1)/2,U=(d+_)/4,L=(p+g)/4,F=(v+f)/4;return y>E&&y>C?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=U/n,s=L/n):E>C?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=U/r,s=F/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=L/s,r=F/s),this.set(n,r,s,e),this}let S=Math.sqrt((f-v)*(f-v)+(p-g)*(p-g)+(_-d)*(_-d));return Math.abs(S)<.001&&(S=1),this.x=(f-v)/S,this.y=(p-g)/S,this.z=(_-d)/S,this.w=Math.acos((h+u+c-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sc extends Fn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Se(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Co(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Sc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Po extends Se{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ze,this.minFilter=ze,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yc extends Se{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ze,this.minFilter=ze,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],h=n[r+1],d=n[r+2],p=n[r+3];const _=s[o+0],u=s[o+1],v=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=d,t[e+3]=p;return}if(a===1){t[e+0]=_,t[e+1]=u,t[e+2]=v,t[e+3]=g;return}if(p!==g||l!==_||h!==u||d!==v){let f=1-a;const c=l*_+h*u+d*v+p*g,S=c>=0?1:-1,y=1-c*c;if(y>Number.EPSILON){const C=Math.sqrt(y),U=Math.atan2(C,c*S);f=Math.sin(f*U)/C,a=Math.sin(a*U)/C}const E=a*S;if(l=l*f+_*E,h=h*f+u*E,d=d*f+v*E,p=p*f+g*E,f===1-a){const C=1/Math.sqrt(l*l+h*h+d*d+p*p);l*=C,h*=C,d*=C,p*=C}}t[e]=l,t[e+1]=h,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],h=n[r+2],d=n[r+3],p=s[o],_=s[o+1],u=s[o+2],v=s[o+3];return t[e]=a*v+d*p+l*u-h*_,t[e+1]=l*v+d*_+h*p-a*u,t[e+2]=h*v+d*u+a*_-l*p,t[e+3]=d*v-a*p-l*_-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),d=a(r/2),p=a(s/2),_=l(n/2),u=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=_*d*p+h*u*v,this._y=h*u*p-_*d*v,this._z=h*d*v+_*u*p,this._w=h*d*p-_*u*v;break;case"YXZ":this._x=_*d*p+h*u*v,this._y=h*u*p-_*d*v,this._z=h*d*v-_*u*p,this._w=h*d*p+_*u*v;break;case"ZXY":this._x=_*d*p-h*u*v,this._y=h*u*p+_*d*v,this._z=h*d*v+_*u*p,this._w=h*d*p-_*u*v;break;case"ZYX":this._x=_*d*p-h*u*v,this._y=h*u*p+_*d*v,this._z=h*d*v-_*u*p,this._w=h*d*p+_*u*v;break;case"YZX":this._x=_*d*p+h*u*v,this._y=h*u*p+_*d*v,this._z=h*d*v-_*u*p,this._w=h*d*p-_*u*v;break;case"XZY":this._x=_*d*p-h*u*v,this._y=h*u*p-_*d*v,this._z=h*d*v+_*u*p,this._w=h*d*p+_*u*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],h=e[2],d=e[6],p=e[10],_=n+a+p;if(_>0){const u=.5/Math.sqrt(_+1);this._w=.25/u,this._x=(d-l)*u,this._y=(s-h)*u,this._z=(o-r)*u}else if(n>a&&n>p){const u=2*Math.sqrt(1+n-a-p);this._w=(d-l)/u,this._x=.25*u,this._y=(r+o)/u,this._z=(s+h)/u}else if(a>p){const u=2*Math.sqrt(1+a-n-p);this._w=(s-h)/u,this._x=(r+o)/u,this._y=.25*u,this._z=(l+d)/u}else{const u=2*Math.sqrt(1+p-n-a);this._w=(o-r)/u,this._x=(s+h)/u,this._y=(l+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,h=e._z,d=e._w;return this._x=n*d+o*a+r*h-s*l,this._y=r*d+o*l+s*a-n*h,this._z=s*d+o*h+n*l-r*a,this._w=o*d-n*a-r*l-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*r+e*this._y,this._z=u*s+e*this._z,this.normalize(),this}const h=Math.sqrt(l),d=Math.atan2(h,a),p=Math.sin((1-e)*d)/h,_=Math.sin(e*d)/h;return this._w=o*p+this._w*_,this._x=n*p+this._x*_,this._y=r*p+this._y*_,this._z=s*p+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,e=0,n=0){et.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*r-a*n),d=2*(a*e-s*r),p=2*(s*n-o*e);return this.x=e+l*h+o*p-a*d,this.y=n+l*d+a*h-s*p,this.z=r+l*p+s*d-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Tr.copy(this).projectOnVector(t),this.sub(Tr)}reflect(t){return this.sub(Tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tr=new et,xa=new Nn;class Di{constructor(t=new et(1/0,1/0,1/0),e=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ne.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ne.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ne.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ne):Ne.fromBufferAttribute(s,o),Ne.applyMatrix4(t.matrixWorld),this.expandByPoint(Ne);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bi.copy(n.boundingBox)),Bi.applyMatrix4(t.matrixWorld),this.union(Bi)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ne),Ne.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gi),ki.subVectors(this.max,gi),zn.subVectors(t.a,gi),Hn.subVectors(t.b,gi),Gn.subVectors(t.c,gi),on.subVectors(Hn,zn),ln.subVectors(Gn,Hn),yn.subVectors(zn,Gn);let e=[0,-on.z,on.y,0,-ln.z,ln.y,0,-yn.z,yn.y,on.z,0,-on.x,ln.z,0,-ln.x,yn.z,0,-yn.x,-on.y,on.x,0,-ln.y,ln.x,0,-yn.y,yn.x,0];return!wr(e,zn,Hn,Gn,ki)||(e=[1,0,0,0,1,0,0,0,1],!wr(e,zn,Hn,Gn,ki))?!1:(zi.crossVectors(on,ln),e=[zi.x,zi.y,zi.z],wr(e,zn,Hn,Gn,ki))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ne).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ne).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const je=[new et,new et,new et,new et,new et,new et,new et,new et],Ne=new et,Bi=new Di,zn=new et,Hn=new et,Gn=new et,on=new et,ln=new et,yn=new et,gi=new et,ki=new et,zi=new et,En=new et;function wr(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){En.fromArray(i,s);const a=r.x*Math.abs(En.x)+r.y*Math.abs(En.y)+r.z*Math.abs(En.z),l=t.dot(En),h=e.dot(En),d=n.dot(En);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>a)return!1}return!0}const Ec=new Di,vi=new et,Ar=new et;class $s{constructor(t=new et,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ec.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vi.subVectors(t,this.center);const e=vi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(vi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ar.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vi.copy(t.center).add(Ar)),this.expandByPoint(vi.copy(t.center).sub(Ar))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ze=new et,Rr=new et,Hi=new et,cn=new et,Cr=new et,Gi=new et,Pr=new et;class Do{constructor(t=new et,e=new et(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ze)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ze.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ze.copy(this.origin).addScaledVector(this.direction,e),Ze.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Rr.copy(t).add(e).multiplyScalar(.5),Hi.copy(e).sub(t).normalize(),cn.copy(this.origin).sub(Rr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Hi),a=cn.dot(this.direction),l=-cn.dot(Hi),h=cn.lengthSq(),d=Math.abs(1-o*o);let p,_,u,v;if(d>0)if(p=o*l-a,_=o*a-l,v=s*d,p>=0)if(_>=-v)if(_<=v){const g=1/d;p*=g,_*=g,u=p*(p+o*_+2*a)+_*(o*p+_+2*l)+h}else _=s,p=Math.max(0,-(o*_+a)),u=-p*p+_*(_+2*l)+h;else _=-s,p=Math.max(0,-(o*_+a)),u=-p*p+_*(_+2*l)+h;else _<=-v?(p=Math.max(0,-(-o*s+a)),_=p>0?-s:Math.min(Math.max(-s,-l),s),u=-p*p+_*(_+2*l)+h):_<=v?(p=0,_=Math.min(Math.max(-s,-l),s),u=_*(_+2*l)+h):(p=Math.max(0,-(o*s+a)),_=p>0?s:Math.min(Math.max(-s,-l),s),u=-p*p+_*(_+2*l)+h);else _=o>0?-s:s,p=Math.max(0,-(o*_+a)),u=-p*p+_*(_+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Rr).addScaledVector(Hi,_),u}intersectSphere(t,e){Ze.subVectors(t.center,this.origin);const n=Ze.dot(this.direction),r=Ze.dot(Ze)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const h=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,_=this.origin;return h>=0?(n=(t.min.x-_.x)*h,r=(t.max.x-_.x)*h):(n=(t.max.x-_.x)*h,r=(t.min.x-_.x)*h),d>=0?(s=(t.min.y-_.y)*d,o=(t.max.y-_.y)*d):(s=(t.max.y-_.y)*d,o=(t.min.y-_.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(t.min.z-_.z)*p,l=(t.max.z-_.z)*p):(a=(t.max.z-_.z)*p,l=(t.min.z-_.z)*p),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ze)!==null}intersectTriangle(t,e,n,r,s){Cr.subVectors(e,t),Gi.subVectors(n,t),Pr.crossVectors(Cr,Gi);let o=this.direction.dot(Pr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cn.subVectors(this.origin,t);const l=a*this.direction.dot(Gi.crossVectors(cn,Gi));if(l<0)return null;const h=a*this.direction.dot(Cr.cross(cn));if(h<0||l+h>o)return null;const d=-a*cn.dot(Pr);return d<0?null:this.at(d/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,r,s,o,a,l,h,d,p,_,u,v,g,f){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,h,d,p,_,u,v,g,f)}set(t,e,n,r,s,o,a,l,h,d,p,_,u,v,g,f){const c=this.elements;return c[0]=t,c[4]=e,c[8]=n,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=h,c[6]=d,c[10]=p,c[14]=_,c[3]=u,c[7]=v,c[11]=g,c[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Vn.setFromMatrixColumn(t,0).length(),s=1/Vn.setFromMatrixColumn(t,1).length(),o=1/Vn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),h=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const _=o*d,u=o*p,v=a*d,g=a*p;e[0]=l*d,e[4]=-l*p,e[8]=h,e[1]=u+v*h,e[5]=_-g*h,e[9]=-a*l,e[2]=g-_*h,e[6]=v+u*h,e[10]=o*l}else if(t.order==="YXZ"){const _=l*d,u=l*p,v=h*d,g=h*p;e[0]=_+g*a,e[4]=v*a-u,e[8]=o*h,e[1]=o*p,e[5]=o*d,e[9]=-a,e[2]=u*a-v,e[6]=g+_*a,e[10]=o*l}else if(t.order==="ZXY"){const _=l*d,u=l*p,v=h*d,g=h*p;e[0]=_-g*a,e[4]=-o*p,e[8]=v+u*a,e[1]=u+v*a,e[5]=o*d,e[9]=g-_*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const _=o*d,u=o*p,v=a*d,g=a*p;e[0]=l*d,e[4]=v*h-u,e[8]=_*h+g,e[1]=l*p,e[5]=g*h+_,e[9]=u*h-v,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const _=o*l,u=o*h,v=a*l,g=a*h;e[0]=l*d,e[4]=g-_*p,e[8]=v*p+u,e[1]=p,e[5]=o*d,e[9]=-a*d,e[2]=-h*d,e[6]=u*p+v,e[10]=_-g*p}else if(t.order==="XZY"){const _=o*l,u=o*h,v=a*l,g=a*h;e[0]=l*d,e[4]=-p,e[8]=h*d,e[1]=_*p+g,e[5]=o*d,e[9]=u*p-v,e[2]=v*p-u,e[6]=a*d,e[10]=g*p+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bc,t,Tc)}lookAt(t,e,n){const r=this.elements;return we.subVectors(t,e),we.lengthSq()===0&&(we.z=1),we.normalize(),hn.crossVectors(n,we),hn.lengthSq()===0&&(Math.abs(n.z)===1?we.x+=1e-4:we.z+=1e-4,we.normalize(),hn.crossVectors(n,we)),hn.normalize(),Vi.crossVectors(we,hn),r[0]=hn.x,r[4]=Vi.x,r[8]=we.x,r[1]=hn.y,r[5]=Vi.y,r[9]=we.y,r[2]=hn.z,r[6]=Vi.z,r[10]=we.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],d=n[1],p=n[5],_=n[9],u=n[13],v=n[2],g=n[6],f=n[10],c=n[14],S=n[3],y=n[7],E=n[11],C=n[15],U=r[0],L=r[4],F=r[8],b=r[12],T=r[1],O=r[5],D=r[9],A=r[13],x=r[2],I=r[6],Z=r[10],k=r[14],Y=r[3],tt=r[7],ot=r[11],H=r[15];return s[0]=o*U+a*T+l*x+h*Y,s[4]=o*L+a*O+l*I+h*tt,s[8]=o*F+a*D+l*Z+h*ot,s[12]=o*b+a*A+l*k+h*H,s[1]=d*U+p*T+_*x+u*Y,s[5]=d*L+p*O+_*I+u*tt,s[9]=d*F+p*D+_*Z+u*ot,s[13]=d*b+p*A+_*k+u*H,s[2]=v*U+g*T+f*x+c*Y,s[6]=v*L+g*O+f*I+c*tt,s[10]=v*F+g*D+f*Z+c*ot,s[14]=v*b+g*A+f*k+c*H,s[3]=S*U+y*T+E*x+C*Y,s[7]=S*L+y*O+E*I+C*tt,s[11]=S*F+y*D+E*Z+C*ot,s[15]=S*b+y*A+E*k+C*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],h=t[13],d=t[2],p=t[6],_=t[10],u=t[14],v=t[3],g=t[7],f=t[11],c=t[15];return v*(+s*l*p-r*h*p-s*a*_+n*h*_+r*a*u-n*l*u)+g*(+e*l*u-e*h*_+s*o*_-r*o*u+r*h*d-s*l*d)+f*(+e*h*p-e*a*u-s*o*p+n*o*u+s*a*d-n*h*d)+c*(-r*a*d-e*l*p+e*a*_+r*o*p-n*o*_+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],d=t[8],p=t[9],_=t[10],u=t[11],v=t[12],g=t[13],f=t[14],c=t[15],S=p*f*h-g*_*h+g*l*u-a*f*u-p*l*c+a*_*c,y=v*_*h-d*f*h-v*l*u+o*f*u+d*l*c-o*_*c,E=d*g*h-v*p*h+v*a*u-o*g*u-d*a*c+o*p*c,C=v*p*l-d*g*l-v*a*_+o*g*_+d*a*f-o*p*f,U=e*S+n*y+r*E+s*C;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/U;return t[0]=S*L,t[1]=(g*_*s-p*f*s-g*r*u+n*f*u+p*r*c-n*_*c)*L,t[2]=(a*f*s-g*l*s+g*r*h-n*f*h-a*r*c+n*l*c)*L,t[3]=(p*l*s-a*_*s-p*r*h+n*_*h+a*r*u-n*l*u)*L,t[4]=y*L,t[5]=(d*f*s-v*_*s+v*r*u-e*f*u-d*r*c+e*_*c)*L,t[6]=(v*l*s-o*f*s-v*r*h+e*f*h+o*r*c-e*l*c)*L,t[7]=(o*_*s-d*l*s+d*r*h-e*_*h-o*r*u+e*l*u)*L,t[8]=E*L,t[9]=(v*p*s-d*g*s-v*n*u+e*g*u+d*n*c-e*p*c)*L,t[10]=(o*g*s-v*a*s+v*n*h-e*g*h-o*n*c+e*a*c)*L,t[11]=(d*a*s-o*p*s-d*n*h+e*p*h+o*n*u-e*a*u)*L,t[12]=C*L,t[13]=(d*g*r-v*p*r+v*n*_-e*g*_-d*n*f+e*p*f)*L,t[14]=(v*a*r-o*g*r-v*n*l+e*g*l+o*n*f-e*a*f)*L,t[15]=(o*p*r-d*a*r+d*n*l-e*p*l-o*n*_+e*a*_)*L,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,h=s*o,d=s*a;return this.set(h*o+n,h*a-r*l,h*l+r*a,0,h*a+r*l,d*a+n,d*l-r*o,0,h*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,h=s+s,d=o+o,p=a+a,_=s*h,u=s*d,v=s*p,g=o*d,f=o*p,c=a*p,S=l*h,y=l*d,E=l*p,C=n.x,U=n.y,L=n.z;return r[0]=(1-(g+c))*C,r[1]=(u+E)*C,r[2]=(v-y)*C,r[3]=0,r[4]=(u-E)*U,r[5]=(1-(_+c))*U,r[6]=(f+S)*U,r[7]=0,r[8]=(v+y)*L,r[9]=(f-S)*L,r[10]=(1-(_+g))*L,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Vn.set(r[0],r[1],r[2]).length();const o=Vn.set(r[4],r[5],r[6]).length(),a=Vn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Fe.copy(this);const h=1/s,d=1/o,p=1/a;return Fe.elements[0]*=h,Fe.elements[1]*=h,Fe.elements[2]*=h,Fe.elements[4]*=d,Fe.elements[5]*=d,Fe.elements[6]*=d,Fe.elements[8]*=p,Fe.elements[9]*=p,Fe.elements[10]*=p,e.setFromRotationMatrix(Fe),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=nn){const l=this.elements,h=2*s/(e-t),d=2*s/(n-r),p=(e+t)/(e-t),_=(n+r)/(n-r);let u,v;if(a===nn)u=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===pr)u=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=_,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=nn){const l=this.elements,h=1/(e-t),d=1/(n-r),p=1/(o-s),_=(e+t)*h,u=(n+r)*d;let v,g;if(a===nn)v=(o+s)*p,g=-2*p;else if(a===pr)v=s*p,g=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-_,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vn=new et,Fe=new ie,bc=new et(0,0,0),Tc=new et(1,1,1),hn=new et,Vi=new et,we=new et,Ma=new ie,Sa=new Nn;class Ye{constructor(t=0,e=0,n=0,r=Ye.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],h=r[5],d=r[9],p=r[2],_=r[6],u=r[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(_,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ma.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ma,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sa.setFromEuler(this),this.setFromQuaternion(Sa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ye.DEFAULT_ORDER="XYZ";class Lo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wc=0;const ya=new et,Wn=new Nn,Ke=new ie,Wi=new et,xi=new et,Ac=new et,Rc=new Nn,Ea=new et(1,0,0),ba=new et(0,1,0),Ta=new et(0,0,1),wa={type:"added"},Cc={type:"removed"},Xn={type:"childadded",child:null},Dr={type:"childremoved",child:null};class ge extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new et,e=new Ye,n=new Nn,r=new et(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ht}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wn.setFromAxisAngle(t,e),this.quaternion.multiply(Wn),this}rotateOnWorldAxis(t,e){return Wn.setFromAxisAngle(t,e),this.quaternion.premultiply(Wn),this}rotateX(t){return this.rotateOnAxis(Ea,t)}rotateY(t){return this.rotateOnAxis(ba,t)}rotateZ(t){return this.rotateOnAxis(Ta,t)}translateOnAxis(t,e){return ya.copy(t).applyQuaternion(this.quaternion),this.position.add(ya.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ea,t)}translateY(t){return this.translateOnAxis(ba,t)}translateZ(t){return this.translateOnAxis(Ta,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ke.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wi.copy(t):Wi.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ke.lookAt(xi,Wi,this.up):Ke.lookAt(Wi,xi,this.up),this.quaternion.setFromRotationMatrix(Ke),r&&(Ke.extractRotation(r.matrixWorld),Wn.setFromRotationMatrix(Ke),this.quaternion.premultiply(Wn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wa),Xn.child=t,this.dispatchEvent(Xn),Xn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cc),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ke.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ke.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ke),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wa),Xn.child=t,this.dispatchEvent(Xn),Xn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,t,Ac),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,Rc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const p=l[h];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),d=o(t.images),p=o(t.shapes),_=o(t.skeletons),u=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),_.length>0&&(n.skeletons=_),u.length>0&&(n.animations=u),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const h in a){const d=a[h];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ge.DEFAULT_UP=new et(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oe=new et,$e=new et,Lr=new et,Je=new et,Yn=new et,qn=new et,Aa=new et,Ir=new et,Ur=new et,Nr=new et,Fr=new ne,Or=new ne,Br=new ne;class Be{constructor(t=new et,e=new et,n=new et){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Oe.subVectors(t,e),r.cross(Oe);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Oe.subVectors(r,e),$e.subVectors(n,e),Lr.subVectors(t,e);const o=Oe.dot(Oe),a=Oe.dot($e),l=Oe.dot(Lr),h=$e.dot($e),d=$e.dot(Lr),p=o*h-a*a;if(p===0)return s.set(0,0,0),null;const _=1/p,u=(h*l-a*d)*_,v=(o*d-a*l)*_;return s.set(1-u-v,v,u)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Je)===null?!1:Je.x>=0&&Je.y>=0&&Je.x+Je.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Je)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Je.x),l.addScaledVector(o,Je.y),l.addScaledVector(a,Je.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Fr.setScalar(0),Or.setScalar(0),Br.setScalar(0),Fr.fromBufferAttribute(t,e),Or.fromBufferAttribute(t,n),Br.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Fr,s.x),o.addScaledVector(Or,s.y),o.addScaledVector(Br,s.z),o}static isFrontFacing(t,e,n,r){return Oe.subVectors(n,e),$e.subVectors(t,e),Oe.cross($e).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oe.subVectors(this.c,this.b),$e.subVectors(this.a,this.b),Oe.cross($e).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Be.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Be.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Be.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Be.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Be.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Yn.subVectors(r,n),qn.subVectors(s,n),Ir.subVectors(t,n);const l=Yn.dot(Ir),h=qn.dot(Ir);if(l<=0&&h<=0)return e.copy(n);Ur.subVectors(t,r);const d=Yn.dot(Ur),p=qn.dot(Ur);if(d>=0&&p<=d)return e.copy(r);const _=l*p-d*h;if(_<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(Yn,o);Nr.subVectors(t,s);const u=Yn.dot(Nr),v=qn.dot(Nr);if(v>=0&&u<=v)return e.copy(s);const g=u*h-l*v;if(g<=0&&h>=0&&v<=0)return a=h/(h-v),e.copy(n).addScaledVector(qn,a);const f=d*v-u*p;if(f<=0&&p-d>=0&&u-v>=0)return Aa.subVectors(s,r),a=(p-d)/(p-d+(u-v)),e.copy(r).addScaledVector(Aa,a);const c=1/(f+g+_);return o=g*c,a=_*c,e.copy(n).addScaledVector(Yn,o).addScaledVector(qn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Io={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Xi={h:0,s:0,l:0};function kr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Zt.workingColorSpace){if(t=Ks(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=kr(o,s,t+1/3),this.g=kr(o,s,t),this.b=kr(o,s,t-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(t,e=Le){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=Io[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rn(t.r),this.g=rn(t.g),this.b=rn(t.b),this}copyLinearToSRGB(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return Zt.fromWorkingColorSpace(_e.copy(this),t),Math.round(Wt(_e.r*255,0,255))*65536+Math.round(Wt(_e.g*255,0,255))*256+Math.round(Wt(_e.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(_e.copy(this),e);const n=_e.r,r=_e.g,s=_e.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,h;const d=(a+o)/2;if(a===o)l=0,h=0;else{const p=o-a;switch(h=d<=.5?p/(o+a):p/(2-o-a),o){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return t.h=l,t.s=h,t.l=d,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=Le){Zt.fromWorkingColorSpace(_e.copy(this),t);const e=_e.r,n=_e.g,r=_e.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(un),this.setHSL(un.h+t,un.s+e,un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(un),t.getHSL(Xi);const n=Ti(un.h,Xi.h,e),r=Ti(un.s,Xi.s,e),s=Ti(un.l,Xi.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _e=new qt;qt.NAMES=Io;let Pc=0;class Li extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=ii,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ns,this.blendDst=is,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bn,this.stencilZFail=Bn,this.stencilZPass=Bn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ns&&(n.blendSrc=this.blendSrc),this.blendDst!==is&&(n.blendDst=this.blendDst),this.blendEquation!==Cn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==da&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Uo extends Li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=Vs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new et,Yi=new kt;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fa,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yi.fromBufferAttribute(this,e),Yi.applyMatrix3(t),this.setXY(e,Yi.x,Yi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),r=xe(r,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fa&&(t.usage=this.usage),t}}class No extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Fo extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class sn extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Dc=0;const De=new ie,zr=new ge,jn=new et,Ae=new Di,Mi=new Di,de=new et;class xn extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ro(t)?Fo:No)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return De.makeRotationFromQuaternion(t),this.applyMatrix4(De),this}rotateX(t){return De.makeRotationX(t),this.applyMatrix4(De),this}rotateY(t){return De.makeRotationY(t),this.applyMatrix4(De),this}rotateZ(t){return De.makeRotationZ(t),this.applyMatrix4(De),this}translate(t,e,n){return De.makeTranslation(t,e,n),this.applyMatrix4(De),this}scale(t,e,n){return De.makeScale(t,e,n),this.applyMatrix4(De),this}lookAt(t){return zr.lookAt(t),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new sn(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ae.setFromBufferAttribute(s),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Ae.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Ae.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Ae.min),this.boundingBox.expandByPoint(Ae.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const n=this.boundingSphere.center;if(Ae.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Mi.setFromBufferAttribute(a),this.morphTargetsRelative?(de.addVectors(Ae.min,Mi.min),Ae.expandByPoint(de),de.addVectors(Ae.max,Mi.max),Ae.expandByPoint(de)):(Ae.expandByPoint(Mi.min),Ae.expandByPoint(Mi.max))}Ae.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)de.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(de));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)de.fromBufferAttribute(a,h),l&&(jn.fromBufferAttribute(t,h),de.add(jn)),r=Math.max(r,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new et,l[F]=new et;const h=new et,d=new et,p=new et,_=new kt,u=new kt,v=new kt,g=new et,f=new et;function c(F,b,T){h.fromBufferAttribute(n,F),d.fromBufferAttribute(n,b),p.fromBufferAttribute(n,T),_.fromBufferAttribute(s,F),u.fromBufferAttribute(s,b),v.fromBufferAttribute(s,T),d.sub(h),p.sub(h),u.sub(_),v.sub(_);const O=1/(u.x*v.y-v.x*u.y);isFinite(O)&&(g.copy(d).multiplyScalar(v.y).addScaledVector(p,-u.y).multiplyScalar(O),f.copy(p).multiplyScalar(u.x).addScaledVector(d,-v.x).multiplyScalar(O),a[F].add(g),a[b].add(g),a[T].add(g),l[F].add(f),l[b].add(f),l[T].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let F=0,b=S.length;F<b;++F){const T=S[F],O=T.start,D=T.count;for(let A=O,x=O+D;A<x;A+=3)c(t.getX(A+0),t.getX(A+1),t.getX(A+2))}const y=new et,E=new et,C=new et,U=new et;function L(F){C.fromBufferAttribute(r,F),U.copy(C);const b=a[F];y.copy(b),y.sub(C.multiplyScalar(C.dot(b))).normalize(),E.crossVectors(U,b);const O=E.dot(l[F])<0?-1:1;o.setXYZW(F,y.x,y.y,y.z,O)}for(let F=0,b=S.length;F<b;++F){const T=S[F],O=T.start,D=T.count;for(let A=O,x=O+D;A<x;A+=3)L(t.getX(A+0)),L(t.getX(A+1)),L(t.getX(A+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let _=0,u=n.count;_<u;_++)n.setXYZ(_,0,0,0);const r=new et,s=new et,o=new et,a=new et,l=new et,h=new et,d=new et,p=new et;if(t)for(let _=0,u=t.count;_<u;_+=3){const v=t.getX(_+0),g=t.getX(_+1),f=t.getX(_+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,f),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,f),a.add(d),l.add(d),h.add(d),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,h.x,h.y,h.z)}else for(let _=0,u=e.count;_<u;_+=3)r.fromBufferAttribute(e,_+0),s.fromBufferAttribute(e,_+1),o.fromBufferAttribute(e,_+2),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),n.setXYZ(_+0,d.x,d.y,d.z),n.setXYZ(_+1,d.x,d.y,d.z),n.setXYZ(_+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(a,l){const h=a.array,d=a.itemSize,p=a.normalized,_=new h.constructor(l.length*d);let u=0,v=0;for(let g=0,f=l.length;g<f;g++){a.isInterleavedBufferAttribute?u=l[g]*a.data.stride+a.offset:u=l[g]*d;for(let c=0;c<d;c++)_[v++]=h[u++]}return new Xe(_,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],h=t(l,n);e.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const l=[],h=s[a];for(let d=0,p=h.length;d<p;d++){const _=h[d],u=t(_,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let p=0,_=h.length;p<_;p++){const u=h[p];d.push(u.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const h in r){const d=r[h];this.setAttribute(h,d.clone(e))}const s=t.morphAttributes;for(const h in s){const d=[],p=s[h];for(let _=0,u=p.length;_<u;_++)d.push(p[_].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,d=o.length;h<d;h++){const p=o[h];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ra=new ie,bn=new Do,qi=new $s,Ca=new et,ji=new et,Zi=new et,Ki=new et,Hr=new et,$i=new et,Pa=new et,Ji=new et;class We extends ge{constructor(t=new xn,e=new Uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){$i.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const d=a[l],p=s[l];d!==0&&(Hr.fromBufferAttribute(p,t),o?$i.addScaledVector(Hr,d):$i.addScaledVector(Hr.sub(e),d))}e.add($i)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(s),bn.copy(t.ray).recast(t.near),!(qi.containsPoint(bn.origin)===!1&&(bn.intersectSphere(qi,Ca)===null||bn.origin.distanceToSquared(Ca)>(t.far-t.near)**2))&&(Ra.copy(s).invert(),bn.copy(t.ray).applyMatrix4(Ra),!(n.boundingBox!==null&&bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,h=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,_=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=_.length;v<g;v++){const f=_[v],c=o[f.materialIndex],S=Math.max(f.start,u.start),y=Math.min(a.count,Math.min(f.start+f.count,u.start+u.count));for(let E=S,C=y;E<C;E+=3){const U=a.getX(E),L=a.getX(E+1),F=a.getX(E+2);r=Qi(this,c,t,n,h,d,p,U,L,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const v=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let f=v,c=g;f<c;f+=3){const S=a.getX(f),y=a.getX(f+1),E=a.getX(f+2);r=Qi(this,o,t,n,h,d,p,S,y,E),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=_.length;v<g;v++){const f=_[v],c=o[f.materialIndex],S=Math.max(f.start,u.start),y=Math.min(l.count,Math.min(f.start+f.count,u.start+u.count));for(let E=S,C=y;E<C;E+=3){const U=E,L=E+1,F=E+2;r=Qi(this,c,t,n,h,d,p,U,L,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const v=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let f=v,c=g;f<c;f+=3){const S=f,y=f+1,E=f+2;r=Qi(this,o,t,n,h,d,p,S,y,E),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function Lc(i,t,e,n,r,s,o,a){let l;if(t.side===be?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===gn,a),l===null)return null;Ji.copy(a),Ji.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Ji);return h<e.near||h>e.far?null:{distance:h,point:Ji.clone(),object:i}}function Qi(i,t,e,n,r,s,o,a,l,h){i.getVertexPosition(a,ji),i.getVertexPosition(l,Zi),i.getVertexPosition(h,Ki);const d=Lc(i,t,e,n,ji,Zi,Ki,Pa);if(d){const p=new et;Be.getBarycoord(Pa,ji,Zi,Ki,p),r&&(d.uv=Be.getInterpolatedAttribute(r,a,l,h,p,new kt)),s&&(d.uv1=Be.getInterpolatedAttribute(s,a,l,h,p,new kt)),o&&(d.normal=Be.getInterpolatedAttribute(o,a,l,h,p,new et),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const _={a,b:l,c:h,normal:new et,materialIndex:0};Be.getNormal(ji,Zi,Ki,_.normal),d.face=_,d.barycoord=p}return d}class Ii extends xn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],h=[],d=[],p=[];let _=0,u=0;v("z","y","x",-1,-1,n,e,t,o,s,0),v("z","y","x",1,-1,n,e,-t,o,s,1),v("x","z","y",1,1,t,n,e,r,o,2),v("x","z","y",1,-1,t,n,-e,r,o,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new sn(h,3)),this.setAttribute("normal",new sn(d,3)),this.setAttribute("uv",new sn(p,2));function v(g,f,c,S,y,E,C,U,L,F,b){const T=E/L,O=C/F,D=E/2,A=C/2,x=U/2,I=L+1,Z=F+1;let k=0,Y=0;const tt=new et;for(let ot=0;ot<Z;ot++){const H=ot*O-A;for(let V=0;V<I;V++){const _t=V*T-D;tt[g]=_t*S,tt[f]=H*y,tt[c]=x,h.push(tt.x,tt.y,tt.z),tt[g]=0,tt[f]=0,tt[c]=U>0?1:-1,d.push(tt.x,tt.y,tt.z),p.push(V/L),p.push(1-ot/F),k+=1}}for(let ot=0;ot<F;ot++)for(let H=0;H<L;H++){const V=_+H+I*ot,_t=_+H+I*(ot+1),G=_+(H+1)+I*(ot+1),j=_+(H+1)+I*ot;l.push(V,_t,j),l.push(_t,G,j),Y+=6}a.addGroup(u,Y,b),u+=Y,_+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function di(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Me(i){const t={};for(let e=0;e<i.length;e++){const n=di(i[e]);for(const r in n)t[r]=n[r]}return t}function Ic(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oo(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Uc={clone:di,merge:Me};var Nc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends Li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nc,this.fragmentShader=Fc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=di(t.uniforms),this.uniformsGroups=Ic(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Bo extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dn=new et,Da=new kt,La=new kt;class Re extends Bo{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ai*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ai*2*Math.atan(Math.tan(bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(dn.x,dn.y).multiplyScalar(-t/dn.z),dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dn.x,dn.y).multiplyScalar(-t/dn.z)}getViewSize(t,e){return this.getViewBounds(t,Da,La),e.subVectors(La,Da)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(bi*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/h,r*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zn=-90,Kn=1;class Oc extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Re(Zn,Kn,t,e);r.layers=this.layers,this.add(r);const s=new Re(Zn,Kn,t,e);s.layers=this.layers,this.add(s);const o=new Re(Zn,Kn,t,e);o.layers=this.layers,this.add(o);const a=new Re(Zn,Kn,t,e);a.layers=this.layers,this.add(a);const l=new Re(Zn,Kn,t,e);l.layers=this.layers,this.add(l);const h=new Re(Zn,Kn,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const h of e)this.remove(h);if(t===nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,h,d]=this.children,p=t.getRenderTarget(),_=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,h),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(p,_,u),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ko extends Se{constructor(t,e,n,r,s,o,a,l,h,d){t=t!==void 0?t:[],e=e!==void 0?e:oi,super(t,e,n,r,s,o,a,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bc extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ko(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ve}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ii(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:mn});s.uniforms.tEquirect.value=e;const o=new We(r,s),a=e.minFilter;return e.minFilter===Ln&&(e.minFilter=Ve),new Oc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class kc extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ye,this.environmentIntensity=1,this.environmentRotation=new Ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Gr=new et,zc=new et,Hc=new Ht;class fn{constructor(t=new et(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Gr.subVectors(n,e).cross(zc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Gr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hc.getNormalMatrix(t),r=this.coplanarPoint(Gr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tn=new $s,tr=new et;class Js{constructor(t=new fn,e=new fn,n=new fn,r=new fn,s=new fn,o=new fn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=nn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],h=r[4],d=r[5],p=r[6],_=r[7],u=r[8],v=r[9],g=r[10],f=r[11],c=r[12],S=r[13],y=r[14],E=r[15];if(n[0].setComponents(l-s,_-h,f-u,E-c).normalize(),n[1].setComponents(l+s,_+h,f+u,E+c).normalize(),n[2].setComponents(l+o,_+d,f+v,E+S).normalize(),n[3].setComponents(l-o,_-d,f-v,E-S).normalize(),n[4].setComponents(l-a,_-p,f-g,E-y).normalize(),e===nn)n[5].setComponents(l+a,_+p,f+g,E+y).normalize();else if(e===pr)n[5].setComponents(a,p,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(t){return Tn.center.set(0,0,0),Tn.radius=.7071067811865476,Tn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(tr.x=r.normal.x>0?t.max.x:t.min.x,tr.y=r.normal.y>0?t.max.y:t.min.y,tr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yi extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}class zo extends Se{constructor(t,e,n,r,s,o,a,l,h,d=ri){if(d!==ri&&d!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ri&&(n=In),n===void 0&&d===hi&&(n=ci),super(null,r,s,o,a,l,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class gr extends xn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),h=a+1,d=l+1,p=t/a,_=e/l,u=[],v=[],g=[],f=[];for(let c=0;c<d;c++){const S=c*_-o;for(let y=0;y<h;y++){const E=y*p-s;v.push(E,-S,0),g.push(0,0,1),f.push(y/a),f.push(1-c/l)}}for(let c=0;c<l;c++)for(let S=0;S<a;S++){const y=S+h*c,E=S+h*(c+1),C=S+1+h*(c+1),U=S+1+h*c;u.push(y,E,U),u.push(E,C,U)}this.setIndex(u),this.setAttribute("position",new sn(v,3)),this.setAttribute("normal",new sn(g,3)),this.setAttribute("uv",new sn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ia extends Li{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qt(16777215),this.specular=new qt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=Vs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gc extends Li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vc extends Li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const mr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Wc{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,l;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return h.push(d,p),this},this.removeHandler=function(d){const p=h.indexOf(d);return p!==-1&&h.splice(p,2),this},this.getHandler=function(d){for(let p=0,_=h.length;p<_;p+=2){const u=h[p],v=h[p+1];if(u.global&&(u.lastIndex=0),u.test(d))return v}return null}}}const Xc=new Wc;class Ui{constructor(t){this.manager=t!==void 0?t:Xc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ui.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qe={};class Yc extends Error{constructor(t,e){super(t),this.response=e}}class qc extends Ui{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=mr.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Qe[t]!==void 0){Qe[t].push({onLoad:e,onProgress:n,onError:r});return}Qe[t]=[],Qe[t].push({onLoad:e,onProgress:n,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const d=Qe[t],p=h.body.getReader(),_=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),u=_?parseInt(_):0,v=u!==0;let g=0;const f=new ReadableStream({start(c){S();function S(){p.read().then(({done:y,value:E})=>{if(y)c.close();else{g+=E.byteLength;const C=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:u});for(let U=0,L=d.length;U<L;U++){const F=d[U];F.onProgress&&F.onProgress(C)}c.enqueue(E),S()}},y=>{c.error(y)})}}});return new Response(f)}else throw new Yc(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return h.json();default:if(a===void 0)return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(a),_=p&&p[1]?p[1].toLowerCase():void 0,u=new TextDecoder(_);return h.arrayBuffer().then(v=>u.decode(v))}}}).then(h=>{mr.add(t,h);const d=Qe[t];delete Qe[t];for(let p=0,_=d.length;p<_;p++){const u=d[p];u.onLoad&&u.onLoad(h)}}).catch(h=>{const d=Qe[t];if(d===void 0)throw this.manager.itemError(t),h;delete Qe[t];for(let p=0,_=d.length;p<_;p++){const u=d[p];u.onError&&u.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class jc extends Ui{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=mr.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Ri("img");function l(){d(),mr.add(t,this),e&&e(this),s.manager.itemEnd(t)}function h(p){d(),r&&r(p),s.manager.itemError(t),s.manager.itemEnd(t)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Zc extends Ui{constructor(t){super(t)}load(t,e,n,r){const s=new Se,o=new jc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Ho extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Vr=new ie,Ua=new et,Na=new et;class Go{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ua.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ua),Na.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Na),e.updateMatrixWorld(),Vr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Fa=new ie,Si=new et,Wr=new et;class Kc extends Go{constructor(){super(new Re(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new kt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new et(1,0,0),new et(-1,0,0),new et(0,0,1),new et(0,0,-1),new et(0,1,0),new et(0,-1,0)],this._cubeUps=[new et(0,1,0),new et(0,1,0),new et(0,1,0),new et(0,1,0),new et(0,0,1),new et(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Si.setFromMatrixPosition(t.matrixWorld),n.position.copy(Si),Wr.copy(n.position),Wr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Wr),n.updateMatrixWorld(),r.makeTranslation(-Si.x,-Si.y,-Si.z),Fa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa)}}class $c extends Ho{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Kc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Vo extends Bo{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Jc extends Go{constructor(){super(new Vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qc extends Ho{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Jc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class th{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,r=t.length;n<r;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class eh extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Oa{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nh extends Fn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Ba(i,t,e,n){const r=ih(n);switch(e){case xo:return i*t;case So:return i*t;case yo:return i*t*2;case Eo:return i*t/r.components*r.byteLength;case qs:return i*t/r.components*r.byteLength;case bo:return i*t*2/r.components*r.byteLength;case js:return i*t*2/r.components*r.byteLength;case Mo:return i*t*3/r.components*r.byteLength;case ke:return i*t*4/r.components*r.byteLength;case Zs:return i*t*4/r.components*r.byteLength;case or:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cr:case hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _s:case vs:return Math.max(i,16)*Math.max(t,8)/4;case ms:case gs:return Math.max(i,8)*Math.max(t,8)/2;case xs:case Ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ss:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Es:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case bs:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ts:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ws:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case As:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Rs:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Cs:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ps:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ds:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ls:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Is:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Us:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ns:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ur:case Fs:case Os:return Math.ceil(i/4)*Math.ceil(t/4)*16;case To:case Bs:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ks:case zs:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ih(i){switch(i){case an:case _o:return{byteLength:1,components:1};case wi:case go:case Pi:return{byteLength:2,components:1};case Xs:case Ys:return{byteLength:2,components:4};case In:case Ws:case en:return{byteLength:4,components:1};case vo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gs);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wo(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function rh(i){const t=new WeakMap;function e(a,l){const h=a.array,d=a.usage,p=h.byteLength,_=i.createBuffer();i.bindBuffer(l,_),i.bufferData(l,h,d),a.onUploadCallback();let u;if(h instanceof Float32Array)u=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)u=i.SHORT;else if(h instanceof Uint32Array)u=i.UNSIGNED_INT;else if(h instanceof Int32Array)u=i.INT;else if(h instanceof Int8Array)u=i.BYTE;else if(h instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,h){const d=l.array,p=l.updateRanges;if(i.bindBuffer(h,a),p.length===0)i.bufferSubData(h,0,d);else{p.sort((u,v)=>u.start-v.start);let _=0;for(let u=1;u<p.length;u++){const v=p[_],g=p[u];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++_,p[_]=g)}p.length=_+1;for(let u=0,v=p.length;u<v;u++){const g=p[u];i.bufferSubData(h,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:r,remove:s,update:o}}var sh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ah=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ch=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ph=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ch=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ph=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ih=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Oh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$h=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ru=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,su=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,au=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ou=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,du=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_u=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Su=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Eu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Au=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ru=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Du=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Uu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ou=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ku=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ju=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ku=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$u=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ju=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,id=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,od=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ud=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,md=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ed=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Td=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ad=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ud=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Od=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:sh,alphahash_pars_fragment:ah,alphamap_fragment:oh,alphamap_pars_fragment:lh,alphatest_fragment:ch,alphatest_pars_fragment:hh,aomap_fragment:uh,aomap_pars_fragment:dh,batching_pars_vertex:fh,batching_vertex:ph,begin_vertex:mh,beginnormal_vertex:_h,bsdfs:gh,iridescence_fragment:vh,bumpmap_pars_fragment:xh,clipping_planes_fragment:Mh,clipping_planes_pars_fragment:Sh,clipping_planes_pars_vertex:yh,clipping_planes_vertex:Eh,color_fragment:bh,color_pars_fragment:Th,color_pars_vertex:wh,color_vertex:Ah,common:Rh,cube_uv_reflection_fragment:Ch,defaultnormal_vertex:Ph,displacementmap_pars_vertex:Dh,displacementmap_vertex:Lh,emissivemap_fragment:Ih,emissivemap_pars_fragment:Uh,colorspace_fragment:Nh,colorspace_pars_fragment:Fh,envmap_fragment:Oh,envmap_common_pars_fragment:Bh,envmap_pars_fragment:kh,envmap_pars_vertex:zh,envmap_physical_pars_fragment:$h,envmap_vertex:Hh,fog_vertex:Gh,fog_pars_vertex:Vh,fog_fragment:Wh,fog_pars_fragment:Xh,gradientmap_pars_fragment:Yh,lightmap_pars_fragment:qh,lights_lambert_fragment:jh,lights_lambert_pars_fragment:Zh,lights_pars_begin:Kh,lights_toon_fragment:Jh,lights_toon_pars_fragment:Qh,lights_phong_fragment:tu,lights_phong_pars_fragment:eu,lights_physical_fragment:nu,lights_physical_pars_fragment:iu,lights_fragment_begin:ru,lights_fragment_maps:su,lights_fragment_end:au,logdepthbuf_fragment:ou,logdepthbuf_pars_fragment:lu,logdepthbuf_pars_vertex:cu,logdepthbuf_vertex:hu,map_fragment:uu,map_pars_fragment:du,map_particle_fragment:fu,map_particle_pars_fragment:pu,metalnessmap_fragment:mu,metalnessmap_pars_fragment:_u,morphinstance_vertex:gu,morphcolor_vertex:vu,morphnormal_vertex:xu,morphtarget_pars_vertex:Mu,morphtarget_vertex:Su,normal_fragment_begin:yu,normal_fragment_maps:Eu,normal_pars_fragment:bu,normal_pars_vertex:Tu,normal_vertex:wu,normalmap_pars_fragment:Au,clearcoat_normal_fragment_begin:Ru,clearcoat_normal_fragment_maps:Cu,clearcoat_pars_fragment:Pu,iridescence_pars_fragment:Du,opaque_fragment:Lu,packing:Iu,premultiplied_alpha_fragment:Uu,project_vertex:Nu,dithering_fragment:Fu,dithering_pars_fragment:Ou,roughnessmap_fragment:Bu,roughnessmap_pars_fragment:ku,shadowmap_pars_fragment:zu,shadowmap_pars_vertex:Hu,shadowmap_vertex:Gu,shadowmask_pars_fragment:Vu,skinbase_vertex:Wu,skinning_pars_vertex:Xu,skinning_vertex:Yu,skinnormal_vertex:qu,specularmap_fragment:ju,specularmap_pars_fragment:Zu,tonemapping_fragment:Ku,tonemapping_pars_fragment:$u,transmission_fragment:Ju,transmission_pars_fragment:Qu,uv_pars_fragment:td,uv_pars_vertex:ed,uv_vertex:nd,worldpos_vertex:id,background_vert:rd,background_frag:sd,backgroundCube_vert:ad,backgroundCube_frag:od,cube_vert:ld,cube_frag:cd,depth_vert:hd,depth_frag:ud,distanceRGBA_vert:dd,distanceRGBA_frag:fd,equirect_vert:pd,equirect_frag:md,linedashed_vert:_d,linedashed_frag:gd,meshbasic_vert:vd,meshbasic_frag:xd,meshlambert_vert:Md,meshlambert_frag:Sd,meshmatcap_vert:yd,meshmatcap_frag:Ed,meshnormal_vert:bd,meshnormal_frag:Td,meshphong_vert:wd,meshphong_frag:Ad,meshphysical_vert:Rd,meshphysical_frag:Cd,meshtoon_vert:Pd,meshtoon_frag:Dd,points_vert:Ld,points_frag:Id,shadow_vert:Ud,shadow_frag:Nd,sprite_vert:Fd,sprite_frag:Od},xt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},He={basic:{uniforms:Me([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Me([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Me([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Me([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Me([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Me([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Me([xt.points,xt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Me([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Me([xt.common,xt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Me([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Me([xt.sprite,xt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Me([xt.common,xt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Me([xt.lights,xt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};He.physical={uniforms:Me([He.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const er={r:0,b:0,g:0},wn=new Ye,Bd=new ie;function kd(i,t,e,n,r,s,o){const a=new qt(0);let l=s===!0?0:1,h,d,p=null,_=0,u=null;function v(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?e:t).get(E)),E}function g(y){let E=!1;const C=v(y);C===null?c(a,l):C&&C.isColor&&(c(C,1),E=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(y,E){const C=v(E);C&&(C.isCubeTexture||C.mapping===_r)?(d===void 0&&(d=new We(new Ii(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:di(He.backgroundCube.uniforms),vertexShader:He.backgroundCube.vertexShader,fragmentShader:He.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),wn.copy(E.backgroundRotation),wn.x*=-1,wn.y*=-1,wn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(wn.y*=-1,wn.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Bd.makeRotationFromEuler(wn)),d.material.toneMapped=Zt.getTransfer(C.colorSpace)!==te,(p!==C||_!==C.version||u!==i.toneMapping)&&(d.material.needsUpdate=!0,p=C,_=C.version,u=i.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new We(new gr(2,2),new vn({name:"BackgroundMaterial",uniforms:di(He.background.uniforms),vertexShader:He.background.vertexShader,fragmentShader:He.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(C.colorSpace)!==te,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(p!==C||_!==C.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,p=C,_=C.version,u=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function c(y,E){y.getRGB(er,Oo(i)),n.buffers.color.setClear(er.r,er.g,er.b,E,o)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),l=E,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,c(a,l)},render:g,addToRenderList:f,dispose:S}}function zd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=_(null);let s=r,o=!1;function a(T,O,D,A,x){let I=!1;const Z=p(A,D,O);s!==Z&&(s=Z,h(s.object)),I=u(T,A,D,x),I&&v(T,A,D,x),x!==null&&t.update(x,i.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,E(T,O,D,A),x!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(x).buffer))}function l(){return i.createVertexArray()}function h(T){return i.bindVertexArray(T)}function d(T){return i.deleteVertexArray(T)}function p(T,O,D){const A=D.wireframe===!0;let x=n[T.id];x===void 0&&(x={},n[T.id]=x);let I=x[O.id];I===void 0&&(I={},x[O.id]=I);let Z=I[A];return Z===void 0&&(Z=_(l()),I[A]=Z),Z}function _(T){const O=[],D=[],A=[];for(let x=0;x<e;x++)O[x]=0,D[x]=0,A[x]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:D,attributeDivisors:A,object:T,attributes:{},index:null}}function u(T,O,D,A){const x=s.attributes,I=O.attributes;let Z=0;const k=D.getAttributes();for(const Y in k)if(k[Y].location>=0){const ot=x[Y];let H=I[Y];if(H===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(H=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(H=T.instanceColor)),ot===void 0||ot.attribute!==H||H&&ot.data!==H.data)return!0;Z++}return s.attributesNum!==Z||s.index!==A}function v(T,O,D,A){const x={},I=O.attributes;let Z=0;const k=D.getAttributes();for(const Y in k)if(k[Y].location>=0){let ot=I[Y];ot===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(ot=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(ot=T.instanceColor));const H={};H.attribute=ot,ot&&ot.data&&(H.data=ot.data),x[Y]=H,Z++}s.attributes=x,s.attributesNum=Z,s.index=A}function g(){const T=s.newAttributes;for(let O=0,D=T.length;O<D;O++)T[O]=0}function f(T){c(T,0)}function c(T,O){const D=s.newAttributes,A=s.enabledAttributes,x=s.attributeDivisors;D[T]=1,A[T]===0&&(i.enableVertexAttribArray(T),A[T]=1),x[T]!==O&&(i.vertexAttribDivisor(T,O),x[T]=O)}function S(){const T=s.newAttributes,O=s.enabledAttributes;for(let D=0,A=O.length;D<A;D++)O[D]!==T[D]&&(i.disableVertexAttribArray(D),O[D]=0)}function y(T,O,D,A,x,I,Z){Z===!0?i.vertexAttribIPointer(T,O,D,x,I):i.vertexAttribPointer(T,O,D,A,x,I)}function E(T,O,D,A){g();const x=A.attributes,I=D.getAttributes(),Z=O.defaultAttributeValues;for(const k in I){const Y=I[k];if(Y.location>=0){let tt=x[k];if(tt===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(tt=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(tt=T.instanceColor)),tt!==void 0){const ot=tt.normalized,H=tt.itemSize,V=t.get(tt);if(V===void 0)continue;const _t=V.buffer,G=V.type,j=V.bytesPerElement,ut=G===i.INT||G===i.UNSIGNED_INT||tt.gpuType===Ws;if(tt.isInterleavedBufferAttribute){const lt=tt.data,pt=lt.stride,vt=tt.offset;if(lt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<Y.locationSize;Ct++)c(Y.location+Ct,lt.meshPerAttribute);T.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ct=0;Ct<Y.locationSize;Ct++)f(Y.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Ct=0;Ct<Y.locationSize;Ct++)y(Y.location+Ct,H/Y.locationSize,G,ot,pt*j,(vt+H/Y.locationSize*Ct)*j,ut)}else{if(tt.isInstancedBufferAttribute){for(let lt=0;lt<Y.locationSize;lt++)c(Y.location+lt,tt.meshPerAttribute);T.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let lt=0;lt<Y.locationSize;lt++)f(Y.location+lt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let lt=0;lt<Y.locationSize;lt++)y(Y.location+lt,H/Y.locationSize,G,ot,H*j,H/Y.locationSize*lt*j,ut)}}else if(Z!==void 0){const ot=Z[k];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(Y.location,ot);break;case 3:i.vertexAttrib3fv(Y.location,ot);break;case 4:i.vertexAttrib4fv(Y.location,ot);break;default:i.vertexAttrib1fv(Y.location,ot)}}}}S()}function C(){F();for(const T in n){const O=n[T];for(const D in O){const A=O[D];for(const x in A)d(A[x].object),delete A[x];delete O[D]}delete n[T]}}function U(T){if(n[T.id]===void 0)return;const O=n[T.id];for(const D in O){const A=O[D];for(const x in A)d(A[x].object),delete A[x];delete O[D]}delete n[T.id]}function L(T){for(const O in n){const D=n[O];if(D[T.id]===void 0)continue;const A=D[T.id];for(const x in A)d(A[x].object),delete A[x];delete D[T.id]}}function F(){b(),o=!0,s!==r&&(s=r,h(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:U,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:f,disableUnusedAttributes:S}}function Hd(i,t,e){let n;function r(h){n=h}function s(h,d){i.drawArrays(n,h,d),e.update(d,n,1)}function o(h,d,p){p!==0&&(i.drawArraysInstanced(n,h,d,p),e.update(d,n,p))}function a(h,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,p);let u=0;for(let v=0;v<p;v++)u+=d[v];e.update(u,n,1)}function l(h,d,p,_){if(p===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let v=0;v<h.length;v++)o(h[v],d[v],_[v]);else{u.multiDrawArraysInstancedWEBGL(n,h,0,d,0,_,0,p);let v=0;for(let g=0;g<p;g++)v+=d[g]*_[g];e.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Gd(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==ke&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const F=L===Pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==an&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==en&&!F)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const d=l(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const p=e.logarithmicDepthBuffer===!0,_=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),c=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:p,reverseDepthBuffer:_,maxTextures:u,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:f,maxAttributes:c,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:C,maxSamples:U}}function Vd(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new fn,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,_){const u=p.length!==0||_||n!==0||r;return r=_,n=p.length,u},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,_){e=d(p,_,0)},this.setState=function(p,_,u){const v=p.clippingPlanes,g=p.clipIntersection,f=p.clipShadows,c=i.get(p);if(!r||v===null||v.length===0||s&&!f)s?d(null):h();else{const S=s?0:n,y=S*4;let E=c.clippingState||null;l.value=E,E=d(v,_,y,u);for(let C=0;C!==y;++C)E[C]=e[C];c.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(p,_,u,v){const g=p!==null?p.length:0;let f=null;if(g!==0){if(f=l.value,v!==!0||f===null){const c=u+g*4,S=_.matrixWorldInverse;a.getNormalMatrix(S),(f===null||f.length<c)&&(f=new Float32Array(c));for(let y=0,E=u;y!==g;++y,E+=4)o.copy(p[y]).applyMatrix4(S,a),o.normal.toArray(f,E),f[E+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}function Wd(i){let t=new WeakMap;function e(o,a){return a===us?o.mapping=oi:a===ds&&(o.mapping=li),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===us||a===ds)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new Bc(l.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",r),e(h.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const ei=4,ka=[.125,.215,.35,.446,.526,.582],Pn=20,Xr=new Vo,za=new qt;let Yr=null,qr=0,jr=0,Zr=!1;const Rn=(1+Math.sqrt(5))/2,$n=1/Rn,Ha=[new et(-Rn,$n,0),new et(Rn,$n,0),new et(-$n,0,Rn),new et($n,0,Rn),new et(0,Rn,-$n),new et(0,Rn,$n),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)];class Ga{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Yr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yr,qr,jr),this._renderer.xr.enabled=Zr,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oi||t.mapping===li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Pi,format:ke,colorSpace:ui,depthBuffer:!1},r=Va(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Va(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xd(s)),this._blurMaterial=Yd(s,t,e)}return r}_compileMaterial(t){const e=new We(this._lodPlanes[0],t);this._renderer.compile(e,Xr)}_sceneToCubeUV(t,e,n,r){const a=new Re(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,_=d.toneMapping;d.getClearColor(za),d.toneMapping=_n,d.autoClear=!1;const u=new Uo({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),v=new We(new Ii,u);let g=!1;const f=t.background;f?f.isColor&&(u.color.copy(f),t.background=null,g=!0):(u.color.copy(za),g=!0);for(let c=0;c<6;c++){const S=c%3;S===0?(a.up.set(0,l[c],0),a.lookAt(h[c],0,0)):S===1?(a.up.set(0,0,l[c]),a.lookAt(0,h[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,h[c]));const y=this._cubeSize;nr(r,S*y,c>2?y:0,y,y),d.setRenderTarget(r),g&&d.render(v,a),d.render(t,a)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=_,d.autoClear=p,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===oi||t.mapping===li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wa());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new We(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;nr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Xr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ha[(r-s-1)%Ha.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new We(this._lodPlanes[r],h),_=h.uniforms,u=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*Pn-1),g=s/v,f=isFinite(s)?1+Math.floor(d*g):Pn;f>Pn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Pn}`);const c=[];let S=0;for(let L=0;L<Pn;++L){const F=L/g,b=Math.exp(-F*F/2);c.push(b),L===0?S+=b:L<f&&(S+=2*b)}for(let L=0;L<c.length;L++)c[L]=c[L]/S;_.envMap.value=t.texture,_.samples.value=f,_.weights.value=c,_.latitudinal.value=o==="latitudinal",a&&(_.poleAxis.value=a);const{_lodMax:y}=this;_.dTheta.value=v,_.mipInt.value=y-n;const E=this._sizeLods[r],C=3*E*(r>y-ei?r-y+ei:0),U=4*(this._cubeSize-E);nr(e,C,U,3*E,2*E),l.setRenderTarget(e),l.render(p,Xr)}}function Xd(i){const t=[],e=[],n=[];let r=i;const s=i-ei+1+ka.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-ei?l=ka[o-i+ei-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),d=-h,p=1+h,_=[d,d,p,d,p,p,d,d,p,p,d,p],u=6,v=6,g=3,f=2,c=1,S=new Float32Array(g*v*u),y=new Float32Array(f*v*u),E=new Float32Array(c*v*u);for(let U=0;U<u;U++){const L=U%3*2/3-1,F=U>2?0:-1,b=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];S.set(b,g*v*U),y.set(_,f*v*U);const T=[U,U,U,U,U,U];E.set(T,c*v*U)}const C=new xn;C.setAttribute("position",new Xe(S,g)),C.setAttribute("uv",new Xe(y,f)),C.setAttribute("faceIndex",new Xe(E,c)),t.push(C),r>ei&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Va(i,t,e){const n=new Un(i,t,e);return n.texture.mapping=_r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Yd(i,t,e){const n=new Float32Array(Pn),r=new et(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Wa(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Xa(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Qs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qd(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===us||l===ds,d=l===oi||l===li;if(h||d){let p=t.get(a);const _=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==_)return e===null&&(e=new Ga(i)),p=h?e.fromEquirectangular(a,p):e.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),p.texture;if(p!==void 0)return p.texture;{const u=a.image;return h&&u&&u.height>0||d&&u&&r(u)?(e===null&&(e=new Ga(i)),p=h?e.fromEquirectangular(a):e.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0;const h=6;for(let d=0;d<h;d++)a[d]!==void 0&&l++;return l===h}function s(a){const l=a.target;l.removeEventListener("dispose",s);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function jd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Qn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Zd(i,t,e,n){const r={},s=new WeakMap;function o(p){const _=p.target;_.index!==null&&t.remove(_.index);for(const v in _.attributes)t.remove(_.attributes[v]);_.removeEventListener("dispose",o),delete r[_.id];const u=s.get(_);u&&(t.remove(u),s.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function a(p,_){return r[_.id]===!0||(_.addEventListener("dispose",o),r[_.id]=!0,e.memory.geometries++),_}function l(p){const _=p.attributes;for(const u in _)t.update(_[u],i.ARRAY_BUFFER)}function h(p){const _=[],u=p.index,v=p.attributes.position;let g=0;if(u!==null){const S=u.array;g=u.version;for(let y=0,E=S.length;y<E;y+=3){const C=S[y+0],U=S[y+1],L=S[y+2];_.push(C,U,U,L,L,C)}}else if(v!==void 0){const S=v.array;g=v.version;for(let y=0,E=S.length/3-1;y<E;y+=3){const C=y+0,U=y+1,L=y+2;_.push(C,U,U,L,L,C)}}else return;const f=new(Ro(_)?Fo:No)(_,1);f.version=g;const c=s.get(p);c&&t.remove(c),s.set(p,f)}function d(p){const _=s.get(p);if(_){const u=p.index;u!==null&&_.version<u.version&&h(p)}else h(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:d}}function Kd(i,t,e){let n;function r(_){n=_}let s,o;function a(_){s=_.type,o=_.bytesPerElement}function l(_,u){i.drawElements(n,u,s,_*o),e.update(u,n,1)}function h(_,u,v){v!==0&&(i.drawElementsInstanced(n,u,s,_*o,v),e.update(u,n,v))}function d(_,u,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,_,0,v);let f=0;for(let c=0;c<v;c++)f+=u[c];e.update(f,n,1)}function p(_,u,v,g){if(v===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let c=0;c<_.length;c++)h(_[c]/o,u[c],g[c]);else{f.multiDrawElementsInstancedWEBGL(n,u,0,s,_,0,g,0,v);let c=0;for(let S=0;S<v;S++)c+=u[S]*g[S];e.update(c,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function $d(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Jd(i,t,e){const n=new WeakMap,r=new ne;function s(o,a,l){const h=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=d!==void 0?d.length:0;let _=n.get(a);if(_===void 0||_.count!==p){let T=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var u=T;_!==void 0&&_.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;v===!0&&(E=1),g===!0&&(E=2),f===!0&&(E=3);let C=a.attributes.position.count*E,U=1;C>t.maxTextureSize&&(U=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const L=new Float32Array(C*U*4*p),F=new Po(L,C,U,p);F.type=en,F.needsUpdate=!0;const b=E*4;for(let O=0;O<p;O++){const D=c[O],A=S[O],x=y[O],I=C*U*4*O;for(let Z=0;Z<D.count;Z++){const k=Z*b;v===!0&&(r.fromBufferAttribute(D,Z),L[I+k+0]=r.x,L[I+k+1]=r.y,L[I+k+2]=r.z,L[I+k+3]=0),g===!0&&(r.fromBufferAttribute(A,Z),L[I+k+4]=r.x,L[I+k+5]=r.y,L[I+k+6]=r.z,L[I+k+7]=0),f===!0&&(r.fromBufferAttribute(x,Z),L[I+k+8]=r.x,L[I+k+9]=r.y,L[I+k+10]=r.z,L[I+k+11]=x.itemSize===4?r.w:1)}}_={count:p,texture:F,size:new kt(C,U)},n.set(a,_),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let v=0;for(let f=0;f<h.length;f++)v+=h[f];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:s}}function Qd(i,t,e,n){let r=new WeakMap;function s(l){const h=n.render.frame,d=l.geometry,p=t.get(l,d);if(r.get(p)!==h&&(t.update(p),r.set(p,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const _=l.skeleton;r.get(_)!==h&&(_.update(),r.set(_,h))}return p}function o(){r=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:o}}const Xo=new Se,Ya=new zo(1,1),Yo=new Po,qo=new yc,jo=new ko,qa=[],ja=[],Za=new Float32Array(16),Ka=new Float32Array(9),$a=new Float32Array(4);function pi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=qa[r];if(s===void 0&&(s=new Float32Array(r),qa[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function he(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vr(i,t){let e=ja[t];e===void 0&&(e=new Int32Array(t),ja[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function tf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ef(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2fv(this.addr,t),ue(e,t)}}function nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;i.uniform3fv(this.addr,t),ue(e,t)}}function rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4fv(this.addr,t),ue(e,t)}}function sf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;$a.set(n),i.uniformMatrix2fv(this.addr,!1,$a),ue(e,n)}}function af(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;Ka.set(n),i.uniformMatrix3fv(this.addr,!1,Ka),ue(e,n)}}function of(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;Za.set(n),i.uniformMatrix4fv(this.addr,!1,Za),ue(e,n)}}function lf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2iv(this.addr,t),ue(e,t)}}function hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3iv(this.addr,t),ue(e,t)}}function uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4iv(this.addr,t),ue(e,t)}}function df(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ff(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2uiv(this.addr,t),ue(e,t)}}function pf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3uiv(this.addr,t),ue(e,t)}}function mf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4uiv(this.addr,t),ue(e,t)}}function _f(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ya.compareFunction=Ao,s=Ya):s=Xo,e.setTexture2D(t||s,r)}function gf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||qo,r)}function vf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||jo,r)}function xf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Yo,r)}function Mf(i){switch(i){case 5126:return tf;case 35664:return ef;case 35665:return nf;case 35666:return rf;case 35674:return sf;case 35675:return af;case 35676:return of;case 5124:case 35670:return lf;case 35667:case 35671:return cf;case 35668:case 35672:return hf;case 35669:case 35673:return uf;case 5125:return df;case 36294:return ff;case 36295:return pf;case 36296:return mf;case 35678:case 36198:case 36298:case 36306:case 35682:return _f;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return vf;case 36289:case 36303:case 36311:case 36292:return xf}}function Sf(i,t){i.uniform1fv(this.addr,t)}function yf(i,t){const e=pi(t,this.size,2);i.uniform2fv(this.addr,e)}function Ef(i,t){const e=pi(t,this.size,3);i.uniform3fv(this.addr,e)}function bf(i,t){const e=pi(t,this.size,4);i.uniform4fv(this.addr,e)}function Tf(i,t){const e=pi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wf(i,t){const e=pi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Af(i,t){const e=pi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Rf(i,t){i.uniform1iv(this.addr,t)}function Cf(i,t){i.uniform2iv(this.addr,t)}function Pf(i,t){i.uniform3iv(this.addr,t)}function Df(i,t){i.uniform4iv(this.addr,t)}function Lf(i,t){i.uniform1uiv(this.addr,t)}function If(i,t){i.uniform2uiv(this.addr,t)}function Uf(i,t){i.uniform3uiv(this.addr,t)}function Nf(i,t){i.uniform4uiv(this.addr,t)}function Ff(i,t,e){const n=this.cache,r=t.length,s=vr(e,r);he(n,s)||(i.uniform1iv(this.addr,s),ue(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Xo,s[o])}function Of(i,t,e){const n=this.cache,r=t.length,s=vr(e,r);he(n,s)||(i.uniform1iv(this.addr,s),ue(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||qo,s[o])}function Bf(i,t,e){const n=this.cache,r=t.length,s=vr(e,r);he(n,s)||(i.uniform1iv(this.addr,s),ue(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||jo,s[o])}function kf(i,t,e){const n=this.cache,r=t.length,s=vr(e,r);he(n,s)||(i.uniform1iv(this.addr,s),ue(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Yo,s[o])}function zf(i){switch(i){case 5126:return Sf;case 35664:return yf;case 35665:return Ef;case 35666:return bf;case 35674:return Tf;case 35675:return wf;case 35676:return Af;case 5124:case 35670:return Rf;case 35667:case 35671:return Cf;case 35668:case 35672:return Pf;case 35669:case 35673:return Df;case 5125:return Lf;case 36294:return If;case 36295:return Uf;case 36296:return Nf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ff;case 35679:case 36299:case 36307:return Of;case 35680:case 36300:case 36308:case 36293:return Bf;case 36289:case 36303:case 36311:case 36292:return kf}}class Hf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mf(e.type)}}class Gf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zf(e.type)}}class Vf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Kr=/(\w+)(\])?(\[|\.)?/g;function Ja(i,t){i.seq.push(t),i.map[t.id]=t}function Wf(i,t,e){const n=i.name,r=n.length;for(Kr.lastIndex=0;;){const s=Kr.exec(n),o=Kr.lastIndex;let a=s[1];const l=s[2]==="]",h=s[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===r){Ja(e,h===void 0?new Hf(a,i,t):new Gf(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new Vf(a),Ja(e,p)),e=p}}}class dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Wf(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Qa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Xf=37297;let Yf=0;function qf(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const to=new Ht;function jf(i){Zt._getMatrix(to,Zt.workingColorSpace,i);const t=`mat3( ${to.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case fr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function eo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+qf(i.getShaderSource(t),o)}else return r}function Zf(i,t){const e=jf(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Kf(i,t){let e;switch(t){case Ll:e="Linear";break;case Il:e="Reinhard";break;case Ul:e="Cineon";break;case Nl:e="ACESFilmic";break;case Ol:e="AgX";break;case Bl:e="Neutral";break;case Fl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ir=new et;function $f(){Zt.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ei).join(`
`)}function Qf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ei(i){return i!==""}function no(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function io(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ep=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hs(i){return i.replace(ep,ip)}const np=new Map;function ip(i,t){let e=Gt[t];if(e===void 0){const n=np.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Hs(e)}const rp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ro(i){return i.replace(rp,sp)}function sp(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function so(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ap(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===po?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ul?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===tn&&(t="SHADOWMAP_TYPE_VSM"),t}function op(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case oi:case li:t="ENVMAP_TYPE_CUBE";break;case _r:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case li:t="ENVMAP_MODE_REFRACTION";break}return t}function cp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vs:t="ENVMAP_BLENDING_MULTIPLY";break;case Pl:t="ENVMAP_BLENDING_MIX";break;case Dl:t="ENVMAP_BLENDING_ADD";break}return t}function hp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function up(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=ap(e),h=op(e),d=lp(e),p=cp(e),_=hp(e),u=Jf(e),v=Qf(s),g=r.createProgram();let f,c,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ei).join(`
`),f.length>0&&(f+=`
`),c=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ei).join(`
`),c.length>0&&(c+=`
`)):(f=[so(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ei).join(`
`),c=[so(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_n?"#define TONE_MAPPING":"",e.toneMapping!==_n?Gt.tonemapping_pars_fragment:"",e.toneMapping!==_n?Kf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Zf("linearToOutputTexel",e.outputColorSpace),$f(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ei).join(`
`)),o=Hs(o),o=no(o,e),o=io(o,e),a=Hs(a),a=no(a,e),a=io(a,e),o=ro(o),a=ro(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,c=["#define varying in",e.glslVersion===pa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const y=S+f+o,E=S+c+a,C=Qa(r,r.VERTEX_SHADER,y),U=Qa(r,r.FRAGMENT_SHADER,E);r.attachShader(g,C),r.attachShader(g,U),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function L(O){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(g).trim(),A=r.getShaderInfoLog(C).trim(),x=r.getShaderInfoLog(U).trim();let I=!0,Z=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,C,U);else{const k=eo(r,C,"vertex"),Y=eo(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+D+`
`+k+`
`+Y)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(A===""||x==="")&&(Z=!1);Z&&(O.diagnostics={runnable:I,programLog:D,vertexShader:{log:A,prefix:f},fragmentShader:{log:x,prefix:c}})}r.deleteShader(C),r.deleteShader(U),F=new dr(r,g),b=tp(r,g)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(g,Xf)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yf++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=U,this}let dp=0;class fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pp(t),e.set(t,n)),n}}class pp{constructor(t){this.id=dp++,this.code=t,this.usedTimes=0}}function mp(i,t,e,n,r,s,o){const a=new Lo,l=new fp,h=new Set,d=[],p=r.logarithmicDepthBuffer,_=r.vertexTextures;let u=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return h.add(b),b===0?"uv":`uv${b}`}function f(b,T,O,D,A){const x=D.fog,I=A.geometry,Z=b.isMeshStandardMaterial?D.environment:null,k=(b.isMeshStandardMaterial?e:t).get(b.envMap||Z),Y=k&&k.mapping===_r?k.image.height:null,tt=v[b.type];b.precision!==null&&(u=r.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));const ot=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,H=ot!==void 0?ot.length:0;let V=0;I.morphAttributes.position!==void 0&&(V=1),I.morphAttributes.normal!==void 0&&(V=2),I.morphAttributes.color!==void 0&&(V=3);let _t,G,j,ut;if(tt){const Jt=He[tt];_t=Jt.vertexShader,G=Jt.fragmentShader}else _t=b.vertexShader,G=b.fragmentShader,l.update(b),j=l.getVertexShaderID(b),ut=l.getFragmentShaderID(b);const lt=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),vt=A.isInstancedMesh===!0,Ct=A.isBatchedMesh===!0,It=!!b.map,Nt=!!b.matcap,Xt=!!k,m=!!b.aoMap,at=!!b.lightMap,J=!!b.bumpMap,N=!!b.normalMap,P=!!b.displacementMap,z=!!b.emissiveMap,nt=!!b.metalnessMap,w=!!b.roughnessMap,M=b.anisotropy>0,B=b.clearcoat>0,K=b.dispersion>0,X=b.iridescence>0,Q=b.sheen>0,mt=b.transmission>0,ht=M&&!!b.anisotropyMap,gt=B&&!!b.clearcoatMap,Vt=B&&!!b.clearcoatNormalMap,dt=B&&!!b.clearcoatRoughnessMap,Tt=X&&!!b.iridescenceMap,Et=X&&!!b.iridescenceThicknessMap,Lt=Q&&!!b.sheenColorMap,wt=Q&&!!b.sheenRoughnessMap,Ft=!!b.specularMap,Bt=!!b.specularColorMap,Qt=!!b.specularIntensityMap,W=mt&&!!b.transmissionMap,Mt=mt&&!!b.thicknessMap,st=!!b.gradientMap,ct=!!b.alphaMap,St=b.alphaTest>0,bt=!!b.alphaHash,zt=!!b.extensions;let se=_n;b.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(se=i.toneMapping);const pe={shaderID:tt,shaderType:b.type,shaderName:b.name,vertexShader:_t,fragmentShader:G,defines:b.defines,customVertexShaderID:j,customFragmentShaderID:ut,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:Ct,batchingColor:Ct&&A._colorsTexture!==null,instancing:vt,instancingColor:vt&&A.instanceColor!==null,instancingMorph:vt&&A.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:ui,alphaToCoverage:!!b.alphaToCoverage,map:It,matcap:Nt,envMap:Xt,envMapMode:Xt&&k.mapping,envMapCubeUVHeight:Y,aoMap:m,lightMap:at,bumpMap:J,normalMap:N,displacementMap:_&&P,emissiveMap:z,normalMapObjectSpace:N&&b.normalMapType===Gl,normalMapTangentSpace:N&&b.normalMapType===wo,metalnessMap:nt,roughnessMap:w,anisotropy:M,anisotropyMap:ht,clearcoat:B,clearcoatMap:gt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:dt,dispersion:K,iridescence:X,iridescenceMap:Tt,iridescenceThicknessMap:Et,sheen:Q,sheenColorMap:Lt,sheenRoughnessMap:wt,specularMap:Ft,specularColorMap:Bt,specularIntensityMap:Qt,transmission:mt,transmissionMap:W,thicknessMap:Mt,gradientMap:st,opaque:b.transparent===!1&&b.blending===ii&&b.alphaToCoverage===!1,alphaMap:ct,alphaTest:St,alphaHash:bt,combine:b.combine,mapUv:It&&g(b.map.channel),aoMapUv:m&&g(b.aoMap.channel),lightMapUv:at&&g(b.lightMap.channel),bumpMapUv:J&&g(b.bumpMap.channel),normalMapUv:N&&g(b.normalMap.channel),displacementMapUv:P&&g(b.displacementMap.channel),emissiveMapUv:z&&g(b.emissiveMap.channel),metalnessMapUv:nt&&g(b.metalnessMap.channel),roughnessMapUv:w&&g(b.roughnessMap.channel),anisotropyMapUv:ht&&g(b.anisotropyMap.channel),clearcoatMapUv:gt&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:wt&&g(b.sheenRoughnessMap.channel),specularMapUv:Ft&&g(b.specularMap.channel),specularColorMapUv:Bt&&g(b.specularColorMap.channel),specularIntensityMapUv:Qt&&g(b.specularIntensityMap.channel),transmissionMapUv:W&&g(b.transmissionMap.channel),thicknessMapUv:Mt&&g(b.thicknessMap.channel),alphaMapUv:ct&&g(b.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(N||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!I.attributes.uv&&(It||ct),fog:!!x,useFog:b.fog===!0,fogExp2:!!x&&x.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:pt,skinning:A.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:V,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:It&&b.map.isVideoTexture===!0&&Zt.getTransfer(b.map.colorSpace)===te,decodeVideoTextureEmissive:z&&b.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(b.emissiveMap.colorSpace)===te,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ge,flipSided:b.side===be,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:zt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&b.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return pe.vertexUv1s=h.has(1),pe.vertexUv2s=h.has(2),pe.vertexUv3s=h.has(3),h.clear(),pe}function c(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)T.push(O),T.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(S(T,b),y(T,b),T.push(i.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function S(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function y(b,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),b.push(a.mask)}function E(b){const T=v[b.type];let O;if(T){const D=He[T];O=Uc.clone(D.uniforms)}else O=b.uniforms;return O}function C(b,T){let O;for(let D=0,A=d.length;D<A;D++){const x=d[D];if(x.cacheKey===T){O=x,++O.usedTimes;break}}return O===void 0&&(O=new up(i,T,b,s),d.push(O)),O}function U(b){if(--b.usedTimes===0){const T=d.indexOf(b);d[T]=d[d.length-1],d.pop(),b.destroy()}}function L(b){l.remove(b)}function F(){l.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:E,acquireProgram:C,releaseProgram:U,releaseShaderCache:L,programs:d,dispose:F}}function _p(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function gp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ao(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function oo(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(p,_,u,v,g,f){let c=i[t];return c===void 0?(c={id:p.id,object:p,geometry:_,material:u,groupOrder:v,renderOrder:p.renderOrder,z:g,group:f},i[t]=c):(c.id=p.id,c.object=p,c.geometry=_,c.material=u,c.groupOrder=v,c.renderOrder=p.renderOrder,c.z=g,c.group=f),t++,c}function a(p,_,u,v,g,f){const c=o(p,_,u,v,g,f);u.transmission>0?n.push(c):u.transparent===!0?r.push(c):e.push(c)}function l(p,_,u,v,g,f){const c=o(p,_,u,v,g,f);u.transmission>0?n.unshift(c):u.transparent===!0?r.unshift(c):e.unshift(c)}function h(p,_){e.length>1&&e.sort(p||gp),n.length>1&&n.sort(_||ao),r.length>1&&r.sort(_||ao)}function d(){for(let p=t,_=i.length;p<_;p++){const u=i[p];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:d,sort:h}}function vp(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new oo,i.set(n,[o])):r>=s.length?(o=new oo,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function xp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new et,color:new qt};break;case"SpotLight":e={position:new et,direction:new et,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new et,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new et,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new et,halfWidth:new et,halfHeight:new et};break}return i[t.id]=e,e}}}function Mp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Sp=0;function yp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ep(i){const t=new xp,e=Mp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new et);const r=new et,s=new ie,o=new ie;function a(h){let d=0,p=0,_=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let u=0,v=0,g=0,f=0,c=0,S=0,y=0,E=0,C=0,U=0,L=0;h.sort(yp);for(let b=0,T=h.length;b<T;b++){const O=h[b],D=O.color,A=O.intensity,x=O.distance,I=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=D.r*A,p+=D.g*A,_+=D.b*A;else if(O.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(O.sh.coefficients[Z],A);L++}else if(O.isDirectionalLight){const Z=t.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const k=O.shadow,Y=e.get(O);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,n.directionalShadow[u]=Y,n.directionalShadowMap[u]=I,n.directionalShadowMatrix[u]=O.shadow.matrix,S++}n.directional[u]=Z,u++}else if(O.isSpotLight){const Z=t.get(O);Z.position.setFromMatrixPosition(O.matrixWorld),Z.color.copy(D).multiplyScalar(A),Z.distance=x,Z.coneCos=Math.cos(O.angle),Z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Z.decay=O.decay,n.spot[g]=Z;const k=O.shadow;if(O.map&&(n.spotLightMap[C]=O.map,C++,k.updateMatrices(O),O.castShadow&&U++),n.spotLightMatrix[g]=k.matrix,O.castShadow){const Y=e.get(O);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,n.spotShadow[g]=Y,n.spotShadowMap[g]=I,E++}g++}else if(O.isRectAreaLight){const Z=t.get(O);Z.color.copy(D).multiplyScalar(A),Z.halfWidth.set(O.width*.5,0,0),Z.halfHeight.set(0,O.height*.5,0),n.rectArea[f]=Z,f++}else if(O.isPointLight){const Z=t.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),Z.distance=O.distance,Z.decay=O.decay,O.castShadow){const k=O.shadow,Y=e.get(O);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,Y.shadowCameraNear=k.camera.near,Y.shadowCameraFar=k.camera.far,n.pointShadow[v]=Y,n.pointShadowMap[v]=I,n.pointShadowMatrix[v]=O.shadow.matrix,y++}n.point[v]=Z,v++}else if(O.isHemisphereLight){const Z=t.get(O);Z.skyColor.copy(O.color).multiplyScalar(A),Z.groundColor.copy(O.groundColor).multiplyScalar(A),n.hemi[c]=Z,c++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=_;const F=n.hash;(F.directionalLength!==u||F.pointLength!==v||F.spotLength!==g||F.rectAreaLength!==f||F.hemiLength!==c||F.numDirectionalShadows!==S||F.numPointShadows!==y||F.numSpotShadows!==E||F.numSpotMaps!==C||F.numLightProbes!==L)&&(n.directional.length=u,n.spot.length=g,n.rectArea.length=f,n.point.length=v,n.hemi.length=c,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+C-U,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=L,F.directionalLength=u,F.pointLength=v,F.spotLength=g,F.rectAreaLength=f,F.hemiLength=c,F.numDirectionalShadows=S,F.numPointShadows=y,F.numSpotShadows=E,F.numSpotMaps=C,F.numLightProbes=L,n.version=Sp++)}function l(h,d){let p=0,_=0,u=0,v=0,g=0;const f=d.matrixWorldInverse;for(let c=0,S=h.length;c<S;c++){const y=h[c];if(y.isDirectionalLight){const E=n.directional[p];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),p++}else if(y.isSpotLight){const E=n.spot[u];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),u++}else if(y.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),o.identity(),s.copy(y.matrixWorld),s.premultiply(f),o.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const E=n.point[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),_++}else if(y.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(f),g++}}}return{setup:a,setupView:l,state:n}}function lo(i){const t=new Ep(i),e=[],n=[];function r(d){h.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function l(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function bp(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new lo(i),t.set(r,[a])):s>=o.length?(a=new lo(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Tp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ap(i,t,e){let n=new Js;const r=new kt,s=new kt,o=new ne,a=new Gc({depthPacking:Hl}),l=new Vc,h={},d=e.maxTextureSize,p={[gn]:be,[be]:gn,[Ge]:Ge},_=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Tp,fragmentShader:wp}),u=_.clone();u.defines.HORIZONTAL_PASS=1;const v=new xn;v.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new We(v,_),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let c=this.type;this.render=function(U,L,F){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||U.length===0)return;const b=i.getRenderTarget(),T=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),D=i.state;D.setBlending(mn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const A=c!==tn&&this.type===tn,x=c===tn&&this.type!==tn;for(let I=0,Z=U.length;I<Z;I++){const k=U[I],Y=k.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const tt=Y.getFrameExtents();if(r.multiply(tt),s.copy(Y.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/tt.x),r.x=s.x*tt.x,Y.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/tt.y),r.y=s.y*tt.y,Y.mapSize.y=s.y)),Y.map===null||A===!0||x===!0){const H=this.type!==tn?{minFilter:ze,magFilter:ze}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Un(r.x,r.y,H),Y.map.texture.name=k.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const ot=Y.getViewportCount();for(let H=0;H<ot;H++){const V=Y.getViewport(H);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),D.viewport(o),Y.updateMatrices(k,H),n=Y.getFrustum(),E(L,F,Y.camera,k,this.type)}Y.isPointLightShadow!==!0&&this.type===tn&&S(Y,F),Y.needsUpdate=!1}c=this.type,f.needsUpdate=!1,i.setRenderTarget(b,T,O)};function S(U,L){const F=t.update(g);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,u.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,u.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Un(r.x,r.y)),_.uniforms.shadow_pass.value=U.map.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(L,null,F,_,g,null),u.uniforms.shadow_pass.value=U.mapPass.texture,u.uniforms.resolution.value=U.mapSize,u.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(L,null,F,u,g,null)}function y(U,L,F,b){let T=null;const O=F.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(O!==void 0)T=O;else if(T=F.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const D=T.uuid,A=L.uuid;let x=h[D];x===void 0&&(x={},h[D]=x);let I=x[A];I===void 0&&(I=T.clone(),x[A]=I,L.addEventListener("dispose",C)),T=I}if(T.visible=L.visible,T.wireframe=L.wireframe,b===tn?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:p[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const D=i.properties.get(T);D.light=F}return T}function E(U,L,F,b,T){if(U.visible===!1)return;if(U.layers.test(L.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&T===tn)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,U.matrixWorld);const A=t.update(U),x=U.material;if(Array.isArray(x)){const I=A.groups;for(let Z=0,k=I.length;Z<k;Z++){const Y=I[Z],tt=x[Y.materialIndex];if(tt&&tt.visible){const ot=y(U,tt,b,T);U.onBeforeShadow(i,U,L,F,A,ot,Y),i.renderBufferDirect(F,null,A,ot,U,Y),U.onAfterShadow(i,U,L,F,A,ot,Y)}}}else if(x.visible){const I=y(U,x,b,T);U.onBeforeShadow(i,U,L,F,A,I,null),i.renderBufferDirect(F,null,A,I,U,null),U.onAfterShadow(i,U,L,F,A,I,null)}}const D=U.children;for(let A=0,x=D.length;A<x;A++)E(D[A],L,F,b,T)}function C(U){U.target.removeEventListener("dispose",C);for(const F in h){const b=h[F],T=U.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}const Rp={[rs]:ss,[as]:cs,[os]:hs,[ai]:ls,[ss]:rs,[cs]:as,[hs]:os,[ls]:ai};function Cp(i,t){function e(){let W=!1;const Mt=new ne;let st=null;const ct=new ne(0,0,0,0);return{setMask:function(St){st!==St&&!W&&(i.colorMask(St,St,St,St),st=St)},setLocked:function(St){W=St},setClear:function(St,bt,zt,se,pe){pe===!0&&(St*=se,bt*=se,zt*=se),Mt.set(St,bt,zt,se),ct.equals(Mt)===!1&&(i.clearColor(St,bt,zt,se),ct.copy(Mt))},reset:function(){W=!1,st=null,ct.set(-1,0,0,0)}}}function n(){let W=!1,Mt=!1,st=null,ct=null,St=null;return{setReversed:function(bt){if(Mt!==bt){const zt=t.get("EXT_clip_control");Mt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const se=St;St=null,this.setClear(se)}Mt=bt},getReversed:function(){return Mt},setTest:function(bt){bt?lt(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(bt){st!==bt&&!W&&(i.depthMask(bt),st=bt)},setFunc:function(bt){if(Mt&&(bt=Rp[bt]),ct!==bt){switch(bt){case rs:i.depthFunc(i.NEVER);break;case ss:i.depthFunc(i.ALWAYS);break;case as:i.depthFunc(i.LESS);break;case ai:i.depthFunc(i.LEQUAL);break;case os:i.depthFunc(i.EQUAL);break;case ls:i.depthFunc(i.GEQUAL);break;case cs:i.depthFunc(i.GREATER);break;case hs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=bt}},setLocked:function(bt){W=bt},setClear:function(bt){St!==bt&&(Mt&&(bt=1-bt),i.clearDepth(bt),St=bt)},reset:function(){W=!1,st=null,ct=null,St=null,Mt=!1}}}function r(){let W=!1,Mt=null,st=null,ct=null,St=null,bt=null,zt=null,se=null,pe=null;return{setTest:function(Jt){W||(Jt?lt(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(Jt){Mt!==Jt&&!W&&(i.stencilMask(Jt),Mt=Jt)},setFunc:function(Jt,Ie,qe){(st!==Jt||ct!==Ie||St!==qe)&&(i.stencilFunc(Jt,Ie,qe),st=Jt,ct=Ie,St=qe)},setOp:function(Jt,Ie,qe){(bt!==Jt||zt!==Ie||se!==qe)&&(i.stencilOp(Jt,Ie,qe),bt=Jt,zt=Ie,se=qe)},setLocked:function(Jt){W=Jt},setClear:function(Jt){pe!==Jt&&(i.clearStencil(Jt),pe=Jt)},reset:function(){W=!1,Mt=null,st=null,ct=null,St=null,bt=null,zt=null,se=null,pe=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,h=new WeakMap;let d={},p={},_=new WeakMap,u=[],v=null,g=!1,f=null,c=null,S=null,y=null,E=null,C=null,U=null,L=new qt(0,0,0),F=0,b=!1,T=null,O=null,D=null,A=null,x=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,k=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=k>=1):Y.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=k>=2);let tt=null,ot={};const H=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),_t=new ne().fromArray(H),G=new ne().fromArray(V);function j(W,Mt,st,ct){const St=new Uint8Array(4),bt=i.createTexture();i.bindTexture(W,bt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<st;zt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(Mt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return bt}const ut={};ut[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(ai),J(!1),N(ca),lt(i.CULL_FACE),m(mn);function lt(W){d[W]!==!0&&(i.enable(W),d[W]=!0)}function pt(W){d[W]!==!1&&(i.disable(W),d[W]=!1)}function vt(W,Mt){return p[W]!==Mt?(i.bindFramebuffer(W,Mt),p[W]=Mt,W===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Mt),W===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Ct(W,Mt){let st=u,ct=!1;if(W){st=_.get(Mt),st===void 0&&(st=[],_.set(Mt,st));const St=W.textures;if(st.length!==St.length||st[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,zt=St.length;bt<zt;bt++)st[bt]=i.COLOR_ATTACHMENT0+bt;st.length=St.length,ct=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,ct=!0);ct&&i.drawBuffers(st)}function It(W){return v!==W?(i.useProgram(W),v=W,!0):!1}const Nt={[Cn]:i.FUNC_ADD,[fl]:i.FUNC_SUBTRACT,[pl]:i.FUNC_REVERSE_SUBTRACT};Nt[ml]=i.MIN,Nt[_l]=i.MAX;const Xt={[gl]:i.ZERO,[vl]:i.ONE,[xl]:i.SRC_COLOR,[ns]:i.SRC_ALPHA,[Tl]:i.SRC_ALPHA_SATURATE,[El]:i.DST_COLOR,[Sl]:i.DST_ALPHA,[Ml]:i.ONE_MINUS_SRC_COLOR,[is]:i.ONE_MINUS_SRC_ALPHA,[bl]:i.ONE_MINUS_DST_COLOR,[yl]:i.ONE_MINUS_DST_ALPHA,[wl]:i.CONSTANT_COLOR,[Al]:i.ONE_MINUS_CONSTANT_COLOR,[Rl]:i.CONSTANT_ALPHA,[Cl]:i.ONE_MINUS_CONSTANT_ALPHA};function m(W,Mt,st,ct,St,bt,zt,se,pe,Jt){if(W===mn){g===!0&&(pt(i.BLEND),g=!1);return}if(g===!1&&(lt(i.BLEND),g=!0),W!==dl){if(W!==f||Jt!==b){if((c!==Cn||E!==Cn)&&(i.blendEquation(i.FUNC_ADD),c=Cn,E=Cn),Jt)switch(W){case ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case es:i.blendFunc(i.ONE,i.ONE);break;case ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ua:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case es:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ua:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}S=null,y=null,C=null,U=null,L.set(0,0,0),F=0,f=W,b=Jt}return}St=St||Mt,bt=bt||st,zt=zt||ct,(Mt!==c||St!==E)&&(i.blendEquationSeparate(Nt[Mt],Nt[St]),c=Mt,E=St),(st!==S||ct!==y||bt!==C||zt!==U)&&(i.blendFuncSeparate(Xt[st],Xt[ct],Xt[bt],Xt[zt]),S=st,y=ct,C=bt,U=zt),(se.equals(L)===!1||pe!==F)&&(i.blendColor(se.r,se.g,se.b,pe),L.copy(se),F=pe),f=W,b=!1}function at(W,Mt){W.side===Ge?pt(i.CULL_FACE):lt(i.CULL_FACE);let st=W.side===be;Mt&&(st=!st),J(st),W.blending===ii&&W.transparent===!1?m(mn):m(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);const ct=W.stencilWrite;a.setTest(ct),ct&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),z(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(W){T!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),T=W)}function N(W){W!==cl?(lt(i.CULL_FACE),W!==O&&(W===ca?i.cullFace(i.BACK):W===hl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),O=W}function P(W){W!==D&&(Z&&i.lineWidth(W),D=W)}function z(W,Mt,st){W?(lt(i.POLYGON_OFFSET_FILL),(A!==Mt||x!==st)&&(i.polygonOffset(Mt,st),A=Mt,x=st)):pt(i.POLYGON_OFFSET_FILL)}function nt(W){W?lt(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function w(W){W===void 0&&(W=i.TEXTURE0+I-1),tt!==W&&(i.activeTexture(W),tt=W)}function M(W,Mt,st){st===void 0&&(tt===null?st=i.TEXTURE0+I-1:st=tt);let ct=ot[st];ct===void 0&&(ct={type:void 0,texture:void 0},ot[st]=ct),(ct.type!==W||ct.texture!==Mt)&&(tt!==st&&(i.activeTexture(st),tt=st),i.bindTexture(W,Mt||ut[W]),ct.type=W,ct.texture=Mt)}function B(){const W=ot[tt];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function X(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function mt(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Lt(W){_t.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),_t.copy(W))}function wt(W){G.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),G.copy(W))}function Ft(W,Mt){let st=h.get(Mt);st===void 0&&(st=new WeakMap,h.set(Mt,st));let ct=st.get(W);ct===void 0&&(ct=i.getUniformBlockIndex(Mt,W.name),st.set(W,ct))}function Bt(W,Mt){const ct=h.get(Mt).get(W);l.get(Mt)!==ct&&(i.uniformBlockBinding(Mt,ct,W.__bindingPointIndex),l.set(Mt,ct))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},tt=null,ot={},p={},_=new WeakMap,u=[],v=null,g=!1,f=null,c=null,S=null,y=null,E=null,C=null,U=null,L=new qt(0,0,0),F=0,b=!1,T=null,O=null,D=null,A=null,x=null,_t.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:lt,disable:pt,bindFramebuffer:vt,drawBuffers:Ct,useProgram:It,setBlending:m,setMaterial:at,setFlipSided:J,setCullFace:N,setLineWidth:P,setPolygonOffset:z,setScissorTest:nt,activeTexture:w,bindTexture:M,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:X,texImage2D:Tt,texImage3D:Et,updateUBOMapping:Ft,uniformBlockBinding:Bt,texStorage2D:Vt,texStorage3D:dt,texSubImage2D:Q,texSubImage3D:mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:gt,scissor:Lt,viewport:wt,reset:Qt}}function Pp(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new kt,d=new WeakMap;let p;const _=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,M){return u?new OffscreenCanvas(w,M):Ri("canvas")}function g(w,M,B){let K=1;const X=nt(w);if((X.width>B||X.height>B)&&(K=B/Math.max(X.width,X.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Q=Math.floor(K*X.width),mt=Math.floor(K*X.height);p===void 0&&(p=v(Q,mt));const ht=M?v(Q,mt):p;return ht.width=Q,ht.height=mt,ht.getContext("2d").drawImage(w,0,0,Q,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+Q+"x"+mt+")."),ht}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),w;return w}function f(w){return w.generateMipmaps}function c(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,M,B,K,X=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Q=M;if(M===i.RED&&(B===i.FLOAT&&(Q=i.R32F),B===i.HALF_FLOAT&&(Q=i.R16F),B===i.UNSIGNED_BYTE&&(Q=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.R8UI),B===i.UNSIGNED_SHORT&&(Q=i.R16UI),B===i.UNSIGNED_INT&&(Q=i.R32UI),B===i.BYTE&&(Q=i.R8I),B===i.SHORT&&(Q=i.R16I),B===i.INT&&(Q=i.R32I)),M===i.RG&&(B===i.FLOAT&&(Q=i.RG32F),B===i.HALF_FLOAT&&(Q=i.RG16F),B===i.UNSIGNED_BYTE&&(Q=i.RG8)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RG8UI),B===i.UNSIGNED_SHORT&&(Q=i.RG16UI),B===i.UNSIGNED_INT&&(Q=i.RG32UI),B===i.BYTE&&(Q=i.RG8I),B===i.SHORT&&(Q=i.RG16I),B===i.INT&&(Q=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),B===i.UNSIGNED_INT&&(Q=i.RGB32UI),B===i.BYTE&&(Q=i.RGB8I),B===i.SHORT&&(Q=i.RGB16I),B===i.INT&&(Q=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),B===i.UNSIGNED_INT&&(Q=i.RGBA32UI),B===i.BYTE&&(Q=i.RGBA8I),B===i.SHORT&&(Q=i.RGBA16I),B===i.INT&&(Q=i.RGBA32I)),M===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),M===i.RGBA){const mt=X?fr:Zt.getTransfer(K);B===i.FLOAT&&(Q=i.RGBA32F),B===i.HALF_FLOAT&&(Q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Q=mt===te?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function E(w,M){let B;return w?M===null||M===In||M===ci?B=i.DEPTH24_STENCIL8:M===en?B=i.DEPTH32F_STENCIL8:M===wi&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===In||M===ci?B=i.DEPTH_COMPONENT24:M===en?B=i.DEPTH_COMPONENT32F:M===wi&&(B=i.DEPTH_COMPONENT16),B}function C(w,M){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==ze&&w.minFilter!==Ve?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function U(w){const M=w.target;M.removeEventListener("dispose",U),F(M),M.isVideoTexture&&d.delete(M)}function L(w){const M=w.target;M.removeEventListener("dispose",L),T(M)}function F(w){const M=n.get(w);if(M.__webglInit===void 0)return;const B=w.source,K=_.get(B);if(K){const X=K[M.__cacheKey];X.usedTimes--,X.usedTimes===0&&b(w),Object.keys(K).length===0&&_.delete(B)}n.remove(w)}function b(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const B=w.source,K=_.get(B);delete K[M.__cacheKey],o.memory.textures--}function T(w){const M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let X=0;X<M.__webglFramebuffer[K].length;X++)i.deleteFramebuffer(M.__webglFramebuffer[K][X]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=w.textures;for(let K=0,X=B.length;K<X;K++){const Q=n.get(B[K]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(B[K])}n.remove(w)}let O=0;function D(){O=0}function A(){const w=O;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),O+=1,w}function x(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function I(w,M){const B=n.get(w);if(w.isVideoTexture&&P(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(B,w,M);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function Z(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){G(B,w,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function k(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){G(B,w,M);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function Y(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){j(B,w,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}const tt={[fs]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[ps]:i.MIRRORED_REPEAT},ot={[ze]:i.NEAREST,[kl]:i.NEAREST_MIPMAP_NEAREST,[Oi]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[yr]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},H={[Vl]:i.NEVER,[Zl]:i.ALWAYS,[Wl]:i.LESS,[Ao]:i.LEQUAL,[Xl]:i.EQUAL,[jl]:i.GEQUAL,[Yl]:i.GREATER,[ql]:i.NOTEQUAL};function V(w,M){if(M.type===en&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ve||M.magFilter===yr||M.magFilter===Oi||M.magFilter===Ln||M.minFilter===Ve||M.minFilter===yr||M.minFilter===Oi||M.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,tt[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,tt[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,tt[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ot[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ot[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,H[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ze||M.minFilter!==Oi&&M.minFilter!==Ln||M.type===en&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function _t(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",U));const K=M.source;let X=_.get(K);X===void 0&&(X={},_.set(K,X));const Q=x(M);if(Q!==w.__cacheKey){X[Q]===void 0&&(X[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),X[Q].usedTimes++;const mt=X[w.__cacheKey];mt!==void 0&&(X[w.__cacheKey].usedTimes--,mt.usedTimes===0&&b(M)),w.__cacheKey=Q,w.__webglTexture=X[Q].texture}return B}function G(w,M,B){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);const X=_t(w,M),Q=M.source;e.bindTexture(K,w.__webglTexture,i.TEXTURE0+B);const mt=n.get(Q);if(Q.version!==mt.__version||X===!0){e.activeTexture(i.TEXTURE0+B);const ht=Zt.getPrimaries(Zt.workingColorSpace),gt=M.colorSpace===pn?null:Zt.getPrimaries(M.colorSpace),Vt=M.colorSpace===pn||ht===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let dt=g(M.image,!1,r.maxTextureSize);dt=z(M,dt);const Tt=s.convert(M.format,M.colorSpace),Et=s.convert(M.type);let Lt=y(M.internalFormat,Tt,Et,M.colorSpace,M.isVideoTexture);V(K,M);let wt;const Ft=M.mipmaps,Bt=M.isVideoTexture!==!0,Qt=mt.__version===void 0||X===!0,W=Q.dataReady,Mt=C(M,dt);if(M.isDepthTexture)Lt=E(M.format===hi,M.type),Qt&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,Lt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,dt.width,dt.height,0,Tt,Et,null));else if(M.isDataTexture)if(Ft.length>0){Bt&&Qt&&e.texStorage2D(i.TEXTURE_2D,Mt,Lt,Ft[0].width,Ft[0].height);for(let st=0,ct=Ft.length;st<ct;st++)wt=Ft[st],Bt?W&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,wt.width,wt.height,Tt,Et,wt.data):e.texImage2D(i.TEXTURE_2D,st,Lt,wt.width,wt.height,0,Tt,Et,wt.data);M.generateMipmaps=!1}else Bt?(Qt&&e.texStorage2D(i.TEXTURE_2D,Mt,Lt,dt.width,dt.height),W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Tt,Et,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,dt.width,dt.height,0,Tt,Et,dt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Bt&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Lt,Ft[0].width,Ft[0].height,dt.depth);for(let st=0,ct=Ft.length;st<ct;st++)if(wt=Ft[st],M.format!==ke)if(Tt!==null)if(Bt){if(W)if(M.layerUpdates.size>0){const St=Ba(wt.width,wt.height,M.format,M.type);for(const bt of M.layerUpdates){const zt=wt.data.subarray(bt*St/wt.data.BYTES_PER_ELEMENT,(bt+1)*St/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,bt,wt.width,wt.height,1,Tt,zt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,wt.width,wt.height,dt.depth,Tt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Lt,wt.width,wt.height,dt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,wt.width,wt.height,dt.depth,Tt,Et,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Lt,wt.width,wt.height,dt.depth,0,Tt,Et,wt.data)}else{Bt&&Qt&&e.texStorage2D(i.TEXTURE_2D,Mt,Lt,Ft[0].width,Ft[0].height);for(let st=0,ct=Ft.length;st<ct;st++)wt=Ft[st],M.format!==ke?Tt!==null?Bt?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,wt.width,wt.height,Tt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Lt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?W&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,wt.width,wt.height,Tt,Et,wt.data):e.texImage2D(i.TEXTURE_2D,st,Lt,wt.width,wt.height,0,Tt,Et,wt.data)}else if(M.isDataArrayTexture)if(Bt){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Lt,dt.width,dt.height,dt.depth),W)if(M.layerUpdates.size>0){const st=Ba(dt.width,dt.height,M.format,M.type);for(const ct of M.layerUpdates){const St=dt.data.subarray(ct*st/dt.data.BYTES_PER_ELEMENT,(ct+1)*st/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,dt.width,dt.height,1,Tt,Et,St)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Tt,Et,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,dt.width,dt.height,dt.depth,0,Tt,Et,dt.data);else if(M.isData3DTexture)Bt?(Qt&&e.texStorage3D(i.TEXTURE_3D,Mt,Lt,dt.width,dt.height,dt.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Tt,Et,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,dt.width,dt.height,dt.depth,0,Tt,Et,dt.data);else if(M.isFramebufferTexture){if(Qt)if(Bt)e.texStorage2D(i.TEXTURE_2D,Mt,Lt,dt.width,dt.height);else{let st=dt.width,ct=dt.height;for(let St=0;St<Mt;St++)e.texImage2D(i.TEXTURE_2D,St,Lt,st,ct,0,Tt,Et,null),st>>=1,ct>>=1}}else if(Ft.length>0){if(Bt&&Qt){const st=nt(Ft[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Lt,st.width,st.height)}for(let st=0,ct=Ft.length;st<ct;st++)wt=Ft[st],Bt?W&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Tt,Et,wt):e.texImage2D(i.TEXTURE_2D,st,Lt,Tt,Et,wt);M.generateMipmaps=!1}else if(Bt){if(Qt){const st=nt(dt);e.texStorage2D(i.TEXTURE_2D,Mt,Lt,st.width,st.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Et,dt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,Tt,Et,dt);f(M)&&c(K),mt.__version=Q.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function j(w,M,B){if(M.image.length!==6)return;const K=_t(w,M),X=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const Q=n.get(X);if(X.version!==Q.__version||K===!0){e.activeTexture(i.TEXTURE0+B);const mt=Zt.getPrimaries(Zt.workingColorSpace),ht=M.colorSpace===pn?null:Zt.getPrimaries(M.colorSpace),gt=M.colorSpace===pn||mt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Vt=M.isCompressedTexture||M.image[0].isCompressedTexture,dt=M.image[0]&&M.image[0].isDataTexture,Tt=[];for(let ct=0;ct<6;ct++)!Vt&&!dt?Tt[ct]=g(M.image[ct],!0,r.maxCubemapSize):Tt[ct]=dt?M.image[ct].image:M.image[ct],Tt[ct]=z(M,Tt[ct]);const Et=Tt[0],Lt=s.convert(M.format,M.colorSpace),wt=s.convert(M.type),Ft=y(M.internalFormat,Lt,wt,M.colorSpace),Bt=M.isVideoTexture!==!0,Qt=Q.__version===void 0||K===!0,W=X.dataReady;let Mt=C(M,Et);V(i.TEXTURE_CUBE_MAP,M);let st;if(Vt){Bt&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Ft,Et.width,Et.height);for(let ct=0;ct<6;ct++){st=Tt[ct].mipmaps;for(let St=0;St<st.length;St++){const bt=st[St];M.format!==ke?Lt!==null?Bt?W&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St,0,0,bt.width,bt.height,Lt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St,Ft,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St,0,0,bt.width,bt.height,Lt,wt,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St,Ft,bt.width,bt.height,0,Lt,wt,bt.data)}}}else{if(st=M.mipmaps,Bt&&Qt){st.length>0&&Mt++;const ct=nt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Ft,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(dt){Bt?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Tt[ct].width,Tt[ct].height,Lt,wt,Tt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Ft,Tt[ct].width,Tt[ct].height,0,Lt,wt,Tt[ct].data);for(let St=0;St<st.length;St++){const zt=st[St].image[ct].image;Bt?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St+1,0,0,zt.width,zt.height,Lt,wt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St+1,Ft,zt.width,zt.height,0,Lt,wt,zt.data)}}else{Bt?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Lt,wt,Tt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Ft,Lt,wt,Tt[ct]);for(let St=0;St<st.length;St++){const bt=st[St];Bt?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St+1,0,0,Lt,wt,bt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St+1,Ft,Lt,wt,bt.image[ct])}}}f(M)&&c(i.TEXTURE_CUBE_MAP),Q.__version=X.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ut(w,M,B,K,X,Q){const mt=s.convert(B.format,B.colorSpace),ht=s.convert(B.type),gt=y(B.internalFormat,mt,ht,B.colorSpace),Vt=n.get(M),dt=n.get(B);if(dt.__renderTarget=M,!Vt.__hasExternalTextures){const Tt=Math.max(1,M.width>>Q),Et=Math.max(1,M.height>>Q);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?e.texImage3D(X,Q,gt,Tt,Et,M.depth,0,mt,ht,null):e.texImage2D(X,Q,gt,Tt,Et,0,mt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),N(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,X,dt.__webglTexture,0,J(M)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,X,dt.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(w,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const K=M.depthTexture,X=K&&K.isDepthTexture?K.type:null,Q=E(M.stencilBuffer,X),mt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=J(M);N(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Q,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,w)}else{const K=M.textures;for(let X=0;X<K.length;X++){const Q=K[X],mt=s.convert(Q.format,Q.colorSpace),ht=s.convert(Q.type),gt=y(Q.internalFormat,mt,ht,Q.colorSpace),Vt=J(M);B&&N(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,gt,M.width,M.height):N(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,gt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,gt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),I(M.depthTexture,0);const X=K.__webglTexture,Q=J(M);if(M.depthTexture.format===ri)N(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0);else if(M.depthTexture.format===hi)N(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function vt(w){const M=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const X=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",X)};K.addEventListener("dispose",X),M.__depthDisposeCallback=X}M.__boundDepthTexture=K}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");pt(M.__webglFramebuffer,w)}else if(B){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=i.createRenderbuffer(),lt(M.__webglDepthbuffer[K],w,!1);else{const X=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),lt(M.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,X)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(w,M,B){const K=n.get(w);M!==void 0&&ut(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&vt(w)}function It(w){const M=w.texture,B=n.get(w),K=n.get(M);w.addEventListener("dispose",L);const X=w.textures,Q=w.isWebGLCubeRenderTarget===!0,mt=X.length>1;if(mt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,o.memory.textures++),Q){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let gt=0;gt<M.mipmaps.length;gt++)B.__webglFramebuffer[ht][gt]=i.createFramebuffer()}else B.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)B.__webglFramebuffer[ht]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(mt)for(let ht=0,gt=X.length;ht<gt;ht++){const Vt=n.get(X[ht]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&N(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ht=0;ht<X.length;ht++){const gt=X[ht];B.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ht]);const Vt=s.convert(gt.format,gt.colorSpace),dt=s.convert(gt.type),Tt=y(gt.internalFormat,Vt,dt,gt.colorSpace,w.isXRRenderTarget===!0),Et=J(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,Tt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,B.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),V(i.TEXTURE_CUBE_MAP,M);for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)ut(B.__webglFramebuffer[ht][gt],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,gt);else ut(B.__webglFramebuffer[ht],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);f(M)&&c(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let ht=0,gt=X.length;ht<gt;ht++){const Vt=X[ht],dt=n.get(Vt);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),V(i.TEXTURE_2D,Vt),ut(B.__webglFramebuffer,w,Vt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),f(Vt)&&c(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ht=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,K.__webglTexture),V(ht,M),M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)ut(B.__webglFramebuffer[gt],w,M,i.COLOR_ATTACHMENT0,ht,gt);else ut(B.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,ht,0);f(M)&&c(ht),e.unbindTexture()}w.depthBuffer&&vt(w)}function Nt(w){const M=w.textures;for(let B=0,K=M.length;B<K;B++){const X=M[B];if(f(X)){const Q=S(w),mt=n.get(X).__webglTexture;e.bindTexture(Q,mt),c(Q),e.unbindTexture()}}}const Xt=[],m=[];function at(w){if(w.samples>0){if(N(w)===!1){const M=w.textures,B=w.width,K=w.height;let X=i.COLOR_BUFFER_BIT;const Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(w),ht=M.length>1;if(ht)for(let gt=0;gt<M.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let gt=0;gt<M.length;gt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);const Vt=n.get(M[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,X,i.NEAREST),l===!0&&(Xt.length=0,m.length=0,Xt.push(i.COLOR_ATTACHMENT0+gt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Xt.push(Q),m.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,m)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let gt=0;gt<M.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);const Vt=n.get(M[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function J(w){return Math.min(r.maxSamples,w.samples)}function N(w){const M=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function P(w){const M=o.render.frame;d.get(w)!==M&&(d.set(w,M),w.update())}function z(w,M){const B=w.colorSpace,K=w.format,X=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==ui&&B!==pn&&(Zt.getTransfer(B)===te?(K!==ke||X!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function nt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=A,this.resetTextureUnits=D,this.setTexture2D=I,this.setTexture2DArray=Z,this.setTexture3D=k,this.setTextureCube=Y,this.rebindTextures=Ct,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=N}function Dp(i,t){function e(n,r=pn){let s;const o=Zt.getTransfer(r);if(n===an)return i.UNSIGNED_BYTE;if(n===Xs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ys)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_o)return i.BYTE;if(n===go)return i.SHORT;if(n===wi)return i.UNSIGNED_SHORT;if(n===Ws)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===Pi)return i.HALF_FLOAT;if(n===xo)return i.ALPHA;if(n===Mo)return i.RGB;if(n===ke)return i.RGBA;if(n===So)return i.LUMINANCE;if(n===yo)return i.LUMINANCE_ALPHA;if(n===ri)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===Eo)return i.RED;if(n===qs)return i.RED_INTEGER;if(n===bo)return i.RG;if(n===js)return i.RG_INTEGER;if(n===Zs)return i.RGBA_INTEGER;if(n===or||n===lr||n===cr||n===hr)if(o===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===or)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===or)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ms||n===_s||n===gs||n===vs)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ms)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_s)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xs||n===Ms||n===Ss)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xs||n===Ms)return o===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ss)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ys||n===Es||n===bs||n===Ts||n===ws||n===As||n===Rs||n===Cs||n===Ps||n===Ds||n===Ls||n===Is||n===Us||n===Ns)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ys)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Es)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bs)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ts)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ws)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===As)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rs)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cs)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ps)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ds)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ls)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Is)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Us)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ns)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ur||n===Fs||n===Os)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ur)return o===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Os)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===To||n===Bs||n===ks||n===zs)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ur)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Bs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ks)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ci?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Lp={type:"move"};class $r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const g of t.hand.values()){const f=e.getJointPose(g,n),c=this._getHandJoint(h,g);f!==null&&(c.matrix.fromArray(f.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=f.radius),c.visible=f!==null}const d=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],_=d.position.distanceTo(p.position),u=.02,v=.005;h.inputState.pinching&&_>u+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&_<=u-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new yi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ip=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Up=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Np{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Se,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vn({vertexShader:Ip,fragmentShader:Up,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new We(new gr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fp extends Fn{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,h=null,d=null,p=null,_=null,u=null,v=null;const g=new Np,f=e.getContextAttributes();let c=null,S=null;const y=[],E=[],C=new kt;let U=null;const L=new Re;L.viewport=new ne;const F=new Re;F.viewport=new ne;const b=[L,F],T=new eh;let O=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=y[G];return j===void 0&&(j=new $r,y[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=y[G];return j===void 0&&(j=new $r,y[G]=j),j.getGripSpace()},this.getHand=function(G){let j=y[G];return j===void 0&&(j=new $r,y[G]=j),j.getHandSpace()};function A(G){const j=E.indexOf(G.inputSource);if(j===-1)return;const ut=y[j];ut!==void 0&&(ut.update(G.inputSource,G.frame,h||o),ut.dispatchEvent({type:G.type,data:G.inputSource}))}function x(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",x),r.removeEventListener("inputsourceschange",I);for(let G=0;G<y.length;G++){const j=E[G];j!==null&&(E[G]=null,y[G].disconnect(j))}O=null,D=null,g.reset(),t.setRenderTarget(c),u=null,_=null,p=null,r=null,S=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(G){h=G},this.getBaseLayer=function(){return _!==null?_:u},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(c=t.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",x),r.addEventListener("inputsourceschange",I),f.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(C),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let ut=null,lt=null,pt=null;f.depth&&(pt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=f.stencil?hi:ri,lt=f.stencil?ci:In);const vt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};p=new XRWebGLBinding(r,e),_=p.createProjectionLayer(vt),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),S=new Un(_.textureWidth,_.textureHeight,{format:ke,type:an,depthTexture:new zo(_.textureWidth,_.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}else{const ut={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,e,ut),r.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new Un(u.framebufferWidth,u.framebufferHeight,{format:ke,type:an,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}S.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await r.requestReferenceSpace(a),_t.setContext(r),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function I(G){for(let j=0;j<G.removed.length;j++){const ut=G.removed[j],lt=E.indexOf(ut);lt>=0&&(E[lt]=null,y[lt].disconnect(ut))}for(let j=0;j<G.added.length;j++){const ut=G.added[j];let lt=E.indexOf(ut);if(lt===-1){for(let vt=0;vt<y.length;vt++)if(vt>=E.length){E.push(ut),lt=vt;break}else if(E[vt]===null){E[vt]=ut,lt=vt;break}if(lt===-1)break}const pt=y[lt];pt&&pt.connect(ut)}}const Z=new et,k=new et;function Y(G,j,ut){Z.setFromMatrixPosition(j.matrixWorld),k.setFromMatrixPosition(ut.matrixWorld);const lt=Z.distanceTo(k),pt=j.projectionMatrix.elements,vt=ut.projectionMatrix.elements,Ct=pt[14]/(pt[10]-1),It=pt[14]/(pt[10]+1),Nt=(pt[9]+1)/pt[5],Xt=(pt[9]-1)/pt[5],m=(pt[8]-1)/pt[0],at=(vt[8]+1)/vt[0],J=Ct*m,N=Ct*at,P=lt/(-m+at),z=P*-m;if(j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(z),G.translateZ(P),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),pt[10]===-1)G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const nt=Ct+P,w=It+P,M=J-z,B=N+(lt-z),K=Nt*It/w*nt,X=Xt*It/w*nt;G.projectionMatrix.makePerspective(M,B,K,X,nt,w),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function tt(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let j=G.near,ut=G.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(ut=g.depthFar)),T.near=F.near=L.near=j,T.far=F.far=L.far=ut,(O!==T.near||D!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),O=T.near,D=T.far),L.layers.mask=G.layers.mask|2,F.layers.mask=G.layers.mask|4,T.layers.mask=L.layers.mask|F.layers.mask;const lt=G.parent,pt=T.cameras;tt(T,lt);for(let vt=0;vt<pt.length;vt++)tt(pt[vt],lt);pt.length===2?Y(T,L,F):T.projectionMatrix.copy(L.projectionMatrix),ot(G,T,lt)};function ot(G,j,ut){ut===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(ut.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ai*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(_===null&&u===null))return l},this.setFoveation=function(G){l=G,_!==null&&(_.fixedFoveation=G),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(T)};let H=null;function V(G,j){if(d=j.getViewerPose(h||o),v=j,d!==null){const ut=d.views;u!==null&&(t.setRenderTargetFramebuffer(S,u.framebuffer),t.setRenderTarget(S));let lt=!1;ut.length!==T.cameras.length&&(T.cameras.length=0,lt=!0);for(let vt=0;vt<ut.length;vt++){const Ct=ut[vt];let It=null;if(u!==null)It=u.getViewport(Ct);else{const Xt=p.getViewSubImage(_,Ct);It=Xt.viewport,vt===0&&(t.setRenderTargetTextures(S,Xt.colorTexture,_.ignoreDepthValues?void 0:Xt.depthStencilTexture),t.setRenderTarget(S))}let Nt=b[vt];Nt===void 0&&(Nt=new Re,Nt.layers.enable(vt),Nt.viewport=new ne,b[vt]=Nt),Nt.matrix.fromArray(Ct.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Ct.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(It.x,It.y,It.width,It.height),vt===0&&(T.matrix.copy(Nt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),lt===!0&&T.cameras.push(Nt)}const pt=r.enabledFeatures;if(pt&&pt.includes("depth-sensing")){const vt=p.getDepthInformation(ut[0]);vt&&vt.isValid&&vt.texture&&g.init(t,vt,r.renderState)}}for(let ut=0;ut<y.length;ut++){const lt=E[ut],pt=y[ut];lt!==null&&pt!==void 0&&pt.update(lt,j,h||o)}H&&H(G,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),v=null}const _t=new Wo;_t.setAnimationLoop(V),this.setAnimationLoop=function(G){H=G},this.dispose=function(){}}}const An=new Ye,Op=new ie;function Bp(i,t){function e(f,c){f.matrixAutoUpdate===!0&&f.updateMatrix(),c.value.copy(f.matrix)}function n(f,c){c.color.getRGB(f.fogColor.value,Oo(i)),c.isFog?(f.fogNear.value=c.near,f.fogFar.value=c.far):c.isFogExp2&&(f.fogDensity.value=c.density)}function r(f,c,S,y,E){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(f,c):c.isMeshToonMaterial?(s(f,c),p(f,c)):c.isMeshPhongMaterial?(s(f,c),d(f,c)):c.isMeshStandardMaterial?(s(f,c),_(f,c),c.isMeshPhysicalMaterial&&u(f,c,E)):c.isMeshMatcapMaterial?(s(f,c),v(f,c)):c.isMeshDepthMaterial?s(f,c):c.isMeshDistanceMaterial?(s(f,c),g(f,c)):c.isMeshNormalMaterial?s(f,c):c.isLineBasicMaterial?(o(f,c),c.isLineDashedMaterial&&a(f,c)):c.isPointsMaterial?l(f,c,S,y):c.isSpriteMaterial?h(f,c):c.isShadowMaterial?(f.color.value.copy(c.color),f.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(f,c){f.opacity.value=c.opacity,c.color&&f.diffuse.value.copy(c.color),c.emissive&&f.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(f.map.value=c.map,e(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,e(c.alphaMap,f.alphaMapTransform)),c.bumpMap&&(f.bumpMap.value=c.bumpMap,e(c.bumpMap,f.bumpMapTransform),f.bumpScale.value=c.bumpScale,c.side===be&&(f.bumpScale.value*=-1)),c.normalMap&&(f.normalMap.value=c.normalMap,e(c.normalMap,f.normalMapTransform),f.normalScale.value.copy(c.normalScale),c.side===be&&f.normalScale.value.negate()),c.displacementMap&&(f.displacementMap.value=c.displacementMap,e(c.displacementMap,f.displacementMapTransform),f.displacementScale.value=c.displacementScale,f.displacementBias.value=c.displacementBias),c.emissiveMap&&(f.emissiveMap.value=c.emissiveMap,e(c.emissiveMap,f.emissiveMapTransform)),c.specularMap&&(f.specularMap.value=c.specularMap,e(c.specularMap,f.specularMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest);const S=t.get(c),y=S.envMap,E=S.envMapRotation;y&&(f.envMap.value=y,An.copy(E),An.x*=-1,An.y*=-1,An.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),f.envMapRotation.value.setFromMatrix4(Op.makeRotationFromEuler(An)),f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=c.reflectivity,f.ior.value=c.ior,f.refractionRatio.value=c.refractionRatio),c.lightMap&&(f.lightMap.value=c.lightMap,f.lightMapIntensity.value=c.lightMapIntensity,e(c.lightMap,f.lightMapTransform)),c.aoMap&&(f.aoMap.value=c.aoMap,f.aoMapIntensity.value=c.aoMapIntensity,e(c.aoMap,f.aoMapTransform))}function o(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,c.map&&(f.map.value=c.map,e(c.map,f.mapTransform))}function a(f,c){f.dashSize.value=c.dashSize,f.totalSize.value=c.dashSize+c.gapSize,f.scale.value=c.scale}function l(f,c,S,y){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.size.value=c.size*S,f.scale.value=y*.5,c.map&&(f.map.value=c.map,e(c.map,f.uvTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,e(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function h(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.rotation.value=c.rotation,c.map&&(f.map.value=c.map,e(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,e(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function d(f,c){f.specular.value.copy(c.specular),f.shininess.value=Math.max(c.shininess,1e-4)}function p(f,c){c.gradientMap&&(f.gradientMap.value=c.gradientMap)}function _(f,c){f.metalness.value=c.metalness,c.metalnessMap&&(f.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,f.metalnessMapTransform)),f.roughness.value=c.roughness,c.roughnessMap&&(f.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,f.roughnessMapTransform)),c.envMap&&(f.envMapIntensity.value=c.envMapIntensity)}function u(f,c,S){f.ior.value=c.ior,c.sheen>0&&(f.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),f.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(f.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,f.sheenColorMapTransform)),c.sheenRoughnessMap&&(f.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,f.sheenRoughnessMapTransform))),c.clearcoat>0&&(f.clearcoat.value=c.clearcoat,f.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(f.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,f.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(f.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===be&&f.clearcoatNormalScale.value.negate())),c.dispersion>0&&(f.dispersion.value=c.dispersion),c.iridescence>0&&(f.iridescence.value=c.iridescence,f.iridescenceIOR.value=c.iridescenceIOR,f.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(f.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,f.iridescenceMapTransform)),c.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),c.transmission>0&&(f.transmission.value=c.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),c.transmissionMap&&(f.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,f.transmissionMapTransform)),f.thickness.value=c.thickness,c.thicknessMap&&(f.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=c.attenuationDistance,f.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(f.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(f.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=c.specularIntensity,f.specularColor.value.copy(c.specularColor),c.specularColorMap&&(f.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,f.specularColorMapTransform)),c.specularIntensityMap&&(f.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,c){c.matcap&&(f.matcap.value=c.matcap)}function g(f,c){const S=t.get(c).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function kp(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const E=y.program;n.uniformBlockBinding(S,E)}function h(S,y){let E=r[S.id];E===void 0&&(v(S),E=d(S),r[S.id]=E,S.addEventListener("dispose",f));const C=y.program;n.updateUBOMapping(S,C);const U=t.render.frame;s[S.id]!==U&&(_(S),s[S.id]=U)}function d(S){const y=p();S.__bindingPointIndex=y;const E=i.createBuffer(),C=S.__size,U=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function p(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(S){const y=r[S.id],E=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let U=0,L=E.length;U<L;U++){const F=Array.isArray(E[U])?E[U]:[E[U]];for(let b=0,T=F.length;b<T;b++){const O=F[b];if(u(O,U,b,C)===!0){const D=O.__offset,A=Array.isArray(O.value)?O.value:[O.value];let x=0;for(let I=0;I<A.length;I++){const Z=A[I],k=g(Z);typeof Z=="number"||typeof Z=="boolean"?(O.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,D+x,O.__data)):Z.isMatrix3?(O.__data[0]=Z.elements[0],O.__data[1]=Z.elements[1],O.__data[2]=Z.elements[2],O.__data[3]=0,O.__data[4]=Z.elements[3],O.__data[5]=Z.elements[4],O.__data[6]=Z.elements[5],O.__data[7]=0,O.__data[8]=Z.elements[6],O.__data[9]=Z.elements[7],O.__data[10]=Z.elements[8],O.__data[11]=0):(Z.toArray(O.__data,x),x+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,y,E,C){const U=S.value,L=y+"_"+E;if(C[L]===void 0)return typeof U=="number"||typeof U=="boolean"?C[L]=U:C[L]=U.clone(),!0;{const F=C[L];if(typeof U=="number"||typeof U=="boolean"){if(F!==U)return C[L]=U,!0}else if(F.equals(U)===!1)return F.copy(U),!0}return!1}function v(S){const y=S.uniforms;let E=0;const C=16;for(let L=0,F=y.length;L<F;L++){const b=Array.isArray(y[L])?y[L]:[y[L]];for(let T=0,O=b.length;T<O;T++){const D=b[T],A=Array.isArray(D.value)?D.value:[D.value];for(let x=0,I=A.length;x<I;x++){const Z=A[x],k=g(Z),Y=E%C,tt=Y%k.boundary,ot=Y+tt;E+=tt,ot!==0&&C-ot<k.storage&&(E+=C-ot),D.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=k.storage}}}const U=E%C;return U>0&&(E+=C-U),S.__size=E,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function f(S){const y=S.target;y.removeEventListener("dispose",f);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function c(){for(const S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:h,dispose:c}}class zp{constructor(t={}){const{canvas:e=fc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const v=new Uint32Array(4),g=new Int32Array(4);let f=null,c=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Le,this.toneMapping=_n,this.toneMappingExposure=1;const E=this;let C=!1,U=0,L=0,F=null,b=-1,T=null;const O=new ne,D=new ne;let A=null;const x=new qt(0);let I=0,Z=e.width,k=e.height,Y=1,tt=null,ot=null;const H=new ne(0,0,Z,k),V=new ne(0,0,Z,k);let _t=!1;const G=new Js;let j=!1,ut=!1;this.transmissionResolutionScale=1;const lt=new ie,pt=new ie,vt=new et,Ct=new ne,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Xt(){return F===null?Y:1}let m=n;function at(R,q){return e.getContext(R,q)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gs}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",bt,!1),m===null){const q="webgl2";if(m=at(q,R),m===null)throw at(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let J,N,P,z,nt,w,M,B,K,X,Q,mt,ht,gt,Vt,dt,Tt,Et,Lt,wt,Ft,Bt,Qt,W;function Mt(){J=new jd(m),J.init(),Bt=new Dp(m,J),N=new Gd(m,J,t,Bt),P=new Cp(m,J),N.reverseDepthBuffer&&_&&P.buffers.depth.setReversed(!0),z=new $d(m),nt=new _p,w=new Pp(m,J,P,nt,N,Bt,z),M=new Wd(E),B=new qd(E),K=new rh(m),Qt=new zd(m,K),X=new Zd(m,K,z,Qt),Q=new Qd(m,X,K,z),Lt=new Jd(m,N,w),dt=new Vd(nt),mt=new mp(E,M,B,J,N,Qt,dt),ht=new Bp(E,nt),gt=new vp,Vt=new bp(J),Et=new kd(E,M,B,P,Q,u,l),Tt=new Ap(E,Q,N),W=new kp(m,z,N,P),wt=new Hd(m,J,z),Ft=new Kd(m,J,z),z.programs=mt.programs,E.capabilities=N,E.extensions=J,E.properties=nt,E.renderLists=gt,E.shadowMap=Tt,E.state=P,E.info=z}Mt();const st=new Fp(E,m);this.xr=st,this.getContext=function(){return m},this.getContextAttributes=function(){return m.getContextAttributes()},this.forceContextLoss=function(){const R=J.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=J.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(Z,k,!1))},this.getSize=function(R){return R.set(Z,k)},this.setSize=function(R,q,it=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=R,k=q,e.width=Math.floor(R*Y),e.height=Math.floor(q*Y),it===!0&&(e.style.width=R+"px",e.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(Z*Y,k*Y).floor()},this.setDrawingBufferSize=function(R,q,it){Z=R,k=q,Y=it,e.width=Math.floor(R*it),e.height=Math.floor(q*it),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(H)},this.setViewport=function(R,q,it,rt){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,q,it,rt),P.viewport(O.copy(H).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(V)},this.setScissor=function(R,q,it,rt){R.isVector4?V.set(R.x,R.y,R.z,R.w):V.set(R,q,it,rt),P.scissor(D.copy(V).multiplyScalar(Y).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(R){P.setScissorTest(_t=R)},this.setOpaqueSort=function(R){tt=R},this.setTransparentSort=function(R){ot=R},this.getClearColor=function(R){return R.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(R=!0,q=!0,it=!0){let rt=0;if(R){let $=!1;if(F!==null){const ft=F.texture.format;$=ft===Zs||ft===js||ft===qs}if($){const ft=F.texture.type,yt=ft===an||ft===In||ft===wi||ft===ci||ft===Xs||ft===Ys,At=Et.getClearColor(),Rt=Et.getClearAlpha(),Ut=At.r,Ot=At.g,Pt=At.b;yt?(v[0]=Ut,v[1]=Ot,v[2]=Pt,v[3]=Rt,m.clearBufferuiv(m.COLOR,0,v)):(g[0]=Ut,g[1]=Ot,g[2]=Pt,g[3]=Rt,m.clearBufferiv(m.COLOR,0,g))}else rt|=m.COLOR_BUFFER_BIT}q&&(rt|=m.DEPTH_BUFFER_BIT),it&&(rt|=m.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),m.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),Et.dispose(),gt.dispose(),Vt.dispose(),nt.dispose(),M.dispose(),B.dispose(),Q.dispose(),Qt.dispose(),W.dispose(),mt.dispose(),st.dispose(),st.removeEventListener("sessionstart",na),st.removeEventListener("sessionend",ia),Mn.stop()};function ct(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const R=z.autoReset,q=Tt.enabled,it=Tt.autoUpdate,rt=Tt.needsUpdate,$=Tt.type;Mt(),z.autoReset=R,Tt.enabled=q,Tt.autoUpdate=it,Tt.needsUpdate=rt,Tt.type=$}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function zt(R){const q=R.target;q.removeEventListener("dispose",zt),se(q)}function se(R){pe(R),nt.remove(R)}function pe(R){const q=nt.get(R).programs;q!==void 0&&(q.forEach(function(it){mt.releaseProgram(it)}),R.isShaderMaterial&&mt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,it,rt,$,ft){q===null&&(q=It);const yt=$.isMesh&&$.matrixWorld.determinant()<0,At=il(R,q,it,rt,$);P.setMaterial(rt,yt);let Rt=it.index,Ut=1;if(rt.wireframe===!0){if(Rt=X.getWireframeAttribute(it),Rt===void 0)return;Ut=2}const Ot=it.drawRange,Pt=it.attributes.position;let Yt=Ot.start*Ut,Kt=(Ot.start+Ot.count)*Ut;ft!==null&&(Yt=Math.max(Yt,ft.start*Ut),Kt=Math.min(Kt,(ft.start+ft.count)*Ut)),Rt!==null?(Yt=Math.max(Yt,0),Kt=Math.min(Kt,Rt.count)):Pt!=null&&(Yt=Math.max(Yt,0),Kt=Math.min(Kt,Pt.count));const oe=Kt-Yt;if(oe<0||oe===1/0)return;Qt.setup($,rt,At,it,Rt);let ae,jt=wt;if(Rt!==null&&(ae=K.get(Rt),jt=Ft,jt.setIndex(ae)),$.isMesh)rt.wireframe===!0?(P.setLineWidth(rt.wireframeLinewidth*Xt()),jt.setMode(m.LINES)):jt.setMode(m.TRIANGLES);else if($.isLine){let Dt=rt.linewidth;Dt===void 0&&(Dt=1),P.setLineWidth(Dt*Xt()),$.isLineSegments?jt.setMode(m.LINES):$.isLineLoop?jt.setMode(m.LINE_LOOP):jt.setMode(m.LINE_STRIP)}else $.isPoints?jt.setMode(m.POINTS):$.isSprite&&jt.setMode(m.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)jt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))jt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Dt=$._multiDrawStarts,fe=$._multiDrawCounts,$t=$._multiDrawCount,Ue=Rt?K.get(Rt).bytesPerElement:1,On=nt.get(rt).currentProgram.getUniforms();for(let Te=0;Te<$t;Te++)On.setValue(m,"_gl_DrawID",Te),jt.render(Dt[Te]/Ue,fe[Te])}else if($.isInstancedMesh)jt.renderInstances(Yt,oe,$.count);else if(it.isInstancedBufferGeometry){const Dt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,fe=Math.min(it.instanceCount,Dt);jt.renderInstances(Yt,oe,fe)}else jt.render(Yt,oe)};function Jt(R,q,it){R.transparent===!0&&R.side===Ge&&R.forceSinglePass===!1?(R.side=be,R.needsUpdate=!0,Fi(R,q,it),R.side=gn,R.needsUpdate=!0,Fi(R,q,it),R.side=Ge):Fi(R,q,it)}this.compile=function(R,q,it=null){it===null&&(it=R),c=Vt.get(it),c.init(q),y.push(c),it.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(c.pushLight($),$.castShadow&&c.pushShadow($))}),R!==it&&R.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(c.pushLight($),$.castShadow&&c.pushShadow($))}),c.setupLights();const rt=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const ft=$.material;if(ft)if(Array.isArray(ft))for(let yt=0;yt<ft.length;yt++){const At=ft[yt];Jt(At,it,$),rt.add(At)}else Jt(ft,it,$),rt.add(ft)}),y.pop(),c=null,rt},this.compileAsync=function(R,q,it=null){const rt=this.compile(R,q,it);return new Promise($=>{function ft(){if(rt.forEach(function(yt){nt.get(yt).currentProgram.isReady()&&rt.delete(yt)}),rt.size===0){$(R);return}setTimeout(ft,10)}J.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Ie=null;function qe(R){Ie&&Ie(R)}function na(){Mn.stop()}function ia(){Mn.start()}const Mn=new Wo;Mn.setAnimationLoop(qe),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(R){Ie=R,st.setAnimationLoop(R),R===null?Mn.stop():Mn.start()},st.addEventListener("sessionstart",na),st.addEventListener("sessionend",ia),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(q),q=st.getCamera()),R.isScene===!0&&R.onBeforeRender(E,R,q,F),c=Vt.get(R,y.length),c.init(q),y.push(c),pt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),G.setFromProjectionMatrix(pt),ut=this.localClippingEnabled,j=dt.init(this.clippingPlanes,ut),f=gt.get(R,S.length),f.init(),S.push(f),st.enabled===!0&&st.isPresenting===!0){const ft=E.xr.getDepthSensingMesh();ft!==null&&Mr(ft,q,-1/0,E.sortObjects)}Mr(R,q,0,E.sortObjects),f.finish(),E.sortObjects===!0&&f.sort(tt,ot),Nt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Nt&&Et.addToRenderList(f,R),this.info.render.frame++,j===!0&&dt.beginShadows();const it=c.state.shadowsArray;Tt.render(it,R,q),j===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=f.opaque,$=f.transmissive;if(c.setupLights(),q.isArrayCamera){const ft=q.cameras;if($.length>0)for(let yt=0,At=ft.length;yt<At;yt++){const Rt=ft[yt];sa(rt,$,R,Rt)}Nt&&Et.render(R);for(let yt=0,At=ft.length;yt<At;yt++){const Rt=ft[yt];ra(f,R,Rt,Rt.viewport)}}else $.length>0&&sa(rt,$,R,q),Nt&&Et.render(R),ra(f,R,q);F!==null&&L===0&&(w.updateMultisampleRenderTarget(F),w.updateRenderTargetMipmap(F)),R.isScene===!0&&R.onAfterRender(E,R,q),Qt.resetDefaultState(),b=-1,T=null,y.pop(),y.length>0?(c=y[y.length-1],j===!0&&dt.setGlobalState(E.clippingPlanes,c.state.camera)):c=null,S.pop(),S.length>0?f=S[S.length-1]:f=null};function Mr(R,q,it,rt){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)it=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)c.pushLight(R),R.castShadow&&c.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||G.intersectsSprite(R)){rt&&Ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pt);const yt=Q.update(R),At=R.material;At.visible&&f.push(R,yt,At,it,Ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||G.intersectsObject(R))){const yt=Q.update(R),At=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ct.copy(R.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ct.copy(yt.boundingSphere.center)),Ct.applyMatrix4(R.matrixWorld).applyMatrix4(pt)),Array.isArray(At)){const Rt=yt.groups;for(let Ut=0,Ot=Rt.length;Ut<Ot;Ut++){const Pt=Rt[Ut],Yt=At[Pt.materialIndex];Yt&&Yt.visible&&f.push(R,yt,Yt,it,Ct.z,Pt)}}else At.visible&&f.push(R,yt,At,it,Ct.z,null)}}const ft=R.children;for(let yt=0,At=ft.length;yt<At;yt++)Mr(ft[yt],q,it,rt)}function ra(R,q,it,rt){const $=R.opaque,ft=R.transmissive,yt=R.transparent;c.setupLightsView(it),j===!0&&dt.setGlobalState(E.clippingPlanes,it),rt&&P.viewport(O.copy(rt)),$.length>0&&Ni($,q,it),ft.length>0&&Ni(ft,q,it),yt.length>0&&Ni(yt,q,it),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function sa(R,q,it,rt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[rt.id]===void 0&&(c.state.transmissionRenderTarget[rt.id]=new Un(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Pi:an,minFilter:Ln,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const ft=c.state.transmissionRenderTarget[rt.id],yt=rt.viewport||O;ft.setSize(yt.z*E.transmissionResolutionScale,yt.w*E.transmissionResolutionScale);const At=E.getRenderTarget();E.setRenderTarget(ft),E.getClearColor(x),I=E.getClearAlpha(),I<1&&E.setClearColor(16777215,.5),E.clear(),Nt&&Et.render(it);const Rt=E.toneMapping;E.toneMapping=_n;const Ut=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),c.setupLightsView(rt),j===!0&&dt.setGlobalState(E.clippingPlanes,rt),Ni(R,it,rt),w.updateMultisampleRenderTarget(ft),w.updateRenderTargetMipmap(ft),J.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Pt=0,Yt=q.length;Pt<Yt;Pt++){const Kt=q[Pt],oe=Kt.object,ae=Kt.geometry,jt=Kt.material,Dt=Kt.group;if(jt.side===Ge&&oe.layers.test(rt.layers)){const fe=jt.side;jt.side=be,jt.needsUpdate=!0,aa(oe,it,rt,ae,jt,Dt),jt.side=fe,jt.needsUpdate=!0,Ot=!0}}Ot===!0&&(w.updateMultisampleRenderTarget(ft),w.updateRenderTargetMipmap(ft))}E.setRenderTarget(At),E.setClearColor(x,I),Ut!==void 0&&(rt.viewport=Ut),E.toneMapping=Rt}function Ni(R,q,it){const rt=q.isScene===!0?q.overrideMaterial:null;for(let $=0,ft=R.length;$<ft;$++){const yt=R[$],At=yt.object,Rt=yt.geometry,Ut=rt===null?yt.material:rt,Ot=yt.group;At.layers.test(it.layers)&&aa(At,q,it,Rt,Ut,Ot)}}function aa(R,q,it,rt,$,ft){R.onBeforeRender(E,q,it,rt,$,ft),R.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(E,q,it,rt,R,ft),$.transparent===!0&&$.side===Ge&&$.forceSinglePass===!1?($.side=be,$.needsUpdate=!0,E.renderBufferDirect(it,q,rt,$,R,ft),$.side=gn,$.needsUpdate=!0,E.renderBufferDirect(it,q,rt,$,R,ft),$.side=Ge):E.renderBufferDirect(it,q,rt,$,R,ft),R.onAfterRender(E,q,it,rt,$,ft)}function Fi(R,q,it){q.isScene!==!0&&(q=It);const rt=nt.get(R),$=c.state.lights,ft=c.state.shadowsArray,yt=$.state.version,At=mt.getParameters(R,$.state,ft,q,it),Rt=mt.getProgramCacheKey(At);let Ut=rt.programs;rt.environment=R.isMeshStandardMaterial?q.environment:null,rt.fog=q.fog,rt.envMap=(R.isMeshStandardMaterial?B:M).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Ut===void 0&&(R.addEventListener("dispose",zt),Ut=new Map,rt.programs=Ut);let Ot=Ut.get(Rt);if(Ot!==void 0){if(rt.currentProgram===Ot&&rt.lightsStateVersion===yt)return la(R,At),Ot}else At.uniforms=mt.getUniforms(R),R.onBeforeCompile(At,E),Ot=mt.acquireProgram(At,Rt),Ut.set(Rt,Ot),rt.uniforms=At.uniforms;const Pt=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Pt.clippingPlanes=dt.uniform),la(R,At),rt.needsLights=sl(R),rt.lightsStateVersion=yt,rt.needsLights&&(Pt.ambientLightColor.value=$.state.ambient,Pt.lightProbe.value=$.state.probe,Pt.directionalLights.value=$.state.directional,Pt.directionalLightShadows.value=$.state.directionalShadow,Pt.spotLights.value=$.state.spot,Pt.spotLightShadows.value=$.state.spotShadow,Pt.rectAreaLights.value=$.state.rectArea,Pt.ltc_1.value=$.state.rectAreaLTC1,Pt.ltc_2.value=$.state.rectAreaLTC2,Pt.pointLights.value=$.state.point,Pt.pointLightShadows.value=$.state.pointShadow,Pt.hemisphereLights.value=$.state.hemi,Pt.directionalShadowMap.value=$.state.directionalShadowMap,Pt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Pt.spotShadowMap.value=$.state.spotShadowMap,Pt.spotLightMatrix.value=$.state.spotLightMatrix,Pt.spotLightMap.value=$.state.spotLightMap,Pt.pointShadowMap.value=$.state.pointShadowMap,Pt.pointShadowMatrix.value=$.state.pointShadowMatrix),rt.currentProgram=Ot,rt.uniformsList=null,Ot}function oa(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=dr.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function la(R,q){const it=nt.get(R);it.outputColorSpace=q.outputColorSpace,it.batching=q.batching,it.batchingColor=q.batchingColor,it.instancing=q.instancing,it.instancingColor=q.instancingColor,it.instancingMorph=q.instancingMorph,it.skinning=q.skinning,it.morphTargets=q.morphTargets,it.morphNormals=q.morphNormals,it.morphColors=q.morphColors,it.morphTargetsCount=q.morphTargetsCount,it.numClippingPlanes=q.numClippingPlanes,it.numIntersection=q.numClipIntersection,it.vertexAlphas=q.vertexAlphas,it.vertexTangents=q.vertexTangents,it.toneMapping=q.toneMapping}function il(R,q,it,rt,$){q.isScene!==!0&&(q=It),w.resetTextureUnits();const ft=q.fog,yt=rt.isMeshStandardMaterial?q.environment:null,At=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ui,Rt=(rt.isMeshStandardMaterial?B:M).get(rt.envMap||yt),Ut=rt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Ot=!!it.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Pt=!!it.morphAttributes.position,Yt=!!it.morphAttributes.normal,Kt=!!it.morphAttributes.color;let oe=_n;rt.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(oe=E.toneMapping);const ae=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,jt=ae!==void 0?ae.length:0,Dt=nt.get(rt),fe=c.state.lights;if(j===!0&&(ut===!0||R!==T)){const ve=R===T&&rt.id===b;dt.setState(rt,R,ve)}let $t=!1;rt.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==fe.state.version||Dt.outputColorSpace!==At||$.isBatchedMesh&&Dt.batching===!1||!$.isBatchedMesh&&Dt.batching===!0||$.isBatchedMesh&&Dt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Dt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Dt.instancing===!1||!$.isInstancedMesh&&Dt.instancing===!0||$.isSkinnedMesh&&Dt.skinning===!1||!$.isSkinnedMesh&&Dt.skinning===!0||$.isInstancedMesh&&Dt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Dt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Dt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Dt.instancingMorph===!1&&$.morphTexture!==null||Dt.envMap!==Rt||rt.fog===!0&&Dt.fog!==ft||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==dt.numPlanes||Dt.numIntersection!==dt.numIntersection)||Dt.vertexAlphas!==Ut||Dt.vertexTangents!==Ot||Dt.morphTargets!==Pt||Dt.morphNormals!==Yt||Dt.morphColors!==Kt||Dt.toneMapping!==oe||Dt.morphTargetsCount!==jt)&&($t=!0):($t=!0,Dt.__version=rt.version);let Ue=Dt.currentProgram;$t===!0&&(Ue=Fi(rt,q,$));let On=!1,Te=!1,_i=!1;const re=Ue.getUniforms(),Ce=Dt.uniforms;if(P.useProgram(Ue.program)&&(On=!0,Te=!0,_i=!0),rt.id!==b&&(b=rt.id,Te=!0),On||T!==R){P.buffers.depth.getReversed()?(lt.copy(R.projectionMatrix),mc(lt),_c(lt),re.setValue(m,"projectionMatrix",lt)):re.setValue(m,"projectionMatrix",R.projectionMatrix),re.setValue(m,"viewMatrix",R.matrixWorldInverse);const ye=re.map.cameraPosition;ye!==void 0&&ye.setValue(m,vt.setFromMatrixPosition(R.matrixWorld)),N.logarithmicDepthBuffer&&re.setValue(m,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&re.setValue(m,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,Te=!0,_i=!0)}if($.isSkinnedMesh){re.setOptional(m,$,"bindMatrix"),re.setOptional(m,$,"bindMatrixInverse");const ve=$.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),re.setValue(m,"boneTexture",ve.boneTexture,w))}$.isBatchedMesh&&(re.setOptional(m,$,"batchingTexture"),re.setValue(m,"batchingTexture",$._matricesTexture,w),re.setOptional(m,$,"batchingIdTexture"),re.setValue(m,"batchingIdTexture",$._indirectTexture,w),re.setOptional(m,$,"batchingColorTexture"),$._colorsTexture!==null&&re.setValue(m,"batchingColorTexture",$._colorsTexture,w));const Pe=it.morphAttributes;if((Pe.position!==void 0||Pe.normal!==void 0||Pe.color!==void 0)&&Lt.update($,it,Ue),(Te||Dt.receiveShadow!==$.receiveShadow)&&(Dt.receiveShadow=$.receiveShadow,re.setValue(m,"receiveShadow",$.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Ce.envMap.value=Rt,Ce.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&q.environment!==null&&(Ce.envMapIntensity.value=q.environmentIntensity),Te&&(re.setValue(m,"toneMappingExposure",E.toneMappingExposure),Dt.needsLights&&rl(Ce,_i),ft&&rt.fog===!0&&ht.refreshFogUniforms(Ce,ft),ht.refreshMaterialUniforms(Ce,rt,Y,k,c.state.transmissionRenderTarget[R.id]),dr.upload(m,oa(Dt),Ce,w)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(dr.upload(m,oa(Dt),Ce,w),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&re.setValue(m,"center",$.center),re.setValue(m,"modelViewMatrix",$.modelViewMatrix),re.setValue(m,"normalMatrix",$.normalMatrix),re.setValue(m,"modelMatrix",$.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const ve=rt.uniformsGroups;for(let ye=0,Sr=ve.length;ye<Sr;ye++){const Sn=ve[ye];W.update(Sn,Ue),W.bind(Sn,Ue)}}return Ue}function rl(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function sl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(R,q,it){nt.get(R.texture).__webglTexture=q,nt.get(R.depthTexture).__webglTexture=it;const rt=nt.get(R);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=it===void 0,rt.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,q){const it=nt.get(R);it.__webglFramebuffer=q,it.__useDefaultFramebuffer=q===void 0};const al=m.createFramebuffer();this.setRenderTarget=function(R,q=0,it=0){F=R,U=q,L=it;let rt=!0,$=null,ft=!1,yt=!1;if(R){const Rt=nt.get(R);if(Rt.__useDefaultFramebuffer!==void 0)P.bindFramebuffer(m.FRAMEBUFFER,null),rt=!1;else if(Rt.__webglFramebuffer===void 0)w.setupRenderTarget(R);else if(Rt.__hasExternalTextures)w.rebindTextures(R,nt.get(R.texture).__webglTexture,nt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Pt=R.depthTexture;if(Rt.__boundDepthTexture!==Pt){if(Pt!==null&&nt.has(Pt)&&(R.width!==Pt.image.width||R.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(R)}}const Ut=R.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(yt=!0);const Ot=nt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ot[q])?$=Ot[q][it]:$=Ot[q],ft=!0):R.samples>0&&w.useMultisampledRTT(R)===!1?$=nt.get(R).__webglMultisampledFramebuffer:Array.isArray(Ot)?$=Ot[it]:$=Ot,O.copy(R.viewport),D.copy(R.scissor),A=R.scissorTest}else O.copy(H).multiplyScalar(Y).floor(),D.copy(V).multiplyScalar(Y).floor(),A=_t;if(it!==0&&($=al),P.bindFramebuffer(m.FRAMEBUFFER,$)&&rt&&P.drawBuffers(R,$),P.viewport(O),P.scissor(D),P.setScissorTest(A),ft){const Rt=nt.get(R.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_CUBE_MAP_POSITIVE_X+q,Rt.__webglTexture,it)}else if(yt){const Rt=nt.get(R.texture),Ut=q;m.framebufferTextureLayer(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,Rt.__webglTexture,it,Ut)}else if(R!==null&&it!==0){const Rt=nt.get(R.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,Rt.__webglTexture,it)}b=-1},this.readRenderTargetPixels=function(R,q,it,rt,$,ft,yt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=nt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&yt!==void 0&&(At=At[yt]),At){P.bindFramebuffer(m.FRAMEBUFFER,At);try{const Rt=R.texture,Ut=Rt.format,Ot=Rt.type;if(!N.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-rt&&it>=0&&it<=R.height-$&&m.readPixels(q,it,rt,$,Bt.convert(Ut),Bt.convert(Ot),ft)}finally{const Rt=F!==null?nt.get(F).__webglFramebuffer:null;P.bindFramebuffer(m.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(R,q,it,rt,$,ft,yt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=nt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&yt!==void 0&&(At=At[yt]),At){const Rt=R.texture,Ut=Rt.format,Ot=Rt.type;if(!N.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=R.width-rt&&it>=0&&it<=R.height-$){P.bindFramebuffer(m.FRAMEBUFFER,At);const Pt=m.createBuffer();m.bindBuffer(m.PIXEL_PACK_BUFFER,Pt),m.bufferData(m.PIXEL_PACK_BUFFER,ft.byteLength,m.STREAM_READ),m.readPixels(q,it,rt,$,Bt.convert(Ut),Bt.convert(Ot),0);const Yt=F!==null?nt.get(F).__webglFramebuffer:null;P.bindFramebuffer(m.FRAMEBUFFER,Yt);const Kt=m.fenceSync(m.SYNC_GPU_COMMANDS_COMPLETE,0);return m.flush(),await pc(m,Kt,4),m.bindBuffer(m.PIXEL_PACK_BUFFER,Pt),m.getBufferSubData(m.PIXEL_PACK_BUFFER,0,ft),m.deleteBuffer(Pt),m.deleteSync(Kt),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,q=null,it=0){R.isTexture!==!0&&(Qn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1]);const rt=Math.pow(2,-it),$=Math.floor(R.image.width*rt),ft=Math.floor(R.image.height*rt),yt=q!==null?q.x:0,At=q!==null?q.y:0;w.setTexture2D(R,0),m.copyTexSubImage2D(m.TEXTURE_2D,it,0,0,yt,At,$,ft),P.unbindTexture()};const ol=m.createFramebuffer(),ll=m.createFramebuffer();this.copyTextureToTexture=function(R,q,it=null,rt=null,$=0,ft=null){R.isTexture!==!0&&(Qn("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,R=arguments[1],q=arguments[2],ft=arguments[3]||0,it=null),ft===null&&($!==0?(Qn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=$,$=0):ft=0);let yt,At,Rt,Ut,Ot,Pt,Yt,Kt,oe;const ae=R.isCompressedTexture?R.mipmaps[ft]:R.image;if(it!==null)yt=it.max.x-it.min.x,At=it.max.y-it.min.y,Rt=it.isBox3?it.max.z-it.min.z:1,Ut=it.min.x,Ot=it.min.y,Pt=it.isBox3?it.min.z:0;else{const Pe=Math.pow(2,-$);yt=Math.floor(ae.width*Pe),At=Math.floor(ae.height*Pe),R.isDataArrayTexture?Rt=ae.depth:R.isData3DTexture?Rt=Math.floor(ae.depth*Pe):Rt=1,Ut=0,Ot=0,Pt=0}rt!==null?(Yt=rt.x,Kt=rt.y,oe=rt.z):(Yt=0,Kt=0,oe=0);const jt=Bt.convert(q.format),Dt=Bt.convert(q.type);let fe;q.isData3DTexture?(w.setTexture3D(q,0),fe=m.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(w.setTexture2DArray(q,0),fe=m.TEXTURE_2D_ARRAY):(w.setTexture2D(q,0),fe=m.TEXTURE_2D),m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,q.flipY),m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),m.pixelStorei(m.UNPACK_ALIGNMENT,q.unpackAlignment);const $t=m.getParameter(m.UNPACK_ROW_LENGTH),Ue=m.getParameter(m.UNPACK_IMAGE_HEIGHT),On=m.getParameter(m.UNPACK_SKIP_PIXELS),Te=m.getParameter(m.UNPACK_SKIP_ROWS),_i=m.getParameter(m.UNPACK_SKIP_IMAGES);m.pixelStorei(m.UNPACK_ROW_LENGTH,ae.width),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,ae.height),m.pixelStorei(m.UNPACK_SKIP_PIXELS,Ut),m.pixelStorei(m.UNPACK_SKIP_ROWS,Ot),m.pixelStorei(m.UNPACK_SKIP_IMAGES,Pt);const re=R.isDataArrayTexture||R.isData3DTexture,Ce=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Pe=nt.get(R),ve=nt.get(q),ye=nt.get(Pe.__renderTarget),Sr=nt.get(ve.__renderTarget);P.bindFramebuffer(m.READ_FRAMEBUFFER,ye.__webglFramebuffer),P.bindFramebuffer(m.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let Sn=0;Sn<Rt;Sn++)re&&(m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,nt.get(R).__webglTexture,$,Pt+Sn),m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,nt.get(q).__webglTexture,ft,oe+Sn)),m.blitFramebuffer(Ut,Ot,yt,At,Yt,Kt,yt,At,m.DEPTH_BUFFER_BIT,m.NEAREST);P.bindFramebuffer(m.READ_FRAMEBUFFER,null),P.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||nt.has(R)){const Pe=nt.get(R),ve=nt.get(q);P.bindFramebuffer(m.READ_FRAMEBUFFER,ol),P.bindFramebuffer(m.DRAW_FRAMEBUFFER,ll);for(let ye=0;ye<Rt;ye++)re?m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,Pe.__webglTexture,$,Pt+ye):m.framebufferTexture2D(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,Pe.__webglTexture,$),Ce?m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,ve.__webglTexture,ft,oe+ye):m.framebufferTexture2D(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,ve.__webglTexture,ft),$!==0?m.blitFramebuffer(Ut,Ot,yt,At,Yt,Kt,yt,At,m.COLOR_BUFFER_BIT,m.NEAREST):Ce?m.copyTexSubImage3D(fe,ft,Yt,Kt,oe+ye,Ut,Ot,yt,At):m.copyTexSubImage2D(fe,ft,Yt,Kt,Ut,Ot,yt,At);P.bindFramebuffer(m.READ_FRAMEBUFFER,null),P.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else Ce?R.isDataTexture||R.isData3DTexture?m.texSubImage3D(fe,ft,Yt,Kt,oe,yt,At,Rt,jt,Dt,ae.data):q.isCompressedArrayTexture?m.compressedTexSubImage3D(fe,ft,Yt,Kt,oe,yt,At,Rt,jt,ae.data):m.texSubImage3D(fe,ft,Yt,Kt,oe,yt,At,Rt,jt,Dt,ae):R.isDataTexture?m.texSubImage2D(m.TEXTURE_2D,ft,Yt,Kt,yt,At,jt,Dt,ae.data):R.isCompressedTexture?m.compressedTexSubImage2D(m.TEXTURE_2D,ft,Yt,Kt,ae.width,ae.height,jt,ae.data):m.texSubImage2D(m.TEXTURE_2D,ft,Yt,Kt,yt,At,jt,Dt,ae);m.pixelStorei(m.UNPACK_ROW_LENGTH,$t),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,Ue),m.pixelStorei(m.UNPACK_SKIP_PIXELS,On),m.pixelStorei(m.UNPACK_SKIP_ROWS,Te),m.pixelStorei(m.UNPACK_SKIP_IMAGES,_i),ft===0&&q.generateMipmaps&&m.generateMipmap(fe),P.unbindTexture()},this.copyTextureToTexture3D=function(R,q,it=null,rt=null,$=0){return R.isTexture!==!0&&(Qn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,rt=arguments[1]||null,R=arguments[2],q=arguments[3],$=arguments[4]||0),Qn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,it,rt,$)},this.initRenderTarget=function(R){nt.get(R).__webglFramebuffer===void 0&&w.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),P.unbindTexture()},this.resetState=function(){U=0,L=0,F=null,P.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const co={type:"change"},ta={type:"start"},Zo={type:"end"},rr=new Do,ho=new fn,Hp=Math.cos(70*dc.DEG2RAD),ce=new et,Ee=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jr=1e-6;class Gp extends nh{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.enabled=!0,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ni.ROTATE,MIDDLE:ni.DOLLY,RIGHT:ni.PAN},this.touches={ONE:ti.ROTATE,TWO:ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new et,this._lastQuaternion=new Nn,this._lastTargetPosition=new et,this._quat=new Nn().setFromUnitVectors(t.up,new et(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Oa,this._sphericalDelta=new Oa,this._scale=1,this._panOffset=new et,this._rotateStart=new kt,this._rotateEnd=new kt,this._rotateDelta=new kt,this._panStart=new kt,this._panEnd=new kt,this._panDelta=new kt,this._dollyStart=new kt,this._dollyEnd=new kt,this._dollyDelta=new kt,this._dollyDirection=new et,this._mouse=new kt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wp.bind(this),this._onPointerDown=Vp.bind(this),this._onPointerUp=Xp.bind(this),this._onContextMenu=Jp.bind(this),this._onMouseWheel=jp.bind(this),this._onKeyDown=Zp.bind(this),this._onTouchStart=Kp.bind(this),this._onTouchMove=$p.bind(this),this._onMouseDown=Yp.bind(this),this._onMouseMove=qp.bind(this),this._interceptControlDown=Qp.bind(this),this._interceptControlUp=tm.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(co),this.update(),this.state=ee.NONE}update(t=null){const e=this.object.position;ce.copy(e).sub(this.target),ce.applyQuaternion(this._quat),this._spherical.setFromVector3(ce),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ee:n>Math.PI&&(n-=Ee),r<-Math.PI?r+=Ee:r>Math.PI&&(r-=Ee),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(ce.setFromSpherical(this._spherical),ce.applyQuaternion(this._quatInverse),e.copy(this.target).add(ce),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ce.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new et(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const h=new et(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=ce.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(rr.origin.copy(this.object.position),rr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rr.direction))<Hp?this.object.lookAt(this.target):(ho.setFromNormalAndCoplanarPoint(this.object.up,this.target),rr.intersectPlane(ho,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Jr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jr||this._lastTargetPosition.distanceToSquared(this.target)>Jr?(this.dispatchEvent(co),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ee/60*this.autoRotateSpeed*t:Ee/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ce.setFromMatrixColumn(e,0),ce.multiplyScalar(-t),this._panOffset.add(ce)}_panUp(t,e){this.screenSpacePanning===!0?ce.setFromMatrixColumn(e,1):(ce.setFromMatrixColumn(e,0),ce.crossVectors(this.object.up,ce)),ce.multiplyScalar(t),this._panOffset.add(ce)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ce.copy(r).sub(this.target);let s=ce.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ee*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ee*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ee*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ee*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ee*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ee*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ee*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ee*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new kt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Vp(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Wp(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Xp(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zo),this.state=ee.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Yp(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ni.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ee.DOLLY;break;case ni.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}break;case ni.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(ta)}function qp(i){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function jp(i){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(i.preventDefault(),this.dispatchEvent(ta),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Zo))}function Zp(i){this.enabled!==!1&&this._handleKeyDown(i)}function Kp(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ti.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ee.TOUCH_ROTATE;break;case ti.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case ti.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ee.TOUCH_DOLLY_PAN;break;case ti.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(ta)}function $p(i){switch(this._trackPointer(i),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ee.NONE}}function Jp(i){this.enabled!==!1&&i.preventDefault()}function Qp(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ko(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function ar(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Qr={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var uo;function em(){return uo||(uo=1,function(i,t){(function(e){i.exports=e()})(function(){return function e(n,r,s){function o(h,d){if(!r[h]){if(!n[h]){var p=typeof ar=="function"&&ar;if(!d&&p)return p(h,!0);if(a)return a(h,!0);var _=new Error("Cannot find module '"+h+"'");throw _.code="MODULE_NOT_FOUND",_}var u=r[h]={exports:{}};n[h][0].call(u.exports,function(v){var g=n[h][1][v];return o(g||v)},u,u.exports,e,n,r,s)}return r[h].exports}for(var a=typeof ar=="function"&&ar,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(e,n,r){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var h,d,p,_,u,v,g,f=[],c=0,S=l.length,y=S,E=s.getTypeOf(l)!=="string";c<l.length;)y=S-c,p=E?(h=l[c++],d=c<S?l[c++]:0,c<S?l[c++]:0):(h=l.charCodeAt(c++),d=c<S?l.charCodeAt(c++):0,c<S?l.charCodeAt(c++):0),_=h>>2,u=(3&h)<<4|d>>4,v=1<y?(15&d)<<2|p>>6:64,g=2<y?63&p:64,f.push(a.charAt(_)+a.charAt(u)+a.charAt(v)+a.charAt(g));return f.join("")},r.decode=function(l){var h,d,p,_,u,v,g=0,f=0,c="data:";if(l.substr(0,c.length)===c)throw new Error("Invalid base64 input, it looks like a data url.");var S,y=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&y--,l.charAt(l.length-2)===a.charAt(64)&&y--,y%1!=0)throw new Error("Invalid base64 input, bad content length.");for(S=o.uint8array?new Uint8Array(0|y):new Array(0|y);g<l.length;)h=a.indexOf(l.charAt(g++))<<2|(_=a.indexOf(l.charAt(g++)))>>4,d=(15&_)<<4|(u=a.indexOf(l.charAt(g++)))>>2,p=(3&u)<<6|(v=a.indexOf(l.charAt(g++))),S[f++]=h,u!==64&&(S[f++]=d),v!==64&&(S[f++]=p);return S}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function h(d,p,_,u,v){this.compressedSize=d,this.uncompressedSize=p,this.crc32=_,this.compression=u,this.compressedContent=v}h.prototype={getContentWorker:function(){var d=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),p=this;return d.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(d,p,_){return d.pipe(new a).pipe(new l("uncompressedSize")).pipe(p.compressWorker(_)).pipe(new l("compressedSize")).withStreamInfo("compression",p)},n.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),o=function(){for(var a,l=[],h=0;h<256;h++){a=h;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;l[h]=a}return l}();n.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(h,d,p,_){var u=o,v=_+p;h^=-1;for(var g=_;g<v;g++)h=h>>>8^u[255&(h^d[g])];return-1^h}(0|l,a,a.length,0):function(h,d,p,_){var u=o,v=_+p;h^=-1;for(var g=_;g<v;g++)h=h>>>8^u[255&(h^d.charCodeAt(g))];return-1^h}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),l=e("./stream/GenericWorker"),h=s?"uint8array":"array";function d(p,_){l.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=_,this.meta={}}r.magic="\b\0",a.inherits(d,l),d.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(h,p.data),!1)},d.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(_){p.push({data:_,meta:p.meta})}},r.compressWorker=function(p){return new d("Deflate",p)},r.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(u,v){var g,f="";for(g=0;g<v;g++)f+=String.fromCharCode(255&u),u>>>=8;return f}function o(u,v,g,f,c,S){var y,E,C=u.file,U=u.compression,L=S!==h.utf8encode,F=a.transformTo("string",S(C.name)),b=a.transformTo("string",h.utf8encode(C.name)),T=C.comment,O=a.transformTo("string",S(T)),D=a.transformTo("string",h.utf8encode(T)),A=b.length!==C.name.length,x=D.length!==T.length,I="",Z="",k="",Y=C.dir,tt=C.date,ot={crc32:0,compressedSize:0,uncompressedSize:0};v&&!g||(ot.crc32=u.crc32,ot.compressedSize=u.compressedSize,ot.uncompressedSize=u.uncompressedSize);var H=0;v&&(H|=8),L||!A&&!x||(H|=2048);var V=0,_t=0;Y&&(V|=16),c==="UNIX"?(_t=798,V|=function(j,ut){var lt=j;return j||(lt=ut?16893:33204),(65535&lt)<<16}(C.unixPermissions,Y)):(_t=20,V|=function(j){return 63&(j||0)}(C.dosPermissions)),y=tt.getUTCHours(),y<<=6,y|=tt.getUTCMinutes(),y<<=5,y|=tt.getUTCSeconds()/2,E=tt.getUTCFullYear()-1980,E<<=4,E|=tt.getUTCMonth()+1,E<<=5,E|=tt.getUTCDate(),A&&(Z=s(1,1)+s(d(F),4)+b,I+="up"+s(Z.length,2)+Z),x&&(k=s(1,1)+s(d(O),4)+D,I+="uc"+s(k.length,2)+k);var G="";return G+=`
\0`,G+=s(H,2),G+=U.magic,G+=s(y,2),G+=s(E,2),G+=s(ot.crc32,4),G+=s(ot.compressedSize,4),G+=s(ot.uncompressedSize,4),G+=s(F.length,2),G+=s(I.length,2),{fileRecord:p.LOCAL_FILE_HEADER+G+F+I,dirRecord:p.CENTRAL_FILE_HEADER+s(_t,2)+G+s(O.length,2)+"\0\0\0\0"+s(V,4)+s(f,4)+F+I+O}}var a=e("../utils"),l=e("../stream/GenericWorker"),h=e("../utf8"),d=e("../crc32"),p=e("../signature");function _(u,v,g,f){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=v,this.zipPlatform=g,this.encodeFileName=f,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(_,l),_.prototype.push=function(u){var v=u.meta.percent||0,g=this.entriesCount,f=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,l.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:g?(v+100*(g-f-1))/g:100}}))},_.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var v=this.streamFiles&&!u.file.dir;if(v){var g=o(u,v,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},_.prototype.closedSource=function(u){this.accumulate=!1;var v=this.streamFiles&&!u.file.dir,g=o(u,v,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),v)this.push({data:function(f){return p.DATA_DESCRIPTOR+s(f.crc32,4)+s(f.compressedSize,4)+s(f.uncompressedSize,4)}(u),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},_.prototype.flush=function(){for(var u=this.bytesWritten,v=0;v<this.dirRecords.length;v++)this.push({data:this.dirRecords[v],meta:{percent:100}});var g=this.bytesWritten-u,f=function(c,S,y,E,C){var U=a.transformTo("string",C(E));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(c,2)+s(c,2)+s(S,4)+s(y,4)+s(U.length,2)+U}(this.dirRecords.length,g,u,this.zipComment,this.encodeFileName);this.push({data:f,meta:{percent:100}})},_.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},_.prototype.registerPrevious=function(u){this._sources.push(u);var v=this;return u.on("data",function(g){v.processChunk(g)}),u.on("end",function(){v.closedSource(v.previous.streamInfo),v._sources.length?v.prepareNextSource():v.end()}),u.on("error",function(g){v.error(g)}),this},_.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},_.prototype.error=function(u){var v=this._sources;if(!l.prototype.error.call(this,u))return!1;for(var g=0;g<v.length;g++)try{v[g].error(u)}catch{}return!0},_.prototype.lock=function(){l.prototype.lock.call(this);for(var u=this._sources,v=0;v<u.length;v++)u[v].lock()},n.exports=_},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),o=e("./ZipFileWorker");r.generateWorker=function(a,l,h){var d=new o(l.streamFiles,h,l.platform,l.encodeFileName),p=0;try{a.forEach(function(_,u){p++;var v=function(S,y){var E=S||y,C=s[E];if(!C)throw new Error(E+" is not a valid compression method !");return C}(u.options.compression,l.compression),g=u.options.compressionOptions||l.compressionOptions||{},f=u.dir,c=u.date;u._compressWorker(v,g).withStreamInfo("file",{name:_,dir:f,date:c,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(d)}),d.entriesCount=p}catch(_){d.error(_)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),o=e("./external"),a=e("./utf8"),l=e("./zipEntries"),h=e("./stream/Crc32Probe"),d=e("./nodejsUtils");function p(_){return new o.Promise(function(u,v){var g=_.decompressed.getContentWorker().pipe(new h);g.on("error",function(f){v(f)}).on("end",function(){g.streamInfo.crc32!==_.decompressed.crc32?v(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}n.exports=function(_,u){var v=this;return u=s.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),d.isNode&&d.isStream(_)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",_,!0,u.optimizedBinaryString,u.base64).then(function(g){var f=new l(u);return f.load(g),f}).then(function(g){var f=[o.Promise.resolve(g)],c=g.files;if(u.checkCRC32)for(var S=0;S<c.length;S++)f.push(p(c[S]));return o.Promise.all(f)}).then(function(g){for(var f=g.shift(),c=f.files,S=0;S<c.length;S++){var y=c[S],E=y.fileNameStr,C=s.resolve(y.fileNameStr);v.file(C,y.decompressed,{binary:!0,optimizedBinaryString:!0,date:y.date,dir:y.dir,comment:y.fileCommentStr.length?y.fileCommentStr:null,unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions,createFolders:u.createFolders}),y.dir||(v.file(C).unsafeOriginalName=E)}return f.zipComment.length&&(v.comment=f.zipComment),v})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),o=e("../stream/GenericWorker");function a(l,h){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(h)}s.inherits(a,o),a.prototype._bindStream=function(l){var h=this;(this._stream=l).pause(),l.on("data",function(d){h.push({data:d,meta:{percent:0}})}).on("error",function(d){h.isPaused?this.generatedError=d:h.error(d)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function o(a,l,h){s.call(this,l),this._helper=a;var d=this;a.on("data",function(p,_){d.push(p)||d._helper.pause(),h&&h(_)}).on("error",function(p){d.emit("error",p)}).on("end",function(){d.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(C,U,L){var F,b=a.getTypeOf(U),T=a.extend(L||{},d);T.date=T.date||new Date,T.compression!==null&&(T.compression=T.compression.toUpperCase()),typeof T.unixPermissions=="string"&&(T.unixPermissions=parseInt(T.unixPermissions,8)),T.unixPermissions&&16384&T.unixPermissions&&(T.dir=!0),T.dosPermissions&&16&T.dosPermissions&&(T.dir=!0),T.dir&&(C=c(C)),T.createFolders&&(F=f(C))&&S.call(this,F,!0);var O=b==="string"&&T.binary===!1&&T.base64===!1;L&&L.binary!==void 0||(T.binary=!O),(U instanceof p&&U.uncompressedSize===0||T.dir||!U||U.length===0)&&(T.base64=!1,T.binary=!0,U="",T.compression="STORE",b="string");var D=null;D=U instanceof p||U instanceof l?U:v.isNode&&v.isStream(U)?new g(C,U):a.prepareContent(C,U,T.binary,T.optimizedBinaryString,T.base64);var A=new _(C,D,T);this.files[C]=A}var o=e("./utf8"),a=e("./utils"),l=e("./stream/GenericWorker"),h=e("./stream/StreamHelper"),d=e("./defaults"),p=e("./compressedObject"),_=e("./zipObject"),u=e("./generate"),v=e("./nodejsUtils"),g=e("./nodejs/NodejsStreamInputAdapter"),f=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var U=C.lastIndexOf("/");return 0<U?C.substring(0,U):""},c=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},S=function(C,U){return U=U!==void 0?U:d.createFolders,C=c(C),this.files[C]||s.call(this,C,null,{dir:!0,createFolders:U}),this.files[C]};function y(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var E={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var U,L,F;for(U in this.files)F=this.files[U],(L=U.slice(this.root.length,U.length))&&U.slice(0,this.root.length)===this.root&&C(L,F)},filter:function(C){var U=[];return this.forEach(function(L,F){C(L,F)&&U.push(F)}),U},file:function(C,U,L){if(arguments.length!==1)return C=this.root+C,s.call(this,C,U,L),this;if(y(C)){var F=C;return this.filter(function(T,O){return!O.dir&&F.test(T)})}var b=this.files[this.root+C];return b&&!b.dir?b:null},folder:function(C){if(!C)return this;if(y(C))return this.filter(function(b,T){return T.dir&&C.test(b)});var U=this.root+C,L=S.call(this,U),F=this.clone();return F.root=L.name,F},remove:function(C){C=this.root+C;var U=this.files[C];if(U||(C.slice(-1)!=="/"&&(C+="/"),U=this.files[C]),U&&!U.dir)delete this.files[C];else for(var L=this.filter(function(b,T){return T.name.slice(0,C.length)===C}),F=0;F<L.length;F++)delete this.files[L[F].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var U,L={};try{if((L=a.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=L.type.toLowerCase(),L.compression=L.compression.toUpperCase(),L.type==="binarystring"&&(L.type="string"),!L.type)throw new Error("No output type specified.");a.checkSupport(L.type),L.platform!=="darwin"&&L.platform!=="freebsd"&&L.platform!=="linux"&&L.platform!=="sunos"||(L.platform="UNIX"),L.platform==="win32"&&(L.platform="DOS");var F=L.comment||this.comment||"";U=u.generateWorker(this,L,F)}catch(b){(U=new l("error")).error(b)}return new h(U,L.type||"string",L.mimeType)},generateAsync:function(C,U){return this.generateInternalStream(C).accumulate(U)},generateNodeStream:function(C,U){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(U)}};n.exports=E},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),h=a.charCodeAt(1),d=a.charCodeAt(2),p=a.charCodeAt(3),_=this.length-4;0<=_;--_)if(this.data[_]===l&&this.data[_+1]===h&&this.data[_+2]===d&&this.data[_+3]===p)return _-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),h=a.charCodeAt(1),d=a.charCodeAt(2),p=a.charCodeAt(3),_=this.readData(4);return l===_[0]&&h===_[1]&&d===_[2]&&p===_[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,h=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)h=(h<<8)+this.byteAt(l);return this.index+=a,h},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=o},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),l=e("./StringReader"),h=e("./NodeBufferReader"),d=e("./Uint8ArrayReader");n.exports=function(p){var _=s.getTypeOf(p);return s.checkSupport(_),_!=="string"||o.uint8array?_==="nodebuffer"?new h(p):o.uint8array?new d(s.transformTo("uint8array",p)):new a(s.transformTo("array",p)):new l(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),o=e("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+l.data.length}o.prototype.processChunk.call(this,l)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(d){h.dataIsReady=!0,h.data=d,h.max=d&&d.length||0,h.type=s.getTypeOf(d),h.isPaused||h._tickAndRepeat()},function(d){h.error(d)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,h);break;case"uint8array":l=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":l=this.data.slice(this.index,h)}return this.index=h,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),l=e("../base64"),h=e("../support"),d=e("../external"),p=null;if(h.nodestream)try{p=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function _(v,g){return new d.Promise(function(f,c){var S=[],y=v._internalType,E=v._outputType,C=v._mimeType;v.on("data",function(U,L){S.push(U),g&&g(L)}).on("error",function(U){S=[],c(U)}).on("end",function(){try{var U=function(L,F,b){switch(L){case"blob":return s.newBlob(s.transformTo("arraybuffer",F),b);case"base64":return l.encode(F);default:return s.transformTo(L,F)}}(E,function(L,F){var b,T=0,O=null,D=0;for(b=0;b<F.length;b++)D+=F[b].length;switch(L){case"string":return F.join("");case"array":return Array.prototype.concat.apply([],F);case"uint8array":for(O=new Uint8Array(D),b=0;b<F.length;b++)O.set(F[b],T),T+=F[b].length;return O;case"nodebuffer":return Buffer.concat(F);default:throw new Error("concat : unsupported type '"+L+"'")}}(y,S),C);f(U)}catch(L){c(L)}S=[]}).resume()})}function u(v,g,f){var c=g;switch(g){case"blob":case"arraybuffer":c="uint8array";break;case"base64":c="string"}try{this._internalType=c,this._outputType=g,this._mimeType=f,s.checkSupport(c),this._worker=v.pipe(new o(c)),v.lock()}catch(S){this._worker=new a("error"),this._worker.error(S)}}u.prototype={accumulate:function(v){return _(this,v)},on:function(v,g){var f=this;return v==="data"?this._worker.on(v,function(c){g.call(f,c.data,c.meta)}):this._worker.on(v,function(){s.delay(g,arguments,f)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(v){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},v)}},n.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),l=e("./stream/GenericWorker"),h=new Array(256),d=0;d<256;d++)h[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;h[254]=h[254]=1;function p(){l.call(this,"utf-8 decode"),this.leftOver=null}function _(){l.call(this,"utf-8 encode")}r.utf8encode=function(u){return o.nodebuffer?a.newBufferFrom(u,"utf-8"):function(v){var g,f,c,S,y,E=v.length,C=0;for(S=0;S<E;S++)(64512&(f=v.charCodeAt(S)))==55296&&S+1<E&&(64512&(c=v.charCodeAt(S+1)))==56320&&(f=65536+(f-55296<<10)+(c-56320),S++),C+=f<128?1:f<2048?2:f<65536?3:4;for(g=o.uint8array?new Uint8Array(C):new Array(C),S=y=0;y<C;S++)(64512&(f=v.charCodeAt(S)))==55296&&S+1<E&&(64512&(c=v.charCodeAt(S+1)))==56320&&(f=65536+(f-55296<<10)+(c-56320),S++),f<128?g[y++]=f:(f<2048?g[y++]=192|f>>>6:(f<65536?g[y++]=224|f>>>12:(g[y++]=240|f>>>18,g[y++]=128|f>>>12&63),g[y++]=128|f>>>6&63),g[y++]=128|63&f);return g}(u)},r.utf8decode=function(u){return o.nodebuffer?s.transformTo("nodebuffer",u).toString("utf-8"):function(v){var g,f,c,S,y=v.length,E=new Array(2*y);for(g=f=0;g<y;)if((c=v[g++])<128)E[f++]=c;else if(4<(S=h[c]))E[f++]=65533,g+=S-1;else{for(c&=S===2?31:S===3?15:7;1<S&&g<y;)c=c<<6|63&v[g++],S--;1<S?E[f++]=65533:c<65536?E[f++]=c:(c-=65536,E[f++]=55296|c>>10&1023,E[f++]=56320|1023&c)}return E.length!==f&&(E.subarray?E=E.subarray(0,f):E.length=f),s.applyFromCharCode(E)}(u=s.transformTo(o.uint8array?"uint8array":"array",u))},s.inherits(p,l),p.prototype.processChunk=function(u){var v=s.transformTo(o.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var g=v;(v=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),v.set(g,this.leftOver.length)}else v=this.leftOver.concat(v);this.leftOver=null}var f=function(S,y){var E;for((y=y||S.length)>S.length&&(y=S.length),E=y-1;0<=E&&(192&S[E])==128;)E--;return E<0||E===0?y:E+h[S[E]]>y?E:y}(v),c=v;f!==v.length&&(o.uint8array?(c=v.subarray(0,f),this.leftOver=v.subarray(f,v.length)):(c=v.slice(0,f),this.leftOver=v.slice(f,v.length))),this.push({data:r.utf8decode(c),meta:u.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=p,s.inherits(_,l),_.prototype.processChunk=function(u){this.push({data:r.utf8encode(u.data),meta:u.meta})},r.Utf8EncodeWorker=_},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),l=e("./external");function h(g){return g}function d(g,f){for(var c=0;c<g.length;++c)f[c]=255&g.charCodeAt(c);return f}e("setimmediate"),r.newBlob=function(g,f){r.checkSupport("blob");try{return new Blob([g],{type:f})}catch{try{var c=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return c.append(g),c.getBlob(f)}catch{throw new Error("Bug : can't construct the Blob.")}}};var p={stringifyByChunk:function(g,f,c){var S=[],y=0,E=g.length;if(E<=c)return String.fromCharCode.apply(null,g);for(;y<E;)f==="array"||f==="nodebuffer"?S.push(String.fromCharCode.apply(null,g.slice(y,Math.min(y+c,E)))):S.push(String.fromCharCode.apply(null,g.subarray(y,Math.min(y+c,E)))),y+=c;return S.join("")},stringifyByChar:function(g){for(var f="",c=0;c<g.length;c++)f+=String.fromCharCode(g[c]);return f},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function _(g){var f=65536,c=r.getTypeOf(g),S=!0;if(c==="uint8array"?S=p.applyCanBeUsed.uint8array:c==="nodebuffer"&&(S=p.applyCanBeUsed.nodebuffer),S)for(;1<f;)try{return p.stringifyByChunk(g,c,f)}catch{f=Math.floor(f/2)}return p.stringifyByChar(g)}function u(g,f){for(var c=0;c<g.length;c++)f[c]=g[c];return f}r.applyFromCharCode=_;var v={};v.string={string:h,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return v.string.uint8array(g).buffer},uint8array:function(g){return d(g,new Uint8Array(g.length))},nodebuffer:function(g){return d(g,a.allocBuffer(g.length))}},v.array={string:_,array:h,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(g)}},v.arraybuffer={string:function(g){return _(new Uint8Array(g))},array:function(g){return u(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:h,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(new Uint8Array(g))}},v.uint8array={string:_,array:function(g){return u(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:h,nodebuffer:function(g){return a.newBufferFrom(g)}},v.nodebuffer={string:_,array:function(g){return u(g,new Array(g.length))},arraybuffer:function(g){return v.nodebuffer.uint8array(g).buffer},uint8array:function(g){return u(g,new Uint8Array(g.length))},nodebuffer:h},r.transformTo=function(g,f){if(f=f||"",!g)return f;r.checkSupport(g);var c=r.getTypeOf(f);return v[c][g](f)},r.resolve=function(g){for(var f=g.split("/"),c=[],S=0;S<f.length;S++){var y=f[S];y==="."||y===""&&S!==0&&S!==f.length-1||(y===".."?c.pop():c.push(y))}return c.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var f,c,S="";for(c=0;c<(g||"").length;c++)S+="\\x"+((f=g.charCodeAt(c))<16?"0":"")+f.toString(16).toUpperCase();return S},r.delay=function(g,f,c){setImmediate(function(){g.apply(c||null,f||[])})},r.inherits=function(g,f){function c(){}c.prototype=f.prototype,g.prototype=new c},r.extend=function(){var g,f,c={};for(g=0;g<arguments.length;g++)for(f in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],f)&&c[f]===void 0&&(c[f]=arguments[g][f]);return c},r.prepareContent=function(g,f,c,S,y){return l.Promise.resolve(f).then(function(E){return s.blob&&(E instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(E))!==-1)&&typeof FileReader<"u"?new l.Promise(function(C,U){var L=new FileReader;L.onload=function(F){C(F.target.result)},L.onerror=function(F){U(F.target.error)},L.readAsArrayBuffer(E)}):E}).then(function(E){var C=r.getTypeOf(E);return C?(C==="arraybuffer"?E=r.transformTo("uint8array",E):C==="string"&&(y?E=o.decode(E):c&&S!==!0&&(E=function(U){return d(U,s.uint8array?new Uint8Array(U.length):new Array(U.length))}(E))),E):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),l=e("./zipEntry"),h=e("./support");function d(p){this.files=[],this.loadOptions=p}d.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var _=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(_)+", expected "+o.pretty(p)+")")}},isSignature:function(p,_){var u=this.reader.index;this.reader.setIndex(p);var v=this.reader.readString(4)===_;return this.reader.setIndex(u),v},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),_=h.uint8array?"uint8array":"array",u=o.transformTo(_,p);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,_,u,v=this.zip64EndOfCentralSize-44;0<v;)p=this.reader.readInt(2),_=this.reader.readInt(4),u=this.reader.readData(_),this.zip64ExtensibleData[p]={id:p,length:_,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,_;for(p=0;p<this.files.length;p++)_=this.files[p],this.reader.setIndex(_.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),_.readLocalPart(this.reader),_.handleUTF8(),_.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(p=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var _=p;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var v=_-u;if(0<v)this.isSignature(_,a.CENTRAL_FILE_HEADER)||(this.reader.zero=v);else if(v<0)throw new Error("Corrupted zip: missing "+Math.abs(v)+" bytes.")},prepareReader:function(p){this.reader=s(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),l=e("./crc32"),h=e("./utf8"),d=e("./compressions"),p=e("./support");function _(u,v){this.options=u,this.loadOptions=v}_.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var v,g;if(u.skip(22),this.fileNameLength=u.readInt(2),g=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((v=function(f){for(var c in d)if(Object.prototype.hasOwnProperty.call(d,c)&&d[c].magic===f)return d[c];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,v,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var v=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(v),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var v,g,f,c=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<c;)v=u.readInt(2),g=u.readInt(2),f=u.readData(g),this.extraFields[v]={id:v,length:g,value:f};u.setIndex(c)},handleUTF8:function(){var u=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var v=this.findExtraFieldUnicodePath();if(v!==null)this.fileNameStr=v;else{var g=o.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var f=this.findExtraFieldUnicodeComment();if(f!==null)this.fileCommentStr=f;else{var c=o.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(c)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var v=s(u.value);return v.readInt(1)!==1||l(this.fileName)!==v.readInt(4)?null:h.utf8decode(v.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var v=s(u.value);return v.readInt(1)!==1||l(this.fileComment)!==v.readInt(4)?null:h.utf8decode(v.readData(u.length-5))}return null}},n.exports=_},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(v,g,f){this.name=v,this.dir=f.dir,this.date=f.date,this.comment=f.comment,this.unixPermissions=f.unixPermissions,this.dosPermissions=f.dosPermissions,this._data=g,this._dataBinary=f.binary,this.options={compression:f.compression,compressionOptions:f.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),l=e("./utf8"),h=e("./compressedObject"),d=e("./stream/GenericWorker");s.prototype={internalStream:function(v){var g=null,f="string";try{if(!v)throw new Error("No output type specified.");var c=(f=v.toLowerCase())==="string"||f==="text";f!=="binarystring"&&f!=="text"||(f="string"),g=this._decompressWorker();var S=!this._dataBinary;S&&!c&&(g=g.pipe(new l.Utf8EncodeWorker)),!S&&c&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(y){(g=new d("error")).error(y)}return new o(g,f,"")},async:function(v,g){return this.internalStream(v).accumulate(g)},nodeStream:function(v,g){return this.internalStream(v||"nodebuffer").toNodejsStream(g)},_compressWorker:function(v,g){if(this._data instanceof h&&this._data.compression.magic===v.magic)return this._data.getCompressedWorker();var f=this._decompressWorker();return this._dataBinary||(f=f.pipe(new l.Utf8EncodeWorker)),h.createWorkerFrom(f,v,g)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof d?this._data:new a(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],_=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<p.length;u++)s.prototype[p[u]]=_;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var h=0,d=new l(v),p=s.document.createTextNode("");d.observe(p,{characterData:!0}),o=function(){p.data=h=++h%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){v(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(v,0)};else{var _=new s.MessageChannel;_.port1.onmessage=v,o=function(){_.port2.postMessage(0)}}var u=[];function v(){var g,f;a=!0;for(var c=u.length;c;){for(f=u,u=[],g=-1;++g<c;)f[g]();c=u.length}a=!1}n.exports=function(g){u.push(g)!==1||a||o()}}).call(this,typeof sr<"u"?sr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function o(){}var a={},l=["REJECTED"],h=["FULFILLED"],d=["PENDING"];function p(c){if(typeof c!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,c!==o&&g(this,c)}function _(c,S,y){this.promise=c,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}function u(c,S,y){s(function(){var E;try{E=S(y)}catch(C){return a.reject(c,C)}E===c?a.reject(c,new TypeError("Cannot resolve promise with itself")):a.resolve(c,E)})}function v(c){var S=c&&c.then;if(c&&(typeof c=="object"||typeof c=="function")&&typeof S=="function")return function(){S.apply(c,arguments)}}function g(c,S){var y=!1;function E(L){y||(y=!0,a.reject(c,L))}function C(L){y||(y=!0,a.resolve(c,L))}var U=f(function(){S(C,E)});U.status==="error"&&E(U.value)}function f(c,S){var y={};try{y.value=c(S),y.status="success"}catch(E){y.status="error",y.value=E}return y}(n.exports=p).prototype.finally=function(c){if(typeof c!="function")return this;var S=this.constructor;return this.then(function(y){return S.resolve(c()).then(function(){return y})},function(y){return S.resolve(c()).then(function(){throw y})})},p.prototype.catch=function(c){return this.then(null,c)},p.prototype.then=function(c,S){if(typeof c!="function"&&this.state===h||typeof S!="function"&&this.state===l)return this;var y=new this.constructor(o);return this.state!==d?u(y,this.state===h?c:S,this.outcome):this.queue.push(new _(y,c,S)),y},_.prototype.callFulfilled=function(c){a.resolve(this.promise,c)},_.prototype.otherCallFulfilled=function(c){u(this.promise,this.onFulfilled,c)},_.prototype.callRejected=function(c){a.reject(this.promise,c)},_.prototype.otherCallRejected=function(c){u(this.promise,this.onRejected,c)},a.resolve=function(c,S){var y=f(v,S);if(y.status==="error")return a.reject(c,y.value);var E=y.value;if(E)g(c,E);else{c.state=h,c.outcome=S;for(var C=-1,U=c.queue.length;++C<U;)c.queue[C].callFulfilled(S)}return c},a.reject=function(c,S){c.state=l,c.outcome=S;for(var y=-1,E=c.queue.length;++y<E;)c.queue[y].callRejected(S);return c},p.resolve=function(c){return c instanceof this?c:a.resolve(new this(o),c)},p.reject=function(c){var S=new this(o);return a.reject(S,c)},p.all=function(c){var S=this;if(Object.prototype.toString.call(c)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=c.length,E=!1;if(!y)return this.resolve([]);for(var C=new Array(y),U=0,L=-1,F=new this(o);++L<y;)b(c[L],L);return F;function b(T,O){S.resolve(T).then(function(D){C[O]=D,++U!==y||E||(E=!0,a.resolve(F,C))},function(D){E||(E=!0,a.reject(F,D))})}},p.race=function(c){var S=this;if(Object.prototype.toString.call(c)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=c.length,E=!1;if(!y)return this.resolve([]);for(var C=-1,U=new this(o);++C<y;)L=c[C],S.resolve(L).then(function(F){E||(E=!0,a.resolve(U,F))},function(F){E||(E=!0,a.reject(U,F))});var L;return U}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/messages"),h=e("./zlib/zstream"),d=Object.prototype.toString,p=0,_=-1,u=0,v=8;function g(c){if(!(this instanceof g))return new g(c);this.options=o.assign({level:_,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},c||{});var S=this.options;S.raw&&0<S.windowBits?S.windowBits=-S.windowBits:S.gzip&&0<S.windowBits&&S.windowBits<16&&(S.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var y=s.deflateInit2(this.strm,S.level,S.method,S.windowBits,S.memLevel,S.strategy);if(y!==p)throw new Error(l[y]);if(S.header&&s.deflateSetHeader(this.strm,S.header),S.dictionary){var E;if(E=typeof S.dictionary=="string"?a.string2buf(S.dictionary):d.call(S.dictionary)==="[object ArrayBuffer]"?new Uint8Array(S.dictionary):S.dictionary,(y=s.deflateSetDictionary(this.strm,E))!==p)throw new Error(l[y]);this._dict_set=!0}}function f(c,S){var y=new g(S);if(y.push(c,!0),y.err)throw y.msg||l[y.err];return y.result}g.prototype.push=function(c,S){var y,E,C=this.strm,U=this.options.chunkSize;if(this.ended)return!1;E=S===~~S?S:S===!0?4:0,typeof c=="string"?C.input=a.string2buf(c):d.call(c)==="[object ArrayBuffer]"?C.input=new Uint8Array(c):C.input=c,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new o.Buf8(U),C.next_out=0,C.avail_out=U),(y=s.deflate(C,E))!==1&&y!==p)return this.onEnd(y),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||E!==4&&E!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(C.output,C.next_out))):this.onData(o.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&y!==1);return E===4?(y=s.deflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===p):E!==2||(this.onEnd(p),!(C.avail_out=0))},g.prototype.onData=function(c){this.chunks.push(c)},g.prototype.onEnd=function(c){c===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=c,this.msg=this.strm.msg},r.Deflate=g,r.deflate=f,r.deflateRaw=function(c,S){return(S=S||{}).raw=!0,f(c,S)},r.gzip=function(c,S){return(S=S||{}).gzip=!0,f(c,S)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/constants"),h=e("./zlib/messages"),d=e("./zlib/zstream"),p=e("./zlib/gzheader"),_=Object.prototype.toString;function u(g){if(!(this instanceof u))return new u(g);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},g||{});var f=this.options;f.raw&&0<=f.windowBits&&f.windowBits<16&&(f.windowBits=-f.windowBits,f.windowBits===0&&(f.windowBits=-15)),!(0<=f.windowBits&&f.windowBits<16)||g&&g.windowBits||(f.windowBits+=32),15<f.windowBits&&f.windowBits<48&&!(15&f.windowBits)&&(f.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var c=s.inflateInit2(this.strm,f.windowBits);if(c!==l.Z_OK)throw new Error(h[c]);this.header=new p,s.inflateGetHeader(this.strm,this.header)}function v(g,f){var c=new u(f);if(c.push(g,!0),c.err)throw c.msg||h[c.err];return c.result}u.prototype.push=function(g,f){var c,S,y,E,C,U,L=this.strm,F=this.options.chunkSize,b=this.options.dictionary,T=!1;if(this.ended)return!1;S=f===~~f?f:f===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?L.input=a.binstring2buf(g):_.call(g)==="[object ArrayBuffer]"?L.input=new Uint8Array(g):L.input=g,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new o.Buf8(F),L.next_out=0,L.avail_out=F),(c=s.inflate(L,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&b&&(U=typeof b=="string"?a.string2buf(b):_.call(b)==="[object ArrayBuffer]"?new Uint8Array(b):b,c=s.inflateSetDictionary(this.strm,U)),c===l.Z_BUF_ERROR&&T===!0&&(c=l.Z_OK,T=!1),c!==l.Z_STREAM_END&&c!==l.Z_OK)return this.onEnd(c),!(this.ended=!0);L.next_out&&(L.avail_out!==0&&c!==l.Z_STREAM_END&&(L.avail_in!==0||S!==l.Z_FINISH&&S!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(y=a.utf8border(L.output,L.next_out),E=L.next_out-y,C=a.buf2string(L.output,y),L.next_out=E,L.avail_out=F-E,E&&o.arraySet(L.output,L.output,y,E,0),this.onData(C)):this.onData(o.shrinkBuf(L.output,L.next_out)))),L.avail_in===0&&L.avail_out===0&&(T=!0)}while((0<L.avail_in||L.avail_out===0)&&c!==l.Z_STREAM_END);return c===l.Z_STREAM_END&&(S=l.Z_FINISH),S===l.Z_FINISH?(c=s.inflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===l.Z_OK):S!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(L.avail_out=0))},u.prototype.onData=function(g){this.chunks.push(g)},u.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=u,r.inflate=v,r.inflateRaw=function(g,f){return(f=f||{}).raw=!0,v(g,f)},r.ungzip=v},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var d=h.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var p in d)d.hasOwnProperty(p)&&(l[p]=d[p])}}return l},r.shrinkBuf=function(l,h){return l.length===h?l:l.subarray?l.subarray(0,h):(l.length=h,l)};var o={arraySet:function(l,h,d,p,_){if(h.subarray&&l.subarray)l.set(h.subarray(d,d+p),_);else for(var u=0;u<p;u++)l[_+u]=h[d+u]},flattenChunks:function(l){var h,d,p,_,u,v;for(h=p=0,d=l.length;h<d;h++)p+=l[h].length;for(v=new Uint8Array(p),h=_=0,d=l.length;h<d;h++)u=l[h],v.set(u,_),_+=u.length;return v}},a={arraySet:function(l,h,d,p,_){for(var u=0;u<p;u++)l[_+u]=h[d+u]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),h=0;h<256;h++)l[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function d(p,_){if(_<65537&&(p.subarray&&a||!p.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(p,_));for(var u="",v=0;v<_;v++)u+=String.fromCharCode(p[v]);return u}l[254]=l[254]=1,r.string2buf=function(p){var _,u,v,g,f,c=p.length,S=0;for(g=0;g<c;g++)(64512&(u=p.charCodeAt(g)))==55296&&g+1<c&&(64512&(v=p.charCodeAt(g+1)))==56320&&(u=65536+(u-55296<<10)+(v-56320),g++),S+=u<128?1:u<2048?2:u<65536?3:4;for(_=new s.Buf8(S),g=f=0;f<S;g++)(64512&(u=p.charCodeAt(g)))==55296&&g+1<c&&(64512&(v=p.charCodeAt(g+1)))==56320&&(u=65536+(u-55296<<10)+(v-56320),g++),u<128?_[f++]=u:(u<2048?_[f++]=192|u>>>6:(u<65536?_[f++]=224|u>>>12:(_[f++]=240|u>>>18,_[f++]=128|u>>>12&63),_[f++]=128|u>>>6&63),_[f++]=128|63&u);return _},r.buf2binstring=function(p){return d(p,p.length)},r.binstring2buf=function(p){for(var _=new s.Buf8(p.length),u=0,v=_.length;u<v;u++)_[u]=p.charCodeAt(u);return _},r.buf2string=function(p,_){var u,v,g,f,c=_||p.length,S=new Array(2*c);for(u=v=0;u<c;)if((g=p[u++])<128)S[v++]=g;else if(4<(f=l[g]))S[v++]=65533,u+=f-1;else{for(g&=f===2?31:f===3?15:7;1<f&&u<c;)g=g<<6|63&p[u++],f--;1<f?S[v++]=65533:g<65536?S[v++]=g:(g-=65536,S[v++]=55296|g>>10&1023,S[v++]=56320|1023&g)}return d(S,v)},r.utf8border=function(p,_){var u;for((_=_||p.length)>p.length&&(_=p.length),u=_-1;0<=u&&(192&p[u])==128;)u--;return u<0||u===0?_:u+l[p[u]]>_?u:_}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,o,a,l){for(var h=65535&s|0,d=s>>>16&65535|0,p=0;a!==0;){for(a-=p=2e3<a?2e3:a;d=d+(h=h+o[l++]|0)|0,--p;);h%=65521,d%=65521}return h|d<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var h=0;h<8;h++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();n.exports=function(o,a,l,h){var d=s,p=h+l;o^=-1;for(var _=h;_<p;_++)o=o>>>8^d[255&(o^a[_])];return-1^o}},{}],46:[function(e,n,r){var s,o=e("../utils/common"),a=e("./trees"),l=e("./adler32"),h=e("./crc32"),d=e("./messages"),p=0,_=4,u=0,v=-2,g=-1,f=4,c=2,S=8,y=9,E=286,C=30,U=19,L=2*E+1,F=15,b=3,T=258,O=T+b+1,D=42,A=113,x=1,I=2,Z=3,k=4;function Y(m,at){return m.msg=d[at],at}function tt(m){return(m<<1)-(4<m?9:0)}function ot(m){for(var at=m.length;0<=--at;)m[at]=0}function H(m){var at=m.state,J=at.pending;J>m.avail_out&&(J=m.avail_out),J!==0&&(o.arraySet(m.output,at.pending_buf,at.pending_out,J,m.next_out),m.next_out+=J,at.pending_out+=J,m.total_out+=J,m.avail_out-=J,at.pending-=J,at.pending===0&&(at.pending_out=0))}function V(m,at){a._tr_flush_block(m,0<=m.block_start?m.block_start:-1,m.strstart-m.block_start,at),m.block_start=m.strstart,H(m.strm)}function _t(m,at){m.pending_buf[m.pending++]=at}function G(m,at){m.pending_buf[m.pending++]=at>>>8&255,m.pending_buf[m.pending++]=255&at}function j(m,at){var J,N,P=m.max_chain_length,z=m.strstart,nt=m.prev_length,w=m.nice_match,M=m.strstart>m.w_size-O?m.strstart-(m.w_size-O):0,B=m.window,K=m.w_mask,X=m.prev,Q=m.strstart+T,mt=B[z+nt-1],ht=B[z+nt];m.prev_length>=m.good_match&&(P>>=2),w>m.lookahead&&(w=m.lookahead);do if(B[(J=at)+nt]===ht&&B[J+nt-1]===mt&&B[J]===B[z]&&B[++J]===B[z+1]){z+=2,J++;do;while(B[++z]===B[++J]&&B[++z]===B[++J]&&B[++z]===B[++J]&&B[++z]===B[++J]&&B[++z]===B[++J]&&B[++z]===B[++J]&&B[++z]===B[++J]&&B[++z]===B[++J]&&z<Q);if(N=T-(Q-z),z=Q-T,nt<N){if(m.match_start=at,w<=(nt=N))break;mt=B[z+nt-1],ht=B[z+nt]}}while((at=X[at&K])>M&&--P!=0);return nt<=m.lookahead?nt:m.lookahead}function ut(m){var at,J,N,P,z,nt,w,M,B,K,X=m.w_size;do{if(P=m.window_size-m.lookahead-m.strstart,m.strstart>=X+(X-O)){for(o.arraySet(m.window,m.window,X,X,0),m.match_start-=X,m.strstart-=X,m.block_start-=X,at=J=m.hash_size;N=m.head[--at],m.head[at]=X<=N?N-X:0,--J;);for(at=J=X;N=m.prev[--at],m.prev[at]=X<=N?N-X:0,--J;);P+=X}if(m.strm.avail_in===0)break;if(nt=m.strm,w=m.window,M=m.strstart+m.lookahead,B=P,K=void 0,K=nt.avail_in,B<K&&(K=B),J=K===0?0:(nt.avail_in-=K,o.arraySet(w,nt.input,nt.next_in,K,M),nt.state.wrap===1?nt.adler=l(nt.adler,w,K,M):nt.state.wrap===2&&(nt.adler=h(nt.adler,w,K,M)),nt.next_in+=K,nt.total_in+=K,K),m.lookahead+=J,m.lookahead+m.insert>=b)for(z=m.strstart-m.insert,m.ins_h=m.window[z],m.ins_h=(m.ins_h<<m.hash_shift^m.window[z+1])&m.hash_mask;m.insert&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[z+b-1])&m.hash_mask,m.prev[z&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=z,z++,m.insert--,!(m.lookahead+m.insert<b)););}while(m.lookahead<O&&m.strm.avail_in!==0)}function lt(m,at){for(var J,N;;){if(m.lookahead<O){if(ut(m),m.lookahead<O&&at===p)return x;if(m.lookahead===0)break}if(J=0,m.lookahead>=b&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+b-1])&m.hash_mask,J=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart),J!==0&&m.strstart-J<=m.w_size-O&&(m.match_length=j(m,J)),m.match_length>=b)if(N=a._tr_tally(m,m.strstart-m.match_start,m.match_length-b),m.lookahead-=m.match_length,m.match_length<=m.max_lazy_match&&m.lookahead>=b){for(m.match_length--;m.strstart++,m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+b-1])&m.hash_mask,J=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart,--m.match_length!=0;);m.strstart++}else m.strstart+=m.match_length,m.match_length=0,m.ins_h=m.window[m.strstart],m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+1])&m.hash_mask;else N=a._tr_tally(m,0,m.window[m.strstart]),m.lookahead--,m.strstart++;if(N&&(V(m,!1),m.strm.avail_out===0))return x}return m.insert=m.strstart<b-1?m.strstart:b-1,at===_?(V(m,!0),m.strm.avail_out===0?Z:k):m.last_lit&&(V(m,!1),m.strm.avail_out===0)?x:I}function pt(m,at){for(var J,N,P;;){if(m.lookahead<O){if(ut(m),m.lookahead<O&&at===p)return x;if(m.lookahead===0)break}if(J=0,m.lookahead>=b&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+b-1])&m.hash_mask,J=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart),m.prev_length=m.match_length,m.prev_match=m.match_start,m.match_length=b-1,J!==0&&m.prev_length<m.max_lazy_match&&m.strstart-J<=m.w_size-O&&(m.match_length=j(m,J),m.match_length<=5&&(m.strategy===1||m.match_length===b&&4096<m.strstart-m.match_start)&&(m.match_length=b-1)),m.prev_length>=b&&m.match_length<=m.prev_length){for(P=m.strstart+m.lookahead-b,N=a._tr_tally(m,m.strstart-1-m.prev_match,m.prev_length-b),m.lookahead-=m.prev_length-1,m.prev_length-=2;++m.strstart<=P&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+b-1])&m.hash_mask,J=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart),--m.prev_length!=0;);if(m.match_available=0,m.match_length=b-1,m.strstart++,N&&(V(m,!1),m.strm.avail_out===0))return x}else if(m.match_available){if((N=a._tr_tally(m,0,m.window[m.strstart-1]))&&V(m,!1),m.strstart++,m.lookahead--,m.strm.avail_out===0)return x}else m.match_available=1,m.strstart++,m.lookahead--}return m.match_available&&(N=a._tr_tally(m,0,m.window[m.strstart-1]),m.match_available=0),m.insert=m.strstart<b-1?m.strstart:b-1,at===_?(V(m,!0),m.strm.avail_out===0?Z:k):m.last_lit&&(V(m,!1),m.strm.avail_out===0)?x:I}function vt(m,at,J,N,P){this.good_length=m,this.max_lazy=at,this.nice_length=J,this.max_chain=N,this.func=P}function Ct(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=S,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*L),this.dyn_dtree=new o.Buf16(2*(2*C+1)),this.bl_tree=new o.Buf16(2*(2*U+1)),ot(this.dyn_ltree),ot(this.dyn_dtree),ot(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(F+1),this.heap=new o.Buf16(2*E+1),ot(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*E+1),ot(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function It(m){var at;return m&&m.state?(m.total_in=m.total_out=0,m.data_type=c,(at=m.state).pending=0,at.pending_out=0,at.wrap<0&&(at.wrap=-at.wrap),at.status=at.wrap?D:A,m.adler=at.wrap===2?0:1,at.last_flush=p,a._tr_init(at),u):Y(m,v)}function Nt(m){var at=It(m);return at===u&&function(J){J.window_size=2*J.w_size,ot(J.head),J.max_lazy_match=s[J.level].max_lazy,J.good_match=s[J.level].good_length,J.nice_match=s[J.level].nice_length,J.max_chain_length=s[J.level].max_chain,J.strstart=0,J.block_start=0,J.lookahead=0,J.insert=0,J.match_length=J.prev_length=b-1,J.match_available=0,J.ins_h=0}(m.state),at}function Xt(m,at,J,N,P,z){if(!m)return v;var nt=1;if(at===g&&(at=6),N<0?(nt=0,N=-N):15<N&&(nt=2,N-=16),P<1||y<P||J!==S||N<8||15<N||at<0||9<at||z<0||f<z)return Y(m,v);N===8&&(N=9);var w=new Ct;return(m.state=w).strm=m,w.wrap=nt,w.gzhead=null,w.w_bits=N,w.w_size=1<<w.w_bits,w.w_mask=w.w_size-1,w.hash_bits=P+7,w.hash_size=1<<w.hash_bits,w.hash_mask=w.hash_size-1,w.hash_shift=~~((w.hash_bits+b-1)/b),w.window=new o.Buf8(2*w.w_size),w.head=new o.Buf16(w.hash_size),w.prev=new o.Buf16(w.w_size),w.lit_bufsize=1<<P+6,w.pending_buf_size=4*w.lit_bufsize,w.pending_buf=new o.Buf8(w.pending_buf_size),w.d_buf=1*w.lit_bufsize,w.l_buf=3*w.lit_bufsize,w.level=at,w.strategy=z,w.method=J,Nt(m)}s=[new vt(0,0,0,0,function(m,at){var J=65535;for(J>m.pending_buf_size-5&&(J=m.pending_buf_size-5);;){if(m.lookahead<=1){if(ut(m),m.lookahead===0&&at===p)return x;if(m.lookahead===0)break}m.strstart+=m.lookahead,m.lookahead=0;var N=m.block_start+J;if((m.strstart===0||m.strstart>=N)&&(m.lookahead=m.strstart-N,m.strstart=N,V(m,!1),m.strm.avail_out===0)||m.strstart-m.block_start>=m.w_size-O&&(V(m,!1),m.strm.avail_out===0))return x}return m.insert=0,at===_?(V(m,!0),m.strm.avail_out===0?Z:k):(m.strstart>m.block_start&&(V(m,!1),m.strm.avail_out),x)}),new vt(4,4,8,4,lt),new vt(4,5,16,8,lt),new vt(4,6,32,32,lt),new vt(4,4,16,16,pt),new vt(8,16,32,32,pt),new vt(8,16,128,128,pt),new vt(8,32,128,256,pt),new vt(32,128,258,1024,pt),new vt(32,258,258,4096,pt)],r.deflateInit=function(m,at){return Xt(m,at,S,15,8,0)},r.deflateInit2=Xt,r.deflateReset=Nt,r.deflateResetKeep=It,r.deflateSetHeader=function(m,at){return m&&m.state?m.state.wrap!==2?v:(m.state.gzhead=at,u):v},r.deflate=function(m,at){var J,N,P,z;if(!m||!m.state||5<at||at<0)return m?Y(m,v):v;if(N=m.state,!m.output||!m.input&&m.avail_in!==0||N.status===666&&at!==_)return Y(m,m.avail_out===0?-5:v);if(N.strm=m,J=N.last_flush,N.last_flush=at,N.status===D)if(N.wrap===2)m.adler=0,_t(N,31),_t(N,139),_t(N,8),N.gzhead?(_t(N,(N.gzhead.text?1:0)+(N.gzhead.hcrc?2:0)+(N.gzhead.extra?4:0)+(N.gzhead.name?8:0)+(N.gzhead.comment?16:0)),_t(N,255&N.gzhead.time),_t(N,N.gzhead.time>>8&255),_t(N,N.gzhead.time>>16&255),_t(N,N.gzhead.time>>24&255),_t(N,N.level===9?2:2<=N.strategy||N.level<2?4:0),_t(N,255&N.gzhead.os),N.gzhead.extra&&N.gzhead.extra.length&&(_t(N,255&N.gzhead.extra.length),_t(N,N.gzhead.extra.length>>8&255)),N.gzhead.hcrc&&(m.adler=h(m.adler,N.pending_buf,N.pending,0)),N.gzindex=0,N.status=69):(_t(N,0),_t(N,0),_t(N,0),_t(N,0),_t(N,0),_t(N,N.level===9?2:2<=N.strategy||N.level<2?4:0),_t(N,3),N.status=A);else{var nt=S+(N.w_bits-8<<4)<<8;nt|=(2<=N.strategy||N.level<2?0:N.level<6?1:N.level===6?2:3)<<6,N.strstart!==0&&(nt|=32),nt+=31-nt%31,N.status=A,G(N,nt),N.strstart!==0&&(G(N,m.adler>>>16),G(N,65535&m.adler)),m.adler=1}if(N.status===69)if(N.gzhead.extra){for(P=N.pending;N.gzindex<(65535&N.gzhead.extra.length)&&(N.pending!==N.pending_buf_size||(N.gzhead.hcrc&&N.pending>P&&(m.adler=h(m.adler,N.pending_buf,N.pending-P,P)),H(m),P=N.pending,N.pending!==N.pending_buf_size));)_t(N,255&N.gzhead.extra[N.gzindex]),N.gzindex++;N.gzhead.hcrc&&N.pending>P&&(m.adler=h(m.adler,N.pending_buf,N.pending-P,P)),N.gzindex===N.gzhead.extra.length&&(N.gzindex=0,N.status=73)}else N.status=73;if(N.status===73)if(N.gzhead.name){P=N.pending;do{if(N.pending===N.pending_buf_size&&(N.gzhead.hcrc&&N.pending>P&&(m.adler=h(m.adler,N.pending_buf,N.pending-P,P)),H(m),P=N.pending,N.pending===N.pending_buf_size)){z=1;break}z=N.gzindex<N.gzhead.name.length?255&N.gzhead.name.charCodeAt(N.gzindex++):0,_t(N,z)}while(z!==0);N.gzhead.hcrc&&N.pending>P&&(m.adler=h(m.adler,N.pending_buf,N.pending-P,P)),z===0&&(N.gzindex=0,N.status=91)}else N.status=91;if(N.status===91)if(N.gzhead.comment){P=N.pending;do{if(N.pending===N.pending_buf_size&&(N.gzhead.hcrc&&N.pending>P&&(m.adler=h(m.adler,N.pending_buf,N.pending-P,P)),H(m),P=N.pending,N.pending===N.pending_buf_size)){z=1;break}z=N.gzindex<N.gzhead.comment.length?255&N.gzhead.comment.charCodeAt(N.gzindex++):0,_t(N,z)}while(z!==0);N.gzhead.hcrc&&N.pending>P&&(m.adler=h(m.adler,N.pending_buf,N.pending-P,P)),z===0&&(N.status=103)}else N.status=103;if(N.status===103&&(N.gzhead.hcrc?(N.pending+2>N.pending_buf_size&&H(m),N.pending+2<=N.pending_buf_size&&(_t(N,255&m.adler),_t(N,m.adler>>8&255),m.adler=0,N.status=A)):N.status=A),N.pending!==0){if(H(m),m.avail_out===0)return N.last_flush=-1,u}else if(m.avail_in===0&&tt(at)<=tt(J)&&at!==_)return Y(m,-5);if(N.status===666&&m.avail_in!==0)return Y(m,-5);if(m.avail_in!==0||N.lookahead!==0||at!==p&&N.status!==666){var w=N.strategy===2?function(M,B){for(var K;;){if(M.lookahead===0&&(ut(M),M.lookahead===0)){if(B===p)return x;break}if(M.match_length=0,K=a._tr_tally(M,0,M.window[M.strstart]),M.lookahead--,M.strstart++,K&&(V(M,!1),M.strm.avail_out===0))return x}return M.insert=0,B===_?(V(M,!0),M.strm.avail_out===0?Z:k):M.last_lit&&(V(M,!1),M.strm.avail_out===0)?x:I}(N,at):N.strategy===3?function(M,B){for(var K,X,Q,mt,ht=M.window;;){if(M.lookahead<=T){if(ut(M),M.lookahead<=T&&B===p)return x;if(M.lookahead===0)break}if(M.match_length=0,M.lookahead>=b&&0<M.strstart&&(X=ht[Q=M.strstart-1])===ht[++Q]&&X===ht[++Q]&&X===ht[++Q]){mt=M.strstart+T;do;while(X===ht[++Q]&&X===ht[++Q]&&X===ht[++Q]&&X===ht[++Q]&&X===ht[++Q]&&X===ht[++Q]&&X===ht[++Q]&&X===ht[++Q]&&Q<mt);M.match_length=T-(mt-Q),M.match_length>M.lookahead&&(M.match_length=M.lookahead)}if(M.match_length>=b?(K=a._tr_tally(M,1,M.match_length-b),M.lookahead-=M.match_length,M.strstart+=M.match_length,M.match_length=0):(K=a._tr_tally(M,0,M.window[M.strstart]),M.lookahead--,M.strstart++),K&&(V(M,!1),M.strm.avail_out===0))return x}return M.insert=0,B===_?(V(M,!0),M.strm.avail_out===0?Z:k):M.last_lit&&(V(M,!1),M.strm.avail_out===0)?x:I}(N,at):s[N.level].func(N,at);if(w!==Z&&w!==k||(N.status=666),w===x||w===Z)return m.avail_out===0&&(N.last_flush=-1),u;if(w===I&&(at===1?a._tr_align(N):at!==5&&(a._tr_stored_block(N,0,0,!1),at===3&&(ot(N.head),N.lookahead===0&&(N.strstart=0,N.block_start=0,N.insert=0))),H(m),m.avail_out===0))return N.last_flush=-1,u}return at!==_?u:N.wrap<=0?1:(N.wrap===2?(_t(N,255&m.adler),_t(N,m.adler>>8&255),_t(N,m.adler>>16&255),_t(N,m.adler>>24&255),_t(N,255&m.total_in),_t(N,m.total_in>>8&255),_t(N,m.total_in>>16&255),_t(N,m.total_in>>24&255)):(G(N,m.adler>>>16),G(N,65535&m.adler)),H(m),0<N.wrap&&(N.wrap=-N.wrap),N.pending!==0?u:1)},r.deflateEnd=function(m){var at;return m&&m.state?(at=m.state.status)!==D&&at!==69&&at!==73&&at!==91&&at!==103&&at!==A&&at!==666?Y(m,v):(m.state=null,at===A?Y(m,-3):u):v},r.deflateSetDictionary=function(m,at){var J,N,P,z,nt,w,M,B,K=at.length;if(!m||!m.state||(z=(J=m.state).wrap)===2||z===1&&J.status!==D||J.lookahead)return v;for(z===1&&(m.adler=l(m.adler,at,K,0)),J.wrap=0,K>=J.w_size&&(z===0&&(ot(J.head),J.strstart=0,J.block_start=0,J.insert=0),B=new o.Buf8(J.w_size),o.arraySet(B,at,K-J.w_size,J.w_size,0),at=B,K=J.w_size),nt=m.avail_in,w=m.next_in,M=m.input,m.avail_in=K,m.next_in=0,m.input=at,ut(J);J.lookahead>=b;){for(N=J.strstart,P=J.lookahead-(b-1);J.ins_h=(J.ins_h<<J.hash_shift^J.window[N+b-1])&J.hash_mask,J.prev[N&J.w_mask]=J.head[J.ins_h],J.head[J.ins_h]=N,N++,--P;);J.strstart=N,J.lookahead=b-1,ut(J)}return J.strstart+=J.lookahead,J.block_start=J.strstart,J.insert=J.lookahead,J.lookahead=0,J.match_length=J.prev_length=b-1,J.match_available=0,m.next_in=w,m.input=M,m.avail_in=nt,J.wrap=z,u},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,o){var a,l,h,d,p,_,u,v,g,f,c,S,y,E,C,U,L,F,b,T,O,D,A,x,I;a=s.state,l=s.next_in,x=s.input,h=l+(s.avail_in-5),d=s.next_out,I=s.output,p=d-(o-s.avail_out),_=d+(s.avail_out-257),u=a.dmax,v=a.wsize,g=a.whave,f=a.wnext,c=a.window,S=a.hold,y=a.bits,E=a.lencode,C=a.distcode,U=(1<<a.lenbits)-1,L=(1<<a.distbits)-1;t:do{y<15&&(S+=x[l++]<<y,y+=8,S+=x[l++]<<y,y+=8),F=E[S&U];e:for(;;){if(S>>>=b=F>>>24,y-=b,(b=F>>>16&255)===0)I[d++]=65535&F;else{if(!(16&b)){if(!(64&b)){F=E[(65535&F)+(S&(1<<b)-1)];continue e}if(32&b){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}T=65535&F,(b&=15)&&(y<b&&(S+=x[l++]<<y,y+=8),T+=S&(1<<b)-1,S>>>=b,y-=b),y<15&&(S+=x[l++]<<y,y+=8,S+=x[l++]<<y,y+=8),F=C[S&L];n:for(;;){if(S>>>=b=F>>>24,y-=b,!(16&(b=F>>>16&255))){if(!(64&b)){F=C[(65535&F)+(S&(1<<b)-1)];continue n}s.msg="invalid distance code",a.mode=30;break t}if(O=65535&F,y<(b&=15)&&(S+=x[l++]<<y,(y+=8)<b&&(S+=x[l++]<<y,y+=8)),u<(O+=S&(1<<b)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(S>>>=b,y-=b,(b=d-p)<O){if(g<(b=O-b)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(A=c,(D=0)===f){if(D+=v-b,b<T){for(T-=b;I[d++]=c[D++],--b;);D=d-O,A=I}}else if(f<b){if(D+=v+f-b,(b-=f)<T){for(T-=b;I[d++]=c[D++],--b;);if(D=0,f<T){for(T-=b=f;I[d++]=c[D++],--b;);D=d-O,A=I}}}else if(D+=f-b,b<T){for(T-=b;I[d++]=c[D++],--b;);D=d-O,A=I}for(;2<T;)I[d++]=A[D++],I[d++]=A[D++],I[d++]=A[D++],T-=3;T&&(I[d++]=A[D++],1<T&&(I[d++]=A[D++]))}else{for(D=d-O;I[d++]=I[D++],I[d++]=I[D++],I[d++]=I[D++],2<(T-=3););T&&(I[d++]=I[D++],1<T&&(I[d++]=I[D++]))}break}}break}}while(l<h&&d<_);l-=T=y>>3,S&=(1<<(y-=T<<3))-1,s.next_in=l,s.next_out=d,s.avail_in=l<h?h-l+5:5-(l-h),s.avail_out=d<_?_-d+257:257-(d-_),a.hold=S,a.bits=y}},{}],49:[function(e,n,r){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),l=e("./inffast"),h=e("./inftrees"),d=1,p=2,_=0,u=-2,v=1,g=852,f=592;function c(D){return(D>>>24&255)+(D>>>8&65280)+((65280&D)<<8)+((255&D)<<24)}function S(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function y(D){var A;return D&&D.state?(A=D.state,D.total_in=D.total_out=A.total=0,D.msg="",A.wrap&&(D.adler=1&A.wrap),A.mode=v,A.last=0,A.havedict=0,A.dmax=32768,A.head=null,A.hold=0,A.bits=0,A.lencode=A.lendyn=new s.Buf32(g),A.distcode=A.distdyn=new s.Buf32(f),A.sane=1,A.back=-1,_):u}function E(D){var A;return D&&D.state?((A=D.state).wsize=0,A.whave=0,A.wnext=0,y(D)):u}function C(D,A){var x,I;return D&&D.state?(I=D.state,A<0?(x=0,A=-A):(x=1+(A>>4),A<48&&(A&=15)),A&&(A<8||15<A)?u:(I.window!==null&&I.wbits!==A&&(I.window=null),I.wrap=x,I.wbits=A,E(D))):u}function U(D,A){var x,I;return D?(I=new S,(D.state=I).window=null,(x=C(D,A))!==_&&(D.state=null),x):u}var L,F,b=!0;function T(D){if(b){var A;for(L=new s.Buf32(512),F=new s.Buf32(32),A=0;A<144;)D.lens[A++]=8;for(;A<256;)D.lens[A++]=9;for(;A<280;)D.lens[A++]=7;for(;A<288;)D.lens[A++]=8;for(h(d,D.lens,0,288,L,0,D.work,{bits:9}),A=0;A<32;)D.lens[A++]=5;h(p,D.lens,0,32,F,0,D.work,{bits:5}),b=!1}D.lencode=L,D.lenbits=9,D.distcode=F,D.distbits=5}function O(D,A,x,I){var Z,k=D.state;return k.window===null&&(k.wsize=1<<k.wbits,k.wnext=0,k.whave=0,k.window=new s.Buf8(k.wsize)),I>=k.wsize?(s.arraySet(k.window,A,x-k.wsize,k.wsize,0),k.wnext=0,k.whave=k.wsize):(I<(Z=k.wsize-k.wnext)&&(Z=I),s.arraySet(k.window,A,x-I,Z,k.wnext),(I-=Z)?(s.arraySet(k.window,A,x-I,I,0),k.wnext=I,k.whave=k.wsize):(k.wnext+=Z,k.wnext===k.wsize&&(k.wnext=0),k.whave<k.wsize&&(k.whave+=Z))),0}r.inflateReset=E,r.inflateReset2=C,r.inflateResetKeep=y,r.inflateInit=function(D){return U(D,15)},r.inflateInit2=U,r.inflate=function(D,A){var x,I,Z,k,Y,tt,ot,H,V,_t,G,j,ut,lt,pt,vt,Ct,It,Nt,Xt,m,at,J,N,P=0,z=new s.Buf8(4),nt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!D||!D.state||!D.output||!D.input&&D.avail_in!==0)return u;(x=D.state).mode===12&&(x.mode=13),Y=D.next_out,Z=D.output,ot=D.avail_out,k=D.next_in,I=D.input,tt=D.avail_in,H=x.hold,V=x.bits,_t=tt,G=ot,at=_;t:for(;;)switch(x.mode){case v:if(x.wrap===0){x.mode=13;break}for(;V<16;){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}if(2&x.wrap&&H===35615){z[x.check=0]=255&H,z[1]=H>>>8&255,x.check=a(x.check,z,2,0),V=H=0,x.mode=2;break}if(x.flags=0,x.head&&(x.head.done=!1),!(1&x.wrap)||(((255&H)<<8)+(H>>8))%31){D.msg="incorrect header check",x.mode=30;break}if((15&H)!=8){D.msg="unknown compression method",x.mode=30;break}if(V-=4,m=8+(15&(H>>>=4)),x.wbits===0)x.wbits=m;else if(m>x.wbits){D.msg="invalid window size",x.mode=30;break}x.dmax=1<<m,D.adler=x.check=1,x.mode=512&H?10:12,V=H=0;break;case 2:for(;V<16;){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}if(x.flags=H,(255&x.flags)!=8){D.msg="unknown compression method",x.mode=30;break}if(57344&x.flags){D.msg="unknown header flags set",x.mode=30;break}x.head&&(x.head.text=H>>8&1),512&x.flags&&(z[0]=255&H,z[1]=H>>>8&255,x.check=a(x.check,z,2,0)),V=H=0,x.mode=3;case 3:for(;V<32;){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}x.head&&(x.head.time=H),512&x.flags&&(z[0]=255&H,z[1]=H>>>8&255,z[2]=H>>>16&255,z[3]=H>>>24&255,x.check=a(x.check,z,4,0)),V=H=0,x.mode=4;case 4:for(;V<16;){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}x.head&&(x.head.xflags=255&H,x.head.os=H>>8),512&x.flags&&(z[0]=255&H,z[1]=H>>>8&255,x.check=a(x.check,z,2,0)),V=H=0,x.mode=5;case 5:if(1024&x.flags){for(;V<16;){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}x.length=H,x.head&&(x.head.extra_len=H),512&x.flags&&(z[0]=255&H,z[1]=H>>>8&255,x.check=a(x.check,z,2,0)),V=H=0}else x.head&&(x.head.extra=null);x.mode=6;case 6:if(1024&x.flags&&(tt<(j=x.length)&&(j=tt),j&&(x.head&&(m=x.head.extra_len-x.length,x.head.extra||(x.head.extra=new Array(x.head.extra_len)),s.arraySet(x.head.extra,I,k,j,m)),512&x.flags&&(x.check=a(x.check,I,j,k)),tt-=j,k+=j,x.length-=j),x.length))break t;x.length=0,x.mode=7;case 7:if(2048&x.flags){if(tt===0)break t;for(j=0;m=I[k+j++],x.head&&m&&x.length<65536&&(x.head.name+=String.fromCharCode(m)),m&&j<tt;);if(512&x.flags&&(x.check=a(x.check,I,j,k)),tt-=j,k+=j,m)break t}else x.head&&(x.head.name=null);x.length=0,x.mode=8;case 8:if(4096&x.flags){if(tt===0)break t;for(j=0;m=I[k+j++],x.head&&m&&x.length<65536&&(x.head.comment+=String.fromCharCode(m)),m&&j<tt;);if(512&x.flags&&(x.check=a(x.check,I,j,k)),tt-=j,k+=j,m)break t}else x.head&&(x.head.comment=null);x.mode=9;case 9:if(512&x.flags){for(;V<16;){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}if(H!==(65535&x.check)){D.msg="header crc mismatch",x.mode=30;break}V=H=0}x.head&&(x.head.hcrc=x.flags>>9&1,x.head.done=!0),D.adler=x.check=0,x.mode=12;break;case 10:for(;V<32;){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}D.adler=x.check=c(H),V=H=0,x.mode=11;case 11:if(x.havedict===0)return D.next_out=Y,D.avail_out=ot,D.next_in=k,D.avail_in=tt,x.hold=H,x.bits=V,2;D.adler=x.check=1,x.mode=12;case 12:if(A===5||A===6)break t;case 13:if(x.last){H>>>=7&V,V-=7&V,x.mode=27;break}for(;V<3;){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}switch(x.last=1&H,V-=1,3&(H>>>=1)){case 0:x.mode=14;break;case 1:if(T(x),x.mode=20,A!==6)break;H>>>=2,V-=2;break t;case 2:x.mode=17;break;case 3:D.msg="invalid block type",x.mode=30}H>>>=2,V-=2;break;case 14:for(H>>>=7&V,V-=7&V;V<32;){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}if((65535&H)!=(H>>>16^65535)){D.msg="invalid stored block lengths",x.mode=30;break}if(x.length=65535&H,V=H=0,x.mode=15,A===6)break t;case 15:x.mode=16;case 16:if(j=x.length){if(tt<j&&(j=tt),ot<j&&(j=ot),j===0)break t;s.arraySet(Z,I,k,j,Y),tt-=j,k+=j,ot-=j,Y+=j,x.length-=j;break}x.mode=12;break;case 17:for(;V<14;){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}if(x.nlen=257+(31&H),H>>>=5,V-=5,x.ndist=1+(31&H),H>>>=5,V-=5,x.ncode=4+(15&H),H>>>=4,V-=4,286<x.nlen||30<x.ndist){D.msg="too many length or distance symbols",x.mode=30;break}x.have=0,x.mode=18;case 18:for(;x.have<x.ncode;){for(;V<3;){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}x.lens[nt[x.have++]]=7&H,H>>>=3,V-=3}for(;x.have<19;)x.lens[nt[x.have++]]=0;if(x.lencode=x.lendyn,x.lenbits=7,J={bits:x.lenbits},at=h(0,x.lens,0,19,x.lencode,0,x.work,J),x.lenbits=J.bits,at){D.msg="invalid code lengths set",x.mode=30;break}x.have=0,x.mode=19;case 19:for(;x.have<x.nlen+x.ndist;){for(;vt=(P=x.lencode[H&(1<<x.lenbits)-1])>>>16&255,Ct=65535&P,!((pt=P>>>24)<=V);){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}if(Ct<16)H>>>=pt,V-=pt,x.lens[x.have++]=Ct;else{if(Ct===16){for(N=pt+2;V<N;){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}if(H>>>=pt,V-=pt,x.have===0){D.msg="invalid bit length repeat",x.mode=30;break}m=x.lens[x.have-1],j=3+(3&H),H>>>=2,V-=2}else if(Ct===17){for(N=pt+3;V<N;){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}V-=pt,m=0,j=3+(7&(H>>>=pt)),H>>>=3,V-=3}else{for(N=pt+7;V<N;){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}V-=pt,m=0,j=11+(127&(H>>>=pt)),H>>>=7,V-=7}if(x.have+j>x.nlen+x.ndist){D.msg="invalid bit length repeat",x.mode=30;break}for(;j--;)x.lens[x.have++]=m}}if(x.mode===30)break;if(x.lens[256]===0){D.msg="invalid code -- missing end-of-block",x.mode=30;break}if(x.lenbits=9,J={bits:x.lenbits},at=h(d,x.lens,0,x.nlen,x.lencode,0,x.work,J),x.lenbits=J.bits,at){D.msg="invalid literal/lengths set",x.mode=30;break}if(x.distbits=6,x.distcode=x.distdyn,J={bits:x.distbits},at=h(p,x.lens,x.nlen,x.ndist,x.distcode,0,x.work,J),x.distbits=J.bits,at){D.msg="invalid distances set",x.mode=30;break}if(x.mode=20,A===6)break t;case 20:x.mode=21;case 21:if(6<=tt&&258<=ot){D.next_out=Y,D.avail_out=ot,D.next_in=k,D.avail_in=tt,x.hold=H,x.bits=V,l(D,G),Y=D.next_out,Z=D.output,ot=D.avail_out,k=D.next_in,I=D.input,tt=D.avail_in,H=x.hold,V=x.bits,x.mode===12&&(x.back=-1);break}for(x.back=0;vt=(P=x.lencode[H&(1<<x.lenbits)-1])>>>16&255,Ct=65535&P,!((pt=P>>>24)<=V);){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}if(vt&&!(240&vt)){for(It=pt,Nt=vt,Xt=Ct;vt=(P=x.lencode[Xt+((H&(1<<It+Nt)-1)>>It)])>>>16&255,Ct=65535&P,!(It+(pt=P>>>24)<=V);){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}H>>>=It,V-=It,x.back+=It}if(H>>>=pt,V-=pt,x.back+=pt,x.length=Ct,vt===0){x.mode=26;break}if(32&vt){x.back=-1,x.mode=12;break}if(64&vt){D.msg="invalid literal/length code",x.mode=30;break}x.extra=15&vt,x.mode=22;case 22:if(x.extra){for(N=x.extra;V<N;){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}x.length+=H&(1<<x.extra)-1,H>>>=x.extra,V-=x.extra,x.back+=x.extra}x.was=x.length,x.mode=23;case 23:for(;vt=(P=x.distcode[H&(1<<x.distbits)-1])>>>16&255,Ct=65535&P,!((pt=P>>>24)<=V);){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}if(!(240&vt)){for(It=pt,Nt=vt,Xt=Ct;vt=(P=x.distcode[Xt+((H&(1<<It+Nt)-1)>>It)])>>>16&255,Ct=65535&P,!(It+(pt=P>>>24)<=V);){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}H>>>=It,V-=It,x.back+=It}if(H>>>=pt,V-=pt,x.back+=pt,64&vt){D.msg="invalid distance code",x.mode=30;break}x.offset=Ct,x.extra=15&vt,x.mode=24;case 24:if(x.extra){for(N=x.extra;V<N;){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}x.offset+=H&(1<<x.extra)-1,H>>>=x.extra,V-=x.extra,x.back+=x.extra}if(x.offset>x.dmax){D.msg="invalid distance too far back",x.mode=30;break}x.mode=25;case 25:if(ot===0)break t;if(j=G-ot,x.offset>j){if((j=x.offset-j)>x.whave&&x.sane){D.msg="invalid distance too far back",x.mode=30;break}ut=j>x.wnext?(j-=x.wnext,x.wsize-j):x.wnext-j,j>x.length&&(j=x.length),lt=x.window}else lt=Z,ut=Y-x.offset,j=x.length;for(ot<j&&(j=ot),ot-=j,x.length-=j;Z[Y++]=lt[ut++],--j;);x.length===0&&(x.mode=21);break;case 26:if(ot===0)break t;Z[Y++]=x.length,ot--,x.mode=21;break;case 27:if(x.wrap){for(;V<32;){if(tt===0)break t;tt--,H|=I[k++]<<V,V+=8}if(G-=ot,D.total_out+=G,x.total+=G,G&&(D.adler=x.check=x.flags?a(x.check,Z,G,Y-G):o(x.check,Z,G,Y-G)),G=ot,(x.flags?H:c(H))!==x.check){D.msg="incorrect data check",x.mode=30;break}V=H=0}x.mode=28;case 28:if(x.wrap&&x.flags){for(;V<32;){if(tt===0)break t;tt--,H+=I[k++]<<V,V+=8}if(H!==(4294967295&x.total)){D.msg="incorrect length check",x.mode=30;break}V=H=0}x.mode=29;case 29:at=1;break t;case 30:at=-3;break t;case 31:return-4;case 32:default:return u}return D.next_out=Y,D.avail_out=ot,D.next_in=k,D.avail_in=tt,x.hold=H,x.bits=V,(x.wsize||G!==D.avail_out&&x.mode<30&&(x.mode<27||A!==4))&&O(D,D.output,D.next_out,G-D.avail_out)?(x.mode=31,-4):(_t-=D.avail_in,G-=D.avail_out,D.total_in+=_t,D.total_out+=G,x.total+=G,x.wrap&&G&&(D.adler=x.check=x.flags?a(x.check,Z,G,D.next_out-G):o(x.check,Z,G,D.next_out-G)),D.data_type=x.bits+(x.last?64:0)+(x.mode===12?128:0)+(x.mode===20||x.mode===15?256:0),(_t==0&&G===0||A===4)&&at===_&&(at=-5),at)},r.inflateEnd=function(D){if(!D||!D.state)return u;var A=D.state;return A.window&&(A.window=null),D.state=null,_},r.inflateGetHeader=function(D,A){var x;return D&&D.state&&2&(x=D.state).wrap?((x.head=A).done=!1,_):u},r.inflateSetDictionary=function(D,A){var x,I=A.length;return D&&D.state?(x=D.state).wrap!==0&&x.mode!==11?u:x.mode===11&&o(1,A,I,0)!==x.check?-3:O(D,A,I,I)?(x.mode=31,-4):(x.havedict=1,_):u},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(d,p,_,u,v,g,f,c){var S,y,E,C,U,L,F,b,T,O=c.bits,D=0,A=0,x=0,I=0,Z=0,k=0,Y=0,tt=0,ot=0,H=0,V=null,_t=0,G=new s.Buf16(16),j=new s.Buf16(16),ut=null,lt=0;for(D=0;D<=15;D++)G[D]=0;for(A=0;A<u;A++)G[p[_+A]]++;for(Z=O,I=15;1<=I&&G[I]===0;I--);if(I<Z&&(Z=I),I===0)return v[g++]=20971520,v[g++]=20971520,c.bits=1,0;for(x=1;x<I&&G[x]===0;x++);for(Z<x&&(Z=x),D=tt=1;D<=15;D++)if(tt<<=1,(tt-=G[D])<0)return-1;if(0<tt&&(d===0||I!==1))return-1;for(j[1]=0,D=1;D<15;D++)j[D+1]=j[D]+G[D];for(A=0;A<u;A++)p[_+A]!==0&&(f[j[p[_+A]]++]=A);if(L=d===0?(V=ut=f,19):d===1?(V=o,_t-=257,ut=a,lt-=257,256):(V=l,ut=h,-1),D=x,U=g,Y=A=H=0,E=-1,C=(ot=1<<(k=Z))-1,d===1&&852<ot||d===2&&592<ot)return 1;for(;;){for(F=D-Y,T=f[A]<L?(b=0,f[A]):f[A]>L?(b=ut[lt+f[A]],V[_t+f[A]]):(b=96,0),S=1<<D-Y,x=y=1<<k;v[U+(H>>Y)+(y-=S)]=F<<24|b<<16|T|0,y!==0;);for(S=1<<D-1;H&S;)S>>=1;if(S!==0?(H&=S-1,H+=S):H=0,A++,--G[D]==0){if(D===I)break;D=p[_+f[A]]}if(Z<D&&(H&C)!==E){for(Y===0&&(Y=Z),U+=x,tt=1<<(k=D-Y);k+Y<I&&!((tt-=G[k+Y])<=0);)k++,tt<<=1;if(ot+=1<<k,d===1&&852<ot||d===2&&592<ot)return 1;v[E=H&C]=Z<<24|k<<16|U-g|0}}return H!==0&&(v[U+H]=D-Y<<24|64<<16|0),c.bits=Z,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),o=0,a=1;function l(P){for(var z=P.length;0<=--z;)P[z]=0}var h=0,d=29,p=256,_=p+1+d,u=30,v=19,g=2*_+1,f=15,c=16,S=7,y=256,E=16,C=17,U=18,L=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],F=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],T=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],O=new Array(2*(_+2));l(O);var D=new Array(2*u);l(D);var A=new Array(512);l(A);var x=new Array(256);l(x);var I=new Array(d);l(I);var Z,k,Y,tt=new Array(u);function ot(P,z,nt,w,M){this.static_tree=P,this.extra_bits=z,this.extra_base=nt,this.elems=w,this.max_length=M,this.has_stree=P&&P.length}function H(P,z){this.dyn_tree=P,this.max_code=0,this.stat_desc=z}function V(P){return P<256?A[P]:A[256+(P>>>7)]}function _t(P,z){P.pending_buf[P.pending++]=255&z,P.pending_buf[P.pending++]=z>>>8&255}function G(P,z,nt){P.bi_valid>c-nt?(P.bi_buf|=z<<P.bi_valid&65535,_t(P,P.bi_buf),P.bi_buf=z>>c-P.bi_valid,P.bi_valid+=nt-c):(P.bi_buf|=z<<P.bi_valid&65535,P.bi_valid+=nt)}function j(P,z,nt){G(P,nt[2*z],nt[2*z+1])}function ut(P,z){for(var nt=0;nt|=1&P,P>>>=1,nt<<=1,0<--z;);return nt>>>1}function lt(P,z,nt){var w,M,B=new Array(f+1),K=0;for(w=1;w<=f;w++)B[w]=K=K+nt[w-1]<<1;for(M=0;M<=z;M++){var X=P[2*M+1];X!==0&&(P[2*M]=ut(B[X]++,X))}}function pt(P){var z;for(z=0;z<_;z++)P.dyn_ltree[2*z]=0;for(z=0;z<u;z++)P.dyn_dtree[2*z]=0;for(z=0;z<v;z++)P.bl_tree[2*z]=0;P.dyn_ltree[2*y]=1,P.opt_len=P.static_len=0,P.last_lit=P.matches=0}function vt(P){8<P.bi_valid?_t(P,P.bi_buf):0<P.bi_valid&&(P.pending_buf[P.pending++]=P.bi_buf),P.bi_buf=0,P.bi_valid=0}function Ct(P,z,nt,w){var M=2*z,B=2*nt;return P[M]<P[B]||P[M]===P[B]&&w[z]<=w[nt]}function It(P,z,nt){for(var w=P.heap[nt],M=nt<<1;M<=P.heap_len&&(M<P.heap_len&&Ct(z,P.heap[M+1],P.heap[M],P.depth)&&M++,!Ct(z,w,P.heap[M],P.depth));)P.heap[nt]=P.heap[M],nt=M,M<<=1;P.heap[nt]=w}function Nt(P,z,nt){var w,M,B,K,X=0;if(P.last_lit!==0)for(;w=P.pending_buf[P.d_buf+2*X]<<8|P.pending_buf[P.d_buf+2*X+1],M=P.pending_buf[P.l_buf+X],X++,w===0?j(P,M,z):(j(P,(B=x[M])+p+1,z),(K=L[B])!==0&&G(P,M-=I[B],K),j(P,B=V(--w),nt),(K=F[B])!==0&&G(P,w-=tt[B],K)),X<P.last_lit;);j(P,y,z)}function Xt(P,z){var nt,w,M,B=z.dyn_tree,K=z.stat_desc.static_tree,X=z.stat_desc.has_stree,Q=z.stat_desc.elems,mt=-1;for(P.heap_len=0,P.heap_max=g,nt=0;nt<Q;nt++)B[2*nt]!==0?(P.heap[++P.heap_len]=mt=nt,P.depth[nt]=0):B[2*nt+1]=0;for(;P.heap_len<2;)B[2*(M=P.heap[++P.heap_len]=mt<2?++mt:0)]=1,P.depth[M]=0,P.opt_len--,X&&(P.static_len-=K[2*M+1]);for(z.max_code=mt,nt=P.heap_len>>1;1<=nt;nt--)It(P,B,nt);for(M=Q;nt=P.heap[1],P.heap[1]=P.heap[P.heap_len--],It(P,B,1),w=P.heap[1],P.heap[--P.heap_max]=nt,P.heap[--P.heap_max]=w,B[2*M]=B[2*nt]+B[2*w],P.depth[M]=(P.depth[nt]>=P.depth[w]?P.depth[nt]:P.depth[w])+1,B[2*nt+1]=B[2*w+1]=M,P.heap[1]=M++,It(P,B,1),2<=P.heap_len;);P.heap[--P.heap_max]=P.heap[1],function(ht,gt){var Vt,dt,Tt,Et,Lt,wt,Ft=gt.dyn_tree,Bt=gt.max_code,Qt=gt.stat_desc.static_tree,W=gt.stat_desc.has_stree,Mt=gt.stat_desc.extra_bits,st=gt.stat_desc.extra_base,ct=gt.stat_desc.max_length,St=0;for(Et=0;Et<=f;Et++)ht.bl_count[Et]=0;for(Ft[2*ht.heap[ht.heap_max]+1]=0,Vt=ht.heap_max+1;Vt<g;Vt++)ct<(Et=Ft[2*Ft[2*(dt=ht.heap[Vt])+1]+1]+1)&&(Et=ct,St++),Ft[2*dt+1]=Et,Bt<dt||(ht.bl_count[Et]++,Lt=0,st<=dt&&(Lt=Mt[dt-st]),wt=Ft[2*dt],ht.opt_len+=wt*(Et+Lt),W&&(ht.static_len+=wt*(Qt[2*dt+1]+Lt)));if(St!==0){do{for(Et=ct-1;ht.bl_count[Et]===0;)Et--;ht.bl_count[Et]--,ht.bl_count[Et+1]+=2,ht.bl_count[ct]--,St-=2}while(0<St);for(Et=ct;Et!==0;Et--)for(dt=ht.bl_count[Et];dt!==0;)Bt<(Tt=ht.heap[--Vt])||(Ft[2*Tt+1]!==Et&&(ht.opt_len+=(Et-Ft[2*Tt+1])*Ft[2*Tt],Ft[2*Tt+1]=Et),dt--)}}(P,z),lt(B,mt,P.bl_count)}function m(P,z,nt){var w,M,B=-1,K=z[1],X=0,Q=7,mt=4;for(K===0&&(Q=138,mt=3),z[2*(nt+1)+1]=65535,w=0;w<=nt;w++)M=K,K=z[2*(w+1)+1],++X<Q&&M===K||(X<mt?P.bl_tree[2*M]+=X:M!==0?(M!==B&&P.bl_tree[2*M]++,P.bl_tree[2*E]++):X<=10?P.bl_tree[2*C]++:P.bl_tree[2*U]++,B=M,mt=(X=0)===K?(Q=138,3):M===K?(Q=6,3):(Q=7,4))}function at(P,z,nt){var w,M,B=-1,K=z[1],X=0,Q=7,mt=4;for(K===0&&(Q=138,mt=3),w=0;w<=nt;w++)if(M=K,K=z[2*(w+1)+1],!(++X<Q&&M===K)){if(X<mt)for(;j(P,M,P.bl_tree),--X!=0;);else M!==0?(M!==B&&(j(P,M,P.bl_tree),X--),j(P,E,P.bl_tree),G(P,X-3,2)):X<=10?(j(P,C,P.bl_tree),G(P,X-3,3)):(j(P,U,P.bl_tree),G(P,X-11,7));B=M,mt=(X=0)===K?(Q=138,3):M===K?(Q=6,3):(Q=7,4)}}l(tt);var J=!1;function N(P,z,nt,w){G(P,(h<<1)+(w?1:0),3),function(M,B,K,X){vt(M),_t(M,K),_t(M,~K),s.arraySet(M.pending_buf,M.window,B,K,M.pending),M.pending+=K}(P,z,nt)}r._tr_init=function(P){J||(function(){var z,nt,w,M,B,K=new Array(f+1);for(M=w=0;M<d-1;M++)for(I[M]=w,z=0;z<1<<L[M];z++)x[w++]=M;for(x[w-1]=M,M=B=0;M<16;M++)for(tt[M]=B,z=0;z<1<<F[M];z++)A[B++]=M;for(B>>=7;M<u;M++)for(tt[M]=B<<7,z=0;z<1<<F[M]-7;z++)A[256+B++]=M;for(nt=0;nt<=f;nt++)K[nt]=0;for(z=0;z<=143;)O[2*z+1]=8,z++,K[8]++;for(;z<=255;)O[2*z+1]=9,z++,K[9]++;for(;z<=279;)O[2*z+1]=7,z++,K[7]++;for(;z<=287;)O[2*z+1]=8,z++,K[8]++;for(lt(O,_+1,K),z=0;z<u;z++)D[2*z+1]=5,D[2*z]=ut(z,5);Z=new ot(O,L,p+1,_,f),k=new ot(D,F,0,u,f),Y=new ot(new Array(0),b,0,v,S)}(),J=!0),P.l_desc=new H(P.dyn_ltree,Z),P.d_desc=new H(P.dyn_dtree,k),P.bl_desc=new H(P.bl_tree,Y),P.bi_buf=0,P.bi_valid=0,pt(P)},r._tr_stored_block=N,r._tr_flush_block=function(P,z,nt,w){var M,B,K=0;0<P.level?(P.strm.data_type===2&&(P.strm.data_type=function(X){var Q,mt=4093624447;for(Q=0;Q<=31;Q++,mt>>>=1)if(1&mt&&X.dyn_ltree[2*Q]!==0)return o;if(X.dyn_ltree[18]!==0||X.dyn_ltree[20]!==0||X.dyn_ltree[26]!==0)return a;for(Q=32;Q<p;Q++)if(X.dyn_ltree[2*Q]!==0)return a;return o}(P)),Xt(P,P.l_desc),Xt(P,P.d_desc),K=function(X){var Q;for(m(X,X.dyn_ltree,X.l_desc.max_code),m(X,X.dyn_dtree,X.d_desc.max_code),Xt(X,X.bl_desc),Q=v-1;3<=Q&&X.bl_tree[2*T[Q]+1]===0;Q--);return X.opt_len+=3*(Q+1)+5+5+4,Q}(P),M=P.opt_len+3+7>>>3,(B=P.static_len+3+7>>>3)<=M&&(M=B)):M=B=nt+5,nt+4<=M&&z!==-1?N(P,z,nt,w):P.strategy===4||B===M?(G(P,2+(w?1:0),3),Nt(P,O,D)):(G(P,4+(w?1:0),3),function(X,Q,mt,ht){var gt;for(G(X,Q-257,5),G(X,mt-1,5),G(X,ht-4,4),gt=0;gt<ht;gt++)G(X,X.bl_tree[2*T[gt]+1],3);at(X,X.dyn_ltree,Q-1),at(X,X.dyn_dtree,mt-1)}(P,P.l_desc.max_code+1,P.d_desc.max_code+1,K+1),Nt(P,P.dyn_ltree,P.dyn_dtree)),pt(P),w&&vt(P)},r._tr_tally=function(P,z,nt){return P.pending_buf[P.d_buf+2*P.last_lit]=z>>>8&255,P.pending_buf[P.d_buf+2*P.last_lit+1]=255&z,P.pending_buf[P.l_buf+P.last_lit]=255&nt,P.last_lit++,z===0?P.dyn_ltree[2*nt]++:(P.matches++,z--,P.dyn_ltree[2*(x[nt]+p+1)]++,P.dyn_dtree[2*V(z)]++),P.last_lit===P.lit_bufsize-1},r._tr_align=function(P){G(P,2,3),j(P,y,O),function(z){z.bi_valid===16?(_t(z,z.bi_buf),z.bi_buf=0,z.bi_valid=0):8<=z.bi_valid&&(z.pending_buf[z.pending++]=255&z.bi_buf,z.bi_buf>>=8,z.bi_valid-=8)}(P)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(o,a){if(!o.setImmediate){var l,h,d,p,_=1,u={},v=!1,g=o.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(o);f=f&&f.setTimeout?f:o,l={}.toString.call(o.process)==="[object process]"?function(E){process.nextTick(function(){S(E)})}:function(){if(o.postMessage&&!o.importScripts){var E=!0,C=o.onmessage;return o.onmessage=function(){E=!1},o.postMessage("","*"),o.onmessage=C,E}}()?(p="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",y,!1):o.attachEvent("onmessage",y),function(E){o.postMessage(p+E,"*")}):o.MessageChannel?((d=new MessageChannel).port1.onmessage=function(E){S(E.data)},function(E){d.port2.postMessage(E)}):g&&"onreadystatechange"in g.createElement("script")?(h=g.documentElement,function(E){var C=g.createElement("script");C.onreadystatechange=function(){S(E),C.onreadystatechange=null,h.removeChild(C),C=null},h.appendChild(C)}):function(E){setTimeout(S,0,E)},f.setImmediate=function(E){typeof E!="function"&&(E=new Function(""+E));for(var C=new Array(arguments.length-1),U=0;U<C.length;U++)C[U]=arguments[U+1];var L={callback:E,args:C};return u[_]=L,l(_),_++},f.clearImmediate=c}function c(E){delete u[E]}function S(E){if(v)setTimeout(S,0,E);else{var C=u[E];if(C){v=!0;try{(function(U){var L=U.callback,F=U.args;switch(F.length){case 0:L();break;case 1:L(F[0]);break;case 2:L(F[0],F[1]);break;case 3:L(F[0],F[1],F[2]);break;default:L.apply(a,F)}})(C)}finally{c(E),v=!1}}}}function y(E){E.source===o&&typeof E.data=="string"&&E.data.indexOf(p)===0&&S(+E.data.slice(p.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof sr<"u"?sr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})}(Qr)),Qr.exports}var nm=em();const im=Ko(nm);async function rm(i){const e=await(await fetch(i)).arrayBuffer();return await im.loadAsync(e)}async function sm(i,t){const e=[];if(i.forEach((n,r)=>{n.endsWith(t)&&e.push(r)}),e.length==0)throw new Error("No files found with the extension: '"+t+"'");return e}async function am(i,t){const e=i.file(t);if(e==null)throw new Error("No file found with the name: '"+t+"'");return e}async function om(i){return await i.async("text")}var ts,fo;function lm(){if(fo)return ts;fo=1;function i(A){return A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}const t=A=>{if(!A)return null;const x={};switch(A.type){case"ELEMENT":{let I={};const Z=r(A.value.attributes),k=t(A.value.children);if(Z&&(I=Object.assign(I,Z)),k){const Y=e(A.value.children);I=Object.assign(I,Y)}x[A.value.type]=I;break}case"ATTRIBUTE":{const I=A.value;x[I.name]=I.value;break}case"CONTENT":return{content:A.value}}return x},e=A=>A&&Array.isArray(A)&&A.length!==0?n(A)?{content:A[0].value}:{children:A.map(t)}:null,n=A=>A&&Array.isArray(A)&&A.length===1&&A[0].type==="CONTENT",r=A=>A&&Array.isArray(A)?A.map(t).reduce((x,I)=>Object.assign(x,I),{}):null;var s={convert:A=>t(A.value.children[0])},o={Token:(A,x)=>({type:A,value:x})};const{Token:a}=o,l=a("EOF"),h=A=>A===" "||A===`
`||A==="\r"||A==="	",d=A=>A.replace(/'/g,"'");var p={createLexer:function(A){let x=null,I=(G=>{let j=0;for(;j<G.length&&h(G[j]);)j++;return((ut,lt)=>{if(ut.startsWith("<?xml",lt)){const pt=ut.length;for(;lt<pt;)if(ut[lt]!=="?")lt++;else{if(ut[lt+1]===">")return lt+2;lt++}}return lt})(G,j)})(A),Z=[];const k=()=>A[I],Y=()=>x!==l&&I<A.length,tt=G=>G==='"'||G==="'",ot=()=>{for(;Y()&&h(A[I]);)I++},H=G=>{if(Y()){if(A[I]==="<"){let j="<";return I++,Y()&&A[I]==="/"?(I++,j="</"):Y()&&A[I]==="!"&&A[I+1]==="-"&&A[I+2]==="-"&&(I++,I++,I++,j="<!--"),j}if(k()==="/"){let j="/";return I++,Y()&&k()===">"&&(I++,j="/>"),j}if(A[I]==="="||A[I]===">"){const j=A[I];return I++,j}}return V(!!G)},V=G=>{const j=G?/[^>=<]/u:/[a-zA-Z0-9_:-]/;let ut=I;for(;Y()&&A[I].match(j);)I++;return d(A.substring(ut,I))},_t=()=>{const G=I;ot();const j=I-G;if(Y())if(x&&x.type==="OPEN_BRACKET"){ot();const ut=H(!1);x=a("ELEMENT_TYPE",ut),Z.push(ut)}else if(x&&x.type==="ASSIGN"){Y()&&tt(k())&&I++;const ut=A[I-1];let lt=I;for(;Y()&&k()!==ut;)I++;const pt=d(A.substring(lt,I));I++,x=a("ATTRIB_VALUE",pt)}else{ot();let ut=H(!0);switch(ut){case"=":x=x.type==="ATTRIB_NAME"?a("ASSIGN"):a("CONTENT",ut);break;case"</":{const lt=I;for(;A[I]!==">";)I++;x=a("CLOSE_ELEMENT",A.substring(lt,I)),I++,Z.pop();break}case"/>":{const lt=Z.pop();x=a("CLOSE_ELEMENT",lt);break}case"<!--":{const lt=["!","-","-"];for(;Y()&&(lt[2]!==">"||lt[1]!=="-"||lt[0]!=="-");)lt.shift(),lt.push(A[I]),I++;return _t()}case">":x=a("CLOSE_BRACKET");break;case"<":x=a("OPEN_BRACKET");break;default:if(ut&&ut.length>0){if(x.type==="CLOSE_BRACKET"){let lt="";k()!=="<"&&(lt=V(!0)),x=a("CONTENT",ut+lt)}else if(x.type!=="ATTRIB_NAME"&&x.type!=="CONTENT")x.type==="CLOSE_ELEMENT"?(ut=" ".repeat(j)+ut,x=a("CONTENT",ut)):x=a("ATTRIB_NAME",ut);else{const lt=" ".repeat(j)+ut;x=a("CONTENT",lt)}break}{const lt='Unknown Syntax : "'+A[I]+'"';throw new Error(lt)}}}else x=l;return x};return{peek:k,next:_t,hasNext:Y}}};const{createLexer:_}=p,{Token:u}=o,[v,g,f,c]=["ROOT","ELEMENT","ATTRIBUTE","CONTENT"],S=(A,x)=>({type:A,value:x}),y=A=>S(c,A),E=(A,x,I)=>S(g,{type:A,attributes:x,children:I}),C=(A,x)=>S(f,{name:A,value:x}),U=(A,x)=>{const I=[];for(;A.hasNext();){const Z=A.next();switch(Z.type){case"OPEN_BRACKET":{const k=A.next(),[Y,tt]=L(A);let ot=[];tt.type!=="CLOSE_ELEMENT"&&(ot=U(A,k)),ot&&ot.length>0&&ot[0].type==="CONTENT"&&(ot=F(ot)),I.push(E(k.value,Y,ot));break}case"CLOSE_ELEMENT":if(Z.value===x.value)return I;break;case"CONTENT":I.push(y(Z.value));break;case"EOF":return I;default:throw new Error(`Unknown Lexem type: ${Z.type} "${Z.value}, scoping element: ${x.value}"`)}}return I},L=A=>{const x=[];let I=A.peek();if(!A.hasNext()||I&&I.type==="CLOSE_BRACKET"||I&&I.type==="CLOSE_ELEMENT")return[x,I];for(I=A.next();A.hasNext()&&I&&I.type!=="CLOSE_BRACKET"&&I.type!=="CLOSE_ELEMENT";){const Z=I;A.next();const k=A.next(),Y=C(Z.value,k.value);x.push(Y),I=A.next()}return[x,I]};function F(A){let x=[],I="";return A.forEach(Z=>{Z.type==="CONTENT"?I+=Z.value:(I.length&&(x.push(y(I)),I=""),x.push(Z))}),I.length&&x.push(y(I)),x}var b={AttribNode:C,ContentNode:y,ElementNode:E,Node:S,transpile:function(A,x){const I=(Z=>S(v,{children:U(Z,u(v,"ROOT"))}))(_(A));return x?x.convert(I):I}};const T=s,{transpile:O}=b;var D=i({convertXML:function(A,x){return O(A,x||T)},createAST:function(A){return O(A)}});return ts=D,ts}var cm=lm();const hm=Ko(cm);function um(i){return hm.convertXML(i)}class dm{constructor(t){this.init(t)}async init(t){const e=await om(t);this.structure=um(e)}}class fm extends Ui{constructor(t){super(t),this.debug=!1,this.group=null,this.materials=[],this.meshes=[]}load(t,e,n,r){const s=this,o=this.path===""?th.extractUrlBase(t):this.path,a=new qc(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{e(s.parse(l,o))}catch(h){r?r(h):console.error(h),s.manager.itemError(t)}},n,r)}parse(t,e){this.group=new yi,this.materials=[],this.meshes=[],this.readFile(t,e);for(let n=0;n<this.meshes.length;n++)this.group.add(this.meshes[n]);return this.group}readFile(t,e){const n=new DataView(t),r=new ea(n,0,this.debugMessage);if(r.id===mm||r.id===_m||r.id===pm){let s=r.readChunk();for(;s;){if(s.id===gm){const o=s.readDWord();this.debugMessage("3DS file version: "+o)}else s.id===bm?this.readMeshData(s,e):this.debugMessage("Unknown main chunk: "+s.hexId);s=r.readChunk()}}this.debugMessage("Parsed "+this.meshes.length+" meshes")}readMeshData(t,e){let n=t.readChunk();for(;n;){if(n.id===Tm){const r=+n.readDWord();this.debugMessage("Mesh Version: "+r)}else if(n.id===wm){const r=n.readFloat();this.debugMessage("Master scale: "+r),this.group.scale.set(r,r,r)}else n.id===qm?(this.debugMessage("Named Object"),this.readNamedObject(n)):n.id===Am?(this.debugMessage("Material"),this.readMaterialEntry(n,e)):this.debugMessage("Unknown MDATA chunk: "+n.hexId);n=t.readChunk()}}readNamedObject(t){const e=t.readString();let n=t.readChunk();for(;n;){if(n.id===jm){const r=this.readMesh(n);r.name=e,this.meshes.push(r)}else this.debugMessage("Unknown named object chunk: "+n.hexId);n=t.readChunk()}}readMaterialEntry(t,e){let n=t.readChunk();const r=new Ia;for(;n;){if(n.id===Rm)r.name=n.readString(),this.debugMessage("   Name: "+r.name);else if(n.id===Fm)this.debugMessage("   Wireframe"),r.wireframe=!0;else if(n.id===Om){const s=n.readByte();r.wireframeLinewidth=s,this.debugMessage("   Wireframe Thickness: "+s)}else if(n.id===Um)r.side=Ge,this.debugMessage("   DoubleSided");else if(n.id===Nm)this.debugMessage("   Additive Blending"),r.blending=es;else if(n.id===Pm)this.debugMessage("   Diffuse Color"),r.color=this.readColor(n);else if(n.id===Dm)this.debugMessage("   Specular Color"),r.specular=this.readColor(n);else if(n.id===Cm)this.debugMessage("   Ambient color"),r.color=this.readColor(n);else if(n.id===Lm){const s=this.readPercentage(n);r.shininess=s*100,this.debugMessage("   Shininess : "+s)}else if(n.id===Im){const s=this.readPercentage(n);r.opacity=1-s,this.debugMessage("  Transparency : "+s),r.transparent=r.opacity<1}else n.id===Bm?(this.debugMessage("   ColorMap"),r.map=this.readMap(n,e)):n.id===zm?(this.debugMessage("   BumpMap"),r.bumpMap=this.readMap(n,e)):n.id===km?(this.debugMessage("   OpacityMap"),r.alphaMap=this.readMap(n,e)):n.id===Hm?(this.debugMessage("   SpecularMap"),r.specularMap=this.readMap(n,e)):this.debugMessage("   Unknown material chunk: "+n.hexId);n=t.readChunk()}this.materials[r.name]=r}readMesh(t){let e=t.readChunk();const n=new xn,r=new Ia,s=new We(n,r);for(s.name="mesh";e;){if(e.id===Zm){const o=e.readWord();this.debugMessage("   Vertex: "+o);const a=[];for(let l=0;l<o;l++)a.push(e.readFloat()),a.push(e.readFloat()),a.push(e.readFloat());n.setAttribute("position",new sn(a,3))}else if(e.id===Km)this.readFaceArray(e,s);else if(e.id===Jm){const o=e.readWord();this.debugMessage("   UV: "+o);const a=[];for(let l=0;l<o;l++)a.push(e.readFloat()),a.push(e.readFloat());n.setAttribute("uv",new sn(a,2))}else if(e.id===Qm){this.debugMessage("   Transformation Matrix (TODO)");const o=[];for(let h=0;h<12;h++)o[h]=e.readFloat();const a=new ie;a.elements[0]=o[0],a.elements[1]=o[6],a.elements[2]=o[3],a.elements[3]=o[9],a.elements[4]=o[2],a.elements[5]=o[8],a.elements[6]=o[5],a.elements[7]=o[11],a.elements[8]=o[1],a.elements[9]=o[7],a.elements[10]=o[4],a.elements[11]=o[10],a.elements[12]=0,a.elements[13]=0,a.elements[14]=0,a.elements[15]=1,a.transpose();const l=new ie;l.copy(a).invert(),n.applyMatrix4(l),a.decompose(s.position,s.quaternion,s.scale)}else this.debugMessage("   Unknown mesh chunk: "+e.hexId);e=t.readChunk()}return n.computeVertexNormals(),s}readFaceArray(t,e){const n=t.readWord();this.debugMessage("   Faces: "+n);const r=[];for(let a=0;a<n;++a)r.push(t.readWord(),t.readWord(),t.readWord()),t.readWord();e.geometry.setIndex(r);let s=0,o=0;for(;!t.endOfChunk;){const a=t.readChunk();if(a.id===$m){this.debugMessage("      Material Group");const l=this.readMaterialGroup(a),h=l.index.length*3;e.geometry.addGroup(o,h,s),o+=h,s++;const d=this.materials[l.name];Array.isArray(e.material)===!1&&(e.material=[]),d!==void 0&&e.material.push(d)}else this.debugMessage("      Unknown face array chunk: "+a.hexId)}e.material.length===1&&(e.material=e.material[0])}readMap(t,e){let n=t.readChunk(),r={};const s=new Zc(this.manager);for(s.setPath(this.resourcePath||e).setCrossOrigin(this.crossOrigin);n;){if(n.id===Gm){const o=n.readString();r=s.load(o),this.debugMessage("      File: "+e+o)}else n.id===Xm?(r.offset.x=n.readFloat(),this.debugMessage("      OffsetX: "+r.offset.x)):n.id===Ym?(r.offset.y=n.readFloat(),this.debugMessage("      OffsetY: "+r.offset.y)):n.id===Vm?(r.repeat.x=n.readFloat(),this.debugMessage("      RepeatX: "+r.repeat.x)):n.id===Wm?(r.repeat.y=n.readFloat(),this.debugMessage("      RepeatY: "+r.repeat.y)):this.debugMessage("      Unknown map chunk: "+n.hexId);n=t.readChunk()}return r}readMaterialGroup(t){const e=t.readString(),n=t.readWord();this.debugMessage("         Name: "+e),this.debugMessage("         Faces: "+n);const r=[];for(let s=0;s<n;++s)r.push(t.readWord());return{name:e,index:r}}readColor(t){const e=t.readChunk(),n=new qt;if(e.id===xm||e.id===Mm){const r=e.readByte(),s=e.readByte(),o=e.readByte();n.setRGB(r/255,s/255,o/255),this.debugMessage("      Color: "+n.r+", "+n.g+", "+n.b)}else if(e.id===vm||e.id===Sm){const r=e.readFloat(),s=e.readFloat(),o=e.readFloat();n.setRGB(r,s,o),this.debugMessage("      Color: "+n.r+", "+n.g+", "+n.b)}else this.debugMessage("      Unknown color chunk: "+e.hexId);return n}readPercentage(t){const e=t.readChunk();switch(e.id){case ym:return e.readShort()/100;case Em:return e.readFloat();default:return this.debugMessage("      Unknown percentage chunk: "+e.hexId),0}}debugMessage(t){this.debug&&console.log(t)}}class ea{constructor(t,e,n){this.data=t,this.offset=e,this.position=e,this.debugMessage=n,this.debugMessage instanceof Function&&(this.debugMessage=function(){}),this.id=this.readWord(),this.size=this.readDWord(),this.end=this.offset+this.size,this.end>t.byteLength&&this.debugMessage("Bad chunk size for chunk at "+e)}readChunk(){if(this.endOfChunk)return null;try{const t=new ea(this.data,this.position,this.debugMessage);return this.position+=t.size,t}catch{return this.debugMessage("Unable to read chunk at "+this.position),null}}get hexId(){return this.id.toString(16)}get endOfChunk(){return this.position>=this.end}readByte(){const t=this.data.getUint8(this.position,!0);return this.position+=1,t}readFloat(){try{const t=this.data.getFloat32(this.position,!0);return this.position+=4,t}catch(t){return this.debugMessage(t+" "+this.position+" "+this.data.byteLength),0}}readInt(){const t=this.data.getInt32(this.position,!0);return this.position+=4,t}readShort(){const t=this.data.getInt16(this.position,!0);return this.position+=2,t}readDWord(){const t=this.data.getUint32(this.position,!0);return this.position+=4,t}readWord(){const t=this.data.getUint16(this.position,!0);return this.position+=2,t}readString(){let t="",e=this.readByte();for(;e;)t+=String.fromCharCode(e),e=this.readByte();return t}}const pm=19789,mm=15786,_m=49725,gm=2,vm=16,xm=17,Mm=18,Sm=19,ym=48,Em=49,bm=15677,Tm=15678,wm=256,Am=45055,Rm=40960,Cm=40976,Pm=40992,Dm=41008,Lm=41024,Im=41040,Um=41089,Nm=41091,Fm=41093,Om=41095,Bm=41472,km=41488,zm=41520,Hm=41476,Gm=41728,Vm=41812,Wm=41814,Xm=41816,Ym=41818,qm=16384,jm=16640,Zm=16656,Km=16672,$m=16688,Jm=16704,Qm=16736;async function t_(i){return new Promise((t,e)=>{const n=new fm,r=URL.createObjectURL(new Blob([i]));n.load(r,s=>{t(s)},void 0,s=>{e(s)})})}class e_{constructor(t){this.models=[],this.fileURL=t}async init(){const t=await rm(this.fileURL);await this.loadModels(t),await this.loadGSD(t)}async loadModels(t){const n=(await sm(t,".3ds")).map(async r=>{const s=await r.async("arraybuffer");return t_(s)});this.models=await Promise.all(n)}async loadGSD(t){this.GSD=new dm(await am(t,"GeneralSceneDescription.xml"))}}const n_="/assets/capture_demo_show-CmOgcOiG.mvr",$o=window.innerWidth,Jo=window.innerHeight,xr=new kc,Ci=new Re(75,$o/Jo,.1,1e3);Ci.position.z=5;const mi=new zp;mi.setSize($o,Jo);mi.setClearColor(3355443,1);document.body.appendChild(mi.domElement);const Qo=new Gp(Ci,mi.domElement);Qo.enableDamping=!0;async function i_(i){const t=new e_(i);await t.init();try{const e=t.models;e.forEach(n=>{n.scale.set(.001,.001,.001),n.position.set(0,0,0),xr.add(n)}),console.log("All models loaded",e)}catch(e){console.error("Error loading some models",e)}}i_(n_);const tl=new $c(16777215,100,100);tl.position.z=20;xr.add(tl);const el=new Qc(16772829,3);el.position.set(0,0,2);xr.add(el);function nl(){requestAnimationFrame(nl),mi.render(xr,Ci),Qo.update()}nl();function r_(){Ci.aspect=window.innerWidth/window.innerHeight,Ci.updateProjectionMatrix(),mi.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",r_,!1);
