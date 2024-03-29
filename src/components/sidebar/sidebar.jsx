import '../../assets/styles/sidebar/sidebar.css'
import logo from '../../assets/images/logo.svg'
import cross from '../../assets/images/cross.svg'
import SidebarSeg from './sidebarseg'
import { Link } from 'react-router-dom'
const Sidebar=({isSidebarOpen,closeSidebar})=>{
    return(
        <>
        <div className={`sidebar ${isSidebarOpen?'sidebar-open':''}`}>
            <div className="sidebar-logo">
                <Link to="/gpt/">
                    <img src={logo} alt=""/>
                </Link>
                <span>Learn A Lot</span>
                <div onClick={closeSidebar} className="sidebar-close-arrow">
                    <img src={cross} alt="" />
                </div>
            </div>
            <div className="sidebar-helper">
                <SidebarSeg />
                <SidebarSeg />
                <SidebarSeg />
                <SidebarSeg />
                <SidebarSeg />
                <SidebarSeg />
            </div>
        </div>
        </>
    )
}
export default Sidebar