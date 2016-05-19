/// <reference path="./include.ts"/>
//import {App} from './App';
// declare var s: UnderscoreStringStatic;

// _.mixin(s.exports());
// _.mixin(UnderscoreMixin.exports());

//$(() => {
//    App.getInstance().initialize();
//});

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {DashboardView} from './views/outlines/DashboardView';

ReactDOM.render(React.createElement(DashboardView), document.getElementById('main'));