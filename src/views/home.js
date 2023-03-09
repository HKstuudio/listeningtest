import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Oversampling test</title>
        <meta property="og:title" content="Oversampling test" />
      </Helmet>
      <div id="up" className="home-container01"></div>
      <div className="home-container02">
        <div className="home-container03">
          <div className="home-code-embed">
            <DangerousHTML
              html={`<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeWtdaXmlFHR6z3jnnrVY8JkS1JLi6iEEBYpgd3j83BR5LqTg/viewform?embedded=true" width="640" height="6801" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`}
            ></DangerousHTML>
          </div>
        </div>
        <div className="home-lil-player">
          <iframe
            src="https://kuulamistest123.000webhostapp.com/"
            className="home-iframe"
          ></iframe>
        </div>
        <div className="home-iframes">
          <div className="home-container04">
            <iframe
              id="iframe_1"
              src="https://hkstuudio.github.io/abplayer"
              className="lazy-iframe"
            ></iframe>
            <span>1</span>
          </div>
          <div className="home-container05">
            <span className="home-text01">2</span>
            <iframe
              id="iframe_2"
              src="https://hkstuudio.github.io/abplayer2"
              className="home-iframe02 lazy-iframe"
            ></iframe>
          </div>
          <div className="home-container06">
            <iframe
              id="iframe_3"
              src="https://hkstuudio.github.io/abplayer3"
              className="home-iframe03 lazy-iframe"
            ></iframe>
            <span className="home-text02">3</span>
          </div>
          <div className="home-container07">
            <iframe
              id="iframe_4"
              src="https://hkstuudio.github.io/abplayer4"
              className="home-iframe04 lazy-iframe"
            ></iframe>
            <span className="home-text03">4</span>
          </div>
          <div className="home-container08">
            <iframe
              id="iframe_42"
              src="https://hkstuudio.github.io/abplayer42"
              className="home-iframe05 lazy-iframe"
            ></iframe>
            <span className="home-text04">4.2</span>
          </div>
          <div className="home-container09">
            <iframe
              id="iframe_5"
              src="https://hkstuudio.github.io/abplayer5"
              className="home-iframe06 lazy-iframe"
            ></iframe>
            <span className="home-text05">
              <span>5</span>
              <br></br>
            </span>
          </div>
          <div className="home-container10">
            <iframe
              id="iframe_52"
              src="https://hkstuudio.github.io/abplayer52"
              className="home-iframe07 lazy-iframe"
            ></iframe>
            <span className="home-text08">
              <span>5.2</span>
              <br></br>
            </span>
          </div>
          <div className="home-container11">
            <iframe
              id="iframe_6"
              src="https://hkstuudio.github.io/abplayer6"
              className="home-iframe08 lazy-iframe"
            ></iframe>
            <span className="home-text11">
              <span>6</span>
              <br></br>
            </span>
          </div>
          <div className="home-container12">
            <iframe
              id="iframe_7"
              src="https://hkstuudio.github.io/abplayer7"
              className="home-iframe09 lazy-iframe"
            ></iframe>
            <span className="home-text14">
              <span>7</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div className="home-container13">
        <a href="#up" className="home-link">
          <span>Click here to get back to the top!</span>
          <br></br>
        </a>
      </div>
    </div>
  )
}

export default Home
