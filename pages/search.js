import React from 'react'
import Head from 'next/head'

import TopBar from '../components/top-bar'
import TopBanner from '../components/top-banner'
import SearchBar from '../components/search-bar'
import JobDetailsCard from '../components/job-details-card'

const Search = (props) => {
  return (
    <>
      <div className="search-container">
        <Head>
          <title>Search - pgrkam</title>
          <meta property="og:title" content="Search - pgrkam" />
        </Head>
        <TopBar rootClassName="top-bar-root-class-name3"></TopBar>
        <TopBanner rootClassName="top-banner-root-class-name3"></TopBanner>
        <div className="search-container1">
          <SearchBar rootClassName="search-bar-root-class-name1"></SearchBar>
          <div className="search-container2">
            <span>30145 Results Found</span>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="search-link"
            >
              <span>Filters</span>
              <br></br>
            </a>
          </div>
          <div className="search-container3">
            <JobDetailsCard rootClassName="job-details-card-root-class-name"></JobDetailsCard>
            <JobDetailsCard rootClassName="job-details-card-root-class-name1"></JobDetailsCard>
            <JobDetailsCard rootClassName="job-details-card-root-class-name2"></JobDetailsCard>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .search-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .search-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .search-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .search-link {
            color: var(--dl-color-primary-100);
          }
          .search-container3 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 1000px;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Search
