import React from "react";
import { add } from "../services/dataProducts.service";
describe("Product Testing", () => {
    it('See Product Details testing', () => {
        const result = add(4, 5);
        expect(result).toEqual(9);
    })
})