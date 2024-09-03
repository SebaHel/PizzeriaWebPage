import MainPage from './MainPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About.jsx';
import Menu from './Menu.jsx';
import Contact from './Contact.jsx';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
