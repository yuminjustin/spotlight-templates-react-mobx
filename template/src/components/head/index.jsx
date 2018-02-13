import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types'
import { Layout } from 'antd';
const { Header } = Layout;

@inject('user')
@observer
export default class Headers extends Component {

    componentDidMount() {
        this.props.user.getUser()
    }

    render() {
        let { user } = this.props;

        return (
            <Header>
                <h2 className="_app_name l">Spotlight for Mobx + React</h2>
                <div className="_user r">
                    Hello! {user.name}
                </div>
            </Header>
        );
    }
}
