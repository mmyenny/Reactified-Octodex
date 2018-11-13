import React, { Component } from 'react'

class Octocat extends Component {
  render() {
    return (
      <li>
        <img src={this.props.image} alt="photo1" />
        <div class="cat-image-author">
          <section>{this.props.number}</section>
          <p>
            <span>
              the <em>{this.props.name}</em> by
            </span>
            <img src={this.props.authorImage} alt="author-icon" />
          </p>
        </div>
      </li>
    )
  }
}

export default Octocat
