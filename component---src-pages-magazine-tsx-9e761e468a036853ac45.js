(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5Xb1":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("k0/U"),i=r("R/WZ"),c=r("ZBNC"),l=r("Ji2X"),u=r("tRbT"),f=r("Z3vd"),p=r("A2+M"),m=Object(i.a)((function(e){return Object(c.a)({root:{"& h2, & h3, & h4, & h5":{marginTop:"1.5rem",marginBottom:"1rem"},"& h2":{fontSize:"2rem",fontWeight:"bold"},"& p":{fontSize:"1rem",lineHeight:1.8},"& code.language-text":{color:"#ff3860",backgroundColor:"#f9f1f3",padding:"1px 4px",borderRadius:"4px",fontSize:"0.85rem","&::before, &::after":{content:'""'}},"& blockquote":{position:"relative",padding:16,fontStyle:"italic",backgroundColor:"#eeeeee","&::before":{position:"absolute",top:0,left:0,width:5,height:"100%",content:'""',backgroundColor:"#dddddd"}},"& span.gatsby-resp-image-wrapper":{borderRadius:"8px",overflow:"hidden",margin:"2.5rem 0 1rem","& + small":{display:"block",color:e.palette.text.secondary,marginBottom:"2.5rem"}},"& p > a":{color:e.palette.primary.main,textDecoration:"none","&:active":{color:e.palette.primary.main},"&:hover":{textDecoration:"underline"}}}})})),s=Object(n.memo)((function(e){var t=e.contents,r=m();return o.a.createElement("div",{className:r.root},o.a.createElement(p.MDXRenderer,null,t))})),d=r("wEEd"),y=r("vT/v");r.d(t,"pageQuery",(function(){return v}));var v="3061409711",b=Object(i.a)((function(e){return Object(c.a)({root:{maxWidth:800,margin:"3rem auto"},titleWrapper:{borderBottom:"1px solid "+e.palette.action.hover,marginBottom:"2rem",paddingBottom:"2rem"},title:{fontWeight:700,color:e.palette.text.primary,marginBottom:"1rem"},date:{fontSize:"1rem",margin:0,fontWeight:300},footer:{marginTop:"5rem"},leftIcon:{marginRight:"1rem"},rightIcon:{marginLeft:"1rem"}})}));t.default=function(e){var t,r,n,i,c,p,m,v=e.data,g=e.pageContext,h=b(),O=Object(d.b)({from:{opacity:0,transform:"translateY(-30px)"},to:{opacity:1,transform:"translateY(0)"}}),w=Object(d.b)({from:{opacity:0,transform:"translateY(30px)"},to:{opacity:1,transform:"translateX(0)"},config:{duration:500},delay:400}),E=v.mdx;if(!E)return o.a.createElement("div",null,"Render Error");var j=E.frontmatter,x=E.body,R=E.excerpt,S=g.prev,X=g.next;return console.log(R),o.a.createElement(a.a,{pageName:j.title},o.a.createElement(y.a,{title:j.title,description:R,image:null===(t=j.thumbnail)||void 0===t?void 0:null===(r=t.childImageSharp)||void 0===r?void 0:r.fluid.src}),o.a.createElement(l.a,{"data-type":"markdown",className:h.root},o.a.createElement(u.a,{container:!0},o.a.createElement(u.a,{xs:12,sm:12,md:12,lg:12,item:!0},o.a.createElement(d.a.div,{style:O,className:h.titleWrapper},o.a.createElement("h1",{className:h.title},j.title+(j.draft?" [집필중]":"")),o.a.createElement("p",{className:h.date},j.date)),o.a.createElement(d.a.div,{style:w},o.a.createElement(s,{contents:x})))),o.a.createElement(u.a,{container:!0,className:h.footer,spacing:3,justify:"space-between"},o.a.createElement(u.a,{item:!0},X&&o.a.createElement(f.a,{fullWidth:!0,href:X.fields.path,variant:"outlined"},o.a.createElement("i",{className:"fas fa-angle-left "+h.leftIcon}),null!==(n=null===(i=X.frontmatter)||void 0===i?void 0:i.title)&&void 0!==n?n:"다음 매거진")),o.a.createElement(u.a,{item:!0},S&&o.a.createElement(f.a,{fullWidth:!0,href:null===(c=S.fields)||void 0===c?void 0:c.path,variant:"outlined"},null!==(p=null===(m=S.frontmatter)||void 0===m?void 0:m.title)&&void 0!==p?p:"이전 매거진",o.a.createElement("i",{className:"fas fa-angle-right "+h.rightIcon}))))))}},"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},I5cv:function(e,t,r){var n=r("XKFU"),o=r("Kuth"),a=r("2OiF"),i=r("y3w9"),c=r("0/R4"),l=r("eeVq"),u=r("8MEG"),f=(r("dyZX").Reflect||{}).construct,p=l((function(){function e(){}return!(f((function(){}),[],e)instanceof e)})),m=!l((function(){f((function(){}))}));n(n.S+n.F*(p||m),"Reflect",{construct:function(e,t){a(e),i(t);var r=arguments.length<3?e:a(arguments[2]);if(m&&!p)return f(e,t,r);if(e==r){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var n=[null];return n.push.apply(n,t),new(u.apply(e,n))}var l=r.prototype,s=o(c(l)?l:Object.prototype),d=Function.apply.call(e,s,t);return c(d)?d:s}})},X8hv:function(e,t,r){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return(o=n()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&a(o,r.prototype),o}).apply(null,arguments)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r("jm62"),r("yt8O"),r("RW0V"),r("XfO3"),r("HEwt"),r("rE2o"),r("ioFf"),r("rGqo"),r("/SS/"),r("a1Th"),r("Btvt"),r("I5cv"),r("I5cv"),r("/SS/"),r("XfO3"),r("HEwt"),r("a1Th"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var f=r("q1tI"),p=r("7ljp"),m=p.useMDXComponents,s=p.mdx,d=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.components,n=e.children,a=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["scope","components","children"]),c=m(r),u=d(t),p=f.useMemo((function(){if(!n)return null;var e=l({React:f,mdx:s},u),t=Object.keys(e),r=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(i(t),[""+n])).apply(void 0,[{}].concat(i(r)))}),[n,t]);return f.createElement(p,l({components:c},a))}}}]);
//# sourceMappingURL=component---src-pages-magazine-tsx-9e761e468a036853ac45.js.map