import '../../assets/styles/box/BoxOptions.css'
import algo from '../../assets/images/algorithm.png'
import letter from '../../assets/images/letters.png'
import math from '../../assets/images/math.png'
import mg from '../../assets/images/mg.png'
import vp from '../../assets/images/vp.png'
import writing from '../../assets/images/writting.png'

const BoxOptions=()=>{
    return(
        <>
        <div className="box-options">
            <div className="box-options-row">
                <div className="box-option-unit">
                    <img src={math} alt="" />
                    <div>Maths</div>
                    <span>Turning complex equations into elegant solutions.</span>
                </div>
                <div className="box-option-unit">
                    <img src={algo} alt="" />
                    <div>Chart Maker</div>
                    <span>Create stunning charts</span>
                </div>
                <div className="box-option-unit">
                    <img src={writing} alt="" />
                    <div>Content Writer</div>
                    <span>Write amazing content to impress your peers</span>
                </div>
            </div>
            <div className="box-options-row">
                <div className="box-option-unit">
                    <img src={letter} alt="" />
                    <div>Code Generator</div>
                    <span>Difficulty in understanding code? Let’s make it easier</span>
                </div>
                <div className="box-option-unit">
                    <img src={vp} alt="" />
                    <div>Slide Analyzer</div>
                    <span>Summarize your slides with just one click!</span>
                </div>
                <div className="box-option-unit">
                    <img src={mg} alt="" />
                    <div>Book Finder</div>
                    <span>Looking for a book? Let’s find it with AI </span>
                </div>
            </div>
        </div>
        </>
    )
}
export default BoxOptions;