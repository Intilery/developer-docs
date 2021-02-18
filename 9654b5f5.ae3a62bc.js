(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return d}));var a=r(3),n=r(7),o=(r(0),r(139)),i={id:"faq",title:"Frequently Asked Questions",sidebar_label:"FAQs"},c={unversionedId:"guides/faq",id:"guides/faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"These are the most frequently asked questions. Please read these if you are new to Intilery.",source:"@site/docs/guides/faq.md",slug:"/guides/faq",permalink:"/docs/guides/faq",version:"current",sidebar_label:"FAQs",sidebar:"guides",previous:{title:"A full Intilery implementation",permalink:"/docs/guides/fullimp"},next:{title:"Protocols Overview",permalink:"/docs/guides/protocols"}},s=[{value:"How do I back fill / back populate my customers?",id:"how-do-i-back-fill--back-populate-my-customers",children:[]},{value:"What triats (fields/properties) can I add to my customer?",id:"what-triats-fieldsproperties-can-i-add-to-my-customer",children:[]}],u={toc:s};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"These are the most frequently asked questions. Please read these if you are new to Intilery. "),Object(o.b)("h3",{id:"how-do-i-back-fill--back-populate-my-customers"},"How do I back fill / back populate my customers?"),Object(o.b)("p",null,"In order to back populate your customers, you should first upload your existing customer records with the Audience Upload feature from an .csv file or ",Object(o.b)("a",{parentName:"p",href:"/docs/apis/api#batch"},"batch")," send a set of ",Object(o.b)("a",{parentName:"p",href:"/docs/apis/api#identify-action"},"identify")," events to the API"),Object(o.b)("p",null,"Once your customers have been uploaded, you can then ",Object(o.b)("a",{parentName:"p",href:"/docs/apis/api#batch"},"batch")," upload the events with the ",Object(o.b)("a",{parentName:"p",href:"/docs/apis/api#track-action"},"track api")," for your customers in the format matching the schema you created and validated, see ",Object(o.b)("a",{parentName:"p",href:"/docs/guides/protocols"},"tracking events")),Object(o.b)("h3",{id:"what-triats-fieldsproperties-can-i-add-to-my-customer"},"What triats (fields/properties) can I add to my customer?"),Object(o.b)("p",null,"There are a set of reserved trait names that can be used, these are detailed at ",Object(o.b)("a",{parentName:"p",href:"/docs/schema/identify#traits"},"common traits"),", traits are set as using the ",Object(o.b)("a",{parentName:"p",href:"/docs/tag/reference#identify"},"identify tag event")," or the ",Object(o.b)("a",{parentName:"p",href:"/docs/apis/api#identify-action"},"identify api event")," or an identify event from one of our SDKs."),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/docs/schema/identify#traits"},"common traits")," do not need to be validated."),Object(o.b)("p",null,"Any addtional traits that you send that you have not validated, will need to be validated before they are saved against the customer, see ",Object(o.b)("a",{parentName:"p",href:"/docs/guides/validate-schema"},"validate schema")," for adding new traits."))}d.isMDXComponent=!0},139:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),d=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),f=a,b=p["".concat(i,".").concat(f)]||p[f]||l[f]||o;return r?n.a.createElement(b,c(c({ref:t},u),{},{components:r})):n.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);