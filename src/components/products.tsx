import { count } from "console";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { text } from "stream/consumers";
import { category, dataProductList } from "./data/dataProducts";
// import { MDBInput } from "mdbreact";
import { Outlet, Link } from "react-router-dom";

export class Products extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            arrProducts: [...dataProductList],
            id: 0
        };
    }
    state = {
        arrProducts: [...dataProductList],
        id: 0
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
                            <dt>{<Link to="Products/ShowProduct/">Show this product</Link>}</dt>
                        </tr>
                    );
                });
                let stateProducts = this.state.arrProducts;
                const Search = (event: string) => {
                    // console.log("now" + event)
                    this.setState({ arrProducts: [...dataProductList] })
                    if (event != '') {
                        this.setState({ arrProducts: this.state.arrProducts.filter(p => p.name.indexOf(event) != -1) });
                    }        
                }
                return <div>
                <p>{(this.state.arrProducts)[0].name}</p>
                <Button onClick={Push}>add product</Button><br />
                {/* <MDBInput label="to search by name" background size="lg" onChange={(event: { currentTarget: { value: string; }; }) => Search(event.currentTarget.value)} />       */}
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


    
