(self.webpackChunktd_doc=self.webpackChunktd_doc||[]).push([[6902],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return o},kt:function(){return k}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var f=r.createContext({}),s=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=s(e.components);return r.createElement(f.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,u=e.originalType,f=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),c=s(n),k=l,d=c["".concat(f,".").concat(k)]||c[k]||p[k]||u;return n?r.createElement(d,i(i({ref:t},o),{},{components:n})):r.createElement(d,i({ref:t},o))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var u=n.length,i=new Array(u);i[0]=c;var a={};for(var f in t)hasOwnProperty.call(t,f)&&(a[f]=t[f]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var s=2;s<u;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},19792:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return f},metadata:function(){return s},toc:function(){return o},default:function(){return c}});var r=n(22122),l=n(19756),u=(n(67294),n(3905)),i=["components"],a={id:"mutations",title:"Mutations",slug:"mutations",sidebar_position:2},f=void 0,s={unversionedId:"reference/api-reference/bsff/mutations",id:"reference/api-reference/bsff/mutations",isDocsHomePage:!1,title:"Mutations",description:"createBsff",source:"@site/docs/reference/api-reference/bsff/mutations.md",sourceDirName:"reference/api-reference/bsff",slug:"/reference/api-reference/bsff/mutations",permalink:"/reference/api-reference/bsff/mutations",editUrl:"https://github.com/MTES-MCT/trackdechets/edit/dev/doc/docs/reference/api-reference/bsff/mutations.md",version:"current",sidebarPosition:2,frontMatter:{id:"mutations",title:"Mutations",slug:"mutations",sidebar_position:2},sidebar:"docs",previous:{title:"Queries",permalink:"/reference/api-reference/bsff/queries"},next:{title:"Objects",permalink:"/reference/api-reference/bsff/objects"}},o=[{value:"createBsff",id:"createbsff",children:[]},{value:"createDraftBsff",id:"createdraftbsff",children:[]},{value:"createFicheInterventionBsff",id:"createficheinterventionbsff",children:[]},{value:"deleteBsff",id:"deletebsff",children:[]},{value:"publishBsff",id:"publishbsff",children:[]},{value:"signBsff",id:"signbsff",children:[]},{value:"updateBsff",id:"updatebsff",children:[]},{value:"updateFicheInterventionBsff",id:"updateficheinterventionbsff",children:[]}],p={toc:o};function c(e){var t=e.components,n=(0,l.Z)(e,i);return(0,u.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"createbsff"},"createBsff"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Type:")," ",(0,u.kt)("a",{parentName:"p",href:"/reference/api-reference/bsff/objects#bsff"},"Bsff!")),(0,u.kt)("p",null,"Mutation permettant de cr\xe9er un nouveau bordereau de suivi de fluides frigorig\xe8nes."),(0,u.kt)("p",null,"Ces champs sont requis :"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"emitter.company.name"),(0,u.kt)("li",{parentName:"ul"},"emitter.company.siret"),(0,u.kt)("li",{parentName:"ul"},"emitter.company.address"),(0,u.kt)("li",{parentName:"ul"},"emitter.company.contact"),(0,u.kt)("li",{parentName:"ul"},"emitter.company.phone"),(0,u.kt)("li",{parentName:"ul"},"emitter.company.mail"),(0,u.kt)("li",{parentName:"ul"},"waste.code"),(0,u.kt)("li",{parentName:"ul"},"waste.adr"),(0,u.kt)("li",{parentName:"ul"},"quantity.kilos")),(0,u.kt)("p",null,"Si vous souhaitez cr\xe9er un BSFF sans ces informations, utilisez createDraftBsff."),(0,u.kt)("p",{style:{marginBottom:"0.4em"}},(0,u.kt)("strong",null,"Arguments")),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Description"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"input",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/inputObjects#bsffinput"},(0,u.kt)("code",null,"BsffInput!"))),(0,u.kt)("td",null)))),(0,u.kt)("h2",{id:"createdraftbsff"},"createDraftBsff"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Type:")," ",(0,u.kt)("a",{parentName:"p",href:"/reference/api-reference/bsff/objects#bsff"},"Bsff!")),(0,u.kt)("p",null,"Mutation permettant de cr\xe9er un nouveau bordereau de suivi de fluides frigorig\xe8nes, \xe0 l'\xe9tat de brouillon.\nUn brouillon n'a pas de champs requis, la validation se fait au moment de le publier."),(0,u.kt)("p",{style:{marginBottom:"0.4em"}},(0,u.kt)("strong",null,"Arguments")),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Description"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"input",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/inputObjects#bsffinput"},(0,u.kt)("code",null,"BsffInput!"))),(0,u.kt)("td",null)))),(0,u.kt)("h2",{id:"createficheinterventionbsff"},"createFicheInterventionBsff"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Type:")," ",(0,u.kt)("a",{parentName:"p",href:"/reference/api-reference/bsff/objects#bsffficheintervention"},"BsffFicheIntervention!")),(0,u.kt)("p",null,"Mutation permettant de cr\xe9er une fiche d'intervention."),(0,u.kt)("p",{style:{marginBottom:"0.4em"}},(0,u.kt)("strong",null,"Arguments")),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Description"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"input",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/inputObjects#bsffficheinterventioninput"},(0,u.kt)("code",null,"BsffFicheInterventionInput!"))),(0,u.kt)("td",null)))),(0,u.kt)("h2",{id:"deletebsff"},"deleteBsff"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Type:")," ",(0,u.kt)("a",{parentName:"p",href:"/reference/api-reference/bsff/objects#bsff"},"Bsff!")),(0,u.kt)("p",null,"Mutation permettant de supprimer un bordereau existant de suivi de fluides frigorig\xe8nes.\n\xc0 condition qu'il n'ait pas encore \xe9t\xe9 sign\xe9."),(0,u.kt)("p",{style:{marginBottom:"0.4em"}},(0,u.kt)("strong",null,"Arguments")),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Description"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"id",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/scalars#id"},(0,u.kt)("code",null,"ID!"))),(0,u.kt)("td",null)))),(0,u.kt)("h2",{id:"publishbsff"},"publishBsff"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Type:")," ",(0,u.kt)("a",{parentName:"p",href:"/reference/api-reference/bsff/objects#bsff"},"Bsff!")),(0,u.kt)("p",null,"Mutation permettant de publier un brouillon."),(0,u.kt)("p",{style:{marginBottom:"0.4em"}},(0,u.kt)("strong",null,"Arguments")),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Description"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"id",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/scalars#id"},(0,u.kt)("code",null,"ID!"))),(0,u.kt)("td",null)))),(0,u.kt)("h2",{id:"signbsff"},"signBsff"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Type:")," ",(0,u.kt)("a",{parentName:"p",href:"/reference/api-reference/bsff/objects#bsff"},"Bsff!")),(0,u.kt)("p",null,"Mutation permettant d'apposer une signature sur le bordereau."),(0,u.kt)("p",{style:{marginBottom:"0.4em"}},(0,u.kt)("strong",null,"Arguments")),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Description"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"id",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/scalars#id"},(0,u.kt)("code",null,"ID!"))),(0,u.kt)("td",null,(0,u.kt)("p",null,"Identifiant du BSFF \xe0 signer."))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"type",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/enums#bsffsignaturetype"},(0,u.kt)("code",null,"BsffSignatureType!"))),(0,u.kt)("td",null,(0,u.kt)("p",null,"Type de signature \xe0 apposer, voir l'enum pour plus de d\xe9tails."))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"signature",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/inputObjects#signatureinput"},(0,u.kt)("code",null,"SignatureInput!"))),(0,u.kt)("td",null,(0,u.kt)("p",null,"Informations \xe0 propos de la personne signant le BSFF."))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"securityCode",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/scalars#int"},(0,u.kt)("code",null,"Int"))),(0,u.kt)("td",null,(0,u.kt)("p",null,"Code de signature de l'auteur de la signature."),(0,u.kt)("p",null,"Ce param\xe8tre est optionnel, il n'est utile que dans le cas o\xf9 vous souhaitez signer pour un tiers sans moyen de vous authentifier \xe0 sa place. Ce tiers peut alors saisir son code de signature dans votre outil."))))),(0,u.kt)("h2",{id:"updatebsff"},"updateBsff"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Type:")," ",(0,u.kt)("a",{parentName:"p",href:"/reference/api-reference/bsff/objects#bsff"},"Bsff!")),(0,u.kt)("p",null,"Mutation permettant de modifier un bordereau existant de suivi de fluides frigorig\xe8nes."),(0,u.kt)("p",{style:{marginBottom:"0.4em"}},(0,u.kt)("strong",null,"Arguments")),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Description"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"id",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/scalars#id"},(0,u.kt)("code",null,"ID!"))),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"input",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/inputObjects#bsffinput"},(0,u.kt)("code",null,"BsffInput!"))),(0,u.kt)("td",null)))),(0,u.kt)("h2",{id:"updateficheinterventionbsff"},"updateFicheInterventionBsff"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Type:")," ",(0,u.kt)("a",{parentName:"p",href:"/reference/api-reference/bsff/objects#bsffficheintervention"},"BsffFicheIntervention!")),(0,u.kt)("p",null,"Mutation permettant de mettre \xe0 jour une fiche d'intervention."),(0,u.kt)("p",{style:{marginBottom:"0.4em"}},(0,u.kt)("strong",null,"Arguments")),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Description"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"id",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/scalars#id"},(0,u.kt)("code",null,"ID!"))),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"input",(0,u.kt)("br",null),(0,u.kt)("a",{href:"/reference/api-reference/bsff/inputObjects#bsffficheinterventioninput"},(0,u.kt)("code",null,"BsffFicheInterventionInput!"))),(0,u.kt)("td",null)))))}c.isMDXComponent=!0}}]);