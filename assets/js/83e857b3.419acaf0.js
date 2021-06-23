(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[6068],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2511:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i={id:"mtcs",title:"MTCs, MTVs, Throughput and Billing",sidebar_label:"MTCs, MTVs, Throughput and Billing"},s={unversionedId:"guides/mtcs",id:"guides/mtcs",isDocsHomePage:!1,title:"MTCs, MTVs, Throughput and Billing",description:"What is an MTC?",source:"@site/docs/guides/mtcs.md",sourceDirName:"guides",slug:"/guides/mtcs",permalink:"/docs/guides/mtcs",version:"current",sidebar_label:"MTCs, MTVs, Throughput and Billing",frontMatter:{id:"mtcs",title:"MTCs, MTVs, Throughput and Billing",sidebar_label:"MTCs, MTVs, Throughput and Billing"},sidebar:"guides",previous:{title:"Best practices in identifying customers",permalink:"/docs/guides/identifying-customers"},next:{title:"Protocols Overview",permalink:"/docs/guides/protocols"}},l=[{value:"What is an MTC?",id:"what-is-an-mtc",children:[]},{value:"What is an MTV?",id:"what-is-an-mtv",children:[]},{value:"What is an API call?",id:"what-is-an-api-call",children:[]},{value:"What is throughput?",id:"what-is-throughput",children:[]},{value:"How does Intilery calculate MTCs?",id:"how-does-intilery-calculate-mtcs",children:[]},{value:"How does Intilery calculate MTVs?",id:"how-does-intilery-calculate-mtvs",children:[]},{value:"What is the difference between an event and an object?",id:"what-is-the-difference-between-an-event-and-an-object",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-an-mtc"},"What is an MTC?"),(0,r.kt)("p",null,"MTC stands for \u201cmonthly tracked customer\u201d. (Keep reading to learn ",(0,r.kt)("a",{parentName:"p",href:"#how-does-intilery-calculate-mtcs"},"how Intilery counts MTCs"),".)"),(0,r.kt)("h2",{id:"what-is-an-mtv"},"What is an MTV?"),(0,r.kt)("p",null,"MTV stands for \u201cmonthly tracked visitors\u201d. (Keep reading to learn ",(0,r.kt)("a",{parentName:"p",href:"#how-does-intilery-calculate-mtvs"},"how Intilery counts MTCs"),".)"),(0,r.kt)("h2",{id:"what-is-an-api-call"},"What is an API call?"),(0,r.kt)("p",null,"When you use Intilery to collect your data, you use the Intilery tracking methods (Track, Page, Screen, Identify, Group (coming soon), and Alias (coming soon)) which collect the data ",(0,r.kt)("a",{parentName:"p",href:"/docs/schema/contents"},"in a structured way"),", and then send it to ",(0,r.kt)("inlineCode",{parentName:"p"},"events.intilery.com"),". If you are using the Intilery HTTP API, or sending batched data using a cloud-source, that data also goes through this Intilery API endpoint."),(0,r.kt)("p",null,"Each data blob (with its properties or traits) goes through this endpoint, and is considered one \u201cAPI call\u201d."),(0,r.kt)("h2",{id:"what-is-throughput"},"What is throughput?"),(0,r.kt)("p",null,"Depending on your Intilery account type, your plan might include a throughput limit. The throughput limit tells you how many API calls and objects Intilery allows you per MTC."),(0,r.kt)("p",null,"For example, if your throughput limit is set to 250, this means that you can send a combined total of 250 API calls and objects to Intilery each month per MTC you\u2019ve paid for in your plan. If you have a 10,000 MTC plan, this means you can send up to a total of 2.5 million API calls and objects each month."),(0,r.kt)("p",null,"These objects and API calls are not tied to a specific user, but are an aggregate number applied to your workspace. Most customers never hit this limit, and Business tier plans often have custom limits."),(0,r.kt)("p",null,"Other combinations of throughput limits exist and are detailed on your order form."),(0,r.kt)("p",null,"You may also not have any throughput limits on your account."),(0,r.kt)("h4",{id:"batching-and-throughput-limits"},"Batching and throughput limits"),(0,r.kt)("p",null,"You can sometimes \u201cbatch\u201d API calls to reduce send times, however batching doesn\u2019t reduce your throughput usage. Batched calls are unpacked as they are received, and the objects and calls the batch contains are counted individually. While batching does not reduce your throughput, it does reduce the possibility of rate limit errors."),(0,r.kt)("h2",{id:"how-does-intilery-calculate-mtcs"},"How does Intilery calculate MTCs?"),(0,r.kt)("p",null,"Intilery counts the number of ",(0,r.kt)("strong",{parentName:"p"},"unique")," ",(0,r.kt)("inlineCode",{parentName:"p"},"userId"),"s, and then adds the number of ",(0,r.kt)("strong",{parentName:"p"},"unique")," ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymousId"),"s that were not associated with a ",(0,r.kt)("inlineCode",{parentName:"p"},"userId")," during the billing period. Intilery counts these IDs over all calls made from all sources in your workspace, over a billing month. Intilery only counts each user once per month, even if they perform more than one action or are active across more than one source."),(0,r.kt)("h4",{id:"example-mtc-counts"},"Example MTC counts"),(0,r.kt)("p",null,"Imagine that you have both a website and a mobile app. Both the website and mobile app have pages that you can use without being logged in, and both send Identify calls when a user ",(0,r.kt)("em",{parentName:"p"},"does")," log in."),(0,r.kt)("h5",{id:"deduplication-across-sources"},"Deduplication across sources"),(0,r.kt)("p",null,"As a simple example, imagine that a user is already logged in on both the website and the mobile app. When the user\u2019s activity generates events on the website, these events are sent using Analytics.js, and include the user\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"userId"),". When they do things on the mobile app, these events are sent from a mobile source, and also include the ",(0,r.kt)("inlineCode",{parentName:"p"},"userId"),". When Intilery counts the MTCs, all the events from the same ",(0,r.kt)("inlineCode",{parentName:"p"},"userId")," only generate one MTC, regardless of the source it came from."),(0,r.kt)("h5",{id:"deduplication-after-log-in"},"Deduplication after log-in"),(0,r.kt)("p",null,"Now imagine a new user, who has never logged in. At first, they have two ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymousId"),"s, one for the mobile app and one for the website. However, if they log in during the course of the month, you now know who they are, and can attach their ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymousId")," to a ",(0,r.kt)("inlineCode",{parentName:"p"},"userId"),"."),(0,r.kt)("p",null,"If the user logs in on ",(0,r.kt)("em",{parentName:"p"},"just")," the app, you would still see two MTCs: one ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymousId")," for the website source, and one ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymousId")," with an attached ",(0,r.kt)("inlineCode",{parentName:"p"},"userId")," from the mobile app source. If the user logs in on ",(0,r.kt)("em",{parentName:"p"},"both")," the app and website, they would count as one MTC: two different ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymousId"),"s attached to one ",(0,r.kt)("inlineCode",{parentName:"p"},"userId"),"."),(0,r.kt)("h2",{id:"how-does-intilery-calculate-mtvs"},"How does Intilery calculate MTVs?"),(0,r.kt)("p",null,"Intilery counts the number of ",(0,r.kt)("strong",{parentName:"p"},"unique")," ",(0,r.kt)("strong",{parentName:"p"},"unique")," ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymousId"),"s that were not associated with a ",(0,r.kt)("inlineCode",{parentName:"p"},"userId")," during the billing period. Intilery counts these IDs over all calls made from all sources in your workspace, over a billing month. Intilery only counts each user once per month, even if they perform more than one action or are active across more than one source."),(0,r.kt)("h2",{id:"what-is-the-difference-between-an-event-and-an-object"},"What is the difference between an event and an object?"),(0,r.kt)("p",null,"We know this sounds like a non-sequitur, but understanding the difference between events and objects helps you understand how MTCs are calculated."),(0,r.kt)("p",null,"An event is a data collection triggered in response to a user action: a ",(0,r.kt)("a",{parentName:"p",href:"/docs/tag/tag1#step-3-track-actions"},"Track call")," (or a ",(0,r.kt)("a",{parentName:"p",href:"/docs/schema/page"},"Page"),"/",(0,r.kt)("a",{parentName:"p",href:"/docs/schema/screen"},"Screen")," call if the action was to navigate to a new page). Events take place in a single moment in time, and include a name, timestamp, and ",(0,r.kt)("strong",{parentName:"p"},"properties"),". When an event happens more than once, it creates a new Event record (with a new timestamp) rather than updating an existing one. For example, a user browsing a product catalog might generate several \u201cProduct Viewed\u201d events, which might include the product name, price, and category."),(0,r.kt)("p",null,"This is in contrast to \u201cObjects\u201d which represent a single thing that persists over time and can be updated. Objects have \u201ctraits\u201d (instead of properties) which record information about that object, and which can change over time. For example a \u201cuser\u201d object could have a trait of \u201cemail\u201d which doesn\u2019t change often, but could also have a ",(0,r.kt)("a",{parentName:"p",href:"/docs/customers/computed-traits/"},"computed trait")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"logged_in_last_7_days")," that changes between ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," based on how much they use your site."))}u.isMDXComponent=!0}}]);