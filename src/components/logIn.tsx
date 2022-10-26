import { log } from "console";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { User } from "../classes/user.class";
// import '../css/login.css'
import { getAllUser, signIn, signUp } from "../services/login.service";
class Login extends  React.Component  {
    state = {
        name: "",
        password: "",
        email: ""
    }
    render(): React.ReactNode {
       
        const csignIn = () => {            
            signIn(new User(this.state.name, this.state.email, this.state.password));
            console.log("csignIn");
            console.log(new User(this.state.name, this.state.email, this.state.password))
        }
        const csignUp =()=>{
            console.log("getAllUsers");            
            getAllUser();
            signUp(new User(this.state.name, this.state.email, this.state.password));
        }
        return <div>
            <form id="userForm">
                <input type="text" aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter name" value={this.state.name} onChange={e => this.setState({ name: e.currentTarget.value })} /><br />
                <input type="email" aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter email" value={this.state.email} onChange={e => this.setState({ email: e.currentTarget.value })} /><br />
                <input type="password" aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter password" value={this.state.password} onChange={e => this.setState({ password: e.currentTarget.value })} /><br />
            </form>
            <Link to={`Products`}><Button aria-label="Username" aria-describedby="basic-addon1" className="form-control" onClick={csignIn}>signIn</Button></Link>
            <button aria-label="Username" aria-describedby="basic-addon1" className="form-control" onClick={csignUp}>signUp</button>
        </div>
    }
}
export default Login;














