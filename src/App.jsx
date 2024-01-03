import Sidebar from './components/sidebar/sidebar'
import Box from './components/box/box'
import './App.css'
import { useState } from 'react'

function App() {

  const [isSidebarOpen,setSidebarStatus]=useState(false);
  const handleSidebar=()=>{
    setSidebarStatus(!isSidebarOpen)
  }
  const closeSidebar=()=>{
    setSidebarStatus(false);
  }

  return (
    <>
      <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        closeSidebar={closeSidebar}
      />
      <Box />
      <div className="bm" onClick={handleSidebar}>
        
      </div>
    </>
  )
}
export default App
