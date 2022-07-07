import { MDBInput } from "mdbreact";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
export class ProductForn extends Component {
    render(): React.ReactNode {
        return (<div><MDBInput label="enter name of the product" background size="sm" />
            <MDBInput type="number" label="enter price" background size="sm" />
            <MDBInput label="enter name of the product" background size="sm" />
            <Button>edit</Button>
        </div>
        )
    }
}







