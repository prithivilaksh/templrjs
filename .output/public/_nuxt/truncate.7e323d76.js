import{n as v,c as j,h as b,t as R}from"./toString.53aed50c.js";import{h,s as A,c as z}from"./_stringToArray.5b71c590.js";import{b5 as L,a$ as M,aO as N}from"./entry.5eee13ba.js";import{b as p}from"./_baseProperty.3973c195.js";import{t as F}from"./toInteger.4d2e8b31.js";var _="[object RegExp]";function $(e){return L(e)&&M(e)==_}var m=v&&v.isRegExp,k=m?j(m):$;const w=k;var y=p("length");const D=y;var E="\\ud800-\\udfff",G="\\u0300-\\u036f",H="\\ufe20-\\ufe2f",J="\\u20d0-\\u20ff",P=G+H+J,V="\\ufe0e\\ufe0f",q="["+E+"]",o="["+P+"]",t="\\ud83c[\\udffb-\\udfff]",W="(?:"+o+"|"+t+")",O="[^"+E+"]",S="(?:\\ud83c[\\udde6-\\uddff]){2}",T="[\\ud800-\\udbff][\\udc00-\\udfff]",Z="\\u200d",I=W+"?",U="["+V+"]?",B="(?:"+Z+"(?:"+[O,S,T].join("|")+")"+U+I+")*",K=U+I+B,Q="(?:"+[O+o+"?",o,S,T,q].join("|")+")",x=RegExp(t+"(?="+t+")|"+Q+K,"g");function X(e){for(var i=x.lastIndex=0;x.test(e);)++i;return i}function Y(e){return h(e)?X(e):D(e)}var ee=30,re="...",ie=/\w*$/;function oe(e,i){var s=ee,n=re;if(N(i)){var r="separator"in i?i.separator:r;s="length"in i?F(i.length):s,n="omission"in i?b(i.omission):n}e=R(e);var d=e.length;if(h(e)){var u=A(e);d=u.length}if(s>=d)return e;var a=s-Y(n);if(a<1)return n;var f=u?z(u,0,a).join(""):e.slice(0,a);if(r===void 0)return f+n;if(u&&(a+=f.length-a),w(r)){if(e.slice(a).search(r)){var c,C=f;for(r.global||(r=RegExp(r.source,R(ie.exec(r))+"g")),r.lastIndex=0;c=r.exec(C);)var l=c.index;f=f.slice(0,l===void 0?a:l)}}else if(e.indexOf(b(r),a)!=a){var g=f.lastIndexOf(r);g>-1&&(f=f.slice(0,g))}return f+n}export{oe as t};
