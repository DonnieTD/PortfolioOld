import React, { Component } from 'react';

const ContactUs = (props) =>{

  return(
    <section id="contact">
    <div className="row section-head">
      <div>
        <p className="lead" style={{color:'white'}}>
        Feel free to contact me for any work or suggestions below
        </p>
      </div>
    </div>
    <div className="row">
          <form>
              <div>
                  <label>Subject:</label>    
                  <input type="text"></input>
              </div>
              <div>
                  <label>Message:</label>    
                  <textarea></textarea>
              </div>
              <div id="ContactSubmit">
                  <button className="btn mr-auto" type="submit">Submit</button>
              </div>
      
          </form>
    </div>
  </section>
  )
};

export default  ContactUs