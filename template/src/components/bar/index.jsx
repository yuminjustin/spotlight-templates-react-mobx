import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import style from 'B/assets/css/style.css';
const SubMenu = Menu.SubMenu;

@inject('menu')
@observer
export default class Bar extends Component {

    componentDidMount() {
        this.props.menu.getMenu()
    }

    handleClick = (e) => {
        console.log('click ', e);
    }

    splitData = (arr) => {

        //const { push } = this.props.routingStore;

        return arr.map(item => {

            if (item.children) {
                var children = this.splitData(item.children),
                    title = item.name;
                if (item.icon) {
                    title = (
                        <span>
                            <Icon type={item.icon} />
                            <span>{item.name}</span>
                        </span>
                    )
                }
                return (
                    <SubMenu key={item.key} title={title}>
                        {children}
                    </SubMenu>
                )
            }
            else {
                //<a onClick={() => push(item.url)}>{item.name}</a>
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.url}>{item.name}</Link>
                    </Menu.Item>
                )
            }

        })
    }

    render() {
        let list = this.splitData(this.props.menu.list)

        return (
            <div className={style._left_bar}>
                <Menu
                    onClick={this.handleClick}
                    style=\{{ width: '100%' }}
                    defaultOpenKeys={['1']}
                    mode="inline"
                >
                    {list}
                </Menu>
            </div>
        );
    }
}

