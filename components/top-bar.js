import React from 'react'

import PropTypes from 'prop-types'

const TopBar = (props) => {
  return (
    <>
      <div className={`top-bar-container ${props.rootClassName} `}>
        <div className="top-bar-container1">
          <div className="top-bar-container2">
            <span className="MiniLinks">{props.lt1}</span>
            <span className="MiniLinks">{props.lt2}</span>
          </div>
          <div className="top-bar-container3">
            <span className="MiniLinks">{props.rt1}</span>
            <span className="MiniLinks">{props.rt2}</span>
            <span className="MiniLinks">{props.rt3}</span>
            <span className="MiniLinks">{props.rt4}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .top-bar-container {
            width: 100%;
            height: var(--dl-size-size-small);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .top-bar-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 0px;
            justify-content: space-between;
            background-color: #ed9017;
          }
          .top-bar-container2 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
          }
          .top-bar-container3 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: auto;
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </>
  )
}

TopBar.defaultProps = {
  rootClassName: '',
  rt1: 'English',
  text: 'Link',
  lt1: 'User Manuals',
  rt2: 'A+',
  rt4: 'FAQs',
  Hellow: 'https://example.com',
  lt2: 'Screen Reader',
  rt3: 'A-',
}

TopBar.propTypes = {
  rootClassName: PropTypes.string,
  rt1: PropTypes.string,
  text: PropTypes.string,
  lt1: PropTypes.string,
  rt2: PropTypes.string,
  rt4: PropTypes.string,
  Hellow: PropTypes.string,
  lt2: PropTypes.string,
  rt3: PropTypes.string,
}

export default TopBar
