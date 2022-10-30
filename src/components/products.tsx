import { count } from "console";
import React, { Component, useState } from "react";
import { Button } from "react-bootstrap";
import { text } from "stream/consumers";
import { category} from "../data/dataProducts";
import { MDBInput } from "mdbreact";
import { Outlet, Link } from "react-router-dom";
import WithRouter, { IWithRouter } from "./withRouter";
import '../App.css';
import { creatProduct, deleteProduct, getProduct } from "../services/dataProducts.service";
import { isArrayLiteralExpression } from "typescript";
import { Product } from "../classes/product.class";
// import {Cart} from "./cart";
import { cartState } from "../context/atom";
import { useRecoilState } from 'recoil';
import { CartClass } from "../classes/cart.class";
// import { stringify } from "querystring";
// const [allTasks, setAllTasks] =useRecoilState<any>(cartState);
class Products extends Component<IWithRouter>{
    _id: any;
    constructor(props: any) {
        super(props);
        getProduct().then(data => this.setState({ arrProducts: data }));
        // console.log('PRO',this.state.arrProducts) ;       
    }
    arr: Product[] = [];
    arrButtons = ['shoes', 'yard', 'baloons'];
    state = {
        arrProducts: this.arr,
        arrP: this.arr,
        filter:false
        // sumOfCart:0
    }
    render(): React.ReactNode {
        const getPP=()=>{
            if(this.state.filter!=true)
           { getProduct().then(data => this.setState({ arrProducts: data }));}

        }
        {getPP()}
        // setAllTasks
        // const FuncDel = (_id: string) => {
        //     deleteProduct(_id).then(data => console.log( 'data', data ));
        //     getProduct().then(data=> {this.setState({arrProducts: data}));});
        // }
        const FuncDel = (_id: string) => {
            deleteProduct(_id).then(data => console.log("data" + data));
            getProduct().then(data => { this.setState({ arrProducts: data }); });
        }
        // console.log('PRO', this.state.arrProducts);
        // const Push = () => {
        //     this.setState({ arrProducts: [...this.state.arrProducts, { id: 'a', name: 'olives', price: 8, category: category.cannedFood }] });
        // }
        //הוספה לסל
        const FuncCart = (id: any) => {
            const newProduct = this.state.arrProducts.filter(d => { if (d._id == id) { console.log(d.name); return d } });
            console.log('hihi' + this.state.arrProducts.filter(d => { if (d._id == id) { return d } }));
            const setcart = this.props.setCart(newProduct);
            const getcart = this.props.getCart();
        }
        const FilterCategory = (a: any) => {
            this.setState({filter:true});
            getProduct().then(data => this.setState({ arrP: data }));
            this.setState({ arrProducts: this.state.arrP.filter(p => p.category === a) });
        }

        const All = () => {
            this.setState({filter:false})
            getProduct().then(data => this.setState({ arrP: data }));
            this.setState({ arrProducts: this.state.arrP });
        }
        //הצגת מוצרי החנות
        const rows = this.state.arrProducts.map((a) => {
            return (
                // <tr>
                <Link to={`ShowProduct/${a._id}`} id="product"><div >
                    <img src={a.image} id="productImage"></img><br />
                    <h2 id="productName">{a.name}</h2>
                    <h1 id="productPrice">{a.price}</h1>
                    <h3 id="productCategory">{a.category}</h3>
                    {/* {<Link to={`ShowProduct/${a._id}`}><Button>View</Button></Link>} */}
                    <Button id="btnCart" onClick={() => { FuncCart(a._id); }}>cart</Button>
                    <Button id="btnDelProduct" onClick={() => { FuncDel(a._id); }}>Delete</Button>
                    {<Link id="btnEditProduct" to={`ProductFormEdit/${a._id}/edit/${a.name}/${a.price}/${a.category}`}><Button>Edit</Button></Link>}
                    {/* </tr>  */}
                </div></Link>
            );
        });
        const buttons = this.arrButtons.map((a) => {
            return (
                <Button id="btnCategory" onClick={() => { FilterCategory(a); }}>{a}</Button>
            );
        });        // const FuncCreate = () => {
        //     const item = {
        //         name: "puma",
        //         price: 200,
        //         category: "jjj",
        //         description: "jjjj",
        //         image: "https://m.media-amazon.com/images/I/61jhZ1yzhnL._AC_UL480_FMwebp_QL65_.jpg",
        //     };
        //     creatProduct(item).then(data => console.log(data));
        // }

        //חיפוש
        const Search = (event: string) => {
            getProduct().then(data => this.setState({ arrP: data }));
            // console.log('arrP',this.state.arrP);
            this.setState({ arrProducts: this.state.arrP.filter(p => p.name.indexOf(event) != -1) });
        }
        return <div id="products">
            <h3 id="CountCart">cart {this.props.getCart().length}</h3>
            <div id="productsFlex">
                <div id="productsFlex1">
                    <MDBInput id='search' background size="lg" placeholder="enter descraption" onChange={(event) => Search(event.currentTarget.value)} />
                    <div id="btnsCategory"><Button id="btnAll" onClick={All}>all</Button>
                    {buttons}</div>
                    {/* <tbody>
                        <table id="table">
                            <th> name</th>
                            <th> price</th>
                            <th> category</th> */}
                    <div id="rowsFlex">{rows}</div>
                    {/* </table> */}
                    {/* </tbody> */}
                    {/* onClick={Push} */}
                    {/* <Button onClick={Push}>delete</Button> */}
                    <div id='btnAdd'>{<Link to={`ProductFormAdd/add`}><Button > add product</Button></Link>}</div>
                </div>
                <div id="productsFlex2">
                    <div id="outletProducts"><Outlet /></div>
                </div>
            </div>
        </div>;
    }
}
export default WithRouter(Products);

