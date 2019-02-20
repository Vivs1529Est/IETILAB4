import React from 'react';

import ReactDOM from 'react-dom';
import {Menu} from './Menu/Menu';


export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.text}</td>
                <td>{this.props.priority}</td>
                <td>{this.props.dueDate.format('DD-MM-YYYY')}</td>
            </tr>
        );
    }

}

ReactDOM.render(<Menu/>, document.querySelector('#root'));