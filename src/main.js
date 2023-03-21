import { createApp } from "vue"
import App from "./App.vue"

import { createHead } from "@vueuse/head"

import router from "./router"
import store from "./store/store.js"
import { installSchemaOrg } from "@vueuse/schema-org-vite/vite"
import { URLS } from "constants/urls.js"

// Fontawesome
import { faBan } from "@fortawesome/free-solid-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faClipboard } from "@fortawesome/free-solid-svg-icons"
import { faClipboardList } from "@fortawesome/free-solid-svg-icons"
import { faCopyright } from "@fortawesome/free-solid-svg-icons"
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"

// Font awesome
library.add(faBan)
library.add(faCheck)
library.add(faChevronLeft)
library.add(faChevronRight)
library.add(faClipboard)
library.add(faClipboardList)
library.add(faCopyright)
library.add(faExclamationTriangle )
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
	canonicalHost: URLS.CANONICAL_HOST,
})

// Mount the app
app.mount("#app")
