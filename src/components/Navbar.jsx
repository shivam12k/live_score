import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, IconButton, SwipeableDrawer } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from '@material-ui/icons/GitHub';
import SvgIcon from '@material-ui/core/SvgIcon';

const Navbar = () => {
    const [drawer, setdrawer] = useState(false)

    const handleClick = () => {
        setdrawer(true);
    }
    const handleClose = () => {
        setdrawer(false);
    }
    return (
        <AppBar position="static">
            <Toolbar >
                <SwipeableDrawer open={drawer} onClose={handleClose} >
                    <div className="c1">
                        <span className="text">handcrafted by <br />
                            <a href="https://www.linkedin.com/in/shivam-24aa2b1a6/">
                             <span className="name">Shivam</span>   </a>
                        </span>
                    </div>

                    <div className="c2 text" >
                        <GitHubIcon style={{ fontSize: 50 }} /> <br />
                        <span className="text">
                            <a href="https://github.com/shivam12k"> gitHub profile </a></span>
                    </div>
                    <div className="c3"><span className="text">
                        <a href="https://github.com/shivam12k/live_score">
                            source code</a></span></div>
                </SwipeableDrawer>
                <IconButton>
                    <MenuIcon onClick={handleClick} />
                </IconButton>

                <Typography variant="h6" >
                    Live Score
        </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar