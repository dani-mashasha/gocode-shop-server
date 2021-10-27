import Footer from "../components/Footer/Footer.js";
import Header from "../components/Header/Header.js";
import Products from "../components/Products/Products.js";


 
function Home() {
    return(
        <div className="App">
        <Header/>
        <Products/>
        <Footer/>
      </div>
    )
}

export default Home;