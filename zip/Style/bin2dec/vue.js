var app = new Vue({
  el:'#app',
  data: {
    messaged:'hello'
  },
  method: {
    messageChanged: function(){
      messaged='change hellox'
    }
  }
})

// var obj = {
//   foo: 'bar'
// }
// Object.freeze(obj)
// obj.foo='app'
// console.log(obj.foo)

