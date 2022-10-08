<template>
	<MyButton class="email-button">
		<a
			class="linked"
			:href="mailto"
			target="_blank"
		>
			<!-- TODO svg -->
			<span>Email</span>
		</a>
	</MyButton>
</template>

<script>
import MyButton from "components/buttons/MyButton"

export default {
	name: "EmailButton",
	components:
	{
		MyButton,
	},
	props: {
		/** Who the email is going to */
		email:
		{
			default: "Tanner.L.Woody@gmail.com",
			required: false,
			type: String,
		},

		/** Is current filter being applied */
		inactive: Boolean,
	},
	computed:
	{
		/**
		 * @todo pull make email a prop
		 * @returns {string} An email link disguised as a button
		 */
		mailto ()
		{
			return `mailto:${this.email}`
		},
	},
}
</script>

<style scoped lang="less">
@import "../../../assets/styles/styles";
.email-button {
	min-height: 32px;
	margin-left: 10px;
	margin-right: 10px;
	max-width: 200px;
	min-width: 100px;
	width: auto;

	span {
		color: @myblack;
	}
}

</style>

