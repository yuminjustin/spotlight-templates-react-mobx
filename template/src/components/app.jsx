import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import Headers from './head'
import Bar from './bar'
import Content from './content'

import { Layout } from 'antd';
import style from 'B/assets/css/style.css';
const history = createBrowserHistory();
const { Sider } = Layout;

@observer
export default class App extends Component {
  render() {
    let { props } = this;

    return (
      <Router history={history}>
        <Layout>
          <Headers />
          <Layout>
            <Sider>
              <Bar />
            </Sider>
            <Layout className={style._main_body}>
              <Content />
            </Layout>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

