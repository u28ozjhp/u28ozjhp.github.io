import{s as qt,n as rt,j as vt,o as Gt,t as Kt,b as St,d as Nt}from"../chunks/scheduler.212c71d7.js";import{S as Pt,i as Ot,g as _,s as D,m as F,h as v,j as k,c as V,n as z,f,k as m,a as L,B as i,H as Bt,y as Qt,I as Yt,o as x,e as Ft,J as Wt,t as nt,b as Xt,d as ot,p as Zt,z as zt,r as yt,x as O,u as Et,v as wt,w as Dt,A as pt}from"../chunks/index.5fdc0ad9.js";import{m as $t,y as te,d as ee,h as le}from"../chunks/store.a425e42c.js";import{S as ae}from"../chunks/Spinner.854c52f8.js";const M=s=>parseFloat(s.toFixed(2));function se(s){let t,e,l,a,r,u,c;return{c(){t=_("div"),e=_("input"),l=D(),a=_("label"),r=F(s[1]),this.h()},l(o){t=v(o,"DIV",{class:!0});var n=k(t);e=v(n,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),l=V(n),a=v(n,"LABEL",{class:!0,for:!0});var d=k(a);r=z(d,s[1]),d.forEach(f),n.forEach(f),this.h()},h(){m(e,"type","number"),m(e,"class","float-input svelte-34455m"),m(e,"id","kadou-total"),m(e,"placeholder","F"),m(a,"class","float-label svelte-34455m"),m(a,"for","kadou-total"),m(t,"class","float-container svelte-34455m")},m(o,n){L(o,t,n),i(t,e),Bt(e,s[0]),i(t,l),i(t,a),i(a,r),u||(c=Qt(e,"input",s[2]),u=!0)},p(o,[n]){n&1&&Yt(e.value)!==o[0]&&Bt(e,o[0]),n&2&&x(r,o[1])},i:rt,o:rt,d(o){o&&f(t),u=!1,c()}}}function re(s,t,e){let{value:l}=t,{label:a}=t;function r(){l=Yt(this.value),e(0,l)}return s.$$set=u=>{"value"in u&&e(0,l=u.value),"label"in u&&e(1,a=u.label)},[l,a,r]}class xt extends Pt{constructor(t){super(),Ot(this,t,re,se,qt,{value:0,label:1})}}function ne(s){const t=s.slice(),e=t[14]?"目標達成済":"🎌目標達成済🎌";return t[19]=e,t}function oe(s){let t,e,l,a="目標AV",r,u,c,o,n,d,T,j,H,A,Y="必要な数字",S,w,R,q,E,b,h="現在値",P,I,g,C='<tr class="text-lg"><th class="font-normal border-r">基本P</th> <th class="font-normal border-r">売上</th> <th class="font-normal border-r">実AV</th> <th class="font-normal">ハンデ付</th></tr>',mt,tt,N,W,et=M(s[7])+"",it,bt,X,lt=M(s[6])+"",ut,gt,Z,at=isNaN(s[8])?"-":`${s[8]}`,ct,kt,$,st=isNaN(s[9])?"-":`${s[9]}`,ft,J;function Jt(p){s[16](p)}let Vt={label:"実AV (%)"};s[0]!==void 0&&(Vt.value=s[0]),c=new xt({props:Vt}),St.push(()=>zt(c,"value",Jt));function Ut(p){s[17](p)}let Ct={label:"ハンデ付 (%)"};s[1]!==void 0&&(Ct.value=s[1]),d=new xt({props:Ct}),St.push(()=>zt(d,"value",Ut));function Lt(p,y){return y&8192&&(w=null),y&28&&(R=null),w==null&&(w=!!p[13].some(pe)),w?ce:(R==null&&(R=!p[4].some(p[15])),R?ue:Rt)}function Tt(p,y){return y===Rt?ne(p):p}let G=Lt(s,-1),B=G(Tt(s,G));return{c(){t=_("div"),e=_("div"),l=_("div"),l.textContent=a,r=D(),u=_("div"),yt(c.$$.fragment),n=D(),yt(d.$$.fragment),j=D(),H=_("div"),A=_("div"),A.textContent=Y,S=D(),B.c(),q=D(),E=_("div"),b=_("div"),b.textContent=h,P=D(),I=_("table"),g=_("thead"),g.innerHTML=C,mt=D(),tt=_("tbody"),N=_("tr"),W=_("td"),it=F(et),bt=D(),X=_("td"),ut=F(lt),gt=D(),Z=_("td"),ct=F(at),kt=D(),$=_("td"),ft=F(st),this.h()},l(p){t=v(p,"DIV",{class:!0});var y=k(t);e=v(y,"DIV",{});var K=k(e);l=v(K,"DIV",{class:!0,"data-svelte-h":!0}),O(l)!=="svelte-z1teg3"&&(l.textContent=a),r=V(K),u=v(K,"DIV",{class:!0});var Q=k(u);Et(c.$$.fragment,Q),n=V(Q),Et(d.$$.fragment,Q),Q.forEach(f),K.forEach(f),j=V(y),H=v(y,"DIV",{});var dt=k(H);A=v(dt,"DIV",{class:!0,"data-svelte-h":!0}),O(A)!=="svelte-1sxr5mr"&&(A.textContent=Y),S=V(dt),B.l(dt),dt.forEach(f),q=V(y),E=v(y,"DIV",{});var ht=k(E);b=v(ht,"DIV",{class:!0,"data-svelte-h":!0}),O(b)!=="svelte-3x2thd"&&(b.textContent=h),P=V(ht),I=v(ht,"TABLE",{class:!0});var _t=k(I);g=v(_t,"THEAD",{"data-svelte-h":!0}),O(g)!=="svelte-jei8qv"&&(g.innerHTML=C),mt=V(_t),tt=v(_t,"TBODY",{});var jt=k(tt);N=v(jt,"TR",{});var U=k(N);W=v(U,"TD",{class:!0});var Ht=k(W);it=z(Ht,et),Ht.forEach(f),bt=V(U),X=v(U,"TD",{class:!0});var It=k(X);ut=z(It,lt),It.forEach(f),gt=V(U),Z=v(U,"TD",{class:!0});var At=k(Z);ct=z(At,at),At.forEach(f),kt=V(U),$=v(U,"TD",{class:!0});var Mt=k($);ft=z(Mt,st),Mt.forEach(f),U.forEach(f),jt.forEach(f),_t.forEach(f),ht.forEach(f),y.forEach(f),this.h()},h(){m(l,"class","border-b w-full text-center p-1 mb-3"),m(u,"class","grid grid-cols-2 w-full gap-6 px-2"),m(A,"class","border-b w-full text-center p-1 mb-2"),m(b,"class","border-b w-full text-center p-1 mb-3"),m(W,"class","border-r"),m(X,"class","border-r"),m(Z,"class","border-r"),m($,"class",""),m(I,"class","w-full table-fixed border-collapse text-center mb-6"),m(t,"class","flex flex-col gap-6 mt-2")},m(p,y){L(p,t,y),i(t,e),i(e,l),i(e,r),i(e,u),wt(c,u,null),i(u,n),wt(d,u,null),i(t,j),i(t,H),i(H,A),i(H,S),B.m(H,null),i(t,q),i(t,E),i(E,b),i(E,P),i(E,I),i(I,g),i(I,mt),i(I,tt),i(tt,N),i(N,W),i(W,it),i(N,bt),i(N,X),i(X,ut),i(N,gt),i(N,Z),i(Z,ct),i(N,kt),i(N,$),i($,ft),J=!0},p(p,y){const K={};!o&&y&1&&(o=!0,K.value=p[0],Nt(()=>o=!1)),c.$set(K);const Q={};!T&&y&2&&(T=!0,Q.value=p[1],Nt(()=>T=!1)),d.$set(Q),G===(G=Lt(p,y))&&B?B.p(Tt(p,G),y):(B.d(1),B=G(Tt(p,G)),B&&(B.c(),B.m(H,null))),(!J||y&128)&&et!==(et=M(p[7])+"")&&x(it,et),(!J||y&64)&&lt!==(lt=M(p[6])+"")&&x(ut,lt),(!J||y&256)&&at!==(at=isNaN(p[8])?"-":`${p[8]}`)&&x(ct,at),(!J||y&512)&&st!==(st=isNaN(p[9])?"-":`${p[9]}`)&&x(ft,st)},i(p){J||(ot(c.$$.fragment,p),ot(d.$$.fragment,p),J=!0)},o(p){nt(c.$$.fragment,p),nt(d.$$.fragment,p),J=!1},d(p){p&&f(t),Dt(c),Dt(d),B.d()}}}function ie(s){let t,e,l;return e=new ae({}),{c(){t=_("div"),yt(e.$$.fragment),this.h()},l(a){t=v(a,"DIV",{class:!0});var r=k(t);Et(e.$$.fragment,r),r.forEach(f),this.h()},h(){m(t,"class","my-10")},m(a,r){L(a,t,r),wt(e,t,null),l=!0},p:rt,i(a){l||(ot(e.$$.fragment,a),l=!0)},o(a){nt(e.$$.fragment,a),l=!1},d(a){a&&f(t),Dt(e)}}}function Rt(s){let t,e,l='<tr><th></th> <th class="font-normal p-1.5">合計</th> <th class="font-normal p-1.5">一日当たり</th></tr>',a,r,u,c,o="実AV",n,d,T,j,H="ハンデ付",A;function Y(b,h){return b[11]>0?de:fe}let S=Y(s),w=S(s);function R(b,h){return b[12]>0?_e:he}let q=R(s),E=q(s);return{c(){t=_("table"),e=_("thead"),e.innerHTML=l,a=D(),r=_("tbody"),u=_("tr"),c=_("td"),c.textContent=o,n=D(),w.c(),d=D(),T=_("tr"),j=_("td"),j.textContent=H,A=D(),E.c(),this.h()},l(b){t=v(b,"TABLE",{class:!0});var h=k(t);e=v(h,"THEAD",{"data-svelte-h":!0}),O(e)!=="svelte-yuclh3"&&(e.innerHTML=l),a=V(h),r=v(h,"TBODY",{});var P=k(r);u=v(P,"TR",{});var I=k(u);c=v(I,"TD",{class:!0,"data-svelte-h":!0}),O(c)!=="svelte-1akygkg"&&(c.textContent=o),n=V(I),w.l(I),I.forEach(f),d=V(P),T=v(P,"TR",{});var g=k(T);j=v(g,"TD",{class:!0,"data-svelte-h":!0}),O(j)!=="svelte-f05w2j"&&(j.textContent=H),A=V(g),E.l(g),g.forEach(f),P.forEach(f),h.forEach(f),this.h()},h(){m(c,"class","p-1.5"),m(j,"class","p-1.5"),m(t,"class","w-full table-fixed border-collapse text-center mb-6")},m(b,h){L(b,t,h),i(t,e),i(t,a),i(t,r),i(r,u),i(u,c),i(u,n),w.m(u,null),i(r,d),i(r,T),i(T,j),i(T,A),E.m(T,null)},p(b,h){S===(S=Y(b))&&w?w.p(b,h):(w.d(1),w=S(b),w&&(w.c(),w.m(u,null))),q===(q=R(b))&&E?E.p(b,h):(E.d(1),E=q(b),E&&(E.c(),E.m(T,null)))},d(b){b&&f(t),w.d(),E.d()}}}function ue(s){let t,e='<a href="/shift" class="flex items-center"><span class="mr-1">シフトを入力してください</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"></path><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"></path></svg></a>';return{c(){t=_("div"),t.innerHTML=e,this.h()},l(l){t=v(l,"DIV",{class:!0,"data-svelte-h":!0}),O(t)!=="svelte-yjsjq0"&&(t.innerHTML=e),this.h()},h(){m(t,"class","flex-center text-gray-400 p-4")},m(l,a){L(l,t,a)},p:rt,d(l){l&&f(t)}}}function ce(s){let t,e='<a href="/suji" class="flex items-center"><span class="mr-1">出勤日のノルマの入力を完了してください</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"></path><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"></path></svg></a>';return{c(){t=_("div"),t.innerHTML=e,this.h()},l(l){t=v(l,"DIV",{class:!0,"data-svelte-h":!0}),O(t)!=="svelte-1jqwamd"&&(t.innerHTML=e),this.h()},h(){m(t,"class","flex-center text-gray-400 p-4")},m(l,a){L(l,t,a)},p:rt,d(l){l&&f(t)}}}function fe(s){let t,e=s[19]+"",l;return{c(){t=_("td"),l=F(e),this.h()},l(a){t=v(a,"TD",{colspan:!0,class:!0});var r=k(t);l=z(r,e),r.forEach(f),this.h()},h(){m(t,"colspan","2"),m(t,"class","p-1.5"),pt(t,"text-gray-400",s[14])},m(a,r){L(a,t,r),i(t,l)},p(a,r){r&16384&&e!==(e=a[19]+"")&&x(l,e),r&16384&&pt(t,"text-gray-400",a[14])},d(a){a&&f(t)}}}function de(s){let t,e=M(s[11])+"",l,a,r,u=(s[10]?M(s[11]/s[10]):"-")+"",c;return{c(){t=_("td"),l=F(e),a=D(),r=_("td"),c=F(u),this.h()},l(o){t=v(o,"TD",{class:!0});var n=k(t);l=z(n,e),n.forEach(f),a=V(o),r=v(o,"TD",{class:!0});var d=k(r);c=z(d,u),d.forEach(f),this.h()},h(){m(t,"class","p-1.5"),m(r,"class","p-1.5")},m(o,n){L(o,t,n),i(t,l),L(o,a,n),L(o,r,n),i(r,c)},p(o,n){n&2048&&e!==(e=M(o[11])+"")&&x(l,e),n&3072&&u!==(u=(o[10]?M(o[11]/o[10]):"-")+"")&&x(c,u)},d(o){o&&(f(t),f(a),f(r))}}}function he(s){let t,e=s[19]+"",l;return{c(){t=_("td"),l=F(e),this.h()},l(a){t=v(a,"TD",{colspan:!0,class:!0});var r=k(t);l=z(r,e),r.forEach(f),this.h()},h(){m(t,"colspan","2"),m(t,"class","p-1.5"),pt(t,"text-gray-400",s[14])},m(a,r){L(a,t,r),i(t,l)},p(a,r){r&16384&&e!==(e=a[19]+"")&&x(l,e),r&16384&&pt(t,"text-gray-400",a[14])},d(a){a&&f(t)}}}function _e(s){let t,e=M(s[12])+"",l,a,r,u=(s[10]?M(s[12]/s[10]):"-")+"",c;return{c(){t=_("td"),l=F(e),a=D(),r=_("td"),c=F(u),this.h()},l(o){t=v(o,"TD",{class:!0});var n=k(t);l=z(n,e),n.forEach(f),a=V(o),r=v(o,"TD",{class:!0});var d=k(r);c=z(d,u),d.forEach(f),this.h()},h(){m(t,"class","p-1.5"),m(r,"class","p-1.5")},m(o,n){L(o,t,n),i(t,l),L(o,a,n),L(o,r,n),i(r,c)},p(o,n){n&4096&&e!==(e=M(o[12])+"")&&x(l,e),n&5120&&u!==(u=(o[10]?M(o[12]/o[10]):"-")+"")&&x(c,u)},d(o){o&&(f(t),f(a),f(r))}}}function ve(s){let t,e,l,a,r;const u=[ie,oe],c=[];function o(n,d){return n[5]?0:1}return e=o(s),l=c[e]=u[e](s),{c(){t=D(),l.c(),a=Ft(),this.h()},l(n){Wt("svelte-v7t2ax",document.head).forEach(f),t=V(n),l.l(n),a=Ft(),this.h()},h(){document.title="ダッシュボード"},m(n,d){L(n,t,d),c[e].m(n,d),L(n,a,d),r=!0},p(n,[d]){let T=e;e=o(n),e===T?c[e].p(n,d):(Zt(),nt(c[T],1,1,()=>{c[T]=null}),Xt(),l=c[e],l?l.p(n,d):(l=c[e]=u[e](n),l.c()),ot(l,1),l.m(a.parentNode,a))},i(n){r||(ot(l),r=!0)},o(n){nt(l),r=!1},d(n){n&&(f(t),f(a)),c[e].d(n)}}}const pe=s=>s.kadou!==0&&!s.kadou||s.noruma!==0&&!s.noruma;function me(s,t,e){let l,a,r,u,c;vt(s,$t,h=>e(2,a=h)),vt(s,te,h=>e(3,r=h)),vt(s,ee,h=>e(4,u=h)),vt(s,le,h=>e(14,c=h));let o=!0,n,d;Gt(async()=>{e(0,n=parseFloat(localStorage.getItem("target")??"100")),e(1,d=parseFloat(localStorage.getItem("targetHande")??"100")),R(),await Kt(),e(5,o=!1)});let T,j,H,A,Y,S,w;function R(){e(10,Y=l.filter(g=>g.suuji!==0&&!g.suuji).length),e(6,T=l.reduce((g,C)=>g+(C.suuji??0),0)),e(7,j=l.reduce((g,C)=>C.suuji!==0&&!C.suuji?g:g+(C.noruma??0),0));const h=l.reduce((g,C)=>g+(C.noruma??0),0),P=l.reduce((g,C)=>g+(C.kadou??0),0),I=l.reduce((g,C)=>C.suuji!==0&&!C.suuji?g:g+(C.kadou??0),0);e(11,S=n/100*h-T),e(12,w=(d-P*.1)/100*h-T),e(8,H=M(T/j*100)),e(9,A=M(H+I*.1))}const q=h=>h.shukkin&&h.year===r&&h.month===a;function E(h){n=h,e(0,n)}function b(h){d=h,e(1,d)}return s.$$.update=()=>{s.$$.dirty&1&&n&&localStorage.setItem("target",n.toString()),s.$$.dirty&2&&d&&localStorage.setItem("targetHande",d.toString()),s.$$.dirty&28&&e(13,l=u.filter(h=>h.shukkin&&h.year===r&&h.month===a)),s.$$.dirty&7&&R()},[n,d,a,r,u,o,T,j,H,A,Y,S,w,l,c,q,E,b]}class ye extends Pt{constructor(t){super(),Ot(this,t,me,ve,qt,{})}}export{ye as component};