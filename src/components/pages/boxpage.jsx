import '../../assets/styles/page/page.css'
import dot from '../../assets/images/dot.svg'
import Code from './code'
import Content from './content'
import Book from './book'
import Slide from './slide'
import Math from './math'
import Chart from './chart'
const BoxPage=({type})=>{
    return(
        <>
        <div className="box-page">
            <div className="box-page-helper">
                {type==="code"?(
                    <Code dot={dot}/>
                ):type==="content"?(
                    <Content dot={dot}/>
                ):type==="book"?(
                    <Book dot={dot}/>
                ):type==="slide"?(
                    <Slide dot={dot}/>
                ):type==="math"?(
                    <Math dot={dot}/>
                ):type==="chart"?(
                    <Chart dot={dot}/>
                ):null}
            </div>
        </div>
        </>
    )
}
export default BoxPage