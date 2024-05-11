"use strict";
class HistoryManager {
    static getCurrentSerialNumber() {
    }
    static setCurrentSerialNumber(num) {
    }
    static incrementCurrentSerialNumber(num = 1) {
    }
    static saveLog(log) {
    }
    static undo() {
        // create reverse of the last log and do()
    }
    static redo() {
        // do() the last log
    }
    static do(log, save = false) {
        // do what is in the log
        // if save, than add it to history
    }
}
