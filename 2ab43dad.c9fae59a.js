(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(122)),o={id:"android-quickstart",title:"Quickstart Android",sidebar_label:"Android Quickstart tutorial"},c={unversionedId:"sdk/android-quickstart",id:"sdk/android-quickstart",isDocsHomePage:!1,title:"Quickstart Android",description:"This tutorial will help you start sending analytics data from your Android app to Intilery.",source:"@site/docs/sdk/android-quick.md",permalink:"/docs/sdk/android-quickstart",sidebar_label:"Android Quickstart tutorial",sidebar:"sdk",previous:{title:"Android Mobile SDK",permalink:"/docs/sdk/android"},next:{title:"Troubleshooting Aandroid",permalink:"/docs/sdk/android-trouble"}},l=[{value:"Step 1: Install the Library",id:"step-1-install-the-library",children:[]},{value:"Step 2. Initialize the Client",id:"step-2-initialize-the-client",children:[]},{value:"Step 3. Add Permissions",id:"step-3-add-permissions",children:[]},{value:"Step 4. Identify Users",id:"step-4-identify-users",children:[]},{value:"Step 5. Track Actions",id:"step-5-track-actions",children:[]},{value:"What\u2019s Next?",id:"whats-next",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This tutorial will help you start sending analytics data from your Android app to Intilery."),Object(i.b)("p",null,"If you want to dive deeper at any point, check out the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/sdk/android"}),"Android Source Reference"),"."),Object(i.b)("h2",{id:"step-1-install-the-library"},"Step 1: Install the Library"),Object(i.b)("p",null,"The recommended way to install the library for Android is with a build system like Gradle. This makes it simple to upgrade versions and add destinations. The library is distributed using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://maven.org/"}),"Maven Central"),". Simply add the ",Object(i.b)("inlineCode",{parentName:"p"},"analytics")," SDK to your module\u2019s ",Object(i.b)("inlineCode",{parentName:"p"},"build.gradle")," file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"dependencies {\n  implementation 'com.intilery.analytics.android:analytics:1.0.0'\n}\n")),Object(i.b)("h2",{id:"step-2-initialize-the-client"},"Step 2. Initialize the Client"),Object(i.b)("p",null,"We recommend initializing the client in your ",Object(i.b)("inlineCode",{parentName:"p"},"Application")," subclass."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Create an analytics client with the given context and Intielry write key.\nAnalytics analytics = new Analytics.Builder(context, YOUR_WRITE_KEY)\n  .trackApplicationLifecycleEvents() // Enable this to record certain application events automatically!\n  .recordScreenViews() // Enable this to record screen views automatically!\n  .build();\n\n// Set the initialized instance as a globally accessible instance.\nAnalytics.setSingletonInstance(analytics);\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Notes"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Automatically tracking lifecycle events (",Object(i.b)("inlineCode",{parentName:"li"},"Application Opened"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Application Installed"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Application Updated"),") and is optional, but highly recommended to hit the ground running with core events! See ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#step-5-track-actions"}),"below")," for more info!")),Object(i.b)("h2",{id:"step-3-add-permissions"},"Step 3. Add Permissions"),Object(i.b)("p",null,"Ensure that the necessary permissions are declared in your application\u2019s ",Object(i.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="your.package.name">\n  ...\n  \x3c!-- Required for internet. --\x3e\n  <uses-permission android:name="android.permission.INTERNET"/>\n</manifest>\n')),Object(i.b)("h2",{id:"step-4-identify-users"},"Step 4. Identify Users"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Good to know"),": For any of the different methods described in this quickstart, you can replace the properties and traits in the code samples with variables that represent the data collected."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"identify")," method is one of our core API methods. It\u2019s how you tie one of your users and their actions to a recognizable userId. It also lets you record traits about the user, like their email, name, account type, etc. You can read more about it in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/sdk/android#identify"}),"identify reference"),"."),Object(i.b)("p",null,"When and where you call ",Object(i.b)("inlineCode",{parentName:"p"},"identify")," depends on how your users are authenticated, but doing it in the ",Object(i.b)("inlineCode",{parentName:"p"},"onCreate")," method of your ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://developer.android.com/reference/android/app/Application.html"}),"Application")," class would be most common, as long as you know who your user is. If your user is still anonymous, you should skip this part and we\u2019ll attribute the subsequent events to an ",Object(i.b)("inlineCode",{parentName:"p"},"anonymousId")," instead."),Object(i.b)("p",null,"Here\u2019s what a basic call to ",Object(i.b)("inlineCode",{parentName:"p"},"identify")," might look like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'Analytics.with(context).identify("f4ca124298", new Traits().putName("Michael Bolton").putEmail("mbolton@example.com"));\n')),Object(i.b)("p",null,"That\u2019s identifying Michael by his unique User ID (the one you know him by in your database) and labeling him with ",Object(i.b)("inlineCode",{parentName:"p"},"name")," and ",Object(i.b)("inlineCode",{parentName:"p"},"email")," traits."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Hold up though!")," When you actually put that code in your Android app, you\u2019ll need to replace all those hard-coded strings with details about the currently logged-in user."),Object(i.b)("p",null,"Once you\u2019ve added an ",Object(i.b)("inlineCode",{parentName:"p"},"identify")," call, you\u2019re ready to move on to\u2026"),Object(i.b)("h2",{id:"step-5-track-actions"},"Step 5. Track Actions"),Object(i.b)("p",null,"The track method is how you record any actions your users perform. Each action is known by a name, like \u201cPurchased a T-Shirt\u201d. You can also record properties specific to those actions. You can read more about ",Object(i.b)("inlineCode",{parentName:"p"},"track")," in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/sdk/android#track"}),"track reference"),"."),Object(i.b)("p",null,"To get started, our SDK can automatically track a few key common events, such as the ",Object(i.b)("strong",{parentName:"p"},"Application Installed"),", ",Object(i.b)("strong",{parentName:"p"},"Application Updated")," and ",Object(i.b)("strong",{parentName:"p"},"Application Opened"),". Simply enable this option during initialization."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"Analytics analytics = new Analytics.Builder(context, writeKey)\n  .trackApplicationLifecycleEvents()\n  .build();\n")),Object(i.b)("p",null,"You\u2019ll also want to track events that are indicators of success for your mobile app, like ",Object(i.b)("strong",{parentName:"p"},"Signed Up"),", ",Object(i.b)("strong",{parentName:"p"},"Purchased Item")," or ",Object(i.b)("strong",{parentName:"p"},"Bookmarked Article"),". We recommend tracking just a few important events. You can always add more later!"),Object(i.b)("p",null,"Here\u2019s what a call to ",Object(i.b)("inlineCode",{parentName:"p"},"track")," might look like when a user signs up:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'Analytics.with(context).track("Signed up", new Properties().putValue("plan", "Enterprise"));\n')),Object(i.b)("p",null,"That\u2019s just telling us that your user just triggered the ",Object(i.b)("strong",{parentName:"p"},"Signed Up")," event and chose your hypothetical ",Object(i.b)("inlineCode",{parentName:"p"},"'Enterprise'")," plan. Properties are simple key-value pairs that can be anything you want to record, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'Analytics.with(context).track("Bookmarked Article", new Properties()\n  .putValue("title", "Snow Fall")\n  .putValue("subtitle", "The Avalance at Tunnel Creek")\n  .putValue("author", "John Branch"));\n')),Object(i.b)("p",null,"You\u2019ll want to track events that are indicators of success for your mobile app, like ",Object(i.b)("strong",{parentName:"p"},"Signed Up"),", ",Object(i.b)("strong",{parentName:"p"},"Purchased Item")," or ",Object(i.b)("strong",{parentName:"p"},"Bookmarked Article"),"."),Object(i.b)("p",null,"To get started, we recommend tracking just a few important events. You can always add more later!"),Object(i.b)("p",null,"Once you\u2019ve added a few ",Object(i.b)("inlineCode",{parentName:"p"},"track")," calls, ",Object(i.b)("strong",{parentName:"p"},"you\u2019re done!")," You successfully instrumented your app! Now you\u2019re ready to turn on any destination you fancy from our interface, margarita in hand."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"whats-next"},"What\u2019s Next?"),Object(i.b)("p",null,"We just walked through the quickest way to get started with Intilery using Analytics for Android. You might also want to check out our full ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/sdk/android"}),"Analytics for Android reference")," to see what else is possible, or read about the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/apis/api1"}),"Tracking API methods")," to get a sense for the bigger picture."))}p.isMDXComponent=!0}}]);