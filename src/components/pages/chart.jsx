import chart from '../../assets/images/charter.png'
function Chart({dot}) {
    return (<div className="page">
                  <div className='prompt'>
                      <img src={dot} alt="" />
                      <div>Simple UML diagram of client sever</div>
                  </div>
                  <div className="response-div">
                        <img src={chart} alt="" />
                  </div>
              </div>);
}
export default Chart;