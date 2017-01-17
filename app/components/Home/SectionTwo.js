import React, {Component} from 'react';

const sectionTwoImg = [
  {
    "step_img": "/static/images/Home/home_step_num_1.png",
    "info_img": "/static/images/Home/home_step_informed@2x.png"
  }, {
    "step_img": "/static/images/Home/home_step_num_2.png",
    "info_img": "/static/images/Home/home_step_kit@2x.png"
  }, {
    "step_img": "/static/images/Home/home_step_num_3.png",
    "info_img": "/static/images/Home/home_step_plan@2x.png"
  }
];

class SectionTwo extends Component {

  createFourCol() {
    return sectionTwoImg.map((img, i) => {
      return (
        <div key={i}>
          <div className="section-two-img-hover section-two-overlap">
            <img
              className="section-two-person"
              src="/static/images/Home/home_person.png"
            />
            <img className="section-two-person-with" src="/static/images/Home/home_step_hover.png" width="130px" />
          </div>
          <div className="section-two-four-col">
            <span className="section-two-four-text">STEP</span>
            <img className="section-two-four-num" src={img.step_img} />
            <img className="section-two-four-img" src={img.info_img}  />
          </div>
        </div>
      )
    })
  }

  render(){
    return (
      <section className="container">
        <div className="row section-two-content">
          <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2">
            <h2 className="section-two-text-whatis"><strong>What</strong> is</h2>
          </div>
          <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
            <img className="section-two-middle" src="/static/images/Home/home_prep.png" />
          </div>
          <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 section-two-img section-two-text">
            <img className="" src="/static/images/Common/icon_speaker.png" />
            <span className="section-two-text-red-title">P. R. E. P.</span><br />
            <span><strong>(Pre-pared Responses and Emergency Planning)</strong> aims to raise awaremess for <strong>disaster preparedness and emergency planning</strong> with succint,
            self-ex-planatory visual guides, and to </span><span className="section-two-text-red">increase resilience of local
            community in coping with disasters, haxards and other catastrophics events.</span>
          </div>
          <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 section-two-four">
            {this.createFourCol()}
            <div className="section-two-four-col">
              <span className="section-two-four-last">VISUAL<br /> GUIDES</span>
              <img className="section-two-four-img" src="/static/images/Home/home_step_visualguide@2x.png"  />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SectionTwo;
