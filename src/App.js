import React, { Component } from 'react';
import CandidateCard from './components/candidateCard';
import { connect } from 'react-redux';
import { Button } from "semantic-ui-react";
import FaceBAuthButton from './components/facebookAuthButton';
import * as firebase from './util/firebase';
import * as actionsCreater from "./reducer/actions"

class App extends Component {
	constructor(props) {
		super(props);
		this.facebookLogin = this.facebookLogin.bind(this);
		this.ktoggle = this.ktoggle.bind(this);
		this.qtoggle = this.qtoggle.bind(this);
		this.onClickVote = this.onClickVote.bind(this);
	}

	onClickVote(kingOrQueen, id) {
		this.props.onClickVoteStateChange(kingOrQueen, true);
		if (kingOrQueen === "king")
			firebase.voteIncrement("king_vote",
				id,
				(korq) => {
					this.props.onClickVoteStateChange(korq, false);
					this.props.votedArrayCreate(korq);
				});
		if (kingOrQueen === "queen")
			firebase.voteIncrement("queen_vote",
				id,
				(korq) => {
					this.props.onClickVoteStateChange(korq, false);
					this.props.votedArrayCreate(korq);
				});
	}

	facebookLogin() {
		firebase.facebookLogin(
			this.props.votedArrayCreate,
			this.props.authenticate);
	}

	ktoggle() {
		this.props.kingqueentoggle(true);
	}

	qtoggle() {
		this.props.kingqueentoggle(false);
	}

	render() {
		return (<div>
			<div id="banner">
				<h5 id='banner-text'>2018 Freshers' Day</h5>
			</div>
			{ this.props.authenticated ? <div id="king_queen_toggle">
				<Button.Group>
					<Button color='red' onClick={this.ktoggle}>King</Button>
					<Button.Or text='or' />
					<Button color='green' onClick={this.qtoggle}>Queen</Button>
				</Button.Group>
			</div> : null}
			{this.props.authenticated ?
				<div style={{ margin: "0.5em" }}>
					{this.props.kOrQSelector ?
						this.props.candidates.king.map(element => { return <CandidateCard key={element.id} candidate={element} onClickVote={this.onClickVote} /> }) :
						this.props.candidates.queen.map(element => { return <CandidateCard key={element.id} candidate={element} onClickVote={this.onClickVote} /> })
					}
				</div> 
				 : <FaceBAuthButton facebookLogin={this.facebookLogin} />}
		</div>);
	}
}

const mapStateToProps = state => ({
	authenticated: state.authenticated,
	candidates: state.candidates,
	kOrQSelector: state.korq
});

const mapDispatchToProps = dispatch => ({
	kingqueentoggle: (kingorqueen) => dispatch(actionsCreater.kqtoggle(kingorqueen)),
	votedArrayCreate: (kingOrQueen) => dispatch(actionsCreater.votedArrayCreate(kingOrQueen)),
	authenticate: () => dispatch(actionsCreater.authenticate()),
	onClickVoteStateChange: (kingOrQueen, id) => dispatch(actionsCreater.onClickVoteStateChange(kingOrQueen, id))

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
