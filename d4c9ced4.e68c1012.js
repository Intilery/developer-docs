(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var i=n(2),a=n(6),o=(n(0),n(124)),r={id:"ios-faq",title:"iOS Frequently Asked Questions",sidebar_label:"iOS FAQs"},c={unversionedId:"sdk/ios-faq",id:"sdk/ios-faq",isDocsHomePage:!1,title:"iOS Frequently Asked Questions",description:"How big is the Intilery SDK?",source:"@site/docs/sdk/ios-faq.md",permalink:"/docs/sdk/ios-faq",sidebar_label:"iOS FAQs",sidebar:"sdk",previous:{title:"Troubleshooting iOS",permalink:"/docs/sdk/ios-trouble"},next:{title:"iOS Push Notifications",permalink:"/docs/sdk/ios-push"}},s=[{value:"How big is the Intilery SDK?",id:"how-big-is-the-intilery-sdk",children:[]},{value:"Can I install the SDK manually using a dynamic framework?",id:"can-i-install-the-sdk-manually-using-a-dynamic-framework",children:[]},{value:"How do I use push notifications?",id:"how-do-i-use-push-notifications",children:[]},{value:"Can I set user traits without a User ID?",id:"can-i-set-user-traits-without-a-user-id",children:[]},{value:"Can I anonymize IP addresses?",id:"can-i-anonymize-ip-addresses",children:[]},{value:"How can I get the user\u2019s IDFA?",id:"how-can-i-get-the-users-idfa",children:[]},{value:"tvOS / macOS / Catalyst Support",id:"tvos--macos--catalyst-support",children:[]},{value:"Why have you forked Segment?",id:"why-have-you-forked-segment",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-big-is-the-intilery-sdk"},"How big is the Intilery SDK?"),Object(o.b)("p",null,"The core Intilery SDK is extremely lightweight. It weighs in at about 212kb."),Object(o.b)("h2",{id:"can-i-install-the-sdk-manually-using-a-dynamic-framework"},"Can I install the SDK manually using a dynamic framework?"),Object(o.b)("p",null,"Intilery ",Object(o.b)("strong",{parentName:"p"},"highly recommends")," using Swift Package Manager or Cocoapods. We cannot guarantee support if you do not use a dependency manager."),Object(o.b)("p",null,"However, if you cannot use Swift Package Manager or Cocoapods, you can manually install our dynamic framework allowing you to send data to Intilery."),Object(o.b)("p",null,"To install manually:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Download the ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/Intilery/intilery-analytics-ios/releases/"}),"latest built SDK"),", and unzip the zip file"),Object(o.b)("li",{parentName:"ol"},"Drag the unzipped ",Object(o.b)("inlineCode",{parentName:"li"},"Segment.framework")," folder into your XCode project"),Object(o.b)("li",{parentName:"ol"},"In the ",Object(o.b)("strong",{parentName:"li"},"General Tab")," for your project, search for ",Object(o.b)("inlineCode",{parentName:"li"},"Embedded Binaries")," and add the ",Object(o.b)("inlineCode",{parentName:"li"},"Segment.framework"))),Object(o.b)("p",null,Object(o.b)("img",Object(i.a)({parentName:"p"},{src:"https://segment.com/docs/connections/sources/catalog/libraries/mobile/ios/images/embeddedbinaries.png",alt:"img"}))),Object(o.b)("p",null,"Once you install the framework, import the header file and install as described in ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"./ios#install-the-sdk"}),"Install the SDK"),"."),Object(o.b)("p",null,"If you choose not to use a dependency manager, you must manually keep files up-to-date with regularly scheduled, manual updates."),Object(o.b)("h2",{id:"how-do-i-use-push-notifications"},"How do I use push notifications?"),Object(o.b)("p",null,"For services that send push notifications, you must first ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/AddingCapabilities/AddingCapabilities.html"}),"create a Push SSL certificate"),". Then configure your application delegate similarly to the example code below, replacing ",Object(o.b)("inlineCode",{parentName:"p"},"YOUR_WRITE_KEY")," with your own Intilery source write key. Detailed examples of how to complete the process can be found in ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/usernotifications/handling_notifications_and_notification-related_actions"}),"Apple\u2019s documentation on the subject"),"."),Object(o.b)("h4",{id:"swift"},"Swift"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-swift"}),'func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")\n\n    // Use launchOptions to track tapped notifications\n    configuration.launchOptions = launchOptions\n    Analytics.setup(with: configuration)\n\n    // See the Apple linked above for detailed setup information, as it will vary \n    // based on which versions of iOS are supported and what language is being used.\n    ...\n\n    return true\n}\n')),Object(o.b)("h4",{id:"objective-c"},"Objective-C"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),'- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    SEGAnalyticsConfiguration* configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\n\n    // Use launchOptions to track tapped notifications\n    configuration.launchOptions = launchOptions;\n    [SEGAnalytics setupWithConfiguration:configuration];\n\n    // See the Apple documentation linked above for detailed setup information, as it will vary \n    // based on which versions of iOS are supported and what language is being used.\n    ...\n\n    return YES;\n}\n')),Object(o.b)("p",null,"Once you\u2019ve passed in the launch options and configured the types of notifications your application should received you can then call into Intilery's library to indicate that a device token and/or notification has been received."),Object(o.b)("h4",{id:"swift-1"},"Swift"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-swift"}),"// Let Intilery Analytics know a device token was received\nAnalytics.shared().registeredForRemoteNotifications(deviceToken: deviceToken)\n\n...\n\n// Let Intilery Analytics know that a remote notification was received\nAnalytics.shared().receivedRemoteNotification(userInfo)\n")),Object(o.b)("h4",{id:"objective-c-1"},"Objective-C"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"// Let Intilery Analytics know a device token was received\n[[SEGAnalytics sharedAnalytics] registeredForRemoteNotificationsWithDeviceToken:deviceToken];\n\n...\n\n// Let Intilery Analytics know that a remote notification was received\n[[SEGAnalytics sharedAnalytics] receivedRemoteNotification:userInfo];\n")),Object(o.b)("h2",{id:"can-i-set-user-traits-without-a-user-id"},"Can I set user traits without a User ID?"),Object(o.b)("p",null,"Yes, you can pass a ",Object(o.b)("inlineCode",{parentName:"p"},"nil")," value for the ",Object(o.b)("inlineCode",{parentName:"p"},"userId")," in an ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/schema/identify"}),"Identify call"),", like in the following example:"),Object(o.b)("h4",{id:"swift-2"},"Swift"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-swift"}),'Analytics.shared().identify(nil, traits: ["email": "example@example.com", "gender": "F"])\n')),Object(o.b)("h4",{id:"objective-c-2"},"Objective-C"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),'[[SEGAnalytics sharedAnalytics] identify: nil\n    traits:@{ @"email": @"example@example.com",\n      @"Gender": @"F" }];\n')),Object(o.b)("h2",{id:"can-i-anonymize-ip-addresses"},"Can I anonymize IP addresses?"),Object(o.b)("p",null,"Intilery collects IP addresses for device-mode (iOS, Android, Analytics.js and Xamarin) events automatically. If you don\u2019t want to record your tracked users\u2019 IP in destinations (and in storage destinations like S3), you can set the event\u2019s ",Object(o.b)("inlineCode",{parentName:"p"},"context.ip")," field to ",Object(o.b)("inlineCode",{parentName:"p"},"0.0.0.0")," . The Intilery servers don\u2019t record the IP address of the client for libraries if the ",Object(o.b)("inlineCode",{parentName:"p"},"context.ip")," field is already set."),Object(o.b)("p",null,"The following examples show how to set a static 0 value for the IP."),Object(o.b)("h4",{id:"swift-3"},"Swift"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-swift"}),'Analytics.shared().track("Clicked Button", properties: nil, options: ["context": ["ip": "0.0.0.0"]])\n')),Object(o.b)("h4",{id:"objective-c-3"},"Objective-C"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),'[[SEGAnalytics sharedAnalytics] track: @"Clicked Button"\n  properties:nil\n  options:@{ @"context": @{@"ip": @"0.0.0.0"}}];\n')),Object(o.b)("h2",{id:"how-can-i-get-the-users-idfa"},"How can I get the user\u2019s IDFA?"),Object(o.b)("p",null,"Some destinations, especially mobile attribution tools (e.g. Kochava), require the IDFA (identifier for advertisers). The IDFA appears in Intilery calls in the debugger as ",Object(o.b)("inlineCode",{parentName:"p"},"context.device.advertisingId"),". To capture this value with Analytics-iOS, follow the steps in ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"./ios#ad-tracking-and-idfa"}),"Ad-tracking and IDFA"),". Remember that Apple now requires that the user consent to your tracking before you can collect the IDFA."),Object(o.b)("h2",{id:"tvos--macos--catalyst-support"},"tvOS / macOS / Catalyst Support"),Object(o.b)("p",null,"We now supports tvOS, macOS and Catalyst as well. You can follow the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"./ios-quickstart"}),"quickstart documentation")," to set it up!"),Object(o.b)("h2",{id:"why-have-you-forked-segment"},"Why have you forked Segment?"),Object(o.b)("p",null,"We forked the segment client libraries to give you the choice of using segment to send data to Intilery and a Segment destination, or if you do not use Segment you can send the data directly to Intielry with our forked libraries and SDKs. If in the future you decide to use Segment, the change should be as simple as using the Segment library/sdk instead of the Intilery library/sdk"))}d.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=i,h=u["".concat(r,".").concat(b)]||u[b]||p[b]||o;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);