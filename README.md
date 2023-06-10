<p align="center">
  <img src="https://github.com/tobua/laier/raw/main/logo.png" alt="laier" width="300">
</p>

# laier

[![laier Demo](https://img.shields.io/static/v1?label=laier&message=Demo&color=brightgreen)](https://tobua.github.io/laier)
[![npm](https://img.shields.io/npm/v/laier)](https://npmjs.com/laier)

Plugin to organize CSS `z-index` layers.

## Usage

First configure the layers by assigning the available layers in their respective order starting from bottom to top.

```ts
// index.ts
import configureLayer from 'laier'

export const Layer = configureLayer(['Base', 'Popup', 'Modal'])
```

Then the layers can be imported anywhere and assigned to the `z-index` where needed.

```tsx
// markup/MyComponent.tsx
import { Layer } from '../../index'

export const MyComponent = () => <div style={{ zIndex: Layer.Popup }}>Hello World</div>
```

When a new layer is needed it can be added into the initially configured order without having to adapt all other `z-index`'s everywhere. Also, there is no need to calculate any numbers by hand and when **TypeScript** is used it will ensure only the available layers are used.

## Surface Colors

Googles design language Material Design 3 introduces [tone-based surface colors](https://m3.material.io/styles/color/overview#fb46760e-a96a-4d05-9ca6-2b6754ddfb73). The idea is to indicate layers by making each layer below a slightly darker shade. To achieve this effect a color can be passed to `configureLayer` as the second parameter. This will return an additional `color` for each layer. The outermost layer will match the input color while layers above it are gradually lightened.

```ts
import configureLayer from 'laier'

const Layer = configureLayer(['Base', 'Popup', 'Modal'], '#FF00FF')

const MyComponent = () => (
  <>
    <div style={{ zIndex: Layer.Modal.index, background: Layer.Modal.color }}>Above</div>
    <div style={{ zIndex: Layer.Popup.index, background: Layer.Popup.color }}>Between</div>
    <div style={{ zIndex: Layer.Base.index, background: Layer.Base.color }}>Below</div>
  </>
)
```
