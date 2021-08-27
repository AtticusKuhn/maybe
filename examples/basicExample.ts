import { Maybe } from "../src/index"

const safeDiv = (a: number) => (b: number) => b === 0 ? new Maybe<number>(null) : new Maybe(a / b)
const x = safeDiv(2)(1)
console.log(x.map(x => x + 1).else(5))
console.log(x.bind(safeDiv(2)))
