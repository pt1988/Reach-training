import React, {Component} from 'react';

class MyNumber extends Component{
    render(){
        return (
            <div> MyNumber is {this.props.value}!</div>
        );

    }

    new_render = () => (
        <div>MyNumber is {this.props.value}!</div>        
    );
}

export default MyNumber;