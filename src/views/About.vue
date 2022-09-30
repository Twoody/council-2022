<template>
	<div class="about-wrapper">
		<div class="content-section even-section">
			<h1>About Tanner Woody</h1>
		</div>
		<div class="content-section odd-section">
			<h2>Endorsements</h2>
			<div class="flex-box">
				<ul>
					<li>
						<a
							class="linked"
							href="https://westlinnoregon.gov/citycouncil/council-president-rory-bialostosky"
							target="_blank"
						>
							City Councilor Rory Bialostosky
						</a>
					</li>
					<li>
						<a
							class="linked"
							href="https://westlinnoregon.gov/citycouncil/council-president-rory-bialostosky"
							target="_blank"
						>
							Vote Before Tolls + No Tolls Army + MLD Foundation - Founder + President - Dean Suhr
						</a>
					</li>

				</ul>
			</div>
		</div>
		<div class="content-section even-section">
			<h2>Credentials</h2>
			<div class="flex-box">
				<ul>
					<li>West Linn Tax Increment Finance (TIF) Committee Advisor</li>
					<li>Bolton Neighborhood Association (BNA) Member</li>
					<li>SOLVE Member</li>
					<li>BA Computer Science</li>
					<li>BS Mathematics</li>
					<li>University of Iowa Residential Halls President</li>
				</ul>
			</div>
		</div>
		<div class="content-section odd-section">
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
		<div class="content-section even-section hero">
			<h2>Family</h2>
			<div class="flex-box">
				<p class="flex-item">
					Betsy and Tanner met in Iowa, married in New York,
					and live in West Linn, in the Bolton neighborhood.
					In Bolton, they are growing their bio and foster family.
				</p>
				<p class="flex-item">
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
		<div class="content-section odd-section hero hero-2">
			<h2>Dogs</h2>
		</div>
		<div class="content-section even-section hero hero-3">
			<h2>Cat</h2>
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

	.linked {
		color: @myblack;
		font-weight: 900;
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
			margin-left: 17px;
			margin-right: 17px;
			text-align: left;
		}
		&:has(h1) {
			padding-bottom: 20px;
		}
		&.hero {
			background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .6)), url("https://firebasestorage.googleapis.com/v0/b/council-95b50.appspot.com/o/tanner-woody-dog-wedding.jpg?alt=media&token=3c30ad68-489f-491d-9bc0-0d8de1b4d06c");
			background-position: center center;
			background-repeat: no-repeat;
			background-size: cover;
			color: @color-pastel-blue;
			font-size: 17px;
			font-weight: 700;
			min-height: 400px;
			min-width: 100%;
			padding-top: 34px;
			position: relative;
			margin-bottom: 21px;
			li {
				color: @color-pastel-blue;
				font-weight: 900;
			}
		}
		&.hero-2 {
			background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url("https://firebasestorage.googleapis.com/v0/b/council-95b50.appspot.com/o/tanner-woody-dogs.jpg?alt=media&token=42d00ac1-3511-4996-b9b3-43304b62149e");
		}
		&.hero-3 {
			background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url("https://firebasestorage.googleapis.com/v0/b/council-95b50.appspot.com/o/tanner-woody-cat.jpg?alt=media&token=8f26f2ba-c511-4908-a204-e01012b24b28");
		}
	}
	h1 {
		all: unset;
		flex-grow:1;
		font-size: 35px;
		font-weight: 900;
		text-transform: uppercase;
		width: 100%;
	}

}
</style>
