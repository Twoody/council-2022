<template>
	<div class="about-wrapper">
		<div class="content-section even-section">
			<h1>About Tanner Woody</h1>
		</div>
		<section id="endorsements">
			<div class="content-section odd-section">
				<h2>Endorsements</h2>
				<div class="flex-box">
					<ul>
						<li>
							<a
								class="linked"
								:href="URLS.WEST_LINN.RORY"
								target="_blank"
							>
								City Councilor - Rory Bialostosky
							</a>
						</li>
						<li>
							<a
								class="linked"
								:href="URLS.ENDORSERS.THOMAS_FRANK"
								target="_blank"
							>
								Former City Councilor - Thomas A. Frank 
							</a>
						</li>
						<li>
							<a
								class="linked"
								:href="URLS.WEST_LINN.BOLTON"
								target="_blank"
							>
								Bolton NA Vice President - Erich Kunrath
							</a>
						</li>
						<li>
							<a
								class="linked"
								:href="URLS.WEST_LINN.BOLTON"
								target="_blank"
							>
								Bolton Treasurer - Walt Swan
							</a>
						</li>
						<li>
							<a
								class="linked"
								:href="URLS.ENDORSERS.ALMA_COSTON"
								target="_blank"
							>
								Friends of Maddax Member - Alma Coston
							</a>
						</li>
						<li>
							<a
								class="linked"
								:href="URLS.ENDORSERS.SAFE_AND_HOUND"
								target="_blank"
							>
								Business Owner - Crystal Jayne
							</a>
						</li>
						<li>
							<a
								class="linked"
								:href="URLS.ENDORSERS.DEAN_SUHR"
								target="_blank"
							>
								Vote Before Tolls + No Tolls Army + MLD Foundation -
								Founder + President -
								Dean Suhr
							</a>
						</li>
						<li>
							Engaged Citizens:
							<ul>
								<li>
									Willie Hughey
								</li>
								<li>
									Bill Gilbert
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<section id="credentials">
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
		</section>
		<section id="engineer">
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
		</section>
		<section id="family">
			<div class="content-section even-section hero" title="Tanner Woody at Wedding">
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
		</section>
		<section id="dogs">
			<div class="content-section odd-section hero hero-2" title="Running Mates">
				<h2>Dogs</h2>
				<div class="flex-box">
					<p class="flex-item">
						Meet Tanner Woody's "running mates": Ruby and Bro'Dee.
					</p>
					<p class="flex-item">
						These two are rescues from Texas and Iowa, respectively.
					</p>
				</div>
			</div>
		</section>
		<section id="cat">
			<div class="content-section even-section hero hero-3" title="Cat Portrait">
				<h2>Cat</h2>
				<div class="flex-box">
					<p class="flex-item">
						Kouldbie has been saved in multiple ways.
					</p>
					<p class="flex-item">
						She was first saved by
						Betsy when she was a lost kitten in the Dominican Republic.
						She was then saved when she was hit by a rock and lost her eye.
						Finally, she was saved by a one-way ticket to the USA from the 
						Dominican Republic.
					</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import {URLS} from "constants/urls.js"

export default {
	name: "About",
	components:
	{},
	data () 
	{
		return {
			URLS: URLS,
		}
	},
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
			background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("https://firebasestorage.googleapis.com/v0/b/council-95b50.appspot.com/o/tanner-woody-dogs.jpg?alt=media&token=42d00ac1-3511-4996-b9b3-43304b62149e");
		}
		&.hero-3 {
			background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("https://firebasestorage.googleapis.com/v0/b/council-95b50.appspot.com/o/tanner-woody-cat.jpg?alt=media&token=8f26f2ba-c511-4908-a204-e01012b24b28");
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
