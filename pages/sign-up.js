// import React from 'react'
import Head from 'next/head'
import React, { useState } from 'react';

import TopBar from '../components/top-bar'
import TopBanner from '../components/top-banner'
import { supabase } from '../components/supabase';

const SignUp = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    retypePassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, retypePassword } = formData;

    if (password !== retypePassword) {
      console.error('Passwords do not match');
      // Handle password mismatch error here, e.g., show an error message
      return;
    }

    try {
      const { data, error } = await supabase
        .from('users')
        .upsert([
          {
            email: email,
            emailVisibility: true,
            password: password,
            passwordConfirm: retypePassword,
          },
        ]);

      if (error) {
        console.error('Signup error:', error.message);
        // Handle signup error here, e.g., show an error message
      } else {
        console.log('User signed up:', data);
        // Redirect to the authenticated page or perform other actions
      }
    } catch (error) {
      console.error('Signup error:', error.message);
      // Handle unexpected signup errors here
    }

    // Optionally, you can reset the form fields
    setFormData({
      email: '',
      password: '',
      retypePassword: '',
    });
  };

  return (
    <>
      <div className="sign-up-container">
        <Head>
          <title>Sign-Up - pgrkam</title>
          <meta property="og:title" content="Sign-Up - pgrkam" />
        </Head>
        <TopBar rootClassName="top-bar-root-class-name1"></TopBar>
        <TopBanner rootClassName="top-banner-root-class-name1"></TopBanner>
        <div className="sign-up-container01">
          <div className="sign-up-container02">
            <form className="sign-up-form" onSubmit={handleSubmit}>
              <div className="sign-up-container03">
                <h1 className="sign-up-text">Create Account</h1>
                <span className="sign-up-text01">
                  <span>Please create your account to continue</span>
                  <br />
                </span>
              </div>
              <div className="sign-up-container04">
                <div className="sign-up-container05">
                  <label className="sign-up-text04 Label1">
                    <span>Email</span>
                    <br />
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email ID"
                    className="input"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="sign-up-container06">
                  <label className="sign-up-text07 Label1">
                    <span>Password</span>
                    <br />
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    className="input"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="sign-up-container07">
                  <label className="sign-up-text10 Label1">
                    <span>Retype Password</span>
                    <br />
                  </label>
                  <input
                    type="password"
                    name="retypePassword"
                    placeholder="Retype your password"
                    className="input"
                    value={formData.retypePassword}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <button type="submit" className="sign-up-button button">
                <span>
                  <span>Submit</span>
                  <br />
                </span>
              </button>
              <div className="sign-up-container08">
                <div className="sign-up-container09">
                  <span className="sign-up-text16">Already Have an Account ? </span>
                  <a
                    href="/login"
                    className="sign-up-link"
                  >
                    Login
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .sign-up-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .sign-up-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sign-up-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: #ffffff;
          }
          .sign-up-form {
            gap: var(--dl-space-space-unit);
            flex: 0;
            width: var(--dl-size-size-maxwidth);
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
            background-color: rgba(0, 0, 0, 0.6);
          }
          .sign-up-container03 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .sign-up-text {
            color: rgb(255, 255, 255);
          }
          .sign-up-text01 {
            color: rgb(208, 208, 208);
            text-align: center;
          }
          .sign-up-container04 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-up-container05 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-up-text04 {
            color: #ffffff;
          }
          .sign-up-container06 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-up-text07 {
            color: #ffffff;
          }
          .sign-up-container07 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-up-text10 {
            color: #ffffff;
          }
          .sign-up-button {
            width: 100%;
            margin-top: var(--dl-space-space-unit);
          }
          .sign-up-container08 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-up-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .sign-up-text16 {
            color: rgb(255, 255, 255);
          }
          .sign-up-link {
            color: rgb(237, 144, 23);
          }
        `}
      </style>
    </>
  )
}

export default SignUp
