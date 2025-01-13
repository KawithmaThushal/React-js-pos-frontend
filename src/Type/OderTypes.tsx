import ProductsType from "./ProductsType";


interface OderTypes{
    id:number,
 
    product?: ProductsType,
    isAvailable:boolean,
    quaitiy:number,
    expireDate:Date,
    price:number,

}
export default OderTypes;