import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { HashRouter } from "react-router-dom";

import Headers from './head'
import Bar from './bar'
import Content from './content'

import { Layout } from 'antd';
import style from 'B/assets/css/style.css';
const { Sider } = Layout;

@observer
export default class App extends Component {
  render() {
    let { props } = this;

    return (
      <HashRouter>
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
      </HashRouter>
    )
  }
}

