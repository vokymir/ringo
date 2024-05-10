
window.onload = function(){
    const sec = document.getElementById("mainSection");

    const newTournament = document.createElement("button");
    newTournament.addEventListener("click",Control.createTournament);
    newTournament.textContent = "Nový turnaj";

    const loadTournament = document.createElement("button");
    loadTournament.addEventListener("click",Control.loadTournament);
    loadTournament.textContent = "Načíst turnaj ze souboru";

    const resumeTournament = document.createElement("button");
    resumeTournament.addEventListener("click",Control.resumeTournament);
    resumeTournament.textContent = "Pokračovat v turnaji";

    const justMatch = document.createElement("button");
    justMatch.addEventListener("click",Control.justMatch);
    justMatch.textContent = "Chci jenom počítadlo";

    
    sec?.appendChild(newTournament);
    sec?.appendChild(loadTournament);
    sec?.appendChild(resumeTournament);
    sec?.appendChild(justMatch);
}

function lol(){
    console.log("husyz");
}