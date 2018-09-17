
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react'

const styles = {
	root: {
		flexGrow: 1,
		backgroundColor:' #1d1d1d'
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
};

class Navbar extends Component {

	render() {
		const { classes, title } = this.props
		return (
			<AppBar className={classes.root} position="static">
				<Toolbar>
					<Typography className={classes.grow} variant="title" color="inherit" >
						{title}
					</Typography>
				</Toolbar>
			</AppBar>
		)
	}
}

export default withStyles(styles)(Navbar)
