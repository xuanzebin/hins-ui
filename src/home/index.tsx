import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router, Link, Route } from 'react-router-dom'

import Icon from './components/icon'
import Button from './components/button'
import Dialog from './components/dialog'

import './index.scss'

function App() {
  return (
    <Router>
      <div>
        <aside>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/icon" component={Icon} />
          <Route path="/dialog" component={Dialog} />
        </main>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
