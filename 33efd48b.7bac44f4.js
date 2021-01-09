(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{115:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return a?r.a.createElement(d,l(l({ref:t},u),{},{components:a})):r.a.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),i=(a(0),a(115)),o={id:"computed-traits",title:"Computed Traits",sidebar_label:"Computed Traits"},l={unversionedId:"customers/computed-traits",id:"customers/computed-traits",isDocsHomePage:!1,title:"Computed Traits",description:"Computed Traits allow you to quickly create customer-level calculations that Intilery keeps up-to-date over time. These can be computations like the totalnumorders a customer has completed, the lifetimerevenue of a customer, the mostfrequent_category to determine which category the customer most frequently pruchases. These computations are based on your events and event properties that you are sending through Intilery on the page and track calls.",source:"@site/docs/customers/computed-traits.md",permalink:"/docs/customers/computed-traits",sidebar_label:"Computed Traits",sidebar:"customers",previous:{title:"Customers Overview",permalink:"/docs/customers/overview"},next:{title:"SQL Traits",permalink:"/docs/customers/sql-traits"}},c=[{value:"Types of Computed Traits",id:"types-of-computed-traits",children:[{value:"Event Counter",id:"event-counter",children:[]},{value:"Aggregation",id:"aggregation",children:[]},{value:"Most Frequent",id:"most-frequent",children:[]},{value:"First",id:"first",children:[]},{value:"Last",id:"last",children:[]},{value:"Unique List",id:"unique-list",children:[]},{value:"Unique List Count",id:"unique-list-count",children:[]}]},{value:"Conditions",id:"conditions",children:[]},{value:"Accessing your Computed Traits using the Profiles API",id:"accessing-your-computed-traits-using-the-profiles-api",children:[]}],u={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Computed Traits allow you to quickly create customer-level calculations that Intilery keeps up-to-date over time. These can be computations like the ",Object(i.b)("inlineCode",{parentName:"p"},"total_num_orders")," a customer has completed, the ",Object(i.b)("inlineCode",{parentName:"p"},"lifetime_revenue")," of a customer, the ",Object(i.b)("inlineCode",{parentName:"p"},"most_frequent_category")," to determine which category the customer most frequently pruchases. These computations are based on your events and event properties that you are sending through Intilery on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../schema/page"}),"page")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../schema/track"}),"track")," calls."),Object(i.b)("h2",{id:"types-of-computed-traits"},"Types of Computed Traits"),Object(i.b)("p",null,"Customers currently supports the following types of computed traits:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Types of Computed Traits",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#event-counter"}),"Event Counter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#aggregation"}),"Aggregation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#most-frequent"}),"Most Frequent")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#first"}),"First")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#last"}),"Last")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#unique-list"}),"Unique List")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#unique-list-count"}),"Unique List Count")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#conditions"}),"Conditions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#accessing-your-computed-traits-using-the-profiles-api"}),"Accessing your Computed Traits using the Profiles API"))),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/computed-traits.png",alt:"Computed Traits"}))),Object(i.b)("h3",{id:"event-counter"},"Event Counter"),Object(i.b)("p",null,"An Event Counter trait stores a count of an ",Object(i.b)("strong",{parentName:"p"},"event")," over a period of time. For example, you can create a trait called ",Object(i.b)("inlineCode",{parentName:"p"},"number_logins_90_days")," based on a ",Object(i.b)("inlineCode",{parentName:"p"},"User Logged In")," event. You can also use event properties to only specific types of events."),Object(i.b)("p",null,"Customer-level examples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Orders Completed Last 30 Days"),Object(i.b)("li",{parentName:"ul"},"Pricing Page Views Last 30 Days")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/event-counter.png",alt:"Event Counter"}))),Object(i.b)("h3",{id:"aggregation"},"Aggregation"),Object(i.b)("p",null,"An aggregation computes a ",Object(i.b)("strong",{parentName:"p"},"sum, average, minimum, or maximum")," of a numeric ",Object(i.b)("strong",{parentName:"p"},"event property"),". A good example is a ",Object(i.b)("inlineCode",{parentName:"p"},"sum_games_revenue_90_days")," if you\u2019re sending an ",Object(i.b)("inlineCode",{parentName:"p"},"Order Completed")," event with a ",Object(i.b)("inlineCode",{parentName:"p"},"revenue")," property. In the example we\u2019re refining the revenue even further based on another event property: ",Object(i.b)("inlineCode",{parentName:"p"},"category = 'games'"),". Note that you can only compute an aggregation trait for event properties that have a numeric value."),Object(i.b)("p",null,"Customer-level examples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Order Revenue Last 14 Days"),Object(i.b)("li",{parentName:"ul"},"Max Ride Distance Last 60 Days")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/aggregation.png",alt:"Aggregation"}))),Object(i.b)("h3",{id:"most-frequent"},"Most Frequent"),Object(i.b)("p",null,"A most frequent customer-level computed trait will return the ",Object(i.b)("strong",{parentName:"p"},"most common value")," for an ",Object(i.b)("strong",{parentName:"p"},"event property"),". This is helpful to create traits like ",Object(i.b)("inlineCode",{parentName:"p"},"preferred_product_viewed")," or ",Object(i.b)("inlineCode",{parentName:"p"},"most_commonly_viewed_category")," that tell you what a customer's preferred product, or content category might be. Note that the most frequent computed trait requires the event property to have been tracked at least twice. In the case of a tie, we return the first alphabetical value."),Object(i.b)("p",null,"Customer-level examples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Favorite Blog Post"),Object(i.b)("li",{parentName:"ul"},"Top Purchase Category")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/most-frequent.png",alt:"Most Frequent"}))),Object(i.b)("h3",{id:"first"},"First"),Object(i.b)("p",null,"The first customer-level trait returns the first event property value we have seen. This is common for creating traits like ",Object(i.b)("inlineCode",{parentName:"p"},"first_page_visited")," based on the page name."),Object(i.b)("p",null,"Customer-level examples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"First seen timestamp"),Object(i.b)("li",{parentName:"ul"},"First utm parameter")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/first.png",alt:"First"}))),Object(i.b)("h3",{id:"last"},"Last"),Object(i.b)("p",null,"The last trait returns the last event property value we have seen. This is common for creating traits like ",Object(i.b)("inlineCode",{parentName:"p"},"last_utm_campaign")," to help you calculate last-touch attribution for paid advertising."),Object(i.b)("p",null,"Customer-level examples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Last seen at"),Object(i.b)("li",{parentName:"ul"},"Last utm parameter")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/last.png",alt:"Last"}))),Object(i.b)("h3",{id:"unique-list"},"Unique List"),Object(i.b)("p",null,"Unique list computed traits will output a ",Object(i.b)("strong",{parentName:"p"},"list of unique values")," for an ",Object(i.b)("strong",{parentName:"p"},"event property"),". This is helpful to understand the different types of products or content that a customer has interacted with or purchased. You can create a triat like ",Object(i.b)("inlineCode",{parentName:"p"},"unique_product_categories_viewed")," and send marketing communications based on the categories viewed."),Object(i.b)("p",null,"Example use cases:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Unique products purchased"),Object(i.b)("li",{parentName:"ul"},"Unique categories"),Object(i.b)("li",{parentName:"ul"},"Unique games played")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/unique-list.png",alt:"Unique List"}))),Object(i.b)("h3",{id:"unique-list-count"},"Unique List Count"),Object(i.b)("p",null,"Unique list count computed traits will output a ",Object(i.b)("strong",{parentName:"p"},"count of the unique list of values")," for an ",Object(i.b)("strong",{parentName:"p"},"event property"),". You can create a traits like ",Object(i.b)("inlineCode",{parentName:"p"},"unique_product_categories_viewed_count")," to understand the variety of products that a customer is viewing."),Object(i.b)("p",null,"Customer-level examples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Unique products viewed count"),Object(i.b)("li",{parentName:"ul"},"Unique categories count")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/unique-list-count.png",alt:"Unique List Count"}))),Object(i.b)("h2",{id:"conditions"},"Conditions"),Object(i.b)("p",null,"All computed trait types support a common \u201cAdd Conditions\u201d section. Conditions defined here restrict the messages considered when calculating the final value of the computed trait by looking at a property of the events. For example, you could limits events to only those where \u201cprice\u201d is greater than 30.00 or where \u201cpage.url\u201d contains \u201cpricing\u201d."),Object(i.b)("p",null,"The following operators are available."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"equals"),Object(i.b)("li",{parentName:"ul"},"not equals -"),Object(i.b)("li",{parentName:"ul"},"less than"),Object(i.b)("li",{parentName:"ul"},"greater than"),Object(i.b)("li",{parentName:"ul"},"less than or equal"),Object(i.b)("li",{parentName:"ul"},"greater than or equal"),Object(i.b)("li",{parentName:"ul"},"contains"),Object(i.b)("li",{parentName:"ul"},"does not contain"),Object(i.b)("li",{parentName:"ul"},"starts with"),Object(i.b)("li",{parentName:"ul"},"ends with"),Object(i.b)("li",{parentName:"ul"},"exists"),Object(i.b)("li",{parentName:"ul"},"not exists"),Object(i.b)("li",{parentName:"ul"},"before date"),Object(i.b)("li",{parentName:"ul"},"after date"),Object(i.b)("li",{parentName:"ul"},"within last (x days)"),Object(i.b)("li",{parentName:"ul"},"with next (x days)"),Object(i.b)("li",{parentName:"ul"},"before last (x days)"),Object(i.b)("li",{parentName:"ul"},"after next (x days)")),Object(i.b)("h2",{id:"accessing-your-computed-traits-using-the-profiles-api"},"Accessing your Computed Traits using the Profiles API"),Object(i.b)("p",null,"You can access your computed traits using the Profile API by querying the ",Object(i.b)("inlineCode",{parentName:"p"},"/traits")," endpoint. All types of traits are returned for the customer"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"https://tracking.intilery.com/track/intilery/marketing/MARKETING/v1/profiles/email:xxx.xxx@intilery.com/traits\n")),Object(i.b)("p",null,"returns:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n    "lastName": "Bloggs",\n    "website": "www.intilery.com",\n    "externalId": "joe.bloggs@intilery.com",\n    "organisation": "Intilery",\n    "industry": "Other",\n    "firstName": "Joe",\n    "phone": "+44111222333444",\n    "id": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",\n    "computed": {\n      "number_logins_90_days": 9,\n      "sum_games_revenue_90_days":99.99\n    },\n    "email": "joe.bloggs@intilery.com"\n}\n')),Object(i.b)("p",null,"You can read the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../apis/profile"}),"full Profile API docs")," to learn more."))}s.isMDXComponent=!0}}]);