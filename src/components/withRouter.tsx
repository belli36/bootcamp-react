import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavigateOptions, Params, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Context } from 'vm';
import { useRecoilState } from 'recoil';
import { cartState } from '../context/atom';
import { Product } from '../classes/product.class';
import { CartClass } from '../classes/cart.class';

// import { arrProductsContext } from '../context/ArrProducts.context';
function WithRouter(Component: React.ComponentType<IWithRouter & Object>) {
  function ComponentWithRouterProp(propsUse: any) {
    const [allTasks, setAllTasks] = useRecoilState(cartState);
    const setCart = (product: CartClass) => {
      setAllTasks([...allTasks, product]);

    }
    const getCart = () => {
      return allTasks;
    }


    const [openDialog, setDialog] = useState<boolean>(false);
    const setDialogOpen = (open:boolean) => {
      console.log("dialog open? "+open);
      setDialog(open);
    }
    const getDialog = () => {
      return openDialog;
    } 
    const deleteCart = (id: any) => {
      // let products:CartClass[]=[];
      let productsAfterDelete: CartClass[] = [];
      allTasks.filter(p => {
        if (p._id === id) {
          console.log("NO");
        }
        else {
          console.log("id id id  " + id)
          productsAfterDelete.push(p);
        }

      });
      console.log("after" + productsAfterDelete)
      setAllTasks(productsAfterDelete);


      // const p=(allTasks.find(t => parseInt(id) === t._id));
      // settask(allTasks.filter(t => parseInt(taskId) === t.id));

      //   let products:CartClass[]=[];
      //    allTasks.forEach((p) => {
      //     if (p._id===id) {
      //       console.log("id: " + id);
      //     }
      //     else{
      //         products.push(p);
      //     }
      // let a=0;
      // const products=(allTasks.filter(t =>{ if(t._id){a=parseInt(t._id);if(parseInt(id) != a)return t}}));
      //   })
      //   console.log(products)
      //   setAllTasks(products);
      // })
    }
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const formEL=useRef<any>(null)
    // const context= useContext(arrProductsContext);
    const myprops = {
      location,
      navigate,
      params,
      setCart,
      getCart,
      deleteCart,
      formEL,
      setDialogOpen,
      getDialog
      // context
    }
    return <Component {...propsUse} {...myprops} />;
  }
  return ComponentWithRouterProp;
}
export default WithRouter;
export interface IWithRouter {
  location: Location,
  navigate: any,
  params: Params,
  context: Context,
  setCart: any,
  getCart: any,
  deleteCart: any,
  formEL:any,
  setDialogOpen:any,
  getDialog:any
}