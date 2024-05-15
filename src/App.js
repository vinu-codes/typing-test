import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Vanilla } from '@features/Vanilla'
import { ReactFeature } from '@features/ReactFeature'

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">React</Link>
          </li>
          <li>
            <Link to="/vanilla">Vanilla</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Routes>
      <Route path="/" element={<ReactFeature />}></Route>
      <Route path="/vanilla" element={<Vanilla />}></Route>
    </Routes>
  </Router>
)

export { App }
