export default class Container {
  id: string | undefined;
  name: string;
  type: ContainerType;

  constructor(name: string, type: ContainerType = ContainerType.Default, id?: string) {
      this.id = id;
      this.name = name;
      this.type = type;
  }
}

export enum ContainerType {
    Default,
    Dirty,
    Trip
}