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
    // For the smoothscroll when you click on the top links of the header
    smoothscroll.polyfill();
    
    //Scroll event listener
    window.addEventListener('scroll', this.handleScroll)
  }
  
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    /* If the user has scrolled more than 500 to change hasScrolled
      Which in this case changes the color of the header
    */
    if (scrollTop > 500) {
      this.setState({hasScrolled: true})
    } else {
      this.setState({ hasScrolled: false})
    }
  }

  render() {
    return (

    <header >
      {/*If the component has scrolled more than 500px then add 
      the NavbarScrolled class, which changes the color scheme */}
      <div className={this.state.hasScrolled ? 'Navbar NavbarScrolled' : 'Navbar'}>

        {/* The React Scrollspy, if the user scrolled passed 500px and a 
        scrolllspy component is highlighted then it adds the is-current-scrolled class. */}
        <Scrollspy items={ ['Our-services', 'Get started'] }  className="Navbar-scrollspy" currentClassName={this.state.hasScrolled ? 'current is-current-scrolled' : 'current'}>
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
