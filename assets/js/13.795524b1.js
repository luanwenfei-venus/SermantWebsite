(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{444:function(t,a,s){t.exports=s.p+"assets/img/backend_sermant_info.b07fee0d.png"},517:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"心跳功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#心跳功能"}},[t._v("#")]),t._v(" 心跳功能")]),t._v(" "),a("p",[t._v("本文介绍如何在开发中使用Sermant提供的心跳功能。")]),t._v(" "),a("h2",{attrs:{id:"功能介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[t._v("#")]),t._v(" 功能介绍")]),t._v(" "),a("p",[t._v("心跳功能在微服务治理领域起着关键的作用，可以通过心跳机制来监控各个服务实例的状态，通过周期性上报心跳可以告知其他服务自己的存活状态，避免实例宕机导致异常。")]),t._v(" "),a("p",[a("strong",[t._v("Sermant")]),t._v("中通过心跳向Backend上报服务实例的元数据，同时还会上报已经被加载的服务治理插件的信息，来告知当前"),a("strong",[t._v("Sermant Agent")]),t._v("携带了哪些服务治理插件，通过周期性上报心跳，"),a("strong",[t._v("Backend")]),t._v("监控面板可以看到当前已经携带"),a("strong",[t._v("Sermant Agent")]),t._v("的服务实例。")]),t._v(" "),a("blockquote",[a("p",[t._v("注意： 心跳功能需要和Backend监控面板同时使用，参考"),a("RouterLink",{attrs:{to:"/zh/document/user-guide/backend.html"}},[t._v("Backend使用手册")]),t._v("。")],1)]),t._v(" "),a("h2",{attrs:{id:"开发示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发示例"}},[t._v("#")]),t._v(" 开发示例")]),t._v(" "),a("p",[t._v("基于心跳能力的开发，主要用来让插件开发者可以将插件少量十分重要信息通过心跳进行上报，并且在监控面板可观测。本开发示例基于"),a("RouterLink",{attrs:{to:"/zh/document/developer-guide/"}},[t._v("创建首个插件")]),t._v("文档中创建的工程。")],1),t._v(" "),a("p",[t._v("在工程"),a("code",[t._v("template\\template-plugin")]),t._v("模块下"),a("code",[t._v("com.huaweicloud.sermant.template.TemplateDeclarer")]),t._v("类中增加变量"),a("code",[t._v("heartbeatService")]),t._v("获取框架心跳服务，用于设置心跳额外信息：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HeartbeatService")]),t._v(" heartbeatService "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HeartbeatService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在针对"),a("code",[t._v("main")]),t._v("方法的"),a("RouterLink",{attrs:{to:"/zh/document/developer-guide/bytecode-enhancement.html#拦截器"}},[t._v("拦截器")]),t._v("的"),a("code",[t._v("before")]),t._v("方法中通过"),a("code",[t._v("setExtInfo")]),t._v("接口设置心跳额外信息：")],1),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  heartbeatService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setExtInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("singletonMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"started"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Good morning!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("开发完成后，可参照创建首个插件时的"),a("RouterLink",{attrs:{to:"/zh/document/developer-guide/#打包构建"}},[t._v("打包构建")]),t._v(" 流程，在工程根目录下执行 "),a("code",[t._v("mvn package")]),t._v("，参考"),a("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html#参数配置"}},[t._v("Sermant Agent配置")]),t._v(" 修改文件"),a("code",[t._v("agent/config/config.properties")]),t._v("，并参考"),a("RouterLink",{attrs:{to:"/zh/document/user-guide/backend.html"}},[t._v("backend使用手册")]),t._v("启动backend。")],1),t._v(" "),a("p",[t._v("最后访问"),a("code",[t._v("http://localhost:8900")]),t._v("查看backend界面")]),t._v(" "),a("p",[a("img",{attrs:{src:s(444),alt:"pic"}})]),t._v(" "),a("p",[t._v("从图中可以看到，当前携带"),a("strong",[t._v("Sermant Agent")]),t._v("的实例有一个，并且处于正常运行状态，并且携带"),a("code",[t._v("0.0.1")]),t._v("版本的"),a("code",[t._v("template")]),t._v("插件。")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Sermant Agent")]),t._v("会定期向"),a("strong",[t._v("Backend")]),t._v("发送心跳，"),a("strong",[t._v("Backend")]),t._v("在收到来自各个"),a("strong",[t._v("Sermant Agent")]),t._v("心跳时，会为其续约，如果超过有效时间（可通过"),a("RouterLink",{attrs:{to:"/zh/document/user-guide/backend.html#Backend参数配置"}},[t._v("backend配置")]),t._v("修改），还未收到某一节点上报的心跳，则就将该节点置为失联状态。")],1)]),t._v(" "),a("h2",{attrs:{id:"api-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-配置"}},[t._v("#")]),t._v(" API&配置")]),t._v(" "),a("h3",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("p",[a("strong",[t._v("获取心跳服务")])]),t._v(" "),a("p",[t._v("获取心跳服务对象，用于在插件心跳数据中增加额外信息，该服务由框架进行初始化，插件可直接获取使用。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HeartbeatService")]),t._v(" heartbeatService "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HeartbeatService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("增加心跳附加信息")])]),t._v(" "),a("p",[t._v("开发者可通过如下方式在插件中增加心跳附加信息。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("heartbeatService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setExtInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("singletonMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("基于创建首个插件中的"),a("RouterLink",{attrs:{to:"/zh/document/developer-guide/#工程结构"}},[t._v("工程结构")]),t._v("，心跳功能配置通过修改"),a("code",[t._v("config/config.properties")]),t._v("文件来设置。")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("配置项")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("配置示例")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("heartbeat.interval")]),t._v(" "),a("td",[t._v("心跳发送间隔时间，单位ms")]),t._v(" "),a("td",[t._v("heartbeat.interval=30000")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);