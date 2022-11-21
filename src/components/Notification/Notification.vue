<template>
	<div class="notification">
		<h2 class="subtitle">Оповещения о новых подборках</h2>

		<div class="content">
			<div class="notification__info">
				<p class="notification__text">Выберите, куда будут приходить уведомления при появлении автомобилей, которые подходят под критерии вашей подборки.</p>
				<h3 class="notification__subtitle-list">Уведомления</h3>
			</div>
			<div class="notification__controller">
				<section class="notification__list">
					<div class="notification__item">
						<input 
							type="radio" 
							name="noti" 
							id="off" 
							value="off" 
							class="notification__input"
							:checked="userData.notifytype === '-1'"
							@change="changeNoti('-1')"
						/>
						<label for="off" class="notification__label">
							<p>Выкл</p>
						</label>
					</div>
					<div class="notification__item">
						<input 
							type="radio" 
							name="noti" 
							id="email" 
							value="email" 
							class="notification__input" 
							:checked="userData.notifytype === '2'"
							@change="changeNoti('2')"
						/>
						<label for="email" class="notification__label">
							<p>Email</p>
						</label>
						<div class="notification__edit">
							<input 
								type="text" 
								name="email" 
								id="email" 
								class="notification__edit-input" 
								v-if="isEditEmail"
								:value="userData.email"
								@change="changeNoti([$event.target.value, 'email'])"
							/>
							<p v-if="userData.email && !isEditEmail">{{ userData.email }}</p>
							<img 
								:src="editSvg" 
								alt="edit" 
								class="notification__edit-img" 
								v-if="!isEditEmail"
								@click="isEditEmail = true" 
							/>
						</div>
					</div>
					<div class="notification__item">
						<input 
							type="radio" 
							name="noti" 
							id="telegram" 
							value="telegram" 
							class="notification__input" 
							:checked="userData.notifytype === '1'"
							@change="changeNoti('1')"
						/>
						<label for="telegram" class="notification__label">
							<p>Telegram ID</p>
						</label>
						<div class="notification__edit">
							<input 
								type="text" 
								name="telegram" 
								id="telegram" 
								class="notification__edit-input" 
								v-if="isEditTelegram" 
								:value="userData.telegramChat"
								@change="changeNoti([$event.target.value, 'telegramChat'])"
							/>
							<p v-if="userData.telegramChat && !isEditTelegram">{{ userData.telegramChat }}</p>
							<img 
								:src="editSvg" 
								alt="edit" 
								class="notification__edit-img" 
								@click="isEditTelegram = true"
								v-if="!isEditTelegram" 
							/>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	data() {
		return {
			editSvg: require('@/assets/svg/edit.svg'),
			isEditEmail: false,
			isEditTelegram: false
		}
	},

	methods: {
		...mapActions({
			changeNoti: 'data/changeNoti'
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
@import './Notification.scss';
</style>