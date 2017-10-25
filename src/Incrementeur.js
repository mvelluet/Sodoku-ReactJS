import React, { Component } from 'react';

export class Incrementeur extends Component {
    constructor(props) {
        super(props)

        console.log(this.props);
    }

    

    render() {
        return (
            <div>
                <button>+</button>
                <button>-</button>                
            </div>   
        )
    }
}