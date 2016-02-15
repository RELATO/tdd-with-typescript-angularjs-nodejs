var Vote = require('../models/Vote');
var votes = [];
function init(labels) {
    votes = labels.map(function (label) { return new Vote(label); });
}
exports.init = init;
function getVotes() {
    return votes;
}
exports.getVotes = getVotes;
function vote(index) {
    votes[index].votes++;
}
exports.vote = vote;
