import{S as V,i as j,s as A,k as g,a as I,q as P,l as k,m as v,h as d,c as H,r as S,n as b,D as q,E as w,b as y,C as h,u as z,f as E,g as F,t as L,d as G,w as J,x as K,y as M,z as N}from"./index-6c340922.js";import{L as O}from"./LinkButtons-355721dd.js";function C(a){let t,l;return{c(){t=g("p"),l=P(a[2]),this.h()},l(e){t=k(e,"P",{class:!0});var n=v(t);l=S(n,a[2]),n.forEach(d),this.h()},h(){b(t,"class","subtitle svelte-5s1mbd")},m(e,n){y(e,t,n),h(t,l)},p(e,n){n&4&&z(l,e[2])},d(e){e&&d(t)}}}function D(a){let t,l;return t=new O({props:{links:a[3],highlight:a[4]}}),{c(){J(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,n){M(t,e,n),l=!0},p(e,n){const c={};n&8&&(c.links=e[3]),n&16&&(c.highlight=e[4]),t.$set(c)},i(e){l||(E(t.$$.fragment,e),l=!0)},o(e){L(t.$$.fragment,e),l=!1},d(e){N(t,e)}}}function Q(a){let t,l,e,n,c,r,m,_,s,u=a[2]&&C(a),i=a[3]&&D(a);return{c(){t=g("div"),l=g("i"),n=I(),c=g("p"),r=P(a[1]),m=I(),u&&u.c(),_=I(),i&&i.c(),this.h()},l(f){t=k(f,"DIV",{class:!0});var o=v(t);l=k(o,"I",{class:!0}),v(l).forEach(d),n=H(o),c=k(o,"P",{class:!0});var B=v(c);r=S(B,a[1]),B.forEach(d),m=H(o),u&&u.l(o),_=H(o),i&&i.l(o),o.forEach(d),this.h()},h(){b(l,"class",e=q(a[0])+" svelte-5s1mbd"),b(c,"class","title svelte-5s1mbd"),b(t,"class","svelte-5s1mbd"),w(t,"dark",a[5])},m(f,o){y(f,t,o),h(t,l),h(t,n),h(t,c),h(c,r),h(t,m),u&&u.m(t,null),h(t,_),i&&i.m(t,null),s=!0},p(f,[o]){(!s||o&1&&e!==(e=q(f[0])+" svelte-5s1mbd"))&&b(l,"class",e),(!s||o&2)&&z(r,f[1]),f[2]?u?u.p(f,o):(u=C(f),u.c(),u.m(t,_)):u&&(u.d(1),u=null),f[3]?i?(i.p(f,o),o&8&&E(i,1)):(i=D(f),i.c(),E(i,1),i.m(t,null)):i&&(F(),L(i,1,1,()=>{i=null}),G()),(!s||o&32)&&w(t,"dark",f[5])},i(f){s||(E(i),s=!0)},o(f){L(i),s=!1},d(f){f&&d(t),u&&u.d(),i&&i.d()}}}function R(a,t,l){let{icon:e}=t,{title:n}=t,{subtitle:c=void 0}=t,{buttons:r=void 0}=t,{buttonsHighlighted:m=!1}=t,{dark:_=!1}=t;return a.$$set=s=>{"icon"in s&&l(0,e=s.icon),"title"in s&&l(1,n=s.title),"subtitle"in s&&l(2,c=s.subtitle),"buttons"in s&&l(3,r=s.buttons),"buttonsHighlighted"in s&&l(4,m=s.buttonsHighlighted),"dark"in s&&l(5,_=s.dark)},[e,n,c,r,m,_]}class W extends V{constructor(t){super(),j(this,t,R,Q,A,{icon:0,title:1,subtitle:2,buttons:3,buttonsHighlighted:4,dark:5})}}export{W as I};
