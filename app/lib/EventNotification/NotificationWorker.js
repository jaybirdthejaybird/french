class NotificationWorker {
    static _instance;
    subscribers = [];
    constructor() { }
    static get instance() {
        if (NotificationWorker._instance === null) {
            NotificationWorker._instance = new NotificationWorker();
        }
        return NotificationWorker._instance;
    }
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }
    dispatch() {
        this.subscribers.forEach(subscriber => subscriber());
    }
}
