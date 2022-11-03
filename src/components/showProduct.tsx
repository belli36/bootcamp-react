// import React, { Component } from 'react';
// // import { category, dataProductList } from "./data/dataProducts";
// import { MDBInput } from 'mdbreact';
// import { Button } from "react-bootstrap";
// import { Link, Outlet } from 'react-router-dom';
// import { Product } from '../classes/product.class';
// import {  getProductById } from '../services/dataProducts.service';
// import WithRouter, { IWithRouter } from './withRouter';
// // import { ProductForm } from './productForm';

// class ShowProduct extends Component<IWithRouter>{

//     arr: Product[] = [];
//     constructor(props: any) {
//         super(props);
//         getProductById(this.props.params._id).then(data => this.setState({ arrProducts: data }));
//         // this.state = {
//         //     arrProducts: [...dataProductList]
//         // };

//         // componentDidMount {
//         //     api.getQuiz(props.match.params.id).then(data =>
//         //        // logic
//         //  )
//     }
//     state = {
//         arrProducts: this.arr
//     }
//     render() {
//         // const Edit=()=>{
//         //     return(
//         //         <div><p>hvjhvhvh</p></div>
//         //     )
//         // }
//         // <Link to={`Products/ShowProduct/productForm:${this.state.arrProducts}`}>Show this product</Link>
//         // const a=getParams.id ;
//         // console.log(a);
//         return <div id='show'>
//             <h1>{this.state.arrProducts[0].name}</h1>
//             <h2>{this.state.arrProducts[0].description}</h2>
//             {/* <div>{<Link to={"Products/ShowProduct/productForm}"}>Edit this product</Link>}</div> */}
//             <div>hello show</div>
//             {/* <ProductForn></ProductForn> */}
//             {/* <MDBInput label="enter name of the product" background size="sm"/> */}
//             {/* <MDBInput type="number" label="enter price" background size="sm"/> */}
//             {/* <select>   
//             </select> */}
//             {/* <MDBInput label="enter name of the product" background size="sm"/>  */}
//             {/* <Button onClick={Edit}>edit</Button> */}
//             <div><Outlet /></div>
//         </div>
//     }
// }
// export default WithRouter(ShowProduct);
import React, { Component } from 'react';
// import { category, dataProductList } from "./data/dataProducts";
import { MDBInput } from 'mdbreact';
import { Button } from "react-bootstrap";
import { Link, Outlet } from 'react-router-dom';
import { Product } from '../classes/product.class';
import { getProduct, getProductById } from '../services/dataProducts.service';
import WithRouter, { IWithRouter } from './withRouter';
// import { ProductForm } from './productForm';
class ShowProduct extends Component<IWithRouter>{
    arr: Product[] = [];
    state = {
        arrProducts: this.arr,
    }
    constructor(props: any) {
        super(props);
        getProduct().then(data => this.setState({ arrProducts: data }))
    }

    render() {
        const FuncCart = (id: any) => {
            const newProduct = this.state.arrProducts.filter(d => { if (d._id == id) { console.log(d.name); return d } });
            console.log('hihi' + this.state.arrProducts.filter(d => { if (d._id == id) { return d } }));
            const setcart = this.props.setCart(newProduct);
            const getcart = this.props.getCart();
        }
        const index = this.state.arrProducts.findIndex(p => p._id == this.props.params._id);
        console.log(this.props.location);
        return <div id='show'>
            <h3 id="CountCart2">סל: {this.props.getCart().length}</h3>

            {this.state.arrProducts ? <div id="showFlex">
                <div id='showFlexImg'>
                    <img id="imageShow" src={this.state.arrProducts[index] ? this.state.arrProducts[index].image : ''}></img>
                </div>
                <div id='showFlexTxt'>
                    <h2 id='showTxtId'>{this.props.params._id}</h2>

                    <h2 id='showTxtName'>{this.state.arrProducts[index] ? this.state.arrProducts[index].name : <div className="spinner-border text-primary"></div>}</h2><br />
                    <h2 id='showTxtDescription'>{this.state.arrProducts[index] ? this.state.arrProducts[index].description : ''}</h2>
                    <h2 id='showTxtPrice'>{this.state.arrProducts[index] ? this.state.arrProducts[index].price : ''} ש"ח</h2>

                    <Button id="btnCart" onClick={() => { FuncCart(this.props.params._id); }}>הוספה לסל</Button>

                </div>

            </div> : <div>ppppp</div>}

            <Outlet />
        </div>
    }
}
export default WithRouter(ShowProduct);






