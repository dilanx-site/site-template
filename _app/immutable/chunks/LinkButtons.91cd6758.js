import{S as A,i as B,s as C,k as m,l as v,m as b,h as o,n as _,F as g,b as u,D as d,P as D,a as p,c as E,C as V,q as P,r as q,E as k,u as w}from"./index.afa1daf7.js";import{a as S}from"./common.6eefc237.js";function I(n,e,r){const l=n.slice();return l[5]=e[r].href,l[6]=e[r].target,l[7]=e[r].rel,l[8]=e[r].text,l[9]=e[r].icon,l}function F(n){let e,r=n[8]+"",l,t,f,s;return{c(){e=m("p"),l=P(r),t=p(),f=m("i"),this.h()},l(a){e=v(a,"P",{class:!0});var i=b(e);l=q(i,r),i.forEach(o),t=E(a),f=v(a,"I",{class:!0}),b(f).forEach(o),this.h()},h(){_(e,"class","svelte-rgi4fx"),_(f,"class",s=k(n[9]||"fas fa-arrow-right")+" svelte-rgi4fx")},m(a,i){u(a,e,i),V(e,l),u(a,t,i),u(a,f,i)},p(a,i){i&1&&r!==(r=a[8]+"")&&w(l,r),i&1&&s!==(s=k(a[9]||"fas fa-arrow-right")+" svelte-rgi4fx")&&_(f,"class",s)},d(a){a&&o(e),a&&o(t),a&&o(f)}}}function j(n){let e,r,l,t,f=n[8]+"",s;return{c(){e=m("i"),l=p(),t=m("p"),s=P(f),this.h()},l(a){e=v(a,"I",{class:!0}),b(e).forEach(o),l=E(a),t=v(a,"P",{class:!0});var i=b(t);s=q(i,f),i.forEach(o),this.h()},h(){_(e,"class",r=k(n[9])+" svelte-rgi4fx"),_(t,"class","svelte-rgi4fx")},m(a,i){u(a,e,i),u(a,l,i),u(a,t,i),V(t,s)},p(a,i){i&1&&r!==(r=k(a[9])+" svelte-rgi4fx")&&_(e,"class",r),i&1&&f!==(f=a[8]+"")&&w(s,f)},d(a){a&&o(e),a&&o(l),a&&o(t)}}}function L(n){let e,r,l,t,f;function s(h,c){return h[9]?j:F}let a=s(n),i=a(n);return{c(){e=m("a"),i.c(),r=p(),this.h()},l(h){e=v(h,"A",{href:!0,target:!0,rel:!0,class:!0});var c=b(e);i.l(c),r=E(c),c.forEach(o),this.h()},h(){_(e,"href",l=n[5]),_(e,"target",t=n[6]),_(e,"rel",f=n[7]),_(e,"class","svelte-rgi4fx"),g(e,"highlight",n[2])},m(h,c){u(h,e,c),i.m(e,null),V(e,r)},p(h,c){a===(a=s(h))&&i?i.p(h,c):(i.d(1),i=a(h),i&&(i.c(),i.m(e,r))),c&1&&l!==(l=h[5])&&_(e,"href",l),c&1&&t!==(t=h[6])&&_(e,"target",t),c&1&&f!==(f=h[7])&&_(e,"rel",f),c&4&&g(e,"highlight",h[2])},d(h){h&&o(e),i.d()}}}function y(n){let e,r=n[0].map(n[4]),l=[];for(let t=0;t<r.length;t+=1)l[t]=L(I(n,r,t));return{c(){e=m("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=v(t,"DIV",{class:!0});var f=b(e);for(let s=0;s<l.length;s+=1)l[s].l(f);f.forEach(o),this.h()},h(){_(e,"class","svelte-rgi4fx"),g(e,"margin",n[1]),g(e,"mobileVertical",n[3])},m(t,f){u(t,e,f);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(e,null)},p(t,[f]){if(f&5){r=t[0].map(t[4]);let s;for(s=0;s<r.length;s+=1){const a=I(t,r,s);l[s]?l[s].p(a,f):(l[s]=L(a),l[s].c(),l[s].m(e,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=r.length}f&2&&g(e,"margin",t[1]),f&8&&g(e,"mobileVertical",t[3])},i:d,o:d,d(t){t&&o(e),D(l,t)}}}function z(n,e,r){let{links:l}=e,{margin:t=!1}=e,{highlight:f=!1}=e,{mobileVertical:s=!1}=e;const a=({to:i,text:h,icon:c})=>({...S(i),text:h,icon:c});return n.$$set=i=>{"links"in i&&r(0,l=i.links),"margin"in i&&r(1,t=i.margin),"highlight"in i&&r(2,f=i.highlight),"mobileVertical"in i&&r(3,s=i.mobileVertical)},[l,t,f,s,a]}class J extends A{constructor(e){super(),B(this,e,z,y,C,{links:0,margin:1,highlight:2,mobileVertical:3})}}export{J as L};
