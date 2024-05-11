/**
 * Completely comprehend Tournament page, given it is created correctely (job of UI).
 * Stores info about tournament, its teams, order of matches (can be changed on the fly).
 */
class Tournament {
    private teams: Team[] = [];
    private matchesPassed: Match[] = [];
    private matchesPassedValid: Match[] = [];

    private orderMethod: OrderMethod = OrderMethod.ROUND_ROBIN;
    private order: Match[] = [];

    private pointsToSet: number = 15;
    private setsToWin: number = 2;

    constructor() { }

    addTeam(teamName: string, team: Team = new Team(this.teams.length + 1, teamName)): void {

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


    removeTeam(team: Team) {

    }

    getTeams() {

    }

    addPassedMatch(match: Match) {

    }

    getPassedMatches() {

    }

    addPassedMatchValid(match: Match) {

    }

    setPassedMatchesValid(matches: Match[]) {

    }

    getPassedMatchesValid() {

    }

    setOrderMethod(method: OrderMethod) {

    }

    getOrderMethod() {

    }

    setOrder() {
        // take into account the order method
    }

    getOrder() {

    }

    setPointsToSet(points: number) {

    }

    getPointsToSet() {

    }

    setSetsToWin(sets: number) {

    }

    getSetsToWin() {

    }
}