"use strict";
/**
 * Encapsulate info about ONE change in the tournament, such as renaming team, passed match, change of settings...
 * Has its serial number, which determines its order in the chain of changes - must be set just before adding to the chain, default -1.
 */
class Log {
    /**
     * Each Log has it serial number, which determines its order in the chain of changes.
     * @param idOfObject ID of object on which the event happened.
     * @param type Type of event.
     * @param previous Previous state of the tournament.
     * @param after State of the tournament after the change.
     */
    constructor(idOfObject, type, previous, after) {
        this.serialNumber = -1;
        this.idOfObject = idOfObject;
        this.type = type;
        this.previous = previous;
        this.after = after;
    }
    /**
     * ONLY for History manager to use, NOWHERE ELSE SHOULD IT BE USED!
     * Set just before adding to the chain of Logs, to avoid conflicts.
     * @param num Number greater than the precent number by one.
     */
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
