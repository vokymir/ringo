/**
 * Represents one Match, has a lot of info and few useful functions.
 * Has unique id for IDs of both Teams lower than 13.378 - doesn't tested further.
 */
class Match{
    private id: number;

    private teamL: Team | undefined;
    private teamR: Team | undefined;

    private teamLpointsTotal: number = 0;
    private teamRpointsTotal: number = 0;
    private teamLsetsTotal: number = 0;
    private teamRsetsTotal: number = 0;

    private teamLpoints: number = 0;
    private teamRpoints: number = 0;
    private teamLsets: number = 0;
    private teamRsets: number = 0;

    private pointsToSet: number = Infinity;
    private setsToWin: number = Infinity;

    private timeOfStart: number = 0;
    private timeOfEnd: number = 0;
    private finished: boolean = false;

    /**
     * Create new Match of two Teams.
     * @param teamL Team to play on the left side of the field.
     * @param teamR Team to play on the right side of the field.
     * @param pointsToSet How many points are needed to score a set.
     * @param setsToWin How many sets are neccessary to win the Match.
     */
    constructor(teamL: Team, teamR: Team, pointsToSet: number, setsToWin: number){
        if (teamL.getId() == teamR.getId()){
            throw new Error("One Team cannot Match with itself.");
        }
        this.teamL = teamL;
        this.teamR = teamR;
        this.pointsToSet = pointsToSet;
        this.setsToWin = setsToWin;

        this.id = -1 * (teamL.getId() ** 5 + teamR.getId() ** 5)

        this.timeOfStart = Date.now();
    }

    save(){
        // endTime
        // create log
        // file.save to local storage
        // asks to close the page
        // go to tournament page
    }

    getPointsToSet(){
        // TODO
    }

    setPointsToSet(newNumber: number){
        // TODO
    }

    getSetsToWin(){
        // TODO
    }

    setSetsToWin(){
        // TODO
    }

    setPoints(){
        // TODO
    }

    addPoints(/*team id */){
        // TODO - also negative
    }

    addPointsBoth(){
        // TODO - also negative
    }

    addSets(/*team id */){
        // TODO - also negative
    }

    shouldSetEnd(){
        // TODO
    }

    shouldMatchEnd(){
        // TODO
    }

    endOfMatch(){
        // TODO
        // log + winning screen? + save&goback?????
    }
}