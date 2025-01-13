import ProductsType from "./ProductsType";


interface StockType{
    id:number,
    quaitiy:number,
    expireDate:Date,
    price:number,
    product?: ProductsType,


}
export default StockType;