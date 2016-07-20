import React, { Component } from "react";
import SectionOne from '../components/Home/SectionOne';
import SectionTwo from '../components/Home/SectionTwo';
import SectionThree from '../components/Home/SectionThree';
import SectionFour from '../components/Home/SectionFour';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {};
  }

  render () {
    return (
      <div>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <a href="#spytop" class="top"><span class="glyphicon glyphicon-chevron-up"></span></a>
      </div>
    );
  }
}

export default Home;
