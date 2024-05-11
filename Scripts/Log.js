"use strict";
class Log {
    constructor(id, type, previous, after) {
        this.id = id;
        this.type = type;
        this.previous = previous;
        this.after = after;
    }
    getID() {
        return this.id;
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
