(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[7592],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6467:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"screen",title:"Screen Schema",sidebar_label:"Screen"},l=void 0,s={unversionedId:"schema/screen",id:"schema/screen",isDocsHomePage:!1,title:"Screen Schema",description:"The screen call lets you record whenever a user sees a screen, the mobile equivalent of page, in your mobile app, along with any properties about the screen. Calling page or screen in one of our in analytics.js or HTTP API is the first step in getting started with Intilery.",source:"@site/docs/schema/screen.md",sourceDirName:"schema",slug:"/schema/screen",permalink:"/docs/schema/screen",version:"current",frontMatter:{id:"screen",title:"Screen Schema",sidebar_label:"Screen"},sidebar:"schema",previous:{title:"Track",permalink:"/docs/schema/track"},next:{title:"Page",permalink:"/docs/schema/page"}},p=[{value:"Example",id:"example",children:[]},{value:"Identities",id:"identities",children:[]},{value:"Name",id:"name",children:[]},{value:"Properties",id:"properties",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"screen")," call lets you record whenever a user sees a screen, the mobile equivalent of ",(0,i.kt)("inlineCode",{parentName:"p"},"page"),", in your mobile app, along with any properties about the screen. Calling ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"screen")," in one of our in analytics.js or HTTP API is the first step in getting started with Intilery."),(0,i.kt)("p",null,"Here\u2019s the payload of a typical ",(0,i.kt)("inlineCode",{parentName:"p"},"screen")," call, with most ",(0,i.kt)("a",{parentName:"p",href:"/docs/schema/common"},"common fields")," removed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "screen",\n  "name": "Home",\n  "properties": {\n    "Feed Type": "private"\n  }\n}\n')),(0,i.kt)("p",null,"And here\u2019s the corresponding Objective-C event that would generate the above payload:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objective-c"},'[[SEGAnalytics sharedAnalytics] screen:@"Home"\n                            properties:@{ @"Feed Type": @"private" }];\n')),(0,i.kt)("p",null,"Beyond the common fields, the ",(0,i.kt)("inlineCode",{parentName:"p"},"screen")," call takes the following fields:"),(0,i.kt)("p",null,"_"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"optional")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the screen See the ",(0,i.kt)("a",{parentName:"td",href:"#name"},"Name field docs")," for more details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"properties")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"optional")),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"Free-form dictionary of properties of the screen, like ",(0,i.kt)("inlineCode",{parentName:"td"},"name")," See the ",(0,i.kt)("a",{parentName:"td",href:"#properties"},"Properties field docs")," for a list of reserved property names.")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Here\u2019s a complete example of a ",(0,i.kt)("inlineCode",{parentName:"p"},"screen")," call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "anonymousId": "3a12eab0-bca7-11e4-8dfc-aa07a5b093db",\n  "channel": "mobile",\n  "context": {\n    "ip": "8.8.8.8"\n  },\n  "integrations": {\n    "All": true,\n    "Mixpanel": false,\n    "Salesforce": false\n  },\n  "messageId": "022bb90c-bbac-11e4-8dfc-aa07a5b093db",\n  "name": "Home",\n  "properties": {\n    "variation": "blue signup button"\n  },\n  "receivedAt": "2015-02-23T22:28:55.387Z",\n  "sentAt": "2015-02-23T22:28:55.111Z",\n  "timestamp": "2015-02-23T22:28:55.111Z",\n  "type": "screen",\n  "userId": "97980cfea0067",\n  "version": "1.1"\n}\n')),(0,i.kt)("h2",{id:"identities"},"Identities"),(0,i.kt)("p",null,"The User ID is a unique identifier for the user performing the actions. Check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/schema/identify#user-id"},"User ID docs")," for more detail."),(0,i.kt)("p",null,"The Anonymous ID can be any pseudo-unique identifier, for cases where you don\u2019t know who the user is, but you still want to tie them to an event. Check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/schema/identify#anonymous-id"},"Anonymous ID docs")," for more detail."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: In our browser and mobile libraries a User ID is automatically added")," from the state stored by a previous ",(0,i.kt)("a",{parentName:"p",href:"/docs/schema/identify/"},(0,i.kt)("inlineCode",{parentName:"a"},"identify"))," call, so you do not need to add it yourself. They will also automatically handle Anonymous ID\u2019s under the covers."),(0,i.kt)("h2",{id:"name"},"Name"),(0,i.kt)("p",null,"Each screen can be tagged with a ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),". For example, many apps have a \u201cSignup\u201d screen that can be useful to tag so that you can see users as they move through your funnel."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("p",null,"Properties are extra pieces of information that describe the screen. They can be anything you want."),(0,i.kt)("p",null,"We\u2019ve reserved some properties that have semantic meanings, and we handle them in special ways. You should ",(0,i.kt)("strong",{parentName:"p"},"only use reserved properties for their intended meaning"),"."),(0,i.kt)("p",null,"Reserved properties we have standardized:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Property")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Type")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the screen. This is reserved for future use.")))))}m.isMDXComponent=!0}}]);