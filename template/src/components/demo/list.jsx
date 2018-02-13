import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Item from './item'

@observer
export default class List extends Component {
    render() {
        let { todos, types } = this.props;
        if (todos.list.length === 0) {
            return null;
        }
        else return (
            <ul>
                {
                    this.myList().map((todo, key) => {
                        return <Item todo={todo} key={key} />
                    })
                }
            </ul>
        )
    }

    myList() {
        let { todos, types } = this.props,
            t = types.type;
        return todos.list.filter(todo => {
            if (t == 2 && todo.completed) {
                return !0
            }
            if (t == 1 && !todo.completed) {
                return !0
            }
            if (t == 0) {
                return !0
            }
        })
    }

}
