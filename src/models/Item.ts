export default class Item {
  id: string;
  name: string;
  colourGroup: ColourGroup;
  subcategory: string;
  laundryCategory: LaundryCategory;
  packingCategory: PackingCategory;
  //brakuje dodawania, usuwania i wyświetlania zdjęć https://alligator.io/vuejs/uploading-vue-picture-input/

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

export enum LaundryCategory {
  Delicate,
  Sport,
  Cotton,
  Wool,
  Linen,
  Alergic,
  Regular
}

export enum PackingCategory {
  Underwear,
  Socks,
  Shirts,
  Trousers,
  Shoes,
  Jacket,
  Skirts,
  Accessories,
  Other,
}

// export enum