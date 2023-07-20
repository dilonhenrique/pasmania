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
  qtd?: number;
}

export interface IOrder {
  id: string;
  products: ISacolaProduct[];
  date: string;
  status: 'analisando pedido' | 'em rota de entrega' | 'pronto para retirada' | 'entregue' | 'cancelado';
}

export interface IEndereco {
  bairro: string,
  casa: string,
  cep: string,
  cidade: string,
  complemento: string,
  numero: string,
  rua: string,
  uf: string,
}

export interface ICliente {
  cpf: string,
  ddd: string,
  email: string,
  endereco: IEndereco[],
  key: string,
  nome: string,
  telefone: string,
}

export interface ICupom {
  name?: string;
  discount?: number;
}