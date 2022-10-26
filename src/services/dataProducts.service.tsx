import { Product } from "../classes/product.class";
import axios from "axios";
let token = localStorage.getItem('token');

//הצגת כל המוצרים
export async function getProduct() {
    const response = await fetch('http://localhost:3000/api/products',
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
//מחיקת מוצר-לא עובד-למנהל
export async function deleteProduct(_id: any) {
    console.log('delete')
    const response = await fetch(`http://localhost:3000/api/products/${_id}`, 
    {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            "content-type": "app/json"
        },
        
        
    })
    const body = await response.json();
    if (response.status !== 200) {
        throw Error("err not status 200");
    }
    console.log('success')
    return body;
}
//יצירת מוצר-לא עובד-למנהל
export async function creatProduct(obj: Product) {
    let item = {
        name: obj.name,
        price: obj.price,
        category: obj.category,
        description: obj.description,
        image: obj.image
    }
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
//עדכון מוצר-לא עובד-למנהל
export async function updateProduct(_id: string, obj: Product) {
    console.log("in update");
    let item = {
        name: obj.name,
        price: obj.price,
        category: obj.category,
        description: obj.description,
        image: obj.image
    }
    const response = await fetch(`http://localhost:3000/api/products/${_id}`, {
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
export async function kabala(x:any,y:Number) {
    console.log(x,y);
    const response = await fetch(`http://localhost:3000/api/products/kabala/${x}/${y}`,
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
    
    console.log("kabala"+x);  
}