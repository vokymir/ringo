"use strict";
/**
 * Represents one Match, has a lot of info and few useful functions.
 * Has unique id created from IDs of both Teams (order doesn't matter).
 * Guranteed unique id for Teams IDs lower than 13.378 - doesn't tested further.
 *
 * It's functions completely comprehend the Match page, given that it is created with correct functions on buttons etc. (job of UI)
 * Save function intended to only be called once the match ended, otherwise redundant logs in history - but will work just fine.
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
        this.setPointsToSet(pointsToSet);
        this.setSetsToWin(setsToWin);
        // Guaranteed to be unique for different pairs of whole numbers from 1 up to 13.378
        this.id = -1 * (teamL.getId() ** 5 + teamR.getId() ** 5);
        this.timeOfStart = Date.now();
    }
    getID() {
        return this.id;
    }
    getTeams() {
        return [this.teamL, this.teamR];
    }
    getPointsToSet() {
        return this.pointsToSet;
    }
    /**
     * Require whole number, if not whole, ceiling it.
     * @param newNumber New number of points needed to score set. Greater than 0.
     */
    setPointsToSet(newNumber) {
        if (newNumber > 0) {
            this.pointsToSet = Math.ceil(newNumber);
        }
    }
    getSetsToWin() {
        return this.setsToWin;
    }
    /**
     * Require whole number, if not whole, ceiling it.
     * @param newNumber New number of sets needed to win Match. Greater than 0.
     */
    setSetsToWin(newNumber) {
        if (newNumber > 0) {
            this.pointsToSet = Math.ceil(newNumber);
        }
    }
    /**
     * If new num not whole, ceiling.
     * @param team Team to set points for.
     * @param num New points value: greater than 0 and whole.
     */
    setPoints(team, num) {
        if (num >= 0) {
            if (team.getId() == this.teamL.getId()) {
                this.teamLpoints = num;
            }
            else {
                this.teamRpoints = num;
            }
        }
        if (this.shouldSetEnd()) {
            this.endOfSet();
        }
    }
    /**
     * Can handle negative numbers also.
     * @param team Team to add points to.
     * @param num How many points to add.
     */
    addPoints(team, num) {
        if (team.getId() == this.teamL.getId()) {
            this.teamLpoints += num;
            if (this.teamLpoints < 0) {
                this.teamLpoints = 0;
            }
        }
        else {
            this.teamRpoints += num;
            if (this.teamRpoints < 0) {
                this.teamRpoints = 0;
            }
        }
        if (this.shouldSetEnd()) {
            this.endOfSet();
        }
    }
    /**
     * Add points to both Teams.
     * @param num How many points to add.
     */
    addPointsBoth(num) {
        this.teamLpoints += num;
        this.teamRpoints += num;
        if (this.teamLpoints < 0) {
            this.teamLpoints = 0;
        }
        if (this.teamRpoints < 0) {
            this.teamRpoints = 0;
        }
        if (this.shouldSetEnd()) {
            this.endOfSet();
        }
    }
    /**
     * Add number of sets to specified team, can negative.
     * @param team Team to add sets to.
     * @param num How many sets to add.
     */
    addSets(team, num) {
        if (team.getId() == this.teamL.getId()) {
            this.teamLsets += num;
            if (this.teamLsets < 0) {
                this.teamLsets = 0;
            }
        }
        else {
            this.teamRsets += num;
            if (this.teamRsets < 0) {
                this.teamRsets = 0;
            }
        }
        if (this.shouldMatchEnd()) {
            this.endOfMatch();
        }
    }
    setTimeOfStart() {
        this.timeOfStart = Date.now();
    }
    getTimeOfStart() {
        return this.timeOfStart;
    }
    setTimeOfEnd() {
        this.timeOfEnd = Date.now();
    }
    getTimeOfEnd() {
        return this.timeOfEnd;
    }
    /**
     * Checks wheter to end the set.
     * @returns True if set should end, False if shouldn't.
     */
    shouldSetEnd() {
        if (this.teamLpoints == this.teamRpoints) {
            return false;
        }
        if (this.teamLpoints > this.pointsToSet || this.teamRpoints > this.pointsToSet) {
            return true;
        }
        return false;
    }
    /**
     * Checks wheter to end the Match.
     * @returns True if Match should end, False if shouldn't.
     */
    shouldMatchEnd() {
        if (this.teamLsets == this.teamRsets) {
            return false;
        }
        if (this.teamLsets > this.setsToWin || this.teamRsets > this.setsToWin) {
            return true;
        }
        return false;
    }
    /**
     * Save set to winner, set points to 0 for both teams.
     */
    endOfSet() {
        this.teamLpointsTotal += this.teamLpoints;
        this.teamRpointsTotal += this.teamRpoints;
        if (this.teamLpoints > this.teamRpoints) {
            this.addSets(this.teamL, 1);
        }
        else {
            this.addSets(this.teamR, 1);
        }
        this.setPoints(this.teamL, 0);
        this.setPoints(this.teamR, 0);
    }
    /**
     * Save the result to history, call UI.winscreen, but doesn't even assume that the match really ended, so doesn't ask for closing the page.
     */
    endOfMatch() {
        this.save(false);
        let winningTeam = this.teamL;
        if (this.teamLpoints < this.teamRpoints) {
            winningTeam = this.teamR;
        }
        UI.afterWinMatch(winningTeam);
    }
    /**
     * Save info about the Match in session storage so we can create Log when saving the results.
     */
    startOfMatch() {
        this.setTimeOfStart();
        const previousInfo = {
            teamL: this.teamL,
            teamLpoints: this.teamLpoints,
            teamRpoints: this.teamRpoints,
            teamLpointsTotal: this.teamLpointsTotal,
            teamRpointsTotal: this.teamRpointsTotal,
            teamLsets: this.teamLsets,
            teamRsets: this.teamRsets,
            finished: this.finished,
            timeOfStart: this.timeOfStart,
            timeOfEnd: this.timeOfEnd
        };
        BrowserStorage.saveToSessionStorage("previousInfo", previousInfo);
    }
    /**
     * Hard reset everything to 0.
     */
    reset() {
        this.setPoints(this.teamL, 0);
        this.setPoints(this.teamR, 0);
        this.teamLsets = 0;
        this.teamRsets = 0;
        this.teamLpointsTotal = 0;
        this.teamRpointsTotal = 0;
        this.finished = false;
    }
    /**
     * Create Log and save it to History. [optional] Also ask user to leave for Tournament page.
     * @param askToLeave Should the UI asks user to leave the Match page and go to Tournament?
     */
    save(askToLeave = true) {
        this.setTimeOfEnd();
        if (this.shouldMatchEnd()) {
            this.finished = true;
        }
        const previousInfo = BrowserStorage.getFromSessionStorage("previousInfo");
        // save previous info - only what was changed // if this doesnt work, edit to just save everything
        const matchAsDict = JSON.parse(JSON.stringify(this));
        let previous = [];
        Object.keys(previousInfo).forEach((key, index) => {
            key = String.apply(key); // cast as string - but key should already be string, so OK
            if (previousInfo[key] != matchAsDict[key]) {
                previous.push([key, previousInfo[key]]);
            }
        });
        // save after info - only what is already in previous
        let after = [];
        previous.forEach(element => {
            const key = element[0];
            after.push([key, matchAsDict[key]]);
        });
        // save log to history
        const log = new Log(this.getID(), LogEvent.SAVE_MATCH, previous, after);
        HistoryManager.saveLog(log);
        if (askToLeave) {
            UI.afterSavingMatch();
        }
    }
}
