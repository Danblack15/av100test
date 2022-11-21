<template>
	<div class="checkbox">
		<input 
			type="checkbox" 
			:name="nameInput" 
			:id="nameInput" 
			class="checkbox__input"
			@change="check($event)"
		/>

		<label 
			:for="nameInput" 
			:class="['checkbox__label', {
				'checkbox__label--checked': selected
			}]"
		>
			<div class="checkbox__circle"></div>
		</label>
	</div>
</template>

<script>
export default {
	props: {
		nameInput: {
			type: String,
			required: true
		},

		selected: {
			type: Boolean,
			default: false
		}
	},

	data() {
		return {
			isChecked: false
		}
	},

	methods: {
		check(event) {
			this.isChecked = event.target.checked
			this.$emit('changeCheckbox')
		}
	},

	name: 'CheckBoxUI'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';
@import './CheckBoxUI.scss';
</style>