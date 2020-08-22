import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, NavLink as Link, Route } from 'react-router-dom'

import { Layout, Header, Content, Footer, Sider } from '@app'

import logo from '../assets/logo/logo.png'
import { IconExample, ButtonExample, DialogExample, LayoutExample } from './components'

import './index.scss'

function App() {
  return (
    <Router>
      <Layout className="hins-ui-page">
        <Header>
          <img src={logo} alt="" />
          <span>HINS UI</span>
        </Header>
        <Layout>
          <Sider>
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
          </Sider>
          <Content>
            <main>
              <Route path="/icon" component={IconExample} />
              <Route path="/button" component={ButtonExample} />
              <Route path="/dialog" component={DialogExample} />
              <Route path="/layout" component={LayoutExample} />
            </main>
          </Content>
        </Layout>
        <Footer>
          <span>&copy; 宣泽彬</span>
        </Footer>
      </Layout>
    </Router>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
