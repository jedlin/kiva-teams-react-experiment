import React, { Component } from 'react'
import Team from './Team'
import { fetchTeams } from '../utils/api';

class TeamList extends Component {
  constructor(props) {
    super(props);
    this.state = {teams: []}
  }

  componentDidMount() {
    fetchTeams().then(
      result => this.setState({teams: result.data.teams.values})
    );
  }

  render() {
    return (
      <div className="teams-listing">
        <ul>
          {this.state.teams.map(team => (
            <Team key={team.id} team={team}/>
          ))}
      </ul>
    </div>
    )
  }

}

export default TeamList
