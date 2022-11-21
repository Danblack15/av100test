<template>
	<div class="call">
		<div class="call__general subtitle">
			<h2 class="call__title">Звонок через SIP</h2>
			<CheckBoxUI 
				nameInput="call"
				class="call__checkbox"
				@changeCheckbox="changeSelectedCall"
				:selected="userData.calltype === '1'"
			/>
		</div>

		<div class="call__content content">
			<p>Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так, будто звонки совершаются с разных номеров.</p>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	methods: {
		...mapActions({
			changeSelectedCall: 'data/changeCallSIP'
		}),
	},

	computed: {
		...mapGetters({
			userData: 'data/getUserData'
		})
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';
@import '@/assets/styles/settings.scss';
@import './CallSIP.scss';
</style>