import AdminTable from "../components/AdminTable/AdminTable.js";
import FullFeaturedCrudGrid from "../components/AdminTable/exemple.js";
import Header from "../components/Header/Header.js";


 
function AdminPanel() {
    return(
       <>
        <Header/>
        {/* <FullFeaturedCrudGrid/> */}
        <AdminTable/>
      </>
    )
}

export default AdminPanel;