import './App.css';
import Header from "./components/Header/Header";
import Middle from "./components/Middle/Middle";
import Information from "./components/Information/Information";
import NavBar from "./components/NavBar/NavBar";
import Blocks from "./components/Blocks/Blocks";

function App() {
    return (
        <div className="App">
            <Header/>
            <Middle/>
            <Information/>
            <Blocks/>
            <NavBar/>
        </div>
    );
}

export default App;
