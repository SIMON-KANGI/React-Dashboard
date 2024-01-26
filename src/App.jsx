

import './App.css'
import Home from './pages/dashboard'
import Profile from './components/profile'
import Team from './components/team'
import Invoices from './components/invoices'
import Faq from './components/faq'
import Contacts from './components/contacts'
import Calendar from './components/calendar'
import { Routes, Route } from 'react-router-dom'
import SideBar from './pages/global/sidebar'
import TopBar from './pages/global/topbar'

function App() {
  

  return (
    
    <div className='app'>
    <SideBar/>
    <main className='content'>
<TopBar/>
  <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Team/>} path="/Team"/>
      <Route element={<Profile/>} path="/Profile"/>
      <Route element={<Invoices/>} path="/Invoices"/>
      <Route element={<Faq/>} path="/Faq"/>
      <Route element={<Contacts/>} path="/Contacts"/>
      <Route element={<Calendar/>} path="/Calendar"/>
     </Routes>
     </main>
    </div>
  
     
  
  )
}

export default App
