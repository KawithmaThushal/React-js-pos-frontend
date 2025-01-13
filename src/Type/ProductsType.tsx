import categoryType from "./categoryType";

interface ProductsType{
    id:number,
    productname:string,
    foodType:string,
    image:string,
    category?:categoryType

}
export default ProductsType;