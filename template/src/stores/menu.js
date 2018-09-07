import axios from 'axios';
import { observable } from 'mobx';

// 菜单

export default class Menu {
    @observable list = [];

    getMenu() {
        axios.get('./static/mock/menu.json').then(j => {
            this.list = j.data.data || [] 
        }).catch(e => {

        })
    }
}