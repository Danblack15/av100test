<template>
  <div class="settings">
    <MessagePutUser 
      :status="statusSubmit" 
      :class="['settings__message', {
        'settings__message--show': statusSubmit !== 0
      }]"
    >
      {{statusSubmit === 200 ? 'Сохранено.' : 'Ошибка.'}}
    </MessagePutUser>
    <h1 class="settings__title">Настройки</h1>
    <section v-if="userData">
      <CallSIP class="settings__item"/>
      <Account class="settings__item"/>
      <Notification class="settings__item"/>
      <OtherSettings class="settings__item"/>
      <ButtonUI class="settings__submit" @click="putUserData">Сохранить</ButtonUI>
    </section>
  </div>
</template>

<script>
import CallSIP from '@/components/CallSIP/CallSIP'
import Account from '@/components/Account/Account'
import Notification from '@/components/Notification/Notification'
import OtherSettings from '@/components/OtherSettings/OtherSettings'
import MessagePutUser from '@/components/MessagePutUser/MessagePutUser'

import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    CallSIP,
    Account,
    Notification,
    OtherSettings,
    MessagePutUser
  },  

  mounted() {
    this.login()
  },

  methods: {
    ...mapActions({
      login: 'data/loginUser',
      putUserData: 'data/putUserData'
    })
  },

  computed: {
    ...mapGetters({
      userData: 'data/getUserData',
      statusSubmit: 'data/getStatusSubmit'
    })
  },

  name: 'HomeView'
}
</script>

<style lang="scss" scoped>
@import './HomePage.scss';
</style>

