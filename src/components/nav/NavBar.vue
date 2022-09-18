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
			<!-- TODO: Reasses manual page for actual manuals-->
			<!--
			<router-link
				class="nav-item"
				to="/manual"
			>
				Manual
			</router-link>
 -->
			<router-link
				class="nav-item"
				to="/maps"
			>
				Maps
			</router-link>
			<router-link
				class="nav-item"
				to="/amenities"
			>
				Amenities
			</router-link>
		</div>
	</div>
</template>

<script>

export default {
	name: "NavBar",
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
		}
	}
}
a {
	font-weight: bold;
	color: #2c3e50;
}
a.router-link-exact-active {
	color: #42b983;
}
</style>
