export interface IMenuItem {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  dietaryRequirements: [{ id: string; itemName: string }];
  modifierGroups: [
    {
      _id: string;
      description: string;
      modifierGroupType: 1;
      modifierItems: [
        {
          _id: string;
          name: string;
          price: number;
        }
      ];
    }
  ];
  categoryId:string
}
