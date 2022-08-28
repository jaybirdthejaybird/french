class Study {
    Get(key: string): string {
        return localStorage[key] || ""
    }
}