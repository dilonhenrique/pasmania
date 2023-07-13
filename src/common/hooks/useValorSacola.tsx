import { useMenuContext } from "../context/menu";
import { useSacolaContext } from "../context/sacola";

export default function useValorSacola(){
  const { sacola } = useSacolaContext();
  const subtotal = sacola.reduce((soma, item) => soma = soma + item?.price, 0);
  const frete = 7;
  const total = subtotal + frete;

  return {
    subtotal,
    frete,
    total
  };
}