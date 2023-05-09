(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{485:function(t,e,a){"use strict";a.r(e);var n=a(26),i=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"monitoring"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#monitoring"}},[t._v("#")]),t._v(" Monitoring")]),t._v(" "),e("p",[t._v("This article describes how to use the "),e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/tree/develop/sermant-plugins/sermant-monitor",target:"_blank",rel:"noopener noreferrer"}},[t._v("Monitoring plugin"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"function-introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#function-introduction"}},[t._v("#")]),t._v(" Function introduction")]),t._v(" "),e("p",[t._v("The monitoring plug-in is used to monitor the usage of CPU, memory, disk IO, network IO and other hardware resources of the server where the host application is located. The usage of JVM resources, such as heap memory usage, non-heap memory usage, cache usage, throughput (QPS, TPS, average response time). The monitoring plug-in relies on Prometheus for indicator collection. Prometheus will periodically pull the indicator data collected by the monitoring plugin.")]),t._v(" "),e("h2",{attrs:{id:"parameter-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameter-configuration"}},[t._v("#")]),t._v(" Parameter configuration")]),t._v(" "),e("h3",{attrs:{id:"plugin-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugin-configuration"}},[t._v("#")]),t._v(" Plugin configuration")]),t._v(" "),e("p",[t._v("The monitoring plugin needs to be configured with monitoring enable switch ("),e("code",[t._v("monitor.config.enableStartService")]),t._v("), IP address/domain name of the host application's environment ("),e("code",[t._v("monitor.config.address")]),t._v("), the port of the host service ("),e("code",[t._v("monitor.config.port")]),t._v(") and the reporting method ("),e("code",[t._v("monitor.config.reportType")]),t._v("). The configuration file of the plug-in can be found in the "),e("code",[t._v("${path}/sermant-agent-x.x.x/agent/pluginPackage/monitor/config/config.yaml")]),t._v(". The configuration is as follows:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("monitor.config")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Monitoring plug-in configuration.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableStartService")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Monitoring plug-in start switch. When it is true, the indicator is collected.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1              "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# IP address/domain name of the host application's environment. Used when creating a server instance. Prometheus obtains the indicator information collected by the plug-in by calling the created server instance.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v("                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Provides the port information of Http service externally. Used when creating a server instance. Prometheus obtains the indicator information collected by the plug-in by calling the created server instance.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("reportType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PROMETHEUS          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Monitoring indicator reporting method. Currently only PROMETHEUS is supported.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("userName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Authorization information -- authorization username. After the authorization information is configured, prometheus also needs to configure the authorization information to obtain the indicator normally to prevent malicious requests to obtain the indicator information.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Authorization information -- authorized user password -- AES encryption ciphertext. After configuring the authorization information, prometheus also needs to configure the authorization information to obtain the indicator to prevent malicious requests to obtain the indicator information.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# KEY used for password encryption of authorized users.")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter key")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Default value")]),t._v(" "),e("th",[t._v("Required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("monitor.config.enableStartService")]),t._v(" "),e("td",[t._v("Monitoring plugin start switch")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Yes")])]),t._v(" "),e("tr",[e("td",[t._v("monitor.config.address")]),t._v(" "),e("td",[t._v("IP address/domain name of the host application's environment")]),t._v(" "),e("td",[t._v("127.0.0.1")]),t._v(" "),e("td",[t._v("Yes")])]),t._v(" "),e("tr",[e("td",[t._v("monitor.config.port")]),t._v(" "),e("td",[t._v("Port information for external Http service")]),t._v(" "),e("td",[t._v("12345")]),t._v(" "),e("td",[t._v("Yes")])]),t._v(" "),e("tr",[e("td",[t._v("monitor.config.reportType")]),t._v(" "),e("td",[t._v("Monitoring indicator reporting method currently only supports PROMETHEUS")]),t._v(" "),e("td",[t._v("PROMETHEUS")]),t._v(" "),e("td",[t._v("Yes")])]),t._v(" "),e("tr",[e("td",[t._v("monitor.config.userName")]),t._v(" "),e("td",[t._v("authorization information -- authorization user name")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("No")])]),t._v(" "),e("tr",[e("td",[t._v("monitor.config.password")]),t._v(" "),e("td",[t._v("authorization information -- authorized user password -- AES encryption")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("No")])]),t._v(" "),e("tr",[e("td",[t._v("monitor.config.key")]),t._v(" "),e("td",[t._v("KEY used for password encryption of authorized users")]),t._v(" "),e("td",[t._v("Empty")]),t._v(" "),e("td",[t._v("No")])])])]),t._v(" "),e("h2",{attrs:{id:"detailed-governance-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#detailed-governance-rules"}},[t._v("#")]),t._v(" Detailed governance rules")]),t._v(" "),e("p",[t._v("The indicator data that the monitoring plug-in can collect at present is shown in the following table (after docking with prometheus, users can query the specific indicator information in prometheus through the indicator name, see "),e("a",{attrs:{href:"#verification"}},[t._v("Verification")]),t._v("):")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Indicator name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Indicator type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("cpu_user")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("proportion of user time")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CPU")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("cpu_sys")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("System time share")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CPU")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("cpu_wait")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Percentage of waiting time")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CPU")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("cpu_idle")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("idle time ratio")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CPU")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("cpu_cores")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CPU physical cores")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CPU")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("memory_total")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total memory size")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("memory")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("memory_swap")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Size of swap space for cache memory")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("memory")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("memory_cached")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total physical memory of cache memory")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("memory")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("memory_buffer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Make a buffer size for the file")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("memory")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("memory_used")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Used memory size")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("memory")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("disk_readBytesPerSec")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number of bytes read by the disk per second during the collection cycle")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Disk IO")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("disk_writeBytesPerSec")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number of bytes written on the disk per second during the collection cycle")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Disk IO")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("disk_ioSpentPercentage")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Percentage of time spent on disk IO during the acquisition cycle")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Disk IO")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("network_readBytesPerSec")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number of bytes read by the network per second during the collection cycle")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Network")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("network_writeBytesPerSec")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number of bytes read by the network per second during the collection cycle")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Network")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("network_readPackagePerSec")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number of network bytes per second in the collection cycle")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Network")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("network_writePackagePerSec")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Percentage of network IO time spent in the collection cycle")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Network")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("heap_memory_init")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("heap memory initialization value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("heap_memory_max")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Maximum heap memory")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("heap_memory_used")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Heap memory used")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("heap_memory_committed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The heap memory has been committed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("non_heap_memory_init")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Non-heap memory initialization value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("non_heap_memory_max")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Maximum non-heap memory")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("non_heap_memory_used")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Non-heap memory used value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("non_heap_memory_committed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Non-heap memory committed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("code_cache_init")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Code cache initialization value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("code_cache_max")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Maximum code cache size")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("code_cache_used")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The code cache has been used")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("code_cache_committed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The code cache has been committed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("meta_sapce_init")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Metaspace initialization value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("meta_sapce_max")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Maximum value of metaspace")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("meta_sapce_used")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Metaspace used value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("meta_sapce_committed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Metaspace committed value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("compressed_class_space_init")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Compressed class space initialization value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("compressed_class_space_max")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Maximum compressed class space")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("compressed_class_space_used")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Compressed class space used value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("compressed_class_space_committed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Compressed class space committed value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("eden_init")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("eden memory initialization value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("eden_max")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("maximum memory of eden area")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("eden_used")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("used value of eden area memory")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("eden_committed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("eden area memory committed value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("survivor_init")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("memory initialization value of the survivor area")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("survivor_max")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("maximum memory of the survivor area")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("survivor_used")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Memory used value of the survivor area")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("survivor_committed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("memory committed value of the survivor area")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("old_gen_init")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Memory initialization value in the old era")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("old_gen_max")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Maximum memory in the old age")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("old_gen_used")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Memory used in the old age")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("old_gen_committed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Memory committed value in the old age")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("thread_live")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Active thread")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("thread_peak")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("thread peak")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("thread_daemon")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("daemon thread")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("new_gen_count")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Young generation GC times")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("new_gen_spend")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Young generation GC time")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("old_gen_count")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("GC times of older generation")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("old_gen_spend")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("GC time of the elderly generation")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("cpu_used")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("CPU usage of JVM")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("start_time")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM started time, milliseconds")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JVM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("qps")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Requests per second")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Throughput")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("tps")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number of requests processed per second")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Throughput")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("avg_response_time")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Average response time")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Throughput")])])])]),t._v(" "),e("h2",{attrs:{id:"supported-versions-and-restrictions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-versions-and-restrictions"}},[t._v("#")]),t._v(" Supported versions and restrictions")]),t._v(" "),e("p",[t._v("Framework support:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("SpringBoot 1.5.10. Release and above")])]),t._v(" "),e("li",[e("p",[t._v("Dubbo 2.6.x-2.7.x")])])]),t._v(" "),e("p",[t._v("Restrictions:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Dependent on Prometheus")])]),t._v(" "),e("li",[e("p",[t._v("The collection of server indicators depends on the Linux environment")])])]),t._v(" "),e("h2",{attrs:{id:"operation-and-result-verification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#operation-and-result-verification"}},[t._v("#")]),t._v(" Operation and result verification")]),t._v(" "),e("p",[t._v("The following will demonstrate how to use the monitoring plug-in.")]),t._v(" "),e("h3",{attrs:{id:"preparations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preparations"}},[t._v("#")]),t._v(" Preparations")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://start.spring.io/#!type=maven-project&language=java&platformVersion=2.7.7&packaging=jar&jvmVersion=1.8&groupId=com.example&artifactId=demo&name=demo&description=Demo%20project%20for%20Spring%20Boot&packageName=com.example.demo&dependencies=web",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),e("OutboundLink")],1),t._v(" demo application")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),e("OutboundLink")],1),t._v("/Compile the sermant package")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://github.com/prometheus/prometheus/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),e("OutboundLink")],1),t._v(" Prometheus")])])]),t._v(" "),e("blockquote",[e("p",[t._v("Note: "),e("RouterLink",{attrs:{to:"/en/document/user-guide/configuration-center.html"}},[t._v("Dynamic Configuration Center")]),t._v(" will be used by default in this scenario. Since it is not the core component of this scenario, it will not be described in this article.")],1)]),t._v(" "),e("h3",{attrs:{id:"step-1-compile-and-package-the-demo-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-compile-and-package-the-demo-application"}},[t._v("#")]),t._v(" Step 1: Compile and package the demo application")]),t._v(" "),e("p",[t._v("Execute the following command in the root directory of the demo application to package the demo application:")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("mvn clean package\n")])])]),e("p",[t._v("After the packaging is successful, a "),e("code",[t._v("target")]),t._v(" folder will be generated in the demo root directory, enter the "),e("code",[t._v("target")]),t._v(" folder to get the demo-0.0.1-SNAPSHOT.jar package.")]),t._v(" "),e("h3",{attrs:{id:"step-2-modify-the-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-modify-the-configuration"}},[t._v("#")]),t._v(" Step 2: Modify the configuration")]),t._v(" "),e("ul",[e("li",[t._v("Modify the monitoring plug-in configuration, which can be found in the "),e("code",[t._v("${path}/sermant-agent-x.x.x/agent/pluginPackage/monitor/config/config.yaml")]),t._v(".")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("monitor.config")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Monitoring plugin configuration")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableStartService")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Monitoring plugin start switch. Modify to true.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# IP address/domain name of the host application's environment. Modify to host specific IP address.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v("                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Provides the port information of Http service externally. Modify to an available port.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("reportType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PROMETHEUS        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Monitoring indicator reporting method. Currently only PROMETHEUS is supported.")]),t._v("\n")])])]),e("ul",[e("li",[t._v("Modify the configuration file prometheus.yml of "),e("a",{attrs:{href:"https://prometheus.io/docs/introduction/overview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prometheus"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("p",[t._v("Add job information under the original job information.")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scrape_ configs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job_Name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prometheus"')]),t._v("            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Job name. This is the original task of prometheus.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("static_configs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targets")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost:9090"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Monitoring host address")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job_Name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sermant"')]),t._v("               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Job name. Add the job of collecting and monitoring plug-in indicators")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metrics_path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The request path for collecting indicators. Default is/")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("basic_auth")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Collect the authorization information of indicators, which is consistent with the monitoring plug-in configuration. The monitoring plug-in can be deleted when it is not configured.")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Collect the authorization information of the indicator - username")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Collect the authorization information of the indicator - password")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("static_configs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                   \n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targets")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:12345"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The host address of the collection index. The IP and port information here is consistent with the monitoring plug-in configuration")]),t._v("\n")])])]),e("h3",{attrs:{id:"step-3-start-the-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-start-the-application"}},[t._v("#")]),t._v(" Step 3: Start the application")]),t._v(" "),e("ul",[e("li",[t._v("Start the demo application with the following command")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run under Linux")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" demo-0.0.1-SNAPSHOT.jar\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run under Windows")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("agent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" demo-0.0.1-SNAPSHOT.jar\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("illustrate")]),t._v(":\nWhere path needs to be replaced with the actual installation path of Sermant.\nx.x.x represents a Sermant version number.")])]),t._v(" "),e("ul",[e("li",[t._v("Start Prometheus")])]),t._v(" "),e("h3",{attrs:{id:"verification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verification"}},[t._v("#")]),t._v(" Verification")]),t._v(" "),e("p",[t._v("Open Prometheus (default is "),e("code",[t._v("http://127.0.0.1:9090")]),t._v("), query indicators. For example, query "),e("code",[t._v("heap_memory_used")]),t._v(". If the information can be queried, the plug-in will become effective.")]),t._v(" "),e("p",[t._v("The query effect is as follows:")]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/monitor.png"}})],1)}),[],!1,null,null,null);e.default=i.exports}}]);