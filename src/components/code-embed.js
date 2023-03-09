import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './code-embed.css'

const CodeEmbed = (props) => {
  return (
    <div className={`code-embed-container ${props.rootClassName} `}>
      <div className="code-embed-code-embed">
        <DangerousHTML
          html={`<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfCc8kPmoCr7Ay3utdRCf2DdfuAB9_tHEvuboKG27kqZyWsRg/viewform?embedded=true" width="640" height="6618" frameborder="0" marginheight="0" marginwidth="0">Laadimine…</iframe>`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

CodeEmbed.defaultProps = {
  rootClassName: '',
}

CodeEmbed.propTypes = {
  rootClassName: PropTypes.string,
}

export default CodeEmbed
