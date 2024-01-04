import upload from '../../assets/images/upload.svg'
function Slide({dot}) {
    return (<div className="page">
                  <div className='prompt'>
                      <img src={dot} alt="" />
                      <div>Summarize the slides and explain important topics with headings</div>
                  </div>
                  <div className="response-div">
                    <div className="response-upload-helper">
                        <img className='response-div-upload' src={upload} alt="" />
                        <div className="response-upload-desc">
                            Upload your slides here
                        </div>
                    </div>
                  </div>
              </div>);
}
export default Slide;