import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types'
import { Layout } from 'antd';
import style from 'B/assets/css/style.css';
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
                <h2 className={style._app_name}>Spotlight for Mobx + React</h2>
                <div className={style._user}>
                    Hello! {user.name}
                </div>
            </Header>
        );
    }
}
