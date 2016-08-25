import React, { Component } from 'react';

class SectionThree extends Component {
  render(){
    return (
      <div className="section-three">
        <section className="container">
          <h1 className="section-three-title"><strong>3 Essential Steps</strong></h1>
          <div className="section-three-content">
            <div className="row">
              <div className="col-md-5 section-three-overlap">
                <div className="section-three-img-hover">
                  <img id="section-three-person" src="../app/images/Home/person.png" />
                  <img src="../app/images/Home/XMLID_13_.png" />
                </div>
                <img id="section-three-step3" src="../app/images/Home/step1.png" />
              </div>
              <div className="col-md-7 section-three-step3">
                <img src="../app/images/Home/beinformed.png" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 section-three-overlap">
                <div className="section-three-img-hover">
                  <img id="section-three-person" src="../app/images/Home/person.png" />
                  <img src="../app/images/Home/XMLID_13_.png" />
                </div>
                <img id="section-three-step3" src="../app/images/Home/step2.png" />
              </div>
              <div className="col-md-7 section-three-step3">
                <img src="../app/images/Home/makeaplan.png" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 section-three-overlap">
                <div className="section-three-img-hover">
                  <img id="section-three-person" src="../app/images/Home/person.png" />
                  <img src="../app/images/Home/XMLID_13_.png" />
                </div>
                <img id="section-three-step3" src="../app/images/Home/step3.png" />
              </div>
              <div className="col-md-7 section-three-step3">
                <img src="../app/images/Home/getakit.png" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-offset-3 col-md-2">
                <img id="section-three-hooktext1" src="../app/images/Home/svcguide.png" />
              </div>
              <div className="col-md-2">
                <img id="" src="../app/images/Home/hook.png" />
              </div>
              <div className="col-md-5">
                <img id="section-three-hooktext2" src="../app/images/Home/XMLID_225_.png" />
                <img id="section-three-hooktext3" src="../app/images/Home/disastersafe.png" />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default SectionThree;
