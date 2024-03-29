import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">
            <div className="twelve columns main-col">              
               <div className="row">
                  <div className="six columns" style={{textAlign:'center'}}>
                     <h2>About Me</h2>
                     <p>
                        {
                        resumeData.aboutme
                        }
                     </p>
                  </div>
                  <div className="six columns contact-details"  style={{textAlign:'center'}}>
                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}