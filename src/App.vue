<template>
	<div id="app">
		<!-- @todo Select Identity: https://vue-schema-org.netlify.app/guide/guides/identity -->
		<SchemaOrgOrganization
			name="Tanner Woody"
			logo="/assets/imgs/council-ice-cream.png"
			:same-as="schemaSameAs"
		/>

		<SchemaOrgWebSite name="Vote Tanner Woody" />

		<SchemaOrgWebPage />

		<NavBar id="nav-wrapper" />

		<AppSection
			centered
			class="main-section"
			is-showing
		>
			<!-- TODO: Setup to pull info from vuex -->
			<DialogModal
				class="election-information"
				backgroundColor="#80b2e4"
				bodyColor="#80b2e4"
				headerColor="#80b2e4"
				footerColor="#80b2e4"
				closeButtonLabel="Got it!"
				:visible="isModalOpen"
				@close="isModalOpen = false"
			>
				<template #title>
					Election is Over!
				</template>
				<template #body>
					<p>
						It has been a long few months since November!
						Thank you all for your support and votes!
					</p>
				</template>
			</DialogModal>
			<router-view
				v-slot="{ Component }"
			>
				<transition
					name="fade"
					mode="out-in"
				>
					<component
						id="content-wrapper"
						:is="Component"
					/>
				</transition>
			</router-view>
		</AppSection>
		<div class="bottom-banner-wrapper">
			<div class="bottom-banner">
				<div class="flex-box cheat">
					<div class="flex-item">
						<MyButton
							class="footer-button"
							pill
							tabindex="-1"
						>
							<a
								:href="facebook"
								target="_blank"
							>
								<span>Facebook</span>
							</a>
						</MyButton>
						<MyButton
							class="footer-button"
							pill
							tabindex="-1"
						>
							<a
								:href="instagram"
								target="_blank"
							>
								<span>Instagram</span>
							</a>
						</MyButton>
						<MyButton
							class="footer-button"
							pill
							tabindex="-1"
						>
							<a
								:href="github"
								target="_blank"
							>
								<span>Edit this Page</span>
							</a>
						</MyButton>
					</div>
					<div class="flex-item">
						<div class="flex-box cheat">
							<div class="flex-item">
								<Copyright />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<DialogsWrapper />
	</div>
</template>

<script>
import { getAnalytics, logEvent } from "firebase/analytics"
import { initializeApp } from "firebase/app"
import {SchemaOrgOrganization,
	SchemaOrgWebPage,
	SchemaOrgWebSite} from "@vueuse/schema-org/dist/runtime-simple/components/nodes.mjs"
import {URLS} from "constants/urls.js"

import AppSection from "components/common/AppSection"
import Copyright from "components/Copyright"
import DialogModal from "components/modals/DialogModal.vue"
import MyButton from "components/buttons/MyButton"
import NavBar from "components/nav/NavBar"

