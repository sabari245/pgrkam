import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const SearchBar = (props) => {

  const router = useRouter()
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (router.pathname == "/search") {
      if (router.query.q) {
        setQuery(router.query.q);
      }
    }
  }, [router])

  return (
    <>
      <div className={`search-bar-container ${props.rootClassName} `}>
        <form className="search-bar-form">
          <select name="job-type" className="search-bar-select">
            <option value="government" selected>
              government
            </option>
            <option value="private">private</option>
          </select>
          <input
            type="text"
            name="q"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={props.textinput_placeholder}
            className="input"
          />
          <button type="button" className="search-bar-button button">
            <span>
              <span>Search</span>
              <br></br>
            </span>
          </button>
        </form>
      </div>
      <style jsx>
        {`
          .search-bar-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .search-bar-form {
            gap: var(--dl-space-space-unit);
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .search-bar-select {
            width: auto;
            height: auto;
            padding: 6px;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .search-bar-button {
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
          }
          .search-bar-root-class-name {
            margin-top: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
        `}
      </style>
    </>
  )
}

SearchBar.defaultProps = {
  rootClassName: '',
  textinput_placeholder: 'Find your right job',
}

SearchBar.propTypes = {
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default SearchBar
