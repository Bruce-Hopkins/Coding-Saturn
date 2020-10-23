import PropTypes from "prop-types"
import smoothscroll from 'smoothscroll-polyfill';
import Scrollspy from 'react-scrollspy'
import React from "react"
import "./header.css"

class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    smoothscroll.polyfill();
    window.addEventListener('scroll', this.handleScroll)
  }
  
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 500) {
      this.setState({hasScrolled: true})
    } else {
      this.setState({ hasScrolled: false})
    }
  }

  render() {
    return (

    <header >
    
      <div className={this.state.hasScrolled ? 'Navbar NavbarNotScrolled NavbarScrolled' : 'Navbar NavbarNotScrolled'}>
        <Scrollspy items={ ['Our-services', 'Get started'] }  className="Navbar-scrollspy" currentClassName={this.state.hasScrolled ? 'header-group is-current-scrolled' : 'header-group '}>
            <li><a href="#Our-services">Our Services </a></li>
            <li><a href="#Get started"> Get started </a></li>
        </Scrollspy>
      </div>
  
    </header>

    )
  }
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
