import { HashRouter, Route, Routes } from 'react-router-dom'
import { AppleM2 } from './components/chip/M2/AppleM2'
import { MainPage } from './components/mainPage'
import { AppleM2Pro } from './components/chip/M2/AppleM2Pro'
import { AppleM2Max } from './components/chip/M2/AppleM2Max'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={`/`} element={<MainPage />} />
        <Route path={`/m2`} element={<AppleM2 />} />
        <Route path={`/m2pro`} element={<AppleM2Pro />} />
        <Route path={`/m2max`} element={<AppleM2Max />} />
      </Routes>
    </HashRouter>
  )
}

export default App
