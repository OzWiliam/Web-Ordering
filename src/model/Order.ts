import { IMenuItem } from './Menu';

export interface IOrder {
  tableNumber: number;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  menuItems: IMenuItem[];
}
