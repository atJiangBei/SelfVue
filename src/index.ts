import Dep from "./observer/dep.ts"
import observer from "./observer/observer.ts"
import Watcher from "./observer/watcher.ts"
const person = {
	name:"大明"
}

observer(person)