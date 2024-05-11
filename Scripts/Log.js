"use strict";
class Log {
    constructor(idOfObject, type, previous, after) {
        this.serialNumber = -1;
        this.idOfObject = idOfObject;
        this.type = type;
        this.previous = previous;
        this.after = after;
    }
    setSerialNumber(num) {
        if (this.serialNumber != -1) {
            this.serialNumber = num;
        }
    }
    getSerialNumber() {
        return this.serialNumber;
    }
    getIDofObject() {
        return this.idOfObject;
    }
    getType() {
        return this.type;
    }
    getPrevious() {
        return this.previous;
    }
    getAfter() {
        return this.after;
    }
}
