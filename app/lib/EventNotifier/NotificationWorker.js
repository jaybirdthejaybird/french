export default class NotificationWorker {
    static _instances;
    static _subscribers = {};
    constructor() { }
    static getInstance(name) {
        if (NotificationWorker._instances[name] === null) {
            NotificationWorker._instances[name] = new NotificationWorker();
            NotificationWorker._subscribers[name] = [];
        }
        return NotificationWorker._instances[name];
    }
    subscribe(instance, subscriber) {
        NotificationWorker._subscribers[instance].push(subscriber);
    }
    dispatch(instance) {
        NotificationWorker._subscribers[instance].forEach(subscriber => subscriber());
    }
}
