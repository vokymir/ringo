"use strict";
window.onload = function () {
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
};
function lol() {
    console.log("husyz");
}
