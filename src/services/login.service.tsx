import axios from "axios";
import { User } from "../classes/user.class";
export const getAllUser = () => {
    axios.get('http://localhost:3000/api/user')
        .then(res => {
            const data = res.data;
            console.log(data);
        })
}
export const signUp = (obj: User) => {
    console.log(obj.name)
    axios.post('http://localhost:3000/api/user/signUp',  obj )       
        .then(res => {
            console.log('before sign up');
            const data = res.data;
            console.log("data"+data);
            sessionStorage.setItem("token", data);
            return data;
        })
}
export const signIn = (obj: User) => {   
    console.log(obj.name)
    axios.post('http://localhost:3000/api/user/signIn', obj )
        .then(res => {
            console.log("sign in")
            const data = res.data;
            console.log("after data");
            sessionStorage.setItem("token", data);
            return data;
        })
}