import React from 'react'

import { Layout, Header, Content, Footer, Sider } from '@components/Layout'

import './index.scss'

function LayoutContent() {
  return (
    <div className="layout-example-wrapper">
      <div>
        <p>example 1</p>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <p>example 2</p>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <p>example 3</p>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Content>Content</Content>
            <Sider>Sider</Sider>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <p>example 4</p>
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  )
}

export default LayoutContent
