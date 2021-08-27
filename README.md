# Maybe
This is a Maybe Class. It was inspired by Haskell's Maybe Monad
# Purpose
This makes error handling a lot easier. There are many functions which might return a result or might not, and
maybe encapsulates this information
# Example
```ts
const maybeDiv = (a: number) => (b: number) => b === 0 ? new Maybe<number>(null) : new Maybe(a / b)
const x = maybeDiv(2)(1)
console.log(x.map(x => x + 1).else(5)) //  3
console.log(x.bind(maybeDiv(2)).show()) // Just 7


const eitherDiv = (a: number) => (b: number) => b === 0 ? new Either<string, number>({ left: "cannot divide by 0" }) : new Either<string, number>({ right: a / b })
const b = eitherDiv(5)(10)
console.log(b.rightMap(x => 2 * x).bind(eitherDiv(7)).show()) // Right 7
```