export default <T extends string>(layers: T[]) => {
  // @ts-ignore as empty object wouldn't be valid.
  const result: { [key in T]: number } = {}

  layers.forEach((layer, index) => {
    result[layer] = index + 1
  })

  return result
}
