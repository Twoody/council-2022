<template>
	<div class="events-wrapper">
		<div class="content-section even-section">
			<h1>Events to be Attended</h1>
			<div class="flex-box">
				<p class="flex-item">
					These are the events Woody actively plans to attend.
				</p>
			</div>
		</div>
		<div class="content-section odd-section">
			<h2>Neighborhood Meetings</h2>
			<div class="flex-box">
				<ul>
					<li>
						a
					</li>
					<li>
						b
					</li>
				</ul>
			</div>
		</div>
		<div class="content-section odd-section">
			<h2>Neighborhood Meetings</h2>
			<div class="flex-box">
				<ul>
					<li>
						a
					</li>
					<li>
						b
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TrackMe",
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
.events-wrapper {
	display: flex;
	flex-direction: column;
	width: 100%;

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
		&:has(h1) {
			padding-bottom: 20px;
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
