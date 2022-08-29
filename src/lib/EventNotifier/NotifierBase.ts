import Notifier from "./Notifer.js"
import SubclassNotifierFactory from "./SubclassNotifierFactory.js"
import SubclassNotifier from "./SubclassNotifier.js"

export default abstract class NotifierBase implements Notifier {
    private _instanceName: string = this.constructor["name"]

    private _worker: SubclassNotifier = SubclassNotifierFactory.getInstance(
        this._instanceName
    )

    subscribe(suscriber: Function): void {
        this._worker.subscribe(this._instanceName, suscriber)
    }
    dispatch(): void {
        this._worker.dispatch(this._instanceName)
    }
}