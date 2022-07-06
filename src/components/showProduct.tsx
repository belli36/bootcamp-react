import React from 'react';
import { category, dataProductList } from "./data/dataProducts";
// import { MDBInput } from 'mdbreact';



export class ShowProduct extends React.Component <{},{}>{

    constructor(props: any) {
        super(props);
        this.state = {
            arrProducts: [...dataProductList]
        };
    }
    state = {
        arrProducts: [...dataProductList]
    }
    render() {
        return <div>
            <h1>{this.state.arrProducts[1].name}</h1>
            <h2>{this.state.arrProducts[1].description}</h2>

            {/* <MDBInput label="enter name of the product" background size="sm"/> */}
            {/* <MDBInput type="Number" label="enter price" background size="sm"/> */}
            <select>
                
            </select>
            {/* <MDBInput label="enter name of the product" background size="sm"/> */}
        </div>
    }

}