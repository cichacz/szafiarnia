export default class Item {
    public name: string;

    private dirty: boolean;

    public setAsDirty() {
        this.dirty = true;
    }

    public isDirty(): boolean {
        return this.dirty;
    }
}