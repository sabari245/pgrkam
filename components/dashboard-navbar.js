import React from 'react'

import PropTypes from 'prop-types'
import Link from 'next/link'

const DashboardNavbar = (props) => {
  return (
    <>
      <div className={`dashboard-navbar-container ${props.rootClassName} `}>
        <span className="dashboard-navbar-text">{props.heading}</span>
        <Link href={"/"}>
          <a rel="noreferrer noopener">
            {props.link1}
          </a>
        </Link>
        <a rel="noreferrer noopener">
          {props.link2}
        </a>
        <a rel="noreferrer noopener">
          {props.link3}
        </a>
      </div>
      <style jsx>
        {`
          .dashboard-navbar-container {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: var(--dl-size-size-small);
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: flex-start;
            background-color: rgba(237, 144, 23, 0.25);
          }
          .dashboard-navbar-text {
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
          }
        `}
      </style>
    </>
  )
}

DashboardNavbar.defaultProps = {
  rootClassName: '',
  link3: 'Profile',
  link2: 'Applications',
  link_text2: 'https://example.com',
  link_text3: 'https://example.com',
  link1: 'Home',
  link_text1: 'https://example.com',
  heading: 'Dashboard',
}

DashboardNavbar.propTypes = {
  rootClassName: PropTypes.string,
  link3: PropTypes.string,
  link2: PropTypes.string,
  link_text2: PropTypes.string,
  link_text3: PropTypes.string,
  link1: PropTypes.string,
  link_text1: PropTypes.string,
  heading: PropTypes.string,
}

export default DashboardNavbar
