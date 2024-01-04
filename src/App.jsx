import Sidebar from './components/sidebar/sidebar'
import Box from './components/box/box'
import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [isSidebarOpen,setSidebarStatus]=useState(false);
  const handleSidebar=()=>{setSidebarStatus(!isSidebarOpen)}
  const closeSidebar=()=>{setSidebarStatus(false);}

  return (
    <>
      <Router>
        <Sidebar 
          isSidebarOpen={isSidebarOpen} 
          closeSidebar={closeSidebar}
        />
        <Routes>
          <Route path='/gpt/' element={<Box type="homepage"/>}/>
          <Route path='/gpt/math' element={<Box type="math"/>}/>
          <Route path='/gpt/slide' element={<Box type="slide"/>}/>
          <Route path='/gpt/book' element={<Box type="book"/>}/>
          <Route path='/gpt/content' element={<Box type="content"/>}/>
          <Route path='/gpt/code' element={<Box type="code"/>}/>
          <Route path='/gpt/chart' element={<Box type="chart"/>}/>

        </Routes>
      </Router>
      <div className="bm" onClick={handleSidebar}></div>
    </>
  )
}
export default App
