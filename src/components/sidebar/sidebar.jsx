import '../../assets/styles/sidebar/sidebar.css'
import logo from '../../assets/images/logo.svg'
import SidebarSeg from './sidebarseg'
const Sidebar=({isSidebarOpen,closeSidebar})=>{
    return(
        <>
        <div className={`sidebar ${isSidebarOpen?'sidebar-open':''}`}>
            <div className="sidebar-logo">
                <img src={logo} alt=""/>
                <span>Learn A Lot</span>
                <div onClick={closeSidebar} className="sidebar-close-arrow"></div>
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