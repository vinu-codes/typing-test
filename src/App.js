import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Vanilla } from '@features/Vanilla'
import { ReactFeature } from '@features/ReactFeature'
import styled from 'styled-components'
import './styles.css'

const NavBar = styled.nav`
  background-color: #121716;
  border-bottom: 2px solid black;
  padding: 12px;
  display: flex;
  align-items: center;
  span {
    color: white;
    font-size: 24px;
    font-weight: bold;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-left: auto;
    display: flex;
    gap: 10px;
    align-items: center;
    li {
      padding: 10px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: bold;
    }
    a {
      text-decoration: none;
      color: grey;
      font-weight: bold;
      font-size: 16px;
      font-family: sans-serif;
      cursor: pointer;
      &:hover {
        background: lightgrey;
        padding: 10px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
`

const App = () => (
  <Router>
    <div>
      <NavBar>
        <span>TypeTest 💬</span>
        <ul>
          <li>
            <Link to="/">React</Link>
          </li>
          <li>
            <Link to="/vanilla">Vanilla</Link>
          </li>
        </ul>
      </NavBar>
    </div>
    <Routes>
      <Route path="/" element={<ReactFeature />}></Route>
      <Route path="/vanilla" element={<Vanilla />}></Route>
    </Routes>
  </Router>
)

export { App }
