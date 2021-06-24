let app = Vue.createApp({
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    closeModal() {
      this.showModal = !this.showModal
    }
  },
  metaInfo() {
    return {
        title: this.$i18n.t('home.seo.title'),
        titleTemplate: '%s - ' + config.app_name,
        htmlAttrs: {
            lang: config.lang,
            amp: undefined
        }
    }
  }
})

app.mount('#app')