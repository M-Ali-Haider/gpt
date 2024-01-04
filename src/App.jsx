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
        <Routes> handleSidebar={handleSidebar}
          <Route path='/gpt/' element={<Box type="homepage" handleSidebar={handleSidebar}/>}/>
          <Route path='/gpt/math/' element={<Box type="math" handleSidebar={handleSidebar}/>}/>
          <Route path='/gpt/slide/' element={<Box type="slide" handleSidebar={handleSidebar}/>}/>
          <Route path='/gpt/book/' element={<Box type="book" handleSidebar={handleSidebar}/>}/>
          <Route path='/gpt/content/' element={<Box type="content" handleSidebar={handleSidebar}/>}/>
          <Route path='/gpt/code/' element={<Box type="code" handleSidebar={handleSidebar}/>}/>
          <Route path='/gpt/chart/' element={<Box type="chart" handleSidebar={handleSidebar}/>}/>

        </Routes>
      </Router>
    </>
  )
}
export default App
