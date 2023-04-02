type MyPick<T, K extends keyof T> = {
  [KIndex in K]: T[KIndex]
}
