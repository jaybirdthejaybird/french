export default interface Notifier {
    subscribe(suscriber: Function): void
    dispatch(): void  
}

