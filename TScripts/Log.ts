
class Log{
    private id: number;
    private type: LogEvent;
    private previous: any;
    private after: any;

    constructor(id: number, type: LogEvent, previous: any, after: any){
        this.id = id;
        this.type = type;
        this.previous = previous;
        this.after = after;
    }

    getID(){
        return this.id;
    }

    getType(){
        return this.type;
    }

    getPrevious(){
        return this.previous;
    }

    getAfter(){
        return this.after;
    }
}