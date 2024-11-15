import categoryType from "./categoryType";

interface ItemType{
    id:number;
    name:string;
     price:number;
    discription:string;
    image?:string;
    quantity:number;
    category?:categoryType

}
export default ItemType;