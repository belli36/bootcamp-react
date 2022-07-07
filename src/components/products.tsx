import { count } from "console";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { text } from "stream/consumers";
import { category, dataProductList } from "./data/dataProducts";
import { MDBInput } from "mdbreact";
import { Outlet, Link } from "react-router-dom";

export class Products extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            arrProducts: dataProductList,
            id: 0
        };
    }
    state: {
        arrProducts: { id: number, name: string, price: number, category: category, description: string }[],
        id: number
    }
    render(): React.ReactNode {
        const Push = () => {
            this.setState({ arrProducts: [...this.state.arrProducts, { id: 5, name: 'olives', price: 8, category: category.cannedFood }] });
        }
        const rows = this.state.arrProducts.map((a) => {
            return (
                <tr>
                    <td>{a.id}</td>
                    <td>{a.name}</td>
                    <td>{a.price}</td>
                    <td>{a.category}</td>
                    <td>{<Link to={`Products/ShowProduct/:${this.state.id}`}>Show</Link>}</td>
                    <td>{<Link to={`ducts/productForm`}>Edit</Link>}</td>

                </tr>
            );
        });
        const Search = (event: string) => {
            const arrP = dataProductList;
            this.setState({ arrProducts: arrP.filter(p => p.name.indexOf(event) != -1) });
        }
        return <div>
            <p>{(this.state.arrProducts)[0].name}</p>
            <Button onClick={Push}>add product</Button><br />
            <MDBInput label="to search by name" background size="lg" onChange={(event) => Search(event.currentTarget.value)} />
            <tbody>
                <table>
                    <th> id</th>
                    <th> name</th>
                    <th> price</th>
                    <th> category</th>
                    <th>show product and edit</th>
                    {rows}
                </table>
            </tbody>
            <div><Outlet /></div>
        </div>;
    }
}



