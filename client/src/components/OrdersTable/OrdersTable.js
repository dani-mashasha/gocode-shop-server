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
    },
    {
      title: "Products",
      field: "products[0].title",
    },
  ];

  return (
    <>
      <MaterialTable title="Orders Data" data={orders} columns={columns} />
    </>
  );
}

export default OrdersTable;
