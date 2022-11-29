import './css/App.css';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Fungus Friends! <img src="/images/logo_outline_64.png" alt="Fungus Friends logo" />
        </h1>
      </header>
      <Map />
    </div>
  );
}

export default App;
