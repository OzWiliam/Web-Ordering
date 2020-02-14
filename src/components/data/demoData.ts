export const MENU_ITEMS = [
  {
    _id: '5d54cc3cf3a38d0013876b1c',
    title: 'Sysnet - Beef Schnitzel - 101231',
    description:
      'Stretch a piece of cling film over a chopping board, lay the steaks on top of it, then put another piece of cling film on top. Use a rolling pin to bash the steaks until they are really flat and thin.\nMix the flour and paprika with some salt and pepper on a plate. Put the egg and breadcrumbs on two more plates, then dip the steaks into the flour first, then the egg, then the breadcrumbs.\nHeat 1 tsp of butter and 1 tsp of oil in a large frying pan, then cook one of the schnitzels for about 1 min on each side until the breadcrumbs are golden and crispy. Repeat Step 3 for the other schnitzels. Serve with lemon wedges, salad and coleslaw, if you like.',
    price: 125.25,
    imageUrl: 'https://develop-cdn.hlcloud.com.au/5d561e3ea8530e3284e62d84/5d0c4a6abfc3ec001f0d1fb9/BeefSchnitzel.jpg',
    dietaryRequirements: [
      {
        id: 'DAIRY_FREE',
        itemName: 'Dairy Free'
      },
      {
        id: 'NUT_FREE',
        itemName: 'Nut Free'
      }
    ],
    modifierGroups: [
      {
        _id: '5d54cd1ff3a38d0013876b1f',
        description: 'Sysnet - Which Sauce do you want to use with?',
        modifierGroupType: 1,
        modifierItems: [
          {
            _id: '5d54cd1ff3a38d0013876b1d',
            name: 'Sysnet - Dianne Sauce - 105701',
            price: 1.5,
          },
          {
            _id: '5d54cd1ff3a38d0013876b1e',
            name: 'Sysnet - Creamy Garlic Sauce - 105711',
            price: 2,
          }
        ]
      },
      {
        _id: '5d54cd1ff3a38d0013876b23',
        description: 'Sysnet - Cooking style?',
        modifierGroupType: 1,
        modifierItems: [
          {
            _id: '5d54cd1ff3a38d0013876b20',
            name: 'Sysnet - Rare - 105501',
            price: 0,
          },
          {
            _id: '5d54cd1ff3a38d0013876b21',
            name: 'Sysnet - Medium - 105503',
            price: 0,
          },
          {
            _id: '5d54cd1ff3a38d0013876b22',
            name: 'Sysnet - Well Done - 105505',
            price: 1.5,
          }
        ]
      }
    ],
    categoryId: '5d931f37cc113e0015e34de1'
  },

  {
    _id: '5d54cd20f3a38d0013876b24',
    title: 'Sysnet - Chicken Parmigiana - 101230',
    description:
      'Fry chicken until golden and crispy, (about 4-5 minutes each side). Place chicken on prepared baking tray / dish and top each breast with about 1/3 cup of sauce (sauce recipe below). Top each chicken breast with 2-3 slices of mozzarella cheese and about 2 tablespoons Parmesan cheese. Sprinkle with basil or parsley',
    price: 256.99,
    imageUrl:
      'https://develop-cdn.hlcloud.com.au/5d561e3ea8530e3284e62d84/5d0c4a6abfc3ec001f0d1fb9/ChickenParmigiana.jpg',
    modifierGroups: [
      {
        _id: '5d54cd1ff3a38d0013876b1f',
        description: 'Sysnet - Which Sauce do you want to use with?',
        modifierGroupType: 1,
        modifierItems: [
          {
            _id: '5d54cd1ff3a38d0013876b1d',
            name: 'Sysnet - Dianne Sauce - 105701',
            price: 1.5,
          },
          {
            _id: '5d54cd1ff3a38d0013876b1e',
            name: 'Sysnet - Creamy Garlic Sauce - 105711',
            price: 2,
          }
        ]
      }
    ],
    categoryId: '5d931f37cc113e0015e34de1'
  }
];
