(this["webpackJsonpreact-image-board"]=this["webpackJsonpreact-image-board"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),c=n(7),o=n.n(c),r=(n(12),n(6)),u=n(2),s=n(0);var l=function(t){var e=Object(i.useState)(""),n=Object(u.a)(e,2),a=n[0],c=n[1],o=Object(i.useState)(""),r=Object(u.a)(o,2),l=r[0],d=r[1];return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.addImage(l,a),c(""),d("")},children:[Object(s.jsx)("input",{value:l,onChange:function(t){d(t.target.value)},type:"url",name:"url-input",id:"new-image-url",placeholder:"Image URL"}),Object(s.jsx)("input",{value:a,onChange:function(t){c(t.target.value)},type:"text",name:"caption-input",id:"new-image-caption",placeholder:"Image Caption"}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})};var d=function(t){var e=t.images.map((function(e){return Object(s.jsxs)("li",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"%",flexDirection:"column",marginBottom:"100px",padding:"20px",border:"none",borderRadius:"10px"},children:[Object(s.jsx)("img",{style:{border:"none",borderRadius:"10px",width:"100%",boxShadow:" gray 5px 5px 10px 5px",marginBottom:"20px"},src:e.url,alt:e.text}),Object(s.jsx)("caption",{children:e.text}),Object(s.jsx)("button",{type:"button",onClick:function(){return t.deleteImage(t.id)},children:"Delete"})]})}));return Object(s.jsx)("ul",{style:{width:"60%",paddingInlineStart:"0px"},children:e})};var x=function(){var t=Object(i.useState)([]),e=Object(u.a)(t,2),n=e[0],a=e[1],c=Object(i.useState)(3),o=Object(u.a)(c,2),x=o[0],f=o[1],b=Object(i.useState)(!1),p=Object(u.a)(b,2);return p[0],p[1],Object(i.useEffect)((function(){a([{id:1,url:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80",text:"Field"},{id:2,url:"https://images.unsplash.com/photo-1613739722718-9548582af82f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8cm5TS0RId3dZVWt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",text:"Cool Architecture"},{id:3,url:"https://images.unsplash.com/photo-1617229378071-daa5eeff0db7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8UzRNS0xBc0JCNzR8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",text:"Handbags"}])}),[]),console.log({images:n}),Object(s.jsxs)("div",{className:"App",style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(s.jsx)("h1",{style:{fontFamily:"roboto",textTransform:"uppercase",fontWeight:900,textAlign:"center",marginBottom:"100px"},children:"React Image Board"}),Object(s.jsx)(l,{addImage:function(t,e){var i={id:x,url:t,text:e};a([].concat(Object(r.a)(n),[i])),console.log({images:n}),f(x+1),console.log({images:n})}}),Object(s.jsx)(d,{images:n,deleteImage:function(t){var e=n.findIndex((function(e){return e.id===t})),i=Object(r.a)(n);i.splice(e,1),a(i)}})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),i(t),a(t),c(t),o(t)}))};o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),f()}},[[14,1,2]]]);
//# sourceMappingURL=main.00216abd.chunk.js.map