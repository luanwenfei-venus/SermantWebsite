(window.webpackJsonp=window.webpackJsonp||[]).push([[7,8],{390:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(398),core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0__),axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(108);__webpack_exports__.a={data:()=>({selected:void 0,options:[]}),created:async function(){try{let response=await axios__WEBPACK_IMPORTED_MODULE_1__.a.get("https://api.github.com/repos/huaweicloud/Sermant-website/git/trees/version-support");const versionsNode=response.data.tree.find(t=>"versions.json"==t.path);if(response=await axios__WEBPACK_IMPORTED_MODULE_1__.a.get(versionsNode.url),this.options=eval("("+window.atob(response.data.content)+")").versions.map(t=>({value:t,text:t})),0==this.options.length)return;this.options.unshift({value:"latest",text:"latest"});const path=window.location.pathname;if(path.startsWith("/versions/")){const t=10,e=path.indexOf("/",t);this.selected=path.substring(t,e)}else this.selected="latest"}catch(t){console.log(t)}},methods:{onChange(t){const e=window.location.pathname,s=e.indexOf("/versions/"),a=s>=0?s+10:0,i=e.indexOf("/",a),n="latest"==this.selected?"":"/versions/"+this.selected;window.location.pathname=n+e.substring(i)}}}},391:function(t,e,s){},392:function(t,e,s){},393:function(t,e,s){"use strict";s.r(e);var a=s(390).a,i=s(26),n=Object(i.a)(a,(function(){var t=this,e=t._self._c;return t.options&&t.options.length>0?e("span",{staticClass:"nav-item"},[t._v("\n  Versions:\n  "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selected=e.target.multiple?s:s[0]},t.onChange]}},t._l(t.options,(function(s){return e("option",{domProps:{value:s.value}},[t._v("\n      "+t._s(s.text)+"\n    ")])})),0)]):t._e()}),[],!1,null,null,null);e.default=n.exports},394:function(t,e,s){"use strict";s(391)},395:function(t,e,s){"use strict";var a=s(401),i=s(402),n=s(404),o=s(400),r=s(393);function c(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={name:"Navbar",components:{SidebarButton:n.a,NavLinks:o.a,SearchBox:i.a,AlgoliaSearchBox:a.a,Versions:r.default},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(c(this.$el,"paddingLeft"))+parseInt(c(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},u=(s(394),s(26)),d=Object(u.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.a=d.exports},396:function(t,e,s){"use strict";s(392)},399:function(t,e,s){"use strict";s.r(e);var a=s(395),i=s(403),n={name:"Base",components:{Navbar:a.a,Sidebar:i.a},data:()=>({sidebarIsOpen:!1}),computed:{},mounted(){const t=document.getElementById("navbar"),e=document.getElementById("sidebar");window.addEventListener("click",s=>{s.clientX>e.clientWidth&&s.clientY>t.clientHeight&&this.toggleSidebar(!1)})},methods:{toggleSidebar(t){this.sidebarIsOpen="boolean"==typeof t?t:!this.sidebarIsOpen},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},o=(s(396),s(26)),r=Object(o.a)(n,(function(){var t=this._self._c;return t("div",{class:{base:!0,"sidebar-open":this.sidebarIsOpen},on:{touchstart:this.onTouchStart,touchend:this.onTouchEnd}},[t("Navbar",{attrs:{id:"navbar"},on:{"toggle-sidebar":this.toggleSidebar}}),this._v(" "),t("Sidebar",{attrs:{items:[],id:"sidebar"}}),this._v(" "),this._t("content")],2)}),[],!1,null,"0f3332e1",null);e.default=r.exports},424:function(t,e,s){},447:function(t,e,s){"use strict";s(424)},457:function(t,e,s){"use strict";s.r(e);var a={name:"UserStory",components:{Base:s(399).default},data:()=>({}),computed:{userArr(){return this.$frontmatter.userArr},userStory(){return this.$frontmatter.name}},mounted(){},methods:{goToDetail(t){-1!==this.$router.currentRoute.path.indexOf("/zh/")?this.$router.push(`/zh/story/${t}/`):this.$router.push(`/en/story/${t}/`)}}},i=(s(447),s(26)),n=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("Base",{scopedSlots:t._u([{key:"content",fn:function(){return[e("dir",{staticClass:"module-box"},[e("h1",[t._v(t._s(t.userStory))])]),t._v(" "),e("div",{staticClass:"content"},t._l(t.userArr,(function(s,a){return e("el-card",{key:a,staticClass:"story-card",attrs:{shadow:"hover"},nativeOn:{click:function(e){return t.goToDetail(s.name)}}},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"img-box"},[e("img",{attrs:{src:t.$withBase(s.img),alt:"User Logo"}})]),t._v(" "),e("div",{staticClass:"description"},[e("div",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",[t._v(t._s(s.description))])])])])})),1)]},proxy:!0}])})}),[],!1,null,"001711de",null);e.default=n.exports}}]);