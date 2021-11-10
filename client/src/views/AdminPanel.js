import AdminTable from "../components/AdminTable/AdminTable.js";
import OrdersTable from "../components/OrdersTable/OrdersTable.js";

function AdminPanel() {
  return (
    <>
      <AdminTable />
      <OrdersTable />
    </>
  );
}

export default AdminPanel;
