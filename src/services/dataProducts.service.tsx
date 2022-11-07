import { Product } from "../classes/product.class";
import axios from "axios";
import { Alert } from "@mui/material";
let token = sessionStorage.getItem('token');

//הצגת כל המוצרים
export async function getProduct() {
    const response = await fetch('http://localhost:3000/api/products',
        {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "content-type": "app/json",
                'Authorization': 'Bearer ' + token
            },
        });
    const body = await response.json();
    if (response.status !== 200) {
        alert("please signin")

        throw Error("err not status 200")
    }
    return body;
}
//מחיקת מוצר-לא עובד-למנהל
export async function deleteProduct(_id: any) {
    console.log('delete')
    const response = await fetch(`http://localhost:3000/api/products/${_id}`,
        {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                "content-type": "app/json",
                'Authorization': 'Bearer ' + token
            },


        })
    const body = await response.json();
    if (response.status !== 200) {
        throw Error("err not status 200");
    }
    console.log('success')
    return body;
}
//יצירת מוצר-למנהל
export async function creatProduct(obj: Product) {
    let item = {
        name: obj.name,
        price: obj.price,
        category: obj.category,
        description: obj.description,
        image: obj.image
    }
    console.log(item.image);
    const response = await fetch('http://localhost:3000/api/products',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('Unable to get items.', error));
}
//עדכון מוצר-למנהל



export async function updateProduct(id: string, item: Product) {
    console.log("in update " + item.name + "id product: " + id);
    // let item = {
    //     name: obj.name,
    //     price: obj.price,
    //     category: obj.category,
    //     description: obj.description,
    //     image: obj.image
    // }
    // axios.put(`http://localhost:8000/api/products/${id}`, item)
    // .then(res => {
    //     console.log('before sign up');
    //     const data = res.data;
    //     console.log("data" + data);
    //     return data;
    // })
       
    const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
    }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('Unable to get items.', error));
}
//פונקציית דוגמא לטסט
export const add = (a: number, b: number) => {
    return a + b;
}
//הנפקת קבלה
export async function recept(x: any, y: Number, z: any,a:any) {
    console.log(x, y);
    const response = await fetch(`http://localhost:3000/api/products/recept/${x}/${y}/${z}/${a}`,
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "content-type": "app/json",
                // 'Authorization':'Bearer ' + token
            },
        });
    const body = await response.json();
    if (response.status !== 200) {
        throw Error("err not status 200")
    }

    console.log("recept" + x);
}
export async function getProductById(id: string | undefined) {
    const response = await fetch(`http://localhost:3000/api/products/${id}`,
        {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "content-type": "app/json",
                // 'Authorization':'Bearer ' + token
            },
        });
    const body = await response.json();
    if (response.status !== 200) {
        throw Error("err not status 200")
    }
    return body;
}

export async function sendEmail(x: any, y: Number, z: any,a:any) {
    console.log(x, y);
    const response = await fetch(`http://localhost:3000/api/products/sendEmail/${x}/${y}/${z}/${a}`,
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "content-type": "app/json",
                // 'Authorization':'Bearer ' + token
            },
        });
    const body = await response.json();
    if (response.status !== 200) {
        throw Error("err not status 200")
    }

    console.log("recept" + x);
}