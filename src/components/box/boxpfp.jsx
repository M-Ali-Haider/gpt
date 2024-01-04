import '../../assets/styles/box/boxpfp.css'
import pfp from '../../assets/images/logo.svg'
import algo from '../../assets/images/algorithm.png'
import letter from '../../assets/images/letters.png'
import math from '../../assets/images/math.png'
import mg from '../../assets/images/mg.png'
import vp from '../../assets/images/vp.png'
import writing from '../../assets/images/writting.png'
import back from '../../assets/images/back.svg'
import bm from '../../assets/images/bm.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const BoxPfp=({type,handleSidebar})=>{
    const [isClicked,setStatus]=useState(false);
    const handleMenu=()=>{
        setStatus(!isClicked);
    }

    return(
        <>
        <div className='bm'>
            {type==='homepage'?null:(
                <Link to="/gpt/" className="back">
                    <img src={back} alt="" />
                </Link>
            )}
            <div className="bm-sub" onClick={handleSidebar}>
                <img src={bm} alt="" />
            </div>
        </div>
        {type==='homepage'?null:(
                <Link to="/gpt/" className="back-pc">
                    <img src={back} alt="" />
                </Link>
            )}
        <div className="box-pfp">
            {type==='homepage'?null
            :(
                <div className='which-pfp'>
                    <div className="which-pfp-desc">
                        {
                        type==='code'?'Code Generator'
                        :type==='math'?'Math'
                        :type==='slide'?'Slide Analyzer'
                        :type==='content'?'Content Writer'
                        :type==='chart'?'Chart Maker'
                        :type==='book'?'book':null
                        }
                    </div>
                    <img src={
                        type==='code'?letter
                        :type==='math'?math
                        :type==='slide'?vp
                        :type==='content'?writing
                        :type==='chart'?algo
                        :type==='book'?mg:null
                    } alt="" />
                </div>
            )}
            <img  onClick={handleMenu} src={pfp} alt="" />
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