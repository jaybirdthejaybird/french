import NotificationWorker from "./NotificationWorker.js";
export default class NotifierBase {
    _instanceName = this.constructor["name"];
    _worker = NotificationWorker.getInstance(this._instanceName);
    subscribe(suscriber) {
        this._worker.subscribe(this._instanceName, suscriber);
    }
    dispatch() {
        this._worker.dispatch(this._instanceName);
    }
}
