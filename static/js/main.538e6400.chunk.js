(this["webpackJsonpspace-x"]=this["webpackJsonpspace-x"]||[]).push([[0],{16:function(e,a,n){e.exports={body_hasModal:"Modal_body_hasModal__35BAE",wrapper:"Modal_wrapper__2ETQd",modal:"Modal_modal__3zAo_",fadeIn:"Modal_fadeIn__3akfE",modal_BG:"Modal_modal_BG__3nMwl",fadeI_BG:"Modal_fadeI_BG__XYwt0",header:"Modal_header__1gwYa",body:"Modal_body__3DgUb",footer:"Modal_footer__1zNuR"}},25:function(e,a,n){e.exports={wrapper:"LaunchCard_wrapper__3CvXK",card:"LaunchCard_card__znk9K",title:"LaunchCard_title__3NRzN",date:"LaunchCard_date__2z8ZZ"}},27:function(e,a,n){e.exports={header:"ModalDetails_header__2XRWr",body:"ModalDetails_body__1bNi2",title:"ModalDetails_title__2hDEv",options:"ModalDetails_options__YhGKZ"}},41:function(e,a,n){e.exports={btn:"Button_btn__3akLw",disabled:"Button_disabled__1w0c7"}},56:function(e,a,n){e.exports={loader:"Loader_loader__2be7Y",moveInFromLeft:"Loader_moveInFromLeft__wbxlZ"}},65:function(e,a,n){},67:function(e,a,n){},74:function(e,a,n){"use strict";n.r(a);var t=n(3),i=n.n(t),c=n(35),s=n.n(c),o=n(22),l=(n(65),n(24)),d=n(55),r=n(21),u=n.n(r),b=n(56),_=n.n(b),j=n(4),f=function(e){var a=e.className;return Object(j.jsx)("div",{"aria-label":"Loading",className:u()(_.a.loader,a)})},h=n(25),m=n.n(h),v=function(e){var a=new Date(e);return"".concat(a.getDate(),"/").concat(a.getMonth()).concat(a.getFullYear())},O=function(e){var a=e.id,n=e.title,t=e.details,i=e.date,c=e.onClick;return t?Object(j.jsxs)("article",{className:m.a.card,onClick:function(){c(a)},role:"button",children:[Object(j.jsx)("h1",{className:m.a.title,children:n}),Object(j.jsx)("p",{children:t}),Object(j.jsx)("span",{className:m.a.date,children:v(i)})]}):null};O.List=function(e){var a=e.children;return Object(j.jsx)("div",{className:m.a.wrapper,children:a})};var p=O,x=n(16),k=n.n(x),w=function(e){var a=e.children,n=e.className,i=e.isVisible,c=void 0!==i&&i,o=e.onDismiss,l=void 0===o?function(){}:o,d=document.body;return Object(t.useEffect)((function(){return d.classList.add(k.a.body_hasModal),function(){d.classList.remove(k.a.body_hasModal)}}),[d]),Object(t.useEffect)((function(){c?d.classList.add(k.a.body_hasModal):(d.classList.remove(k.a.body_hasModal),l())}),[c,l,d]),c?s.a.createPortal(Object(j.jsxs)("div",{className:u()(k.a.wrapper,n),children:[Object(j.jsx)("div",{className:k.a.modal_BG}),Object(j.jsx)("div",{className:k.a.modal,children:a})]}),d):null};w.Header=function(e){var a=e.children,n=e.className;return Object(j.jsx)("div",{className:u()(k.a.header,n),children:a})},w.Body=function(e){var a=e.children,n=e.className;return Object(j.jsx)("div",{className:u()(k.a.body,n),children:a})},w.Footer=function(e){var a=e.children,n=e.className;return Object(j.jsx)("div",{className:u()(k.a.footer,n),children:a})};var M,N=function(e,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,i=Object(t.useRef)();Object(t.useEffect)((function(){i.current=a}),[a]),Object(t.useEffect)((function(){if(n&&n.addEventListener){var a=function(e){return i.current(e)};return n.addEventListener(e,a),function(){n.removeEventListener(e,a)}}}),[e,n])},y=function(){var e=Object(t.useState)(!1),a=Object(l.a)(e,2),n=a[0],i=a[1],c=function(e){var a=Object(t.useState)(!1),n=Object(l.a)(a,2),i=n[0],c=n[1];return N("keydown",(function(a){var n=a.key,t=a.keyCode;n!==e&&t!==e||c(!0)}),window),N("keyup",(function(a){var n=a.key,t=a.keyCode;n!==e&&t!==e||c(!1)}),window),i}(27),s=function(){return i(!1)};return Object(t.useEffect)((function(){n&&c&&s()}),[n,c]),{isVisible:n,showModal:function(){return i(!0)},hiddeModal:s}},g=n(41),L=n.n(g),C=function(e){var a=e.children,n=e.label,t=e.onClick,i=e.disabled,c=void 0!==i&&i,s=e.type,o=void 0===s?"button":s,l=a||n;return l?Object(j.jsx)("button",{className:u()(L.a.btn,c&&L.a.disabled),onClick:function(){!c&&t&&t()},type:o,disabled:c,children:l}):null},E=n(27),B=n.n(E),D=function(e){var a=e.closeAction,n=e.isVisible,t=e.data,i=t.title,c=t.desc,s=t.img,o=void 0===s?"":s,l=t.link,d=o?{backgroundImage:"url(".concat(o,")")}:{};return Object(j.jsxs)(w,{className:B.a.modal,isVisible:n,children:[Object(j.jsx)("div",{className:B.a.header,style:d}),Object(j.jsxs)("div",{className:B.a.body,children:[Object(j.jsx)("h4",{className:B.a.title,children:i}),Object(j.jsx)("span",{children:c}),Object(j.jsxs)("div",{className:B.a.options,children:[Object(j.jsx)(C,{onClick:a,label:"Close"}),!!l&&Object(j.jsx)(C,{onClick:function(){window.location.href=l},label:"See more"})]})]})]})},I=(n(67),Object(o.gql)(M||(M=Object(d.a)(["{\n  launchesPast(limit: 10) {\n    id\n    mission_name\n    details\n    launch_date_utc\n    links {\n      article_link\n      flickr_images\n    }\n  }\n}"])))),F=function(){var e=Object(o.useQuery)(I),a=e.loading,n=e.error,i=e.data,c=void 0===i?{}:i,s=Object(t.useState)({}),d=Object(l.a)(s,2),r=d[0],u=d[1],b=y(),_=b.showModal,h=b.hiddeModal,m=b.isVisible,v=c.launchesPast,O=void 0===v?[]:v,x=function(e){var a=O.find((function(a){return a.id===e})),n=a.links,t=n.flickr_images,i=void 0===t?[]:t;console.log(a),u({title:a.mission_name,desc:a.details,img:i[0]||"",link:n.article_link}),_()};return n&&console.log(n),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(D,{closeAction:h,isVisible:m,data:r}),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h2",{children:"Last launches \ud83d\ude80"}),a?Object(j.jsx)(f,{}):Object(j.jsx)(p.List,{children:O.map((function(e){return Object(j.jsx)(p,{id:e.id,title:e.mission_name,details:e.details,date:e.launch_date_utc,onClick:x},e.id)}))})]})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(a){var n=a.getCLS,t=a.getFID,i=a.getFCP,c=a.getLCP,s=a.getTTFB;n(e),t(e),i(e),c(e),s(e)}))},G=new o.ApolloClient({cache:new o.InMemoryCache,link:new o.HttpLink({uri:"https://api.spacex.land/graphql"})});s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(o.ApolloProvider,{client:G,children:Object(j.jsx)(F,{})})}),document.getElementById("root")),A()}},[[74,1,2]]]);
//# sourceMappingURL=main.538e6400.chunk.js.map