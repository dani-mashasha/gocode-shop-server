import MaterialTable from "material-table";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext.js";

function AdminPanel() {
  const { products, setProducts } = useContext(ProductsContext);
  const columns = [
    { title: "ID", field: "_id", editable: false },
    {
      title: "Title",
      field: "title",
      validate: (rowData) =>
        !rowData.title ? { isValid: false, helperText: "Required" } : true,
    },
    {
      title: "Category",
      field: "category",
      validate: (rowData) =>
        !rowData.category ? { isValid: false, helperText: "Required" } : true,
    },
    {
      title: "Description",
      field: "description",
      validate: (rowData) =>
        !rowData.description
          ? { isValid: false, helperText: "Required" }
          : true,
    },
    {
      title: "Image",
      field: "image",
      validate: (rowData) =>
        !rowData.image ? { isValid: false, helperText: "Required" } : true,
    },
    {
      title: "Price",
      field: "price",
      type: "numeric",
      validate: (rowData) =>
        !rowData.price || rowData.price <= 0
          ? { isValid: false, helperText: "Required" }
          : true,
    },
  ];
  return (
    <>
      <MaterialTable
        title="Products Data"
        data={products}
        columns={columns}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setProducts([...products, newRow]);
                resolve();
              }, 2000);
            }),

          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const id = selectedRow._id;
              setTimeout(() => {
                setProducts(products.filter((product) => product._id !== id));
                resolve();
              });
            }),

          onRowUpdate: (updatedRow, oldRow) =>
            new Promise((resolve, reject) => {
              const id = oldRow._id;
              const updatedProduct = products.find(
                (product) => product._id === id
              );
              updatedProduct.title = updatedRow.title;
              updatedProduct.category = updatedRow.category;
              updatedProduct.description = updatedRow.description;
              updatedProduct.image = updatedRow.image;
              updatedProduct.price = updatedRow.price;

              setTimeout(() => {
                setProducts(products);
                resolve();
              });
              console.log(updatedProduct);
            }),
        }}
        options={{
          actionsColumnIndex: -1,
          addRowPosition: "first",
        }}
      />
    </>
  );
}

export default AdminPanel;
