type MyReturnType<T> = T extends (...args: any) => infer TReturn
  ? TReturn
  : never
