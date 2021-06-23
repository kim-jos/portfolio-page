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
  }
})

app.mount('#app')