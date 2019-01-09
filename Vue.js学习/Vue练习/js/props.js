Vue.component("my-component",{
	props:['message','name','age'],
	data:function(){
		return{
			message1:this.message+"：Prop 作为初始值传入后，子组件想把它当作局部数据来用。定义一个局部变量，并用 prop 的值初始化它"
		}
	},
	computed:{
		message2:function(){
			return this.message+"：Prop 作为原始数据传入，由子组件处理成其它数据输出。定义一个计算属性，处理 prop 的值并返回："
		}
	},
	template:`
		<div>
			<p>{{message1}}</p>
			<p>{{message2}}</p>
			<p>{{message}},大家好,我叫{{name}},今年{{age}}了</p>
		</div>
	`,

})
var appOne=new Vue({
	el:"#example"
})

Vue.component('project',{
	props:['message'],
	data:function(){
		return {
			count:this.message
		}
	},
	computed:{
		normalizedSize:function(){
			return this.message.trim().toLowerCase()
		}
	},

	template:`
		<div>
			<p>{{message}}---{{normalizedSize}}</p>
			<p>{{count}}</p>
		</div>
	`
})
var appTwo=new Vue({
	el:"#app",
	data:{
		mymessage:"你好"
	}
})