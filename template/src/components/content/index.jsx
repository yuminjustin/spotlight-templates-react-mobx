import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Loadable from 'react-loadable';

import { Layout } from 'antd'
const { Content } = Layout

function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

const Hello = Loadable({
  loader: () => import('../hello'),
  loading: Loading,
  delay: 300
});

const Demo = Loadable({
  loader: () => import('../demo'),
  loading: Loading,
  delay: 300
});

const Test = Loadable({
  loader: () => import('../test'),
  loading: Loading,
  delay: 300
});

// 404
const NoMatch = Loadable({
  loader: () => import('../error'),
  loading: Loading,
  delay: 300
});


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
