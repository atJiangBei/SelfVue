import observer from "./observer/observer.ts"
import Watcher from "./observer/watcher.ts"
const person = {
	name:"大明",
	children:{
		one:"小明"
	}
}

function Vue(options){
	const data = this.data = observer(options.data)
	new Watcher(this,data,"children.one",function(nvl,ovl){
		console.log("我是name",nvl,ovl)
	})
}


const vm = new Vue({
	data:person
})

vm.data.children.one = "大明"
vm.data.children.one = "成年了"