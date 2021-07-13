(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[8024],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(n),k=r,c=s["".concat(o,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7879:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return d},default:function(){return u}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i={id:"b2b",title:"B2B SaaS",sidebar_label:"B2B SaaS"},p=void 0,o={unversionedId:"schema/b2b",id:"schema/b2b",isDocsHomePage:!1,title:"B2B SaaS",description:"This guide explains how B2B SaaS companies should send core user and account lifecycle data to Intilery.",source:"@site/docs/schema/b2b.md",sourceDirName:"schema",slug:"/schema/b2b",permalink:"/docs/schema/b2b",version:"current",frontMatter:{id:"b2b",title:"B2B SaaS",sidebar_label:"B2B SaaS"},sidebar:"schema",previous:{title:"Mobile App",permalink:"/docs/schema/app"},next:{title:"Video",permalink:"/docs/schema/video"}},d=[{value:"Overview",id:"overview",children:[]},{value:"Events",id:"events",children:[{value:"Account Created",id:"account-created",children:[]},{value:"Account Deleted",id:"account-deleted",children:[]},{value:"Signed Up",id:"signed-up",children:[]},{value:"Signed In",id:"signed-in",children:[]},{value:"Signed Out",id:"signed-out",children:[]},{value:"Invite Sent",id:"invite-sent",children:[]},{value:"Account Added User",id:"account-added-user",children:[]},{value:"Account Removed User",id:"account-removed-user",children:[]},{value:"Trial Started",id:"trial-started",children:[]},{value:"Trial Ended",id:"trial-ended",children:[]}]}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This guide explains how B2B SaaS companies should send core user and account lifecycle data to Intilery."),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Most B2B SaaS companies have a few common, core lifecycle events for users and accounts. We understand that account hierarchies can be unique and complex, but by following this spec you can take advantage of account-based tools on the Intilery platform."),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("p",null,"The B2B SaaS category has the following semantic events:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#events"},"Events"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#account-created"},"Account Created"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#properties"},"Properties")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#example"},"Example")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#account-deleted"},"Account Deleted"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#properties-1"},"Properties")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#example-1"},"Example")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#signed-up"},"Signed Up"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#properties-2"},"Properties")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#example-2"},"Example")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#signed-in"},"Signed In"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#properties-3"},"Properties")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#example-3"},"Example")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#signed-out"},"Signed Out"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#properties-4"},"Properties")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#example-4"},"Example")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#invite-sent"},"Invite Sent"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#properties-5"},"Properties")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#example-5"},"Example")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#account-added-user"},"Account Added User"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#properties-6"},"Properties")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#example-6"},"Example")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#account-removed-user"},"Account Removed User"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#properties-7"},"Properties")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#example-7"},"Example")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#trial-started"},"Trial Started"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#properties-8"},"Properties")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#example-8"},"Example")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#trial-ended"},"Trial Ended"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#properties-9"},"Properties")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#example-9"},"Example"))))))),(0,l.kt)("h3",{id:"account-created"},"Account Created"),(0,l.kt)("p",null,"This event should be sent when a new account is created."),(0,l.kt)("h4",{id:"properties"},"Properties"),(0,l.kt)("p",null,"This event supports the following semantic properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"account_name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the account being created.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.groupId")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the account being created.")))),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Account Created",\n  "properties": {\n    "account_name": "Initech"\n  },\n  "context": {\n      "groupId": "acct_123"\n      }\n}\n')),(0,l.kt)("h3",{id:"account-deleted"},"Account Deleted"),(0,l.kt)("p",null,"This event should be sent when an account is deleted."),(0,l.kt)("h4",{id:"properties-1"},"Properties"),(0,l.kt)("p",null,"This event supports the following semantic properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"account_name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the account being deleted.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.groupId")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the account being deleted.")))),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Account Deleted",\n  "properties": {\n    "account_name": "Initech"\n  },\n  "context": {\n      "groupId": "acct_123"\n      }\n}\n')),(0,l.kt)("h3",{id:"signed-up"},"Signed Up"),(0,l.kt)("p",null,"This event should be sent when a user signs up for your service."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Good to know"),": Intilery\u2019s best practice is to use an \u201cObject-Action\u201d naming convention, which in this case would be \u201cUser Signed Up\u201d. However, because in the B2B case this may not be a specific user, we omit that noun in our example. You may include or omit it as needed for your implementation."),(0,l.kt)("h4",{id:"properties-2"},"Properties"),(0,l.kt)("p",null,"This event supports the following semantic properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of signup, e.g. invited, organic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"first_name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The first name of the user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"last_name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The last name of the user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The email of the user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"phone")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The phone number of the user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"username")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The username of the user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"title")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The title of the user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.groupId")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the account the user is joining.")))),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Signed Up",\n  "properties": {\n    "type": "organic",\n    "first_name": "Peter",\n    "last_name": "Gibbons",\n    "email": "pgibbons@example.com",\n    "phone": "410-555-9412",\n    "username": "pgibbons",\n    "title": "Mr"\n  },\n  "context": {\n      "groupId": "acct_123"\n      }\n}\n')),(0,l.kt)("h3",{id:"signed-in"},"Signed In"),(0,l.kt)("p",null,"This event should be sent when a user signs in to your service."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Good to know"),": Intilery best practice is to use an \u201cObject-Action\u201d naming convention, which in this case would be \u201cUser Signed In\u201d. However, because in the B2B case this may not be a specific user, we omit that noun in our example. You may include or omit it as needed for your implementation."),(0,l.kt)("h4",{id:"properties-3"},"Properties"),(0,l.kt)("p",null,"This event supports the following semantic properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"username")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The username of the user logging in.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.groupId")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the account being created.")))),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Signed In",\n  "properties": {\n    "username": "pgibbons"\n  },\n  "context": {\n      "groupId": "acct_123"\n      }\n}\n')),(0,l.kt)("h3",{id:"signed-out"},"Signed Out"),(0,l.kt)("p",null,"This event should be sent when a user signs out for your service. You should also call ",(0,l.kt)("a",{parentName:"p",href:"/docs/tag/tag1#reset-or-logout"},(0,l.kt)("inlineCode",{parentName:"a"},"analytics.reset()"))," to refresh the cookie when a Signed Out event occurs."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Good to know"),": Intilery's best practice is to use an \u201cObject-Action\u201d naming convention, which in this case would be \u201cUser Signed Out\u201d. However, because in the B2B case this may not be a specific user, we omit that noun in our example. You may include or omit it as needed for your implementation."),(0,l.kt)("h4",{id:"properties-4"},"Properties"),(0,l.kt)("p",null,"This event supports the following semantic properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"username")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The username of the user logging in.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.groupId")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the account being created.")))),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Signed Out",\n  "properties": {\n    "username": "pgibbons"\n  },\n  "context": {\n      "groupId": "acct_123"\n      }\n}\n')),(0,l.kt)("h3",{id:"invite-sent"},"Invite Sent"),(0,l.kt)("p",null,"This event should be sent when a user invites another user."),(0,l.kt)("h4",{id:"properties-5"},"Properties"),(0,l.kt)("p",null,"This event supports the following semantic properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"invitee_email")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The email address of the person receiving the invite.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"invitee_first_name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The first name of the person receiving the invite.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"invitee_last_name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The last name of the person receiving the invite.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"invitee_role")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The permission group for the person receiving the invite.")))),(0,l.kt)("h4",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Invite Sent",\n  "properties": {\n    "invitee_email": "pgibbons@example.com",\n    "invitee_first_name": "Peter",\n    "invitee_last_name": "Gibbons",\n    "invitee_role": "Owner"\n  },\n  "context": {\n      "groupId": "acct_123"\n      }\n}\n')),(0,l.kt)("h3",{id:"account-added-user"},"Account Added User"),(0,l.kt)("p",null,"This event should be sent when a user is added to a group."),(0,l.kt)("h4",{id:"properties-6"},"Properties"),(0,l.kt)("p",null,"This event supports the following semantic properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"role")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The permission group for this user in this account.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.groupId")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the account being created.")))),(0,l.kt)("h4",{id:"example-6"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Account Added User",\n  "properties": {\n    "role": "Owner"\n  },\n  "context": {\n      "groupId": "acct_123"\n      }\n}\n')),(0,l.kt)("h3",{id:"account-removed-user"},"Account Removed User"),(0,l.kt)("p",null,"This event should be sent when a user is removed from a group or account."),(0,l.kt)("h4",{id:"properties-7"},"Properties"),(0,l.kt)("p",null,"This event supports the following semantic properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.groupId")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the account being created.")))),(0,l.kt)("h4",{id:"example-7"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Account Removed User",\n  "properties": {},\n  "context": {\n      "groupId": "acct_123"\n      }\n}\n')),(0,l.kt)("h3",{id:"trial-started"},"Trial Started"),(0,l.kt)("p",null,"This event should be sent when a trial is started."),(0,l.kt)("h4",{id:"properties-8"},"Properties"),(0,l.kt)("p",null,"This event supports the following semantic properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trial_start_date")),(0,l.kt)("td",{parentName:"tr",align:null},"Date"),(0,l.kt)("td",{parentName:"tr",align:null},"The date when the trial starts. It is an ISO-8601 date string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trial_end_date")),(0,l.kt)("td",{parentName:"tr",align:null},"Date"),(0,l.kt)("td",{parentName:"tr",align:null},"The date when the trial ends. It is an ISO-8601 date string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trial_plan_name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the plan being trialed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.groupId")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the account being created.")))),(0,l.kt)("h4",{id:"example-8"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Trial Started",\n  "properties": {\n      "trial_start_date": "2018-08-28T04:09:47Z",\n      "trial_end_date": "2018-09-20T04:09:47Z",\n      "trial_plan_name": "Business"\n  },\n  "context": {\n      "groupId": "acct_123"\n      }\n}\n')),(0,l.kt)("h3",{id:"trial-ended"},"Trial Ended"),(0,l.kt)("p",null,"This event should be sent when a trial ends."),(0,l.kt)("h4",{id:"properties-9"},"Properties"),(0,l.kt)("p",null,"This event supports the following semantic properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trial_start_date")),(0,l.kt)("td",{parentName:"tr",align:null},"Date"),(0,l.kt)("td",{parentName:"tr",align:null},"The date when the trial starts. It is an ISO-8601 date string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trial_end_date")),(0,l.kt)("td",{parentName:"tr",align:null},"Date"),(0,l.kt)("td",{parentName:"tr",align:null},"The date when the trial ends. It is an ISO-8601 date string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trial_plan_name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the plan being trialed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context.groupId")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the account being created.")))),(0,l.kt)("h4",{id:"example-9"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Trial Ended",\n  "properties": {\n      "trial_start_date": "2018-08-28T04:09:47Z",\n      "trial_end_date": "2018-09-20T04:09:47Z",\n      "trial_plan_name": "Business"\n  },\n  "context": {\n      "groupId": "acct_123"\n      }\n}\n')))}u.isMDXComponent=!0}}]);