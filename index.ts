import colorString from 'color-string'
import parse from 'parse-color'
import convert from 'color-convert'

const lighten = (color: string, change: number) => {
  const { hsla } = parse(color)
  hsla[2] += change
  hsla[2] = Math.min(100, Math.max(0, hsla[2]))

  if (hsla[3] === 1) return colorString.to.hex(convert.hsl.rgb(hsla))
  return colorString.to.hex(hsla)
}

// Type inference by ChatGPT 😏
type ResultType<T extends string, C extends string | undefined> = C extends string
  ? { [K in T]: { index: number; color: string } }
  : { [K in T]: number }

export default <T extends string, C extends string | undefined>(
  layers: T[],
  color?: C
): ResultType<T, C> =>
  layers.reduce((result, layer, index) => {
    if (color) {
      const lighterColor = lighten(color, 0 + index * 10)
      result[layer] = { index: index + 1, color: lighterColor } as ResultType<T, C>[T]
    } else {
      result[layer] = (index + 1) as unknown as ResultType<T, C>[T]
    }
    return result
  }, {} as ResultType<T, C>)
