export default class Dep{
	static target = null
	public subs:any []
	constructor(){
		this.subs = []
	}
	private addSub(sub){
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