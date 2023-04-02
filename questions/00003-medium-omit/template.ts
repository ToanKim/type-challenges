type MyOmit<T, K extends keyof T> = {
  [TKey in keyof T as Exclude<TKey, K>]: T[TKey]
}
