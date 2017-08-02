import React, { Component } from 'react';
import TeamList from './components/TeamList';
import './css/extracted.css';
import './css/imported.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="columns small-12 large-8">
              <div className="teams-overview">
                <h1 className="page-title">Lending Teams</h1>
                <h2>Connect with Kiva's lender community</h2>
                <p>Lending teams are self-organized groups built around common interests, school affiliation or location.</p>
                <p>Join as many teams as you'd like, and rally around shared lending goals by counting each of your loans at checkout toward the team's impact.</p>
                <p>To get started, simply join an existing team or create a new one and invite your friends!</p>
              </div>

              <TeamList />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;