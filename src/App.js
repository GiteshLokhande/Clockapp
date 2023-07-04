import logo from './logo.svg';
import './App.css';
import Clock from "./Clock";
import StopWatch from "./StopWatch";
import Alarm from "./Alarm";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter> 
		<NavBar/>
		<Routes>
			<Route path="/" element = { <Clock/> } />
			<Route path="/StopWatch" element = { <StopWatch/> } />
			<Route path="/Alarm" element = { <Alarm/> } />
		</Routes>
	</BrowserRouter>
    </div>
  );
}

export default App;
