import VueLinkPreview from './VueLinkPreview.vue'


function install(Vue) {
	if (install.installed) return
	install.installed = true
	Vue.component('VueLinkPreview', VueLinkPreview)
}

const plugin = {
	install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
	GlobalVue = global.vue
}

if (GlobalVue) {
	GlobalVue.use(plugin)
}

VueLinkPreview.install = install

export default VueLinkPreview
