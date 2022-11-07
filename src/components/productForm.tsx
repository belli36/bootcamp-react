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
import { Link, Navigate, Outlet, useHref } from "react-router-dom";
import { creatProduct, getProduct, updateProduct, getProductById } from "../services/dataProducts.service";
import { Product } from "../classes/product.class";
import { Button } from "react-bootstrap";




class ProductForm extends Component<IWithRouter>  {
  arr: Product[] = [];
  updateId: string | undefined = "";
  // formEL=this.props.formEL();
  constructor(props: any) {
    super(props)
    getProduct().then(data => this.setState({ arrProducts: data }));
    console.log("this id", this.props.params._id);
    if (this.props.params.mode != "add") {
      this.updateId = this.props.params._id;
      console.log("update " + this.updateId);
      getProductById(this.updateId).then(data => this.setState({ newProduct: data }));
    }
    else {
      this.setState({ newProduct: {} })
    }
  }
  state = {
    arrProducts: this.arr,
    newProduct: new Product("", "", 0, "", "", ""),
    // countId: 0,
    // name: "",
    // price: 0,
    // category: "",
    // description: "",
    // image: ""
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

    // function BootstrapDialogTitle(props: DialogTitleProps) {
    //     const { children, onClose, ...other } = props;

    //     return (
    //       <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
    //         {children}
    //         {this.props.getDialog() ? (
    //           <IconButton
    //             aria-label="close"
    //             onClick={this.props.setDialogOpen(false)}
    //             sx={{
    //               position: 'absolute',
    //               right: 8,
    //               top: 8,
    //               color: (theme) => theme.palette.grey[500],
    //             }}
    //           >
    //             <CloseIcon />
    //           </IconButton>
    //         ) : null}
    //       </DialogTitle>
    //     );
    //   }

    const edit = () => {
      if (this.props.params.mode === "edit") {
        if (this.updateId != this.props.params._id) {
          this.updateId = this.props.params._id;
          console.log("update " + this.updateId);
          getProductById(this.updateId).then(data => this.setState({ newProduct: data }));
        }
      }
      else {
        if (this.props.params.mode === "add" && this.state.newProduct._id != "") {
          console.log("addddddddddddddddddddddd")
          this.setState({ newProduct: new Product("", "", 0, "", "", "") })
        }
      }
    }
    const relase = () => {
      this.setState({ newProduct: {} })
      // this.setState({ name: "" });
      // this.setState({ price: 0 });
      // this.setState({ category: "" });
      // this.setState({ description: "" });
      // this.setState({ image: "" });
    }
    const addProduct = (obj: Product) => {
      console.log("in add"+obj.image);
      creatProduct(obj)
        // { _id: "", name: this.state.newProduct.name, price: this.state.newProduct, category: this.state.newProduct.category, description: this.state.newProduct.description, image: this.state.newProduct.image }
        .then(data => console.log(data));
      relase();
      // location.href="http://localhost:3000/Products";
      this.props.navigate('/Products');
    }
    const editProduct = (obj: Product) => {
      console.log("in edit if");
      if (this.props.params._id != null) {
        updateProduct(this.props.params._id, obj)
          .then(data => console.log(data));
      }
      // this.props.setCart('lll');
      // this.props.navigate
      relase();
      this.props.navigate('/Products');

      // location.href="http://localhost:3000/Products";

    }
    // const check = (event: any) => {
    //     event.preventDefault();
    //     if (this.props.params.mode == "add") {
    //         addProduct();
    //     } else {
    //         console.log(this.props.params._id);
    //         editProduct();
    //     }
    // }

    const submit = (e: any) => {
      e.preventDefault();
      console.log('image '+this.props.formEL.current.image.value);
      const newP: Product = {
        _id: this.state.newProduct._id,
        name: this.props.formEL.current.name.value,
        price: parseInt(this.props.formEL.current.price.value),
        category: this.props.formEL.current.category.value,
        description: this.props.formEL.current.description.value,
        image: this.props.formEL.current.image.value,
      }
      if (this.props.params.mode == "add") {
        addProduct(newP);
      } else {
        editProduct(newP);
        // console.log(this.props.params._id);
        // if (this.props.params._id != null) {
        //     updateProduct(this.props.params._id, newP)
        //         .then(data => console.log(data));
        // }
      }
    }
    { edit() }

    // const handleClickOpen = () => {
    //     this.props.setDialogOpen(true);
    //     this.dialog = this.props.getDialog();
    // };
    // const handleClose = () => {
    //     this.props.setDialogOpen(false);
    //     this.dialog = this.props.getDialog();
    //     // onClose=this.dialog;
    // };
    // const getDialog = () => {
    //     this.dialog = this.props.getDialog();
    // }

    // const EditForm=()=>{
    //     if(this.props.params.mode=="edit")
    //     {
    //          this.setState.name===this.props.params.name;
    //     }
    //     return;
    // }
    // {this.state.arrProducts?this.state.arrProducts[index]?this.state.arrProducts[index].name:'loading...':''}
    return (


      (<div id="form">
        {/* <div>{EditForm}</div> */}
        <div>
          <form onSubmit={submit} ref={this.props.formEL}>
            <div>
              {/* {this.state.arrProducts?<div><h2>{this.state.arrProducts[index]?this.state.arrProducts[index].name:'loading...'}</h2>    </div>:<div></div>} */}
              {/* <input aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter name" value={this.state.name} onChange={e => this.setState({ name: e.currentTarget.value })} /> */}
              <input name="name" aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter name" defaultValue={this.state.newProduct.name} onChange={e => this.setState({ name: e.currentTarget.value })} required />
             
            </div>
            <div>
              <input name="price" aria-label="Username" aria-describedby="basic-addon1" className="form-control" type="Number" placeholder="enter price" defaultValue={this.state.newProduct.price} onChange={e => this.setState({ price: parseInt(e.currentTarget.value) })} required />
            </div>
            <div>
              <select name="category" aria-label="Username" aria-describedby="basic-addon1" className="form-control" defaultValue={this.state.newProduct.category} onChange={e => this.setState({ category: e.currentTarget.value })}>
                {Object.values(category).map((c) => <option>{c}</option>)}
              </select>
            </div>
            <div>
              <input name="description" aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter descraption" defaultValue={this.state.newProduct.description} onChange={e => this.setState({ description: e.currentTarget.value })} />
            </div>
            <div>
              <input name="image" aria-label="Username" aria-describedby="basic-addon1" className="form-control"  placeholder="enter url of image" defaultValue={this.state.newProduct.image} onChange={e => this.setState({ image: e.currentTarget.value })} />

            </div>
            <Button type="submit" >submit</Button>

            {/* <Button type="submit" onClick={check}>submit</Button> */}
          </form>
        </div>
      </div>
      )
      // return
      //  <div >
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
    )
  }
}
export default WithRouter(ProductForm);






/**
 * import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

 * 
 * 
 */





