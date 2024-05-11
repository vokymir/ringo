
class Control{

    constructor(){

    }

    static createTournament(){
        // new tournament
        // buildTournamentPage
    }

    static loadTournament(){
        // load
        // build
        const l = new Log(4,LogEvent.EDIT_MATCH,4,7)
        const a = JSON.stringify(l);
        const b = JSON.stringify([4,LogEvent.EDIT_MATCH,4,7]);
        console.log(a);
        console.log(b);
        const c = JSON.parse(a);
        const d = JSON.parse(b);
        console.log(c);
        console.log(d);
        const e = new Log(c.id,c.type,c.previous,c.after);
        console.log(e);
        console.log(e.getType());

        const jsonBlob = new Blob([a],{type: 'application/json'});

        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(jsonBlob);
        downloadLink.download = 'object.json';
        downloadLink.textContent = 'Download Object';

        document.body.appendChild(downloadLink);

        
        downloadLink.addEventListener('click', () => {
            URL.revokeObjectURL(downloadLink.href);
          });
        
          const jsonBlobII = new Blob([b],{type: 'application/json'});

        const downloadLinkII = document.createElement('a');
        downloadLinkII.href = URL.createObjectURL(jsonBlobII);
        downloadLinkII.download = 'tuple.json';
        downloadLinkII.textContent = 'Download Tuple';

        document.body.appendChild(downloadLinkII);

        
        downloadLinkII.addEventListener('click', () => {
            URL.revokeObjectURL(downloadLinkII.href);
          });
    }

    static resumeTournament(){
        // build (from local storage)
    }

    static justMatch(){
        // build just match
    }

    // maybe rather UI
    // match popup after save - should close the page and go to tournament?
    // match popup at the presumed end of match - should save and goback to tournament?
}