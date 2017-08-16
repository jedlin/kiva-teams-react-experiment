import React, { Component } from 'react'

class PageHeading extends Component {

  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div>
        <h1 className="page-title">
          {this.props.headline}
        </h1>

        <h2>
          {this.props.subhead}
        </h2>

        {this.props.text}
      </div>
    )
  }
}

export default PageHeading
