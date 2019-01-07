import React,{Component} from 'react';
import {Button} from 'semantic-ui-react';

class facebookAuthButton extends Component{

    render(){
        return (<div className='facebook_button'>
            <Button color='facebook' onClick={this.props.facebookLogin}>
                Facebook
            </Button>
        </div>);
    }
}

export default facebookAuthButton;