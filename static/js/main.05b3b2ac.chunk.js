(this.webpackJsonplive_score=this.webpackJsonplive_score||[]).push([[0],{73:function(e,t,c){},74:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c(0),i=c(8),a=c.n(i),r=(c(73),c(23)),j=(c(74),c(102)),o=c(104),l=c(118),h=c(105),d=c(56),b=c(53),u=c.n(b),O=c(52),x=c.n(O),m=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(n.jsx)(j.a,{position:"static",children:Object(n.jsxs)(o.a,{children:[Object(n.jsxs)(l.a,{open:c,onClose:function(){i(!1)},children:[Object(n.jsx)("div",{className:"c1",children:Object(n.jsxs)("span",{className:"text",children:["handcrafted by ",Object(n.jsx)("br",{}),Object(n.jsxs)("a",{href:"https://www.linkedin.com/in/shivam-24aa2b1a6/",children:[Object(n.jsx)("span",{className:"name",children:"Shivam"}),"   "]})]})}),Object(n.jsxs)("div",{className:"c2 text",children:[Object(n.jsx)(x.a,{style:{fontSize:50}})," ",Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:"text",children:Object(n.jsx)("a",{href:"https://github.com/shivam12k",children:" gitHub profile "})})]}),Object(n.jsx)("div",{className:"c3",children:Object(n.jsx)("span",{className:"text",children:Object(n.jsx)("a",{href:"https://github.com/shivam12k/live_score",children:"source code"})})})]}),Object(n.jsx)(h.a,{children:Object(n.jsx)(u.a,{onClick:function(){i(!0)}})}),Object(n.jsx)(d.a,{variant:"h6",children:"Live Score"})]})})},f=" BtzBNz2Kk3fgBg3ap6u6UBUwwWA2",p=c(106),g=c(107),v=c(108),y=c(109),S=c(110),k=c(112),w=c(114),N=c(113),C=c(111),T=c(115),B=c.p+"static/media/verses.cae0f223.png",F=function(e){var t=e.match,c=(e.key,Object(s.useState)({})),i=Object(r.a)(c,2),a=i[0],j=i[1],o=Object(s.useState)(!1),l=Object(r.a)(o,2),h=l[0],b=l[1],u=function(){b(!1)},O=function(e){(function(e){var t="https://cricapi.com/api/cricketScore?apikey=".concat(f,"&unique_id=").concat(e).replace(/\s+/g,"");return fetch(t).then((function(e){return e.json()})).catch((function(e){return console.error(e)}))})(e).then((function(e){console.log("match data",e),j(e),b(!0)})).catch((function(e){console.error(e)}))};return Object(n.jsxs)(s.Fragment,{children:[Object(n.jsxs)(k.a,{style:{marginTop:30,marginLeft:20,marginRight:20},variant:"outlined",square:!0,children:[Object(n.jsxs)(N.a,{children:[Object(n.jsxs)(w.a,{container:!0,justify:"center",alignItems:"center",children:[Object(n.jsxs)(w.a,{item:!0,sm:3,children:[" ",Object(n.jsxs)(d.a,{children:[" ",t["team-1"]," "]})," "]}),Object(n.jsxs)(w.a,{item:!0,sm:3,children:[" ",Object(n.jsx)(d.a,{children:Object(n.jsx)("img",{style:{width:67},src:B})})," "]}),Object(n.jsxs)(w.a,{item:!0,sm:3,children:[" ",Object(n.jsx)(d.a,{children:t["team-2"]})," "]})]}),Object(n.jsx)(d.a,{})]}),Object(n.jsx)(T.a,{children:Object(n.jsxs)(w.a,{container:!0,justify:"center",children:[Object(n.jsx)(C.a,{size:"small",variant:"contained",style:{marginRight:5},color:"primary",onClick:function(){return O(t.unique_id)},children:"Show Details"}),Object(n.jsxs)(C.a,{size:"small",variant:"outlined",style:{marginTop:5},color:"primary",children:["Start Time : ",new Date(t.dateTimeGMT).toLocaleString()]})]})})]}),Object(n.jsxs)(p.a,{open:h,onClose:u,children:[Object(n.jsx)(g.a,{id:"alert-dilog-title",children:"Match Details..."}),Object(n.jsx)(v.a,{children:Object(n.jsxs)(y.a,{id:"alert-dilog-discription",children:[Object(n.jsx)(d.a,{children:a.stat}),Object(n.jsxs)(d.a,{children:["Match",Object(n.jsx)("span",{style:{fontWeight:"bolder"},children:a.matchStarted?" started":"still not started"})]}),Object(n.jsxs)(d.a,{children:["Score",Object(n.jsx)("span",{style:{fontWeight:"bolder"},children:a.score})]})]})}),Object(n.jsx)(S.a,{children:Object(n.jsx)(C.a,{onClick:u,color:"primary"})})]})]})},_=c(117),z=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){(function(){var e="https://cricapi.com/api/matches?apikey=".concat(f).replace(/\s+/g,"");return console.log(e),fetch(e).then((function(e){return e.json()})).catch((function(e){console.error(e)}))})().then((function(e){i(e.matches)})).catch((function(e){console.error("ab humsa nahi hoga",e)}))})),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(m,{}),Object(n.jsx)("h1",{className:"heading",children:"welcome to live cricket score"}),c.map((function(e){return Object(n.jsx)(s.Fragment,{children:"Twenty20"===e.type?Object(n.jsx)(_.a,{boxShadow:1,children:Object(n.jsx)(F,{match:e},e.unique_id)}):""})}))]})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,120)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(n.jsx)(z,{}),document.getElementById("root")),L()}},[[81,1,2]]]);
//# sourceMappingURL=main.05b3b2ac.chunk.js.map