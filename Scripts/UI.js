"use strict";
/**
 * In charge of all UI, building home/tournament/match(/end?) pages,
 * create popups, update visuals,...
 */
class UI {
    static buildHomePage() {
        // append all buttons and whatever
        const sec = document.getElementById("mainSection");
        const newTournament = document.createElement("button");
        newTournament.addEventListener("click", Control.createTournament);
        newTournament.textContent = "Nový turnaj";
        const loadTournament = document.createElement("button");
        loadTournament.addEventListener("click", Control.loadTournament);
        loadTournament.textContent = "Načíst turnaj ze souboru";
        const resumeTournament = document.createElement("button");
        resumeTournament.addEventListener("click", Control.resumeTournament);
        resumeTournament.textContent = "Pokračovat v turnaji";
        const justMatch = document.createElement("button");
        justMatch.addEventListener("click", Control.justMatch);
        justMatch.textContent = "Chci jenom počítadlo";
        sec === null || sec === void 0 ? void 0 : sec.appendChild(newTournament);
        sec === null || sec === void 0 ? void 0 : sec.appendChild(loadTournament);
        sec === null || sec === void 0 ? void 0 : sec.appendChild(resumeTournament);
        sec === null || sec === void 0 ? void 0 : sec.appendChild(justMatch);
    }
    static buildTournamentPage() {
        // append all buttons with current tournament inserted to html
    }
    static buildMatchPage() {
        // as before, insert specific match to html if needed
    }
    static buildJustMatchPage(match) {
        // build a page for it
        // add a button for: save and start a tournament from it
    }
    static updateTournamentPage() {
        // basically when change of order method happen, so the ui reflects it
    }
    static afterSavingMatch() {
        // popup: don't U wanna leave the match for tournament and next match?
    }
    /**
     * Win effects for the end of match. Not intrusive, maybe missclick? Sth like confetti.
     * @param team Team who won.
     */
    static afterWinMatch(team) {
    }
}
