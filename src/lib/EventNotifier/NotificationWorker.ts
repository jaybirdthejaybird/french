import Notifier from "./Notifer.js"

export default class NotificationWorker implements Notifier {
    private static _instance: Notifier
    private static _subscribers: Array<Function> = []
    private constructor() {}
    static get instance(): Notifier {
        if (NotificationWorker._instance === null) {
            NotificationWorker._instance = new NotificationWorker()
        }
        return NotificationWorker._instance
    }
    subscribe(subscriber: Function): void {
        NotificationWorker._subscribers.push(subscriber)
    }
    dispatch(): void {
        NotificationWorker._subscribers.forEach(subscriber => subscriber())
    }
}