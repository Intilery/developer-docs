(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,p=u["".concat(o,".").concat(b)]||u[b]||h[b]||i;return n?a.a.createElement(p,c(c({ref:t},l),{},{components:n})):a.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),i=(n(0),n(122)),o={id:"android-faq",title:"Android Frequently Asked Questions",sidebar_label:"Android FAQs"},c={unversionedId:"sdk/android-faq",id:"sdk/android-faq",isDocsHomePage:!1,title:"Android Frequently Asked Questions",description:"What is the latest version of the library?",source:"@site/docs/sdk/android-faq.md",permalink:"/docs/sdk/android-faq",sidebar_label:"Android FAQs",sidebar:"sdk",previous:{title:"Troubleshooting Aandroid",permalink:"/docs/sdk/android-trouble"},next:{title:"Android Push Notifications",permalink:"/docs/sdk/android-push"}},s=[{value:"What is the latest version of the library?",id:"what-is-the-latest-version-of-the-library",children:[]},{value:"Where is the changelog for the library?",id:"where-is-the-changelog-for-the-library",children:[]},{value:"Can I use the library with Maven?",id:"can-i-use-the-library-with-maven",children:[]},{value:"How big is the Intielry SDK?",id:"how-big-is-the-intielry-sdk",children:[]},{value:"How can I swap out debugging and production keys?",id:"how-can-i-swap-out-debugging-and-production-keys",children:[]},{value:"How should I configure Proguard?",id:"how-should-i-configure-proguard",children:[{value:"Need support?",id:"need-support",children:[]}]},{value:"Why have you forked Segment?",id:"why-have-you-forked-segment",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-the-latest-version-of-the-library"},"What is the latest version of the library?"),Object(i.b)("p",null,"Analytics-Android is published to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://search.maven.org/search?q=intilery%20analytics%22"}),"Maven Central")," where you can see all published releases."),Object(i.b)("h2",{id:"where-is-the-changelog-for-the-library"},"Where is the changelog for the library?"),Object(i.b)("p",null,"You can see a changelog in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Intilery/analytics-android/blob/master/CHANGELOG.md"}),"GitHub repository"),", detailing the changes made in each release."),Object(i.b)("h2",{id:"can-i-use-the-library-with-maven"},"Can I use the library with Maven?"),Object(i.b)("p",null,"Yes! You can use the Intilery library with Maven, or any other custom build system because the ",Object(i.b)("inlineCode",{parentName:"p"},"core")," SDK is simply a JAR."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>com.intilery.analytics.android:analytics</groupId>\n    <artifactId>analytics</artifactId>\n    <version>LATEST</version>\n</dependency>\n")),Object(i.b)("h2",{id:"how-big-is-the-intielry-sdk"},"How big is the Intielry SDK?"),Object(i.b)("p",null,"The core Intielry SDK is extremely lightweight! It contains just under 1k methods, the JAR weighs in at 123kb and the dex size is 113kb."),Object(i.b)("h2",{id:"how-can-i-swap-out-debugging-and-production-keys"},"How can I swap out debugging and production keys?"),Object(i.b)("p",null,"If you\u2019re using Gradle and build flavors, you can provide an ",Object(i.b)("inlineCode",{parentName:"p"},"analytics.xml")," for each configuration with different Writekeys in each."),Object(i.b)("p",null,"For other cases, you can also construct custom instances of the client and pass in a different key for each instance. Set it as the singleton instance, and use the same API everywhere else."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'class MyApp extends Application {\n  @Override public void onCreate() {\n    Analytics analytics;\n    if(BuildConfig.DEBUG) {\n      analytics = new Analytics.Builder(this, debugWriteKey)...build();\n    } else {\n      analytics = new Analytics.Builder(this, releaseWriteKey)...build();\n    }\n    Analytics.setSingletonInstance(analytics); // Must be called before any calls to Analytics.with(context)\n\n    // Now Analytics.with will return the custom instance\n    Analytics.with(this).track("App Launched");\n  }\n}\n')),Object(i.b)("h2",{id:"how-should-i-configure-proguard"},"How should I configure Proguard?"),Object(i.b)("p",null,"For the Intilery SDKs, you can add the following snippet to your Proguard configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"-keep class com.segment.analytics.** { *; }\n-keep class androidx.lifecycle.DefaultLifecycleObserver\n")),Object(i.b)("p",null,"You should also check the vendor documentation for any Device-mode destinations you are bundling, to see if they include any recommended Proguard configurations."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"need-support"},"Need support?"),Object(i.b)("p",null,"Questions? Problems? Need more info? Contact us, and we can help!"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://segment.com/help/contact/"}),"Visit our Support page")),Object(i.b)("h2",{id:"why-have-you-forked-segment"},"Why have you forked Segment?"),Object(i.b)("p",null,"We forked the segment client libraries to give you the choice of using segment to send data to Intilery and a Segment destination, or if you do not use Segment you can send the data directly to Intielry with our forked libraries and SDKs. If in the future you decide to use Segment, the change should be as simple as using the Segment library/sdk instead of the Intilery library/sdk"))}d.isMDXComponent=!0}}]);