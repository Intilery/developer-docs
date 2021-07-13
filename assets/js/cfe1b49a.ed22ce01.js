(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[5101],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=o(n),d=i,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||r;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7495:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return o},default:function(){return m}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),l={id:"intilery",title:"Intilery Core Schema",sidebar_label:"Intilery Schema"},p=void 0,c={unversionedId:"schema/intilery",id:"schema/intilery",isDocsHomePage:!1,title:"Intilery Core Schema",description:"The following events are reserved events in the Intilery Core Schema, you should not use these Event names/types except for their intended purpose.",source:"@site/docs/schema/intilery.md",sourceDirName:"schema",slug:"/schema/intilery",permalink:"/docs/schema/intilery",version:"current",frontMatter:{id:"intilery",title:"Intilery Core Schema",sidebar_label:"Intilery Schema"},sidebar:"schema",previous:{title:"Introduction",permalink:"/docs/schema/contents"},next:{title:"Common",permalink:"/docs/schema/common"}},o=[{value:"App",id:"app",children:[{value:"Application Lifecycle Events",id:"application-lifecycle-events",children:[]},{value:"Campaign Events",id:"campaign-events",children:[]}]},{value:"Email",id:"email",children:[]},{value:"SMS",id:"sms",children:[]},{value:"API",id:"api",children:[]},{value:"Subscription",id:"subscription",children:[]},{value:"Industry",id:"industry",children:[]}],u={toc:o};function m(e){var t=e.components,l=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following events are reserved events in the Intilery Core Schema, you should not use these Event names/types except for their intended purpose."),(0,r.kt)("p",null,"These events can be found in the Intilery app on the Schema page shown below"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Schema",src:n(7472).Z})),(0,r.kt)("h1",{id:"core-events"},"Core Events"),(0,r.kt)("h2",{id:"app"},"App"),(0,r.kt)("h3",{id:"application-lifecycle-events"},"Application Lifecycle Events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./app#application-installed"},"Application Installed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./app#application-opened"},"Application Opened")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./app#application-updated"},"Application Updated")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./app#application-backgrounded"},"Application Backgrounded")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./app#application-crashed"},"Application Crashed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./app#application-uninstalled"},"Application Uninstalled"))),(0,r.kt)("h3",{id:"campaign-events"},"Campaign Events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./app#push-notification-received"},"Push Notification Received")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./app#push-notification-tapped"},"Push Notification Tapped")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./app#push-notification-bounced"},"Push Notification Bounced")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./app#install-attributed"},"Install Attributed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./app#deep-link-clicked"},"Deep Link Clicked")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./app#deep-link-opened"},"Deep Link Opened")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./app#install-attributed"},"Install Attributed"))),(0,r.kt)("h2",{id:"email"},"Email"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./email#email-bounced"},"Email Bounced")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./email#email-delivered"},"Email Delivered")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./email#email-link-clicked"},"Email Link Clicked")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./email#email-marked-as-spam"},"Email Marked as Spam")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./email#email-opened"},"Email Opened")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./email#unsubscribed"},"Unsubscribed"))),(0,r.kt)("h2",{id:"sms"},"SMS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./sms#sms-sent"},"SMS Sent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./sms#sms-not-sent"},"SMS Not Sent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./sms#sms-delivered"},"SMS Delivered"))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./identify"},"Identify")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./track"},"Track")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./page"},"Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./screen"},"Screen"))),(0,r.kt)("h2",{id:"subscription"},"Subscription"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./subscription"},"usubscribe from channel"))),(0,r.kt)("h2",{id:"industry"},"Industry"),(0,r.kt)("p",null,"The following industry schemas can be added to your account within the Intilery CDP, enabling default events to be automatically recognised"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./retail"},"Retail/Ecommerce")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./gaming"},"Gaming")),(0,r.kt)("li",{parentName:"ul"},"Travel"),(0,r.kt)("li",{parentName:"ul"},"Insurance"),(0,r.kt)("li",{parentName:"ul"},"B2B")))}m.isMDXComponent=!0},7472:function(e,t,n){"use strict";t.Z=n.p+"assets/images/schema-default-fb3082de2c77788508f84cd30183148f.png"}}]);