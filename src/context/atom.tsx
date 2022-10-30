import React from "react";
import {atom} from 'recoil';
import { CartClass} from "../classes/cart.class";
import { Product } from "../classes/product.class";
import { getProduct } from "../services/dataProducts.service";

const myCart:CartClass[]=[];

export const cartState = atom({
    key: 'tasksState',
    default: myCart
})

