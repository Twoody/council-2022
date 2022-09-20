<template>
	<div class="about-wrapper">
		<h1>About Tanner Woody</h1>
		<div class="content-section odd-section">
			<h2>Endorsements</h2>
			<div class="flex-box">
				<ul>
					<li>
						City Councilor Rory Bialostosky
					</li>
				</ul>
			</div>
		</div>
		<div class="content-section even-section">
			<h2>The Site</h2>
			<div class="flex-box">
				<p class="flex-item">
					This site is put together by, Tanner Woody, himself.
					This site would not be possible without the support of Tanner's spouse,
					Betsy Spencer.
				</p>
				<p class="flex-item">
					Tanner wrote this site using Vue, firebase, jest, vuex, and other technologies.
				</p>
			</div>
		</div>
		<div class="content-section odd-section">
			<h2>Family</h2>
			<div class="flex-box">
				<p class="flex-item">
					Betsy and Tanner met in Iowa, married in New York,
					and live in West Linn, in the Bolton neighborhood.
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
		</div>
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

<style lang="less">
@import "../../assets/styles/styles";
/* TODO: Make max-width scroll window scroll into margins */
.about-wrapper {
	display: flex;
	flex-direction: column;
	width: 100%;

	h1 {
		flex-grow:1;
		width: 100%;
	}
	.content-section {
		align-items: center;
		align-content: center;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: center;
		padding-bottom: 50px;
		padding-top: 20px;
		width: 100%;

		.flex-box {
			text-align: left;
		}
	}
}
</style>
