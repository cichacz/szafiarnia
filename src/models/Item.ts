export default class Item {
  id: string | undefined;
  name: string;
  idContainer: string | undefined;
  colourGroup: ColourGroup | undefined;
  laundryCategory: LaundryCategory | undefined;
  packingCategory: PackingCategory | undefined;
  subcategory: string | undefined;
  //brakuje dodawania, usuwania i wyświetlania zdjęć https://alligator.io/vuejs/uploading-vue-picture-input/

  private dirty: boolean;

  constructor(
    name: string,
    colorGroup?: ColourGroup,
    laundryCategory?: LaundryCategory,
    packingCategory?: PackingCategory,
    subcategory?: string,
    idContainer?: string,
    isDirty: boolean = false,
    id?: string
  ) {
    this.id = id;
    this.name = name;
    this.colourGroup = colorGroup;
    this.laundryCategory = laundryCategory;
    this.packingCategory = packingCategory;
    this.subcategory = subcategory;
    this.idContainer = idContainer;
    this.dirty = isDirty;
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