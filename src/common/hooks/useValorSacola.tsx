import { useState } from "react";
import { useMenuContext } from "../context/menu";
import { useSacolaContext } from "../context/sacola";
import { ICupom } from "../interfaces/interfaces";

export default function useValorSacola(){
  const { sacola } = useSacolaContext();
  const produtos = sacola.reduce((soma, item) => soma = soma + item?.price, 0);

  const cashback = typeof localStorage === 'undefined' ? 0 : Number(localStorage.getItem('pasmania-cashback')) || 0;
  
  const [cupom, setCupom] = useState<ICupom>({});
  
  const subtotal = produtos - cashback - (cupom.discount || 0);
  const frete = 7;
  const total = subtotal + frete;

  return {
    produtos,
    cashback,
    cupom,
    subtotal,
    frete,
    total
  };
}