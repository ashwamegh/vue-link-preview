(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(".link-preview-section[data-v-4231e0b5]{display:flex;flex-direction:row;justify-content:space-between;padding:14px;border-radius:5px;margin:20px 0;box-shadow:0 0 0 1px #0000001a,0 -4px 24px 2px #00000008;line-height:1.5;cursor:pointer}.link-preview-section .animated-background[data-v-4231e0b5],.link-preview-section .link-image-loader .img[data-v-4231e0b5]{animation-duration:2.25s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:placeHolderShimmer-4231e0b5;animation-timing-function:linear;background:#f6f6f6;background:linear-gradient(to right,#f6f6f6 8%,#f0f0f0 18%,#f6f6f6 33%);position:relative}@keyframes placeHolderShimmer-4231e0b5{0%{background-position:-468px 0}to{background-position:468px 0}}.link-preview-section .link-description[data-v-4231e0b5]{display:flex;flex-direction:column}.link-preview-section .link-description .domain[data-v-4231e0b5]{display:flex;flex-direction:row;align-items:center;margin-bottom:4px}.link-preview-section .link-description .domain img[data-v-4231e0b5]{height:16px;width:16px}.link-preview-section .link-description .domain .link-url[data-v-4231e0b5],.link-preview-section .link-description .domain .link-url-loader[data-v-4231e0b5]{font-weight:600}.link-preview-section .link-description .domain .link-url-loader[data-v-4231e0b5]{background-color:#f6f6f6;color:#f6f6f6;border-radius:10px}.link-preview-section .link-description .link-data .link-title[data-v-4231e0b5]{color:#1364a2;font-weight:600;font-size:15px}.link-preview-section .link-description .link-data .link-description[data-v-4231e0b5]{font-size:14px;text-align:left}.link-preview-section .link-description .link-data-loader .p1[data-v-4231e0b5]{font-weight:600;font-size:15px}.link-preview-section .link-description .link-data-loader .p2[data-v-4231e0b5]{font-size:14px}.link-preview-section .link-description .link-data-loader .p1[data-v-4231e0b5],.link-preview-section .link-description .link-data-loader .p2[data-v-4231e0b5]{background-color:#f6f6f6;color:#f6f6f6;border-radius:10px;margin-bottom:4px}.link-preview-section .link-image[data-v-4231e0b5]{display:flex;align-content:center;align-items:center;height:100%}.link-preview-section .link-image img[data-v-4231e0b5]{max-height:64px;object-fit:cover}.link-preview-section .link-image-loader[data-v-4231e0b5]{display:flex;align-content:center;align-items:center}.link-preview-section .link-image-loader .img[data-v-4231e0b5]{height:64px;width:64px}")),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { defineComponent as x, ref as u, computed as L, onMounted as B, openBlock as p, createElementBlock as k, renderSlot as g, createElementVNode as i, normalizeStyle as h, toDisplayString as v, createCommentVNode as _, createStaticVNode as C } from "vue";
const T = { key: 0 }, V = { class: "link-description" }, z = { class: "domain" }, O = { class: "link-url" }, P = { class: "link-data" }, D = { class: "link-title" }, N = { class: "link-description" }, j = { class: "link-image" }, A = ["src", "alt"], R = /* @__PURE__ */ x({
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
  setup(l, { emit: d }) {
    const t = l, r = d, s = u(!1), e = u(null), c = u(!1), f = (a) => {
      const n = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
      return c.value = n.test(a), c.value;
    }, b = () => {
      const { url: a, customDomain: n } = t;
      return new Promise((y, S) => {
        f(a) && fetch(n, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ url: a })
        }).then((o) => o.json()).then((o) => {
          y(o);
        }).catch((o) => S(o));
      });
    }, w = () => {
      const { url: a, canOpenLink: n } = t;
      n && window.open(a, "_blank"), r("onClick", e.value);
    }, m = L(() => ({
      width: t.width,
      maxWidth: t.maxWidth,
      marginTop: t.marginTop,
      marginBottom: t.marginBottom,
      marginRight: t.marginRight,
      marginLeft: t.marginLeft
    }));
    return B(() => {
      s.value = !0, b().then((a) => {
        e.value = a, s.value = !1;
      });
    }), (a, n) => c.value ? (p(), k("div", T, [
      !s.value && e.value ? g(a.$slots, "default", {
        key: 0,
        title: e.value.title,
        img: e.value.img,
        description: e.value.description,
        domain: e.value.domain
      }, () => [
        i("div", {
          class: "link-preview-section",
          style: h(m.value),
          onClick: w
        }, [
          i("div", V, [
            i("div", z, [
              i("span", O, v(e.value.domain), 1)
            ]),
            i("div", P, [
              i("div", D, v(e.value.title), 1),
              i("div", N, v(e.value.description), 1)
            ])
          ]),
          i("div", j, [
            e.value.img ? (p(), k("img", {
              key: 0,
              src: e.value.img,
              alt: e.value.description
            }, null, 8, A)) : _("", !0)
          ])
        ], 4)
      ], !0) : g(a.$slots, "loader", { key: 1 }, () => [
        i("div", {
          class: "link-preview-section",
          style: h(m.value)
        }, [...n[0] || (n[0] = [
          C('<div class="link-description" data-v-4231e0b5><div class="domain" data-v-4231e0b5><span class="link-url-loader animated-background" data-v-4231e0b5>facebook.com</span></div><div class="link-data-loader" data-v-4231e0b5><div class="p1 animated-background" data-v-4231e0b5> Shashank Shekhar </div><div class="p2 animated-background" data-v-4231e0b5> This is some description </div></div></div><div class="link-image-loader" data-v-4231e0b5><div class="img" data-v-4231e0b5></div></div>', 2)
        ])], 4)
      ], !0)
    ])) : _("", !0);
  }
}), U = (l, d) => {
  const t = l.__vccOpts || l;
  for (const [r, s] of d)
    t[r] = s;
  return t;
}, E = /* @__PURE__ */ U(R, [["__scopeId", "data-v-4231e0b5"]]);
export {
  E as default
};
