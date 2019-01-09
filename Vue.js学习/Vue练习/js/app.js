// 注册
Vue.component('my-component', {

  template: `
	<div>
		<button v-on:click="plus">点击数字递增</button>
		<span>{{message}}</span>
		<button v-on:click="showhidded">点击控制显示隐藏</button>
		<span v-show="isShow">{{content}}</span>
	</div>
  `,
  data:function(){
  	return {
  		message:"1",
  		content:"hello,world",
  		isShow:true
  	}
  },
  methods:{
  	plus:function(){
  		this.message++;  		
  	},
  	showhidded:function(){
  		this.isShow=!this.isShow;
  	}
  }
})

// 创建根实例
new Vue({
  el: '#example'
})