import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { observer } from 'mobx-react';
import Bundle from '../../bundle'

import { Layout } from 'antd'
const { Content } = Layout

const Hello = (props) => (
  <Bundle load={() => import('../hello')}>
    {(Hello) => <Hello {...props} />}
  </Bundle>
);

const Demo = (props) => (
  <Bundle load={() => import('../demo')}>
    {(Demo) => <Demo {...props} />}
  </Bundle>
);

const Test = (props) => (
  <Bundle load={() => import('../test')}>
    {(Test) => <Test {...props} />}
  </Bundle>
);

// 404
const NoMatch = (props) => (
  <Bundle load={() => import('../error')}>
    {(NoMatch) => <NoMatch {...props} />}
  </Bundle>
);


export default class Contents extends Component {
  state = {
    height: window.innerHeight - 84
  };

  render() {

    return (
      <Content className="_content" style=\{{ height: this.state.height }}>
        <Switch>
          <Route exact path="/" component={Hello} />
          <Route exact path="/demo" component={Demo} />
          <Route exact path="/test" component={Test} />
          <Route component={NoMatch} />
        </Switch>
      </Content>
    );
  }
}
