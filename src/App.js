import logo from './logo.svg';
import './App.css';
import Price from './Price';
import Advantages from './Advantages';
import Top from './Top';
import Banner from './Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Top/>
    <Price/>
    <Advantages/>
    </div>
  );
}

export default App;
