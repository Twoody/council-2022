<template>
	<div class="dialog-modal" v-if="visible">
		<div class="dialog-overlay" @click="close"/>
		<div class="dialog-content">
			<slot/>
		</div>
	</div>
</template>

<script>
export default {
	name: "DialogModal",
	props: {
		visible: {
			required: true,
			type: Boolean,
		},
	},
	methods: {
		close () 
		{
			this.$emit("close")
		},
	},
}
</script>

<style>
.dialog-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog-content {
  position: relative;
  z-index: 1;
  max-width: 80%;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
