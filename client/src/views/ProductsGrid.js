import { Paper } from "@material-ui/core";
import Products from "../components/Products/Products.js";

function Home() {
  return (
    <div className="page">
      <Paper>
        <Products />
      </Paper>
    </div>
  );
}

export default Home;
