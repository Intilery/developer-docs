(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[7422],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,k=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5759:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o={id:"ios",title:"Intilery iOS Mobile SDK",sidebar_label:"iOS Mobile SDK"},l=void 0,s={unversionedId:"sdk/ios",id:"sdk/ios",isDocsHomePage:!1,title:"Intilery iOS Mobile SDK",description:"Intilery for iOS makes it simple to send your data to Intilery.",source:"@site/docs/sdk/ios.md",sourceDirName:"sdk",slug:"/sdk/ios",permalink:"/docs/sdk/ios",version:"current",frontMatter:{id:"ios",title:"Intilery iOS Mobile SDK",sidebar_label:"iOS Mobile SDK"},sidebar:"sdk",next:{title:"iOS Quickstart tutorial",permalink:"/docs/sdk/ios-quickstart"}},c=[{value:"Intilery-iOS and Unique Identifiers",id:"intilery-ios-and-unique-identifiers",children:[]},{value:"API call queueing in Intilery-iOS",id:"api-call-queueing-in-intilery-ios",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"Install the SDK",id:"install-the-sdk",children:[]},{value:"Configure and set up the SDK",id:"configure-and-set-up-the-sdk",children:[]},{value:"Application Lifecycle Tracking",id:"application-lifecycle-tracking",children:[]},{value:"Automatic Screen Tracking",id:"automatic-screen-tracking",children:[]},{value:"Automatic Push Notification Tracking",id:"automatic-push-notification-tracking",children:[]},{value:"Automatic Deep Link Tracking",id:"automatic-deep-link-tracking",children:[]},{value:"Flushing",id:"flushing",children:[]}]},{value:"Data Collection",id:"data-collection",children:[{value:"Identify",id:"identify",children:[]},{value:"Track",id:"track",children:[]},{value:"Screen",id:"screen",children:[]},{value:"AnonymousId",id:"anonymousid",children:[]},{value:"Reset",id:"reset",children:[]},{value:"Disabling Data Collection for Users who opt out",id:"disabling-data-collection-for-users-who-opt-out",children:[]}]},{value:"Logging",id:"logging",children:[]},{value:"Ad Tracking and IDFA",id:"ad-tracking-and-idfa",children:[{value:"CocoaPods",id:"cocoapods",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Intilery for iOS makes it simple to send your data to Intilery."),(0,r.kt)("p",null,"All of Intilery's libraries are open-source, so you can ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Intilery/analytics-ios"},"view Intilery for iOS on GitHub")),(0,r.kt)("p",null,"Want to stay updated on releases? Subscribe to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Intilery/analytics-ios/tags.atom"},"release feed"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Intilery does not currently support tracking of watchkit extensions for the Apple Watch. ",(0,r.kt)("a",{parentName:"p",href:"email:support@intilery.com"},"Email us")," if you\u2019re interested in a Watchkit SDK. For now we recommend tracking watch interactions using the iPhone app code."),(0,r.kt)("h2",{id:"intilery-ios-and-unique-identifiers"},"Intilery-iOS and Unique Identifiers"),(0,r.kt)("p",null,"One of the most important parts of any analytics platform is the ability to consistently and accurately identify users. To do this, the platform must assign and persist some form of identification on the device, so you can analyze user actions effectively."),(0,r.kt)("p",null,"Naturally the Intilery SDK needs a unique ID for each user. To protect end-users\u2019 privacy, Apple places restrictions on how these IDs can be generated and used. This section explains Apple\u2019s policies, and how Intilery generates IDs in compliance with these policies."),(0,r.kt)("p",null,"Before iOS 5 developers had access to ",(0,r.kt)("inlineCode",{parentName:"p"},"uniqueIdentifier"),", which was a hardware-specific serial number that was consistent across different apps, vendors and installs. Starting with iOS 5, however, ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/news/?id=3212013a"},"Apple deprecated access to this identifier"),". In iOS 6 Apple introduced the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifierForVendor")," which protects end-users from cross-app identification. In iOS 7 Apple ",(0,r.kt)("a",{parentName:"p",href:"http://techcrunch.com/2013/06/14/ios-7-eliminates-mac-address-as-tracking-option-signaling-final-push-towards-apples-own-ad-identifier-technology/"},"restricted access to the device\u2019s MAC address"),", which many developers used as a workaround to get a similar device-specific serial number to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"uniqueIdentifier"),"."),(0,r.kt)("p",null,"Intilery's iOS library supports iOS 7+ by generating a UUID and storing it on disk. This complies with Apple\u2019s required privacy policies, maintains compatibility, and also enables correct tracking in situations where multiple people use the same device, since the UUID can be regenerated."),(0,r.kt)("h2",{id:"api-call-queueing-in-intilery-ios"},"API call queueing in Intilery-iOS"),(0,r.kt)("p",null,"The Intilery SDK queues API calls rather than making a network request for each event tracked, to help improve the user\u2019s battery life."),(0,r.kt)("p",null,"Batches are sent either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"when there are 20 or more events in the queue"),(0,r.kt)("li",{parentName:"ul"},"on a scheduled timer, every 30 seconds"),(0,r.kt)("li",{parentName:"ul"},"when the app goes to the background")),(0,r.kt)("p",null,"To limit memory and disk usage, Intilery only queues up to 1000 events. When the app is terminated, Intilery saves the queue to disk, and loads that data again at app launch so there is no data loss."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"install-the-sdk"},"Install the SDK"),(0,r.kt)("p",null,"The recommended way to install Intilery for iOS is using ",(0,r.kt)("a",{parentName:"p",href:"http://cocoapods.org/"},"Cocoapods"),", since it means you can create a build with specific destinations, and because it makes it simple to install and upgrade."),(0,r.kt)("p",null,"First, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"Analytics")," dependency to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile"),", like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pod 'IntileryAnalytics', '~> 1.0'\n")),(0,r.kt)("p",null,"Then in your application delegate\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"- application:didFinishLaunchingWithOptions:")," method, set up the SDK like so:"),(0,r.kt)("h4",{id:"swift"},"Swift"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")\nconfiguration.trackApplicationLifecycleEvents = true // Enable this to record certain application events automatically!\nconfiguration.recordScreenViews = true // Enable this to record screen views automatically!\nAnalytics.setup(with: configuration)\n')),(0,r.kt)("h4",{id:"objective-c"},"Objective-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\nconfiguration.trackApplicationLifecycleEvents = YES; // Enable this to record certain application events automatically!\nconfiguration.recordScreenViews = YES; // Enable this to record screen views automatically!\n[SEGAnalytics setupWithConfiguration:configuration];\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Automatically tracking lifecycle events (",(0,r.kt)("inlineCode",{parentName:"p"},"Application Opened"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Application Installed"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Application Updated"),") and screen views is optional using initialization config parameters, but highly recommended to hit the ground running with core events!"),(0,r.kt)("p",null,"And of course, import the SDK in the files that you use it with:"),(0,r.kt)("h4",{id:"swift-1"},"Swift"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"import Segment\n")),(0,r.kt)("h4",{id:"objective-c-1"},"Objective-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"import Segment\n")),(0,r.kt)("h3",{id:"configure-and-set-up-the-sdk"},"Configure and set up the SDK"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SEGAnalyticsConfiguration")," class provides a set of properties that control various policies of the ",(0,r.kt)("inlineCode",{parentName:"p"},"SEGAnalytics")," instance. You initialize it with a ",(0,r.kt)("inlineCode",{parentName:"p"},"writeKey")," as in the examples below:"),(0,r.kt)("h4",{id:"swift-2"},"Swift"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'Analytics.setup(with: AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY"))\n')),(0,r.kt)("h4",{id:"objective-c-2"},"Objective-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'[SEGAnalytics setupWithConfiguration:[SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"]];\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"writeKey")," *NSString **"),(0,r.kt)("th",{parentName:"tr",align:null},"Your Intilery ",(0,r.kt)("strong",{parentName:"th"},"Write Key"),"."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"application-lifecycle-tracking"},"Application Lifecycle Tracking"),(0,r.kt)("p",null,"The Intilery-iOS SDK can automatically instrument ",(0,r.kt)("a",{parentName:"p",href:"/docs/schema/mobile/"},"common application lifecycle events")," such as \u201cApplication Installed\u201d, \u201cApplication Updated\u201d and \u201cApplication Opened\u201d. Simply enable this option when you initialize the SDK."),(0,r.kt)("h4",{id:"swift-3"},"Swift"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")\nconfiguration.trackApplicationLifecycleEvents = true\nAnalytics.setup(with: configuration)\n')),(0,r.kt)("h4",{id:"objective-c-3"},"Objective-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\nconfiguration.trackApplicationLifecycleEvents = YES;\n[SEGAnalytics setupWithConfiguration:configuration];\n')),(0,r.kt)("h3",{id:"automatic-screen-tracking"},"Automatic Screen Tracking"),(0,r.kt)("p",null,"The Intilery-iOS SDK can automatically instrument screen calls. It uses method swizzling to detect when ",(0,r.kt)("inlineCode",{parentName:"p"},"ViewController"),"s are loaded, and uses the label of the view controller (or the class name if a label is not available) as the screen name. It removes the string \u201cViewController\u201d from the name if one is present."),(0,r.kt)("h4",{id:"swift-4"},"Swift"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")\nconfiguration.recordScreenViews = true\nAnalytics.setup(with: configuration)\n')),(0,r.kt)("h4",{id:"objective-c-4"},"Objective-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\nconfiguration.recordScreenViews = YES;\n[SEGAnalytics setupWithConfiguration:configuration];\n')),(0,r.kt)("h3",{id:"automatic-push-notification-tracking"},"Automatic Push Notification Tracking"),(0,r.kt)("p",null,"When you set ",(0,r.kt)("inlineCode",{parentName:"p"},"trackPushNotifications")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"YES"),", the SDK automatically sends a Track event for ",(0,r.kt)("inlineCode",{parentName:"p"},"Push Notification Received")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Push Notification Tapped"),"."),(0,r.kt)("h4",{id:"switft"},"Switft"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")\nconfiguration.trackPushNotifications = true\nAnalytics.setup(with: configuration)\n')),(0,r.kt)("h4",{id:"objective-c-5"},"Objective-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'EGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\nconfiguration.trackPushNotifications = YES;\n[SEGAnalytics setupWithConfiguration:configuration];\n')),(0,r.kt)("h3",{id:"automatic-deep-link-tracking"},"Automatic Deep Link Tracking"),(0,r.kt)("p",null,"When you set ",(0,r.kt)("inlineCode",{parentName:"p"},"trackDeepLinks")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"YES"),", the SDK automatically sends a Track event for ",(0,r.kt)("inlineCode",{parentName:"p"},"Deep Link Opened"),"."),(0,r.kt)("h4",{id:"swift-5"},"Swift"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")\nconfiguration.trackDeepLinks = true\nAnalytics.setup(with: configuration)\n')),(0,r.kt)("h4",{id:"objective-c-6"},"Objective-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\nconfiguration.trackDeepLinks = YES;\n[SEGAnalytics setupWithConfiguration:configuration];\n')),(0,r.kt)("h3",{id:"flushing"},"Flushing"),(0,r.kt)("p",null,"You can set the number of events that should queue before flushing. Setting this to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," will send events as they come in (i.e. not send batched events) and will use more battery. ",(0,r.kt)("inlineCode",{parentName:"p"},"20")," by default."),(0,r.kt)("h4",{id:"swift-6"},"Swift"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")\nconfiguration.flushAt = 1\nAnalytics.setup(with: configuration)\n')),(0,r.kt)("h4",{id:"objective-c-7"},"Objective-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\nconfiguration.flushAt = 1;\n[SEGAnalytics setupWithConfiguration:configuration];\n')),(0,r.kt)("p",null,"You can also manually ",(0,r.kt)("inlineCode",{parentName:"p"},"flush")," the queue:"),(0,r.kt)("h4",{id:"switft-1"},"Switft"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'Analytics.shared().alias("glenncoco")\nAnalytics.shared().flush()\n')),(0,r.kt)("h4",{id:"objective-c-8"},"Objective-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'[[SEGAnalytics sharedAnalytics] alias:@"glenncoco"];\n[[SEGAnalytics sharedAnalytics] flush]\n')),(0,r.kt)("h2",{id:"data-collection"},"Data Collection"),(0,r.kt)("p",null,"Now that the Intilery SDK and is installed, you\u2019re ready to collect some data!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Good to know"),": For any of the methods described in this doc, you can replace the properties and traits in the code samples with variables that represent the data collected."),(0,r.kt)("h3",{id:"identify"},"Identify"),(0,r.kt)("p",null,"Intilery's Identify method lets you tie a user to their actions and record traits about them. It includes a unique User ID and any optional traits you know about them."),(0,r.kt)("p",null,"Intilery recommends that you call Identify once when you first create the user\u2019s account, and only call it again later when they update their traits or you change them."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Intilery automatically assigns an ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymousId")," to users before you identify them. The ",(0,r.kt)("inlineCode",{parentName:"p"},"userId")," is what connects anonymous activities across devices (for example, iPhone and iPad)."),(0,r.kt)("p",null,"Example ",(0,r.kt)("inlineCode",{parentName:"p"},"identify")," call:"),(0,r.kt)("h4",{id:"swift-7"},"Swift"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'Analytics.shared().identify("a user\'s id", traits: ["email": "a user\'s email address"])\n')),(0,r.kt)("h4",{id:"objective-c-9"},"Objective-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'[[SEGAnalytics sharedAnalytics] identify:@"a user\'s id"\n                                traits:@{ @"email": @"a user\'s email address" }];\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"userId")," ",(0,r.kt)("em",{parentName:"th"},"NSString ","*",", optional")),(0,r.kt)("th",{parentName:"tr",align:null},"The database ID for this user. If you don\u2019t know who the user is yet, you can omit the ",(0,r.kt)("inlineCode",{parentName:"th"},"userId")," and just record ",(0,r.kt)("inlineCode",{parentName:"th"},"traits"),". You can read more in the ",(0,r.kt)("a",{parentName:"th",href:"/docs/schema/identify"},"identify reference"),"."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"traits")," ",(0,r.kt)("em",{parentName:"td"},"NSDictionary ","*",", optional")),(0,r.kt)("td",{parentName:"tr",align:null},"A dictionary of traits you know about the user, like their ",(0,r.kt)("inlineCode",{parentName:"td"},"email")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"name"),". You can read more about traits in the ",(0,r.kt)("a",{parentName:"td",href:"/docs/schema/identify"},"identify reference"),".")))),(0,r.kt)("p",null,"Intilery for iOS works on its own background thread, so it will never block the main thread for the UI or the calling thread."),(0,r.kt)("p",null,"Calling ",(0,r.kt)("inlineCode",{parentName:"p"},"- identify:")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"userId")," will write that ID to disk to be used in subsequent calls. That ID can be removed either by uninstalling the app or by calling ",(0,r.kt)("a",{parentName:"p",href:"#reset"},(0,r.kt)("inlineCode",{parentName:"a"},"reset")),"."),(0,r.kt)("p",null,"Find details on the identify method payload in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/schema/identify/"},"Identify Schema documentation"),"."),(0,r.kt)("h3",{id:"track"},"Track"),(0,r.kt)("p",null,"Intilery's Track method lets you record the actions your users perform. Every action triggers what we call an \u201cevent\u201d, which can also have associated properties."),(0,r.kt)("p",null,"To get started, the Intilery iOS SDK can automatically track a few key common events with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/schema/mobile/"},"Intilery Native Mobile Schema"),", such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application Installed"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Application Updated")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Application Opened"),". Enable this option during initialization."),(0,r.kt)("p",null,"You might also want to track events that are indicators of success for your mobile app, like ",(0,r.kt)("strong",{parentName:"p"},"Signed Up"),", ",(0,r.kt)("strong",{parentName:"p"},"Item Purchased")," or ",(0,r.kt)("strong",{parentName:"p"},"Article Bookmarked"),". Intilery recommends tracking just a few important events to start out. You can always add more later! An example Track call might look like this:"),(0,r.kt)("h4",{id:"swift-8"},"Swift"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'Analytics.shared().track("Item Purchased", properties: ["item": "Sword of Heracles", "revenue": 2.95])\n')),(0,r.kt)("h4",{id:"objective-c-10"},"Objective-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'[[SEGAnalytics sharedAnalytics] track:@"Item Purchased"\n                            properties:@{ @"item": @"Sword of Heracles", @"revenue": @2.95 }];\n')),(0,r.kt)("p",null,"This example Track call above tells you that your user just triggered the ",(0,r.kt)("strong",{parentName:"p"},"Item Purchased")," event, and records the ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," name of \u201cSword of Heracles\u201d and ",(0,r.kt)("inlineCode",{parentName:"p"},"revenue")," of 2.95."),(0,r.kt)("p",null,"Track event properties can be anything you want to record. In this case, item and revenue."),(0,r.kt)("p",null,"The Track call has the following fields:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"event")," *NSString **"),(0,r.kt)("th",{parentName:"tr",align:null},"The name of the event. We recommend human-readable names like ",(0,r.kt)("strong",{parentName:"th"},"Song Played")," or ",(0,r.kt)("strong",{parentName:"th"},"Status Updated"),"."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"properties")," ",(0,r.kt)("em",{parentName:"td"},"NSDictionary ","*",", optional")),(0,r.kt)("td",{parentName:"tr",align:null},"A dictionary of properties for the event. If the event was ",(0,r.kt)("inlineCode",{parentName:"td"},"Product Added")," to cart, it might have properties like ",(0,r.kt)("inlineCode",{parentName:"td"},"price")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"productType"),".")))),(0,r.kt)("h3",{id:"screen"},"Screen"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/schema/screen/"},"Screen")," method lets you you record whenever a user sees a screen of your mobile app, along with optional extra information about the page being viewed."),(0,r.kt)("p",null,"You\u2019ll want to record a screen event an event whenever the user opens a screen in your app. This could be a view, fragment, dialog or activity depending on your app."),(0,r.kt)("p",null,"Example Screen call:"),(0,r.kt)("h4",{id:"swift-9"},"Swift"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'Analytics.shared().screen("Photo Feed", properties: ["Feed Type": "private"])\n')),(0,r.kt)("h4",{id:"objective-c-11"},"Objective-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'[[SEGAnalytics sharedAnalytics] screen:@"Photo Feed"\n                            properties:@{ @"Feed Type": @"private" }];\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"screen")," call has the following fields:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"The name of the screen, for example ",(0,r.kt)("strong",{parentName:"th"},"Signup")," or ",(0,r.kt)("strong",{parentName:"th"},"Home"),"."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A dictionary of properties for the screen. A screen ",(0,r.kt)("strong",{parentName:"td"},"Photo Feed")," might have properties like ",(0,r.kt)("inlineCode",{parentName:"td"},"Feed Type")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"Sort Order"),".")))),(0,r.kt)("p",null,"Find details on the Screen payload in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/schema/screen/"},"Screen Schema documentation"),"."),(0,r.kt)("h3",{id:"anonymousid"},"AnonymousId"),(0,r.kt)("p",null,"You can retrieve the ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymousId")," set by the library by using:"),(0,r.kt)("h4",{id:"swift-10"},"Swift"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"Analytics.shared().getAnonymousId\n")),(0,r.kt)("h4",{id:"objective-c-12"},"Objective-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"[[SEGAnalytics sharedAnalytics] getAnonymousId];\n")),(0,r.kt)("h3",{id:"reset"},"Reset"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"- reset")," method clears the SDK\u2019s internal stores for the current ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),". This is useful for apps where users can log in and out with different identities over time."),(0,r.kt)("p",null,"The example code below clears all information about the user."),(0,r.kt)("h4",{id:"swift-11"},"Swift"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"Analytics.shared().reset()\n")),(0,r.kt)("h4",{id:"objective-c-13"},"Objective-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"[[SEGAnalytics sharedAnalytics] reset];\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reset does not clear events in the queue"),", and any remaining events in the queue are sent the next time the app starts. You might want to call ",(0,r.kt)("a",{parentName:"p",href:"#flushing"},"Flush")," before you call Reset."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Each time you call ",(0,r.kt)("inlineCode",{parentName:"p"},"reset"),", a new AnonymousId is generated, therefore only recommended when a user logs out or similair"),(0,r.kt)("h3",{id:"disabling-data-collection-for-users-who-opt-out"},"Disabling Data Collection for Users who opt out"),(0,r.kt)("p",null,"Depending on the audience for your app (for example, children) or the countries where you sell your app (for example, the EU), you might need to offer the ability for users to opt-out of analytics data collection from inside your app. You can turn off forwarding to ALL destinations including Intilery itself using the following code:"),(0,r.kt)("h4",{id:"swift-12"},"Swift"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"[[SEGAnalytics sharedAnalytics] disable];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"Analytics.shared().disable()\n")),(0,r.kt)("p",null,"Or if the user opts back in, you can re-enable data collection:"),(0,r.kt)("h4",{id:"swift-13"},"Swift"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"Analytics.shared().enable()\n")),(0,r.kt)("h4",{id:"objective-c-14"},"Objective-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"[[SEGAnalytics sharedAnalytics] enable];\n")),(0,r.kt)("p",null,"If you disable the Intilery SDK in response to user opt-out, all Intilery method invocations (Track, Screen, Identify, etc) are ignored. "),(0,r.kt)("h2",{id:"logging"},"Logging"),(0,r.kt)("p",null,"To see a trace of your data going through the SDK, you can enable debug logging with ",(0,r.kt)("inlineCode",{parentName:"p"},"- debug:"),":"),(0,r.kt)("h4",{id:"swift-14"},"Swift"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"Analytics.debug(true)\n")),(0,r.kt)("h4",{id:"objective-c-15"},"Objective-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"[SEGAnalytics debug:YES];\n")),(0,r.kt)("p",null,"Or disable it like this:"),(0,r.kt)("h4",{id:"swift-15"},"Swift"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"Analytics.debug(false)\n")),(0,r.kt)("h4",{id:"objective-c-16"},"Objective-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"[SEGAnalytics debug:NO];\n")),(0,r.kt)("p",null,"By default debug logging is disabled."),(0,r.kt)("h2",{id:"ad-tracking-and-idfa"},"Ad Tracking and IDFA"),(0,r.kt)("p",null,"Starting iOS 14, applications must prompt users if that app needs to collect their Identifier for Advertisers (IDFA). Going forward with analytics-ios-4.1 and later, Intilery doesn\u2019t auto-collect IDFA. If your app or any integrations require the use of IDFA, you need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"import the ",(0,r.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/adsupport"},"AdSupport")," and ",(0,r.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/apptrackingtransparency"},"App Tracking Transparency")," Frameworks by Apple"),(0,r.kt)("li",{parentName:"ol"},"pass the below code snippet to Intilery config and start tracking events"),(0,r.kt)("li",{parentName:"ol"},"prompt the user for consent and collect the IDFA")),(0,r.kt)("p",null,"You can use the following closure snippet to pass the value to ",(0,r.kt)("inlineCode",{parentName:"p"},"intilery-ios")," as configurations:"),(0,r.kt)("h4",{id:"swift-16"},"Swift"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'import AdSupport\n\n...\n\nlet configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")\n\n// Enable advertising collection\nconfiguration.enableAdvertisingTracking = true\n// Set the block to be called when the advertisingID is needed\n// NOTE: In iOS 14, you\'ll need to manually do authorization elsewhere and only when it has been authorized, return the advertisingIdentifier to intilery via the block below\nconfiguration.adSupportBlock = { () -> String in\n    return ASIdentifierManager.shared().advertisingIdentifier\n}\n\nAnalytics.setup(with: configuration)\n')),(0,r.kt)("h4",{id:"objective-c-17"},"Objective-C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'@import AdSupport;\n\n...\n\nSEGAnalyticsConfiguration* configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\n\n// Enable advertising collection\nconfiguration.enableAdvertisingTracking = YES;\n// Set the block to be called when the advertisingID is needed\n// NOTE: In iOS 14, you\'ll need to manually do authorization elsewhere and only when it has been authorized, return the advertisingIdentifier to intilery via the block below\nconfiguration.adSupportBlock = ^{\n    return [[ASIdentifierManager sharedManager] advertisingIdentifier];\n}\n\n[SEGAnalytics setupWithConfiguration:configuration];\n')),(0,r.kt)("p",null,"The same value for IDFA will used across all (device and cloud-mode) integrations."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," intilery-ios can continue to collect events without the IDFA until user is prompted and only upon user consent the ",(0,r.kt)("inlineCode",{parentName:"p"},"advertisingId")," field is added to the event payload"),(0,r.kt)("p",null,"Ad-tracking affects two keys under the ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," object of every event:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"device.adTrackingEnabled")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"true")," if SDK is setup with closure and user has consented, ",(0,r.kt)("inlineCode",{parentName:"th"},"false")," otherwise"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device.advertisingId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"idfa_value")," if user opts-in otherwise this key is skipped from event payload")))),(0,r.kt)("p",null,"If your use cases don\u2019t require the need for IDFA collection you can skip this setup and under your event context you will see not see the ",(0,r.kt)("inlineCode",{parentName:"p"},"device.adTrackingEnabled")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"device.advertisingId")," key/value in your event payload."),(0,r.kt)("h3",{id:"cocoapods"},"CocoaPods"),(0,r.kt)("p",null,"Add this line in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pod 'IntileryAnalytics', :git => 'https://github.com/Intilery/intilery-analytics-ios', :branch => 'master'\n")))}d.isMDXComponent=!0}}]);