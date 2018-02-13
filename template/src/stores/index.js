import TodoS from './todos';
import TypeS from './types';
import User from './user';
import Menu from './menu';

const todos = new TodoS();
const types = new TypeS();
const user = new User();
const menu = new Menu();

export default {
    todos,
    types,
    user,
    menu
}