(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(6),i=(a(0),a(94)),c={id:"mobile",title:"Native Mobile Schema",sidebar_label:"Mobile"},l={unversionedId:"schema/mobile",id:"schema/mobile",isDocsHomePage:!1,title:"Native Mobile Schema",description:"One of the core components of the Intilery Schema is the track method. It records any arbitrary event that the user has triggered. For Mobile tracking, in addition to screen calls, you\u2019ll want to send specific event names that we recognize semantically. That way, we can transform them correctly before actioning them in the Intilery CDP and Customer Engagement Platform.",source:"@site/docs/schema/mobile.md",permalink:"/docs/schema/mobile",editUrl:"https://github.com/Intilery/intilery.github.io/edit/master/website/docs/schema/mobile.md",sidebar_label:"Mobile",sidebar:"schema",previous:{title:"Page Schema",permalink:"/docs/schema/page"},next:{title:"Retail/Ecommerce Schema",permalink:"/docs/schema/retail"}},b=[{value:"Overview of Events",id:"overview-of-events",children:[]},{value:"Lifecycle Events",id:"lifecycle-events",children:[{value:"Application Installed",id:"application-installed",children:[]},{value:"Application Opened",id:"application-opened",children:[]},{value:"Application Backgrounded",id:"application-backgrounded",children:[]},{value:"Application Updated",id:"application-updated",children:[]},{value:"Application Uninstalled",id:"application-uninstalled",children:[]},{value:"Application Crashed",id:"application-crashed",children:[]}]},{value:"Campaign Events",id:"campaign-events",children:[{value:"Install Attributed",id:"install-attributed",children:[]},{value:"Push Notification Received",id:"push-notification-received",children:[]},{value:"Push Notification Tapped",id:"push-notification-tapped",children:[]},{value:"Push Notification Bounced",id:"push-notification-bounced",children:[]},{value:"Deep Link Opened",id:"deep-link-opened",children:[]},{value:"Deep Link Clicked",id:"deep-link-clicked",children:[]}]}],p={rightToc:b};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"One of the core components of the Intilery ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./contents"}),"Schema")," is the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./track"}),Object(i.b)("inlineCode",{parentName:"a"},"track"))," method. It records any arbitrary event that the user has triggered. For Mobile tracking, in addition to ",Object(i.b)("inlineCode",{parentName:"p"},"screen")," calls, you\u2019ll want to send ",Object(i.b)("strong",{parentName:"p"},"specific event names")," that we recognize semantically. That way, we can transform them correctly before actioning them in the Intilery CDP and Customer Engagement Platform."),Object(i.b)("p",null,"By standardizing the events that comprise the core ",Object(i.b)("strong",{parentName:"p"},"mobile application lifecycle")," and associated ",Object(i.b)("strong",{parentName:"p"},"mobile campaign and referral events"),", Intilery can, wherever possible, automatically collect and action these events on your behalf and build downstream actions which take full advantage of the semantic meaning associated with these events and their properties."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," If you\u2019re already collecting similar events, we recommend migrating to these event names so that you can take advantage of available features in our CDP and Customer Engagement Plarform which depend on the Schema as they become available."),Object(i.b)("h2",{id:"overview-of-events"},"Overview of Events"),Object(i.b)("p",null,"The Segment Native Mobile Spec includes the following semantic events:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Application Lifecycle Events")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#application-installed"}),"Application Installed")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#application-opened"}),"Application Opened")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#application-updated"}),"Application Updated")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#application-backgrounded"}),"Application Backgrounded")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#application-crashed"}),"Application Crashed")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#application-uninstalled"}),"Application Uninstalled"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Campaign Events")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#push-notification-received"}),"Push Notification Received")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#push-notification-tapped"}),"Push Notification Tapped")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#push-notification-bounced"}),"Push Notification Bounced")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#install-attributed"}),"Install Attributed")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#deep-link-clicked"}),"Deep Link Clicked")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#deep-link-opened"}),"Deep Link Opened"))),Object(i.b)("p",null,"We recommend using the above event names if you\u2019re going to be integrating the events yourself. This will ensure that they can be mapped effectively in the CDP and Customer Engagement Platform"),Object(i.b)("p",null,"Additionally, though they\u2019re not formally part of the Native Mobile Schema, we also collect ",Object(i.b)("inlineCode",{parentName:"p"},"Order Completed")," from our ecommerce spec automatically upon in-app purchases on iOS and can collect screen views automatically in iOS and Android. (when this becomes available)"),Object(i.b)("h2",{id:"lifecycle-events"},"Lifecycle Events"),Object(i.b)("p",null,"Mobile applications live within a fairly bounded lifecycle. In order to understand and communicate effectively with your users, it\u2019s crucial to instrument the core flows associated with installing and opening your app. The following events, many of which we can capture automatically in the latest versions of our SDKs (whenthey become available), allow you to get a picture of top-line metrics like DAUs, MAUs, Screen Views per session, etc. Automatic tracking of lifecycle events is completely optional."),Object(i.b)("p",null,"The following events will be tracked automatically when lifecycle events are enabled:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#application-installed"}),"Application Installed")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#application-opened"}),"Application Opened")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#application-updated"}),"Application Updated"))),Object(i.b)("h3",{id:"application-installed"},"Application Installed"),Object(i.b)("p",null,"This event fires when a user ",Object(i.b)("strong",{parentName:"p"},"first")," opens your mobile application. Note, if the user never opens your app after installing, we will not be able to collect this event. This event does not wait for attribution or campaign information to be received, and is collected automatically by our SDKs."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Application Installed",\n  "properties": {\n    "version": "1.2.3", "build": "1234"\n  }\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Type")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"version")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The version installed.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"build")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The build number of the installed app.")))),Object(i.b)("h3",{id:"application-opened"},"Application Opened"),Object(i.b)("p",null,"This event fires when a user launches or foregrounds your mobile application after the first open. It will fire after the ",Object(i.b)("inlineCode",{parentName:"p"},"Application Installed")," event and again after the app is re-opened after being closed. This event does not wait for attribution information to be received but may include information about referring applications or deep link URLs if available to the application upon open."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Application Opened",\n  "properties": {\n    "from_background": false,\n    "referring_application": "GMail",\n    "url": "url://location"\n  }\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Type")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"from_background")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If application ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplicationDelegate_Protocol/#//apple_ref/doc/uid/TP40006786-CH3-SW52"}),"transitioned")," from \u201cBackground\u201d to \u201cInactive\u201d state prior to foregrounding (as opposed to from \u201cNot Running\u201d state).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"url")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The value of ",Object(i.b)("inlineCode",{parentName:"td"},"UIApplicationLaunchOptionsURLKey")," from ",Object(i.b)("inlineCode",{parentName:"td"},"launchOptions"),".",Object(i.b)("strong",{parentName:"td"},"Collected on iOS only"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"referring_application")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The value of ",Object(i.b)("inlineCode",{parentName:"td"},"UIApplicationLaunchOptionsSourceApplicationKey")," from ",Object(i.b)("inlineCode",{parentName:"td"},"launchOptions"),". ",Object(i.b)("strong",{parentName:"td"},"Automatically collected on iOS only"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"version")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The version installed.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"build")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The build number of the installed app.")))),Object(i.b)("h3",{id:"application-backgrounded"},"Application Backgrounded"),Object(i.b)("p",null,"This event should be sent when a user backgrounds the application upon ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/reference/uikit/uiapplicationdelegate/1622997-applicationdidenterbackground"}),Object(i.b)("inlineCode",{parentName:"a"},"applicationDidEnterBackground"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Application Backgrounded",\n  "properties": {}\n}\n')),Object(i.b)("h3",{id:"application-updated"},"Application Updated"),Object(i.b)("p",null,"This event fires when a user updates the application. Our SDK will automatically collect this event in lieu of an \u201cApplication Opened\u201d event when we determine that the Open is first since an update."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Application Updated",\n  "properties": {\n    "previous_version": "1.1.2",\n    "previous_build": "1234",\n    "version": "1.2.0",\n    "build": "1456"\n  }\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Type")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"previous_version")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The previously recorded version.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"previous_build")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The previously recorded build.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"version")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The new version.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"build")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The new build.")))),Object(i.b)("h3",{id:"application-uninstalled"},"Application Uninstalled"),Object(i.b)("p",null,"Fire this event when a user uninstalls the application. Several destination partners will detect this for you using Silent Push Notifications and send this event to Segment on your behalf."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Application Uninstalled",\n  "properties": {}\n}\n')),Object(i.b)("h3",{id:"application-crashed"},"Application Crashed"),Object(i.b)("p",null,"You can send this event when you receive a crash notification from your app, but is not meant to supplant traditional crash reporting tools. By tracking crashes as an analytics event with device and user information, you can analyze the which types of users are impacted by crashes and how those crashes, in turn, affect their engagement. You may also want to target those customers with tailored communications in other channels if they\u2019ve encountered several crashes."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Application Crashed",\n  "properties": {}\n}\n')),Object(i.b)("h2",{id:"campaign-events"},"Campaign Events"),Object(i.b)("p",null,"As the walls between apps become increasingly lowered, capturing information about the content and campaigns that drive users to engage with your app is critical to building more targeted, relevant, personalized experiences for your users."),Object(i.b)("h3",{id:"install-attributed"},"Install Attributed"),Object(i.b)("p",null,"When Segment or an integrated partner can discern the source of an install, we\u2019ll collect an ",Object(i.b)("inlineCode",{parentName:"p"},"Install Attributed")," event. This event may be sent to Segment using server-to-server connection from your attribution provider, or directly on the device using packaged destinations. In either case, this will happen ",Object(i.b)("strong",{parentName:"p"},"after")," install, and does not apply to all installs, which is why it is a discrete event."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Install Attributed",\n  "properties": {\n    "provider": "Tune/Kochava/Branch/AppsFlyer",\n    "campaign": {\n      "source": "Network/FB/AdWords/MoPub/Source",\n      "name": "Campaign Name",\n      "content": "Organic Content Title",\n      "ad_creative": "Red Hello World Ad",\n      "ad_group": "Red Ones"\n    }\n  }\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Type")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"provider")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The attribution provider.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"campaign[source]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Campaign source \u2014 attributed ad network")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"campaign[name]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the attributed campaign.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"campaign[medium]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Identifies what type of link was used.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"campaign[content]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The content of the campaign.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"campaign[ad_creative]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ad creative name.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"campaign[ad_group]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ad group name.")))),Object(i.b)("h3",{id:"push-notification-received"},"Push Notification Received"),Object(i.b)("p",null,"This event can be sent when a push notification is received in the app. It can be automatically enabled on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://segment.com/docs/connections/sources/catalog/libraries/mobile/ios/#automatic-push-notification-tracking"}),"iOS"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Push Notification Received",\n  "properties": {\n    "campaign": {\n      "medium": "Push",\n      "source": "Vendor Name",\n      "name": "Referral Flow",\n      "content": "Your friend invited you to play a match."\n    }\n  }\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Type")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"campaign[name]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Campaign Name.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"campaign[medium]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Identifies what type of link was used (Push Notification).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"campaign[content]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Push notification content.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"campaign[source]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Designates the push provider. (Optional)")))),Object(i.b)("h3",{id:"push-notification-tapped"},"Push Notification Tapped"),Object(i.b)("p",null,"This event can be sent when a user taps on a push notification associated with your app. It can be automatically enabled on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://segment.com/docs/connections/sources/catalog/libraries/mobile/ios/#automatic-push-notification-tracking"}),"iOS"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Push Notification Tapped",\n  "properties": {\n    "action": "Accept",\n    "campaign": {\n      "medium": "Push",\n      "source": "Vendor Name",\n      "name": "Referral Flow",\n      "content": "Your friend invited you to play a match."\n    }\n  }\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Type")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"action")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If this notification is \u201c",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/IPhoneOSClientImp.html#//apple_ref/doc/uid/TP40008194-CH103-SW26"}),"actionable"),"\u201d, the custom action tapped. ",Object(i.b)("strong",{parentName:"td"},"Default:")," \u201cOpen\u201d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"campaign[name]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Campaign Name.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"campaign[medium]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Identifies what type of link was used (Push Notification).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"campaign[content]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Push notification content content")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"campaign[source]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Designates the push provider. (Optional)")))),Object(i.b)("h3",{id:"push-notification-bounced"},"Push Notification Bounced"),Object(i.b)("p",null,"This event fires when a push notification from a provider bounces. If your push notification provider forwards push lifecycle events to Segment, they should include this event in their suite."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event":"Push Notification Bounced",\n  "properties": {\n    "action": "Accept",\n    "campaign": {\n      "medium": "Push",\n      "source": "Vendor Name",\n      "name": "Referral Flow",\n      "content": "Your friend invited you to play a match."\n    }\n  }\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Type")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"action")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If this notification is \u201c",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/IPhoneOSClientImp.html#//apple_ref/doc/uid/TP40008194-CH103-SW26"}),"actionable"),"\u201d, the custom action tapped. ",Object(i.b)("strong",{parentName:"td"},"Default:")," \u201cOpen\u201d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"campaign[name]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Campaign Name.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"campaign[medium]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Identifies what type of link was used (Push Notification).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"campaign[content]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Push notification content content")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"campaign[source]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Designates the push provider. (Optional)")))),Object(i.b)("h3",{id:"deep-link-opened"},"Deep Link Opened"),Object(i.b)("p",null,"When your application is opened using a referring link, Segment or your packaged deep link partner can fire this event on your behalf. If the deep link has additional data associated with it, either passed through the third party service or as ",Object(i.b)("inlineCode",{parentName:"p"},"annotations")," in ",Object(i.b)("inlineCode",{parentName:"p"},"launchOption"),", you may want to include those values as properties here as well."),Object(i.b)("p",null,"This event is fired ",Object(i.b)("em",{parentName:"p"},"in addition")," to the associated ",Object(i.b)("inlineCode",{parentName:"p"},"Application Opened")," event."),Object(i.b)("p",null,"Our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://segment.com/docs/connections/sources/catalog/libraries/mobile/ios/#automatic-deep-link-tracking"}),"iOS")," SDK can collect this event automatically if configured to do so."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Deep Link Opened",\n  "properties": {\n    "provider": "Branch Metrics",\n    "url": "app://landing"\n  }\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Type")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"provider")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The deep link provider.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"url")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The App URL opened.")))),Object(i.b)("h3",{id:"deep-link-clicked"},"Deep Link Clicked"),Object(i.b)("p",null,"This event may be provided by deep link providers postback mechanisms or an internal redirect service if you use one in order to provide a waypoint funnel step between your content or advertisement and the resulting app open."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Deep Link Clicked",\n  "properties": {\n    "provider": "Branch Metrics",\n    "url": "brnch.io/1234"\n  }\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Type")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"provider")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The deep link provider.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"url")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The deep link URL clicked.")))))}o.isMDXComponent=!0},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),d=o(a),O=n,s=d["".concat(c,".").concat(O)]||d[O]||m[O]||i;return a?r.a.createElement(s,l(l({ref:t},p),{},{components:a})):r.a.createElement(s,l({ref:t},p))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=O;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<i;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);