import{M as S,r as C,j as e,P as k,D as z,V as E,G as B,C as o,c as d,a as g,b as N,k as H,W as q,X as F,Y as u,Z as L,_,N as $,$ as M,a0 as V,B as G,a1 as Q,a2 as U,a3 as W,a4 as X,Q as Y}from"./index-Clnea1Av.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=S("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);var J="Separator",v="horizontal",K=["horizontal","vertical"],w=C.forwardRef((a,r)=>{const{decorative:s,orientation:n=v,...l}=a,c=ee(n)?n:v,t=s?{role:"none"}:{"aria-orientation":c==="vertical"?c:void 0,role:"separator"};return e.jsx(k.div,{"data-orientation":c,...t,...l,ref:r})});w.displayName=J;function ee(a){return K.includes(a)}var y=w;const i=C.forwardRef(({className:a,orientation:r="horizontal",decorative:s=!0,...n},l)=>e.jsx(y,{ref:l,decorative:s,orientation:r,className:z("shrink-0 bg-border",r==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",a),...n}));i.displayName=y.displayName;function re({params:a}){const{productId:r}=a;return fetch(`https://dummyjson.com/products/${r}`).then(s=>s.json()).then(s=>({...s,price:X(s.price)}))}function se(a){const[r,s]=a.split(" ");return r.charAt(0)+s.charAt(0)}function te(){const a=E(),{images:r,title:s,description:n,price:l,brand:c,warrantyInformation:h,reviews:t,dimensions:x,shippingInformation:P,discountPercentage:m,returnPolicy:b,rating:j}=a,D=B();function I(){D(Y({product:a,quantity:1}))}return e.jsx("article",{className:"p-4",children:e.jsx(o,{children:e.jsxs(d,{className:"mt-6 grid grid-cols-[1fr_2fr] gap-4",children:[e.jsx(o,{children:e.jsx(d,{children:e.jsx("img",{className:"aspect-square",src:r[0],alt:s})})}),e.jsxs(o,{children:[e.jsxs(g,{children:[e.jsx(N,{children:s}),e.jsx(H,{children:n}),e.jsxs(q,{children:[e.jsx(F,{asChild:!0,children:e.jsxs("section",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("span",{children:j}),e.jsx(u,{rating:j}),e.jsx(Z,{}),e.jsx(i,{className:"h-6 w-[.125rem]",orientation:"vertical"}),t.length," reivews"]})}),e.jsx(L,{align:"start",children:e.jsx(_,{reviews:t})})]})]}),e.jsx(i,{className:"my-4"}),e.jsxs(d,{className:"space-y-10",children:[e.jsxs("article",{className:"flex items-center gap-2",children:[e.jsxs("p",{className:"relative",children:[e.jsx("span",{className:"absolute text-xs font-semibold left-0 top-1/2 -translate-y-1/2",children:"₹"}),e.jsx("span",{className:"ml-2 text-xl",children:$(l)})]}),m>1?e.jsxs(M,{className:"text-green-400",variant:"outline",children:[V(m),"% off"]}):null]}),e.jsxs("section",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("article",{className:"flex flex-col gap-2",children:[e.jsxs("h1",{className:"text-lg",children:["Brand - ",c]}),e.jsx("h2",{className:"text-lg font-semibold",children:"Dimensions"}),e.jsxs("p",{className:"text-sm font-medium",children:[x.height," x ",x.width," x ",x.depth]})]}),e.jsxs("article",{className:"flex flex-col gap-2 font-semibold",children:[e.jsx("h1",{children:h}),e.jsx("h2",{children:P}),e.jsx("h2",{children:b})]}),e.jsxs(G,{onClick:I,className:"col-span-2 w-full flex items-center gap-2",children:[e.jsx(Q,{className:"size-6 "}),"Add to cart"]})]})]})]}),e.jsxs(o,{className:"col-span-2",children:[e.jsx(g,{children:e.jsx(N,{children:"Reviews"})}),e.jsx(d,{children:t.length>0?e.jsx("article",{className:"flex flex-col gap-4",children:t.map(({reviewerName:p,reviewerEmail:f,comment:R,date:T,rating:A},O)=>e.jsxs(e.Fragment,{children:[e.jsxs("article",{className:"flex flex-col gap-4",children:[e.jsxs("header",{className:"flex items-center gap-2",children:[e.jsx(U,{children:e.jsx(W,{children:se(p)})}),e.jsx("h1",{children:p}),e.jsx(i,{className:"h-6 w-[.125rem]",orientation:"vertical"}),e.jsx("p",{children:f}),e.jsx(i,{className:"h-6 w-[.125rem]",orientation:"vertical"}),e.jsx("p",{children:new Date(T).toDateString()})]}),e.jsxs("section",{className:"flex gap-2 items-center",children:[e.jsx(u,{rating:A}),e.jsx("p",{children:R})]})]},f),O!==t.length-1&&e.jsx(i,{})]}))}):e.jsx("h2",{children:"No reviews available"})})]})]})})})}export{te as default,re as loader};
