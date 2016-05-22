import * as React from 'react';


export interface Props {}
export interface State {}

export class Index extends React.Component<Props, State> {

    public state:State = {
        newItem: {description: ''},
    }

    public render() {
        return (
            React.DOM.div({
                className: 'mainContent'
            },'Hello World!!'
            )
        )
    }
}
    //export var create = React.createFactory(Component);
//}