import React, {Component} from 'react';

const disaterCategory = [
  {"category_img": "/static/images/Home/home_symbol_hydro.svg"},
  {"category_img": "/static/images/Home/home_symbol_geo.svg"},
  {"category_img": "/static/images/Home/home_symbol_climato.svg"},
  {"category_img": "/static/images/Home/home_symbol_bio.svg"},
  {"category_img": "/static/images/Home/home_symbol_human.svg"},
  {"category_img": "/static/images/Home/home_symbol_selfhelp.svg"},
]
class SectionThree extends Component {

  renderDisasterCategory() {
    return disaterCategory.map((category, i) => {
      return (
        <img
          key={i}
          className="section-three-disaster-category-img"
          src={category.category_img}
        />
      )
    });
  }
  render(){
    return (
      <section className="container">
        <div className="section-three" id="overlay-absolute">
          <p className="section-three-title">Prepare NOW</p>
          <p className="section-three-description">per Disaster Category</p>
          <div className="container section-three-image-size">
            {this.renderDisasterCategory()}
          </div>
        </div>
      </section>
    )
  }
}

export default SectionThree;
