import './css/App.css';
import React from 'react';
import Map from './components/Map';
import Mushroom from './front-end-api.tsx';

class App extends React.Component {
  state = {
    fungi: {}
  }

  componentDidMount() {
    this.loadFungi();
  }

  loadFungi = () => {
    Promise.resolve(Mushroom()).then((values) => {
      console.log('values: ', values);
      this.setState({ fungi: values })
    });
  }

  render () {
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
}

export default App;
