### Mobile Display Keystrokes

```sh

1. Kata 1
Task
Your task is simple, create a counter that increments by 1 each time. You must use the iterator described below. Good luck!
2. Kata 2
In this Kata you will learn how to build javascript generators functions.

Generators are functions that can be exited and later re-entered. Their context will be saved across re-entrances.

Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead.

Build a generator function which gets called with an array.

You only gonna be passed an array with numbers - it will never be empty.

Example:

const generator = nextElementGenerator([1,2,3,4,5,6,7])
generator.next().value -> 1
generator.next().value -> 2
generator.next().value -> 3
Each next() call on the returned iterator object should generate the next element in the previously given array with length n. If it gets called more then n times, do NOT return undefined.
Instead, start at the first element again.

Example:

const generator = nextElementGenerator([1,2,3])
generator.next().value -> 1
generator.next().value -> 2
generator.next().value -> 3
generator.next().value -> 1
generator.next().value -> 2
generator.next().value -> 3
generator.next().value -> 1

```