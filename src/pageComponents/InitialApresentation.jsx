import React, { Component } from 'react'
import { Parallax } from 'react-materialize'

import img from '../img/programmer-backgroud.png'

export default class InitialApresentation extends Component {


  componentDidMount() {
    document.getElementsByClassName('parallax-container')[0].style.height = '250px'
  }

  render() {
    const paralaxStyle = {

      opacity:0.8,
      filter: 'blur(2px)'

    }

    return (
      <div >
        <div style={paralaxStyle}>
          <Parallax imageSrc={img} />
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Competências</h2>
            <p className="grey-text text-darken-3 lighten-3">
              Uma breve descrição das competências
            </p>
          </div>
        </div>
      </div>
    )
  }
}
