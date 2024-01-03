import '../../assets/styles/box/boxinput.css'
import arrow from '../../assets/images/enter.svg'
const BoxInput=()=>{
    return(
        <>
        <div className="box-input">
            <input type="text" placeholder='Ask Me Anything...' />
            <button><img src={arrow} alt="" /></button>
        </div>
        </>
    )
}
export default BoxInput