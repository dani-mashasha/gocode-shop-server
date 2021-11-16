import MaterialTable from "material-table";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext.js";

function OrdersTable() {
  const { orders } = useContext(OrderContext);

  const columns = [
    { title: "ID", field: "_id", editable: false },
    {
      title: "User",
      field: "user.userName",
      editable: false,
    },
    {
      title: "Products",
      field: "products",
      editable: false,
      render: (rowData) => {
        return (
          <ul>
            {rowData.products.map((product) => (
              <li style={{}}>
                {product.amount} - {product.title}
              </li>
            ))}{" "}
          </ul>
        );
      },
    },
    {
      title: "Total Price",
      field: "totalPrice",
      editable: false,
      align: "center",
      type: "currency",
      currencySetting: {
        currencyCode: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      },
    },
    {
      title: "delivery",
      field: "delivery",
      editable: false,
    },
    {
      title: "Shipping Address",
      field: "user.address",
      editable: false,
    },
    {
      title: "Date",
      field: "date",
      type: "date",
      editable: false,
    },
    {
      title: "Time",
      field: "date",
      type: "time",
      editable: false,
    },
  ];

  return (
    <>
      <MaterialTable
        title="Orders Data"
        data={orders}
        columns={columns}
        options={{
          cellStyle: {
            whiteSpace: "nowrap",
            overflow: "auto",
            maxWidth: 200,
          },
        }}
      />
    </>
  );
}

export default OrdersTable;
