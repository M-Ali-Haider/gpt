import '../../assets/styles/box/boxpfp.css'
import pfp from '../../assets/images/logo.svg'
import { useState } from 'react'
const BoxPfp=()=>{
    const [isClicked,setStatus]=useState(false);
    const handleMenu=()=>{
        setStatus(!isClicked);
    }

    return(
        <>
        <div className="box-pfp" onClick={handleMenu}>
            <img src={pfp} alt="" />
        </div>
        {isClicked?(
            <div className="box-pfp-menu">
                <div className="box-pfp-menu-unit box-pfp-menu-border">Settings</div>
                <div className="box-pfp-menu-unit">Log out</div>
            </div>
        ):null}
        </>
    )
}
export default BoxPfp