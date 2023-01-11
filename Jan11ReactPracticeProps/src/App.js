import './App.css';
import Helloworld from './components/Helloworld/Helloworld';
import Stockinfo from './components/Stockinfo/Stockinfo';

function App() {
  return (
    <div className="App">
          <Helloworld greeting="Yo man" greeting2="yo yo man"/>
          <br></br>
          <Stockinfo Ticker="MSFT" Lastprice="3600"/>
          </div>  
  );
}

export default App;
