export interface ICategory {
  category: string;
  categorySKU: number;
  image: string;
  type: string;
  typeSKU: number;
  typeImage: number;
  products: IProduct[];
}

export interface IProduct {
  sku: string;
  product: string;
  price: number;
  description: string;
  image: string;
  oldPrice: number;
  fractioned: boolean;
  highlighted: boolean;
  ean: string;
  typeproduct: string;
  cashback: number;
  prohibited: boolean;
  qtdeMaxAuto: number;
  visibility: string[];
  variations: any[];
}

export interface ISacolaProduct extends IProduct {
  id: string;
}

export interface IPedido {
  id: string;
  quantity: number;
  sku: string;
}