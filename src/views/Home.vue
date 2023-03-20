<template>


	<div class="home-wrapper">
			<SideMenu :contents="CONTENTS_HOME" />
		<section id="flyer">
			<div
				class="hero flex-box"
				title="West Linn Flyer"
			>
				<h2 class="flex-item">
					Hi, I am Tanner Woody.
				</h2>
			</div>
		</section>

		<section id="platform">
			<div class="accordion-sections even-section">
				<h2>
					Platform focuses
				</h2>
				<div class="flex-box">
					<p class="flex-item">
						Tanner will focus on the future of West Linn with both PRESENT and 40 year goals
						in mind.
						These focuses currently span:
						<ul>
							<li>NO Tolling (and endorsed by Vote Before Tolls - Dean Suhr)</li>
							<li>Proper 205 Restructure</li>
							<li>Highway 43 Roundabouts</li>
							<li>Highway 43 Transfer of Ownership</li>
							<li>The Waterfront Project</li>
							<li>Driving Local Business Success</li>
							<li>Fostering Community Ties</li>
							<li>Riverside High School Organization</li>
							<li>Advocating for Reproductive Rights</li>
						</ul>
					</p>
					<p class="flex-item">
						Tanner lives in the epicenter of the major financial projects:
						The Bolton Neighborhood.

						The West Linn council needs Bolton representation for these events, and 
						Tanner will provide that representation.
					</p>
					<p class="flex-item">
						Currently, Tanner is an active member of the Bolton Neighborhood Association
						and on the Tax Increment Financing (TIF) Advisory Committee.
						We need to extend this representation to the City Council itself,
						to make ODOT work for us.
					</p>
				</div>
			</div>
		</section>

		<section id="tolling">
			<div class="accordion-sections odd-section">
				<h2>
					Tolling
				</h2>
				<div class="flex-box">
					<p class="flex-item">
						Tanner believes that tolling needs to be done with equal payments in mind,
						and as many of us frequent Oregon City for practical services,
						<b>ODOTs tolling does not affect us equally.</b>
					</p>
				</div>
			</div>
		</section>
		<section id="economy">
			<div class="accordion-sections even-section">
				<h2>
					Economy
				</h2>
				<div class="flex-box">
					<p class="flex-item">
						Right now, West Linn is undergoing "Envisionment Planning" for the
						Waterfront Project. Tanner will represent Bolton and West Linn by:
						<ul>
							<li>Strengthening the waterfront plan, for Bolton residents</li>
							<li>Building better business and providing more services</li>
							<li>Advocating for existing businesses</li>
						</ul>
					</p>
					<p class="flex-item">
						<b>Tanner will do this with Maddax Woods to McLean House preservation in mind.</b>
					</p>
				</div>
			</div>
		</section>
		<div class="hero hero-2 odd-section flex-box" title="Meet Tanner Woody"/>
		<section id="equality">
			<div class="accordion-sections even-section">
				<h2>
					Equality
				</h2>
				<div class="flex-box">
					<p class="flex-item">
						Tanner believes that tolling needs to be done with equal payments in mind,
						and as many of us frequent Oregon City for practical services,
						<b>ODOTs tolling does not affect us equally.</b>
					</p>
					<p class="flex-item">
						Anyone can belong anywhere, and residents deserve to be safe in our community.
						Tanner will stand for all residents and their rights to live their lives freely of
						bigotry and prejudice.
					</p>
				</div>
			</div>
		</section>
		<section id="environment">
			<div class="accordion-sections odd-section hero hero-3" title="Tanner Woody and Wife">
				<h2>
					Environment
				</h2>
				<div class="flex-box">
					<p class="flex-item">
						West Linn's beauty is captured in its rivers, parks, and trails.
						The West Linn Parks and Rec. Department have done (and continue to do)
						a great job.
						SOLVE and community involvement display the importance of these assets. 
					</p>
					<p class="flex-item">
						Tanner will work with our existing council, ODOT, P&amp;R, and community
						to maintain and preserve our parks and recreational facilities.
					</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import {CONTENTS_HOME} from "constants/contents.js"
import SideMenu from "components/menus/SideMenu"
import TableOfContents from "components/entities/TableOfContents"

export default {
	name: "Home",
	components:
	{
		SideMenu,
		TableOfContents,
	},
	data () 
	{
		return {
			CONTENTS_HOME: CONTENTS_HOME,
		}
	},
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/styles";
.home-wrapper {
	display: flex;
	flex-direction: column;
	width: 100%;

	h2 {
		font-size: clamp(35px, 3vw, 45px);
		font-weight: 900;
		margin-bottom: 0px;
		margin-top: 0px;
		text-transform: uppercase;
	}

	.accordion-sections {
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
	}
	.hero {
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url("https://firebasestorage.googleapis.com/v0/b/council-95b50.appspot.com/o/banner.png?alt=media&token=72193d8d-4eca-4739-9c04-b7b852100ca7");
		background-position: center center;
		background-repeat: no-repeat;
		background-size: contain;
		color: white;
		font-size: 33px;
		min-height: 400px;
		min-width: 100%;
		padding-top: 34px;
		position: relative;
		margin-bottom: 21px;

		a {
			font-color: @myblack;
			font-size: 38px;
			font-weight: 900;
			text-transform: uppercase;
		}
	}
	.hero-2 {
		background-image: url("https://firebasestorage.googleapis.com/v0/b/council-95b50.appspot.com/o/council-ice-cream.jpg?alt=media&token=e3be91be-d0fd-44e4-a69a-4448b5781e7a");
		background-size: contain;
		margin-top: 21px;
	}
	.hero-3 {
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .6)), url("https://firebasestorage.googleapis.com/v0/b/council-95b50.appspot.com/o/tanner-woody-and-betsy.jpg?alt=media&token=ae6a4ee8-3f4f-45c6-8d8c-a1e989c31ee4");
		background-size: cover;
		color: @color-pastel-blue;
		font-size: 17px;
		font-weight: 700;
		margin-bottom: 0;
		min-height: 911px;
	}
	ol {
		text-align: left;
	}
}
</style>
