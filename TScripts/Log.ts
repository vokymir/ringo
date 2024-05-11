
class Log{
    private serialNumber: number = -1;
    private idOfObject: number;
    private type: LogEvent;
    private previous: any;
    private after: any;

    constructor(idOfObject: number, type: LogEvent, previous: any, after: any){
        this.idOfObject = idOfObject;
        this.type = type;
        this.previous = previous;
        this.after = after;
    }

    setSerialNumber(num: number){
        if (this.serialNumber != -1){
            this.serialNumber = num;
        }
    }

    getSerialNumber(){
        return this.serialNumber;
    }
    
    getIDofObject(){
        return this.idOfObject;
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