(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-923527cc"],{"27a3":function(e,n,t){"use strict";t("9d93")},"51bc":function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e._self._c;return n("aside",[n("transition",{attrs:{name:"main-menu",duration:"295"}},[e.menuOpen?n("div",{staticClass:"aside-menu"},[n("div",{staticClass:"aside-menu__black-background",on:{click:function(n){return e.toggleMenu(!1)}}}),n("nav",{staticClass:"aside-menu__content"},[n("div",{staticClass:"aside-menu__header"},[n("h4",[e._v("Desarrollo de contenidos")])]),n("ul",{staticClass:"aside-menu__menu"},[e._l(e.menuData,(function(t,s){return[n("li",{key:"menu-item-"+s,staticClass:"aside-menu__menu__item",class:{"aside-menu__menu__item--active":e.$route.name==t.nombreRuta}},[n("router-link",{staticClass:"aside-menu__menu__item__lnk",attrs:{to:{name:t.nombreRuta}},nativeOn:{click:function(n){return e.toggleMenu(!1)}}},[t.hasOwnProperty("numero")?n("span",{domProps:{innerHTML:e._s(t.numero)}}):e._e(),t.icono?n("i",{class:t.icono}):e._e(),n("span",{domProps:{innerHTML:e._s(t.titulo)}})])],1),t.hasOwnProperty("subMenu")&&t.subMenu.length?e._l(t.subMenu,(function(i,a){return n("li",{key:`submenu-item-${s}-${a}`,staticClass:"aside-menu__menu__item--sub-menu",class:{"aside-menu__menu__item--sub-menu--active":e.$route.hash=="#"+i.hash}},[n("router-link",{staticClass:"aside-menu__menu__item__lnk",attrs:{to:{name:t.nombreRuta,hash:"#"+i.hash}},nativeOn:{click:function(n){return e.toggleMenu(!1)}}},[i.icono?n("i",{class:i.icono}):e._e(),i.numero?n("span",{domProps:{innerHTML:e._s(i.numero)}}):e._e(),n("span",{domProps:{innerHTML:e._s(i.titulo)}})])],1)})):e._e()]}))],2),n("ul",{staticClass:"aside-menu__sec-menu"},[e._l(e.subMenuData,(function(t,s){return[n("li",{key:"secMenu-item-"+s,staticClass:"aside-menu__sec-menu__item",class:{"d-none":t.titulo.includes("material")&&e.isLocal()}},[t.hasOwnProperty("download")?n("a",{staticClass:"aside-menu__sec-menu__item__lnk",attrs:{href:e.obtenerLink(t.download),target:"_blank"}},[t.icono?n("i",{class:t.icono}):e._e(),n("span",{domProps:{innerHTML:e._s(t.titulo)}})]):n("router-link",{staticClass:"aside-menu__sec-menu__item__lnk",attrs:{to:{name:t.nombreRuta}},nativeOn:{click:function(n){return e.toggleMenu(!1)}}},[t.icono?n("i",{class:t.icono}):e._e(),n("span",{domProps:{innerHTML:e._s(t.titulo)}})])],1)]}))],2)])]):e._e()])],1)},i=[],a={name:"AsideMenu",computed:{menuData(){return this.$config.menuPrincipal.menu},subMenuData(){return this.$config.menuPrincipal.subMenu},menuOpen(){return this.$store.getters.isMenuOpen}},watch:{$route(e){("inicio"===e.name||window.innerWidth<=991)&&this.toggleMenu(!1)}},methods:{toggleMenu(e){this.$store.dispatch("toggleMenu",e)},isLocal(){return"file:"===window.location.protocol}}},u=a,o=(t("27a3"),t("2877")),r=Object(o["a"])(u,s,i,!1,null,null,null);n["default"]=r.exports},"9d93":function(e,n,t){}}]);
//# sourceMappingURL=chunk-923527cc.e45ca003.js.map