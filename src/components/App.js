import React from 'react';
import '../css/App.css';
import Filter from './Filter';
import Map from './Map';
import Mushroom from '../front-end-api.ts';

class App extends React.Component {
  state = {
    fungi: {},
    filters: {}
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

  updateFilter = (key, updatedFilter) => {
    const filters = {...this.state.filters};
    filters[key] = updatedFilter;
    this.setState({ filters: updatedFilter });
  }

  render () {
    return (
      <div className="App" style={{
          backgroundImage: "url(/images/fungi-background.jpeg)",
          height: '100vh',
          width: '100vw',
        }}>
        <div className="App-container">
          <header className="App-header">
            <h1>
              Fungus Friends! <img src="/images/logo_outline_64.png" alt="Fungus Friends logo" />
            </h1>
          </header>
          <div className="App-left">
            <Filter
              fungi={this.state.fungi}
              updateFilter={this.updateFilter}
              />
          </div>
          <div className="App-right">
          <Map fungi={this.state.fungi} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
