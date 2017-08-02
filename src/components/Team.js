import React, { Component } from 'react'

class Team extends Component {


  render() {
    const anonTeamImgUrl = "https://www-kiva-org.global.ssl.fastly.net/img/entity/team_s135.png";

    return (
      <li>
        <article className="row">
          <div className="team-image small-5 small-centered medium-3 medium-uncentered columns">
            <a className="" href={'https://www.kiva.org/team/'+this.props.team.teamPublicId}>
              <img src={this.props.team.image ? this.props.team.image.url : anonTeamImgUrl}
                alt={this.props.team.name} title={this.props.team.name} width="135" height="135"
              />
            </a>
          </div>
          <div className="team-desc medium-9 columns">
            <h2 className=""><a href={"https://www.kiva.org/team/" + this.props.team.teamPublicId} title={this.props.team.name}>{this.props.team.name}</a></h2>
            <div className="description">
              <div className="stats small-text">
                <span className="memberCount">{this.props.team.lenderCount}</span> members have lent <span className="lentAmount">${this.props.team.lentAmount}</span> in <span className="loanCount">{this.props.team.loanCount}</span> loans
              </div>
              <div className="info small-text">
                <span className="location">{this.props.team.whereabouts}</span>
                <span className="category">Category: {this.props.team.category}</span>
                <span className="createdDate">Team since: {this.props.team.createdDate}</span>
              </div>
              <div className="loanBecause">We loan because: {this.props.team.loanBecause}</div>
            </div>
            <div className="join">
              <a className="button setting" href={"https://www.kiva.org/teams/join/process?team_id=" + this.props.team.id} title="Join team">Join Team</a>
            </div>
          </div>
        </article>
      </li>
    )
  }

}

export default Team
