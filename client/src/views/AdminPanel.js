import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import AdminTable from "../components/AdminTable/AdminTable.js";
import OrdersTable from "../components/OrdersTable/OrdersTable.js";

function AdminPanel() {
  const [alignment, setAlignment] = useState("products");

  const handleChange = (event) => {
    const newAlignment = event.target.value;
    setAlignment(newAlignment);
  };
  return (
    <div className={"page"}>
      <ToggleButtonGroup
        color="primary"
        style={{}}
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="products">Products</ToggleButton>
        <ToggleButton value="orders">Orders</ToggleButton>
      </ToggleButtonGroup>
      {alignment === "products" && <AdminTable />}
      {alignment === "orders" && <OrdersTable />}
    </div>
  );
}

export default AdminPanel;
