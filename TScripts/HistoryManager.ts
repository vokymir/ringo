
class HistoryManager{

    static getCurrentSerialNumber(){

    }

    static setCurrentSerialNumber(num: number){

    }

    static incrementCurrentSerialNumber(num: number = 1){

    }

    static saveLog(log: Log){

    }

    static undo(){
        // create reverse of the last log and do()
    }

    static redo(){
        // do() the last log
    }

    static do(log: Log, save: boolean = false){
        // do what is in the log
        // if save, than add it to history
    }
}