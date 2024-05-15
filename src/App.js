import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Vanilla } from '@features/Vanilla'

const ReactPage = () => {
  return <div>React</div>
}

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
      <Route path="/" element={<ReactPage />}></Route>
      <Route path="/vanilla" element={<Vanilla />}></Route>
    </Routes>
  </Router>
)

export { App }
