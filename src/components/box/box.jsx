import '../../assets/styles/box/box.css'
import BoxInput from './boxInput'
import BoxPfp from './boxpfp'
const Box=()=>{
    return(
        <>
        <div className={`box`}>
            <div className="box-helper">
                <div className="box-center">
                    <BoxInput />
                </div>
                <BoxPfp />
            </div>
        </div>
        </>
    )
}
export default Box