import React from 'react';
import ReactDOM from 'react-dom';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';
import { selectCategory } from '../../actions/index';
import { bindActionCreators } from 'redux';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      getScrollTop: 0,
    };
    this.myFunction = this.myFunction.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
        this.myFunction();
    });
  }

  myFunction() {
    const getScrollTop = !this.state.getScrollTop;
    const y = document.body.scrollTop;
    this.setState({getScrollTop: y});
  }
  
  renderNavList() {
    return this.props.categories.map((category) => {
      return (
        <li key={category.title}>
          <Link to={category.to}>{category.parent_category}</Link>
        </li>
      );
    });
  }

  render() {
    const { getScrollTop } = this.state;
    const navClass = getScrollTop <= 40 ? "" : "navbar-scroll";
    return (
      <div data-spy="scroll" data-target="#myScrollspy">
      	{/* Fixed Nav */}
      	<nav className={"navbar navbar-default navbar-fixed-top " + navClass}
          id="myScrollspy">
      		<div className="container">
      			<div className="navbar-header">
      				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                      data-target="#navbar" aria-expanded="true" aria-controls="navbar">
      					<span className="sr-only">Toggle navigation</span>
      					<span className="icon-bar"></span>
      					<span className="icon-bar"></span>
      					<span className="icon-bar"></span>
      				</button>
      				<a className="navbar-brand" href="/">P.R.E.P</a>
      			</div>
      			<div id="navbar" class="navbar-collapse collapse">
      				<ul className="nav navbar-nav navbar-right w3-topnav">
                { this.renderNavList() }
      				</ul>
      			</div>
      		</div>
      	</nav>
      	{ /*Close Fixed Nav */	}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCategory: selectCategory }, dispatch );
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
