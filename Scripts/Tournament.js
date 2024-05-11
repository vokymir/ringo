"use strict";
/**
 * Completely comprehend Tournament page, given it is created correctely (job of UI).
 * Stores info about tournament, its teams, order of matches (can be changed on the fly).
 */
class Tournament {
    constructor() {
        this.teams = [];
        this.matchesPassed = [];
        this.matchesPassedValid = [];
        this.orderMethod = OrderMethod.ROUND_ROBIN;
        this.order = [];
        this.pointsToSet = 15;
        this.setsToWin = 2;
    }
    addTeam(teamName, team = new Team(this.teams.length + 1, teamName)) {
        const teamID = team.getId();
        // if equal, it was created automaticaly and definitely is in no conflict
        if (teamID != this.teams.length) {
            // check if not duplicate
            for (let i = 0; i < this.teams.length; i++) {
                if (teamID == this.teams[i].getId()) {
                    console.log("Cannot add two teams with the same ID.");
                    return;
                }
            }
        }
        // add team
        this.teams.push(team);
    }
    removeTeam(team) {
    }
    getTeams() {
    }
    addPassedMatch(match) {
    }
    getPassedMatches() {
    }
    addPassedMatchValid(match) {
    }
    setPassedMatchesValid(matches) {
    }
    getPassedMatchesValid() {
    }
    setOrderMethod(method) {
    }
    getOrderMethod() {
    }
    setOrder() {
        // take into account the order method
    }
    getOrder() {
    }
    setPointsToSet(points) {
    }
    getPointsToSet() {
    }
    setSetsToWin(sets) {
    }
    getSetsToWin() {
    }
}
