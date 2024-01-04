import book from '../../assets/images/booker.png'
function Book({dot}) {
    return (<div className="page">
                  <div className='prompt'>
                      <img src={dot} alt="" />
                      <div>Solutions Manual of Differential Equations with Modeling Applications Ninth Edition</div>
                  </div>
                  <div className="response-div">
                    <div className="response-div-helper">
                        <div className="response-book-one">
                            <img src={book} alt="" />
                        </div>
                        <div className="response-book-two">
                                <div className="responser">
                                    <div className="response-heading-div">
                                        <div className="response-heading">Author Name</div>                                   
                                        <div className="response-heading">Edition</div>
                                        <div className="response-heading">Publisher</div>
                                    </div>
                                    <div className="response-heading-div">
                                        <div className="response-content">Dennis G. Zill</div>
                                        <div className="response-content">9th</div>
                                        <div className="response-content">Warren S. Wright</div>
                                    </div>
                                </div>
                            <div className="response-button">Download</div>
                        </div>
                    </div>  
                  </div>
              </div>);
}
export default Book;