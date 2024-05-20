import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Vanilla } from '@features/Vanilla'
import { ReactFeature } from '@features/ReactFeature'
import styled from 'styled-components'
import './styles.css'

const NavBar = styled.nav`
  background-color: white;
  border-bottom: 2px solid black;
  padding: 12px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;
    align-items: center;
    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
      font-size: 21px;
      font-family: sans-serif;
      cursor: pointer;
    }
  }
`

const App = () => (
  <Router>
    <div>
      <NavBar>
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
