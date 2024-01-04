function Code({dot}) {
    return (<div className="page">
                  <div className='prompt'>
                      <img src={dot} alt="" />
                      <div>Write a C++ code for printing my name also explain it!</div>
                  </div>
                  <div className="response-div">
                      <div>#include{'<iostream>'}</div>
                      <div>int main{'(){'}</div>
                      <div className='padd'>//Printing your name</div>
                      <div className='padd'>std::cout{'<<'}"Huba Hamza"{'<<'}std::endl;</div>
                      <div className='padd'>return 0;</div>
                      <div>{'}'}</div>
                  </div>
                  <div className="response-div">
                      <div>Explanation</div>
                      <div>1.<span>#include {'<iostream>'}</span>: This line includes the necessary header file for input and output operation in C++.</div>
                      <div>2.<span>int main()</span>: This is the main function where the program starts its execution. In C++, every program must have a main function.</div>
                      <div>3.<span>std::cout</span>: This is the standard output stream used for printing to the console.</div>
                      <div>4.<span>"Your Name"</span>: Replace this with your actual name. This is a string literal, which is a sequence of characters enclosed in double quotes.</div>
                      <div>5.<span>{'<<'}</span>: The insertion operator is used to send the string to the output stream.</div>
                      <div>6.<span>std::endl</span>: This is a manipulator that represents the end of a line. It adds a newline character and flushes the output buffer. It's equivalent to pressing the "Enter" key.</div>
                  </div>
              </div>);
}
export default Code;