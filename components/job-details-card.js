import React from 'react'

import PropTypes from 'prop-types'

const JobDetailsCard = (props) => {
  return (
    <>
      <div className={`job-details-card-container ${props.rootClassName} `}>
        <h1 className="job-details-card-text">{props.jobTitle}</h1>
        <div className="job-details-card-container1">
          <span className="job-details-card-text1 Secondary">
            {props.postedBy}
          </span>
          <span className="job-details-card-text2 Secondary">
            {props.postedOn}
          </span>
        </div>
        <span className="job-details-card-text3">{props.shortDescription}</span>
        <div className="job-details-card-container2">
          <div className="job-details-card-container3">
            <span className="job-details-card-text4 Secondary">
              {props.applicants}
            </span>
            <span className="job-details-card-text5 Secondary">
              {props.location}
            </span>
          </div>
          <button type="button" className="button">
            {props.button}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .job-details-card-container {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            box-shadow: 0px 4px 20px 0px #d4d4d4;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 2px;
            border-radius: 15px;
            flex-direction: column;
            background-color: #ffffff;
          }
          .job-details-card-text {
            font-size: 1.6rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .job-details-card-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .job-details-card-text1 {
            color: var(--dl-color-gray-500);
          }
          .job-details-card-text2 {
            color: var(--dl-color-gray-500);
            margin-left: var(--dl-space-space-unit);
          }
          .job-details-card-text3 {
            color: #414141;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .job-details-card-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            justify-content: space-between;
          }
          .job-details-card-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .job-details-card-text4 {
            color: var(--dl-color-gray-500);
          }
          .job-details-card-text5 {
            color: var(--dl-color-gray-500);
            margin-left: var(--dl-space-space-unit);
          }
        `}
      </style>
    </>
  )
}

JobDetailsCard.defaultProps = {
  jobTitle: 'Software Developer | Remote | Entry Level',
  postedBy: 'By GHAR GHAR PORTAL',
  postedOn: 'Posted on 18/11/2021',
  shortDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
  applicants: '122 Applicants',
  location: 'Remote',
  button: 'Apply',
  rootClassName: '',
}

JobDetailsCard.propTypes = {
  jobTitle: PropTypes.string,
  postedBy: PropTypes.string,
  postedOn: PropTypes.string,
  shortDescription: PropTypes.string,
  applicants: PropTypes.string,
  location: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default JobDetailsCard
