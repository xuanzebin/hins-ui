import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router, Link, Route } from 'react-router-dom'

import Icon from './components/icon'
import Button from './components/button'
import Dialog from './components/dialog'
import Layout from './components/layout'

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
            <li>
              <Link to="/layout">Layout</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/icon" component={Icon} />
          <Route path="/button" component={Button} />
          <Route path="/dialog" component={Dialog} />
          <Route path="/layout" component={Layout} />
        </main>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
