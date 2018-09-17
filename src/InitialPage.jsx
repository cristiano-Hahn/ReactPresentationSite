import React, { Component } from 'react'
import Navbar from './pageComponents/TopNavbar'
import InitialApresentation from './pageComponents/InitialApresentation'
import Skills from './pageComponents/Skills'


export default class InitialPage extends Component {
    render() {
        return (
            <div>
                {/*<Navbar title='Título da apresentação' />
                <div style={{height:'30px'}}></div>
                */}
                    
                <InitialApresentation/>
                <Skills/>
            </div>
        )
    }
}
