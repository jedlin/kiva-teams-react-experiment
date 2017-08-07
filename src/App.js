import React, { Component } from 'react';

import TeamList from './components/TeamList';
import PageHeading from './components/PageHeading';
import './css/extracted.css';
import './css/imported.css';

class App extends Component {
  render(props) {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="columns small-12 large-8">

                <PageHeading
                  class = {"teams-overview"}
                  headline = {"Lending Teams"}
                  subhead = {"Connect with Kiva's lender community"}
                  text = {
                    <div>
                      <p>Lending teams are self-organized groups built around common interests, school affiliation or location.</p>
                      <p>Join as many teams as you'd like, and rally around shared lending goals by counting each of your loans at checkout toward the team's impact.</p>
                      <p>To get started, simply join an existing team or create a new one and invite your friends!</p>
                    </div>
                  }/>

              <TeamList />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
