"use strict";
/**
 * Represents one Match, has a lot of info and few useful functions.
 * Has unique id for IDs of both Teams lower than 13.378 - doesn't tested further.
 */
class Match {
    /**
     * Create new Match of two Teams.
     * @param teamL Team to play on the left side of the field.
     * @param teamR Team to play on the right side of the field.
     * @param pointsToSet How many points are needed to score a set.
     * @param setsToWin How many sets are neccessary to win the Match.
     */
    constructor(teamL, teamR, pointsToSet, setsToWin) {
        this.teamLpointsTotal = 0;
        this.teamRpointsTotal = 0;
        this.teamLsetsTotal = 0;
        this.teamRsetsTotal = 0;
        this.teamLpoints = 0;
        this.teamRpoints = 0;
        this.teamLsets = 0;
        this.teamRsets = 0;
        this.pointsToSet = Infinity;
        this.setsToWin = Infinity;
        this.timeOfStart = 0;
        this.timeOfEnd = 0;
        this.finished = false;
        if (teamL.getId() == teamR.getId()) {
            throw new Error("One Team cannot Match with itself.");
        }
        this.teamL = teamL;
        this.teamR = teamR;
        this.pointsToSet = pointsToSet;
        this.setsToWin = setsToWin;
        this.id = -1 * (teamL.getId() ** 5 + teamR.getId() ** 5);
        this.timeOfStart = Date.now();
    }
    save() {
        // endTime
        // create log
        // file.save to local storage
        // asks to close the page
        // go to tournament page
    }
    getPointsToSet() {
        // TODO
    }
    setPointsToSet(newNumber) {
        // TODO
    }
    getSetsToWin() {
        // TODO
    }
    setSetsToWin() {
        // TODO
    }
    setPoints() {
        // TODO
    }
    addPoints( /*team id */) {
        // TODO - also negative
    }
    addPointsBoth() {
        // TODO - also negative
    }
    addSets( /*team id */) {
        // TODO - also negative
    }
    shouldSetEnd() {
        // TODO
    }
    shouldMatchEnd() {
        // TODO
    }
    endOfMatch() {
        // TODO
        // log + winning screen? + save&goback?????
    }
}
