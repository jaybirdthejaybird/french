export default class SubclassNotifierFactory {
    static _instances;
    static _subscribers = {};
    constructor() { }
    static getInstance(name) {
        if (SubclassNotifierFactory._instances[name] === null) {
            SubclassNotifierFactory._instances[name] = new SubclassNotifierFactory();
            SubclassNotifierFactory._subscribers[name] = [];
        }
        return SubclassNotifierFactory._instances[name];
    }
    subscribe(instance, subscriber) {
        SubclassNotifierFactory._subscribers[instance].push(subscriber);
    }
    dispatch(instance) {
        SubclassNotifierFactory._subscribers[instance].forEach(subscriber => subscriber());
    }
}
