import React, { Component } from 'react';
import {observer} from 'mobx-react';

@observer
export default class Heads extends Component {

    render() {
        let {todos} = this.props;
        return (
            <div className="c addbox">
                <label>
                    <input type="checkbox" className="l db" ref="all" onChange={this.chooseHandler.bind(this)} checked={todos.chooseAll}/> 全选
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