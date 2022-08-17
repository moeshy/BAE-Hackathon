import BarChart from "../BarChart";
import Footer from "../Footer";
import IdeaDetails from "../IdeaDetails/IdeaDetails";
import NavBar from "../Navbar";
import "./App.css";

function App() {
  return (
    <body className="App">
      <NavBar />
      <img
        className="cocLogo"
        src="https://i.imgur.com/4QtEvDn.png"
        alt="CoC Logo"
        border="0"
      ></img>
      <div className="barChartDiv">
        <BarChart />
      </div>
      <IdeaDetails />
      <Footer />
    </body>
  );
}

export default App;
