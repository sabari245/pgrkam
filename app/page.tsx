"use client"

import React from 'react'
import Head from 'next/head'

import TopBar from '../components/top-bar'
import TopBanner from '../components/top-banner'
import SearchBar from '../components/search-bar'
import JobsCard from '../components/jobs-card'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>pgrkam</title>
          <meta property="og:title" content="pgrkam" />
        </Head>
        <TopBar rootClassName="top-bar-root-class-name2"></TopBar>
        <TopBanner rootClassName="top-banner-root-class-name2"></TopBanner>
        <div className="home-main-banner">
          {/* <SearchBar></SearchBar> */}
          <div className="home-feature-section">
            <h1>Available Jobs</h1>
            <div className="home-job-card-container">
              <JobsCard rootClassName="jobs-card-root-class-name"></JobsCard>
              <JobsCard
                count="54362"
                job_title="Private Jobs"
                rootClassName="jobs-card-root-class-name3"
              ></JobsCard>
              <JobsCard
                count="2006415"
                job_title=" Job Seekers"
                rootClassName="jobs-card-root-class-name2"
              ></JobsCard>
              <JobsCard
                count="17233"
                job_title="Registered Employees"
                rootClassName="jobs-card-root-class-name1"
              ></JobsCard>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-main-banner {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGJ1aWxkaW5nfGVufDB8fHx8MTY5NzM4MTI3OXww&ixlib=rb-4.0.3&w=1500');
            background-position: center;
          }
          .home-feature-section {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            max-width: 750px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: #ffffff;
          }
          .home-job-card-container {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .home-feature-section {
              width: auto;
            }
            .home-job-card-container {
              flex-wrap: wrap;
              flex-direction: row;
            }
          }
          @media (max-width: 767px) {
            .home-job-card-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .home-job-card-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
