// import { MDBInput } from "mdbreact";
// import React, { Component } from "react";
// import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { category, dataProductList } from "../data/dataProducts";
// import WithRouter, { IWithRouter } from "./withRouter";
// import '../App.css';
// import { creatProduct, getProduct, updateProduct } from "../services/dataProducts.service";
// import { Product } from "../classes/product";
// class ProductForm extends Component<IWithRouter>{
//     mode = "";
//     constructor(props: any) {
//         super(props);

//         // this.mode = this.props.params.mode;
//         console.log(this.mode)
//         getProduct().then(data => this.setState({ arrProducts: data }));
//         // console.log('form',this.state.arrProducts);
//         console.log('url-hi');
//     }
//     // ,this.props.params._id
//     status = "0";
//     arr: Product[]=[];

//     state = {
//         arrProducts: this.arr,
//         name: "",
//         price: "",
//         category: "",
//         description: ""
//     }
// }

// render(): React.ReactNode {

//     let index: number = -1;
//     if (this.mode == 'edit') {
//         index = this.state.arrProducts.findIndex(p => p._id == this.props.params._id);
//     }
//     const relase = () => {
//         this.setState({ name: "" });
//         this.setState({ price: 0 });
//         this.setState({ category: "" });
//         this.setState({ description: "" });
//     }
//     const addProduct = () => {
//         console.log("in add");
//         creatProduct(
//             { _id: "", name: this.state.name, price: this.state.price, category: this.state.category, description: this.state.description, image: "https://m.media-amazon.com/images/I/61jhZ1yzhnL._AC_UL480_FMwebp_QL65_.jpg" }
//         ).then(data => console.log(data));
//         relase();
//     }
//     const editProduct = () => {
//         console.log("in edit if");
//         if (this.props.params._id != null) {
//             updateProduct(this.props.params._id, { _id: "", name: this.state.name, price: this.state.price, category: this.state.category, description: this.state.description, image: "https://m.media-amazon.com/images/I/61jhZ1yzhnL._AC_UL480_FMwebp_QL65_.jpg" })
//                 .then(data => console.log(data));
//         }
//         relase();
//     }
//     const check = (event: any) => {
//         event.preventDefault();
//         if (this.props.params.mode == "add") {
//             addProduct();
//         } else {
//             console.log(this.props.params._id);
//             editProduct();
//         }
//     }
//     return (<div id="form">
//         <div>
//             <form>
//                 <div>
//                     {/* {this.state.arrProducts?<div><h2>{this.state.arrProducts[index]?this.state.arrProducts[index].name:'loading...'}</h2>    </div>:<div></div>} */}
//                     {/* <input aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter name" value={this.state.name} onChange={e => this.setState({ name: e.currentTarget.value })} /> */}
//                     <input aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter name" name="name" value={this.state.arrProducts ? this.state.arrProducts[index] ? this.state.arrProducts[index].name : 'loading...' : ''} onChange={e => this.setState({ name: e.currentTarget.value })} />
//                 </div>
//                 <div>
//                     <input aria-label="Price" aria-describedby="basic-addon1" className="form-control" type="number" placeholder="enter price" name="price" value={this.state.arrProducts ? this.state.arrProducts[index] ? this.state.arrProducts[index].price : 'loading...' : ''} onChange={e => this.setState({ name: e.currentTarget.value })} />
//                     {/* <input aria-label="Price" aria-describedby="basic-addon1" className="form-control" type="text" placeholder="enter price" name="price" value="aaa" onChange={e => this.setState({ name: e.currentTarget.value })} /> */}
//                 </div>
//                 <Button type="submit" onClick={check}>submit</Button>

//             </form>
//         </div>
//     </div>
//     )
// }

