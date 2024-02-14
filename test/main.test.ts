import { type CSSProperties } from 'react'
import { expect, test } from 'bun:test'
import configureLayer from '../index'

test('Layers start at one and count upwards.', () => {
  const Layer = configureLayer(['Base'])

  expect(Layer.Base).toBe(1)
  // @ts-expect-error
  expect(Layer.Popup).toBeUndefined()

  const MultipleLayers = configureLayer(['Base', 'Popup'])

  // @ts-expect-error
  expect(MultipleLayers.Base.index).toBeUndefined()

  expect(MultipleLayers.Base).toBe(1)
  expect(MultipleLayers.Popup).toBe(2)

  // @ts-expect-error
  expect(MultipleLayers.Base === 'hey').toBe(false)
  expect(MultipleLayers.Base === 5).toBe(false)

  const ManyLayers = configureLayer(['Base', 'Modal', 'Popup', 'CloseButton'])

  expect(ManyLayers.Base).toBe(1)
  expect(ManyLayers.Modal).toBe(2)
  expect(ManyLayers.Popup).toBe(3)
  expect(ManyLayers.CloseButton).toBe(4)
})

test('Various shades are generated for every layer.', () => {
  const FirstLayer = configureLayer(['Base'], '#FF00FF')

  expect(FirstLayer.Base.index).toBe(1)
  expect(FirstLayer.Base.color).toBe('#FF00FF')
  // @ts-expect-error
  expect(FirstLayer.Missing).toBeUndefined()

  const SecondLayer = configureLayer(['Base', 'Modal', 'Popup'], '#00FF00')

  expect(SecondLayer.Base.index).toBe(1)
  expect(SecondLayer.Base.color).toBe('#00FF00')
  expect(SecondLayer.Modal.index).toBe(2)
  expect(SecondLayer.Modal.color).toBe('#33FF33')
  expect(SecondLayer.Popup.index).toBe(3)
  expect(SecondLayer.Popup.color).toBe('#66FF66')

  // @ts-expect-error
  expect(SecondLayer.Base === 5).toBe(false)
})

test('Types can properly be assigned to CSS values.', () => {
  const Layers = configureLayer(['Base', 'Modal'])
  const ColoredLayers = configureLayer(['Base', 'Modal'], '#EFEFEF')

  const styles: CSSProperties = {
    zIndex: Layers.Modal,
  }

  const coloredStyles: CSSProperties = {
    zIndex: ColoredLayers.Modal.index,
  }

  expect(styles.zIndex).toBe(2)
  expect(coloredStyles.zIndex).toBe(2)
})
