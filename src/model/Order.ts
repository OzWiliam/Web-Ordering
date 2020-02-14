import { IMenuItem } from "./Menu";

export default interface IOrder{
    tableNumber: number;
    contact: {
        name: string;
        email: string;
        phone: string;
    }
    menuItems: IMenuItem[];
}