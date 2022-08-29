export default interface SubclassNotifier {
    subscribe(instance: string, subscriber: Function): void
    dispatch(instance: string): void
}