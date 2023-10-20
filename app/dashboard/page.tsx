"use client"

import React from 'react'
import Head from 'next/head'

import TopBar from '@/components/top-bar'
import TopBanner from '@/components/top-banner'
import DashboardNavbar from '@/components/dashboard-navbar'
import SearchBar from '@/components/search-bar'

const Dashboard = (props) => {
  return (
    <>
      <div className="dashboard-container">
        <Head>
          <title>Dashboard - pgrkam</title>
          <meta property="og:title" content="Dashboard - pgrkam" />
        </Head>
        <TopBar rootClassName="top-bar-root-class-name4"></TopBar>
        <TopBanner rootClassName="top-banner-root-class-name4"></TopBanner>
        <DashboardNavbar rootClassName="dashboard-navbar-root-class-name"></DashboardNavbar>
        <div className="dashboard-container1">
          <SearchBar rootClassName="search-bar-root-class-name"></SearchBar>
          <div className="dashboard-container2">
            <span>Found 52345 Jobs</span>
            <button type="button" className="btn-link button">
              Filter Results
            </button>
          </div>
          <div className="dashboard-container3"></div>
        </div>
      </div>
      <style jsx>
        {`
          .dashboard-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .dashboard-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .dashboard-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .dashboard-container3 {
            flex: 0 0 auto;
            width: 1150px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: var(--dl-size-size-large);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
        `}
      </style>
    </>
  )
}

export default Dashboard
