import React, { useState } from 'react'
import Head from 'next/head'

import TopBar from '../components/top-bar'
import TopBanner from '../components/top-banner'
import { pb } from '../components/pocketbase'

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    // You can handle the login form data here
    console.log('Login Form Data:', formData);
    // Add your logic to authenticate the user, e.g., check credentials
    const authData = await pb.collection("users").authWithPassword(
      formData.email,
      formData.password
    )
    console.log(authData)

    // Optionally, you can clear the form fields
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <div className="login-container">
        <Head>
          <title>Login - pgrkam</title>
          <meta property="og:title" content="Login - pgrkam" />
        </Head>
        <TopBar rootClassName="top-bar-root-class-name"></TopBar>
        <TopBanner rootClassName="top-banner-root-class-name"></TopBanner>
        <div className="login-container01">
          <div className="login-container02">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="login-container03">
                <h1 className="login-text">Login</h1>
                <span className="login-text01">
                  <span>Please login to continue</span>
                  <br />
                </span>
              </div>
              <div className="login-container04">
                <div className="login-container05">
                  <label className="login-text04 Label1">
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
                <div className="login-container06">
                  <label className="login-text07 Label1">
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
              </div>
              <button type="submit" className="login-button button">
                <span>
                  <span>Submit</span>
                  <br />
                </span>
              </button>
              <div className="login-container07">
                <div className="login-container08">
                  <span className="login-text13">Forgot Password ? </span>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="login-link"
                  >
                    Reset
                  </a>
                </div>
                <div className="login-container09">
                  <span className="login-text14">Don't have an Account? </span>
                  <a href="/sign-up" className="login-link1">
                    Create
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .login-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .login-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .login-container02 {
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
          .login-form {
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
          .login-container03 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .login-text {
            color: rgb(255, 255, 255);
          }
          .login-text01 {
            color: rgb(208, 208, 208);
          }
          .login-container04 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .login-container05 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .login-text04 {
            color: #ffffff;
          }
          .login-container06 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .login-text07 {
            color: #ffffff;
          }
          .login-button {
            width: 100%;
            margin-top: var(--dl-space-space-unit);
          }
          .login-container07 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .login-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .login-text13 {
            color: #ffffff;
          }
          .login-link {
            color: #ed9017;
          }
          .login-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .login-text14 {
            color: rgb(255, 255, 255);
          }
          .login-link1 {
            color: rgb(237, 144, 23);
          }
        `}
      </style>
    </>
  )
}

export default Login
