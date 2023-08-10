var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){return null==t?"":t}function l(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.data!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}let h;function v(t){h=t}const _=[],b=[];let y=[];const x=[],w=Promise.resolve();let k=!1;function z(t){y.push(t)}const j=new Set;let E=0;function L(){if(0!==E)return;const t=h;do{try{for(;E<_.length;){const t=_[E];E++,v(t),q(t.$$)}}catch(t){throw _.length=0,E=0,t}for(v(null),_.length=0,E=0;b.length;)b.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];j.has(e)||(j.add(e),e())}y.length=0}while(_.length);for(;x.length;)x.pop()();k=!1,j.clear(),v(t)}function q(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const O=new Set;let A;function C(){A={r:0,c:[],p:A}}function M(){A.r||o(A.c),A=A.p}function N(t,e){t&&t.i&&(O.delete(t),t.i(e))}function S(t,e,n,o){if(t&&t.o){if(O.has(t))return;O.add(t),A.c.push((()=>{O.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function T(t){t&&t.c()}function B(t,n,r,c){const{fragment:l,after_update:a}=t.$$;l&&l.m(n,r),c||z((()=>{const n=t.$$.on_mount.map(e).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(z)}function H(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];y.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),y=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(_.push(t),k||(k=!0,w.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(e,s,r,c,l,a,i,d=[-1]){const f=h;v(e);const p=e.$$={fragment:null,ctx:[],props:a,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:s.target||f.$$.root};i&&i(p.root);let $=!1;if(p.ctx=r?r(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),$&&D(e,t)),n})):[],p.update(),$=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();s.intro&&N(e.$$.fragment),B(e,s.target,s.anchor,s.customElement),L()}v(f)}class J{$destroy(){H(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function P(e){let n,o,s;return{c(){n=i("button"),n.textContent="🔊",$(n,"class","svelte-eb3889")},m(t,r){a(t,n,r),o||(s=p(n,"click",e[0]),o=!0)},p:t,i:t,o:t,d(t){t&&u(n),o=!1,s()}}}function R(t,e,n){let o,{audio:s}=e;return t.$$set=t=>{"audio"in t&&n(1,s=t.audio)},t.$$.update=()=>{2&t.$$.dirty&&(o=s.jan_lakuse?new Audio(s.jan_lakuse):s.kala_asi?new Audio(s.kala_asi):void 0)},[()=>{o&&o.play()},s]}class X extends J{constructor(t){super(),G(this,t,R,P,r,{audio:1})}}function F(t){let e,n,o,s;return o=new X({props:{audio:t[1]}}),{c(){e=i("span"),e.textContent="·",n=f(),T(o.$$.fragment)},m(t,r){a(t,e,r),a(t,n,r),B(o,t,r),s=!0},p(t,e){const n={};2&e&&(n.audio=t[1]),o.$set(n)},i(t){s||(N(o.$$.fragment,t),s=!0)},o(t){S(o.$$.fragment,t),s=!1},d(t){t&&u(e),t&&u(n),H(o,t)}}}function I(t){let e,n,o,s,r,p,m,h,v,_,b,y,x,w,k,z,j,E,L,q,O,A,T,B,H,D,G,J=t[0].word+"",P=t[0].usage_category+"",R=t[0].book+"",X=t[0].def.en+"",I=t[0].audio&&F(t);return{c(){e=i("div"),n=i("div"),o=d(t[2]),s=f(),r=i("div"),p=i("div"),m=i("dt"),h=d(J),v=f(),_=i("span"),b=i("span"),y=d(P),x=f(),w=i("span"),w.textContent="·",k=f(),z=i("span"),j=d(R),E=f(),I&&I.c(),L=f(),q=i("span"),q.textContent="·",O=f(),A=i("span"),A.textContent="more",T=f(),B=i("dd"),H=d(X),$(n,"class","sp svelte-zcnotl"),$(m,"class","svelte-zcnotl"),$(p,"class","word_info svelte-zcnotl"),$(B,"class","svelte-zcnotl"),$(r,"class","word_main svelte-zcnotl"),$(e,"class",D=c("entry "+t[0].usage_category)+" svelte-zcnotl")},m(t,c){a(t,e,c),l(e,n),l(n,o),l(e,s),l(e,r),l(r,p),l(p,m),l(m,h),l(p,v),l(p,_),l(_,b),l(b,y),l(_,x),l(_,w),l(_,k),l(_,z),l(z,j),l(_,E),I&&I.m(_,null),l(_,L),l(_,q),l(_,O),l(_,A),l(r,T),l(r,B),l(B,H),G=!0},p(t,[n]){(!G||4&n)&&g(o,t[2]),(!G||1&n)&&J!==(J=t[0].word+"")&&g(h,J),(!G||1&n)&&P!==(P=t[0].usage_category+"")&&g(y,P),(!G||1&n)&&R!==(R=t[0].book+"")&&g(j,R),t[0].audio?I?(I.p(t,n),1&n&&N(I,1)):(I=F(t),I.c(),N(I,1),I.m(_,L)):I&&(C(),S(I,1,1,(()=>{I=null})),M()),(!G||1&n)&&X!==(X=t[0].def.en+"")&&g(H,X),(!G||1&n&&D!==(D=c("entry "+t[0].usage_category)+" svelte-zcnotl"))&&$(e,"class",D)},i(t){G||(N(I),G=!0)},o(t){S(I),G=!1},d(t){t&&u(e),I&&I.d()}}}function K(t,e,n){let o,s,{word:r}=e;return t.$$set=t=>{"word"in t&&n(0,r=t.word)},t.$$.update=()=>{1&t.$$.dirty&&n(2,o=r.sitelen_pona?r.sitelen_pona.split(" ")[0]:""),1&t.$$.dirty&&n(1,s=r.audio)},[r,s,o]}class Q extends J{constructor(t){super(),G(this,t,K,I,r,{word:0})}}function U(e){let n,o,s,r,c,d,g,h,v,_,b;return{c(){n=i("nav"),o=i("div"),o.innerHTML='<img src="./assets/icon.png" alt="lipu Linku" class="svelte-1m900z6"/>\n        lipu Linku',s=f(),r=i("div"),c=i("input"),d=f(),g=i("button"),g.textContent="Back to Dictionary",h=f(),v=i("div"),v.innerHTML='<label id="checkbox_lightmode_wrapper" class="svelte-1m900z6"><input type="checkbox" id="checkbox_lightmode" class="svelte-1m900z6"/> \n          <img src="./assets/suno.png" alt="Light Mode" class="svelte-1m900z6"/></label> \n\n        <label id="language_selector_wrapper" title="Select Language" class="svelte-1m900z6"><select id="language_selector" class="main_input svelte-1m900z6" onchange="language_select_changed(this)"></select> \n          <img src="./assets/world.png" alt="Select language" class="svelte-1m900z6"/></label> \n        <a href="about" title="About Linku" class="svelte-1m900z6"><img src="./assets/ijo-a.png" alt="About Linku" class="svelte-1m900z6"/></a>',$(o,"class","logo svelte-1m900z6"),$(c,"id","searchbar"),$(c,"class","searchbar main_input svelte-1m900z6"),$(c,"placeholder","nimi"),$(c,"autocapitalize","off"),$(c,"autocomplete","off"),$(c,"autocorrect","off"),$(c,"spellcheck","false"),$(g,"id","normal_mode_button"),$(g,"onclick","normal_mode()"),$(g,"class","svelte-1m900z6"),$(r,"class","search_container svelte-1m900z6"),$(v,"class","svelte-1m900z6"),$(n,"class","svelte-1m900z6")},m(t,u){a(t,n,u),l(n,o),l(n,s),l(n,r),l(r,c),m(c,e[0]),l(r,d),l(r,g),l(n,h),l(n,v),_||(b=p(c,"input",e[1]),_=!0)},p(t,[e]){1&e&&c.value!==t[0]&&m(c,t[0])},i:t,o:t,d(t){t&&u(n),_=!1,b()}}}function V(t,e,n){let{query:o}=e;return t.$$set=t=>{"query"in t&&n(0,o=t.query)},t.$$.update=()=>{1&t.$$.dirty&&console.log("query changed to",o)},[o,function(){o=this.value,n(0,o)}]}class W extends J{constructor(t){super(),G(this,t,V,U,r,{query:0})}}function Y(t,e,n){const o=t.slice();return o[6]=e[n][0],o[7]=e[n][1],o[6]=n,o}function Z(t){let e,n,o;return e=new Q({props:{word:t[7]}}),{c(){T(e.$$.fragment),n=f()},m(t,s){B(e,t,s),a(t,n,s),o=!0},p(t,n){const o={};2&n&&(o.word=t[7]),e.$set(o)},i(t){o||(N(e.$$.fragment,t),o=!0)},o(t){S(e.$$.fragment,t),o=!1},d(t){H(e,t),t&&u(n)}}}function tt(t){let e,n,o,s,r,c;function d(e){t[2](e)}let p={};void 0!==t[0]&&(p.query=t[0]),n=new W({props:p}),b.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(n,"query",d)));let g=Object.entries(t[1]),m=[];for(let e=0;e<g.length;e+=1)m[e]=Z(Y(t,g,e));const h=t=>S(m[t],1,1,(()=>{m[t]=null}));return{c(){e=i("main"),T(n.$$.fragment),s=f(),r=i("div");for(let t=0;t<m.length;t+=1)m[t].c();$(r,"class","width_limiter svelte-11141vo"),$(e,"class","svelte-11141vo")},m(t,o){a(t,e,o),B(n,e,null),l(e,s),l(e,r);for(let t=0;t<m.length;t+=1)m[t]&&m[t].m(r,null);c=!0},p(t,[e]){const s={};var c;if(!o&&1&e&&(o=!0,s.query=t[0],c=()=>o=!1,x.push(c)),n.$set(s),2&e){let n;for(g=Object.entries(t[1]),n=0;n<g.length;n+=1){const o=Y(t,g,n);m[n]?(m[n].p(o,e),N(m[n],1)):(m[n]=Z(o),m[n].c(),N(m[n],1),m[n].m(r,null))}for(C(),n=g.length;n<m.length;n+=1)h(n);M()}},i(t){if(!c){N(n.$$.fragment,t);for(let t=0;t<g.length;t+=1)N(m[t]);c=!0}},o(t){S(n.$$.fragment,t),m=m.filter(Boolean);for(let t=0;t<m.length;t+=1)S(m[t]);c=!1},d(t){t&&u(e),H(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(m,t)}}}function et(t,e,n){let o;const s=JSON.parse((r="https://linku.la/jasima/data.json",(c=new XMLHttpRequest).open("GET",r,!1),c.send(null),c.responseText));var r,c;const l=s.data;s.languages;let a="";return t.$$.update=()=>{1&t.$$.dirty&&n(1,o=function(t,e){const n=Object.entries(t).filter((([t,n])=>function(t,e){return t.word.includes(e)}(n,e)));return Object.fromEntries(n)}(l,a))},[a,o,function(t){a=t,n(0,a)}]}return new class extends J{constructor(t){super(),G(this,t,et,tt,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map