/**
 * Encapsulate team id and name.
 */
class Team {

    private id: number;
    private name: string;

    /**
     * Create new Team.
     * @param id In N, greater than 0, UNIQUE! - your responsibility to provide Team with unique ID.
     * @param name Any string.
     */
    constructor(id: number, name: string) {
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
    public getId(): number {
        return this.id;
    }

    /**
     * Get the name of the Team.
     * @returns Name of the Team.
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set name of Team to new name.
     * Useful for misclicks when typing or so.
     * @param newName New name.
     */
    public setName(newName: string): void {
        this.name = newName;
    }
}