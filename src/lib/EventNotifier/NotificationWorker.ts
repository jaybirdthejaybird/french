export default class NotificationWorker {
    private static _instances: {[name: string]: NotificationWorker}
    private static _subscribers: {[name: string]: Array<Function>} = {}
    private constructor() {}
    static getInstance(name: string): NotificationWorker {
        if (NotificationWorker._instances[name] === null) {
            NotificationWorker._instances[name] = new NotificationWorker()
            NotificationWorker._subscribers[name] = []
        }
        return NotificationWorker._instances[name]
    }
    subscribe(instance: string, subscriber: Function): void {
        NotificationWorker._subscribers[instance].push(subscriber)
    }
    dispatch(instance: string): void {
        NotificationWorker._subscribers[instance].forEach(subscriber => subscriber())
    }
}