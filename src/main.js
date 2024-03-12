import Vue, { computed } from 'vue'
// import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  computed : {
    
    ViewComponent(){
      let data = ""
      if (window.location.pathname){
        data = "App"
      }
      console.log(data);
      return data
    }
  },
  render: h => h(computed),
}).$mount('#app')


// import Vue from 'vue'
// import App from './App.vue'
// // import routes from './components/routes'

// new Vue({
//   el: '#app',
//   data: {
//     currentRoute : window.location.pathname
//   },
//   computed: {
//     ViewComponent () {
//       console.log(window.location.pathname)
//         console.log(123);
//       const matchingView = this.currentRoute
//       return matchingView
//         ? require('.' + matchingView + '.vue')
//         : require('./App.vue')
//     }
//   },
  
//     render: h => h(App)
  
// })

