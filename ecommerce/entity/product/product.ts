export enum ProductType {
  product = 'product'
}

export type ProductFromApi = {
  title: string;
  text: string;
  alt: string;
  src: string;
  price: number;
  buttonText: string;
  variation?: 'primary' | 'secondary';
};

export class Product {
  constructor(
    /**
     * title of product
     */
    public title: string,
    /**
     * text of product
     */
    public text: string,
    /**
     * alt of image
     */
    public alt: string,
    /**
     * scr of image
     */
    public src: string,
    /**
     * price for product
     */
    public price: number,
    /**
     * text for button
     */
    public buttonText: string,
    /**
     * variation of button
     */
    public variation?: 'primary' | 'secondary'
  ) {}

  static fromApiObject(object: ProductFromApi) {
    return new Product(
      object.title,
      object.text,
      object.alt,
      object.src,
      object.price,
      object.buttonText,
      object.variation
    );
  }
}
