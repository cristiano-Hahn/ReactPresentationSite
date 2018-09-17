import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Card, CardTitle } from 'react-materialize'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logoRadStudo from '../img/rad-studio-logo.png'



const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'cover',
  },
};

class Skills extends Component {
  render() {

    return (
      <div style={{maxWidth:'200px', maxHeight:'200px'}}>
        <Card className='small'
          header={<CardTitle image={logoRadStudo}>Rad Studio</CardTitle>}
          actions={[<a href='#'>Saber mais</a>]}>
          Embarcadero rad Studio (Delphi)
        </Card>
      </div>
    )
  }
}

export default Skills;