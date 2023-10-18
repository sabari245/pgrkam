import React from 'react'

import PropTypes from 'prop-types'

const JobsCard = (props) => {
  return (
    <>
      <div className={`jobs-card-container ${props.rootClassName} `}>
        <h1 className="jobs-card-text">{props.count}</h1>
        <span className="jobs-card-text1">{props.job_title}</span>
      </div>
      <style jsx>
        {`
          .jobs-card-container {
            gap: var(--dl-space-space-halfunit);
            width: var(--dl-size-size-xlarge);
            height: var(--dl-size-size-medium);
            display: flex;
            position: relative;
            box-shadow: 0px 4px 20px 0px #ededed;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-900);
            border-width: 2px;
            border-radius: 15px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: #ffffff;
          }
          .jobs-card-text {
            font-size: 1.5em;
          }
          .jobs-card-text1 {
            color: #ed9017;
            font-style: normal;
            font-weight: 700;
          }
        `}
      </style>
    </>
  )
}

JobsCard.defaultProps = {
  job_title: 'Govt. Jobs',
  rootClassName: '',
  count: '20663',
}

JobsCard.propTypes = {
  job_title: PropTypes.string,
  rootClassName: PropTypes.string,
  count: PropTypes.string,
}

export default JobsCard
