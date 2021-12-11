let app = Vue.createApp({
  data() {
    return {
      greeting: 'hello',
      isVisible: false,
      isVisible2: false,
    }
  },
  methods: {
    togglebox(){
      this.isVisible = !this.isVisible
    },
    userinput(greeting){
        console.log(greeting)

    }
  }

})
app.mount('#app')
