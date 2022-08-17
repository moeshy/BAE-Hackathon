import BarChart from "../BarChart";
import TeamDropDown from "../Dropdown";
import Footer from "../Footer";
import IdeaDetails from "../IdeaDetails/IdeaDetails";
import IdeaInput from "../InputField";
import NavBar from "../Navbar";
import "./App.css";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IdeaLeadersTable from "../IdeaLeaders";

const theme = createTheme({
  palette: {
    primary: { main: "#98C9A3" },
    error: { main: "#FFAC1C" },
  },
});

function App() {
  return (
    
    <body className="App">
    <ThemeProvider theme={theme}>
      <NavBar />
      <IdeaDetails />
      <img className="cocLogo" src="https://i.imgur.com/Q7MHpH4.png" alt="CoC Logo" border="0"></img>
      <div className="barChartDiv">
        <BarChart />
      </div>
      <div className="teamDropDown"><TeamDropDown />
      </div>
      <div className="inputBorder">
      <div className="inputField">
          <IdeaInput/>
      </div>
      <div className="buttonSubmit">
      <Button variant="contained" color="primary" className="buttonSubmit">
    Submit Idea
    </Button>
    </div>
      </div>
    <div className="ideaLeadersBorder">
    <div className="ideasLeadersTable">
      <IdeaLeadersTable/>
    </div>
    </div>
      <Footer />
      </ThemeProvider>
    </body>
  );
}

export default App;
