export function authenticate(){
    return {
        type : 'AUTHENTICATE'
    }
}

export function kqtoggle(kingorqueen){
    return {
        type : "KORQ_TOGGLE",
        kingorqueen
    }
}

export function votedArrayCreate(kingOrQueen){
    return {
        type : "VOTED_ARRAY_CREATE",
        kingOrQueen
    }
}


export function onClickVoteStateChange(kingOrQueen,voting){
    return {
        type : "ON_CLICK_VOTE_STATE_CHANGE",
        kingOrQueen,
        voting
    }
}

export function onClickVoteComplete(kingOrQueen,id){
    return {
        type : "ON_CLICK_VOTE_COMPLETE",
        kingOrQueen,
        id
    }
}

