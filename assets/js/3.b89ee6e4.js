(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{390:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(398),core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0__),axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(108);__webpack_exports__.a={data:()=>({selected:void 0,options:[]}),created:async function(){try{let response=await axios__WEBPACK_IMPORTED_MODULE_1__.a.get("https://api.github.com/repos/huaweicloud/Sermant-website/git/trees/version-support");const versionsNode=response.data.tree.find(t=>"versions.json"==t.path);if(response=await axios__WEBPACK_IMPORTED_MODULE_1__.a.get(versionsNode.url),this.options=eval("("+window.atob(response.data.content)+")").versions.map(t=>({value:t,text:t})),0==this.options.length)return;this.options.unshift({value:"latest",text:"latest"});const path=window.location.pathname;if(path.startsWith("/versions/")){const t=10,e=path.indexOf("/",t);this.selected=path.substring(t,e)}else this.selected="latest"}catch(t){console.log(t)}},methods:{onChange(t){const e=window.location.pathname,a=e.indexOf("/versions/"),s=a>=0?a+10:0,n=e.indexOf("/",s),i="latest"==this.selected?"":"/versions/"+this.selected;window.location.pathname=i+e.substring(n)}}}},391:function(t,e,a){},393:function(t,e,a){"use strict";a.r(e);var s=a(390).a,n=a(26),i=Object(n.a)(s,(function(){var t=this,e=t._self._c;return t.options&&t.options.length>0?e("span",{staticClass:"nav-item"},[t._v("\n  Versions:\n  "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selected=e.target.multiple?a:a[0]},t.onChange]}},t._l(t.options,(function(a){return e("option",{domProps:{value:a.value}},[t._v("\n      "+t._s(a.text)+"\n    ")])})),0)]):t._e()}),[],!1,null,null,null);e.default=i.exports},394:function(t,e,a){"use strict";a(391)},395:function(t,e,a){"use strict";var s=a(401),n=a(402),i=a(404),o=a(400),r=a(393);function l(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var c={name:"Navbar",components:{SidebarButton:i.a,NavLinks:o.a,SearchBox:n.a,AlgoliaSearchBox:s.a,Versions:r.default},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(l(this.$el,"paddingLeft"))+parseInt(l(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},d=(a(394),a(26)),h=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.a=h.exports},408:function(t,e,a){},414:function(t,e){t.exports=function(t){return null==t}},415:function(t,e,a){},416:function(t,e,a){},417:function(t,e,a){},430:function(t,e,a){"use strict";a(408)},436:function(t,e,a){"use strict";a(415)},437:function(t,e,a){var s=a(35),n=a(11),i=a(27);t.exports=function(t){return"string"==typeof t||!n(t)&&i(t)&&"[object String]"==s(t)}},438:function(t,e,a){"use strict";a(416)},439:function(t,e,a){"use strict";a(417)},451:function(t,e,a){"use strict";a.r(e);var s={name:"Home",components:{NavLink:a(407).a},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},n=(a(430),a(26)),i=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,s){return e("div",{key:s,staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):e("Content",{staticClass:"footer",attrs:{"slot-key":"footer"}})],1)}),[],!1,null,null,null).exports,o=a(395),r=a(414),l=a.n(r),c=a(397),d={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=l()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:a="",docsBranch:s="master",docsRepo:n=e}=this.$site.themeConfig;return t&&n&&this.$page.relativePath?this.createEditLink(e,n,a,s,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,a,s,n){if(/bitbucket.org/.test(e)){return e.replace(c.a,"")+"/src"+`/${s}/`+(a?a.replace(c.a,"")+"/":"")+n+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(c.a,"")+"/-/edit"+`/${s}/`+(a?a.replace(c.a,"")+"/":"")+n}return(c.i.test(e)?e:"https://github.com/"+e).replace(c.a,"")+"/edit"+`/${s}/`+(a?a.replace(c.a,"")+"/":"")+n}}},h=(a(436),Object(n.a)(d,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),u=a(437),p=a.n(u),_={name:"PageNav",props:["sidebarItems"],computed:{prev(){return f(g.PREV,this)},next(){return f(g.NEXT,this)}}};const g={NEXT:{resolveLink:function(t,e){return v(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return v(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function f(t,{$themeConfig:e,$page:a,$route:s,$site:n,sidebarItems:i}){const{resolveLink:o,getThemeLinkConfig:r,getPageLinkConfig:d}=t,h=r(e),u=d(a),_=l()(u)?h:u;return!1===_?void 0:p()(_)?Object(c.k)(n.pages,_,s.path):o(a,i)}function v(t,e,a){const s=[];!function t(e,a){for(let s=0,n=e.length;s<n;s++)"group"===e[s].type?t(e[s].children||[],a):a.push(e[s])}(e,s);for(let e=0;e<s.length;e++){const n=s[e];if("page"===n.type&&n.path===decodeURIComponent(t.path))return s[e+a]}}var m=_,b=(a(438),{components:{PageEdit:h,PageNav:Object(n.a)(m,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?e("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},["external"===t.next.type?e("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),x=(a(439),{name:"Layout",components:{Home:i,Page:Object(n.a)(b,(function(){var t=this._self._c;return t("main",{staticClass:"page"},[this._t("top"),this._v(" "),t("Content",{staticClass:"theme-default-content"}),this._v(" "),t("PageEdit"),this._v(" "),t("PageNav",this._b({},"PageNav",{sidebarItems:this.sidebarItems},!1)),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Sidebar:a(403).a,Navbar:o.a},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(c.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),k=Object(n.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=k.exports}}]);