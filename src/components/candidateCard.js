import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';

class candidateCard extends Component {
    constructor(props){
        super(props);
        this.onClickVote = this.onClickVote.bind(this);
    }

    onClickVote(){
        this.props.onClickVote(this.props.candidate.kingqueen,this.props.candidate.id);
    }
    render() {
        return (<div>
            <div className="card horizontal">
            <div className="card-image" style={{ maxWidth: "40%"}}>
                <img src={this.props.candidate.img_source} alt="img" />
            </div>
            <div className="card-stacked">
                <div className="card-content" style={{ padding: '10px'}}>
                    <span className="card-title">{this.props.candidate.name}</span>
                    <p>Major : {this.props.candidate.major}</p>
                </div>
                <div className="card-action" style={{ padding: '10px'}}>
                    <Button fluid={true} 
                    disabled={this.props.candidate.disabled} 
                    id={this.props.candidate.id} 
                    onClick={this.onClickVote}
                    loading={this.props.candidate.loading}>Vote</Button>
                </div>
            </div>
        </div>
        </div>
        );
    }
}

export default candidateCard;