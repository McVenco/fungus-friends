import React from 'react';
import '../css/App.css';
import Map from './Map';
import Mushroom from '../front-end-api.ts';

class App extends React.Component {
  state = {
    fungi: {}
  }

  componentDidMount() {
    this.loadFungi();
  }

  loadFungi = () => {
    Promise.resolve(Mushroom()).then((values) => {
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
        <Map fungi={this.state.fungi} />
      </div>
    );
  }
}

export default App;
