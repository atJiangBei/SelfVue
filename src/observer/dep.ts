export default class Dep{
	static target = null
	public subs:any []
	constructor(){
		this.subs = []
	}
	addSub(sub:object){
		this.subs.push(sub)
	}
	notify(){
		const subs = this.subs
		let l = subs.length
		while(l--){
			subs[l].update()
		}
	}
}