import * as firebase from "firebase";
var config = {
	apiKey: "AIzaSyALn_c79BvSqEQAbNKGBNYYXVJCDEWER-Y",
	authDomain: "voting-d2df5.firebaseapp.com",
	databaseURL: "https://voting-d2df5.firebaseio.com",
	storageBucket: "voting-d2df5.appspot.com",
	messagingSenderId: "1032494254100"
};
export var fireb = firebase.initializeApp(config);


var provider = new firebase.auth.FacebookAuthProvider();

// var king_vote = firebase.database().ref().child('king_vote');
// var queen_vote = firebase.database().ref().child('queen_vote');
// var king_voted_list = firebase.database().ref().child('king');
// var queen_voted_list = firebase.database().ref().child('queen');

export function facebookLogin(votedListChange, authenticated) {
	fireb.auth().signInWithPopup(provider);
	fireb.auth().onAuthStateChanged(function (user) {
		if (user) {
			console.log(user)
			firebase.database().ref().child('king').orderByKey()
				.equalTo(user.uid)
				.once('value')
				.then(function (snapshot) {
					var value = snapshot.val();
					if (value) {
						votedListChange("king");
					}
				});
			firebase.database().ref().child('queen').orderByKey()
				.equalTo(user.uid)
				.once('value')
				.then(function (snapshot) {
					var value = snapshot.val();
					if (value) {
						votedListChange("queen");
					}
					authenticated();
				});
		}
	});
}

export function voteIncrement(korq, id, callback) {
	firebase.database().ref().child(korq).child(id).transaction(function (vote) {
		console.log(vote)
		console.log(id)
		console.log(korq)
		if (vote != null) {
			vote++;
			var updates = {};
			if (korq === 'king_vote'){
				updates['king/' + firebase.auth().currentUser.uid] = 1;
				firebase.database().ref().update(updates);
				callback("king");
			}
			if (korq === 'queen_vote'){
				updates['queen/' + firebase.auth().currentUser.uid] = 1;
				firebase.database().ref().update(updates);
				callback("queen");
			}
			
		}
		return vote;
	});
}