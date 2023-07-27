export interface IMenu {
  isLoading: false | undefined;
  pix: boolean;
  filial: string;
  frontImage: string[],
  frontImageSKU: string[],
  parentStore: boolean;
  authkey: string;
  id_loja: string;
  allowFractioned: boolean;
  paymentTypes: IPaymentType[];
  weekDeliveryRoute: string[];
  weekDeliveryStore: IOpenTime[];
  weekShopStore: IOpenTime[];
  holidays: IHoliday[];
  questions: IQuestion[];
  colorStore: any;
  blocked: boolean;
  showPhoto: boolean;
  showDescription: boolean;
  info: any;
  pagsegurochavepub: string;
  timeTakeAwayMin: string;
  timeTakeAwayMax: string;
  open: boolean;
  timeDeliverMin: string;
  timeDeliverMax: string;
  scheduled: boolean;
  purchaseMin: number;
  freeDelivery: number;
  modules: number;
  takeawayOptions: string[];
  cashPayments: string;
  physicalPayments: string;
  onlinePayments: string;
  gularisToken: string;
  gularisMinimum: number;
  gularisUrl: string;
  CEPNeeded: boolean;
  storesLocations: IStoreLocation[];
  menu: ICategory[];
  area: string[];
  radius: string[];
  radiusmax: number;
}

export interface IArea {
  name: string;
  UF: string;
  districts: IDistrict[];
}

export interface IDistrict {
  name: string;
  id_loja: string;
  deliveryFee: number;
  permission: string;
  restrictions?: IRestriction[];
}

export interface IRestriction {
  street: string;
  postalCode: string;
  id_loja: string;
  status: string;
}

export interface IStoreLocation {
  id_loja: string;
  address: string;
  store: string;
}

export interface IQuestion {
  code: number;
  question: string;
  internal: string;
  answer: boolean | string[];
  type: number;
}

export interface IHoliday {
  day: string;
  date: string;
  open: boolean;
}

export interface IOpenTime {
  openTime: string;
  closeTime: string;
  weekDay: string[];
  day: number[];
}

export interface IPaymentType {
  code: string;
  description: string;
  online: string;
}

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
  values: {
    cashback: number;
    cupom?: ICupom;
    subtotal: number;
    frete: number;
    total: number;
  }
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