import colorString from 'color-string'
import convert from 'color-convert'

const lighten = (color: string, change: number): string => {
  const hsl = convert.hex.hsl(color)
  hsl[2] += change
  hsl[2] = Math.min(100, Math.max(0, hsl[2]))
  return colorString.to.hex(convert.hsl.rgb(hsl))
}

// Type inference by ChatGPT 😏
type ResultType<T extends string, C extends string | false> = C extends string
  ? {
      [K in T]: { index: number; color: string }
    }
  : { [K in T]: number }

export default <T extends string, C extends string | false = false>(layers: T[], color?: C) => {
  const result = {} as ResultType<T, C>

  layers.forEach((layer, index) => {
    if (color !== undefined && color !== false) {
      const lighterColor = lighten(color, 0 + index * 10)
      result[layer] = { index: index + 1, color: lighterColor } as ResultType<T, C>[T]
    } else {
      result[layer] = (index + 1) as ResultType<T, C>[T]
    }
  })

  return result
}
