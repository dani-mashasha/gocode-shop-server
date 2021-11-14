import MaterialTable from "material-table";
import { useContext, useEffect } from "react";
import { OrderContext } from "../../contexts/OrderContext.js";

function OrdersTable() {
  const { orders, setOrders } = useContext(OrderContext);

  const columns = [
    { title: "ID", field: "_id", editable: false },
    {
      title: "User",
      field: "user.userName",
      editable: false,
    },
    {
      title: "Products",
      field: "products[0].title",
      editable: false,
    },
    {
      title: "Total Price",
      field: "totalPrice",
      editable: false,
      type: "currency",
      currencySetting: {
        currencyCode: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      },
    },
    {
      title: "Order Date",
      field: "time",
      editable: false,
    },
  ];

  return (
    <>
      <MaterialTable title="Orders Data" data={orders} columns={columns} />
    </>
  );
}

export default OrdersTable;
