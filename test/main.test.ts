import configureLayer from '../index'

test('Layers start at one and count upwards.', () => {
  const Layer = configureLayer(['Base'])

  expect(Layer.Base).toBe(1)
  // @ts-expect-error
  expect(Layer.Popup).toBeUndefined()

  const MultipleLayers = configureLayer(['Base', 'Popup'])

  expect(MultipleLayers.Base).toBe(1)
  expect(MultipleLayers.Popup).toBe(2)

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
})
