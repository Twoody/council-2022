<template>
	<div
		aria-describedby="dialogDesc"
		aria-labelledby="dialogTitle"
		aria-modal="true"
		class="modal-container"
		role="alertdialog"
	>
		<div
			role="document"
			class="modal-body"
		>
			<h2 id="dialogTitle">
				{{ header }}
			</h2>
			<p id="dialogDesc">
				The City Council election has been moved to:
				<br><strong>March 2023</strong>.
			</p>
			<p>
				Please participate in the March election!
			</p>

			<div class="modal-action">
				<MyButton
					class="modal-button"
					@click="$emit('confirm')"
					invert-colors
				>
					Got it!
				</MyButton>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from "vue"
import MyButton from "components/buttons/MyButton"

export default defineComponent({
	name: "InfoModal",
	components:
	{
		MyButton,
	},
	props: [
		"header",
	],
	emits: [
		"confirm",
	],
})
</script>

<style>
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #cececeb5;
}
.modal-body {
  background-color: #fff;
  border: 2px solid #74a2cf;
  border-radius: 10px;
  text-align: center;
  padding: 20px 40px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
}
.modal-action {
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: center;
}
.modal-button {
  cursor: pointer;
  height: 30px;
  padding: 0 25px;
  border: 2px solid #74a2cf;
  border-radius: 5px;
  background-color: #80b2e4;
  color: #fff;
}
.modal-close {
  cursor: pointer;
  position: relative;
  align-self: end;
  right: -33px;
  top: -17px;
}
</style>
