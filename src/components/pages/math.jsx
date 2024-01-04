import upload from '../../assets/images/upload.svg'
function Math({dot}) {
    return (<div className="page">
                  <div className='prompt'>
                      <img src={dot} alt="" />
                      <div>Solve the following of Linear Differential Equation and explain all the steps</div>
                  </div>
                  <div className="response-div">
                    <div className="response-upload-helper">
                        <img className='response-div-upload' src={upload} alt="" />
                        <div className="response-upload-desc">
                            <div>Drag and drop a screen shot of the equation</div>
                            <div>or</div>
                            <div>Upload an image</div>
                        </div>
                    </div>
                  </div>
              </div>);
}
export default Math;