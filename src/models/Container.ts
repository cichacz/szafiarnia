export default class Container {
  name: string;
  type: ContainerType;

  constructor(name: string, type: ContainerType = ContainerType.Default) {
      this.name = name;
      this.type = type;
  }
}

export enum ContainerType {
    Default,
    Dirty,
    Trip
}