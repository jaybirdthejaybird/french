import Notifier from "./Notifer.js"
import NotificationWorker from "./NotificationWorker.js"

export default abstract class NotifierBase implements Notifier {
    private _worker: Notifier = NotificationWorker.instance

    subscribe(suscriber: Function): void {
        this._worker.subscribe(suscriber)
    }
    dispatch(): void {
        this._worker.dispatch()
    }
}