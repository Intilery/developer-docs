(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(m,o(o({ref:t},u),{},{components:n})):r.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),i=(n(0),n(126)),c={id:"audiences",title:"Audiences",sidebar_label:"Audiences"},o={unversionedId:"customers/audiences",id:"customers/audiences",isDocsHomePage:!1,title:"Audiences",description:"Audiences allow you to define cohorts of customers based on their event behavior and traits that Intilery then keeps up-to-date over time. Audiences can be built from your core tracking events, traits, or computed traits. These audiences can then be used to target and personalise marketing campaigns as well as audience membership being availavle in the Profile API",source:"@site/docs/customers/audiences.md",permalink:"/docs/customers/audiences",sidebar_label:"Audiences",sidebar:"customers",previous:{title:"SQL Traits",permalink:"/docs/customers/sql-traits"}},s=[{value:"Building an Audience",id:"building-an-audience",children:[{value:"Events",id:"events",children:[]},{value:"Custom Traits",id:"custom-traits",children:[]},{value:"Computed Traits",id:"computed-traits",children:[]}]},{value:"Accessing your Audiences using the Profiles API",id:"accessing-your-audiences-using-the-profiles-api",children:[]}],u={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Audiences allow you to define cohorts of customers based on their event behavior and traits that Intilery then keeps up-to-date over time. Audiences can be built from your core ",Object(i.b)("strong",{parentName:"p"},"tracking events"),", ",Object(i.b)("strong",{parentName:"p"},"traits"),", or ",Object(i.b)("strong",{parentName:"p"},"computed traits"),". These audiences can then be used to target and personalise marketing campaigns as well as audience membership being availavle in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/apis/profile"}),"Profile API")),Object(i.b)("h2",{id:"building-an-audience"},"Building an Audience"),Object(i.b)("p",null,"When building an audience you can use existing events, traits, or computed traits."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/audience1.png",alt:"Events"})),Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/audience2.png",alt:"Events"}))),Object(i.b)("h3",{id:"events"},"Events"),Object(i.b)("p",null,"You can build an audience from any of the events that are sent to Intilery. This includes any ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/schema/track"}),"track"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/schema/page"}),"page"),", or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/schema/screen"}),"screen")," calls. You can use select fields of the event to refine the audience on specific event properties as well. Select either ",Object(i.b)("inlineCode",{parentName:"p"},"required"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Not Required")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," to indicate customers that ",Object(i.b)("inlineCode",{parentName:"p"},"have"),", ",Object(i.b)("inlineCode",{parentName:"p"},"have not")," or ",Object(i.b)("inlineCode",{parentName:"p"},"have optionally")," performed an event. For example, you might want to look at all customers that have viewed a product above a certain price point, but not completed the order."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/audience3.png",alt:"Audience Builder"}))),Object(i.b)("p",null,"You can also specify time-windows, ",Object(i.b)("inlineCode",{parentName:"p"},"in range (quick)"),", ",Object(i.b)("inlineCode",{parentName:"p"},"in range (realative)"),", ",Object(i.b)("inlineCode",{parentName:"p"},"in rage (absolute)"),", ",Object(i.b)("inlineCode",{parentName:"p"},"is before")," and ",Object(i.b)("inlineCode",{parentName:"p"},"is after")," . A common use case is to look at all customers that were active 30 to 90 days ago, but have not completed an action in the last 30 days."),Object(i.b)("h3",{id:"custom-traits"},"Custom Traits"),Object(i.b)("p",null,"You can also build audiences based on custom traits. These traits can be collected from your apps when a customer completes a form, or signs up, using an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/schema/identify"}),"identify")," call. You can also check out the Customer Activity Viewer to see examples of these traits."),Object(i.b)("h3",{id:"computed-traits"},"Computed Traits"),Object(i.b)("p",null,"You can also use computed traits in an audience definition. For example, if you have created a ",Object(i.b)("inlineCode",{parentName:"p"},"total_revenue")," computed trait, you can use this to generate an audience of ",Object(i.b)("inlineCode",{parentName:"p"},"big_spender")," customers that exceed a certain threshold."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/audience4.png",alt:"Computed Traits"}))),Object(i.b)("h2",{id:"accessing-your-audiences-using-the-profiles-api"},"Accessing your Audiences using the Profiles API"),Object(i.b)("p",null,"You can access your audiences using the Profile API by querying the ",Object(i.b)("inlineCode",{parentName:"p"},"/traits")," endpoint. For example, if you can query for the ",Object(i.b)("inlineCode",{parentName:"p"},"high_value_user")," with the following GET request:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"https://tracking.intilery.com/track/intilery/marketing/MARKETING/v1/profiles/email:xxx.xxx@intilery.com/audiences\n")),Object(i.b)("p",null,"returns:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "lastName": "Bloggs",\n    "website": "www.intilery.com",\n    "externalId": "joe.bloggs@intilery.com",\n    "organisation": "Intilery",\n    "industry": "Other",\n    "firstName": "Joe",\n    "phone": "+44111222333444",\n    "id": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",\n    "email": "joe.bloggs@intilery.com",\n    "audiences": [\n        "high value customers"\n    ]\n}\n')),Object(i.b)("p",null,"You can read the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/apis/profile"}),"full Profile API docs")," to learn more."))}l.isMDXComponent=!0}}]);