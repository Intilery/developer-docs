(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(139)),i={id:"track",title:"Track Schema",sidebar_label:"Track"},c={unversionedId:"schema/track",id:"schema/track",isDocsHomePage:!1,title:"Track Schema",description:"The track API call is how you record any actions your users perform, along with any properties that describe the action.",source:"@site/docs/schema/track.md",slug:"/schema/track",permalink:"/docs/schema/track",version:"current",sidebar_label:"Track",sidebar:"schema",previous:{title:"Identify Schema",permalink:"/docs/schema/identify"},next:{title:"Screen Schema",permalink:"/docs/schema/screen"}},l=[{value:"Example",id:"example",children:[]},{value:"Identities",id:"identities",children:[]},{value:"Event",id:"event",children:[]},{value:"Properties",id:"properties",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"track")," API call is how you record any actions your users perform, along with any properties that describe the action."),Object(o.b)("p",null,"Each action is known as an event. Each event has a name, like ",Object(o.b)("strong",{parentName:"p"},"User Registered"),", and properties, for example a ",Object(o.b)("strong",{parentName:"p"},"User Registered")," event might have properties like ",Object(o.b)("inlineCode",{parentName:"p"},"plan")," or ",Object(o.b)("inlineCode",{parentName:"p"},"accountType"),". Calling ",Object(o.b)("inlineCode",{parentName:"p"},"track")," in the ",Object(o.b)("a",{parentName:"p",href:"/docs/tag/tag1"},"Website Tag")," or ",Object(o.b)("a",{parentName:"p",href:"/docs/apis/api"},"HTTP API")," is the first step to integrating and using Intilery."),Object(o.b)("p",null,"Here\u2019s the payload of a typical ",Object(o.b)("inlineCode",{parentName:"p"},"track")," call with most ",Object(o.b)("a",{parentName:"p",href:"/docs/schema/common"},"common fields")," removed:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "track",\n  "event": "User Registered",\n  "properties": {\n    "plan": "Pro Annual",\n    "accountType" : "Facebook"\n  }\n}\n')),Object(o.b)("p",null,"And here\u2019s the corresponding Javascript event that would generate the above payload:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'analytics.track("User Registered", {\n  plan: "Pro Annual",\n  accountType: "Facebook"\n});\n')),Object(o.b)("p",null,"Beyond the common fields, the ",Object(o.b)("inlineCode",{parentName:"p"},"track")," call has the following fields:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Field"),Object(o.b)("th",{parentName:"tr",align:null}),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"event")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"required")),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"Name of the action that a user has performed. See the ",Object(o.b)("a",{parentName:"td",href:"#event"},"Event field docs")," for more details.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"properties")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"optional")),Object(o.b)("td",{parentName:"tr",align:null},"Object"),Object(o.b)("td",{parentName:"tr",align:null},"Free-form dictionary of properties of the event, like ",Object(o.b)("inlineCode",{parentName:"td"},"revenue")," See the ",Object(o.b)("a",{parentName:"td",href:"#properties"},"Properties docs")," for a list of reserved property names.")))),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Here\u2019s a complete example of a ",Object(o.b)("inlineCode",{parentName:"p"},"track")," call:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "anonymousId": "23adfd82-aa0f-45a7-a756-24f2a7a4c895",\n  "context": {\n    "library": {\n      "name": "analytics.js",\n      "version": "2.11.1"\n    },\n    "page": {\n      "path": "/academy/",\n      "referrer": "",\n      "search": "",\n      "title": "Analytics Academy",\n      "url": "https://intilery.com/academy/"\n    },\n    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36",\n    "ip": "108.0.78.21"\n  },\n  "event": "Course Clicked",\n  "integrations": {},\n  "messageId": "ajs-f8ca1e4de5024d9430b3928bd8ac6b96",\n  "properties": {\n    "title": "Intro to Analytics"\n  },\n  "receivedAt": "2015-12-12T19:11:01.266Z",\n  "sentAt": "2015-12-12T19:11:01.169Z",\n  "timestamp": "2015-12-12T19:11:01.249Z",\n  "type": "track",\n  "userId": "AiUGstSDIg",\n  "originalTimestamp": "2015-12-12T19:11:01.152Z"\n}\n')),Object(o.b)("h2",{id:"identities"},"Identities"),Object(o.b)("p",null,"The User ID is a unique identifier for the user performing the actions. Check out the ",Object(o.b)("a",{parentName:"p",href:"/docs/schema/identify#user-id"},"User ID docs")," for more detail."),Object(o.b)("p",null,"The Anonymous ID can be any pseudo-unique identifier, for cases where you don\u2019t know who the user is, but you still want to tie them to an event. Check out the ",Object(o.b)("a",{parentName:"p",href:"/docs/schema/identify#anonymous-id"},"Anonymous ID docs")," for more detail."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note: In ourwebsite tag and mobile libraries (coming soon) a User ID is automatically added")," from the state stored by a previous ",Object(o.b)("a",{parentName:"p",href:"/docs/schema/identify/"},Object(o.b)("inlineCode",{parentName:"a"},"identify"))," call, so you do not need to add it yourself. They will also automatically handle Anonymous ID\u2019s under the covers."),Object(o.b)("h2",{id:"event"},"Event"),Object(o.b)("p",null,"Every ",Object(o.b)("inlineCode",{parentName:"p"},"track")," call records a single user action. We call these \u201cevents\u201d. We recommend that you make your event names human-readable, so that everyone on your team (even you, after all that caffeine) can know what they mean instantly."),Object(o.b)("p",null,"Do not use nondescript names like ",Object(o.b)("strong",{parentName:"p"},"Event 12")," or ",Object(o.b)("strong",{parentName:"p"},"TMDropd"),". Instead, use unique but recognizable names like ",Object(o.b)("strong",{parentName:"p"},"Video Recorded")," and ",Object(o.b)("strong",{parentName:"p"},"Order Completed"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"We recommend event names built from a noun and past-tense verb.")),Object(o.b)("p",null,"We have standardized a series of reserved event names that have special semantic meaning. See the ",Object(o.b)("a",{parentName:"p",href:"/docs/schema/intilery"},"Semantic Events docs")," for more detail."),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("p",null,"Properties are extra pieces of information you can tie to events you track. They can be anything that will be useful while analyzing the events later. We recommend sending properties whenever possible because they give you a more complete picture of what your users are doing."),Object(o.b)("p",null,"We\u2019ve reserved some properties that have semantic meanings, and we handle them in special ways. For example, we always expect ",Object(o.b)("inlineCode",{parentName:"p"},"revenue")," to be a dollar amount that we send to tools that handle revenue tracking."),Object(o.b)("p",null,"You should ",Object(o.b)("strong",{parentName:"p"},"only use reserved properties for their intended meaning"),"."),Object(o.b)("p",null,"The following is all the reserved properties we have standardized that apply to all events. Check out the ",Object(o.b)("a",{parentName:"p",href:"/docs/schema/intilery"},"Semantic Events docs")," for properties specific to individual reserved events."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"th"},"Property")),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"th"},"Type")),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"th"},"Description")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"revenue")),Object(o.b)("td",{parentName:"tr",align:null},"Number"),Object(o.b)("td",{parentName:"tr",align:null},"Amount of revenue an event resulted in. This should be a decimal value, so a shirt worth \xa319.99 would result in a ",Object(o.b)("inlineCode",{parentName:"td"},"revenue")," of ",Object(o.b)("inlineCode",{parentName:"td"},"19.99"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"currency")),Object(o.b)("td",{parentName:"tr",align:null},"String"),Object(o.b)("td",{parentName:"tr",align:null},"Currency of the revenue an event resulted in This should be sent in the ",Object(o.b)("a",{parentName:"td",href:"http://en.wikipedia.org/wiki/ISO_4217"},"ISO 4127 format"),". If this is not set, we assume the revenue to be in US dollars.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"value")),Object(o.b)("td",{parentName:"tr",align:null},"Number"),Object(o.b)("td",{parentName:"tr",align:null},"An abstract \u201cvalue\u201d to associate with an event. This is typically used in situations where the event doesn\u2019t generate real-dollar revenue, but has an intrinsic value to a marketing team, like newsletter signups.")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," You might be used to some destinations recognizing special properties differently. For example, Mixpanel has a special ",Object(o.b)("inlineCode",{parentName:"p"},"track_charges")," method for accepting revenue. Luckily, you don\u2019t have to worry about those inconsistencies. Just pass us ",Object(o.b)("inlineCode",{parentName:"p"},"revenue"),". ",Object(o.b)("strong",{parentName:"p"},"We\u2019ll handle all of the destination-specific conversions for you automatically.")," Same goes for the rest of the reserved properties."))}p.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||o;return n?r.a.createElement(u,c(c({ref:t},s),{},{components:n})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);