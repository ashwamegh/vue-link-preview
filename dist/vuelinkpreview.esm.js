(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(".link-preview-section[data-v-7cc2d39e]{display:flex;flex-direction:row;justify-content:space-between;padding:14px;border-radius:5px;margin:20px 0;box-shadow:0 0 0 1px #0000001a,0 -4px 24px 2px #00000008;line-height:1.5;cursor:pointer}.link-preview-section .animated-background[data-v-7cc2d39e],.link-preview-section .link-image-loader .img[data-v-7cc2d39e]{animation-duration:2.25s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:placeHolderShimmer-7cc2d39e;animation-timing-function:linear;background:#f6f6f6;background:linear-gradient(to right,#f6f6f6 8%,#f0f0f0 18%,#f6f6f6 33%);position:relative}@keyframes placeHolderShimmer-7cc2d39e{0%{background-position:-468px 0}to{background-position:468px 0}}.link-preview-section .link-description[data-v-7cc2d39e]{display:flex;flex-direction:column}.link-preview-section .link-description .domain[data-v-7cc2d39e]{display:flex;flex-direction:row;align-items:center;margin-bottom:4px}.link-preview-section .link-description .domain img[data-v-7cc2d39e]{height:16px;width:16px}.link-preview-section .link-description .domain .link-url[data-v-7cc2d39e],.link-preview-section .link-description .domain .link-url-loader[data-v-7cc2d39e]{font-weight:600}.link-preview-section .link-description .domain .link-url-loader[data-v-7cc2d39e]{background-color:#f6f6f6;color:#f6f6f6;border-radius:10px}.link-preview-section .link-description .link-data .link-title[data-v-7cc2d39e]{color:#1364a2;font-weight:600;font-size:15px}.link-preview-section .link-description .link-data .link-description[data-v-7cc2d39e]{font-size:14px;text-align:left}.link-preview-section .link-description .link-data-loader .p1[data-v-7cc2d39e]{font-weight:600;font-size:15px}.link-preview-section .link-description .link-data-loader .p2[data-v-7cc2d39e]{font-size:14px}.link-preview-section .link-description .link-data-loader .p1[data-v-7cc2d39e],.link-preview-section .link-description .link-data-loader .p2[data-v-7cc2d39e]{background-color:#f6f6f6;color:#f6f6f6;border-radius:10px;margin-bottom:4px}.link-preview-section .link-image[data-v-7cc2d39e]{display:flex;align-content:center;align-items:center;height:100%}.link-preview-section .link-image img[data-v-7cc2d39e]{max-height:64px;object-fit:cover}.link-preview-section .link-image-loader[data-v-7cc2d39e]{display:flex;align-content:center;align-items:center}.link-preview-section .link-image-loader .img[data-v-7cc2d39e]{height:64px;width:64px}")),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { defineComponent as x, ref as u, onMounted as S, openBlock as p, createElementBlock as h, renderSlot as _, createElementVNode as i, toDisplayString as v, createCommentVNode as k, createStaticVNode as L } from "vue";
const B = { key: 0 }, C = { class: "link-description" }, T = { class: "domain" }, V = { class: "link-url" }, O = { class: "link-data" }, P = { class: "link-title" }, z = { class: "link-description" }, D = { class: "link-image" }, N = ["src", "alt"], j = /* @__PURE__ */ L('<div class="link-description" data-v-7cc2d39e><div class="domain" data-v-7cc2d39e><span class="link-url-loader animated-background" data-v-7cc2d39e>facebook.com</span></div><div class="link-data-loader" data-v-7cc2d39e><div class="p1 animated-background" data-v-7cc2d39e> Shashank Shekhar </div><div class="p2 animated-background" data-v-7cc2d39e> This is some description </div></div></div><div class="link-image-loader" data-v-7cc2d39e><div class="img" data-v-7cc2d39e></div></div>', 2), A = [
  j
], R = /* @__PURE__ */ x({
  __name: "VueLinkPreview",
  props: {
    url: {},
    width: { default: "90%" },
    maxWidth: { default: "700px" },
    marginTop: { default: "18px" },
    marginBottom: { default: "18px" },
    marginRight: { default: "auto" },
    marginLeft: { default: "auto" },
    customDomain: { default: "https://lpdg-server.azurewebsites.net/parse/link" },
    canOpenLink: { type: Boolean, default: !0 }
  },
  emits: ["onClick"],
  setup(d, { emit: l }) {
    const t = d, c = l, s = u(!1), e = u(null), r = u(!1), g = (a) => {
      const n = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
      return r.value = n.test(a), r.value;
    }, f = () => {
      const { url: a, customDomain: n } = t;
      return new Promise((y, b) => {
        g(a) && fetch(n, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ url: a })
        }).then((o) => o.json()).then((o) => {
          y(o);
        }).catch((o) => b(o));
      });
    }, w = () => {
      const { url: a, canOpenLink: n } = t;
      n && window.open(a, "_blank"), c("onClick", e.value);
    }, m = () => ({
      width: t.width,
      maxWidth: t.maxWidth,
      marginTop: t.marginTop,
      marginBottom: t.marginBottom,
      marginRight: t.marginRight,
      marginLeft: t.marginLeft
    });
    return S(() => {
      s.value = !0, f().then((a) => {
        e.value = a, s.value = !1;
      });
    }), (a, n) => r.value ? (p(), h("div", B, [
      !s.value && e.value ? _(a.$slots, "default", {
        key: 0,
        title: e.value.title,
        img: e.value.img,
        description: e.value.description,
        domain: e.value.domain
      }, () => [
        i("div", {
          class: "link-preview-section",
          style: m,
          onClick: w
        }, [
          i("div", C, [
            i("div", T, [
              i("span", V, v(e.value.domain), 1)
            ]),
            i("div", O, [
              i("div", P, v(e.value.title), 1),
              i("div", z, v(e.value.description), 1)
            ])
          ]),
          i("div", D, [
            e.value.img ? (p(), h("img", {
              key: 0,
              src: e.value.img,
              alt: e.value.description
            }, null, 8, N)) : k("", !0)
          ])
        ])
      ], !0) : _(a.$slots, "loader", { key: 1 }, () => [
        i("div", {
          class: "link-preview-section",
          style: m
        }, A)
      ], !0)
    ])) : k("", !0);
  }
}), U = (d, l) => {
  const t = d.__vccOpts || d;
  for (const [c, s] of l)
    t[c] = s;
  return t;
}, E = /* @__PURE__ */ U(R, [["__scopeId", "data-v-7cc2d39e"]]);
export {
  E as default
};
