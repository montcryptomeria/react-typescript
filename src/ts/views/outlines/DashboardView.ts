import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Index} from '../Index';


export interface Props {
    //component:string;
    //id?:string;
}

export interface State {
}

export class DashboardView extends React.Component<Props, State> {

    public state:State = {};

    public render() {
        var component:any = null;
        //component = Index.create(null, null);
        component = React.createElement(Index)
        //switch (this.props.component) {
        //    case 'SummaryView':
        //        component = Index.create(null, null);
        //        break;
        //    default:
        //}
        return (
            React.DOM.main({
                    className: 'contents'
                },
                component
            )
        );
    }
}
