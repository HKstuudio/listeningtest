import React from 'react'

import PropTypes from 'prop-types'

import './iframe.css'

const Iframe = (props) => {
  return (
    <div className={`iframe-container ${props.rootClassName} `}>
      <iframe
        src="https://oversamplingabtest.000webhostapp.com/abplayer.html"
        className="iframe-iframe"
      ></iframe>
    </div>
  )
}

Iframe.defaultProps = {
  rootClassName: '',
}

Iframe.propTypes = {
  rootClassName: PropTypes.string,
}

export default Iframe
