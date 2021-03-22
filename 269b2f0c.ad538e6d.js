(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,h=m["".concat(i,".").concat(p)]||m[p]||u[p]||o;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(124)),i={id:"contents",title:"Contents",sidebar_label:"Contents"},s={unversionedId:"guides/contents",id:"guides/contents",isDocsHomePage:!1,title:"Contents",description:"How to use these docs",source:"@site/docs/guides/contents.md",permalink:"/docs/guides/contents",sidebar_label:"Contents",sidebar:"guides",next:{title:"Simple Integration",permalink:"/docs/guides/simple"}},c=[{value:"How to use these docs",id:"how-to-use-these-docs",children:[]},{value:"What Is Intilery?",id:"what-is-intilery",children:[]},{value:"What does it do?",id:"what-does-it-do",children:[]},{value:"How does Intilery work?",id:"how-does-intilery-work",children:[{value:"Intilery Messages",id:"intilery-messages",children:[]},{value:"Anatomy of an Intilery message",id:"anatomy-of-an-intilery-message",children:[]}]},{value:"Where you can track",id:"where-you-can-track",children:[]},{value:"The Intilery Methods",id:"the-intilery-methods",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-to-use-these-docs"},"How to use these docs"),Object(o.b)("p",null,"These docs are aimed at those who are integrating itnilery into their marketing stack and will give you a guide to getting started, what you need to prepare to make sure you can build the best customer engagement automations for your business. "),Object(o.b)("h2",{id:"what-is-intilery"},"What Is Intilery?"),Object(o.b)("p",null,"Intilery is a modern Customer Engagement Platform, combining a Customer Data Platform, Single Customer View, Dynamic Content, Audiences, Journeys and Campaign delivery, which means that we provide a platform that simplifies the collecting and using of data from customers of your digital (and offline) properties (websites, apps, EPOs, telematics, policy systems, etc). With Intilery , you can collect, transform, utilise, and send first-party customer data in a GDPR complaint we, with privacy at the heart of what we do. We simplify the process of collecting data and using it effectively, allowing you to spend more time using your data, and less time trying to format, transport and collect it."),Object(o.b)("p",null,"You can also enrich the customer data you collect by connecting data from your other tools and integrations, and then aggregate it to monitor performance, inform decision-making processes, and create uniquely customized user experiences."),Object(o.b)("h2",{id:"what-does-it-do"},"What does it do?"),Object(o.b)("p",null,"In its very simplest form, Intilery generates messages about what\u2019s happening in your site or app, then translates the content of those messages into different formats for use by the products within the Intilery platform (email, journeys, audiences etc.). The Intilery servers also archive a copy of the data to build up the Intilery Single Customer View."),Object(o.b)("h2",{id:"how-does-intilery-work"},"How does Intilery work?"),Object(o.b)("p",null,"Intilery's libraries generate and send messages to our tracking API in JSON format. We provide a standard structure for the basic API calls, along with a recommended JSON structure (also known as the \u2018Schema\u2019) that helps keep the most important parts of your data consistent, while allowing great flexibility in what other information you collect and where."),Object(o.b)("h3",{id:"intilery-messages"},"Intilery Messages"),Object(o.b)("p",null,"When you implement Intilery, you add our code to your website, app, or server, which generates messages based on specific triggers you define. At its very simplest, this code can be a snippet that you copy and paste into the HTML of a website to track page views. It can also be as complex as Intilery calls embedded in a React mobile app to send messages when the app is opened or closed, when the user performs different actions, or when time based conditions are met (for example \u201cticket reservation expired\u201d or \u201ccart abandoned after 2 hours\u201d)."),Object(o.b)("p",null,"Messages can be sent using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/tag/tag1"}),"Website Tag")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/apis/api"}),"REST API")),Object(o.b)("h3",{id:"anatomy-of-an-intilery-message"},"Anatomy of an Intilery message"),Object(o.b)("p",null,"The most basic Intilery message requires only a ",Object(o.b)("inlineCode",{parentName:"p"},"userID")," or ",Object(o.b)("inlineCode",{parentName:"p"},"anonymousID"),"; all other fields are optional to allow for maximum flexibility. However, a normal Intilery message has three main parts: the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/schema/common"}),"common fields"),", the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/schema/common#context"}),"\u201ccontext\u201d object"),", and the properties (if it\u2019s an event) or traits (if it\u2019s an object)."),Object(o.b)("p",null,"The common fields include information specific to how the call was generated, like the timestamp and library name and version. The fields in the context object are usually generated by the library, and include information about the environment in which the call was generated: page path, user agent, OS, locale settings, etc. The properties and traits are optional and are where you customize the information you want to collect for your implementation."),Object(o.b)("h2",{id:"where-you-can-track"},"Where you can track"),Object(o.b)("p",null,"Intilery supports several ways to implement tracking. The two most common are to use ",Object(o.b)("em",{parentName:"p"},"device-based")," or ",Object(o.b)("em",{parentName:"p"},"server-based")," libraries. You can use Intilery device-based libraries, such as JavaScript, iOS, and Android (iOS and Android comming soon), to make calls on users\u2019 browsers or mobile devices. You can also track data server side by calling the Intilery REST API."),Object(o.b)("h2",{id:"the-intilery-methods"},"The Intilery Methods"),Object(o.b)("p",null,"The Intilery libraries generate messages about what happens on your interface, translate those messages into different formats for use by destinations, and transmit the messages to those tools."),Object(o.b)("p",null,"There are several ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/schema/contents"}),"tracking API methods"),", which can be called to generate messages. The four most important methods are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/schema/identify"}),"Identify"),": who is the user?"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/schema/page/"}),"Page")," and ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/schema/screen"}),"Screen"),": what web page or app screen are they on?"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/schema/track"}),"Track"),": what are they doing?")),Object(o.b)("p",null,"Every call shares the same ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/schema/common"}),"common fields"),". When you use these methods it allows Intilery to detect specific type of data, and correctly translate it to send it on to the Intilery platform."))}d.isMDXComponent=!0}}]);