(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{462:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"开发说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发说明"}},[t._v("#")]),t._v(" 开发说明")]),t._v(" "),s("h2",{attrs:{id:"如何使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[t._v("#")]),t._v(" 如何使用")]),t._v(" "),s("p",[t._v("首先确保存在node环境，可先从官网下载。"),s("a",{attrs:{href:"https://nodejs.org/zh-cn/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs中文官网"),s("OutboundLink")],1),t._v("\n环境安装完成后可通过")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n")])])]),s("p",[t._v("来查看是否安装成功。\n之后进入根目录即SERMANT-WEBSITE目录，运行")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("p",[t._v("安装项目所需依赖。\n本地运行指令")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])]),s("p",[t._v("项目打包")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),s("h2",{attrs:{id:"结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[t._v("#")]),t._v(" 结构")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sermant-website\n    └─docs\n        ├─.vuepress\n        │  ├─components (vue组件)\n        │  ├─public （各种静态资源）\n        │  │  ├─img （图片）\n        │  │  └─user-story-logo （用户案例中的用户logo）\n        │  ├─styles （全局样式）\n        │  └─theme  （主题配置）\n        │      ├─components\n        │      └─styles\n        ├─en （英文文档目录）\n        │  ├─about （关于）\n        │  │  ├─community （社区指南）\n        │  │  ├─question  （常见问题）\n        │  │  ├─team  （开发团队）\n        │  │  └─version （版本发布）\n        │  ├─blog （博客）\n        │  │  └─README.md(博客配置)\n        │  │\n        │  ├─document （文档）\n        │  ├─plugin （插件生态）\n        │  └─story （用户案例）\n        │  └─README.md(主页内容及配置)   \n        └─zh （中文文档目录，结构与英文文档一样）\n")])])]),s("h2",{attrs:{id:"markdown用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown用法"}},[t._v("#")]),t._v(" markdown用法")]),t._v(" "),s("p",[t._v('文章中的url链接需要改成需要跳转位置的相对路径,可在路径后面添加标题来设置跳转到相应文档的相应标题处。其中标题中的特殊符号改写为"-"，标题末尾的特殊符号省略（如“？”需要去除），英文标题中的大写字母需要全部改写为小写字母。')]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("../../about/question/flowcontrol.md#possible-causes-for-the-retry-rule-does-not-take-effect\n")])])]),s("p",[t._v("文章中的图片需要使用MyImage标签。如下所示。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<MyImage src="/docs-img/sermant-rt-arch.png" />\n')])])]),s("p",[t._v("src中的路径为图片路径，图片统一存放在.vuepress/public目录下，可在目录下新建图片目录，目前文档网站各个模块的md文件中的图片存放在.vuepress/public/docs-img中，路径只需要像示例一样书写即可。")]),t._v(" "),s("h2",{attrs:{id:"主页-home"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主页-home"}},[t._v("#")]),t._v(" 主页（home）")]),t._v(" "),s("p",[t._v("可在zh及en文档目录下的第一个README.md文件中编辑主页内容，内容放置在slot-footer以及头部之间，使用markdown语法，内容会被填充到主页的footer上方位置。")]),t._v(" "),s("h2",{attrs:{id:"博客-blog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#博客-blog"}},[t._v("#")]),t._v(" 博客（blog）")]),t._v(" "),s("p",[t._v("使用时进入到blog目录下，当需要发布一篇博客时，可新建一个文件夹（文件夹名称可自定义），并在该目录下新建README.md(博客内容)。并在blog根目录下的README.md中添加配置。")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("blogArr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 博客1\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'这里是描述'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blogtest1'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" html\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" javascript\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 博客1\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'这里是描述'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blogtest1'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" html\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" javascript\n")])])]),s("p",[t._v("name字段表示博客名称，description字段为描述信息，path为新创建的博客文件夹名称，tags下可添加自定义的标签，注意格式与上面保持一致即可。")]),t._v(" "),s("h2",{attrs:{id:"用户案例-story"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户案例-story"}},[t._v("#")]),t._v(" 用户案例（story）")]),t._v(" "),s("p",[t._v("使用用户案例模块，可以先在story根目录下创建一个相应的用户案例文件夹(文件夹名称将会用作用户名)，并在新创建的文件夹下创建README.md文件。(用户案例具体内容)，然后需要配置story根目录下的README.md文件,配置示例如下所示。")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("userArr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Huawei\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("img")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user-story-logo/huawei.gif'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'这里是描述'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Huawei\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("img")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user-story-logo/huawei.gif'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'这里是描述'")]),t._v("\n")])])]),s("p",[t._v("name字段为用户名称（同时也是用户案例相应的文件夹名称），img字段为用户头像路径，可将头像放置在public目录下的user-story-logo中，description为用户案例的相关描述信息。")]),t._v(" "),s("h2",{attrs:{id:"文档-document"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档-document"}},[t._v("#")]),t._v(" 文档 （document）")]),t._v(" "),s("p",[t._v("document根目录下存在一个README.md文件，可在该文件中编写整个模块的简介或者概览等信息。\n然后可以创建多个文档信息，均为md类型文件，创建后可在其中编辑文档内容。编辑完后，为了能让这些文档信息能通过左侧侧边栏跳转，需要去.vuepress目录下的config.js中添加配置信息。在sidebar字段下添加相应内容，如下所示。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sidebar")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"/zh/document/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"two"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"/zh/plugin/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"/zh/story/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"/zh/blog/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"/zh/about/question/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"/zh/about/version/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"/zh/about/community/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"/zh/about/team/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v('如自己新创建的一个文档叫one，则将文件名（不需要后缀）以数组的形式添加到"/zh/document/"属性后面，同时注意中英文的sidebar中都要进行这一步，否则可能造成中英文侧边栏不一致。')]),t._v(" "),s("p",[t._v("进阶用法：当层级较多时，可使用分组。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    title: "开始",\n    path: "",\n    collapsable: false,\n    sidebarDepth: 1,\n    children: ["", "QuickStart"],\n},\n')])])]),s("p",[t._v("使用对象来进行分组，title属性为分组组名，path为点击时跳转的路径，为空则不可以通过点击分组组名跳转，collapsable为分组是否可以收缩，设为false时不收缩，会显示分组组名下的所有组名.\n"),s("img",{attrs:{src:"readme-img/sidebar-no-collapsable.jpg",alt:"img"}}),t._v("\n为true时可收缩\n"),s("img",{attrs:{src:"readme-img/sidebar-collapsable.jpg",alt:"img"}}),t._v("\nsidebarDepth属性为侧边栏标题深度，默认为1即可。")]),t._v(" "),s("p",[t._v("children属性为该分组下要显示的所有md文件，空字符串代表README.md文件，其中可继续进行嵌套，将字符串改为以上对象形式，可继续分级（但层数过多会导致侧边栏混乱，不推荐）。")]),t._v(" "),s("p",[t._v("侧边栏最终会显示md文件中的一级标题，若想要修改侧边栏显示的标题，直接修改md文件中的一级标题即可。由于侧边栏提取比较严格，md文件中的标题等级请严格从一级标题开始、每级递增不要跳级。当前设置会在点击某一篇侧边栏的md文件标题时，展开显示二级标题。若想提取更深层次标题，请修改配置.vuepress/config.js中的sidebarDepth属性。如下所示，1则会提取二级标题，2则会提取二级标题和三级标题，最大为2.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('themeConfig: {\n    logo: "/img/sermant-logo.png",\n    displayAllHeaders: false,\n    smoothScroll: true,\n    sidebarDepth: 1,\n    }\n')])])]),s("h2",{attrs:{id:"插件生态-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件生态-plugin"}},[t._v("#")]),t._v(" 插件生态 （plugin）")]),t._v(" "),s("p",[t._v('使用方法与文档相同，只不过配置时需要将对应信息放置在"/zh/plugin/"后面，同时也要注意中英文都需要进行配置。')]),t._v(" "),s("h2",{attrs:{id:"关于-about"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于-about"}},[t._v("#")]),t._v(" 关于 (about)")]),t._v(" "),s("p",[t._v("该模块中有四个子模块，可按照目录结构（在上方结构中有介绍），在相应目录下的README.md文件中编辑模块介绍信息。\n其中比较特殊的是团队（team）模块,可以在其中添加团队成员信息,description字段为开发团队人员介绍信息，members为团队成员信息。可按以下示例进行编辑")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("members")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xxx\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("shortDesc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'简短介绍'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("avatar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user-story-logo/huawei.gif'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'省份'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("blog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xx'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xx'")]),t._v("\n")])])]),s("p",[t._v("name为团队成员名称，shortDesc为个人简短介绍（负责职位等），avatar为个人头像地址（可将头像存到public目录下），location可填写地区信息，blog和github可填写自己个人博客及github地址，这两个选项可以选填，不填的话就不会显示。")])])}),[],!1,null,null,null);s.default=e.exports}}]);