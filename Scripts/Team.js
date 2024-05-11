"use strict";
/**
 * Encapsulate team id and name.
 * Can get/set name, get id (immutable).
 * ID should be unique, here not responsible.
 */
class Team {
    /**
     * Create new Team.
     * @param id In N, greater than 0, UNIQUE! - your responsibility to provide Team with unique ID.
     * @param name Any string.
     */
    constructor(id, name) {
        if (id <= 0) {
            throw new Error("Team ID must be greater than zero.");
        }
        this.id = id;
        this.name = name;
    }
    /**
     * Get the ID of the Team.
     * @returns ID of the Team.
     */
    getId() {
        return this.id;
    }
    /**
     * Get the name of the Team.
     * @returns Name of the Team.
     */
    getName() {
        return this.name;
    }
    /**
     * Set name of Team to new name.
     * Useful for misclicks when typing or so.
     * @param newName New name.
     */
    setName(newName) {
        this.name = newName;
    }
}
