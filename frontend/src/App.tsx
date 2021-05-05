import NavBar from "components/NavBar/index";
import Footer from "components/Footer/index";
import DataTable from "components/DataTable";

  function App() {
  return (
    <>
    <NavBar/>
    <div className="container">
      <DataTable/>    
    </div>
    <Footer />
    </>
  );
}

export default App;
