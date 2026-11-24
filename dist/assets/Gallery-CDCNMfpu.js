import{c as r,j as e,d as a}from"./index-Djn-iZhi.js";import{r as i}from"./vendor-Dku4LDvz.js";import{P as n}from"./PageHead-B40XO2Db.js";import"./motion-BrxemxKV.js";import"./SEO-DFmcNEi_.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=r("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=r("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function u(){const[s,l]=i.useState(null);return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"গ্যালারি",sub:"আমাদের সভা, অনুষ্ঠান ও কার্যক্রমের ছবি।"}),e.jsx("section",{className:"mx-auto grid max-w-6xl gap-5 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3",children:a.map((t,c)=>e.jsxs("button",{onClick:()=>l(c),className:"overflow-hidden rounded-2xl border text-left",children:[e.jsx("div",{className:"flex aspect-[4/3] items-center justify-center bg-primary-soft text-primary",children:t.src?e.jsx("img",{src:t.src,alt:t.t,loading:"lazy",className:"size-full object-cover"}):e.jsx(x,{className:"size-10"})}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-semibold text-navy",children:t.t}),e.jsx("p",{className:"text-sm text-ink/70",children:t.d})]})]},t.t))}),s!==null&&e.jsxs("div",{role:"dialog","aria-modal":"true",className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5",onClick:()=>l(null),children:[e.jsx("button",{"aria-label":"বন্ধ করুন",className:"absolute right-4 top-4 text-white",children:e.jsx(d,{})}),e.jsxs("div",{className:"max-w-2xl rounded-2xl bg-white p-6",children:[a[s].src&&e.jsx("img",{src:a[s].src,alt:a[s].t,className:"mb-4 rounded-xl"}),e.jsx("h3",{className:"text-xl font-bold text-navy",children:a[s].t}),e.jsx("p",{children:a[s].d})]})]})]})}export{u as default};
