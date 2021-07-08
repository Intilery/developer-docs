(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[9388],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return o},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),u=d(n),k=r,c=u["".concat(m,".").concat(k)]||u[k]||s[k]||l;return n?a.createElement(c,i(i({ref:e},o),{},{components:n})):a.createElement(c,i({ref:e},o))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},997:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return s}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i={id:"email",title:"Email Schema",sidebar_label:"Email"},p=void 0,m={unversionedId:"schema/email",id:"schema/email",isDocsHomePage:!1,title:"Email Schema",description:"Emails sent using the Intilery platform will automatically capture all events described here, if you wish to use a different Email Service Provider, you should ensure that the ESP can send the required events to the Intilery CDP.",source:"@site/docs/schema/email.md",sourceDirName:"schema",slug:"/schema/email",permalink:"/docs/schema/email",version:"current",frontMatter:{id:"email",title:"Email Schema",sidebar_label:"Email"},sidebar:"schema",previous:{title:"Common",permalink:"/docs/schema/common"},next:{title:"Identify",permalink:"/docs/schema/identify"}},d=[{value:"Overview",id:"overview",children:[]},{value:"Events",id:"events",children:[{value:"Email Sent",id:"email-sent",children:[]},{value:"Email Bounced",id:"email-bounced",children:[]},{value:"Email Delivered",id:"email-delivered",children:[]},{value:"Email Link Clicked",id:"email-link-clicked",children:[]},{value:"Email Marked as Spam",id:"email-marked-as-spam",children:[]},{value:"Email Opened",id:"email-opened",children:[]},{value:"Unsubscribed",id:"unsubscribed",children:[]}]}],o={toc:d};function s(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Emails sent using the Intilery platform will automatically capture all events described here, if you wish to use a different Email Service Provider, you should ensure that the ESP can send the required events to the Intilery CDP."),(0,l.kt)("p",null,"The semantic events detailed below represent the ideal for Email events and what Intilery provides by default; not every Email tool supports all of these events or all of their properties."),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Every Email tool is built around the idea of delivering emails to recipients. A user sends one or many emails through an email tool, and the email is either ",(0,l.kt)("a",{parentName:"p",href:"#email-delivered"},"delivered")," to a recipient or ","[bounces]","#email-bounced) if the email is undeliverable."),(0,l.kt)("p",null,"When an email is ",(0,l.kt)("a",{parentName:"p",href:"#email-delivered"},"delivered"),", a recipient can take one or many actions on it: They might ",(0,l.kt)("a",{parentName:"p",href:"#email-opened"},"open the email"),", ",(0,l.kt)("a",{parentName:"p",href:"#email-link-clicked"},"click on a link")," in the email\u2019s body, ",(0,l.kt)("a",{parentName:"p",href:"#email-marked-as-spam"},"mark the email as spam (complaint)"),", or ",(0,l.kt)("a",{parentName:"p",href:"#unsubscribed"},"unsubscribe")),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("p",null,"The email category has the following semantic events:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#email-sent"},"Email Sent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#email-bounced"},"Email Bounced")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#email-delivered"},"Email Delivered")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#email-link-clicked"},"Email Link Clicked")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#email-marked-as-spam"},"Email Marked as Spam")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#email-opened"},"Email Opened")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#unsubscribed"},"Unsubscribed"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," All events below are automatically sent to the Intilery CDP by the Intilery Customer Engagement platform if Intilery sends the email"),(0,l.kt)("h3",{id:"email-sent"},"Email Sent"),(0,l.kt)("p",null,"This event should be fired when the mail server sends the email."),(0,l.kt)("h4",{id:"properties"},"Properties"),(0,l.kt)("p",null,"This event supports the following semantic properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email_id")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"An ID used to identify the email.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email_subject")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The email\u2019s subject line.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"campaign_id")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"An id used to identify a campaign")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"campaign_name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"A name used to identify a campaign")))),(0,l.kt)("h4",{id:"context"},"Context"),(0,l.kt)("p",null,"This event supports the following semantic context properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.traits")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"An associative array about the email\u2019s intended recipient.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.traits.email")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The intended recipient\u2019s email address.")))),(0,l.kt)("h5",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "user_id": "019mr8mf4r",\n  "action": "track",\n  "event": "Email Sent",\n  "context": {\n    "traits": {\n      "email": "pgibbons@example.com"\n    }\n  },\n  "properties": {\n    "email_id": "18vzF7u3z",\n    "email_subject": "First shirt on us!",\n    "campaign_id": "123",\n    "campaign_name": "New Customer Discount"\n  }\n}\n')),(0,l.kt)("h3",{id:"email-bounced"},"Email Bounced"),(0,l.kt)("p",null,"This event should be sent when an email tool receives notice from an email server that an email is undeliverable."),(0,l.kt)("h4",{id:"properties-1"},"Properties"),(0,l.kt)("p",null,"This event supports the following semantic properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email_id")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"An ID used to identify the email.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email_subject")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The email\u2019s subject line.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"campaign_id")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"An id used to identify a campaign")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"campaign_name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"A name used to identify a campaign")))),(0,l.kt)("h4",{id:"context-1"},"Context"),(0,l.kt)("p",null,"This event supports the following semantic context properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.traits")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"An associative array about the email\u2019s intended recipient.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.traits.email")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The intended recipient\u2019s email address.")))),(0,l.kt)("h5",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "user_id": "019mr8mf4r",\n  "action": "track",\n  "event": "Email Bounced",\n  "context": {\n    "ip": "67.207.109.102",\n    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36",\n    "traits": {\n      "email": "pgibbons@example.com"\n    }\n  },\n  "properties": {\n    "email_id": "18vzF7u3z",\n    "email_subject": "First shirt on us!",\n    "campaign_id": "123",\n    "campaign_name": "New Customer Discount"\n  }\n}\n')),(0,l.kt)("h3",{id:"email-delivered"},"Email Delivered"),(0,l.kt)("p",null,"This event should be fired when the receiving mail server confirms receipt of an email."),(0,l.kt)("h4",{id:"properties-2"},"Properties"),(0,l.kt)("p",null,"This event supports the following semantic properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email_id")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"An ID used to identify the email.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email_subject")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The email\u2019s subject line.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"campaign_id")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"An id used to identify a campaign")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"campaign_name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"A name used to identify a campaign")))),(0,l.kt)("h4",{id:"context-2"},"Context"),(0,l.kt)("p",null,"This event supports the following semantic context properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.traits")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"An associative array about the email\u2019s intended recipient.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.traits.email")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The intended recipient\u2019s email address.")))),(0,l.kt)("h5",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "user_id": "019mr8mf4r",\n  "action": "track",\n  "event": "Email Delivered",\n  "context": {\n    "ip": "67.207.109.102",\n    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36",\n    "traits": {\n      "email": "pgibbons@example.com"\n    }\n  },\n  "properties": {\n    "email_id": "18vzF7u3z",\n    "email_subject": "First shirt on us!",\n    "campaign_id": "123",\n    "campaign_name": "New Customer Discount"\n  }\n}\n')),(0,l.kt)("h3",{id:"email-link-clicked"},"Email Link Clicked"),(0,l.kt)("p",null,"This event should be fired when the recipient clicks on a link in the email\u2019s body."),(0,l.kt)("h4",{id:"properties-3"},"Properties"),(0,l.kt)("p",null,"This event supports the following semantic properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email_id")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"An ID used to identify the email.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email_subject")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The email\u2019s subject line.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"campaign_id")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"An id used to identify a campaign")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"campaign_name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"A name used to identify a campaign")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"link_id")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"An id used to identify a link")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"link_url")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The URL the link points to.")))),(0,l.kt)("h4",{id:"context-3"},"Context"),(0,l.kt)("p",null,"This event supports the following semantic context properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.ip")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"The opening computer\u2019s public IP address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.traits")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"An associative array describing the email\u2019s intended recipient.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.traits.email")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The intended recipient\u2019s email address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.user_agent")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The opening browser\u2019s user agent.")))),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "user_id": "019mr8mf4r",\n  "action": "track",\n  "event": "Email Link Clicked",\n  "context": {\n    "ip": "67.207.109.102",\n    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36",\n    "traits": {\n      "email": "joanna@example.com"\n    }\n  },\n  "properties": {\n    "email_id": "18vzF7u3z",\n    "email_subject": "First campaign on us!",\n    "campaign_id": "123",\n    "campaign_name": "New Customer Discount",\n    "link_id": "101",\n    "link_url": "https://www.intilery.com?promo=NEWCUSTOMER"\n  }\n}\n')),(0,l.kt)("h3",{id:"email-marked-as-spam"},"Email Marked as Spam"),(0,l.kt)("p",null,"This event should be fired when a recipient marks an email as spam."),(0,l.kt)("h4",{id:"properties-4"},"Properties"),(0,l.kt)("p",null,"This event supports the following semantic properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email_id")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"An ID used to identify the email.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email_subject")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The email\u2019s subject line.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"campaign_id")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"An id used to identify a campaign")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"campaign_name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"A name used to identify a campaign")))),(0,l.kt)("h4",{id:"context-4"},"Context"),(0,l.kt)("p",null,"This event supports the following semantic context properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.ip")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"The opening computer\u2019s public IP address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.traits")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"An associative array describing the email\u2019s intended recipient.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.traits.email")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The intended recipient\u2019s email address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.user_agent")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The opening browser\u2019s user agent.")))),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "user_id": "019mr8mf4r",\n  "action": "track",\n  "event": "Email Marked as Spam",\n  "context": {\n    "ip": "67.207.109.102",\n    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36",\n    "traits": {\n      "email": "mwaddams@example.com"\n    }\n  },\n  "properties": {\n    "email_id": "18vzF7u3z",\n    "email_subject": "First shirt on us!",\n    "campaign_id": "123",\n    "campaign_name": "New Customer Discount"\n  }\n}\n')),(0,l.kt)("h3",{id:"email-opened"},"Email Opened"),(0,l.kt)("p",null,"This event should be fired when the recipient opens the email."),(0,l.kt)("h4",{id:"properties-5"},"Properties"),(0,l.kt)("p",null,"This event supports the following semantic properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email_id")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"An ID used to identify the email.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email_subject")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The email\u2019s subject line.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"campaign_id")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"An id used to identify a campaign")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"campaign_name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"A name used to identify a campaign")))),(0,l.kt)("h4",{id:"context-5"},"Context"),(0,l.kt)("p",null,"This event supports the following semantic context properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.ip")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The opening computer\u2019s public IP address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.traits")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"An associative array describing the email\u2019s intended recipient.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.traits.email")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The intended recipient\u2019s email address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.user_agent")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The opening browser\u2019s user agent.")))),(0,l.kt)("h4",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "user_id": "019mr8mf4r",\n  "action": "track",\n  "event": "Email Opened",\n  "context": {\n    "ip": "67.207.109.102",\n    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36",\n    "traits": {\n      "email": "pgibbons@example.com"\n    }\n  },\n  "properties": {\n    "email_id": "18vzF7u3z",\n    "email_subject": "First shirt on us!",\n    "campaign_id": "123",\n    "campaign_name": "New Customer Discount"\n  }\n}\n')),(0,l.kt)("h3",{id:"unsubscribed"},"Unsubscribed"),(0,l.kt)("p",null,"This event should be fired when the recipient unsubscribes from the email. The unsubscription can either happen for a particular list, or globally from all marketing emails, depending on the tool. Typically you cannot unsubscribe from a transactional email such as a password reset."),(0,l.kt)("h4",{id:"properties-6"},"Properties"),(0,l.kt)("p",null,"This event supports the following semantic properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email_id")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"An ID used to identify the email.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email_subject")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The email\u2019s subject line.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"campaign_id")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"An id used to identify a campaign")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"campaign_name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"A name used to identify a campaign")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"list_id")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"An optional id used to identify a list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"list_name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"An optional name used to identify a list")))),(0,l.kt)("h4",{id:"context-6"},"Context"),(0,l.kt)("p",null,"This event supports the following semantic context properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.ip")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The opening computer\u2019s public IP address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.traits")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"An associative array describing the email\u2019s intended recipient.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.traits.email")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The intended recipient\u2019s email address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.user_agent")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The opening browser\u2019s user agent.")))),(0,l.kt)("h4",{id:"example-6"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "user_id": "019mr8mf4r",\n  "action": "track",\n  "event": "Unsubscribed",\n  "context": {\n    "ip": "67.207.109.102",\n    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36",\n    "traits": {\n      "email": "pgibbons@example.com"\n    }\n  },\n  "properties": {\n    "email_id": "18vzF7u3z",\n    "email_subject": "First shirt on us!",\n    "campaign_id": "123",\n    "campaign_name": "New Customer Discount",\n    "list_id": "1425",\n    "list_name": "New customers"\n  }\n}\n')))}s.isMDXComponent=!0}}]);