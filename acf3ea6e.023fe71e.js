(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(6),r=(a(0),a(126)),o={aid:"simple",title:"Simple Integration",sidebar_label:"Simple Integration"},c={unversionedId:"guides/simple",id:"guides/simple",isDocsHomePage:!1,title:"Simple Integration",description:"When you implement Intilery, you add Intilery code to your website, app, or server. This code generates messages based on specific triggers you define.",source:"@site/docs/guides/simple.md",permalink:"/docs/guides/simple",sidebar_label:"Simple Integration",sidebar:"guides",previous:{title:"Contents",permalink:"/docs/guides/contents"},next:{title:"Planning a full implementation",permalink:"/docs/guides/full"}},l=[{value:"Before you begin",id:"before-you-begin",children:[]},{value:"A note on Dev and Prod Sources",id:"a-note-on-dev-and-prod-sources",children:[]},{value:"Accessing the Javascript Tag",id:"accessing-the-javascript-tag",children:[]},{value:"REST API",id:"rest-api",children:[]},{value:"Installing Intilery",id:"installing-intilery",children:[]},{value:"Javascript Quickstart",id:"javascript-quickstart",children:[{value:"Step 1: Copy the Snippet",id:"step-1-copy-the-snippet",children:[]},{value:"Step 2: Identify Users",id:"step-2-identify-users",children:[]},{value:"Step 3: Track Actions",id:"step-3-track-actions",children:[]},{value:"iOS Mobile Quickstart",id:"ios-mobile-quickstart",children:[]},{value:"Step 1: Install the SDK",id:"step-1-install-the-sdk",children:[]},{value:"Step 2: Identify Users",id:"step-2-identify-users-1",children:[]},{value:"Step 3: Track Actions",id:"step-3-track-actions-1",children:[]}]},{value:"Test that it\u2019s working",id:"test-that-its-working",children:[]}],s={rightToc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When you implement Intilery, you add Intilery code to your website, app, or server. This code generates messages based on specific triggers you define."),Object(r.b)("p",null,"In the simplest implementation, the code can be a snippet of Javascript that you copy and paste into the HTML of a website to track page views. It can also be as complex as Intilery calls embedded in a React mobile app to send messages when the app is opened or closed, when the user performs different actions, or when time based conditions are met (for example \u201cticket reservation expired\u201d or \u201ccart abandoned after 2 hours\u201d)."),Object(r.b)("p",null,"The best way to learn about how Intilery works is to see it in action. This tutorial walks you though an installation using one of our libraries: either our Javascript, PHP, or iOS library."),Object(r.b)("h2",{id:"before-you-begin"},"Before you begin"),Object(r.b)("p",null,"Before you start, you need a Intilery user account and a with the required role/permissions to access the tag and event setup. If you\u2019re not already part of an organization with a Intilery account, you can ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.intilery.com/?utm_source=docs"}),"sign up for a free account"),"."),Object(r.b)("p",null,"For the quickstart portion below, you also need access to the code for a basic website, PHP website, or an iOS app."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Tip"),"! If you don\u2019t have any of those things, you might consider creating a simple ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://pages.github.com/"}),"GitHub Pages website"),"."),Object(r.b)("h2",{id:"a-note-on-dev-and-prod-sources"},"A note on Dev and Prod Sources"),Object(r.b)("p",null,"When developing and testing, you should create and use separate sources for each of your environments (production, development, staging, etc.) to prevent testing and development activities from filling production systems with invalid data. Please request a development account to be added to your main account if required, contact us."),Object(r.b)("h2",{id:"accessing-the-javascript-tag"},"Accessing the Javascript Tag"),Object(r.b)("p",null,"Go to your Intilery account, and navigate to Customers -> Tag"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/tag.png",alt:"img"}))),Object(r.b)("p",null,"Add the code provided to your site, see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#installing-intilery"}),"Installing Intilery")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note: ")," The HTML code snippet provided should be copied and pasted exactly as provided as it includes your clientKey"),Object(r.b)("h2",{id:"rest-api"},"REST API"),Object(r.b)("p",null,"Your account manager will be provided a REST API key at the time of your account setup. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/apis/api"}),"API")," for more details on the REST API."),Object(r.b)("h2",{id:"installing-intilery"},"Installing Intilery"),Object(r.b)("p",null,"Click a tab below to see the tutorial content for the specific library you chose."),Object(r.b)("p",null,"[iOS Mobile quickstart]"," (comming soon)"),Object(r.b)("p",null,"[PHP quickstart]"," (coming soon)"),Object(r.b)("h2",{id:"javascript-quickstart"},"Javascript Quickstart"),Object(r.b)("h3",{id:"step-1-copy-the-snippet"},"Step 1: Copy the Snippet"),Object(r.b)("p",null,"Installing Intilery is easy, just paste the snippet from the Javascript tag page into the ",Object(r.b)("inlineCode",{parentName:"p"},"<head>")," tag of your site."),Object(r.b)("p",null,"That snippet loads Analytics.js onto the page ",Object(r.b)("em",{parentName:"p"},"asynchronously"),", so it won\u2019t affect your page load speed. Once the snippet is running on your site, page data is collected automatically, along with campaign data."),Object(r.b)("h3",{id:"step-2-identify-users"},"Step 2: Identify Users"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"identify")," method is how you tell Intilery who the current user is. It includes a unique User ID, and any optional traits you know about them. You can read more about it in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/tag/tag1#step-2-identify-customers"}),"identify method reference"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," You don\u2019t need to call ",Object(r.b)("inlineCode",{parentName:"p"},"identify")," for anonymous visitors to your site. Intilery automatically assigns them an ",Object(r.b)("inlineCode",{parentName:"p"},"anonymousId"),", so just calling ",Object(r.b)("inlineCode",{parentName:"p"},"page")," and ",Object(r.b)("inlineCode",{parentName:"p"},"track")," works just fine without ",Object(r.b)("inlineCode",{parentName:"p"},"identify"),"."),Object(r.b)("p",null,"Here\u2019s what a basic call to ",Object(r.b)("inlineCode",{parentName:"p"},"identify")," might look like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"analytics.identify('f4ca124298', {\n  name: 'Michael Brown',\n  email: 'mbrown@example.com'\n});\n")),Object(r.b)("p",null,"That identifies Michael by his unique User ID (in this case, ",Object(r.b)("inlineCode",{parentName:"p"},"f4ca124298"),", which is what you know him by in your database) and labels him with ",Object(r.b)("inlineCode",{parentName:"p"},"name")," and ",Object(r.b)("inlineCode",{parentName:"p"},"email")," traits."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Hold up though!")," When you actually put that code on your site, you need to replace those hard-coded trait values with the variables that represent the details of the currently logged-in user."),Object(r.b)("p",null,"To do that, we recommend that you use a backend template to inject an ",Object(r.b)("inlineCode",{parentName:"p"},"identify")," call into the footer of ",Object(r.b)("strong",{parentName:"p"},"every page")," of your site where the user is logged in. That way, no matter what page the user first lands on, they will always be identified. You don\u2019t need to call ",Object(r.b)("inlineCode",{parentName:"p"},"identify")," if your unique identifier (",Object(r.b)("inlineCode",{parentName:"p"},"userId"),") is not known."),Object(r.b)("p",null,"Depending on your templating language, your actual identify call might look something like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"analytics.identify(' {{user.id}} ', {\n  name: '{{user.fullname}}',\n  email: '{{user.email}}'\n});\n")),Object(r.b)("p",null,"With that call in your page footer, you successfully identify every user that visits your site."),Object(r.b)("h3",{id:"step-3-track-actions"},"Step 3: Track Actions"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"track")," method is how you tell Intilery about the actions your users are performing on your site. Every action triggers what we call an \u201cevent\u201d, which can also have associated properties. You can read more about ",Object(r.b)("inlineCode",{parentName:"p"},"track")," in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/tag/tag1#step-3-track-actions"}),"track method reference"),"."),Object(r.b)("p",null,"Here\u2019s what a call to ",Object(r.b)("inlineCode",{parentName:"p"},"track")," might look like when a user signs up:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"analytics.track('Signed Up', {\n  plan: 'Enterprise'\n});\n")),Object(r.b)("p",null,"That\u2019s just telling us that your user just triggered the ",Object(r.b)("strong",{parentName:"p"},"Signed Up")," event and chose your hypothetical ",Object(r.b)("inlineCode",{parentName:"p"},"'Enterprise'")," plan. Properties can be anything you want to record, for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"analytics.track('Article Bookmarked', {\n  title: 'Snow Fall',\n  subtitle: 'The Avalanche at Tunnel Creek',\n  author: 'John Branch'\n});\n")),Object(r.b)("p",null,"If you\u2019re just getting started, some of the events you should track are events that indicate the success of your site, like ",Object(r.b)("strong",{parentName:"p"},"Signed Up"),", ",Object(r.b)("strong",{parentName:"p"},"Item Purchased")," or ",Object(r.b)("strong",{parentName:"p"},"Article Bookmarked"),"."),Object(r.b)("p",null,"To get started, we recommend that you track just a few important events. You can always add more later!"),Object(r.b)("p",null,"Once you add a few ",Object(r.b)("inlineCode",{parentName:"p"},"track")," calls, ",Object(r.b)("strong",{parentName:"p"},"you\u2019re done with this tutorial!")," You successfully installed Analytics.js tracking. Check that all is ok wth the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#test-that-its-working"}),"Test that it's working")," section below"),Object(r.b)("h3",{id:"ios-mobile-quickstart"},"iOS Mobile Quickstart"),Object(r.b)("h3",{id:"step-1-install-the-sdk"},"Step 1: Install the SDK"),Object(r.b)("p",null,"The recommended way to install Intilery for iOS is using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://cocoapods.org/"}),"Cocoapods"),", since it means you can create a build with specific bundled destinations, and because it makes it simple to install and upgrade."),Object(r.b)("p",null,"First, add the ",Object(r.b)("inlineCode",{parentName:"p"},"Intilery")," dependency to your ",Object(r.b)("inlineCode",{parentName:"p"},"Podfile")," by adding the following line:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"pod 'Intilery', '~> 3.0'\n")),Object(r.b)("p",null,"Then in your application delegate\u2019s ",Object(r.b)("inlineCode",{parentName:"p"},"- application:didFinishLaunchingWithOptions:")," method, set up the SDK like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-objective-c"}),'SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\nconfiguration.trackApplicationLifecycleEvents = YES; // Enable this to record certain application events automatically!\nconfiguration.recordScreenViews = YES; // Enable this to record screen views automatically!\n[SEGAnalytics setupWithConfiguration:configuration];\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": YOUR_WRITE_KEY canbe found in the JavaScript tag in the ",Object(r.b)("inlineCode",{parentName:"p"},"annalytics.load('YOUR_WRITE_KEY')")," line"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Tip"),": You don\u2019t ",Object(r.b)("em",{parentName:"p"},"need")," to use initialization config parameters to track lifecycle events (",Object(r.b)("inlineCode",{parentName:"p"},"Application Opened"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Application Installed"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Application Updated"),") and screen views automatically, but we highly recommend that you do so you can start off already tracking some important core events."),Object(r.b)("p",null,"And of course, import the SDK in the files that you use it by adding the following line:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-objective-c"}),"#import <Intilery/SEGAnalytics.h>\n")),Object(r.b)("h3",{id:"step-2-identify-users-1"},"Step 2: Identify Users"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"identify")," method is how you tell Intilery who the current user is. It takes a unique User ID, and any optional traits you know about them. You can read more about it in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/sdk/ios#identify"}),"identify reference"),"."),Object(r.b)("p",null,"Here\u2019s what a basic call to ",Object(r.b)("inlineCode",{parentName:"p"},"identify")," might look like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-objective-c"}),'[[SEGAnalytics sharedAnalytics] identify:@"f4ca124298"\n                                  traits:@{ @"name": @"Michael Brown",\n                                    @"email": @"mbrown@example.com" }];\n')),Object(r.b)("p",null,"That call identifies Michael by his unique User ID (",Object(r.b)("inlineCode",{parentName:"p"},"f4ca124298"),", which is the one you know him by in your database) and labels him with ",Object(r.b)("inlineCode",{parentName:"p"},"name")," and ",Object(r.b)("inlineCode",{parentName:"p"},"email")," traits."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Hold up though!")," When you actually put that code in your iOS app, you need to replace those hard-coded trait values with the variables that represent the details of the currently logged-in user."),Object(r.b)("p",null,"Once you\u2019ve added an ",Object(r.b)("inlineCode",{parentName:"p"},"identify")," call, you\u2019re ready to move on to tracking!"),Object(r.b)("h3",{id:"step-3-track-actions-1"},"Step 3: Track Actions"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"track")," method is how you tell Intilery about the actions your users are performing in your app. Every action triggers what we call an \u201cevent\u201d, which can also have associated properties. You can read more about ",Object(r.b)("inlineCode",{parentName:"p"},"track")," in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/sdk/ios#track"}),"track method reference"),"."),Object(r.b)("p",null,"To get started, the Intilery iOS SDK can automatically track a few important common events, such as ",Object(r.b)("strong",{parentName:"p"},"Application Installed"),", ",Object(r.b)("strong",{parentName:"p"},"Application Updated")," and ",Object(r.b)("strong",{parentName:"p"},"Application Opened"),". You can enable this option during initialization by adding the following lines."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),'SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\nconfiguration.trackApplicationLifecycleEvents = YES;\n[SEGAnalytics setupWithConfiguration:configuration];\n')),Object(r.b)("p",null,"You should also track events that indicate success in your mobile app, like ",Object(r.b)("strong",{parentName:"p"},"Signed Up"),", ",Object(r.b)("strong",{parentName:"p"},"Item Purchased")," or ",Object(r.b)("strong",{parentName:"p"},"Article Bookmarked"),". We recommend tracking just a few important events. You can always add more later!"),Object(r.b)("p",null,"Here\u2019s what a ",Object(r.b)("inlineCode",{parentName:"p"},"track")," call might look like when a user signs up:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),'[[SEGAnalytics sharedAnalytics] track:@"Signed Up"\n                           properties:@{ @"plan": @"Enterprise" }];\n')),Object(r.b)("p",null,"That tells us that your user triggered the ",Object(r.b)("strong",{parentName:"p"},"Signed Up")," event, and chose your hypothetical ",Object(r.b)("inlineCode",{parentName:"p"},"'Enterprise'")," plan. Properties can be anything you want to record, for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),'[[SEGAnalytics sharedAnalytics] track:@"Article Bookmarked"\n                           properties:@{\n                               @"title": @"Snow Fall",\n                               @"subtitle": @"The Avalanche at Tunnel Creek",\n                               @"author": @"John Branch" }];\n')),Object(r.b)("p",null,"Once you\u2019ve added a few ",Object(r.b)("inlineCode",{parentName:"p"},"track")," calls, ",Object(r.b)("strong",{parentName:"p"},"you\u2019re set up!")," You successfully instrumented your app, and can enable destinations from your Segment workspace."),Object(r.b)("h2",{id:"test-that-its-working"},"Test that it\u2019s working"),Object(r.b)("p",null,"Once you\u2019ve set up your Intilery tag, and instrumented at least one call, you can look at the Event Debugger page in the Intilery app to check that it produces data as you expected."),Object(r.b)("p",null,"The Event Debugger is a real-time tool that helps you confirm that API calls made from your website, mobile app, or servers arrive at the Intilery platform, so you can quickly see how calls are received by Intilery  so you can troubleshoot quickly without having to wait for data processing."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/event.png",alt:"img"}))),Object(r.b)("p",null,"The Debugger is separate from your Intilery account's data pipeline, and is not an exhaustive view of all the events ever sent to your Intilery account. The Debugger only shows a sample of the events that the Source receives in real time, with a cap of the last 20 event. The Debugger is a great way to test specific parts of your implementation to validate that events are being fired successfully and arriving at Intilery."),Object(r.b)("p",null,"The Debugger shows a live stream of sampled events arriving at the Source, but you can also toggled from \u201cLive\u201d to \u201cPause\u201d, to stop the stream and prevent it from displaying new events. Events continue to arrive to Intilery, they are just not displayed in the Debugger."),Object(r.b)("p",null,"You can filter for spectic events that you know are sent to Intiery."),Object(r.b)("p",null,"Three views are available when viewing a payload:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("strong",{parentName:"li"},"Raw view")," is the complete JSON object Intilery received from the calls you sent. These calls include all the details about what is being tracked: timestamps, properties, traits, ids, and ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/schema/common/#context-fields-automatically-collected"}),"contextual information Intilery automatically collects")," the moment the data is sent."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("strong",{parentName:"li"},"Schema view")," is a recreation of the API call you made that was sent to Intilery."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("strong",{parentName:"li"},"Analytics view")," is a recreation of the JavaScript call that was called ",Object(r.b)("strong",{parentName:"li"},"Note:")," the analytics tab is shown even if the call was made from a non JavaScript source, such as REST or iOS (coming soon).")),Object(r.b)("p",null,"We\u2019ll talk more about debugging and troubleshooting ","[in a later section]"))}p.isMDXComponent=!0},126:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,h=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return a?i.a.createElement(h,c(c({ref:t},s),{},{components:a})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);