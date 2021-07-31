import FluentUI from "./FluentUI"
import MaterialUi from "./MaterialUI"

function App() {
  return (
    <div style={{ margin: 10, padding: 10 }}>
      <header style={{ marginBottom: 10 }}>
        Material-UI vs Fluent UI
      </header>
      <div style={{ height: '90%', display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column', margin: 10 }}>
          <MaterialUi />
        </div>
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column', margin: 10 }}>
          <FluentUI />
        </div>
      </div>
    </div>
  )
}

export default App
