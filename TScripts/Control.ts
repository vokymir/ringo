/**
 * If more functionality is needed, combine them in one function as static function of this class.
 */
class Control {

    static createTournament() {
        // new tournament
        // buildTournamentPage
        const t = new Tournament();
        UI.buildTournamentPage(t);
    }

    static loadTournament() {
        // load
        // build
    }

    static resumeTournament() {
        // build (from local storage)
    }

    static justMatch() {
        // build just match
    }
}