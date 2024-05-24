import { Position, Team } from "./domain";

import { Flyweight } from "./flyweight";

// Concrete Flyweights
export class PositionFlyweight implements Flyweight {
    #position: Position; // Intrinsic State

    constructor(position: Position) {
        this.#position = position;
    }

    public display(extrinsicState: any): void {
        console.log(`Position: ${this.#position.name} (${this.#position.role})`);
    }

    public position(): Position {
        return this.#position;
    }
}