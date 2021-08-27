# Maybe
This is a Maybe Class. It was inspired by Haskell's Maybe Monad
# Purpose
This makes error handling a lot easier. There are many functions which might return a result or might not, and
maybe encapsulates this information
# Example
```ts
import Maybe from "../src/index"

const safeDiv = (a: number) => (b: number) => b === 0 ? new Maybe<number>(null) : new Maybe(a / b)
const x = safeDiv(2)(0)
console.log(x.map(x => x + 1).else(5))
```