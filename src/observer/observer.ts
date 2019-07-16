import Dep from "./dep.ts"
export default function observer(data):any{
	if(Object.prototype.toString.call(data)!=="[object Object]" && Object.prototype.toString.call(data)!=="[object Array]"){
		return data
	}
	const keys = Object.keys(data)
	keys.forEach(k=>{
		data[k] = observer(data[k])
	})
	return Observer(data)
}
function Observer(data){
	const dep = new Dep()
	console.log(dep)
	return new Proxy(data,{
		get:function getter(target, key, receiver):any{
			if(Dep.target){
				dep.addSub(Dep.target)
			}
			return Reflect.get(target, key, receiver);
		},
		set:function setter(target, key, value, receiver):any{
			if(value === Reflect.get(target, key)){
				return
			}
			Reflect.set(target, key, value, receiver);
			dep.notify()
		}
	})
}
