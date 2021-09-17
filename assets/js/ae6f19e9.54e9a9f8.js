(self.webpackChunktd_doc=self.webpackChunktd_doc||[]).push([[2932],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=n.createContext({}),o=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=o(e.components);return n.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,l=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=o(t),f=s,k=p["".concat(u,".").concat(f)]||p[f]||c[f]||l;return t?n.createElement(k,i(i({ref:r},d),{},{components:t})):n.createElement(k,i({ref:r},d))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var l=t.length,i=new Array(l);i[0]=p;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var o=2;o<l;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},61339:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return d},default:function(){return p}});var n=t(22122),s=t(19756),l=(t(67294),t(3905)),i=["components"],a={id:"queries",title:"Queries",slug:"queries",sidebar_position:1},u=void 0,o={unversionedId:"reference/api-reference/bsdasri/queries",id:"reference/api-reference/bsdasri/queries",isDocsHomePage:!1,title:"Queries",description:"bsdasri",source:"@site/docs/reference/api-reference/bsdasri/queries.md",sourceDirName:"reference/api-reference/bsdasri",slug:"/reference/api-reference/bsdasri/queries",permalink:"/reference/api-reference/bsdasri/queries",editUrl:"https://github.com/MTES-MCT/trackdechets/edit/dev/doc/docs/reference/api-reference/bsdasri/queries.md",version:"current",sidebarPosition:1,frontMatter:{id:"queries",title:"Queries",slug:"queries",sidebar_position:1},sidebar:"docs",previous:{title:"Scalars",permalink:"/reference/api-reference/bsdd/scalars"},next:{title:"Mutations",permalink:"/reference/api-reference/bsdasri/mutations"}},d=[{value:"bsdasri",id:"bsdasri",children:[]},{value:"bsdasriPdf",id:"bsdasripdf",children:[]},{value:"bsdasris",id:"bsdasris",children:[]}],c={toc:d};function p(e){var r=e.components,t=(0,s.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"bsdasri"},"bsdasri"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("a",{parentName:"p",href:"/reference/api-reference/bsdasri/objects#bsdasri"},"Bsdasri!")),(0,l.kt)("p",null,"EXPERIMENTAL - Ne pas utiliser dans un contexte de production"),(0,l.kt)("p",{style:{marginBottom:"0.4em"}},(0,l.kt)("strong",null,"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Name"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"id",(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#id"},(0,l.kt)("code",null,"ID!"))),(0,l.kt)("td",null,(0,l.kt)("p",null,"Identifiant du BSD"))))),(0,l.kt)("h2",{id:"bsdasripdf"},"bsdasriPdf"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("a",{parentName:"p",href:"/reference/api-reference/bsdasri/objects#filedownload"},"FileDownload!")),(0,l.kt)("p",null,"Renvoie un token pour t\xe9l\xe9charger un pdf de bordereau\nCe token doit \xeatre transmis \xe0 la route /download pour obtenir le fichier.\nIl est valable 10 secondes"),(0,l.kt)("p",{style:{marginBottom:"0.4em"}},(0,l.kt)("strong",null,"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Name"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"id",(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#id"},(0,l.kt)("code",null,"ID"))),(0,l.kt)("td",null,(0,l.kt)("p",null,"ID d'un bordereau"))))),(0,l.kt)("h2",{id:"bsdasris"},"bsdasris"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("a",{parentName:"p",href:"/reference/api-reference/bsdasri/objects#bsdasriconnection"},"BsdasriConnection!")),(0,l.kt)("p",null,"EXPERIMENTAL - Ne pas utiliser dans un contexte de production\nRenvoie les Bsdasris.\nPar d\xe9faut, les dasris des diff\xe9rentes companies de l'utilisateur sont renvoy\xe9s."),(0,l.kt)("p",{style:{marginBottom:"0.4em"}},(0,l.kt)("strong",null,"Arguments")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Name"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"after",(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#id"},(0,l.kt)("code",null,"ID"))),(0,l.kt)("td",null,(0,l.kt)("p",null,"(Optionnel) PAGINATION Permet en conjonction avec ",(0,l.kt)("code",null,"first"),' de paginer "en avant" (des Bsdasri les plus r\xe9cents aux Bsdasri les plus anciens) Curseur apr\xe8s lequel les Bsdasri doivent \xeatre retourn\xe9s Attend un identifiant (propri\xe9t\xe9 ',(0,l.kt)("code",null,"id"),") de BSD D\xe9faut \xe0 vide, pour retourner les Bsdasri les plus r\xe9cents. Le BSD pr\xe9cis\xe9 dans le curseur ne fait pas partie du r\xe9sultat"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"first",(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#int"},(0,l.kt)("code",null,"Int"))),(0,l.kt)("td",null,(0,l.kt)("p",null,"(Optionnel) PAGINATION Permet en conjonction avec ",(0,l.kt)("code",null,"after"),' de paginer "en avant" (des Bsdasri les plus r\xe9cents aux Bsdasri les plus anciens) Nombre de Bsdasri retourn\xe9s apr\xe8s le ',(0,l.kt)("code",null,"cursorAfter"),"D\xe9faut \xe0 50, maximum \xe0 500"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"before",(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#id"},(0,l.kt)("code",null,"ID"))),(0,l.kt)("td",null,(0,l.kt)("p",null,"(Optionnel) PAGINATION Permet en conjonction avec ",(0,l.kt)("code",null,"last"),' de paginer "en arri\xe8re" (des Bsdasri les plus anciens aux Bsdasris les plus r\xe9cents) Curseur avant lequel les Bsdasri doivent \xeatre retourn\xe9s Attend un identifiant (propri\xe9t\xe9 ',(0,l.kt)("code",null,"id"),") de BSD D\xe9faut \xe0 vide, pour retourner les Bsdasri les plus anciens Le BSD pr\xe9cis\xe9 dans le curseur ne fait pas partie du r\xe9sultat"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"last",(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reference/api-reference/bsdasri/scalars#int"},(0,l.kt)("code",null,"Int"))),(0,l.kt)("td",null,(0,l.kt)("p",null,"(Optionnel) PAGINATION Nombre de Bsdasri retourn\xe9s avant le ",(0,l.kt)("code",null,"before"),"D\xe9faut \xe0 50, maximum \xe0 500"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"where",(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reference/api-reference/bsdasri/inputObjects#bsdasriwhere"},(0,l.kt)("code",null,"BsdasriWhere"))),(0,l.kt)("td",null,(0,l.kt)("p",null,"Filtres de recherche"))))))}p.isMDXComponent=!0}}]);