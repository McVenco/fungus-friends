import React from 'react';
import '../css/App.css';
import Filter from './Filter';
import Map from './Map';
import Mushroom from '../front-end-api.ts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fungi: {}
    }
  }

  componentDidMount() {
    this.loadFungi();
  }

  // get fungi from data file and set them to state
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
        <div className="filter">
          <Filter fungi={this.state.fungi} />
        </div>
        <div className="map">
         <Map fungi={this.state.fungi} />
        </div>
      </div>
    );
  }
}

export default App;
