export class Watch{

  constructor(public id?: number, public  name?: string, public country?: string, public brand?: string, public price?: number) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.brand = brand;
    this.price = price;
  }

}

export interface IWatchResponse {
   total: number;
   results: any[];
}
