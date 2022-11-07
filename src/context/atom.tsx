import React from "react";
import {atom} from 'recoil';
import { CartClass} from "../classes/cart.class";
import { Product } from "../classes/product.class";
import { getProduct } from "../services/dataProducts.service";

const myCart:CartClass[]=[];
// const myCart2=async function getProductById(id: string | undefined,) {
//     const response = await fetch(`http://localhost:3000/api/user/returnProductById/${id}`,
//         {
//             method: "GET",
//             headers: {
//                 'Accept': 'application/json',
//                 "content-type": "app/json",
//                 // 'Authorization':'Bearer ' + token
//             },
//         });
//     const body = await response.json();
//     if (response.status !== 200) {
//         throw Error("err not status 200")
//     }
//     return body;
// }

export const cartState = atom({
    key: 'tasksState',
    default: myCart
})

