import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext.js";


const AdminTable = () =>{
    const {products}= useContext(ProductsContext);
    console.log(products);

    return(
        <div>
            jjb
        </div>
    )
}

export default AdminTable;