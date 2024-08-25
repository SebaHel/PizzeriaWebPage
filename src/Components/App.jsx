import MainPage from './MainPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About.jsx';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
