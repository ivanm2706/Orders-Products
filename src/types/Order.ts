import { Product } from "./Product";

export interface Order {
  id: number,
  title: string,
  date: string,
  description: string,
  readonly products: Product[],
};
