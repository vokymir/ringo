
class Tournament{
    private teams: Team[] = [];
    private matchesPassed: Match[] = [];
    private matchesPassedValid: Match[] = [];
    
    private orderMethod: OrderMethod = OrderMethod.ROUND_ROBIN;
    private order: Match[] = [];

    private pointsToSet: number = 15;
    private setsToWin: number = 2;

    constructor(){}

    addTeam(team: Team){

    }

    removeTeam(team: Team){

    }

    getTeams(){

    }

    addPassedMatch(match: Match){

    }

    getPassedMatches(){

    }

    addPassedMatchValid(match: Match){

    }

    setPassedMatchesValid(matches: Match[]){

    }

    getPassedMatchesValid(){

    }

    setOrderMethod(method: OrderMethod){

    }

    getOrderMethod(){

    }

    setOrder(){
        // take into account the order method
    }

    getOrder(){

    }

    setPointsToSet(points: number){

    }

    getPointsToSet(){

    }

    setSetsToWin(sets: number){

    }

    getSetsToWin(){
        
    }
}