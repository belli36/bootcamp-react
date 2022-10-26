export class Product{
    _id: string
    name: string
    price: number
    category:string
    description: string
    image: string
 
    constructor(_id: string, name: string, price: number, category: string, description: string, image: string) {
        // super();
        this._id=_id;
        this.name=name;
        this.price=price;
        this.category=category;
        this.description=description;
        this.image=image;
    }
}