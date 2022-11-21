<template>
	<div class="checkbox-def">
		<input 
			type="checkbox" 
			:name="name" 
			:id="name" 
			class="checkbox-def__input"
			:checked="checked"
			@change="$emit('changeCheck')"
		/>
		<label :for="name" class="checkbox-def__label">
			<div class="checkbox-def__value">
				<img :src="checkMarkSVG" alt="checkmark" />
			</div>
		</label>
	</div>
</template>

<script>
export default {
	data() {
		return {
			checkMarkSVG: require('@/assets/svg/checkmark.svg')
		}
	},	

	props: {
		name: {
			type: String,
			required: true
		},
		checked: {
			type: Boolean,
			defualt: false
		}
	},

	name: 'CheckBoxDefUI'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';
@import './CheckBoxDefUI.scss';
</style>