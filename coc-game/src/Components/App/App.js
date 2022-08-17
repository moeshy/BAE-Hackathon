import BarChart from "../BarChart";
import TeamDropDown from "../Dropdown";
import Footer from "../Footer";
import IdeaInput from "../InputField";
import NavBar from "../Navbar";
import "./App.css";

function App() {
  return (
    <body className="App">
      <NavBar />
      <img className="cocLogo" src="https://i.imgur.com/Q7MHpH4.png" alt="CoC Logo" border="0"></img>
      <div className="barChartDiv">
        <BarChart />
      </div>
      <div className="teamDropDown"><TeamDropDown />
      </div>
      <div className="inputField">
    <IdeaInput/>
      </div>

      <Footer />
    </body>
  );
}

export default App;
