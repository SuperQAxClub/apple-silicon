import { HashRouter, Route, Routes } from 'react-router-dom'
import { AppleM2 } from './components/chip/M2/AppleM2'
import { MainPage } from './components/mainPage'
import { AppleM2Pro } from './components/chip/M2/AppleM2Pro'
import { AppleM2Max } from './components/chip/M2/AppleM2Max'
import { AppleM2Ultra } from './components/chip/M2/AppleM2Ultra'
import { AppleM1 } from './components/chip/M1/AppleM1'
import { AppleM1Pro } from './components/chip/M1/AppleM1Pro'
import { AppleM1Max } from './components/chip/M1/AppleM1Max'
import { AppleM1Ultra } from './components/chip/M1/AppleM1Ultra'
import { AppleM3 } from './components/chip/M3/AppleM3'
import { AppleM3Pro } from './components/chip/M3/AppleM3Pro'
import { AppleM3Max } from './components/chip/M3/AppleM3Max'
import { AppleA15 } from './components/chip/AFamily/AppleA15'
import { AppleA14 } from './components/chip/AFamily/AppleA14'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={`/`} element={<MainPage />} />
        <Route path={`/a14`} element={<AppleA14 />} />
        <Route path={`/a15`} element={<AppleA15 />} />
        <Route path={`/m1`} element={<AppleM1 />} />
        <Route path={`/m1pro`} element={<AppleM1Pro />} />
        <Route path={`/m1max`} element={<AppleM1Max />} />
        <Route path={`/m1ultra`} element={<AppleM1Ultra />} />
        <Route path={`/m2`} element={<AppleM2 />} />
        <Route path={`/m2pro`} element={<AppleM2Pro />} />
        <Route path={`/m2max`} element={<AppleM2Max />} />
        <Route path={`/m2ultra`} element={<AppleM2Ultra />} />
        <Route path={`/m3`} element={<AppleM3 />} />
        <Route path={`/m3pro`} element={<AppleM3Pro />} />
        <Route path={`/m3max`} element={<AppleM3Max />} />
      </Routes>
    </HashRouter>
  )
}

export default App
