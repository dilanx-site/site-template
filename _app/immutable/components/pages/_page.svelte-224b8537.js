import{S as ee,i as te,s as ne,H as se,k as y,a as N,l as C,m as E,c as M,h as u,n as k,E as B,p as U,b as h,C as w,f as S,g as Ie,t as H,d as ye,J as le,K as ae,L as re,O as Ce,D as x,N as oe,q as b,r as v,M as W,u as ie,B as q,w as R,x as T,y as j,z as G}from"../../chunks/index-cd5f678e.js";import{b as De,g as Z,a as Ee,e as Pe}from"../../chunks/common-2c5fc204.js";import{H as Ae}from"../../chunks/Heading-f0595814.js";import{L as z}from"../../chunks/Link-f8c065fc.js";import{L as we}from"../../chunks/LinkButtons-3a621d8d.js";import{M as Se}from"../../chunks/Meta-f3b6b4db.js";import{S as Ne}from"../../chunks/Section-13f9dd5a.js";import{T as Q}from"../../chunks/Text-889499d9.js";function fe(r,e,t){const n=r.slice();return n[20]=e[t].to,n[21]=e[t].image,n[22]=e[t].alt,n}function ue(r,e,t){const n=r.slice();return n[20]=e[t].to,n[25]=e[t].newTab,n[9]=e[t].icon,n[26]=e[t].text,n}function ce(r,e,t){const n=r.slice();return n[20]=e[t].to,n[25]=e[t].newTab,n[9]=e[t].icon,n[26]=e[t].text,n}const Me=r=>({}),me=r=>({});function de(r){let e,t;const n=r[19].image,s=se(n,r,r[18],me);return{c(){e=y("div"),s&&s.c(),this.h()},l(a){e=C(a,"DIV",{class:!0});var l=E(e);s&&s.l(l),l.forEach(u),this.h()},h(){k(e,"class","image svelte-832y9")},m(a,l){h(a,e,l),s&&s.m(e,null),t=!0},p(a,l){s&&s.p&&(!t||l&262144)&&le(s,n,a,a[18],t?re(n,a[18],l,Me):ae(a[18]),me)},i(a){t||(S(s,a),t=!0)},o(a){H(s,a),t=!1},d(a){a&&u(e),s&&s.d(a)}}}function pe(r){let e,t,n;return{c(){e=y("div"),t=y("i"),this.h()},l(s){e=C(s,"DIV",{class:!0});var a=E(e);t=C(a,"I",{class:!0}),E(t).forEach(u),a.forEach(u),this.h()},h(){k(t,"class",n=x(r[9])+" svelte-832y9"),k(e,"class","icon svelte-832y9"),B(e,"dark",r[4])},m(s,a){h(s,e,a),w(e,t)},p(s,a){a&512&&n!==(n=x(s[9])+" svelte-832y9")&&k(t,"class",n),a&16&&B(e,"dark",s[4])},d(s){s&&u(e)}}}function He(r){let e,t=r[10],n=[];for(let s=0;s<t.length;s+=1)n[s]=he(ce(r,t,s));return{c(){e=y("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=C(s,"DIV",{class:!0});var a=E(e);for(let l=0;l<n.length;l+=1)n[l].l(a);a.forEach(u),this.h()},h(){k(e,"class","links svelte-832y9"),U(e,"color",r[5])},m(s,a){h(s,e,a);for(let l=0;l<n.length;l+=1)n[l].m(e,null)},p(s,a){if(a&1040){t=s[10];let l;for(l=0;l<t.length;l+=1){const f=ce(s,t,l);n[l]?n[l].p(f,a):(n[l]=he(f),n[l].c(),n[l].m(e,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=t.length}a&32&&U(e,"color",s[5])},d(s){s&&u(e),oe(n,s)}}}function Oe(r){let e;return{c(){e=y("i"),this.h()},l(t){e=C(t,"I",{class:!0}),E(e).forEach(u),this.h()},h(){k(e,"class",x(r[9])+" svelte-832y9")},m(t,n){h(t,e,n)},p:q,d(t){t&&u(e)}}}function he(r){let e,t,n=r[26]+"",s,a,l=r[9]&&Oe(r);return{c(){e=y("a"),l&&l.c(),t=N(),s=b(n),a=N(),this.h()},l(f){e=C(f,"A",{href:!0,target:!0,rel:!0,class:!0});var m=E(e);l&&l.l(m),t=M(m),s=v(m,n),a=M(m),m.forEach(u),this.h()},h(){k(e,"href",r[20]),k(e,"target",r[25]?"_blank":""),k(e,"rel",r[25]?"noreferrer":void 0),k(e,"class","svelte-832y9"),B(e,"dark",r[4])},m(f,m){h(f,e,m),l&&l.m(e,null),w(e,t),w(e,s),w(e,a)},p(f,m){f[9]&&l.p(f,m),m&16&&B(e,"dark",f[4])},d(f){f&&u(e),l&&l.d()}}}function Re(r){let e,t=r[11],n=[];for(let s=0;s<t.length;s+=1)n[s]=_e(ue(r,t,s));return{c(){e=y("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=C(s,"DIV",{class:!0});var a=E(e);for(let l=0;l<n.length;l+=1)n[l].l(a);a.forEach(u),this.h()},h(){k(e,"class","sublinks svelte-832y9"),U(e,"color",r[6])},m(s,a){h(s,e,a);for(let l=0;l<n.length;l+=1)n[l].m(e,null)},p(s,a){if(a&2048){t=s[11];let l;for(l=0;l<t.length;l+=1){const f=ue(s,t,l);n[l]?n[l].p(f,a):(n[l]=_e(f),n[l].c(),n[l].m(e,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=t.length}a&64&&U(e,"color",s[6])},d(s){s&&u(e),oe(n,s)}}}function Te(r){let e;return{c(){e=y("i"),this.h()},l(t){e=C(t,"I",{class:!0}),E(e).forEach(u),this.h()},h(){k(e,"class",x(r[9])+" svelte-832y9")},m(t,n){h(t,e,n)},p:q,d(t){t&&u(e)}}}function _e(r){let e,t,n=r[26]+"",s,a,l=r[9]&&Te(r);return{c(){e=y("a"),l&&l.c(),t=N(),s=b(n),a=N(),this.h()},l(f){e=C(f,"A",{href:!0,target:!0,rel:!0,class:!0});var m=E(e);l&&l.l(m),t=M(m),s=v(m,n),a=M(m),m.forEach(u),this.h()},h(){k(e,"href",r[20]),k(e,"target",r[25]?"_blank":void 0),k(e,"rel",r[25]?"noreferrer":void 0),k(e,"class","sublink svelte-832y9")},m(f,m){h(f,e,m),l&&l.m(e,null),w(e,t),w(e,s),w(e,a)},p(f,m){f[9]&&l.p(f,m)},d(f){f&&u(e),l&&l.d()}}}function ge(r){let e,t=r[7],n=[];for(let s=0;s<t.length;s+=1)n[s]=$e(fe(r,t,s));return{c(){e=y("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=C(s,"DIV",{class:!0});var a=E(e);for(let l=0;l<n.length;l+=1)n[l].l(a);a.forEach(u),this.h()},h(){k(e,"class","labels svelte-832y9")},m(s,a){h(s,e,a);for(let l=0;l<n.length;l+=1)n[l].m(e,null)},p(s,a){if(a&128){t=s[7];let l;for(l=0;l<t.length;l+=1){const f=fe(s,t,l);n[l]?n[l].p(f,a):(n[l]=$e(f),n[l].c(),n[l].m(e,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=t.length}},d(s){s&&u(e),oe(n,s)}}}function $e(r){let e,t,n,s,a,l;return{c(){e=y("a"),t=y("img"),a=N(),this.h()},l(f){e=C(f,"A",{href:!0,target:!0,rel:!0,class:!0});var m=E(e);t=C(m,"IMG",{src:!0,alt:!0}),a=M(m),m.forEach(u),this.h()},h(){W(t.src,n=r[21])||k(t,"src",n),k(t,"alt",s=r[22]),k(e,"href",l=r[20]),k(e,"target","_blank"),k(e,"rel","noreferrer"),k(e,"class","svelte-832y9")},m(f,m){h(f,e,m),w(e,t),w(e,a)},p(f,m){m&128&&!W(t.src,n=f[21])&&k(t,"src",n),m&128&&s!==(s=f[22])&&k(t,"alt",s),m&128&&l!==(l=f[20])&&k(e,"href",l)},d(f){f&&u(e)}}}function ke(r){let e,t;return{c(){e=y("p"),t=b(r[0]),this.h()},l(n){e=C(n,"P",{class:!0});var s=E(e);t=v(s,r[0]),s.forEach(u),this.h()},h(){k(e,"class","tag svelte-832y9"),B(e,"dark",r[4])},m(n,s){h(n,e,s),w(e,t)},p(n,s){s&1&&ie(t,n[0]),s&16&&B(e,"dark",n[4])},d(n){n&&u(e)}}}function je(r){let e,t,n,s,a,l,f,m,_,g,c=r[13].image&&!r[9]&&de(r),$=r[9]&&pe(r);const i=r[19].default,d=se(i,r,r[18],null);let A=r[10].length!==0&&He(r),O=r[11].length!==0&&Re(r),I=r[7]&&ge(r),P=r[0]&&ke(r);return{c(){e=y("div"),t=y("div"),c&&c.c(),n=N(),$&&$.c(),s=N(),a=y("div"),d&&d.c(),l=N(),A&&A.c(),f=N(),O&&O.c(),m=N(),I&&I.c(),_=N(),P&&P.c(),this.h()},l(o){e=C(o,"DIV",{class:!0});var p=E(e);t=C(p,"DIV",{class:!0});var V=E(t);c&&c.l(V),n=M(V),$&&$.l(V),s=M(V),a=C(V,"DIV",{class:!0});var L=E(a);d&&d.l(L),l=M(L),A&&A.l(L),f=M(L),O&&O.l(L),L.forEach(u),V.forEach(u),m=M(p),I&&I.l(p),_=M(p),P&&P.l(p),p.forEach(u),this.h()},h(){k(a,"class","text svelte-832y9"),B(a,"dark",r[4]),B(a,"noImage",!r[13].image&&!r[9]),B(a,"mini",r[8]),k(t,"class","content svelte-832y9"),k(e,"class","display svelte-832y9"),U(e,"background-image",`linear-gradient(rgba(0, 0, 0, ${r[12]}), rgba(0, 0, 0, ${r[12]})), url(${r[3]})`),U(e,"background-color",r[1]),U(e,"border",r[2]?`4px solid ${r[2]}`:void 0)},m(o,p){h(o,e,p),w(e,t),c&&c.m(t,null),w(t,n),$&&$.m(t,null),w(t,s),w(t,a),d&&d.m(a,null),w(a,l),A&&A.m(a,null),w(a,f),O&&O.m(a,null),w(e,m),I&&I.m(e,null),w(e,_),P&&P.m(e,null),g=!0},p(o,[p]){o[13].image&&!o[9]?c?(c.p(o,p),p&8704&&S(c,1)):(c=de(o),c.c(),S(c,1),c.m(t,n)):c&&(Ie(),H(c,1,1,()=>{c=null}),ye()),o[9]?$?$.p(o,p):($=pe(o),$.c(),$.m(t,s)):$&&($.d(1),$=null),d&&d.p&&(!g||p&262144)&&le(d,i,o,o[18],g?re(i,o[18],p,null):ae(o[18]),null),o[10].length!==0&&A.p(o,p),o[11].length!==0&&O.p(o,p),(!g||p&16)&&B(a,"dark",o[4]),(!g||p&8704)&&B(a,"noImage",!o[13].image&&!o[9]),(!g||p&256)&&B(a,"mini",o[8]),o[7]?I?I.p(o,p):(I=ge(o),I.c(),I.m(e,_)):I&&(I.d(1),I=null),o[0]?P?P.p(o,p):(P=ke(o),P.c(),P.m(e,null)):P&&(P.d(1),P=null),p&8&&U(e,"background-image",`linear-gradient(rgba(0, 0, 0, ${o[12]}), rgba(0, 0, 0, ${o[12]})), url(${o[3]})`),p&2&&U(e,"background-color",o[1]),p&4&&U(e,"border",o[2]?`4px solid ${o[2]}`:void 0)},i(o){g||(S(c),S(d,o),g=!0)},o(o){H(c),H(d,o),g=!1},d(o){o&&u(e),c&&c.d(),$&&$.d(),d&&d.d(o),A&&A.d(),O&&O.d(),I&&I.d(),P&&P.d()}}}function Ge(r,e,t){let{$$slots:n={},$$scope:s}=e;const a=Ce(n);let{backgroundColor:l=void 0}=e,{borderColor:f=void 0}=e,{backgroundImage:m=void 0}=e,{darkenBackgroundImage:_=!1}=e,{dark:g=!1}=e,{links:c=void 0}=e,{linkColor:$=void 0}=e,{sublinkColor:i=void 0}=e,{labels:d=void 0}=e,{featured:A=!1}=e,{blog:O=void 0}=e,{tag:I=void 0}=e,{mini:P=!1}=e,{icon:o=void 0}=e;A&&(I="FEATURED PROJECT"),O&&(I=`NEW BLOG POST \u2022 ${O} MIN READ`);let p=[],V=[];if(c)for(const D of c)D.sublink?V.push(D):p.push(D);const L=_?.75:.2;return r.$$set=D=>{"backgroundColor"in D&&t(1,l=D.backgroundColor),"borderColor"in D&&t(2,f=D.borderColor),"backgroundImage"in D&&t(3,m=D.backgroundImage),"darkenBackgroundImage"in D&&t(14,_=D.darkenBackgroundImage),"dark"in D&&t(4,g=D.dark),"links"in D&&t(15,c=D.links),"linkColor"in D&&t(5,$=D.linkColor),"sublinkColor"in D&&t(6,i=D.sublinkColor),"labels"in D&&t(7,d=D.labels),"featured"in D&&t(16,A=D.featured),"blog"in D&&t(17,O=D.blog),"tag"in D&&t(0,I=D.tag),"mini"in D&&t(8,P=D.mini),"icon"in D&&t(9,o=D.icon),"$$scope"in D&&t(18,s=D.$$scope)},[I,l,f,m,g,$,i,d,P,o,p,V,L,a,_,c,A,O,s,n]}class X extends ee{constructor(e){super(),te(this,e,Ge,je,ne,{backgroundColor:1,borderColor:2,backgroundImage:3,darkenBackgroundImage:14,dark:4,links:15,linkColor:5,sublinkColor:6,labels:7,featured:16,blog:17,tag:0,mini:8,icon:9})}}function be(r){let e,t;return{c(){e=y("h1"),t=b(r[0]),this.h()},l(n){e=C(n,"H1",{class:!0});var s=E(e);t=v(s,r[0]),s.forEach(u),this.h()},h(){k(e,"class","svelte-kbfoqw")},m(n,s){h(n,e,s),w(e,t)},p(n,s){s&1&&ie(t,n[0])},d(n){n&&u(e)}}}function ve(r){let e,t;return{c(){e=y("p"),t=b(r[1]),this.h()},l(n){e=C(n,"P",{class:!0});var s=E(e);t=v(s,r[1]),s.forEach(u),this.h()},h(){k(e,"class","svelte-kbfoqw")},m(n,s){h(n,e,s),w(e,t)},p(n,s){s&2&&ie(t,n[1])},d(n){n&&u(e)}}}function Le(r){let e,t,n,s,a,l=r[0]&&be(r),f=r[1]&&ve(r);const m=r[5].default,_=se(m,r,r[4],null);return{c(){e=y("div"),t=y("div"),l&&l.c(),n=N(),f&&f.c(),s=N(),_&&_.c(),this.h()},l(g){e=C(g,"DIV",{class:!0});var c=E(e);t=C(c,"DIV",{class:!0});var $=E(t);l&&l.l($),n=M($),f&&f.l($),s=M($),_&&_.l($),$.forEach(u),c.forEach(u),this.h()},h(){k(t,"class","content svelte-kbfoqw"),k(e,"class","heading-block svelte-kbfoqw"),B(e,"lessPadding",r[2]),B(e,"dark",r[3])},m(g,c){h(g,e,c),w(e,t),l&&l.m(t,null),w(t,n),f&&f.m(t,null),w(t,s),_&&_.m(t,null),a=!0},p(g,[c]){g[0]?l?l.p(g,c):(l=be(g),l.c(),l.m(t,n)):l&&(l.d(1),l=null),g[1]?f?f.p(g,c):(f=ve(g),f.c(),f.m(t,s)):f&&(f.d(1),f=null),_&&_.p&&(!a||c&16)&&le(_,m,g,g[4],a?re(m,g[4],c,null):ae(g[4]),null),(!a||c&4)&&B(e,"lessPadding",g[2]),(!a||c&8)&&B(e,"dark",g[3])},i(g){a||(S(_,g),a=!0)},o(g){H(_,g),a=!1},d(g){g&&u(e),l&&l.d(),f&&f.d(),_&&_.d(g)}}}function Ve(r,e,t){let{$$slots:n={},$$scope:s}=e,{title:a=void 0}=e,{subtitle:l=void 0}=e,{lessPadding:f=!1}=e,{dark:m=!1}=e;return r.$$set=_=>{"title"in _&&t(0,a=_.title),"subtitle"in _&&t(1,l=_.subtitle),"lessPadding"in _&&t(2,f=_.lessPadding),"dark"in _&&t(3,m=_.dark),"$$scope"in _&&t(4,s=_.$$scope)},[a,l,f,m,s,n]}class Be extends ee{constructor(e){super(),te(this,e,Ve,Le,ne,{title:0,subtitle:1,lessPadding:2,dark:3})}}function qe(r){let e,t;return e=new we({props:{mobileVertical:!0,links:[{to:"#about",text:"Learn about me",icon:"fas fa-face-smile"},{to:"/contact",text:"Get in touch",icon:"fas fa-envelope"},{to:"https://github.com/sponsors/dilanx",text:"Support my work",icon:"fas fa-heart"},{to:"https://dilan.blog",text:"Check out my blog",icon:"fas fa-book-bookmark"}]}}),{c(){R(e.$$.fragment)},l(n){T(e.$$.fragment,n)},m(n,s){j(e,n,s),t=!0},p:q,i(n){t||(S(e.$$.fragment,n),t=!0)},o(n){H(e.$$.fragment,n),t=!1},d(n){G(e,n)}}}function Ue(r){let e,t,n,s,a;return{c(){e=y("h2"),t=b("How Paper Manages Hundreds of Thousands of Lines of Data"),n=N(),s=y("p"),a=b(`If you're interested in what goes on behind the scenes of the Paper course
    scheduler, check out this new blog post!`)},l(l){e=C(l,"H2",{});var f=E(e);t=v(f,"How Paper Manages Hundreds of Thousands of Lines of Data"),f.forEach(u),n=M(l),s=C(l,"P",{});var m=E(s);a=v(m,`If you're interested in what goes on behind the scenes of the Paper course
    scheduler, check out this new blog post!`),m.forEach(u)},m(l,f){h(l,e,f),w(e,t),h(l,n,f),h(l,s,f),w(s,a)},p:q,d(l){l&&u(e),l&&u(n),l&&u(s)}}}function ze(r){let e,t,n,s,a,l,f,m,_,g,c,$,i,d,A,O,I,P,o;return{c(){e=y("h2"),t=b("CRACO"),n=N(),s=y("p"),a=y("span"),l=b("C"),f=b(`reate
    `),m=y("span"),_=b("R"),g=b(`eact
    `),c=y("span"),$=b("A"),i=b(`pp
    `),d=y("span"),A=b("C"),O=b(`onfiguration
    `),I=y("span"),P=b("O"),o=b(`verride, an easy and comprehensible
    configuration layer for Create React App.`),this.h()},l(p){e=C(p,"H2",{});var V=E(e);t=v(V,"CRACO"),V.forEach(u),n=M(p),s=C(p,"P",{});var L=E(s);a=C(L,"SPAN",{class:!0});var D=E(a);l=v(D,"C"),D.forEach(u),f=v(L,`reate
    `),m=C(L,"SPAN",{class:!0});var F=E(m);_=v(F,"R"),F.forEach(u),g=v(L,`eact
    `),c=C(L,"SPAN",{class:!0});var J=E(c);$=v(J,"A"),J.forEach(u),i=v(L,`pp
    `),d=C(L,"SPAN",{class:!0});var Y=E(d);A=v(Y,"C"),Y.forEach(u),O=v(L,`onfiguration
    `),I=C(L,"SPAN",{class:!0});var K=E(I);P=v(K,"O"),K.forEach(u),o=v(L,`verride, an easy and comprehensible
    configuration layer for Create React App.`),L.forEach(u),this.h()},h(){k(a,"class","s heavy"),k(m,"class","s heavy"),k(c,"class","s heavy"),k(d,"class","s heavy"),k(I,"class","s heavy")},m(p,V){h(p,e,V),w(e,t),h(p,n,V),h(p,s,V),w(s,a),w(a,l),w(s,f),w(s,m),w(m,_),w(s,g),w(s,c),w(c,$),w(s,i),w(s,d),w(d,A),w(s,O),w(s,I),w(I,P),w(s,o)},p:q,d(p){p&&u(e),p&&u(n),p&&u(s)}}}function We(r){let e,t;return{c(){e=y("img"),this.h()},l(n){e=C(n,"IMG",{src:!0,alt:!0,slot:!0}),this.h()},h(){W(e.src,t="/images/craco.png")||k(e,"src",t),k(e,"alt","CRACO logo"),k(e,"slot","image")},m(n,s){h(n,e,s)},p:q,d(n){n&&u(e)}}}function Fe(r){let e,t,n,s,a;return{c(){e=y("h2"),t=b("Paper"),n=N(),s=y("p"),a=b(`An online tool used by thousands of Northwestern students to plan and
    schedule their courses.`)},l(l){e=C(l,"H2",{});var f=E(e);t=v(f,"Paper"),f.forEach(u),n=M(l),s=C(l,"P",{});var m=E(s);a=v(m,`An online tool used by thousands of Northwestern students to plan and
    schedule their courses.`),m.forEach(u)},m(l,f){h(l,e,f),w(e,t),h(l,n,f),h(l,s,f),w(s,a)},p:q,d(l){l&&u(e),l&&u(n),l&&u(s)}}}function Je(r){let e,t;return{c(){e=y("img"),this.h()},l(n){e=C(n,"IMG",{src:!0,alt:!0,slot:!0}),this.h()},h(){W(e.src,t="/images/paper-thick-white.png")||k(e,"src",t),k(e,"alt","Paper logo"),k(e,"slot","image")},m(n,s){h(n,e,s)},p:q,d(n){n&&u(e)}}}function Ye(r){let e,t,n,s,a;return{c(){e=y("h2"),t=b("DMSLauncher"),n=N(),s=y("p"),a=b("An automatic modded client updater and launcher for Minecraft.")},l(l){e=C(l,"H2",{});var f=E(e);t=v(f,"DMSLauncher"),f.forEach(u),n=M(l),s=C(l,"P",{});var m=E(s);a=v(m,"An automatic modded client updater and launcher for Minecraft."),m.forEach(u)},m(l,f){h(l,e,f),w(e,t),h(l,n,f),h(l,s,f),w(s,a)},p:q,d(l){l&&u(e),l&&u(n),l&&u(s)}}}function Ke(r){let e,t;return{c(){e=y("img"),this.h()},l(n){e=C(n,"IMG",{src:!0,alt:!0,slot:!0}),this.h()},h(){W(e.src,t="/images/dmslauncher.png")||k(e,"src",t),k(e,"alt","DMSLauncher screenshot"),k(e,"slot","image")},m(n,s){h(n,e,s)},p:q,d(n){n&&u(e)}}}function Qe(r){let e,t,n,s,a;return{c(){e=y("h2"),t=b("SwitchPresence"),n=N(),s=y("p"),a=b(`A cross-platform desktop application that allows you to display Nintendo
    Switch games as your current activity on Discord.`)},l(l){e=C(l,"H2",{});var f=E(e);t=v(f,"SwitchPresence"),f.forEach(u),n=M(l),s=C(l,"P",{});var m=E(s);a=v(m,`A cross-platform desktop application that allows you to display Nintendo
    Switch games as your current activity on Discord.`),m.forEach(u)},m(l,f){h(l,e,f),w(e,t),h(l,n,f),h(l,s,f),w(s,a)},p:q,d(l){l&&u(e),l&&u(n),l&&u(s)}}}function Xe(r){let e,t;return{c(){e=y("img"),this.h()},l(n){e=C(n,"IMG",{src:!0,alt:!0,slot:!0}),this.h()},h(){W(e.src,t="/images/switchpresence.png")||k(e,"src",t),k(e,"alt","SwitchPresence logo"),k(e,"slot","image")},m(n,s){h(n,e,s)},p:q,d(n){n&&u(e)}}}function Ze(r){let e;return{c(){e=b("A bit about me.")},l(t){e=v(t,"A bit about me.")},m(t,n){h(t,e,n)},d(t){t&&u(e)}}}function xe(r){let e;return{c(){e=b("projects")},l(t){e=v(t,"projects")},m(t,n){h(t,e,n)},d(t){t&&u(e)}}}function et(r){let e,t,n,s;return t=new z({props:{to:"/projects",$$slots:{default:[xe]},$$scope:{ctx:r}}}),{c(){e=b(`Hey, I'm Dilan, a full-stack software engineer and third-year undergraduate
    student at Northwestern University studying computer science. I've been
    coding for over 10 years, working on
    `),R(t.$$.fragment),n=b(`
    ranging anywhere from desktop and mobile applications to developer tools to websites
    and web APIs to video games and game mods, many of which you'll find here on
    my site.`)},l(a){e=v(a,`Hey, I'm Dilan, a full-stack software engineer and third-year undergraduate
    student at Northwestern University studying computer science. I've been
    coding for over 10 years, working on
    `),T(t.$$.fragment,a),n=v(a,`
    ranging anywhere from desktop and mobile applications to developer tools to websites
    and web APIs to video games and game mods, many of which you'll find here on
    my site.`)},m(a,l){h(a,e,l),j(t,a,l),h(a,n,l),s=!0},p(a,l){const f={};l&1&&(f.$$scope={dirty:l,ctx:a}),t.$set(f)},i(a){s||(S(t.$$.fragment,a),s=!0)},o(a){H(t.$$.fragment,a),s=!1},d(a){a&&u(e),G(t,a),a&&u(n)}}}function tt(r){let e;return{c(){e=b("CRACO")},l(t){e=v(t,"CRACO")},m(t,n){h(t,e,n)},d(t){t&&u(e)}}}function nt(r){let e,t,n,s;return t=new z({props:{to:"https://github.com/dilanx/craco",$$slots:{default:[tt]},$$scope:{ctx:r}}}),{c(){e=b(`I'm a big proponent of open source software, with my most notable project
    being `),R(t.$$.fragment),n=b(`, a mainstream
    library for React development.`)},l(a){e=v(a,`I'm a big proponent of open source software, with my most notable project
    being `),T(t.$$.fragment,a),n=v(a,`, a mainstream
    library for React development.`)},m(a,l){h(a,e,l),j(t,a,l),h(a,n,l),s=!0},p(a,l){const f={};l&1&&(f.$$scope={dirty:l,ctx:a}),t.$set(f)},i(a){s||(S(t.$$.fragment,a),s=!0)},o(a){H(t.$$.fragment,a),s=!1},d(a){a&&u(e),G(t,a),a&&u(n)}}}function st(r){let e;return{c(){e=b("Paper")},l(t){e=v(t,"Paper")},m(t,n){h(t,e,n)},d(t){t&&u(e)}}}function lt(r){let e;return{c(){e=b("Mayfest Productions")},l(t){e=v(t,"Mayfest Productions")},m(t,n){h(t,e,n)},d(t){t&&u(e)}}}function at(r){let e;return{c(){e=b("Dillo Day")},l(t){e=v(t,"Dillo Day")},m(t,n){h(t,e,n)},d(t){t&&u(e)}}}function rt(r){let e;return{c(){e=b("WildHacks")},l(t){e=v(t,"WildHacks")},m(t,n){h(t,e,n)},d(t){t&&u(e)}}}function ot(r){let e;return{c(){e=b("Northwestern University Drumline")},l(t){e=v(t,"Northwestern University Drumline")},m(t,n){h(t,e,n)},d(t){t&&u(e)}}}function it(r){let e,t,n,s,a,l,f,m,_,g,c,$;return t=new z({props:{to:"/paper",$$slots:{default:[st]},$$scope:{ctx:r}}}),s=new z({props:{to:"https://dilloday.com/",$$slots:{default:[lt]},$$scope:{ctx:r}}}),l=new z({props:{to:"https://en.wikipedia.org/wiki/Dillo_Day",$$slots:{default:[at]},$$scope:{ctx:r}}}),m=new z({props:{to:"https://www.wildhacks.net",$$slots:{default:[rt]},$$scope:{ctx:r}}}),g=new z({props:{to:"https://www.nudrumline.org",$$slots:{default:[ot]},$$scope:{ctx:r}}}),{c(){e=b("At Northwestern, I created "),R(t.$$.fragment),n=b(`, a course planning
    and scheduling tool sponsored by the university and used by thousands of
    students. I'm on the tech team for
    `),R(s.$$.fragment),a=b(`, the
    organization behind `),R(l.$$.fragment),f=b(`. I'm also the Director of Web Development for
    `),R(m.$$.fragment),_=b(`, Northwestern's
    largest hackathon. I serve as an undergraduate teaching assistant for a
    variety of computer science courses. I'm also a member of the `),R(g.$$.fragment),c=b(".")},l(i){e=v(i,"At Northwestern, I created "),T(t.$$.fragment,i),n=v(i,`, a course planning
    and scheduling tool sponsored by the university and used by thousands of
    students. I'm on the tech team for
    `),T(s.$$.fragment,i),a=v(i,`, the
    organization behind `),T(l.$$.fragment,i),f=v(i,`. I'm also the Director of Web Development for
    `),T(m.$$.fragment,i),_=v(i,`, Northwestern's
    largest hackathon. I serve as an undergraduate teaching assistant for a
    variety of computer science courses. I'm also a member of the `),T(g.$$.fragment,i),c=v(i,".")},m(i,d){h(i,e,d),j(t,i,d),h(i,n,d),j(s,i,d),h(i,a,d),j(l,i,d),h(i,f,d),j(m,i,d),h(i,_,d),j(g,i,d),h(i,c,d),$=!0},p(i,d){const A={};d&1&&(A.$$scope={dirty:d,ctx:i}),t.$set(A);const O={};d&1&&(O.$$scope={dirty:d,ctx:i}),s.$set(O);const I={};d&1&&(I.$$scope={dirty:d,ctx:i}),l.$set(I);const P={};d&1&&(P.$$scope={dirty:d,ctx:i}),m.$set(P);const o={};d&1&&(o.$$scope={dirty:d,ctx:i}),g.$set(o)},i(i){$||(S(t.$$.fragment,i),S(s.$$.fragment,i),S(l.$$.fragment,i),S(m.$$.fragment,i),S(g.$$.fragment,i),$=!0)},o(i){H(t.$$.fragment,i),H(s.$$.fragment,i),H(l.$$.fragment,i),H(m.$$.fragment,i),H(g.$$.fragment,i),$=!1},d(i){i&&u(e),G(t,i),i&&u(n),G(s,i),i&&u(a),G(l,i),i&&u(f),G(m,i),i&&u(_),G(g,i),i&&u(c)}}}function ft(r){let e;return{c(){e=b("Minecraft worlds")},l(t){e=v(t,"Minecraft worlds")},m(t,n){h(t,e,n)},d(t){t&&u(e)}}}function ut(r){let e,t,n,s,a,l,f,m,_,g;return m=new z({props:{to:"/minecraft-maps",$$slots:{default:[ft]},$$scope:{ctx:r}}}),{c(){e=b(`I founded and used to manage
    `),t=y("span"),n=b("Voidstone Software"),s=b(`, an online store dedicated
    to the development of private, custom game modifications on request. I'm
    also the founder and former president of the
    `),a=y("span"),l=b("Software and Game Development Group"),f=b(`
    at Northwestern University, one of the largest student-run computer science organizations
    on campus focusing on the collaborative development of software applications
    and interactive entertainment. Outside of computer science, I have a strong interest
    in tech, adventure and story-driven video games, and music (fun fact: I used
    to play a lot of Minecraft and made a bunch of `),R(m.$$.fragment),_=b(" played on by popular YouTubers like CaptainSparklez, DanTDM, and more)."),this.h()},l(c){e=v(c,`I founded and used to manage
    `),t=C(c,"SPAN",{class:!0});var $=E(t);n=v($,"Voidstone Software"),$.forEach(u),s=v(c,`, an online store dedicated
    to the development of private, custom game modifications on request. I'm
    also the founder and former president of the
    `),a=C(c,"SPAN",{class:!0});var i=E(a);l=v(i,"Software and Game Development Group"),i.forEach(u),f=v(c,`
    at Northwestern University, one of the largest student-run computer science organizations
    on campus focusing on the collaborative development of software applications
    and interactive entertainment. Outside of computer science, I have a strong interest
    in tech, adventure and story-driven video games, and music (fun fact: I used
    to play a lot of Minecraft and made a bunch of `),T(m.$$.fragment,c),_=v(c," played on by popular YouTubers like CaptainSparklez, DanTDM, and more)."),this.h()},h(){k(t,"class","s medium"),k(a,"class","s medium")},m(c,$){h(c,e,$),h(c,t,$),w(t,n),h(c,s,$),h(c,a,$),w(a,l),h(c,f,$),j(m,c,$),h(c,_,$),g=!0},p(c,$){const i={};$&1&&(i.$$scope={dirty:$,ctx:c}),m.$set(i)},i(c){g||(S(m.$$.fragment,c),g=!0)},o(c){H(m.$$.fragment,c),g=!1},d(c){c&&u(e),c&&u(t),c&&u(s),c&&u(a),c&&u(f),G(m,c),c&&u(_)}}}function ct(r){let e;return{c(){e=b("get in touch")},l(t){e=v(t,"get in touch")},m(t,n){h(t,e,n)},d(t){t&&u(e)}}}function mt(r){let e,t,n,s;return t=new z({props:{to:"/contact",$$slots:{default:[ct]},$$scope:{ctx:r}}}),{c(){e=b("Feel free to "),R(t.$$.fragment),n=b("!")},l(a){e=v(a,"Feel free to "),T(t.$$.fragment,a),n=v(a,"!")},m(a,l){h(a,e,l),j(t,a,l),h(a,n,l),s=!0},p(a,l){const f={};l&1&&(f.$$scope={dirty:l,ctx:a}),t.$set(f)},i(a){s||(S(t.$$.fragment,a),s=!0)},o(a){H(t.$$.fragment,a),s=!1},d(a){a&&u(e),G(t,a),a&&u(n)}}}function dt(r){let e,t,n,s,a,l,f,m,_,g,c,$;return e=new Ae({props:{h2:!0,large:!0,class:"s left",anchor:"about",$$slots:{default:[Ze]},$$scope:{ctx:r}}}),n=new Q({props:{sm:!0,$$slots:{default:[et]},$$scope:{ctx:r}}}),a=new Q({props:{sm:!0,$$slots:{default:[nt]},$$scope:{ctx:r}}}),f=new Q({props:{sm:!0,$$slots:{default:[it]},$$scope:{ctx:r}}}),_=new Q({props:{sm:!0,$$slots:{default:[ut]},$$scope:{ctx:r}}}),c=new Q({props:{sm:!0,$$slots:{default:[mt]},$$scope:{ctx:r}}}),{c(){R(e.$$.fragment),t=N(),R(n.$$.fragment),s=N(),R(a.$$.fragment),l=N(),R(f.$$.fragment),m=N(),R(_.$$.fragment),g=N(),R(c.$$.fragment)},l(i){T(e.$$.fragment,i),t=M(i),T(n.$$.fragment,i),s=M(i),T(a.$$.fragment,i),l=M(i),T(f.$$.fragment,i),m=M(i),T(_.$$.fragment,i),g=M(i),T(c.$$.fragment,i)},m(i,d){j(e,i,d),h(i,t,d),j(n,i,d),h(i,s,d),j(a,i,d),h(i,l,d),j(f,i,d),h(i,m,d),j(_,i,d),h(i,g,d),j(c,i,d),$=!0},p(i,d){const A={};d&1&&(A.$$scope={dirty:d,ctx:i}),e.$set(A);const O={};d&1&&(O.$$scope={dirty:d,ctx:i}),n.$set(O);const I={};d&1&&(I.$$scope={dirty:d,ctx:i}),a.$set(I);const P={};d&1&&(P.$$scope={dirty:d,ctx:i}),f.$set(P);const o={};d&1&&(o.$$scope={dirty:d,ctx:i}),_.$set(o);const p={};d&1&&(p.$$scope={dirty:d,ctx:i}),c.$set(p)},i(i){$||(S(e.$$.fragment,i),S(n.$$.fragment,i),S(a.$$.fragment,i),S(f.$$.fragment,i),S(_.$$.fragment,i),S(c.$$.fragment,i),$=!0)},o(i){H(e.$$.fragment,i),H(n.$$.fragment,i),H(a.$$.fragment,i),H(f.$$.fragment,i),H(_.$$.fragment,i),H(c.$$.fragment,i),$=!1},d(i){G(e,i),i&&u(t),G(n,i),i&&u(s),G(a,i),i&&u(l),G(f,i),i&&u(m),G(_,i),i&&u(g),G(c,i)}}}function pt(r){let e,t,n,s,a,l,f,m,_,g,c,$,i,d,A,O,I,P;return e=new Se({props:{description:"Full-stack software developer"}}),n=new Be({props:{title:"Hey there, I'm Dilan.",$$slots:{default:[qe]},$$scope:{ctx:r}}}),a=new X({props:{backgroundImage:"https://dilan.blog/img/preview/how-paper-manages-hundreds-of-thousands-of-lines-of-data.jpg",darkenBackgroundImage:!0,links:[De("how-paper-manages-hundreds-of-thousands-of-lines-of-data")],dark:!0,blog:7,mini:!0,icon:"fas fa-book-bookmark",$$slots:{default:[Ue]},$$scope:{ctx:r}}}),f=new X({props:{backgroundColor:"#0c5041",links:[{to:"https://craco.js.org",newTab:!0,icon:"fas fa-book",text:"Documentation"},Z("dilanx/craco"),{to:"https://www.npmjs.com/package/@craco/craco",newTab:!0,icon:"fab fa-npm",text:"npm"}],linkColor:"#b5f3e6",labels:[{to:"https://npmjs.com/package/@craco/craco",image:"https://img.shields.io/npm/v/@craco/craco.svg",alt:"CRACO npm version"},{to:"https://npmjs.com/package/@craco/craco",image:"https://img.shields.io/npm/dm/@craco/craco.svg",alt:"CRACO npm downloads"},{to:"https://github.com/dilanx/craco",image:"https://img.shields.io/github/stars/dilanx/craco?color=red",alt:"CRACO GitHub stars"}],dark:!0,featured:!0,$$slots:{image:[We],default:[ze]},$$scope:{ctx:r}}}),_=new X({props:{backgroundColor:"#262626",links:[Ee("paper"),Pe("Use Paper","https://www.paper.nu"),Z("dilanx/paper.nu"),{to:"https://www.mccormick.northwestern.edu/news/articles/2022/02/undergraduate-launches-course-planning-web-application/",newTab:!0,icon:"fas fa-newspaper",sublink:!0,text:"Read the official article by Northwestern Engineering!"}],linkColor:"#ffffff",labels:[{to:"https://github.com/dilanx/plan-northwestern",image:"https://img.shields.io/github/stars/dilanx/plan-northwestern?color=red",alt:"paper.nu GitHub stars"}],dark:!0,featured:!0,$$slots:{image:[Je],default:[Fe]},$$scope:{ctx:r}}}),c=new X({props:{backgroundImage:"/images/mcshaders1.jpg",links:[Z("dilanx/dmslauncher")],linkColor:"#ffff8f",dark:!0,featured:!0,$$slots:{image:[Ke],default:[Ye]},$$scope:{ctx:r}}}),i=new X({props:{backgroundImage:"/images/discord.png",links:[Z("dilanx/switchpresence")],linkColor:"#b8beff",dark:!0,featured:!0,$$slots:{image:[Xe],default:[Qe]},$$scope:{ctx:r}}}),A=new we({props:{links:[{to:"/projects",text:"See all projects"}]}}),I=new Ne({props:{ws:!0,hs:!0,$$slots:{default:[dt]},$$scope:{ctx:r}}}),{c(){R(e.$$.fragment),t=N(),R(n.$$.fragment),s=N(),R(a.$$.fragment),l=N(),R(f.$$.fragment),m=N(),R(_.$$.fragment),g=N(),R(c.$$.fragment),$=N(),R(i.$$.fragment),d=N(),R(A.$$.fragment),O=N(),R(I.$$.fragment)},l(o){T(e.$$.fragment,o),t=M(o),T(n.$$.fragment,o),s=M(o),T(a.$$.fragment,o),l=M(o),T(f.$$.fragment,o),m=M(o),T(_.$$.fragment,o),g=M(o),T(c.$$.fragment,o),$=M(o),T(i.$$.fragment,o),d=M(o),T(A.$$.fragment,o),O=M(o),T(I.$$.fragment,o)},m(o,p){j(e,o,p),h(o,t,p),j(n,o,p),h(o,s,p),j(a,o,p),h(o,l,p),j(f,o,p),h(o,m,p),j(_,o,p),h(o,g,p),j(c,o,p),h(o,$,p),j(i,o,p),h(o,d,p),j(A,o,p),h(o,O,p),j(I,o,p),P=!0},p(o,[p]){const V={};p&1&&(V.$$scope={dirty:p,ctx:o}),n.$set(V);const L={};p&1&&(L.$$scope={dirty:p,ctx:o}),a.$set(L);const D={};p&1&&(D.$$scope={dirty:p,ctx:o}),f.$set(D);const F={};p&1&&(F.$$scope={dirty:p,ctx:o}),_.$set(F);const J={};p&1&&(J.$$scope={dirty:p,ctx:o}),c.$set(J);const Y={};p&1&&(Y.$$scope={dirty:p,ctx:o}),i.$set(Y);const K={};p&1&&(K.$$scope={dirty:p,ctx:o}),I.$set(K)},i(o){P||(S(e.$$.fragment,o),S(n.$$.fragment,o),S(a.$$.fragment,o),S(f.$$.fragment,o),S(_.$$.fragment,o),S(c.$$.fragment,o),S(i.$$.fragment,o),S(A.$$.fragment,o),S(I.$$.fragment,o),P=!0)},o(o){H(e.$$.fragment,o),H(n.$$.fragment,o),H(a.$$.fragment,o),H(f.$$.fragment,o),H(_.$$.fragment,o),H(c.$$.fragment,o),H(i.$$.fragment,o),H(A.$$.fragment,o),H(I.$$.fragment,o),P=!1},d(o){G(e,o),o&&u(t),G(n,o),o&&u(s),G(a,o),o&&u(l),G(f,o),o&&u(m),G(_,o),o&&u(g),G(c,o),o&&u($),G(i,o),o&&u(d),G(A,o),o&&u(O),G(I,o)}}}class It extends ee{constructor(e){super(),te(this,e,null,pt,ne,{})}}export{It as default};
