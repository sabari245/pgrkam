import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import MiniSearch from "minisearch"
import { jobData } from '../components/data/jobs'

import TopBar from '../components/top-bar'
import TopBanner from '../components/top-banner'
import SearchBar from '../components/search-bar'
import JobDetailsCard from '../components/job-details-card'

const Search = (props) => {

  const router = useRouter();
  const [jobDetails, setJobDetails] = useState([]);
  const searchEngine = new MiniSearch({
    fields: ["jobTitle", "postedBy", "location"],
    storeFields: ["jobTitle", "postedBy", "postedOn", "shortDescription", "applicants", "location"]
  })

  searchEngine.addAll(jobData)

  useEffect(() => {
    console.log("useEffect", router.query.q)
    if (router.query.q) {
      const result = searchEngine.search(router.query.q);
      console.log(result)
      setJobDetails(result)
    }
  }, [router])

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
            <span>{jobDetails.length} Results Found</span>
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
            {
              jobDetails.map((data, i) => (
                <JobDetailsCard
                  rootClassName="job-details-card-root-class-name"
                  jobTitle={data.jobTitle}
                  postedBy={data.postedBy}
                  postedOn={data.postedOn}
                  shortDescription={data.shortDescription}
                  applicants={data.applicants}
                  location={data.location}
                  button="Apply"
                ></JobDetailsCard>
              ))
            }
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
