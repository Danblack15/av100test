<template>
	<div :class="['message', {
		'message--success': status === 200,
		'message--error': status !== 200
	}]">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		status: {
			type: Number,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';
@import './MessagePutUser.scss';
</style>