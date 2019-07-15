export default class Dep{
	static target = null
	public subs:[]
	constructor(){
		this.subs = []
	}
	private addSub(sub:object){
		this.subs.push(sub)
	}
	private notify(){
		const subs = this.subs
		let l = subs.length
		while(l--){
			subs[l].update()
		}
	}
}