export interface Product{
    _id: number;
    title: string;
    isNew: boolean;
    oldPrice: string;
    price: number;
    description: string;
    brand: string;
    category: string;
    image: string;
    quantity:number

}[];
export interface Item{
    _id: number;
    title: string;
    isNew: boolean;
    oldPrice: string;
    price: number;
    description: string;
    brand: string;
    category: string;
    image: string;
    quantity:number

}[];
export interface StoreProduct {
    _id: number;
    title: string;
    isNew: boolean;
    oldPrice: string;
    price: number;
    description: string;
    brand: string;
    category: string;
    image: string;
    quantity:number
}
export interface UserInfo{
    _id: string,
    name:string
    email:string
}