import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <img src="https://octodex.github.com/ui/logo.png" alt="gitHubPhoto" />
        <div class="nav-top">
          <a href="#">RSS</a>
          <a href="#">FAQ</a>
          <a href="#">Back to GitHub</a>
        </div>
      </header>
    )
  }
}

export default Header
