import SubclassNotifier from "./SubclassNotifier"

export default class SubclassNotifierFactory implements SubclassNotifier{
    private static _instances: {[instance: string]: SubclassNotifier}
    private static _subscribers: {[instance: string]: Array<Function>} = {}
    private constructor() {}
    static getInstance(name: string): SubclassNotifier {
        if (SubclassNotifierFactory._instances[name] === null) {
            SubclassNotifierFactory._instances[name] = new SubclassNotifierFactory()
            SubclassNotifierFactory._subscribers[name] = []
        }
        return SubclassNotifierFactory._instances[name]
    }
    subscribe(instance: string, subscriber: Function): void {
        SubclassNotifierFactory._subscribers[instance].push(subscriber)
    }
    dispatch(instance: string): void {
        SubclassNotifierFactory._subscribers[instance].forEach(subscriber => subscriber())
    }
}