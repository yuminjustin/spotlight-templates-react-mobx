import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Heads from './head'
import List from './list'
import Footer from './foot'
import style from 'B/assets/css/style.css';
@inject('todos')
@inject('types')
@observer
export default class Demo extends Component {

    render() {
        let { props } = this;
        return (
            <div className={style.mainbox}>
                <h1>Mobx todo</h1>
                <Heads todos={props.todos} />
                <div className={style.listbox}>
                    <List todos={props.todos} types={props.types} />
                </div>
                <Footer todos={props.todos} types={props.types} />
            </div>
        );
    }
}
