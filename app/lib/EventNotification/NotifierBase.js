export default class NotifierBase {
    _worker = NotificationWorker.instance;
    subscribe(suscriber) {
        this._worker.subscribe(suscriber);
    }
    dispatch() {
        throw new Error("Method not implemented.");
    }
}
