import React from 'react'

import PropTypes from 'prop-types'

const TopBanner = (props) => {
  return (
    <>
      <div className={`top-banner-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="top-banner-image"
        />
        <div className="top-banner-container1">
          <h1 className="top-banner-text">{props.heading}</h1>
          <span className="top-banner-text1">{props.subtitle}</span>
          <span className="top-banner-text2">{props.secondarytitle}</span>
        </div>
      </div>
      <style jsx>
        {`
          .top-banner-container {
            width: 100%;
            height: var(--dl-size-size-large);
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: flex-start;
            background-image: linear-gradient(
              180deg,
              rgb(255, 255, 255) 0%,
              rgba(237, 144, 23, 0.77) 100%
            );
          }
          .top-banner-image {
            width: 75px;
            height: auto;
            object-fit: cover;
          }
          .top-banner-container1 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .top-banner-text {
            width: 478px;
            font-size: 1.5rem;
          }
          .top-banner-text1 {
            font-style: normal;
            font-weight: 600;
          }
          .top-banner-text2 {
            font-style: normal;
            font-weight: 600;
          }
        `}
      </style>
    </>
  )
}

TopBanner.defaultProps = {
  subtitle: 'Depertment of Employment Generation',
  rootClassName: '',
  secondarytitle: 'Skill Development & Training - Govt. Of Punjab, India',
  image_src: '/logo-new2-200w.png',
  image_alt: 'image',
  heading: 'PUNJAB GHAR GHAR ROZGAR',
}

TopBanner.propTypes = {
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
  secondarytitle: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
}

export default TopBanner
