(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,g=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(g,c(c({ref:t},s),{},{components:n})):a.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(120)),i={id:"protocols",title:"Protocols Overview",sidebar_label:"Protocols Overview"},c={unversionedId:"guides/protocols",id:"guides/protocols",isDocsHomePage:!1,title:"Protocols Overview",description:"Intielry helps customers collect and integrate customer data from a wide range of Sources, and to use that data to power personalised marketing campaigns. To do so reliably, the data Intilery receives must be clean, consistent and adhere to a well thought out tracking plan.",source:"@site/docs/guides/protocols.md",permalink:"/docs/guides/protocols",sidebar_label:"Protocols Overview",sidebar:"guides",previous:{title:"Frequently Asked Questions",permalink:"/docs/guides/faq"},next:{title:"What is a tracking plan?",permalink:"/docs/guides/trackingplan"}},l=[{value:"There are four steps to using Protocols",id:"there-are-four-steps-to-using-protocols",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Intielry helps customers collect and integrate customer data from a wide range of Sources, and to use that data to power personalised marketing campaigns. To do so reliably, the data Intilery receives must be clean, consistent and adhere to a well thought out tracking plan."),Object(o.b)("p",null,"Protocols was built to automate and scale the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../guides/data-collection"}),"data quality best practices")," developed over years of helping customers implement Intilery. Investing in data quality will improve trust in your data, reduce time spent by your engineering and business teams navigating and validating data, and ultimately allow your business to grow faster."),Object(o.b)("h2",{id:"there-are-four-steps-to-using-protocols"},"There are four steps to using Protocols"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../guides/trackingplan"}),"1. Align teams with a Tracking Plan")),Object(o.b)("p",null,"Good data quality starts with a well thought out Tracking Plan. With Protocols, you can define your events and corresponding properties in a Tracking Plan. This tracking plan becomes a central source of truth for marketing, product, engineering, analytics, and business teams."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../guides/data-collection"}),"3. Enforce data standards with controls")),Object(o.b)("p",null,"To maintain a high degree of quality over time, we offer strict controls to block non-conforming events. Blocked events are displayed in the event stream."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../guides/validate"}),"2. Validate data quality with violations")),Object(o.b)("p",null,"With your tracking plan living in Intilery, any event or property that does not match the tracking plan will generate a violation. Violations are displayed in the event stream enabling you to validate or fix these. Non conforming events are not recorded. All events (apart from the Intielry default events, page, screen etc) are not recorded until validated."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"4. Resolve data issues with transformations")),Object(o.b)("p",null,"Even the most exacting data collection processes are subject to human error and organizational complexity. Transformations can be applied from within Protocols to change event and property names without touching code. (coming soon)"))}u.isMDXComponent=!0}}]);