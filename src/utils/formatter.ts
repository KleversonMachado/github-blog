import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

export const dateFormat = (date: string) => {
  return formatDistance(new Date(date), new Date(), {
    addSuffix: true,
    locale: ptBR,
  });
};

export const numberFormat = (number: number) => {
  return number.toLocaleString("pt-BR");
};
