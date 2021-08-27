
export type M<T> = T | null

class Maybe<T> {
    constructor(public value: M<T>) { }
    getValue(): M<T> {
        return this.value
    }
    hasValue(): boolean {
        return !this.isNull()
    }
    isNull(): boolean {
        return this.value === null
    }
    force(message: string = "Tried to force a maybe"): T {
        if (this.value !== null) {
            return this.value
        } else {
            throw new Error(message)
        }
    }
    map<K>(f: (a: T) => K): Maybe<K> {
        const v = this.value === null ? null : f(this.value)
        return new Maybe(v)
    }
    else(defaultValue: T) {
        if (this.value === null) {
            return defaultValue
        } else {
            return this.value
        }
    }
}
export default Maybe