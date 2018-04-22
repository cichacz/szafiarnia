import Item from "./Item";

export default class Container {
    name: string;
    type: ContainerType;

    private items: Item[];

    constructor(name: string, items: Item[], type: ContainerType = ContainerType.Default) {
        this.name = name;
        this.items = items;
        this.type = type;
    }
}

export enum ContainerType {
    Default,
    Dirty,
    Trip
}