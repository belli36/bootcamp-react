import React from "react";
import { Button } from "react-bootstrap";
import { text } from "stream/consumers";
import { About} from './about';



export class Home extends React.Component {
    render(): React.ReactNode {
        return <div>
            {/* <ul>
                <li>about</li>
                <li>dresses</li>
                <li>shoes</li>
            </ul> */}
            <nav className="navbar navbar-default">
            
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Store</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">home</a></li>
                        
                        <li><a href="#">about</a></li>
                        <li ><a href="#">products</a></li>
                        {/* onClick={DressesOnClick} */}
                       
                        {/* <li><a href="#">shoes</a></li> */}
                    </ul>
                </div>
            </nav>
            <p>search</p><input ></input>
            {/* type={text} */}
            <Button>belli</Button>
        </div>

    }
}
// export const Home=()=>{
//     return(
//         <ul>
//             <li>about</li>
//             <li>dresses</li>
//             <li>shoes</li>
//         </ul>
//     );
// };