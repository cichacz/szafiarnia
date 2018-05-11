export default class Item {
    name: string;
    colourGroup: ColourGroup;
    subcategory: string;

    private dirty: boolean;

    constructor(name: string, dirty: boolean = false) {
        this.name = name;
        this.dirty = dirty;
        
       // this.colourGroup = ColourGroup.Black;
    }

    public setAsDirty() {
        this.dirty = true;
    }

    public isDirty(): boolean {
        return this.dirty;
    }
    
}

export enum ColourGroup {
    White,
    Black,
    Dark,
    Light,
    Multicolour
}

// export enum 