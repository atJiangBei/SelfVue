import Dep from "./dep.ts"
export default class Watcher{
	vm:any
	value:any
	exp:string
	data:object
	cb
	constructor(
		vm:any,
		data:object,
		exp:string,
		cb
	){
		this.vm = vm
		this.data = data
		this.exp = exp
		this.cb = cb
		this.value = this.getValue()
	}
	update(){
		const exp = this.exp;
		const oldValue = this.value;
		let newValue:any;
		if(exp.indexOf(".")>-1){
			newValue = this.data
			const arr = exp.split(".")
			for(let i=0;i<arr.length;i++){
				newValue = newValue[arr[i]]
			}
		}else{
			newValue = this.data[this.exp]
		}
		if(oldValue!==newValue){
			this.value = newValue
			this.cb.call(this.vm,newValue,oldValue)
		}
	}
	getValue():any{
		Dep.target = this;
		let value:any;
		const exp = this.exp;
		if(exp.indexOf(".")>-1){
			value = this.data
			const arr = exp.split(".")
			for(let i=0;i<arr.length;i++){
				value = value[arr[i]]
			}
		}else{
			value = this.data[this.exp]
		}
		Dep.target = null
		return value
	}
}