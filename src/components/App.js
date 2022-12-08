import React from 'react';
import '../css/App.css';
import Filter from './Filter';
import Map from './Map';
import Mushroom from '../front-end-api.ts';

class App extends React.Component {
  state = {
    fungi: {},
    colorFilter: {},
    spotsFilter: {}
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

  updateColorFilter = (key, updatedFilter) => {
    const filters = {...this.state.colorFilter};
    filters[key] = updatedFilter;
    this.setState({ colorFilter: updatedFilter });
  }

  updateSpotsFilter = (key, updatedFilter) => {
    const filters = {...this.state.spotsFilter};
    filters[key] = updatedFilter;
    this.setState({ spotsFilter: updatedFilter });
  }

  render () {
    return (
      <div className="App" style={{
          backgroundImage: 'url(/images/fungi-background.jpeg)'
        }}>
        <div className="App-container">
          <header className="App-header">
              Fungus Friends
              <img src="/images/logo_outline_64.png" alt="Fungus Friends logo" />
          </header>
          <div className="App-left">
            <Filter
              fungi={this.state.fungi}
              updateColorFilter={this.updateColorFilter}
              updateSpotsFilter={this.updateSpotsFilter}
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
