<template>
	<div class="about-wrapper">
		<h1>About Us</h1>
		<div class="about-section">
			<h2>The Creators</h2>
			<p>
				This site is put together by, Tanner Woody, himself.
				This site would not be possible without the support of Tanner's spouse, Betsy Spencer.
			</p>
			<p>
				Tanner wrote this site using Vue, firebase, jest, vuex, and other technologies.
			</p>
			<p>
				Betsy and Tanner met in Iowa, married in New York, and live in West Linn,
				in the Bolton neighborhood.
				In Bolton, they grow their bio and foster family.
				They have three pets:
				<ol>
					<li>
						Bro'Dee
					</li>
					<li>
						Ruby
					</li>
					<li>
						Kouldbie
					</li>
				</ol>
			</p>
		</div>
		<div class="about-section"/>
	</div>
</template>

<script>
export default {
	name: "About",
	components:
	{},
	created: function()
	{
	},
}
</script>

<style lang="less" scoped>
/* TODO: Make max-width scroll window scroll into margins */
.about-wrapper {
	align-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	padding-bottom: 50px;
	margin-left: 20px;
	margin-right: 20px;
	width: 100%;

	h1 {
		flex-grow:1;
		width: 100%;
	}
	.about-section {
		max-width: 500px;
		width: 100%;

		p {
			text-align: left;
			width: 100%;
		}
		.statistics-section {
			align-items: center;
			align-content: center;
			justify-content: space-between;
			display: flex;
			flex-grow: 1;
			width: 100%;

			.statistic {
				align-items: center;
				align-content: center;
				border: 1px solid;
				border-radius: 7px;
				display: flex;
				flex-direction: column;
				flex-grow: 1;
				justify-content: center;
				margin: 5px;
				width: 100%;

				.description {
					height: 50px;
					width: 100%;
				}
				.value {
					border-top: 1px solid;
				}
			}
		}

	}
}
</style>
