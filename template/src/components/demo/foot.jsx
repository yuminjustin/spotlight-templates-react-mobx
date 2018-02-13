import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class Footer extends Component {
    render() {
        let { todos, types } = this.props,
            c1 = types.type == 0 ? 'active' : '',
            c2 = types.type == 1 ? 'active' : '',
            c3 = types.type == 2 ? 'active' : '';

        return (
            <div className="last_info">
                <p className="l info">{todos.noChoose}项未选择</p>
                <p className="l choose_btn">
                    <span className={c1} onClick={this.showAll.bind(this)}>所有</span>
                    <span className={c2} onClick={this.showNone.bind(this)}>未选</span>
                    <span className={c3} onClick={this.showChoose.bind(this)}>已选</span>
                </p>
                <button className="del r" style=\{{ display: todos.active ? "initial" : "none" }} onClick={this.deleteHandler.bind(this)}>删除选中项</button>
            </div>
        )
    }

    showAll() {
        /* 查看所有 */
        this.props.types.type = 0;
    }

    showNone() {
        /* 查看未选择 */
        this.props.types.type = 1;
    }

    showChoose() {
        /* 查看已选择 */
        this.props.types.type = 2;
    }

    deleteHandler() {
        this.props.todos.delete();
    }
}
