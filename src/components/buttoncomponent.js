import '../scss/home.scss';
import '../scss/button.scss';

import React, { Component } from 'react';

class ButtonComponent extends Component {
    constructor(props){
        super();
    }
    render(){
        return(
            <button onClick={this.props.callback}>{this.props.label}</button>
        );
    }
}

export default ButtonComponent;