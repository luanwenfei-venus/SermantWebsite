(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{502:function(t,a,e){"use strict";e.r(a);var s=e(26),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"服务注册常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务注册常见问题"}},[t._v("#")]),t._v(" 服务注册常见问题")]),t._v(" "),a("p",[t._v("本文主要介绍"),a("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/tree/develop/sermant-plugins/sermant-service-registry",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务注册插件"),a("OutboundLink")],1),t._v("在使用时遇到的常见问题。")]),t._v(" "),a("h2",{attrs:{id:"报错-no-such-extension-org-apache-dubbo-registry-registryfactory-by-name-sc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错-no-such-extension-org-apache-dubbo-registry-registryfactory-by-name-sc"}},[t._v("#")]),t._v(" 报错：No such extension org.apache.dubbo.registry.RegistryFactory by name sc")]),t._v(" "),a("p",[t._v("如下图所示：")]),t._v(" "),a("MyImage",{attrs:{src:"/docs-img/registry-faq-1.png"}}),t._v(" "),a("p",[t._v("该错误原因有以下3种：")]),t._v(" "),a("p",[t._v("1.1 宿主没有带agent启动。因为原生dubbo并不支持往sc注册，所以如果没带agent启动且配置的注册地址的协议为sc时，就会产生以上报错。")]),t._v(" "),a("p",[t._v("1.2 核心配置文件（${agent_package_path}/agent/config/config.properties）配置问题。仔细观察启动日志，会发现伴有类似以下的错误：")]),t._v(" "),a("MyImage",{attrs:{src:"/docs-img/registry-faq-2.png"}}),t._v(" "),a("ul",[a("li",[t._v("原因是核心配置文件中，配置中心类型（dynamic.config.dynamic_config_type）的值（需要为KIE/ZOOKEEPER）配置错误，从而导致宿主应用无法加载agent，最后导致No such extension org.apache.dubbo.registry.RegistryFactory by name sc的报错。")])]),t._v(" "),a("p",[t._v("1.3 核心配置文件（${agent_package_path}/agent/config/config.properties）配置问题。仔细观察启动日志，会发现伴有类似以下错误：")]),t._v(" "),a("MyImage",{attrs:{src:"/docs-img/registry-faq-3.png"}}),t._v(" "),a("ul",[a("li",[t._v("原因是核心配置文件中，配置中心地址（dynamic.config.server_address）配置错误或者配置中心没有启动或者网络不通，从而导致宿主应用无法加载agent，最后导致No such extension org.apache.dubbo.registry.RegistryFactory by name sc的报错。")])]),t._v(" "),a("h2",{attrs:{id:"报错-sermant-master-v1-register-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错-sermant-master-v1-register-error"}},[t._v("#")]),t._v(" 报错：/sermant/master/v1/register error")]),t._v(" "),a("p",[t._v("如下图所示：")]),t._v(" "),a("MyImage",{attrs:{src:"/docs-img/registry-faq-4.png"}}),t._v(" "),a("p",[t._v("原因是backend未启动或者配置地址不正确，请启动backend或正确配置地址。backend相关信息请见"),a("RouterLink",{attrs:{to:"/zh/document/user-guide/backend.html"}},[t._v("backend文档")]),t._v("。")],1),t._v(" "),a("p",[t._v("注：该错误不会影响注册插件的流程，但会有相关报错。")]),t._v(" "),a("h2",{attrs:{id:"报错-connection-reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错-connection-reset"}},[t._v("#")]),t._v(" 报错：Connection reset")]),t._v(" "),a("p",[t._v("如下图所示：")]),t._v(" "),a("MyImage",{attrs:{src:"/docs-img/registry-faq-5.png"}}),t._v(" "),a("p",[t._v("请检查插件配置（${agent_package_path}/agent/pluginPackage/service-registry/config/config.yaml）中，注册中心地址（servicecomb.service.address）是否正确，协议是否正确（http/https）。")]),t._v(" "),a("h2",{attrs:{id:"报错-https-protocol-is-not-supported"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错-https-protocol-is-not-supported"}},[t._v("#")]),t._v(" 报错：https protocol is not supported")]),t._v(" "),a("p",[t._v("如下图所示：")]),t._v(" "),a("MyImage",{attrs:{src:"/docs-img/registry-faq-6.png"}}),t._v(" "),a("p",[t._v("需要在插件配置（${agent_package_path}/agent/pluginPackage/service-registry/config/config.yaml）中，开启ssl（servicecomb.service.sslEnabled）。")]),t._v(" "),a("h2",{attrs:{id:"报错-no-such-extension-org-apache-dubbo-metadata-report-metadatareportfactory-by-name-sc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错-no-such-extension-org-apache-dubbo-metadata-report-metadatareportfactory-by-name-sc"}},[t._v("#")]),t._v(" 报错：No such extension org.apache.dubbo.metadata.report.MetadataReportFactory by name sc")]),t._v(" "),a("p",[t._v("如下图所示：")]),t._v(" "),a("MyImage",{attrs:{src:"/docs-img/registry-faq-7.png"}}),t._v(" "),a("p",[t._v("请检查dubbo应用的注册配置，protocol是否存在且不为sc，如下所示：")]),t._v(" "),a("ul",[a("li",[t._v("例如dubbo/provider.xml")])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("dubbo:")]),t._v("registry")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("address")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sc://127.0.0.1:30100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("protocol")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nacos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("ul",[a("li",[t._v("例如application.yml（或application.properties），以application.yml为例")])]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dubbo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("registry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("protocol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nacos\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30100")]),t._v("\n")])])]),a("p",[t._v("如果protocol存在且不为sc，请把protocol的值设置成sc，或者删除protocol配置。")]),t._v(" "),a("h2",{attrs:{id:"报错-no-registry-config-found-or-it-s-not-a-valid-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错-no-registry-config-found-or-it-s-not-a-valid-config"}},[t._v("#")]),t._v(" 报错：No registry config found or it's not a valid config")]),t._v(" "),a("p",[t._v("如下图所示：")]),t._v(" "),a("MyImage",{attrs:{src:"/docs-img/registry-faq-8.png"}}),t._v(" "),a("p",[t._v("需要设置dubbo本身注册中心地址的配置，请参考"),a("RouterLink",{attrs:{to:"/zh/document/plugin/service-registry.html#支持版本和限制"}},[t._v("服务注册插件文档")]),t._v("中，关于"),a("strong",[t._v("新开发")]),t._v("的dubbo应用的说明。")],1),t._v(" "),a("h2",{attrs:{id:"插件配置中-enablespringregister-enabledubboregister与openmigration之间的关系是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件配置中-enablespringregister-enabledubboregister与openmigration之间的关系是什么"}},[t._v("#")]),t._v(" 插件配置中，enableSpringRegister/enableDubboRegister与openMigration之间的关系是什么？")]),t._v(" "),a("p",[t._v("enableSpringRegister/enableDubboRegister与openMigration之间的关系如下表所示：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("enableSpringRegister/enableDubboRegister")]),t._v(" "),a("th",[t._v("openMigration")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("true")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("开启spring cloud/dubbo迁移功能")])]),t._v(" "),a("tr",[a("td",[t._v("true")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("开启spring cloud/dubbo sc注册")])]),t._v(" "),a("tr",[a("td",[t._v("false")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("关闭注册插件")])]),t._v(" "),a("tr",[a("td",[t._v("false")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("关闭注册插件")])])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);