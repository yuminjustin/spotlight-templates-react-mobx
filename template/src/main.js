import 'antd/dist/antd.css';
import '@/assets/css/reset.css';
import '@/assets/css/style.css';
import 'babel-polyfill'
/* react*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';

import store from './stores';
import App from 'C/app';

render(<Provider {...store}><App /></Provider>, document.getElementById('app'));

/* webpack hot reload*/
if (module.hot) {
    module.hot.accept();
}
