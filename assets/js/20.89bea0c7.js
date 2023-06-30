(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{466:function(e,t,r){"use strict";r.r(t);var i=r(26),o=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"flow-control-faqs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flow-control-faqs"}},[e._v("#")]),e._v(" Flow Control FAQs")]),e._v(" "),t("p",[e._v("This document describes the common problems encountered when the flow control plugin is used.")]),e._v(" "),t("h2",{attrs:{id:"how-is-the-apipath-defined-in-the-service-scenario"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-is-the-apipath-defined-in-the-service-scenario"}},[e._v("#")]),e._v(" How Is The APIPath Defined In The Service Scenario?")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("apiPath")]),e._v(" indicates the interface to be used. The definition varies according to the framework. Currently, HTTP and Dubbo requests are supported:\n"),t("ul",[t("li",[t("code",[e._v("http procotol")]),e._v("： Indicates the request path. For example, if the interface http://localhost:8080/test exists, the apiPath of the interface is "),t("code",[e._v("/test")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("dubbo procotol")]),e._v("：Request interface: "),t("code",[e._v("interface:version. Method")]),e._v(". If there is no interface version or the version is 0.0.0, the value of apiPath is Request "),t("code",[e._v("interface.Method")]),e._v(".")])])])]),e._v(" "),t("h2",{attrs:{id:"how-do-i-determine-whether-a-configuration-rule-takes-effect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-determine-whether-a-configuration-rule-takes-effect"}},[e._v("#")]),e._v(" How Do I Determine Whether a Configuration Rule Takes Effect?")]),e._v(" "),t("ul",[t("li",[e._v("Configure service scenarios and governance policies correctly in the configuration center. After the configuration, you can view the agent logs. Generally, in the logs folder in the startup path of the JAR package, view the sermant-x.log file and search for "),t("code",[e._v("has been")]),e._v(" or the configured key name. If the found logs match the current time, the rule has taken effect.")])]),e._v(" "),t("h2",{attrs:{id:"possible-causes-for-the-failure-of-the-circuit-breaker-policy-to-take-effect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#possible-causes-for-the-failure-of-the-circuit-breaker-policy-to-take-effect"}},[e._v("#")]),e._v(" Possible Causes For The Failure Of The Circuit Breaker Policy To Take Effect")]),e._v(" "),t("ul",[t("li",[e._v("A circuit breaker takes effect only after the following conditions are met:\n"),t("ul",[t("li",[t("code",[e._v("Error Rate")]),e._v("：The percentage of error interface requests. If the percentage of error interface requests within a specified period is greater than the configured value, the circuit breaker is triggered.")]),e._v(" "),t("li",[t("code",[e._v("Slow Invoking Ratio")]),e._v("：The percentage of slow invoking requests. When setting the circuit breaker policy, you need to set the slow invoking threshold. For example, if the time required for invoking the interface exceeds 100 ms and exceeds the configured slow invoking ratio, the circuit breaker can be triggered only when the time required for invoking the interface exceeds 100 ms.")])])]),e._v(" "),t("li",[e._v("Therefore, for the preceding two indicators, check whether the application interface meets either of the preceding conditions and whether the number of invoking requests within the rule period exceeds the minimum number specified by minimumNumberOfCalls.")])]),e._v(" "),t("h2",{attrs:{id:"possible-reasons-why-the-quarantine-rule-does-not-take-effect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#possible-reasons-why-the-quarantine-rule-does-not-take-effect"}},[e._v("#")]),e._v(" Possible Reasons Why The Quarantine Rule Does Not Take Effect")]),e._v(" "),t("ul",[t("li",[e._v("The quarantine rules must meet the following conditions:\n"),t("ul",[t("li",[t("code",[e._v("The number of concurrent calls meets the requirement")]),e._v(" (configured by maxConcurrentCalls). For example, if the threshold is set to 2, ensure that the number of concurrent calls is greater than 2.")]),e._v(" "),t("li",[t("code",[e._v("Maximum waiting time")]),e._v(" (configured by maxWaitDuration), that is, the maximum waiting time of a thread when the number of concurrent connections reaches the maximum. If no permission is obtained after the maximum waiting time expires, the thread is triggered.")])])]),e._v(" "),t("li",[e._v("Therefore, you are advised to ensure that the service interface duration is greater than the maximum waiting time and the number of concurrent requests is greater than the configured value.")])]),e._v(" "),t("h2",{attrs:{id:"possible-causes-for-the-retry-rule-does-not-take-effect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#possible-causes-for-the-retry-rule-does-not-take-effect"}},[e._v("#")]),e._v(" Possible Causes For The Retry Rule Does Not Take Effect")]),e._v(" "),t("ul",[t("li",[e._v("Ensure that exceptions or status codes thrown by downstream applications meet the retry policy requirements. For example, by default, dubbo checks whether the downstream applications throw RpcException, and a specified status code can be configured for Spring applications.")])]),e._v(" "),t("h2",{attrs:{id:"possible-causes-of-the-httphostconnectexception-error-reported-during-startup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#possible-causes-of-the-httphostconnectexception-error-reported-during-startup"}},[e._v("#")]),e._v(" Possible Causes Of The HttpHostConnectException Error Reported During Startup")]),e._v(" "),t("ul",[t("li",[e._v("The cause is that the Sermant background service sermant-backhend is not started. Find the startup class com.huawei.apm.backend.NettyServerApplication to start the background service and restart the application.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);