import './App.css'
import { MainPage} from './layout/MainPage/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Section1 } from './pages/Section1/Section1'
import { Section2 } from './pages/Section2/Section2'
import { Section3 } from './pages/Section3/Section3'
import { Section4 } from './pages/Section4/Section4'
import { PageNotFound } from './pages/PageNotFound/PageNotFound'



function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<Section1/>}/>
            <Route path="/delmaalene" element={<Section2/>}/>
            <Route path="/udfordringer" element={<Section3/>}/>
            <Route path="/kontakt" element={<Section4/>}/>
            <Route path="/*" element={<PageNotFound/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
