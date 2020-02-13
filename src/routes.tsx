import React from 'react';
import Menu from "./components/Menu/Menu";
import  Order  from "./components/Order/Order";
import MenuDetail from "./components/Menu-Detail/Menu-Detail";

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Order/>
    },
    {
        path : '/menu/:orderTable',
        exact : false,
        main : () => <Menu/>
    },
    {
        path : '/menu:',
        exact : false,
        main : () => <MenuDetail />
    },
    
];

export default routes;