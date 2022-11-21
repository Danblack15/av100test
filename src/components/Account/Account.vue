<template>
	<div class="account">
		<h2 class="subtitle">Учетная запись</h2>

		<section class="account__content content">
			<div class="account__item">
				<label for="company" class="account__label">Компания</label>
				<div class="account__item-input">
					<input 
						type="text" 
						name="company" 
						id="company" 
						class="account__input" 
						:value="userData.companyname"
						readonly
					/>
				</div>
			</div>
			<div class="account__item">
				<label for="login" class="account__label">Логин</label>
				<div class="account__item-input">
					<input 
						type="text" 
						name="login" 
						id="login" 
						class="account__input"
						:value="userData.login"
						readonly
					/>
				</div>	
			</div>
			<div class="account__item">
				<label for="tel" class="account__label">Номер телефона</label>
				<div class="account__item-input">
					<input 
						type="text" 
						name="tel" 
						id="tel" 
						class="account__input"
						:value="userData.phone"
						@change="changeAccount([$event.target.value, 'phone'])"
					/>
				</div>
			</div>
			<div class="account__item">
				<label for="name" class="account__label">Имя</label>
				<div class="account__item-input">
					<input 
						type="text" 
						name="name" 
						id="name" 
						class="account__input"
						:value="userData.fname"
						@change="changeAccount([$event.target.value, 'fname'])"
					/>
				</div>
			</div>
			<div class="account__item">
				<label for="surname" class="account__label">Фамилия</label>
				<div class="account__not-nec account__item-input">
					<input 
						type="text" 
						name="surname" 
						id="surname" 
						class="account__input"
						:value="userData.lname"
						@change="changeAccount([$event.target.value, 'lname'])"
					/>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	methods: {
		...mapActions({
			changeAccount: 'data/changeAccount'
		})
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
@import '@/assets/styles/settings';
@import './Account';
</style>