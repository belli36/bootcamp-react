import React from "react";
import { Button } from "react-bootstrap";


export const Xhr=()=>{
    const Fetch=()=>{
        // return(
        //     <div><h1>hiiii</h1></div>
        // )
    }
   
//  const ttt = () => {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function () {
     
//       setData((this.responseURL));
//     }
//     xhttp.open("GET", "http://localhost:3000/events",true);
   
//     xhttp.send();
//   }
    return(
        <div>
            <h1>HELLO BELLI!!!</h1>
            {/* <h1>{setData}</h1> */}

        <Button onClick={Fetch}>xhr</Button></div>
    )
}
