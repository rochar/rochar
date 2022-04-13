  # Design
  Designed based on:
   
   * Template Name: iPortfolio - v3.7.0
   * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
   * Author: BootstrapMade.com
   * License: https://bootstrapmade.com/license/

   unmodified assets are in /public/iportfolio


   ## Css Overrides
   Can be found in src/assets/overrideiportfolio.css

   ## Changes to main.js 
   changes done to main.js directly

  Updated function select and to handle properly anchors. This is required because the usage of React Router Hash.
  <pre>
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
   <b> el= el.replace("#/#","#");</b>
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  </pre>

  ## Manual Changes
   * delete /public/iportfolio/img all images from this root folder

  