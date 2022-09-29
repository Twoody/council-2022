The general navbar for our project
<template>
	<div class="nav-wrapper">
		<div class="nav-items">
			<router-link
				class="nav-item"
				to="/"
			>
				Home
			</router-link>
			<router-link
				class="nav-item"
				to="/about"
			>
				About
			</router-link>
			<router-link
				class="nav-item"
				to="/stop-tolling"
			>
				<font-awesome-icon icon="fa-sharp fa-solid fa-ban" />Tolling
			</router-link>
		</div>
		<EmailButton />
	</div>
</template>

<script>
import EmailButton from "@/components/buttons/EmailButton"

export default {
	name: "NavBar",
	components:
	{
		EmailButton,
	},
}
</script>

<style lang="less">
@import "../../../assets/styles/styles";

/* @todo setup a main file and set margins/padding there probably */
.nav-wrapper {
	@v-padding: 30px;
	align-content: center;
	align-items: center;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	padding: 10px;
	padding-bottom: @v-padding;
	padding-top: @v-padding;
	position: relative;
	width: 100%;

	.nav-items {
		flex-grow: 1;

		.nav-item {
			margin: 5px;
			text-decoration: none;
		}
	}
}
a {
	font-weight: bold;
	color: @color-third-font;
}
a.router-link-exact-active {
	color: @color-pastel-green;
	font-size: 19px;
	text-decoration: underline !important;
}
</style>
