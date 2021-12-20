import configureLayer from '../index'

test('Layers start at one and count upwards.', () => {
  const Layer = configureLayer(['Base'])

  expect(Layer.Base).toBe(1)
  // @ts-ignore
  expect(Layer.Popup).toBe(undefined)

  const MultipleLayers = configureLayer(['Base', 'Popup'])

  expect(MultipleLayers.Base).toBe(1)
  expect(MultipleLayers.Popup).toBe(2)

  const ManyLayers = configureLayer(['Base', 'Modal', 'Popup', 'CloseButton'])

  expect(ManyLayers.Base).toBe(1)
  expect(ManyLayers.Modal).toBe(2)
  expect(ManyLayers.Popup).toBe(3)
  expect(ManyLayers.CloseButton).toBe(4)
})

test('Failing test.', () => {
  const Layer = configureLayer(['Base'])

  expect(Layer.Base).toBe(2)
})
