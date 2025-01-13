import ProductsType from "./ProductsType";


interface DayFoodType{
    id:number,
    price:number,
    product?: ProductsType,
    isAvailable:boolean

}
export default DayFoodType;