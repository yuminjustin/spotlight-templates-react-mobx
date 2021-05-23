import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from 'react-router-dom'

import { Layout, Spin, Space } from "antd";
const { Content } = Layout,

  Hello = lazy(() => import("../hello")),
  Demo = lazy(() => import("../demo")),
  Test = lazy(() => import("../test")),
  NoMatch = lazy(() => import("../error"));


export default class Contents extends Component {
  state = {
    height: window.innerHeight - 84
  };

  render() {

    return (
      <Content className="_content" style=\{{ height: this.state.height }}>
        <Suspense
          fallback={
            <div className="_error_404">
              <Space size="middle">
                <Spin size="large" />
              </Space>
            </div>
          }
        >
          <Switch>
            <Route exact path="/" component={Hello} />
            <Route exact path="/demo" component={Demo} />
            <Route exact path="/test" component={Test} />
            <Route component={NoMatch} />
          </Switch>
        </Suspense>
      </Content>
    );
  }
}
