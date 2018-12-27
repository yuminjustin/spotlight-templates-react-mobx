import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import style from 'B/assets/css/style.css';

@observer
export default class Item extends Component {

    @observable editText = "";

    state = {
        isEdit: !1
    };

    render() {
        let { todo } = this.props,
            { isEdit } = this.state,
            hide = { display: isEdit ? "initial" : "none" },
            hide2 = Object.assign({}, hide, { "marginRight": "8px" }),
            show = { display: isEdit ? "none" : "initial" },
            show2 = Object.assign({}, show, { "marginRight": "8px" });

        return (
            <li onDoubleClick={this.editHandler.bind(this)} className={todo.completed ? style.selected : ""}>
                <input type="checkbox" className={style.dbl} style={show} onChange={this.chooseHandler.bind(this)} checked={todo.completed} />
                <span className={style.dble} style={show} >{todo.title}</span>
                <input type="text" placeholder={todo.title} className={style.dbl} style={hide} value={this.editText} onChange={this.handleChange.bind(this)} />
                <div className={style.operate}>
                    <button style={show2} onClick={this.deleteHandler.bind(this)}>删除</button>
                    <button style={hide2} onClick={this.submitHandler.bind(this)}>修改</button>
                    <button style={hide} onClick={this.cancelHandler.bind(this)}>取消</button>
                </div>
            </li>
        )
    }

    editHandler() {
        this.setState({
            isEdit: !0
        })
    }

    cancelHandler() {
        this.setState({
            isEdit: !1
        })
    }

    handleChange(event) {
        this.editText = event.target.value;
    };

    submitHandler() {
        if (this.editText) {
            this.props.todo.setTitle(this.editText);
        }
        this.cancelHandler();
    }

    deleteHandler() {
        this.editText = "";
        this.props.todo.destroy();
    }

    chooseHandler() {
        this.props.todo.toggle();
    }
}
