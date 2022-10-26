import React from 'react';
// import { category, dataProductList } from "./data/dataProducts";
import { MDBInput } from 'mdbreact';
import { Button } from "react-bootstrap";
import { Link, Outlet } from 'react-router-dom';
// import { ProductForm } from './productForm';



export class ShowProduct extends React.Component <{},{}>{

    constructor(props: any) {
        super(props);
        // this.state = {
        //     arrProducts: [...dataProductList]
        // };
     
        // componentDidMount {
        //     api.getQuiz(props.match.params.id).then(data =>
        //        // logic
        //  )
    }
    
    // state = {
    //     arrProducts: [...dataProductList]
    // }
    
    render() {
        // const Edit=()=>{
        //     return(
        //         <div><p>hvjhvhvh</p></div>
        //     )
        // }
        // <Link to={`Products/ShowProduct/productForm:${this.state.arrProducts}`}>Show this product</Link>
        // const a=getParams.id ;
        // console.log(a);
        return <div>
            {/* <h1>{this.state.arrProducts[0].name}</h1>
            <h2>{this.state.arrProducts[0].description}</h2> */}
            <div>{<Link to={"Products/ShowProduct/productForm}"}>Edit this product</Link>}</div>
            {/* <ProductForn></ProductForn> */}
            {/* <MDBInput label="enter name of the product" background size="sm"/> */}
            {/* <MDBInput type="number" label="enter price" background size="sm"/> */}
            {/* <select>
                
            </select> */}
            {/* <MDBInput label="enter name of the product" background size="sm"/>  */}
           {/* <Button onClick={Edit}>edit</Button> */}
            <div><Outlet /></div>
        </div>
    }

}