<template>
	<button
		class="my-button-wrapper"
		:class="classes"
		:disabled="disabled"
		:type="submit ? 'submit' : 'button'"
		@animationend="onShakeEnd()"
		@click.stop="onClick()"
	>
		<div
			v-if="badgeContent"
			class="badge"
		>
			{{ badgeContent }}
		</div>

		<transition
			name="fade"
			mode="out-in"
		>
			<div
				:key="transitionKey"
				ref="slotWrapper"
			>
				<Spinner v-if="inProgress" />
				<div v-else>
					<slot/>
					<font-awesome-icon
						v-if="success"
						class="check-icon"
						:icon="['fa', 'check']"
					/>
				</div>
			</div>
		</transition>
	</button>
</template>

<script>
import Spinner from "components/common/loading/Spinner"

export default
{
	name: "MyButton",
	components: {
		Spinner,
	},
	props:
	{
		active: Boolean, 

		/** Content to show in a badge */
		badgeContent: String,

		/** Is button disabled */
		disabled: Boolean,

		/** Is button currently doing a job */
		inProgress: Boolean,

		inactive: Boolean, 

		/** Whether is a smaller pill button or not */
		pill: Boolean,

		/** Is button for submitting */
		submit: Boolean,

		/** Is button showing success */
		success: Boolean,
	},
	data ()
	{
		return {
			/** Whether button is currently doign a thing locally */
			doingWork: false,

			/** Tricking vue into redoing a computed ref */
			isMounted: false,

			/** Whether button is shake animating */
			shaking: false,
		}
	},
	computed:
	{
		/**
		 * @returns {object} classes -- Object of applied css classes and rules
		 */
		classes ()
		{
			const classes = {
				button: true,
			}
			classes.active = !this.inactive
			classes.disabled = this.disabled || this.inProgress
			classes.inactive = this.inactive
			classes.pill = this.pill
			classes.progress = this.inProgress
			classes.success = this.success
			classes.shake = this.shaking

			return classes
		},

		/** @returns {string} Just flip the switch in parent to do transitions */
		transitionKey () 
		{
			if (!this.isMounted)
			{
				return ""
			}
			let content = this.$refs && this.$refs.slotWrapper ?
				this.$refs.slotWrapper.innerHTML : ""
			return `${this.inProgress} ${this.success} ${content}`
		},
	},
	methods:
	{
		// Begin the shaking animaion
		beginShake ()
		{
			this.shaking = true
		},

		// The user wants to click the button. Propogate event if button is not disabled.
		onClick ()
		{
			if (this.doingWork) 
			{
				return
			}
			this.doingWork = true

			if (this.disabled)
			{
				// Button is disabled: play animation and send event
				this.beginShake()
				event.preventDefault()
				this.doingWork = false
				this.$emit("click-prevented")
			}
			else
			{
				// Send click event as normal
				this.$emit("click")

				// Wait for animation
				this.doingWork = false
			}
		},

		// Reset the shake class so the button can shake again
		onShakeEnd ()
		{
			this.shaking = false
		},
	},
	mounted ()
	{
		this.isMounted = true
	},
}
</script>

<style scoped lang="less">
@import "../../../assets/styles/styles";

.my-button-wrapper {
	background: @color-pastel-blue;
	border: none;
	border-radius: 12px;
	color: @myblack;
	cursor: pointer;
	font-size: 18px;
	min-height: 52px;
	transition: all 0.2s ease;
	outline: none;
	user-select: none;
	width: 100%;

	&.active {
		filter: brightness(110%);
	}
	&.disabled {
		cursor: not-allowed;
		filter: brightness(80%);
		opacity: 0.9;
	}
	&.inactive {
		filter: brightness(90%);
	}
	&.progress {
		cursor: wait;
		text-align: center;
	}
	&.pill {
		border: 1px solid @myblack;
		border-radius: 9px;
		color: @myblack;
		flex-grow: 0;
		flex-shrink: 0;
		font-family: monospace;
		font-size: 13px;
		margin: 5px;
		padding: 3px;
		padding-left: 7px;
		padding-right: 7px;
		min-height: 0px;
		min-width: 69px;
		width: auto;
	}
	&.success
	{
		line-height: 20px;
	}
	.badge {
		@diameter: 22px;
		@radius: calc(@diameter / 2);
		align-items: center;
		background: red;
		border: none;
		border-radius: 50%;
		color: #FFFFFF;
		display: flex;
		font-size: 12px;
		height: @diameter;
		justify-content: center;
		position: absolute;
		right: calc(@radius * -1);
		top: calc(@radius * -1);
		transition: all .3s;
		width: @diameter;
		z-index: 100; 
	}
}

.fade-enter-active, .fade-leave-active {
  opacity: 0;
  transition: all .1s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.shake {
	animation: shake 1s;
}

@keyframes shake {
	10%, 90% {
		transform: translate3d(-1px, 0, 0);
	}

	20%, 80% {
		transform: translate3d(2px, 0, 0);
	}

	30%, 50%, 70% {
		transform: translate3d(-4px, 0, 0);
	}

	40%, 60% {
		transform: translate3d(4px, 0, 0);
	}
}
@media (hover: hover) {
	.my-button-wrapper {
		&:not(.disabled):hover  {
			box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
			border: 1px solid @color-pastel-blue;;
			cursor: pointer;
			filter: brightness(102%);
			transform: scale(1.07);
		}

	}
	&.disabled:hover  {
		box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.5);
		filter: brightness(79%);
	}
}

.my-button-wrapper {
	&:not(.disabled):focus  {
		border: none;
		filter: brightness(102%);
		transform: scale(1.02);
	}
	&:not(.disabled):active  {
		box-shadow: 3px -2px 3px 0px rgb(0 0 0 / 50%);
		border: 1px solid @color-pastel-blue;;
		cursor: pointer;
		filter: brightness(102%);
		outline: 1px solid @color-pastel-blue;
		transform: scale(1.07);
	}
	&.disabled:active  {
		box-shadow: 1px -1px 1px 0px rgb(0 0 0 / 40%);
		outline: 4px solid @color-focus;
		filter: brightness(73%);
	}
}
</style>

