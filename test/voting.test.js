/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
var chai = require('chai');
var expect = chai.expect;
var voting = require('../controllers/voting');
describe('my voting app', function () {
    beforeEach(function () {
        // Arrange
        voting.init(['Awesome', 'Ok', 'Bad']);
    });
    it('should be able to get votes', function () {
        // Act
        var result = voting.getVotes();
        // Assert
        expect(result).eql([{ label: 'Awesome', votes: 0 }, { label: 'Ok', votes: 0 }, { label: 'Bad', votes: 0 }]);
        expect(result.map(function (item) { return item.label; })).eql(['Awesome', 'Ok', 'Bad']);
        expect(result.map(function (item) { return item.votes; }).reduce(function (a, b) { return a + b; })).to.be.equal(0);
    });
    it('should be able to vote', function () {
        // Act
        voting.vote(0);
        // Assert
        expect(voting.getVotes().map(function (item) { return item.votes; }).reduce(function (a, b) { return a + b; })).to.be.equal(1);
        expect(voting.getVotes()[0].votes).to.be.equal(1);
    });
});
