/**
 * Completely comprehend Tournament page, given it is created correctely (job of UI).
 * Stores info about tournament, its teams, order of matches (can be changed on the fly).
 */
class Tournament {
    private teams: Team[] = [];
    private teamIDsNotToInclude: number[] = [];
    private matchesPassed: Match[] = [];
    private matchesPassedValid: Match[] = [];

    private orderMethod: OrderMethod = OrderMethod.ROUND_ROBIN;
    private order: Match[] = [];

    private pointsToSet: number = 15;
    private setsToWin: number = 2;

    constructor() { }

    /**
     * Add a Team to the Tournament. Make sure 
     * @param teamName Name of the new team (can be edited later), doesn't have to be unique.
     * @param team Better not to give if possible. If the team already exists make sure it doesn't have conflicting ID. If no Team given, auto-create new with valid ID. Quite frankly, it could be faster (when having a lot of teams and more importantly removed teams) to give it a Team with valid ID, but not as significantly and it isn't as bullet-proof, as it just doesn't add the team.
     * @returns 
     */
    addTeam(teamName: string, team: Team | undefined = undefined): void {

        if (team == undefined) {
            let chooseID = 1;

            // choose valid ID for team
            // make sure it is bigger than any teams ID
            for (let i = 0; i < this.teams.length; i++) {
                const currID = this.teams[i].getId();
                if (currID > chooseID) {
                    chooseID = currID + 1;
                }
            }

            // make sure it is bigger than any removed teams ID
            for (let i = 0; i < this.teamIDsNotToInclude.length; i++) {
                const currID = this.teamIDsNotToInclude[i];
                if (currID > chooseID) {
                    chooseID = currID + 1;
                }
            }

            team = new Team(chooseID, teamName);
        }
        else {
            const teamID = team.getId();

            // check if team not duplicate
            for (let i = 0; i < this.teams.length; i++) {
                if (teamID == this.teams[i].getId()) {
                    UI.duplicateTeamID(teamID);
                    return;
                }
            }
        }

        // add team to Teams and reOrder tournament
        this.teams.push(team);
        this.setOrder();
    }

    /**
     * Remove Team from the tournament, remove matches Team was in from valid passed matches and re-order the tournament.
     * Team remain in History and also in memory, as long as any Match with this Team is in passed matches (non-valid).
     * @param team Team to remove
     */
    removeTeam(team: Team) {
        const teamID = team.getId();

        for (let i = 0; i < this.teams.length; i++) {
            if (teamID == this.teams[i].getId()) {
                this.teams.splice(i, 1);
                this.validatePassedMatchesAfterRemovingTeam(team);
                this.setOrder();
                return;
            }
        }
    }

    /**
     * Make sure only matches that matter are in Valid Passed Matches array, after REMOVING a TEAM from the tournament.
     * @param team Team removed.
     */
    validatePassedMatchesAfterRemovingTeam(team: Team) {
        const before: Match[] = this.getPassedMatchesValid();
        let after: Match[] = [];
        const teamID = team.getId();

        before.forEach(match => {
            const teams = match.getTeams();
            const teamLID = teams[0].getId();
            const teamRID = teams[1].getId();

            if (teamID != teamLID && teamID != teamRID) {
                after.push(match);
            }
        });

        this.matchesPassedValid = after;
    }

    /**
     * Make sure only matches that matter are in Valid Passed Matches array, after changing the order of matches.
     * Pretty unoptimized, O(n^2), don't run too often.
     */
    validatePassedMatches() {
        const before = this.matchesPassedValid;
        let after = [];
        const order = this.order;

        before.forEach(match => {
            order.forEach(orderedMatch => {
                if (orderedMatch.getID() == match.getID()) {
                    after.push(match);
                    return;
                }
            })
        })
    }

    getTeams(): Team[] {
        return this.teams;
    }

    addPassedMatch(match: Match) {
        this.matchesPassed.push(match);
    }

    getPassedMatches(): Match[] {
        return this.matchesPassed;
    }

    /**
     * Only adding when match ordered and not already saved.
     * @param match Match to add to Valid Passed Matches.
     */
    addPassedMatchValid(match: Match) {
        // control if valid, only than add
        const matchID = match.getID();

        // check if not already in valid passed matches
        this.matchesPassedValid.forEach(passedMatch => {
            if (passedMatch.getID() == matchID) {
                console.log("Match is already in valid Matches.")
                return;
            }
        });

        // add to valid passed matches if in ordered matches
        this.getOrder().forEach(orderedMatch => {
            if (orderedMatch.getID() == matchID) {
                this.matchesPassedValid.push(match);
                return;
            }
        })
    }

    getPassedMatchesValid(): Match[] {
        return this.matchesPassedValid;
    }

    setOrderMethod(method: OrderMethod) {
        if (this.orderMethod == method) {
            return;
        }
        this.orderMethod = method;
        this.setOrder();
    }

    getOrderMethod(): OrderMethod {
        return this.orderMethod;
    }

    /**
     * Order the matches accordingly to Order Method.
     */
    setOrder() {
        let order;
        switch (this.getOrderMethod()) {
            case OrderMethod.ROUND_ROBIN:
                order = Sorting.roundRobin(this.teams);
                break;
        }
        this.order = order;
        this.validatePassedMatches();
    }

    getOrder(): Match[] {
        return this.order;
    }

    /**
     * If given notwhole number, ceiling.
     * @param points Whole number greater than 0.
     */
    setPointsToSet(points: number) {
        if (points > 0) {
            this.pointsToSet = Math.ceil(points);
        }
    }

    getPointsToSet(): number {
        return this.pointsToSet;
    }

    /**
     * If given notwhole number, ceiling.
     * @param sets Whole number greater than 0.
     */
    setSetsToWin(sets: number) {
        if (sets > 0) {
            this.setsToWin = Math.ceil(sets);
        }
    }

    getSetsToWin(): number {
        return this.setsToWin;
    }
}