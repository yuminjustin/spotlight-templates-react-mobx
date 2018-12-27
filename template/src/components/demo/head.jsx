import React, { Component } from 'react';
import {observer} from 'mobx-react';
import style from 'B/assets/css/style.css';
@observer
export default class Heads extends Component {

    render() {
        let {todos} = this.props;
        return (
            <div className={style.addbox}>
                <label>
                    <input type="checkbox" className={style.dbl} ref="all" onChange={this.chooseHandler.bind(this)} checked={todos.chooseAll}/> 全选
                </label>
                <input type="text" placeholder="输入需要添加的文字" ref="ipt"/>
                <button onClick={this.clickHandler.bind(this)}>添加</button>
            </div>
        )
    }

    clickHandler(){
       let v = this.refs.ipt.value;
       if(v) {
         this.props.todos.addTodo(v);
         this.refs.ipt.value = "";
       }
    }

    chooseHandler(){
        this.props.todos.toggle()
    }
}
