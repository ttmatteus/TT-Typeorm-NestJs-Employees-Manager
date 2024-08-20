import { AfterLoad } from "typeorm";

export class EntityBase {
    #events: unknown[] = [];

    addEvent(event: unknown): void {
        this.#events.push(event)
    }

    clearEvents(): void {
        this.#events = [];
    }

    getEvent(): unknown[] {
        return [...this.#events];
    }

    @AfterLoad()
    clearEventsAfterLoad() {
        this.clearEvents();
    }
}