// export default WithRouter(ProductForm);
import React, { Component } from "react";
import { category } from "../data/dataProducts";
import '../App.css'
import WithRouter, { IWithRouter } from "./withRouter";
import { Link, Navigate, Outlet } from "react-router-dom";
import { creatProduct, getProduct, updateProduct } from "../services/dataProducts.service";
import { Product } from "../classes/product.class";
import { Button } from "react-bootstrap";
class ProductForm extends Component<IWithRouter>  {
    arr: Product[] = [];
    constructor(props: any) {
        super(props)
        getProduct().then(data => this.setState({ arrProducts: data }));
        console.log("this id", this.props.params._id);
    }
    state = {
        arrProducts: this.arr,
        countId: 0,
        name: "",
        price: 0,
        category: "",
        description: "",
        image: ""
    }
    render(): React.ReactNode {
        // let index:number=-1;
        // if(this.props.params.mode=="edit"){
        //     index=this.state.arrProducts.findIndex(p => p._id == this.props.params._id);
        // }
        // const ed=()=>{
        //     this.setState({ name: this.state.arrProducts[index]?.name });
        //     this.setState({ price: this.state.arrProducts[index]?.price });
        //     this.setState({ category: this.state.arrProducts[index]?.category });
        //     this.setState({ description: this.state.arrProducts[index]?.description });
        //     return "kkk"
        // }
        const relase = () => {
            this.setState({ name: "" });
            this.setState({ price: 0 });
            this.setState({ category: "" });
            this.setState({ description: "" });
            this.setState({ image: "" });
        }
        const addProduct = () => {
            console.log("in add");
            creatProduct(
                { _id: "", name: this.state.name, price: this.state.price, category: this.state.category, description: this.state.description, image: this.state.image }
            ).then(data => console.log(data));
            relase();
        }
        const editProduct = () => {
            console.log("in edit if");
            if (this.props.params._id != null) {
                updateProduct(this.props.params._id, { _id: "", name: this.state.name, price: this.state.price, category: this.state.category, description: this.state.description, image: this.state.image })
                    .then(data => console.log(data));
            }
            // this.props.setCart('lll');
            // this.props.navigate
            relase();
        }
        const check = (event: any) => {
            event.preventDefault();
            if (this.props.params.mode == "add") {
                addProduct();
            } else {
                console.log(this.props.params._id);
                editProduct();
            }
        }
        // {this.state.arrProducts?this.state.arrProducts[index]?this.state.arrProducts[index].name:'loading...':''}
        return (<div id="form">
            <div>
                <form>
                    <div>
                        {/* {this.state.arrProducts?<div><h2>{this.state.arrProducts[index]?this.state.arrProducts[index].name:'loading...'}</h2>    </div>:<div></div>} */}
                        {/* <input aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter name" value={this.state.name} onChange={e => this.setState({ name: e.currentTarget.value })} /> */}
                        <input aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter name" value={this.state.name} onChange={e => this.setState({ name: e.currentTarget.value })} />
                    </div>
                    <div>
                        <input aria-label="Username" aria-describedby="basic-addon1" className="form-control" type="Number" placeholder="enter price" value={this.state.price} onChange={e => this.setState({ price: parseInt(e.currentTarget.value) })} />
                    </div>
                    <div>
                        <select aria-label="Username" aria-describedby="basic-addon1" className="form-control" value={this.state.category} onChange={e => this.setState({ category: e.currentTarget.value })}>
                            {Object.values(category).map((c) => <option>{c}</option>)}
                        </select>
                    </div>
                    <div>
                        <input aria-label="Description" aria-describedby="basic-addon1" className="form-control" placeholder="enter descraption" value={this.state.description} onChange={e => this.setState({ description: e.currentTarget.value })} />
                    </div>
                    <div>
                        <input aria-label="Image" aria-describedby="basic-addon1" className="form-control" placeholder="enter url of image" value={this.state.image} onChange={e => this.setState({ image: e.currentTarget.value })} />
                    </div>
                    <Button type="submit" onClick={check}>submit</Button>

                </form>
            </div>
        </div>
        )
        // return <div >
        //     <form id="userForm" className="input-group container-fluid navbar bg-light" onSubmit={event => check(event)}>
        //         <input aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter name" value={this.state.name} onChange={e => this.setState({ name: e.currentTarget.value })} />
        //         <input aria-label="Username" aria-describedby="basic-addon1" className="form-control" type="Number" placeholder="enter price" value={this.state.price} onChange={e => this.setState({ price: parseInt( e.currentTarget.value) })} />
        //         <select aria-label="Username" aria-describedby="basic-addon1" className="form-control" value={this.state.category} onChange={e => this.setState({ category: e.currentTarget.value })}>
        //             {Object.values(category).map((c) => <option>{c}</option>)}
        //         </select>
        //         <input aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter descraption" value={this.state.description} onChange={e => this.setState({ description: e.currentTarget.value })} />
        //         <button aria-label="Username" aria-describedby="basic-addon1" className="form-control" type="submit">OK</button>
        //     </form>
        //     <Outlet />
        // </div>
    }
}
export default WithRouter(ProductForm);






