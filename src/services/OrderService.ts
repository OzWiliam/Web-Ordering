import { IMenuItem } from '../model/Menu';
import { IOrder } from '../model/Order';

class OrderServices {
  private _tableNumber: number;
  private _currentSelectedMenuItem: IMenuItem = null;
  private _selectedMenuItems: Array<IMenuItem> = [];
  private _currentSelectedOrder: IOrder = null;
  private _selectedOrder: Array<IOrder> = [];

  get tableNumber(): number {
    return this._tableNumber;
  }

  set tableNumber(table: number) {
    this._tableNumber = table;
  }

  get currentMenuItem(): IMenuItem {
    return this._currentSelectedMenuItem;
  }

  set currentMenuItem(menuItem: IMenuItem) {
    this._currentSelectedMenuItem = menuItem;
  }

  pushMenuItem(menuItem: IMenuItem) {
    this._selectedMenuItems.push(menuItem);
  }

  get menuItems(): IMenuItem[] {
    return this._selectedMenuItems || [];
  }

  get currentSelectedOrder(): IOrder {
    return this._currentSelectedOrder;
  }

  set currentSelectedOrder(order: IOrder) {
    this._currentSelectedOrder = order;
  }

  pushOrder(order: IOrder) {
    this._selectedOrder.push(order);
  }

  get totalPrice(): number {
    let result = 0;
    const menuItems = this._selectedMenuItems;
    menuItems.forEach(menuItem => {
      let price = menuItem.price;
      menuItem.modifierGroups.forEach(modifierGroup => {
        //modifierGroup.
      });
      //const quality = menuItem.
      result += price;
    });
    return result;
  }

  removeMenuItem(menuItem: IMenuItem) {
    const findIndex = this._selectedMenuItems.findIndex(
      item => menuItem._id === item._id
    );
    if (findIndex >= 0) {
      this._selectedMenuItems.splice(findIndex, 1);
    }
  }
}

const OrderService = new OrderServices();

export default OrderService;
