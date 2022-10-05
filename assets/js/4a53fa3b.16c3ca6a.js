"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[4944],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return y}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(t),y=a,f=m["".concat(s,".").concat(y)]||m[y]||u[y]||c;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7784:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=t(7462),a=t(3366),c=(t(7294),t(3905)),i=["components"],o={title:"<RecoilURLSyncTransit>",sidebar_label:"<RecoilURLSyncTransit>"},s=void 0,l={unversionedId:"recoil-sync/api/RecoilURLSyncTransit",id:"recoil-sync/api/RecoilURLSyncTransit",title:"<RecoilURLSyncTransit>",description:"A component from the Recoil Sync library to sync atoms using the syncEffect() or urlSyncEffect() atom effects with the browser URL.",source:"@site/docs/recoil-sync/api/RecoilURLSyncTransit.md",sourceDirName:"recoil-sync/api",slug:"/recoil-sync/api/RecoilURLSyncTransit",permalink:"/docs/recoil-sync/api/RecoilURLSyncTransit",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/recoil-sync/api/RecoilURLSyncTransit.md",tags:[],version:"current",frontMatter:{title:"<RecoilURLSyncTransit>",sidebar_label:"<RecoilURLSyncTransit>"},sidebar:"recoil-sync",previous:{title:"<RecoilURLSyncJSON>",permalink:"/docs/recoil-sync/api/RecoilURLSyncJSON"}},p=[{value:"Custom Classes",id:"custom-classes",children:[{value:"Example",id:"example",children:[],level:3}],level:2}],u={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"A component from the ",(0,c.kt)("a",{parentName:"p",href:"/docs/recoil-sync/introduction"},"Recoil Sync library")," to sync atoms using the ",(0,c.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/syncEffect"},(0,c.kt)("inlineCode",{parentName:"a"},"syncEffect()"))," or ",(0,c.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/urlSyncEffect"},(0,c.kt)("inlineCode",{parentName:"a"},"urlSyncEffect()"))," atom effects with the browser URL."),(0,c.kt)("p",null,"This is identical to the ",(0,c.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/RecoilURLSync"},(0,c.kt)("inlineCode",{parentName:"a"},"<RecoilURLSync>"))," component except that it provides built-in ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/cognitect/transit-js"},"Transit encoding"),"."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"function RecoilURLSyncTransit(props: {\n  ...RecoilURLSyncOptions,\n  handlers?: Array<TransitHandler<any, any>>,\n}): React.Node\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"strong"},"handlers"))," - Optional array of handlers for ",(0,c.kt)("a",{parentName:"li",href:"#custom-classes"},"Custom Classes"),". It is important that this is a stable or memoized array instance. Otherwise you may miss URL changes as the listener is re-subscribed.")),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Transit encoding is not as terse or readable as just using ",(0,c.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/RecoilURLSyncJSON"},"JSON"),", however it can support ",(0,c.kt)("inlineCode",{parentName:"p"},"Map")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"Set")," JavaScript containers as well as custom user classes."),(0,c.kt)("h2",{id:"custom-classes"},"Custom Classes"),(0,c.kt)("p",null,"Handlers for custom user classes can be defined with the ",(0,c.kt)("inlineCode",{parentName:"p"},"handlers")," prop:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"type TransitHandler<T, S> = {\n  tag: string;\n  class: Class<T>;\n  write: (T) => S;\n  read: (S) => T;\n};\n")),(0,c.kt)("h3",{id:"example"},"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"class ViewState {\n  active: boolean;\n  pos: [number, number];\n  constructor(active: boolean, pos: [number, number]) {\n    this.active = active;\n    this.pos = pos;\n  }\n  // ...\n}\nconst viewStateChecker = custom((x) => (x instanceof ViewState ? x : null));\n\nconst HANDLERS = [\n  {\n    tag: 'VS',\n    class: ViewState,\n    write: (x) => [x.active, x.pos],\n    read: ([active, pos]) => new ViewState(active, pos),\n  },\n];\n\nfunction MyApp() {\n  return (\n    <RecoilRoot>\n      <RecoilURLSyncTransit\n        storeKey=\"transit-url\"\n        location={{part: 'queryParams', param: 'state'}}\n        handlers={HANDLERS}>\n        {/* children */}\n      </RecoilURLSyncTransit>\n    </RecoilRoot>\n  );\n}\n\nconst ViewState = atom<ViewState>({\n  key: 'ViewState',\n  default: new ViewState(true, [1, 2]),\n  effects: [syncEffect({storeKey: 'transit-url', refine: viewStateChecker})],\n});\n")))}m.isMDXComponent=!0}}]);