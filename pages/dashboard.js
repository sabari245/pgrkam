import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import TopBar from '../components/top-bar'
import TopBanner from '../components/top-banner'
import DashboardNavbar from '../components/dashboard-navbar'
import SearchBar from '../components/search-bar'
import { supabase } from '../components/supabase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

const Dashboard = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState('');
  const [existingName, setExistingName] = useState('');
  const [existingEmail, setExistingEmail] = useState('');
  const [existingPreferences, setExistingPreferences] = useState('');

  const router = useRouter();

  useEffect(() => {
    // Fetch existing user data and populate the state
    // Replace with your Supabase data retrieval logic
    async function fetchUserData() {
      const { data, error } = await supabase.auth.getUser();

      // console.log(data)

      if (data) {
        setExistingName(data.user.user_metadata.username);

        setExistingEmail(data.user.email);
        setExistingPreferences(data.user.user_metadata.preferences);
      }
    }

    fetchUserData();
  }, []);

  const handleSave = async () => {
    const updatedData = {};

    if (name) {
      updatedData.username = name;
    } else {
      updatedData.username = existingName;
    }

    if (email) {
      updatedData.email = email;
    } else {
      updatedData.email = existingEmail;
    }

    if (preferences) {
      updatedData.preferences = preferences;
    } else {
      updatedData.preferences = existingPreferences;
    }

    const { data, error: updateError } = await supabase.auth.updateUser({
      email: updatedData.email,
      data: {
        username: updatedData.username,
        preferences: updatedData.preferences,
      },
    });
    toast.success('Successfully updated the details!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      router.reload();
    }, 4000)

    if (updateError) {
      // Handle the error
      console.error(updateError);
      toast.error('Something went wrong!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

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
          <div className="dashboard-container2">
            <form className="dashboard-form">
              <h1 className="dashboard-text">
                <span>Personal Information</span>
                <br></br>
              </h1>
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p>Existing Name: {existingName}</p>

              <label>Email</label>
              <input
                type="text"
                placeholder="Your email id"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p>Existing Email: {existingEmail}</p>

              <h1 className="dashboard-text5">
                <span>Job Preferences</span>
                <br></br>
              </h1>
              <label>Job Preferences</label>
              <input
                type="text"
                placeholder="Job title or technologies separated by comma"
                className="input"
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
              />
              <p>Existing Preferences: {existingPreferences}</p>

              <div className="dashboard-container3">
                <button type="button" className="dashboard-button button">
                  Cancel
                </button>
                <button type="button" className="button" onClick={handleSave}>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: flex-start;
          }
          .dashboard-container2 {
            flex: 0 0 auto;
            width: 996px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .dashboard-form {
            gap: var(--dl-space-space-halfunit);
            width: 400px;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .dashboard-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .dashboard-text5 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-unit);
          }
          .dashboard-container3 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            justify-content: flex-start;
          }
          .dashboard-button {
            background-color: #737373;
          }
        `}
      </style>
    </>
  )
}

export default Dashboard
