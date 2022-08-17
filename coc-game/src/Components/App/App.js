import BarChart from "../BarChart";
import Footer from "../Footer";
import NavBar from "../Navbar";
import "./App.css";

function App() {
  return (
    <body className="App">
      <NavBar />
      <img className="cocLogo" src="https://i.imgur.com/4QtEvDn.png" alt="CoC Logo" border="0"></img>
      <div className="barChartDiv">
        <BarChart />
      </div>
      <Footer />
    </body>
  );
}

export default App;
