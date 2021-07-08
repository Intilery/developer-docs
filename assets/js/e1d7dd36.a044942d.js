(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[2925],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(n),d=i,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9846:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),s=["components"],o={id:"tag1",title:"JavaScript Tag Guide",sidebar_label:"Website Tag"},l={unversionedId:"tag/tag1",id:"tag/tag1",isDocsHomePage:!1,title:"JavaScript Tag Guide",description:"When you implement Intilery, you add Intilery code to your website, app, or server. This code generates messages based on specific triggers you define.",source:"@site/docs/tag/tag1.md",sourceDirName:"tag",slug:"/tag/tag1",permalink:"/docs/tag/tag1",version:"current",sidebar_label:"Website Tag",frontMatter:{id:"tag1",title:"JavaScript Tag Guide",sidebar_label:"Website Tag"},sidebar:"tag",next:{title:"Analytics.js",permalink:"/docs/tag/reference"}},c=[{value:"Before you begin",id:"before-you-begin",children:[]},{value:"Client Key(s) / Write Key(s)",id:"client-keys--write-keys",children:[]},{value:"Step 1: Copy the Snippet",id:"step-1-copy-the-snippet",children:[{value:"Tag Managers",id:"tag-managers",children:[]}]},{value:"Step 2: Identify Customers",id:"step-2-identify-customers",children:[{value:"Customer Campaign",id:"customer-campaign",children:[]}]},{value:"Step 3: Track Actions",id:"step-3-track-actions",children:[]},{value:"Hosting your own marketing preferences page",id:"hosting-your-own-marketing-preferences-page",children:[]}],u={toc:c};function p(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you implement Intilery, you add Intilery code to your website, app, or server. This code generates messages based on specific triggers you define."),(0,r.kt)("p",null,"In the simplest implementation, the code can be a snippet of JavaScript that you copy and paste into the HTML of a website to track page views and customer behaviours."),(0,r.kt)("p",null,"This tag is based on the Segment javascript analytics tag it has been extended to work in a multinational audience, multiple accounts and brands, along with additional capabilities for personalisation."),(0,r.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,r.kt)("p",null,"The full reference of analytics.js (the tag) can be found here ",(0,r.kt)("a",{parentName:"p",href:"./reference"},"Analytics.js")," "),(0,r.kt)("h2",{id:"client-keys--write-keys"},"Client Key(s) / Write Key(s)"),(0,r.kt)("p",null,"Client Key(s) are unique to each Client and Account, the client key for your account(s) are included in the tag snippet within the application. in the tag section."),(0,r.kt)("p",null,"Client Key(s) are referred to as Write Key(s) in the mobile SDK."),(0,r.kt)("p",null,"Your Client Key (Write Key) can be found in the tag snippet on the ",(0,r.kt)("inlineCode",{parentName:"p"},"analytics.load('xxxx')")," line, the value in the quotes is your Client Key / Write Key"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," If you have multiple accounts with Intilery, each tag has a seperate client key, obtain the tag snippet for each account by switching between accounts when you log in to Intilery."),(0,r.kt)("h1",{id:"installing-intilery"},"Installing Intilery"),(0,r.kt)("h2",{id:"step-1-copy-the-snippet"},"Step 1: Copy the Snippet"),(0,r.kt)("p",null,"Installing Intilery is easy, just paste the snippet from the JavaScript Tag within the tag page in the Intilery app, an screenshot of the tag page is shown below."),(0,r.kt)("p",null,"That snippet loads analytics.js onto the page ",(0,r.kt)("em",{parentName:"p"},"asynchronously"),", so it won\u2019t affect your page load speed. Once the snippet is running on your site it will record page views and any other events you define."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tag",src:n(3315).Z})),(0,r.kt)("p",null,"Note: This tag will call the \u201cpage\u201d (page view) function once the tag is loaded."),(0,r.kt)("h3",{id:"tag-managers"},"Tag Managers"),(0,r.kt)("p",null,"To add the Intilery tag to your site using a tag manager, such as google tag manager, add a HTML type tag and copy the code snippet above into it, deploy the tag to all pages."),(0,r.kt)("h2",{id:"step-2-identify-customers"},"Step 2: Identify Customers"),(0,r.kt)("p",null,"The identify method is how you tell Intilery who the current user is. It includes a unique User ID, and any optional traits you know about them. You can read more about it in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/schema/Identify"},"identify method reference"),", examples of the identify event are also included on the tag page in the Intilery app."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," You don\u2019t need to call identify for anonymous visitors to your site. Intilery automatically assigns them an anonymousId, so just calling page and track works just fine without identify."),(0,r.kt)("p",null,"The format of the javascript identify event is: -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.identify([userId], [traits], [options], [callback]);\n")),(0,r.kt)("p",null,"Here\u2019s what a basic call to identify might look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.identify({\n  nickname: 'Joe Bloggs',\n  favoriteCompiler: 'A-0',\n  industry: 'Computer Science'\n});\n")),(0,r.kt)("p",null,"In this case, you have added traits to the current user (customer) but have not provided an personal data, identifiers or a userID yet."),(0,r.kt)("p",null,"A call to identify a user with his details would look like the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'analytics.identify(\'123456\', {\n  firstName: \'Joe\',\n  lastName: \'Bloggs\',\n  email: \'joe.bloggs@example.com\',\n  "marketingPreferences": { \n      "channels": [ \n        { "channel": "email", "subscribed": true },\n        { "channel": "sms", "subscribed": true },\n        { "channel": "whatsapp", "subscribed": false },\n        { "channel": "facebook", "subscribed": false },\n        { "channel": "push", "subscribed": false }\n      ] \n    }\n});\n')),(0,r.kt)("p",null,"That identifies Joe by his unique User ID (in this case, 123456, which is what you know him by in your database) and labels him with name and email traits."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," A userID is required for your customers, though this can be the email address if required, in which case the userID is the same as the email, though the email must still be passed in as trait"),(0,r.kt)("p",null,"Example with email as the userID"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'analytics.identify(\'joe.bloggs@example.com\', {\n  firstName: \'Joe\',\n  lastName: \'Bloggs\',\n  email: \'joe.bloggs@example.com\',\n  "marketingPreferences": { \n      "channels": [ \n        { "channel": "email", "subscribed": true },\n        { "channel": "sms", "subscribed": true },\n        { "channel": "whatsapp", "subscribed": false },\n        { "channel": "facebook", "subscribed": false },\n        { "channel": "push", "subscribed": false }\n      ] \n    }\n});\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:"),' Marketing subscription preferences must be declared in the "marketingPreferences" cutomer trait in the format shown above.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The customer can have whatever traits you wish to define, these can be simple JSON types, arrays of types. arrays of objects or objects. For arrays of objects it is best to ensure each object in the array is of the same type/structure."),(0,r.kt)("p",null,"Example with multiple traits"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'analytics.identify(\'joe.bloggs@example.com\', {\n  firstName: \'Joe\',\n  lastName: \'Bloggs\',\n  email: \'joe.bloggs@example.com\',\n  car: {\n    make:\'Tesla\',\n    model:\'X\'\n  },\n  claims: [\n    {\n      claimID:\'abcdef\',\n      value:1234.56\n    },\n    {\n      claimID:\'opqr\',\n      value:99.99\n    }\n  ],\n  pets:[\n    \'butch\', \'cassidy\'\n  ],\n  "marketingPreferences": { \n      "channels": [ \n        { "channel": "email", "subscribed": true },\n        { "channel": "sms", "subscribed": true },\n        { "channel": "whatsapp", "subscribed": false },\n        { "channel": "facebook", "subscribed": false },\n        { "channel": "push", "subscribed": false }\n      ] \n    }\n});\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hold up though!")," When you actually put that code on your site, you need to replace those hard-coded trait values with the variables that represent the details of the currently logged-in user."),(0,r.kt)("p",null,"To do that, we recommend that you use a backend template to inject an identify call into the footer of ",(0,r.kt)("strong",{parentName:"p"},"every page")," of your site where the user is logged in. That way, no matter what page the user first lands on, they will always be identified. You don\u2019t need to call identify if your unique identifier (userId) is not known. If this is not possible, the identify event should be triggered on user registration and login."),(0,r.kt)("p",null,"Depending on your templating language, your actual identify call might look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.identify(' {{user.id}} ', {  name: '{{user.fullname}}',  email: '{{user.email}}' }); \n")),(0,r.kt)("p",null,"With that call in your page footer, you successfully identify every user that visits your site."),(0,r.kt)("h3",{id:"customer-campaign"},"Customer Campaign"),(0,r.kt)("p",null,"The identify method automatically sends the campaign data for the current session, as set via UTM parameters in the URL, as detailed here ",(0,r.kt)("a",{parentName:"p",href:"/docs/schema/common#context"},"common fields")," (see field campaign)."),(0,r.kt)("p",null,'If the campaign is set on the current context, by including UTM paramters (utm_medium, utm_campaign etc.). a customer trait "campaign" will be created with these details.'),(0,r.kt)("p",null,"The campaign trait is only set on the customer when the customer is initially recognised, either as a known customer or an anonymous visitor, in which case the campaign value is copied over from the visitor to the customer"),(0,r.kt)("h2",{id:"step-3-track-actions"},"Step 3: Track Actions"),(0,r.kt)("p",null,"The track method is how you tell Intilery about the actions your users are performing on your site. Every action triggers what we call an \u201cevent\u201d, which can also have associated properties. You can read more about track in the ",(0,r.kt)("a",{parentName:"p",href:"https://intilery.atlassian.net/wiki/spaces/HEA/pages/1868169259/Analytics.js#Track"},"track method reference"),"."),(0,r.kt)("p",null,"Here\u2019s what a call to track might look like when a user signs up:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.track('View Claim', {  claim: {\n      claimID:'abcdef',\n      value:1234.56\n    }\n}); \n")),(0,r.kt)("p",null,"That\u2019s just telling us that your user just triggered the ",(0,r.kt)("strong",{parentName:"p"},"View Claim")," event and along with details of the claim viewed. Properties can be anything you want to record, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.track('Article Bookmarked', {  title: 'Snow Fall',  subtitle: 'The Avalanche at Tunnel Creek',  author: 'John Branch' }); \n")),(0,r.kt)("p",null,"If you\u2019re just getting started, some of the events you should track are events that indicate the success of your site, like ",(0,r.kt)("strong",{parentName:"p"},"Signed Up"),", ",(0,r.kt)("strong",{parentName:"p"},"Item Purchased")," or ",(0,r.kt)("strong",{parentName:"p"},"Article Bookmarked"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Events for default schema's can be found in the ","[/schema/contents]","(Schema Section) you should choose an industry specific schema and implement those events if possible."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Any event can be sent with any properties, using a default schema saves you having to work out the event names and properties yourself."),(0,r.kt)("p",null,"The properties passed in with the events can be simple properties or nested objects"),(0,r.kt)("p",null,"Once you add a few track calls, ",(0,r.kt)("strong",{parentName:"p"},"you\u2019re done with this tutorial!")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Events are displayed in the Events section on the Intilery app, along with validation."),(0,r.kt)("p",null,"You successfully installed analytics.js tracking."),(0,r.kt)("h2",{id:"hosting-your-own-marketing-preferences-page"},"Hosting your own marketing preferences page"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/tag/marketing_prefs_hosting"},"Marketing Preferences Hosting")))}p.isMDXComponent=!0},3315:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tag-f2e47027794c9c467687ae5190a097d4.png"}}]);