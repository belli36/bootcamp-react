import { count } from "console";
import React, { Component, useState } from "react";
import { Button } from "react-bootstrap";
import { text } from "stream/consumers";
import { category } from "../data/dataProducts";
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
    arrButtons = [ 'חימום', 'בלונים','קונפיטי','זרי כלה','דוכני מזון'];
    state = {
        arrProducts: this.arr,
        arrP: this.arr,
        filter: false
        // sumOfCart:0
    }
    render(): React.ReactNode {
        const getPP = () => {
            if (this.state.filter != true) { getProduct().then(data => this.setState({ arrProducts: data })); }

        }
        // if()
        // { getPP() }
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
            this.setState({ filter: true });
            getProduct().then(data => this.setState({ arrP: data }));
            this.setState({ arrProducts: this.state.arrP.filter(p => p.category === a) });
        }

        const All = () => {
            this.setState({ filter: false })
            getProduct().then(data => this.setState({ arrP: data }));
            this.setState({ arrProducts: this.state.arrP });
        }
        //הצגת מוצרי החנות
        const rows = this.state.arrProducts.map((a) => {
            return (
                // <tr>
                <Link to={`/ShowProduct/${a._id}`} className="card" style={{ width: "400px" }} id="product"><div >
                    <img src={a.image} className="card-img-top" id="productImage"></img><br />
                    <div className="card-body">
                        <h2 className="card-title" id="productName">{a.name}</h2>
                        <h1 className="card-text" id="productPrice">{a.price} ש"ח</h1>
                        {/* <h3 id="productCategory">{a.category}</h3> */}
                        {/* {<Link to={`ShowProduct/${a._id}`}><Button>View</Button></Link>} */}
                        <Button className="btn btn-primary" id="btnCart" onClick={() => { FuncCart(a._id); }}>הוספה לסל</Button>
                    </div>
                    {/* <Button id="btnDelProduct" onClick={() => { FuncDel(a._id); }}>מחיקה</Button> */}
                    {/* {<Link id="btnEditProduct" to={`/ProductFormEdit/${a._id}/edit/${a.name}/${a.price}/${a.category}`}><Button>עריכה</Button></Link>} */}
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
            <div className="grid-container">
                {/*   
  
  <div class="item3">Main</div>  
  <div class="item4">Right</div> */}

                <div className="item1">
                    <h3 id="CountCart">סל: {this.props.getCart().length}</h3>
                    {/* <div id="productsFlex"> */}
                    {/* <div id="productsFlex1"> */}
                    <div id="searchAndButtons">
                        <MDBInput id='search' background size="lg" placeholder="enter descraption" onChange={(event) => Search(event.currentTarget.value)} />
                        <div id="btnsCategory"><Button id="btnAll" onClick={All}>הכל</Button>
                            {buttons}
                        </div>
                    </div>
                </div>
                {/* <div className="item2">
                    <p>jhgfdfghjkljhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p><br></br>
                    <p>jhgfdfghjkljhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p><br></br>
                </div> */}
                {/* </div> */}
                {/* </div> */}
                <div className="item3">
                    <div id="rowsFlex">{rows}</div>
                </div>

                <div id='btnAdd'>{<Link to={`/ProductFormAdd/add`}><Button > הוספת מוצר</Button></Link>}</div>
                {/* <div id="productsFlex2">
                        <div id="outletProducts"><Outlet /></div>
                    </div> */}

                {/* <div className="item5"> */}

                <ul className="pagination">
                    <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
                {/* </div> */}

            </div>
        </div >
    }
}
export default WithRouter(Products);

