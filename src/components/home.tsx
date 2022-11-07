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
            {/* <button onClick={try3}>add</button>
            <button onClick={try4}>get</button> */}
            {/* <img id="bigImgHome" src="https://img.ltwebstatic.com/images3_pi/2022/07/04/1656938455f311a413671567470b3a74cb2806fec0_thumbnail_900x.webp"></img> */}
           <div id="bigImgHome"><p id="titleHome">Event Click<br></br>כל ארוע בקליק!</p></div>
            <div id="homeFlex">
                <div className="categoryHome" id="categoryHome1">
                {/*<Link to={`/Products`}>*/}<h2 className="h2Home">פטריות חימום</h2>{/*</Link>*/}
                    <h3 className="h3Home">כדי לחמם את האוירה</h3>
                    <img className="imgHome" src="https://www.netoneto.co.il/images/itempics/STARPATIO37090_06102022094323_small.jpg?06102022094405"></img>
                </div>
                <div className="categoryHome" id="categoryHome2">
                    <h2 className="h2Home">עיצובי שולחן</h2>
                    <h3 className="h3Home">עיצובים שידהימו את האורחים</h3>
                    <img className="imgHome" src="https://itzuvit.net/wp-content/uploads/2022/02/IMG-20211202-WA0050.gif"></img>
                </div>
                <div className="categoryHome" id="categoryHome3">
                    <h2 className="h2Home">בלונים</h2>
                    <h3 className="h3Home">כדי להפציץ את הארוע</h3>
                    <img className="imgHome" src="https://img.ltwebstatic.com/images3_pi/2021/08/19/1629335746efc275c2d11a058f7fe441d7831f5db9_thumbnail_900x.webp"></img>
                </div>
                <div className="categoryHome" id="categoryHome4">
                    <h2 className="h2Home">זרי כלה</h2>
                    <h3 className="h3Home">שלכל כלה מגיע לקבל</h3>
                    <img className="imgHome" src="https://itzuvit.net/wp-content/uploads/2020/05/41.jpg"></img>
                </div>
                <div className="categoryHome" id="categoryHome4">
                    <h2 className="h2Home">קונפטי לזריקה</h2>
                    <h3 className="h3Home">שיעיפו לך את הארוע</h3>
                    <img className="imgHome" src="https://img.ltwebstatic.com/images3_pi/2022/03/27/1648393134e249b1f12d85d4744edb12f94a4815a2_thumbnail_900x.webp"></img>
                </div>
                
                <div className="categoryHome" id="categoryHome3">
                    <h2 className="h2Home">עיצוב רכב</h2>
                    <h3 className="h3Home">כמו מהחלומות</h3>
                    <img className="imgHome" src="https://i.pinimg.com/236x/8f/c8/f4/8fc8f40e703d871c006f46bcdef251c5.jpg"></img>
                </div>
                <div className="categoryHome" id="categoryHome2">
                    <h2 className="h2Home">דוכני מזון</h2>
                    <h3 className="h3Home">גם בשביל מי ששבע</h3>
                    <img className="imgHome" src="https://i.pinimg.com/236x/21/d3/f9/21d3f9084564dd77a1cdf1473a82fe91.jpg"></img>
                </div>
                <div className="categoryHome" id="categoryHome1">
                    <h2 className="h2Home">קישוטי שיער</h2>
                    <h3 className="h3Home">בשביל להשלים את המראה</h3>
                    <img className="imgHome" src="https://itzuvit.net/wp-content/uploads/2022/01/20211111_213431.jpg"></img>
                </div>
            </div>
            

        </div>

    }
}
export default WithRouter(Home);
