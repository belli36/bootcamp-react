import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { text } from "stream/consumers";
import { About } from './about';
import WithRouter, { IWithRouter } from "./withRouter";



class Home extends Component<IWithRouter>{

    render(): React.ReactNode {
        const try3=()=>{
            const setcart=this.props.setCart("belli");
             alert(setcart)
        }
        const try4=()=>{
            const getcart=this.props.getCart();
            // const getcart=this.props.getCart;
             alert(getcart)
            // this.props.setCart.key='jjjj'
            // this.props.cart4('belli');
           // alert("try "+this.props.cart4)
        }

        return <div>
            <h1>hello home!</h1>
            <button onClick={try3}>add</button>
            <button onClick={try4}>get</button>

        </div>

    }
}
export default WithRouter(Home);
