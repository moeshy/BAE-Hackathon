import BarChart from "../BarChart";
import Footer from "../Footer";
import NavBar from "../Navbar";
import "./App.css";

function App() {
  return (
    <body className="App">
      <NavBar />
      <h1 className="main-header"> COC Game </h1>
      <div className="barChartDiv">
        <BarChart />
      </div>
      <Footer />
    </body>
  );
}

export default App;
