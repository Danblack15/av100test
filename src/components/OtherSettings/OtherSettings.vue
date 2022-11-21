<template>
	<div class="other">
		<h2 class="subtitle">Прочие настройки</h2>
		<div class="other__content content">
			<div class="other__time">
				<label for="time" class="other__label">Часовой пояс</label>
				<div class="other__select">
					<div 
						:class="['other__select-name', {
							'other__select-name--opened': selectIsOpen
						}]" 
						@click="selectIsOpen = !selectIsOpen"
					>
						<input type="text" :placeholder="selectedCityFun" class="other__input" readonly/>
					</div>
					<section class="other__select-wrapper" v-if="selectIsOpen">
						<ul class="other__select-list">
							<li 
								:class="['other__select-item', {
									'other__select-item--selected': city.city == selectedCityFun
								}]" 
								v-for="city in allCitiesState" 
								:key="city.id"
								@click="chageCityFun"
							>
								<img 
									:src="checkMark" 
									alt="selected" 
									class="other__select-checkmark"
									v-if="city.city == selectedCityFun"
								/>
								{{ city.city }}
							</li>
						</ul>
					</section>
				</div>
			</div>
			<div class="other__autotrans">
				<div class="other__autotrans-general">
					<CheckBoxDefUI 
						name="auto-trans" 
						:checked="!userData.locklentaupdate" 
					/>
					<p class="other__autotrans-text">Автоматически переходить к новым объявлениям</p>
				</div>
				<div class="other__autotrans-hint">
					<img src="@/assets/img/hint.png" alt="hint" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import allCities from '@/cities.json'

export default {
	data() {
		return {
			selectIsOpen: false,
			checkMark: require('@/assets/svg/checkmark.svg'),
			allCitiesState: allCities
		}
	},
	
	methods: {
		...mapActions({
			chageCity: 'data/changeCity'
		}),

		chageCityFun(city) {
			this.selectIsOpen = false
		}
	},

	computed: {
		...mapGetters({
			userData: 'data/getUserData'
		}),

		selectedCityFun() {
			const cityId = this.userData.timezone

			for (let i = 0; i < allCities.length; i++) {
				const city = allCities[i]

				if (city.id == cityId)
					return city.city
			}

			return 'Город не найден'
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';
@import '@/assets/styles/settings.scss';
@import './OtherSettings.scss';
</style>