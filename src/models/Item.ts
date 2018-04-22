export default class Item {
    name: string;

    private dirty: boolean;

    constructor(name: string, dirty: boolean = false) {
        this.name = name;
        this.dirty = dirty;
    }

    public setAsDirty() {
        this.dirty = true;
    }

    public isDirty(): boolean {
        return this.dirty;
    }
}