!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i((e=e||self).VueLinkPreview={})}(this,(function(e){"use strict";var i={name:"VueLinkPreview",props:{url:{type:String,required:!0},width:{type:String,default:"90%"},maxWidth:{type:String,default:"700px"},marginTop:{type:String,default:"18px"},marginBottom:{type:String,default:"18px"},marginRight:{type:String,default:"auto"},marginLeft:{type:String,default:"auto"},canOpenLink:{type:Boolean,default:!0}},data:function(){return{loading:!1,preview:null,api:"https://lpdg.herokuapp.com/parse/link",validUrl:!1}},computed:{style:function(){var e=this.width,i=this.maxWidth,t=this.marginRight,n=this.marginLeft;return{width:e,maxWidth:i,marginTop:this.marginTop,marginBottom:this.marginBottom,marginRight:t,marginLeft:n}}},methods:{isValidUrl:function(e){return this.validUrl=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/.test(e),this.validUrl},loadUrlPreviewData:function(){var e=this,i=this.url,t=this.api;return new Promise((function(n,a){e.isValidUrl(i)&&fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({url:i})}).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){return a(e)}))}))},onClick:function(){if(this.canOpenLink){var e=this.url;window.open(e,"_blank")}this.$emit("click",this.preview)}},mounted:function(){var e=this;this.loading=!0,this.loadUrlPreviewData().then((function(i){e.preview=i,e.loading=!1}))}};var t=function(e,i,t,n,a,o,r,s,d,l){"boolean"!=typeof r&&(d=s,s=r,r=!1);var c,p="function"==typeof t?t.options:t;if(e&&e.render&&(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0,a&&(p.functional=!0)),n&&(p._scopeId=n),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},p._ssrRegister=c):i&&(c=r?function(){i.call(this,l(this.$root.$options.shadowRoot))}:function(e){i.call(this,s(e))}),c)if(p.functional){var f=p.render;p.render=function(e,i){return c.call(i),f(e,i)}}else{var v=p.beforeCreate;p.beforeCreate=v?[].concat(v,c):[c]}return t},n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var a=document.head||document.getElementsByTagName("head")[0],o={};var r=t({render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return e.validUrl?t("div",[e.loading&&!e.preview?e._t("loader",[t("div",{staticClass:"link-preview-section",style:e.style},[e._m(0),e._v(" "),e._m(1)])]):e._t("default",[t("div",{staticClass:"link-preview-section",style:e.style,on:{click:e.onClick}},[t("div",{staticClass:"link-description"},[t("div",{staticClass:"domain"},[t("span",{staticClass:"link-url"},[e._v(e._s(e.preview.domain))])]),e._v(" "),t("div",{staticClass:"link-data"},[t("div",{staticClass:"link-title"},[e._v(e._s(e.preview.title))]),e._v(" "),t("div",{staticClass:"link-description"},[e._v(e._s(e.preview.description))])])]),e._v(" "),t("div",{staticClass:"link-image"},[e.preview.img?t("img",{attrs:{src:e.preview.img,alt:e.preview.description}}):e._e()])])],{props:e.preview})],2):e._e()},staticRenderFns:[function(){var e=this.$createElement,i=this._self._c||e;return i("div",{staticClass:"link-description"},[i("div",{staticClass:"domain"},[i("span",{staticClass:"link-url-loader animated-background"},[this._v("facebook.com")])]),this._v(" "),i("div",{staticClass:"link-data-loader"},[i("div",{staticClass:"p1 animated-background"},[this._v("Shashank Shekhar")]),this._v(" "),i("div",{staticClass:"p2 animated-background"},[this._v("This is some description")])])])},function(){var e=this.$createElement,i=this._self._c||e;return i("div",{staticClass:"link-image-loader"},[i("div",{staticClass:"img"})])}]},(function(e){e&&e("data-v-483ab3d2_0",{source:".link-preview-section[data-v-483ab3d2]{display:flex;flex-direction:row;justify-content:space-between;padding:14px;border-radius:5px;margin:20px 0;box-shadow:0 0 0 1px rgba(0,0,0,.1),0 -4px 24px 2px rgba(0,0,0,.03);line-height:1.5;cursor:pointer}.link-preview-section .animated-background[data-v-483ab3d2],.link-preview-section .link-image-loader .img[data-v-483ab3d2]{animation-duration:2.25s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:placeHolderShimmer-data-v-483ab3d2;animation-timing-function:linear;background:#f6f6f6;background:linear-gradient(to right,#f6f6f6 8%,#f0f0f0 18%,#f6f6f6 33%);position:relative}@keyframes placeHolderShimmer-data-v-483ab3d2{0%{background-position:-468px 0}100%{background-position:468px 0}}.link-preview-section .link-description[data-v-483ab3d2]{display:flex;flex-direction:column}.link-preview-section .link-description .domain[data-v-483ab3d2]{display:flex;flex-direction:row;align-items:center;margin-bottom:4px}.link-preview-section .link-description .domain img[data-v-483ab3d2]{height:16px;width:16px}.link-preview-section .link-description .domain .link-url[data-v-483ab3d2],.link-preview-section .link-description .domain .link-url-loader[data-v-483ab3d2]{font-weight:600}.link-preview-section .link-description .domain .link-url-loader[data-v-483ab3d2]{background-color:#f6f6f6;color:#f6f6f6;border-radius:10px}.link-preview-section .link-description .link-data .link-title[data-v-483ab3d2]{color:#1364a2;font-weight:600;font-size:15px}.link-preview-section .link-description .link-data .link-description[data-v-483ab3d2]{font-size:14px;text-align:left}.link-preview-section .link-description .link-data-loader .p1[data-v-483ab3d2]{font-weight:600;font-size:15px}.link-preview-section .link-description .link-data-loader .p2[data-v-483ab3d2]{font-size:14px}.link-preview-section .link-description .link-data-loader .p1[data-v-483ab3d2],.link-preview-section .link-description .link-data-loader .p2[data-v-483ab3d2]{background-color:#f6f6f6;color:#f6f6f6;border-radius:10px;margin-bottom:4px}.link-preview-section .link-image[data-v-483ab3d2]{display:flex;align-content:center;align-items:center;height:100%}.link-preview-section .link-image img[data-v-483ab3d2]{max-height:64px;object-fit:cover}.link-preview-section .link-image-loader[data-v-483ab3d2]{display:flex;align-content:center;align-items:center}.link-preview-section .link-image-loader .img[data-v-483ab3d2]{height:64px;width:64px}",map:void 0,media:void 0})}),i,"data-v-483ab3d2",!1,void 0,(function(e){return function(e,i){return function(e,i){var t=n?i.media||"default":e,r=o[t]||(o[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var s=i.source;if(i.map&&(s+="\n/*# sourceURL="+i.map.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",i.media&&r.element.setAttribute("media",i.media),a.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(s),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var d=r.ids.size-1,l=document.createTextNode(s),c=r.element.childNodes;c[d]&&r.element.removeChild(c[d]),c.length?r.element.insertBefore(l,c[d]):r.element.appendChild(l)}}}(e,i)}}),void 0);function s(e){s.installed||(s.installed=!0,e.component("VueLinkPreview",r))}var d={install:s},l=null;"undefined"!=typeof window?l=window.Vue:"undefined"!=typeof global&&(l=global.vue),l&&l.use(d),r.install=s,e.default=r,Object.defineProperty(e,"__esModule",{value:!0})}));
