function t(){}function n(t,n){for(const o in n)t[o]=n[o];return t}function o(t){return t()}function e(){return Object.create(null)}function i(t){t.forEach(o)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n,o){if(t){const e=f(t,n,o);return t[0](e)}}function f(t,o,e){return t[1]?n({},n(o.$$scope.ctx,t[1](e?e(o):{}))):o.$$scope.ctx}function a(t,o,e,i){return t[1]?n({},n(o.$$scope.changed||{},t[1](i?i(e):{}))):o.$$scope.changed||{}}function u(t,n){t.appendChild(n)}function l(t,n,o){t.insertBefore(n,o||null)}function $(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function h(){return p("")}function g(t,n){n=""+n,t.data!==n&&(t.data=n)}let v;function b(t){v=t}function y(){if(!v)throw new Error("Function called outside component initialization");return v}const x=[],_=Promise.resolve();let k=!1;const w=[],N=[],I=[];function E(t){N.push(t)}function j(){const t=new Set;do{for(;x.length;){const t=x.shift();b(t),M(t.$$)}for(;w.length;)w.shift()();for(;N.length;){const n=N.pop();t.has(n)||(n(),t.add(n))}}while(x.length);for(;I.length;)I.pop()();k=!1}function M(t){t.fragment&&(t.update(t.dirty),i(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(E))}let O;function C(){O={remaining:0,callbacks:[]}}function S(){O.remaining||i(O.callbacks)}function T(t){O.callbacks.push(t)}function A(t,n){T(()=>{!function(t,n){t.d(1),n.delete(t.key)}(t,n)}),t.o(1)}function B(t,n,e){const{fragment:c,on_mount:s,on_destroy:f,after_render:a}=t.$$;c.m(n,e),E(()=>{const n=s.map(o).filter(r);f?f.push(...n):i(n),t.$$.on_mount=[]}),a.forEach(E)}function L(t,n){t.$$.dirty||(x.push(t),k||(k=!0,_.then(j)),t.$$.dirty=e()),t.$$.dirty[n]=!0}function q(n,o,r,c,s,f){const a=v;b(n);const u=o.props||{},l=n.$$={fragment:null,ctx:null,props:f,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(a?a.$$.context:[]),callbacks:e(),dirty:null};let $=!1;l.ctx=r?r(n,u,(t,o)=>{l.ctx&&s(l.ctx[t],l.ctx[t]=o)&&(l.bound[t]&&l.bound[t](o),$&&L(n,t))}):u,l.update(),$=!0,i(l.before_render),l.fragment=c(l.ctx),o.target&&(o.hydrate?l.fragment.l(function(t){return Array.from(t.childNodes)}(o.target)):l.fragment.c(),o.intro&&n.$$.fragment.i&&n.$$.fragment.i(),B(n,o.target,o.anchor),j()),b(a)}class z{$destroy(){var n,o;o=!0,(n=this).$$&&(i(n.$$.on_destroy),n.$$.fragment.d(o),n.$$.on_destroy=n.$$.fragment=null,n.$$.ctx={}),this.$destroy=t}$on(t,n){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(){}}const F={};var P=()=>(function(t){return y().$$.context.get(t)})(F);function D(t){var n,o,e,i,r,c,h,v,b,y=t.notification.text,x=t.notification.text;const _=t.$$slots.default,k=s(_,t,null),w=t.$$slots.default,N=s(w,t,null);return{c(){var s,f,a,u;n=d("div"),o=d("div"),k||(e=p(y)),k&&k.c(),i=m(),N||(r=p(x)),N&&N.c(),c=m(),(h=d("button")).textContent="×",o.className="notification-context",n.className="notification",s=h,f="click",a=t.removeNotifications,s.addEventListener(f,a,u),b=()=>s.removeEventListener(f,a,u)},l(t){k&&k.l(div0_nodes),N&&N.l(div0_nodes)},m(t,s){l(t,n,s),u(n,o),k?k.m(o,null):u(o,e),u(o,i),N?N.m(o,null):u(o,r),u(n,c),u(n,h),v=!0},p(t,n){k||v&&!t.notification||y===(y=n.notification.text)||g(e,y),k&&k.p&&t.$$scope&&k.p(a(_,n,t,null),f(_,n,null)),N||v&&!t.notification||x===(x=n.notification.text)||g(r,x),N&&N.p&&t.$$scope&&N.p(a(w,n,t,null),f(w,n,null))},i(t){v||(k&&k.i&&k.i(t),N&&N.i&&N.i(t),v=!0)},o(t){k&&k.o&&k.o(t),N&&N.o&&N.o(t),v=!1},d(t){t&&$(n),k&&k.d(t),N&&N.d(t),b()}}}function G(t,n,o){let{notification:e=null}=n;const{id:i,removeAfter:r}=e,{remove:c}=P(),s=()=>c(i),f=setTimeout(s,r||4e3);var a;a=()=>{f&&clearTimeout(f)},y().$$.on_destroy.push(a);let{$$slots:u={},$$scope:l}=n;return t.$set=t=>{"notification"in t&&o("notification",e=t.notification),"$$scope"in t&&o("$$scope",l=t.$$scope)},{notification:e,removeNotifications:s,$$slots:u,$$scope:l}}class H extends z{constructor(t){super(),q(this,t,G,D,c,["notification"])}}var J=(()=>{const{subscribe:n,set:o,update:e}=function(n,o=t){let e;const i=[];function r(t){if(c(n,t)){if(n=t,!e)return;i.forEach(t=>t[1]()),i.forEach(t=>t[0](n))}}return{set:r,update:function(t){r(t(n))},subscribe:function(c,s=t){const f=[c,s];return i.push(f),1===i.length&&(e=o(r)||t),c(n),()=>{const t=i.indexOf(f);-1!==t&&i.splice(t,1),0===i.length&&e()}}}}([]);return{subscribe:n,add:t=>((t,n)=>{t&&"object"==typeof t&&(!t||t.id||t.text)&&n(n=>[...n,t])})(t,e),remove:t=>((t,n)=>n(n=>n.filter(n=>n.id!==t)))(t,e),clear:()=>(t=>t([]))(o)}})();function K(t,n,o){const e=Object.create(t);return e.notification=n[o],e}function Q(t,n,o){const e=Object.create(t);return e.position=n[o],e}function R(t){var n,o,e,i,r=[V,U],c=[];function s(t){return t.notificationItem?0:1}return n=s(t),o=c[n]=r[n](t),{c(){o.c(),e=h()},m(t,o){c[n].m(t,o),l(t,e,o),i=!0},p(t,i){var f=n;(n=s(i))===f?c[n].p(t,i):(C(),T(()=>{c[f].d(1),c[f]=null}),o.o(1),S(),(o=c[n])||(o=c[n]=r[n](i)).c(),o.i(1),o.m(e.parentNode,e))},i(t){i||(o&&o.i(),i=!0)},o(t){o&&o.o(),i=!1},d(t){c[n].d(t),t&&$(e)}}}function U(t){var n,o=new H({props:{notification:t.notification}});return{c(){o.$$.fragment.c()},m(t,e){B(o,t,e),n=!0},p(t,n){var e={};t.$store&&(e.notification=n.notification),o.$set(e)},i(t){n||(o.$$.fragment.i(t),n=!0)},o(t){o.$$.fragment.o(t),n=!1},d(t){o.$destroy(t)}}}function V(t){var n,o,e=t.notificationItem;function i(t){return{props:{notification:t.notification}}}if(e)var r=new e(i(t));return{c(){r&&r.$$.fragment.c(),n=h()},m(t,e){r&&B(r,t,e),l(t,n,e),o=!0},p(t,o){var c={};if(t.$store&&(c.notification=o.notification),e!==(e=o.notificationItem)){if(r){C();const t=r;T(()=>{t.$destroy()}),t.$$.fragment.o(1),S()}e?((r=new e(i(o))).$$.fragment.c(),r.$$.fragment.i(1),B(r,n.parentNode,n)):r=null}else e&&r.$set(c)},i(t){o||(r&&r.$$.fragment.i(t),o=!0)},o(t){r&&r.$$.fragment.o(t),o=!1},d(t){t&&$(n),r&&r.$destroy(t)}}}function W(t,n){var o,e,i,r=n.notification.position===n.position&&R(n);return{key:t,first:null,c(){o=h(),r&&r.c(),e=h(),this.first=o},m(t,n){l(t,o,n),r&&r.m(t,n),l(t,e,n),i=!0},p(t,n){n.notification.position===n.position?r?(r.p(t,n),r.i(1)):((r=R(n)).c(),r.i(1),r.m(e.parentNode,e)):r&&(C(),T(()=>{r.d(1),r=null}),r.o(1),S())},i(t){i||(r&&r.i(),i=!0)},o(t){r&&r.o(),i=!1},d(t){t&&$(o),r&&r.d(t),t&&$(e)}}}function X(t){var n,o,e,i=[],r=new Map,c=t.$store;const s=t=>t.notification.id;for(var f=0;f<c.length;f+=1){let n=K(t,c,f),o=s(n);r.set(o,i[f]=W(o,n))}return{c(){for(n=d("div"),f=0;f<i.length;f+=1)i[f].c();o=m(),n.className=`notification-${t.position}`+" svelte-hm5tuf"},m(t,r){for(l(t,n,r),f=0;f<i.length;f+=1)i[f].m(n,null);u(n,o),e=!0},p(t,e){const c=e.$store;C(),i=function(t,n,o,e,i,r,c,s,f,a,u,l){let $=t.length,d=r.length,p=$;const m={};for(;p--;)m[t[p].key]=p;const h=[],g=new Map,v=new Map;for(p=d;p--;){const t=l(i,r,p),s=o(t);let f=c.get(s);f?e&&f.p(n,t):(f=a(s,t)).c(),g.set(s,h[p]=f),s in m&&v.set(s,Math.abs(p-m[s]))}const b=new Set,y=new Set;function x(t){t.i&&t.i(1),t.m(s,u),c.set(t.key,t),u=t.first,d--}for(;$&&d;){const n=h[d-1],o=t[$-1],e=n.key,i=o.key;n===o?(u=n.first,$--,d--):g.has(i)?!c.has(e)||b.has(e)?x(n):y.has(i)?$--:v.get(e)>v.get(i)?(y.add(e),x(n)):(b.add(i),$--):(f(o,c),$--)}for(;$--;){const n=t[$];g.has(n.key)||f(n,c)}for(;d;)x(h[d-1]);return h}(i,t,s,1,e,c,r,n,A,W,o,K),S()},i(t){if(!e){for(var n=0;n<c.length;n+=1)i[n].i();e=!0}},o(t){for(f=0;f<i.length;f+=1)i[f].o();e=!1},d(t){for(t&&$(n),f=0;f<i.length;f+=1)i[f].d()}}}function Y(t){var n,o,e;const i=t.$$slots.default,r=s(i,t,null);for(var c=t.positions,u=[],p=0;p<c.length;p+=1)u[p]=X(Q(t,c,p));function h(t,n,o){u[t]&&(n&&T(()=>{u[t].d(n),u[t]=null}),u[t].o(o))}return{c(){r&&r.c(),n=m(),o=d("div");for(var t=0;t<u.length;t+=1)u[t].c();o.className="notifications"},l(t){r&&r.l(t)},m(t,i){r&&r.m(t,i),l(t,n,i),l(t,o,i);for(var c=0;c<u.length;c+=1)u[c].m(o,null);e=!0},p(t,n){if(r&&r.p&&t.$$scope&&r.p(a(i,n,t,null),f(i,n,null)),t.positions||t.$store||t.notificationItem){c=n.positions;for(var e=0;e<c.length;e+=1){const i=Q(n,c,e);u[e]?(u[e].p(t,i),u[e].i(1)):(u[e]=X(i),u[e].c(),u[e].i(1),u[e].m(o,null))}for(C();e<u.length;e+=1)h(e,1,1);S()}},i(t){if(!e){r&&r.i&&r.i(t);for(var n=0;n<c.length;n+=1)u[n].i();e=!0}},o(t){r&&r.o&&r.o(t),u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)h(t,0);e=!1},d(t){r&&r.d(t),t&&($(n),$(o)),function(t,n){for(let o=0;o<t.length;o+=1)t[o]&&t[o].d(n)}(u,t)}}}function Z(t,n,o){let e;!function(t,n,o){const e=n.subscribe(o);t.$$.on_destroy.push(e.unsubscribe?()=>e.unsubscribe():e)}(t,J,t=>{o("$store",e=t)});let{notificationItem:i=null}=n;!function(t,n){y().$$.context.set(t,n)}(F,J);let{$$slots:r={},$$scope:c}=n;return t.$set=t=>{"notificationItem"in t&&o("notificationItem",i=t.notificationItem),"$$scope"in t&&o("$$scope",c=t.$$scope)},{notificationItem:i,positions:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],$store:e,$$slots:r,$$scope:c}}class tt extends z{constructor(t){super(),q(this,t,Z,Y,c,["notificationItem"])}}export{tt as Notifications,P as getContext};