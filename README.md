<p align="center">
  <img src="https://github.com/tobua/laier/raw/main/logo.png" alt="laier" width="300">
</p>

# naven

[![laier Demo](https://img.shields.io/static/v1?label=laier&message=Demo&color=brightgreen)](https://tobua.github.io/laier)
[![npm](https://img.shields.io/npm/v/laier)](https://npmjs.com/laier)

# laier

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

When a new layer is needed it can be added into the initially configured order without having to adapt all other `z-index`'s everywhere. Also, there is no need to calculate any numbers by hand and when **TypeScript** is used it will ensure onlythe available layers are used.
