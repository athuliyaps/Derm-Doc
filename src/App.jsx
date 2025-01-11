
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Appointment from './pages/Appointment'
import Confirmation from './pages/Confirmation'
import Home from './pages/Home'
import Header from './components/Header'

import Contact from './pages/Contact'


function App() {
 

  return (
    <>
    <Header/>
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/appointment/' element={<Appointment/>} />
    <Route path='/confirmation/' element={<Confirmation/>}/>
    <Route path='/contact/' element={<Contact/>}/>

     </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App
