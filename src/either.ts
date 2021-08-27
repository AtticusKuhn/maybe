import { id } from "./utils"

export type E<Left, Right> = { left: Left } | { right: Right }

class Either<Left, Right> {
    constructor(public value: E<Left, Right>) { }
    getValue(): Left | Right {
        if ("left" in this.value) {
            return this.value.left
        } else {
            return this.value.right
        }
    }
    map<A, B>(lfunc: (l: Left) => A, rfunc: (r: Right) => B): Either<A, B> {
        if ("left" in this.value) {
            return new Either({ left: lfunc(this.value.left) })
        } else {
            return new Either({ right: rfunc(this.value.right) })
        }
    }
    unify<T>(lfunc: (l: Left) => T, rfunc: (r: Right) => T): T {
        if ("left" in this.value) {
            return lfunc(this.value.left)
        } else {
            return rfunc(this.value.right)
        }
    }
    leftMap<A>(lfunc: (l: Left) => A): Either<A, Right> {
        return this.map(lfunc, id)
    }
    rightMap<B>(rfunc: (l: Right) => B): Either<Left, B> {
        return this.map(id, rfunc)
    }
    forceLeft(msg: string = "tried to force either to left") {
        if ("left" in this.value) {
            return this.value.left
        } else {
            throw new Error(msg)
        }
    }
    forceRight(msg: string = "tried to force either to right") {
        if ("right" in this.value) {
            return this.value.right
        } else {
            throw new Error(msg)
        }
    }
    isLeft(): boolean {
        return "left" in this.value
    }
    isRight(): boolean {
        return "right" in this.value
    }
    show(): string {
        if ("left" in this.value) {
            return `Left ${JSON.stringify(this.value.left)}`
        } else {
            return `Right ${JSON.stringify(this.value.right)}`
        }
    }
    bind(f: (value: Right) => Either<Left, Right>): Either<Left, Right> {
        if ("left" in this.value) {
            return this
        } else {
            return f(this.value.right)
        }
    }
}
export default Either