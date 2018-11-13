import React, { Component } from 'react'
import Octocat from './Octocat'
import { TestScheduler } from 'rx'

class MainContent extends Component {
  render() {
    let octocats = [
      {
        image: 'https://octodex.github.com/images/catstello.png',
        number: '#130',
        name: 'Catsello',
        authorImage: 'https://github.com/tonyjaramillo.png'
      },
      {
        image: 'https://octodex.github.com/images/privateinvestocat.jpg',
        number: '#122',
        name: 'Private Investocat',
        authorImage: 'https://github.com/jeejkang.png'
      },
      {
        image: 'https://octodex.github.com/images/filmtocat.png',
        number: '#123',
        name: 'Filmtocat',
        authorImage: 'https://github.com/jeejkang.png'
      },
      {
        image: 'https://octodex.github.com/images/octoliberty.png',
        number: '#104',
        name: 'OctoLiberty',
        authorImage: 'https://github.com/tonyjaramillo.png'
      },
      {
        image: 'https://octodex.github.com/images/daftpunktocat-guy.gif',
        number: '#101',
        name: 'Daftpunktocat',
        authorImage: 'https://github.com/jeejkang.png'
      },
      {
        image: 'https://octodex.github.com/images/Mardigrastocat.png',
        number: '#98',
        name: 'Mardigrastocat',
        authorImage: 'https://github.com/jeejkang.png'
      },
      {
        image: 'https://octodex.github.com/images/spidertocat.png',
        number: '#89',
        name: 'Spidertocat',
        authorImage: 'https://github.com/jeejkang.png'
      },
      {
        image: 'https://octodex.github.com/images/stormtroopocat.png',
        number: '#86',
        name: 'Stormtroopocat',
        authorImage: 'https://github.com/jeejkang.png'
      },
      {
        image: 'https://octodex.github.com/images/murakamicat.png',
        number: '#83',
        name: 'Murakamicat',
        authorImage: 'https://github.com/billyroh.png'
      },
      {
        image: 'https://octodex.github.com/images/pacman-ghosts.jpg',
        number: '#29',
        name: 'Blinktocat, Pinktocat, Inktocat, and Clyde',
        authorImage: 'https://github.com/cameronmcefee.png'
      },
      {
        image:
          'https://octodex.github.com/images/total-eclipse-of-the-octocat.jpg',
        number: '#30',
        name: 'Total Eclipse of the Octocat',
        authorImage: 'https://github.com/cameronmcefee.png'
      },
      {
        image: 'https://octodex.github.com/images/cherryontop-o-cat.png',
        number: '#34',
        name: 'Cherryontop-o-cat',
        authorImage: 'https://github.com/cameronmcefee.png'
      },
      {
        image: 'https://octodex.github.com/images/hula_loop_octodex03.gif',
        number: '#141',
        name: 'Hulatocat',
        authorImage: 'https://github.com/cameronmcefee.png'
      },
      {
        image: 'https://octodex.github.com/images/class-act.png',
        number: '#2',
        name: 'Class Act',
        authorImage: 'https://github.com/cameronmcefee.png'
      }
    ]

    return (
      <div>
        <ul>
          {octocats.map(octocat => (
            <Octocat
              image={octocat.image}
              number={octocat.number}
              name={octocat.name}
              authorImage={octocat.authorImage}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default MainContent

// TestScheduler
