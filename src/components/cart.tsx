import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { text } from "stream/consumers";
import { MDBInput } from "mdbreact";
import { kabala } from "../services/dataProducts.service";
import { category } from "../data/dataProducts";
import WithRouter, { IWithRouter } from "./withRouter";
class Cart extends Component<IWithRouter>{
    state = {
        name: 'belli',
        address:'shaaget arye 21'
    };
    //משתנה הסכימה
    public render(): React.ReactNode {
        let p=0;
        // const AddCart = () => {
        //     console.log("i in cart");
        // }
        // const PayNow = () => {
        //     return (<form>
        //         <div>
        //             <input aria-label="Username" aria-describedby="basic-addon1" className="form-control" type="Number" placeholder="enter price" onChange={e => this.setState({ price: parseInt(e.currentTarget.value) })} />
        //         </div>
        //         <Button type="submit" onClick={Pay}>submit</Button>
        //     </form >)
        // }
        //פונקציית מחיקה
        // const delete=(id:any)=>{
        // }
        const DeleteCart=(id:any)=>{
            this.props.deleteCart(id);
            // this.props.getCart();
            // const products=this.props.getCart().map((p:any)=>{
            //     if(p._id!=id)
            //         return p;   
            // })
            // this.props.setCart(products);  
        }
        //הצגת מוצרי הסל
        const rows = this.props.getCart().map((current: any) => {
            p += current[0].price;
            console.log("id meazben"+current[0]._id);
            return (
                <tr>
                    <td>{current[0]._id}</td>
                    <td>{current[0].name}</td>
                    <td>{current[0].price}</td>
                    <img src={current[0].image} id="tableCartImage"></img>
                    <Button onClick={() => { DeleteCart(current[0]._id);}}>delete</Button>
                    {/* <td><Button onClick={() => { delete(current[0]._id); }}>Delete</Button></td> */}
                </tr>
            );
        });
        //תשלום והנפקת קבלה
        const Pay = () => {
            // console.log(p );
            kabala(this.state.name ,p ,this.state.address);
            console.log(this.state.name)
        };
        return <div id="cart">
            <h1>cart</h1>
            <div id="cartFlex">
                <div id="cartFlex1">
                    <tbody id="tableCart">
                        <table >
                            <th> id</th>
                            <th> name</th>
                            <th> price</th>
                            <th > image</th>
                            {rows}
                        </table>
                    </tbody>
                    {/* <Button onClick={Push}>delete</Button> */}
                    {/* <div id='btnAdd'>{<Link to={`ProductFormAdd/add`}><Button > add product</Button></Link>}</div> */}
                </div>
                <div id="cartFlex2">
                    <div id="outletCart"><Outlet /></div>
                </div>
            </div>
            <form>
                <div>
                    <input aria-label="Name" aria-describedby="basic-addon1" className="form-control" type="text" placeholder="enter your name" onChange={r => this.setState({ name: String(r.currentTarget.value) })} />
                </div>
                <div>
                    <input aria-label="Address" aria-describedby="basic-addon1" className="form-control" type="text" placeholder="enter your address" onChange={r => this.setState({ address: String(r.currentTarget.value) })} />
                </div>
                <p>{p}</p>
                <Button onClick={Pay}>pay now</Button>
            </form >
        </div >
    }
}
export default WithRouter(Cart);