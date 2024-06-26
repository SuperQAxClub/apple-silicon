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
import { AppleA16 } from './components/chip/AFamily/AppleA16'
import { AppleA17Pro } from './components/chip/AFamily/AppleA17Pro'
import { AppleM4 } from './components/chip/M4/AppleM4'
import { AppleA12X } from './components/chip/AFamily/AppleA12X'
import { AppleA12Z } from './components/chip/AFamily/AppleA12Z'
import { AppleA13 } from './components/chip/AFamily/AppleA13'
import { AppleA12 } from './components/chip/AFamily/AppleA12'
import { AppleA11 } from './components/chip/AFamily/AppleA11'
import { AppleA10 } from './components/chip/AFamily/AppleA10'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={`/`} element={<MainPage />} />
        <Route path={`/a10`} element={<AppleA10 />} />
        <Route path={`/a11`} element={<AppleA11 />} />
        <Route path={`/a12`} element={<AppleA12 />} />
        <Route path={`/a12x`} element={<AppleA12X />} />
        <Route path={`/a12z`} element={<AppleA12Z />} />
        <Route path={`/a13`} element={<AppleA13 />} />
        <Route path={`/a14`} element={<AppleA14 />} />
        <Route path={`/a15`} element={<AppleA15 />} />
        <Route path={`/a16`} element={<AppleA16 />} />
        <Route path={`/a17pro`} element={<AppleA17Pro />} />
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
        <Route path={`/m4`} element={<AppleM4 />} />
      </Routes>
    </HashRouter>
  )
}

export default App