export default {
	name: "App",
	components:
	{
		AppSection,
		Copyright,
		DialogModal,
		MyButton,
		NavBar,
		SchemaOrgOrganization,
		SchemaOrgWebPage,
		SchemaOrgWebSite,
	},
	data: function()
	{
		return {
			facebook: URLS.SOCIALS.FACEBOOK,
			github: URLS.__REPO,
			instagram: URLS.SOCIALS.INSTAGRAM,
			isModalOpen: false,
			isNavCollapsed: true,
			schemaSameAs: [
				URLS.SOCIALS.GITHUB,
				URLS.SOCIALS.LINKEDIN,
				URLS.SOCIALS.STRAVA,
				URLS.SOCIALS.FACEBOOK,
				URLS.SOCIALS.INSTAGRAM,
			],
		}
	},
	watch:
	{
		/**
		 * Reset offline banner state from closed when route changes
		 */
		"$route" ()
		{
			this.$store.commit("setIsShowingBanner", true)
		},
	},
	mounted ()
	{
		this.showModalIfNewVersion()
	},
	created: function()
	{
		// List for online status changing
		this.$store.commit("setIsOnline", navigator.onLine)
		window.addEventListener("load", this.handleEventLoad)
		window.addEventListener("online", this.handleEventOnline)
		window.addEventListener("offline", this.handleEventOffline)

		this.setupFirebase()
	},
	beforeDestroy: function()
	{
		window.removeEventListener("load", this.handleEventLoad)
		window.removeEventListener("online", this.handleEventOnline)
		window.removeEventListener("offline", this.handleEventOffline)
	},
	methods:
	{
		/**
		 * Handle when the app is loaded
		 */
		handleEventLoad ()
		{
			if (navigator.onLine)
			{
				this.handleEventOnline()
			}
			else
			{
				this.handleEventOffline()
			}
		},

		/**
		 * Handle the app going offline
		 */
		handleEventOffline ()
		{
			// Tell user internet is disconnected
			this.$store.commit(
				"setBannerMessage",
				"Warning: No Internet"
			)

			// Configure environment accordingly
			this.$store.commit("setIsOnline", false) 
			this.$store.commit("setIsShowingBanner", true)
		},

		/**
		 * Handle when the app goes online
		 */
		handleEventOnline ()
		{
			this.$store.commit("setIsOnline", true) 
			this.$store.commit("setIsShowingBanner", false)

			// Last, reset the message text
			this.$store.commit( "setBannerMessage", "")
		},

		/**
		 * @returns {void} - Set global modal to open
		 */
		openModal () 
		{
			this.isModalOpen = true
		},

		/**
		 *
		 * @param {number} e - Keycode that was pressed
		 * @returns {void} - If pressing enter, show the info modal
		 */
		revealKeyup (e)
		{
			if (e.keyCode === 13)
			{
				this.openModal()
			}
		},

		/** @returns {void} - Setup firebase configuration */
		setupFirebase () 
		{
			try
			{
				const firebaseConfig = {
					apiKey: "AIzaSyC-LnFGpldNIKPux-76PQBR1Z8WDYCGsGg",
					appId: "1:356255366027:web:c227462d21918bbdff0d8e",
					authDomain: "council-95b50.firebaseapp.com",
					measurementId: "G-CBR0Q6TPKP",
					messagingSenderId: "356255366027",
					projectId: "council-95b50",
					storageBucket: "council-95b50.appspot.com",
				}

				// Get a Firestore instance
				const app = initializeApp(firebaseConfig)
				const analytics = getAnalytics(app)
				logEvent(analytics, "site_view")
			}
			catch (e)
			{
				console.error("Could not connect to firebase")
				console.error(e)
			}
		},

		/** 
		 * @returns {void} - Determin if info modal should be shown or not; New version shows modal
		 */
		showModalIfNewVersion () 
		{
			const oldVersion = localStorage.getItem("version") || 0
			const curVersion = window.__APP_VERSION__

			if (oldVersion !== curVersion)
			{
				localStorage.setItem("version", curVersion)
				this.openModal()
			}
		},
	},
}
</script>

<style lang='less'>
@import "../assets/styles/styles";

html, body {
	color: @myblack;
	height: 100%;
	margin: 0;
	padding: 0;
	width: 100%;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: @color-primary-background;
	color: @myblack;
	display: flex;
	flex-direction: column;
	//font-family: Avenir, Helvetica, Arial, sans-serif;
	font-family: 'Poppins', sans-serif;
	height: 100%;
	max-height: 100%;
	min-height: 100%;
	text-align: center;
	width: 100%;

}
.bottom-banner-wrapper {
	align-items: center;
	background-color: @color-third-background;
	bottom: 0;
	display: flex;
	flex-wrap: nowrap;
	justify-content: center;
	height: 50px;
	width: 100%;

	.bottom-banner {
		a {
			font-weight: bold;
			color: @color-third-font;
		}
		align-items: center;
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
		max-width: @maxwidth;
		width: 100%;

		.triangle {
			align-self: flex-start;
			color: red;
			font-size: 24px;
			margin-top: 9px;
			margin-left: 9px;
			transition: all 0.25s;
			&:hover {
				font-size: 30px;
			}
		}
		.flex-box {
			align-items: center;
			display: flex;
			justify-content: center;
			width: 100%;

			&.cheat {
				font-size: 12px;
				max-width: 100%;
			}
		}
	}
}
#content-wrapper {
	background-color: @color-primary-background;
	overflow: scroll;
}

.main-section {
	flex: 1;
	max-height: 4000px !important;
}

#nav-wrapper {
	background-color: @color-third-background;
	flex-grow: 0;
	margin: 0;
	min-height: 70px;
	padding: 0;
}

#top-banner {
	align-items: center;
	background-color: @color-secondary-background;
	color: @myblack;
	cursor: pointer;
	display: flex;
	filter: brightness(1.2);
	font-weight: 900;
	justify-content: flex-start;
	padding: 5px;
	padding-left: 11px;
	margin: 0;
	width: 100%;
}
.fade-enter-active,
.fade-leave-active {
	transition-duration: 0.2s;
	transition-property: opacity;
	transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0
}
.footer-button {
	span {
		color: @myblack;
	}
}

a:focus-visible {
	border-radius: 5px;
	outline: 4px solid @color-focus !important;
}
input:focus-visible {
	outline: 4px solid @color-focus !important;
	transform: scale(1.02);
}
button:focus-visible {
	outline: 4px solid @color-focus !important;
	transform: scale(1.02);
}
</style>
