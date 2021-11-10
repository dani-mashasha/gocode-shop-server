import MaterialTable from "material-table";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../../contexts/ProductsContext.js";

function AdminTable() {
  const { productsOrigin, setproductsOrigin, onAdd, onDelete, onUpdate } =
    useContext(ProductsContext);

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
      type: "currency",
      currencySetting: {
        currencyCode: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      },
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
        data={productsOrigin}
        columns={columns}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setproductsOrigin([...productsOrigin, newRow]);
                resolve();
              }, 2000);
              onAdd(newRow);
            }),

          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const id = selectedRow._id;
              setTimeout(() => {
                setproductsOrigin(
                  productsOrigin.filter((product) => product._id !== id)
                );
                resolve();
              });
              onDelete(id);
            }),

          onRowUpdate: (updatedRow, oldRow) =>
            new Promise((resolve, reject) => {
              const id = oldRow._id;
              const updatedProduct = productsOrigin.find(
                (product) => product._id === id
              );
              updatedProduct.title = updatedRow.title;
              updatedProduct.category = updatedRow.category;
              updatedProduct.description = updatedRow.description;
              updatedProduct.image = updatedRow.image;
              updatedProduct.price = updatedRow.price;

              setTimeout(() => {
                setproductsOrigin(productsOrigin);
                resolve();
              });
              onUpdate(id, updatedRow);
            }),
        }}
        options={{
          actionsColumnIndex: -1,
          addRowPosition: "first",
          cellStyle: {
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            maxWidth: 100,
          },
        }}
      />
    </>
  );
}

export default AdminTable;
