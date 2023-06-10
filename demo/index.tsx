import { createRoot } from 'react-dom/client'
import configureLayer from 'laier'

const Layer = configureLayer(['Base', 'Popup', 'Modal'])
const ToneMappedLayer = configureLayer(['Base', 'Popup', 'Modal'], '#FF00FF')

const ToneMappedSurfaces = () => (
  <div
    style={{
      padding: '2vw',
      borderRadius: 10,
      background: ToneMappedLayer.Base.color,
      zIndex: ToneMappedLayer.Base.index,
    }}
  >
    <div
      style={{
        padding: '4vw',
        borderRadius: 20,
        background: ToneMappedLayer.Popup.color,
        zIndex: ToneMappedLayer.Popup.index,
      }}
    >
      <div
        style={{
          padding: '2vw',
          borderRadius: 10,
          background: ToneMappedLayer.Modal.color,
          zIndex: ToneMappedLayer.Modal.index,
        }}
      >
        <p style={{ color: 'white', fontFamily: 'sans-serif', fontWeight: 'bold' }}>
          Tone Mapped Surface Colors
        </p>
      </div>
    </div>
  </div>
)

createRoot(document.body as HTMLElement).render(
  <>
    <div
      style={{
        zIndex: Layer.Modal,
        background: '#FFF5BA',
        position: 'absolute',
        bottom: 20,
        right: 20,
        height: '5vh',
        width: '50vw',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
      }}
    >
      <div
        style={{
          background: 'white',
          width: '30vw',
          height: '3vh',
        }}
      />
      <div
        style={{
          background: 'white',
          width: '3vh',
          height: '3vh',
          borderRadius: '100%',
        }}
      />
    </div>
    <div
      style={{
        zIndex: Layer.Popup,
        background: '#6EB5FF',
        position: 'absolute',
        top: '15vh',
        left: '15vw',
        width: '70vw',
        height: '80vh',
        borderRadius: 40,
      }}
    >
      <div
        style={{
          background: 'white',
          width: '30vw',
          height: '3vh',
          position: 'absolute',
          top: 20,
          left: 20,
        }}
      />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flex: 1,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ToneMappedSurfaces />
      </div>
    </div>
    <div
      style={{
        zIndex: Layer.Base,
        background: '#DBFFD6',
        width: '30vw',
        height: '20vh',
      }}
    >
      <div
        style={{
          background: '#FFC9DE',
          width: '50vw',
          height: '5vh',
          position: 'absolute',
          top: 20,
          left: 20,
        }}
      />
      <div
        style={{
          background: '#C5A3FF',
          width: 'calc(100vw - 30px)',
          height: '20vh',
          position: 'absolute',
          top: 100,
          left: 20,
        }}
      />
    </div>
  </>
)
