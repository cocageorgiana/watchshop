export class AdvertisementDto{
  listingNo: string;
  title: string;
  description: string;
  price: number;
  referenceNo: string;
  currency: string;
  brand?: string;
  brandModel?: string;

  constructor(listingNo?: string, title?: string, description?: string, price?: number,
    referenceNo?: string, currency?: string, brand?: string, brandModel?: string) {
    this.listingNo = listingNo;
    this.title = title;
    this.description = description;
    this.price = price;
    this.referenceNo = referenceNo;
    this.currency = currency;
    this.brand = brand;
    this.brandModel = brandModel;
  }
}
