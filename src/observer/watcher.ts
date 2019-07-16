import Dep from "./dep.ts"
export default class Watcher{
	value:any
	exp:string
	constructor(
		data:object,
		exp:string,
		cb:function
	){
		this.value = this.getValue()
		this.data = data
		this.exp = exp
		this.cb = cb
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
			newValue = this.data
		}
	}
	getValue():any{
		Dep.target = this;
		
	}
}