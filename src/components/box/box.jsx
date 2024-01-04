import '../../assets/styles/box/box.css'
import BoxInput from './boxInput'
import BoxPfp from './boxpfp'
import BoxOptions from './boxOptions'
const Box=()=>{
    return(
        <>
        <div className={`box`}>
            <div className="box-helper">
                <div className="box-center">
                    <BoxOptions />
                    <BoxInput />
                </div>
                <BoxPfp />
            </div>
        </div>
        </>
    )
}
export default Box