(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{530:function(t,a,e){"use strict";e.r(a);var s=e(26),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sermant-injector使用手册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sermant-injector使用手册"}},[t._v("#")]),t._v(" Sermant-injector使用手册")]),t._v(" "),a("p",[t._v("sermant-injector是基于Kubernetes准入控制器（Admission Controllers）特性开发而来。准入控制器位于k8s API Server中，能够拦截对API Server的请求，完成身份验证、授权、变更等操作。本文介绍在k8s环境下，如何通过sermant-injector组件来实现宿主应用自动挂载sermant-agent包的快速部署。")]),t._v(" "),a("p",[t._v("sermant-injector属于变更准入控制器(MutatingAdmissionWebhook), 能够在创建容器资源前对请求进行拦截和修改。sermant-injector部署在k8s后，只需在宿主应用部署的YAML文件中"),a("code",[t._v("spec > template > metadata> labels")]),t._v("层级加入"),a("code",[t._v("sermant-injection: enabled")]),t._v("即可实现自动挂载sermant-agent。另外，sermant-injector还支持通过"),a("code",[t._v("annotations")]),t._v("的方式配置环境变量。部署应用自动挂载Sermant并通过"),a("code",[t._v("annotations")]),t._v("配置环境变量的使用方式可参考下文"),a("a",{attrs:{href:"#%E9%83%A8%E7%BD%B2%E5%AE%BF%E4%B8%BB%E5%BA%94%E7%94%A8"}},[t._v("部署宿主应用")]),t._v("中的描述。")]),t._v(" "),a("h2",{attrs:{id:"参数配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数配置"}},[t._v("#")]),t._v(" 参数配置")]),t._v(" "),a("h3",{attrs:{id:"sermant-injector的参数配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sermant-injector的参数配置"}},[t._v("#")]),t._v(" sermant-injector的参数配置")]),t._v(" "),a("p",[t._v("本项目采用Helm进行Kubernetes包管理, 部署sermant-injector相关参数需在"),a("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/blob/develop/sermant-injector/deployment/release/injector/values.yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("sermant-injector/deployment/release/values.yaml"),a("OutboundLink")],1),t._v("中做修改配置。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("injector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pullPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IfNotPresent\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pullSecrets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("agent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pullPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IfNotPresent\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ZOOKEEPER\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30110")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("registry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30100")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("configMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespaces")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("p",[t._v("参数说明如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("span",{staticStyle:{display:"inline-block",width:"100px"}},[t._v("主参数键")])]),t._v(" "),a("th",[a("span",{staticStyle:{display:"inline-block",width:"100px"}},[t._v("二层参数键")])]),t._v(" "),a("th",[a("span",{staticStyle:{display:"inline-block",width:"100px"}},[t._v("三层参数键")])]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[a("span",{staticStyle:{display:"inline-block",width:"40px"}},[t._v("是否必须")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("namespace")]),t._v(" "),a("td",[t._v("name")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("部署sermant-injector所在的namespace")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("injector")]),t._v(" "),a("td",[t._v("replicas")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("部署sermant-injector的实例个数")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("image")]),t._v(" "),a("td",[t._v("addr")]),t._v(" "),a("td",[t._v("sermant-injector的镜像地址")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("pullPolicy")]),t._v(" "),a("td",[t._v("sermant-injector的镜像拉取策略：Always(总是拉取)，IfNotPresent(默认值,本地有则使用本地镜像,不拉取)，Never(只使用本地镜像，从不拉取)")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("pullSecrets")]),t._v(" "),a("td",[t._v("拉取镜像的密钥，默认为default-secret，按需修改")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("agent")]),t._v(" "),a("td",[t._v("image")]),t._v(" "),a("td",[t._v("addr")]),t._v(" "),a("td",[t._v("sermant-agent的镜像地址")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("pullPolicy")]),t._v(" "),a("td",[t._v("sermant-agent的镜像拉取策略：Always(总是拉取)，IfNotPresent(默认值,本地有则使用本地镜像,不拉取)，Never(只使用本地镜像，从不拉取)")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("config")]),t._v(" "),a("td",[t._v("type")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("sermant-agent配置中心类型: 当前支持两种类型，ZOOKEEPER和KIE")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("endpoints")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("sermant-agent配置中心地址")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("registry")]),t._v(" "),a("td",[t._v("endpoints")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("sermant-agent注册插件的注册中心地址")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("configMap")]),t._v(" "),a("td",[t._v("enabled")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("通用环境变量配置开关，默认为false，如需开启请配置为true")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("namespaces")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("注入configMap的namespace，需与业务应用的namespace保持一致")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("env")]),t._v(" "),a("td",[t._v("自定义key1")]),t._v(" "),a("td",[t._v("配置自定义value1")]),t._v(" "),a("td",[t._v("否")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("自定义key2")]),t._v(" "),a("td",[t._v("配置自定义value2")]),t._v(" "),a("td",[t._v("否")])])])]),t._v(" "),a("p",[a("strong",[t._v("通用环境变量配置：")])]),t._v(" "),a("p",[t._v("sermant-injector支持为宿主应用所在pod配置自定义的环境变量，方法为在"),a("code",[t._v("sermant-injector/deployment/release/injector/values.yaml")]),t._v("中修改"),a("code",[t._v("configMap.env")]),t._v("的内容，前提是"),a("code",[t._v("configMap.enabled")]),t._v("配置为"),a("code",[t._v("true")]),t._v("，并正确配置"),a("code",[t._v("configMap.namespaces")]),t._v("。通用环境变量的配置方式如下(kv形式)：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("configMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespaces")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("TEST_ENV1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" abc\n  \t"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("TEST_ENV2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v("\n")])])]),a("p",[t._v("例如，在Sermant使用过程中，某些配置为当前k8s集群下各pod共享的公共配置，例如"),a("strong",[t._v("Backend")]),t._v("后端的ip和端口等。则可在此处配置：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("configMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespaces")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backend.nettyIp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n  \t"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backend.nettyPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8900")]),t._v("\n")])])]),a("p",[t._v("即可使default命名空间下的所有pod挂载的Sermant都与该"),a("strong",[t._v("Backend")]),t._v("后端连接。")]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v("：此处"),a("code",[t._v("configMap")]),t._v("配置的环境变量优先级低于宿主应用yaml中"),a("code",[t._v("env")]),t._v("的优先级。由于"),a("code",[t._v("config.type")]),t._v(","),a("code",[t._v("config.endpoints")]),t._v("和"),a("code",[t._v("registry.endpoints")]),t._v("本质上是通过"),a("code",[t._v("env")]),t._v("的方式加载环境变量，因此优先级也高于"),a("code",[t._v("configMap")]),t._v("配置的相应的sermant的环境变量。")]),t._v(" "),a("h3",{attrs:{id:"镜像制作脚本的参数配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像制作脚本的参数配置"}},[t._v("#")]),t._v(" 镜像制作脚本的参数配置")]),t._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/blob/develop/sermant-injector/images/sermant-agent/build-sermant-image.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("build-sermant-image.sh"),a("OutboundLink")],1)])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("是否必须")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("sermantVersion")]),t._v(" "),a("td",[t._v("sermant-agent-x.x.x.tar.gz包的版本")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("imageName")]),t._v(" "),a("td",[t._v("构建的sermant-agent镜像名称")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("imageVersion")]),t._v(" "),a("td",[t._v("构建的sermant-agent镜像版本")]),t._v(" "),a("td",[t._v("是")])])])]),t._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/blob/develop/sermant-injector/images/injector/build-injector-image.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("build-injector-image.sh"),a("OutboundLink")],1)])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("是否必须")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("imageName")]),t._v(" "),a("td",[t._v("构建的sermant-injector镜像名称")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("imageVersion")]),t._v(" "),a("td",[t._v("构建的sermant-injector镜像版本")]),t._v(" "),a("td",[t._v("是")])])])]),t._v(" "),a("h2",{attrs:{id:"支持版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持版本"}},[t._v("#")]),t._v(" 支持版本")]),t._v(" "),a("p",[t._v("sermant-injector当前支持在Kubernetes 1.15及以上版本进行部署，通过Helm v3版本来进行Kubernetes包管理。")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://kubernetes.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kubernetes 1.15+"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://helm.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Helm v3"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"启动和结果验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动和结果验证"}},[t._v("#")]),t._v(" 启动和结果验证")]),t._v(" "),a("p",[t._v("在部署sermant-injector前需要先构建sermant-agent镜像以及sermant-injector镜像。")]),t._v(" "),a("h3",{attrs:{id:"构建sermant-agent镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建sermant-agent镜像"}},[t._v("#")]),t._v(" 构建sermant-agent镜像")]),t._v(" "),a("h4",{attrs:{id:"准备sermant-agent包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备sermant-agent包"}},[t._v("#")]),t._v(" 准备sermant-agent包")]),t._v(" "),a("p",[t._v("点击 "),a("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v("下载release包，也可以在项目中自行打包。")]),t._v(" "),a("h4",{attrs:{id:"制作镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#制作镜像"}},[t._v("#")]),t._v(" 制作镜像")]),t._v(" "),a("p",[t._v("修改文件夹 "),a("code",[t._v("sermant-injector/images/sermant-agent")]),t._v("下"),a("code",[t._v("build-sermant-image.sh")]),t._v(" 脚本中"),a("code",[t._v("sermantVersion")]),t._v(","),a("code",[t._v("imageName")]),t._v("和"),a("code",[t._v("imageVerison")]),t._v("的值。")]),t._v(" "),a("p",[t._v("在k8s节点下，将"),a("code",[t._v("build-sermant-image.sh")]),t._v("和"),a("code",[t._v("Sermant.Dockerfile")]),t._v("置于release包"),a("code",[t._v("sermant-agent-xxx.tar.gz")]),t._v("同一目录下，执行"),a("code",[t._v("build-sermant-image.sh")]),t._v("脚本，完成sermant-agent镜像制作。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" build-sermant-image.sh\n")])])]),a("p",[t._v("如需将镜像推送至镜像仓库，请执行"),a("code",[t._v("docker push ${imageName}:{imageVerison}")]),t._v(" 命令。")]),t._v(" "),a("h3",{attrs:{id:"构建sermant-injector镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建sermant-injector镜像"}},[t._v("#")]),t._v(" 构建sermant-injector镜像")]),t._v(" "),a("h4",{attrs:{id:"准备sermant-injector包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备sermant-injector包"}},[t._v("#")]),t._v(" 准备sermant-injector包")]),t._v(" "),a("p",[t._v("在sermant-injector项目下执行"),a("code",[t._v("mvn clean package")]),t._v("命令，在项目目录下生成"),a("code",[t._v("sermant-injector.jar")]),t._v("文件")]),t._v(" "),a("h4",{attrs:{id:"制作镜像-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#制作镜像-2"}},[t._v("#")]),t._v(" 制作镜像")]),t._v(" "),a("p",[t._v("修改文件夹 "),a("code",[t._v("sermant-injector/images/injector")]),t._v("下"),a("code",[t._v("build-injector-image.sh")]),t._v(" 脚本中"),a("code",[t._v("imageName")]),t._v("和"),a("code",[t._v("imageVerison")]),t._v("的值：")]),t._v(" "),a("p",[t._v("在k8s节点下，将"),a("code",[t._v("build-injector-image.sh")]),t._v("、"),a("code",[t._v("start.sh")]),t._v("和"),a("code",[t._v("Injector.Dockerfile")]),t._v("置于sermant-injector包"),a("code",[t._v("sermant-injector.jar")]),t._v("同一目录下，执行"),a("code",[t._v("build-injector-image.sh")]),t._v("脚本，完成sermant-injector镜像制作。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" build-injector-image.sh\n")])])]),a("p",[t._v("如需将镜像推送至镜像仓库，请执行"),a("code",[t._v("docker push ${imageName}:{imageVerison}")]),t._v(" 命令。")]),t._v(" "),a("h3",{attrs:{id:"部署sermant-injector实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署sermant-injector实例"}},[t._v("#")]),t._v(" 部署sermant-injector实例")]),t._v(" "),a("p",[t._v("在宿主应用容器化部署前，需要先部署sermant-injector实例。本项目采用Helm进行Kubernetes包管理，使用"),a("code",[t._v("sermant-injector/deployment/release")]),t._v("下的"),a("code",[t._v("injector")]),t._v("Chart模版。")]),t._v(" "),a("p",[t._v("按实际环境修改"),a("code",[t._v("values.yaml")]),t._v("中的模版变量，修改完成后，执行"),a("code",[t._v("helm install")]),t._v("命令在k8s中部署sermant-injector实例:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("helm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" sermant-injector sermant-injector/deployment/release/injector\n")])])]),a("p",[t._v("检查sermant-injector部署pod状态为running。")]),t._v(" "),a("p",[t._v("至此，宿主应用部署前的环境配置工作完成。")]),t._v(" "),a("h3",{attrs:{id:"部署宿主应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署宿主应用"}},[t._v("#")]),t._v(" 部署宿主应用")]),t._v(" "),a("p",[a("strong",[t._v("自动挂载Sermant")])]),t._v(" "),a("p",[t._v("在完成上述sermant-injector部署后，用户根据实际应用编写yaml部署K8s Deployment资源，只需在"),a("code",[t._v("spec > template > metadata> labels")]),t._v("层级加入"),a("code",[t._v("sermant-injection: enabled")]),t._v("即可实现自动挂载sermant-agent。(如后续不希望挂载，删除后重新启动应用即可)")]),t._v(" "),a("p",[a("strong",[t._v("通过annotations方式配置环境变量")])]),t._v(" "),a("p",[t._v("如果用户希望在Deployment中配置自定义环境变量，只需在"),a("code",[t._v("spec > template > metadata> annotations")]),t._v("层级添加相应的键值对即可。配置方式可参考下文示例。")]),t._v(" "),a("p",[t._v("以"),a("code",[t._v('env.sermant.io/key1: "value1"')]),t._v("为例，配置规则为："),a("code",[t._v("env.sermant.io/")]),t._v("为通过"),a("code",[t._v("annotations")]),t._v("配置环境变量的标准前缀，"),a("code",[t._v("key1")]),t._v("为用户按需配置的自定义环境变量名称，"),a("code",[t._v("value1")]),t._v("为用户按需配置的自定义环境变量值。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sermant-injection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" enabled\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("annotations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env.sermant.io/key1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value1"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env.sermant.io/key2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value2"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" image\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请替换成您的应用镜像")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.0.0\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8443")]),t._v("\n")])])]),a("p",[t._v("若pod无法创建，请检查sermant-injector是否正确部署以及sermant-agent镜像是否正确构建。")]),t._v(" "),a("h3",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),a("p",[t._v("pod创建成功后，执行如下命令，其中"),a("code",[t._v("${pod_name}")]),t._v("为宿主应用的pod名称")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("kubectl get po/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${pod_name}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" yaml\n")])])]),a("ol",[a("li",[a("p",[t._v("查看上述命令输出内容"),a("code",[t._v("spec > containers > env")]),t._v("下是否包含环境变量：name为"),a("code",[t._v("JAVA_TOOL_OPTIONS")]),t._v("，value为 "),a("code",[t._v("-javaagent:/home/sermant-agent/agent/sermant-agent.jar=appName=default")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("查看上述命令输出内容"),a("code",[t._v("spec > containers > initContainers > image")]),t._v(" 的值是否为构建sermant-agent镜像时的镜像地址。")])])]),t._v(" "),a("p",[t._v("执行如下命令，其中"),a("code",[t._v("${pod_name}")]),t._v("为用户应用的pod名称，"),a("code",[t._v("${namespace}")]),t._v("为用户部署应用的namespace名称")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("kubectl logs "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${pod_name}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${namespace}")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("查看上述命令输出内容pod日志开头部分是否包含：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[INFO] Loading sermant agent...\n")])])]),a("p",[t._v("如果上述信息无误，则表明sermant-agent已成功挂载至用户应用中。")])])}),[],!1,null,null,null);a.default=n.exports}}]);