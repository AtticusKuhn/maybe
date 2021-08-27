import { Either, Maybe } from "../src/index"

const maybeDiv = (a: number) => (b: number) => b === 0 ? new Maybe<number>(null) : new Maybe(a / b)
const x = maybeDiv(2)(1)
console.log(x.map(x => x + 1).else(5))
console.log(x.bind(maybeDiv(2)).show())


const eitherDiv = (a: number) => (b: number) => b === 0 ? new Either<string, number>({ left: "cannot divide by 0" }) : new Either<string, number>({ right: a / b })
const b = eitherDiv(5)(10)
console.log(b.rightMap(x => 2 * x).bind(eitherDiv(7)).show())