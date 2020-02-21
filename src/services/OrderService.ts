import { IMenuItem } from '../model/Menu';

class OrderServices {
  private _tableNumber: number;
  private _price: number;
  private _currentSelectedMenuItem: IMenuItem = null;
  private _selectedMenuItems: Array<IMenuItem> = [];

  get tableNumber(): number {
    return this._tableNumber;
  }
  set tableNumber(table: number) {
    this._tableNumber = table;
  }

  get price(): number {
    return this._price;
  }
  set price(price: number) {
    this._price = price;
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
