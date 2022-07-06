let count=1;
export enum category{
    dairyProducts="dairyProducts",
    bakery="bakery",
    sweets="sweets",
    cannedFood="cannedFood",
    cleaners="cleaners"
} 
export const dataProductList=[
    {
        id:count++,
        name:'milk',
        price:5.5,
        category:category.dairyProducts,
        description:'chamootz'
    },
    {
        id:count++,
        name:'bread',
        price:6,
        category:category.bakery,
        descruption:'tari'
    }
]