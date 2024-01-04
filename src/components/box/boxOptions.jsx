import '../../assets/styles/box/boxoption.css'
import algo from '../../assets/images/algorithm.png'
import letter from '../../assets/images/letters.png'
import math from '../../assets/images/math.png'
import mg from '../../assets/images/mg.png'
import vp from '../../assets/images/vp.png'
import writing from '../../assets/images/writting.png'
import { Link } from 'react-router-dom'

const BoxOptions=()=>{
    return(
        <>
        <div className="box-options">
            <div className="box-options-row">
                <Link to="/gpt/math" className="box-option-unit">
                    <img src={math} alt="" />
                    <div>Maths</div>
                    <span>Turning complex equations into elegant solutions.</span>
                </Link>
                <Link to="/gpt/chart" className="box-option-unit">
                    <img src={algo} alt="" />
                    <div>Chart Maker</div>
                    <span>Create stunning charts</span>
                </Link>
                <Link to="/gpt/content" className="box-option-unit">
                    <img src={writing} alt="" />
                    <div>Content Writer</div>
                    <span>Write amazing content to impress your peers</span>
                </Link>
            </div>
            <div className="box-options-row">
                <Link to="/gpt/code" className="box-option-unit">
                    <img src={letter} alt="" />
                    <div>Code Generator</div>
                    <span>Difficulty in understanding code? Let’s make it easier</span>
                </Link>
                <Link to="/gpt/slide" className="box-option-unit">
                    <img src={vp} alt="" />
                    <div>Slide Analyzer</div>
                    <span>Summarize your slides with just one click!</span>
                </Link>
                <Link to="/gpt/book" className="box-option-unit">
                    <img src={mg} alt="" />
                    <div>Book Finder</div>
                    <span>Looking for a book? Let’s find it with AI </span>
                </Link>
            </div>
        </div>
        </>
    )
}
export default BoxOptions;