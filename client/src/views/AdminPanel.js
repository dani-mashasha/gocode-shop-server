import AdminTable from "../components/AdminTable/AdminTable.js";
import OrdersTable from "../components/OrdersTable/OrdersTable.js";

function AdminPanel() {
  return (
    <div className={"page"}>
      <AdminTable />
      <OrdersTable />
    </div>
  );
}

export default AdminPanel;
