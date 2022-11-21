import axios from 'axios'

const login = '9194427254',
	password = '8387021355',
	apiKey = '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9'

export const DataModule = {
	state: () => ({
		loginData: null,
		userData: null,
		statusSubmit: 0
	}),

	getters: {
		getUserData(state) {
			return state.userData
		},

		getStatusSubmit(state) {
			return state.statusSubmit
		}
	},

	mutations: {
		setCallSIP(state) {
			if (state.userData.calltype === '1')
				state.userData.calltype = '0'
			else
				state.userData.calltype = '1'
		},

		setLoginData(state, data) {
			state.loginData = data
		},

		setUserData(state, data) {
			state.userData = data
		},

		setChangeNoti(state, value) {
			if (Array.isArray(value))
				state.userData[value[1]] = value[0]
			else
				state.userData.notifytype = value
		},

		setPutStatus(state, status) {
			state.statusSubmit = status
		}
	},

	actions: {
		changeCallSIP({ commit }) {
			commit('setCallSIP')
		},

		changeNoti({ commit }, value) {
			commit('setChangeNoti', value)
		},

		loginUser({ commit, dispatch }) {
			const api = `https://api.av100.ru/v3/login`,
				config = {
					headers: {
						'Content-Type': 'application/json',
						'X-Api-Key': apiKey,
						'X-Device-OS': null
					}
				},
				data = {
					"login": login,
					"password": password,
					"fromuser": 0
				}

			axios.post(api, data, config)
				.then(res => {
					let loginData = {
						token: res.data.token,
						userId: res.data.user.id
					}
					commit('setLoginData', loginData)
					dispatch('getUserData')
				})
				.catch(error => console.log(error))
		},

		getUserData({ commit, state }) {
			const api = `https://api.av100.ru/v3/user/${state.loginData.userId}`,
				config = {
					headers: {
						'Content-Type': 'application/json',
						'X-Api-Key': apiKey,
						'X-User-Token': state.loginData.token,
						'X-Device-OS': null
					}
				},
				data = {
					'userId': state.loginData.userId,
				}

			axios.get(api, config, data)
				.then(res => {
					commit('setUserData', res.data)
				})
				.catch(error => console.log(error))
		},

		putUserData({ commit, state }) {
			const api = `https://api.av100.ru/v3/user/${state.loginData.userId}`,
				config = {
					headers: {
						'Content-Type': 'application/json',
						'X-Api-Key': apiKey,
						'X-User-Token': state.loginData.token,
						'X-Device-OS': null
					}
				},
				data = state.userData

			axios.put(api, data, config)
				.then(res => {
					commit('setPutStatus', res.status)

					setTimeout(() => {
						commit('setPutStatus', 0)
					}, 4000)
				})
				.catch(error => console.log(error))
		}
	},

	namespaced: true
}