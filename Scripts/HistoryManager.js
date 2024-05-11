"use strict";
/**
 * In charge of history saved to Local storage.
 * Apart of saving the history can also EXECUTE ON CHANGING HISTORY,
 * when needed for undo/redo functionality.
 */
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
