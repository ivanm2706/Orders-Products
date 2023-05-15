import { Order } from "./Order";
import { Product } from "./Product";

export type ModalType = {
  status: boolean,
  product: Product | null,
  order: Order | null,
};
