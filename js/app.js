let app = Vue.createApp({
  data() {
    return {
      title: 'my first vue app',
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
  }
})

app.mount('#app')