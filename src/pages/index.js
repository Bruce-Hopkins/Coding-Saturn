import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {FaInstagram, FaDiscord} from 'react-icons/fa';
import {OurServices} from '../components/our-services'

import "../components/index.css"
const IndexPage = () => (

  //The layout and the css that comes with it for the overall website
  <Layout>
    
    {/* The SEO */}
    <SEO title="Home" />

    {/* The layout for the main page */}
    <div className="Main">

      {/*The image and the headers on the main page*/}
      <div className="Hero">
        <h2>Learn programmming at</h2>
        <h1> The Coding <span id="coding"> Saturn</span></h1>

        <p>Take Youtube lession and join our Discord server to learn programming languages such as C++, C# and Python</p>
        <a href="#Our-services"> Learn More </a>

       </div>
  
      <div>

        {/* The "Our Services" and the cards. In it contains the
         Javascript and the cards components that is the enitre section */}
        <OurServices/>

        {/* The final component*/}
        <div className="Main-Footer"> 
          <h3> What to get Started? </h3>
          <ul className="button-group">
            <a href=""> Take Courses on Youtube</a>
            <a href=""> Join our Discord </a>
          </ul>
          <ul className="contact-links" id="Get started"> 
            <a href=""> <FaInstagram id="instagram-icon"/> </a>
            <a href=""> <FaDiscord id="discord-icon"/> </a>

          </ul>
        </div> 
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
