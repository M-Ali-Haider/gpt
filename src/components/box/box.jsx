import '../../assets/styles/box/box.css'
import BoxInput from './boxInput'
import BoxPfp from './boxpfp'
import BoxOptions from './boxOptions'
import BoxPage from '../pages/boxpage'
const Box=({type})=>{
    return(
        <>
        <div className={`box`}>
            <div className="box-helper">
                <div className="box-center">
                    {type==="homepage"?(
                        <BoxOptions />
                    ):(
                        <BoxPage type={type}/>
                    )}
                    <BoxInput />
                </div>
                <BoxPfp type={type}/>
            </div>
        </div>
        </>
    )
}
export default Box