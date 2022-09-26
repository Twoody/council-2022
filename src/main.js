import { createApp } from "vue"
import App from "./App.vue"

import { createHead } from "@vueuse/head"

import router from "./router"
import store from "./store/store.js"
import { installSchemaOrg } from "@vueuse/schema-org-vite/vite"

// Fontawesome
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faClipboard } from "@fortawesome/free-solid-svg-icons"
import { faClipboardList } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"

// Font awesome
library.add(faCheck)
library.add(faChevronRight)
library.add(faClipboard)
library.add(faClipboardList)
library.add(faFacebook)
library.add(faGoogle)
library.add(faSpinner)
library.add(faStar)

// Prep the head
const head = createHead()

// Prep the app
const app = createApp(App)
app.use(store)
app.use(router)
app.use(head)
app.component("font-awesome-icon", FontAwesomeIcon)
installSchemaOrg({
	app,
	router, 
}, {
	canonicalHost: "https://woodyforcouncil.com",
})

// Mount the app
app.mount("#app")
